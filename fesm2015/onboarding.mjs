import { __awaiter, __rest } from 'tslib';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import * as i0 from '@angular/core';
import { EventEmitter, Injectable, Inject, Component, Input, Output, HostListener, Directive, ViewChild, NgModule, Optional, SkipSelf, ElementRef, PLATFORM_ID } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, throwError } from 'rxjs';
import * as i2 from '@angular/router';
import { RouterModule } from '@angular/router';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import * as i10$1 from '@angular/cdk/drag-drop';
import { moveItemInArray, transferArrayItem, DragDropModule } from '@angular/cdk/drag-drop';
import * as i1$2 from '@angular/forms';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1$1 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import * as i8 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i12 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i7 from 'ngx-intl-tel-input';
import { CountryISO, PhoneNumberFormat, NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import * as i7$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1$3 from '@angular/common';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import * as i6 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i5$2 from '@nicky-lenaers/ngx-scroll-to';
import { ScrollToModule as ScrollToModule$1 } from '@nicky-lenaers/ngx-scroll-to';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import * as i4 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i5 from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as i5$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i10 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i11 from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import * as i12$1 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i13 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as i19 from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { CdkTableModule } from '@angular/cdk/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import * as i3 from '@angular/material/bottom-sheet';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import * as json2csv from 'json2csv';
import * as moment from 'moment';
import * as i2$1 from 'ngx-table';
import { CellsComponentList, CoreMatTable, TableModule } from 'ngx-table';
import { saveAs } from 'file-saver';
import { MatTabsModule } from '@angular/material/tabs';

const downLoadFile = (x, type, filename) => {
    const newBlob = new Blob([x], { type: 'binary' });
    const nativator = window.navigator;
    // IE doesn't allow using a blob object directly as link href
    // instead it is necessary to use msSaveOrOpenBlob
    if (nativator && nativator.msSaveOrOpenBlob) {
        nativator.msSaveOrOpenBlob(newBlob);
        return;
    }
    // For other browsers:
    // Create a link pointing to the ObjectURL containing the blob.
    const data = window.URL.createObjectURL(newBlob);
    const link = document.createElement('a');
    link.href = data;
    link.download = filename;
    // this is necessary as link.click() does not work on the latest firefox
    link.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    }));
    setTimeout(() => {
        // For Firefox it is necessary to delay revoking the ObjectURL
        window.URL.revokeObjectURL(data);
        link.remove();
    }, 100);
};

class OnboardingService {
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
        this.lang = new BehaviorSubject('');
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
                    this.lang.next(this.locale);
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
                }, () => {
                    resolve(false);
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
                }, () => {
                    resolve(false);
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
    getBuffer(endpoint) {
        return this.http.get(endpoint, { responseType: 'arraybuffer' });
    }
    getProfil(id) {
        return __awaiter(this, void 0, void 0, function* () {
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
    getAllOnboarding() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.http.get(`${this.endpoint}/onboarding`, {
                headers: this.header
            }).subscribe((data) => {
                this.onboarding.next(data);
                console.log('-------------data-------------', data);
            }, err => {
                this.onboarding.next([]);
            });
        });
    }
    downloadAttachment(url, contentType, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `${this.endpoint.split('onboarding')[0]}cases/getfile/sf?path=${url}&token=${this.mediaToken}`;
            this.getBuffer(path)
                .subscribe(response => downLoadFile(response, (contentType), name));
        });
    }
    // Create collab
    createContact(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const options = {
                    headers: this.header
                };
                this.http.post(`${this.endpoint}/contact`, data, options)
                    .subscribe((data) => {
                    resolve({ data, success: true });
                }, error => resolve({ error, success: false }));
            });
        });
    }
}
OnboardingService.ɵfac = function OnboardingService_Factory(t) { return new (t || OnboardingService)(i0.ɵɵinject('__NgxOnboarding__'), i0.ɵɵinject(i1.HttpClient)); };
OnboardingService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OnboardingService, factory: OnboardingService.ɵfac });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingService, [{
            type: Injectable
        }], function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: ['__NgxOnboarding__']
                    }] }, { type: i1.HttpClient }];
    }, null);
})();

// @ts-ignore
class OnboardingComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
        if (this.router.url.indexOf('onboarding') > -1) {
            this.service.mainPath = this.router.url.split('/onboarding')[0] + '/onboarding';
            console.log('--------------------------', this.router.url);
            if (this.router.url === '/onboarding') {
                this.router.navigate(['onboarding/requests']);
            }
        }
    }
}
OnboardingComponent.ɵfac = function OnboardingComponent_Factory(t) { return new (t || OnboardingComponent)(i0.ɵɵdirectiveInject(OnboardingService), i0.ɵɵdirectiveInject(i2.Router)); };
OnboardingComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnboardingComponent, selectors: [["ngx-onboarding"]], decls: 1, vars: 0, template: function OnboardingComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "router-outlet");
        }
    }, directives: [i2.RouterOutlet], styles: [".main[_ngcontent-%COMP%]{background-color:red!important}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingComponent, [{
            type: Component,
            args: [{ selector: 'ngx-onboarding', template: "<router-outlet></router-outlet>", styles: [".main{background-color:red!important}\n"] }]
        }], function () { return [{ type: OnboardingService }, { type: i2.Router }]; }, null);
})();

class DialogCreateTemplateComponent {
    constructor(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.tags = [];
        this.profil = {
            Name: '',
            Tags: ''
        };
    }
    ngOnInit() {
        var _a;
        this.tags = this.data.tags;
        this.profil = ((_a = this.data) === null || _a === void 0 ? void 0 : _a.profil) || this.profil;
    }
    onSelect(type) {
        this.dialogRef.close(type);
    }
    createProfil() {
        if (!this.disabled()) {
            this.dialogRef.close(this.profil);
        }
    }
    close() {
        this.dialogRef.close(false);
    }
    disabled() {
        return this.profil.Name === "";
    }
}
DialogCreateTemplateComponent.ɵfac = function DialogCreateTemplateComponent_Factory(t) { return new (t || DialogCreateTemplateComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1$1.MatDialogRef), i0.ɵɵdirectiveInject(OnboardingService)); };
DialogCreateTemplateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogCreateTemplateComponent, selectors: [["lib-dialog-create-template"]], decls: 12, vars: 2, consts: [[1, "title"], ["appearance", "outline", 1, "full-width"], ["type", "text", "matInput", "", "placeholder", "Ex. Manager", 3, "ngModel", "ngModelChange"], [1, "action-content"], ["mat-raised-button", "", 1, "create-profil", 3, "disabled", "click"], ["mat-raised-button", "", 1, "abandon-profil", 3, "click"]], template: function DialogCreateTemplateComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-dialog-content")(1, "h3", 0);
            i0.ɵɵtext(2, "Cr\u00E9ation d\u2019un nouveau profil");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-form-field", 1)(4, "mat-label");
            i0.ɵɵtext(5, "Nom de votre nouveau profil");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "input", 2);
            i0.ɵɵlistener("ngModelChange", function DialogCreateTemplateComponent_Template_input_ngModelChange_6_listener($event) { return ctx.profil.Name = $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 3)(8, "button", 4);
            i0.ɵɵlistener("click", function DialogCreateTemplateComponent_Template_button_click_8_listener() { return ctx.createProfil(); });
            i0.ɵɵtext(9, " Cr\u00E9er profil ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 5);
            i0.ɵɵlistener("click", function DialogCreateTemplateComponent_Template_button_click_10_listener() { return ctx.close(); });
            i0.ɵɵtext(11, " Abandonner ");
            i0.ɵɵelementEnd()()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngModel", ctx.profil.Name);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.disabled());
        }
    }, directives: [i1$1.MatDialogContent, i8.MatFormField, i8.MatLabel, i12.MatInput, i1$2.DefaultValueAccessor, i1$2.NgControlStatus, i1$2.NgModel, i7.NativeElementInjectorDirective, i7$1.MatButton], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:555px;min-width:555px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content[_ngcontent-%COMP%]   .abandon-profil[_ngcontent-%COMP%]{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px}mat-dialog-content[_ngcontent-%COMP%]   .create-profil[_ngcontent-%COMP%]{background-color:#171f26;border:1px solid #171f26;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, mat-dialog-content[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{opacity:.5}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogCreateTemplateComponent, [{
            type: Component,
            args: [{ selector: 'lib-dialog-create-template', template: "<mat-dialog-content>\r\n  <h3 class=\"title\">Cr\u00E9ation d\u2019un nouveau profil</h3>\r\n  <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n    <mat-label>Nom de votre nouveau profil</mat-label>\r\n    <input type=\"text\" matInput [(ngModel)]=\"profil.Name\" placeholder=\"Ex. Manager\" />\r\n  </mat-form-field>\r\n  <!-- <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n    <mat-label>Description</mat-label>\r\n    <textarea type=\"text\" matInput [(ngModel)]=\"Description\" rows=\"4\" placeholder=\"\"></textarea>\r\n  </mat-form-field> -->\r\n  <!-- <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n    <mat-label>Tags</mat-label>\r\n    <mat-select [(ngModel)]=\"profil.Tags\" required>\r\n      <mat-option *ngFor=\"let tag of tags\" [value]=\"tag\">{{ tag }}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field> -->\r\n  <div class=\"action-content\">\r\n    <button [disabled]=\"disabled()\" class=\"create-profil\" (click)=\"createProfil()\" mat-raised-button>\r\n      Cr\u00E9er profil\r\n    </button>\r\n    <button class=\"abandon-profil\" (click)=\"close()\" mat-raised-button>\r\n      Abandonner\r\n    </button>\r\n  </div>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:555px;min-width:555px}mat-dialog-content mat-form-field{margin-bottom:10px}mat-dialog-content h3{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content .abandon-profil{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px}mat-dialog-content .create-profil{background-color:#171f26;border:1px solid #171f26;color:#fff}mat-dialog-content .action-content{margin-bottom:10px}mat-dialog-content button:disabled,mat-dialog-content button[disabled]{opacity:.5}\n"] }]
        }], function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }, { type: i1$1.MatDialogRef }, { type: OnboardingService }];
    }, null);
})();

class ExitConfirmComponent {
    constructor(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
    }
    ngOnInit() {
    }
    confirm() {
        this.dialogRef.close(true);
        this.service.canExit$.next(true);
    }
    cancel() {
        this.dialogRef.close(false);
        this.service.canExit$.next(false);
    }
}
ExitConfirmComponent.ɵfac = function ExitConfirmComponent_Factory(t) { return new (t || ExitConfirmComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1$1.MatDialogRef), i0.ɵɵdirectiveInject(OnboardingService)); };
ExitConfirmComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExitConfirmComponent, selectors: [["lib-exit-confirm"]], decls: 9, vars: 0, consts: [[1, "header"], ["mat-button", "", 1, "nowboard-btn", 2, "margin-top", "10px", 3, "click"], ["mat-button", "", 1, "cancel_btn", 3, "click"]], template: function ExitConfirmComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-dialog-content")(1, "div", 0);
            i0.ɵɵtext(2, " Attention ! ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4, "Toutes vos donn\u00E9es seront perdues, \u00EAtes-vous certain de vouloir continuer ?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 1);
            i0.ɵɵlistener("click", function ExitConfirmComponent_Template_button_click_5_listener() { return ctx.confirm(); });
            i0.ɵɵtext(6, " Confirmer ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 2);
            i0.ɵɵlistener("click", function ExitConfirmComponent_Template_button_click_7_listener() { return ctx.cancel(); });
            i0.ɵɵtext(8, " Annuler ");
            i0.ɵɵelementEnd()();
        }
    }, directives: [i1$1.MatDialogContent, i7$1.MatButton], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column!important;justify-content:center;align-items:center}mat-dialog-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{color:#171f26;font: 900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .nowboard-btn[_ngcontent-%COMP%]{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#171f26;font: 18px/24px nexa,Text;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .cancel_btn[_ngcontent-%COMP%]{background-color:transparent!important;margin-top:10px}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExitConfirmComponent, [{
            type: Component,
            args: [{ selector: 'lib-exit-confirm', template: "<mat-dialog-content>\r\n    <div class=\"header\">\r\n        Attention !\r\n    </div>\r\n    <p>Toutes vos donn\u00E9es seront perdues, \u00EAtes-vous certain de vouloir continuer ?</p>\r\n    <button (click)=\"confirm()\" mat-button class=\"nowboard-btn\" style=\"margin-top: 10px\">\r\n        Confirmer\r\n    </button>\r\n\r\n    <button (click)=\"cancel()\" mat-button class=\"cancel_btn\">\r\n        Annuler\r\n    </button>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column!important;justify-content:center;align-items:center}mat-dialog-content .header{color:#171f26;font: 900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content .nowboard-btn{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}mat-dialog-content p{color:#171f26;font: 18px/24px nexa,Text;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content .cancel_btn{background-color:transparent!important;margin-top:10px}mat-dialog-content button{width:50%}\n"] }]
        }], function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }, { type: i1$1.MatDialogRef }, { type: OnboardingService }];
    }, null);
})();

function TypeComponent_button_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 1);
        i0.ɵɵlistener("click", function TypeComponent_button_1_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onSelect(item_r1.value); });
        i0.ɵɵtext(1);
        i0.ɵɵelementStart(2, "mat-icon");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const item_r1 = ctx.$implicit;
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵclassMap(ctx_r0.selectedType === item_r1.value ? "active" : "");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", item_r1.label, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(item_r1.icon);
    }
}
class TypeComponent {
    constructor(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.typeList = [{
                label: 'Text Court',
                icon: 'list_alt',
                value: 'text'
            },
            {
                label: 'Text Long',
                icon: 'description',
                value: 'textarea'
            },
            {
                label: 'Options à choix unique',
                icon: 'radio_button_checked',
                value: 'radio'
            },
            {
                label: 'Bouton On/Off',
                icon: 'check_box_outline_blank',
                value: 'toggle'
            },
            {
                label: 'Checkbox',
                icon: 'check_box',
                value: 'checkbox'
            },
            {
                label: 'Checkbox multiple',
                icon: 'check_box',
                value: 'checkbox_multiple'
            },
            {
                label: 'Liste déroulante',
                icon: 'keyboard_arrow_down',
                value: 'select'
            },
            {
                label: 'Email',
                icon: 'mail',
                value: 'email'
            },
            {
                label: 'Mot de passe',
                icon: 'lock',
                value: 'password'
            },
            {
                label: 'Téléphone',
                icon: 'phone',
                value: 'tel'
            },
            {
                label: 'Date',
                icon: 'date_range',
                value: 'date'
            },
            {
                label: 'Aucun',
                icon: 'square',
                value: 'none'
            }];
        this.selectedType = "";
        this.selectedType = this.data.selectedType;
    }
    ngOnInit() {
    }
    onSelect(type) {
        this.dialogRef.close(type);
    }
}
TypeComponent.ɵfac = function TypeComponent_Factory(t) { return new (t || TypeComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1$1.MatDialogRef), i0.ɵɵdirectiveInject(OnboardingService)); };
TypeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TypeComponent, selectors: [["lib-type"]], decls: 2, vars: 1, consts: [["mat-button", "", "class", "type-btn", "style", "margin-top: 10px", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "type-btn", 2, "margin-top", "10px", 3, "click"]], template: function TypeComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-dialog-content");
            i0.ɵɵtemplate(1, TypeComponent_button_1_Template, 4, 4, "button", 0);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.typeList);
        }
    }, directives: [i1$1.MatDialogContent, i1$3.NgForOf, i7$1.MatButton, i6.MatIcon], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]{background:#E5E8EE;border-radius:4px;margin:5px;height:48px}mat-dialog-content[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]:hover, mat-dialog-content[_ngcontent-%COMP%]   .type-btn.active[_ngcontent-%COMP%]{background-color:transparent;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab);color:#fff}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TypeComponent, [{
            type: Component,
            args: [{ selector: 'lib-type', template: "<mat-dialog-content>\r\n  <button *ngFor=\"let item of typeList\" (click)=\"onSelect(item.value)\" mat-button class=\"type-btn\"\r\n    [class]=\"selectedType === item.value ? 'active' : ''\" style=\"margin-top: 10px\">\r\n    {{ item.label }} <mat-icon>{{ item.icon }}</mat-icon>\r\n  </button>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content .type-btn{background:#E5E8EE;border-radius:4px;margin:5px;height:48px}mat-dialog-content .type-btn:hover,mat-dialog-content .type-btn.active{background-color:transparent;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab);color:#fff}\n"] }]
        }], function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }, { type: i1$1.MatDialogRef }, { type: OnboardingService }];
    }, null);
})();

class LoadingPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingPageComponent.ɵfac = function LoadingPageComponent_Factory(t) { return new (t || LoadingPageComponent)(); };
LoadingPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoadingPageComponent, selectors: [["lib-loading-page"]], decls: 64, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "30px", "height", "30px", "viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid", 2, "display", "block"], ["transform", "rotate(0 50 50)"], ["x", "47.5", "y", "25", "rx", "2.5", "ry", "3.7", "width", "5", "height", "10", "fill", "#971c84"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.9523809523809523s", "repeatCount", "indefinite"], ["transform", "rotate(17.142857142857142 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.9047619047619048s", "repeatCount", "indefinite"], ["transform", "rotate(34.285714285714285 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.8571428571428571s", "repeatCount", "indefinite"], ["transform", "rotate(51.42857142857143 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.8095238095238095s", "repeatCount", "indefinite"], ["transform", "rotate(68.57142857142857 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.7619047619047619s", "repeatCount", "indefinite"], ["transform", "rotate(85.71428571428571 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.7142857142857143s", "repeatCount", "indefinite"], ["transform", "rotate(102.85714285714286 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.6666666666666666s", "repeatCount", "indefinite"], ["transform", "rotate(120 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.6190476190476191s", "repeatCount", "indefinite"], ["transform", "rotate(137.14285714285714 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.5714285714285714s", "repeatCount", "indefinite"], ["transform", "rotate(154.28571428571428 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.5238095238095238s", "repeatCount", "indefinite"], ["transform", "rotate(171.42857142857142 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.47619047619047616s", "repeatCount", "indefinite"], ["transform", "rotate(188.57142857142858 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.42857142857142855s", "repeatCount", "indefinite"], ["transform", "rotate(205.71428571428572 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.38095238095238093s", "repeatCount", "indefinite"], ["transform", "rotate(222.85714285714286 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.3333333333333333s", "repeatCount", "indefinite"], ["transform", "rotate(240 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.2857142857142857s", "repeatCount", "indefinite"], ["transform", "rotate(257.14285714285717 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.23809523809523808s", "repeatCount", "indefinite"], ["transform", "rotate(274.2857142857143 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.19047619047619047s", "repeatCount", "indefinite"], ["transform", "rotate(291.42857142857144 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.14285714285714285s", "repeatCount", "indefinite"], ["transform", "rotate(308.57142857142856 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.09523809523809523s", "repeatCount", "indefinite"], ["transform", "rotate(325.7142857142857 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "-0.047619047619047616s", "repeatCount", "indefinite"], ["transform", "rotate(342.85714285714283 50 50)"], ["attributeName", "opacity", "values", "1;0", "keyTimes", "0;1", "dur", "1s", "begin", "0s", "repeatCount", "indefinite"]], template: function LoadingPageComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(0, "svg", 0)(1, "g", 1)(2, "rect", 2);
            i0.ɵɵelement(3, "animate", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "g", 4)(5, "rect", 2);
            i0.ɵɵelement(6, "animate", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "g", 6)(8, "rect", 2);
            i0.ɵɵelement(9, "animate", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "g", 8)(11, "rect", 2);
            i0.ɵɵelement(12, "animate", 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "g", 10)(14, "rect", 2);
            i0.ɵɵelement(15, "animate", 11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "g", 12)(17, "rect", 2);
            i0.ɵɵelement(18, "animate", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "g", 14)(20, "rect", 2);
            i0.ɵɵelement(21, "animate", 15);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "g", 16)(23, "rect", 2);
            i0.ɵɵelement(24, "animate", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "g", 18)(26, "rect", 2);
            i0.ɵɵelement(27, "animate", 19);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "g", 20)(29, "rect", 2);
            i0.ɵɵelement(30, "animate", 21);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "g", 22)(32, "rect", 2);
            i0.ɵɵelement(33, "animate", 23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "g", 24)(35, "rect", 2);
            i0.ɵɵelement(36, "animate", 25);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "g", 26)(38, "rect", 2);
            i0.ɵɵelement(39, "animate", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "g", 28)(41, "rect", 2);
            i0.ɵɵelement(42, "animate", 29);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(43, "g", 30)(44, "rect", 2);
            i0.ɵɵelement(45, "animate", 31);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(46, "g", 32)(47, "rect", 2);
            i0.ɵɵelement(48, "animate", 33);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "g", 34)(50, "rect", 2);
            i0.ɵɵelement(51, "animate", 35);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(52, "g", 36)(53, "rect", 2);
            i0.ɵɵelement(54, "animate", 37);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(55, "g", 38)(56, "rect", 2);
            i0.ɵɵelement(57, "animate", 39);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(58, "g", 40)(59, "rect", 2);
            i0.ɵɵelement(60, "animate", 41);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(61, "g", 42)(62, "rect", 2);
            i0.ɵɵelement(63, "animate", 43);
            i0.ɵɵelementEnd()()();
        }
    }, styles: [".container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100vh;width:100vw;background-color:#00000068;z-index:999;position:fixed;top:0;left:0}.loader[_ngcontent-%COMP%]{max-width:15rem;width:100px;height:auto;stroke-linecap:round}circle[_ngcontent-%COMP%]{fill:none;stroke-width:3.5;animation-name:preloader;animation-duration:3s;animation-iteration-count:infinite;animation-timing-function:ease-in-out;transform-origin:170px 170px;will-change:transform}circle[_ngcontent-%COMP%]:nth-of-type(1){stroke-dasharray:550px}circle[_ngcontent-%COMP%]:nth-of-type(2){stroke-dasharray:500px}circle[_ngcontent-%COMP%]:nth-of-type(3){stroke-dasharray:450px}circle[_ngcontent-%COMP%]:nth-of-type(4){stroke-dasharray:300px}circle[_ngcontent-%COMP%]:nth-of-type(1){animation-delay:-.15s}circle[_ngcontent-%COMP%]:nth-of-type(2){animation-delay:-.3s}circle[_ngcontent-%COMP%]:nth-of-type(3){animation-delay:-.45s}circle[_ngcontent-%COMP%]:nth-of-type(4){animation-delay:-.6s}@keyframes preloader{50%{transform:rotate(360deg)}}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingPageComponent, [{
            type: Component,
            args: [{ selector: 'lib-loading-page', template: "<!-- <div class=\"container\">\n  <svg class=\"loader\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 340 340\">\n    <circle cx=\"170\" cy=\"170\" r=\"160\" stroke=\"#9d107d\" />\n    <circle cx=\"170\" cy=\"170\" r=\"135\" stroke=\"#4862ab\" />\n    <circle cx=\"170\" cy=\"170\" r=\"110\" stroke=\"#9d107d\" />\n    <circle cx=\"170\" cy=\"170\" r=\"85\" stroke=\"#4862ab\" />\n  </svg>\n</div> -->\n\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"display:block;\" width=\"30px\"\n  height=\"30px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\n  <g transform=\"rotate(0 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9523809523809523s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(17.142857142857142 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9047619047619048s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(34.285714285714285 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8571428571428571s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(51.42857142857143 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8095238095238095s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(68.57142857142857 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7619047619047619s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(85.71428571428571 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7142857142857143s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(102.85714285714286 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6666666666666666s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(120 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6190476190476191s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(137.14285714285714 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5714285714285714s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(154.28571428571428 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5238095238095238s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(171.42857142857142 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.47619047619047616s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(188.57142857142858 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.42857142857142855s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(205.71428571428572 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.38095238095238093s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(222.85714285714286 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3333333333333333s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(240 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.2857142857142857s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(257.14285714285717 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.23809523809523808s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(274.2857142857143 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.19047619047619047s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(291.42857142857144 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.14285714285714285s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(308.57142857142856 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.09523809523809523s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(325.7142857142857 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.047619047619047616s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(342.85714285714283 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\">\n      </animate>\n    </rect>\n  </g>\n</svg>", styles: [".container{display:flex;align-items:center;justify-content:center;height:100vh;width:100vw;background-color:#00000068;z-index:999;position:fixed;top:0;left:0}.loader{max-width:15rem;width:100px;height:auto;stroke-linecap:round}circle{fill:none;stroke-width:3.5;animation-name:preloader;animation-duration:3s;animation-iteration-count:infinite;animation-timing-function:ease-in-out;transform-origin:170px 170px;will-change:transform}circle:nth-of-type(1){stroke-dasharray:550px}circle:nth-of-type(2){stroke-dasharray:500px}circle:nth-of-type(3){stroke-dasharray:450px}circle:nth-of-type(4){stroke-dasharray:300px}circle:nth-of-type(1){animation-delay:-.15s}circle:nth-of-type(2){animation-delay:-.3s}circle:nth-of-type(3){animation-delay:-.45s}circle:nth-of-type(4){animation-delay:-.6s}@keyframes preloader{50%{transform:rotate(360deg)}}\n"] }]
        }], function () { return []; }, null);
})();

function SubTemplateProfileComponent_div_0_button_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 14);
        i0.ɵɵlistener("click", function SubTemplateProfileComponent_div_0_button_4_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); $event.stopPropagation(); return ctx_r11.editBLock($event); });
        i0.ɵɵelementStart(1, "mat-icon", 3);
        i0.ɵɵtext(2, "info_outlined");
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("ngStyle", ctx_r1.onChangePosition(ctx_r1.field.type));
    }
}
const _c0$4 = function () { return { standalone: true }; };
const _c1$2 = function () { return { display: "inine-block" }; };
function SubTemplateProfileComponent_div_0_div_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 15)(1, "span");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-slide-toggle", 16);
        i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_6_Template_mat_slide_toggle_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.field.defaultValue = $event; });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r2.field.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r2.field.defaultValue)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0$4))("ngStyle", ctx_r2.field.selector && i0.ɵɵpureFunction0(5, _c1$2));
    }
}
function SubTemplateProfileComponent_div_0_div_7_mat_error_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵtext(1, "Le t\u00E9l\u00E9phone est invalide");
        i0.ɵɵelementEnd();
    }
}
function SubTemplateProfileComponent_div_0_div_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 17)(1, "mat-label", 18);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ngx-intl-tel-input", 19);
        i0.ɵɵlistener("input", function SubTemplateProfileComponent_div_0_div_7_Template_ngx_intl_tel_input_input_3_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.checkPhone(ctx_r16.field.value); })("ngModelChange", function SubTemplateProfileComponent_div_0_div_7_Template_ngx_intl_tel_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.field.value = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_7_mat_error_4_Template, 2, 0, "mat-error", 20);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r3.field.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cssClass", "input-phone")("preferredCountries", ctx_r3.preferredCountries)("enableAutoCountrySelect", false)("enablePlaceholder", true)("customPlaceholder", "Phone")("selectFirstCountry", false)("selectedCountryISO", ctx_r3.flag(ctx_r3.field.value))("maxLength", 15)("inputId", ctx_r3.field.key)("phoneValidation", true)("separateDialCode", ctx_r3.separateDialCode)("numberFormat", ctx_r3.PhoneNumberFormat.National)("ngModelOptions", i0.ɵɵpureFunction0(16, _c0$4))("ngModel", ctx_r3.field.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r3.invalideValue);
    }
}
function SubTemplateProfileComponent_div_0_div_8_mat_select_3_mat_option_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 25);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const select_r21 = ctx.$implicit;
        i0.ɵɵproperty("value", select_r21.value);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", select_r21.value, " ");
    }
}
function SubTemplateProfileComponent_div_0_div_8_mat_select_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r23 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-select", 23);
        i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_8_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(3); return ctx_r22.field.selector.value = $event; });
        i0.ɵɵtemplate(1, SubTemplateProfileComponent_div_0_div_8_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 24);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r19 = i0.ɵɵnextContext(3);
        i0.ɵɵproperty("ngModel", ctx_r19.field.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0$4));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r19.field.selector.defaultValue);
    }
}
function SubTemplateProfileComponent_div_0_div_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r25 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 21)(1, "mat-checkbox", 16);
        i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_8_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.field.value = $event; });
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, SubTemplateProfileComponent_div_0_div_8_mat_select_3_Template, 2, 4, "mat-select", 22);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r4 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r4.field.value)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0$4))("ngStyle", ctx_r4.field.selector && i0.ɵɵpureFunction0(6, _c1$2));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r4.field.label, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r4.field.selector);
    }
}
function SubTemplateProfileComponent_div_0_div_9_mat_checkbox_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r29 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-checkbox", 29);
        i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_9_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r29); const opt_r27 = restoredCtx.$implicit; return opt_r27.checked = $event; });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const opt_r27 = ctx.$implicit;
        i0.ɵɵproperty("checked", opt_r27.checked)("ngModel", opt_r27.checked)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0$4));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", opt_r27.value, " ");
    }
}
function SubTemplateProfileComponent_div_0_div_9_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 26)(1, "label");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 27);
        i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_9_mat_checkbox_4_Template, 2, 5, "mat-checkbox", 28);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r5 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r5.field.label);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx_r5.field.defaultValue);
    }
}
function SubTemplateProfileComponent_div_0_div_10_mat_radio_button_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-radio-button", 33);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const opt_r31 = ctx.$implicit;
        i0.ɵɵproperty("value", opt_r31.value);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("", opt_r31.value, " ");
    }
}
function SubTemplateProfileComponent_div_0_div_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r33 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 21)(1, "label", 30);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-radio-group", 31);
        i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_10_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.field.value = $event; });
        i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_10_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 32);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r6 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx_r6.field.label, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r6.field.value)("required", ctx_r6.field.isMandatory);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r6.field.defaultValue);
    }
}
function SubTemplateProfileComponent_div_0_div_11_mat_option_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 25);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const opt_r35 = ctx.$implicit;
        i0.ɵɵproperty("value", opt_r35.value);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(opt_r35.value);
    }
}
function SubTemplateProfileComponent_div_0_div_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r37 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 34)(1, "mat-form-field", 35)(2, "mat-label");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-select", 36);
        i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_11_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.field.value = $event; });
        i0.ɵɵtemplate(5, SubTemplateProfileComponent_div_0_div_11_mat_option_5_Template, 2, 2, "mat-option", 24);
        i0.ɵɵelementEnd()()();
    }
    if (rf & 2) {
        const ctx_r7 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx_r7.field.label, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r7.field.value)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0$4));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r7.field.defaultValue);
    }
}
function SubTemplateProfileComponent_div_0_div_12_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 37)(1, "mat-form-field", 35);
        i0.ɵɵelement(2, "mat-label")(3, "input", 38);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r8 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("type", ctx_r8.field.type);
    }
}
function SubTemplateProfileComponent_div_0_mat_form_field_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r40 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field", 39)(1, "mat-label");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 40);
        i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_mat_form_field_13_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(2); return ctx_r39.field.defaultValue = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "mat-datepicker-toggle", 41)(5, "mat-datepicker", null, 42);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const _r38 = i0.ɵɵreference(6);
        const ctx_r9 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r9.field.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matDatepicker", _r38)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0$4))("ngModel", ctx_r9.field.defaultValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r38);
    }
}
function SubTemplateProfileComponent_div_0_mat_form_field_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r42 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field", 39)(1, "mat-label");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 43);
        i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_mat_form_field_14_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(2); return ctx_r41.field.defaultValue = $event; });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r10 = i0.ɵɵnextContext(2);
        i0.ɵɵclassProp("blink", ctx_r10.blink);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r10.field.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("type", ctx_r10.field.type)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0$4))("ngModel", ctx_r10.field.defaultValue);
    }
}
function SubTemplateProfileComponent_div_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r44 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 1)(1, "button", 2);
        i0.ɵɵlistener("click", function SubTemplateProfileComponent_div_0_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r43 = i0.ɵɵnextContext(); $event.stopPropagation(); return ctx_r43.editBLock($event); });
        i0.ɵɵelementStart(2, "mat-icon", 3);
        i0.ɵɵtext(3, "settings");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_button_4_Template, 3, 1, "button", 4);
        i0.ɵɵelementContainerStart(5, 5);
        i0.ɵɵtemplate(6, SubTemplateProfileComponent_div_0_div_6_Template, 4, 6, "div", 6);
        i0.ɵɵtemplate(7, SubTemplateProfileComponent_div_0_div_7_Template, 5, 17, "div", 7);
        i0.ɵɵtemplate(8, SubTemplateProfileComponent_div_0_div_8_Template, 4, 7, "div", 8);
        i0.ɵɵtemplate(9, SubTemplateProfileComponent_div_0_div_9_Template, 5, 2, "div", 9);
        i0.ɵɵtemplate(10, SubTemplateProfileComponent_div_0_div_10_Template, 5, 4, "div", 8);
        i0.ɵɵtemplate(11, SubTemplateProfileComponent_div_0_div_11_Template, 6, 5, "div", 10);
        i0.ɵɵtemplate(12, SubTemplateProfileComponent_div_0_div_12_Template, 4, 1, "div", 11);
        i0.ɵɵtemplate(13, SubTemplateProfileComponent_div_0_mat_form_field_13_Template, 7, 6, "mat-form-field", 12);
        i0.ɵɵtemplate(14, SubTemplateProfileComponent_div_0_mat_form_field_14_Template, 4, 7, "mat-form-field", 13);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx_r0.field.isConditional);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitch", ctx_r0.field.type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "toggle");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "tel");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "checkbox");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "checkbox_multiple");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "radio");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "select");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "none");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "date");
    }
}
const _c2$1 = [[["", 8, "child"]]];
const _c3$1 = [".child"];
class SubTemplateProfileComponent {
    constructor() {
        this.onAddKeywordFromInput = new EventEmitter();
        this.onKeyPress = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onAddNewField = new EventEmitter();
        this.onRemoveField = new EventEmitter();
        this.onChangeType = new EventEmitter();
        this.onRemoveKeyword = new EventEmitter();
        this.onAddNewSubLevelField = new EventEmitter();
        this.onExpendMore = new EventEmitter();
        this.onChangeLabel = new EventEmitter();
        this.onCheckedChip = new EventEmitter();
        this.onCheckedDefault = new EventEmitter();
        this.onGetConditionValues = new EventEmitter();
        this.onEditBlock = new EventEmitter();
        this.conditionData = [];
        this.onCheckValue = new EventEmitter();
        this.blink = false;
        this.chipControl = new FormControl(new Set());
        this.preferredCountries = [CountryISO.UnitedStates, CountryISO.France];
        this.PhoneNumberFormat = PhoneNumberFormat;
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.invalideValue = false;
        this.currentChip = "";
        this.separateDialCode = false;
        this.prevValue = "";
        this.showCondition = false;
        this.toggleChip = (chip) => {
            this.onCheckedChip.emit(chip);
        };
    }
    ngOnInit() {
    }
    drop(event) {
        this.onDrop.emit(event);
    }
    addKeywordFromInput(event, i, j) {
        this.onAddKeywordFromInput.emit({ event, prev: this.prevValue, i, j });
    }
    keyUp(event, i, j) {
        this.onKeyPress.emit({ event, i, j });
    }
    addNewField(event, i) {
        event.preventDefault();
        this.onAddNewField.emit({ event, i });
    }
    removeField(event, i, j) {
        event.preventDefault();
        this.onRemoveField.emit({ i, j });
    }
    changeType(type, i, j) {
        this.onChangeType.emit({ type, i, j });
    }
    removeKeyword(event, i, j) {
        this.onRemoveKeyword.emit({ event, i, j });
    }
    addNewSubLevelField(e) {
        e.preventDefault();
        this.onAddNewSubLevelField.emit(true);
    }
    expendMore(e, field) {
        e.preventDefault();
        this.onExpendMore.emit({ expand: true, field });
    }
    ingoreDefaultAction(e) {
        e.preventDefault();
    }
    changeLabel(label, key) {
        this.onChangeLabel.emit({ label, key });
    }
    onEditChip(chip) {
        if (chip.value === this.currentChip) {
            this.currentChip = "";
            this.prevValue = "";
        }
        else {
            this.currentChip = chip.value;
            this.prevValue = chip.value;
        }
    }
    get chips() { return this.chipControl.value; }
    checkedDefault(value) {
        this.onCheckedDefault.emit(value);
    }
    onShowCondition(event = null) {
        if (event) {
            event.preventDefault();
        }
        this.showCondition = !this.showCondition;
    }
    // checked(locationValue,value){
    //   return locationValue.includes(value)
    // }
    editBLock(event) {
        event.preventDefault();
        this.onEditBlock.emit(true);
    }
    onChangePosition(type) {
        if (type === "tel") {
            return { 'top': '-37px', };
        }
        else if (type === "select") {
            return { 'top': '-20px', };
        }
        else if (type === "checkbox" || type === "checkbox_multiple") {
            return { 'top': '-29px', };
        }
        else {
            return {};
        }
    }
    flag(value) {
        const valueString = String(value);
        return valueString && isValidPhoneNumber(valueString) ? parsePhoneNumber(valueString).country : CountryISO.France;
    }
    checkPhone(phone) {
        if (phone) {
            let regex = new RegExp(/\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$/);
            this.invalideValue = !regex.test(phone['e164Number']);
            this.onCheckValue.emit(this.invalideValue);
        }
        if (phone && phone["nationalNumber"] && phone["nationalNumber"] != '') {
            let p = phone['nationalNumber'].replaceAll(' ', '');
            let newp = '';
            for (let i = 0; i < p.length; i++) {
                if (p.split('')[i]) {
                    if (i % 2 == 0 && i > 0) {
                        newp += ' ';
                    }
                    newp += p.split('')[i];
                }
            }
            this.field.value = phone["nationalNumber"];
        }
    }
}
SubTemplateProfileComponent.ɵfac = function SubTemplateProfileComponent_Factory(t) { return new (t || SubTemplateProfileComponent)(); };
SubTemplateProfileComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubTemplateProfileComponent, selectors: [["lib-sub-category"]], inputs: { field: "field", length: "length", i: "i", j: "j", conditionData: "conditionData", blink: "blink" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckedDefault: "onCheckedDefault", onGetConditionValues: "onGetConditionValues", onEditBlock: "onEditBlock", onCheckValue: "onCheckValue" }, ngContentSelectors: _c3$1, decls: 2, vars: 1, consts: [["class", "field-item", 4, "ngIf"], [1, "field-item"], ["mat-raised-button", "", 1, "transparent-button", "setting", 3, "click"], [1, "setting-icon"], ["matTooltip", "Cliquer pour regarder la condition appliqu\u00E9e \u00E0 ce champ!", "class", "transparent-button conditional-view", "mat-raised-button", "", 3, "ngStyle", "click", 4, "ngIf"], [3, "ngSwitch"], ["class", "flex-auto field-size toggle-button", 4, "ngSwitchCase"], ["class", "form-field full-width tel-input", 4, "ngSwitchCase"], ["class", "flex-auto field-size", 4, "ngSwitchCase"], ["class", "flex-auto field-size", "style", "width: 100%;", 4, "ngSwitchCase"], ["class", "flex-auto field-size select-content", 4, "ngSwitchCase"], ["class", "flex-auto field-size select-content", "style", "opacity:0 ;", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 3, "blink", 4, "ngSwitchDefault"], ["matTooltip", "Cliquer pour regarder la condition appliqu\u00E9e \u00E0 ce champ!", "mat-raised-button", "", 1, "transparent-button", "conditional-view", 3, "ngStyle", "click"], [1, "flex-auto", "field-size", "toggle-button"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngStyle", "ngModelChange"], [1, "form-field", "full-width", "tel-input"], [1, "tel-label"], ["id", "onboarding-phone-input", "name", "phone", 1, "phone-input-profile", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "customPlaceholder", "selectFirstCountry", "selectedCountryISO", "maxLength", "inputId", "phoneValidation", "separateDialCode", "numberFormat", "ngModelOptions", "ngModel", "input", "ngModelChange"], [4, "ngIf"], [1, "flex-auto", "field-size"], ["placeholder", "Company", "style", "display: inline-block; width: 50%", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex-auto", "field-size", 2, "width", "100%"], [1, "onboarding-select", 2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px; margin-right: 10px;", 3, "checked", "ngModel", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", "margin-right", "10px", 3, "checked", "ngModel", "ngModelOptions", "ngModelChange"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", "onboarding-select", 3, "ngModel", "required", "ngModelChange"], ["style", "margin-bottom: 20px;", 3, "value", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "20px", 3, "value"], [1, "flex-auto", "field-size", "select-content"], ["appearance", "outline", 1, "mat-select", "flex-auto", "field-size"], [3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "flex-auto", "field-size", "select-content", 2, "opacity", "0"], ["disabled", "true", "matInput", "", 3, "type"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", 3, "matDatepicker", "ngModelOptions", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "placeholder", "", 3, "type", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubTemplateProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojectionDef(_c2$1);
            i0.ɵɵtemplate(0, SubTemplateProfileComponent_div_0_Template, 15, 10, "div", 0);
            i0.ɵɵprojection(1);
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.field.forms || ctx.field.forms.length === 0);
        }
    }, directives: [i1$3.NgIf, i7$1.MatButton, i6.MatIcon, i4.MatTooltip, i1$3.NgStyle, i1$3.NgSwitch, i1$3.NgSwitchCase, i5.MatSlideToggle, i1$2.NgControlStatus, i1$2.NgModel, i7.NativeElementInjectorDirective, i8.MatLabel, i7.NgxIntlTelInputComponent, i8.MatError, i5$1.MatCheckbox, i10.MatSelect, i1$3.NgForOf, i11.MatOption, i12$1.MatRadioGroup, i1$2.RequiredValidator, i12$1.MatRadioButton, i8.MatFormField, i12.MatInput, i13.MatDatepickerInput, i1$2.DefaultValueAccessor, i13.MatDatepickerToggle, i8.MatSuffix, i13.MatDatepicker, i1$3.NgSwitchDefault], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative;margin-top:10px}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-item[_ngcontent-%COMP%]   .setting[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-12px;z-index:1;background-color:#d5d6d7!important;border-radius:50px;width:40px!important;height:40px!important;display:none}.field-item[_ngcontent-%COMP%]   .conditional-view[_ngcontent-%COMP%]{position:absolute;top:-28px;left:-9px;z-index:9;background-color:transparent!important;border-radius:50px;width:40px!important;height:40px!important}.field-item[_ngcontent-%COMP%]:hover   .setting[_ngcontent-%COMP%]{display:block}.field-item[_ngcontent-%COMP%]:hover   .conditional-view[_ngcontent-%COMP%]{background-color:#d5d6d7!important}.field-action[_ngcontent-%COMP%]{width:10%}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font: 17px/26px Nexa Text;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition[_ngcontent-%COMP%]{position:relative}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0}.condition-help[_ngcontent-%COMP%]{cursor:pointer}.cdk-overlay-pane[_ngcontent-%COMP%]{width:100%}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .cdk-drop-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.toggle-button[_ngcontent-%COMP%]{display:flex;align-items:center}.toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.onboarding-select[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(6,1fr)}  .country-dropdown{min-width:unset!important}  .tel-input{position:relative}  .tel-input .tel-label{font-size:12px;color:#0009;position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-7px}  .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;font: 14px/20px Nexa Text!important;width:100%}  .phone-input-profile .iti{width:100%!important}  .phone-input-profile input{outline:none;padding:19px;border-radius:5px;border-color:#0000001f;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}  .blink{animation:blink 1s ease-out}  .blink.mat-form-field-appearance-outline .mat-form-field-outline{border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;color:#242731!important}@keyframes blink{0%{opacity:0}10%{opacity:.1}20%{opacity:.2}30%{opacity:.3}40%{opacity:.4}50%{opacity:.5}60%{opacity:.6}70%{opacity:.7}80%{opacity:.8}90%{opacity:.9}to{opacity:1}}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubTemplateProfileComponent, [{
            type: Component,
            args: [{ selector: 'lib-sub-category', template: "<div class=\"field-item\" *ngIf=\"!field.forms || field.forms.length===0\">\r\n  <button class=\"transparent-button setting\" mat-raised-button (click)=\"$event.stopPropagation();editBLock($event)\">\r\n    <mat-icon class=\"setting-icon\">settings</mat-icon>\r\n  </button>\r\n  <button *ngIf=\"field.isConditional\" matTooltip=\"Cliquer pour regarder la condition appliqu\u00E9e \u00E0 ce champ!\"\r\n    class=\"transparent-button conditional-view\" [ngStyle]=\"onChangePosition(field.type)\" mat-raised-button\r\n    (click)=\"$event.stopPropagation();editBLock($event)\">\r\n    <mat-icon class=\"setting-icon\">info_outlined</mat-icon>\r\n  </button>\r\n  <ng-container [ngSwitch]=\"field.type\">\r\n    <div *ngSwitchCase=\"'toggle'\" class=\"flex-auto field-size toggle-button\">\r\n      <span>{{ field.label }}</span>\r\n      <mat-slide-toggle class=\"form-field\" [(ngModel)]=\"field.defaultValue\" [ngModelOptions]=\"{ standalone: true }\"\r\n        [ngStyle]=\"field.selector && { display: 'inine-block' }\">\r\n      </mat-slide-toggle>\r\n    </div>\r\n    <div *ngSwitchCase=\"'tel'\" class=\"form-field full-width tel-input\">\r\n      <mat-label class=\"tel-label\">{{field.label}}</mat-label>\r\n      <ngx-intl-tel-input id=\"onboarding-phone-input\" class=\"phone-input-profile\" [cssClass]=\"'input-phone'\"\r\n        [preferredCountries]=\"preferredCountries\" [enableAutoCountrySelect]=\"false\" [enablePlaceholder]=\"true\"\r\n        [customPlaceholder]=\"'Phone'\" [selectFirstCountry]=\"false\" [selectedCountryISO]=\"flag(field.value)\"\r\n        [maxLength]=\"15\" [inputId]=\"field.key\" [phoneValidation]=\"true\" [separateDialCode]=\"separateDialCode\"\r\n        [numberFormat]=\"PhoneNumberFormat.National\" name=\"phone\" (input)=\"checkPhone(field.value)\"\r\n        [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.value\">\r\n      </ngx-intl-tel-input>\r\n      <mat-error *ngIf=\"invalideValue\">Le t\u00E9l\u00E9phone est invalide</mat-error>\r\n    </div>\r\n    <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto field-size\">\r\n      <mat-checkbox class=\"form-field\" [(ngModel)]=\"field.value\" [ngModelOptions]=\"{ standalone: true }\"\r\n        [ngStyle]=\"field.selector && { display: 'inine-block' }\">\r\n        {{ field.label }}\r\n      </mat-checkbox>\r\n      <mat-select placeholder=\"Company\" [(ngModel)]=\"field.selector.value\" [ngModelOptions]=\"{ standalone: true }\"\r\n        *ngIf=\"field.selector\" style=\"display: inline-block; width: 50%\">\r\n        <mat-option *ngFor=\"let select of field.selector.defaultValue\" [value]=\"select.value\"> {{ select.value }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </div>\r\n    <div *ngSwitchCase=\"'checkbox_multiple'\" class=\"flex-auto field-size\" style=\"width: 100%;\">\r\n      <label>{{ field.label }}</label>\r\n      <div style=\"margin-top: 20px\" class=\"onboarding-select\">\r\n        <mat-checkbox class=\"form-field\"\r\n          style=\"display: block; margin-bottom: 5px; margin-top: 10px; margin-right: 10px;\"\r\n          *ngFor=\"let opt of field.defaultValue\" [checked]=\"opt.checked\" [(ngModel)]=\"opt.checked\"\r\n          [ngModelOptions]=\"{ standalone: true }\">\r\n          {{ opt.value }}\r\n        </mat-checkbox>\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'radio'\" class=\"flex-auto field-size\">\r\n      <label style=\"display: block\"> {{ field.label }} </label>\r\n      <mat-radio-group class=\"form-field radio-group field-size onboarding-select\" [(ngModel)]=\"field.value\"\r\n        [required]=\"field.isMandatory\" aria-label=\"Select an option\">\r\n        <mat-radio-button *ngFor=\"let opt of field.defaultValue\" style=\"margin-bottom: 20px;\" [value]=\"opt.value\">{{\r\n          opt.value }} </mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n    <div *ngSwitchCase=\"'select'\" class=\"flex-auto field-size select-content\">\r\n      <mat-form-field class=\"mat-select flex-auto field-size\" appearance=\"outline\">\r\n        <mat-label> {{ field.label }} </mat-label>\r\n        <mat-select [(ngModel)]=\"field.value\" [ngModelOptions]=\"{ standalone: true }\">\r\n          <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">{{ opt.value }}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div *ngSwitchCase=\"'none'\" class=\"flex-auto field-size select-content\" style=\"opacity:0 ;\">\r\n      <mat-form-field class=\"mat-select flex-auto field-size\" appearance=\"outline\">\r\n        <mat-label></mat-label>\r\n        <input [type]=\"field.type\" disabled=\"true\" matInput />\r\n      </mat-form-field>\r\n    </div>\r\n    <mat-form-field *ngSwitchCase=\"'date'\" class=\"form-field field-size\" appearance=\"outline\">\r\n      <mat-label>{{field.label}}</mat-label>\r\n      <input matInput [matDatepicker]=\"picker\" [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"field.defaultValue\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n    <mat-form-field [class.blink]=\"blink\" *ngSwitchDefault class=\"form-field field-size\" appearance=\"outline\">\r\n      <mat-label>{{ field.label }}</mat-label>\r\n      <input [type]=\"field.type\" matInput [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"field.defaultValue\"\r\n        placeholder=\"\" />\r\n    </mat-form-field>\r\n  </ng-container>\r\n</div>\r\n\r\n<ng-content select=\".child\"></ng-content>", styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative;margin-top:10px}.field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.field-item .setting{position:absolute;top:-5px;right:-12px;z-index:1;background-color:#d5d6d7!important;border-radius:50px;width:40px!important;height:40px!important;display:none}.field-item .conditional-view{position:absolute;top:-28px;left:-9px;z-index:9;background-color:transparent!important;border-radius:50px;width:40px!important;height:40px!important}.field-item:hover .setting{display:block}.field-item:hover .conditional-view{background-color:#d5d6d7!important}.field-action{width:10%}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}::ng-deep .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font: 17px/26px Nexa Text;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.expand-button .material-icons{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition{position:relative}.checkbox-condition .condition-container{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition .condition-container button{position:absolute;bottom:5px;left:0}.condition-help{cursor:pointer}.cdk-overlay-pane{width:100%}.child{margin-left:0}.child .cdk-drop-list{display:flex;flex-wrap:wrap}.toggle-button{display:flex;align-items:center}.toggle-button span{margin-right:10px}.onboarding-select{display:grid;grid-template-columns:repeat(6,1fr)}::ng-deep .country-dropdown{min-width:unset!important}::ng-deep .tel-input{position:relative}::ng-deep .tel-input .tel-label{font-size:12px;color:#0009;position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-7px}::ng-deep .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;font: 14px/20px Nexa Text!important;width:100%}::ng-deep .phone-input-profile .iti{width:100%!important}::ng-deep .phone-input-profile input{outline:none;padding:19px;border-radius:5px;border-color:#0000001f;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}::ng-deep .blink{animation:blink 1s ease-out}::ng-deep .blink.mat-form-field-appearance-outline .mat-form-field-outline{border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;color:#242731!important}@keyframes blink{0%{opacity:0}10%{opacity:.1}20%{opacity:.2}30%{opacity:.3}40%{opacity:.4}50%{opacity:.5}60%{opacity:.6}70%{opacity:.7}80%{opacity:.8}90%{opacity:.9}to{opacity:1}}\n"] }]
        }], function () { return []; }, { field: [{
                type: Input
            }], length: [{
                type: Input
            }], i: [{
                type: Input
            }], j: [{
                type: Input
            }], onAddKeywordFromInput: [{
                type: Output
            }], onKeyPress: [{
                type: Output
            }], onDrop: [{
                type: Output
            }], onAddNewField: [{
                type: Output
            }], onRemoveField: [{
                type: Output
            }], onChangeType: [{
                type: Output
            }], onRemoveKeyword: [{
                type: Output
            }], onAddNewSubLevelField: [{
                type: Output
            }], onExpendMore: [{
                type: Output
            }], onChangeLabel: [{
                type: Output
            }], onCheckedChip: [{
                type: Output
            }], onCheckedDefault: [{
                type: Output
            }], onGetConditionValues: [{
                type: Output
            }], onEditBlock: [{
                type: Output
            }], conditionData: [{
                type: Input
            }], onCheckValue: [{
                type: Output
            }], blink: [{
                type: Input
            }] });
})();

function TemplateProfileCreateComponent_lib_loading_page_10_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "lib-loading-page");
    }
}
function TemplateProfileCreateComponent_lib_loading_page_13_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "lib-loading-page");
    }
}
function TemplateProfileCreateComponent_li_23_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li", 22);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_li_23_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const cat_r7 = restoredCtx.$implicit; const i_r8 = restoredCtx.index; const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.scrollTo(cat_r7, i_r8); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const cat_r7 = ctx.$implicit;
        const i_r8 = ctx.index;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵclassMap(ctx_r2.editIndex === i_r8 ? "active" : "");
        i0.ɵɵproperty("id", cat_r7.name + "x");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", cat_r7.name, " ");
    }
}
function TemplateProfileCreateComponent_section_33_mat_icon_13_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-icon");
        i0.ɵɵtext(1, "chevron_right");
        i0.ɵɵelementEnd();
    }
}
function TemplateProfileCreateComponent_section_33_mat_icon_14_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-icon");
        i0.ɵɵtext(1, "expand_more");
        i0.ɵɵelementEnd();
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 45)(1, "button", 25);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_3_Template_button_click_1_listener($event) { $event.stopPropagation(); return $event.preventDefault(); });
        i0.ɵɵelementStart(2, "mat-icon", 26);
        i0.ɵɵtext(3, "drag_indicator");
        i0.ɵɵelementEnd()()();
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_mat_icon_11_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-icon");
        i0.ɵɵtext(1, "expand_less ");
        i0.ɵɵelementEnd();
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_mat_icon_12_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-icon");
        i0.ɵɵtext(1, "expand_more ");
        i0.ɵɵelementEnd();
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r30 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 46)(1, "div", 28)(2, "div")(3, "p", 29);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p", 30);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "button", 47);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_Template_button_click_7_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(); const field_r19 = ctx_r29.$implicit; const j_r20 = ctx_r29.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r28 = i0.ɵɵnextContext(); $event.stopPropagation(); return ctx_r28.onEditBlock(field_r19, i_r12, j_r20); });
        i0.ɵɵelementStart(8, "mat-icon", 48);
        i0.ɵɵtext(9, "settings");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(10, "button", 49);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_Template_button_click_10_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r33 = i0.ɵɵnextContext(); const field_r19 = ctx_r33.$implicit; const j_r20 = ctx_r33.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r32 = i0.ɵɵnextContext(); $event.stopPropagation(); return ctx_r32.onExpendMore({ event: $event, field: field_r19 }, i_r12, j_r20); });
        i0.ɵɵtemplate(11, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_mat_icon_11_Template, 2, 0, "mat-icon", 5);
        i0.ɵɵtemplate(12, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_mat_icon_12_Template, 2, 0, "mat-icon", 5);
        i0.ɵɵelementEnd()()();
    }
    if (rf & 2) {
        const field_r19 = i0.ɵɵnextContext().$implicit;
        const ctx_r22 = i0.ɵɵnextContext(4);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", field_r19.label, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r22.catNameStart(field_r19.label) ? "l'" + field_r19.label : field_r19.label, " ");
        i0.ɵɵadvance(4);
        i0.ɵɵstyleProp("opacity", field_r19.forms && field_r19.forms.length > 0 ? 1 : 0);
        i0.ɵɵproperty("disabled", !(field_r19.forms && field_r19.forms.length > 0));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !field_r19.expandMore);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", field_r19.expandMore);
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 58)(1, "button", 25);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template_button_click_1_listener($event) { $event.stopPropagation(); return $event.preventDefault(); });
        i0.ɵɵelementStart(2, "mat-icon", 26);
        i0.ɵɵtext(3, " drag_indicator");
        i0.ɵɵelementEnd()()();
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_10_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-icon");
        i0.ɵɵtext(1, " expand_less ");
        i0.ɵɵelementEnd();
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_11_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-icon");
        i0.ɵɵtext(1, " expand_more ");
        i0.ɵɵelementEnd();
    }
}
const _c0$3 = function () { return { standalone: true }; };
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r50 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 46)(1, "div", 28)(2, "div")(3, "input", 59);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r50); const child_r39 = i0.ɵɵnextContext().$implicit; return child_r39.label = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "p", 30);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(6, "button", 47);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r52 = i0.ɵɵnextContext(); const child_r39 = ctx_r52.$implicit; const k_r40 = ctx_r52.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r51 = i0.ɵɵnextContext(); $event.stopPropagation(); return ctx_r51.onEditBlock(child_r39, i_r12, j_r20, k_r40); });
        i0.ɵɵelementStart(7, "mat-icon", 48);
        i0.ɵɵtext(8, "settings");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(9, "button", 49);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_button_click_9_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r56 = i0.ɵɵnextContext(); const child_r39 = ctx_r56.$implicit; const k_r40 = ctx_r56.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r55 = i0.ɵɵnextContext(); $event.stopPropagation(); return ctx_r55.onExpendMore({ event: $event, field: child_r39 }, i_r12, j_r20, k_r40); });
        i0.ɵɵtemplate(10, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_10_Template, 2, 0, "mat-icon", 5);
        i0.ɵɵtemplate(11, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_11_Template, 2, 0, "mat-icon", 5);
        i0.ɵɵelementEnd()()();
    }
    if (rf & 2) {
        const child_r39 = i0.ɵɵnextContext().$implicit;
        const category_r11 = i0.ɵɵnextContext(6).$implicit;
        const ctx_r42 = i0.ɵɵnextContext();
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("readonly", ctx_r42.categories.length < 4 || !category_r11.editable)("readonly", !category_r11.editable)("ngModel", child_r39.label)("ngModelOptions", i0.ɵɵpureFunction0(10, _c0$3));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r42.catNameStart(child_r39.label) ? "l'" + child_r39.label : child_r39.label, " ");
        i0.ɵɵadvance(4);
        i0.ɵɵstyleProp("opacity", child_r39.forms && child_r39.forms.length > 0 ? 1 : 0);
        i0.ɵɵproperty("disabled", !(child_r39.forms && child_r39.forms.length > 0));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !child_r39.expandMore);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", child_r39.expandMore);
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 64)(1, "button", 25);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template_button_click_1_listener($event) { return $event.stopPropagation(); });
        i0.ɵɵelementStart(2, "mat-icon", 26);
        i0.ɵɵtext(3, " drag_indicator ");
        i0.ɵɵelementEnd()()();
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r71 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 65)(1, "button", 66);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r71); const k_r40 = i0.ɵɵnextContext(4).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r69 = i0.ɵɵnextContext(); $event.stopPropagation(); return ctx_r69.onAddNewField(i_r12, j_r20, k_r40); });
        i0.ɵɵelementStart(2, "span");
        i0.ɵɵtext(3, "Ajouter un champ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-icon");
        i0.ɵɵtext(5, " add ");
        i0.ɵɵelementEnd()()();
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r75 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 61)(1, "div", 37)(2, "div", 38);
        i0.ɵɵtemplate(3, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template, 4, 0, "div", 62);
        i0.ɵɵelementStart(4, "div", 40)(5, "lib-sub-category", 63);
        i0.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckValue_5_listener($event) { i0.ɵɵrestoreView(_r75); const ctx_r74 = i0.ɵɵnextContext(10); return ctx_r74.onCheckValue($event); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r76 = i0.ɵɵnextContext(); return ctx_r76.addKeywordFromInput($event.event, $event.prev, i_r12, j_r20, k_r40, l_r65); })("onKeyPress", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onKeyPress_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r80 = i0.ɵɵnextContext(); return ctx_r80.onKeyPress($event.event, i_r12, j_r20, k_r40, l_r65); })("onAddNewField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddNewField_5_listener() { i0.ɵɵrestoreView(_r75); const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r84 = i0.ɵɵnextContext(); return ctx_r84.onAddNewField(i_r12, j_r20, k_r40); })("onRemoveField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onRemoveField_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r88 = i0.ɵɵnextContext(); return ctx_r88.onRemoveField(i_r12, j_r20, k_r40, l_r65); })("onChangeType", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onChangeType_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r75); const c2_r64 = restoredCtx.$implicit; const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r92 = i0.ɵɵnextContext(); return ctx_r92.onChangeType(c2_r64.type, i_r12, j_r20, k_r40, l_r65); })("onRemoveKeyword", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r96 = i0.ɵɵnextContext(); return ctx_r96.removeKeyword($event.event, i_r12, j_r20, k_r40, l_r65); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r100 = i0.ɵɵnextContext(); return ctx_r100.onAddNewSubLevelField(i_r12, j_r20, k_r40, l_r65); })("onExpendMore", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onExpendMore_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r104 = i0.ɵɵnextContext(); return ctx_r104.onExpendMore($event, i_r12, j_r20, k_r40, l_r65); })("onChangeLabel", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onChangeLabel_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r108 = i0.ɵɵnextContext(); return ctx_r108.onChangeLabel($event, i_r12, j_r20, k_r40, l_r65); })("onCheckedChip", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckedChip_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r112 = i0.ɵɵnextContext(); return ctx_r112.onCheckedChip($event, i_r12, j_r20, k_r40, l_r65); })("onDrop", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onDrop_5_listener($event) { i0.ɵɵrestoreView(_r75); const ctx_r116 = i0.ɵɵnextContext(10); return ctx_r116.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckedDefault_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r117 = i0.ɵɵnextContext(); return ctx_r117.onCheckedDefault($event, i_r12, j_r20, k_r40, l_r65); })("onEditBlock", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onEditBlock_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r75); const c2_r64 = restoredCtx.$implicit; const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r121 = i0.ɵɵnextContext(); return ctx_r121.onEditBlock(c2_r64, i_r12, j_r20, k_r40, l_r65); });
        i0.ɵɵelement(6, "div", 50);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(7, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template, 6, 0, "div", 57);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const c2_r64 = ctx.$implicit;
        const l_r65 = ctx.index;
        const ctx_r125 = i0.ɵɵnextContext(3);
        const child_r39 = ctx_r125.$implicit;
        const k_r40 = ctx_r125.index;
        const ctx_r63 = i0.ɵɵnextContext(7);
        i0.ɵɵstyleProp("width", c2_r64.forms && c2_r64.forms.length > 0 ? "100%" : ctx_r63.fieldWidth(c2_r64.type, child_r39.forms.length, l_r65));
        i0.ɵɵproperty("id", c2_r64.key);
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap(c2_r64.forms && c2_r64.forms.length > 0 ? "sub-category-forms" : "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", c2_r64.forms && c2_r64.forms.length > 0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("field", c2_r64)("length", child_r39 == null ? null : child_r39.forms == null ? null : child_r39.forms.length)("blink", ctx_r63.checkBlink(l_r65, 3) === ctx_r63.newFieldIndex)("i", k_r40)("j", l_r65)("conditionData", ctx_r63.conditionData);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", (child_r39 == null ? null : child_r39.forms == null ? null : child_r39.forms.length) - 1 === l_r65);
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r127 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 52, 34);
        i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r127); const ctx_r126 = i0.ɵɵnextContext(9); return ctx_r126.drop($event); });
        i0.ɵɵtemplate(2, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template, 8, 13, "div", 60);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const child_r39 = i0.ɵɵnextContext(2).$implicit;
        i0.ɵɵproperty("cdkDropListData", child_r39.forms);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", child_r39.forms);
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 50);
        i0.ɵɵtemplate(1, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template, 3, 2, "div", 51);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const child_r39 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", child_r39.forms && child_r39.forms.length > 0);
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r132 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 65)(1, "button", 66);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r132); const j_r20 = i0.ɵɵnextContext(4).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r130 = i0.ɵɵnextContext(); $event.stopPropagation(); return ctx_r130.onAddNewField(i_r12, j_r20); });
        i0.ɵɵelementStart(2, "span");
        i0.ɵɵtext(3, "Ajouter un champ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-icon");
        i0.ɵɵtext(5, "add");
        i0.ɵɵelementEnd()()();
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r135 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 54)(1, "div", 37)(2, "div", 38);
        i0.ɵɵtemplate(3, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template, 4, 0, "div", 55);
        i0.ɵɵelementStart(4, "div", 40);
        i0.ɵɵtemplate(5, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template, 12, 11, "div", 41);
        i0.ɵɵelementStart(6, "lib-sub-category", 56);
        i0.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckValue_6_listener($event) { i0.ɵɵrestoreView(_r135); const ctx_r134 = i0.ɵɵnextContext(7); return ctx_r134.onCheckValue($event); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r136 = i0.ɵɵnextContext(); return ctx_r136.addKeywordFromInput($event.event, $event.prev, i_r12, j_r20, k_r40); })("onKeyPress", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onKeyPress_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r139 = i0.ɵɵnextContext(); return ctx_r139.onKeyPress($event.event, i_r12, j_r20, k_r40); })("onAddNewField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddNewField_6_listener() { i0.ɵɵrestoreView(_r135); const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r142 = i0.ɵɵnextContext(); return ctx_r142.onAddNewField(i_r12, j_r20); })("onRemoveField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onRemoveField_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r145 = i0.ɵɵnextContext(); return ctx_r145.onRemoveField(i_r12, j_r20, k_r40); })("onChangeType", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onChangeType_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r135); const child_r39 = restoredCtx.$implicit; const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r148 = i0.ɵɵnextContext(); return ctx_r148.onChangeType(child_r39.type, i_r12, j_r20, k_r40); })("onRemoveKeyword", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r151 = i0.ɵɵnextContext(); return ctx_r151.removeKeyword($event.event, i_r12, j_r20, k_r40); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r154 = i0.ɵɵnextContext(); return ctx_r154.onAddNewSubLevelField(i_r12, j_r20, k_r40); })("onExpendMore", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onExpendMore_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r157 = i0.ɵɵnextContext(); return ctx_r157.onExpendMore($event, i_r12, j_r20, k_r40); })("onChangeLabel", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onChangeLabel_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r160 = i0.ɵɵnextContext(); return ctx_r160.onChangeLabel($event, i_r12, j_r20, k_r40); })("onCheckedChip", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckedChip_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r163 = i0.ɵɵnextContext(); return ctx_r163.onCheckedChip($event, i_r12, j_r20, k_r40); })("onDrop", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onDrop_6_listener($event) { i0.ɵɵrestoreView(_r135); const ctx_r166 = i0.ɵɵnextContext(7); return ctx_r166.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckedDefault_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r167 = i0.ɵɵnextContext(); return ctx_r167.onCheckedDefault($event, i_r12, j_r20, k_r40); })("onEditBlock", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onEditBlock_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r135); const child_r39 = restoredCtx.$implicit; const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r170 = i0.ɵɵnextContext(); return ctx_r170.onEditBlock(child_r39, i_r12, j_r20, k_r40); });
        i0.ɵɵtemplate(7, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_Template, 2, 1, "div", 43);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(8, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template, 6, 0, "div", 57);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const child_r39 = ctx.$implicit;
        const k_r40 = ctx.index;
        const ctx_r173 = i0.ɵɵnextContext(3);
        const field_r19 = ctx_r173.$implicit;
        const j_r20 = ctx_r173.index;
        const ctx_r38 = i0.ɵɵnextContext(4);
        i0.ɵɵstyleProp("width", child_r39.forms && child_r39.forms.length > 0 ? "100%" : ctx_r38.fieldWidth(child_r39.type, field_r19.forms.length, k_r40));
        i0.ɵɵproperty("id", child_r39.key);
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap(child_r39.forms && child_r39.forms.length > 0 ? "sub-category-forms" : "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", child_r39.forms && child_r39.forms.length > 0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", child_r39.forms && child_r39.forms.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("field", child_r39)("length", field_r19 == null ? null : field_r19.forms == null ? null : field_r19.forms.length)("i", j_r20)("blink", ctx_r38.checkBlink(k_r40, 2) === ctx_r38.newFieldIndex)("j", k_r40)("conditionData", ctx_r38.conditionData);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", child_r39.expandMore);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (field_r19 == null ? null : field_r19.forms == null ? null : field_r19.forms.length) - 1 === k_r40);
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r175 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 52, 34);
        i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r175); const ctx_r174 = i0.ɵɵnextContext(6); return ctx_r174.drop($event); });
        i0.ɵɵtemplate(2, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template, 9, 15, "div", 53);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const field_r19 = i0.ɵɵnextContext(2).$implicit;
        i0.ɵɵproperty("cdkDropListData", field_r19.forms);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", field_r19.forms);
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 50);
        i0.ɵɵtemplate(1, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_Template, 3, 2, "div", 51);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const field_r19 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", field_r19.forms);
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r180 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 67)(1, "button", 68);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_8_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r180); const i_r12 = i0.ɵɵnextContext(4).index; const ctx_r178 = i0.ɵɵnextContext(); $event.stopPropagation(); return ctx_r178.onAddNewField(i_r12); });
        i0.ɵɵelementStart(2, "span");
        i0.ɵɵtext(3, "Ajouter un champ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-icon");
        i0.ɵɵtext(5, "add");
        i0.ɵɵelementEnd()()();
    }
    if (rf & 2) {
        const j_r20 = i0.ɵɵnextContext().index;
        const category_r11 = i0.ɵɵnextContext(3).$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("opacity", (category_r11 == null ? null : category_r11.forms == null ? null : category_r11.forms.length) - 1 === j_r20 ? 1 : 0);
        i0.ɵɵproperty("disabled", (category_r11 == null ? null : category_r11.forms == null ? null : category_r11.forms.length) - 1 !== j_r20);
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r184 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 36)(1, "div", 37)(2, "div", 38);
        i0.ɵɵtemplate(3, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_3_Template, 4, 0, "div", 39);
        i0.ɵɵelementStart(4, "div", 40);
        i0.ɵɵtemplate(5, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_Template, 13, 7, "div", 41);
        i0.ɵɵelementStart(6, "lib-sub-category", 42);
        i0.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onCheckValue_6_listener($event) { i0.ɵɵrestoreView(_r184); const ctx_r183 = i0.ɵɵnextContext(4); return ctx_r183.onCheckValue($event); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onAddKeywordFromInput_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r185 = i0.ɵɵnextContext(); return ctx_r185.addKeywordFromInput($event.event, $event.prev, i_r12, j_r20); })("onKeyPress", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onKeyPress_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r187 = i0.ɵɵnextContext(); return ctx_r187.onKeyPress($event.event, i_r12, j_r20); })("onAddNewField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onAddNewField_6_listener() { i0.ɵɵrestoreView(_r184); const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r189 = i0.ɵɵnextContext(); return ctx_r189.onAddNewField(i_r12); })("onRemoveField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onRemoveField_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r191 = i0.ɵɵnextContext(); return ctx_r191.onRemoveField(i_r12, j_r20); })("onChangeType", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onChangeType_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r184); const field_r19 = restoredCtx.$implicit; const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r193 = i0.ɵɵnextContext(); return ctx_r193.onChangeType(field_r19.type, i_r12, j_r20); })("onRemoveKeyword", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onRemoveKeyword_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r195 = i0.ɵɵnextContext(); return ctx_r195.removeKeyword($event.event, i_r12, j_r20); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onAddNewSubLevelField_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r197 = i0.ɵɵnextContext(); return ctx_r197.onAddNewSubLevelField(i_r12, j_r20); })("onExpendMore", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onExpendMore_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r199 = i0.ɵɵnextContext(); return ctx_r199.onExpendMore($event, i_r12, j_r20); })("onChangeLabel", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onChangeLabel_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r201 = i0.ɵɵnextContext(); return ctx_r201.onChangeLabel($event, i_r12, j_r20); })("onCheckedChip", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onCheckedChip_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r203 = i0.ɵɵnextContext(); return ctx_r203.onCheckedChip($event, i_r12, j_r20); })("onDrop", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onDrop_6_listener($event) { i0.ɵɵrestoreView(_r184); const ctx_r205 = i0.ɵɵnextContext(4); return ctx_r205.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onCheckedDefault_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r206 = i0.ɵɵnextContext(); return ctx_r206.onCheckedDefault($event, i_r12, j_r20); })("onEditBlock", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onEditBlock_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r184); const field_r19 = restoredCtx.$implicit; const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r208 = i0.ɵɵnextContext(); return ctx_r208.onEditBlock(field_r19, i_r12, j_r20); });
        i0.ɵɵtemplate(7, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_Template, 2, 1, "div", 43);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(8, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_8_Template, 6, 3, "div", 44);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const field_r19 = ctx.$implicit;
        const j_r20 = ctx.index;
        const ctx_r210 = i0.ɵɵnextContext(3);
        const category_r11 = ctx_r210.$implicit;
        const i_r12 = ctx_r210.index;
        const ctx_r18 = i0.ɵɵnextContext();
        i0.ɵɵstyleProp("width", field_r19.forms && field_r19.forms.length > 0 ? "100%" : ctx_r18.fieldWidth(field_r19.type, category_r11.forms.length, j_r20));
        i0.ɵɵproperty("id", field_r19.key);
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap(field_r19.forms && field_r19.forms.length > 0 ? "sub-category-forms" : "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", field_r19.forms);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", field_r19.forms);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("field", field_r19)("length", category_r11 == null ? null : category_r11.forms == null ? null : category_r11.forms.length)("i", i_r12)("j", j_r20)("blink", ctx_r18.checkBlink(j_r20, 1) === ctx_r18.newFieldIndex)("conditionData", ctx_r18.conditionData);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", field_r19.expandMore);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (category_r11 == null ? null : category_r11.forms == null ? null : category_r11.forms.length) - 1 === j_r20);
    }
}
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template, 9, 15, "div", 35);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const category_r11 = i0.ɵɵnextContext(2).$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", category_r11.forms);
    }
}
function TemplateProfileCreateComponent_section_33_div_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r213 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 33, 34);
        i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_section_33_div_15_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r213); const ctx_r212 = i0.ɵɵnextContext(2); return ctx_r212.drop($event); });
        i0.ɵɵtemplate(2, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_Template, 2, 1, "ng-container", 5);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const category_r11 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵproperty("cdkDropListData", category_r11.forms);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", category_r11.expandMore);
    }
}
function TemplateProfileCreateComponent_section_33_Template(rf, ctx) {
    if (rf & 1) {
        const _r216 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "section", 23);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_Template_section_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r216); const category_r11 = restoredCtx.$implicit; const i_r12 = restoredCtx.index; const ctx_r215 = i0.ɵɵnextContext(); return ctx_r215.scrollTo(category_r11, i_r12); });
        i0.ɵɵelementStart(1, "div", 24)(2, "button", 25);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_Template_button_click_2_listener($event) { $event.preventDefault(); return $event.stopPropagation(); });
        i0.ɵɵelementStart(3, "mat-icon", 26);
        i0.ɵɵtext(4, "drag_indicator");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(5, "div", 27)(6, "div", 28)(7, "div")(8, "p", 29);
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "p", 30);
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(12, "button", 31);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_Template_button_click_12_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r216); const category_r11 = restoredCtx.$implicit; const i_r12 = restoredCtx.index; const ctx_r218 = i0.ɵɵnextContext(); $event.stopPropagation(); return ctx_r218.onExpendMore({ event: $event, field: category_r11 }, i_r12); });
        i0.ɵɵtemplate(13, TemplateProfileCreateComponent_section_33_mat_icon_13_Template, 2, 0, "mat-icon", 5);
        i0.ɵɵtemplate(14, TemplateProfileCreateComponent_section_33_mat_icon_14_Template, 2, 0, "mat-icon", 5);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(15, TemplateProfileCreateComponent_section_33_div_15_Template, 3, 2, "div", 32);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const category_r11 = ctx.$implicit;
        const i_r12 = ctx.index;
        const ctx_r4 = i0.ɵɵnextContext();
        i0.ɵɵclassMap(ctx_r4.editIndex === i_r12 ? "active" : "");
        i0.ɵɵstyleProp("padding-bottom", category_r11.expandMore ? "50px" : "10px");
        i0.ɵɵproperty("id", category_r11.name);
        i0.ɵɵadvance(9);
        i0.ɵɵtextInterpolate1(" ", category_r11.name, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r4.catNameStart(category_r11.name) ? "l'" + category_r11.name : category_r11.name, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !category_r11.expandMore);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", category_r11.expandMore);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", category_r11.forms);
    }
}
function TemplateProfileCreateComponent_div_42_ng_container_32_div_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r229 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 102)(1, "mat-slide-toggle", 103);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_div_6_Template_mat_slide_toggle_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r229); const ctx_r228 = i0.ɵɵnextContext(3); return ctx_r228.currentEditBlock.defaultValue = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "span", 104);
        i0.ɵɵtext(3, "Valeur par d\u00E9faut");
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r220 = i0.ɵɵnextContext(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r220.currentEditBlock.defaultValue)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0$3));
    }
}
function TemplateProfileCreateComponent_div_42_ng_container_32_div_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r231 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 105)(1, "mat-checkbox", 106);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_div_7_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r231); const ctx_r230 = i0.ɵɵnextContext(3); return ctx_r230.currentEditBlock.value = $event; });
        i0.ɵɵtext(2, " Coch\u00E9 par d\u00E9fault ");
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r221 = i0.ɵɵnextContext(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r221.currentEditBlock.value)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0$3));
    }
}
function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_mat_chip_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r238 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-chip", 113);
        i0.ɵɵlistener("dblclick", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_mat_chip_6_Template_mat_chip_dblclick_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r238); const option_r236 = restoredCtx.$implicit; const ctx_r237 = i0.ɵɵnextContext(4); return ctx_r237.onCheckedChipBlock(option_r236, ctx_r237.currentEditBlock); })("click", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_mat_chip_6_Template_mat_chip_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r238); const option_r236 = restoredCtx.$implicit; const ctx_r239 = i0.ɵɵnextContext(4); return ctx_r239.onEditChip(option_r236); })("removed", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_mat_chip_6_Template_mat_chip_removed_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r238); const option_r236 = restoredCtx.$implicit; const ctx_r240 = i0.ɵɵnextContext(4); return ctx_r240.removeKeywordBlock(option_r236, ctx_r240.currentEditBlock); });
        i0.ɵɵtext(1);
        i0.ɵɵelementStart(2, "mat-icon", 114);
        i0.ɵɵtext(3, "cancel");
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const option_r236 = ctx.$implicit;
        i0.ɵɵproperty("selected", option_r236.checked)("value", option_r236.value)("removable", true);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", option_r236.value, " ");
    }
}
function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r242 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field", 107)(1, "mat-label");
        i0.ɵɵtext(2, " Valeur par d\u00E9fault ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-chip-list", 108, 109);
        i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_Template_mat_chip_list_cdkDropListDropped_3_listener($event) { i0.ɵɵrestoreView(_r242); const ctx_r241 = i0.ɵɵnextContext(3); return ctx_r241.drop($event); });
        i0.ɵɵtemplate(6, TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_mat_chip_6_Template, 4, 4, "mat-chip", 110);
        i0.ɵɵelementStart(7, "input", 111, 112);
        i0.ɵɵlistener("matChipInputTokenEnd", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_Template_input_matChipInputTokenEnd_7_listener($event) { i0.ɵɵrestoreView(_r242); const ctx_r243 = i0.ɵɵnextContext(3); return ctx_r243.addKeywordFromInputBlock($event, ctx_r243.currentEditBlock, ctx_r243.prevValue); })("keyup", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_Template_input_keyup_7_listener($event) { i0.ɵɵrestoreView(_r242); const ctx_r244 = i0.ɵɵnextContext(3); return ctx_r244.onKeyUpChip($event, ctx_r244.currentEditBlock); })("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r242); const ctx_r245 = i0.ɵɵnextContext(3); return ctx_r245.currentChip = $event; });
        i0.ɵɵelementEnd()()();
    }
    if (rf & 2) {
        const _r233 = i0.ɵɵreference(5);
        const ctx_r222 = i0.ɵɵnextContext(3);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("cdkDropListData", ctx_r222.currentEditBlock.defaultValue);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx_r222.currentEditBlock.defaultValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matChipInputFor", _r233)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r222.separatorKeysCodes)("ngModel", ctx_r222.currentChip)("ngModelOptions", i0.ɵɵpureFunction0(7, _c0$3));
    }
}
function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r247 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field", 85)(1, "mat-label");
        i0.ɵɵtext(2, "Valeur par d\u00E9fault");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 115);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_9_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r247); const ctx_r246 = i0.ɵɵnextContext(3); return ctx_r246.currentEditBlock.defaultValue = $event; });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r223 = i0.ɵɵnextContext(3);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(2, _c0$3))("ngModel", ctx_r223.currentEditBlock.defaultValue);
    }
}
function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r249 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field", 85)(1, "mat-label");
        i0.ɵɵtext(2, "Valeur par d\u00E9fault");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 116);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_10_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r249); const ctx_r248 = i0.ɵɵnextContext(3); return ctx_r248.currentEditBlock.defaultValue = $event; });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r224 = i0.ɵɵnextContext(3);
        i0.ɵɵstyleProp("opacity", ctx_r224.currentEditBlock.type !== "tel" ? 1 : 0);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("type", ctx_r224.currentEditBlock.type)("disabled", ctx_r224.currentEditBlock.type === "tel")("ngModelOptions", i0.ɵɵpureFunction0(6, _c0$3))("ngModel", ctx_r224.currentEditBlock.defaultValue);
    }
}
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_option_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 121);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r254 = ctx.$implicit;
        i0.ɵɵproperty("value", item_r254.key);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("", item_r254.label, " ");
    }
}
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_6_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 121);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r256 = ctx.$implicit;
        i0.ɵɵproperty("value", item_r256.key);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("", item_r256.label, " ");
    }
}
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r258 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field", 117)(1, "mat-label");
        i0.ɵɵtext(2, "Selectionnez la sous cat\u00E9gorie (s1)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 118);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_6_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r258); const ctx_r257 = i0.ɵɵnextContext(4); return ctx_r257.s1 = $event; })("selectionChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_6_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r258); const ctx_r259 = i0.ɵɵnextContext(4); return ctx_r259.onSelectCondition("s1", "s2", $event.value); });
        i0.ɵɵtemplate(4, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_6_mat_option_4_Template, 2, 2, "mat-option", 119);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r251 = i0.ɵɵnextContext(4);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx_r251.s1)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0$3));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r251.conditionData.s1);
    }
}
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_7_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 121);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r261 = ctx.$implicit;
        i0.ɵɵproperty("value", item_r261.key);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("", item_r261.label, " ");
    }
}
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r263 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field", 117)(1, "mat-label");
        i0.ɵɵtext(2, "Selectionnez la sous cat\u00E9gorie (s2)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 118);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_7_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r263); const ctx_r262 = i0.ɵɵnextContext(4); return ctx_r262.s2 = $event; })("selectionChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_7_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r263); const ctx_r264 = i0.ɵɵnextContext(4); return ctx_r264.onSelectCondition("s2", "s3", $event.value); });
        i0.ɵɵtemplate(4, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_7_mat_option_4_Template, 2, 2, "mat-option", 119);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r252 = i0.ɵɵnextContext(4);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx_r252.s2)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0$3));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r252.conditionData.s2);
    }
}
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_8_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 121);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r266 = ctx.$implicit;
        i0.ɵɵproperty("value", item_r266.key);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("", item_r266.label, " ");
    }
}
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r268 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field", 117)(1, "mat-label");
        i0.ɵɵtext(2, "Selectionnez la sous cat\u00E9gorie (s3)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 118);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_8_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r268); const ctx_r267 = i0.ɵɵnextContext(4); return ctx_r267.s3 = $event; })("selectionChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_8_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r268); const ctx_r269 = i0.ɵɵnextContext(4); return ctx_r269.onSelectCondition("s3", "s4", $event.value); });
        i0.ɵɵtemplate(4, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_8_mat_option_4_Template, 2, 2, "mat-option", 119);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r253 = i0.ɵɵnextContext(4);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx_r253.s3)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0$3));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r253.conditionData.s3);
    }
}
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_Template(rf, ctx) {
    if (rf & 1) {
        const _r271 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "mat-form-field", 117)(2, "mat-label");
        i0.ɵɵtext(3, "Selectionnez la cat\u00E9gorie");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-select", 118);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r271); const ctx_r270 = i0.ɵɵnextContext(3); return ctx_r270.all = $event; })("selectionChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_Template_mat_select_selectionChange_4_listener($event) { i0.ɵɵrestoreView(_r271); const ctx_r272 = i0.ɵɵnextContext(3); return ctx_r272.onSelectCondition("all", "s1", $event.value); });
        i0.ɵɵtemplate(5, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_option_5_Template, 2, 2, "mat-option", 119);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(6, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_6_Template, 5, 4, "mat-form-field", 120);
        i0.ɵɵtemplate(7, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_7_Template, 5, 4, "mat-form-field", 120);
        i0.ɵɵtemplate(8, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_8_Template, 5, 4, "mat-form-field", 120);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r225 = i0.ɵɵnextContext(3);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx_r225.all)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0$3));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r225.conditionData.all);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx_r225.conditionData.s1 == null ? null : ctx_r225.conditionData.s1.length) > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx_r225.conditionData.s2 == null ? null : ctx_r225.conditionData.s2.length) > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx_r225.conditionData.s3 == null ? null : ctx_r225.conditionData.s3.length) > 0);
    }
}
function TemplateProfileCreateComponent_div_42_ng_container_32_mat_radio_group_22_mat_radio_button_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-radio-button", 124);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r274 = ctx.$implicit;
        i0.ɵɵproperty("value", item_r274.value);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", item_r274.value, " ");
    }
}
function TemplateProfileCreateComponent_div_42_ng_container_32_mat_radio_group_22_Template(rf, ctx) {
    if (rf & 1) {
        const _r276 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-radio-group", 122);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_radio_group_22_Template_mat_radio_group_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r276); const ctx_r275 = i0.ɵɵnextContext(3); return ctx_r275.currentEditBlock.condition.value = $event; });
        i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_42_ng_container_32_mat_radio_group_22_mat_radio_button_1_Template, 2, 2, "mat-radio-button", 123);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r226 = i0.ɵɵnextContext(3);
        i0.ɵɵproperty("ngModel", ctx_r226.currentEditBlock.condition.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0$3));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r226.onGetDefaultValue());
    }
}
function TemplateProfileCreateComponent_div_42_ng_container_32_button_24_Template(rf, ctx) {
    if (rf & 1) {
        const _r278 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 100);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_42_ng_container_32_button_24_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r278); const ctx_r277 = i0.ɵɵnextContext(3); return ctx_r277.onAddNewSubLevelFieldBlock($event); });
        i0.ɵɵtext(1, "Sous-cat\u00E9gorie ");
        i0.ɵɵelementStart(2, "mat-icon");
        i0.ɵɵtext(3, "device_hub ");
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r227 = i0.ɵɵnextContext(3);
        i0.ɵɵproperty("disabled", !ctx_r227.currentEditBlock.editable);
    }
}
const _c1$1 = function () { return ["select", "radio", "checkbox_multiple"]; };
function TemplateProfileCreateComponent_div_42_ng_container_32_Template(rf, ctx) {
    if (rf & 1) {
        const _r280 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "mat-form-field", 85)(2, "mat-label");
        i0.ɵɵtext(3, "Nom / Label");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "input", 86);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r280); const ctx_r279 = i0.ɵɵnextContext(2); return ctx_r279.currentEditBlock.label = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementContainerStart(5, 87);
        i0.ɵɵtemplate(6, TemplateProfileCreateComponent_div_42_ng_container_32_div_6_Template, 4, 3, "div", 88);
        i0.ɵɵtemplate(7, TemplateProfileCreateComponent_div_42_ng_container_32_div_7_Template, 3, 3, "div", 89);
        i0.ɵɵtemplate(8, TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_Template, 9, 8, "mat-form-field", 90);
        i0.ɵɵtemplate(9, TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_9_Template, 4, 3, "mat-form-field", 91);
        i0.ɵɵtemplate(10, TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_10_Template, 4, 7, "mat-form-field", 92);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementStart(11, "div", 93)(12, "div", 94)(13, "span");
        i0.ɵɵtext(14, "Obligatoire");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "mat-slide-toggle", 95);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_Template_mat_slide_toggle_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r280); const ctx_r281 = i0.ɵɵnextContext(2); return ctx_r281.currentEditBlock.isMandatory = $event; });
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(16, "div", 96)(17, "div", 94)(18, "span");
        i0.ɵɵtext(19, "Visibilit\u00E9 conditionnelle");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-slide-toggle", 95);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_Template_mat_slide_toggle_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r280); const ctx_r282 = i0.ɵɵnextContext(2); return ctx_r282.currentEditBlock.isConditional = $event; });
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(21, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_Template, 9, 7, "ng-container", 5);
        i0.ɵɵtemplate(22, TemplateProfileCreateComponent_div_42_ng_container_32_mat_radio_group_22_Template, 2, 4, "mat-radio-group", 97);
        i0.ɵɵelementStart(23, "div", 98);
        i0.ɵɵtemplate(24, TemplateProfileCreateComponent_div_42_ng_container_32_button_24_Template, 4, 1, "button", 99);
        i0.ɵɵelementStart(25, "button", 100);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_42_ng_container_32_Template_button_click_25_listener($event) { i0.ɵɵrestoreView(_r280); const ctx_r283 = i0.ɵɵnextContext(2); return ctx_r283.onDuplicatedBlock($event); });
        i0.ɵɵtext(26, "Dupliquer le bloc");
        i0.ɵɵelementStart(27, "mat-icon");
        i0.ɵɵtext(28, "filter_none");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(29, "button", 101);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_42_ng_container_32_Template_button_click_29_listener($event) { i0.ɵɵrestoreView(_r280); const ctx_r284 = i0.ɵɵnextContext(2); return ctx_r284.onRemoveFieldBlock($event); });
        i0.ɵɵtext(30, "Supprimer le bloc ");
        i0.ɵɵelementStart(31, "mat-icon");
        i0.ɵɵtext(32, " delete ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r219 = i0.ɵɵnextContext(2);
        let tmp_12_0;
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx_r219.currentEditBlock.label)("ngModelOptions", i0.ɵɵpureFunction0(16, _c0$3));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitch", ctx_r219.currentEditBlock.type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "toggle");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "checkbox");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", i0.ɵɵpureFunction0(17, _c1$1).includes(ctx_r219.currentEditBlock.type) ? ctx_r219.currentEditBlock.type : !ctx_r219.currentEditBlock.type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "textarea");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx_r219.currentEditBlock.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(18, _c0$3));
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx_r219.currentEditBlock.isConditional)("ngModelOptions", i0.ɵɵpureFunction0(19, _c0$3));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r219.currentEditBlock == null ? null : ctx_r219.currentEditBlock.isConditional);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r219.currentEditBlock.isConditional && ctx_r219.onGetDefaultValue() && ((tmp_12_0 = ctx_r219.onGetDefaultValue()) == null ? null : tmp_12_0.length) > 0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx_r219.paramsIndex.length < 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", !ctx_r219.currentEditBlock.editable);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disabled", !ctx_r219.currentEditBlock.editable);
    }
}
function TemplateProfileCreateComponent_div_42_Template(rf, ctx) {
    if (rf & 1) {
        const _r286 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 69)(1, "h3");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 70)(4, "mat-form-field", 71)(5, "mat-label");
        i0.ɵɵtext(6, "Type de bloc");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-select", 72);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_42_Template_mat_select_click_7_listener() { i0.ɵɵrestoreView(_r286); const ctx_r285 = i0.ɵɵnextContext(); return ctx_r285.onOpenTypeDialog(ctx_r285.currentEditBlock); })("ngModelChange", function TemplateProfileCreateComponent_div_42_Template_mat_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r286); const ctx_r287 = i0.ɵɵnextContext(); return ctx_r287.currentEditBlock.type = $event; })("ngModelChange", function TemplateProfileCreateComponent_div_42_Template_mat_select_ngModelChange_7_listener() { i0.ɵɵrestoreView(_r286); const ctx_r288 = i0.ɵɵnextContext(); return ctx_r288.onChangeTypeBlock(ctx_r288.currentEditBlock); });
        i0.ɵɵelementStart(8, "mat-option", 73);
        i0.ɵɵtext(9, "Text(80)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-option", 74);
        i0.ɵɵtext(11, "Text(80+)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-option", 75);
        i0.ɵɵtext(13, "Radio");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-option", 76);
        i0.ɵɵtext(15, "Selecteur");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-option", 77);
        i0.ɵɵtext(17, "Toggle");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-option", 78);
        i0.ɵɵtext(19, "Checkbox");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-option", 79);
        i0.ɵɵtext(21, "Checkbox multiple");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "mat-option", 80);
        i0.ɵɵtext(23, "Email");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "mat-option", 81);
        i0.ɵɵtext(25, "Password");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "mat-option", 82);
        i0.ɵɵtext(27, "Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "mat-option", 83);
        i0.ɵɵtext(29, "Phone");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "mat-option", 84);
        i0.ɵɵtext(31, "Aucun");
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(32, TemplateProfileCreateComponent_div_42_ng_container_32_Template, 33, 20, "ng-container", 5);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r5 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Param\u00E8tre du bloc ", ctx_r5.currentEditBlock.label, "");
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx_r5.currentEditBlock.type)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0$3));
        i0.ɵɵadvance(25);
        i0.ɵɵproperty("ngIf", ctx_r5.currentEditBlock.type !== "none");
    }
}
function TemplateProfileCreateComponent_div_43_mat_option_12_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 121);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r290 = ctx.$implicit;
        i0.ɵɵproperty("value", item_r290.value);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r290.value);
    }
}
function TemplateProfileCreateComponent_div_43_Template(rf, ctx) {
    if (rf & 1) {
        const _r292 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 69)(1, "h3");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 125)(4, "mat-form-field", 85)(5, "mat-label");
        i0.ɵɵtext(6, "Nom de la section");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "input", 86);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_43_Template_input_ngModelChange_7_listener() { i0.ɵɵrestoreView(_r292); const ctx_r291 = i0.ɵɵnextContext(); return ctx_r291.onChangeCategoryName(); })("ngModelChange", function TemplateProfileCreateComponent_div_43_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r292); const ctx_r293 = i0.ɵɵnextContext(); return ctx_r293.currentEditBlock.name = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(8, "mat-form-field", 117)(9, "mat-label");
        i0.ɵɵtext(10, "Equipe de gestion");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-select", 126);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_43_Template_mat_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r292); const ctx_r294 = i0.ɵɵnextContext(); return ctx_r294.currentEditBlock.selector.value = $event; });
        i0.ɵɵtemplate(12, TemplateProfileCreateComponent_div_43_mat_option_12_Template, 2, 2, "mat-option", 119);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(13, "div", 98)(14, "button", 127);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_43_Template_button_click_14_listener($event) { i0.ɵɵrestoreView(_r292); const ctx_r295 = i0.ɵɵnextContext(); return ctx_r295.onAddNewSubLevelFieldBlock($event); });
        i0.ɵɵtext(15, "Sous-cat\u00E9gorie ");
        i0.ɵɵelementStart(16, "mat-icon");
        i0.ɵɵtext(17, "device_hub ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(18, "button", 127);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_43_Template_button_click_18_listener($event) { i0.ɵɵrestoreView(_r292); const ctx_r296 = i0.ɵɵnextContext(); return ctx_r296.onDuplicatedBlock($event); });
        i0.ɵɵtext(19, "Dupliquer le bloc");
        i0.ɵɵelementStart(20, "mat-icon");
        i0.ɵɵtext(21, "filter_none");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(22, "button", 101);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_43_Template_button_click_22_listener($event) { i0.ɵɵrestoreView(_r292); const ctx_r297 = i0.ɵɵnextContext(); return ctx_r297.onRemoveFieldBlock($event); });
        i0.ɵɵtext(23, "Supprimer le bloc ");
        i0.ɵɵelementStart(24, "mat-icon");
        i0.ɵɵtext(25, " delete");
        i0.ɵɵelementEnd()()()()();
    }
    if (rf & 2) {
        const ctx_r6 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Param\u00E8tre de la section ", ctx_r6.currentEditBlock.name, "");
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx_r6.currentEditBlock.name)("ngModelOptions", i0.ɵɵpureFunction0(7, _c0$3));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx_r6.currentEditBlock.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(8, _c0$3));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r6.currentEditBlock.selector.defaultValue);
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("disabled", !ctx_r6.currentEditBlock.editable);
    }
}
class TemplateProfileCreateComponent {
    constructor(fb, service, route, router, dialog, scrollToService) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.scrollToService = scrollToService;
        this.validCategory = false;
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentProfil = {};
        this.canExit = true;
        this.tags = [];
        this.id = "0";
        this.parent = [];
        this.loading = false;
        this.editIndex = null;
        this.showProfileName = true;
        this.liveLabel = "Publier le profil";
        this.draftLabel = "Enregistrer le brouillon";
        this.picto = "";
        this.all = "";
        this.s1 = "";
        this.s2 = "";
        this.s3 = "";
        this.s4 = "";
        this.conditionData = {
            all: [],
            s1: [],
            s2: [],
            s3: [],
            defaultValue: []
        };
        this.categories = [];
        this.isBlock = false;
        this.isSection = false;
        this.currentChip = "";
        this.prevValue = "";
        this.historics = [];
        this.currentCanceledIndex = null;
        this.newFieldIndex = null;
        this.defaultCategorie = [
            {
                name: "Utilisateur",
                key: 'utilisateur',
                editable: false,
                deleteable: false,
                expandMore: false,
                expandOnboarding: true,
                defaultValue: false,
                suffixEndpoint: "category/user",
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                forms: [
                    {
                        label: "Civilité",
                        key: "Salutation",
                        expandOnboarding: true,
                        defaultValue: [{ value: "M.", checked: false }, { value: "Mme", checked: false }],
                        condition: {},
                        value: null,
                        size: 10,
                        isMandatory: true,
                        otherValue: '',
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Type de profil",
                        key: "Type_de_profil_Nowboard__c",
                        expandOnboarding: true,
                        defaultValue: [{ value: "Manager", checked: false }, { value: "Utilisateur", checked: false }],
                        condition: {},
                        value: null,
                        size: 10,
                        isMandatory: true,
                        otherValue: '',
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Nom",
                        key: "LastName",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        condition: {},
                        otherValue: '',
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Prénom",
                        key: "FirstName",
                        expandOnboarding: true,
                        condition: {},
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Email",
                        key: "Email",
                        expandOnboarding: true,
                        defaultValue: null,
                        condition: {},
                        value: null,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "email",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Fixe (opt)",
                        key: "Phone",
                        expandOnboarding: true,
                        defaultValue: null,
                        condition: {},
                        value: null,
                        size: 20,
                        isMandatory: false,
                        otherValue: '',
                        type: "tel",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Mobile",
                        key: "MobilePhone",
                        expandOnboarding: true,
                        defaultValue: null,
                        condition: {},
                        value: null,
                        size: 20,
                        isMandatory: false,
                        otherValue: '',
                        type: "tel",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Fonction",
                        key: "Title",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        condition: {},
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Etablissement / Site",
                        key: "AccountName",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        condition: {},
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Accès au portail",
                        key: "Acc_s_au_portail_client_NowBoard__c",
                        condition: {},
                        expandOnboarding: true,
                        defaultValue: [{ value: "Oui", checked: false }, { value: "Non", checked: false }],
                        value: null,
                        size: 10,
                        isMandatory: true,
                        otherValue: '',
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Langue",
                        key: "Langue_maternelle__c",
                        expandOnboarding: true,
                        defaultValue: [{ value: "Français", checked: false }, { value: "Anglais", checked: false }],
                        condition: {},
                        value: null,
                        size: 10,
                        isMandatory: true,
                        otherValue: '',
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Date d'entrée",
                        key: "date_of_entry",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        condition: {},
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "date",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                ],
            },
            {
                name: "Session d'utilisateur",
                key: "sessiond'utilisateur",
                editable: true,
                isConditional: false,
                conditionValue: "",
                condition: {},
                deleteable: true,
                selected: true,
                expandMore: false,
                expandOnboarding: true,
                defaultValue: false,
                suffixEndpoint: "category/user-session",
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                forms: [
                    {
                        label: "Utilisateur local à créer",
                        key: "UserLocalToCreate",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        /*selector: {
                          label: "Company",
                          key: "Company",
                          defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                          value: "Nowteam"
                        },*/
                        forms: [
                            {
                                label: "Login",
                                key: "Login",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: false,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Mot de passe",
                                key: "Password",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "password",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                    {
                        label: "Utilisateur AD (serveur) à créer",
                        key: "UserServerToCreate",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Nom de domaine",
                                key: "DomainName",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: false,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Votre login",
                                key: "YourLogin",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Votre mot de passe",
                                key: "YourPassword",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "password",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Groupe de sécurité",
                                key: "GroupSecurity",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: true,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "checkbox",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                                forms: [
                                    {
                                        label: "Utilisateur avec les droits similaires",
                                        key: "UserWithSimilarAccess",
                                        expandOnboarding: true,
                                        defaultValue: null,
                                        value: null,
                                        size: 80,
                                        isMandatory: true,
                                        otherValue: '',
                                        type: "text",
                                        editable: true,
                                        isConditional: false,
                                        conditionValue: "",
                                        condition: {},
                                        deleteable: true,
                                        subLevel: 3,
                                        expandMore: false,
                                    },
                                    {
                                        label: "Descriptions",
                                        key: "Description",
                                        expandOnboarding: true,
                                        defaultValue: null,
                                        value: null,
                                        size: 255,
                                        isMandatory: true,
                                        otherValue: '',
                                        type: "textarea",
                                        editable: true,
                                        isConditional: false,
                                        conditionValue: "",
                                        condition: {},
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
                key: 'messagerie',
                expandMore: false,
                suffixEndpoint: "category/messagerie",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                condition: {},
                deleteable: true,
                expandOnboarding: true,
                defaultValue: false,
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                forms: [
                    {
                        label: "Adresse mail à créer",
                        key: "EmailToCreate",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        /*selector: {
                          label: "Company",
                          key: "Company",
                          defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                          value: "Nowteam"
                        },*/
                        forms: [
                            {
                                label: "Adresse mail",
                                key: "Email",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "email",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Type de licence (si gérées par le client)",
                                key: "SerialKey",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                    {
                        label: "Listes  de distribution",
                        key: "DistributionList",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        /*selector: {
                          label: "Company",
                          key: "Company",
                          defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                          value: "Nowteam"
                        },*/
                        forms: [
                            {
                                label: "Utilisateur avec les listes similaires",
                                key: "UserWithSimilarList",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Descriptions",
                                key: "Description",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                otherValue: '',
                                type: "textarea",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                    {
                        label: "Ajouter des boites mails délégués",
                        key: "AddInboxMailDelegate",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        /*selector: {
                          label: "Company",
                          key: "Company",
                          defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                          value: "Nowteam"
                        },*/
                        forms: [
                            {
                                label: "Descriptions",
                                key: "Description",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                otherValue: '',
                                type: "textarea",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
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
                key: 'serveur',
                expandMore: false,
                suffixEndpoint: "category/serveur",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                condition: {},
                deleteable: true,
                expandOnboarding: true,
                defaultValue: false,
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                forms: [
                    {
                        label: "Accès aux lecteurs réseaux",
                        key: "ReadNetworkAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        /*selector: {
                          label: "Company",
                          key: "Company",
                          defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                          value: "Nowteam"
                        },*/
                        forms: [
                            {
                                label: "Nom du serveur",
                                key: "ServerName",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: false,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Chemin du dossier",
                                key: "FolderPath",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Lettre à attribuer",
                                key: "AttributLetter",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
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
                key: 'vpn',
                expandMore: false,
                suffixEndpoint: "category/vpn",
                selected: true,
                expandOnboarding: true,
                defaultValue: false,
                editable: true,
                isConditional: false,
                conditionValue: "",
                condition: {},
                deleteable: true,
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                forms: [
                    {
                        label: "Accès au VPN",
                        key: "VpnAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        //forms: []
                    },
                ],
            },
            {
                name: "Imprimantes",
                key: 'imprimantes',
                expandMore: false,
                suffixEndpoint: "category/imprimente",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                condition: {},
                deleteable: true,
                expandOnboarding: true,
                defaultValue: false,
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                forms: [
                    {
                        label: "Accès aux imprimantes",
                        key: "PrinterAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        /*selector: {
                          label: "Company",
                          key: "Company",
                          defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                          value: "Nowteam"
                        },*/
                        forms: [
                            {
                                label: "Nom / Modèle de l'imprimante / localisation",
                                key: "PrinterName",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                otherValue: '',
                                type: "textarea",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
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
                key: 'applications',
                expandMore: false,
                suffixEndpoint: "category/application",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                condition: {},
                expandOnboarding: true,
                defaultValue: false,
                deleteable: true,
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                forms: [
                    {
                        label: "Accès aux applications ?",
                        key: "ApplicationAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        /*selector: {
                          label: "Company",
                          key: "Company",
                          defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                          value: "Nowteam"
                        },*/
                        forms: [
                            {
                                label: "Descriptions",
                                key: "Description",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                otherValue: '',
                                type: "textarea",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
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
                key: 'poste',
                expandMore: false,
                suffixEndpoint: "category/poste",
                selected: true,
                expandOnboarding: true,
                defaultValue: false,
                editable: true,
                isConditional: false,
                conditionValue: "",
                condition: {},
                deleteable: true,
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                forms: [
                    {
                        label: "Paramétrage de poste",
                        key: "PostParameter",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        /*selector: {
                          label: "Company",
                          key: "Company",
                          defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                          value: "Nowteam"
                        },*/
                        forms: [
                            {
                                label: "Réallocation d'équipement",
                                key: "RealocatedEquipment",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                otherValue: '',
                                type: "textarea",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Nouveau poste",
                                key: "NewPost",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: true,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "checkbox",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                                forms: [
                                    {
                                        label: "Acheté chez Nowteam",
                                        key: "PurchasedAtNowteam",
                                        expandOnboarding: true,
                                        defaultValue: null,
                                        value: null,
                                        size: 1000,
                                        isMandatory: true,
                                        otherValue: '',
                                        type: "textarea",
                                        editable: true,
                                        isConditional: false,
                                        conditionValue: "",
                                        condition: {},
                                        deleteable: true,
                                        subLevel: 3,
                                        expandMore: false,
                                    },
                                    {
                                        label: "Autre",
                                        key: "Other",
                                        expandOnboarding: true,
                                        defaultValue: null,
                                        value: null,
                                        size: 1000,
                                        isMandatory: true,
                                        otherValue: '',
                                        type: "text",
                                        editable: true,
                                        isConditional: false,
                                        conditionValue: "",
                                        condition: {},
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
                key: 'autres',
                expandMore: false,
                suffixEndpoint: "category/autres",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                condition: {},
                expandOnboarding: true,
                defaultValue: false,
                deleteable: true,
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                forms: [
                    {
                        label: "Descriptions",
                        key: "Description",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 1000,
                        isMandatory: false,
                        otherValue: '',
                        type: "textarea",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                    },
                ],
            },
        ];
        this.service._currentTemplate.subscribe((profil) => {
            this.initForm();
            if (profil) {
                this.form.patchValue(profil);
                localStorage.setItem('profil', JSON.stringify(profil));
            }
            else {
                const profil = JSON.parse(localStorage.getItem('profil'));
                if (profil) {
                    this.form.patchValue(profil);
                }
            }
        });
    }
    canDeactivate() {
        if (!this.canExit) {
            this.dialog.open(ExitConfirmComponent, {
                data: ''
            });
            return this.service.canExit$;
        }
        return true;
    }
    onScroll(event) {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll(".create-profile-menus ul li");
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (event.target.scrollTop > sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });
        navLi.forEach((li) => {
            const id = li.getAttribute('id');
            if ((id === null || id === void 0 ? void 0 : id.substring(0, id.length - 1)) === current) {
                li.classList.add("active");
            }
            else {
                li.classList.remove('active');
            }
        });
    }
    initForm() {
        this.form = this.fb.group({
            Name: ["", Validators.required],
            Picto: [""],
            Description: [""],
            Tags: [""],
            Status: [false, Validators.required],
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.id = this.route.snapshot.paramMap.get("id");
            this.form.valueChanges.subscribe(c => {
                this.canExit = false;
            });
            if (this.id !== "0") {
                setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    this.currentProfil = yield this.service.getProfil(this.id);
                    this.form.patchValue(this.currentProfil);
                    this.categories = this.currentProfil.categories.map((data) => (Object.assign(Object.assign({}, data), { key: data.key || data.name.replace(/\s/g, '') })));
                }), 500);
            }
            else {
                this.showProfileName = true;
                this.categories = this.defaultCategorie;
            }
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                this.tags = yield this.service.getAllTags();
            }), 500);
            this.getConditionValues();
        });
    }
    onAddNewCategory(e) {
        e.preventDefault();
        this.canExit = false;
        const data = {
            name: "Nom de la catégorie" + this.categories.length,
            key: 'newCategory' + this.categories.length,
            editable: true,
            isConditional: false,
            conditionValue: "",
            condition: {},
            expandOnboarding: true,
            deleteable: true,
            expandMore: true,
            suffixEndpoint: "",
            selector: {
                label: "Company",
                key: "Company",
                defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                value: "Nowteam"
            },
            ticketType: {
                label: "Type de ticket",
                key: "tycketType",
                defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                value: "Creation_de_compte"
            },
            forms: [
                {
                    label: `Label à renommer (${1})`,
                    key: "",
                    expandOnboarding: true,
                    defaultValue: null,
                    value: null,
                    size: 80,
                    isMandatory: true,
                    otherValue: '',
                    type: "text",
                    deleteable: true,
                    editable: true,
                    isConditional: false,
                    conditionValue: "",
                    condition: {},
                },
            ],
        };
        this.categories.push(data);
        this.onHistorics({
            form: data,
            method: 'push',
            location: 'category',
            params: [this.categories.length - 1]
        });
        setTimeout(() => {
            this.scrollToService.scrollTo({
                target: data.name,
                container: 'categories-id',
                duration: 650,
                easing: 'easeOutElastic',
                offset: 20
            });
            setTimeout(() => {
                this.onExpendMore({ field: data }, this.categories.length - 1);
                this.onActiveMenu(data, this.categories.length - 1);
            }, 300);
        }, 200);
    }
    onChangeCategoryName() {
        this.currentEditBlock.key = this.currentEditBlock.name.replace(/\s/g, '');
    }
    checkBlink(index, level) {
        return String(index) + String(level);
    }
    onAddNewField(...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 1 ? this.categories[params[0]].forms : length === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        const data = {
            label: `Label à renommer (${forms.length + 1})`,
            key: "",
            expandOnboarding: true,
            defaultValue: null,
            value: null,
            size: 80,
            isMandatory: true,
            otherValue: '',
            type: "text",
            deleteable: true,
            editable: true,
            isConditional: false,
            conditionValue: "",
            condition: {},
            subLevel: params.length,
            //forms: []
        };
        forms.push(data);
        this.newFieldIndex = String(forms.length - 1) + String(length);
        setTimeout(() => {
            this.newFieldIndex = null;
        }, 5000);
        this.onHistorics({
            form: data,
            method: 'push',
            location: 'forms',
            params
        });
        this.onEditBlock(forms.at(-1), params);
    }
    onAddNewSubLevelField(...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.expandMore = true;
        forms.forms = [];
        const newForm = {
            label: "",
            key: "",
            expandOnboarding: true,
            defaultValue: null,
            value: null,
            size: 80,
            isMandatory: true,
            otherValue: '',
            type: "text",
            deleteable: true,
            editable: true,
            isConditional: false,
            conditionValue: "",
            condition: {},
            subLevel: params.length,
            expandMore: true,
            //forms: []
        };
        forms.forms.push(newForm);
        this.onHistorics({
            form: newForm,
            method: 'push',
            location: 'forms',
            params
        });
    }
    onRemoveField(...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms : length === 3 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.splice(params[length - 1], 1);
        this.onHistorics({
            form: forms[params[length - 1]],
            location: 'forms',
            method: 'splice',
            params
        });
    }
    onRemoveCategory(e, i) {
        e.preventDefault();
        this.canExit = false;
        this.onHistorics({
            form: this.categories.splice(i, 1),
            method: 'splice',
            location: 'category',
            params: [i]
        });
    }
    onChangeCategory() {
        return this.categories.every((cat) => cat.name !== "" && cat.forms.every((field) => field.label !== "" && field.type !== ""));
    }
    onSubmit(isPublish) {
        return __awaiter(this, void 0, void 0, function* () {
            this.isSubmitted = isPublish;
            if (this.form.valid && this.onChangeCategory()) {
                this.loading = true;
                if (isPublish) {
                    this.liveLabel = "Chargement....";
                }
                else {
                    this.draftLabel = "Chargement...";
                }
                const result = this.id !== "0"
                    ? yield this.service.updateProfil(Object.assign(Object.assign(Object.assign({}, this.currentProfil), this.form.value), { Status: isPublish, categories: this.categories }))
                    : yield this.service.createProfil(Object.assign(Object.assign({}, this.form.value), { Status: isPublish, categories: this.categories }));
                if (result) {
                    localStorage.removeItem('profil');
                    yield this.service.getAllProfil();
                    this.canExit = true;
                    this.loading = false;
                    this.router.navigate([this.service.mainPath + '/template']);
                }
                else {
                    this.loading = false;
                }
                if (isPublish) {
                    this.liveLabel = "Publier le profil";
                }
                else {
                    this.draftLabel = "Enregistrer le brouillon";
                }
            }
        });
    }
    onChangeType(type, ...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms : length === 3 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        if (type === "select" || type === "radio" || type === "checkbox_multiple") {
            forms[params[length - 1]].defaultValue = [];
        }
        else if (type === "checkbox" || type === "toggle") {
            forms[params[length - 1]].defaultValue = true;
        }
        else {
            forms[params[length - 1]].defaultValue = "";
        }
    }
    onKeyPress(event, ...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (event.key === ";") {
            const exist = forms.defaultValue.find((opt) => opt.value.toLocaleLowerCase() === event.target.value.split(";")[0].toLocaleLowerCase());
            if (!exist) {
                forms.defaultValue.push({
                    value: event.target.value.split(";")[0],
                    checked: false
                });
                event.target.value = "";
            }
            else {
                event.target.value = "";
            }
        }
        // this.getConditionValues()
    }
    removeKeyword(keyword, ...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.defaultValue = forms.defaultValue.filter((option) => option.value !== keyword.value);
        // this.getConditionValues()
    }
    scrollTo(category, i) {
        this.onActiveMenu(category, i);
        if (!category.expandMore) {
            let el = document.getElementById(category.name);
            el.scrollIntoView({
                behavior: 'smooth'
            });
            this.onExpendMore({ field: category }, i);
        }
    }
    onExpendMore(event, ...params) {
        if (event) {
            if (event.event) {
                event.event.preventDefault();
            }
            if (event.field && !event.field.expandMore) {
                for (let i = 0; i < this.categories.length; i++) {
                    this.categories[i].expandMore = false;
                    if (this.categories[i].forms) {
                        for (let j = 0; j < this.categories[i].forms.length; j++) {
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
    }
    onCheckedDefault(event, ...params) {
        if (params.length === 1) {
            this.categories[params[0]].defaultValue = event;
        }
        else if (params.length === 2) {
            this.categories[params[0]].defaultValue = event;
            this.categories[params[0]].forms[params[1]].defaultValue = event;
        }
        else if (params.length === 3) {
            this.categories[params[0]].defaultValue = event;
            this.categories[params[0]].forms[params[1]].defaultValue = event;
            this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue = event;
        }
        else {
            this.categories[params[0]].defaultValue = event;
            this.categories[params[0]].forms[params[1]].defaultValue = event;
            this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue = event;
            this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].defaultValue = event;
        }
        // this.getConditionValues()
    }
    addKeywordFromInput(event, prev, ...params) {
        this.canExit = false;
        const input = event.input;
        const value = event.value;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (value) {
            const prevIndex = forms.defaultValue.findIndex((opt) => opt.value.toLocaleLowerCase() === prev.toLocaleLowerCase());
            if (prevIndex !== -1) {
                forms.defaultValue[prevIndex].value = value.trim();
                input.value = "";
            }
            else {
                const exist = forms.defaultValue.find((opt) => opt.value.toLocaleLowerCase() === event.value.toLocaleLowerCase());
                if (!exist) {
                    forms.defaultValue.push({ value: value.trim(), checked: false });
                    input.value = "";
                }
                else {
                    input.value = "";
                }
            }
        }
        // this.getConditionValues()
    }
    drop(event) {
        this.canExit = false;
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    ingoreDefaultAction(e) {
        e.preventDefault();
    }
    onShowCategory() {
        this.showProfileName = !this.showProfileName;
    }
    onSelectPicto(e, picto) {
        e.preventDefault();
        this.canExit = false;
        this.form.patchValue({ Picto: picto });
        this.isPictoListShow = !this.isPictoListShow;
    }
    onShowPictoList(e) {
        e.preventDefault();
        this.isPictoListShow = !this.isPictoListShow;
    }
    onChangeLabel(event, ...params) {
        const arr = event.label.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.key = arr.join('');
    }
    onCheckedChip(event, ...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        const index = forms.defaultValue.findIndex((chip) => chip.value === event.value);
        if (index !== -1 && forms.type === 'checkbox_multiple') {
            forms.defaultValue[index].checked = !event.checked;
        }
        else if (index !== -1) {
            forms.defaultValue.forEach((value) => {
                value.checked = false;
            });
            forms.defaultValue[index].checked = !event.checked;
        }
        // this.getConditionValues()
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogCreateTemplateComponent, {
            data: {
                tags: this.tags,
                profil: this.form.value
            }
        });
        dialogRef.afterClosed().subscribe((current) => {
            if (current) {
                this.service.currentTemplate.next(current);
            }
        });
    }
    onPassInEditMode(i) {
        this.canExit = false;
        this.editIndex = i;
    }
    onEdit() {
        this.editIndex = null;
    }
    onEditCategoryName(i, name) {
        this.canExit = false;
        this.categories[i].name = name;
        // this.getConditionValues()
    }
    onAcrelink(e) {
        e.preventDefault();
    }
    getConditionValues() {
        const conditionsList = [];
        for (let i = 0; i < this.categories.length; i++) {
            const category = {
                label: this.categories[i].name,
                forms: [],
                key: this.categories[i].key,
                location: {
                    s0Index: i,
                },
                level: 0,
            };
            for (let j = 0; j < this.categories[i].forms.length; j++) {
                const s1Forms = this.categories[i].forms[j];
                const s1Location = {
                    level: 1,
                    location: {
                        s0Index: i,
                        s1Index: j,
                    },
                    key: s1Forms.key,
                    defaultValue: s1Forms.defaultValue,
                    label: s1Forms.label,
                    forms: []
                };
                category.forms.push(s1Location);
                if (s1Forms.forms) {
                    for (let k = 0; k < s1Forms.forms.length; k++) {
                        const s2Forms = s1Forms.forms[k];
                        const s2Location = {
                            level: 2,
                            location: {
                                s0Index: i,
                                s1Index: j,
                                s2Index: k,
                            },
                            defaultValue: s2Forms.defaultValue,
                            label: s2Forms.label,
                            key: s2Forms.key,
                            forms: []
                        };
                        s1Location.forms.push(s2Location);
                        if (s2Forms.forms) {
                            for (let l = 0; l < s2Forms.forms.length; l++) {
                                const s3Forms = s2Forms.forms[l];
                                const s3Location = {
                                    level: 3,
                                    location: {
                                        s0Index: i,
                                        s1Index: j,
                                        s2Index: k,
                                        s3Index: l,
                                    },
                                    defaultValue: s3Forms.defaultValue,
                                    key: s3Forms.key,
                                    label: s3Forms.label,
                                    forms: []
                                };
                                s2Location.forms.push(s3Location);
                                if (s3Location.forms) {
                                    for (let m = 0; m < s3Location.forms.length; m++) {
                                        const s4Location = s3Location.forms[m];
                                        s3Location.forms.push({
                                            level: 4,
                                            location: {
                                                s0Index: i,
                                                s1Index: j,
                                                s2Index: k,
                                                s3Index: l,
                                                s4Index: m,
                                            },
                                            defaultValue: s4Location.defaultValue,
                                            key: s4Location.key,
                                            label: s4Location.label
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            }
            conditionsList.push(category);
        }
        this.conditionData.all = conditionsList;
    }
    onSelectCondition(level, subLevel, value) {
        const condition = this.conditionData[level].find((data) => data.key === value);
        if (level === "all") {
            this.conditionData = Object.assign(Object.assign({}, this.conditionData), { s1: [], s2: [], s3: [], defaultValue: [] });
        }
        this.currentEditBlock.condition = condition;
        this.onGetDefaultValue();
        if (condition.forms.length > 0) {
            this.conditionData[subLevel] = condition.forms;
        }
    }
    onGetDefaultValue() {
        var _a, _b;
        if (this.currentEditBlock.isConditional && ((_b = (_a = this.currentEditBlock) === null || _a === void 0 ? void 0 : _a.condition) === null || _b === void 0 ? void 0 : _b.location)) {
            const _c = this.currentEditBlock.condition.location, { s0Index } = _c, rest = __rest(_c, ["s0Index"]);
            let currentData = this.categories[s0Index];
            for (const key in rest) {
                if (currentData.forms[rest[key]]) {
                    currentData = currentData.forms[rest[key]];
                }
            }
            return currentData.defaultValue || [];
        }
        return [];
    }
    onActiveMenu(cat, i) {
        this.editIndex = i;
        this.paramsIndex = [i];
        this.isSection = true;
        this.isBlock = false;
        this.currentEditBlock = cat;
    }
    catNameStart(str) {
        const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        return vowels.includes(str.substr(0, 1).toLocaleLowerCase());
    }
    onEditBlock(block, ...params) {
        this.isBlock = true;
        this.currentEditBlock = block;
        const { condition } = this.currentEditBlock;
        if (condition && condition.location) {
            const location = condition.location;
            if ((location === null || location === void 0 ? void 0 : location.s0Index) >= 0) {
                this.all = this.categories[location.s0Index].key;
            }
            if ((location === null || location === void 0 ? void 0 : location.s1Index) >= 0) {
                this.s1 = this.categories[location.s0Index].forms[location.s1Index].key;
            }
            if ((location === null || location === void 0 ? void 0 : location.s2Index) >= 0) {
                this.s2 = this.categories[location.s0Index].forms[location.s1Index].forms[location.s2Index].key;
            }
            if ((location === null || location === void 0 ? void 0 : location.s3Index) >= 0) {
                this.s3 = this.categories[location.s0Index].forms[location.s1Index].forms[location.s2Index].forms[location.s3Index].key;
            }
            if ((location === null || location === void 0 ? void 0 : location.s4Index) >= 0) {
                this.s4 = this.categories[location.s0Index].forms[location.s1Index].forms[location.s2Index].forms[location.s3Index].forms[location.s4Index].key;
            }
        }
        this.isSection = false;
        this.paramsIndex = params;
        this.getConditionValues();
    }
    onRemoveblock(event, block) {
        event.preventDefault();
    }
    onRemoveFieldBlock(event) {
        event.preventDefault();
        const length = this.paramsIndex.length;
        this.canExit = false;
        const forms = length === 1 ? this.categories : length === 2 ? this.categories[this.paramsIndex[0]].forms : length === 3 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms : this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[2]].forms;
        this.currentEditBlock = null;
        this.isBlock = false;
        this.isSection = false;
        this.onHistorics({
            form: forms.splice(this.paramsIndex[length - 1], 1)[0],
            method: 'splice',
            location: length === 1 ? 'category' : 'forms',
            params: this.paramsIndex
        });
    }
    onDuplicatedBlock(event) {
        event.preventDefault();
        const length = this.paramsIndex.length;
        this.canExit = false;
        const forms = length === 1 ? this.categories : length === 2 ? this.categories[this.paramsIndex[0]].forms : length === 3 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms : this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[2]].forms;
        const cloneEditable = this.onEditableBlock(Object.assign(Object.assign({}, this.currentEditBlock), { name: this.currentEditBlock.name + ' - copie' }));
        const cloneBlock = JSON.stringify(cloneEditable);
        forms.push(JSON.parse(cloneBlock));
        this.currentEditBlock = forms.at(-1);
        const params = [...this.paramsIndex];
        params.pop();
        params.push(forms.length - 1);
        this.onHistorics({
            form: JSON.parse(cloneBlock),
            method: 'push',
            location: 'forms',
            params
        });
        // this.editIndex = forms.length - 1;
    }
    onEditableBlock(notEditableBlock) {
        const editableFormBlock = notEditableBlock.forms ? notEditableBlock.forms
            .map((cat) => {
            if (cat.forms) {
                const f = cat.forms
                    .map((sub) => {
                    if (sub.forms) {
                        const s = sub.forms.map((child) => {
                            if (child.forms) {
                                return Object.assign(Object.assign({}, child), { editable: true });
                            }
                            return Object.assign(Object.assign({}, child), { editable: true });
                        });
                        return Object.assign(Object.assign({}, sub), { editable: true, forms: s });
                    }
                    return Object.assign(Object.assign({}, sub), { editable: true });
                });
                return Object.assign(Object.assign({}, cat), { editable: true, forms: f });
            }
            return Object.assign(Object.assign({}, cat), { editable: true });
        }) : null;
        return editableFormBlock ? Object.assign(Object.assign({}, notEditableBlock), { editable: true, forms: editableFormBlock }) : notEditableBlock;
    }
    onKeyUpChip(event, field) {
        this.canExit = false;
        if (event.key === ";") {
            const exist = field.defaultValue.find((opt) => opt.value.toLocaleLowerCase() === event.target.value.split(";")[0].toLocaleLowerCase());
            if (!exist) {
                field.defaultValue.push({
                    value: event.target.value.split(";")[0].slice(0, 20),
                    checked: false
                });
                event.target.value = "";
            }
            else {
                event.target.value = "";
            }
        }
        // this.getConditionValues()
    }
    onEditChip(chip) {
        if (chip.value === this.currentChip) {
            this.currentChip = "";
            this.prevValue = "";
        }
        else {
            this.currentChip = chip.value;
            this.prevValue = chip.value;
        }
    }
    addKeywordFromInputBlock(event, field, prev) {
        var _a;
        this.canExit = false;
        const input = event.input;
        const value = event.value;
        if (value) {
            const prevIndex = (_a = field.defaultValue) === null || _a === void 0 ? void 0 : _a.findIndex((opt) => opt.value.toLocaleLowerCase() === prev.toLocaleLowerCase());
            if (prevIndex !== -1) {
                field.defaultValue[prevIndex].value = value.trim();
                input.value = "";
            }
            else {
                const exist = field.defaultValue.find((opt) => opt.value.toLocaleLowerCase() === event.value.toLocaleLowerCase());
                if (!exist) {
                    field.defaultValue.push({ value: value.trim().slice(0, 15), checked: false });
                    input.value = "";
                }
                else {
                    input.value = "";
                }
            }
        }
        // this.getConditionValues()
    }
    onCheckedChipBlock(event, field) {
        this.canExit = false;
        const index = field.defaultValue.findIndex((chip) => chip.value === event.value);
        if (index !== -1 && field.type === 'checkbox_multiple') {
            field.defaultValue[index].checked = !event.checked;
        }
        else if (index !== -1) {
            field.defaultValue.forEach((value) => {
                value.checked = false;
            });
            field.defaultValue[index].checked = !event.checked;
        }
        // this.getConditionValues()
    }
    removeKeywordBlock(keyword, field) {
        this.canExit = false;
        field.defaultValue = field.defaultValue.filter((option) => option.value !== keyword.value);
        // this.getConditionValues()
    }
    onChangeTypeBlock(field) {
        this.canExit = false;
        if (field.type === "select" || field.type === "radio" || field.type === "checkbox_multiple") {
            field.defaultValue = [];
        }
        else if (field.type === "checkbox" || field.type === "toggle") {
            field.defaultValue = true;
            field.value = false;
        }
        else if (field.type === 'none') {
            field.defaultValue = "";
            field.value = "";
            field.label = "Aucun";
        }
        else {
            field.defaultValue = "";
            field.value = "";
        }
    }
    onAddNewSubLevelFieldBlock(event) {
        event.preventDefault();
        this.canExit = false;
        const length = this.paramsIndex.length;
        const forms = length === 1 ? this.categories[this.paramsIndex[0]] : length === 2 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[length - 1]] : length === 3 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[length - 1]] : this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[2]].forms[this.paramsIndex[length - 1]];
        forms.expandMore = true;
        forms.forms = forms.forms || [];
        const data = {
            label: "Nouvelle sous catégorie à renommer",
            key: "Nouvellesouscatégorieàrenommer",
            expandOnboarding: true,
            defaultValue: null,
            value: true,
            size: 80,
            isMandatory: false,
            otherValue: '',
            type: "text",
            editable: true,
            isConditional: false,
            conditionValue: "",
            condition: {},
            deleteable: true,
            subLevel: 1,
            expandMore: false,
        };
        forms.forms.push(data);
        this.onHistorics({
            form: data,
            method: 'push',
            location: 'forms',
            params: this.paramsIndex
        });
    }
    onOpenTypeDialog(field) {
        const dialogRef = this.dialog.open(TypeComponent, {
            data: { selectedType: field.type }
        });
        dialogRef.afterClosed().subscribe((type) => {
            if (type) {
                field.type = type;
                this.onChangeTypeBlock(field);
            }
        });
    }
    fieldWidth(type, length, index) {
        if (type === 'toggle') {
            return '50%';
        }
        else if (type === "text" || type === "date" || type === "none" || type == 'select' || type === 'tel' || type === 'email' || type === 'password' || type === 'textarea') {
            if (length < 3) {
                return '50%';
            }
            else if (length === 3) {
                return '33%';
            }
            else if (length === 4) {
                return '50%';
            }
            else if (length === 5) {
                return index <= 2 ? '33%' : '50%';
            }
            else if (length >= 6) {
                return '33%';
            }
        }
        return '100%';
    }
    onCancel(left) {
        if (left) {
            const current = this.currentCanceledIndex === null ? this.historics.length - 1 : this.currentCanceledIndex;
            if (this.historics.length > 0 && current >= 0) {
                this.currentCanceledIndex = current - 1;
                const lastAction = this.historics[current];
                const params = lastAction.params;
                const length = params.length;
                const forms = length === 1 ? this.categories : length === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
                if (lastAction.method === "splice") {
                    if (length === 1 && lastAction.location === 'category') {
                        forms.push(lastAction.form);
                    }
                    else if (length === 1 && lastAction.location === 'forms') {
                        forms[params[0]].forms.push(lastAction.form);
                    }
                    else {
                        forms.push(lastAction.form);
                    }
                    if (lastAction.location === 'category') {
                        this.onActiveMenu(forms[forms.length - 1], forms.length - 1);
                    }
                    else {
                        this.onEditBlock(forms[forms.length - 1], lastAction.params);
                    }
                }
                else {
                    if (length === 1 && lastAction.location === 'category') {
                        forms.splice(params[length - 1], 1);
                    }
                    else if (length === 1 && lastAction.location === 'forms') {
                        forms[params[0]].forms.splice(params[length - 1], 1);
                    }
                    else {
                        forms.splice(params[length - 1], 1);
                    }
                    this.currentEditBlock = null;
                }
            }
        }
        else {
            if (this.currentCanceledIndex !== null && this.historics.length > this.currentCanceledIndex) {
                this.currentCanceledIndex += 1;
                const lastAction = this.historics[this.currentCanceledIndex];
                const params = lastAction.params;
                const length = params.length;
                const forms = length === 1 ? this.categories : length === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
                if (lastAction.method === "push") {
                    if (length === 1 && lastAction.location === 'category') {
                        forms.push(lastAction.form);
                    }
                    else if (length === 1 && lastAction.location === 'forms') {
                        forms[params[0]].forms.push(lastAction.form);
                    }
                    else {
                        forms.push(lastAction.form);
                    }
                    if (lastAction.location === 'category') {
                        this.onActiveMenu(forms[forms.length - 1], forms.length - 1);
                    }
                    else {
                        this.onEditBlock(forms[forms.length - 1], lastAction.params);
                    }
                }
                else {
                    if (length === 1 && lastAction.location === 'category') {
                        forms.splice(params[length - 1], 1);
                    }
                    else if (length === 1 && lastAction.location === 'forms') {
                        forms[params[0]].forms.splice(params[length - 1], 1);
                    }
                    else {
                        forms.splice(params[length - 1], 1);
                    }
                    this.currentEditBlock = null;
                }
            }
        }
    }
    onCheckValue(event) {
        this.invalideValue = event;
    }
    onHistorics(data) {
        if (this.currentCanceledIndex !== null) {
            this.historics = [];
            this.currentCanceledIndex = null;
        }
        this.historics.push(data);
    }
}
TemplateProfileCreateComponent.ɵfac = function TemplateProfileCreateComponent_Factory(t) { return new (t || TemplateProfileCreateComponent)(i0.ɵɵdirectiveInject(i1$2.FormBuilder), i0.ɵɵdirectiveInject(OnboardingService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i1$1.MatDialog), i0.ɵɵdirectiveInject(i5$2.ScrollToService)); };
TemplateProfileCreateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TemplateProfileCreateComponent, selectors: [["onboarding-create-profile-template"]], hostBindings: function TemplateProfileCreateComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵlistener("scroll", function TemplateProfileCreateComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
        }
    }, decls: 44, vars: 13, consts: [[1, "header-create-profile"], [1, "header-create-profile-top"], [3, "click"], [1, "create-profile-action"], ["mat-button", "", "type", "submit", 1, "register-button", 3, "click"], [4, "ngIf"], ["mat-button", "", "type", "submit", 1, "register-button", "live-button", 3, "click"], ["mat-button", "", "type", "submit", 1, "register-button", "live-button", "forward", 3, "disabled", "click"], [1, "create-profile-menus"], ["class", "li-title", 3, "class", "id", "click", 4, "ngFor", "ngForOf"], ["mat-mini-fab", "", "color", "transparent", 3, "click"], [3, "formGroup"], [1, "category"], ["cdkDropListGroup", "", 1, "fields"], ["id", "categories-id", "cdkDropList", "", 1, "fields-inner", "example-list", "mt-10", 3, "cdkDropListData", "cdkDropListDropped", "scroll"], ["parentList", "cdkDropList"], ["class", "category-item section-item", "cdkDrag", "", 3, "id", "paddingBottom", "class", "click", 4, "ngFor", "ngForOf"], [1, "add-button-container", "add-category-button", "add-step"], [2, "background-color", "transparent"], [2, "height", "400px"], [1, "field-property"], ["class", "property-content", 4, "ngIf"], [1, "li-title", 3, "id", "click"], ["cdkDrag", "", 1, "category-item", "section-item", 3, "id", "click"], ["cdkDragHandle", "", 1, "left-action", "move-icons"], ["mat-raised-button", "", 1, "transparent-button", 3, "click"], [1, "drag-icon"], [1, "field-content"], [1, "field-item"], [1, "full-width", "input-category-name"], [1, "sub-category-name"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "click"], ["class", "child-list", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 1, "child-list", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "field-box", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "field-box", 3, "id"], ["cdkDrag", ""], [1, "fields-content"], ["class", "button-action", 4, "ngIf"], [1, "fields-container"], ["class", "sub-header", 4, "ngIf"], [3, "field", "length", "i", "j", "blink", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock"], ["class", "child", 4, "ngIf"], ["class", "add-button-container add-button-sub-category", 4, "ngIf"], [1, "button-action"], [1, "sub-header"], ["mat-raised-button", "", 1, "transparent-button", "setting", 3, "click"], [1, "setting-icon"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "disabled", "click"], [1, "child"], ["class", "child-content", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 1, "child-content", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "", "style", "margin-bottom: 20px", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "", 2, "margin-bottom", "20px", 3, "id"], ["class", "button-action child-2-background", 4, "ngIf"], [3, "field", "length", "i", "blink", "j", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock"], ["class", "add-button-sub-category", 4, "ngIf"], [1, "button-action", "child-2-background"], ["type", "text", "required", "", "placeholder", "Saisir le nom de la sous cat\u00E9gorie", 1, "full-width", "input-category-name", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["class", "", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "", 3, "id"], ["class", "button-action child-3-background", 4, "ngIf"], [3, "field", "length", "blink", "i", "j", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock"], [1, "button-action", "child-3-background"], [1, "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 2, "margin", "10px auto", 3, "click"], [1, "add-button-container", "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 1, "add-button", 2, "margin", "10px auto", "padding", "10px 0", 3, "disabled", "click"], [1, "property-content"], [1, "property-content-inner", 2, "width", "100%"], ["appearance", "outline", 1, "form-field", "mat-select", "full-width", 2, "cursor", "pointer"], ["disabled", "true", "required", "", 1, "select-type-class", 3, "ngModel", "ngModelOptions", "click", "ngModelChange"], ["value", "text"], ["value", "textarea"], ["value", "radio"], ["value", "select"], ["value", "toggle"], ["value", "checkbox"], ["value", "checkbox_multiple"], ["value", "email"], ["value", "password"], ["value", "date"], ["value", "tel"], ["value", "none"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "ngSwitch"], ["class", "flex-auto", "style", "display: flex;align-items: flex-end;margin: 10px 0;", 4, "ngSwitchCase"], ["class", "flex-auto", 4, "ngSwitchCase"], ["class", "flex-auto full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 3, "opacity", 4, "ngSwitchDefault"], [1, "mandatory", "top-10", "bottom-10"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "mandatory", "top-10"], ["aria-labelledby", "example-radio-group-label", "class", "example-radio-group", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], [1, "bloc-action"], ["mat-button", "", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", 3, "disabled", "click"], ["mat-button", "", 1, "delete-bloc", 3, "disabled", "click"], [1, "flex-auto", 2, "display", "flex", "align-items", "flex-end", "margin", "10px 0"], ["color", "#6FE8D7", 1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], [2, "margin-left", "10px"], [1, "flex-auto"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "full-width"], ["cdkDropList", "", "aria-label", "Video keywords; let index=index", "multiple", "", "selectable", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList", "chipList", ""], ["style", "min-height: 25px;width: auto;", "cdkDrag", "", 3, "selected", "value", "removable", "dblclick", "click", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "ngModel", "ngModelOptions", "matChipInputTokenEnd", "keyup", "ngModelChange"], ["chipsInput", ""], ["cdkDrag", "", 2, "min-height", "25px", "width", "auto", 3, "selected", "value", "removable", "dblclick", "click", "removed"], ["matChipRemove", ""], ["type", "text", "matInput", "", "placeholder", "Description...", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "", 3, "type", "disabled", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "mat-select", "full-width"], [3, "ngModel", "ngModelOptions", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-field mat-select full-width", "appearance", "outline", 4, "ngIf"], [3, "value"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "example-radio-button", "style", "margin-right: 10px", 3, "value", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 2, "margin-right", "10px", 3, "value"], [1, "property-content-inner"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-button", "", 3, "click"]], template: function TemplateProfileCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "main")(1, "div", 0)(2, "div", 1)(3, "h3")(4, "span");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-icon", 2);
            i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_mat_icon_click_6_listener() { return ctx.openDialog(); });
            i0.ɵɵtext(7, "edit");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 3)(9, "button", 4);
            i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_9_listener() { return ctx.onSubmit(false); });
            i0.ɵɵtemplate(10, TemplateProfileCreateComponent_lib_loading_page_10_Template, 1, 0, "lib-loading-page", 5);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 6);
            i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_12_listener() { return ctx.onSubmit(true); });
            i0.ɵɵtemplate(13, TemplateProfileCreateComponent_lib_loading_page_13_Template, 1, 0, "lib-loading-page", 5);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "button", 7);
            i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_15_listener() { return ctx.onCancel(true); });
            i0.ɵɵelementStart(16, "mat-icon");
            i0.ɵɵtext(17, "rotate_left");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "button", 7);
            i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_18_listener() { return ctx.onCancel(false); });
            i0.ɵɵelementStart(19, "mat-icon");
            i0.ɵɵtext(20, "rotate_right");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(21, "div", 8)(22, "ul");
            i0.ɵɵtemplate(23, TemplateProfileCreateComponent_li_23_Template, 2, 4, "li", 9);
            i0.ɵɵelementStart(24, "li")(25, "button", 10);
            i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_25_listener($event) { return ctx.onAddNewCategory($event); });
            i0.ɵɵelementStart(26, "mat-icon");
            i0.ɵɵtext(27, "add");
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵelementStart(28, "form", 11)(29, "div", 12)(30, "div", 13)(31, "div", 14, 15);
            i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_Template_div_cdkDropListDropped_31_listener($event) { return ctx.drop($event); })("scroll", function TemplateProfileCreateComponent_Template_div_scroll_31_listener($event) { return ctx.onScroll($event); });
            i0.ɵɵtemplate(33, TemplateProfileCreateComponent_section_33_Template, 16, 10, "section", 16);
            i0.ɵɵelementStart(34, "div", 17)(35, "button", 2);
            i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_35_listener($event) { return ctx.onAddNewCategory($event); });
            i0.ɵɵtext(36, " Ajouter une \u00E9tape ");
            i0.ɵɵelementStart(37, "mat-icon");
            i0.ɵɵtext(38, "add");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(39, "section", 18);
            i0.ɵɵelement(40, "div", 19);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(41, "div", 20);
            i0.ɵɵtemplate(42, TemplateProfileCreateComponent_div_42_Template, 33, 5, "div", 21);
            i0.ɵɵtemplate(43, TemplateProfileCreateComponent_div_43_Template, 26, 9, "div", 21);
            i0.ɵɵelementEnd()()()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.form.get("Name").value);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.loading && !ctx.isSubmitted);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", ctx.draftLabel, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.loading && ctx.isSubmitted);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.liveLabel, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("disabled", ctx.currentCanceledIndex < 0 || ctx.historics.length === 0);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.currentCanceledIndex === ctx.historics.length - 1 || ctx.currentCanceledIndex === null);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.categories);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("cdkDropListData", ctx.categories);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.categories);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", ctx.isBlock && ctx.currentEditBlock);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isSection && ctx.currentEditBlock);
        }
    }, directives: [i6.MatIcon, i7$1.MatButton, i1$3.NgIf, LoadingPageComponent, i1$3.NgForOf, i1$2.ɵNgNoValidate, i1$2.NgControlStatusGroup, i1$2.FormGroupDirective, i10$1.CdkDropListGroup, i10$1.CdkDropList, i10$1.CdkDrag, i10$1.CdkDragHandle, SubTemplateProfileComponent, i1$2.DefaultValueAccessor, i1$2.RequiredValidator, i1$2.NgControlStatus, i1$2.NgModel, i7.NativeElementInjectorDirective, i8.MatFormField, i8.MatLabel, i10.MatSelect, i11.MatOption, i12.MatInput, i1$3.NgSwitch, i1$3.NgSwitchCase, i5.MatSlideToggle, i5$1.MatCheckbox, i19.MatChipList, i19.MatChip, i19.MatChipRemove, i19.MatChipInput, i1$3.NgSwitchDefault, i12$1.MatRadioGroup, i12$1.MatRadioButton], styles: ["main[_ngcontent-%COMP%]{background:#f4f7f9 0% 0% no-repeat padding-box;height:100vh;display:flex;flex-direction:column;align-items:center;padding:25px}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:89%;width:100%}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;margin-top:20vh;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font: 900 32px/48px Nexa;letter-spacing:0px;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font: 18px/24px Nexa Text;letter-spacing:0px;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font: 900 32px/38px Nexa;letter-spacing:0px;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font: 15px/26px Nexa Text;letter-spacing:0px;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font: 700 15px/17px Nexa;letter-spacing:0px;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]{width:100%;margin:10px 15px;border-radius:5px}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .header-create-profile-top[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center;justify-content:space-between}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .header-create-profile-top[_ngcontent-%COMP%]   .create-profile-action[_ngcontent-%COMP%]{display:flex;align-items:center;gap:25px}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;padding-bottom:5px;display:flex;align-items:center;justify-content:center}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;text-transform:capitalize}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]{max-width:100%;overflow:auto}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-weight:600;font-size:16px;list-style:none;display:flex;align-items:center;gap:20px;padding:0}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-weight:400;font-size:12px;cursor:pointer;text-align:left;font: 12px/19px Nexa Text;letter-spacing:0px;color:#535760}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%]{width:28px;height:28px;line-height:24px}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{border-bottom:2px solid #723CEB}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%]{border-bottom:2px solid #723CEB;font-weight:600}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500;border:none;outline:none;text-align:left;color:#171f26;font-weight:700;font-size:20px;line-height:28px;color:#242731}.sub-category-name[_ngcontent-%COMP%]{font-style:normal;font-weight:250;font-size:14px;line-height:16px;display:flex;align-items:center;color:#575f6e;word-break:break-word}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-mini-fab .mat-button-wrapper{padding:0!important}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-select.mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:8px 0}  .mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}[_nghost-%COMP%]     .input-category-name div.mat-form-field-outline-start, [_nghost-%COMP%]     .cdk-drag-preview .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0px!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0px!important}[_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:transparent}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0px!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-label-wrapper{display:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-infix{border-top:none}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;position:relative;width:100%;border-radius:8px;background-color:#fff;margin-bottom:15px;margin-right:5px;padding:6px 15px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;width:40px;align-self:baseline;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%]{color:#171f26;cursor:move;margin-right:15px}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:calc(100% - 40px);align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .child-list[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .child-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;background-color:transparent;width:103%;position:relative;margin-left:-1.5%}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:baseline;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.field-box[_ngcontent-%COMP%]{margin-bottom:15px;display:flex;align-items:center}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child-content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:30px}.sub-category-forms[_ngcontent-%COMP%]{margin-bottom:0!important;margin-top:10px!important}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;height:100%}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:100%;overflow:hidden;overflow-x:hidden;position:relative;padding-top:10px;height:calc(100% - 10px)}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .fields-inner[_ngcontent-%COMP%]{max-height:100%;height:100%;width:100%;overflow:auto}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-category-button[_ngcontent-%COMP%]{position:relative!important;width:calc(100% - 40px)!important;padding:20px 0}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-category-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-step[_ngcontent-%COMP%]{bottom:0!important;top:0!important;width:100%!important}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:93%;position:absolute;left:3%;bottom:-13px}.add-button-sub-category[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%}.add-button-container[_ngcontent-%COMP%]{background:#ffffff 0% 0% no-repeat padding-box;border-radius:8px;margin-top:10px;padding:10px 0;display:flex;justify-content:center;align-items:center;width:100%;margin-bottom:22px;position:absolute;left:0;top:100%}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font: 17px/26px Nexa Text;letter-spacing:0px;color:#000;box-shadow:none}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%}.add-category[_ngcontent-%COMP%]{background-color:#fcfcfe;border-radius:5px;line-height:26px;margin-left:10px;margin-bottom:10px;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#c2c8d5;width:92%}.field-content[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%]{width:100%}.cdk-drag[_ngcontent-%COMP%]{width:auto;position:relative}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;margin:0}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{align-self:baseline;margin-top:0;margin-left:3px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%]{color:#171f26;cursor:move;margin-right:15px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px;position:relative;margin-bottom:10px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#039be5!important;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #171f26!important;color:#fff!important;box-shadow:0 0 #0003;border-radius:7px}.forward[_ngcontent-%COMP%]{padding:6px}.live-button[_ngcontent-%COMP%]{background-color:#fff!important;color:#171f26!important;border:2px solid #171f26!important}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}.field-property[_ngcontent-%COMP%]{padding:11px;height:calc(100% - 22px);width:400px}.field-property[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;line-height:110%;padding-top:10px;display:flex;align-items:center;color:#242731}.field-property[_ngcontent-%COMP%]   .property-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;padding:0 20px;background:#ffffff;border-radius:8px 8px 0 0;min-height:100%;height:auto;width:400px}.field-property[_ngcontent-%COMP%]   .property-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center}.field-property[_ngcontent-%COMP%]   .property-content[_ngcontent-%COMP%]   .property-content-inner[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:25px;overflow:auto;max-height:700px;padding-bottom:25px}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]{text-align:center}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:6px;margin-top:10px}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:5px}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   .delete-bloc[_ngcontent-%COMP%]{background:#f44336;box-shadow:0 0 #0003;border-radius:7px;color:#fff}.fields-inner[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.fields-inner[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.fields-inner[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent;border-radius:10px}.fields-inner[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:transparent}.toogle-button[_ngcontent-%COMP%]{color:#707273!important;display:flex;align-items:center;font-style:normal;font-weight:400;font-size:18px;line-height:18px}.toogle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5!important;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273!important}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273!important}[_nghost-%COMP%]     .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5!important}.top-10[_ngcontent-%COMP%]{margin-top:10px}.bottom-10[_ngcontent-%COMP%]{margin-bottom:10px}.section-item[_ngcontent-%COMP%]{border:2px solid transparent;overflow:hidden}.section-item[_ngcontent-%COMP%]:hover, .section-item.active[_ngcontent-%COMP%]{border:2px solid #242731;border-radius:8px;cursor:pointer}  .select-type-class.mat-select-disabled .mat-select-value{color:#000!important;cursor:pointer}  button .mat-button-wrapper{display:flex;align-items:center;justify-content:center}  .field-content .mat-form-field,   .field-content .select-content{width:100%}  .field-content .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:100%!important}  .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle,   .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5!important}  .fields-content .mat-radio-button.mat-accent .mat-radio-inner-circle,   .fields-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .fields-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple,   .property-content .mat-radio-button.mat-accent .mat-radio-inner-circle,   .property-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .property-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5!important}  .fields-content .mat-checkbox-checkmark-path,   .property-content .mat-checkbox-checkmark-path{stroke:#039be5!important}  .fields-content .mat-checkbox-frame,   .property-content .mat-checkbox-frame{border:2px solid #039BE5!important}  .fields-content .mat-checkbox-inner-container,   .property-content .mat-checkbox-inner-container{height:20px!important;width:20px!important}.setting[_ngcontent-%COMP%]{z-index:1;background-color:#d5d6d7!important;border-radius:40px;width:42px!important;height:40px!important;padding:0 10px!important;display:flex;align-items:center;justify-content:center;display:none}.setting[_ngcontent-%COMP%]   .setting-icon[_ngcontent-%COMP%], .setting[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{color:#171f26}.sub-header[_ngcontent-%COMP%]:hover   .setting[_ngcontent-%COMP%]{display:flex}.add-button-sub-category[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px auto;width:100%;background-color:transparent;color:#000;box-shadow:none;background-color:#fcfcfe;padding:5px span;padding-width:100%!important}  .add-button{padding:10px 0}  .add-button span{width:100%}  .mat-button[disabled]{opacity:.5!important}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TemplateProfileCreateComponent, [{
            type: Component,
            args: [{ selector: "onboarding-create-profile-template", template: "<main>\r\n  <div class=\"header-create-profile\">\r\n    <div class=\"header-create-profile-top\">\r\n      <h3>\r\n        <span>{{ this.form.get(\"Name\").value }}</span>\r\n        <mat-icon (click)=\"openDialog()\">edit</mat-icon>\r\n      </h3>\r\n      <div class=\"create-profile-action\">\r\n        <button mat-button class=\"register-button\" type=\"submit\" (click)=\"onSubmit(false)\">\r\n          <lib-loading-page *ngIf=\"loading && !isSubmitted\"></lib-loading-page>{{draftLabel}}\r\n        </button>\r\n        <button mat-button class=\"register-button live-button\" type=\"submit\" (click)=\"onSubmit(true)\">\r\n          <lib-loading-page *ngIf=\"loading && isSubmitted\"></lib-loading-page>\r\n          {{liveLabel}}\r\n        </button>\r\n\r\n        <button [disabled]=\"currentCanceledIndex < 0 || historics.length===0\" mat-button\r\n          class=\"register-button live-button forward\" type=\"submit\" (click)=\"onCancel(true)\">\r\n          <mat-icon>rotate_left</mat-icon>\r\n        </button>\r\n        <button [disabled]=\"currentCanceledIndex===historics.length-1 || currentCanceledIndex===null\" mat-button\r\n          class=\"register-button live-button forward\" type=\"submit\" (click)=\"onCancel(false)\">\r\n          <mat-icon>rotate_right</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"create-profile-menus\">\r\n      <ul>\r\n        <li class=\"li-title\" [class]=\"editIndex === i ? 'active' : ''\" *ngFor=\"let cat of categories; let i = index\"\r\n          (click)=\"scrollTo(cat, i)\" [id]=\"cat.name+'x'\">\r\n          <!-- (click)=\"onActiveMenu(cat, i,true)\" [ngxScrollTo]=\"'#' + cat.name\" [id]=\"cat.name+'x'\"> -->\r\n          {{ cat.name }}\r\n        </li>\r\n        <li>\r\n          <button mat-mini-fab color=\"transparent\" (click)=\"onAddNewCategory($event)\">\r\n            <mat-icon>add</mat-icon>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"category\">\r\n      <div class=\"fields\" cdkDropListGroup>\r\n        <div class=\"fields-inner example-list mt-10\" id=\"categories-id\" #parentList=\"cdkDropList\" cdkDropList\r\n          [cdkDropListData]=\"categories\" (cdkDropListDropped)=\"drop($event)\" (scroll)=\"onScroll($event)\">\r\n          <section class=\"category-item section-item\" *ngFor=\"let category of categories; let i = index\" cdkDrag\r\n            [id]=\"category.name\" [style.paddingBottom]=\"category.expandMore ? '50px' : '10px'\"\r\n            [class]=\"editIndex === i ? 'active' : ''\" (click)=\"scrollTo(category, i)\">\r\n            <!-- [class]=\"editIndex === i ? 'active' : ''\" [ngxScrollTo]=\"'#' + category.name\"> -->\r\n            <div class=\"left-action move-icons\" cdkDragHandle>\r\n              <button class=\"transparent-button\" mat-raised-button\r\n                (click)=\"$event.preventDefault();$event.stopPropagation()\">\r\n                <mat-icon class=\"drag-icon\">drag_indicator</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div class=\"field-content\">\r\n              <div class=\"field-item\">\r\n                <!-- <div class=\"field-item\" (click)=\" onExpendMore({ event: $event, field: category }, i)\"> -->\r\n                <div>\r\n                  <p class=\"full-width input-category-name\">\r\n                    {{ category.name }}\r\n                  </p>\r\n                  <p class=\"sub-category-name\">\r\n                    Listes des informations n\u00E9cessaires pour la cr\u00E9ation de {{ catNameStart(category.name) ? \"l'\" +\r\n                    category.name : category.name }}\r\n                  </p>\r\n                </div>\r\n                <button mat-mini-fab color=\"primary\" class=\"expand-button\"\r\n                  (click)=\"$event.stopPropagation();onExpendMore({ event: $event, field: category }, i)\">\r\n                  <mat-icon *ngIf=\"!category.expandMore\">chevron_right</mat-icon>\r\n                  <mat-icon *ngIf=\"category.expandMore\">expand_more</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div #childList=\"cdkDropList\" class=\"child-list\" *ngIf=\"category.forms\" [cdkDropListData]=\"category.forms\"\r\n                cdkDropList (cdkDropListDropped)=\"drop($event)\">\r\n                <ng-container *ngIf=\"category.expandMore\">\r\n                  <div class=\"field-box\" *ngFor=\"let field of category.forms; let j = index\" [id]=\"field.key\"\r\n                    [style.width]=\"field.forms && field.forms.length>0 ? '100%' : fieldWidth(field.type,category.forms.length,j)\">\r\n                    <div cdkDrag>\r\n\r\n                      <div class=\" fields-content\"\r\n                        [class]=\"field.forms && field.forms.length>0 ? 'sub-category-forms' :''\">\r\n                        <div class=\"button-action\" *ngIf=\"field.forms\">\r\n\r\n                          <button class=\"transparent-button\" mat-raised-button\r\n                            (click)=\"$event.stopPropagation();$event.preventDefault()\">\r\n                            <mat-icon class=\"drag-icon\">drag_indicator</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                        <div class=\"fields-container\">\r\n                          <div class=\"sub-header\" *ngIf=\"field.forms\">\r\n                            <div class=\"field-item\">\r\n                              <div>\r\n                                <p class=\"full-width input-category-name\">\r\n                                  {{ field.label }}\r\n                                </p>\r\n                                <p class=\"sub-category-name\">\r\n                                  Listes des informations n\u00E9cessaires pour la cr\u00E9ation de\r\n                                  {{ catNameStart(field.label) ? \"l'\" + field.label : field.label }}\r\n                                </p>\r\n                              </div>\r\n                              <button class=\"transparent-button setting\" mat-raised-button\r\n                                (click)=\"$event.stopPropagation();onEditBlock(field, i, j)\">\r\n                                <mat-icon class=\"setting-icon\">settings</mat-icon>\r\n                              </button>\r\n                              <button class=\"expand-button\" [disabled]=\"!(field.forms && field.forms.length > 0)\"\r\n                                [style.opacity]=\"field.forms && field.forms.length > 0 ? 1 : 0\" mat-mini-fab\r\n                                color=\"primary\"\r\n                                (click)=\"$event.stopPropagation();onExpendMore({ event: $event, field: field }, i, j)\">\r\n                                <mat-icon *ngIf=\"!field.expandMore\">expand_less </mat-icon>\r\n                                <mat-icon *ngIf=\"field.expandMore\">expand_more </mat-icon>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                          <lib-sub-category [field]=\"field\" [length]=\"category?.forms?.length\" [i]=\"i\" [j]=\"j\"\r\n                            [blink]=\"checkBlink(j,1)===newFieldIndex\" (onCheckValue)=\"onCheckValue($event)\"\r\n                            (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j)\"\r\n                            (onKeyPress)=\"onKeyPress($event.event, i, j)\" (onAddNewField)=\"onAddNewField(i)\"\r\n                            (onRemoveField)=\"onRemoveField(i, j)\" (onChangeType)=\"onChangeType(field.type, i, j)\"\r\n                            (onRemoveKeyword)=\"removeKeyword($event.event, i, j)\"\r\n                            (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j)\"\r\n                            (onExpendMore)=\"onExpendMore($event, i, j)\" (onChangeLabel)=\"onChangeLabel($event, i, j)\"\r\n                            (onCheckedChip)=\"onCheckedChip($event, i, j)\" (onDrop)=\"drop($event)\"\r\n                            (onCheckedDefault)=\"onCheckedDefault($event, i, j)\" (onEditBlock)=\"onEditBlock(field, i, j)\"\r\n                            [conditionData]=\"conditionData\">\r\n                            <div *ngIf=\"field.expandMore\" class=\"child\">\r\n                              <div #childList=\"cdkDropList\" class=\"child-content\" *ngIf=\"field.forms\"\r\n                                [cdkDropListData]=\"field.forms\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\r\n                                <div class=\"\" style=\"margin-bottom: 20px\"\r\n                                  *ngFor=\"let child of field.forms; let k = index\" [id]=\"child.key\"\r\n                                  [style.width]=\"child.forms && child.forms.length>0 ? '100%' : fieldWidth(child.type,field.forms.length,k)\">\r\n                                  <div cdkDrag>\r\n                                    <div class=\"fields-content\"\r\n                                      [class]=\"child.forms && child.forms.length>0 ? 'sub-category-forms' :''\">\r\n                                      <div class=\"button-action child-2-background\"\r\n                                        *ngIf=\"child.forms && child.forms.length>0\">\r\n                                        <button class=\"transparent-button\" mat-raised-button\r\n                                          (click)=\"$event.stopPropagation();$event.preventDefault()\">\r\n                                          <mat-icon class=\"drag-icon\"> drag_indicator</mat-icon>\r\n                                        </button>\r\n                                      </div>\r\n                                      <div class=\"fields-container\">\r\n                                        <div class=\"sub-header\" *ngIf=\"child.forms && child.forms.length>0\">\r\n                                          <div class=\"field-item\">\r\n                                            <div>\r\n                                              <input class=\"full-width input-category-name\" type=\"text\" required\r\n                                                [readonly]=\"categories.length < 4 || !category.editable\"\r\n                                                [readonly]=\"!category.editable\" [(ngModel)]=\"child.label\"\r\n                                                [ngModelOptions]=\"{ standalone: true }\"\r\n                                                placeholder=\"Saisir le nom de la sous cat\u00E9gorie\" />\r\n                                              <p class=\"sub-category-name\">\r\n                                                Listes des informations n\u00E9cessaires pour la cr\u00E9ation de\r\n                                                {{ catNameStart(child.label) ? \"l'\" + child.label : child.label }}\r\n                                              </p>\r\n                                            </div>\r\n                                            <button class=\"transparent-button setting\" mat-raised-button\r\n                                              (click)=\"$event.stopPropagation();onEditBlock(child, i, j, k)\">\r\n                                              <mat-icon class=\"setting-icon\">settings</mat-icon>\r\n                                            </button>\r\n                                            <button class=\"expand-button\"\r\n                                              [disabled]=\"!(child.forms && child.forms.length > 0)\"\r\n                                              [style.opacity]=\"child.forms && child.forms.length > 0 ? 1 : 0\"\r\n                                              mat-mini-fab color=\"primary\"\r\n                                              (click)=\"$event.stopPropagation();onExpendMore({ event: $event, field: child }, i, j, k)\">\r\n                                              <mat-icon *ngIf=\"!child.expandMore\"> expand_less </mat-icon>\r\n                                              <mat-icon *ngIf=\"child.expandMore\"> expand_more </mat-icon>\r\n                                            </button>\r\n                                          </div>\r\n                                        </div>\r\n                                        <lib-sub-category [field]=\"child\" [length]=\"field?.forms?.length\" [i]=\"j\"\r\n                                          [blink]=\"checkBlink(k,2)===newFieldIndex\" [j]=\"k\"\r\n                                          (onCheckValue)=\"onCheckValue($event)\"\r\n                                          (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j, k)\"\r\n                                          (onKeyPress)=\"onKeyPress($event.event, i, j, k)\"\r\n                                          (onAddNewField)=\"onAddNewField(i, j)\" (onRemoveField)=\"onRemoveField(i, j, k)\"\r\n                                          (onChangeType)=\"onChangeType(child.type, i, j, k)\"\r\n                                          (onRemoveKeyword)=\"removeKeyword($event.event, i, j, k)\"\r\n                                          (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j, k)\"\r\n                                          (onExpendMore)=\"onExpendMore($event, i, j, k)\"\r\n                                          (onChangeLabel)=\"onChangeLabel($event, i, j, k)\"\r\n                                          (onCheckedChip)=\"onCheckedChip($event, i, j, k)\" (onDrop)=\"drop($event)\"\r\n                                          (onCheckedDefault)=\"onCheckedDefault($event, i, j, k)\"\r\n                                          [conditionData]=\"conditionData\" (onEditBlock)=\"onEditBlock(child, i, j, k)\">\r\n                                          <div *ngIf=\"child.expandMore\" class=\"child\">\r\n                                            <div class=\"child-content\" #childList=\"cdkDropList\"\r\n                                              *ngIf=\"child.forms && child.forms.length>0\"\r\n                                              [cdkDropListData]=\"child.forms\" cdkDropList\r\n                                              (cdkDropListDropped)=\"drop($event)\">\r\n                                              <div class=\"\" *ngFor=\"let c2 of child.forms; let l = index\" [id]=\"c2.key\"\r\n                                                [style.width]=\"c2.forms && c2.forms.length>0 ? '100%' : fieldWidth(c2.type,child.forms.length,l)\">\r\n                                                <div cdkDrag>\r\n                                                  <div class=\"fields-content\"\r\n                                                    [class]=\"c2.forms && c2.forms.length>0 ? 'sub-category-forms' :''\">\r\n                                                    <div class=\"button-action child-3-background\"\r\n                                                      *ngIf=\"c2.forms && c2.forms.length>0\">\r\n                                                      <button class=\"transparent-button\" mat-raised-button\r\n                                                        (click)=\"$event.stopPropagation()\">\r\n                                                        <mat-icon class=\"drag-icon\"> drag_indicator </mat-icon>\r\n                                                      </button>\r\n                                                    </div>\r\n                                                    <div class=\"fields-container\">\r\n                                                      <lib-sub-category [field]=\"c2\" [length]=\"child?.forms?.length\"\r\n                                                        [blink]=\"checkBlink(l,3)===newFieldIndex\" [i]=\"k\" [j]=\"l\"\r\n                                                        (onCheckValue)=\"onCheckValue($event)\"\r\n                                                        (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j, k, l)\"\r\n                                                        (onKeyPress)=\"onKeyPress($event.event, i, j, k, l)\"\r\n                                                        (onAddNewField)=\"onAddNewField(i, j, k)\"\r\n                                                        (onRemoveField)=\"onRemoveField(i, j, k, l)\"\r\n                                                        (onChangeType)=\"onChangeType(c2.type, i, j, k, l)\"\r\n                                                        (onRemoveKeyword)=\"removeKeyword($event.event, i, j, k, l)\"\r\n                                                        (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j, k, l)\"\r\n                                                        (onExpendMore)=\"onExpendMore($event, i, j, k, l)\"\r\n                                                        (onChangeLabel)=\"onChangeLabel($event, i, j, k, l)\"\r\n                                                        (onCheckedChip)=\"onCheckedChip($event, i, j, k, l)\"\r\n                                                        (onDrop)=\"drop($event)\"\r\n                                                        (onCheckedDefault)=\"onCheckedDefault($event, i, j, k, l)\"\r\n                                                        (onEditBlock)=\"onEditBlock(c2, i, j, k, l)\"\r\n                                                        [conditionData]=\"conditionData\">\r\n                                                        <div class=\"child\"></div>\r\n                                                      </lib-sub-category>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"add-button-sub-category\"\r\n                                                  *ngIf=\"child?.forms?.length - 1 === l\">\r\n                                                  <button style=\"margin: 10px auto\" mat-raised-button color=\"primary\"\r\n                                                    (click)=\"$event.stopPropagation();onAddNewField(i, j, k)\">\r\n                                                    <span>Ajouter un champ</span>\r\n                                                    <mat-icon> add </mat-icon>\r\n                                                  </button>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </lib-sub-category>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"add-button-sub-category\" *ngIf=\"field?.forms?.length - 1 === k\">\r\n                                    <button style=\"margin: 10px auto\" mat-raised-button color=\"primary\"\r\n                                      (click)=\"$event.stopPropagation();onAddNewField(i, j)\">\r\n                                      <span>Ajouter un champ</span>\r\n                                      <mat-icon>add</mat-icon>\r\n                                    </button>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </lib-sub-category>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"add-button-container add-button-sub-category\" *ngIf=\"category?.forms?.length - 1 === j\">\r\n                      <button style=\"margin: 10px auto; padding:10px 0\" class=\"add-button\"\r\n                        [disabled]=\"category?.forms?.length - 1 !== j\"\r\n                        [style.opacity]=\"category?.forms?.length - 1 === j ? 1 : 0\" mat-raised-button color=\"primary\"\r\n                        (click)=\"$event.stopPropagation();onAddNewField(i)\">\r\n                        <span>Ajouter un champ</span>\r\n                        <mat-icon>add</mat-icon>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n          </section>\r\n\r\n          <div class=\"add-button-container add-category-button add-step\">\r\n            <button (click)=\"onAddNewCategory($event)\">\r\n              Ajouter une \u00E9tape\r\n              <mat-icon>add</mat-icon>\r\n            </button>\r\n          </div>\r\n          <section style=\"background-color: transparent\">\r\n            <div style=\"height: 400px;\"></div>\r\n          </section>\r\n        </div>\r\n      </div>\r\n      <div class=\"field-property\">\r\n        <div class=\"property-content\" *ngIf=\"isBlock && currentEditBlock\">\r\n          <h3>Param\u00E8tre du bloc {{ currentEditBlock.label }}</h3>\r\n          <div class=\"property-content-inner\" style=\"width: 100%;\">\r\n            <mat-form-field class=\"form-field mat-select full-width\" style=\"cursor: pointer\" appearance=\"outline\">\r\n              <mat-label>Type de bloc</mat-label>\r\n              <mat-select (click)=\"onOpenTypeDialog(currentEditBlock)\" disabled=\"true\" required\r\n                [(ngModel)]=\"currentEditBlock.type\" (ngModelChange)=\"onChangeTypeBlock(currentEditBlock)\"\r\n                [ngModelOptions]=\"{ standalone: true }\" class=\"select-type-class\">\r\n                <mat-option value=\"text\">Text(80)</mat-option>\r\n                <mat-option value=\"textarea\">Text(80+)</mat-option>\r\n                <mat-option value=\"radio\">Radio</mat-option>\r\n                <mat-option value=\"select\">Selecteur</mat-option>\r\n                <mat-option value=\"toggle\">Toggle</mat-option>\r\n                <mat-option value=\"checkbox\">Checkbox</mat-option>\r\n                <mat-option value=\"checkbox_multiple\">Checkbox multiple</mat-option>\r\n                <mat-option value=\"email\">Email</mat-option>\r\n                <mat-option value=\"password\">Password</mat-option>\r\n                <mat-option value=\"date\">Date</mat-option>\r\n                <mat-option value=\"tel\">Phone</mat-option>\r\n                <mat-option value=\"none\">Aucun</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <ng-container *ngIf=\"currentEditBlock.type!=='none'\">\r\n              <mat-form-field class=\"form-field full-width\" appearance=\"outline\">\r\n                <mat-label>Nom / Label</mat-label>\r\n                <input type=\"text\" [(ngModel)]=\"currentEditBlock.label\" [ngModelOptions]=\"{ standalone: true }\" matInput\r\n                  required placeholder=\"\" />\r\n              </mat-form-field>\r\n              <ng-container [ngSwitch]=\"currentEditBlock.type\">\r\n                <div *ngSwitchCase=\"'toggle'\" class=\"flex-auto\"\r\n                  style=\"display: flex;align-items: flex-end;margin: 10px 0;\">\r\n                  <mat-slide-toggle class=\"form-field\" color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.defaultValue\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                  </mat-slide-toggle>\r\n                  <span style=\"margin-left: 10px;\">Valeur par d\u00E9faut</span>\r\n                </div>\r\n                <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto\">\r\n                  <mat-checkbox class=\"form-field\" [(ngModel)]=\"currentEditBlock.value\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                    Coch\u00E9 par d\u00E9fault\r\n                  </mat-checkbox>\r\n                </div>\r\n                <mat-form-field *ngSwitchCase=\"\r\n                                ['select', 'radio', 'checkbox_multiple'].includes(currentEditBlock.type) ? currentEditBlock.type : !currentEditBlock.type\r\n                              \" class=\"flex-auto full-width\" appearance=\"outline\">\r\n                  <mat-label> Valeur par d\u00E9fault </mat-label>\r\n                  <mat-chip-list #childList=\"cdkDropList\" [cdkDropListData]=\"currentEditBlock.defaultValue\" cdkDropList\r\n                    (cdkDropListDropped)=\"drop($event)\" #chipList aria-label=\"Video keywords; let index=index\" multiple\r\n                    selectable>\r\n                    <mat-chip style=\"min-height: 25px;width: auto;\" *ngFor=\"let option of currentEditBlock.defaultValue\"\r\n                      [selected]=\"option.checked\" [value]=\"option.value\" [removable]=\"true\"\r\n                      (dblclick)=\"onCheckedChipBlock(option, currentEditBlock)\" (click)=\"onEditChip(option)\"\r\n                      (removed)=\"removeKeywordBlock(option, currentEditBlock)\" cdkDrag>\r\n                      {{ option.value }}\r\n                      <mat-icon matChipRemove>cancel</mat-icon>\r\n                    </mat-chip>\r\n                    <input #chipsInput placeholder=\"add...\" [matChipInputFor]=\"chipList\" [matChipInputAddOnBlur]=\"true\"\r\n                      (matChipInputTokenEnd)=\"addKeywordFromInputBlock($event, currentEditBlock, prevValue)\"\r\n                      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                      (keyup)=\"onKeyUpChip($event, currentEditBlock)\" [(ngModel)]=\"currentChip\"\r\n                      [ngModelOptions]=\"{ standalone: true }\" />\r\n                  </mat-chip-list>\r\n                </mat-form-field>\r\n                <mat-form-field *ngSwitchCase=\"'textarea'\" class=\"form-field full-width\" appearance=\"outline\">\r\n                  <mat-label>Valeur par d\u00E9fault</mat-label>\r\n                  <input type=\"text\" matInput [ngModelOptions]=\"{ standalone: true }\"\r\n                    [(ngModel)]=\"currentEditBlock.defaultValue\" placeholder=\"Description...\" />\r\n                </mat-form-field>\r\n\r\n                <mat-form-field *ngSwitchDefault class=\"form-field full-width\"\r\n                  [style.opacity]=\"currentEditBlock.type !== 'tel' ? 1 : 0\" appearance=\"outline\">\r\n                  <mat-label>Valeur par d\u00E9fault</mat-label>\r\n                  <input [type]=\"currentEditBlock.type\" [disabled]=\"currentEditBlock.type === 'tel'\" matInput\r\n                    [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"currentEditBlock.defaultValue\"\r\n                    placeholder=\"\" />\r\n                </mat-form-field>\r\n              </ng-container>\r\n\r\n              <div class=\"mandatory top-10 bottom-10\">\r\n                <div class=\"toogle-button\">\r\n                  <span>Obligatoire</span>\r\n                  <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.isMandatory\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                  </mat-slide-toggle>\r\n                </div>\r\n              </div>\r\n              <div class=\"mandatory top-10\">\r\n                <div class=\"toogle-button\">\r\n                  <span>Visibilit\u00E9 conditionnelle</span>\r\n                  <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.isConditional\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                  </mat-slide-toggle>\r\n                </div>\r\n              </div>\r\n              <ng-container *ngIf=\"currentEditBlock?.isConditional\">\r\n                <mat-form-field class=\"form-field mat-select full-width\" appearance=\"outline\">\r\n                  <mat-label>Selectionnez la cat\u00E9gorie</mat-label>\r\n                  <mat-select [(ngModel)]=\"all\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('all','s1', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.all\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field *ngIf=\"conditionData.s1?.length > 0\" class=\"form-field mat-select full-width\"\r\n                  appearance=\"outline\">\r\n                  <mat-label>Selectionnez la sous cat\u00E9gorie (s1)</mat-label>\r\n                  <mat-select [(ngModel)]=\"s1\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('s1','s2', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.s1\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"form-field mat-select full-width\" *ngIf=\"conditionData.s2?.length>0\"\r\n                  appearance=\"outline\">\r\n                  <mat-label>Selectionnez la sous cat\u00E9gorie (s2)</mat-label>\r\n                  <mat-select [(ngModel)]=\"s2\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('s2','s3', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.s2\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"form-field mat-select full-width\" *ngIf=\"conditionData.s3?.length>0\"\r\n                  appearance=\"outline\">\r\n                  <mat-label>Selectionnez la sous cat\u00E9gorie (s3)</mat-label>\r\n                  <mat-select [(ngModel)]=\"s3\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('s3','s4', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.s3\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </ng-container>\r\n\r\n              <mat-radio-group\r\n                *ngIf=\"currentEditBlock.isConditional && onGetDefaultValue() && onGetDefaultValue()?.length>0\"\r\n                aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\r\n                [(ngModel)]=\"currentEditBlock.condition.value\" [ngModelOptions]=\"{ standalone: true }\">\r\n                <mat-radio-button class=\"example-radio-button\" style=\"margin-right: 10px\"\r\n                  *ngFor=\"let item of onGetDefaultValue()\" [value]=\"item.value\">\r\n                  {{ item.value }}\r\n                </mat-radio-button>\r\n              </mat-radio-group>\r\n              <div class=\"bloc-action\">\r\n                <button *ngIf=\"paramsIndex.length<4\" mat-button [disabled]=\"!currentEditBlock.editable\"\r\n                  (click)=\"onAddNewSubLevelFieldBlock($event)\">Sous-cat\u00E9gorie <mat-icon>device_hub\r\n                  </mat-icon></button>\r\n                <button mat-button [disabled]=\"!currentEditBlock.editable\" (click)=\"onDuplicatedBlock($event)\">Dupliquer\r\n                  le bloc<mat-icon>filter_none</mat-icon>\r\n                </button>\r\n                <button mat-button [disabled]=\"!currentEditBlock.editable\" class=\"delete-bloc\"\r\n                  (click)=\"onRemoveFieldBlock($event)\">Supprimer le bloc <mat-icon>\r\n                    delete </mat-icon></button>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n        <div class=\"property-content\" *ngIf=\"isSection && currentEditBlock\">\r\n          <h3>Param\u00E8tre de la section {{ currentEditBlock.name }}</h3>\r\n          <div class=\"property-content-inner\">\r\n            <mat-form-field class=\"form-field full-width\" appearance=\"outline\">\r\n              <mat-label>Nom de la section</mat-label>\r\n              <input (ngModelChange)=\"onChangeCategoryName()\" type=\"text\" matInput required placeholder=\"\"\r\n                [(ngModel)]=\"currentEditBlock.name\" [ngModelOptions]=\"{ standalone: true }\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"form-field mat-select full-width\" appearance=\"outline\">\r\n              <mat-label>Equipe de gestion</mat-label>\r\n              <mat-select required [(ngModel)]=\"currentEditBlock.selector.value\"\r\n                [ngModelOptions]=\"{ standalone: true }\">\r\n                <mat-option [value]=\"item.value\" *ngFor=\"let item of currentEditBlock.selector.defaultValue\">{{\r\n                  item.value }}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <div class=\"bloc-action\">\r\n              <button mat-button (click)=\"onAddNewSubLevelFieldBlock($event)\">Sous-cat\u00E9gorie <mat-icon>device_hub\r\n                </mat-icon></button>\r\n              <button mat-button (click)=\"onDuplicatedBlock($event)\">Dupliquer le bloc<mat-icon>filter_none</mat-icon>\r\n              </button>\r\n              <button [disabled]=\"!currentEditBlock.editable\" mat-button class=\"delete-bloc\"\r\n                (click)=\"onRemoveFieldBlock($event)\">Supprimer le bloc <mat-icon>\r\n                  delete</mat-icon></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</main>", styles: ["main{background:#f4f7f9 0% 0% no-repeat padding-box;height:100vh;display:flex;flex-direction:column;align-items:center;padding:25px}main .disabled label{background-color:transparent!important}main form{display:flex;height:89%;width:100%}main .box-title{width:786px;margin-top:20vh;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;align-self:center}main .box-title h3{text-align:center;font: 900 32px/48px Nexa;letter-spacing:0px;color:#171f26}main .box-title label,main .box-title input{font: 18px/24px Nexa Text;letter-spacing:0px;color:#171f26}main .box-title .profil-name-content{display:flex;align-items:center;position:relative}main .box-title .profil-name-content .add-picto{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main .box-title .profil-name-content .add-picto mat-icon{margin-right:10px}main .box-title .profil-name-content .list-picto{position:absolute;height:200px;width:100%;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main .box-title .profil-name-content .list-picto mat-icon{margin:15px;border:none;font-size:40px}main .box-title .profil-name-content .list-picto mat-icon:hover{color:#830b6b!important;cursor:pointer}main .box-title .box-title-content{width:100%;margin:25px auto}main .box-title .title{font: 900 32px/38px Nexa;letter-spacing:0px;color:#171f26}main .box-title p{font: 15px/26px Nexa Text;letter-spacing:0px;color:#171f26;text-align:center}main .box-title .link-create-profil{width:100%;display:flex;justify-content:center}main .box-title button{text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font: 700 15px/17px Nexa;letter-spacing:0px;color:#543cb6}main .action{width:100%;display:flex;justify-content:space-between}main .header-create-profile{width:100%;margin:10px 15px;border-radius:5px}main .header-create-profile .header-create-profile-top{display:flex;align-items:center;text-align:center;justify-content:space-between}main .header-create-profile .header-create-profile-top .create-profile-action{display:flex;align-items:center;gap:25px}main .header-create-profile h3{font-size:25px;padding-bottom:5px;display:flex;align-items:center;justify-content:center}main .header-create-profile h3 span{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;text-transform:capitalize}main .header-create-profile h3 mat-icon{margin-left:15px;cursor:pointer}main .header-create-profile .create-profile-menus{max-width:100%;overflow:auto}main .header-create-profile .create-profile-menus ul{font-weight:600;font-size:16px;list-style:none;display:flex;align-items:center;gap:20px;padding:0}main .header-create-profile .create-profile-menus ul li{font-weight:400;font-size:12px;cursor:pointer;text-align:left;font: 12px/19px Nexa Text;letter-spacing:0px;color:#535760}main .header-create-profile .create-profile-menus ul li .mat-mini-fab{width:28px;height:28px;line-height:24px}main .header-create-profile .create-profile-menus ul li.li-title:hover{border-bottom:2px solid #723CEB}main .header-create-profile .create-profile-menus ul li.li-title.active{border-bottom:2px solid #723CEB;font-weight:600}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name{font-size:15px;font-weight:500;border:none;outline:none;text-align:left;color:#171f26;font-weight:700;font-size:20px;line-height:28px;color:#242731}.sub-category-name{font-style:normal;font-weight:250;font-size:14px;line-height:16px;display:flex;align-items:center;color:#575f6e;word-break:break-word}.full-width{width:100%}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}::ng-deep .mat-mini-fab .mat-button-wrapper{padding:0!important}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}::ng-deep .mat-select.mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}::ng-deep .mat-select{padding:8px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:transparent}::ng-deep .mat-form-field-wrapper{padding-bottom:0!important}:host ::ng-deep .input-category-name div.mat-form-field-outline-start,:host ::ng-deep .cdk-drag-preview .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0px!important}:host ::ng-deep .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background,:host ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:transparent}:host ::ng-deep .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-label-wrapper{display:none}:host ::ng-deep .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}:host ::ng-deep .input-category-name .mat-form-field-infix{border-top:none}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item,.cdk-drag-placeholder{display:flex;align-items:baseline;position:relative;width:100%;border-radius:8px;background-color:#fff;margin-bottom:15px;margin-right:5px;padding:6px 15px}.category-item .left-action,.cdk-drag-placeholder .left-action{height:auto;width:40px;align-self:baseline;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item .left-action .transparent-button,.cdk-drag-placeholder .left-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item .left-action .transparent-button .drag-icon,.cdk-drag-placeholder .left-action .transparent-button .drag-icon{color:#171f26;cursor:move;margin-right:15px}.category-item .field-content,.cdk-drag-placeholder .field-content{width:calc(100% - 40px);align-self:center}.category-item .field-content .child-list,.cdk-drag-placeholder .field-content .child-list{display:flex;flex-wrap:wrap;background-color:transparent;width:103%;position:relative;margin-left:-1.5%}.category-item .field-content .field-item,.cdk-drag-placeholder .field-content .field-item{display:flex;justify-content:space-between;align-items:baseline;border:transparent!important}.category-item .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.cdk-drag-placeholder .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline{color:transparent!important}.category-item .field-content .mat-form-field-outline,.cdk-drag-placeholder .field-content .mat-form-field-outline{color:transparent!important}.field-box{margin-bottom:15px;display:flex;align-items:center}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.child{margin-left:0}.child-content{display:flex;flex-wrap:wrap;margin-bottom:30px}.sub-category-forms{margin-bottom:0!important;margin-top:10px!important}.category{display:flex;flex-direction:row;width:100%;height:100%}.category .fields{width:100%;overflow:hidden;overflow-x:hidden;position:relative;padding-top:10px;height:calc(100% - 10px)}.category .fields .fields-inner{max-height:100%;height:100%;width:100%;overflow:auto}.category .fields .add-category-button{position:relative!important;width:calc(100% - 40px)!important;padding:20px 0}.category .fields .add-category-button mat-icon{margin-left:10px}.category .fields .add-step{bottom:0!important;top:0!important;width:100%!important}.category .disabled{background-color:#f4f7f9!important}.category .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.category .expand-button .material-icons{font-size:40px}.category .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category{width:93%;position:absolute;left:3%;bottom:-13px}.add-button-sub-category button span{width:100%}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border-radius:8px;margin-top:10px;padding:10px 0;display:flex;justify-content:center;align-items:center;width:100%;margin-bottom:22px;position:absolute;left:0;top:100%}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font: 17px/26px Nexa Text;letter-spacing:0px;color:#000;box-shadow:none}.add-button-container button span{width:100%}.add-category{background-color:#fcfcfe;border-radius:5px;line-height:26px;margin-left:10px;margin-bottom:10px;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#c2c8d5;width:92%}.field-content .cdk-drag{width:100%}.cdk-drag{width:auto;position:relative}.cdk-drag .fields-content{display:flex;height:100%;width:100%;margin:0}.cdk-drag .fields-content .button-action{align-self:baseline;margin-top:0;margin-left:3px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag .fields-content .button-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag .fields-content .button-action .transparent-button .drag-icon{color:#171f26;cursor:move;margin-right:15px}.cdk-drag .fields-content .child-3-background{background-color:#e5e8ee!important}.cdk-drag .fields-content .fields-container{border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px;position:relative;margin-bottom:10px}.cdk-drag .fields-content .fields-container lib-sub-category .field-item{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action{background-color:#039be5!important;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.side-bar{display:flex;flex-direction:column}.register-button{background:no-repeat padding-box #171f26!important;border:2px solid #171f26!important;color:#fff!important;box-shadow:0 0 #0003;border-radius:7px}.forward{padding:6px}.live-button{background-color:#fff!important;color:#171f26!important;border:2px solid #171f26!important}.content-item{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}.field-property{padding:11px;height:calc(100% - 22px);width:400px}.field-property h3{font-size:20px;line-height:110%;padding-top:10px;display:flex;align-items:center;color:#242731}.field-property .property-content{display:flex;flex-direction:column;align-items:flex-start;padding:0 20px;background:#ffffff;border-radius:8px 8px 0 0;min-height:100%;height:auto;width:400px}.field-property .property-content button{text-align:center}.field-property .property-content .property-content-inner{display:flex;flex-direction:column;gap:25px;overflow:auto;max-height:700px;padding-bottom:25px}.field-property .bloc-action{text-align:center}.field-property .bloc-action button{width:100%;padding:6px;margin-top:10px}.field-property .bloc-action button mat-icon{margin-left:5px}.field-property .bloc-action .delete-bloc{background:#f44336;box-shadow:0 0 #0003;border-radius:7px;color:#fff}.fields-inner::-webkit-scrollbar{width:5px}.fields-inner::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.fields-inner::-webkit-scrollbar-thumb{background:transparent;border-radius:10px}.fields-inner::-webkit-scrollbar-thumb:hover{background:transparent}.toogle-button{color:#707273!important;display:flex;align-items:center;font-style:normal;font-weight:400;font-size:18px;line-height:18px}.toogle-button span{padding-right:10px}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5!important;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273!important}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273!important}:host ::ng-deep .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5!important}.top-10{margin-top:10px}.bottom-10{margin-bottom:10px}.section-item{border:2px solid transparent;overflow:hidden}.section-item:hover,.section-item.active{border:2px solid #242731;border-radius:8px;cursor:pointer}::ng-deep .select-type-class.mat-select-disabled .mat-select-value{color:#000!important;cursor:pointer}::ng-deep button .mat-button-wrapper{display:flex;align-items:center;justify-content:center}::ng-deep .field-content .mat-form-field,::ng-deep .field-content .select-content{width:100%}::ng-deep .field-content .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:100%!important}::ng-deep .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle,::ng-deep .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5!important}::ng-deep .fields-content .mat-radio-button.mat-accent .mat-radio-inner-circle,::ng-deep .fields-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),::ng-deep .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,::ng-deep .fields-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple,::ng-deep .property-content .mat-radio-button.mat-accent .mat-radio-inner-circle,::ng-deep .property-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),::ng-deep .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,::ng-deep .property-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5!important}::ng-deep .fields-content .mat-checkbox-checkmark-path,::ng-deep .property-content .mat-checkbox-checkmark-path{stroke:#039be5!important}::ng-deep .fields-content .mat-checkbox-frame,::ng-deep .property-content .mat-checkbox-frame{border:2px solid #039BE5!important}::ng-deep .fields-content .mat-checkbox-inner-container,::ng-deep .property-content .mat-checkbox-inner-container{height:20px!important;width:20px!important}.setting{z-index:1;background-color:#d5d6d7!important;border-radius:40px;width:42px!important;height:40px!important;padding:0 10px!important;display:flex;align-items:center;justify-content:center;display:none}.setting .setting-icon,.setting .transparent-button{color:#171f26}.sub-header:hover .setting{display:flex}.add-button-sub-category button{margin:10px auto;width:100%;background-color:transparent;color:#000;box-shadow:none;background-color:#fcfcfe;padding:5px span;padding-width:100%!important}::ng-deep .add-button{padding:10px 0}::ng-deep .add-button span{width:100%}::ng-deep .mat-button[disabled]{opacity:.5!important}\n"] }]
        }], function () { return [{ type: i1$2.FormBuilder }, { type: OnboardingService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: i1$1.MatDialog }, { type: i5$2.ScrollToService }]; }, { onScroll: [{
                type: HostListener,
                args: ['scroll', ['$event']]
            }] });
})();

class MaterialElevationDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.defaultElevation = 2;
        this.raisedElevation = 8;
        this.setElevation(this.defaultElevation);
    }
    ngOnChanges(_changes) {
        this.setElevation(this.defaultElevation);
    }
    onMouseEnter() {
        this.setElevation(this.raisedElevation);
    }
    onMouseLeave() {
        this.setElevation(this.defaultElevation);
    }
    setElevation(amount) {
        // remove all elevation classes
        const classesToRemove = Array.from(this.element.nativeElement.classList).filter(c => c.startsWith('mat-elevation-z'));
        classesToRemove.forEach((c) => {
            this.renderer.removeClass(this.element.nativeElement, c);
        });
        // add the given elevation class
        const newClass = `mat-elevation-z${amount}`;
        this.renderer.addClass(this.element.nativeElement, newClass);
    }
}
MaterialElevationDirective.ɵfac = function MaterialElevationDirective_Factory(t) { return new (t || MaterialElevationDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
MaterialElevationDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MaterialElevationDirective, selectors: [["", "appMaterialElevation", ""]], hostBindings: function MaterialElevationDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function MaterialElevationDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MaterialElevationDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
        }
    }, inputs: { defaultElevation: "defaultElevation", raisedElevation: "raisedElevation" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaterialElevationDirective, [{
            type: Directive,
            args: [{
                    selector: '[appMaterialElevation]'
                }]
        }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { defaultElevation: [{
                type: Input
            }], raisedElevation: [{
                type: Input
            }], onMouseEnter: [{
                type: HostListener,
                args: ['mouseenter']
            }], onMouseLeave: [{
                type: HostListener,
                args: ['mouseleave']
            }] });
})();

class NoDataComponent {
    constructor() {
        this.showPopup = new EventEmitter();
    }
    ngOnInit() {
    }
    onShowPopup() {
        this.showPopup.emit(true);
    }
}
NoDataComponent.ɵfac = function NoDataComponent_Factory(t) { return new (t || NoDataComponent)(); };
NoDataComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NoDataComponent, selectors: [["lib-no-data"]], outputs: { showPopup: "showPopup" }, decls: 15, vars: 0, consts: [[1, "no-data-container"], [1, "no-data-spinner"], [1, "level-1"], [1, "level-2"], [1, "level-2-inner"], [1, "level-3"], [1, "level-3-inner"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "click"]], template: function NoDataComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵelement(4, "div", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 5);
            i0.ɵɵelement(6, "div", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "h2");
            i0.ɵɵtext(8, " Vous n\u2019avez actuellement aucun profil type ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "p");
            i0.ɵɵtext(10, "Gr\u00E2ce aux profils types vous pourrez cr\u00E9er des mod\u00E8le de formulaire pour l\u2019arriv\u00E9e de vos salari\u00E9s.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "a", 7);
            i0.ɵɵlistener("click", function NoDataComponent_Template_a_click_11_listener() { return ctx.onShowPopup(); });
            i0.ɵɵtext(12, " Cr\u00E9er profil ");
            i0.ɵɵelementStart(13, "mat-icon");
            i0.ɵɵtext(14, "add");
            i0.ɵɵelementEnd()()();
        }
    }, directives: [i7$1.MatAnchor, i6.MatIcon], styles: [".no-data-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;height:98vh;text-align:center}.no-data-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:32px;line-height:120%}.no-data-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:150%}.no-data-spinner[_ngcontent-%COMP%]{width:150px;height:150px;position:relative}.no-data-spinner[_ngcontent-%COMP%]   .level-1[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:150px;background:#717373;filter:blur(5px)}.no-data-spinner[_ngcontent-%COMP%]   .level-2[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.no-data-spinner[_ngcontent-%COMP%]   .level-2[_ngcontent-%COMP%]   .level-2-inner[_ngcontent-%COMP%]{width:112.5px;height:112.5px;border-radius:112.5px;background:#B8BABA;filter:blur(5px)}.no-data-spinner[_ngcontent-%COMP%]   .level-3[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0}.no-data-spinner[_ngcontent-%COMP%]   .level-3[_ngcontent-%COMP%]   .level-3-inner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:75px;background:#FFFFFF}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NoDataComponent, [{
            type: Component,
            args: [{ selector: 'lib-no-data', template: "<div class=\"no-data-container\">\n  <div class=\"no-data-spinner\">\n    <div class=\"level-1\">\n      <div class=\"level-2\">\n        <div class=\"level-2-inner\">\n        </div>\n      </div>\n    </div>\n    <div class=\"level-3\">\n      <div class=\"level-3-inner\">\n      </div>\n    </div>\n  </div>\n  <h2>\n    Vous n\u2019avez actuellement aucun profil type\n  </h2>\n  <p>Gr\u00E2ce aux profils types vous pourrez cr\u00E9er des mod\u00E8le de formulaire pour l\u2019arriv\u00E9e de vos salari\u00E9s.</p>\n  <a role=\"button\" class=\"add-profil\" mat-raised-button color=\"primary\" (click)=\"onShowPopup()\">\n    Cr\u00E9er profil <mat-icon>add</mat-icon>\n  </a>\n</div>", styles: [".no-data-container{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;height:98vh;text-align:center}.no-data-container h2{font-style:normal;font-weight:700;font-size:32px;line-height:120%}.no-data-container p{font-style:normal;font-weight:400;font-size:16px;line-height:150%}.no-data-spinner{width:150px;height:150px;position:relative}.no-data-spinner .level-1{width:100%;height:100%;border-radius:150px;background:#717373;filter:blur(5px)}.no-data-spinner .level-2{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.no-data-spinner .level-2 .level-2-inner{width:112.5px;height:112.5px;border-radius:112.5px;background:#B8BABA;filter:blur(5px)}.no-data-spinner .level-3{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0}.no-data-spinner .level-3 .level-3-inner{width:75px;height:75px;border-radius:75px;background:#FFFFFF}\n"] }]
        }], function () { return []; }, { showPopup: [{
                type: Output
            }] });
})();

function TemplateProfileListComponent_div_1_mat_icon_36_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-icon");
        i0.ɵɵtext(1, "arrow_downward");
        i0.ɵɵelementEnd();
    }
}
function TemplateProfileListComponent_div_1_mat_icon_37_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-icon");
        i0.ɵɵtext(1, "arrow_upward");
        i0.ɵɵelementEnd();
    }
}
function TemplateProfileListComponent_div_1_section_45_lib_loading_page_16_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "lib-loading-page");
    }
}
function TemplateProfileListComponent_div_1_section_45_mat_icon_17_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-icon");
        i0.ɵɵtext(1, "filter_none");
        i0.ɵɵelementEnd();
    }
}
const _c0$2 = function (a0) { return [a0]; };
function TemplateProfileListComponent_div_1_section_45_Template(rf, ctx) {
    if (rf & 1) {
        const _r13 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "section", 29)(1, "div", 30)(2, "span");
        i0.ɵɵtext(3, "Live");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-slide-toggle", 31);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_section_45_Template_mat_slide_toggle_ngModelChange_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r13); const d_r8 = restoredCtx.$implicit; return d_r8.Status = $event; })("ngModelChange", function TemplateProfileListComponent_div_1_section_45_Template_mat_slide_toggle_ngModelChange_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const d_r8 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.onChangeStatus(d_r8, false); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "div", 32)(6, "p", 33);
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p", 34);
        i0.ɵɵtext(9);
        i0.ɵɵpipe(10, "date");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(11, "div", 35)(12, "button", 36);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_section_45_Template_button_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const d_r8 = restoredCtx.$implicit; const ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.onEditProfil(d_r8._id); });
        i0.ɵɵelementStart(13, "mat-icon");
        i0.ɵɵtext(14, "edit");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(15, "button", 37);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_section_45_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const d_r8 = restoredCtx.$implicit; const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.copyTemplate(d_r8); });
        i0.ɵɵtemplate(16, TemplateProfileListComponent_div_1_section_45_lib_loading_page_16_Template, 1, 0, "lib-loading-page", 20);
        i0.ɵɵtemplate(17, TemplateProfileListComponent_div_1_section_45_mat_icon_17_Template, 2, 0, "mat-icon", 20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "button", 36);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_section_45_Template_button_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const d_r8 = restoredCtx.$implicit; const ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.onDelete(d_r8._id); });
        i0.ɵɵelementStart(19, "mat-icon");
        i0.ɵɵtext(20, "delete");
        i0.ɵɵelementEnd()()()();
    }
    if (rf & 2) {
        const d_r8 = ctx.$implicit;
        const ctx_r6 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("defaultElevation", 0)("id", d_r8.Name);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", d_r8.Status);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(12, _c0$2, ctx_r6.service.mainPath + "/template/" + d_r8._id));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", d_r8.Name, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 9, d_r8.createdAt, "dd/MM/yy"), "");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngxScrollTo", ctx_r6.toTemplateCopyId);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r6.loading && ctx_r6.cpId === d_r8._id);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx_r6.loading || ctx_r6.cpId !== d_r8._id);
    }
}
function TemplateProfileListComponent_div_1_div_47_lib_loading_page_16_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "lib-loading-page");
    }
}
function TemplateProfileListComponent_div_1_div_47_mat_icon_17_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-icon");
        i0.ɵɵtext(1, "filter_none");
        i0.ɵɵelementEnd();
    }
}
function TemplateProfileListComponent_div_1_div_47_Template(rf, ctx) {
    if (rf & 1) {
        const _r23 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 38)(1, "div", 39)(2, "span");
        i0.ɵɵtext(3, "Brouillon");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-slide-toggle", 40);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_div_47_Template_mat_slide_toggle_ngModelChange_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r23); const d_r18 = restoredCtx.$implicit; return d_r18.Status = $event; })("ngModelChange", function TemplateProfileListComponent_div_1_div_47_Template_mat_slide_toggle_ngModelChange_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r23); const d_r18 = restoredCtx.$implicit; const ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.onChangeStatus(d_r18, true); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "div", 32)(6, "p", 33);
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p", 34);
        i0.ɵɵtext(9);
        i0.ɵɵpipe(10, "date");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(11, "div", 35)(12, "button", 36);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_div_47_Template_button_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r23); const d_r18 = restoredCtx.$implicit; const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.onEditProfil(d_r18._id); });
        i0.ɵɵelementStart(13, "mat-icon");
        i0.ɵɵtext(14, "edit");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(15, "button", 36);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_div_47_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r23); const d_r18 = restoredCtx.$implicit; const ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.copyTemplate(d_r18); });
        i0.ɵɵtemplate(16, TemplateProfileListComponent_div_1_div_47_lib_loading_page_16_Template, 1, 0, "lib-loading-page", 20);
        i0.ɵɵtemplate(17, TemplateProfileListComponent_div_1_div_47_mat_icon_17_Template, 2, 0, "mat-icon", 20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "button", 36);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_div_47_Template_button_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r23); const d_r18 = restoredCtx.$implicit; const ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.onDelete(d_r18._id); });
        i0.ɵɵelementStart(19, "mat-icon");
        i0.ɵɵtext(20, "delete");
        i0.ɵɵelementEnd()()()();
    }
    if (rf & 2) {
        const d_r18 = ctx.$implicit;
        const ctx_r7 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("defaultElevation", 0);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", d_r18.Status);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(10, _c0$2, ctx_r7.service.mainPath + "/template/" + d_r18._id));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", d_r18.Name, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 7, d_r18.createdAt, "dd/MM/yy"), "");
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx_r7.loading && ctx_r7.cpId === d_r18._id);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx_r7.loading || ctx_r7.cpId !== d_r18._id);
    }
}
function TemplateProfileListComponent_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r29 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h2");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "a", 6);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.openDialog(); });
        i0.ɵɵtext(6, " Cr\u00E9er profil ");
        i0.ɵɵelementStart(7, "mat-icon");
        i0.ɵɵtext(8, "add");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(9, "div", 7)(10, "ul")(11, "li", 8)(12, "mat-form-field", 9)(13, "mat-select", 10);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_Template_mat_select_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.filterData.Status = $event; })("ngModelChange", function TemplateProfileListComponent_div_1_Template_mat_select_ngModelChange_13_listener() { i0.ɵɵrestoreView(_r29); const ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.onFilterTemplate(); });
        i0.ɵɵelementStart(14, "mat-option", 11);
        i0.ɵɵtext(15, " Tout");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-option", 12);
        i0.ɵɵtext(17, " Publi\u00E9s");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-option", 13);
        i0.ɵɵtext(19, " Brouillons");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(20, "li", 8)(21, "mat-form-field", 9)(22, "input", 14);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.filterData.start_date = $event; })("ngModelChange", function TemplateProfileListComponent_div_1_Template_input_ngModelChange_22_listener() { i0.ɵɵrestoreView(_r29); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.onFilterTemplate(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(23, "mat-datepicker-toggle", 15)(24, "mat-datepicker", null, 16);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(26, "li", 8)(27, "mat-form-field", 9)(28, "input", 17);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_Template_input_ngModelChange_28_listener() { i0.ɵɵrestoreView(_r29); const ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.onFilterTemplate(); })("ngModelChange", function TemplateProfileListComponent_div_1_Template_input_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.filterData.end_date = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(29, "mat-datepicker-toggle", 15)(30, "mat-datepicker", null, 18);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(32, "li", 8)(33, "div", 19);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_Template_div_click_33_listener() { i0.ɵɵrestoreView(_r29); const ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.onSort(); });
        i0.ɵɵelementStart(34, "span");
        i0.ɵɵtext(35, "Nom");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(36, TemplateProfileListComponent_div_1_mat_icon_36_Template, 2, 0, "mat-icon", 20);
        i0.ɵɵtemplate(37, TemplateProfileListComponent_div_1_mat_icon_37_Template, 2, 0, "mat-icon", 20);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(38, "div", 8)(39, "mat-form-field", 21)(40, "mat-icon", 22);
        i0.ɵɵtext(41, "search");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "input", 23);
        i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_Template_input_ngModelChange_42_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.filterData.searchText = $event; })("ngModelChange", function TemplateProfileListComponent_div_1_Template_input_ngModelChange_42_listener() { i0.ɵɵrestoreView(_r29); const ctx_r38 = i0.ɵɵnextContext(); return ctx_r38.onFilterTemplate(); });
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(43, "div", 24)(44, "div", 25);
        i0.ɵɵlistener("scroll", function TemplateProfileListComponent_div_1_Template_div_scroll_44_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.onScroll($event); });
        i0.ɵɵtemplate(45, TemplateProfileListComponent_div_1_section_45_Template, 21, 14, "section", 26);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(46, "div", 27);
        i0.ɵɵtemplate(47, TemplateProfileListComponent_div_1_div_47_Template, 21, 12, "div", 28);
        i0.ɵɵelementEnd()()()();
    }
    if (rf & 2) {
        const _r2 = i0.ɵɵreference(25);
        const _r3 = i0.ɵɵreference(31);
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("Profils (", ctx_r0.datas.length, ")");
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngModel", ctx_r0.filterData.Status);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("matDatepicker", _r2)("max", ctx_r0.filterData.end_date)("ngModel", ctx_r0.filterData.start_date);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r2);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("matDatepicker", _r3)("min", ctx_r0.filterData.start_date)("ngModel", ctx_r0.filterData.end_date);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r3);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx_r0.filterData.sortNameAsc);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx_r0.filterData.sortNameAsc);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx_r0.filterData.searchText);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx_r0.publishTemplate);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx_r0.draftTemplate);
    }
}
function TemplateProfileListComponent_lib_no_data_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r41 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "lib-no-data", 41);
        i0.ɵɵlistener("showPopup", function TemplateProfileListComponent_lib_no_data_2_Template_lib_no_data_showPopup_0_listener() { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.openDialog(); });
        i0.ɵɵelementEnd();
    }
}
class TemplateProfileListComponent {
    constructor(service, router, dialog) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ["Name", "vcontacts", "createdAt", "updatedAt", "action"];
        this.datas = [];
        this.publishTemplate = [];
        this.draftTemplate = [];
        this.dataSource = new MatTableDataSource([]);
        this.defaultElevation = 2;
        this.raisedElevation = 8;
        this.loading = false;
        this.cpId = null;
        this.filterData = {
            Status: null,
            sortNameAsc: true,
            start_date: null,
            end_date: null,
            searchText: '',
            service: ''
        };
        this.toTemplateCopyId = "";
        this.currentFilter = "all";
        this.tags = [];
        this.service.templates.subscribe((templates) => {
            if (templates && templates.length > 0) {
                this.datas = templates;
            }
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                yield this.getAllProfils();
                this.tags = yield this.service.getAllTags();
            }), 500);
        });
    }
    onScroll(event) {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll(".live-template .box-template");
        console.log('------------WWWWWWWWWWWWW------------------', navLi);
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (event.target.scrollTop > sectionTop) {
                current = section.getAttribute("id");
            }
        });
        navLi.forEach((li) => {
            const id = li.getAttribute('id');
            li.classList.add("blink");
            if (id.substring(0, id.length - 1) === current) {
                li.classList.add("blink");
            }
            else {
                li.classList.remove('blink');
            }
        });
    }
    onAddProfil() {
        this.router.navigate(["onboarding/template/0"]);
    }
    onEditProfil(id) {
        this.router.navigate(["onboarding/template/", id]);
    }
    onChangeStatus(data, Status) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.service.updateProfil(Object.assign(Object.assign({}, data), { Status }));
            this.publishTemplate = this.datas.filter((d) => d.Status === true);
            this.draftTemplate = this.datas.filter((d) => d.Status === false);
            if (result) {
                yield this.getAllProfils();
            }
            else {
                console.log("errror......");
            }
        });
    }
    onDelete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            if (confirm("Voulez vous supprimer cette template ?")) {
                const result = yield this.service.deleteProfil(id);
                if (result) {
                    yield this.getAllProfils();
                    this.loading = false;
                }
            }
        });
    }
    getAllProfils() {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield this.service.getAllProfil();
            this.datas = profile;
            this.publishTemplate = this.datas.filter((d) => d.Status === true);
            this.draftTemplate = this.datas.filter((d) => d.Status === false);
            this.publishTemplateLength = this.publishTemplate.length;
            this.draftTemplateLength = this.draftTemplate.length;
        });
    }
    onFilterTemplate() {
        const dataToFilter = this.filterData.searchText !== '' ? this.datas.filter((d) => d.Name.toLowerCase().search(this.filterData.searchText.toLocaleLowerCase()) > -1) : this.datas;
        if (this.filterData.Status === "all") {
            this.publishTemplate = dataToFilter.filter((d) => d.Status === true);
            this.draftTemplate = dataToFilter.filter((d) => d.Status === false);
        }
        else if (this.filterData.Status === 'publish') {
            this.publishTemplate = dataToFilter.filter((d) => d.Status === true);
            this.draftTemplate = [];
        }
        else if (this.filterData.Status === 'draft') {
            this.publishTemplate = [];
            this.draftTemplate = dataToFilter.filter((d) => d.Status === false);
        }
        if (this.filterData.start_date) {
            this.publishTemplate = this.publishTemplate.filter((data) => new Date(data.createdAt).getTime() >= new Date(this.filterData.start_date).getTime());
            this.draftTemplate = this.draftTemplate.filter((data) => new Date(data.createdAt).getTime() >= new Date(this.filterData.start_date).getTime());
        }
        if (this.filterData.end_date) {
            this.publishTemplate = this.publishTemplate.filter((data) => new Date(data.createdAt).getTime() <= new Date(this.filterData.end_date).getTime());
            this.draftTemplate = this.draftTemplate.filter((data) => new Date(data.createdAt).getTime() <= new Date(this.filterData.end_date).getTime());
        }
        this.publishTemplate.sort((a, b) => this.filterData.sortNameAsc ? (b.Name.toLowerCase() > a.Name.toLowerCase() ? 1 : -1) : (b.Name.toLowerCase() > a.Name.toLowerCase() ? -1 : 1));
        this.draftTemplate.sort((a, b) => this.filterData.sortNameAsc ? (b.Name.toLowerCase() > a.Name.toLowerCase() ? 1 : -1) : (b.Name.toLowerCase() > a.Name.toLowerCase() ? -1 : 1));
    }
    onSort() {
        this.filterData.sortNameAsc = !this.filterData.sortNameAsc;
        this.onFilterTemplate();
    }
    copyTemplate(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            this.cpId = data._id;
            const { _id } = data, rest = __rest(data, ["_id"]);
            const copyName = data.Name + " - copie";
            const result = yield this.service.createProfil(Object.assign(Object.assign({}, rest), { Name: copyName }));
            this.toTemplateCopyId = `#${copyName}`;
            if (result) {
                this.onEditProfil(result._id);
                this.cpId = null;
            }
            else {
                console.log("errror......");
            }
            this.loading = false;
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogCreateTemplateComponent, {
            data: {
                tags: this.tags,
            }
        });
        dialogRef.afterClosed().subscribe((current) => {
            if (current) {
                this.service.currentTemplate.next(current);
                this.router.navigate([this.service.mainPath + '/template/0']);
            }
        });
    }
}
TemplateProfileListComponent.ɵfac = function TemplateProfileListComponent_Factory(t) { return new (t || TemplateProfileListComponent)(i0.ɵɵdirectiveInject(OnboardingService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i1$1.MatDialog)); };
TemplateProfileListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TemplateProfileListComponent, selectors: [["onboarding-profile-list"]], viewQuery: function TemplateProfileListComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(MatPaginator, 5);
            i0.ɵɵviewQuery(MatSort, 5);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
        }
    }, hostBindings: function TemplateProfileListComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵlistener("scroll", function TemplateProfileListComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
        }
    }, decls: 3, vars: 2, consts: [[1, "main"], ["class", "content-list", 4, "ngIf"], [3, "showPopup", 4, "ngIf"], [1, "content-list"], [1, "list"], [1, "header-top"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "click"], [1, "list-title"], [1, "filter-item"], ["appearance", "text"], [3, "ngModel", "ngModelChange"], ["value", "all"], ["value", "publish"], ["value", "draft"], ["matInput", "", "placeholder", "Date minimum", 3, "matDatepicker", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["pickerMin", ""], ["matInput", "", "placeholder", "Date maximum", 3, "matDatepicker", "min", "ngModel", "ngModelChange"], ["pickerMax", ""], [1, "filter-item-inner", 3, "click"], [4, "ngIf"], ["appearance", "text", 1, "search-text"], ["matPrefix", "", 2, "margin-left", "5px"], ["matInput", "", "placeholder", "Recherche...", "type", "search", 3, "ngModel", "ngModelChange"], [1, "profil-list-content"], [1, "live-template", 3, "scroll"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", "id", 4, "ngFor", "ngForOf"], [1, "draft-template"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation", "id"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelChange"], [1, "box-content", 3, "routerLink"], [1, "template-title"], [1, "template-date"], [1, "template-footer"], [1, "action-button", 2, "background-color", "transparent", 3, "click"], [1, "action-button", 2, "background-color", "transparent", 3, "ngxScrollTo", "click"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation"], [1, "toogle-button", "draft"], [1, "draft", 3, "ngModel", "ngModelChange"], [3, "showPopup"]], template: function TemplateProfileListComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, TemplateProfileListComponent_div_1_Template, 48, 15, "div", 1);
            i0.ɵɵtemplate(2, TemplateProfileListComponent_lib_no_data_2_Template, 1, 0, "lib-no-data", 2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.datas && ctx.datas.length !== 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.datas.length === 0);
        }
    }, directives: [i1$3.NgIf, i7$1.MatAnchor, i6.MatIcon, i8.MatFormField, i10.MatSelect, i1$2.NgControlStatus, i1$2.NgModel, i7.NativeElementInjectorDirective, i11.MatOption, i12.MatInput, i13.MatDatepickerInput, i1$2.DefaultValueAccessor, i13.MatDatepickerToggle, i8.MatSuffix, i13.MatDatepicker, i8.MatPrefix, i1$3.NgForOf, MaterialElevationDirective, i5.MatSlideToggle, i2.RouterLink, i5$2.ScrollToDirective, LoadingPageComponent, NoDataComponent], pipes: [i1$3.DatePipe], styles: [".main[_ngcontent-%COMP%]{background:#f4f7f9 0% 0% no-repeat padding-box;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font: 700 23px/30px Nexa Text;letter-spacing:0px;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font: 20px/26px Nexa Text;letter-spacing:0px;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-date[_ngcontent-%COMP%]{font-weight:250;font-size:14px;line-height:120%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom:10px;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{margin-right:50px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .draft-template[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .live-template[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:266px;height:300px;position:relative;margin-right:50px;margin-bottom:50px;background:#ffffff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#171f26 0% 0% no-repeat padding-box;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;text-align:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:#ffffff 0% 0% no-repeat padding-box;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-style:normal;font-size:18px;line-height:18px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button.draft[_ngcontent-%COMP%]{color:#f3a124}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{background-color:#171f26}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]{background:#543cb6;border-radius:0 0 5px 5px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]   button.action-button[_ngcontent-%COMP%]{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}.blink[_ngcontent-%COMP%]{animation:blink 2s ease-out;border:2px solid red;border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}  .filter-item{display:flex;align-items:center}  .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}  .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}to{transform:scale(1);opacity:1}}.header-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.profil-list-content[_ngcontent-%COMP%]{max-height:70vh;overflow:auto}.profil-list-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.profil-list-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TemplateProfileListComponent, [{
            type: Component,
            args: [{ selector: "onboarding-profile-list", template: "<div class=\"main\">\r\n    <div class=\"content-list\" *ngIf=\"datas && datas.length!==0\">\r\n        <div class=\"list\">\r\n            <div class=\"header-top\">\r\n                <h2>Profils ({{datas.length}})</h2>\r\n                <a role=\"button\" class=\"add-profil\" (click)=\"openDialog()\" mat-raised-button color=\"primary\">\r\n                    Cr\u00E9er profil <mat-icon>add</mat-icon>\r\n                </a>\r\n            </div>\r\n            <div class=\"list-title\">\r\n                <ul>\r\n                    <li class=\"filter-item\">\r\n                        <mat-form-field appearance=\"text\">\r\n                            <mat-select [(ngModel)]=\"filterData.Status\" (ngModelChange)=\"onFilterTemplate()\">\r\n                                <mat-option value=\"all\"> Tout</mat-option>\r\n                                <mat-option value=\"publish\"> Publi\u00E9s</mat-option>\r\n                                <mat-option value=\"draft\"> Brouillons</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </li>\r\n                    <li class=\"filter-item\">\r\n                        <mat-form-field appearance=\"text\">\r\n                            <input matInput placeholder=\"Date minimum\" [matDatepicker]=\"pickerMin\"\r\n                                [max]=\"filterData.end_date\" [(ngModel)]=\"filterData.start_date\"\r\n                                (ngModelChange)=\"onFilterTemplate()\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"pickerMin\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #pickerMin></mat-datepicker>\r\n                        </mat-form-field>\r\n                    </li>\r\n                    <li class=\"filter-item\">\r\n                        <mat-form-field appearance=\"text\">\r\n                            <input matInput [matDatepicker]=\"pickerMax\" (ngModelChange)=\"onFilterTemplate()\"\r\n                                placeholder=\"Date maximum\" [min]=\"filterData.start_date\"\r\n                                [(ngModel)]=\"filterData.end_date\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"pickerMax\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #pickerMax></mat-datepicker>\r\n                        </mat-form-field>\r\n                    </li>\r\n                    <li class=\"filter-item\">\r\n                        <div class=\"filter-item-inner\" (click)=\"onSort()\">\r\n                            <span>Nom</span>\r\n                            <mat-icon *ngIf=\"filterData.sortNameAsc\">arrow_downward</mat-icon>\r\n                            <mat-icon *ngIf=\"!filterData.sortNameAsc\">arrow_upward</mat-icon>\r\n                        </div>\r\n                    </li>\r\n\r\n                </ul>\r\n                <div class=\"filter-item\">\r\n                    <mat-form-field class=\"search-text\" appearance=\"text\">\r\n                        <mat-icon matPrefix style=\"margin-left: 5px;\">search</mat-icon>\r\n                        <input matInput placeholder=\"Recherche...\" type=\"search\" [(ngModel)]=\"filterData.searchText\"\r\n                            (ngModelChange)=\"onFilterTemplate()\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <div class=\"profil-list-content\">\r\n                <div class=\"live-template\" (scroll)=\"onScroll($event)\">\r\n                    <section appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\r\n                        *ngFor=\"let d of publishTemplate;let index=index\" [id]=\"d.Name\">\r\n                        <div class=\"toogle-button\"><span>Live</span>\r\n                            <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"d.Status\"\r\n                                (ngModelChange)=\"onChangeStatus(d,false)\">\r\n                            </mat-slide-toggle>\r\n                        </div>\r\n                        <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\r\n                            <p class=\"template-title\"> {{d.Name}}</p>\r\n                            <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\r\n                        </div>\r\n\r\n                        <div class=\"template-footer\">\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"onEditProfil(d._id)\">\r\n                                <mat-icon>edit</mat-icon>\r\n                            </button>\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"copyTemplate(d)\" [ngxScrollTo]=\"toTemplateCopyId\">\r\n                                <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\r\n                                <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\r\n                            </button>\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"onDelete(d._id)\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                        </div>\r\n                    </section>\r\n                </div>\r\n                <div class=\"draft-template\">\r\n                    <div appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\r\n                        *ngFor=\"let d of draftTemplate;let index=index\">\r\n                        <div class=\"toogle-button draft\"><span>Brouillon</span>\r\n                            <mat-slide-toggle class=\"draft\" [(ngModel)]=\"d.Status\"\r\n                                (ngModelChange)=\"onChangeStatus(d,true)\">\r\n                            </mat-slide-toggle>\r\n                        </div>\r\n                        <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\r\n                            <p class=\"template-title\"> {{d.Name}}</p>\r\n                            <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\r\n                        </div>\r\n\r\n                        <div class=\"template-footer\">\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"onEditProfil(d._id)\">\r\n                                <mat-icon>edit</mat-icon>\r\n                            </button>\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"copyTemplate(d)\">\r\n                                <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\r\n                                <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\r\n                            </button>\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"onDelete(d._id)\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <lib-no-data *ngIf=\"datas.length===0\" (showPopup)=\"openDialog()\"></lib-no-data>\r\n</div>", styles: [".main{background:#f4f7f9 0% 0% no-repeat padding-box;opacity:1;height:100%}.main .content-list{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main .content-list h3{text-align:left;font: 700 23px/30px Nexa Text;letter-spacing:0px;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main .content-list p.sub-title{margin-bottom:57px;font: 20px/26px Nexa Text;letter-spacing:0px;color:#171f26;width:300px}.main .content-list .template-title{font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main .content-list .template-date{font-weight:250;font-size:14px;line-height:120%}.main .content-list .list .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.main .content-list .list .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px}.main .content-list .list .list-title ul li{padding-bottom:10px;cursor:pointer}.main .content-list .list .list-title ul li.active{border-bottom:4px solid #3c4252}.main .content-list .list .list-title .add-profil{margin-right:50px}.main .content-list .list .draft-template,.main .content-list .list .live-template{display:flex;flex-wrap:wrap;justify-content:flex-start}.main .content-list .list .box-template{width:266px;height:300px;position:relative;margin-right:50px;margin-bottom:50px;background:#ffffff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main .content-list .list .box-template img{width:81px;height:81px}.main .content-list .list .box-template a{background:#171f26 0% 0% no-repeat padding-box;border-radius:7px;font-size:15px}.main .content-list .list .box-template .box-content{width:100%;text-align:center}.main .content-list .list .box-template .box-content .picto-preview{width:113px;height:113px;background:#ffffff 0% 0% no-repeat padding-box;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main .content-list .list .box-template .box-content .picto-preview h3{font-size:40px;color:#dce4e9}.main .content-list .list .box-template .toogle-button{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-style:normal;font-size:18px;line-height:18px}.main .content-list .list .box-template .toogle-button span{padding-right:10px}.main .content-list .list .box-template .toogle-button.draft{color:#f3a124}.main .content-list .list .new-template{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main .content-list .list .add-profil{background-color:#171f26}.main .content-list .template-footer{background:#543cb6;border-radius:0 0 5px 5px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main .content-list .template-footer button.action-button{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}.blink{animation:blink 2s ease-out;border:2px solid red;border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}to{transform:scale(1);opacity:1}}.header-top{display:flex;align-items:center;justify-content:space-between}.profil-list-content{max-height:70vh;overflow:auto}.profil-list-content::-webkit-scrollbar{width:5px}.profil-list-content::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}\n"] }]
        }], function () { return [{ type: OnboardingService }, { type: i2.Router }, { type: i1$1.MatDialog }]; }, { paginator: [{
                type: ViewChild,
                args: [MatPaginator]
            }], sort: [{
                type: ViewChild,
                args: [MatSort]
            }], onScroll: [{
                type: HostListener,
                args: ['scroll', ['$event']]
            }] });
})();

class CanDeactivateGuard {
    canDeactivate(component, route, state) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
CanDeactivateGuard.ɵfac = function CanDeactivateGuard_Factory(t) { return new (t || CanDeactivateGuard)(); };
CanDeactivateGuard.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CanDeactivateGuard, factory: CanDeactivateGuard.ɵfac });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CanDeactivateGuard, [{
            type: Injectable
        }], null, null);
})();

class DialogConfirmation {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.message = '';
        this.icon = "";
        this.confirmText = "";
        this.cancelText = "";
    }
    ngOnInit() {
        this.message = this.data.message || '';
        this.icon = this.data.icon || 'check-circle';
        this.confirmText = this.data.confirmText || 'Oui';
        this.cancelText = this.data.cancelText || 'Non';
    }
    close(status) {
        this.dialogRef.close(status);
    }
}
DialogConfirmation.ɵfac = function DialogConfirmation_Factory(t) { return new (t || DialogConfirmation)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1$1.MatDialogRef)); };
DialogConfirmation.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogConfirmation, selectors: [["lib-dialog-confirmation"]], decls: 12, vars: 3, consts: [[1, "title"], [1, "message"], [1, "action-content"], ["mat-raised-button", "", 1, "confirm", 3, "click"], ["mat-raised-button", "", 1, "cancel", 3, "click"]], template: function DialogConfirmation_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-dialog-content")(1, "h3", 0)(2, "p")(3, "mat-icon");
            i0.ɵɵtext(4, "check_circle");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "p", 1);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 2)(8, "button", 3);
            i0.ɵɵlistener("click", function DialogConfirmation_Template_button_click_8_listener() { return ctx.close(true); });
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 4);
            i0.ɵɵlistener("click", function DialogConfirmation_Template_button_click_10_listener() { return ctx.close(false); });
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.message);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.confirmText, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.cancelText, " ");
        }
    }, directives: [i1$1.MatDialogContent, i6.MatIcon, i7$1.MatButton], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:space-between;text-align:center;padding:12px 25px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%]{display:flex;justify-content:space-around}mat-dialog-content[_ngcontent-%COMP%]   .confirm[_ngcontent-%COMP%]{background-color:#242731;color:#fff;box-shadow:0 0 #0003;padding:10px!important;border-radius:7px}mat-dialog-content[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{box-shadow:none;border:1px solid #242731;border-radius:7px;padding:10px!important}mat-dialog-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}mat-dialog-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:50px;color:#6fe8d7}mat-dialog-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:110%;color:#242731}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogConfirmation, [{
            type: Component,
            args: [{ selector: 'lib-dialog-confirmation', template: "<mat-dialog-content>\r\n  <h3 class=\"title\">\r\n    <p>\r\n      <mat-icon>check_circle</mat-icon>\r\n    </p>\r\n    <p class=\"message\">{{message}}</p>\r\n  </h3>\r\n  <div class=\"action-content\">\r\n    <button class=\"confirm\" (click)=\"close(true)\" mat-raised-button>\r\n      {{confirmText}}\r\n    </button>\r\n    <button class=\"cancel\" (click)=\"close(false)\" mat-raised-button>\r\n      {{cancelText}}\r\n    </button>\r\n\r\n  </div>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column;justify-content:space-between;text-align:center;padding:12px 25px}mat-dialog-content mat-form-field{margin-bottom:10px}mat-dialog-content h3{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content .action-content{display:flex;justify-content:space-around}mat-dialog-content .confirm{background-color:#242731;color:#fff;box-shadow:0 0 #0003;padding:10px!important;border-radius:7px}mat-dialog-content .cancel{box-shadow:none;border:1px solid #242731;border-radius:7px;padding:10px!important}mat-dialog-content .title{display:flex;flex-direction:column;align-items:center;justify-content:center}mat-dialog-content .title mat-icon{font-size:50px;color:#6fe8d7}mat-dialog-content .title .message{font-style:normal;font-weight:700;font-size:20px;line-height:110%;color:#242731}\n"] }]
        }], function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }, { type: i1$1.MatDialogRef }];
    }, null);
})();

function fieldWidth(type, length, index) {
    if (type === 'textarea') {
        if (length === 1) {
            return '100%';
        }
        return '50%';
    }
    else if (type === 'toggle') {
        return '50%';
    }
    else if (type === "text" || type === "date" || type === "none" || type == 'select' || type === 'tel' || type === 'email' || type === 'password') {
        if (length < 3) {
            return '50%';
        }
        else if (length === 3) {
            return '33%';
        }
        else if (length === 4) {
            return '25%';
        }
        else if (length === 5) {
            return index <= 2 ? '33%' : '50%';
        }
        else if (length >= 6) {
            return '33%';
        }
    }
    return '100%';
}

const _c0$1 = function () { return { standalone: true }; };
const _c1 = function () { return { display: "inine-block" }; };
function SubOnboardingCreateComponent_div_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 9)(1, "span");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-slide-toggle", 10);
        i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_Template_mat_slide_toggle_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.field.defaultValue = $event; });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r0.field.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r0.field.defaultValue)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0$1))("ngStyle", ctx_r0.field.selector && i0.ɵɵpureFunction0(5, _c1));
    }
}
function SubOnboardingCreateComponent_div_3_mat_select_3_mat_option_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 16);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const select_r13 = ctx.$implicit;
        i0.ɵɵproperty("value", select_r13.value);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", select_r13.value, "");
    }
}
function SubOnboardingCreateComponent_div_3_mat_select_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-select", 14);
        i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.field.selector.value = $event; });
        i0.ɵɵtemplate(1, SubOnboardingCreateComponent_div_3_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 15);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r11 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("ngModel", ctx_r11.field.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0$1));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r11.field.selector.defaultValue);
    }
}
const _c2 = function () { return { "display": "inine-block" }; };
function SubOnboardingCreateComponent_div_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 11)(1, "mat-checkbox", 12);
        i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.field.value = $event; });
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, SubOnboardingCreateComponent_div_3_mat_select_3_Template, 2, 4, "mat-select", 13);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx_r1.checkSubForm(ctx_r1.field) ? "checkbox-title-active" : "");
        i0.ɵɵproperty("ngModel", ctx_r1.field.value)("required", ctx_r1.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(8, _c0$1))("ngStyle", ctx_r1.field.selector && i0.ɵɵpureFunction0(9, _c2));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r1.field.label, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r1.field.selector);
    }
}
function SubOnboardingCreateComponent_div_4_mat_checkbox_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-checkbox", 19);
        i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r21); const opt_r19 = restoredCtx.$implicit; return opt_r19.checked = $event; });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const opt_r19 = ctx.$implicit;
        const ctx_r18 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("checked", opt_r19.checked)("ngModel", opt_r19.checked)("required", ctx_r18.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0$1));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", opt_r19.value, " ");
    }
}
function SubOnboardingCreateComponent_div_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 11)(1, "label");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 17);
        i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_mat_checkbox_4_Template, 2, 6, "mat-checkbox", 18);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r2.field.label);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx_r2.field.defaultValue);
    }
}
function SubOnboardingCreateComponent_div_5_mat_radio_button_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-radio-button", 16);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const opt_r24 = ctx.$implicit;
        i0.ɵɵproperty("value", opt_r24.value);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("", opt_r24.value, " ");
    }
}
function SubOnboardingCreateComponent_div_5_mat_form_field_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r26 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field", 24)(1, "mat-label");
        i0.ɵɵtext(2, "Autre option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 25);
        i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.field.otherValue = $event; });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r23 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("required", ctx_r23.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0$1))("ngModel", ctx_r23.field.otherValue);
    }
}
function SubOnboardingCreateComponent_div_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r28 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 20)(1, "label", 21);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-radio-group", 22);
        i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.field.value = $event; });
        i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_5_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_mat_form_field_5_Template, 4, 4, "mat-form-field", 23);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx_r3.field.label, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r3.field.value)("required", ctx_r3.field.isMandatory);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r3.field.defaultValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", "autre" === ctx_r3.formatOther(ctx_r3.field.value));
    }
}
function SubOnboardingCreateComponent_div_6_mat_option_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 16);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const opt_r31 = ctx.$implicit;
        i0.ɵɵproperty("value", opt_r31.value);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", opt_r31.value, "");
    }
}
function SubOnboardingCreateComponent_div_6_mat_form_field_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r33 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field", 24)(1, "mat-label");
        i0.ɵɵtext(2, "Autre option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 25);
        i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_6_mat_form_field_6_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.field.otherValue = $event; });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r30 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("required", ctx_r30.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0$1))("ngModel", ctx_r30.field.otherValue);
    }
}
function SubOnboardingCreateComponent_div_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r35 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 20)(1, "mat-form-field", 26)(2, "mat-label");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-select", 27);
        i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_6_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.field.value = $event; });
        i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_6_mat_option_5_Template, 2, 2, "mat-option", 15);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(6, SubOnboardingCreateComponent_div_6_mat_form_field_6_Template, 4, 4, "mat-form-field", 23);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r4 = i0.ɵɵnextContext();
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx_r4.field.label, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r4.field.value)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0$1))("required", ctx_r4.field.isMandatory);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r4.field.defaultValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", "autre" === ctx_r4.formatOther(ctx_r4.field.value));
    }
}
function SubOnboardingCreateComponent_mat_form_field_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r37 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field", 28)(1, "mat-label");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "textarea", 29);
        i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_7_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.field.value = $event; });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r5 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r5.field.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("required", ctx_r5.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0$1))("ngModel", ctx_r5.field.value);
    }
}
function SubOnboardingCreateComponent_div_8_mat_error_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵtext(1, "Le t\u00E9l\u00E9phone est invalide");
        i0.ɵɵelementEnd();
    }
}
function SubOnboardingCreateComponent_div_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r40 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 30)(1, "mat-label", 31);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ngx-intl-tel-input", 32);
        i0.ɵɵlistener("input", function SubOnboardingCreateComponent_div_8_Template_ngx_intl_tel_input_input_3_listener() { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.checkPhone(ctx_r39.field.value); })("ngModelChange", function SubOnboardingCreateComponent_div_8_Template_ngx_intl_tel_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.field.value = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_8_mat_error_4_Template, 2, 0, "mat-error", 33);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r6 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r6.field.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cssClass", "input-phone")("preferredCountries", ctx_r6.preferredCountries)("enableAutoCountrySelect", false)("enablePlaceholder", true)("customPlaceholder", "Phone")("selectFirstCountry", false)("selectedCountryISO", ctx_r6.flag(ctx_r6.field.value))("maxLength", 15)("inputId", ctx_r6.field.key)("phoneValidation", true)("separateDialCode", ctx_r6.separateDialCode)("numberFormat", ctx_r6.PhoneNumberFormat.National)("ngModelOptions", i0.ɵɵpureFunction0(16, _c0$1))("ngModel", ctx_r6.field.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r6.invalideValue);
    }
}
function SubOnboardingCreateComponent_mat_form_field_9_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 34);
        i0.ɵɵelement(1, "mat-label")(2, "input", 35);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r7 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("type", ctx_r7.field.type);
    }
}
function SubOnboardingCreateComponent_mat_form_field_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r43 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field", 36)(1, "mat-label");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 37);
        i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_10_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.field.value = $event; });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r8 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r8.field.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("type", ctx_r8.field.type)("required", ctx_r8.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0$1))("ngModel", ctx_r8.field.value);
    }
}
const _c3 = [[["", 8, "child"]]];
const _c4 = [".child"];
class SubOnboardingCreateComponent {
    constructor() {
        this.onAddKeywordFromInput = new EventEmitter();
        this.onKeyPress = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onAddNewField = new EventEmitter();
        this.onRemoveField = new EventEmitter();
        this.onChangeType = new EventEmitter();
        this.onRemoveKeyword = new EventEmitter();
        this.onAddNewSubLevelField = new EventEmitter();
        this.onExpendMore = new EventEmitter();
        this.onChangeLabel = new EventEmitter();
        this.onCheckedChip = new EventEmitter();
        this.onCheckValue = new EventEmitter();
        this.chipControl = new FormControl(new Set());
        this.preferredCountries = [CountryISO.UnitedStates, CountryISO.France];
        this.PhoneNumberFormat = PhoneNumberFormat;
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.invalideValue = false;
        this.currentChip = "";
        this.separateDialCode = false;
        this.prevValue = "";
        this.toggleChip = (chip) => {
            this.onCheckedChip.emit(chip);
            // const addChip = () => { this.chips.add(chip); };
            // const removeChip = () => { this.chips.delete(chip); };
            // this.chips.has(chip) ? removeChip() : addChip();
        };
    }
    ngOnInit() {
    }
    drop(event) {
        this.onDrop.emit(event);
    }
    addKeywordFromInput(event, i, j) {
        this.onAddKeywordFromInput.emit({ event, prev: this.prevValue, i, j });
    }
    keyUp(event, i, j) {
        this.onKeyPress.emit({ event, i, j });
    }
    addNewField(event, i) {
        event.preventDefault();
        this.onAddNewField.emit({ event, i });
    }
    removeField(event, i, j) {
        event.preventDefault();
        this.onRemoveField.emit({ i, j });
    }
    changeType(type, i, j) {
        this.onChangeType.emit({ type, i, j });
    }
    removeKeyword(event, i, j) {
        this.onRemoveKeyword.emit({ event, i, j });
    }
    addNewSubLevelField(e) {
        e.preventDefault();
        this.onAddNewSubLevelField.emit(true);
    }
    expendMore(e, field) {
        e.preventDefault();
        this.onExpendMore.emit({ expand: true, field });
    }
    ingoreDefaultAction(e) {
        e.preventDefault();
    }
    changeLabel(label, key) {
        this.onChangeLabel.emit({ label, key });
    }
    onEditChip(chip) {
        if (chip.value === this.currentChip) {
            this.currentChip = "";
            this.prevValue = "";
        }
        else {
            this.currentChip = chip.value;
            this.prevValue = chip.value;
        }
    }
    get chips() { return this.chipControl.value; }
    formatOther(other) {
        if (other && typeof other !== 'boolean') {
            return ((other === null || other === void 0 ? void 0 : other.toLocaleLowerCase()) || '');
        }
        return '';
    }
    checkSubForm(forms) {
        let hasSubForm = false;
        if (forms.forms && forms.forms.length) {
            hasSubForm = true;
        }
        return hasSubForm;
    }
    flag(value) {
        const valueString = String(value);
        return valueString && isValidPhoneNumber(valueString) ? parsePhoneNumber(valueString).country : CountryISO.France;
    }
    checkPhone(phone) {
        if (phone) {
            let regex = new RegExp(/\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$/);
            this.invalideValue = !regex.test(phone['e164Number']);
            this.onCheckValue.emit(this.invalideValue);
        }
        if (phone && phone["nationalNumber"] && phone["nationalNumber"] != '') {
            let p = phone['nationalNumber'].replaceAll(' ', '');
            let newp = '';
            for (let i = 0; i < p.length; i++) {
                if (p.split('')[i]) {
                    if (i % 2 == 0 && i > 0) {
                        newp += ' ';
                    }
                    newp += p.split('')[i];
                }
            }
            this.field.value = phone["nationalNumber"];
        }
    }
}
SubOnboardingCreateComponent.ɵfac = function SubOnboardingCreateComponent_Factory(t) { return new (t || SubOnboardingCreateComponent)(); };
SubOnboardingCreateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubOnboardingCreateComponent, selectors: [["lib-sub-create-onboarding"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckValue: "onCheckValue" }, ngContentSelectors: _c4, decls: 12, vars: 9, consts: [[1, "field-item"], [3, "ngSwitch"], ["class", "flex-auto field-size toggle-button", 4, "ngSwitchCase"], ["class", "flex-auto w-30", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width tel-input", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", "style", "opacity:0 ;", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "field-size", "toggle-button"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngStyle", "ngModelChange"], [1, "flex-auto", "w-30"], [1, "form-field", 2, "margin-right", "10px", 3, "ngModel", "required", "ngModelOptions", "ngStyle", "ngModelChange"], ["placeholder", "Company", "required", "", "style", "display: inline-block; width: 50%;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", "required", "", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "onboarding-select", 2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px;margin-right: 10px;", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", "margin-right", "10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange"], [1, "flex-auto", "w-30", "field-size"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], ["class", "form-field field-size other-option", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", "other-option"], ["type", "text", "matInput", "", "placeholder", "", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "mat-select", "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "rows", "5", "matInput", "", "placeholder", "Description...", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], [1, "form-field", "full-width", "tel-input"], [1, "tel-label"], ["id", "onboarding-phone-input", "name", "phone", 1, "phone-input-profile", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "customPlaceholder", "selectFirstCountry", "selectedCountryISO", "maxLength", "inputId", "phoneValidation", "separateDialCode", "numberFormat", "ngModelOptions", "ngModel", "input", "ngModelChange"], [4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", 2, "opacity", "0"], ["disabled", "true", "matInput", "", 3, "type"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboardingCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojectionDef(_c3);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementContainerStart(1, 1);
            i0.ɵɵtemplate(2, SubOnboardingCreateComponent_div_2_Template, 4, 6, "div", 2);
            i0.ɵɵtemplate(3, SubOnboardingCreateComponent_div_3_Template, 4, 10, "div", 3);
            i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_Template, 5, 2, "div", 3);
            i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_Template, 6, 5, "div", 4);
            i0.ɵɵtemplate(6, SubOnboardingCreateComponent_div_6_Template, 7, 7, "div", 4);
            i0.ɵɵtemplate(7, SubOnboardingCreateComponent_mat_form_field_7_Template, 4, 5, "mat-form-field", 5);
            i0.ɵɵtemplate(8, SubOnboardingCreateComponent_div_8_Template, 5, 17, "div", 6);
            i0.ɵɵtemplate(9, SubOnboardingCreateComponent_mat_form_field_9_Template, 3, 1, "mat-form-field", 7);
            i0.ɵɵtemplate(10, SubOnboardingCreateComponent_mat_form_field_10_Template, 4, 6, "mat-form-field", 8);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(11);
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", ctx.field.type);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "toggle");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "checkbox");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "checkbox_multiple");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "radio");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "select");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "textarea");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "tel");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "none");
        }
    }, directives: [i1$3.NgSwitch, i1$3.NgSwitchCase, i5.MatSlideToggle, i1$2.NgControlStatus, i1$2.NgModel, i7.NativeElementInjectorDirective, i1$3.NgStyle, i5$1.MatCheckbox, i5$1.MatCheckboxRequiredValidator, i1$2.RequiredValidator, i1$3.NgIf, i10.MatSelect, i1$3.NgForOf, i11.MatOption, i12$1.MatRadioGroup, i12$1.MatRadioButton, i8.MatFormField, i8.MatLabel, i12.MatInput, i1$2.DefaultValueAccessor, i7.NgxIntlTelInputComponent, i8.MatError, i1$3.NgSwitchDefault], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:20px}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font: 17px/26px Nexa Text;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active[_ngcontent-%COMP%]{font-weight:700}.other-option[_ngcontent-%COMP%]{margin-left:10px}.flex-auto[_ngcontent-%COMP%]{width:100%}  .country-dropdown{min-width:unset!important}  .tel-input{position:relative}  .tel-input .tel-label{font-size:12px;color:#0009;position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-3px}  .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;font: 14px/20px Nexa Text!important;width:100%}  .phone-input-profile .iti{width:100%!important}  .phone-input-profile .iti input[type=tel]{margin-top:4px!important}  .phone-input-profile input{outline:none;padding:17px;border-radius:5px;border-color:#0000001f;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}.toggle-button[_ngcontent-%COMP%]{padding-top:15px;display:flex;align-items:center}.toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.onboarding-select[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(6,1fr)}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubOnboardingCreateComponent, [{
            type: Component,
            args: [{ selector: 'lib-sub-create-onboarding', template: "<div class=\"field-item\">\r\n    <ng-container [ngSwitch]=\"field.type\">\r\n        <div *ngSwitchCase=\"'toggle'\" class=\"flex-auto field-size toggle-button\">\r\n            <span>{{ field.label }}</span>\r\n            <mat-slide-toggle class=\"form-field\" [(ngModel)]=\"field.defaultValue\"\r\n                [ngModelOptions]=\"{ standalone: true }\" [ngStyle]=\"field.selector && { display: 'inine-block' }\">\r\n            </mat-slide-toggle>\r\n        </div>\r\n        <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto w-30\">\r\n            <mat-checkbox class=\"form-field\" style=\"margin-right: 10px;\"\r\n                [class]=\"checkSubForm(field) ? 'checkbox-title-active':''\" [(ngModel)]=\"field.value\"\r\n                [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\"\r\n                [ngStyle]=\"field.selector && {'display': 'inine-block'}\">\r\n                {{field.label}}\r\n            </mat-checkbox>\r\n\r\n\r\n            <mat-select placeholder=\"Company\" [(ngModel)]=\"field.selector.value\" [ngModelOptions]=\"{standalone: true}\"\r\n                required *ngIf=\"field.selector\" style=\"display: inline-block; width: 50%;\">\r\n                <mat-option *ngFor=\"let select of field.selector.defaultValue\" [value]=\"select.value\">\r\n                    {{select.value}}</mat-option>\r\n            </mat-select>\r\n        </div>\r\n        <div *ngSwitchCase=\"'checkbox_multiple'\" class=\"flex-auto w-30\">\r\n            <label>{{field.label}}</label>\r\n            <div class=\"onboarding-select\" style=\"margin-top: 20px;\">\r\n                <mat-checkbox class=\"form-field\"\r\n                    style=\"display: block; margin-bottom: 5px; margin-top: 10px;margin-right: 10px;\"\r\n                    *ngFor=\"let opt of field.defaultValue\" [checked]=\"opt.checked\" [(ngModel)]=\"opt.checked\"\r\n                    [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\">\r\n                    {{opt.value}}\r\n                </mat-checkbox>\r\n            </div>\r\n        </div>\r\n        <div *ngSwitchCase=\"'radio'\" class=\"flex-auto w-30 field-size\">\r\n            <label style=\"display: block;\"> {{field.label}} </label>\r\n            <mat-radio-group class=\"form-field radio-group field-size\" [(ngModel)]=\"field.value\"\r\n                [required]=\"field.isMandatory\" aria-label=\"Select an option\">\r\n                <mat-radio-button *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">{{opt.value}}\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n            <mat-form-field *ngIf=\"'autre'===formatOther(field.value)\" class=\"form-field field-size other-option\"\r\n                appearance=\"outline\">\r\n                <mat-label>Autre option</mat-label>\r\n                <input type=\"text\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\r\n                    [(ngModel)]=\"field.otherValue\" placeholder=\"\">\r\n            </mat-form-field>\r\n        </div>\r\n        <div *ngSwitchCase=\"'select'\" class=\"flex-auto w-30 field-size\">\r\n            <mat-form-field class=\" mat-select flex-auto w-30 field-size\" appearance=\"outline\">\r\n                <mat-label> {{field.label}} </mat-label>\r\n                <mat-select [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\"\r\n                    [required]=\"field.isMandatory\">\r\n                    <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">\r\n                        {{opt.value}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"'autre'===formatOther(field.value)\" class=\"form-field field-size other-option\"\r\n                appearance=\"outline\">\r\n                <mat-label>Autre option</mat-label>\r\n                <input type=\"text\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\r\n                    [(ngModel)]=\"field.otherValue\" placeholder=\"\">\r\n            </mat-form-field>\r\n        </div>\r\n        <mat-form-field *ngSwitchCase=\"'textarea'\" class=\"form-field full-width\" appearance=\"outline\">\r\n            <mat-label>{{field.label}}</mat-label>\r\n            <textarea type=\"text\" rows=\"5\" matInput [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\"\r\n                [(ngModel)]=\"field.value\" placeholder=\"Description...\"></textarea>\r\n        </mat-form-field>\r\n        <div *ngSwitchCase=\"'tel'\" class=\"form-field full-width tel-input\">\r\n            <mat-label class=\"tel-label\">{{field.label}}</mat-label>\r\n            <ngx-intl-tel-input id=\"onboarding-phone-input\" class=\"phone-input-profile\" [cssClass]=\"'input-phone'\"\r\n                [preferredCountries]=\"preferredCountries\" [enableAutoCountrySelect]=\"false\" [enablePlaceholder]=\"true\"\r\n                [customPlaceholder]=\"'Phone'\" [selectFirstCountry]=\"false\" [selectedCountryISO]=\"flag(field.value)\"\r\n                [maxLength]=\"15\" [inputId]=\"field.key\" [phoneValidation]=\"true\" [separateDialCode]=\"separateDialCode\"\r\n                [numberFormat]=\"PhoneNumberFormat.National\" name=\"phone\" (input)=\"checkPhone(field.value)\"\r\n                [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.value\">\r\n            </ngx-intl-tel-input>\r\n            <mat-error *ngIf=\"invalideValue\">Le t\u00E9l\u00E9phone est invalide</mat-error>\r\n        </div>\r\n        <mat-form-field *ngSwitchCase=\"'none'\" class=\"form-field field-size\" appearance=\"outline\" style=\"opacity:0 ;\">\r\n            <mat-label></mat-label>\r\n            <input [type]=\"field.type\" disabled=\"true\" matInput />\r\n        </mat-form-field>\r\n        <mat-form-field *ngSwitchDefault class=\"form-field field-size\" appearance=\"outline\">\r\n            <mat-label>{{field.label}}</mat-label>\r\n            <input [type]=\"field.type\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\r\n                [(ngModel)]=\"field.value\" placeholder=\"\">\r\n        </mat-form-field>\r\n    </ng-container>\r\n</div>\r\n<ng-content select=\".child\"></ng-content>", styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative}.field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.field-action{width:10%}.field-size mat-checkbox{margin:20px}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}::ng-deep .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font: 17px/26px Nexa Text;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.expand-button .material-icons{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active{font-weight:700}.other-option{margin-left:10px}.flex-auto{width:100%}::ng-deep .country-dropdown{min-width:unset!important}::ng-deep .tel-input{position:relative}::ng-deep .tel-input .tel-label{font-size:12px;color:#0009;position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-3px}::ng-deep .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;font: 14px/20px Nexa Text!important;width:100%}::ng-deep .phone-input-profile .iti{width:100%!important}::ng-deep .phone-input-profile .iti input[type=tel]{margin-top:4px!important}::ng-deep .phone-input-profile input{outline:none;padding:17px;border-radius:5px;border-color:#0000001f;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}.toggle-button{padding-top:15px;display:flex;align-items:center}.toggle-button span{margin-right:10px}.onboarding-select{display:grid;grid-template-columns:repeat(6,1fr)}\n"] }]
        }], function () { return []; }, { field: [{
                type: Input
            }], length: [{
                type: Input
            }], i: [{
                type: Input
            }], j: [{
                type: Input
            }], onAddKeywordFromInput: [{
                type: Output
            }], onKeyPress: [{
                type: Output
            }], onDrop: [{
                type: Output
            }], onAddNewField: [{
                type: Output
            }], onRemoveField: [{
                type: Output
            }], onChangeType: [{
                type: Output
            }], onRemoveKeyword: [{
                type: Output
            }], onAddNewSubLevelField: [{
                type: Output
            }], onExpendMore: [{
                type: Output
            }], onChangeLabel: [{
                type: Output
            }], onCheckedChip: [{
                type: Output
            }], onCheckValue: [{
                type: Output
            }] });
})();

function OnboardingDetailComponent_mat_icon_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-icon", 19);
        i0.ɵɵlistener("click", function OnboardingDetailComponent_mat_icon_4_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onEdit(); });
        i0.ɵɵtext(1, "edit ");
        i0.ɵɵelementEnd();
    }
}
function OnboardingDetailComponent_ng_container_24_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelement(1, "span");
        i0.ɵɵelementStart(2, "mat-icon", 8);
        i0.ɵɵtext(3, "phone");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(4);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", ctx_r1.detailView == null ? null : ctx_r1.detailView.user == null ? null : ctx_r1.detailView.user.MobilePhone == null ? null : ctx_r1.detailView.user.MobilePhone.internationalNumber, " ");
    }
}
function OnboardingDetailComponent_ng_container_25_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelement(1, "span");
        i0.ɵɵelementStart(2, "mat-icon", 8);
        i0.ɵɵtext(3, "smartphone");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(4);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", ctx_r2.detailView == null ? null : ctx_r2.detailView.user == null ? null : ctx_r2.detailView.user.Phone == null ? null : ctx_r2.detailView.user.Phone.internationalNumber, " ");
    }
}
function OnboardingDetailComponent_li_28_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "li", 20)(1, "a");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const category_r9 = ctx.$implicit;
        const i_r10 = ctx.index;
        i0.ɵɵclassMap(i_r10 === 0 ? "active" : "");
        i0.ɵɵproperty("ngxScrollTo", "#" + category_r9.name)("id", category_r9.name + "x");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(category_r9.name);
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_1_ng_container_3_li_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "li");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r20 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r20);
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_1_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "ul", 30);
        i0.ɵɵtemplate(2, OnboardingDetailComponent_section_30_div_9_ng_container_1_ng_container_3_li_2_Template, 2, 1, "li", 31);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const forms_r14 = i0.ɵɵnextContext(2).$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", forms_r14.value);
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_1_h4_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const forms_r14 = i0.ɵɵnextContext(2).$implicit;
        const ctx_r18 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r18.onFormatDisplayValue(forms_r14.value).value, " ");
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "p", 29);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, OnboardingDetailComponent_section_30_div_9_ng_container_1_ng_container_3_Template, 3, 1, "ng-container", 9);
        i0.ɵɵtemplate(4, OnboardingDetailComponent_section_30_div_9_ng_container_1_h4_4_Template, 2, 1, "h4", 9);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const forms_r14 = i0.ɵɵnextContext().$implicit;
        const ctx_r15 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(forms_r14.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r15.onFormatDisplayValue(forms_r14.value).type === "array");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r15.onFormatDisplayValue(forms_r14.value).type !== "array");
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_1_ng_container_3_li_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "li");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r31 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r31);
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_1_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "ul", 30);
        i0.ɵɵtemplate(2, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_1_ng_container_3_li_2_Template, 2, 1, "li", 31);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const sub_r25 = i0.ɵɵnextContext(2).$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", sub_r25.value);
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_1_h4_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const sub_r25 = i0.ɵɵnextContext(2).$implicit;
        const ctx_r29 = i0.ɵɵnextContext(4);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r29.onFormatDisplayValue(sub_r25.value).value, "");
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "p", 29);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_1_ng_container_3_Template, 3, 1, "ng-container", 9);
        i0.ɵɵtemplate(4, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_1_h4_4_Template, 2, 1, "h4", 9);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const sub_r25 = i0.ɵɵnextContext().$implicit;
        const ctx_r26 = i0.ɵɵnextContext(4);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(sub_r25.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r26.onFormatDisplayValue(sub_r25.value).type === "array");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r26.onFormatDisplayValue(sub_r25.value).type !== "array");
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_ng_container_3_li_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "li");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r42 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r42);
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "ul", 30);
        i0.ɵɵtemplate(2, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_ng_container_3_li_2_Template, 2, 1, "li", 31);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const child_r36 = i0.ɵɵnextContext(2).$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", child_r36.value);
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_h4_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const child_r36 = i0.ɵɵnextContext(2).$implicit;
        const ctx_r40 = i0.ɵɵnextContext(6);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r40.onFormatDisplayValue(child_r36.value).value, "");
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "p", 29);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_ng_container_3_Template, 3, 1, "ng-container", 9);
        i0.ɵɵtemplate(4, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_h4_4_Template, 2, 1, "h4", 9);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const child_r36 = i0.ɵɵnextContext().$implicit;
        const ctx_r37 = i0.ɵɵnextContext(6);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(child_r36.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r37.onFormatDisplayValue(child_r36.value).type === "array");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r37.onFormatDisplayValue(child_r36.value).type !== "array");
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_ng_container_3_li_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "li");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r51 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r51);
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "ul", 30);
        i0.ɵɵtemplate(2, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_ng_container_3_li_2_Template, 2, 1, "li", 31);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const c2_r47 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", c2_r47.value);
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_h4_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const c2_r47 = i0.ɵɵnextContext().$implicit;
        const ctx_r49 = i0.ɵɵnextContext(8);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r49.onFormatDisplayValue(c2_r47.value).value, "");
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 28)(1, "p", 29);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_ng_container_3_Template, 3, 1, "ng-container", 9);
        i0.ɵɵtemplate(4, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_h4_4_Template, 2, 1, "h4", 9);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const c2_r47 = ctx.$implicit;
        const ctx_r46 = i0.ɵɵnextContext(8);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(c2_r47.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r46.onFormatDisplayValue(c2_r47.value).type === "array");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r46.onFormatDisplayValue(c2_r47.value).type !== "array");
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "h3");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template, 5, 3, "div", 27);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const child_r36 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(child_r36.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", child_r36.forms);
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 28);
        i0.ɵɵtemplate(1, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template, 5, 3, "ng-container", 9);
        i0.ɵɵtemplate(2, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 9);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const child_r36 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !child_r36.forms);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", child_r36.forms);
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "h3");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_Template, 3, 2, "div", 27);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const sub_r25 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(sub_r25.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", sub_r25.forms);
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 28);
        i0.ɵɵtemplate(1, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_1_Template, 5, 3, "ng-container", 9);
        i0.ɵɵtemplate(2, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 9);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const sub_r25 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !sub_r25.forms);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", sub_r25.forms);
    }
}
function OnboardingDetailComponent_section_30_div_9_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "h3");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_Template, 3, 2, "div", 27);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const forms_r14 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(forms_r14.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", forms_r14.forms);
    }
}
function OnboardingDetailComponent_section_30_div_9_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 28);
        i0.ɵɵtemplate(1, OnboardingDetailComponent_section_30_div_9_ng_container_1_Template, 5, 3, "ng-container", 9);
        i0.ɵɵtemplate(2, OnboardingDetailComponent_section_30_div_9_ng_container_2_Template, 4, 2, "ng-container", 9);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const forms_r14 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !forms_r14.forms);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", forms_r14.forms);
    }
}
function OnboardingDetailComponent_section_30_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 21)(1, "div", 22)(2, "div", 23)(3, "div", 24)(4, "h2");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p", 25);
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(8, "div", 26);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, OnboardingDetailComponent_section_30_div_9_Template, 3, 2, "div", 27);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const category_r11 = ctx.$implicit;
        const ctx_r4 = i0.ɵɵnextContext();
        i0.ɵɵproperty("id", category_r11.name);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(category_r11.name);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r4.catNameStart(category_r11.name) ? "l'" + category_r11.name : category_r11.name, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", category_r11.forms);
    }
}
function OnboardingDetailComponent_ng_container_38_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r60 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 33)(1, "div", 34)(2, "button", 35);
        i0.ɵɵlistener("click", function OnboardingDetailComponent_ng_container_38_div_1_Template_button_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r60); const ticket_r58 = restoredCtx.$implicit; const ctx_r59 = i0.ɵɵnextContext(2); return ctx_r59.onViewTicket(ticket_r58.CaseNumber); });
        i0.ɵɵelementStart(3, "mat-icon", 8);
        i0.ɵɵtext(4, "list_alt");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "span", 36);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "button", 37);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(9, "p", 38);
        i0.ɵɵtext(10);
        i0.ɵɵpipe(11, "date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 39)(13, "h3");
        i0.ɵɵtext(14);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(15, "button", 40);
        i0.ɵɵlistener("click", function OnboardingDetailComponent_ng_container_38_div_1_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r60); const ticket_r58 = restoredCtx.$implicit; const ctx_r61 = i0.ɵɵnextContext(2); return ctx_r61.openBottomSheet(ticket_r58 == null ? null : ticket_r58.vattachment); });
        i0.ɵɵtext(16, "T\u00E9l\u00E9charger le PDF r\u00E9capitulatif");
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ticket_r58 = ctx.$implicit;
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1("Ticket ", ticket_r58.CaseNumber, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ticket_r58.Status);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(11, 4, ticket_r58.CreatedDate, "dd/MM/yy"));
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ticket_r58.Subject);
    }
}
function OnboardingDetailComponent_ng_container_38_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, OnboardingDetailComponent_ng_container_38_div_1_Template, 17, 7, "div", 32);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r5 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r5.detailView == null ? null : ctx_r5.detailView.tickets);
    }
}
function OnboardingDetailComponent_div_39_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 33)(1, "p", 41);
        i0.ɵɵtext(2, "\"Aucun tickets\"");
        i0.ɵɵelementEnd()();
    }
}
const _c0 = ".onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.onboarding-detail[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]{margin-bottom:33px;margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px}.onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:70%;border-radius:6px;margin-right:2%}@media (max-width: 1200px){.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:50%}}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{background:transparent;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;display:flex;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding-right:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p.contact[_ngcontent-%COMP%]{margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%]{line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background:#FFFFFF;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%]{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]{margin-top:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #E2E4E5}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:auto;height:36px;border-radius:4px;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{background:#6FE8D7}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{background:#F3A124}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .download-ticket[_ngcontent-%COMP%]{margin-top:20px;background-color:#fff;border:1px solid #171F26}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]::-webkit-scrollbar, .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.fields[_ngcontent-%COMP%]{height:84%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover, .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]{cursor:pointer;border-bottom:3px solid #3C4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:flex;align-items:center}.progress-status[_ngcontent-%COMP%]   .ongoing[_ngcontent-%COMP%]{color:#6fe8d7}.progress-status[_ngcontent-%COMP%]   .in-progress[_ngcontent-%COMP%]{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}  .progress-status{font-size:16px}  .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity .25s linear;width:100%}  .progress-status .mat-progress-bar-fill:after{background-color:#6fe8d7}  .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.d-flex-row[_ngcontent-%COMP%]{display:flex;align-items:center}.d-flex-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px}  mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#F4F7F9!important;display:flex!important;flex-direction:column;justify-content:center}  mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}  mat-bottom-sheet-container h3{font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}  mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171F26;box-shadow:0 0 #0003;border-radius:7px;color:#fff;margin:0 25px}  mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 #0003;border-radius:7px;color:#171f26;border:1px solid #171F26}.ul-list[_ngcontent-%COMP%]{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:\".\";font-size:40px}";
class OnboardingDetailComponent {
    constructor(router, service, _bottomSheet) {
        this.router = router;
        this.service = service;
        this._bottomSheet = _bottomSheet;
        this.onShowMode = new EventEmitter(true);
    }
    ngOnInit() {
    }
    openBottomSheet(Attachement) {
        this._bottomSheet.open(BottomSheet, {
            data: Attachement && Attachement.length > 1 ? Attachement.find((attach) => attach.Name.includes("Configuration")) : Attachement[0]
        });
    }
    onScroll(event) {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll(".fields ul li");
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (event.target.scrollTop > sectionTop - 300) {
                current = section.getAttribute("id");
            }
        });
        navLi.forEach((li) => {
            const id = li.getAttribute('id');
            if ((id === null || id === void 0 ? void 0 : id.substring(0, id.length - 1)) === current) {
                li.classList.add("active");
            }
            else {
                li.classList.remove('active');
            }
        });
    }
    catNameStart(str) {
        const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        return vowels.includes(str.substr(0, 1).toLocaleLowerCase());
    }
    onEdit() {
        this.onShowMode.emit(false);
    }
    progress(completed, length) {
        return 100 * completed / length;
    }
    onViewTicket(CaseNumber) {
        this.router.navigate([`ticket/${CaseNumber}`]);
    }
    onFormatDisplayValue(value) {
        if (Array.isArray(value)) {
            return {
                type: 'array',
                value
            };
        }
        return value === true ? { value: "Oui", type: 'string' } : value === false ? { value: "Non", type: 'string' } : { value, type: 'string' };
    }
}
OnboardingDetailComponent.ɵfac = function OnboardingDetailComponent_Factory(t) { return new (t || OnboardingDetailComponent)(i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(OnboardingService), i0.ɵɵdirectiveInject(i3.MatBottomSheet)); };
OnboardingDetailComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnboardingDetailComponent, selectors: [["lib-onboarding-detail"]], hostBindings: function OnboardingDetailComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵlistener("scroll", function OnboardingDetailComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
        }
    }, inputs: { detailView: "detailView" }, outputs: { onShowMode: "onShowMode" }, decls: 40, vars: 17, consts: [[1, "onboarding-detail"], [1, "title"], ["style", "margin-left: 20px; cursor: pointer;", 3, "click", 4, "ngIf"], [1, "view-content"], [1, "left-content"], [1, "user-info"], [1, "user-name"], [1, "contact"], ["fontSet", "material-icons-outlined"], [4, "ngIf"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "class", "id", 4, "ngFor", "ngForOf"], [1, "category-view-container", 3, "scroll"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [2, "background-color", "transparent"], [2, "height", "450px"], [1, "right-content"], [1, "subtitle"], ["class", "box-ticket-info", 4, "ngIf"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", 3, "id"], [1, "category-item-inner"], [1, "category-header"], [1, "title-content"], [1, "category-description"], [1, "progress-status"], ["class", "category-item-forms", 4, "ngFor", "ngForOf"], [1, "category-item-forms"], [1, "label"], [1, "ul-list"], [4, "ngFor", "ngForOf"], ["class", "box-ticket-info", 4, "ngFor", "ngForOf"], [1, "box-ticket-info"], [1, "d-flex-row", "box-header"], ["mat-button", "", 1, "d-flex-row", 2, "color", "#575F6E", "padding-left", "0", 3, "click"], [2, "font-weight", "400"], ["mat-button", "", 1, "progress"], [1, "date"], [1, "box-header"], ["mat-button", "", 1, "download-ticket", 3, "click"], [1, "description"]], template: function OnboardingDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1)(2, "p");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, OnboardingDetailComponent_mat_icon_4_Template, 2, 0, "mat-icon", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h2");
            i0.ɵɵtext(10);
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵtext(12, "arriv\u00E9 le ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p");
            i0.ɵɵtext(14);
            i0.ɵɵpipe(15, "date");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(16, "p", 7);
            i0.ɵɵtext(17);
            i0.ɵɵelement(18, "span");
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p", 7)(21, "mat-icon", 8);
            i0.ɵɵtext(22, "email");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(23);
            i0.ɵɵtemplate(24, OnboardingDetailComponent_ng_container_24_Template, 5, 1, "ng-container", 9);
            i0.ɵɵtemplate(25, OnboardingDetailComponent_ng_container_25_Template, 5, 1, "ng-container", 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "div", 10)(27, "ul");
            i0.ɵɵtemplate(28, OnboardingDetailComponent_li_28_Template, 3, 5, "li", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 12);
            i0.ɵɵlistener("scroll", function OnboardingDetailComponent_Template_div_scroll_29_listener($event) { return ctx.onScroll($event); });
            i0.ɵɵtemplate(30, OnboardingDetailComponent_section_30_Template, 10, 4, "section", 13);
            i0.ɵɵelementStart(31, "section", 14);
            i0.ɵɵelement(32, "div", 15);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(33, "div", 16)(34, "h2");
            i0.ɵɵtext(35, "Tickets li\u00E9s \u00E0 votre demande");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "p", 17);
            i0.ɵɵtext(37, "Vous retrouverez ici tous les tickets cr\u00E9\u00E9s lors de la cr\u00E9ation de votre fiche d\u2019int\u00E9gration.");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(38, OnboardingDetailComponent_ng_container_38_Template, 2, 1, "ng-container", 9);
            i0.ɵɵtemplate(39, OnboardingDetailComponent_div_39_Template, 3, 0, "div", 18);
            i0.ɵɵelementEnd()()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("Int\u00E9gration profil ", ctx.detailView == null ? null : ctx.detailView.Name, "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !(ctx.detailView == null ? null : ctx.detailView.Finished));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate2("", ctx.detailView == null ? null : ctx.detailView.user.FirstName, " ", ctx.detailView == null ? null : ctx.detailView.user.LastName, " ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(15, 14, ctx.detailView == null ? null : ctx.detailView.createdAt, "dd/MM/yy"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("", ctx.detailView == null ? null : ctx.detailView.user == null ? null : ctx.detailView.user.AccountName, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.detailView == null ? null : ctx.detailView.user == null ? null : ctx.detailView.user.Title, "");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("", ctx.detailView == null ? null : ctx.detailView.user == null ? null : ctx.detailView.user.Email, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.detailView == null ? null : ctx.detailView.user == null ? null : ctx.detailView.user.MobilePhone == null ? null : ctx.detailView.user.MobilePhone.internationalNumber);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.detailView == null ? null : ctx.detailView.user == null ? null : ctx.detailView.user.Phone == null ? null : ctx.detailView.user.Phone.internationalNumber);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.detailView == null ? null : ctx.detailView.categories);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.detailView == null ? null : ctx.detailView.categories);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", (ctx.detailView == null ? null : ctx.detailView.tickets) && (ctx.detailView == null ? null : ctx.detailView.tickets.length) > 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !(ctx.detailView == null ? null : ctx.detailView.tickets));
        }
    }, directives: [i1$3.NgIf, i6.MatIcon, i1$3.NgForOf, i5$2.ScrollToDirective, i7$1.MatButton], pipes: [i1$3.DatePipe], styles: [_c0] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingDetailComponent, [{
            type: Component,
            args: [{ selector: 'lib-onboarding-detail', template: "<div class=\"onboarding-detail\">\n    <h1 class=\"title\">\n        <p>Int\u00E9gration profil {{detailView?.Name}}</p>\n        <mat-icon *ngIf=\"!detailView?.Finished\" style=\"margin-left: 20px; cursor: pointer;\" (click)=\"onEdit()\">edit\n        </mat-icon>\n    </h1>\n    <div class=\"view-content\">\n        <div class=\"left-content\">\n            <div class=\"user-info\">\n                <div class=\"user-name\">\n                    <h2>{{detailView?.user.FirstName }} {{detailView?.user.LastName }} <span>arriv\u00E9 le\n                        </span>\n                        <p>{{detailView?.createdAt | date:'dd/MM/yy' }}</p>\n                    </h2>\n                </div>\n                <p class=\"contact\">{{detailView?.user?.AccountName }} <span></span> {{detailView?.user?.Title}}</p>\n                <p class=\"contact\">\n                    <mat-icon fontSet=\"material-icons-outlined\">email</mat-icon>{{detailView?.user?.Email }}\n                    <ng-container *ngIf=\"detailView?.user?.MobilePhone?.internationalNumber\">\n                        <span></span>\n                        <mat-icon fontSet=\"material-icons-outlined\">phone</mat-icon>\n                        {{detailView?.user?.MobilePhone?.internationalNumber}}\n                    </ng-container>\n\n                    <ng-container *ngIf=\"detailView?.user?.Phone?.internationalNumber\">\n                        <span></span>\n                        <mat-icon fontSet=\"material-icons-outlined\">smartphone</mat-icon>\n                        {{detailView?.user?.Phone?.internationalNumber}}\n                    </ng-container>\n\n                </p>\n\n            </div>\n\n            <div id=\"fields\" class=\"fields\">\n                <ul>\n                    <li [ngxScrollTo]=\"'#'+category.name\" class=\"menu-item\" [class]=\"i===0 ? 'active':''\"\n                        *ngFor=\"let category of detailView?.categories;  let i=index\" [id]=\"category.name+'x'\">\n                        <a>{{category.name}}</a>\n                    </li>\n                </ul>\n                <div class=\"category-view-container\" (scroll)=\"onScroll($event)\">\n                    <section class=\"category-item\" *ngFor=\"let category of detailView?.categories;  let i=index\"\n                        [id]=\"category.name\">\n                        <div class=\"category-item-inner\">\n                            <div class=\"category-header\">\n                                <div class=\"title-content\">\n                                    <h2>{{category.name}}</h2>\n                                    <p class=\"category-description\">\n                                        Listes des informations n\u00E9cessaires pour la cr\u00E9ation de {{\n                                        catNameStart(category.name) ? \"l'\" + category.name :\n                                        category.name }}\n                                    </p>\n                                </div>\n                                <div class=\"progress-status\">\n                                    <!-- {{category?.fieldCompleted}} / {{category?.fieldLength}} -->\n                                    <!-- <div *ngIf=\"category?.fieldCompleted===category?.fieldLength\"\n                                        class=\"status in-progress\">\n                                        <span>En cours de traitement</span>\n                                        <lib-loading></lib-loading>\n                                    </div> -->\n                                    <!-- <div *ngIf=\"category?.fieldCompleted ===category?.fieldLength\"\n                                        class=\"status ongoing\">\n                                        <span style=\"margin-right: 10px;\">En cours</span>\n                                        <mat-icon>check</mat-icon>\n                                    </div> -->\n                                    <!-- <div *ngIf=\"category?.fieldCompleted < category?.fieldLength\"\n                                        class=\"status progress-bar\">\n                                        <span style=\"width: 300px;\">{{progress(category?.fieldCompleted ,\n                                            category?.fieldLength)}}% Termin\u00E9</span>\n                                        <mat-progress-bar mode=\"determinate\"\n                                            [value]=\"progress(category?.fieldCompleted , category?.fieldLength)\">\n                                        </mat-progress-bar>\n                                    </div> -->\n                                </div>\n                            </div>\n                            <div class=\"category-item-forms\" *ngFor=\"let forms of category.forms\">\n                                <ng-container *ngIf=\"!forms.forms\">\n                                    <p class=\"label\">{{forms.label}}</p>\n                                    <ng-container *ngIf=\"onFormatDisplayValue(forms.value).type==='array'\">\n                                        <ul class=\"ul-list\">\n                                            <li *ngFor=\"let item of forms.value \">{{item}}</li>\n                                        </ul>\n                                    </ng-container>\n\n                                    <h4 *ngIf=\"onFormatDisplayValue(forms.value).type!=='array'\">\n                                        {{onFormatDisplayValue(forms.value).value}}\n                                    </h4>\n                                </ng-container>\n                                <ng-container *ngIf=\"forms.forms\">\n                                    <h3>{{forms.label}}</h3>\n                                    <div class=\"category-item-forms\" *ngFor=\"let sub of forms.forms\">\n                                        <ng-container *ngIf=\"!sub.forms\">\n                                            <p class=\"label\">{{sub.label}}</p>\n                                            <ng-container *ngIf=\"onFormatDisplayValue(sub.value).type==='array'\">\n                                                <ul class=\"ul-list\">\n                                                    <li *ngFor=\"let item of sub.value \">{{item}}</li>\n                                                </ul>\n                                            </ng-container>\n                                            <h4 *ngIf=\"onFormatDisplayValue(sub.value).type!=='array'\">\n                                                {{onFormatDisplayValue(sub.value).value}}</h4>\n                                        </ng-container>\n                                        <ng-container *ngIf=\"sub.forms\">\n                                            <h3>{{sub.label}}</h3>\n                                            <div class=\"category-item-forms\" *ngFor=\"let child of sub.forms\">\n                                                <ng-container *ngIf=\"!child.forms\">\n                                                    <p class=\"label\">{{child.label}}</p>\n                                                    <ng-container\n                                                        *ngIf=\"onFormatDisplayValue(child.value).type==='array'\">\n                                                        <ul class=\"ul-list\">\n                                                            <li *ngFor=\"let item of child.value\">{{item}}</li>\n                                                        </ul>\n                                                    </ng-container>\n                                                    <h4 *ngIf=\"onFormatDisplayValue(child.value).type!=='array'\">\n                                                        {{onFormatDisplayValue(child.value).value}}</h4>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"child.forms\">\n                                                    <h3>{{child.label}}</h3>\n                                                    <div class=\"category-item-forms\" *ngFor=\"let c2 of child.forms\">\n                                                        <p class=\"label\">{{c2.label}}</p>\n                                                        <ng-container\n                                                            *ngIf=\"onFormatDisplayValue(c2.value).type==='array'\">\n                                                            <ul class=\"ul-list\">\n                                                                <li *ngFor=\"let item of c2.value \">{{item}}</li>\n                                                            </ul>\n                                                        </ng-container>\n                                                        <h4 *ngIf=\"onFormatDisplayValue(c2.value).type!=='array'\">\n                                                            {{onFormatDisplayValue(c2.value).value}}</h4>\n                                                    </div>\n                                                </ng-container>\n                                            </div>\n                                        </ng-container>\n                                    </div>\n                                </ng-container>\n                            </div>\n                        </div>\n                    </section>\n                    <section style=\"background-color: transparent\">\n                        <div style=\"height: 450px;\"></div>\n                    </section>\n                </div>\n            </div>\n        </div>\n        <div class=\"right-content\">\n            <h2>Tickets li\u00E9s \u00E0 votre demande</h2>\n            <p class=\"subtitle\">Vous retrouverez ici tous les tickets cr\u00E9\u00E9s lors de la cr\u00E9ation de votre fiche\n                d\u2019int\u00E9gration.</p>\n            <ng-container *ngIf=\"detailView?.tickets && detailView?.tickets.length>0\">\n                <div class=\"box-ticket-info\" *ngFor=\"let ticket of detailView?.tickets\">\n                    <div class=\"d-flex-row box-header\">\n                        <button mat-button class=\"d-flex-row\" style=\"color: #575F6E;padding-left: 0;\"\n                            (click)=\"onViewTicket(ticket.CaseNumber)\">\n                            <mat-icon fontSet=\"material-icons-outlined\">list_alt</mat-icon><span\n                                style=\"font-weight: 400;\">Ticket\n                                {{ticket.CaseNumber}}</span>\n                        </button>\n                        <button mat-button class=\"progress\">{{ticket.Status}}</button>\n                    </div>\n                    <p class=\"date\">{{ticket.CreatedDate | date :'dd/MM/yy'}}</p>\n                    <div class=\"box-header\">\n                        <h3>{{ticket.Subject}}</h3>\n                    </div>\n                    <!-- <button *ngIf=\"ticket.Attachments && ticket.Attachments.length>0\" mat-button class=\"download-ticket\" -->\n                    <button mat-button class=\"download-ticket\"\n                        (click)=\"openBottomSheet(ticket?.vattachment)\">T\u00E9l\u00E9charger\n                        le\n                        PDF\n                        r\u00E9capitulatif</button>\n                </div>\n            </ng-container>\n            <div class=\"box-ticket-info\" *ngIf=\"!detailView?.tickets\">\n                <p class=\"description\">\"Aucun tickets\"</p>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".onboarding-detail h1,.onboarding-detail h2,.onboarding-detail h3,.onboarding-detail h4,.onboarding-detail h5,.onboarding-detail h6{margin:0;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail p{margin:0}.onboarding-detail h1{font-size:24px}.onboarding-detail h1.title{margin-bottom:33px;margin-top:10px}.onboarding-detail h2{font-size:20px}.onboarding-detail h3{font-size:18px}.onboarding-detail h4{font-size:16px}.onboarding-detail h5{font-size:14px}.onboarding-detail h6{font-size:12px}.onboarding-detail .view-content{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail .view-content .left-content{width:70%;border-radius:6px;margin-right:2%}@media (max-width: 1200px){.onboarding-detail .view-content .left-content{width:50%}}.onboarding-detail .view-content .left-content .user-info{background:transparent;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail .view-content .left-content .user-info span:before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail .view-content .left-content .user-info p{font-weight:400;display:flex;align-items:center}.onboarding-detail .view-content .left-content .user-info p mat-icon{padding-right:5px}.onboarding-detail .view-content .left-content .user-info p.contact{margin-top:10px}.onboarding-detail .view-content .left-content .user-info .user-name{line-height:30px}.onboarding-detail .view-content .left-content .user-info .user-name span{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail .view-content .left-content .user-info .user-contact{line-height:30px}.onboarding-detail .view-content .left-content section{background:#FFFFFF;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail .view-content .left-content section .category-item-inner .category-description{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms{margin-top:20px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms .label{font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail .view-content .right-content{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail .view-content .right-content p{color:#575f6e}.onboarding-detail .view-content .right-content .box-ticket-info{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #E2E4E5}.onboarding-detail .view-content .right-content .box-ticket-info .box-header{display:flex;justify-content:space-between;align-items:center}.onboarding-detail .view-content .right-content .box-ticket-info .box-header button{min-width:auto;height:36px;border-radius:4px;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .finished{background:#6FE8D7}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .progress{background:#F3A124}.onboarding-detail .view-content .right-content .box-ticket-info .download-ticket{margin-top:20px;background-color:#fff;border:1px solid #171F26}.onboarding-detail .view-content .category-view-container{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail .view-content .right-content::-webkit-scrollbar,.onboarding-detail .view-content .category-view-container::-webkit-scrollbar{display:none}.onboarding-detail .view-content .right-content,.onboarding-detail .view-content .category-view-container{-ms-overflow-style:none;scrollbar-width:none}.fields{height:84%}.fields ul{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields ul li{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields ul li a{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields ul li.menu-item:hover,.fields ul li.menu-item.active{cursor:pointer;border-bottom:3px solid #3C4252}.fields ul li.menu-item:hover a,.fields ul li.menu-item.active a{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status .status{display:flex;align-items:center}.progress-status .ongoing{color:#6fe8d7}.progress-status .in-progress{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}::ng-deep .progress-status{font-size:16px}::ng-deep .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity .25s linear;width:100%}::ng-deep .progress-status .mat-progress-bar-fill:after{background-color:#6fe8d7}::ng-deep .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header{display:flex;align-items:center;justify-content:space-between}.d-flex-row{display:flex;align-items:center}.d-flex-row mat-icon{margin-right:5px}::ng-deep mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#F4F7F9!important;display:flex!important;flex-direction:column;justify-content:center}::ng-deep mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}::ng-deep mat-bottom-sheet-container h3{font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}::ng-deep mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171F26;box-shadow:0 0 #0003;border-radius:7px;color:#fff;margin:0 25px}::ng-deep mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 #0003;border-radius:7px;color:#171f26;border:1px solid #171F26}.ul-list{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list li:before{content:\".\";font-size:40px}\n"] }]
        }], function () { return [{ type: i2.Router }, { type: OnboardingService }, { type: i3.MatBottomSheet }]; }, { detailView: [{
                type: Input
            }], onShowMode: [{
                type: Output
            }], onScroll: [{
                type: HostListener,
                args: ['scroll', ['$event']]
            }] });
})();
class BottomSheet {
    constructor(_bottomSheetRef, service) {
        this._bottomSheetRef = _bottomSheetRef;
        this.service = service;
        this.attach = null;
        this.filename = "";
    }
    ngOnInit() {
        this.attach = this._bottomSheetRef.containerInstance.bottomSheetConfig.data;
        const urls = this.attach ? this.attach.Url.split("/") : [];
        this.filename = urls[urls.length - 1];
    }
    close() {
        this._bottomSheetRef.dismiss();
    }
    onDownloadFile() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.attach) {
                yield this.service.downloadAttachment(this.attach.Url, this.attach.ContentType, this.filename);
                this._bottomSheetRef.dismiss();
            }
        });
    }
}
BottomSheet.ɵfac = function BottomSheet_Factory(t) { return new (t || BottomSheet)(i0.ɵɵdirectiveInject(i3.MatBottomSheetRef), i0.ɵɵdirectiveInject(OnboardingService)); };
BottomSheet.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BottomSheet, selectors: [["bottom-sheet"]], decls: 7, vars: 1, consts: [[1, "sheet-content"], ["mat-button", "", 1, "download-button", 3, "click"], ["mat-button", "", 1, "close-button", 3, "click"]], template: function BottomSheet_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h3");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 1);
            i0.ɵɵlistener("click", function BottomSheet_Template_button_click_3_listener() { return ctx.onDownloadFile(); });
            i0.ɵɵtext(4, "T\u00E9l\u00E9charger le PDF r\u00E9capitulatif");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 2);
            i0.ɵɵlistener("click", function BottomSheet_Template_button_click_5_listener() { return ctx.close(); });
            i0.ɵɵtext(6, "Fermer");
            i0.ɵɵelementEnd()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.filename);
        }
    }, directives: [i7$1.MatButton], styles: [_c0] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomSheet, [{
            type: Component,
            args: [{ selector: 'bottom-sheet', template: "<div class=\"sheet-content\">\r\n  <h3>{{filename}}</h3>\r\n  <button class=\"download-button\" mat-button (click)=\"onDownloadFile()\">T\u00E9l\u00E9charger le PDF r\u00E9capitulatif</button>\r\n  <button class=\"close-button\" mat-button (click)=\"close()\">Fermer</button>\r\n</div>", styles: [".onboarding-detail h1,.onboarding-detail h2,.onboarding-detail h3,.onboarding-detail h4,.onboarding-detail h5,.onboarding-detail h6{margin:0;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail p{margin:0}.onboarding-detail h1{font-size:24px}.onboarding-detail h1.title{margin-bottom:33px;margin-top:10px}.onboarding-detail h2{font-size:20px}.onboarding-detail h3{font-size:18px}.onboarding-detail h4{font-size:16px}.onboarding-detail h5{font-size:14px}.onboarding-detail h6{font-size:12px}.onboarding-detail .view-content{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail .view-content .left-content{width:70%;border-radius:6px;margin-right:2%}@media (max-width: 1200px){.onboarding-detail .view-content .left-content{width:50%}}.onboarding-detail .view-content .left-content .user-info{background:transparent;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail .view-content .left-content .user-info span:before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail .view-content .left-content .user-info p{font-weight:400;display:flex;align-items:center}.onboarding-detail .view-content .left-content .user-info p mat-icon{padding-right:5px}.onboarding-detail .view-content .left-content .user-info p.contact{margin-top:10px}.onboarding-detail .view-content .left-content .user-info .user-name{line-height:30px}.onboarding-detail .view-content .left-content .user-info .user-name span{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail .view-content .left-content .user-info .user-contact{line-height:30px}.onboarding-detail .view-content .left-content section{background:#FFFFFF;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail .view-content .left-content section .category-item-inner .category-description{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms{margin-top:20px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms .label{font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail .view-content .right-content{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail .view-content .right-content p{color:#575f6e}.onboarding-detail .view-content .right-content .box-ticket-info{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #E2E4E5}.onboarding-detail .view-content .right-content .box-ticket-info .box-header{display:flex;justify-content:space-between;align-items:center}.onboarding-detail .view-content .right-content .box-ticket-info .box-header button{min-width:auto;height:36px;border-radius:4px;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .finished{background:#6FE8D7}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .progress{background:#F3A124}.onboarding-detail .view-content .right-content .box-ticket-info .download-ticket{margin-top:20px;background-color:#fff;border:1px solid #171F26}.onboarding-detail .view-content .category-view-container{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail .view-content .right-content::-webkit-scrollbar,.onboarding-detail .view-content .category-view-container::-webkit-scrollbar{display:none}.onboarding-detail .view-content .right-content,.onboarding-detail .view-content .category-view-container{-ms-overflow-style:none;scrollbar-width:none}.fields{height:84%}.fields ul{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields ul li{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields ul li a{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields ul li.menu-item:hover,.fields ul li.menu-item.active{cursor:pointer;border-bottom:3px solid #3C4252}.fields ul li.menu-item:hover a,.fields ul li.menu-item.active a{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status .status{display:flex;align-items:center}.progress-status .ongoing{color:#6fe8d7}.progress-status .in-progress{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}::ng-deep .progress-status{font-size:16px}::ng-deep .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity .25s linear;width:100%}::ng-deep .progress-status .mat-progress-bar-fill:after{background-color:#6fe8d7}::ng-deep .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header{display:flex;align-items:center;justify-content:space-between}.d-flex-row{display:flex;align-items:center}.d-flex-row mat-icon{margin-right:5px}::ng-deep mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#F4F7F9!important;display:flex!important;flex-direction:column;justify-content:center}::ng-deep mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}::ng-deep mat-bottom-sheet-container h3{font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}::ng-deep mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171F26;box-shadow:0 0 #0003;border-radius:7px;color:#fff;margin:0 25px}::ng-deep mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 #0003;border-radius:7px;color:#171f26;border:1px solid #171F26}.ul-list{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list li:before{content:\".\";font-size:40px}\n"] }]
        }], function () { return [{ type: i3.MatBottomSheetRef }, { type: OnboardingService }]; }, null);
})();

function OnboardingCreateComponent_form_2_lib_loading_page_8_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "lib-loading-page");
    }
}
function OnboardingCreateComponent_form_2_li_12_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "li", 19)(1, "a");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const category_r7 = ctx.$implicit;
        i0.ɵɵproperty("ngxScrollTo", "#" + category_r7.name)("id", category_r7.name + "x");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(category_r7.name);
    }
}
function OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r26 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "lib-sub-create-onboarding", 38);
        i0.ɵɵlistener("onCheckValue", function OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onCheckValue_3_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(10); return ctx_r25.onCheckValue($event); });
        i0.ɵɵelement(4, "div", 33);
        i0.ɵɵelementEnd()()()();
    }
    if (rf & 2) {
        const ctx_r27 = i0.ɵɵnextContext();
        const c2_r22 = ctx_r27.$implicit;
        const l_r23 = ctx_r27.index;
        const ctx_r28 = i0.ɵɵnextContext(3);
        const child_r17 = ctx_r28.$implicit;
        const k_r18 = ctx_r28.index;
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("field", c2_r22)("length", child_r17 == null ? null : child_r17.forms == null ? null : child_r17.forms.length)("i", k_r18)("j", l_r23);
    }
}
function OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_div_5_div_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 37);
        i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template, 5, 4, "div", 28);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const c2_r22 = ctx.$implicit;
        const l_r23 = ctx.index;
        const child_r17 = i0.ɵɵnextContext(3).$implicit;
        const ctx_r21 = i0.ɵɵnextContext(6);
        i0.ɵɵstyleProp("width", c2_r22.forms ? "100%" : ctx_r21.fieldWidth(c2_r22.type, child_r17.forms.length, l_r23));
        i0.ɵɵproperty("id", c2_r22.key);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", c2_r22.expandOnboarding && ctx_r21.onCheckConditionLocationValue(c2_r22.isConditional, c2_r22 == null ? null : c2_r22.condition));
    }
}
function OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_div_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 35);
        i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_div_5_div_1_Template, 2, 4, "div", 36);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const child_r17 = i0.ɵɵnextContext(2).$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", child_r17.forms);
    }
}
function OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r32 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "lib-sub-create-onboarding", 38);
        i0.ɵɵlistener("onCheckValue", function OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onCheckValue_3_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(7); return ctx_r31.onCheckValue($event); });
        i0.ɵɵelementStart(4, "div", 33);
        i0.ɵɵtemplate(5, OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_div_5_Template, 2, 1, "div", 34);
        i0.ɵɵelementEnd()()()()();
    }
    if (rf & 2) {
        const ctx_r33 = i0.ɵɵnextContext();
        const child_r17 = ctx_r33.$implicit;
        const k_r18 = ctx_r33.index;
        const ctx_r34 = i0.ɵɵnextContext(3);
        const field_r12 = ctx_r34.$implicit;
        const j_r13 = ctx_r34.index;
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("field", child_r17)("length", field_r12 == null ? null : field_r12.forms == null ? null : field_r12.forms.length)("i", j_r13)("j", k_r18);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", child_r17.forms && child_r17.value);
    }
}
function OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 37);
        i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_Template, 6, 5, "div", 28);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const child_r17 = ctx.$implicit;
        const k_r18 = ctx.index;
        const field_r12 = i0.ɵɵnextContext(3).$implicit;
        const ctx_r16 = i0.ɵɵnextContext(3);
        i0.ɵɵstyleProp("width", child_r17.forms ? "100%" : ctx_r16.fieldWidth(child_r17.type, field_r12.forms.length, k_r18));
        i0.ɵɵproperty("id", child_r17.key);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", child_r17.expandOnboarding && ctx_r16.onCheckConditionLocationValue(child_r17.isConditional, child_r17 == null ? null : child_r17.condition));
    }
}
function OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 35);
        i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_Template, 2, 4, "div", 36);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const field_r12 = i0.ɵɵnextContext(2).$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", field_r12.forms);
    }
}
function OnboardingCreateComponent_form_2_section_14_div_9_div_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "lib-sub-create-onboarding", 32)(4, "div", 33);
        i0.ɵɵtemplate(5, OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_Template, 2, 1, "div", 34);
        i0.ɵɵelementEnd()()()()();
    }
    if (rf & 2) {
        const ctx_r37 = i0.ɵɵnextContext();
        const field_r12 = ctx_r37.$implicit;
        const j_r13 = ctx_r37.index;
        const ctx_r38 = i0.ɵɵnextContext();
        const category_r9 = ctx_r38.$implicit;
        const i_r10 = ctx_r38.index;
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("field", field_r12)("length", category_r9 == null ? null : category_r9.forms == null ? null : category_r9.forms.length)("i", i_r10)("j", j_r13);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", field_r12.forms && field_r12.value);
    }
}
function OnboardingCreateComponent_form_2_section_14_div_9_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 27);
        i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_14_div_9_div_1_Template, 6, 5, "div", 28);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const field_r12 = ctx.$implicit;
        const j_r13 = ctx.index;
        const category_r9 = i0.ɵɵnextContext().$implicit;
        const ctx_r11 = i0.ɵɵnextContext(2);
        i0.ɵɵstyleProp("width", field_r12.forms ? "100%" : ctx_r11.fieldWidth(field_r12.type, category_r9.forms.length, j_r13));
        i0.ɵɵproperty("id", field_r12.key);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", field_r12.expandOnboarding && ctx_r11.onCheckConditionLocationValue(field_r12.isConditional, field_r12 == null ? null : field_r12.condition));
    }
}
function OnboardingCreateComponent_form_2_section_14_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 20)(1, "div", 21)(2, "div", 22)(3, "div", 23)(4, "h4", 24);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(8, "div", 25);
        i0.ɵɵtemplate(9, OnboardingCreateComponent_form_2_section_14_div_9_Template, 2, 4, "div", 26);
        i0.ɵɵelementEnd()()();
    }
    if (rf & 2) {
        const category_r9 = ctx.$implicit;
        const ctx_r4 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("id", category_r9.name);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(category_r9.name);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r4.catNameStart(category_r9.name) ? "l'" + category_r9.name : category_r9.name, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", category_r9.forms);
    }
}
function OnboardingCreateComponent_form_2_lib_loading_page_18_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "lib-loading-page");
    }
}
function OnboardingCreateComponent_form_2_lib_loading_page_21_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "lib-loading-page");
    }
}
function OnboardingCreateComponent_form_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r41 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "form", 3);
        i0.ɵɵlistener("submit", function OnboardingCreateComponent_form_2_Template_form_submit_0_listener() { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.onSubmit(true); });
        i0.ɵɵelementStart(1, "div", 4)(2, "div", 5)(3, "h2");
        i0.ɵɵtext(4);
        i0.ɵɵelementStart(5, "mat-icon", 6);
        i0.ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_mat_icon_click_5_listener() { i0.ɵɵrestoreView(_r41); const ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.onShowMode(); });
        i0.ɵɵtext(6, "visibility");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "button", 7);
        i0.ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r41); const ctx_r43 = i0.ɵɵnextContext(); return ctx_r43.onSubmit(false); });
        i0.ɵɵtemplate(8, OnboardingCreateComponent_form_2_lib_loading_page_8_Template, 1, 0, "lib-loading-page", 8);
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(10, "div", 9)(11, "ul");
        i0.ɵɵtemplate(12, OnboardingCreateComponent_form_2_li_12_Template, 3, 3, "li", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 11);
        i0.ɵɵlistener("scroll", function OnboardingCreateComponent_form_2_Template_div_scroll_13_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r44 = i0.ɵɵnextContext(); return ctx_r44.onScroll($event); });
        i0.ɵɵtemplate(14, OnboardingCreateComponent_form_2_section_14_Template, 10, 4, "section", 12);
        i0.ɵɵelementStart(15, "div", 13)(16, "div", 14)(17, "button", 15);
        i0.ɵɵtemplate(18, OnboardingCreateComponent_form_2_lib_loading_page_18_Template, 1, 0, "lib-loading-page", 8);
        i0.ɵɵtext(19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "button", 16);
        i0.ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r41); const ctx_r45 = i0.ɵɵnextContext(); return ctx_r45.onSubmit(false); });
        i0.ɵɵtemplate(21, OnboardingCreateComponent_form_2_lib_loading_page_21_Template, 1, 0, "lib-loading-page", 8);
        i0.ɵɵtext(22);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(23, "section", 17);
        i0.ɵɵelement(24, "div", 18);
        i0.ɵɵelementEnd()()()()()();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("formGroup", ctx_r0.form);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("Int\u00E9gration profil ", ctx_r0.currentTemplate == null ? null : ctx_r0.currentTemplate.Name, " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", ctx_r0.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r0.loading && !ctx_r0.isSubmitted);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("", ctx_r0.resumeLabel, " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx_r0.categories);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx_r0.categories);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", ctx_r0.loading || !ctx_r0.form.valid);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r0.loading && ctx_r0.isSubmitted);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("", ctx_r0.submitLabel, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx_r0.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r0.loading && !ctx_r0.isSubmitted);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("", ctx_r0.resumeLabel, " ");
    }
}
function OnboardingCreateComponent_lib_onboarding_detail_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r47 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "lib-onboarding-detail", 39);
        i0.ɵɵlistener("onShowMode", function OnboardingCreateComponent_lib_onboarding_detail_3_Template_lib_onboarding_detail_onShowMode_0_listener() { i0.ɵɵrestoreView(_r47); const ctx_r46 = i0.ɵɵnextContext(); return ctx_r46.onShowMode(); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("detailView", ctx_r1.detailView);
    }
}
class OnboardingCreateComponent {
    constructor(fb, service, route, router, dialog) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.currentProfil = {};
        this.canExit = true;
        this.tags = [];
        this.onboardingId = "0";
        this.templateId = "0";
        this.parent = [];
        this.selectedMenu = 0;
        this.showMode = false;
        this.selectedCategoryIndex = null;
        this.loading = false;
        this.fieldWidth = fieldWidth;
        this.submitLabel = 'Envoyer ma fiche';
        this.resumeLabel = 'Reprendre plus tard';
        this.service._currentOnboarding.subscribe((onboarding) => __awaiter(this, void 0, void 0, function* () {
            this.onCreateDynamicForm();
            this.isSelected = true;
            if (onboarding) {
                this.form.patchValue({
                    TemplateId: onboarding.TemplateId
                });
                yield this.onSelect(onboarding.TemplateId, onboarding);
            }
            else {
                this.templateId = this.route.snapshot.paramMap.get("templateId");
                this.form.patchValue({
                    TemplateId: this.templateId
                });
                yield this.onSelect(this.templateId, null);
            }
        }));
    }
    isObject(obj) {
        return obj !== undefined && obj !== null && obj.constructor == Object;
    }
    canDeactivate() {
        if (!this.canExit) {
            this.dialog.open(ExitConfirmComponent, {
                data: ''
            });
            return this.service.canExit$;
        }
        return true;
    }
    onScroll(event) {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll(".fields ul li");
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (event.target.scrollTop > sectionTop - 200) {
                current = section.getAttribute("id");
            }
        });
        navLi.forEach((li) => {
            const id = li.getAttribute('id');
            if ((id === null || id === void 0 ? void 0 : id.substring(0, id.length - 1)) === current) {
                li.classList.add("active");
            }
            else {
                li.classList.remove('active');
            }
        });
    }
    ngOnInit() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            this.templateId = this.route.snapshot.paramMap.get("templateId");
            this.onboardingId = this.onboardingId !== "0" ? this.onboardingId : this.route.snapshot.paramMap.get("onboardingId");
            if (this.onboardingId && this.onboardingId !== "0") {
                this.showMode = true;
                this.currentOnboarding = yield this.service.getOnboarding(this.onboardingId);
                this.form.patchValue(this.currentOnboarding);
                this.categories = this.currentOnboarding.categories;
                this.onLoadViewDetail(this.categories);
                this.currentTemplate = (_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.vtemplates[0];
                if (this.currentOnboarding.TemplateId) {
                    this.isSelected = true;
                }
            }
        });
    }
    onLoadViewDetail(categories) {
        var _a, _b, _c, _d, _e, _f;
        const user = {};
        const displayUser = ["Salutation", "Type_de_profil_Nowboard__c", "Acc_s_au_portail_client_NowBoard__c", "Langue_maternelle__c"];
        const categoriesView = categories.map((category) => {
            const { name, expandOnboarding } = category;
            let categoryForm = [];
            let fieldCompleted = 0;
            let fieldLength = 0;
            if (category.forms) {
                categoryForm = category.forms.map((form) => {
                    var _a;
                    if (form.isMandatory) {
                        fieldLength += 1;
                    }
                    if (form.isMandatory && !!form.value) {
                        fieldCompleted += 1;
                    }
                    const newsubforms = {
                        label: form.label,
                        value: form.type === "checkbox_multiple" ? form.defaultValue.filter((v) => v.checked).map((m) => m.value) : form.type !== "tel" ? form.value : (_a = form === null || form === void 0 ? void 0 : form.value) === null || _a === void 0 ? void 0 : _a.internationalNumber,
                        key: form.key
                    };
                    if (category.name === "Utilisateur") {
                        user[form.key] = form.value;
                    }
                    let subForm = [];
                    if (form.forms) {
                        subForm = form.forms.map((subForm) => {
                            var _a;
                            if (subForm.isMandatory) {
                                fieldLength += 1;
                            }
                            if (subForm.isMandatory && !!subForm.value) {
                                fieldCompleted += 1;
                            }
                            const childforms = {
                                label: subForm.label,
                                value: form.type === "checkbox_multiple" ? form.defaultValue.filter((v) => v.checked).map((m) => m.value) : subForm.type !== "tel" ? subForm.value : ((_a = subForm === null || subForm === void 0 ? void 0 : subForm.value) === null || _a === void 0 ? void 0 : _a.internationalNumber) || '',
                                key: subForm.key
                            };
                            let child2 = [];
                            if (subForm.forms) {
                                child2 = subForm.forms.map((c2) => {
                                    var _a;
                                    if (c2.isMandatory) {
                                        fieldLength += 1;
                                    }
                                    if (c2.isMandatory && !!c2.value) {
                                        fieldCompleted += 1;
                                    }
                                    return {
                                        label: c2.label,
                                        value: form.type === "checkbox_multiple" ? form.defaultValue.filter((v) => v.checked).map((m) => m.value) : c2.type !== "tel" ? c2.value : ((_a = c2 === null || c2 === void 0 ? void 0 : c2.value) === null || _a === void 0 ? void 0 : _a.internationalNumber) || '',
                                        key: c2.key
                                    };
                                });
                                return Object.assign(Object.assign({}, childforms), { expandOnboarding: subForm.expandOnboarding, forms: child2, key: form.key });
                            }
                            else {
                                return childforms;
                            }
                        });
                        return Object.assign(Object.assign({}, newsubforms), { expandOnboarding: form.expandOnboarding, forms: subForm, key: form.key });
                    }
                    else {
                        return newsubforms;
                    }
                });
            }
            return {
                name, expandOnboarding,
                forms: categoryForm,
                key: category.key,
                fieldCompleted,
                fieldLength
            };
        });
        const index = categoriesView.findIndex((cat) => cat.name === "Utilisateur");
        if (index !== -1) {
            categoriesView[index].forms = categoriesView[index].forms.filter((form) => displayUser.includes(form.key));
        }
        this.detailView = {
            Finished: (_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.Finished,
            categories: categoriesView,
            // view: this.currentOnboarding.view,
            tickets: (_b = this.currentOnboarding) === null || _b === void 0 ? void 0 : _b.vtickets,
            createdAt: ((_c = this.currentOnboarding) === null || _c === void 0 ? void 0 : _c.createdAt) || new Date().toISOString(),
            user: user,
            Name: ((_e = (_d = this.currentOnboarding) === null || _d === void 0 ? void 0 : _d.vtemplates[0]) === null || _e === void 0 ? void 0 : _e.Name) || ((_f = this.currentTemplate) === null || _f === void 0 ? void 0 : _f.Name)
        };
        console.log('detailView--------', this.detailView);
    }
    onCreateDynamicForm() {
        this.form = this.fb.group({
            TemplateId: [0, Validators.required]
        });
    }
    catNameStart(str) {
        const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        return vowels.includes(str.substr(0, 1).toLocaleLowerCase());
    }
    onSelect(id, onboarding) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                this.currentTemplate = yield this.service.getProfil(id);
                this.categories = onboarding ? onboarding.categories : this.currentTemplate.categories
                    .filter((cat) => cat.expandOnboarding)
                    .map((cat) => {
                    if (cat.forms) {
                        const f = cat.forms
                            .filter((form) => form.expandOnboarding)
                            .map((sub) => {
                            if (sub.forms) {
                                const s = sub.forms.filter((child) => {
                                    if (child.forms) {
                                        const c = child.forms.filter((ch) => ch.expandOnboarding);
                                        return Object.assign(Object.assign({}, child), { forms: c });
                                    }
                                    return child;
                                });
                                return Object.assign(Object.assign({}, sub), { forms: s });
                            }
                            return sub;
                        });
                        return Object.assign(Object.assign({}, cat), { forms: f });
                    }
                    return cat;
                });
            }
        });
    }
    existSubForm(forms) {
        let exist = false;
        if (forms) {
            for (const sub of forms) {
                if (sub.forms) {
                    exist = true;
                }
            }
        }
        return exist;
    }
    scrollToFirstInvalidControl() {
        let form = document.getElementById('form');
        let firstInvalidControl = form.getElementsByClassName('ng-invalid')[0];
        firstInvalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalidControl.focus();
    }
    onChangeCategory() {
        const checkMandatory = (field) => !!field.value && field.isMandatory && (field.type !== "checkbox_multiple" || field.type !== 'checkbox') || !field.isMandatory || field.type === "checkbox_multiple" || field.type === 'checkbox' || field.type === 'toggle';
        return this.categories.every((cat) => cat.forms.every((field) => {
            if (field.forms) {
                if (field.value) {
                    return field.forms.every((form) => {
                        if (form.forms) {
                            return form.forms.every((child) => {
                                return checkMandatory(child);
                            });
                        }
                        return checkMandatory(form);
                    });
                }
                return true;
            }
            return checkMandatory(field);
        }));
    }
    onSubmit(submit = false) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.form.valid && this.onChangeCategory() && submit || !submit) {
                this.isSubmitted = submit;
                const user = this.categories.find((cat) => cat.name === "Utilisateur");
                const userData = {};
                (_a = user === null || user === void 0 ? void 0 : user.forms) === null || _a === void 0 ? void 0 : _a.map((form) => {
                    userData[form.key] = form.value;
                });
                this.loading = true;
                this.submitLabel = "Chargement...";
                const result = this.onboardingId && this.onboardingId !== "0"
                    ? yield this.service.updateOnboarding(Object.assign(Object.assign({}, this.form.value), { user: userData, categories: this.categories, Finished: submit, _id: this.onboardingId, tickets: (_c = (_b = this.currentOnboarding) === null || _b === void 0 ? void 0 : _b.vtickets) === null || _c === void 0 ? void 0 : _c.map((ticket) => ticket.Id) }))
                    : yield this.service.createOnboarding(Object.assign(Object.assign({}, this.form.value), { user: userData, categories: this.categories, Finished: submit }));
                if (result) {
                    if (this.onboardingId && this.onboardingId !== "0") {
                        this.categories = result.categories;
                        this.currentOnboarding = result;
                    }
                    yield this.service.getAllProfil();
                    this.onboardingId = result._id;
                    this.loading = false;
                    this.submitLabel = "Envoyer ma fiche";
                    this.canExit = true;
                    this.showMode = true;
                    if (submit) {
                        const resultContact = yield this.service.createContact(Object.assign(Object.assign({}, userData), { A_quitt_la_soci_t__c: "false", Phone: (_d = userData === null || userData === void 0 ? void 0 : userData.Phone) === null || _d === void 0 ? void 0 : _d.e164Number, MobilePhone: (_e = userData === null || userData === void 0 ? void 0 : userData.MobilePhone) === null || _e === void 0 ? void 0 : _e.e164Number }));
                        console.log("---------------resultContact--------------", resultContact);
                        this.router.navigate([`${this.checkOnboardingPath()}`, result.TemplateId, result._id]);
                        this.ngOnInit();
                        this.onCreateConfirm();
                    }
                    else {
                        this.router.navigate([`${this.checkOnboardingPath()}`, result.TemplateId, result._id]);
                    }
                }
                else {
                    console.log("errror......");
                    this.loading = false;
                    this.submitLabel = "Envoyer ma fiche";
                }
            }
            else {
                this.scrollToFirstInvalidControl();
            }
        });
    }
    checkOnboardingPath() {
        return this.service.mainPath.includes('onboarding') ? `${this.service.mainPath}/requests/` : `/onboarding/requests/`;
    }
    // async onResumeLater() {
    //   this.loading = true;
    //   this.resumeLabel = "Chargement..."
    //   const result =
    //     this.onboardingId && this.onboardingId !== "0"
    //       ? await this.service.updateOnboarding({
    //         ...this.form.value,
    //         categories: this.categories,
    //         Finished: true,
    //         _id: this.onboardingId,
    //         tickets: this.currentOnboarding?.vtickets?.map((ticket) => ticket.Id)
    //       })
    //       : await this.service.createOnboarding({
    //         ...this.form.value,
    //         categories: this.categories,
    //         Finished: false,
    //       });
    //   if (result) {
    //     if (this.onboardingId && this.onboardingId !== "0") {
    //       this.categories = result.categories;
    //       this.currentOnboarding = result;
    //     }
    //     await this.service.getAllProfil();
    //     this.loading = false;
    //     this.canExit = true;
    //     this.showMode = true;
    //     this.resumeLabel = "Reprendre plus tard"
    //     this.router.navigate([this.service.mainPath + '/requests']);
    //   } else {
    //     console.log("errror......");
    //     this.loading = false;
    //     this.resumeLabel = "Reprendre plus tard"
    //   }
    // }
    ingoreDefaultAction(e) {
        e.preventDefault();
    }
    onCheckConditionLocationValue(iscondition, condition) {
        if (!iscondition || !(condition === null || condition === void 0 ? void 0 : condition.location)) {
            return true;
        }
        const _a = condition.location, { s0Index } = _a, rest = __rest(_a, ["s0Index"]);
        let currentData = this.categories[s0Index];
        for (const key in rest) {
            if (currentData.forms[rest[key]]) {
                currentData = currentData.forms[rest[key]];
            }
        }
        return currentData.defaultValue ? currentData.value === condition.value : !!currentData.value;
        // if (location.level === 1) {
        //   if (this.categories[location.s0Index].forms[location.s1Index].type === 'checkbox_multiple') {
        //     const array = this.categories[location.s0Index].forms[location.s1Index].defaultValue.filter((check) => check.checked)
        //     let checked = false;
        //     for (var i = 0; i < array.length; i++) {
        //       if (array[i].value === conditionValue) {
        //         checked = true;
        //         break;
        //       }
        //     }
        //     return checked;
        //   } else {
        //     return this.categories[location.s0Index].forms[location.s1Index].value === conditionValue
        //   }
        // } else if (location.level === 2) {
        //   if (this.categories[location.s0Index].forms[location.s1Index].forms[location.s2Index].type === 'checkbox_multiple') {
        //     const array = this.categories[location.s0Index].forms[location.s1Index].forms[location.s2Index].defaultValue.filter((check) => check.checked)
        //     let checked = false;
        //     for (var i = 0; i < array.length; i++) {
        //       if (array[i].value == conditionValue) {
        //         checked = true;
        //         break;
        //       }
        //     }
        //     return checked;
        //   } else {
        //     return this.categories[location.s0Index].forms[location.s1Index].forms[location.s2Index].value === conditionValue
        //   }
        // } else if (location.level === 3) {
        //   if (this.categories[location.s0Index].forms[location.s1Index].forms[location.s3Index].forms[location.s4Index].type === 'checkbox_multiple') {
        //     const array = this.categories[location.s0Index].forms[location.s1Index].forms[location.s3Index].forms[location.s4Index].defaultValue.filter((check) => check.checked)
        //     let checked = false;
        //     for (var i = 0; i < array.length; i++) {
        //       if (array[i].value == conditionValue) {
        //         checked = true;
        //         break;
        //       }
        //     }
        //     return checked;
        //   } else {
        //     return this.categories[location.s0Index].forms[location.s1Index].forms[location.s3Index].forms[location.s4Index].value === conditionValue
        //   }
        // } else {
        //   return true
        // }
    }
    checkSubForm(forms) {
        let hasSubForm = false;
        for (const form of forms) {
            if (form.forms && form.forms.length > 0) {
                hasSubForm = true;
                break;
            }
        }
        return hasSubForm;
    }
    onSelectMenu(i) {
        this.selectedMenu = i;
        this.selectedCategoryIndex = i;
        setTimeout(() => {
            this.selectedCategoryIndex = null;
        }, 2000);
    }
    onCheckValue(event) {
        this.invalideValue = event;
    }
    onLink(e) {
        e.preventDefault();
    }
    onShowMode() {
        this.showMode = !this.showMode;
        this.onLoadViewDetail(this.categories);
    }
    onCreateConfirm() {
        const dialogRef = this.dialog.open(DialogConfirmation, {
            data: {
                message: `Le profil de ${this.detailView.user.FirstName} ${this.detailView.user.LastName} a été bien crée`,
                confirmText: 'Télécharger le PDF récapitulatif',
                cancelText: 'Fermer'
            }
        });
        dialogRef.afterClosed().subscribe((current) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e;
            const attach = ((_a = this.detailView) === null || _a === void 0 ? void 0 : _a.vtickets) && ((_c = (_b = this.detailView) === null || _b === void 0 ? void 0 : _b.vtickets[0]) === null || _c === void 0 ? void 0 : _c.vattachment) ? (_e = (_d = this.detailView) === null || _d === void 0 ? void 0 : _d.vtickets[0]) === null || _e === void 0 ? void 0 : _e.vattachment[0] : null;
            if (current && attach) {
                yield this.service.downloadAttachment(attach.Url, attach.ContentType, attach.Url.split('/').join('-'));
            }
        }));
    }
}
OnboardingCreateComponent.ɵfac = function OnboardingCreateComponent_Factory(t) { return new (t || OnboardingCreateComponent)(i0.ɵɵdirectiveInject(i1$2.FormBuilder), i0.ɵɵdirectiveInject(OnboardingService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i1$1.MatDialog)); };
OnboardingCreateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnboardingCreateComponent, selectors: [["create-onboarding"]], hostBindings: function OnboardingCreateComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵlistener("scroll", function OnboardingCreateComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
        }
    }, decls: 4, vars: 2, consts: [[1, "content"], ["id", "form", 3, "formGroup", "submit", 4, "ngIf"], [3, "detailView", "onShowMode", 4, "ngIf"], ["id", "form", 3, "formGroup", "submit"], [1, "category"], [1, "title-group"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], ["mat-button", "", "type", "button", 1, "register-button", 3, "disabled", "click"], [4, "ngIf"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "id", 4, "ngFor", "ngForOf"], [1, "category-container", 3, "scroll"], ["class", "category-item content-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "onboarding-create-footer"], [1, "actions-button", 2, "margin-bottom", "50px", "display", "flex"], ["mat-button", "", "type", "submit", 1, "register-button", "send-form", 3, "disabled"], ["mat-button", "", "type", "button", 1, "register-button", "resume", 3, "disabled", "click"], [2, "background-color", "transparent"], [2, "height", "450px"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", "content-item", 3, "id"], [1, "field-content"], [1, "field-item"], [1, "category-title-group"], [1, "category-name"], [1, "category-container"], ["class", "field-category", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "field-category", 3, "id"], ["class", "inner-loop", 4, "ngIf"], [1, "inner-loop"], [1, "fields-content"], [1, "fields-container"], [3, "field", "length", "i", "j"], [1, "child"], ["class", "inner-child", 4, "ngIf"], [1, "inner-child"], ["class", "inner-child-content", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "inner-child-content", 3, "id"], [3, "field", "length", "i", "j", "onCheckValue"], [3, "detailView", "onShowMode"]], template: function OnboardingCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "main")(1, "div", 0);
            i0.ɵɵtemplate(2, OnboardingCreateComponent_form_2_Template, 25, 13, "form", 1);
            i0.ɵɵtemplate(3, OnboardingCreateComponent_lib_onboarding_detail_3_Template, 1, 1, "lib-onboarding-detail", 2);
            i0.ɵɵelementEnd()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.showMode);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showMode);
        }
    }, directives: [i1$3.NgIf, i1$2.ɵNgNoValidate, i1$2.NgControlStatusGroup, i1$2.FormGroupDirective, i6.MatIcon, i7$1.MatButton, LoadingPageComponent, i1$3.NgForOf, i5$2.ScrollToDirective, SubOnboardingCreateComponent, OnboardingDetailComponent], styles: ["main[_ngcontent-%COMP%]{background:#f4f7f9 0% 0% no-repeat padding-box;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:96%;height:100%;padding-left:2%;padding-right:2%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font: 700 32px/30px Nexa Text;letter-spacing:0px;color:#171f26;padding-top:20px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font: 20px/26px Nexa Text;letter-spacing:0px;color:#171f26}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{max-width:400px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:40%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:1em 2em;display:flex;align-items:center;background-color:transparent;font: 700 15px/17px Nexa;letter-spacing:0px;color:#543cb6;align-self:center;width:220px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .onboarding-mat-stepper[_ngcontent-%COMP%]   mat-horizontal-stepper[_ngcontent-%COMP%]   .next-step[_ngcontent-%COMP%]{float:right}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;margin:auto;overflow:hidden}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font: 700 15px/17px Nexa;letter-spacing:0px;color:#543cb6;align-self:flex-end}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;margin-top:20vh;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font: 900 32px/48px Nexa;letter-spacing:0px;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font: 18px/24px Nexa Text;letter-spacing:0px;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font: 900 32px/38px Nexa;letter-spacing:0px;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font: 15px/26px Nexa Text;letter-spacing:0px;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font: 700 15px/17px Nexa;letter-spacing:0px;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-select{padding:0}  .mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:transparent}[_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:transparent}.category-action[_ngcontent-%COMP%]{display:flex;width:100%;overflow:hidden}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;padding:15px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%]{text-align:left;font: 700 22px/48px Nexa Text;letter-spacing:0px;color:#171f26;margin:0}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .inner-child[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.category[_ngcontent-%COMP%]{width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;padding-top:0;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:-5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3.template-title[_ngcontent-%COMP%]{font: 900 24px/36px Nexa Text;letter-spacing:0px;color:#171f26}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-weight:500;padding:5px;margin:5px auto;font-size:12px;cursor:pointer;text-align:left;font: 12px/19px Nexa Text;letter-spacing:0px;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;margin-right:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:none;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center;width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%]{background:#e5e8ee 0% 0% no-repeat padding-box;border-radius:5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker{font-weight:600;background:#e5e8ee 0% 0% no-repeat padding-box;border-radius:5px}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.category[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:10px}.category[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 8px;display:flex;align-items:center}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font: 17px/26px Nexa Text;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;line-height:26px;margin-left:10px;margin-bottom:10px;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#c2c8d5;width:92%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;width:98%;margin:10px 0}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{width:100%;padding-right:10px;padding-top:5px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:transparent;border:2px solid #192128!important;border-radius:8px;margin-left:22px!important;color:#000;padding:10px!important}.register-button[disabled][disabled][_ngcontent-%COMP%]{opacity:.5!important;background:no-repeat padding-box #dadee2!important}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}  .phone-input-view-collab{border-bottom:1px solid #949494!important;padding-bottom:.3em;padding-top:1em;display:block!important;max-width:100%;font: 14px/20px Nexa Text!important;width:95%}  .country-dropdown{min-width:unset!important}  .iti{width:100%!important}  #phone{width:90%!important}  #mobile-phone{width:100%}  .fields{max-height:100vh;overflow:auto;margin-right:.5%;overflow:hidden;width:100%}  .fields mat-tab-group{height:100%;width:100%;overflow:hidden}  .fields mat-tab-group .mat-tab-body-wrapper{height:100%;max-height:90vh;overflow:auto}  .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body{height:100%}  .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body .mat-tab-body-content{width:100%;overflow:hidden}.fields[_ngcontent-%COMP%]{height:95%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:0;padding:0;overflow:auto}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover, .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]{cursor:pointer;border-bottom:3px solid #3C4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}  .category-container{overflow:auto;max-height:100%;display:flex;flex-wrap:wrap}  .category-container mat-form-field{width:100%}  .category-container .actions-button{margin-top:20px;margin-bottom:50px}  .category-container .actions-button .send-form{margin-left:0!important;background-color:#000;color:#fff;padding:10px!important}  .category-container .actions-button .resume{margin-left:25px!important}  .category-container::-webkit-scrollbar{display:none}  .category-container{-ms-overflow-style:none;scrollbar-width:none}  .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5}  .category-item .mat-radio-button.mat-accent .mat-radio-inner-circle,   .category-item .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .category-item .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5}  .category-item .mat-checkbox-checkmark-path{stroke:#fff!important}  .category-item .mat-checkbox-frame{border:2px solid #039BE5!important}  .category-item .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background,   .category-item .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#039be5!important}  .category-item .mat-checkbox-inner-container{height:20px!important;width:20px!important}  button .mat-button-wrapper{display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}[_nghost-%COMP%]     .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5}.onboarding-create-footer[_ngcontent-%COMP%]{display:flex;flex-direction:column}div.page[_ngcontent-%COMP%]{background:white;display:block;margin:0 auto .5cm;box-shadow:0 0 .5cm #00000080}div.page[size=A4][_ngcontent-%COMP%]{width:210cm;height:29.7cm}div.page[size=A4][layout=portrait][_ngcontent-%COMP%]{width:29.7cm;height:21cm}@media print{body[_ngcontent-%COMP%], div.page[_ngcontent-%COMP%]{margin:0;box-shadow:0}}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingCreateComponent, [{
            type: Component,
            args: [{ selector: "create-onboarding", template: "<main>\r\n    <div class=\"content\">\r\n        <form *ngIf=\"!showMode\" [formGroup]=\"form\" id=\"form\" (submit)=\"onSubmit(true)\">\r\n            <div class=\"category\">\r\n                <div class=\"title-group\">\r\n                    <h2>Int\u00E9gration profil {{currentTemplate?.Name}} <mat-icon\r\n                            style=\"margin-left: 20px; cursor: pointer;\" (click)=\"onShowMode()\">visibility</mat-icon>\r\n                    </h2>\r\n                    <button mat-button [disabled]=\"loading\" class=\"register-button\" type=\"button\"\r\n                        (click)=\"onSubmit(false)\">\r\n                        <lib-loading-page *ngIf=\"loading && !isSubmitted\"></lib-loading-page>{{resumeLabel}}\r\n                    </button>\r\n                </div>\r\n                <div id=\"fields\" class=\"fields\">\r\n                    <ul>\r\n                        <li [ngxScrollTo]=\"'#'+category.name\" class=\"menu-item\"\r\n                            *ngFor=\"let category of categories;  let i=index\" [id]=\"category.name+'x'\">\r\n                            <a>{{category.name}}</a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"category-container\" (scroll)=\"onScroll($event)\">\r\n                        <section class=\"category-item content-item\" *ngFor=\"let category of categories;  let i=index\"\r\n                            [id]=\"category.name\">\r\n                            <div class=\"field-content\">\r\n                                <div class=\"field-item\">\r\n                                    <div class=\"category-title-group\">\r\n                                        <h4 class=\"category-name\">{{category.name}}</h4>\r\n                                        <p>\r\n                                            Listes des informations n\u00E9cessaires pour la cr\u00E9ation de {{\r\n                                            catNameStart(category.name) ? \"l'\" + category.name :\r\n                                            category.name }}\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"category-container\">\r\n                                    <div class=\"field-category\" *ngFor=\"let field of category.forms;let j=index\"\r\n                                        [id]=\"field.key\"\r\n                                        [style.width]=\"field.forms ? '100%' : fieldWidth(field.type,category.forms.length,j)\">\r\n                                        <div class=\"inner-loop\"\r\n                                            *ngIf=\"field.expandOnboarding && onCheckConditionLocationValue(field.isConditional,field?.condition)\">\r\n                                            <div class=\"fields-content\">\r\n                                                <div class=\"fields-container\">\r\n                                                    <lib-sub-create-onboarding [field]=\"field\"\r\n                                                        [length]=\"category?.forms?.length\" [i]=\"i\" [j]=\"j\">\r\n                                                        <div class=\"child\">\r\n                                                            <div class=\"inner-child\" *ngIf=\"field.forms && field.value\">\r\n                                                                <div class=\"inner-child-content\"\r\n                                                                    *ngFor=\"let child of field.forms;let k=index\"\r\n                                                                    [id]=\"child.key\"\r\n                                                                    [style.width]=\"child.forms ? '100%' : fieldWidth(child.type,field.forms.length,k)\">\r\n                                                                    <div class=\"inner-loop\"\r\n                                                                        *ngIf=\"child.expandOnboarding && onCheckConditionLocationValue(child.isConditional,child?.condition)\">\r\n                                                                        <div class=\"fields-content\">\r\n                                                                            <div class=\"fields-container\">\r\n                                                                                <lib-sub-create-onboarding\r\n                                                                                    [field]=\"child\"\r\n                                                                                    [length]=\"field?.forms?.length\"\r\n                                                                                    [i]=\"j\" [j]=\"k\"\r\n                                                                                    (onCheckValue)=\"onCheckValue($event)\">\r\n                                                                                    <div class=\"child\">\r\n                                                                                        <div class=\"inner-child\"\r\n                                                                                            *ngIf=\"child.forms && child.value\">\r\n                                                                                            <div class=\"inner-child-content\"\r\n                                                                                                *ngFor=\"let c2 of child.forms;let l=index\"\r\n                                                                                                [id]=\"c2.key\"\r\n                                                                                                [style.width]=\"c2.forms ? '100%' : fieldWidth(c2.type,child.forms.length,l)\">\r\n                                                                                                <div class=\"inner-loop\"\r\n                                                                                                    *ngIf=\"c2.expandOnboarding && onCheckConditionLocationValue(c2.isConditional,c2?.condition)\">\r\n                                                                                                    <div\r\n                                                                                                        class=\"fields-content\">\r\n                                                                                                        <div\r\n                                                                                                            class=\"fields-container\">\r\n                                                                                                            <lib-sub-create-onboarding\r\n                                                                                                                [field]=\"c2\"\r\n                                                                                                                [length]=\"child?.forms?.length\"\r\n                                                                                                                [i]=\"k\"\r\n                                                                                                                [j]=\"l\"\r\n                                                                                                                (onCheckValue)=\"onCheckValue($event)\">\r\n                                                                                                                <div\r\n                                                                                                                    class=\"child\">\r\n                                                                                                                </div>\r\n                                                                                                            </lib-sub-create-onboarding>\r\n                                                                                                        </div>\r\n                                                                                                    </div>\r\n                                                                                                </div>\r\n                                                                                            </div>\r\n                                                                                        </div>\r\n                                                                                    </div>\r\n                                                                                </lib-sub-create-onboarding>\r\n                                                                            </div>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </lib-sub-create-onboarding>\r\n\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </section>\r\n                        <div class=\"onboarding-create-footer\">\r\n                            <div class=\"actions-button\" style=\"margin-bottom: 50px;display: flex;\">\r\n                                <button [disabled]=\"loading || !form.valid\" mat-button class=\"register-button send-form\"\r\n                                    type=\"submit\">\r\n                                    <lib-loading-page *ngIf=\"loading && isSubmitted\"></lib-loading-page>{{submitLabel}}\r\n                                </button>\r\n                                <button [disabled]=\"loading\" mat-button class=\"register-button resume\" type=\"button\"\r\n                                    (click)=\"onSubmit(false)\">\r\n                                    <lib-loading-page *ngIf=\"loading && !isSubmitted\"></lib-loading-page>{{resumeLabel}}\r\n                                </button>\r\n                            </div>\r\n                            <section style=\"background-color: transparent\">\r\n                                <div style=\"height: 450px;\"></div>\r\n                            </section>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <lib-onboarding-detail *ngIf=\"showMode\" (onShowMode)=\"onShowMode()\" [detailView]=\"detailView\">\r\n        </lib-onboarding-detail>\r\n    </div>\r\n\r\n</main>", styles: ["main{background:#f4f7f9 0% 0% no-repeat padding-box;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main .disabled label{background-color:transparent!important}main .content{width:96%;height:100%;padding-left:2%;padding-right:2%}main .content h3{font: 700 32px/30px Nexa Text;letter-spacing:0px;color:#171f26;padding-top:20px}main .content p{font: 20px/26px Nexa Text;letter-spacing:0px;color:#171f26}main .content p.sub-title{max-width:400px}main .content .select-contact{max-width:70%;margin:5% auto auto;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;padding:5%}main .content .select-contact .select-template{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main .content .select-contact .select-template .full-width{width:40%}main .content .select-contact .select-template button{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:1em 2em;display:flex;align-items:center;background-color:transparent;font: 700 15px/17px Nexa;letter-spacing:0px;color:#543cb6;align-self:center;width:220px}main .content .category .onboarding-mat-stepper mat-horizontal-stepper .next-step{float:right}main .content form{display:flex;height:100%;width:100%;margin:auto;overflow:hidden}main .content form .select-contact{max-width:70%;margin:5% auto auto;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;padding:5%}main .content form .select-contact button{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font: 700 15px/17px Nexa;letter-spacing:0px;color:#543cb6;align-self:flex-end}main .box-title{width:786px;margin-top:20vh;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;align-self:center}main .box-title h3{text-align:center;font: 900 32px/48px Nexa;letter-spacing:0px;color:#171f26}main .box-title label,main .box-title input{font: 18px/24px Nexa Text;letter-spacing:0px;color:#171f26}main .box-title .profil-name-content{display:flex;align-items:center;position:relative}main .box-title .profil-name-content .add-picto{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main .box-title .profil-name-content .add-picto mat-icon{margin-right:10px}main .box-title .profil-name-content .list-picto{position:absolute;height:200px;width:100%;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main .box-title .profil-name-content .list-picto mat-icon{margin:15px;border:none;font-size:40px}main .box-title .profil-name-content .list-picto mat-icon:hover{color:#830b6b!important;cursor:pointer}main .box-title .box-title-content{width:100%;margin:25px auto}main .box-title .title{font: 900 32px/38px Nexa;letter-spacing:0px;color:#171f26}main .box-title p{font: 15px/26px Nexa Text;letter-spacing:0px;color:#171f26;text-align:center}main .box-title .link-create-profil{width:100%;display:flex;justify-content:center}main .box-title button{text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font: 700 15px/17px Nexa;letter-spacing:0px;color:#543cb6}main .action{width:100%;display:flex;justify-content:space-between}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.full-width{width:100%}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}::ng-deep .mat-select{padding:0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:transparent}:host ::ng-deep .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background,:host ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:transparent}.category-action{display:flex;width:100%;overflow:hidden}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item,.cdk-drag-placeholder{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;padding:15px}.category-item .left-action,.cdk-drag-placeholder .left-action{height:auto;background-color:#49a094;padding-top:7px;width:40px;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item .left-action .transparent-button,.cdk-drag-placeholder .left-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item .field-content,.cdk-drag-placeholder .field-content{width:100%}.category-item .field-content .field-item,.cdk-drag-placeholder .field-content .field-item{display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;border:transparent!important}.category-item .field-content .field-item .category-title-group p,.cdk-drag-placeholder .field-content .field-item .category-title-group p{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e}.category-item .field-content .field-item .category-title-group .category-name,.cdk-drag-placeholder .field-content .field-item .category-title-group .category-name{text-align:left;font: 700 22px/48px Nexa Text;letter-spacing:0px;color:#171f26;margin:0}.category-item .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.cdk-drag-placeholder .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline{color:transparent!important}.category-item .field-content .mat-form-field-outline,.cdk-drag-placeholder .field-content .mat-form-field-outline{color:transparent!important}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.child{margin-left:0}.child .inner-child{display:flex;flex-wrap:wrap}.category{width:100%}.category .summary{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category .summary h3{font-size:15px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;padding-top:0;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category .summary h3 span{font-weight:600;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:-5px}.category .summary h3 mat-icon{margin-left:15px;cursor:pointer}.category .summary h3.template-title{font: 900 24px/36px Nexa Text;letter-spacing:0px;color:#171f26}.category .summary ol{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category .summary ol li{font-weight:500;padding:5px;margin:5px auto;font-size:12px;cursor:pointer;text-align:left;font: 12px/19px Nexa Text;letter-spacing:0px;color:#535760}.category .summary ol li ol{padding-left:0;margin-left:0}.category .summary ol li.li-title{font-size:14px;font-weight:600;margin-right:10px}.category .summary ol li.li-title input{width:140px;outline:none;border:1px dashed grey}.category .summary ol li.li-title span{display:inline-flex;align-items:center;width:100%}.category .summary ol li.li-title span mat-icon{margin-left:10px}.category .summary ol li.li-title:hover,.category .summary ol li.li-title.active{background:#e5e8ee 0% 0% no-repeat padding-box;border-radius:5px}.category .summary ol li.sub-title{list-style:none;padding-left:20px}.category .summary ol li.sub-title:hover,.category .summary ol li.sub-title.active,.category .summary ol li.sub-title.active::marker{font-weight:600;background:#e5e8ee 0% 0% no-repeat padding-box;border-radius:5px}.category .disabled{background-color:#f4f7f9!important}.category .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category .expand-button .material-icons{font-size:40px}.category .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.category .title-group{display:flex;justify-content:space-between;margin-top:10px}.category .title-group h2{margin:0 0 8px;display:flex;align-items:center}.add-button-sub-category{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font: 17px/26px Nexa Text;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.add-category{border:1px dashed #c2c8d5;border-radius:5px;line-height:26px;margin-left:10px;margin-bottom:10px;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#c2c8d5;width:92%}.inner-loop .fields-content{display:flex;height:100%;width:98%;margin:10px 0}.inner-loop .fields-content .button-action{background-color:#6fe8d7;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop .fields-content .button-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop .fields-content .child-2-background{background-color:#cffaf4!important}.inner-loop .fields-content .child-3-background{background-color:#e5e8ee!important}.inner-loop .fields-content .fields-container{width:100%;padding-right:10px;padding-top:5px}.inner-loop .fields-content .fields-container lib-sub-category .field-item{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop .fields-content .fields-container lib-sub-category .field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop .fields-content .fields-container lib-sub-category .field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.side-bar{display:flex;flex-direction:column}.register-button{background:transparent;border:2px solid #192128!important;border-radius:8px;margin-left:22px!important;color:#000;padding:10px!important}.register-button[disabled][disabled]{opacity:.5!important;background:no-repeat padding-box #dadee2!important}.content-item{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}::ng-deep .phone-input-view-collab{border-bottom:1px solid #949494!important;padding-bottom:.3em;padding-top:1em;display:block!important;max-width:100%;font: 14px/20px Nexa Text!important;width:95%}::ng-deep .country-dropdown{min-width:unset!important}::ng-deep .iti{width:100%!important}::ng-deep #phone{width:90%!important}::ng-deep #mobile-phone{width:100%}::ng-deep .fields{max-height:100vh;overflow:auto;margin-right:.5%;overflow:hidden;width:100%}::ng-deep .fields mat-tab-group{height:100%;width:100%;overflow:hidden}::ng-deep .fields mat-tab-group .mat-tab-body-wrapper{height:100%;max-height:90vh;overflow:auto}::ng-deep .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body{height:100%}::ng-deep .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body .mat-tab-body-content{width:100%;overflow:hidden}.fields{height:95%}.fields ul{list-style:none;display:flex;margin:0;padding:0;overflow:auto}.fields ul li{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields ul li a{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields ul li.menu-item:hover,.fields ul li.menu-item.active{cursor:pointer;border-bottom:3px solid #3C4252}.fields ul li.menu-item:hover a,.fields ul li.menu-item.active a{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}::ng-deep .category-container{overflow:auto;max-height:100%;display:flex;flex-wrap:wrap}::ng-deep .category-container mat-form-field{width:100%}::ng-deep .category-container .actions-button{margin-top:20px;margin-bottom:50px}::ng-deep .category-container .actions-button .send-form{margin-left:0!important;background-color:#000;color:#fff;padding:10px!important}::ng-deep .category-container .actions-button .resume{margin-left:25px!important}::ng-deep .category-container::-webkit-scrollbar{display:none}::ng-deep .category-container{-ms-overflow-style:none;scrollbar-width:none}::ng-deep .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5}::ng-deep .category-item .mat-radio-button.mat-accent .mat-radio-inner-circle,::ng-deep .category-item .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),::ng-deep .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,::ng-deep .category-item .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5}::ng-deep .category-item .mat-checkbox-checkmark-path{stroke:#fff!important}::ng-deep .category-item .mat-checkbox-frame{border:2px solid #039BE5!important}::ng-deep .category-item .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background,::ng-deep .category-item .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#039be5!important}::ng-deep .category-item .mat-checkbox-inner-container{height:20px!important;width:20px!important}::ng-deep button .mat-button-wrapper{display:flex;align-items:center;justify-content:center}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}:host ::ng-deep .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5}.onboarding-create-footer{display:flex;flex-direction:column}div.page{background:white;display:block;margin:0 auto .5cm;box-shadow:0 0 .5cm #00000080}div.page[size=A4]{width:210cm;height:29.7cm}div.page[size=A4][layout=portrait]{width:29.7cm;height:21cm}@media print{body,div.page{margin:0;box-shadow:0}}\n"] }]
        }], function () { return [{ type: i1$2.FormBuilder }, { type: OnboardingService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: i1$1.MatDialog }]; }, { onScroll: [{
                type: HostListener,
                args: ['scroll', ['$event']]
            }] });
})();

function DialogCreateOnboardingComponent_mat_option_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 7);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const template_r1 = ctx.$implicit;
        i0.ɵɵproperty("value", template_r1._id);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(template_r1.Name);
    }
}
class DialogCreateOnboardingComponent {
    constructor(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.templates = [];
        this.defaultUserForm = [
            {
                label: "Civilité",
                key: "Salutation",
                expandOnboarding: true,
                defaultValue: [{ value: "M.", checked: false }, { value: "Mme", checked: false }],
                value: null,
                size: 10,
                isMandatory: true,
                otherValue: '',
                type: "select",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Type de profil",
                key: "Type_de_profil_Nowboard__c",
                expandOnboarding: true,
                defaultValue: [{ value: "Manager", checked: false }, { value: "Utilisateur", checked: false }],
                value: null,
                size: 10,
                isMandatory: true,
                otherValue: '',
                type: "select",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Nom",
                key: "LastName",
                expandOnboarding: true,
                defaultValue: null,
                value: null,
                size: 80,
                isMandatory: true,
                otherValue: '',
                type: "text",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Prénom",
                key: "FirstName",
                expandOnboarding: true,
                defaultValue: null,
                value: null,
                size: 80,
                isMandatory: true,
                otherValue: '',
                type: "text",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Email",
                key: "Email",
                expandOnboarding: true,
                defaultValue: null,
                value: null,
                size: 80,
                isMandatory: true,
                otherValue: '',
                type: "email",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Téléphone fixe",
                key: "Phone",
                expandOnboarding: true,
                defaultValue: null,
                value: null,
                size: 20,
                isMandatory: false,
                otherValue: '',
                type: "tel",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Téléphone portable",
                key: "MobilePhone",
                expandOnboarding: true,
                defaultValue: null,
                value: null,
                size: 20,
                isMandatory: false,
                otherValue: '',
                type: "tel",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Fonction",
                key: "Title",
                expandOnboarding: true,
                defaultValue: null,
                value: null,
                size: 80,
                isMandatory: true,
                otherValue: '',
                type: "text",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Etablissement / Site",
                key: "AccountName",
                expandOnboarding: true,
                defaultValue: null,
                value: null,
                size: 80,
                isMandatory: true,
                otherValue: '',
                type: "text",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Accès au portail",
                key: "Acc_s_au_portail_client_NowBoard__c",
                expandOnboarding: true,
                defaultValue: [{ value: "Oui", checked: false }, { value: "Non", checked: false }],
                value: null,
                size: 10,
                isMandatory: true,
                otherValue: '',
                type: "select",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Langue",
                key: "Langue_maternelle__c",
                expandOnboarding: true,
                defaultValue: [{ value: "Français", checked: false }, { value: "Anglais", checked: false }],
                value: null,
                size: 10,
                isMandatory: true,
                otherValue: '',
                type: "select",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "A quitté la société",
                key: "A_quitt_la_soci_t__c",
                expandOnboarding: true,
                defaultValue: [{ value: "Oui", checked: false }, { value: "Non", checked: false }],
                value: null,
                size: 10,
                isMandatory: true,
                otherValue: '',
                type: "select",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
        ];
        this.userForm = [];
        this.onboarding = {
            TemplateId: 0,
        };
        this.service._templates.subscribe((data) => {
            if (data) {
                this.templates = data.filter((d) => d.Status);
            }
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.service.getAllProfil();
        });
    }
    createOnboarding() {
        if (!this.disabled()) {
            const template = this.templates.find((temp) => temp._id === this.onboarding.TemplateId);
            if (this.data.user) {
                this.userForm = this.defaultUserForm.map((data) => (Object.assign(Object.assign({}, data), { value: this.data.user[data.key] })));
                const index = template.categories.findIndex((cat) => cat.name === "Utilisateur");
                if (index !== -1) {
                    template.categories[index].forms = this.userForm;
                }
            }
            this.dialogRef.close(Object.assign(Object.assign({}, this.onboarding), { categories: template.categories }));
        }
    }
    close() {
        this.dialogRef.close(false);
    }
    disabled() {
        return !(this.onboarding.TemplateId);
    }
}
DialogCreateOnboardingComponent.ɵfac = function DialogCreateOnboardingComponent_Factory(t) { return new (t || DialogCreateOnboardingComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1$1.MatDialogRef), i0.ɵɵdirectiveInject(OnboardingService)); };
DialogCreateOnboardingComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogCreateOnboardingComponent, selectors: [["lib-dialog-create-onboarding"]], decls: 13, vars: 3, consts: [[1, "title"], ["appearance", "outline", 1, "full-width"], ["required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-content"], ["mat-raised-button", "", 1, "create-profil", 3, "disabled", "click"], ["mat-raised-button", "", 1, "abandon-profil", 3, "click"], [3, "value"]], template: function DialogCreateOnboardingComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-dialog-content")(1, "h3", 0);
            i0.ɵɵtext(2, "Cr\u00E9ation d\u2019une demande d'int\u00E9gration");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-form-field", 1)(4, "mat-label");
            i0.ɵɵtext(5, "Type de profil");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-select", 2);
            i0.ɵɵlistener("ngModelChange", function DialogCreateOnboardingComponent_Template_mat_select_ngModelChange_6_listener($event) { return ctx.onboarding.TemplateId = $event; });
            i0.ɵɵtemplate(7, DialogCreateOnboardingComponent_mat_option_7_Template, 2, 2, "mat-option", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 4)(9, "button", 5);
            i0.ɵɵlistener("click", function DialogCreateOnboardingComponent_Template_button_click_9_listener() { return ctx.createOnboarding(); });
            i0.ɵɵtext(10, " Lancer la demande ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 6);
            i0.ɵɵlistener("click", function DialogCreateOnboardingComponent_Template_button_click_11_listener() { return ctx.close(); });
            i0.ɵɵtext(12, " Abandonner ");
            i0.ɵɵelementEnd()()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngModel", ctx.onboarding.TemplateId);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.templates);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.disabled());
        }
    }, directives: [i1$1.MatDialogContent, i8.MatFormField, i8.MatLabel, i10.MatSelect, i1$2.RequiredValidator, i1$2.NgControlStatus, i1$2.NgModel, i7.NativeElementInjectorDirective, i1$3.NgForOf, i11.MatOption, i7$1.MatButton], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:400px;min-width:400px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content[_ngcontent-%COMP%]   .abandon-profil[_ngcontent-%COMP%]{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px;padding:10px!important}mat-dialog-content[_ngcontent-%COMP%]   .create-profil[_ngcontent-%COMP%]{background-color:#171f26;border:1px solid #171f26;color:#fff;padding:10px!important}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, mat-dialog-content[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{opacity:.5}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogCreateOnboardingComponent, [{
            type: Component,
            args: [{ selector: 'lib-dialog-create-onboarding', template: "<mat-dialog-content>\r\n  <h3 class=\"title\">Cr\u00E9ation d\u2019une demande d'int\u00E9gration</h3>\r\n  <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n    <mat-label>Type de profil</mat-label>\r\n    <mat-select [(ngModel)]=\"onboarding.TemplateId\" required>\r\n      <mat-option *ngFor=\"let template of templates\" [value]=\"template._id\">{{ template.Name }}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <div class=\"action-content\">\r\n    <button [disabled]=\"disabled()\" class=\"create-profil\" (click)=\"createOnboarding()\" mat-raised-button>\r\n      Lancer la demande\r\n    </button>\r\n    <button class=\"abandon-profil\" (click)=\"close()\" mat-raised-button>\r\n      Abandonner\r\n    </button>\r\n  </div>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:400px;min-width:400px}mat-dialog-content mat-form-field{margin-bottom:10px}mat-dialog-content h3{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content .abandon-profil{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px;padding:10px!important}mat-dialog-content .create-profil{background-color:#171f26;border:1px solid #171f26;color:#fff;padding:10px!important}mat-dialog-content button:disabled,mat-dialog-content button[disabled]{opacity:.5}\n"] }]
        }], function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }, { type: i1$1.MatDialogRef }, { type: OnboardingService }];
    }, null);
})();

function OnboardingTableComponent_ngx_design_table_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "ngx-design-table", 1);
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("columnDefinitions", ctx_r0.columnDefinitions)("data", ctx_r0.data)("lang", ctx_r0.lang)("btnOverride", true)("lang", ctx_r0.lang)("EmptyRow", true)("displayDetail", true)("blockDetails", true);
    }
}
class OnboardingTableComponent {
    constructor() { }
    ngOnInit() {
    }
}
OnboardingTableComponent.ɵfac = function OnboardingTableComponent_Factory(t) { return new (t || OnboardingTableComponent)(); };
OnboardingTableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnboardingTableComponent, selectors: [["lib-onboarding-table"]], inputs: { _loading_table: "_loading_table", data: "data", columnDefinitions: "columnDefinitions", lang: "lang", inputSearch: "inputSearch" }, decls: 1, vars: 1, consts: [[3, "columnDefinitions", "data", "lang", "btnOverride", "EmptyRow", "displayDetail", "blockDetails", 4, "ngIf"], [3, "columnDefinitions", "data", "lang", "btnOverride", "EmptyRow", "displayDetail", "blockDetails"]], template: function OnboardingTableComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, OnboardingTableComponent_ngx_design_table_0_Template, 1, 8, "ngx-design-table", 0);
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.data);
        }
    }, directives: [i1$3.NgIf, i2$1.TableComponent], styles: ["ngx-onboarding lib-onboarding-table ngx-design-table .table-wrapper>table{border-collapse:separate!important;border-spacing:0px 20px!important}  ngx-onboarding lib-onboarding-table ngx-design-table th span{margin:auto;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-header-row{background:#E5E8EE}  ngx-onboarding lib-onboarding-table ngx-design-table .empty-row{height:0px!important;background:0% 0% no-repeat padding-box padding-box #f4f7f9}  ngx-onboarding lib-onboarding-table ngx-design-table .no-display-detail-empty-row{display:none}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-table{background:0% 0% no-repeat padding-box padding-box #f4f7f9}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody tr.element-row{height:83px!important;border-radius:6px;margin:10px 0}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell{background:#fff!important}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell a{text-decoration:none!important}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell span{font-style:normal;font-weight:400}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell app-is-mat-icon{width:100px}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td:has(.mat-column-expandedDetailX){border-top:0px solid #f4f7f9!important;border-radius:0 0 14px 14px/0px 0px 14px 14px}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell:first-of-type{border-bottom-left-radius:14px;border-top-left-radius:14px}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell:last-of-type{border-bottom-right-radius:14px;border-top-right-radius:14px}  ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-status{width:109px;height:36px;border-radius:4px;text-transform:capitalize;color:#fff;font-weight:500!important;font-size:16px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center}  ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.finished{background:#6FE8D7}  ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.to-finish{background:#F3A124}  ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.last-name{display:flex;flex-direction:column}  ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.last-name span:first-child{font-style:normal;font-weight:700;font-size:14px;line-height:120%;display:flex;align-items:center;color:#242731}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingTableComponent, [{
            type: Component,
            args: [{ selector: 'lib-onboarding-table', template: "<!-- <ngx-design-table *ngIf=\"data\" [columnDefinitions]=\"columnDefinitions\" [data]=\"data\" [lang]=\"lang\" [btnOverride]=\"true\"\n  [displayDetail]=\"true\">\n</ngx-design-table> -->\n\n\n<ngx-design-table *ngIf=\"data\" [columnDefinitions]=\"columnDefinitions\" [data]=\"data\" [lang]=\"lang\" [btnOverride]=\"true\"\n  [lang]=\"lang\" [EmptyRow]=\"true\" [displayDetail]=\"true\" [blockDetails]=\"true\">\n</ngx-design-table>", styles: ["::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .table-wrapper>table{border-collapse:separate!important;border-spacing:0px 20px!important}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table th span{margin:auto;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-header-row{background:#E5E8EE}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .empty-row{height:0px!important;background:0% 0% no-repeat padding-box padding-box #f4f7f9}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .no-display-detail-empty-row{display:none}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table{background:0% 0% no-repeat padding-box padding-box #f4f7f9}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody tr.element-row{height:83px!important;border-radius:6px;margin:10px 0}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell{background:#fff!important}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell a{text-decoration:none!important}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell span{font-style:normal;font-weight:400}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell app-is-mat-icon{width:100px}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td:has(.mat-column-expandedDetailX){border-top:0px solid #f4f7f9!important;border-radius:0 0 14px 14px/0px 0px 14px 14px}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell:first-of-type{border-bottom-left-radius:14px;border-top-left-radius:14px}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell:last-of-type{border-bottom-right-radius:14px;border-top-right-radius:14px}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-status{width:109px;height:36px;border-radius:4px;text-transform:capitalize;color:#fff;font-weight:500!important;font-size:16px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.finished{background:#6FE8D7}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.to-finish{background:#F3A124}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.last-name{display:flex;flex-direction:column}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.last-name span:first-child{font-style:normal;font-weight:700;font-size:14px;line-height:120%;display:flex;align-items:center;color:#242731}\n"] }]
        }], function () { return []; }, { _loading_table: [{
                type: Input
            }], data: [{
                type: Input
            }], columnDefinitions: [{
                type: Input
            }], lang: [{
                type: Input
            }], inputSearch: [{
                type: Input
            }] });
})();

function OnboardingListComponent_mat_option_15_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 9);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r5 = ctx.$implicit;
        i0.ɵɵproperty("value", item_r5._id);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", item_r5.Name, "");
    }
}
function OnboardingListComponent_div_49_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "div", 23);
    }
}
function OnboardingListComponent_div_50_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div")(1, "div");
        i0.ɵɵelement(2, "lib-onboarding-table", 24);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r4 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("ticket-list", !ctx_r4._loading_table);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("columnDefinitions", ctx_r4.columnDefinitions)("data", ctx_r4.onboardingList)("lang", ctx_r4.lang)("inputSearch", ctx_r4.inputSearch);
    }
}
// save the file
class OnboardingListComponent {
    constructor(service, router, route, dialog) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.inputSearch = '';
        this.currentLength = 0;
        this.currentFilter = 'all';
        this.onboarding = [];
        this.search = '';
        this.onboardingFormatList = [];
        this.templates = [];
        this.filterData = {
            TemplateId: "",
            start_date: null,
            end_date: null,
            searchText: '',
            Finished: ""
        };
        this.columnDefinitions = [
            {
                key: 'Name',
                subTitle: "date_of_entry",
                value: 'Nom de famille',
                order: 1,
                class: 'u-7',
                addClass: 'lastNameClass',
                module: CellsComponentList.CustomCell,
                sort: true,
            },
            {
                key: 'Id',
                value: 'ID',
                order: 2,
                class: 'u-4',
                sort: true,
            }, {
                key: 'Title',
                value: 'Profil',
                order: 2,
                class: 'u-4',
                sort: true,
            }, {
                key: 'requestor',
                value: 'Demandeur',
                order: 4,
                class: 'u-5',
                sort: true,
            }, {
                key: 'TemplateName',
                value: 'Service',
                order: 5,
                class: 'u-5',
                sort: true,
            },
            {
                key: 'date',
                value: "Date de création",
                order: 6,
                module: CellsComponentList.DateFormat,
                class: 'u-6',
                sort: true,
                align: 'left',
            },
            {
                key: 'Status',
                value: "Statut",
                order: 7,
                addClass: 'CustomClass',
                class: 'u-4',
                sort: true,
                module: CellsComponentList.CustomCell,
            },
            {
                key: 'Action',
                value: '',
                order: 8,
                class: 'u-4',
                module: CellsComponentList.ButtonLink,
                display: "Détail",
                override: [`${this.checkOnboardingPath()}`, 'TemplateId', '_id'],
                align: 'center'
            }
        ];
        this._loading_table = true;
        this.HiddenIndex = 0;
        this.index = 0;
        this.lang = 'fr';
        this.service._templates.subscribe((data) => {
            if (data) {
                this.templates = data.filter((d) => d.Status);
            }
        });
    }
    cancelSearch() {
        this.inputSearch = '';
    }
    checkOnboardingPath() {
        return this.service.mainPath.includes('onboarding') ? `${this.service.mainPath}/requests/` : `/onboarding/requests/`;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.service.getAllProfil();
            yield this.service.getAllOnboarding();
            this.service.onboarding.subscribe((onboarding) => {
                setTimeout(() => {
                    this._loading_table = false;
                }, 2000);
                if (onboarding) {
                    this.onboarding = onboarding.map((row, index) => {
                        var _a, _b;
                        const user = row.categories.find((cat) => cat.name === "Utilisateur");
                        const formUser = user.forms.map((form) => ({ key: form.key, value: form.value })).reduce((a, v) => (Object.assign(Object.assign({}, a), { [v.key]: v.value })), {});
                        row.Status = row.Finished ? "Terminée" : "A finaliser";
                        row.CustomClass = row.Finished ? "custom-status finished" : "custom-status to-finish";
                        row.lastNameClass = "last-name";
                        row.requestor = ((_a = row === null || row === void 0 ? void 0 : row.vcontacts[0]) === null || _a === void 0 ? void 0 : _a.Name) || '';
                        row.Name = row.ContactName = (formUser === null || formUser === void 0 ? void 0 : formUser.LastName) + " " + (formUser === null || formUser === void 0 ? void 0 : formUser.FirstName) || "";
                        row.Title = (formUser === null || formUser === void 0 ? void 0 : formUser.Title) || "";
                        row.Email = (formUser === null || formUser === void 0 ? void 0 : formUser.Email) || '';
                        row.date_of_entry = formUser.date_of_entry ? new Date(formUser.date_of_entry).toISOString() : "";
                        // row.date = moment(row.createdAt).format('DD/MM/YY')
                        row.creationDate = row.createdAt;
                        row.creationDate = row.createdAt;
                        row.TemplateName = ((_b = row === null || row === void 0 ? void 0 : row.vtemplates) === null || _b === void 0 ? void 0 : _b.length) > 0 ? row === null || row === void 0 ? void 0 : row.vtemplates[0].Name : '';
                        row.Id = index + 1;
                        // row.mainPath = this.service.mainPath.includes('onboarding') ? `${this.service.mainPath}/requests/` : `/onboarding/requests/`
                        return row;
                    });
                    console.log(this.onboarding);
                    this.dataFiltered = this.onboarding;
                    this.onForamtList(this.onboarding);
                }
            });
        });
    }
    onForamtList(datas) {
        this.onboardingFormatList = datas;
        this.onboardingList = new CoreMatTable(datas, {
            active: 'Id', direction: 'desc'
        }, { active: '', valueStart: null, valueEnd: null }, 15, true, true);
    }
    onFilterTemplate() {
        this.dataFiltered = this.filterData.searchText !== '' ? this.onboarding.filter((d) => d.Name.toLowerCase().search(this.filterData.searchText.toLocaleLowerCase()) > -1) : this.onboarding;
        if (this.filterData.TemplateId !== '') {
            this.dataFiltered = this.dataFiltered.filter((d) => d.TemplateId === this.filterData.TemplateId);
        }
        if (this.filterData.Finished !== '') {
            this.dataFiltered = this.dataFiltered.filter((d) => d.Finished === this.filterData.Finished);
        }
        if (this.filterData.start_date) {
            this.dataFiltered = this.dataFiltered.filter((data) => new Date(data.createdAt).getTime() >= new Date(this.filterData.start_date).getTime());
        }
        if (this.filterData.end_date) {
            this.dataFiltered = this.dataFiltered.filter((data) => new Date(data.createdAt).getTime() <= new Date(this.filterData.end_date).getTime());
        }
        this.onForamtList(this.dataFiltered);
    }
    triggerChange($event) {
        if ($event.index === 0) {
            this.currentLength = this.onboardingList.data.length;
        }
        else if ($event.index === 1) {
            this.currentLength = this.onboardingFinished.data.length;
        }
        else if ($event.index === 2) {
            this.currentLength = this.onboardingToFinish.data.length;
        }
        if ($event.index !== this.HiddenIndex) {
            this._loading_table = true;
            this.index = $event.index;
            this.router.navigate([], {
                relativeTo: this.route,
                queryParams: { page: null, tab: $event.index + 1 },
                queryParamsHandling: 'merge', // remove to replace all query params by provided
            });
            this.HiddenIndex = $event.index;
            setTimeout(() => {
                this._loading_table = false;
            }, 2000);
        }
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogCreateOnboardingComponent, {
            data: {}
        });
        dialogRef.afterClosed().subscribe((current) => {
            if (current) {
                this.service.currentOnboarding.next(current);
                this.router.navigate([this.service.mainPath + `/requests/${current.TemplateId}/0`]);
            }
        });
    }
    onExportToCSV() {
        try {
            let json2csvParser = new json2csv.Parser({ opts: {} });
            const dataToExport = this.dataFiltered.map((d) => ({
                Status: d.Status,
                Requestor: d.requestor,
                Name: d.Name,
                Title: d.Title,
                Email: d.Email,
                CreationDate: moment(d.createdAt).format('DD/MM/YY'),
                TemplateName: d.TemplateName
            }));
            let csvData = json2csvParser.parse(dataToExport);
            let file = new Blob(["\uFEFF" + csvData], {
                type: 'text/csv; charset=utf-18'
            });
            saveAs(file, "onboarding-request.csv");
        }
        catch (error) {
            console.log('error', error);
        }
    }
}
OnboardingListComponent.ɵfac = function OnboardingListComponent_Factory(t) { return new (t || OnboardingListComponent)(i0.ɵɵdirectiveInject(OnboardingService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i1$1.MatDialog)); };
OnboardingListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 51, vars: 17, consts: [[1, "main-all-ticket-list", "onboarding-list-container"], [1, "header-top"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-onboarding", 3, "click"], [1, "list-title"], [1, "filter-item"], ["appearance", "text"], [3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "placeholder", "Date minimum", 3, "matDatepicker", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["pickerMin", ""], ["matInput", "", "placeholder", "Date maximum", 3, "matDatepicker", "min", "ngModel", "ngModelChange"], ["pickerMax", ""], [1, "right-action"], ["appearance", "text", 1, "search-text"], ["matPrefix", "", 2, "margin-left", "5px"], ["matInput", "", "placeholder", "Recherche...", "type", "search", 3, "ngModel", "ngModelChange"], ["mat-flat-button", "", "appearance", "text", 1, "export-to-csv", 3, "click"], [1, "content-view-list-ticket"], ["class", "bt-spinner", 4, "ngIf"], [4, "ngIf"], [1, "bt-spinner"], [3, "columnDefinitions", "data", "lang", "inputSearch"]], template: function OnboardingListComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "a", 2);
            i0.ɵɵlistener("click", function OnboardingListComponent_Template_a_click_4_listener() { return ctx.openDialog(); });
            i0.ɵɵtext(5, " Nouvelle demande d\u2019int\u00E9gration ");
            i0.ɵɵelementStart(6, "mat-icon");
            i0.ɵɵtext(7, "add");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "div", 3)(9, "ul")(10, "li", 4)(11, "mat-form-field", 5)(12, "mat-select", 6);
            i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.filterData.TemplateId = $event; })("ngModelChange", function OnboardingListComponent_Template_mat_select_ngModelChange_12_listener() { return ctx.onFilterTemplate(); });
            i0.ɵɵelementStart(13, "mat-option", 7);
            i0.ɵɵtext(14, " Tous");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(15, OnboardingListComponent_mat_option_15_Template, 2, 2, "mat-option", 8);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(16, "li", 4)(17, "mat-form-field", 5)(18, "mat-select", 6);
            i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_Template_mat_select_ngModelChange_18_listener($event) { return ctx.filterData.Finished = $event; })("ngModelChange", function OnboardingListComponent_Template_mat_select_ngModelChange_18_listener() { return ctx.onFilterTemplate(); });
            i0.ɵɵelementStart(19, "mat-option", 7);
            i0.ɵɵtext(20, " Tous");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "mat-option", 9);
            i0.ɵɵtext(22, " Termin\u00E9es");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "mat-option", 9);
            i0.ɵɵtext(24, "A finaliser");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(25, "li", 4)(26, "mat-form-field", 5)(27, "input", 10);
            i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_27_listener($event) { return ctx.filterData.start_date = $event; })("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_27_listener() { return ctx.onFilterTemplate(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(28, "mat-datepicker-toggle", 11)(29, "mat-datepicker", null, 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "li", 4)(32, "mat-form-field", 5)(33, "input", 13);
            i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_33_listener() { return ctx.onFilterTemplate(); })("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_33_listener($event) { return ctx.filterData.end_date = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(34, "mat-datepicker-toggle", 11)(35, "mat-datepicker", null, 14);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(37, "ul", 15)(38, "li", 4)(39, "mat-form-field", 16)(40, "mat-icon", 17);
            i0.ɵɵtext(41, "search");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "input", 18);
            i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_42_listener($event) { return ctx.filterData.searchText = $event; })("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_42_listener() { return ctx.onFilterTemplate(); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(43, "li", 4)(44, "button", 19);
            i0.ɵɵlistener("click", function OnboardingListComponent_Template_button_click_44_listener() { return ctx.onExportToCSV(); });
            i0.ɵɵelementStart(45, "mat-icon");
            i0.ɵɵtext(46, "cloud_download");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(47, " (.CSV) ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(48, "div", 20);
            i0.ɵɵtemplate(49, OnboardingListComponent_div_49_Template, 1, 0, "div", 21);
            i0.ɵɵtemplate(50, OnboardingListComponent_div_50_Template, 3, 6, "div", 22);
            i0.ɵɵelementEnd()();
        }
        if (rf & 2) {
            const _r1 = i0.ɵɵreference(30);
            const _r2 = i0.ɵɵreference(36);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" Vous avez actuellement ", ctx.onboarding.length, " Demandes ");
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngModel", ctx.filterData.TemplateId);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.templates);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.filterData.Finished);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("value", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", false);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("matDatepicker", _r1)("max", ctx.filterData.end_date)("ngModel", ctx.filterData.start_date);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r1);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("matDatepicker", _r2)("min", ctx.filterData.start_date)("ngModel", ctx.filterData.end_date);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r2);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngModel", ctx.filterData.searchText);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx._loading_table || !ctx.onboardingList);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.onboardingList);
        }
    }, directives: [i7$1.MatAnchor, i6.MatIcon, i8.MatFormField, i10.MatSelect, i1$2.NgControlStatus, i1$2.NgModel, i7.NativeElementInjectorDirective, i11.MatOption, i1$3.NgForOf, i12.MatInput, i13.MatDatepickerInput, i1$2.DefaultValueAccessor, i13.MatDatepickerToggle, i8.MatSuffix, i13.MatDatepicker, i8.MatPrefix, i7$1.MatButton, i1$3.NgIf, OnboardingTableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:98%}md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font: 700 13px/20px nexa;letter-spacing:0px;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:999}app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}  .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font: 18px/20px Nexa Text;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;font: 17px/20px Nexa Text Bold;letter-spacing:0px;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;font: 700 32px/30px Nexa Text Bold;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.ticket-list[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}  .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}  .mat-tab-header .mat-tab-label-active{background:transparent}  .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}  lib-onboarding-table{background-color:red!important}  lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container[_ngcontent-%COMP%]{position:relative;padding:30px}.onboarding-list-container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:15px 0}.onboarding-list-container[_ngcontent-%COMP%]   .title-table[_ngcontent-%COMP%]{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container[_ngcontent-%COMP%]   .add-onboarding[_ngcontent-%COMP%]{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom:10px;cursor:pointer}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}  .filter-item{display:flex;align-items:center}  .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}  .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}  .right-action{display:flex;align-items:center}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingListComponent, [{
            type: Component,
            args: [{ selector: 'lib-onboarding-list', template: "<div class=\"main-all-ticket-list onboarding-list-container\">\r\n    <div class=\"header-top\">\r\n        <h2>\r\n            Vous avez actuellement {{onboarding.length}}\r\n            Demandes\r\n        </h2>\r\n        <a role=\"button\" class=\"add-onboarding\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">\r\n            Nouvelle demande d\u2019int\u00E9gration <mat-icon>add</mat-icon>\r\n        </a>\r\n    </div>\r\n    <div class=\"list-title\">\r\n        <ul>\r\n            <li class=\"filter-item\">\r\n                <mat-form-field appearance=\"text\">\r\n                    <mat-select [(ngModel)]=\"filterData.TemplateId\" (ngModelChange)=\"onFilterTemplate()\">\r\n                        <mat-option value=\"\"> Tous</mat-option>\r\n                        <mat-option [value]=\"item._id\" *ngFor=\"let item of templates\"> {{item.Name}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </li>\r\n            <li class=\"filter-item\">\r\n                <mat-form-field appearance=\"text\">\r\n                    <mat-select [(ngModel)]=\"filterData.Finished\" (ngModelChange)=\"onFilterTemplate()\">\r\n                        <mat-option value=\"\"> Tous</mat-option>\r\n                        <mat-option [value]=\"true\"> Termin\u00E9es</mat-option>\r\n                        <mat-option [value]=\"false\">A finaliser</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </li>\r\n            <li class=\"filter-item\">\r\n                <mat-form-field appearance=\"text\">\r\n                    <input matInput placeholder=\"Date minimum\" [matDatepicker]=\"pickerMin\" [max]=\"filterData.end_date\"\r\n                        [(ngModel)]=\"filterData.start_date\" (ngModelChange)=\"onFilterTemplate()\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerMin\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickerMin></mat-datepicker>\r\n                </mat-form-field>\r\n            </li>\r\n            <li class=\"filter-item\">\r\n                <mat-form-field appearance=\"text\">\r\n                    <input matInput [matDatepicker]=\"pickerMax\" (ngModelChange)=\"onFilterTemplate()\"\r\n                        placeholder=\"Date maximum\" [min]=\"filterData.start_date\" [(ngModel)]=\"filterData.end_date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerMax\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickerMax></mat-datepicker>\r\n                </mat-form-field>\r\n            </li>\r\n\r\n\r\n        </ul>\r\n        <ul class=\"right-action\">\r\n            <li class=\"filter-item\">\r\n                <mat-form-field class=\"search-text\" appearance=\"text\">\r\n                    <mat-icon matPrefix style=\"margin-left: 5px;\">search</mat-icon>\r\n                    <input matInput placeholder=\"Recherche...\" type=\"search\" [(ngModel)]=\"filterData.searchText\"\r\n                        (ngModelChange)=\"onFilterTemplate()\">\r\n                </mat-form-field>\r\n            </li>\r\n            <li class=\"filter-item\">\r\n                <button mat-flat-button class=\"export-to-csv\" appearance=\"text\" (click)=\"onExportToCSV()\">\r\n                    <mat-icon>cloud_download</mat-icon> (.CSV)\r\n                </button>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"content-view-list-ticket\">\r\n        <div *ngIf=\"_loading_table || !onboardingList\" class=\"bt-spinner\"></div>\r\n        <div *ngIf=\"onboardingList\">\r\n            <div [class.ticket-list]=\"!_loading_table\">\r\n                <lib-onboarding-table [columnDefinitions]=\"columnDefinitions\" [data]=\"onboardingList\" [lang]=\"lang\"\r\n                    [inputSearch]=\"inputSearch\">\r\n                </lib-onboarding-table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>", styles: ["mat-card{display:block;width:98%}md-tooltip.tt-multiline ._md-content{height:auto}md-tooltip ._md-content{height:auto}table{width:100%}.element-detail .inline{display:table;width:90%}.element-detail .inline .block1{display:inline-table;float:left;width:50%;text-align:left}.element-detail .inline .block1 strong{font: 700 13px/20px nexa;letter-spacing:0px;color:#171f26}.element-detail .inline .block1 p,.element-detail .inline .block1 small{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list .component-title{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list .content-view-list-ticket{grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0}.main-all-ticket-list .content-view-list-ticket table{width:100%}.main-all-ticket-list .content-view-list-ticket table thead{position:sticky;top:-1px;z-index:999}app-list-preview{width:100%}::ng-deep .mat-tab-label-active{background:#b6d1cd;opacity:1!important}::ng-deep .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left{color:#171f26;font: 18px/20px Nexa Text;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count{color:#171f26;font: 17px/20px Nexa Text Bold;letter-spacing:0px;text-align:left}.page-title-container{display:flex;margin-right:48px}.page-title{text-align:left;font: 700 32px/30px Nexa Text Bold;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search{margin-left:auto;position:relative;width:400px}.page-search mat-icon{left:18%;margin-top:10px;position:absolute}.page-search img{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab{padding-left:48px;padding-right:48px}.detail-view-ticket{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search mat-icon{left:16%}}.ticket-list{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list::-webkit-scrollbar{width:5px}.ticket-list::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active,.site-view-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active{background-image:none!important;color:#171f26!important}::ng-deep .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}::ng-deep .mat-tab-header .mat-tab-label-active{background:transparent}::ng-deep .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}::ng-deep lib-onboarding-table{background-color:red!important}::ng-deep lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container{position:relative;padding:30px}.onboarding-list-container .header-top{display:flex;align-items:center;justify-content:space-between;padding:15px 0}.onboarding-list-container .title-table{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container .add-onboarding{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px}.onboarding-list-container .list-title ul li{padding-bottom:10px;cursor:pointer}.onboarding-list-container .list-title ul li.active{border-bottom:4px solid #3c4252}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}::ng-deep .right-action{display:flex;align-items:center}\n"] }]
        }], function () { return [{ type: OnboardingService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i1$1.MatDialog }]; }, null);
})();

class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoadingComponent, selectors: [["lib-loading"]], decls: 13, vars: 0, consts: [[1, "lds-spinner"]], template: function LoadingComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "div")(2, "div")(3, "div")(4, "div")(5, "div")(6, "div")(7, "div")(8, "div")(9, "div")(10, "div")(11, "div")(12, "div");
            i0.ɵɵelementEnd();
        }
    }, styles: [".lds-spinner[_ngcontent-%COMP%]{color:official;display:inline-block;position:relative;width:20px;height:20px}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform-origin:34px 15px;animation:lds-spinner 1.2s linear infinite}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{content:\" \";display:block;position:absolute;top:4px;left:33px;width:2px;height:6px;border-radius:20%;background:#F3A124}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){transform:rotate(0);animation-delay:-1.1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){transform:rotate(30deg);animation-delay:-1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){transform:rotate(60deg);animation-delay:-.9s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){transform:rotate(90deg);animation-delay:-.8s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5){transform:rotate(120deg);animation-delay:-.7s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6){transform:rotate(150deg);animation-delay:-.6s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7){transform:rotate(180deg);animation-delay:-.5s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8){transform:rotate(210deg);animation-delay:-.4s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9){transform:rotate(240deg);animation-delay:-.3s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10){transform:rotate(270deg);animation-delay:-.2s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11){transform:rotate(300deg);animation-delay:-.1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(12){transform:rotate(330deg);animation-delay:0s}@keyframes lds-spinner{0%{opacity:1}to{opacity:0}}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingComponent, [{
            type: Component,
            args: [{ selector: 'lib-loading', template: "<div class=\"lds-spinner\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n</div>", styles: [".lds-spinner{color:official;display:inline-block;position:relative;width:20px;height:20px}.lds-spinner div{transform-origin:34px 15px;animation:lds-spinner 1.2s linear infinite}.lds-spinner div:after{content:\" \";display:block;position:absolute;top:4px;left:33px;width:2px;height:6px;border-radius:20%;background:#F3A124}.lds-spinner div:nth-child(1){transform:rotate(0);animation-delay:-1.1s}.lds-spinner div:nth-child(2){transform:rotate(30deg);animation-delay:-1s}.lds-spinner div:nth-child(3){transform:rotate(60deg);animation-delay:-.9s}.lds-spinner div:nth-child(4){transform:rotate(90deg);animation-delay:-.8s}.lds-spinner div:nth-child(5){transform:rotate(120deg);animation-delay:-.7s}.lds-spinner div:nth-child(6){transform:rotate(150deg);animation-delay:-.6s}.lds-spinner div:nth-child(7){transform:rotate(180deg);animation-delay:-.5s}.lds-spinner div:nth-child(8){transform:rotate(210deg);animation-delay:-.4s}.lds-spinner div:nth-child(9){transform:rotate(240deg);animation-delay:-.3s}.lds-spinner div:nth-child(10){transform:rotate(270deg);animation-delay:-.2s}.lds-spinner div:nth-child(11){transform:rotate(300deg);animation-delay:-.1s}.lds-spinner div:nth-child(12){transform:rotate(330deg);animation-delay:0s}@keyframes lds-spinner{0%{opacity:1}to{opacity:0}}\n"] }]
        }], function () { return []; }, null);
})();

;
const onBoardingRoutes = [
    {
        path: 'onboarding',
        component: OnboardingComponent,
        children: [
            {
                path: 'template/:id',
                component: TemplateProfileCreateComponent,
                canDeactivate: [CanDeactivateGuard],
            },
            {
                path: 'template',
                component: TemplateProfileListComponent
            },
            {
                path: 'requests',
                component: OnboardingListComponent
            },
            {
                path: 'requests/:templateId/:onboardingId',
                component: OnboardingCreateComponent
            }
        ]
    },
    // { path: '', redirectTo: '/profil-list', pathMatch: 'full' },
];
class OnboardingModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('OnboardingModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: OnboardingModule,
            providers: [
                { provide: '__NgxOnboarding__', useValue: config },
                OnboardingService
            ]
        };
    }
}
OnboardingModule.ɵfac = function OnboardingModule_Factory(t) { return new (t || OnboardingModule)(i0.ɵɵinject(OnboardingModule, 12)); };
OnboardingModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: OnboardingModule });
OnboardingModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [OnboardingService, CanDeactivateGuard, MatDatepickerModule], imports: [[
            FormsModule,
            MatFormFieldModule,
            MatButtonModule,
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            MatCheckboxModule,
            MatIconModule,
            MatSelectModule,
            MatInputModule,
            MatChipsModule,
            MatGridListModule,
            MatRadioModule,
            MatPaginatorModule,
            CdkTableModule,
            MatSortModule,
            MatTableModule,
            RouterModule.forChild(onBoardingRoutes),
            ScrollToModule$1.forRoot(),
            DragDropModule,
            MatCardModule,
            MatDialogModule,
            MatStepperModule,
            MatProgressBarModule,
            MatTooltipModule,
            TableModule,
            MatTabsModule,
            NgxIntlTelInputModule,
            MatSlideToggleModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatBottomSheetModule
        ], HttpClientModule,
        RouterModule,
        MatTabsModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingModule, [{
            type: NgModule,
            args: [{
                    declarations: [
                        MaterialElevationDirective,
                        OnboardingComponent,
                        TemplateProfileCreateComponent,
                        OnboardingCreateComponent,
                        SubOnboardingCreateComponent,
                        TemplateProfileListComponent,
                        SubTemplateProfileComponent,
                        ExitConfirmComponent,
                        OnboardingListComponent,
                        TypeComponent,
                        OnboardingTableComponent,
                        DialogCreateTemplateComponent,
                        DialogCreateOnboardingComponent,
                        OnboardingDetailComponent,
                        LoadingComponent,
                        LoadingPageComponent,
                        DialogConfirmation,
                        BottomSheet,
                        NoDataComponent,
                    ],
                    imports: [
                        FormsModule,
                        MatFormFieldModule,
                        MatButtonModule,
                        CommonModule,
                        BrowserModule,
                        BrowserAnimationsModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCheckboxModule,
                        MatIconModule,
                        MatSelectModule,
                        MatInputModule,
                        MatChipsModule,
                        MatGridListModule,
                        MatRadioModule,
                        MatPaginatorModule,
                        CdkTableModule,
                        MatSortModule,
                        MatTableModule,
                        RouterModule.forChild(onBoardingRoutes),
                        ScrollToModule$1.forRoot(),
                        DragDropModule,
                        MatCardModule,
                        MatDialogModule,
                        MatStepperModule,
                        MatProgressBarModule,
                        MatTooltipModule,
                        TableModule,
                        MatTabsModule,
                        NgxIntlTelInputModule,
                        MatSlideToggleModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatBottomSheetModule
                    ],
                    providers: [OnboardingService, CanDeactivateGuard, MatDatepickerModule],
                    entryComponents: [ExitConfirmComponent, TypeComponent, DialogCreateTemplateComponent, DialogCreateOnboardingComponent, DialogConfirmation],
                    exports: [
                        OnboardingComponent,
                        HttpClientModule,
                        TemplateProfileCreateComponent,
                        TemplateProfileListComponent,
                        OnboardingListComponent,
                        OnboardingCreateComponent,
                        DialogCreateOnboardingComponent,
                        RouterModule,
                        MatTabsModule
                    ]
                }]
        }], function () {
        return [{ type: OnboardingModule, decorators: [{
                        type: Optional
                    }, {
                        type: SkipSelf
                    }] }];
    }, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OnboardingModule, { declarations: [MaterialElevationDirective,
            OnboardingComponent,
            TemplateProfileCreateComponent,
            OnboardingCreateComponent,
            SubOnboardingCreateComponent,
            TemplateProfileListComponent,
            SubTemplateProfileComponent,
            ExitConfirmComponent,
            OnboardingListComponent,
            TypeComponent,
            OnboardingTableComponent,
            DialogCreateTemplateComponent,
            DialogCreateOnboardingComponent,
            OnboardingDetailComponent,
            LoadingComponent,
            LoadingPageComponent,
            DialogConfirmation,
            BottomSheet,
            NoDataComponent], imports: [FormsModule,
            MatFormFieldModule,
            MatButtonModule,
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            MatCheckboxModule,
            MatIconModule,
            MatSelectModule,
            MatInputModule,
            MatChipsModule,
            MatGridListModule,
            MatRadioModule,
            MatPaginatorModule,
            CdkTableModule,
            MatSortModule,
            MatTableModule, i2.RouterModule, i5$2.ScrollToModule, DragDropModule,
            MatCardModule,
            MatDialogModule,
            MatStepperModule,
            MatProgressBarModule,
            MatTooltipModule,
            TableModule,
            MatTabsModule,
            NgxIntlTelInputModule,
            MatSlideToggleModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatBottomSheetModule], exports: [OnboardingComponent,
            HttpClientModule,
            TemplateProfileCreateComponent,
            TemplateProfileListComponent,
            OnboardingListComponent,
            OnboardingCreateComponent,
            DialogCreateOnboardingComponent,
            RouterModule,
            MatTabsModule] });
})();

/** Default values for Component Input */
const DEFAULTS = {
    target: null,
    action: 'click',
    duration: 650,
    easing: 'easeInOutQuad',
    offset: 0,
    offsetMap: new Map()
};
/** Easing Colleciton */
const EASING = {
    easeInQuad: (time) => {
        return time * time;
    },
    easeOutQuad: (time) => {
        return time * (2 - time);
    },
    easeInOutQuad: (time) => {
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
    },
    easeInCubic: (time) => {
        return time * time * time;
    },
    easeOutCubic: (time) => {
        return (--time) * time * time + 1;
    },
    easeInOutCubic: (time) => {
        return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
    },
    easeInQuart: (time) => {
        return time * time * time * time;
    },
    easeOutQuart: (time) => {
        return 1 - (--time) * time * time * time;
    },
    easeInOutQuart: (time) => {
        return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time;
    },
    easeInQuint: (time) => {
        return time * time * time * time * time;
    },
    easeOutQuint: (time) => {
        return 1 + (--time) * time * time * time * time;
    },
    easeInOutQuint: (time) => {
        return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time;
    },
    easeOutElastic: (time) => {
        return Math.pow(2, -10 * time) * Math.sin((time - 1 / 4) * (2 * Math.PI) / 1) + 1;
    }
};
/**
 * Set of allowed events as triggers
 * for the Animation to start.
 */
const EVENTS = [
    'click',
    'mouseenter',
    'mouseover',
    'mousedown',
    'mouseup',
    'dblclick',
    'contextmenu',
    'wheel',
    'mouseleave',
    'mouseout'
];
/**
 * Strip hash (#) from value.
 *
 * @param value 				The given string value
 * @returns 					The stripped string value
 */
function stripHash(value) {
    return value.substring(0, 1) === '#' ? value.substring(1) : value;
}
/**
 * Test if a given value is a string.
 *
 * @param value 					The given value
 * @returns 						Whether the given value is a string
 */
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}
/**
 * Test if a given Element is the Window.
 *
 * @param container 				The given Element
 * @returns 						Whether the given Element is Window
 */
function isWindow(container) {
    return container === window;
}
/**
 * Test if a given value is of type ElementRef.
 *
 * @param value 					The given value
 * @returns               Whether the given value is a number
 */
function isElementRef(value) {
    return value instanceof ElementRef;
}
/**
 * Whether or not the given value is a Native Element.
 *
 * @param value           The given value
 * @returns               Whether or not the value is a Native Element
 */
function isNativeElement(value) {
    return value instanceof HTMLElement;
}
/**
 * Test if a given value is type number.
 *
 * @param value 					The given value
 * @returns 						Whether the given value is a number
 */
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

/** Scroll To Animation */
class ScrollToAnimation {
    /**
     * Class Constructor.
     *
     * @param container            The Container
     * @param listenerTarget       The Element that listens for DOM Events
     * @param isWindow             Whether or not the listener is the Window
     * @param to                   Position to scroll to
     * @param options              Additional options for scrolling
     * @param isBrowser            Whether or not execution runs in the browser
     *                              (as opposed to the server)
     */
    constructor(container, listenerTarget, isWindow, to, options, isBrowser) {
        this.container = container;
        this.listenerTarget = listenerTarget;
        this.isWindow = isWindow;
        this.to = to;
        this.options = options;
        this.isBrowser = isBrowser;
        /** Recursively loop over the Scroll Animation */
        this.loop = () => {
            this.timeLapsed += this.tick;
            this.percentage = (this.timeLapsed / this.options.duration);
            this.percentage = (this.percentage > 1) ? 1 : this.percentage;
            // Position Update
            this.position = this.startPosition +
                ((this.startPosition - this.to <= 0 ? 1 : -1) *
                    this.distance *
                    EASING[this.options.easing](this.percentage));
            if (this.lastPosition !== null && this.position === this.lastPosition) {
                this.stop();
            }
            else {
                this.source$.next(this.position);
                this.isWindow
                    ? this.listenerTarget.scrollTo(0, Math.floor(this.position))
                    : this.container.scrollTop = Math.floor(this.position);
                this.lastPosition = this.position;
            }
        };
        this.tick = 16;
        this.interval = null;
        this.lastPosition = null;
        this.timeLapsed = 0;
        this.windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (!this.container) {
            this.startPosition = this.windowScrollTop;
        }
        else {
            this.startPosition = this.isWindow ? this.windowScrollTop : this.container.scrollTop;
        }
        // Correction for Starting Position of nested HTML Elements
        if (this.container && !this.isWindow) {
            this.to = this.to - this.container.getBoundingClientRect().top + this.startPosition;
        }
        // Set Distance
        const directionalDistance = this.startPosition - this.to;
        this.distance = this.container ? Math.abs(this.startPosition - this.to) : this.to;
        this.mappedOffset = this.options.offset;
        // Set offset from Offset Map
        if (this.isBrowser) {
            this.options
                .offsetMap
                .forEach((value, key) => this.mappedOffset = window.innerWidth > key ? value : this.mappedOffset);
        }
        this.distance += this.mappedOffset * (directionalDistance <= 0 ? 1 : -1);
        this.source$ = new ReplaySubject();
    }
    /**
     * Start the new Scroll Animation.
     *
     * @returns         Observable containing a number
     */
    start() {
        clearInterval(this.interval);
        this.interval = setInterval(this.loop, this.tick);
        return this.source$.asObservable();
    }
    /**
     * Stop the current Scroll Animation Loop.
     *
     * @param force          Force to stop the Animation Loop
     * @returns               Void
     */
    stop() {
        clearInterval(this.interval);
        this.interval = null;
        this.source$.complete();
    }
}

/**
 * The Scroll To Service handles starting, interrupting
 * and ending the actual Scroll Animation. It provides
 * some utilities to find the proper HTML Element on a
 * given page to setup Event Listeners and calculate
 * distances for the Animation.
 */
class ScrollToService {
    /**
     * Construct and setup required paratemeters.
     *
     * @param document         A Reference to the Document
     * @param platformId       Angular Platform ID
     */
    constructor(document, platformId) {
        this.document = document;
        this.platformId = platformId;
        this.interruptiveEvents = ['mousewheel', 'DOMMouseScroll', 'touchstart'];
    }
    /**
     * Target an Element to scroll to. Notice that the `TimeOut` decorator
     * ensures the executing to take place in the next Angular lifecycle.
     * This allows for scrolling to elements that are e.g. initially hidden
     * by means of `*ngIf`, but ought to be scrolled to eventually.
     *
     * @todo type 'any' in Observable should become custom type like 'ScrollToEvent' (base class), see issue comment:
     *  - https://github.com/nicky-lenaers/ngx-scroll-to/issues/10#issuecomment-317198481
     *
     * @param options         Configuration Object
     * @returns               Observable
     */
    scrollTo(options) {
        if (!isPlatformBrowser(this.platformId)) {
            return new ReplaySubject().asObservable();
        }
        return this.start(options);
    }
    /**
     * Start a new Animation.
     *
     * @todo Emit proper events from subscription
     *
     * @param options         Configuration Object
     * @returns               Observable
     */
    start(options) {
        // Merge config with default values
        const mergedConfigOptions = Object.assign(Object.assign({}, DEFAULTS), options);
        if (this.animation) {
            this.animation.stop();
        }
        const targetNode = this.getNode(mergedConfigOptions.target);
        if (mergedConfigOptions.target && !targetNode) {
            return throwError('Unable to find Target Element');
        }
        const container = this.getContainer(mergedConfigOptions, targetNode);
        if (mergedConfigOptions.container && !container) {
            return throwError('Unable to find Container Element');
        }
        const listenerTarget = this.getListenerTarget(container) || window;
        let to = container ? container.getBoundingClientRect().top : 0;
        if (targetNode) {
            to = isWindow(listenerTarget) ?
                window.scrollY + targetNode.getBoundingClientRect().top :
                targetNode.getBoundingClientRect().top;
        }
        // Create Animation
        this.animation = new ScrollToAnimation(container, listenerTarget, isWindow(listenerTarget), to, mergedConfigOptions, isPlatformBrowser(this.platformId));
        const onInterrupt = () => this.animation.stop();
        this.addInterruptiveEventListeners(listenerTarget, onInterrupt);
        // Start Animation
        const animation$ = this.animation.start();
        this.subscribeToAnimation(animation$, listenerTarget, onInterrupt);
        return animation$;
    }
    /**
     * Subscribe to the events emitted from the Scrolling
     * Animation. Events might be used for e.g. unsubscribing
     * once finished.
     *
     * @param animation$              The Animation Observable
     * @param listenerTarget          The Listener Target for events
     * @param onInterrupt             The handler for Interruptive Events
     * @returns                       Void
     */
    subscribeToAnimation(animation$, listenerTarget, onInterrupt) {
        const subscription = animation$
            .subscribe(() => {
        }, () => {
        }, () => {
            this.removeInterruptiveEventListeners(this.interruptiveEvents, listenerTarget, onInterrupt);
            subscription.unsubscribe();
        });
    }
    /**
     * Get the container HTML Element in which
     * the scrolling should happen.
     *
     * @param options         The Merged Configuration Object
     * @param targetNode    the targeted HTMLElement
     */
    getContainer(options, targetNode) {
        let container = null;
        if (options.container) {
            container = this.getNode(options.container, true);
        }
        else if (targetNode) {
            container = this.getFirstScrollableParent(targetNode);
        }
        return container;
    }
    /**
     * Add listeners for the Animation Interruptive Events
     * to the Listener Target.
     *
     * @param events            List of events to listen to
     * @param listenerTarget    Target to attach the listener on
     * @param handler           Handler for when the listener fires
     * @returns                 Void
     */
    addInterruptiveEventListeners(listenerTarget, handler) {
        if (!listenerTarget) {
            listenerTarget = window;
        }
        this.interruptiveEvents
            .forEach(event => listenerTarget
            .addEventListener(event, handler, this.supportPassive() ? { passive: true } : false));
    }
    /**
     * Feature-detect support for passive event listeners.
     *
     * @returns       Whether or not passive event listeners are supported
     */
    supportPassive() {
        let supportsPassive = false;
        try {
            const opts = Object.defineProperty({}, 'passive', {
                get: () => {
                    supportsPassive = true;
                }
            });
            window.addEventListener('testPassive', null, opts);
            window.removeEventListener('testPassive', null, opts);
        }
        catch (e) {
        }
        return supportsPassive;
    }
    /**
     * Remove listeners for the Animation Interrupt Event from
     * the Listener Target. Specifying the correct handler prevents
     * memory leaks and makes the allocated memory available for
     * Garbage Collection.
     *
     * @param events            List of Interruptive Events to remove
     * @param listenerTarget    Target to attach the listener on
     * @param handler           Handler for when the listener fires
     * @returns                 Void
     */
    removeInterruptiveEventListeners(events, listenerTarget, handler) {
        if (!listenerTarget) {
            listenerTarget = window;
        }
        events.forEach(event => listenerTarget.removeEventListener(event, handler));
    }
    /**
     * Find the first scrollable parent Node of a given
     * Element. The DOM Tree gets searched upwards
     * to find this first scrollable parent. Parents might
     * be ignored by CSS styles applied to the HTML Element.
     *
     * @param nativeElement     The Element to search the DOM Tree upwards from
     * @returns                 The first scrollable parent HTML Element
     */
    getFirstScrollableParent(nativeElement) {
        let style = window.getComputedStyle(nativeElement);
        const overflowRegex = /(auto|scroll|overlay)/;
        if (style.position === 'fixed') {
            return null;
        }
        let parent = nativeElement;
        while (parent.parentElement) {
            parent = parent.parentElement;
            style = window.getComputedStyle(parent);
            if (style.position === 'absolute'
                || style.overflow === 'hidden'
                || style.overflowY === 'hidden') {
                continue;
            }
            if (overflowRegex.test(style.overflow + style.overflowY)
                || parent.tagName === 'BODY') {
                return parent;
            }
        }
        return null;
    }
    /**
     * Get the Target Node to scroll to.
     *
     * @param id              The given ID of the node, either a string or
     *                        an element reference
     * @param allowBodyTag    Indicate whether or not the Document Body is
     *                        considered a valid Target Node
     * @returns               The Target Node to scroll to
     */
    getNode(id, allowBodyTag = false) {
        let targetNode;
        if (isString(id)) {
            if (allowBodyTag && (id === 'body' || id === 'BODY')) {
                targetNode = this.document.body;
            }
            else {
                targetNode = this.document.getElementById(stripHash(id));
            }
        }
        else if (isNumber(id)) {
            targetNode = this.document.getElementById(String(id));
        }
        else if (isElementRef(id)) {
            targetNode = id.nativeElement;
        }
        else if (isNativeElement(id)) {
            targetNode = id;
        }
        return targetNode;
    }
    /**
     * Retrieve the Listener target. This Listener Target is used
     * to attach Event Listeners on. In case of the target being
     * the Document Body, we need the actual `window` to listen
     * for events.
     *
     * @param container           The HTML Container element
     * @returns                   The Listener Target to attach events on
     */
    getListenerTarget(container) {
        if (!container) {
            return null;
        }
        return this.isDocumentBody(container) ? window : container;
    }
    /**
     * Test if a given HTML Element is the Document Body.
     *
     * @param element             The given HTML Element
     * @returns                   Whether or not the Element is the
     *                            Document Body Element
     */
    isDocumentBody(element) {
        return element.tagName.toUpperCase() === 'BODY';
    }
}
ScrollToService.ɵfac = function ScrollToService_Factory(t) { return new (t || ScrollToService)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(PLATFORM_ID)); };
ScrollToService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ScrollToService, factory: ScrollToService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScrollToService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [DOCUMENT]
                    }] }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [PLATFORM_ID]
                    }] }];
    }, null);
})();

class ScrollToDirective {
    constructor(elementRef, scrollToService, renderer2) {
        this.elementRef = elementRef;
        this.scrollToService = scrollToService;
        this.renderer2 = renderer2;
        this.ngxScrollTo = DEFAULTS.target;
        this.ngxScrollToEvent = DEFAULTS.action;
        this.ngxScrollToDuration = DEFAULTS.duration;
        this.ngxScrollToEasing = DEFAULTS.easing;
        this.ngxScrollToOffset = DEFAULTS.offset;
        this.ngxScrollToOffsetMap = DEFAULTS.offsetMap;
    }
    /**
     * Angular Lifecycle Hook - After View Init
     *
     * @todo Implement Subscription for Events
     *
     * @returns void
     */
    ngAfterViewInit() {
        // Test Event Support
        if (EVENTS.indexOf(this.ngxScrollToEvent) === -1) {
            throw new Error(`Unsupported Event '${this.ngxScrollToEvent}'`);
        }
        // Listen for the trigger...
        this.renderer2.listen(this.elementRef.nativeElement, this.ngxScrollToEvent, (event) => {
            this.options = {
                target: this.ngxScrollTo,
                duration: this.ngxScrollToDuration,
                easing: this.ngxScrollToEasing,
                offset: this.ngxScrollToOffset,
                offsetMap: this.ngxScrollToOffsetMap
            };
            this.scrollToService.scrollTo(this.options);
        });
    }
}
ScrollToDirective.ɵfac = function ScrollToDirective_Factory(t) { return new (t || ScrollToDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(ScrollToService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
ScrollToDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ScrollToDirective, selectors: [["", "ngxScrollTo", ""]], inputs: { ngxScrollTo: "ngxScrollTo", ngxScrollToEvent: "ngxScrollToEvent", ngxScrollToDuration: "ngxScrollToDuration", ngxScrollToEasing: "ngxScrollToEasing", ngxScrollToOffset: "ngxScrollToOffset", ngxScrollToOffsetMap: "ngxScrollToOffsetMap" } });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScrollToDirective, [{
            type: Directive,
            args: [{
                    selector: '[ngxScrollTo]'
                }]
        }], function () { return [{ type: i0.ElementRef }, { type: ScrollToService }, { type: i0.Renderer2 }]; }, { ngxScrollTo: [{
                type: Input
            }], ngxScrollToEvent: [{
                type: Input
            }], ngxScrollToDuration: [{
                type: Input
            }], ngxScrollToEasing: [{
                type: Input
            }], ngxScrollToOffset: [{
                type: Input
            }], ngxScrollToOffsetMap: [{
                type: Input
            }] });
})();

/** Scroll To Module */
class ScrollToModule {
}
ScrollToModule.ɵfac = function ScrollToModule_Factory(t) { return new (t || ScrollToModule)(); };
ScrollToModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ScrollToModule });
ScrollToModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScrollToModule, [{
            type: NgModule,
            args: [{
                    declarations: [
                        ScrollToDirective
                    ],
                    providers: [],
                    exports: [
                        ScrollToDirective
                    ]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ScrollToModule, { declarations: [ScrollToDirective], exports: [ScrollToDirective] }); })();

/*
 * Public API Surface of onboarding
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DialogConfirmation, DialogCreateOnboardingComponent, OnboardingComponent, OnboardingCreateComponent, OnboardingListComponent, OnboardingModule, OnboardingService, ScrollToDirective, ScrollToModule, ScrollToService, TemplateProfileCreateComponent, TemplateProfileListComponent, onBoardingRoutes };
//# sourceMappingURL=onboarding.mjs.map
