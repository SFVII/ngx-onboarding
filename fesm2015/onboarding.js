import { __awaiter, __rest } from 'tslib';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { EventEmitter, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelement, Component, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵproperty, ɵɵadvance, ɵɵtextInterpolate, ɵɵlistener, ɵɵtemplate, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵnextContext, ɵɵclassMap, ɵɵtextInterpolate1, ɵɵpureFunction0, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵprojectionDef, ɵɵprojection, Input, Output, ɵɵstyleProp, ɵɵreference, ElementRef, Renderer2, ɵɵdefineDirective, ɵɵNgOnChangesFeature, Directive, HostListener, ɵɵpipe, ɵɵpureFunction1, ɵɵpipeBind2, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ViewChild, ɵɵtextInterpolate2, ɵɵclassProp, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Router, RouterOutlet, ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { moveItemInArray, transferArrayItem, CdkDropListGroup, CdkDropList, CdkDrag, CdkDragHandle, DragDropModule } from '@angular/cdk/drag-drop';
import { DefaultValueAccessor, NgControlStatus, NgModel, RequiredValidator, FormControl, Validators, FormBuilder, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatLabel, MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { NativeElementInjectorDirective, CountryISO, PhoneNumberFormat, NgxIntlTelInputComponent, NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle, DatePipe, CommonModule } from '@angular/common';
import { MatButton, MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ScrollToDirective, ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MatCheckbox, MatCheckboxRequiredValidator, MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipList, MatChipInput, MatChip, MatChipRemove, MatChipsModule } from '@angular/material/chips';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { CdkTableModule } from '@angular/cdk/table';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import { TableComponent, CellsComponentList, CoreMatTable, TableModule } from 'table';
import { MatTabGroup, MatTab, MatTabLabel, MatTabContent, MatTabsModule } from '@angular/material/tabs';

class OnboardingService {
    constructor(config, http) {
        this.http = http;
        this.canExit$ = new Subject();
        this.token = new BehaviorSubject(null);
        this._token = this.token.asObservable();
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
OnboardingService.ɵfac = function OnboardingService_Factory(t) { return new (t || OnboardingService)(ɵɵinject('__NgxOnboarding__'), ɵɵinject(HttpClient)); };
OnboardingService.ɵprov = ɵɵdefineInjectable({ token: OnboardingService, factory: OnboardingService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['__NgxOnboarding__']
            }] }, { type: HttpClient }]; }, null); })();

// @ts-ignore
class OnboardingComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
        if (this.router.url.indexOf('onboarding') > -1) {
            this.service.mainPath = this.router.url.split('/onboarding')[0] + '/onboarding';
            console.log('--------------------------', this.service.mainPath);
        }
    }
}
OnboardingComponent.ɵfac = function OnboardingComponent_Factory(t) { return new (t || OnboardingComponent)(ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(Router)); };
OnboardingComponent.ɵcmp = ɵɵdefineComponent({ type: OnboardingComponent, selectors: [["ngx-onboarding"]], decls: 1, vars: 0, template: function OnboardingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "router-outlet");
    } }, directives: [RouterOutlet], styles: [".main[_ngcontent-%COMP%]{background-color:red!important}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-onboarding',
                templateUrl: 'onboarding.component.html',
                styleUrls: ['../../assets/main.scss']
            }]
    }], function () { return [{ type: OnboardingService }, { type: Router }]; }, null); })();

function DialogCreateTemplateComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    ɵɵproperty("value", tag_r1);
    ɵɵadvance(1);
    ɵɵtextInterpolate(tag_r1);
} }
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
        return !(this.profil.Name !== "" && this.profil.Tags !== "");
    }
}
DialogCreateTemplateComponent.ɵfac = function DialogCreateTemplateComponent_Factory(t) { return new (t || DialogCreateTemplateComponent)(ɵɵdirectiveInject(MAT_DIALOG_DATA), ɵɵdirectiveInject(MatDialogRef), ɵɵdirectiveInject(OnboardingService)); };
DialogCreateTemplateComponent.ɵcmp = ɵɵdefineComponent({ type: DialogCreateTemplateComponent, selectors: [["lib-dialog-create-template"]], decls: 17, vars: 4, consts: [[1, "title"], ["appearance", "outline", 1, "full-width"], ["type", "text", "matInput", "", "placeholder", "Ex. Manager", 3, "ngModel", "ngModelChange"], ["required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-content"], ["mat-raised-button", "", 1, "create-profil", 3, "disabled", "click"], ["mat-raised-button", "", 1, "abandon-profil", 3, "click"], [3, "value"]], template: function DialogCreateTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-dialog-content");
        ɵɵelementStart(1, "h3", 0);
        ɵɵtext(2, "Cr\u00E9ation d\u2019un nouveau profil");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-form-field", 1);
        ɵɵelementStart(4, "mat-label");
        ɵɵtext(5, "Nom de votre nouveau profil");
        ɵɵelementEnd();
        ɵɵelementStart(6, "input", 2);
        ɵɵlistener("ngModelChange", function DialogCreateTemplateComponent_Template_input_ngModelChange_6_listener($event) { return ctx.profil.Name = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-form-field", 1);
        ɵɵelementStart(8, "mat-label");
        ɵɵtext(9, "Tags");
        ɵɵelementEnd();
        ɵɵelementStart(10, "mat-select", 3);
        ɵɵlistener("ngModelChange", function DialogCreateTemplateComponent_Template_mat_select_ngModelChange_10_listener($event) { return ctx.profil.Tags = $event; });
        ɵɵtemplate(11, DialogCreateTemplateComponent_mat_option_11_Template, 2, 2, "mat-option", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "div", 5);
        ɵɵelementStart(13, "button", 6);
        ɵɵlistener("click", function DialogCreateTemplateComponent_Template_button_click_13_listener() { return ctx.createProfil(); });
        ɵɵtext(14, " Cr\u00E9er profil ");
        ɵɵelementEnd();
        ɵɵelementStart(15, "button", 7);
        ɵɵlistener("click", function DialogCreateTemplateComponent_Template_button_click_15_listener() { return ctx.close(); });
        ɵɵtext(16, " Abandonner ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(6);
        ɵɵproperty("ngModel", ctx.profil.Name);
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.profil.Tags);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.tags);
        ɵɵadvance(2);
        ɵɵproperty("disabled", ctx.disabled());
    } }, directives: [MatDialogContent, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, NgModel, NativeElementInjectorDirective, MatSelect, RequiredValidator, NgForOf, MatButton, MatOption], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:555px;min-width:555px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content[_ngcontent-%COMP%]   .abandon-profil[_ngcontent-%COMP%]{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px}mat-dialog-content[_ngcontent-%COMP%]   .create-profil[_ngcontent-%COMP%]{background-color:#171f26;border:1px solid #171f26;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, mat-dialog-content[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{opacity:.5}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DialogCreateTemplateComponent, [{
        type: Component,
        args: [{
                selector: 'lib-dialog-create-template',
                templateUrl: './dialog-create-template.component.html',
                styleUrls: ['./dialog-create-template.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: MatDialogRef }, { type: OnboardingService }]; }, null); })();

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
ExitConfirmComponent.ɵfac = function ExitConfirmComponent_Factory(t) { return new (t || ExitConfirmComponent)(ɵɵdirectiveInject(MAT_DIALOG_DATA), ɵɵdirectiveInject(MatDialogRef), ɵɵdirectiveInject(OnboardingService)); };
ExitConfirmComponent.ɵcmp = ɵɵdefineComponent({ type: ExitConfirmComponent, selectors: [["lib-exit-confirm"]], decls: 9, vars: 0, consts: [[1, "header"], ["mat-button", "", 1, "nowboard-btn", 2, "margin-top", "10px", 3, "click"], ["mat-button", "", 1, "cancel_btn", 3, "click"]], template: function ExitConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-dialog-content");
        ɵɵelementStart(1, "div", 0);
        ɵɵtext(2, " Attention ! ");
        ɵɵelementEnd();
        ɵɵelementStart(3, "p");
        ɵɵtext(4, "Toutes vos donn\u00E9es seront perdues, \u00EAtes-vous certain de vouloir continuer ?");
        ɵɵelementEnd();
        ɵɵelementStart(5, "button", 1);
        ɵɵlistener("click", function ExitConfirmComponent_Template_button_click_5_listener() { return ctx.confirm(); });
        ɵɵtext(6, " Confirmer ");
        ɵɵelementEnd();
        ɵɵelementStart(7, "button", 2);
        ɵɵlistener("click", function ExitConfirmComponent_Template_button_click_7_listener() { return ctx.cancel(); });
        ɵɵtext(8, " Annuler ");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatDialogContent, MatButton], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column!important;justify-content:center;align-items:center}mat-dialog-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{color:#171f26;font:900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .nowboard-btn[_ngcontent-%COMP%]{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#171f26;font:18px/24px nexa,Text;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .cancel_btn[_ngcontent-%COMP%]{background-color:transparent!important;margin-top:10px}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExitConfirmComponent, [{
        type: Component,
        args: [{
                selector: 'lib-exit-confirm',
                templateUrl: './exit-confirm.component.html',
                styleUrls: ['./exit-confirm.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: MatDialogRef }, { type: OnboardingService }]; }, null); })();

function TypeComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 1);
    ɵɵlistener("click", function TypeComponent_button_1_Template_button_click_0_listener() { ɵɵrestoreView(_r5); const item_r3 = ctx.$implicit; const ctx_r4 = ɵɵnextContext(); return ctx_r4.onSelect(item_r3.value); });
    ɵɵtext(1);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.selectedType === item_r3.value ? "active" : "");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r3.label, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r3.icon);
} }
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
TypeComponent.ɵfac = function TypeComponent_Factory(t) { return new (t || TypeComponent)(ɵɵdirectiveInject(MAT_DIALOG_DATA), ɵɵdirectiveInject(MatDialogRef), ɵɵdirectiveInject(OnboardingService)); };
TypeComponent.ɵcmp = ɵɵdefineComponent({ type: TypeComponent, selectors: [["lib-type"]], decls: 2, vars: 1, consts: [["mat-button", "", "class", "type-btn", "style", "margin-top: 10px", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "type-btn", 2, "margin-top", "10px", 3, "click"]], template: function TypeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-dialog-content");
        ɵɵtemplate(1, TypeComponent_button_1_Template, 4, 4, "button", 0);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.typeList);
    } }, directives: [MatDialogContent, NgForOf, MatButton, MatIcon], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]{background:#e5e8ee;border-radius:4px;margin:5px;height:48px}mat-dialog-content[_ngcontent-%COMP%]   .type-btn.active[_ngcontent-%COMP%], mat-dialog-content[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]:hover{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TypeComponent, [{
        type: Component,
        args: [{
                selector: 'lib-type',
                templateUrl: './type.component.html',
                styleUrls: ['./type.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: MatDialogRef }, { type: OnboardingService }]; }, null); })();

function SubTemplateProfileComponent_div_0_div_5_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const select_r299 = ctx.$implicit;
    ɵɵproperty("value", select_r299.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", select_r299.value, " ");
} }
const _c0 = function () { return { standalone: true }; };
function SubTemplateProfileComponent_div_0_div_5_mat_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r301 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-select", 11);
    ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_5_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { ɵɵrestoreView(_r301); const ctx_r300 = ɵɵnextContext(3); return ctx_r300.field.selector.value = $event; });
    ɵɵtemplate(1, SubTemplateProfileComponent_div_0_div_5_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r297 = ɵɵnextContext(3);
    ɵɵproperty("ngModel", ctx_r297.field.selector.value)("ngModelOptions", ɵɵpureFunction0(3, _c0));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r297.field.selector.defaultValue);
} }
const _c1 = function () { return { display: "inine-block" }; };
function SubTemplateProfileComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r303 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "mat-checkbox", 9);
    ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_5_Template_mat_checkbox_ngModelChange_1_listener($event) { ɵɵrestoreView(_r303); const ctx_r302 = ɵɵnextContext(2); return ctx_r302.field.value = $event; });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, SubTemplateProfileComponent_div_0_div_5_mat_select_3_Template, 2, 4, "mat-select", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r292 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r292.field.value)("ngModelOptions", ɵɵpureFunction0(5, _c0))("ngStyle", ctx_r292.field.selector && ɵɵpureFunction0(6, _c1));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r292.field.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r292.field.selector);
} }
function SubTemplateProfileComponent_div_0_div_6_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r307 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-checkbox", 16);
    ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_6_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { ɵɵrestoreView(_r307); const opt_r305 = ctx.$implicit; return opt_r305.checked = $event; });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const opt_r305 = ctx.$implicit;
    ɵɵproperty("checked", opt_r305.checked)("ngModel", opt_r305.checked)("ngModelOptions", ɵɵpureFunction0(4, _c0));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", opt_r305.value, " ");
} }
function SubTemplateProfileComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 14);
    ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_6_mat_checkbox_4_Template, 2, 5, "mat-checkbox", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r293 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r293.field.label);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r293.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_7_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-radio-button", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const opt_r309 = ctx.$implicit;
    ɵɵproperty("value", opt_r309.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", opt_r309.value, " ");
} }
function SubTemplateProfileComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r311 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "label", 17);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-radio-group", 18);
    ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_7_Template_mat_radio_group_ngModelChange_3_listener($event) { ɵɵrestoreView(_r311); const ctx_r310 = ɵɵnextContext(2); return ctx_r310.field.value = $event; });
    ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_7_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r294 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r294.field.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r294.field.value)("required", ctx_r294.field.isMandatory);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r294.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_8_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const opt_r313 = ctx.$implicit;
    ɵɵproperty("value", opt_r313.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate(opt_r313.value);
} }
function SubTemplateProfileComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r315 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 19);
    ɵɵelementStart(1, "mat-form-field", 20);
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-select", 21);
    ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_8_Template_mat_select_ngModelChange_4_listener($event) { ɵɵrestoreView(_r315); const ctx_r314 = ɵɵnextContext(2); return ctx_r314.field.value = $event; });
    ɵɵtemplate(5, SubTemplateProfileComponent_div_0_div_8_mat_option_5_Template, 2, 2, "mat-option", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r295 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r295.field.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r295.field.value)("ngModelOptions", ɵɵpureFunction0(4, _c0));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r295.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    const _r317 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 22);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 23);
    ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_mat_form_field_9_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r317); const ctx_r316 = ɵɵnextContext(2); return ctx_r316.field.value = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r296 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r296.field.label);
    ɵɵadvance(1);
    ɵɵproperty("type", ctx_r296.field.type)("ngModelOptions", ɵɵpureFunction0(4, _c0))("ngModel", ctx_r296.field.value);
} }
function SubTemplateProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r319 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵelementStart(1, "button", 2);
    ɵɵlistener("click", function SubTemplateProfileComponent_div_0_Template_button_click_1_listener($event) { ɵɵrestoreView(_r319); const ctx_r318 = ɵɵnextContext(); return ctx_r318.editBLock($event); });
    ɵɵelementStart(2, "mat-icon", 3);
    ɵɵtext(3, "settings");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerStart(4, 4);
    ɵɵtemplate(5, SubTemplateProfileComponent_div_0_div_5_Template, 4, 7, "div", 5);
    ɵɵtemplate(6, SubTemplateProfileComponent_div_0_div_6_Template, 5, 2, "div", 5);
    ɵɵtemplate(7, SubTemplateProfileComponent_div_0_div_7_Template, 5, 4, "div", 5);
    ɵɵtemplate(8, SubTemplateProfileComponent_div_0_div_8_Template, 6, 5, "div", 6);
    ɵɵtemplate(9, SubTemplateProfileComponent_div_0_mat_form_field_9_Template, 4, 5, "mat-form-field", 7);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r291 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵproperty("ngSwitch", ctx_r291.field.type);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "checkbox");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "checkbox_multiple");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "radio");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "select");
} }
const _c2 = [[["", 8, "child"]]];
const _c3 = [".child"];
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
        this.chipControl = new FormControl(new Set());
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentChip = "";
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
    getConditionValues() {
        this.onGetConditionValues.emit(true);
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
}
SubTemplateProfileComponent.ɵfac = function SubTemplateProfileComponent_Factory(t) { return new (t || SubTemplateProfileComponent)(); };
SubTemplateProfileComponent.ɵcmp = ɵɵdefineComponent({ type: SubTemplateProfileComponent, selectors: [["lib-sub-category"]], inputs: { field: "field", length: "length", i: "i", j: "j", conditionData: "conditionData" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckedDefault: "onCheckedDefault", onGetConditionValues: "onGetConditionValues", onEditBlock: "onEditBlock" }, ngContentSelectors: _c3, decls: 2, vars: 1, consts: [["class", "field-item", 4, "ngIf"], [1, "field-item"], ["mat-raised-button", "", 1, "transparent-button", "setting", 3, "click"], [1, "setting-icon"], [3, "ngSwitch"], ["class", "flex-auto field-size", 4, "ngSwitchCase"], ["style", "width: 88%;", "class", "flex-auto field-size", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "field-size"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngStyle", "ngModelChange"], ["placeholder", "Company", "style", "display: inline-block; width: 50%", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px", 3, "checked", "ngModel", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", 3, "checked", "ngModel", "ngModelOptions", "ngModelChange"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], [1, "flex-auto", "field-size", 2, "width", "88%"], ["appearance", "outline", 1, "mat-select", "flex-auto", "field-size"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubTemplateProfileComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c2);
        ɵɵtemplate(0, SubTemplateProfileComponent_div_0_Template, 10, 5, "div", 0);
        ɵɵprojection(1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.field.forms);
    } }, directives: [NgIf, MatButton, MatIcon, NgSwitch, NgSwitchCase, NgSwitchDefault, MatCheckbox, NgControlStatus, NgModel, NativeElementInjectorDirective, NgStyle, MatSelect, NgForOf, MatOption, MatRadioGroup, RequiredValidator, MatRadioButton, MatFormField, MatLabel, MatInput, DefaultValueAccessor], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-item[_ngcontent-%COMP%]   .setting[_ngcontent-%COMP%]{position:absolute;top:-5px;right:11px;z-index:1;background-color:#d5d6d7!important;border-radius:50px;width:40px!important;height:40px!important;display:none}.field-item[_ngcontent-%COMP%]:hover   .setting[_ngcontent-%COMP%]{display:block}.field-action[_ngcontent-%COMP%]{width:10%}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition[_ngcontent-%COMP%]{position:relative}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0}.condition-help[_ngcontent-%COMP%]{cursor:pointer}.cdk-overlay-pane[_ngcontent-%COMP%]{width:100%}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .cdk-drop-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SubTemplateProfileComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sub-category',
                templateUrl: './sub-template-profile.component.html',
                styleUrls: ['./sub-template-profile.component.scss']
            }]
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
        }] }); })();

function TemplateProfileCreateComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15);
    ɵɵlistener("click", function TemplateProfileCreateComponent_li_11_Template_li_click_0_listener() { ɵɵrestoreView(_r14); const cat_r11 = ctx.$implicit; const i_r12 = ctx.index; const ctx_r13 = ɵɵnextContext(); return ctx_r13.onActiveMenu(cat_r11, i_r12); });
    ɵɵelementStart(1, "span");
    ɵɵelementStart(2, "span", 16);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const cat_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r6 = ɵɵnextContext();
    ɵɵclassMap(ctx_r6.editIndex === i_r12 ? "active" : "");
    ɵɵadvance(2);
    ɵɵproperty("ngxScrollTo", "#" + cat_r11.name);
    ɵɵadvance(1);
    ɵɵtextInterpolate(cat_r11.name);
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 40);
    ɵɵelementStart(1, "button", 19);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_3_Template_button_click_1_listener($event) { ɵɵrestoreView(_r30); return $event.preventDefault(); });
    ɵɵelementStart(2, "mat-icon", 20);
    ɵɵtext(3, "drag_indicator");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_5_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "expand_less ");
    ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_5_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "expand_more ");
    ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 41);
    ɵɵelementStart(1, "div", 42);
    ɵɵelementStart(2, "div", 43);
    ɵɵelementStart(3, "p", 23);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "p", 24);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 44);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_5_Template_button_click_7_listener($event) { ɵɵrestoreView(_r34); const ctx_r35 = ɵɵnextContext(); const field_r23 = ctx_r35.$implicit; const j_r24 = ctx_r35.index; const i_r16 = ɵɵnextContext(3).index; const ctx_r33 = ɵɵnextContext(); return ctx_r33.onExpendMore({ event: $event, field: field_r23 }, i_r16, j_r24); });
    ɵɵtemplate(8, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_5_mat_icon_8_Template, 2, 0, "mat-icon", 27);
    ɵɵtemplate(9, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_5_mat_icon_9_Template, 2, 0, "mat-icon", 27);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r23 = ɵɵnextContext().$implicit;
    const ctx_r26 = ɵɵnextContext(4);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", field_r23.label, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r26.catNameStart(field_r23.label) ? "l'" + field_r23.label : field_r23.label, " ");
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", field_r23.forms && field_r23.forms.length > 0 ? 1 : 0);
    ɵɵproperty("disabled", !(field_r23.forms && field_r23.forms.length > 0));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !field_r23.expandMore);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r23.expandMore);
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r48 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 51);
    ɵɵelementStart(1, "button", 19);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template_button_click_1_listener($event) { ɵɵrestoreView(_r48); return $event.preventDefault(); });
    ɵɵelementStart(2, "mat-icon", 20);
    ɵɵtext(3, " drag_indicator");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, " expand_less ");
    ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, " expand_more ");
    ɵɵelementEnd();
} }
const _c0$1 = function () { return { standalone: true }; };
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r53 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 41);
    ɵɵelementStart(1, "div", 42);
    ɵɵelementStart(2, "div", 43);
    ɵɵelementStart(3, "input", 52);
    ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r53); const child_r41 = ɵɵnextContext().$implicit; return child_r41.label = $event; });
    ɵɵelementEnd();
    ɵɵelementStart(4, "p", 24);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 44);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_button_click_6_listener($event) { ɵɵrestoreView(_r53); const ctx_r55 = ɵɵnextContext(); const child_r41 = ctx_r55.$implicit; const k_r42 = ctx_r55.index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r54 = ɵɵnextContext(); return ctx_r54.onExpendMore({ event: $event, field: child_r41 }, i_r16, j_r24, k_r42); });
    ɵɵtemplate(7, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_7_Template, 2, 0, "mat-icon", 27);
    ɵɵtemplate(8, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_8_Template, 2, 0, "mat-icon", 27);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const child_r41 = ɵɵnextContext().$implicit;
    const category_r15 = ɵɵnextContext(6).$implicit;
    const ctx_r44 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("readonly", ctx_r44.categories.length < 4 || !category_r15.editable)("readonly", !category_r15.editable)("ngModel", child_r41.label)("ngModelOptions", ɵɵpureFunction0(10, _c0$1));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r44.catNameStart(child_r41.label) ? "l'" + child_r41.label : child_r41.label, " ");
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", child_r41.forms && child_r41.forms.length > 0 ? 1 : 0);
    ɵɵproperty("disabled", !(child_r41.forms && child_r41.forms.length > 0));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !child_r41.expandMore);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r41.expandMore);
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r68 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 56);
    ɵɵelementStart(1, "button", 19);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template_button_click_1_listener($event) { ɵɵrestoreView(_r68); return $event.preventDefault(); });
    ɵɵelementStart(2, "mat-icon", 20);
    ɵɵtext(3, " drag_indicator ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r71 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 57);
    ɵɵelementStart(1, "button", 58);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template_button_click_1_listener() { ɵɵrestoreView(_r71); const k_r42 = ɵɵnextContext(4).index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r69 = ɵɵnextContext(); return ctx_r69.onAddNewField(i_r16, j_r24, k_r42); });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, " add_box ");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5, "Ajouter un champ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const l_r64 = ɵɵnextContext().index;
    const child_r41 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", (child_r41 == null ? null : child_r41.forms == null ? null : child_r41.forms.length) - 1 === l_r64 ? 1 : 0);
    ɵɵproperty("disabled", (child_r41 == null ? null : child_r41.forms == null ? null : child_r41.forms.length) - 1 !== l_r64);
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r77 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 54);
    ɵɵelementStart(1, "div", 32);
    ɵɵelementStart(2, "div", 33);
    ɵɵtemplate(3, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template, 4, 0, "div", 55);
    ɵɵelementStart(4, "div", 35);
    ɵɵelementStart(5, "lib-sub-category", 37);
    ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_5_listener($event) { ɵɵrestoreView(_r77); const l_r64 = ctx.index; const k_r42 = ɵɵnextContext(3).index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r76 = ɵɵnextContext(); return ctx_r76.addKeywordFromInput($event.event, $event.prev, i_r16, j_r24, k_r42, l_r64); })("onKeyPress", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onKeyPress_5_listener($event) { ɵɵrestoreView(_r77); const l_r64 = ctx.index; const k_r42 = ɵɵnextContext(3).index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r81 = ɵɵnextContext(); return ctx_r81.onKeyPress($event.event, i_r16, j_r24, k_r42, l_r64); })("onAddNewField", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddNewField_5_listener() { ɵɵrestoreView(_r77); const k_r42 = ɵɵnextContext(3).index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r85 = ɵɵnextContext(); return ctx_r85.onAddNewField(i_r16, j_r24, k_r42); })("onRemoveField", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onRemoveField_5_listener() { ɵɵrestoreView(_r77); const l_r64 = ctx.index; const k_r42 = ɵɵnextContext(3).index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r89 = ɵɵnextContext(); return ctx_r89.onRemoveField(i_r16, j_r24, k_r42, l_r64); })("onChangeType", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onChangeType_5_listener() { ɵɵrestoreView(_r77); const c2_r63 = ctx.$implicit; const l_r64 = ctx.index; const k_r42 = ɵɵnextContext(3).index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r93 = ɵɵnextContext(); return ctx_r93.onChangeType(c2_r63.type, i_r16, j_r24, k_r42, l_r64); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_5_listener($event) { ɵɵrestoreView(_r77); const l_r64 = ctx.index; const k_r42 = ɵɵnextContext(3).index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r97 = ɵɵnextContext(); return ctx_r97.removeKeyword($event.event, i_r16, j_r24, k_r42, l_r64); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_5_listener() { ɵɵrestoreView(_r77); const l_r64 = ctx.index; const k_r42 = ɵɵnextContext(3).index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r101 = ɵɵnextContext(); return ctx_r101.onAddNewSubLevelField(i_r16, j_r24, k_r42, l_r64); })("onExpendMore", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onExpendMore_5_listener($event) { ɵɵrestoreView(_r77); const l_r64 = ctx.index; const k_r42 = ɵɵnextContext(3).index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r105 = ɵɵnextContext(); return ctx_r105.onExpendMore($event, i_r16, j_r24, k_r42, l_r64); })("onChangeLabel", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onChangeLabel_5_listener($event) { ɵɵrestoreView(_r77); const l_r64 = ctx.index; const k_r42 = ɵɵnextContext(3).index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r109 = ɵɵnextContext(); return ctx_r109.onChangeLabel($event, i_r16, j_r24, k_r42, l_r64); })("onCheckedChip", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckedChip_5_listener($event) { ɵɵrestoreView(_r77); const l_r64 = ctx.index; const k_r42 = ɵɵnextContext(3).index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r113 = ɵɵnextContext(); return ctx_r113.onCheckedChip($event, i_r16, j_r24, k_r42, l_r64); })("onDrop", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onDrop_5_listener($event) { ɵɵrestoreView(_r77); const ctx_r117 = ɵɵnextContext(10); return ctx_r117.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckedDefault_5_listener($event) { ɵɵrestoreView(_r77); const l_r64 = ctx.index; const k_r42 = ɵɵnextContext(3).index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r118 = ɵɵnextContext(); return ctx_r118.onCheckedDefault($event, i_r16, j_r24, k_r42, l_r64); })("onEditBlock", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onEditBlock_5_listener() { ɵɵrestoreView(_r77); const c2_r63 = ctx.$implicit; const l_r64 = ctx.index; const k_r42 = ɵɵnextContext(3).index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r122 = ɵɵnextContext(); return ctx_r122.onEditBlock(c2_r63, i_r16, j_r24, k_r42, l_r64); })("onGetConditionValues", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onGetConditionValues_5_listener() { ɵɵrestoreView(_r77); const ctx_r126 = ɵɵnextContext(10); return ctx_r126.getConditionValues(); });
    ɵɵelement(6, "div", 45);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(7, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template, 6, 3, "div", 39);
    ɵɵelementEnd();
} if (rf & 2) {
    const c2_r63 = ctx.$implicit;
    const l_r64 = ctx.index;
    const ctx_r127 = ɵɵnextContext(3);
    const child_r41 = ctx_r127.$implicit;
    const k_r42 = ctx_r127.index;
    const ctx_r62 = ɵɵnextContext(7);
    ɵɵproperty("id", c2_r63.key);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", c2_r63.forms);
    ɵɵadvance(2);
    ɵɵproperty("field", c2_r63)("length", child_r41 == null ? null : child_r41.forms == null ? null : child_r41.forms.length)("i", k_r42)("j", l_r64)("conditionData", ctx_r62.conditionData);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", (child_r41 == null ? null : child_r41.forms == null ? null : child_r41.forms.length) - 1 === l_r64);
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r129 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 47, 29);
    ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r129); const ctx_r128 = ɵɵnextContext(9); return ctx_r128.drop($event); });
    ɵɵtemplate(2, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template, 8, 8, "div", 53);
    ɵɵelementEnd();
} if (rf & 2) {
    const child_r41 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("cdkDropListData", child_r41.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", child_r41.forms);
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 45);
    ɵɵtemplate(1, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template, 3, 2, "div", 46);
    ɵɵelementEnd();
} if (rf & 2) {
    const child_r41 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r41.forms);
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r134 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 57);
    ɵɵelementStart(1, "button", 58);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template_button_click_1_listener() { ɵɵrestoreView(_r134); const j_r24 = ɵɵnextContext(4).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r132 = ɵɵnextContext(); return ctx_r132.onAddNewField(i_r16, j_r24); });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "add_box");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5, "Ajouter un champ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const k_r42 = ɵɵnextContext().index;
    const field_r23 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", (field_r23 == null ? null : field_r23.forms == null ? null : field_r23.forms.length) - 1 === k_r42 ? 1 : 0);
    ɵɵproperty("disabled", (field_r23 == null ? null : field_r23.forms == null ? null : field_r23.forms.length) - 1 !== k_r42);
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r139 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 49);
    ɵɵelementStart(1, "div", 32);
    ɵɵelementStart(2, "div", 33);
    ɵɵtemplate(3, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template, 4, 0, "div", 50);
    ɵɵelementStart(4, "div", 35);
    ɵɵtemplate(5, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template, 9, 11, "div", 36);
    ɵɵelementStart(6, "lib-sub-category", 37);
    ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_6_listener($event) { ɵɵrestoreView(_r139); const k_r42 = ctx.index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r138 = ɵɵnextContext(); return ctx_r138.addKeywordFromInput($event.event, $event.prev, i_r16, j_r24, k_r42); })("onKeyPress", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onKeyPress_6_listener($event) { ɵɵrestoreView(_r139); const k_r42 = ctx.index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r142 = ɵɵnextContext(); return ctx_r142.onKeyPress($event.event, i_r16, j_r24, k_r42); })("onAddNewField", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddNewField_6_listener() { ɵɵrestoreView(_r139); const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r145 = ɵɵnextContext(); return ctx_r145.onAddNewField(i_r16, j_r24); })("onRemoveField", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onRemoveField_6_listener() { ɵɵrestoreView(_r139); const k_r42 = ctx.index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r148 = ɵɵnextContext(); return ctx_r148.onRemoveField(i_r16, j_r24, k_r42); })("onChangeType", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onChangeType_6_listener() { ɵɵrestoreView(_r139); const child_r41 = ctx.$implicit; const k_r42 = ctx.index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r151 = ɵɵnextContext(); return ctx_r151.onChangeType(child_r41.type, i_r16, j_r24, k_r42); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_6_listener($event) { ɵɵrestoreView(_r139); const k_r42 = ctx.index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r154 = ɵɵnextContext(); return ctx_r154.removeKeyword($event.event, i_r16, j_r24, k_r42); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_6_listener() { ɵɵrestoreView(_r139); const k_r42 = ctx.index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r157 = ɵɵnextContext(); return ctx_r157.onAddNewSubLevelField(i_r16, j_r24, k_r42); })("onExpendMore", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onExpendMore_6_listener($event) { ɵɵrestoreView(_r139); const k_r42 = ctx.index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r160 = ɵɵnextContext(); return ctx_r160.onExpendMore($event, i_r16, j_r24, k_r42); })("onChangeLabel", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onChangeLabel_6_listener($event) { ɵɵrestoreView(_r139); const k_r42 = ctx.index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r163 = ɵɵnextContext(); return ctx_r163.onChangeLabel($event, i_r16, j_r24, k_r42); })("onCheckedChip", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckedChip_6_listener($event) { ɵɵrestoreView(_r139); const k_r42 = ctx.index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r166 = ɵɵnextContext(); return ctx_r166.onCheckedChip($event, i_r16, j_r24, k_r42); })("onDrop", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onDrop_6_listener($event) { ɵɵrestoreView(_r139); const ctx_r169 = ɵɵnextContext(7); return ctx_r169.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckedDefault_6_listener($event) { ɵɵrestoreView(_r139); const k_r42 = ctx.index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r170 = ɵɵnextContext(); return ctx_r170.onCheckedDefault($event, i_r16, j_r24, k_r42); })("onEditBlock", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onEditBlock_6_listener() { ɵɵrestoreView(_r139); const child_r41 = ctx.$implicit; const k_r42 = ctx.index; const j_r24 = ɵɵnextContext(3).index; const i_r16 = ɵɵnextContext(3).index; const ctx_r173 = ɵɵnextContext(); return ctx_r173.onEditBlock(child_r41, i_r16, j_r24, k_r42); })("onGetConditionValues", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onGetConditionValues_6_listener() { ɵɵrestoreView(_r139); const ctx_r176 = ɵɵnextContext(7); return ctx_r176.getConditionValues(); });
    ɵɵtemplate(7, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_7_Template, 2, 1, "div", 38);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(8, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template, 6, 3, "div", 39);
    ɵɵelementEnd();
} if (rf & 2) {
    const child_r41 = ctx.$implicit;
    const k_r42 = ctx.index;
    const ctx_r177 = ɵɵnextContext(3);
    const field_r23 = ctx_r177.$implicit;
    const j_r24 = ctx_r177.index;
    const ctx_r40 = ɵɵnextContext(4);
    ɵɵproperty("id", child_r41.key);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", child_r41.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", child_r41.forms);
    ɵɵadvance(1);
    ɵɵproperty("field", child_r41)("length", field_r23 == null ? null : field_r23.forms == null ? null : field_r23.forms.length)("i", j_r24)("j", k_r42)("conditionData", ctx_r40.conditionData);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r41.expandMore);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (field_r23 == null ? null : field_r23.forms == null ? null : field_r23.forms.length) - 1 === k_r42);
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r179 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 47, 29);
    ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r179); const ctx_r178 = ɵɵnextContext(6); return ctx_r178.drop($event); });
    ɵɵtemplate(2, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_div_2_Template, 9, 10, "div", 48);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r23 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("cdkDropListData", field_r23.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", field_r23.forms);
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 45);
    ɵɵtemplate(1, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_div_1_Template, 3, 2, "div", 46);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r23 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r23.forms);
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r184 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 57);
    ɵɵelementStart(1, "button", 58);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_8_Template_button_click_1_listener() { ɵɵrestoreView(_r184); const i_r16 = ɵɵnextContext(4).index; const ctx_r182 = ɵɵnextContext(); return ctx_r182.onAddNewField(i_r16); });
    ɵɵelementStart(2, "span");
    ɵɵtext(3, "Ajouter un champ");
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-icon");
    ɵɵtext(5, "add");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const j_r24 = ɵɵnextContext().index;
    const category_r15 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", (category_r15 == null ? null : category_r15.forms == null ? null : category_r15.forms.length) - 1 === j_r24 ? 1 : 0);
    ɵɵproperty("disabled", (category_r15 == null ? null : category_r15.forms == null ? null : category_r15.forms.length) - 1 !== j_r24);
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r188 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 31);
    ɵɵelementStart(1, "div", 32);
    ɵɵelementStart(2, "div", 33);
    ɵɵtemplate(3, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_3_Template, 4, 0, "div", 34);
    ɵɵelementStart(4, "div", 35);
    ɵɵtemplate(5, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_5_Template, 10, 7, "div", 36);
    ɵɵelementStart(6, "lib-sub-category", 37);
    ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onAddKeywordFromInput_6_listener($event) { ɵɵrestoreView(_r188); const j_r24 = ctx.index; const i_r16 = ɵɵnextContext(3).index; const ctx_r187 = ɵɵnextContext(); return ctx_r187.addKeywordFromInput($event.event, $event.prev, i_r16, j_r24); })("onKeyPress", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onKeyPress_6_listener($event) { ɵɵrestoreView(_r188); const j_r24 = ctx.index; const i_r16 = ɵɵnextContext(3).index; const ctx_r190 = ɵɵnextContext(); return ctx_r190.onKeyPress($event.event, i_r16, j_r24); })("onAddNewField", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onAddNewField_6_listener() { ɵɵrestoreView(_r188); const i_r16 = ɵɵnextContext(3).index; const ctx_r192 = ɵɵnextContext(); return ctx_r192.onAddNewField(i_r16); })("onRemoveField", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onRemoveField_6_listener() { ɵɵrestoreView(_r188); const j_r24 = ctx.index; const i_r16 = ɵɵnextContext(3).index; const ctx_r194 = ɵɵnextContext(); return ctx_r194.onRemoveField(i_r16, j_r24); })("onChangeType", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onChangeType_6_listener() { ɵɵrestoreView(_r188); const field_r23 = ctx.$implicit; const j_r24 = ctx.index; const i_r16 = ɵɵnextContext(3).index; const ctx_r196 = ɵɵnextContext(); return ctx_r196.onChangeType(field_r23.type, i_r16, j_r24); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onRemoveKeyword_6_listener($event) { ɵɵrestoreView(_r188); const j_r24 = ctx.index; const i_r16 = ɵɵnextContext(3).index; const ctx_r198 = ɵɵnextContext(); return ctx_r198.removeKeyword($event.event, i_r16, j_r24); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onAddNewSubLevelField_6_listener() { ɵɵrestoreView(_r188); const j_r24 = ctx.index; const i_r16 = ɵɵnextContext(3).index; const ctx_r200 = ɵɵnextContext(); return ctx_r200.onAddNewSubLevelField(i_r16, j_r24); })("onExpendMore", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onExpendMore_6_listener($event) { ɵɵrestoreView(_r188); const j_r24 = ctx.index; const i_r16 = ɵɵnextContext(3).index; const ctx_r202 = ɵɵnextContext(); return ctx_r202.onExpendMore($event, i_r16, j_r24); })("onChangeLabel", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onChangeLabel_6_listener($event) { ɵɵrestoreView(_r188); const j_r24 = ctx.index; const i_r16 = ɵɵnextContext(3).index; const ctx_r204 = ɵɵnextContext(); return ctx_r204.onChangeLabel($event, i_r16, j_r24); })("onCheckedChip", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onCheckedChip_6_listener($event) { ɵɵrestoreView(_r188); const j_r24 = ctx.index; const i_r16 = ɵɵnextContext(3).index; const ctx_r206 = ɵɵnextContext(); return ctx_r206.onCheckedChip($event, i_r16, j_r24); })("onDrop", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onDrop_6_listener($event) { ɵɵrestoreView(_r188); const ctx_r208 = ɵɵnextContext(4); return ctx_r208.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onCheckedDefault_6_listener($event) { ɵɵrestoreView(_r188); const j_r24 = ctx.index; const i_r16 = ɵɵnextContext(3).index; const ctx_r209 = ɵɵnextContext(); return ctx_r209.onCheckedDefault($event, i_r16, j_r24); })("onEditBlock", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onEditBlock_6_listener() { ɵɵrestoreView(_r188); const field_r23 = ctx.$implicit; const j_r24 = ctx.index; const i_r16 = ɵɵnextContext(3).index; const ctx_r211 = ɵɵnextContext(); return ctx_r211.onEditBlock(field_r23, i_r16, j_r24); })("onGetConditionValues", function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onGetConditionValues_6_listener() { ɵɵrestoreView(_r188); const ctx_r213 = ɵɵnextContext(4); return ctx_r213.getConditionValues(); });
    ɵɵtemplate(7, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_7_Template, 2, 1, "div", 38);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(8, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_div_8_Template, 6, 3, "div", 39);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r23 = ctx.$implicit;
    const j_r24 = ctx.index;
    const ctx_r214 = ɵɵnextContext(3);
    const category_r15 = ctx_r214.$implicit;
    const i_r16 = ctx_r214.index;
    const ctx_r22 = ɵɵnextContext();
    ɵɵstyleProp("width", field_r23.forms ? "100%" : "auto");
    ɵɵproperty("id", field_r23.key);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", field_r23.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", field_r23.forms);
    ɵɵadvance(1);
    ɵɵproperty("field", field_r23)("length", category_r15 == null ? null : category_r15.forms == null ? null : category_r15.forms.length)("i", i_r16)("j", j_r24)("conditionData", ctx_r22.conditionData);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r23.expandMore);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (category_r15 == null ? null : category_r15.forms == null ? null : category_r15.forms.length) - 1 === j_r24);
} }
function TemplateProfileCreateComponent_div_19_div_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_div_1_Template, 9, 12, "div", 30);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const category_r15 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", category_r15.forms);
} }
function TemplateProfileCreateComponent_div_19_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r217 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 28, 29);
    ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_19_div_12_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r217); const ctx_r216 = ɵɵnextContext(2); return ctx_r216.drop($event); });
    ɵɵtemplate(2, TemplateProfileCreateComponent_div_19_div_12_ng_container_2_Template, 2, 1, "ng-container", 27);
    ɵɵelementEnd();
} if (rf & 2) {
    const category_r15 = ɵɵnextContext().$implicit;
    ɵɵproperty("cdkDropListData", category_r15.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", category_r15.expandMore);
} }
function TemplateProfileCreateComponent_div_19_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "chevron_right");
    ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_19_mat_icon_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "expand_more");
    ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r220 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 17);
    ɵɵelementStart(1, "div", 18);
    ɵɵelementStart(2, "button", 19);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_19_Template_button_click_2_listener($event) { ɵɵrestoreView(_r220); return $event.preventDefault(); });
    ɵɵelementStart(3, "mat-icon", 20);
    ɵɵtext(4, "drag_indicator");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 21);
    ɵɵelementStart(6, "div", 22);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_19_Template_div_click_6_listener($event) { ɵɵrestoreView(_r220); const category_r15 = ctx.$implicit; const i_r16 = ctx.index; const ctx_r221 = ɵɵnextContext(); return ctx_r221.onActiveMenu(category_r15, i_r16, $event); });
    ɵɵelementStart(7, "div");
    ɵɵelementStart(8, "p", 23);
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementStart(10, "p", 24);
    ɵɵtext(11);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(12, TemplateProfileCreateComponent_div_19_div_12_Template, 3, 2, "div", 25);
    ɵɵelementEnd();
    ɵɵelementStart(13, "button", 26);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_19_Template_button_click_13_listener($event) { ɵɵrestoreView(_r220); const category_r15 = ctx.$implicit; const i_r16 = ctx.index; const ctx_r222 = ɵɵnextContext(); return ctx_r222.onExpendMore({ event: $event, field: category_r15 }, i_r16); });
    ɵɵtemplate(14, TemplateProfileCreateComponent_div_19_mat_icon_14_Template, 2, 0, "mat-icon", 27);
    ɵɵtemplate(15, TemplateProfileCreateComponent_div_19_mat_icon_15_Template, 2, 0, "mat-icon", 27);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const category_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r8 = ɵɵnextContext();
    ɵɵclassMap(ctx_r8.editIndex === i_r16 ? "active" : "");
    ɵɵstyleProp("padding-bottom", category_r15.expandMore ? "100px" : "10px");
    ɵɵproperty("id", category_r15.name);
    ɵɵadvance(9);
    ɵɵtextInterpolate1(" ", category_r15.name, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r8.catNameStart(category_r15.name) ? "l'" + category_r15.name : category_r15.name, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", category_r15.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !category_r15.expandMore);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", category_r15.expandMore);
} }
function TemplateProfileCreateComponent_div_26_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r230 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 89);
    ɵɵelementStart(1, "mat-checkbox", 90);
    ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_26_div_33_Template_mat_checkbox_ngModelChange_1_listener($event) { ɵɵrestoreView(_r230); const ctx_r229 = ɵɵnextContext(2); return ctx_r229.currentEditBlock.expandOnboarding = $event; });
    ɵɵtext(2, " Coch\u00E9 par d\u00E9fault ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r223 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r223.currentEditBlock.expandOnboarding)("ngModelOptions", ɵɵpureFunction0(2, _c0$1));
} }
function TemplateProfileCreateComponent_div_26_mat_form_field_34_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    const _r237 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-chip", 97);
    ɵɵlistener("dblclick", function TemplateProfileCreateComponent_div_26_mat_form_field_34_mat_chip_6_Template_mat_chip_dblclick_0_listener() { ɵɵrestoreView(_r237); const option_r235 = ctx.$implicit; const ctx_r236 = ɵɵnextContext(3); return ctx_r236.onCheckedChipBlock(option_r235, ctx_r236.currentEditBlock); })("click", function TemplateProfileCreateComponent_div_26_mat_form_field_34_mat_chip_6_Template_mat_chip_click_0_listener() { ɵɵrestoreView(_r237); const option_r235 = ctx.$implicit; const ctx_r238 = ɵɵnextContext(3); return ctx_r238.onEditChip(option_r235); })("removed", function TemplateProfileCreateComponent_div_26_mat_form_field_34_mat_chip_6_Template_mat_chip_removed_0_listener() { ɵɵrestoreView(_r237); const option_r235 = ctx.$implicit; const ctx_r239 = ɵɵnextContext(3); return ctx_r239.removeKeywordBlock(option_r235, ctx_r239.currentEditBlock); });
    ɵɵtext(1);
    ɵɵelementStart(2, "mat-icon", 98);
    ɵɵtext(3, "cancel");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r235 = ctx.$implicit;
    ɵɵproperty("selected", option_r235.checked)("value", option_r235.value)("removable", true);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r235.value, " ");
} }
function TemplateProfileCreateComponent_div_26_mat_form_field_34_Template(rf, ctx) { if (rf & 1) {
    const _r241 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 91);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, " Valeur par d\u00E9fault ");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-chip-list", 92, 93);
    ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_26_mat_form_field_34_Template_mat_chip_list_cdkDropListDropped_3_listener($event) { ɵɵrestoreView(_r241); const ctx_r240 = ɵɵnextContext(2); return ctx_r240.drop($event); });
    ɵɵtemplate(6, TemplateProfileCreateComponent_div_26_mat_form_field_34_mat_chip_6_Template, 4, 4, "mat-chip", 94);
    ɵɵelementStart(7, "input", 95, 96);
    ɵɵlistener("matChipInputTokenEnd", function TemplateProfileCreateComponent_div_26_mat_form_field_34_Template_input_matChipInputTokenEnd_7_listener($event) { ɵɵrestoreView(_r241); const ctx_r242 = ɵɵnextContext(2); return ctx_r242.addKeywordFromInputBlock($event, ctx_r242.currentEditBlock, ctx_r242.prevValue); })("keyup", function TemplateProfileCreateComponent_div_26_mat_form_field_34_Template_input_keyup_7_listener($event) { ɵɵrestoreView(_r241); const ctx_r243 = ɵɵnextContext(2); return ctx_r243.onKeyUpChip($event, ctx_r243.currentEditBlock); })("ngModelChange", function TemplateProfileCreateComponent_div_26_mat_form_field_34_Template_input_ngModelChange_7_listener($event) { ɵɵrestoreView(_r241); const ctx_r244 = ɵɵnextContext(2); return ctx_r244.currentChip = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r232 = ɵɵreference(5);
    const ctx_r224 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("cdkDropListData", ctx_r224.currentEditBlock.defaultValue);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r224.currentEditBlock.defaultValue);
    ɵɵadvance(1);
    ɵɵproperty("matChipInputFor", _r232)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r224.separatorKeysCodes)("ngModel", ctx_r224.currentChip)("ngModelOptions", ɵɵpureFunction0(7, _c0$1));
} }
function TemplateProfileCreateComponent_div_26_mat_form_field_35_Template(rf, ctx) { if (rf & 1) {
    const _r246 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 72);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Valeur par d\u00E9fault");
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 99);
    ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_26_mat_form_field_35_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r246); const ctx_r245 = ɵɵnextContext(2); return ctx_r245.currentEditBlock.defaultValue = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r225 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("ngModelOptions", ɵɵpureFunction0(2, _c0$1))("ngModel", ctx_r225.currentEditBlock.defaultValue);
} }
function TemplateProfileCreateComponent_div_26_mat_form_field_36_Template(rf, ctx) { if (rf & 1) {
    const _r248 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 72);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Valeur par d\u00E9fault");
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 100);
    ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_26_mat_form_field_36_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r248); const ctx_r247 = ɵɵnextContext(2); return ctx_r247.currentEditBlock.defaultValue = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r226 = ɵɵnextContext(2);
    ɵɵstyleProp("opacity", ctx_r226.currentEditBlock.type !== "tel" ? 1 : 0);
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r226.currentEditBlock.type)("disabled", ctx_r226.currentEditBlock.type === "tel")("ngModelOptions", ɵɵpureFunction0(6, _c0$1))("ngModel", ctx_r226.currentEditBlock.defaultValue);
} }
function TemplateProfileCreateComponent_div_26_mat_form_field_47_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 104);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r250 = ctx.$implicit;
    ɵɵproperty("value", item_r250);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", item_r250.label, " ");
} }
function TemplateProfileCreateComponent_div_26_mat_form_field_47_Template(rf, ctx) { if (rf & 1) {
    const _r252 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 101);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Selectionnez la cat\u00E9gorie");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-select", 102);
    ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_26_mat_form_field_47_Template_mat_select_ngModelChange_3_listener() { ɵɵrestoreView(_r252); const ctx_r251 = ɵɵnextContext(2); return ctx_r251.onSelectCondition(ctx_r251.currentEditBlock.conditionLocation); })("ngModelChange", function TemplateProfileCreateComponent_div_26_mat_form_field_47_Template_mat_select_ngModelChange_3_listener($event) { ɵɵrestoreView(_r252); const ctx_r253 = ɵɵnextContext(2); return ctx_r253.currentEditBlock.conditionLocation = $event; });
    ɵɵtemplate(4, TemplateProfileCreateComponent_div_26_mat_form_field_47_mat_option_4_Template, 2, 2, "mat-option", 103);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r227 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("ngModel", ctx_r227.currentEditBlock.conditionLocation)("ngModelOptions", ɵɵpureFunction0(3, _c0$1));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r227.conditionData);
} }
function TemplateProfileCreateComponent_div_26_mat_radio_button_49_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-radio-button", 105);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r254 = ctx.$implicit;
    ɵɵproperty("value", item_r254.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r254.value, " ");
} }
const _c1$1 = function () { return ["select", "radio", "checkbox_multiple"]; };
function TemplateProfileCreateComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r256 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 59);
    ɵɵelementStart(1, "h3");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div");
    ɵɵelementStart(4, "mat-form-field", 60);
    ɵɵelementStart(5, "mat-label");
    ɵɵtext(6, "Type de bloc");
    ɵɵelementEnd();
    ɵɵelementStart(7, "mat-select", 61);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_Template_mat_select_click_7_listener() { ɵɵrestoreView(_r256); const ctx_r255 = ɵɵnextContext(); return ctx_r255.onOpenTypeDialog(ctx_r255.currentEditBlock); })("ngModelChange", function TemplateProfileCreateComponent_div_26_Template_mat_select_ngModelChange_7_listener($event) { ɵɵrestoreView(_r256); const ctx_r257 = ɵɵnextContext(); return ctx_r257.currentEditBlock.type = $event; })("ngModelChange", function TemplateProfileCreateComponent_div_26_Template_mat_select_ngModelChange_7_listener() { ɵɵrestoreView(_r256); const ctx_r258 = ɵɵnextContext(); return ctx_r258.onChangeTypeBlock(ctx_r258.currentEditBlock); });
    ɵɵelementStart(8, "mat-option", 62);
    ɵɵtext(9, "Text(80)");
    ɵɵelementEnd();
    ɵɵelementStart(10, "mat-option", 63);
    ɵɵtext(11, "Text(80+)");
    ɵɵelementEnd();
    ɵɵelementStart(12, "mat-option", 64);
    ɵɵtext(13, "Radio");
    ɵɵelementEnd();
    ɵɵelementStart(14, "mat-option", 65);
    ɵɵtext(15, "Selecteur");
    ɵɵelementEnd();
    ɵɵelementStart(16, "mat-option", 66);
    ɵɵtext(17, "Checkbox");
    ɵɵelementEnd();
    ɵɵelementStart(18, "mat-option", 67);
    ɵɵtext(19, "Checkbox multiple");
    ɵɵelementEnd();
    ɵɵelementStart(20, "mat-option", 68);
    ɵɵtext(21, "Email");
    ɵɵelementEnd();
    ɵɵelementStart(22, "mat-option", 69);
    ɵɵtext(23, "Password");
    ɵɵelementEnd();
    ɵɵelementStart(24, "mat-option", 70);
    ɵɵtext(25, "Date");
    ɵɵelementEnd();
    ɵɵelementStart(26, "mat-option", 71);
    ɵɵtext(27, "Phone");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(28, "mat-form-field", 72);
    ɵɵelementStart(29, "mat-label");
    ɵɵtext(30, "Nom / Label");
    ɵɵelementEnd();
    ɵɵelementStart(31, "input", 73);
    ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_26_Template_input_ngModelChange_31_listener($event) { ɵɵrestoreView(_r256); const ctx_r259 = ɵɵnextContext(); return ctx_r259.currentEditBlock.label = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerStart(32, 74);
    ɵɵtemplate(33, TemplateProfileCreateComponent_div_26_div_33_Template, 3, 3, "div", 75);
    ɵɵtemplate(34, TemplateProfileCreateComponent_div_26_mat_form_field_34_Template, 9, 8, "mat-form-field", 76);
    ɵɵtemplate(35, TemplateProfileCreateComponent_div_26_mat_form_field_35_Template, 4, 3, "mat-form-field", 77);
    ɵɵtemplate(36, TemplateProfileCreateComponent_div_26_mat_form_field_36_Template, 4, 7, "mat-form-field", 78);
    ɵɵelementContainerEnd();
    ɵɵelementStart(37, "div", 79);
    ɵɵelementStart(38, "div", 80);
    ɵɵelementStart(39, "span");
    ɵɵtext(40, "Obligatoire");
    ɵɵelementEnd();
    ɵɵelementStart(41, "mat-slide-toggle", 81);
    ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_26_Template_mat_slide_toggle_ngModelChange_41_listener($event) { ɵɵrestoreView(_r256); const ctx_r260 = ɵɵnextContext(); return ctx_r260.currentEditBlock.isMandatory = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(42, "div", 82);
    ɵɵelementStart(43, "div", 80);
    ɵɵelementStart(44, "span");
    ɵɵtext(45, "Visibilit\u00E9 conditionnelle");
    ɵɵelementEnd();
    ɵɵelementStart(46, "mat-slide-toggle", 81);
    ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_26_Template_mat_slide_toggle_ngModelChange_46_listener() { ɵɵrestoreView(_r256); const ctx_r261 = ɵɵnextContext(); return ctx_r261.getConditionValues(); })("ngModelChange", function TemplateProfileCreateComponent_div_26_Template_mat_slide_toggle_ngModelChange_46_listener($event) { ɵɵrestoreView(_r256); const ctx_r262 = ɵɵnextContext(); return ctx_r262.currentEditBlock.isConditional = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(47, TemplateProfileCreateComponent_div_26_mat_form_field_47_Template, 5, 4, "mat-form-field", 83);
    ɵɵelementStart(48, "mat-radio-group", 84);
    ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_26_Template_mat_radio_group_ngModelChange_48_listener($event) { ɵɵrestoreView(_r256); const ctx_r263 = ɵɵnextContext(); return ctx_r263.currentEditBlock.conditionValue = $event; });
    ɵɵtemplate(49, TemplateProfileCreateComponent_div_26_mat_radio_button_49_Template, 2, 2, "mat-radio-button", 85);
    ɵɵelementEnd();
    ɵɵelementStart(50, "div", 86);
    ɵɵelementStart(51, "button", 87);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_Template_button_click_51_listener($event) { ɵɵrestoreView(_r256); const ctx_r264 = ɵɵnextContext(); return ctx_r264.onAddNewSubLevelFieldBlock($event); });
    ɵɵtext(52, "Sous-cat\u00E9gorie ");
    ɵɵelementStart(53, "mat-icon");
    ɵɵtext(54, "device_hub ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(55, "button", 87);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_Template_button_click_55_listener($event) { ɵɵrestoreView(_r256); const ctx_r265 = ɵɵnextContext(); return ctx_r265.onDuplicatedBlock($event); });
    ɵɵtext(56, "Dupliquer le bloc");
    ɵɵelementStart(57, "mat-icon");
    ɵɵtext(58, "content_copy");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(59, "button", 88);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_Template_button_click_59_listener($event) { ɵɵrestoreView(_r256); const ctx_r266 = ɵɵnextContext(); return ctx_r266.onRemoveFieldBlock($event); });
    ɵɵtext(60, "Supprimer le bloc ");
    ɵɵelementStart(61, "mat-icon");
    ɵɵtext(62, " delete ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1("Param\u00E8tre du bloc ", ctx_r9.currentEditBlock.label, "");
    ɵɵadvance(5);
    ɵɵproperty("ngModel", ctx_r9.currentEditBlock.type)("ngModelOptions", ɵɵpureFunction0(17, _c0$1));
    ɵɵadvance(24);
    ɵɵproperty("ngModel", ctx_r9.currentEditBlock.label)("ngModelOptions", ɵɵpureFunction0(18, _c0$1));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", ctx_r9.currentEditBlock.type);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "checkbox");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ɵɵpureFunction0(19, _c1$1).includes(ctx_r9.currentEditBlock.type) ? ctx_r9.currentEditBlock.type : !ctx_r9.currentEditBlock.type);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "textarea");
    ɵɵadvance(6);
    ɵɵproperty("ngModel", ctx_r9.currentEditBlock.isMandatory)("ngModelOptions", ɵɵpureFunction0(20, _c0$1));
    ɵɵadvance(5);
    ɵɵproperty("ngModel", ctx_r9.currentEditBlock.isConditional)("ngModelOptions", ɵɵpureFunction0(21, _c0$1));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.currentEditBlock == null ? null : ctx_r9.currentEditBlock.isConditional);
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r9.currentEditBlock.conditionValue)("ngModelOptions", ɵɵpureFunction0(22, _c0$1));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r9.currentEditBlock == null ? null : ctx_r9.currentEditBlock.conditionLocation == null ? null : ctx_r9.currentEditBlock.conditionLocation.possibleValues);
} }
function TemplateProfileCreateComponent_div_27_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 104);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r268 = ctx.$implicit;
    ɵɵproperty("value", item_r268.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r268.value);
} }
function TemplateProfileCreateComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r270 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 59);
    ɵɵelementStart(1, "h3");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 106);
    ɵɵelementStart(4, "mat-form-field", 72);
    ɵɵelementStart(5, "mat-label");
    ɵɵtext(6, "Nom de la section");
    ɵɵelementEnd();
    ɵɵelementStart(7, "input", 73);
    ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_27_Template_input_ngModelChange_7_listener($event) { ɵɵrestoreView(_r270); const ctx_r269 = ɵɵnextContext(); return ctx_r269.currentEditBlock.name = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "mat-form-field", 101);
    ɵɵelementStart(9, "mat-label");
    ɵɵtext(10, "Equipe de gestion");
    ɵɵelementEnd();
    ɵɵelementStart(11, "mat-select", 102);
    ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_27_Template_mat_select_ngModelChange_11_listener($event) { ɵɵrestoreView(_r270); const ctx_r271 = ɵɵnextContext(); return ctx_r271.currentEditBlock.selector.value = $event; });
    ɵɵtemplate(12, TemplateProfileCreateComponent_div_27_mat_option_12_Template, 2, 2, "mat-option", 103);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(13, "div", 86);
    ɵɵelementStart(14, "button", 87);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_27_Template_button_click_14_listener($event) { ɵɵrestoreView(_r270); const ctx_r272 = ɵɵnextContext(); return ctx_r272.onAddNewSubLevelFieldBlock($event); });
    ɵɵtext(15, "Sous-cat\u00E9gorie ");
    ɵɵelementStart(16, "mat-icon");
    ɵɵtext(17, "device_hub ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(18, "button", 87);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_27_Template_button_click_18_listener($event) { ɵɵrestoreView(_r270); const ctx_r273 = ɵɵnextContext(); return ctx_r273.onDuplicatedBlock($event); });
    ɵɵtext(19, "Dupliquer le bloc");
    ɵɵelementStart(20, "mat-icon");
    ɵɵtext(21, "content_copy");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(22, "button", 88);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_27_Template_button_click_22_listener($event) { ɵɵrestoreView(_r270); const ctx_r274 = ɵɵnextContext(); return ctx_r274.onRemoveFieldBlock($event); });
    ɵɵtext(23, "Supprimer le bloc ");
    ɵɵelementStart(24, "mat-icon");
    ɵɵtext(25, " delete");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1("Param\u00E8tre de la section ", ctx_r10.currentEditBlock.name, "");
    ɵɵadvance(5);
    ɵɵproperty("ngModel", ctx_r10.currentEditBlock.name)("ngModelOptions", ɵɵpureFunction0(6, _c0$1));
    ɵɵadvance(4);
    ɵɵproperty("ngModel", ctx_r10.currentEditBlock.selector.value)("ngModelOptions", ɵɵpureFunction0(7, _c0$1));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r10.currentEditBlock.selector.defaultValue);
} }
class TemplateProfileCreateComponent {
    constructor(fb, service, route, router, dialog) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.validCategory = false;
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentProfil = {};
        this.canExit = true;
        this.tags = [];
        this.id = "0";
        this.parent = [];
        this.editIndex = null;
        this.showProfileName = true;
        this.matIconList = [
            { name: 'developer_board' },
            { name: 'contact_phone' },
            { name: 'contact_mail' },
            { name: 'play_circle_filled' },
            { name: 'control_camera' },
            { name: 'explicit' },
            { name: 'person' },
            { name: 'visibility' },
            { name: 'video_label' },
            { name: 'add_circle' },
            { name: 'watch_later' },
            { name: 'where_to_vote' },
            { name: 'work' },
            { name: 'web' },
            { name: 'whatshot' },
            { name: 'wifi' },
            { name: 'workspaces' },
            { name: 'wb_cloudy' },
            { name: 'waves' },
            { name: 'warning' },
            { name: 'space_das' }
        ];
        this.picto = "";
        this.categories = [];
        this.isBlock = false;
        this.isSection = false;
        this.currentChip = "";
        this.prevValue = "";
        this.defaultCategorie = [
            {
                name: "Utilisateur",
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
                ],
            },
            {
                name: "Session d'utilisateur",
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
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
                        conditionLocation: {},
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
                                conditionLocation: {},
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
                                conditionLocation: {},
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
                        conditionLocation: {},
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
                                conditionLocation: {},
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
                                conditionLocation: {},
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
                                conditionLocation: {},
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
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                                forms: [
                                    {
                                        label: "Utilisateur avec les droits similaires *",
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
                                        conditionLocation: {},
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
                                        conditionLocation: {},
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
                expandMore: false,
                suffixEndpoint: "category/messagerie",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
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
                        conditionLocation: {},
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
                                conditionLocation: {},
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
                                conditionLocation: {},
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
                        conditionLocation: {},
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
                                label: "Utilisateur avec les listes similaires *",
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
                                conditionLocation: {},
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
                                conditionLocation: {},
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
                        conditionLocation: {},
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
                                conditionLocation: {},
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
                expandMore: false,
                suffixEndpoint: "category/serveur",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
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
                        conditionLocation: {},
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
                                conditionLocation: {},
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
                                conditionLocation: {},
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
                                conditionLocation: {},
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
                expandMore: false,
                suffixEndpoint: "category/vpn",
                selected: true,
                expandOnboarding: true,
                defaultValue: false,
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
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
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                    },
                ],
            },
            {
                name: "Imprimantes",
                expandMore: false,
                suffixEndpoint: "category/imprimente",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
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
                        conditionLocation: {},
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
                                conditionLocation: {},
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
                expandMore: false,
                suffixEndpoint: "category/application",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
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
                        conditionLocation: {},
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
                                conditionLocation: {},
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
                expandMore: false,
                suffixEndpoint: "category/poste",
                selected: true,
                expandOnboarding: true,
                defaultValue: false,
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
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
                        conditionLocation: {},
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
                                label: "RealocatedEquipment",
                                key: "",
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
                                conditionLocation: {},
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
                                conditionLocation: {},
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
                                        conditionLocation: {},
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
                                        conditionLocation: {},
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
                expandMore: false,
                suffixEndpoint: "category/autres",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
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
                        conditionLocation: {},
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
                this.form.patchValue(profil);
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
    initForm() {
        this.form = this.fb.group({
            Name: ["", Validators.required],
            Picto: [""],
            Description: [""],
            Tags: ["", Validators.required],
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
                    this.categories = this.currentProfil.categories;
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
        this.categories.push({
            name: "",
            editable: true,
            isConditional: false,
            conditionValue: "",
            conditionLocation: {},
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
                    conditionLocation: {},
                },
            ],
        });
    }
    onAddNewField(...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 1 ? this.categories[params[0]].forms : length === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.push({
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
            conditionLocation: {},
            subLevel: params.length,
        });
    }
    onAddNewSubLevelField(...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.expandMore = true;
        forms.forms = [];
        forms.forms.push({
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
            conditionLocation: {},
            subLevel: params.length,
            expandMore: true,
        });
    }
    onRemoveField(...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms : length === 3 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.splice(params[length - 1], 1);
    }
    onRemoveCategory(e, i) {
        e.preventDefault();
        this.categories.splice(i, 1);
        this.canExit = false;
    }
    onChangeCategory() {
        return this.categories.every((cat) => cat.name !== "" && cat.forms.every((field) => field.label !== "" && field.type !== ""));
    }
    onSubmit(isPublish) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.form.valid && this.onChangeCategory()) {
                const result = this.id !== "0"
                    ? yield this.service.updateProfil(Object.assign(Object.assign(Object.assign({}, this.currentProfil), this.form.value), { Status: isPublish, categories: this.categories }))
                    : yield this.service.createProfil(Object.assign(Object.assign({}, this.form.value), { Status: isPublish, categories: this.categories }));
                if (result) {
                    localStorage.removeItem('profil');
                    yield this.service.getAllProfil();
                    this.canExit = true;
                    this.router.navigate([this.service.mainPath + '/template']);
                }
                else {
                    console.log("errror......");
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
        else if (type === "checkbox") {
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
        this.getConditionValues();
    }
    removeKeyword(keyword, ...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.defaultValue = forms.defaultValue.filter((option) => option.value !== keyword.value);
        this.getConditionValues();
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
        this.getConditionValues();
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
        this.getConditionValues();
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
        this.getConditionValues();
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
        this.getConditionValues();
    }
    onAcrelink(e) {
        e.preventDefault();
    }
    getConditionValues() {
        const conditionsList = [];
        const type = (forms) => forms.type === 'select' || forms.type === 'checkobx' || forms.type === 'checkbox_multiple' || forms.type === 'radio';
        for (let i = 0; i < this.categories.length; i++) {
            for (let j = 0; j < this.categories[i].forms.length; j++) {
                const forms = this.categories[i].forms[j];
                if (type(forms)) {
                    conditionsList.push({
                        level: 1,
                        categoryIndex: i,
                        currentIndex: j,
                        possibleValues: forms.defaultValue,
                        label: `${this.categories[i].name} > ${forms.label}`
                    });
                }
                if (forms.forms) {
                    for (let k = 0; k < forms.forms.length; k++) {
                        const sub = forms.forms[k];
                        if (sub.type === 'checkbox' || sub.type === 'select' || sub.type === 'radio' || sub.type === 'checkbox_multiple') {
                            conditionsList.push({
                                level: 2,
                                categoryIndex: i,
                                formIndex: j,
                                currentIndex: k,
                                possibleValues: sub.defaultValue,
                                label: `${this.categories[i].name} > ${forms.label} > ${sub.label}`
                            });
                        }
                        if (sub.forms) {
                            for (let l = 0; l < sub.forms.length; l++) {
                                const child = sub.forms[l];
                                if (child.type === 'checkbox' || child.type === 'select' || child.type === 'radio' || child.type === 'checkbox_multiple') {
                                    conditionsList.push({
                                        level: 3,
                                        categoryIndex: i,
                                        formIndex: j,
                                        subIndex: l,
                                        currentIndex: k,
                                        possibleValues: child.defaultValue,
                                        label: `${this.categories[i].name} > ${forms.label} > ${sub.label} >  ${child.label}`
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
        this.conditionData = conditionsList;
    }
    onActiveMenu(cat, i, event = null) {
        this.editIndex = i;
        this.paramsIndex = [i];
        this.onExpendMore({ field: cat }, i);
        this.onShowSection(event);
        this.currentEditBlock = cat;
    }
    catNameStart(str) {
        const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        return vowels.includes(str.substr(0, 1).toLocaleLowerCase());
    }
    onShowSection(e) {
        if (e)
            e.stopPropagation();
        this.isSection = true;
        this.isBlock = false;
    }
    onEditBlock(block, ...params) {
        this.isBlock = true;
        this.currentEditBlock = block;
        this.isSection = false;
        this.paramsIndex = params;
    }
    onRemoveblock(event, block) {
        event.preventDefault();
    }
    onRemoveFieldBlock(event) {
        event.preventDefault();
        const length = this.paramsIndex.length;
        this.canExit = false;
        const forms = length === 1 ? this.categories : length === 2 ? this.categories[this.paramsIndex[0]].forms : length === 3 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms : this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[2]].forms;
        forms.splice(this.paramsIndex[length - 1], 1);
        this.currentEditBlock = null;
        this.isBlock = false;
        this.isSection = false;
    }
    onDuplicatedBlock(event) {
        event.preventDefault();
        const length = this.paramsIndex.length;
        this.canExit = false;
        const forms = length === 1 ? this.categories : length === 2 ? this.categories[this.paramsIndex[0]].forms : length === 3 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms : this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[2]].forms;
        const cloneBlock = JSON.stringify(Object.assign(Object.assign({}, this.currentEditBlock), { name: this.currentEditBlock.name + ' - copie' }));
        forms.push(JSON.parse(cloneBlock));
        this.currentEditBlock = forms.at(-1);
        this.editIndex = forms.length - 1;
    }
    onKeyUpChip(event, field) {
        this.canExit = false;
        if (event.key === ";") {
            const exist = field.defaultValue.find((opt) => opt.value.toLocaleLowerCase() === event.target.value.split(";")[0].toLocaleLowerCase());
            if (!exist) {
                field.defaultValue.push({
                    value: event.target.value.split(";")[0],
                    checked: false
                });
                event.target.value = "";
            }
            else {
                event.target.value = "";
            }
        }
        this.getConditionValues();
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
                    field.defaultValue.push({ value: value.trim(), checked: false });
                    input.value = "";
                }
                else {
                    input.value = "";
                }
            }
        }
        this.getConditionValues();
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
        this.getConditionValues();
    }
    removeKeywordBlock(keyword, field) {
        this.canExit = false;
        field.defaultValue = field.defaultValue.filter((option) => option.value !== keyword.value);
        this.getConditionValues();
    }
    onChangeTypeBlock(field) {
        this.canExit = false;
        if (field.type === "select" || field.type === "radio" || field.type === "checkbox_multiple") {
            field.defaultValue = [];
        }
        else if (field.type === "checkbox") {
            field.defaultValue = true;
        }
        else {
            field.defaultValue = "";
        }
    }
    onAddNewSubLevelFieldBlock(event) {
        event.preventDefault();
        this.canExit = false;
        const length = this.paramsIndex.length;
        const forms = length === 1 ? this.categories[this.paramsIndex[0]] : length === 2 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[length - 1]] : length === 3 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[length - 1]] : this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[2]].forms[this.paramsIndex[length - 1]];
        forms.expandMore = true;
        forms.forms = forms.forms || [];
        forms.forms.push({
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
            conditionLocation: {},
            deleteable: true,
            subLevel: 1,
            expandMore: false,
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
    onSelectCondition(conditionLocation) {
        this.currentEditBlock.conditionLocation = conditionLocation;
    }
}
TemplateProfileCreateComponent.ɵfac = function TemplateProfileCreateComponent_Factory(t) { return new (t || TemplateProfileCreateComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(MatDialog)); };
TemplateProfileCreateComponent.ɵcmp = ɵɵdefineComponent({ type: TemplateProfileCreateComponent, selectors: [["onboarding-create-profile-template"]], decls: 28, vars: 7, consts: [[3, "formGroup"], [1, "category"], [1, "side-bar"], [1, "summary"], [3, "click"], ["class", "li-title", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "type", "submit", 1, "register-button", 3, "click"], ["mat-button", "", "type", "submit", 1, "register-button", "live-button", 3, "click"], ["cdkDropListGroup", "", 1, "fields"], ["cdkDropList", "", 1, "fields-inner", "example-list", "mt-10", 3, "cdkDropListData", "cdkDropListDropped"], ["parentList", "cdkDropList"], ["class", "category-item section-item", "cdkDrag", "", 3, "id", "paddingBottom", "class", 4, "ngFor", "ngForOf"], [1, "add-button-container", "add-category-button"], [1, "field-property"], ["class", "property-content", 4, "ngIf"], [1, "li-title", 3, "click"], [3, "ngxScrollTo"], ["cdkDrag", "", 1, "category-item", "section-item", 3, "id"], ["cdkDragHandle", "", 1, "left-action", "move-icons"], ["mat-raised-button", "", 1, "transparent-button", 3, "click"], [1, "drag-icon"], [1, "field-content"], [1, "field-item", 3, "click"], [1, "full-width", "input-category-name"], [1, "sub-category-name"], ["class", "child-list", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "click"], [4, "ngIf"], ["cdkDropList", "", 1, "child-list", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "field-box", 3, "width", "id", 4, "ngFor", "ngForOf"], [1, "field-box", 3, "id"], ["cdkDrag", ""], [1, "fields-content"], ["class", "button-action", 4, "ngIf"], [1, "fields-container"], ["class", "sub-header", 4, "ngIf"], [3, "field", "length", "i", "j", "conditionData", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock", "onGetConditionValues"], ["class", "child", 4, "ngIf"], ["class", "add-button-container add-button-sub-category", 4, "ngIf"], [1, "button-action"], [1, "sub-header"], [1, "field-item"], [2, "width", "100%"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "disabled", "click"], [1, "child"], ["class", "child-content", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 1, "child-content", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "", "style", "margin-bottom: 10px", 3, "id", 4, "ngFor", "ngForOf"], [1, "", 2, "margin-bottom", "10px", 3, "id"], ["class", "button-action child-2-background", 4, "ngIf"], [1, "button-action", "child-2-background"], ["type", "text", "required", "", "placeholder", "Saisir le nom de la sous cat\u00E9gorie", 1, "full-width", "input-category-name", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["class", "", 3, "id", 4, "ngFor", "ngForOf"], [1, "", 3, "id"], ["class", "button-action child-3-background", 4, "ngIf"], [1, "button-action", "child-3-background"], [1, "add-button-container", "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 2, "margin", "10px auto", 3, "disabled", "click"], [1, "property-content"], ["appearance", "outline", 1, "form-field", "mat-select", "full-width", 2, "cursor", "pointer"], ["disabled", "true", "required", "", 1, "select-type-class", 3, "ngModel", "ngModelOptions", "click", "ngModelChange"], ["value", "text"], ["value", "textarea"], ["value", "radio"], ["value", "select"], ["value", "checkbox"], ["value", "checkbox_multiple"], ["value", "email"], ["value", "password"], ["value", "date"], ["value", "tel"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "ngSwitch"], ["class", "flex-auto", 4, "ngSwitchCase"], ["class", "flex-auto full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 3, "opacity", 4, "ngSwitchDefault"], [1, "mandatory", "top-10", "bottom-10"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "mandatory", "top-10"], ["class", "form-field mat-select full-width", "appearance", "outline", 4, "ngIf"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "example-radio-button", "style", "margin-right: 10px", 3, "value", 4, "ngFor", "ngForOf"], [1, "bloc-action"], ["mat-button", "", 3, "click"], ["mat-button", "", 1, "delete-bloc", 3, "click"], [1, "flex-auto"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "full-width"], ["cdkDropList", "", "aria-label", "Video keywords; let index=index", "multiple", "", "selectable", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList", "chipList", ""], ["style", "min-height: 25px", "cdkDrag", "", 3, "selected", "value", "removable", "dblclick", "click", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "ngModel", "ngModelOptions", "matChipInputTokenEnd", "keyup", "ngModelChange"], ["chipsInput", ""], ["cdkDrag", "", 2, "min-height", "25px", 3, "selected", "value", "removable", "dblclick", "click", "removed"], ["matChipRemove", ""], ["type", "text", "matInput", "", "placeholder", "Description...", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "", 3, "type", "disabled", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "mat-select", "full-width"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "example-radio-button", 2, "margin-right", "10px", 3, "value"], [1, ""]], template: function TemplateProfileCreateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "main");
        ɵɵelementStart(1, "form", 0);
        ɵɵelementStart(2, "div", 1);
        ɵɵelementStart(3, "div", 2);
        ɵɵelementStart(4, "div", 3);
        ɵɵelementStart(5, "h3");
        ɵɵelementStart(6, "span");
        ɵɵtext(7);
        ɵɵelementEnd();
        ɵɵelementStart(8, "mat-icon", 4);
        ɵɵlistener("click", function TemplateProfileCreateComponent_Template_mat_icon_click_8_listener() { return ctx.openDialog(); });
        ɵɵtext(9, "edit");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "ol");
        ɵɵtemplate(11, TemplateProfileCreateComponent_li_11_Template, 4, 4, "li", 5);
        ɵɵelementEnd();
        ɵɵelementStart(12, "button", 6);
        ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_12_listener() { return ctx.onSubmit(false); });
        ɵɵtext(13, "Enregistrer le brouillon");
        ɵɵelementEnd();
        ɵɵelementStart(14, "button", 7);
        ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_14_listener() { return ctx.onSubmit(true); });
        ɵɵtext(15, "Publier");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(16, "div", 8);
        ɵɵelementStart(17, "div", 9, 10);
        ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_Template_div_cdkDropListDropped_17_listener($event) { return ctx.drop($event); });
        ɵɵtemplate(19, TemplateProfileCreateComponent_div_19_Template, 16, 10, "div", 11);
        ɵɵelementEnd();
        ɵɵelementStart(20, "div", 12);
        ɵɵelementStart(21, "button", 4);
        ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_21_listener($event) { return ctx.onAddNewCategory($event); });
        ɵɵelementStart(22, "mat-icon");
        ɵɵtext(23, "add");
        ɵɵelementEnd();
        ɵɵtext(24, " Ajouter une cat\u00E9gorie ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(25, "div", 13);
        ɵɵtemplate(26, TemplateProfileCreateComponent_div_26_Template, 63, 23, "div", 14);
        ɵɵtemplate(27, TemplateProfileCreateComponent_div_27_Template, 26, 8, "div", 14);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(6);
        ɵɵtextInterpolate(ctx.form.get("Name").value);
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.categories);
        ɵɵadvance(6);
        ɵɵproperty("cdkDropListData", ctx.categories);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.categories);
        ɵɵadvance(7);
        ɵɵproperty("ngIf", ctx.isBlock && ctx.currentEditBlock);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isSection && ctx.currentEditBlock);
    } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatIcon, NgForOf, MatButton, CdkDropListGroup, CdkDropList, NgIf, ScrollToDirective, CdkDrag, CdkDragHandle, SubTemplateProfileComponent, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, NativeElementInjectorDirective, MatFormField, MatLabel, MatSelect, MatOption, MatInput, NgSwitch, NgSwitchCase, NgSwitchDefault, MatSlideToggle, MatRadioGroup, MatCheckbox, MatChipList, MatChipInput, MatChip, MatChipRemove, MatRadioButton], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;max-width:1500px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name[_ngcontent-%COMP%]{border:none;outline:0;text-align:left;font-family:Nexa;font-weight:700;font-size:20px;line-height:28px;color:#242731}.sub-category-name[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;display:flex;align-items:center;color:#575f6e}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-select.mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:3px 0 8px}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}[_nghost-%COMP%]     .cdk-drag-preview .input-category-name div.mat-form-field-outline-start, [_nghost-%COMP%]     .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-label-wrapper{display:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-infix{border-top:none}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;position:relative;border-radius:8px;background-color:#fff;margin-bottom:15px;margin-right:5px;padding:6px 15px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;width:40px;align-self:baseline;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%]{color:#171f26;cursor:move;margin-right:15px}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%;-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .child-list[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .child-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;background-color:transparent}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-box[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-box[_ngcontent-%COMP%]{margin-bottom:15px;display:flex;align-items:center;justify-content:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .child-content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;align-items:center;justify-content:center}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-family:Nexa;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;text-transform:capitalize}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;font-size:15px;list-style-position:inside;padding-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{text-align:center;list-style:none;font-family:Nexa;font-weight:700;font-size:18px;line-height:24px;text-transform:capitalize;height:48px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px;display:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{display:flex;flex-direction:row;justify-content:center;align-items:center;position:static;background:rgba(84,60,182,.5);flex:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{display:initial!important}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:90%;max-height:100vh;overflow:hidden;overflow-x:hidden;margin-right:10px;position:relative;margin-top:10px;height:84vh}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .fields-inner[_ngcontent-%COMP%]{max-height:77vh;width:100%;overflow:auto;padding-right:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-category-button[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:97.5%}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:93.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px;position:absolute;left:0;bottom:5px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#000;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:0;width:100%;min-width:250px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{align-self:baseline;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%]{color:#171f26;cursor:move;margin-right:15px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#039be5;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #171f26!important;border-radius:7px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important;padding:5px;box-shadow:0 0 0 rgba(0,0,0,.2);margin:30px 0}.live-button[_ngcontent-%COMP%]{background-color:#fff!important;color:#171f26!important;border:2px solid #171f26!important}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}.field-property[_ngcontent-%COMP%]{padding:11px;height:87vh;width:400px}.field-property[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}.field-property[_ngcontent-%COMP%]   .property-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;padding:20px;background:#fff;border-radius:8px 8px 0 0;height:100%;width:100%}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%], .field-property[_ngcontent-%COMP%]   .property-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:6px;margin-top:10px}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:5px}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   .delete-bloc[_ngcontent-%COMP%]{background:#f44336;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px;color:#fff}[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:0 0;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:0 0}.toogle-button[_ngcontent-%COMP%]{color:#707273;display:flex;align-items:center;font-family:Nexa;font-style:normal;font-weight:700;font-size:18px;line-height:18px}.toogle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}[_nghost-%COMP%]     .mandatory .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .mandatory .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .mandatory .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .mandatory .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .mandatory .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}[_nghost-%COMP%]     .mandatory .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5}.top-10[_ngcontent-%COMP%]{margin-top:10px}.bottom-10[_ngcontent-%COMP%]{margin-bottom:10px}.section-item.active[_ngcontent-%COMP%], .section-item[_ngcontent-%COMP%]:hover{border:2px solid #242731;box-sizing:border-box;border-radius:8px;cursor:pointer}  .select-type-class.mat-select-disabled .mat-select-value{color:#000!important;cursor:pointer}  .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5}  .fields-content .mat-radio-button.mat-accent .mat-radio-inner-circle,   .fields-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .fields-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5}  .fields-content .mat-checkbox-checkmark-path{stroke:#039be5!important}  .fields-content .mat-checkbox-frame{border:2px solid #039be5!important}  .fields-content .mat-checkbox-inner-container{height:20px!important;width:20px!important}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TemplateProfileCreateComponent, [{
        type: Component,
        args: [{
                selector: "onboarding-create-profile-template",
                templateUrl: "./template-profile-create.component.html",
                styleUrls: ["./template-profile-create.component.scss"],
            }]
    }], function () { return [{ type: FormBuilder }, { type: OnboardingService }, { type: ActivatedRoute }, { type: Router }, { type: MatDialog }]; }, null); })();

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
MaterialElevationDirective.ɵfac = function MaterialElevationDirective_Factory(t) { return new (t || MaterialElevationDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
MaterialElevationDirective.ɵdir = ɵɵdefineDirective({ type: MaterialElevationDirective, selectors: [["", "appMaterialElevation", ""]], hostBindings: function MaterialElevationDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseenter", function MaterialElevationDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MaterialElevationDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { defaultElevation: "defaultElevation", raisedElevation: "raisedElevation" }, features: [ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MaterialElevationDirective, [{
        type: Directive,
        args: [{
                selector: '[appMaterialElevation]'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { defaultElevation: [{
            type: Input
        }], raisedElevation: [{
            type: Input
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

const _c0$2 = function (a0) { return [a0]; };
function TemplateProfileListComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r279 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "div", 14);
    ɵɵelementStart(2, "span");
    ɵɵtext(3, "Live");
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-slide-toggle", 15);
    ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_32_Template_mat_slide_toggle_ngModelChange_4_listener($event) { ɵɵrestoreView(_r279); const d_r277 = ctx.$implicit; return d_r277.Status = $event; })("ngModelChange", function TemplateProfileListComponent_div_32_Template_mat_slide_toggle_ngModelChange_4_listener() { ɵɵrestoreView(_r279); const d_r277 = ctx.$implicit; const ctx_r280 = ɵɵnextContext(); return ctx_r280.onChangeStatus(d_r277, false); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 16);
    ɵɵelementStart(6, "p", 17);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementStart(8, "p", 18);
    ɵɵtext(9);
    ɵɵpipe(10, "date");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 19);
    ɵɵelementStart(12, "button", 20);
    ɵɵlistener("click", function TemplateProfileListComponent_div_32_Template_button_click_12_listener() { ɵɵrestoreView(_r279); const d_r277 = ctx.$implicit; const ctx_r281 = ɵɵnextContext(); return ctx_r281.onEditProfil(d_r277._id); });
    ɵɵelementStart(13, "mat-icon");
    ɵɵtext(14, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(15, "button", 20);
    ɵɵlistener("click", function TemplateProfileListComponent_div_32_Template_button_click_15_listener() { ɵɵrestoreView(_r279); const d_r277 = ctx.$implicit; const ctx_r282 = ɵɵnextContext(); return ctx_r282.copyTemplate(d_r277); });
    ɵɵelementStart(16, "mat-icon");
    ɵɵtext(17, "filter_none");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(18, "button", 20);
    ɵɵlistener("click", function TemplateProfileListComponent_div_32_Template_button_click_18_listener() { ɵɵrestoreView(_r279); const d_r277 = ctx.$implicit; const ctx_r283 = ɵɵnextContext(); return ctx_r283.onDelete(d_r277._id); });
    ɵɵelementStart(19, "mat-icon");
    ɵɵtext(20, "delete");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const d_r277 = ctx.$implicit;
    const ctx_r275 = ɵɵnextContext();
    ɵɵproperty("defaultElevation", 0);
    ɵɵadvance(4);
    ɵɵproperty("ngModel", d_r277.Status);
    ɵɵadvance(1);
    ɵɵproperty("routerLink", ɵɵpureFunction1(8, _c0$2, ctx_r275.service.mainPath + "/template/" + d_r277._id));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", d_r277.Name, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(10, 5, d_r277.createdAt, "dd/MM/yy"), "");
} }
function TemplateProfileListComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r286 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "div", 21);
    ɵɵelementStart(2, "span");
    ɵɵtext(3, "Brouillon");
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-slide-toggle", 22);
    ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_34_Template_mat_slide_toggle_ngModelChange_4_listener($event) { ɵɵrestoreView(_r286); const d_r284 = ctx.$implicit; return d_r284.Status = $event; })("ngModelChange", function TemplateProfileListComponent_div_34_Template_mat_slide_toggle_ngModelChange_4_listener() { ɵɵrestoreView(_r286); const d_r284 = ctx.$implicit; const ctx_r287 = ɵɵnextContext(); return ctx_r287.onChangeStatus(d_r284, true); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 16);
    ɵɵelementStart(6, "p", 17);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementStart(8, "p", 18);
    ɵɵtext(9);
    ɵɵpipe(10, "date");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 19);
    ɵɵelementStart(12, "button", 20);
    ɵɵlistener("click", function TemplateProfileListComponent_div_34_Template_button_click_12_listener() { ɵɵrestoreView(_r286); const d_r284 = ctx.$implicit; const ctx_r288 = ɵɵnextContext(); return ctx_r288.onEditProfil(d_r284._id); });
    ɵɵelementStart(13, "mat-icon");
    ɵɵtext(14, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(15, "button", 20);
    ɵɵlistener("click", function TemplateProfileListComponent_div_34_Template_button_click_15_listener() { ɵɵrestoreView(_r286); const d_r284 = ctx.$implicit; const ctx_r289 = ɵɵnextContext(); return ctx_r289.copyTemplate(d_r284); });
    ɵɵelementStart(16, "mat-icon");
    ɵɵtext(17, "filter_none");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(18, "button", 20);
    ɵɵlistener("click", function TemplateProfileListComponent_div_34_Template_button_click_18_listener() { ɵɵrestoreView(_r286); const d_r284 = ctx.$implicit; const ctx_r290 = ɵɵnextContext(); return ctx_r290.onDelete(d_r284._id); });
    ɵɵelementStart(19, "mat-icon");
    ɵɵtext(20, "delete");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const d_r284 = ctx.$implicit;
    const ctx_r276 = ɵɵnextContext();
    ɵɵproperty("defaultElevation", 0);
    ɵɵadvance(4);
    ɵɵproperty("ngModel", d_r284.Status);
    ɵɵadvance(1);
    ɵɵproperty("routerLink", ɵɵpureFunction1(8, _c0$2, ctx_r276.service.mainPath + "/template/" + d_r284._id));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", d_r284.Name, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(10, 5, d_r284.createdAt, "dd/MM/yy"), "");
} }
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
            if (confirm("Voulez vous supprimer cette template ?")) {
                const result = yield this.service.deleteProfil(id);
                if (result) {
                    yield this.getAllProfils();
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
    filterTemplate(value, name) {
        this.currentFilter = name;
        if (this.currentFilter === 'all') {
            this.publishTemplate = this.datas.filter((d) => d.Status === true);
            this.draftTemplate = this.datas.filter((d) => d.Status === false);
        }
        else if (this.currentFilter === 'publish') {
            this.publishTemplate = this.datas.filter((d) => d.Status === true);
            this.draftTemplate = [];
        }
        else if (this.currentFilter === 'draft') {
            this.publishTemplate = [];
            this.draftTemplate = this.datas.filter((d) => d.Status === false);
        }
        else if (this.currentFilter === 'date') {
            this.publishTemplate = this.datas.filter((d) => d.Status === true);
            this.draftTemplate = this.datas.filter((d) => d.Status === false);
            this.publishTemplate.sort((a, b) => value === 'desc' ? (new Date(b.createdAt).getTime() > new Date(a.createdAt).getTime() ? 1 : -1) : (new Date(b.createdAt).getTime() > new Date(a.createdAt).getTime() ? -1 : 1));
            this.draftTemplate.sort((a, b) => value === 'desc' ? (new Date(b.createdAt).getTime() > new Date(a.createdAt).getTime() ? 1 : -1) : (new Date(b.createdAt).getTime() > new Date(a.createdAt).getTime() ? -1 : 1));
        }
        else {
            this.publishTemplate = this.datas.filter((d) => d.Status === true);
            this.draftTemplate = this.datas.filter((d) => d.Status === false);
            this.publishTemplate.sort((a, b) => value === 'desc' ? (b.Name.toLowerCase() > a.Name.toLowerCase() ? 1 : -1) : (b.Name.toLowerCase() > a.Name.toLowerCase() ? -1 : 1));
            this.draftTemplate.sort((a, b) => value === 'desc' ? (b.Name.toLowerCase() > a.Name.toLowerCase() ? 1 : -1) : (b.Name.toLowerCase() > a.Name.toLowerCase() ? -1 : 1));
        }
    }
    copyTemplate(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = data, rest = __rest(data, ["_id"]);
            const result = yield this.service.createProfil(Object.assign(Object.assign({}, rest), { Name: data.Name + " - copie" }));
            if (result) {
                yield this.getAllProfils();
            }
            else {
                console.log("errror......");
            }
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
TemplateProfileListComponent.ɵfac = function TemplateProfileListComponent_Factory(t) { return new (t || TemplateProfileListComponent)(ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(MatDialog)); };
TemplateProfileListComponent.ɵcmp = ɵɵdefineComponent({ type: TemplateProfileListComponent, selectors: [["onboarding-profile-list"]], viewQuery: function TemplateProfileListComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(MatPaginator, true);
        ɵɵviewQuery(MatSort, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.paginator = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, decls: 35, vars: 15, consts: [[1, "main"], [1, "content-list"], [1, "list"], [1, "list-title"], [3, "click"], [2, "display", "flex", "align-items", "center"], [2, "display", "flex", "flex-direction", "column", "margin-left", "5px"], [2, "margin-bottom", "-3px", 3, "click"], [2, "margin-top", "-3px", 3, "click"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "click"], [1, "live-template"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], [1, "draft-template"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelChange"], [1, "box-content", 3, "routerLink"], [1, "template-title"], [1, "template-date"], [1, "template-footer"], [1, "action-button", 2, "background-color", "transparent", 3, "click"], [1, "toogle-button", "draft"], [1, "draft", 3, "ngModel", "ngModelChange"]], template: function TemplateProfileListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "ul");
        ɵɵelementStart(5, "li", 4);
        ɵɵlistener("click", function TemplateProfileListComponent_Template_li_click_5_listener() { return ctx.filterTemplate("", "all"); });
        ɵɵtext(6);
        ɵɵelementEnd();
        ɵɵelementStart(7, "li", 4);
        ɵɵlistener("click", function TemplateProfileListComponent_Template_li_click_7_listener() { return ctx.filterTemplate("", "publish"); });
        ɵɵtext(8);
        ɵɵelementEnd();
        ɵɵelementStart(9, "li", 4);
        ɵɵlistener("click", function TemplateProfileListComponent_Template_li_click_9_listener() { return ctx.filterTemplate("", "draft"); });
        ɵɵtext(10);
        ɵɵelementEnd();
        ɵɵelementStart(11, "li", 5);
        ɵɵelementStart(12, "span");
        ɵɵtext(13, "Date");
        ɵɵelementEnd();
        ɵɵelementStart(14, "span", 6);
        ɵɵelementStart(15, "mat-icon", 7);
        ɵɵlistener("click", function TemplateProfileListComponent_Template_mat_icon_click_15_listener() { return ctx.filterTemplate("asc", "date"); });
        ɵɵtext(16, " keyboard_arrow_up");
        ɵɵelementEnd();
        ɵɵelementStart(17, "mat-icon", 8);
        ɵɵlistener("click", function TemplateProfileListComponent_Template_mat_icon_click_17_listener() { return ctx.filterTemplate("desc", "date"); });
        ɵɵtext(18, " keyboard_arrow_down");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(19, "li", 5);
        ɵɵelementStart(20, "span");
        ɵɵtext(21, "Nom");
        ɵɵelementEnd();
        ɵɵelementStart(22, "span", 6);
        ɵɵelementStart(23, "mat-icon", 7);
        ɵɵlistener("click", function TemplateProfileListComponent_Template_mat_icon_click_23_listener() { return ctx.filterTemplate("asc", "name"); });
        ɵɵtext(24, " keyboard_arrow_up");
        ɵɵelementEnd();
        ɵɵelementStart(25, "mat-icon", 8);
        ɵɵlistener("click", function TemplateProfileListComponent_Template_mat_icon_click_25_listener() { return ctx.filterTemplate("desc", "name"); });
        ɵɵtext(26, " keyboard_arrow_down");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(27, "a", 9);
        ɵɵlistener("click", function TemplateProfileListComponent_Template_a_click_27_listener() { return ctx.openDialog(); });
        ɵɵtext(28, " Cr\u00E9er profil ");
        ɵɵelementStart(29, "mat-icon");
        ɵɵtext(30, "add");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(31, "div", 10);
        ɵɵtemplate(32, TemplateProfileListComponent_div_32_Template, 21, 10, "div", 11);
        ɵɵelementEnd();
        ɵɵelementStart(33, "div", 12);
        ɵɵtemplate(34, TemplateProfileListComponent_div_34_Template, 21, 10, "div", 11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(5);
        ɵɵclassMap(ctx.currentFilter === "all" ? "active" : "");
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" Tous (", ctx.datas.length, ") ");
        ɵɵadvance(1);
        ɵɵclassMap(ctx.currentFilter === "publish" ? "active" : "");
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" Publi\u00E9s (", ctx.publishTemplateLength, ") ");
        ɵɵadvance(1);
        ɵɵclassMap(ctx.currentFilter === "draft" ? "active" : "");
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" Brouillons (", ctx.draftTemplateLength, ") ");
        ɵɵadvance(1);
        ɵɵclassMap(ctx.currentFilter === "date" ? "active" : "");
        ɵɵadvance(8);
        ɵɵclassMap(ctx.currentFilter === "name" ? "active" : "");
        ɵɵadvance(13);
        ɵɵproperty("ngForOf", ctx.publishTemplate);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.draftTemplate);
    } }, directives: [MatIcon, MatAnchor, NgForOf, MaterialElevationDirective, MatSlideToggle, NgControlStatus, NgModel, NativeElementInjectorDirective, RouterLink], pipes: [DatePipe], styles: [".main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-title[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-date[_ngcontent-%COMP%]{font-family:Nexa;font-weight:250;font-size:14px;line-height:120%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:10px;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{margin-right:50px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .draft-template[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .live-template[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:266px;height:300px;position:relative;margin-right:50px;margin-bottom:50px;background:#fff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;text-align:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:no-repeat padding-box #fff;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-family:Nexa;font-style:normal;font-weight:700;font-size:18px;line-height:18px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button.draft[_ngcontent-%COMP%]{color:#f3a124}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{background-color:#171f26}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]{background:#543cb6;border-radius:0 0 8px 8px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px;display:flex;justify-content:center;align-items:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]   button.action-button[_ngcontent-%COMP%]{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TemplateProfileListComponent, [{
        type: Component,
        args: [{
                selector: "onboarding-profile-list",
                templateUrl: "./template-profile-list.component.html",
                styleUrls: ["./template-profile-list.component.scss"],
            }]
    }], function () { return [{ type: OnboardingService }, { type: Router }, { type: MatDialog }]; }, { paginator: [{
            type: ViewChild,
            args: [MatPaginator]
        }], sort: [{
            type: ViewChild,
            args: [MatSort]
        }] }); })();

class CanDeactivateGuard {
    canDeactivate(component, route, state) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
CanDeactivateGuard.ɵfac = function CanDeactivateGuard_Factory(t) { return new (t || CanDeactivateGuard)(); };
CanDeactivateGuard.ɵprov = ɵɵdefineInjectable({ token: CanDeactivateGuard, factory: CanDeactivateGuard.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CanDeactivateGuard, [{
        type: Injectable
    }], null, null); })();

function SubOnboardingCreateComponent_div_2_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const select_r388 = ctx.$implicit;
    ɵɵproperty("value", select_r388.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", select_r388.value, "");
} }
const _c0$3 = function () { return { standalone: true }; };
function SubOnboardingCreateComponent_div_2_mat_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r390 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-select", 10);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { ɵɵrestoreView(_r390); const ctx_r389 = ɵɵnextContext(2); return ctx_r389.field.selector.value = $event; });
    ɵɵtemplate(1, SubOnboardingCreateComponent_div_2_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r386 = ɵɵnextContext(2);
    ɵɵproperty("ngModel", ctx_r386.field.selector.value)("ngModelOptions", ɵɵpureFunction0(3, _c0$3));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r386.field.selector.defaultValue);
} }
const _c1$2 = function () { return { "display": "inine-block" }; };
function SubOnboardingCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r392 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7);
    ɵɵelementStart(1, "mat-checkbox", 8);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_Template_mat_checkbox_ngModelChange_1_listener($event) { ɵɵrestoreView(_r392); const ctx_r391 = ɵɵnextContext(); return ctx_r391.field.value = $event; });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, SubOnboardingCreateComponent_div_2_mat_select_3_Template, 2, 4, "mat-select", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r379 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r379.checkSubForm(ctx_r379.field) ? "checkbox-title-active" : "");
    ɵɵproperty("ngModel", ctx_r379.field.value)("required", ctx_r379.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(8, _c0$3))("ngStyle", ctx_r379.field.selector && ɵɵpureFunction0(9, _c1$2));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r379.field.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r379.field.selector);
} }
function SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r396 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-checkbox", 15);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { ɵɵrestoreView(_r396); const opt_r394 = ctx.$implicit; return opt_r394.checked = $event; });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const opt_r394 = ctx.$implicit;
    const ctx_r393 = ɵɵnextContext(2);
    ɵɵproperty("checked", opt_r394.checked)("ngModel", opt_r394.checked)("required", ctx_r393.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(5, _c0$3));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", opt_r394.value, " ");
} }
function SubOnboardingCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelementStart(1, "label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 13);
    ɵɵtemplate(4, SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template, 2, 6, "mat-checkbox", 14);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r380 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r380.field.label);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r380.field.defaultValue);
} }
function SubOnboardingCreateComponent_div_4_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-radio-button", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const opt_r399 = ctx.$implicit;
    ɵɵproperty("value", opt_r399.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", opt_r399.value, " ");
} }
function SubOnboardingCreateComponent_div_4_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r401 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 20);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Autre option");
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 21);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r401); const ctx_r400 = ɵɵnextContext(2); return ctx_r400.field.otherValue = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r398 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("required", ctx_r398.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(3, _c0$3))("ngModel", ctx_r398.field.otherValue);
} }
function SubOnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r403 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16);
    ɵɵelementStart(1, "label", 17);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-radio-group", 18);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_Template_mat_radio_group_ngModelChange_3_listener($event) { ɵɵrestoreView(_r403); const ctx_r402 = ɵɵnextContext(); return ctx_r402.field.value = $event; });
    ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 11);
    ɵɵelementEnd();
    ɵɵtemplate(5, SubOnboardingCreateComponent_div_4_mat_form_field_5_Template, 4, 4, "mat-form-field", 19);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r381 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r381.field.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r381.field.value)("required", ctx_r381.field.isMandatory);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r381.field.defaultValue);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", "autre" === ctx_r381.formatOther(ctx_r381.field.value));
} }
function SubOnboardingCreateComponent_div_5_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const opt_r406 = ctx.$implicit;
    ɵɵproperty("value", opt_r406.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate(opt_r406.value);
} }
function SubOnboardingCreateComponent_div_5_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r408 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 20);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Autre option");
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 21);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_mat_form_field_6_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r408); const ctx_r407 = ɵɵnextContext(2); return ctx_r407.field.otherValue = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r405 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("required", ctx_r405.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(3, _c0$3))("ngModel", ctx_r405.field.otherValue);
} }
function SubOnboardingCreateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r410 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16);
    ɵɵelementStart(1, "mat-form-field", 22);
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-select", 23);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_Template_mat_select_ngModelChange_4_listener($event) { ɵɵrestoreView(_r410); const ctx_r409 = ɵɵnextContext(); return ctx_r409.field.value = $event; });
    ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_mat_option_5_Template, 2, 2, "mat-option", 11);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(6, SubOnboardingCreateComponent_div_5_mat_form_field_6_Template, 4, 4, "mat-form-field", 19);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r382 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r382.field.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r382.field.value)("ngModelOptions", ɵɵpureFunction0(6, _c0$3))("required", ctx_r382.field.isMandatory);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r382.field.defaultValue);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", "autre" === ctx_r382.formatOther(ctx_r382.field.value));
} }
function SubOnboardingCreateComponent_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r412 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 24);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "textarea", 25);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_6_Template_textarea_ngModelChange_3_listener($event) { ɵɵrestoreView(_r412); const ctx_r411 = ɵɵnextContext(); return ctx_r411.field.value = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r383 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r383.field.label);
    ɵɵadvance(1);
    ɵɵproperty("required", ctx_r383.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(4, _c0$3))("ngModel", ctx_r383.field.value);
} }
function SubOnboardingCreateComponent_div_7_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, "Le t\u00E9l\u00E9phone est invalide");
    ɵɵelementEnd();
} }
function SubOnboardingCreateComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r415 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 26);
    ɵɵelementStart(1, "mat-label", 27);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "ngx-intl-tel-input", 28);
    ɵɵlistener("input", function SubOnboardingCreateComponent_div_7_Template_ngx_intl_tel_input_input_3_listener() { ɵɵrestoreView(_r415); const ctx_r414 = ɵɵnextContext(); return ctx_r414.checkPhone(ctx_r414.field.value); })("ngModelChange", function SubOnboardingCreateComponent_div_7_Template_ngx_intl_tel_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r415); const ctx_r416 = ɵɵnextContext(); return ctx_r416.field.value = $event; });
    ɵɵelementEnd();
    ɵɵtemplate(4, SubOnboardingCreateComponent_div_7_mat_error_4_Template, 2, 0, "mat-error", 29);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r384 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r384.field.label);
    ɵɵadvance(1);
    ɵɵproperty("cssClass", "input-phone")("preferredCountries", ctx_r384.preferredCountries)("enableAutoCountrySelect", false)("enablePlaceholder", true)("customPlaceholder", "Phone")("selectFirstCountry", false)("selectedCountryISO", ctx_r384.flag(ctx_r384.field.value))("maxLength", 15)("inputId", ctx_r384.field.key)("phoneValidation", true)("separateDialCode", ctx_r384.separateDialCode)("numberFormat", ctx_r384.PhoneNumberFormat.National)("ngModelOptions", ɵɵpureFunction0(16, _c0$3))("ngModel", ctx_r384.field.value);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r384.invalideValue);
} }
function SubOnboardingCreateComponent_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    const _r418 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 30);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 31);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_8_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r418); const ctx_r417 = ɵɵnextContext(); return ctx_r417.field.value = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r385 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r385.field.label);
    ɵɵadvance(1);
    ɵɵproperty("type", ctx_r385.field.type)("required", ctx_r385.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(5, _c0$3))("ngModel", ctx_r385.field.value);
} }
const _c2$1 = [[["", 8, "child"]]];
const _c3$1 = [".child"];
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
        var _a;
        if (other && typeof other !== 'boolean') {
            return (((_a = other) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) || '');
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
SubOnboardingCreateComponent.ɵcmp = ɵɵdefineComponent({ type: SubOnboardingCreateComponent, selectors: [["lib-sub-create-onboarding"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckValue: "onCheckValue" }, ngContentSelectors: _c3$1, decls: 10, vars: 7, consts: [[1, "field-item"], [3, "ngSwitch"], ["class", "flex-auto w-30", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width tel-input", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "w-30"], [1, "form-field", 3, "ngModel", "required", "ngModelOptions", "ngStyle", "ngModelChange"], ["placeholder", "Company", "required", "", "style", "display: inline-block; width: 50%;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", "required", "", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange"], [1, "flex-auto", "w-30", "field-size"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], ["class", "form-field field-size other-option", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", "other-option"], ["type", "text", "matInput", "", "placeholder", "", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "rows", "5", "matInput", "", "placeholder", "Description...", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], [1, "form-field", "full-width", "tel-input"], [1, "tel-label"], ["id", "onboarding-phone-input", "name", "phone", 1, "phone-input-profile", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "customPlaceholder", "selectFirstCountry", "selectedCountryISO", "maxLength", "inputId", "phoneValidation", "separateDialCode", "numberFormat", "ngModelOptions", "ngModel", "input", "ngModelChange"], [4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c2$1);
        ɵɵelementStart(0, "div", 0);
        ɵɵelementContainerStart(1, 1);
        ɵɵtemplate(2, SubOnboardingCreateComponent_div_2_Template, 4, 10, "div", 2);
        ɵɵtemplate(3, SubOnboardingCreateComponent_div_3_Template, 5, 2, "div", 2);
        ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_Template, 6, 5, "div", 3);
        ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_Template, 7, 7, "div", 3);
        ɵɵtemplate(6, SubOnboardingCreateComponent_mat_form_field_6_Template, 4, 5, "mat-form-field", 4);
        ɵɵtemplate(7, SubOnboardingCreateComponent_div_7_Template, 5, 17, "div", 5);
        ɵɵtemplate(8, SubOnboardingCreateComponent_mat_form_field_8_Template, 4, 6, "mat-form-field", 6);
        ɵɵelementContainerEnd();
        ɵɵelementEnd();
        ɵɵprojection(9);
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngSwitch", ctx.field.type);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "checkbox");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "checkbox_multiple");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "radio");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "select");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "textarea");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "tel");
    } }, directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, MatCheckbox, MatCheckboxRequiredValidator, NgControlStatus, NgModel, NativeElementInjectorDirective, RequiredValidator, NgStyle, NgIf, MatSelect, NgForOf, MatOption, MatRadioGroup, MatRadioButton, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgxIntlTelInputComponent, MatError], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;min-width:250px;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:20px}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active[_ngcontent-%COMP%]{font-weight:700}.other-option[_ngcontent-%COMP%]{margin-left:10px}.flex-auto[_ngcontent-%COMP%]{width:100%}  .country-dropdown{min-width:unset!important}  .tel-input{position:relative}  .tel-input .tel-label{font-size:10px;color:rgba(0,0,0,.6);position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-7px}  .phone-input-profile{padding-bottom:.3em;padding-top:0;display:block!important;max-width:100%;font:14px/20px \"Nexa Text\"!important;width:100%}  .phone-input-profile .iti{width:100%!important}  .phone-input-profile input{outline:0;padding:19px;border-radius:5px;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SubOnboardingCreateComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sub-create-onboarding',
                templateUrl: './sub-onboarding-create.component.html',
                styleUrls: ['./sub-onboarding-create.component.scss']
            }]
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
        }] }); })();

class LoadingComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = ɵɵdefineComponent({ type: LoadingComponent, selectors: [["lib-loading"]], decls: 13, vars: 0, consts: [[1, "lds-spinner"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "div");
        ɵɵelement(2, "div");
        ɵɵelement(3, "div");
        ɵɵelement(4, "div");
        ɵɵelement(5, "div");
        ɵɵelement(6, "div");
        ɵɵelement(7, "div");
        ɵɵelement(8, "div");
        ɵɵelement(9, "div");
        ɵɵelement(10, "div");
        ɵɵelement(11, "div");
        ɵɵelement(12, "div");
        ɵɵelementEnd();
    } }, styles: [".lds-spinner[_ngcontent-%COMP%]{color:official;display:inline-block;position:relative;width:20px;height:20px}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform-origin:34px 15px;-webkit-animation:1.2s linear infinite lds-spinner;animation:1.2s linear infinite lds-spinner}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{content:\" \";display:block;position:absolute;top:4px;left:33px;width:2px;height:6px;border-radius:20%;background:#f3a124}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){transform:rotate(0);-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){transform:rotate(30deg);-webkit-animation-delay:-1s;animation-delay:-1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){transform:rotate(60deg);-webkit-animation-delay:-.9s;animation-delay:-.9s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){transform:rotate(90deg);-webkit-animation-delay:-.8s;animation-delay:-.8s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5){transform:rotate(120deg);-webkit-animation-delay:-.7s;animation-delay:-.7s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6){transform:rotate(150deg);-webkit-animation-delay:-.6s;animation-delay:-.6s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7){transform:rotate(180deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8){transform:rotate(210deg);-webkit-animation-delay:-.4s;animation-delay:-.4s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9){transform:rotate(240deg);-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10){transform:rotate(270deg);-webkit-animation-delay:-.2s;animation-delay:-.2s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11){transform:rotate(300deg);-webkit-animation-delay:-.1s;animation-delay:-.1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(12){transform:rotate(330deg);-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes lds-spinner{0%{opacity:1}100%{opacity:0}}@keyframes lds-spinner{0%{opacity:1}100%{opacity:0}}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LoadingComponent, [{
        type: Component,
        args: [{
                selector: 'lib-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.scss']
            }]
    }], function () { return []; }, null); })();

function OnboardingDetailComponent_div_0_li_22_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 21);
    ɵɵelementStart(1, "a");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const category_r442 = ctx.$implicit;
    const i_r443 = ctx.index;
    ɵɵclassMap(i_r443 === 0 ? "active" : "");
    ɵɵproperty("ngxScrollTo", "#" + category_r442.name)("id", category_r442.name + "x");
    ɵɵadvance(2);
    ɵɵtextInterpolate(category_r442.name);
} }
function OnboardingDetailComponent_div_0_section_24_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 31);
    ɵɵelementStart(1, "span");
    ɵɵtext(2, "En cours de traitement");
    ɵɵelementEnd();
    ɵɵelement(3, "lib-loading");
    ɵɵelementEnd();
} }
function OnboardingDetailComponent_div_0_section_24_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 32);
    ɵɵelementStart(1, "span", 33);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "mat-progress-bar", 34);
    ɵɵelementEnd();
} if (rf & 2) {
    const category_r444 = ɵɵnextContext().$implicit;
    const ctx_r447 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ctx_r447.progress(category_r444 == null ? null : category_r444.fieldCompleted, category_r444 == null ? null : category_r444.fieldLength), "% Termin\u00E9");
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r447.progress(category_r444 == null ? null : category_r444.fieldCompleted, category_r444 == null ? null : category_r444.fieldLength));
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "p", 37);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "h4");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const forms_r450 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(forms_r450.label);
    ɵɵadvance(2);
    ɵɵtextInterpolate(forms_r450.value);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "p", 37);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "h4");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const sub_r455 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(sub_r455.label);
    ɵɵadvance(2);
    ɵɵtextInterpolate(sub_r455.value);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "p", 37);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "h4");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_r460 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(child_r460.label);
    ɵɵadvance(2);
    ɵɵtextInterpolate(child_r460.value);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 35);
    ɵɵelementStart(1, "p", 37);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "h4");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const c2_r465 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(c2_r465.label);
    ɵɵadvance(2);
    ɵɵtextInterpolate(c2_r465.value);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "h5");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template, 5, 2, "div", 30);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_r460 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(child_r460.label);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", child_r460.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 35);
    ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template, 5, 2, "ng-container", 36);
    ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 36);
    ɵɵelementEnd();
} if (rf & 2) {
    const child_r460 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !child_r460.forms);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r460.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "h4");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_Template, 3, 2, "div", 30);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const sub_r455 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(sub_r455.label);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", sub_r455.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 35);
    ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_1_Template, 5, 2, "ng-container", 36);
    ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 36);
    ɵɵelementEnd();
} if (rf & 2) {
    const sub_r455 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !sub_r455.forms);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", sub_r455.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "h3");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_Template, 3, 2, "div", 30);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const forms_r450 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(forms_r450.label);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", forms_r450.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 35);
    ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_1_Template, 5, 2, "ng-container", 36);
    ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_Template, 4, 2, "ng-container", 36);
    ɵɵelementEnd();
} if (rf & 2) {
    const forms_r450 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !forms_r450.forms);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", forms_r450.forms);
} }
function OnboardingDetailComponent_div_0_section_24_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "section", 22);
    ɵɵelementStart(1, "div", 23);
    ɵɵelementStart(2, "div", 24);
    ɵɵelementStart(3, "div", 25);
    ɵɵelementStart(4, "h2");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "p", 26);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 27);
    ɵɵtemplate(9, OnboardingDetailComponent_div_0_section_24_div_9_Template, 4, 0, "div", 28);
    ɵɵtemplate(10, OnboardingDetailComponent_div_0_section_24_div_10_Template, 4, 2, "div", 29);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(11, OnboardingDetailComponent_div_0_section_24_div_11_Template, 3, 2, "div", 30);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const category_r444 = ctx.$implicit;
    const ctx_r441 = ɵɵnextContext(2);
    ɵɵproperty("id", category_r444.name);
    ɵɵadvance(5);
    ɵɵtextInterpolate(category_r444.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r441.catNameStart(category_r444.name) ? "l'" + category_r444.name : category_r444.name, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", (category_r444 == null ? null : category_r444.fieldCompleted) === (category_r444 == null ? null : category_r444.fieldLength));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (category_r444 == null ? null : category_r444.fieldCompleted) < (category_r444 == null ? null : category_r444.fieldLength));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", category_r444.forms);
} }
function OnboardingDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r470 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵelementStart(1, "h1", 2);
    ɵɵelementStart(2, "p");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-icon", 3);
    ɵɵlistener("click", function OnboardingDetailComponent_div_0_Template_mat_icon_click_4_listener() { ɵɵrestoreView(_r470); const ctx_r469 = ɵɵnextContext(); return ctx_r469.onEdit(); });
    ɵɵtext(5, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 4);
    ɵɵelementStart(7, "div", 5);
    ɵɵelementStart(8, "div", 6);
    ɵɵelementStart(9, "div", 7);
    ɵɵelementStart(10, "h1");
    ɵɵtext(11);
    ɵɵelementEnd();
    ɵɵelementStart(12, "p");
    ɵɵtext(13);
    ɵɵpipe(14, "date");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(15, "div", 8);
    ɵɵelementStart(16, "p");
    ɵɵtext(17);
    ɵɵelementEnd();
    ɵɵelementStart(18, "p");
    ɵɵtext(19);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(20, "div", 9);
    ɵɵelementStart(21, "ul");
    ɵɵtemplate(22, OnboardingDetailComponent_div_0_li_22_Template, 3, 5, "li", 10);
    ɵɵelementEnd();
    ɵɵelementStart(23, "div", 11);
    ɵɵlistener("scroll", function OnboardingDetailComponent_div_0_Template_div_scroll_23_listener($event) { ɵɵrestoreView(_r470); const ctx_r471 = ɵɵnextContext(); return ctx_r471.onScroll($event); });
    ɵɵtemplate(24, OnboardingDetailComponent_div_0_section_24_Template, 12, 6, "section", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(25, "div", 13);
    ɵɵelementStart(26, "h1");
    ɵɵtext(27, "Tickets li\u00E9s \u00E0 votre demande");
    ɵɵelementEnd();
    ɵɵelementStart(28, "p", 14);
    ɵɵtext(29, "Vous retrouverez ici tous les tickets cr\u00E9\u00E9s lors de la cr\u00E9ation de votre fiche d\u2019int\u00E9gration.");
    ɵɵelementEnd();
    ɵɵelementStart(30, "div", 15);
    ɵɵelementStart(31, "p", 16);
    ɵɵtext(32, "01/01/22");
    ɵɵelementEnd();
    ɵɵelementStart(33, "div", 17);
    ɵɵelementStart(34, "h2");
    ɵɵtext(35, "Nom ticket");
    ɵɵelementEnd();
    ɵɵelementStart(36, "button", 18);
    ɵɵtext(37, "En cours");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(38, "p", 19);
    ɵɵtext(39, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(40, "div", 15);
    ɵɵelementStart(41, "p", 16);
    ɵɵtext(42, "01/01/22");
    ɵɵelementEnd();
    ɵɵelementStart(43, "div", 17);
    ɵɵelementStart(44, "h2");
    ɵɵtext(45, "Nom ticket");
    ɵɵelementEnd();
    ɵɵelementStart(46, "button", 18);
    ɵɵtext(47, "Termin\u00E9e");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(48, "p", 19);
    ɵɵtext(49, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(50, "div", 15);
    ɵɵelementStart(51, "p", 16);
    ɵɵtext(52, "01/01/22");
    ɵɵelementEnd();
    ɵɵelementStart(53, "div", 17);
    ɵɵelementStart(54, "h2");
    ɵɵtext(55, "Nom ticket");
    ɵɵelementEnd();
    ɵɵelementStart(56, "button", 20);
    ɵɵtext(57, "Termin\u00E9e");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(58, "p", 19);
    ɵɵtext(59, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(60, "div", 15);
    ɵɵelementStart(61, "p", 16);
    ɵɵtext(62, "01/01/22");
    ɵɵelementEnd();
    ɵɵelementStart(63, "h2");
    ɵɵtext(64, "Nom ticket");
    ɵɵelementEnd();
    ɵɵelementStart(65, "p", 19);
    ɵɵtext(66, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r439 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1("Int\u00E9gration profil ", ctx_r439.detailView == null ? null : ctx_r439.detailView.Name, "");
    ɵɵadvance(8);
    ɵɵtextInterpolate2("", ctx_r439.detailView.user.FirstName, " ", ctx_r439.detailView.user.LastName, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind2(14, 8, ctx_r439.detailView.createdAt, "dd/MM/yy"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r439.detailView == null ? null : ctx_r439.detailView.user == null ? null : ctx_r439.detailView.user.Phone == null ? null : ctx_r439.detailView.user.Phone.internationalNumber);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r439.detailView.user.Email);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r439.detailView.categories);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r439.detailView.categories);
} }
class OnboardingDetailComponent {
    constructor() {
        this.onShowMode = new EventEmitter(true);
    }
    ngOnInit() { }
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
            if (id.substring(0, id.length - 1) === current) {
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
}
OnboardingDetailComponent.ɵfac = function OnboardingDetailComponent_Factory(t) { return new (t || OnboardingDetailComponent)(); };
OnboardingDetailComponent.ɵcmp = ɵɵdefineComponent({ type: OnboardingDetailComponent, selectors: [["lib-onboarding-detail"]], hostBindings: function OnboardingDetailComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("scroll", function OnboardingDetailComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } }, inputs: { detailView: "detailView" }, outputs: { onShowMode: "onShowMode" }, decls: 1, vars: 1, consts: [["class", "onboarding-detail", 4, "ngIf"], [1, "onboarding-detail"], [1, "title"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], [1, "view-content"], [1, "left-content"], [1, "user-info"], [1, "user-name"], [1, "user-contact"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "class", "id", 4, "ngFor", "ngForOf"], [1, "category-view-container", 3, "scroll"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "right-content"], [1, "subtitle"], [1, "box-ticket-info"], [1, "date"], [1, "box-header"], ["mat-button", "", 1, "progress"], [1, "description"], ["mat-button", "", 1, "finished"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", 3, "id"], [1, "category-item-inner"], [1, "category-header"], [1, "title-content"], [1, "category-description"], [1, "progress-status"], ["class", "status in-progress", 4, "ngIf"], ["class", "status progress-bar", 4, "ngIf"], ["class", "category-item-forms", 4, "ngFor", "ngForOf"], [1, "status", "in-progress"], [1, "status", "progress-bar"], [2, "width", "300px"], ["mode", "determinate", 3, "value"], [1, "category-item-forms"], [4, "ngIf"], [1, "label"]], template: function OnboardingDetailComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, OnboardingDetailComponent_div_0_Template, 67, 11, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.detailView);
    } }, directives: [NgIf, MatIcon, NgForOf, MatButton, ScrollToDirective, LoadingComponent, MatProgressBar], pipes: [DatePipe], styles: [".onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-family:Nexa;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.onboarding-detail[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]{margin-bottom:33px;margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px}.onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:70%;border-radius:6px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;height:90px;background:#fff;border-radius:6px;padding:10px;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{text-align:left;line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%]{line-height:30px;text-align:right}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background:#fff;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]{margin-top:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{width:25%;background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #e2e4e5}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:103px;height:36px;border-radius:4px;font-family:Nexa;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{background:#6fe8d7}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{background:#f3a124}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]::-webkit-scrollbar, .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.fields[_ngcontent-%COMP%]{height:84%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:33px 0;padding:0}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:3px solid #3c4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1}.progress-status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:flex;align-items:center}.progress-status[_ngcontent-%COMP%]   .ongoing[_ngcontent-%COMP%]{color:#6fe8d7}.progress-status[_ngcontent-%COMP%]   .in-progress[_ngcontent-%COMP%]{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}  .progress-status{font-size:16px}  .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity 250ms linear;width:100%}  .progress-status .mat-progress-bar-fill::after{background-color:#6fe8d7}  .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingDetailComponent, [{
        type: Component,
        args: [{
                selector: 'lib-onboarding-detail',
                templateUrl: './onboarding-detail.component.html',
                styleUrls: ['./onboarding-detail.component.scss']
            }]
    }], function () { return []; }, { detailView: [{
            type: Input
        }], onShowMode: [{
            type: Output
        }], onScroll: [{
            type: HostListener,
            args: ['scroll', ['$event']]
        }] }); })();

function OnboardingCreateComponent_form_2_li_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 15);
    ɵɵelementStart(1, "a");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const category_r324 = ctx.$implicit;
    ɵɵproperty("ngxScrollTo", "#" + category_r324.name)("id", category_r324.name + "x");
    ɵɵadvance(2);
    ɵɵtextInterpolate(category_r324.name);
} }
function OnboardingCreateComponent_form_2_section_13_mat_select_8_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 27);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const select_r332 = ctx.$implicit;
    ɵɵproperty("value", select_r332.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", select_r332.value, "");
} }
const _c0$4 = function () { return { standalone: true }; };
function OnboardingCreateComponent_form_2_section_13_mat_select_8_Template(rf, ctx) { if (rf & 1) {
    const _r335 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-select", 25);
    ɵɵlistener("ngModelChange", function OnboardingCreateComponent_form_2_section_13_mat_select_8_Template_mat_select_ngModelChange_0_listener($event) { ɵɵrestoreView(_r335); const category_r326 = ɵɵnextContext().$implicit; return category_r326.selector.value = $event; });
    ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_mat_select_8_mat_option_1_Template, 2, 2, "mat-option", 26);
    ɵɵelementEnd();
} if (rf & 2) {
    const category_r326 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngModel", category_r326.selector.value)("ngModelOptions", ɵɵpureFunction0(3, _c0$4));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", category_r326.selector.defaultValue);
} }
function OnboardingCreateComponent_form_2_section_13_mat_select_9_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 27);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const select_r338 = ctx.$implicit;
    ɵɵproperty("value", select_r338.key);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", select_r338.value, "");
} }
function OnboardingCreateComponent_form_2_section_13_mat_select_9_Template(rf, ctx) { if (rf & 1) {
    const _r341 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-select", 28);
    ɵɵlistener("ngModelChange", function OnboardingCreateComponent_form_2_section_13_mat_select_9_Template_mat_select_ngModelChange_0_listener($event) { ɵɵrestoreView(_r341); const category_r326 = ɵɵnextContext().$implicit; return category_r326.ticketType.value = $event; });
    ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_mat_select_9_mat_option_1_Template, 2, 2, "mat-option", 26);
    ɵɵelementEnd();
} if (rf & 2) {
    const category_r326 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngModel", category_r326.ticketType.value)("ngModelOptions", ɵɵpureFunction0(3, _c0$4));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", category_r326.ticketType.defaultValue);
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r357 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 31);
    ɵɵelementStart(1, "div", 32);
    ɵɵelementStart(2, "div", 33);
    ɵɵelementStart(3, "lib-sub-create-onboarding", 40);
    ɵɵlistener("onCheckValue", function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onCheckValue_3_listener($event) { ɵɵrestoreView(_r357); const ctx_r356 = ɵɵnextContext(10); return ctx_r356.onCheckValue($event); });
    ɵɵelement(4, "div", 35);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r358 = ɵɵnextContext();
    const c2_r353 = ctx_r358.$implicit;
    const l_r354 = ctx_r358.index;
    const ctx_r359 = ɵɵnextContext(3);
    const child_r348 = ctx_r359.$implicit;
    const k_r349 = ctx_r359.index;
    ɵɵadvance(3);
    ɵɵproperty("field", c2_r353)("length", child_r348 == null ? null : child_r348.forms == null ? null : child_r348.forms.length)("i", k_r349)("j", l_r354);
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 39);
    ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template, 5, 4, "div", 30);
    ɵɵelementEnd();
} if (rf & 2) {
    const c2_r353 = ctx.$implicit;
    const child_r348 = ɵɵnextContext(3).$implicit;
    const ctx_r352 = ɵɵnextContext(6);
    ɵɵstyleProp("width", c2_r353.forms || c2_r353.type === "textarea" ? "100%" : ctx_r352.fieldWidth(child_r348.forms.length));
    ɵɵproperty("id", c2_r353.key);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", c2_r353.expandOnboarding && ctx_r352.onCheckConditionLocationValue(c2_r353.isConditional, c2_r353.conditionLocation, c2_r353.conditionValue));
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 37);
    ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_div_1_Template, 2, 4, "div", 38);
    ɵɵelementEnd();
} if (rf & 2) {
    const child_r348 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", child_r348.forms);
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r363 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 31);
    ɵɵelementStart(1, "div", 32);
    ɵɵelementStart(2, "div", 33);
    ɵɵelementStart(3, "lib-sub-create-onboarding", 40);
    ɵɵlistener("onCheckValue", function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onCheckValue_3_listener($event) { ɵɵrestoreView(_r363); const ctx_r362 = ɵɵnextContext(7); return ctx_r362.onCheckValue($event); });
    ɵɵelementStart(4, "div", 35);
    ɵɵtemplate(5, OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_Template, 2, 1, "div", 36);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r364 = ɵɵnextContext();
    const child_r348 = ctx_r364.$implicit;
    const k_r349 = ctx_r364.index;
    const ctx_r365 = ɵɵnextContext(3);
    const field_r343 = ctx_r365.$implicit;
    const j_r344 = ctx_r365.index;
    ɵɵadvance(3);
    ɵɵproperty("field", child_r348)("length", field_r343 == null ? null : field_r343.forms == null ? null : field_r343.forms.length)("i", j_r344)("j", k_r349);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", child_r348.forms && child_r348.value);
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 39);
    ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_Template, 6, 5, "div", 30);
    ɵɵelementEnd();
} if (rf & 2) {
    const child_r348 = ctx.$implicit;
    const field_r343 = ɵɵnextContext(3).$implicit;
    const ctx_r347 = ɵɵnextContext(3);
    ɵɵstyleProp("width", child_r348.forms || child_r348.type === "textarea" ? "100%" : ctx_r347.fieldWidth(field_r343.forms.length));
    ɵɵproperty("id", child_r348.key);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r348.expandOnboarding && ctx_r347.onCheckConditionLocationValue(child_r348.isConditional, child_r348.conditionLocation, child_r348.conditionValue));
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 37);
    ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_Template, 2, 4, "div", 38);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r343 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", field_r343.forms);
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 31);
    ɵɵelementStart(1, "div", 32);
    ɵɵelementStart(2, "div", 33);
    ɵɵelementStart(3, "lib-sub-create-onboarding", 34);
    ɵɵelementStart(4, "div", 35);
    ɵɵtemplate(5, OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_Template, 2, 1, "div", 36);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r368 = ɵɵnextContext();
    const field_r343 = ctx_r368.$implicit;
    const j_r344 = ctx_r368.index;
    const ctx_r369 = ɵɵnextContext();
    const category_r326 = ctx_r369.$implicit;
    const i_r327 = ctx_r369.index;
    ɵɵadvance(3);
    ɵɵproperty("field", field_r343)("length", category_r326 == null ? null : category_r326.forms == null ? null : category_r326.forms.length)("i", i_r327)("j", j_r344);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", field_r343.forms && field_r343.value);
} }
function OnboardingCreateComponent_form_2_section_13_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 29);
    ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_11_div_1_Template, 6, 5, "div", 30);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r343 = ctx.$implicit;
    const category_r326 = ɵɵnextContext().$implicit;
    const ctx_r330 = ɵɵnextContext(2);
    ɵɵstyleProp("width", field_r343.forms || field_r343.type === "textarea" ? "100%" : ctx_r330.fieldWidth(category_r326.forms.length));
    ɵɵproperty("id", field_r343.key);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r343.expandOnboarding && ctx_r330.onCheckConditionLocationValue(field_r343.isConditional, field_r343.conditionLocation, field_r343.conditionValue));
} }
function OnboardingCreateComponent_form_2_section_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "section", 16);
    ɵɵelementStart(1, "div", 17);
    ɵɵelementStart(2, "div", 18);
    ɵɵelementStart(3, "div", 19);
    ɵɵelementStart(4, "h4", 20);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "p");
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(8, OnboardingCreateComponent_form_2_section_13_mat_select_8_Template, 2, 4, "mat-select", 21);
    ɵɵtemplate(9, OnboardingCreateComponent_form_2_section_13_mat_select_9_Template, 2, 4, "mat-select", 22);
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 23);
    ɵɵtemplate(11, OnboardingCreateComponent_form_2_section_13_div_11_Template, 2, 4, "div", 24);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const category_r326 = ctx.$implicit;
    const ctx_r323 = ɵɵnextContext(2);
    ɵɵproperty("id", category_r326.name);
    ɵɵadvance(5);
    ɵɵtextInterpolate(category_r326.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r323.catNameStart(category_r326.name) ? "l'" + category_r326.name : category_r326.name, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", category_r326.selector);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (category_r326.ticketType == null ? null : category_r326.ticketType.value) && category_r326.selector.value === "Nowteam");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", category_r326.forms);
} }
function OnboardingCreateComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r372 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 3);
    ɵɵlistener("submit", function OnboardingCreateComponent_form_2_Template_form_submit_0_listener() { ɵɵrestoreView(_r372); const ctx_r371 = ɵɵnextContext(); return ctx_r371.onSubmit(); });
    ɵɵelementStart(1, "div", 4);
    ɵɵelementStart(2, "div", 5);
    ɵɵelementStart(3, "h2");
    ɵɵtext(4);
    ɵɵelementStart(5, "mat-icon", 6);
    ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_mat_icon_click_5_listener() { ɵɵrestoreView(_r372); const ctx_r373 = ɵɵnextContext(); return ctx_r373.onShowMode(); });
    ɵɵtext(6, "visibility");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 7);
    ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_button_click_7_listener() { ɵɵrestoreView(_r372); const ctx_r374 = ɵɵnextContext(); return ctx_r374.onResumeLater(); });
    ɵɵtext(8, "Reprendre plus tard");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 8);
    ɵɵelementStart(10, "ul");
    ɵɵtemplate(11, OnboardingCreateComponent_form_2_li_11_Template, 3, 3, "li", 9);
    ɵɵelementEnd();
    ɵɵelementStart(12, "div", 10);
    ɵɵlistener("scroll", function OnboardingCreateComponent_form_2_Template_div_scroll_12_listener($event) { ɵɵrestoreView(_r372); const ctx_r375 = ɵɵnextContext(); return ctx_r375.onScroll($event); });
    ɵɵtemplate(13, OnboardingCreateComponent_form_2_section_13_Template, 12, 6, "section", 11);
    ɵɵelementStart(14, "div", 12);
    ɵɵelementStart(15, "button", 13);
    ɵɵtext(16, "Envoyer ma fiche");
    ɵɵelementEnd();
    ɵɵelementStart(17, "button", 14);
    ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_button_click_17_listener() { ɵɵrestoreView(_r372); const ctx_r376 = ɵɵnextContext(); return ctx_r376.onResumeLater(); });
    ɵɵtext(18, "Reprendre plus tard");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r320 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r320.form);
    ɵɵadvance(4);
    ɵɵtextInterpolate1("Int\u00E9gration profil ", ctx_r320.currentTemplate == null ? null : ctx_r320.currentTemplate.Name, " ");
    ɵɵadvance(3);
    ɵɵproperty("disabled", ctx_r320.loading);
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", ctx_r320.categories);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r320.categories);
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r320.loading || !ctx_r320.form.valid);
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r320.loading);
} }
function OnboardingCreateComponent_lib_onboarding_detail_3_Template(rf, ctx) { if (rf & 1) {
    const _r378 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "lib-onboarding-detail", 41);
    ɵɵlistener("onShowMode", function OnboardingCreateComponent_lib_onboarding_detail_3_Template_lib_onboarding_detail_onShowMode_0_listener() { ɵɵrestoreView(_r378); const ctx_r377 = ɵɵnextContext(); return ctx_r377.onShowMode(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r321 = ɵɵnextContext();
    ɵɵproperty("detailView", ctx_r321.detailView);
} }
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
            if (id.substring(0, id.length - 1) === current) {
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
            this.onboardingId = this.route.snapshot.paramMap.get("onboardingId");
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
        var _a, _b, _c, _d;
        const user = {};
        const categoriesView = categories.map((category) => {
            const { name, expandOnboarding } = category;
            let categoryForm = [];
            let fieldCompleted = 0;
            let fieldLength = 0;
            if (category.forms) {
                categoryForm = category.forms.map((form) => {
                    var _a, _b;
                    if (form.isMandatory) {
                        fieldLength += 1;
                    }
                    if (form.isMandatory && !!form.value) {
                        fieldCompleted += 1;
                    }
                    const newsubforms = {
                        label: form.label,
                        value: form.type !== "tel" ? form.value : ((_b = (_a = form) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.internationalNumber) || '',
                        key: form.key
                    };
                    if (categories.name = "Utilisateur") {
                        user[form.key] = form.value;
                    }
                    let subForm = [];
                    if (form.forms) {
                        subForm = form.forms.map((subForm) => {
                            var _a, _b;
                            if (subForm.isMandatory) {
                                fieldLength += 1;
                            }
                            if (subForm.isMandatory && !!subForm.value) {
                                fieldCompleted += 1;
                            }
                            const childforms = {
                                label: subForm.label,
                                value: subForm.type !== "tel" ? subForm.value : ((_b = (_a = subForm) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.internationalNumber) || '',
                                key: subForm.key
                            };
                            let child2 = [];
                            if (subForm.forms) {
                                child2 = subForm.forms.map((c2) => {
                                    var _a, _b;
                                    if (c2.isMandatory) {
                                        fieldLength += 1;
                                    }
                                    if (c2.isMandatory && !!c2.value) {
                                        fieldCompleted += 1;
                                    }
                                    return {
                                        label: c2.label,
                                        value: c2.type !== "tel" ? c2.value : ((_b = (_a = c2) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.internationalNumber) || '',
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
        this.detailView = {
            categories: categoriesView,
            // view: this.currentOnboarding.view,
            createdAt: ((_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.createdAt) || new Date().toISOString(),
            user: user,
            Name: ((_c = (_b = this.currentOnboarding) === null || _b === void 0 ? void 0 : _b.vtemplates[0]) === null || _c === void 0 ? void 0 : _c.Name) || ((_d = this.currentTemplate) === null || _d === void 0 ? void 0 : _d.Name)
        };
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
    onChangeCategory() {
        const checkMandatory = (field) => !!field.value && field.isMandatory && field.type !== "checkbox_multiple" || field.isConditional || !field.isMandatory || field.type === "checkbox_multiple";
        return this.categories.every((cat) => cat.forms.every((field) => {
            if (field.forms) {
                return field.forms.every((form) => {
                    if (form.forms) {
                        return form.forms.every((child) => {
                            return checkMandatory(child);
                        });
                    }
                    return checkMandatory(form);
                });
            }
            return checkMandatory(field);
        }));
    }
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.form.valid && this.onChangeCategory()) {
                this.loading = true;
                const result = this.onboardingId && this.onboardingId !== "0"
                    ? yield this.service.updateOnboarding(Object.assign(Object.assign({}, this.form.value), { categories: this.categories, Finished: true, _id: this.onboardingId }))
                    : yield this.service.createOnboarding(Object.assign(Object.assign({}, this.form.value), { categories: this.categories, Finished: true }));
                if (result) {
                    if (this.onboardingId && this.onboardingId !== "0") {
                        this.categories = result.categories;
                        this.currentOnboarding = result;
                    }
                    yield this.service.getAllProfil();
                    this.loading = false;
                    this.canExit = true;
                    this.showMode = true;
                    this.router.navigate([this.service.mainPath + '/requests']);
                }
                else {
                    console.log("errror......");
                    this.loading = false;
                }
            }
        });
    }
    onResumeLater() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            const result = this.onboardingId && this.onboardingId !== "0"
                ? yield this.service.updateOnboarding(Object.assign(Object.assign({}, this.form.value), { categories: this.categories, Finished: false, _id: this.onboardingId }))
                : yield this.service.createOnboarding(Object.assign(Object.assign({}, this.form.value), { categories: this.categories, Finished: false }));
            if (result) {
                if (this.onboardingId && this.onboardingId !== "0") {
                    this.categories = result.categories;
                    this.currentOnboarding = result;
                }
                yield this.service.getAllProfil();
                this.loading = false;
                this.canExit = true;
                this.showMode = true;
                this.router.navigate([this.service.mainPath + '/requests']);
            }
            else {
                console.log("errror......");
                this.loading = false;
            }
        });
    }
    ingoreDefaultAction(e) {
        e.preventDefault();
    }
    onCheckConditionLocationValue(iscondition, location, conditionValue) {
        if (!iscondition) {
            return true;
        }
        if (location.level === 1) {
            if (this.categories[location.categoryIndex].forms[location.currentIndex].type === 'checkbox_multiple') {
                const array = this.categories[location.categoryIndex].forms[location.currentIndex].defaultValue.filter((check) => check.checked);
                let checked = false;
                for (var i = 0; i < array.length; i++) {
                    if (array[i].value == conditionValue) {
                        checked = true;
                        break;
                    }
                }
                return checked;
            }
            else {
                return this.categories[location.categoryIndex].forms[location.currentIndex].value === conditionValue;
            }
        }
        else if (location.level === 2) {
            if (this.categories[location.categoryIndex].forms[location.formIndex].forms[location.currentIndex].type === 'checkbox_multiple') {
                const array = this.categories[location.categoryIndex].forms[location.formIndex].forms[location.currentIndex].defaultValue.filter((check) => check.checked);
                let checked = false;
                for (var i = 0; i < array.length; i++) {
                    if (array[i].value == conditionValue) {
                        checked = true;
                        break;
                    }
                }
                return checked;
            }
            else {
                return this.categories[location.categoryIndex].forms[location.formIndex].forms[location.currentIndex].value === conditionValue;
            }
        }
        else if (location.level === 3) {
            if (this.categories[location.categoryIndex].forms[location.formIndex].forms[location.subIndex].forms[location.currentIndex].type === 'checkbox_multiple') {
                const array = this.categories[location.categoryIndex].forms[location.formIndex].forms[location.subIndex].forms[location.currentIndex].defaultValue.filter((check) => check.checked);
                let checked = false;
                for (var i = 0; i < array.length; i++) {
                    if (array[i].value == conditionValue) {
                        checked = true;
                        break;
                    }
                }
                return checked;
            }
            else {
                return this.categories[location.categoryIndex].forms[location.formIndex].forms[location.subIndex].forms[location.currentIndex].value === conditionValue;
            }
        }
        else {
            return true;
        }
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
    fieldWidth(length) {
        if (length === 1) {
            return '50%';
        }
        else if (length === 2) {
            return '50%';
        }
        else if (length === 3) {
            return '33%';
        }
        else if (length === 4) {
            return '25%';
        }
        else if (length === 5) {
            return '33%';
        }
        else if (length >= 6) {
            return '33%';
        }
    }
    onShowMode() {
        this.showMode = !this.showMode;
        this.onLoadViewDetail(this.categories);
    }
}
OnboardingCreateComponent.ɵfac = function OnboardingCreateComponent_Factory(t) { return new (t || OnboardingCreateComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(MatDialog)); };
OnboardingCreateComponent.ɵcmp = ɵɵdefineComponent({ type: OnboardingCreateComponent, selectors: [["create-onboarding"]], hostBindings: function OnboardingCreateComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("scroll", function OnboardingCreateComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } }, decls: 4, vars: 2, consts: [[1, "content"], [3, "formGroup", "submit", 4, "ngIf"], [3, "detailView", "onShowMode", 4, "ngIf"], [3, "formGroup", "submit"], [1, "category"], [1, "title-group"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], ["mat-button", "", "type", "button", 1, "register-button", 3, "disabled", "click"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "id", 4, "ngFor", "ngForOf"], [1, "category-container", 3, "scroll"], ["class", "category-item content-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "actions-button", 2, "margin-bottom", "50px"], ["mat-button", "", "type", "submit", 1, "register-button", "send-form", 3, "disabled"], ["mat-button", "", "type", "button", 1, "register-button", "resume", 3, "disabled", "click"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", "content-item", 3, "id"], [1, "field-content"], [1, "field-item"], [1, "category-title-group"], [1, "category-name"], ["placeholder", "Company", "required", "", "style", "width: 150px;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Type de ticket", "required", "", "style", "width: 150px;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], [1, "category-container"], ["class", "field-category", 3, "id", "width", 4, "ngFor", "ngForOf"], ["placeholder", "Company", "required", "", 2, "width", "150px", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["placeholder", "Type de ticket", "required", "", 2, "width", "150px", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "field-category", 3, "id"], ["class", "inner-loop", 4, "ngIf"], [1, "inner-loop"], [1, "fields-content"], [1, "fields-container"], [3, "field", "length", "i", "j"], [1, "child"], ["class", "inner-child", 4, "ngIf"], [1, "inner-child"], ["class", "inner-child-content", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "inner-child-content", 3, "id"], [3, "field", "length", "i", "j", "onCheckValue"], [3, "detailView", "onShowMode"]], template: function OnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "main");
        ɵɵelementStart(1, "div", 0);
        ɵɵtemplate(2, OnboardingCreateComponent_form_2_Template, 19, 7, "form", 1);
        ɵɵtemplate(3, OnboardingCreateComponent_lib_onboarding_detail_3_Template, 1, 1, "lib-onboarding-detail", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.showMode);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showMode);
    } }, directives: [NgIf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatIcon, MatButton, NgForOf, ScrollToDirective, MatSelect, RequiredValidator, NgControlStatus, NgModel, NativeElementInjectorDirective, MatOption, SubOnboardingCreateComponent, OnboardingDetailComponent], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:99%;height:100%;padding-left:1%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{max-width:400px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:40%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:1em 2em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;-ms-grid-row-align:center;align-self:center;width:220px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .onboarding-mat-stepper[_ngcontent-%COMP%]   mat-horizontal-stepper[_ngcontent-%COMP%]   .next-step[_ngcontent-%COMP%]{float:right}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;max-width:1500px;margin:auto;overflow:hidden}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}.category-action[_ngcontent-%COMP%]{display:flex;width:100%;overflow:hidden}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;padding:15px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%]{text-align:left;font:bold 22px/48px Nexa Text;letter-spacing:0;color:#171f26;margin:0}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .inner-child[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.category[_ngcontent-%COMP%]{width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;padding-top:0;font-family:\"Nexa Text\";display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:-5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3.template-title[_ngcontent-%COMP%]{font:900 24px/36px Nexa Text;letter-spacing:0;color:#171f26}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;margin-right:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center;width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.category[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:10px}.category[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 8px;display:flex;align-items:center}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:0;width:100%;margin-top:10px;margin-bottom:10px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{width:100%;padding-right:10px;padding-top:5px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:0 0;border:2px solid #192128!important;border-radius:8px;margin-left:22px!important;color:#000}.register-button[disabled][disabled][_ngcontent-%COMP%]{opacity:.5!important;background:no-repeat padding-box #dadee2!important}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}  .phone-input-view-collab{border-bottom:1px solid #949494!important;padding-bottom:.3em;padding-top:1em;display:block!important;max-width:100%;font:14px/20px \"Nexa Text\"!important;width:95%}  .country-dropdown{min-width:unset!important}  .iti{width:100%!important}  #phone{width:90%!important}  #mobile-phone{width:100%}  .fields{max-height:100vh;margin-right:.5%;overflow:hidden;width:100%}  .fields mat-tab-group{height:100%;width:100%;overflow:hidden}  .fields mat-tab-group .mat-tab-body-wrapper{height:100%;max-height:90vh;overflow:auto}  .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body{height:100%}  .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body .mat-tab-body-content{width:100%;overflow:hidden}.fields[_ngcontent-%COMP%]{height:95%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:0;padding:0}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:3px solid #3c4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1}  .category-container{overflow:auto;max-height:100%;display:flex;flex-wrap:wrap;-ms-overflow-style:none;scrollbar-width:none}  .category-container mat-form-field{width:100%}  .category-container .actions-button{margin-top:20px;margin-bottom:50px}  .category-container .actions-button .send-form{margin-left:0!important;background-color:#000;color:#fff}  .category-container .actions-button .resume{margin-left:25px!important}  .category-container::-webkit-scrollbar{display:none}  .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5}  .category-item .mat-radio-button.mat-accent .mat-radio-inner-circle,   .category-item .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .category-item .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5}  .category-item .mat-checkbox-checkmark-path{stroke:#fff!important}  .category-item .mat-checkbox-frame{border:2px solid #039be5!important}  .category-item .mat-checkbox-checked.mat-accent .mat-checkbox-background,   .category-item .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#039be5!important}  .category-item .mat-checkbox-inner-container{height:20px!important;width:20px!important}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingCreateComponent, [{
        type: Component,
        args: [{
                selector: "create-onboarding",
                templateUrl: "./onboarding-create.component.html",
                styleUrls: ["./onboarding-create.component.scss"],
            }]
    }], function () { return [{ type: FormBuilder }, { type: OnboardingService }, { type: ActivatedRoute }, { type: Router }, { type: MatDialog }]; }, { onScroll: [{
            type: HostListener,
            args: ['scroll', ['$event']]
        }] }); })();

function DialogCreateOnboardingComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const template_r420 = ctx.$implicit;
    ɵɵproperty("value", template_r420._id);
    ɵɵadvance(1);
    ɵɵtextInterpolate(template_r420.Name);
} }
class DialogCreateOnboardingComponent {
    constructor(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.templates = [];
        this.onboarding = {
            TemplateId: 0,
        };
        this.service._templates.subscribe((data) => {
            this.templates = data;
        });
    }
    ngOnInit() {
        this.templates = this.data.templates;
    }
    createOnboarding() {
        if (!this.disabled()) {
            const template = this.templates.find((temp) => temp._id === this.onboarding.TemplateId);
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
DialogCreateOnboardingComponent.ɵfac = function DialogCreateOnboardingComponent_Factory(t) { return new (t || DialogCreateOnboardingComponent)(ɵɵdirectiveInject(MAT_DIALOG_DATA), ɵɵdirectiveInject(MatDialogRef), ɵɵdirectiveInject(OnboardingService)); };
DialogCreateOnboardingComponent.ɵcmp = ɵɵdefineComponent({ type: DialogCreateOnboardingComponent, selectors: [["lib-dialog-create-onboarding"]], decls: 13, vars: 3, consts: [[1, "title"], ["appearance", "outline", 1, "full-width"], ["required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-content"], ["mat-raised-button", "", 1, "create-profil", 3, "disabled", "click"], ["mat-raised-button", "", 1, "abandon-profil", 3, "click"], [3, "value"]], template: function DialogCreateOnboardingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-dialog-content");
        ɵɵelementStart(1, "h3", 0);
        ɵɵtext(2, "Cr\u00E9ation d\u2019une demande d'int\u00E9gration");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-form-field", 1);
        ɵɵelementStart(4, "mat-label");
        ɵɵtext(5, "Type de profil");
        ɵɵelementEnd();
        ɵɵelementStart(6, "mat-select", 2);
        ɵɵlistener("ngModelChange", function DialogCreateOnboardingComponent_Template_mat_select_ngModelChange_6_listener($event) { return ctx.onboarding.TemplateId = $event; });
        ɵɵtemplate(7, DialogCreateOnboardingComponent_mat_option_7_Template, 2, 2, "mat-option", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "div", 4);
        ɵɵelementStart(9, "button", 5);
        ɵɵlistener("click", function DialogCreateOnboardingComponent_Template_button_click_9_listener() { return ctx.createOnboarding(); });
        ɵɵtext(10, " Lancer la demande ");
        ɵɵelementEnd();
        ɵɵelementStart(11, "button", 6);
        ɵɵlistener("click", function DialogCreateOnboardingComponent_Template_button_click_11_listener() { return ctx.close(); });
        ɵɵtext(12, " Abandonner ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(6);
        ɵɵproperty("ngModel", ctx.onboarding.TemplateId);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.templates);
        ɵɵadvance(2);
        ɵɵproperty("disabled", ctx.disabled());
    } }, directives: [MatDialogContent, MatFormField, MatLabel, MatSelect, RequiredValidator, NgControlStatus, NgModel, NativeElementInjectorDirective, NgForOf, MatButton, MatOption], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:400px;min-width:400px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content[_ngcontent-%COMP%]   .abandon-profil[_ngcontent-%COMP%]{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px}mat-dialog-content[_ngcontent-%COMP%]   .create-profil[_ngcontent-%COMP%]{background-color:#171f26;border:1px solid #171f26;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, mat-dialog-content[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{opacity:.5}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DialogCreateOnboardingComponent, [{
        type: Component,
        args: [{
                selector: 'lib-dialog-create-onboarding',
                templateUrl: './dialog-create-onboarding.component.html',
                styleUrls: ['./dialog-create-onboarding.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: MatDialogRef }, { type: OnboardingService }]; }, null); })();

function OnboardingTableComponent_ngx_design_table_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "ngx-design-table", 1);
} if (rf & 2) {
    const ctx_r438 = ɵɵnextContext();
    ɵɵproperty("columnDefinitions", ctx_r438.columnDefinitions)("displayDetail", true)("data", ctx_r438.data)("lang", ctx_r438.lang)("btnOverride", true)("inputSearch", ctx_r438.inputSearch)("EmptyRow", true);
} }
class OnboardingTableComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OnboardingTableComponent.ɵfac = function OnboardingTableComponent_Factory(t) { return new (t || OnboardingTableComponent)(); };
OnboardingTableComponent.ɵcmp = ɵɵdefineComponent({ type: OnboardingTableComponent, selectors: [["lib-onboarding-table"]], inputs: { _loading_table: "_loading_table", data: "data", columnDefinitions: "columnDefinitions", lang: "lang", inputSearch: "inputSearch" }, decls: 1, vars: 1, consts: [[3, "columnDefinitions", "displayDetail", "displayComponent", "data", "lang", "btnOverride", "inputSearch", "EmptyRow", 4, "ngIf"], [3, "columnDefinitions", "displayDetail", "displayComponent", "data", "lang", "btnOverride", "inputSearch", "EmptyRow"]], template: function OnboardingTableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, OnboardingTableComponent_ngx_design_table_0_Template, 1, 7, "ngx-design-table", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.data);
    } }, directives: [NgIf, TableComponent], styles: ["ngx-design-table th span{margin:auto;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26}  ngx-design-table .mat-header-row{background:#e5e8ee}  ngx-design-table .empty-row{height:5px!important;background:no-repeat padding-box #f4f7f9}  ngx-design-table .mat-table{background:no-repeat padding-box #f4f7f9}  ngx-design-table .mat-table tbody tr.element-row{height:83px!important;border-radius:6px;margin:10px 0}  ngx-design-table .mat-table tbody td.mat-cell{background-color:#fff}  ngx-design-table .mat-table tbody td.mat-cell a{text-decoration:none!important}  ngx-design-table .mat-table tbody td.mat-cell:first-of-type{border-bottom-left-radius:8px;border-top-left-radius:8px}  ngx-design-table .mat-table tbody td.mat-cell:last-of-type{border-bottom-right-radius:8px;border-top-right-radius:8px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingTableComponent, [{
        type: Component,
        args: [{
                selector: 'lib-onboarding-table',
                templateUrl: './onboarding-table.component.html',
                styleUrls: ['./onboarding-table.component.scss']
            }]
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
        }] }); })();

function OnboardingListComponent_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
} if (rf & 2) {
    const ctx_r422 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" Tous (", ctx_r422.onboardingList.data == null ? null : ctx_r422.onboardingList.data.length, ") ");
} }
function OnboardingListComponent_div_1_ng_template_7_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 12);
} }
function OnboardingListComponent_div_1_ng_template_7_lib_onboarding_table_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "lib-onboarding-table", 13);
} if (rf & 2) {
    const ctx_r429 = ɵɵnextContext(3);
    ɵɵproperty("columnDefinitions", ctx_r429.columnDefinitions)("data", ctx_r429.onboardingList)("lang", ctx_r429.lang)("inputSearch", ctx_r429.inputSearch);
} }
const _c0$5 = function () { return { "margin-bottom": "100vh" }; };
function OnboardingListComponent_div_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_7_div_0_Template, 1, 0, "div", 9);
    ɵɵelement(1, "div", 10);
    ɵɵelementStart(2, "div");
    ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_7_lib_onboarding_table_3_Template, 1, 4, "lib-onboarding-table", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r423 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r423._loading_table || !ctx_r423.onboardingList);
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r423._loading_table && ɵɵpureFunction0(5, _c0$5));
    ɵɵadvance(1);
    ɵɵclassProp("ticket-list", !ctx_r423._loading_table);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r423.onboardingList);
} }
function OnboardingListComponent_div_1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
} if (rf & 2) {
    const ctx_r424 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" Termin\u00E9es (", ctx_r424.onboardingFinished.data.length, ") ");
} }
function OnboardingListComponent_div_1_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 12);
} }
function OnboardingListComponent_div_1_ng_template_10_lib_onboarding_table_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "lib-onboarding-table", 13);
} if (rf & 2) {
    const ctx_r431 = ɵɵnextContext(3);
    ɵɵproperty("columnDefinitions", ctx_r431.columnDefinitions)("data", ctx_r431.onboardingFinished)("lang", ctx_r431.lang)("inputSearch", ctx_r431.inputSearch);
} }
function OnboardingListComponent_div_1_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_10_div_0_Template, 1, 0, "div", 9);
    ɵɵelement(1, "div", 10);
    ɵɵelementStart(2, "div");
    ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_10_lib_onboarding_table_3_Template, 1, 4, "lib-onboarding-table", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r425 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r425._loading_table || !ctx_r425.onboardingFinished);
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r425._loading_table && ɵɵpureFunction0(5, _c0$5));
    ɵɵadvance(1);
    ɵɵclassProp("ticket-list", !ctx_r425._loading_table);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r425.onboardingFinished);
} }
function OnboardingListComponent_div_1_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
} if (rf & 2) {
    const ctx_r426 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" A finaliser (", ctx_r426.onboardingToFinish.data.length, ") ");
} }
function OnboardingListComponent_div_1_ng_template_13_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 12);
} }
function OnboardingListComponent_div_1_ng_template_13_lib_onboarding_table_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "lib-onboarding-table", 13);
} if (rf & 2) {
    const ctx_r433 = ɵɵnextContext(3);
    ɵɵproperty("columnDefinitions", ctx_r433.columnDefinitions)("data", ctx_r433.onboardingToFinish)("lang", ctx_r433.lang)("inputSearch", ctx_r433.inputSearch);
} }
function OnboardingListComponent_div_1_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_13_div_0_Template, 1, 0, "div", 9);
    ɵɵelement(1, "div", 10);
    ɵɵelementStart(2, "div");
    ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_13_lib_onboarding_table_3_Template, 1, 4, "lib-onboarding-table", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r427 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r427._loading_table || !ctx_r427.onboardingToFinish);
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r427._loading_table && ɵɵpureFunction0(5, _c0$5));
    ɵɵadvance(1);
    ɵɵclassProp("ticket-list", !ctx_r427._loading_table);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r427.onboardingToFinish);
} }
function OnboardingListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r435 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵelementStart(1, "div", 3);
    ɵɵelementStart(2, "span", 4);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-tab-group", 5);
    ɵɵlistener("selectedIndexChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedIndexChange_4_listener($event) { ɵɵrestoreView(_r435); const ctx_r434 = ɵɵnextContext(); return ctx_r434.index = $event; })("selectedTabChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedTabChange_4_listener($event) { ɵɵrestoreView(_r435); const ctx_r436 = ɵɵnextContext(); return ctx_r436.triggerChange($event); });
    ɵɵelementStart(5, "mat-tab");
    ɵɵtemplate(6, OnboardingListComponent_div_1_ng_template_6_Template, 1, 1, "ng-template", 6);
    ɵɵtemplate(7, OnboardingListComponent_div_1_ng_template_7_Template, 4, 6, "ng-template", 7);
    ɵɵelementEnd();
    ɵɵelementStart(8, "mat-tab");
    ɵɵtemplate(9, OnboardingListComponent_div_1_ng_template_9_Template, 1, 1, "ng-template", 6);
    ɵɵtemplate(10, OnboardingListComponent_div_1_ng_template_10_Template, 4, 6, "ng-template", 7);
    ɵɵelementEnd();
    ɵɵelementStart(11, "mat-tab");
    ɵɵtemplate(12, OnboardingListComponent_div_1_ng_template_12_Template, 1, 1, "ng-template", 6);
    ɵɵtemplate(13, OnboardingListComponent_div_1_ng_template_13_Template, 4, 6, "ng-template", 7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(14, "a", 8);
    ɵɵlistener("click", function OnboardingListComponent_div_1_Template_a_click_14_listener() { ɵɵrestoreView(_r435); const ctx_r437 = ɵɵnextContext(); return ctx_r437.openDialog(); });
    ɵɵtext(15, " Nouvelle demande d\u2019int\u00E9gration ");
    ɵɵelementStart(16, "mat-icon");
    ɵɵtext(17, "add");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r421 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1("Vous avez actuellement ", ctx_r421.currentLength, " Demandes");
    ɵɵadvance(1);
    ɵɵproperty("@.disabled", true)("selectedIndex", ctx_r421.index);
} }
const _c1$3 = function () { return { "overflow-y": "hidden", "height": "100%", "display": "flex", "position": "absolute" }; };
class OnboardingListComponent {
    constructor(service, router, route, dialog) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.inputSearch = '';
        this.currentLength = 0;
        this.currentFilter = 'all';
        this.search = '';
        this.onboardingFormatList = [];
        this.templates = [];
        this.columnDefinitions = [
            {
                key: 'Name',
                value: 'Name',
                order: 1,
                class: 'u-1',
                sort: true,
            },
            {
                key: 'Id',
                value: 'Id',
                order: 2,
                class: 'u-2',
                sort: true,
            }, {
                key: 'requestor',
                value: 'Demandeur',
                order: 3,
                class: 'u-3',
                sort: true,
            }, {
                key: 'TemplateName',
                value: 'Service',
                order: 4,
                class: 'u-4',
                sort: true,
            },
            {
                key: 'createdAt',
                value: 'Date de création',
                order: 5,
                class: 'u-5',
                module: CellsComponentList.DateFormat,
                sort: true
            },
            // {
            //   key: 'ContactName',
            //   value: 'Contact',
            //   order: 6,
            //   class: 'u-6',
            //   sort: true,
            //   module: CellsComponentList.NameAvatar,
            //   override: ['ContactName', 'Email'],
            // },
            {
                key: 'Status',
                value: "Status",
                order: 6,
                class: 'u-6',
                sort: true
            },
            {
                key: 'Action',
                value: 'Action',
                order: 7,
                class: 'u-7',
                module: CellsComponentList.ButtonLinkText,
                override: [`/${this.service.mainPath}/request`, 'TemplateId', '_id'],
                align: 'center'
            }
        ];
        this._loading_table = true;
        this.HiddenIndex = 0;
        this.index = 0;
        this.lang = 'fr';
        this.service._templates.subscribe((data) => {
            this.templates = data;
        });
    }
    cancelSearch() {
        this.inputSearch = '';
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                yield this.service.getAllOnboarding();
                yield this.service.getAllProfil();
            }), 500);
            this.service.onboarding.subscribe((onboarding) => {
                setTimeout(() => {
                    this._loading_table = false;
                }, 2000);
                if (onboarding) {
                    let x = onboarding.map((row, index) => {
                        var _a, _b, _c, _d, _e, _f;
                        const user = row.categories.find((cat) => cat.name === "Utilisateur");
                        const formUser = user.forms.map((form) => ({ key: form.key, value: form.value })).reduce((a, v) => (Object.assign(Object.assign({}, a), { [v.key]: v.value })), {});
                        row.Status = row.Finished ? "Terminer" : "A finaliser";
                        row.requestor = ((_b = (_a = row) === null || _a === void 0 ? void 0 : _a.vcontacts[0]) === null || _b === void 0 ? void 0 : _b.Name) || '';
                        row.Name = row.ContactName = ((_c = formUser) === null || _c === void 0 ? void 0 : _c.LastName) + " " + ((_d = formUser) === null || _d === void 0 ? void 0 : _d.FirstName) || "";
                        row.Profil = ((_e = formUser) === null || _e === void 0 ? void 0 : _e.Type_de_profil_Nowboard__c) || "";
                        row.Email = ((_f = formUser) === null || _f === void 0 ? void 0 : _f.Email) || '';
                        row.TemplateName = row.vtemplates.length > 0 ? row.vtemplates[0].Name : '';
                        row.Id = index + 1;
                        return row;
                    });
                    this.onboardingFormatList = x;
                    this.onboardingList = new CoreMatTable(x, {
                        active: 'Id', direction: 'desc'
                    }, { active: '', valueStart: null, valueEnd: null }, 15, true, true);
                    this.currentLength = this.onboardingList.data.length;
                    this.onboardingFinished = new CoreMatTable(x.filter((data) => data.Finished), {
                        active: 'Id', direction: 'desc'
                    }, { active: '', valueStart: null, valueEnd: null }, 15, true, true);
                    this.onboardingToFinish = new CoreMatTable(x.filter((data) => !data.Finished), {
                        active: 'Id', direction: 'desc'
                    }, { active: '', valueStart: null, valueEnd: null }, 15, true, true);
                }
            });
        });
    }
    triggerChange($event) {
        console.log("this.onboardingToFifish", $event);
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
                queryParamsHandling: 'merge',
            });
            this.HiddenIndex = $event.index;
            setTimeout(() => {
                this._loading_table = false;
            }, 2000);
        }
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogCreateOnboardingComponent, {
            data: {
                templates: this.templates
            }
        });
        dialogRef.afterClosed().subscribe((current) => {
            if (current) {
                this.service.currentOnboarding.next(current);
                this.router.navigate([this.service.mainPath + `/request/${current.TemplateId}/0`]);
            }
        });
    }
}
OnboardingListComponent.ɵfac = function OnboardingListComponent_Factory(t) { return new (t || OnboardingListComponent)(ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(MatDialog)); };
OnboardingListComponent.ɵcmp = ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 2, vars: 3, consts: [[1, "full-height", 2, "background", "#F4F7F9 0% 0% no-repeat padding-box", 3, "ngStyle"], ["class", "main-all-ticket-list onboarding-list-container", 4, "ngIf"], [1, "main-all-ticket-list", "onboarding-list-container"], [1, "content-view-list-ticket"], [1, "title-table", 2, "cursor", "default"], [1, "list-ticket-tab", 3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], ["mat-tab-label", ""], ["matTabContent", ""], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-onboarding", 3, "click"], ["class", "bt-spinner", 4, "ngIf"], [3, "ngStyle"], [3, "columnDefinitions", "data", "lang", "inputSearch", 4, "ngIf"], [1, "bt-spinner"], [3, "columnDefinitions", "data", "lang", "inputSearch"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-card", 0);
        ɵɵtemplate(1, OnboardingListComponent_div_1_Template, 18, 3, "div", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngStyle", ctx._loading_table && ɵɵpureFunction0(2, _c1$3));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.onboardingList);
    } }, directives: [MatCard, NgStyle, NgIf, MatTabGroup, MatTab, MatTabLabel, MatTabContent, MatAnchor, MatIcon, OnboardingTableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:98%}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%], md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font:bold 13px/20px nexa;letter-spacing:0;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0;grid-row-gap:0;max-width:1500px;margin-left:auto;margin-right:auto;width:100%;animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{-ms-grid-row:2;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@-webkit-keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){-webkit-animation:1.25s linear infinite three-quarters-loader;animation:1.25s linear infinite three-quarters-loader;border:4px solid #4285f4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}@-webkit-keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font:18px/20px \"Nexa Text\";letter-spacing:0;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;font:17px/20px \"Nexa Text Bold\";letter-spacing:0;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px \"Nexa Text Bold\";letter-spacing:0;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width:1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03a9f4;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin;position:relative;left:50%;top:25vh}@-webkit-keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}  .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:350px;border:none}  .mat-tab-header .mat-tab-label-active{background:0 0}  .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}.onboarding-list-container[_ngcontent-%COMP%]{position:relative}.onboarding-list-container[_ngcontent-%COMP%]   .title-table[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container[_ngcontent-%COMP%]   .add-onboarding[_ngcontent-%COMP%]{background:#171f26;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px;position:absolute;right:48px;top:30px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:10px;cursor:pointer}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-onboarding-list',
                templateUrl: './onboarding-list.component.html',
                styleUrls: ['./onboarding-list.component.scss']
            }]
    }], function () { return [{ type: OnboardingService }, { type: Router }, { type: ActivatedRoute }, { type: MatDialog }]; }, null); })();

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
                path: 'request/:templateId/:onboardingId',
                component: OnboardingCreateComponent
            }
        ]
    },
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
OnboardingModule.ɵmod = ɵɵdefineNgModule({ type: OnboardingModule });
OnboardingModule.ɵinj = ɵɵdefineInjector({ factory: function OnboardingModule_Factory(t) { return new (t || OnboardingModule)(ɵɵinject(OnboardingModule, 12)); }, providers: [OnboardingService, CanDeactivateGuard], imports: [[
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
            ScrollToModule.forRoot(),
            DragDropModule,
            MatCardModule,
            MatDialogModule,
            MatStepperModule,
            MatProgressBarModule,
            MatTooltipModule,
            TableModule,
            MatTabsModule,
            NgxIntlTelInputModule,
            MatSlideToggleModule
        ],
        HttpClientModule,
        RouterModule,
        MatTabsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(OnboardingModule, { declarations: [MaterialElevationDirective,
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
        LoadingComponent], imports: [FormsModule,
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
        MatTableModule, RouterModule, ScrollToModule, DragDropModule,
        MatCardModule,
        MatDialogModule,
        MatStepperModule,
        MatProgressBarModule,
        MatTooltipModule,
        TableModule,
        MatTabsModule,
        NgxIntlTelInputModule,
        MatSlideToggleModule], exports: [OnboardingComponent,
        HttpClientModule,
        TemplateProfileCreateComponent,
        TemplateProfileListComponent,
        OnboardingListComponent,
        OnboardingCreateComponent,
        RouterModule,
        MatTabsModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingModule, [{
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
                    LoadingComponent
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
                    ScrollToModule.forRoot(),
                    DragDropModule,
                    MatCardModule,
                    MatDialogModule,
                    MatStepperModule,
                    MatProgressBarModule,
                    MatTooltipModule,
                    TableModule,
                    MatTabsModule,
                    NgxIntlTelInputModule,
                    MatSlideToggleModule
                ],
                providers: [OnboardingService, CanDeactivateGuard],
                entryComponents: [ExitConfirmComponent, TypeComponent, DialogCreateTemplateComponent, DialogCreateOnboardingComponent],
                exports: [
                    OnboardingComponent,
                    HttpClientModule,
                    TemplateProfileCreateComponent,
                    TemplateProfileListComponent,
                    OnboardingListComponent,
                    OnboardingCreateComponent,
                    RouterModule,
                    MatTabsModule
                ]
            }]
    }], function () { return [{ type: OnboardingModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { OnboardingComponent, OnboardingCreateComponent, OnboardingListComponent, OnboardingModule, OnboardingService, TemplateProfileCreateComponent, TemplateProfileListComponent, onBoardingRoutes };
//# sourceMappingURL=onboarding.js.map
