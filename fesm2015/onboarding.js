import { __awaiter } from 'tslib';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { EventEmitter, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelement, Component, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵstyleProp, ɵɵadvance, ɵɵtextInterpolate1, ɵɵtemplate, ɵɵproperty, ɵɵtextInterpolate, ɵɵpureFunction0, ɵɵreference, ɵɵprojectionDef, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵprojection, ɵɵclassMap, Input, Output, ɵɵtextInterpolate2, ElementRef, Renderer2, ɵɵdefineDirective, ɵɵNgOnChangesFeature, Directive, HostListener, ɵɵpureFunction1, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ViewChild, ɵɵsanitizeUrl, ɵɵclassProp, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Router, RouterOutlet, ActivatedRoute, RouterLinkWithHref, RouterLink, RouterModule } from '@angular/router';
import { ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, FormControl, NgModel, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { CdkDropList, CdkDrag, moveItemInArray, transferArrayItem, CdkDropListGroup, CdkDragHandle, DragDropModule } from '@angular/cdk/drag-drop';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButton, MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { NgIf, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle, CommonModule } from '@angular/common';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatCheckbox, MatCheckboxRequiredValidator, MatCheckboxModule } from '@angular/material/checkbox';
import { MatOption } from '@angular/material/core';
import { ScrollToDirective, ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatChipList, MatChipInput, MatChip, MatChipRemove, MatChipsModule } from '@angular/material/chips';
import { MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { CdkTableModule } from '@angular/cdk/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CellsComponentList, CoreMatTable, TableComponent, TableModule } from 'table';
import { MatTabGroup, MatTab, MatTabLabel, MatTabContent, MatTabsModule } from '@angular/material/tabs';

class OnboardingService {
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

function UpdateProfilComponent_div_17_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-icon", 20);
    ɵɵlistener("click", function UpdateProfilComponent_div_17_mat_icon_1_Template_mat_icon_click_0_listener($event) { ɵɵrestoreView(_r5); const icon_r3 = ctx.$implicit; const ctx_r4 = ɵɵnextContext(2); return ctx_r4.onSelectPicto($event, icon_r3.name); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const icon_r3 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleProp("color", ctx_r2.form.get("Picto").value === icon_r3.name ? "#830B6B" : "#000");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", icon_r3.name, " ");
} }
function UpdateProfilComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtemplate(1, UpdateProfilComponent_div_17_mat_icon_1_Template, 2, 3, "mat-icon", 19);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.matIconList);
} }
function UpdateProfilComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const tag_r6 = ctx.$implicit;
    ɵɵproperty("value", tag_r6);
    ɵɵadvance(1);
    ɵɵtextInterpolate(tag_r6);
} }
class UpdateProfilComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.form = this.data.form;
        this.tags = this.data.tags;
        this.matIconList = this.data.matIconList;
    }
    ngOnInit() {
    }
    onConfirm() {
        this.dialogRef.close(true);
    }
    onClose() {
        this.dialogRef.close(false);
    }
    onSelectPicto(e, picto) {
        e.preventDefault();
        this.form.patchValue({ Picto: picto });
        this.isPictoListShow = !this.isPictoListShow;
    }
    onShowPictoList(e) {
        e.preventDefault();
        this.isPictoListShow = !this.isPictoListShow;
    }
}
UpdateProfilComponent.ɵfac = function UpdateProfilComponent_Factory(t) { return new (t || UpdateProfilComponent)(ɵɵdirectiveInject(MAT_DIALOG_DATA), ɵɵdirectiveInject(MatDialogRef)); };
UpdateProfilComponent.ɵcmp = ɵɵdefineComponent({ type: UpdateProfilComponent, selectors: [["lib-update-profil"]], decls: 36, vars: 7, consts: [[3, "formGroup"], [1, "box-title"], [1, "box-title-content"], [1, "title"], [1, "profil-name-content"], ["mat-raised-button", "", "color", "primary", 1, "add-picto", 3, "click"], ["appearance", "outline", 1, "full-width"], ["type", "text", "matInput", "", "formControlName", "Name", "placeholder", "Ex. Manager"], ["class", "list-picto", 4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "Description", "rows", "4", "placeholder", ""], ["appearance", "outline", 1, "full-width", "margin-top"], ["formControlName", "Tags", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Status", 1, "form-field"], [1, "action"], [1, "link-create-profil"], ["mat-raised-button", "", "color", "primary", 1, "link-add-profil", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "link-add-profil", 3, "disabled", "click"], [1, "list-picto"], [3, "color", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "value"]], template: function UpdateProfilComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-dialog-content");
        ɵɵelementStart(1, "main");
        ɵɵelementStart(2, "form", 0);
        ɵɵelementStart(3, "div", 1);
        ɵɵelementStart(4, "div", 2);
        ɵɵelementStart(5, "h3", 3);
        ɵɵtext(6, "Modification votre profil d\u2019onboarding");
        ɵɵelementEnd();
        ɵɵelementStart(7, "p");
        ɵɵtext(8, "S\u00E9lectionnez l\u2019icon de votre choix et modifiez votre profil d\u2019onboarding");
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 4);
        ɵɵelementStart(10, "button", 5);
        ɵɵlistener("click", function UpdateProfilComponent_Template_button_click_10_listener($event) { return ctx.onShowPictoList($event); });
        ɵɵelementStart(11, "mat-icon");
        ɵɵtext(12);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(13, "mat-form-field", 6);
        ɵɵelementStart(14, "mat-label");
        ɵɵtext(15, "Nom de votre nouveau profil");
        ɵɵelementEnd();
        ɵɵelement(16, "input", 7);
        ɵɵelementEnd();
        ɵɵtemplate(17, UpdateProfilComponent_div_17_Template, 2, 1, "div", 8);
        ɵɵelementEnd();
        ɵɵelementStart(18, "mat-form-field", 6);
        ɵɵelementStart(19, "mat-label");
        ɵɵtext(20, "D\u00E9scription");
        ɵɵelementEnd();
        ɵɵelement(21, "textarea", 9);
        ɵɵelementEnd();
        ɵɵelementStart(22, "mat-form-field", 10);
        ɵɵelementStart(23, "mat-label");
        ɵɵtext(24, "Tags");
        ɵɵelementEnd();
        ɵɵelementStart(25, "mat-select", 11);
        ɵɵtemplate(26, UpdateProfilComponent_mat_option_26_Template, 2, 2, "mat-option", 12);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(27, "mat-checkbox", 13);
        ɵɵtext(28, "Active");
        ɵɵelementEnd();
        ɵɵelementStart(29, "div", 14);
        ɵɵelementStart(30, "div", 15);
        ɵɵelementStart(31, "button", 16);
        ɵɵlistener("click", function UpdateProfilComponent_Template_button_click_31_listener() { return ctx.onClose(); });
        ɵɵtext(32, " Annuler ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(33, "div", 15);
        ɵɵelementStart(34, "button", 17);
        ɵɵlistener("click", function UpdateProfilComponent_Template_button_click_34_listener() { return ctx.onConfirm(); });
        ɵɵtext(35, " Modifier un profil ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(10);
        ɵɵtextInterpolate(ctx.form.get("Picto").value === "" ? "contact_phone" : ctx.form.get("Picto").value);
        ɵɵadvance(5);
        ɵɵproperty("ngIf", ctx.isPictoListShow);
        ɵɵadvance(9);
        ɵɵproperty("ngForOf", ctx.tags);
        ɵɵadvance(8);
        ɵɵstyleProp("opacity", ctx.form.get("Name").value === "" || ctx.form.get("Tags").value == "" ? 0.4 : 1);
        ɵɵproperty("disabled", ctx.form.get("Name").value === "" || ctx.form.get("Tags").value == "");
    } }, directives: [MatDialogContent, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatButton, MatIcon, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf, MatSelect, RequiredValidator, NgForOf, MatCheckbox, MatOption], styles: ["main[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;margin-bottom:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px;border:1px solid #171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-top:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{border:none;outline:0;text-align:left;font:bold 20px/48px Nexa Text;letter-spacing:0;color:#171f26}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}.margin-top[_ngcontent-%COMP%]{margin-top:10px}.action[_ngcontent-%COMP%]{display:flex;align-items:center}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UpdateProfilComponent, [{
        type: Component,
        args: [{
                selector: 'lib-update-profil',
                templateUrl: './update-profil.component.html',
                styleUrls: ['./update-profil.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: MatDialogRef }]; }, null); })();

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
    } }, directives: [MatDialogContent, MatButton], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column!important}mat-dialog-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{color:#171f26;font:900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .nowboard-btn[_ngcontent-%COMP%]{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#171f26;font:18px/24px nexa,Text;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .cancel_btn[_ngcontent-%COMP%]{background-color:transparent!important;margin-top:10px}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%;margin:auto}"] });
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

const _c0 = function () { return { standalone: true }; };
function SubTemplateProfileComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r252 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 28);
    ɵɵelementStart(1, "mat-checkbox", 24);
    ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_34_Template_mat_checkbox_ngModelChange_1_listener($event) { ɵɵrestoreView(_r252); const ctx_r251 = ɵɵnextContext(); return ctx_r251.field.expandOnboarding = $event; });
    ɵɵtext(2, " Coch\u00E9 par default ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r242 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r242.field.expandOnboarding)("ngModelOptions", ɵɵpureFunction0(2, _c0));
} }
function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    const _r259 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-chip", 35);
    ɵɵlistener("dblclick", function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template_mat_chip_dblclick_0_listener() { ɵɵrestoreView(_r259); const option_r257 = ctx.$implicit; const ctx_r258 = ɵɵnextContext(2); return ctx_r258.toggleChip(option_r257); })("click", function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template_mat_chip_click_0_listener() { ɵɵrestoreView(_r259); const option_r257 = ctx.$implicit; const ctx_r260 = ɵɵnextContext(2); return ctx_r260.onEditChip(option_r257); })("removed", function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template_mat_chip_removed_0_listener() { ɵɵrestoreView(_r259); const option_r257 = ctx.$implicit; const ctx_r261 = ɵɵnextContext(2); return ctx_r261.removeKeyword(option_r257, ctx_r261.i, ctx_r261.j); });
    ɵɵtext(1);
    ɵɵelementStart(2, "mat-icon", 36);
    ɵɵtext(3, "cancel");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r257 = ctx.$implicit;
    ɵɵproperty("selected", option_r257.checked)("value", option_r257.value)("removable", true);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r257.value, " ");
} }
function SubTemplateProfileComponent_mat_form_field_35_Template(rf, ctx) { if (rf & 1) {
    const _r263 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 29);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, " Valeur par default ");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-chip-list", 30, 31);
    ɵɵlistener("cdkDropListDropped", function SubTemplateProfileComponent_mat_form_field_35_Template_mat_chip_list_cdkDropListDropped_3_listener($event) { ɵɵrestoreView(_r263); const ctx_r262 = ɵɵnextContext(); return ctx_r262.drop($event); });
    ɵɵtemplate(6, SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template, 4, 4, "mat-chip", 32);
    ɵɵelementStart(7, "input", 33, 34);
    ɵɵlistener("matChipInputTokenEnd", function SubTemplateProfileComponent_mat_form_field_35_Template_input_matChipInputTokenEnd_7_listener($event) { ɵɵrestoreView(_r263); const ctx_r264 = ɵɵnextContext(); return ctx_r264.addKeywordFromInput($event, ctx_r264.i, ctx_r264.j); })("keyup", function SubTemplateProfileComponent_mat_form_field_35_Template_input_keyup_7_listener($event) { ɵɵrestoreView(_r263); const ctx_r265 = ɵɵnextContext(); return ctx_r265.keyUp($event, ctx_r265.i, ctx_r265.j); })("ngModelChange", function SubTemplateProfileComponent_mat_form_field_35_Template_input_ngModelChange_7_listener($event) { ɵɵrestoreView(_r263); const ctx_r266 = ɵɵnextContext(); return ctx_r266.currentChip = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r254 = ɵɵreference(5);
    const ctx_r243 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("cdkDropListData", ctx_r243.field.defaultValue);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r243.field.defaultValue);
    ɵɵadvance(1);
    ɵɵproperty("matChipInputFor", _r254)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r243.separatorKeysCodes)("ngModel", ctx_r243.currentChip);
} }
function SubTemplateProfileComponent_mat_form_field_36_Template(rf, ctx) { if (rf & 1) {
    const _r268 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 1);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Valeur par default");
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 37);
    ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_mat_form_field_36_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r268); const ctx_r267 = ɵɵnextContext(); return ctx_r267.field.defaultValue = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r244 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngModelOptions", ɵɵpureFunction0(2, _c0))("ngModel", ctx_r244.field.defaultValue);
} }
function SubTemplateProfileComponent_mat_form_field_37_Template(rf, ctx) { if (rf & 1) {
    const _r270 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 1);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Valeur par default");
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 38);
    ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_mat_form_field_37_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r270); const ctx_r269 = ɵɵnextContext(); return ctx_r269.field.defaultValue = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r245 = ɵɵnextContext();
    ɵɵstyleProp("opacity", ctx_r245.field.type !== "tel" ? 1 : 0);
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r245.field.type)("disabled", ctx_r245.field.type === "tel")("ngModelOptions", ɵɵpureFunction0(6, _c0))("ngModel", ctx_r245.field.defaultValue);
} }
function SubTemplateProfileComponent_mat_checkbox_39_Template(rf, ctx) { if (rf & 1) {
    const _r272 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-checkbox", 24);
    ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_mat_checkbox_39_Template_mat_checkbox_ngModelChange_0_listener($event) { ɵɵrestoreView(_r272); const ctx_r271 = ɵɵnextContext(); return ctx_r271.field.isConditional = $event; })("ngModelChange", function SubTemplateProfileComponent_mat_checkbox_39_Template_mat_checkbox_ngModelChange_0_listener() { ɵɵrestoreView(_r272); const ctx_r273 = ɵɵnextContext(); return ctx_r273.getConditionValues(); });
    ɵɵtext(1, " \u00E0 condition ");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r246 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r246.field.isConditional)("ngModelOptions", ɵɵpureFunction0(2, _c0));
} }
function SubTemplateProfileComponent_div_40_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 46);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const cond_r276 = ctx.$implicit;
    ɵɵproperty("value", cond_r276);
    ɵɵadvance(1);
    ɵɵtextInterpolate(cond_r276.label);
} }
function SubTemplateProfileComponent_div_40_mat_radio_button_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-radio-button", 47);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r277 = ctx.$implicit;
    ɵɵproperty("value", item_r277.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r277.value, " ");
} }
function SubTemplateProfileComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r279 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 39);
    ɵɵelementStart(1, "mat-form-field", 40);
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3, "Champ de condition :");
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-select", 41);
    ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_40_Template_mat_select_ngModelChange_4_listener($event) { ɵɵrestoreView(_r279); const ctx_r278 = ɵɵnextContext(); return ctx_r278.field.conditionLocation = $event; });
    ɵɵtemplate(5, SubTemplateProfileComponent_div_40_mat_option_5_Template, 2, 2, "mat-option", 42);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "mat-radio-group", 43);
    ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_40_Template_mat_radio_group_ngModelChange_6_listener($event) { ɵɵrestoreView(_r279); const ctx_r280 = ɵɵnextContext(); return ctx_r280.field.conditionValue = $event; });
    ɵɵtemplate(7, SubTemplateProfileComponent_div_40_mat_radio_button_7_Template, 2, 2, "mat-radio-button", 44);
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 45);
    ɵɵlistener("click", function SubTemplateProfileComponent_div_40_Template_button_click_8_listener($event) { ɵɵrestoreView(_r279); const ctx_r281 = ɵɵnextContext(); return ctx_r281.onShowCondition($event); });
    ɵɵelementStart(9, "mat-icon");
    ɵɵtext(10, "close");
    ɵɵelementEnd();
    ɵɵtext(11, "Fermer ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r247 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵproperty("ngModel", ctx_r247.field.conditionLocation)("ngModelOptions", ɵɵpureFunction0(5, _c0));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r247.conditionData);
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r247.field.conditionValue);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r247.field.conditionLocation.possibleValues);
} }
function SubTemplateProfileComponent_mat_icon_41_Template(rf, ctx) { if (rf & 1) {
    const _r283 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-icon", 48);
    ɵɵlistener("click", function SubTemplateProfileComponent_mat_icon_41_Template_mat_icon_click_0_listener() { ɵɵrestoreView(_r283); const ctx_r282 = ɵɵnextContext(); return ctx_r282.onShowCondition(); });
    ɵɵtext(1, "help ");
    ɵɵelementEnd();
} }
function SubTemplateProfileComponent_mat_icon_48_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "expand_less");
    ɵɵelementEnd();
} }
function SubTemplateProfileComponent_mat_icon_49_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "expand_more");
    ɵɵelementEnd();
} }
const _c1 = [[["", 8, "child"]]];
const _c2 = function () { return ["select", "radio", "checkbox_multiple"]; };
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
}
SubTemplateProfileComponent.ɵfac = function SubTemplateProfileComponent_Factory(t) { return new (t || SubTemplateProfileComponent)(); };
SubTemplateProfileComponent.ɵcmp = ɵɵdefineComponent({ type: SubTemplateProfileComponent, selectors: [["lib-sub-category"]], inputs: { field: "field", length: "length", i: "i", j: "j", conditionData: "conditionData" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckedDefault: "onCheckedDefault", onGetConditionValues: "onGetConditionValues" }, ngContentSelectors: _c3, decls: 51, vars: 35, consts: [[1, "field-item"], ["appearance", "outline", 1, "form-field", "field-size"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "readonly", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size", 2, "display", "none"], ["required", "", 3, "disabled", "ngModel", "ngModelOptions", "ngModelChange"], ["value", "text"], ["value", "textarea"], ["value", "radio"], ["value", "select"], ["value", "checkbox"], ["value", "checkbox_multiple"], ["value", "email"], ["value", "password"], ["value", "date"], ["value", "tel"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 3, "opacity", 4, "ngSwitchDefault"], [1, "checkbox-condition"], ["class", "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["class", "condition-container", 4, "ngIf"], ["class", "condition-help", "matTooltip", "Param\u00E8trer la condition ici !", 3, "click", 4, "ngIf"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-mini-fab", "", "color", "success", "matTooltip", "Ajouter une sous-cat\u00E9gorie", 1, "transparent-button", 3, "disabled", "click"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "disabled", "click"], [4, "ngIf"], [1, "flex-auto", "w-30", "field-size"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], ["cdkDropList", "", "aria-label", "Video keywords; let index=index", "multiple", "", "selectable", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList", "chipList", ""], ["style", "min-height: 25px;", "cdkDrag", "", 3, "selected", "value", "removable", "dblclick", "click", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "ngModel", "matChipInputTokenEnd", "keyup", "ngModelChange"], ["chipsInput", ""], ["cdkDrag", "", 2, "min-height", "25px", 3, "selected", "value", "removable", "dblclick", "click", "removed"], ["matChipRemove", ""], ["type", "text", "matInput", "", "placeholder", "Description...", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "", 3, "type", "disabled", "ngModelOptions", "ngModel", "ngModelChange"], [1, "condition-container"], ["appearance", "outline", 1, "form-field", "field-size", "full-width"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"], [3, "value"], [1, "example-radio-button", 3, "value"], ["matTooltip", "Param\u00E8trer la condition ici !", 1, "condition-help", 3, "click"]], template: function SubTemplateProfileComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c1);
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "mat-form-field", 1);
        ɵɵelementStart(2, "mat-label");
        ɵɵtext(3, "Label");
        ɵɵelementEnd();
        ɵɵelementStart(4, "input", 2);
        ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_Template_input_ngModelChange_4_listener($event) { return ctx.field.label = $event; })("ngModelChange", function SubTemplateProfileComponent_Template_input_ngModelChange_4_listener() { return ctx.changeLabel(ctx.field.label, ctx.field.key); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-form-field", 3);
        ɵɵelementStart(6, "mat-label");
        ɵɵtext(7, "Cl\u00E9 du champ");
        ɵɵelementEnd();
        ɵɵelementStart(8, "input", 2);
        ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_Template_input_ngModelChange_8_listener($event) { return ctx.field.key = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "mat-form-field", 1);
        ɵɵelementStart(10, "mat-label");
        ɵɵtext(11, "Type");
        ɵɵelementEnd();
        ɵɵelementStart(12, "mat-select", 4);
        ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.field.type = $event; })("ngModelChange", function SubTemplateProfileComponent_Template_mat_select_ngModelChange_12_listener() { return ctx.changeType(ctx.field.type, ctx.i, ctx.j); });
        ɵɵelementStart(13, "mat-option", 5);
        ɵɵtext(14, "Text(80)");
        ɵɵelementEnd();
        ɵɵelementStart(15, "mat-option", 6);
        ɵɵtext(16, "Text(80+)");
        ɵɵelementEnd();
        ɵɵelementStart(17, "mat-option", 7);
        ɵɵtext(18, "Radio");
        ɵɵelementEnd();
        ɵɵelementStart(19, "mat-option", 8);
        ɵɵtext(20, "Selecteur");
        ɵɵelementEnd();
        ɵɵelementStart(21, "mat-option", 9);
        ɵɵtext(22, "Checkbox");
        ɵɵelementEnd();
        ɵɵelementStart(23, "mat-option", 10);
        ɵɵtext(24, "Checkbox multiple");
        ɵɵelementEnd();
        ɵɵelementStart(25, "mat-option", 11);
        ɵɵtext(26, "Email");
        ɵɵelementEnd();
        ɵɵelementStart(27, "mat-option", 12);
        ɵɵtext(28, "Password");
        ɵɵelementEnd();
        ɵɵelementStart(29, "mat-option", 13);
        ɵɵtext(30, "Date");
        ɵɵelementEnd();
        ɵɵelementStart(31, "mat-option", 14);
        ɵɵtext(32, "Phone");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementContainerStart(33, 15);
        ɵɵtemplate(34, SubTemplateProfileComponent_div_34_Template, 3, 3, "div", 16);
        ɵɵtemplate(35, SubTemplateProfileComponent_mat_form_field_35_Template, 9, 6, "mat-form-field", 17);
        ɵɵtemplate(36, SubTemplateProfileComponent_mat_form_field_36_Template, 4, 3, "mat-form-field", 18);
        ɵɵtemplate(37, SubTemplateProfileComponent_mat_form_field_37_Template, 4, 7, "mat-form-field", 19);
        ɵɵelementContainerEnd();
        ɵɵelementStart(38, "div", 20);
        ɵɵtemplate(39, SubTemplateProfileComponent_mat_checkbox_39_Template, 2, 3, "mat-checkbox", 21);
        ɵɵtemplate(40, SubTemplateProfileComponent_div_40_Template, 12, 6, "div", 22);
        ɵɵelementEnd();
        ɵɵtemplate(41, SubTemplateProfileComponent_mat_icon_41_Template, 2, 0, "mat-icon", 23);
        ɵɵelementStart(42, "mat-checkbox", 24);
        ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_Template_mat_checkbox_ngModelChange_42_listener($event) { return ctx.field.isMandatory = $event; });
        ɵɵtext(43, " obligatoire ");
        ɵɵelementEnd();
        ɵɵelementStart(44, "button", 25);
        ɵɵlistener("click", function SubTemplateProfileComponent_Template_button_click_44_listener($event) { return ctx.addNewSubLevelField($event); });
        ɵɵelementStart(45, "mat-icon");
        ɵɵtext(46, "device_hub");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(47, "button", 26);
        ɵɵlistener("click", function SubTemplateProfileComponent_Template_button_click_47_listener($event) { return ctx.expendMore($event, ctx.field); });
        ɵɵtemplate(48, SubTemplateProfileComponent_mat_icon_48_Template, 2, 0, "mat-icon", 27);
        ɵɵtemplate(49, SubTemplateProfileComponent_mat_icon_49_Template, 2, 0, "mat-icon", 27);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵprojection(50);
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵclassMap(!ctx.field.editable ? "readonly" : "");
        ɵɵadvance(3);
        ɵɵproperty("readonly", !ctx.field.editable)("ngModelOptions", ɵɵpureFunction0(30, _c0))("ngModel", ctx.field.label);
        ɵɵadvance(1);
        ɵɵclassMap(!ctx.field.editable ? "readonly" : "");
        ɵɵadvance(3);
        ɵɵproperty("readonly", !ctx.field.editable)("ngModelOptions", ɵɵpureFunction0(31, _c0))("ngModel", ctx.field.key);
        ɵɵadvance(4);
        ɵɵproperty("disabled", !ctx.field.editable)("ngModel", ctx.field.type)("ngModelOptions", ɵɵpureFunction0(32, _c0));
        ɵɵadvance(21);
        ɵɵproperty("ngSwitch", ctx.field.type);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "checkbox");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ɵɵpureFunction0(33, _c2).includes(ctx.field.type) ? ctx.field.type : !ctx.field.type);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "textarea");
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.field.editable);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showCondition);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.field.isConditional);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(34, _c0));
        ɵɵadvance(2);
        ɵɵstyleProp("opacity", ctx.field.subLevel > 2 || !ctx.field.editable ? 0 : 1);
        ɵɵproperty("disabled", ctx.field.subLevel > 2 || !ctx.field.editable);
        ɵɵadvance(3);
        ɵɵstyleProp("opacity", ctx.field.forms && ctx.field.forms.length > 0 ? 1 : 0);
        ɵɵproperty("disabled", !(ctx.field.forms && ctx.field.forms.length > 0));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.field.expandMore);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.field.expandMore);
    } }, directives: [MatFormField, MatLabel, MatInput, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, MatSelect, MatOption, NgSwitch, NgSwitchCase, NgSwitchDefault, NgIf, MatCheckbox, MatButton, MatTooltip, MatIcon, MatChipList, CdkDropList, NgForOf, MatChipInput, MatChip, CdkDrag, MatChipRemove, MatRadioGroup, MatRadioButton], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02);margin-bottom:-20px}  .mat-select{padding:0}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition[_ngcontent-%COMP%]{position:relative}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0}.condition-help[_ngcontent-%COMP%]{cursor:pointer}.cdk-overlay-pane[_ngcontent-%COMP%]{width:100%}"] });
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
        }], conditionData: [{
            type: Input
        }] }); })();

function TemplateProfileCreateComponent_div_2_div_14_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-icon", 19);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_2_div_14_mat_icon_1_Template_mat_icon_click_0_listener($event) { ɵɵrestoreView(_r14); const icon_r12 = ctx.$implicit; const ctx_r13 = ɵɵnextContext(3); return ctx_r13.onSelectPicto($event, icon_r12.name); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const icon_r12 = ctx.$implicit;
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵstyleProp("color", ctx_r11.form.get("Picto").value === icon_r12.name ? "#830B6B" : "#000");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", icon_r12.name, " ");
} }
function TemplateProfileCreateComponent_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtemplate(1, TemplateProfileCreateComponent_div_2_div_14_mat_icon_1_Template, 2, 3, "mat-icon", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r9.matIconList);
} }
function TemplateProfileCreateComponent_div_2_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const tag_r15 = ctx.$implicit;
    ɵɵproperty("value", tag_r15);
    ɵɵadvance(1);
    ɵɵtextInterpolate(tag_r15);
} }
function TemplateProfileCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵelementStart(1, "div", 4);
    ɵɵelementStart(2, "h3", 5);
    ɵɵtext(3, "Cr\u00E9ation d\u2019un nouveau profil d\u2019onboarding");
    ɵɵelementEnd();
    ɵɵelementStart(4, "p");
    ɵɵtext(5, "S\u00E9lectionnez l\u2019icon de votre choix et indiquez le nom de votre nouveau profil d\u2019onboarding");
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 6);
    ɵɵelementStart(7, "button", 7);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_2_Template_button_click_7_listener($event) { ɵɵrestoreView(_r17); const ctx_r16 = ɵɵnextContext(); return ctx_r16.onShowPictoList($event); });
    ɵɵelementStart(8, "mat-icon");
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(10, "mat-form-field", 8);
    ɵɵelementStart(11, "mat-label");
    ɵɵtext(12, "Nom de votre nouveau profil");
    ɵɵelementEnd();
    ɵɵelement(13, "input", 9);
    ɵɵelementEnd();
    ɵɵtemplate(14, TemplateProfileCreateComponent_div_2_div_14_Template, 2, 1, "div", 10);
    ɵɵelementEnd();
    ɵɵelementStart(15, "mat-form-field", 8);
    ɵɵelementStart(16, "mat-label");
    ɵɵtext(17, "D\u00E9scription");
    ɵɵelementEnd();
    ɵɵelement(18, "textarea", 11);
    ɵɵelementEnd();
    ɵɵelementStart(19, "mat-form-field", 8);
    ɵɵelementStart(20, "mat-label");
    ɵɵtext(21, "Tags");
    ɵɵelementEnd();
    ɵɵelementStart(22, "mat-select", 12);
    ɵɵtemplate(23, TemplateProfileCreateComponent_div_2_mat_option_23_Template, 2, 2, "mat-option", 13);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(24, "mat-checkbox", 14);
    ɵɵtext(25, "Active");
    ɵɵelementEnd();
    ɵɵelementStart(26, "div", 15);
    ɵɵelementStart(27, "button", 16);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_2_Template_button_click_27_listener() { ɵɵrestoreView(_r17); const ctx_r18 = ɵɵnextContext(); return ctx_r18.onShowCategory(); });
    ɵɵtext(28);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance(9);
    ɵɵtextInterpolate(ctx_r7.form.get("Picto").value === "" ? "contact_phone" : ctx_r7.form.get("Picto").value);
    ɵɵadvance(5);
    ɵɵproperty("ngIf", ctx_r7.isPictoListShow);
    ɵɵadvance(9);
    ɵɵproperty("ngForOf", ctx_r7.tags);
    ɵɵadvance(4);
    ɵɵstyleProp("opacity", ctx_r7.form.get("Name").value === "" || ctx_r7.form.get("Tags").value == "" ? 0.4 : 1);
    ɵɵproperty("disabled", ctx_r7.form.get("Name").value === "" || ctx_r7.form.get("Tags").value == "");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r7.id !== "0" ? "Modifier un profil" : "Cr\u00E9er un nouveau profil", " ");
} }
function TemplateProfileCreateComponent_div_3_li_9_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 37);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_li_9_span_2_Template_span_click_0_listener() { ɵɵrestoreView(_r29); const ctx_r28 = ɵɵnextContext(); const cat_r22 = ctx_r28.$implicit; const i_r23 = ctx_r28.index; const ctx_r27 = ɵɵnextContext(2); return ctx_r27.onExpendMore({ field: cat_r22 }, i_r23); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const cat_r22 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngxScrollTo", "#" + cat_r22.name);
    ɵɵadvance(1);
    ɵɵtextInterpolate(cat_r22.name);
} }
const _c0$1 = function () { return { standalone: true }; };
function TemplateProfileCreateComponent_div_3_li_9_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 38, 39);
    ɵɵlistener("blur", function TemplateProfileCreateComponent_div_3_li_9_input_3_Template_input_blur_0_listener() { ɵɵrestoreView(_r33); const ctx_r32 = ɵɵnextContext(3); return ctx_r32.onEdit(); })("ngModelChange", function TemplateProfileCreateComponent_div_3_li_9_input_3_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r33); const cat_r22 = ɵɵnextContext().$implicit; return cat_r22.name = $event; })("ngModelChange", function TemplateProfileCreateComponent_div_3_li_9_input_3_Template_input_ngModelChange_0_listener() { ɵɵrestoreView(_r33); const ctx_r37 = ɵɵnextContext(); const i_r23 = ctx_r37.index; const cat_r22 = ctx_r37.$implicit; const ctx_r36 = ɵɵnextContext(2); return ctx_r36.onEditCategoryName(i_r23, cat_r22.name); });
    ɵɵelementEnd();
} if (rf & 2) {
    const cat_r22 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngModel", cat_r22.name)("ngModelOptions", ɵɵpureFunction0(2, _c0$1));
} }
function TemplateProfileCreateComponent_div_3_li_9_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 19);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_li_9_ng_container_7_ng_container_1_Template_li_click_1_listener() { ɵɵrestoreView(_r44); const ctx_r43 = ɵɵnextContext(); const sub_r39 = ctx_r43.$implicit; const j_r40 = ctx_r43.index; const i_r23 = ɵɵnextContext().index; const ctx_r42 = ɵɵnextContext(2); return ctx_r42.onExpendMore({ field: sub_r39 }, i_r23, j_r40); });
    ɵɵelementStart(2, "span", 41);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r46 = ɵɵnextContext();
    const sub_r39 = ctx_r46.$implicit;
    const j_r40 = ctx_r46.index;
    ɵɵadvance(1);
    ɵɵclassMap(sub_r39.expandMore ? "sub-title active" : "sub-title");
    ɵɵadvance(1);
    ɵɵproperty("ngxScrollTo", "#" + sub_r39.key);
    ɵɵadvance(1);
    ɵɵtextInterpolate2("", j_r40 + 1, ". ", sub_r39.label, "");
} }
function TemplateProfileCreateComponent_div_3_li_9_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_li_9_ng_container_7_ng_container_1_Template, 4, 5, "ng-container", 40);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const sub_r39 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", sub_r39 == null ? null : sub_r39.forms);
} }
function TemplateProfileCreateComponent_div_3_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r48 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 33);
    ɵɵelementStart(1, "span");
    ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_li_9_span_2_Template, 2, 2, "span", 34);
    ɵɵtemplate(3, TemplateProfileCreateComponent_div_3_li_9_input_3_Template, 2, 3, "input", 35);
    ɵɵelementStart(4, "mat-icon", 19);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_li_9_Template_mat_icon_click_4_listener() { ɵɵrestoreView(_r48); const i_r23 = ctx.index; const ctx_r47 = ɵɵnextContext(2); return ctx_r47.onPassInEditMode(i_r23); });
    ɵɵtext(5, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "ol");
    ɵɵtemplate(7, TemplateProfileCreateComponent_div_3_li_9_ng_container_7_Template, 2, 1, "ng-container", 36);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const cat_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r19 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r19.editIndex === i_r23 ? "edition-mode" : "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r19.editIndex !== i_r23);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r19.editIndex === i_r23);
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", cat_r22.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r76 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 65);
    ɵɵelementStart(1, "button", 66);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template_button_click_1_listener() { ɵɵrestoreView(_r76); const k_r65 = ɵɵnextContext(4).index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r74 = ɵɵnextContext(2); return ctx_r74.onAddNewField(i_r50, j_r58, k_r65); });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, " add_box ");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5, "Ajouter un champ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const l_r72 = ɵɵnextContext().index;
    const child_r64 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", (child_r64 == null ? null : child_r64.forms == null ? null : child_r64.forms.length) - 1 === l_r72 ? 1 : 0);
    ɵɵproperty("disabled", (child_r64 == null ? null : child_r64.forms == null ? null : child_r64.forms.length) - 1 !== l_r72);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r83 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 53);
    ɵɵelementStart(1, "div", 54);
    ɵɵelementStart(2, "div", 55);
    ɵɵelementStart(3, "div", 64);
    ɵɵelementStart(4, "button", 57);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_button_click_4_listener() { ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = ɵɵnextContext(3).index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r81 = ɵɵnextContext(2); return ctx_r81.onRemoveField(i_r50, j_r58, k_r65, l_r72); });
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, " delete ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 58);
    ɵɵelementStart(8, "lib-sub-category", 59);
    ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = ɵɵnextContext(3).index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r86 = ɵɵnextContext(2); return ctx_r86.addKeywordFromInput($event.event, $event.prev, i_r50, j_r58, k_r65, l_r72); })("onKeyPress", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onKeyPress_8_listener($event) { ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = ɵɵnextContext(3).index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r90 = ɵɵnextContext(2); return ctx_r90.onKeyPress($event.event, i_r50, j_r58, k_r65, l_r72); })("onAddNewField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddNewField_8_listener() { ɵɵrestoreView(_r83); const k_r65 = ɵɵnextContext(3).index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r94 = ɵɵnextContext(2); return ctx_r94.onAddNewField(i_r50, j_r58, k_r65); })("onRemoveField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onRemoveField_8_listener() { ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = ɵɵnextContext(3).index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r98 = ɵɵnextContext(2); return ctx_r98.onRemoveField(i_r50, j_r58, k_r65, l_r72); })("onChangeType", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onChangeType_8_listener() { ɵɵrestoreView(_r83); const c2_r71 = ctx.$implicit; const l_r72 = ctx.index; const k_r65 = ɵɵnextContext(3).index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r102 = ɵɵnextContext(2); return ctx_r102.onChangeType(c2_r71.type, i_r50, j_r58, k_r65, l_r72); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = ɵɵnextContext(3).index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r106 = ɵɵnextContext(2); return ctx_r106.removeKeyword($event.event, i_r50, j_r58, k_r65, l_r72); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = ɵɵnextContext(3).index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r110 = ɵɵnextContext(2); return ctx_r110.onAddNewSubLevelField(i_r50, j_r58, k_r65, l_r72); })("onExpendMore", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onExpendMore_8_listener($event) { ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = ɵɵnextContext(3).index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r114 = ɵɵnextContext(2); return ctx_r114.onExpendMore($event, i_r50, j_r58, k_r65, l_r72); })("onChangeLabel", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onChangeLabel_8_listener($event) { ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = ɵɵnextContext(3).index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r118 = ɵɵnextContext(2); return ctx_r118.onChangeLabel($event, i_r50, j_r58, k_r65, l_r72); })("onCheckedChip", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onCheckedChip_8_listener($event) { ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = ɵɵnextContext(3).index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r122 = ɵɵnextContext(2); return ctx_r122.onCheckedChip($event, i_r50, j_r58, k_r65, l_r72); })("onDrop", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onDrop_8_listener($event) { ɵɵrestoreView(_r83); const ctx_r126 = ɵɵnextContext(11); return ctx_r126.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onCheckedDefault_8_listener($event) { ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = ɵɵnextContext(3).index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r127 = ɵɵnextContext(2); return ctx_r127.onCheckedDefault($event, i_r50, j_r58, k_r65, l_r72); })("onGetConditionValues", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onGetConditionValues_8_listener() { ɵɵrestoreView(_r83); const ctx_r131 = ɵɵnextContext(11); return ctx_r131.getConditionValues(); });
    ɵɵelement(9, "div", 62);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template, 6, 3, "div", 61);
    ɵɵelementEnd();
} if (rf & 2) {
    const c2_r71 = ctx.$implicit;
    const l_r72 = ctx.index;
    const ctx_r133 = ɵɵnextContext(3);
    const child_r64 = ctx_r133.$implicit;
    const k_r65 = ctx_r133.index;
    const field_r57 = ɵɵnextContext(3).$implicit;
    const ctx_r70 = ɵɵnextContext(5);
    ɵɵproperty("id", c2_r71.key);
    ɵɵadvance(4);
    ɵɵproperty("disabled", !field_r57.deleteable);
    ɵɵadvance(4);
    ɵɵproperty("field", c2_r71)("length", child_r64 == null ? null : child_r64.forms == null ? null : child_r64.forms.length)("i", k_r65)("j", l_r72)("conditionData", ctx_r70.conditionData);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", (child_r64 == null ? null : child_r64.forms == null ? null : child_r64.forms.length) - 1 === l_r72);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r135 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 50, 51);
    ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r135); const ctx_r134 = ɵɵnextContext(10); return ctx_r134.drop($event); });
    ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template, 11, 8, "div", 52);
    ɵɵelementEnd();
} if (rf & 2) {
    const child_r64 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("cdkDropListData", child_r64.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", child_r64.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 62);
    ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template, 3, 2, "div", 48);
    ɵɵelementEnd();
} if (rf & 2) {
    const child_r64 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r64.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r140 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 65);
    ɵɵelementStart(1, "button", 66);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template_button_click_1_listener() { ɵɵrestoreView(_r140); const j_r58 = ɵɵnextContext(4).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r138 = ɵɵnextContext(2); return ctx_r138.onAddNewField(i_r50, j_r58); });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "add_box");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5, "Ajouter un champ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const k_r65 = ɵɵnextContext().index;
    const field_r57 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", (field_r57 == null ? null : field_r57.forms == null ? null : field_r57.forms.length) - 1 === k_r65 ? 1 : 0);
    ɵɵproperty("disabled", (field_r57 == null ? null : field_r57.forms == null ? null : field_r57.forms.length) - 1 !== k_r65);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r146 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 53);
    ɵɵelementStart(1, "div", 54);
    ɵɵelementStart(2, "div", 55);
    ɵɵelementStart(3, "div", 63);
    ɵɵelementStart(4, "button", 57);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_button_click_4_listener() { ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r144 = ɵɵnextContext(2); return ctx_r144.onRemoveField(i_r50, j_r58, k_r65); });
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, " delete");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 58);
    ɵɵelementStart(8, "lib-sub-category", 59);
    ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r148 = ɵɵnextContext(2); return ctx_r148.addKeywordFromInput($event.event, $event.prev, i_r50, j_r58, k_r65); })("onKeyPress", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onKeyPress_8_listener($event) { ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r151 = ɵɵnextContext(2); return ctx_r151.onKeyPress($event.event, i_r50, j_r58, k_r65); })("onAddNewField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddNewField_8_listener() { ɵɵrestoreView(_r146); const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r154 = ɵɵnextContext(2); return ctx_r154.onAddNewField(i_r50, j_r58); })("onRemoveField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onRemoveField_8_listener() { ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r157 = ɵɵnextContext(2); return ctx_r157.onRemoveField(i_r50, j_r58, k_r65); })("onChangeType", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onChangeType_8_listener() { ɵɵrestoreView(_r146); const child_r64 = ctx.$implicit; const k_r65 = ctx.index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r160 = ɵɵnextContext(2); return ctx_r160.onChangeType(child_r64.type, i_r50, j_r58, k_r65); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r163 = ɵɵnextContext(2); return ctx_r163.removeKeyword($event.event, i_r50, j_r58, k_r65); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r166 = ɵɵnextContext(2); return ctx_r166.onAddNewSubLevelField(i_r50, j_r58, k_r65); })("onExpendMore", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onExpendMore_8_listener($event) { ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r169 = ɵɵnextContext(2); return ctx_r169.onExpendMore($event, i_r50, j_r58, k_r65); })("onChangeLabel", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onChangeLabel_8_listener($event) { ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r172 = ɵɵnextContext(2); return ctx_r172.onChangeLabel($event, i_r50, j_r58, k_r65); })("onCheckedChip", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onCheckedChip_8_listener($event) { ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r175 = ɵɵnextContext(2); return ctx_r175.onCheckedChip($event, i_r50, j_r58, k_r65); })("onDrop", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onDrop_8_listener($event) { ɵɵrestoreView(_r146); const ctx_r178 = ɵɵnextContext(8); return ctx_r178.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onCheckedDefault_8_listener($event) { ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = ɵɵnextContext(3).index; const i_r50 = ɵɵnextContext(3).index; const ctx_r179 = ɵɵnextContext(2); return ctx_r179.onCheckedDefault($event, i_r50, j_r58, k_r65); })("onGetConditionValues", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onGetConditionValues_8_listener() { ɵɵrestoreView(_r146); const ctx_r182 = ɵɵnextContext(8); return ctx_r182.getConditionValues(); });
    ɵɵtemplate(9, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_Template, 2, 1, "div", 60);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template, 6, 3, "div", 61);
    ɵɵelementEnd();
} if (rf & 2) {
    const child_r64 = ctx.$implicit;
    const k_r65 = ctx.index;
    const ctx_r183 = ɵɵnextContext(3);
    const field_r57 = ctx_r183.$implicit;
    const j_r58 = ctx_r183.index;
    const ctx_r63 = ɵɵnextContext(5);
    ɵɵproperty("id", child_r64.key);
    ɵɵadvance(4);
    ɵɵproperty("disabled", !child_r64.deleteable);
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", !child_r64.deleteable ? 0 : 1);
    ɵɵadvance(3);
    ɵɵproperty("field", child_r64)("length", field_r57 == null ? null : field_r57.forms == null ? null : field_r57.forms.length)("i", j_r58)("j", k_r65)("conditionData", ctx_r63.conditionData);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r64.expandMore);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (field_r57 == null ? null : field_r57.forms == null ? null : field_r57.forms.length) - 1 === k_r65);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r185 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 50, 51);
    ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r185); const ctx_r184 = ɵɵnextContext(7); return ctx_r184.drop($event); });
    ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template, 11, 11, "div", 52);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r57 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("cdkDropListData", field_r57.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", field_r57.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 62);
    ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_Template, 3, 2, "div", 48);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r57 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r57.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r190 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 65);
    ɵɵelementStart(1, "button", 66);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_10_Template_button_click_1_listener() { ɵɵrestoreView(_r190); const i_r50 = ɵɵnextContext(4).index; const ctx_r188 = ɵɵnextContext(2); return ctx_r188.onAddNewField(i_r50); });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "add_box");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5, "Ajouter un champ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const j_r58 = ɵɵnextContext().index;
    const category_r49 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", (category_r49 == null ? null : category_r49.forms == null ? null : category_r49.forms.length) - 1 === j_r58 ? 1 : 0);
    ɵɵproperty("disabled", (category_r49 == null ? null : category_r49.forms == null ? null : category_r49.forms.length) - 1 !== j_r58);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r195 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 53);
    ɵɵelementStart(1, "div", 54);
    ɵɵelementStart(2, "div", 55);
    ɵɵelementStart(3, "div", 56);
    ɵɵelementStart(4, "button", 57);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_button_click_4_listener() { ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = ɵɵnextContext(3).index; const ctx_r193 = ɵɵnextContext(2); return ctx_r193.onRemoveField(i_r50, j_r58); });
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, "delete ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 58);
    ɵɵelementStart(8, "lib-sub-category", 59);
    ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = ɵɵnextContext(3).index; const ctx_r196 = ɵɵnextContext(2); return ctx_r196.addKeywordFromInput($event.event, $event.prev, i_r50, j_r58); })("onKeyPress", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onKeyPress_8_listener($event) { ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = ɵɵnextContext(3).index; const ctx_r198 = ɵɵnextContext(2); return ctx_r198.onKeyPress($event.event, i_r50, j_r58); })("onAddNewField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onAddNewField_8_listener() { ɵɵrestoreView(_r195); const i_r50 = ɵɵnextContext(3).index; const ctx_r200 = ɵɵnextContext(2); return ctx_r200.onAddNewField(i_r50); })("onRemoveField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onRemoveField_8_listener() { ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = ɵɵnextContext(3).index; const ctx_r202 = ɵɵnextContext(2); return ctx_r202.onRemoveField(i_r50, j_r58); })("onChangeType", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onChangeType_8_listener() { ɵɵrestoreView(_r195); const field_r57 = ctx.$implicit; const j_r58 = ctx.index; const i_r50 = ɵɵnextContext(3).index; const ctx_r204 = ɵɵnextContext(2); return ctx_r204.onChangeType(field_r57.type, i_r50, j_r58); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = ɵɵnextContext(3).index; const ctx_r206 = ɵɵnextContext(2); return ctx_r206.removeKeyword($event.event, i_r50, j_r58); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = ɵɵnextContext(3).index; const ctx_r208 = ɵɵnextContext(2); return ctx_r208.onAddNewSubLevelField(i_r50, j_r58); })("onExpendMore", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onExpendMore_8_listener($event) { ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = ɵɵnextContext(3).index; const ctx_r210 = ɵɵnextContext(2); return ctx_r210.onExpendMore($event, i_r50, j_r58); })("onChangeLabel", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onChangeLabel_8_listener($event) { ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = ɵɵnextContext(3).index; const ctx_r212 = ɵɵnextContext(2); return ctx_r212.onChangeLabel($event, i_r50, j_r58); })("onCheckedChip", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onCheckedChip_8_listener($event) { ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = ɵɵnextContext(3).index; const ctx_r214 = ɵɵnextContext(2); return ctx_r214.onCheckedChip($event, i_r50, j_r58); })("onDrop", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onDrop_8_listener($event) { ɵɵrestoreView(_r195); const ctx_r216 = ɵɵnextContext(5); return ctx_r216.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onCheckedDefault_8_listener($event) { ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = ɵɵnextContext(3).index; const ctx_r217 = ɵɵnextContext(2); return ctx_r217.onCheckedDefault($event, i_r50, j_r58); })("onGetConditionValues", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onGetConditionValues_8_listener() { ɵɵrestoreView(_r195); const ctx_r219 = ɵɵnextContext(5); return ctx_r219.getConditionValues(); });
    ɵɵtemplate(9, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_Template, 2, 1, "div", 60);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_10_Template, 6, 3, "div", 61);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r57 = ctx.$implicit;
    const j_r58 = ctx.index;
    const ctx_r220 = ɵɵnextContext(3);
    const category_r49 = ctx_r220.$implicit;
    const i_r50 = ctx_r220.index;
    const ctx_r56 = ɵɵnextContext(2);
    ɵɵproperty("id", field_r57.key);
    ɵɵadvance(4);
    ɵɵproperty("disabled", !field_r57.deleteable);
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", !field_r57.deleteable ? 0 : 1);
    ɵɵadvance(2);
    ɵɵclassMap(!field_r57.deleteable ? "disabled" : "");
    ɵɵadvance(1);
    ɵɵproperty("field", field_r57)("length", category_r49 == null ? null : category_r49.forms == null ? null : category_r49.forms.length)("i", i_r50)("j", j_r58)("conditionData", ctx_r56.conditionData);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r57.expandMore);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (category_r49 == null ? null : category_r49.forms == null ? null : category_r49.forms.length) - 1 === j_r58);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template, 11, 13, "div", 52);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const category_r49 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", category_r49.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r223 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 50, 51);
    ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_div_19_div_8_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r223); const ctx_r222 = ɵɵnextContext(3); return ctx_r222.drop($event); });
    ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_Template, 2, 1, "ng-container", 40);
    ɵɵelementEnd();
} if (rf & 2) {
    const category_r49 = ɵɵnextContext().$implicit;
    ɵɵproperty("cdkDropListData", category_r49.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", category_r49.expandMore);
} }
function TemplateProfileCreateComponent_div_3_div_19_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "chevron_right");
    ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_3_div_19_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "expand_more");
    ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_3_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r226 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 42);
    ɵɵelementStart(1, "div", 43);
    ɵɵelementStart(2, "button", 44);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_Template_button_click_2_listener($event) { ɵɵrestoreView(_r226); const i_r50 = ctx.index; const ctx_r225 = ɵɵnextContext(2); return ctx_r225.onRemoveCategory($event, i_r50); });
    ɵɵelementStart(3, "mat-icon");
    ɵɵtext(4, "delete");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 45);
    ɵɵelementStart(6, "div", 46);
    ɵɵelementStart(7, "input", 47);
    ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_3_div_19_Template_input_ngModelChange_7_listener($event) { ɵɵrestoreView(_r226); const category_r49 = ctx.$implicit; return category_r49.name = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(8, TemplateProfileCreateComponent_div_3_div_19_div_8_Template, 3, 2, "div", 48);
    ɵɵelementEnd();
    ɵɵelementStart(9, "button", 49);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_Template_button_click_9_listener($event) { ɵɵrestoreView(_r226); const category_r49 = ctx.$implicit; const i_r50 = ctx.index; const ctx_r228 = ɵɵnextContext(2); return ctx_r228.onExpendMore({ event: $event, field: category_r49 }, i_r50); });
    ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_mat_icon_10_Template, 2, 0, "mat-icon", 40);
    ɵɵtemplate(11, TemplateProfileCreateComponent_div_3_div_19_mat_icon_11_Template, 2, 0, "mat-icon", 40);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const category_r49 = ctx.$implicit;
    const ctx_r21 = ɵɵnextContext(2);
    ɵɵproperty("id", category_r49.name);
    ɵɵadvance(2);
    ɵɵproperty("disabled", !category_r49.deleteable);
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", !category_r49.deleteable ? 0 : 1);
    ɵɵadvance(4);
    ɵɵproperty("readonly", ctx_r21.categories.length < 4 || !category_r49.editable)("readonly", !category_r49.editable)("ngModel", category_r49.name)("ngModelOptions", ɵɵpureFunction0(11, _c0$1));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", category_r49.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !category_r49.expandMore);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", category_r49.expandMore);
} }
function TemplateProfileCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r230 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 21);
    ɵɵelementStart(1, "div", 22);
    ɵɵelementStart(2, "div", 23);
    ɵɵelementStart(3, "h3");
    ɵɵelementStart(4, "span");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "mat-icon", 19);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_Template_mat_icon_click_6_listener() { ɵɵrestoreView(_r230); const ctx_r229 = ɵɵnextContext(); return ctx_r229.openDialog(); });
    ɵɵtext(7, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "ol", 24);
    ɵɵtemplate(9, TemplateProfileCreateComponent_div_3_li_9_Template, 8, 5, "li", 25);
    ɵɵelementEnd();
    ɵɵelementStart(10, "button", 26);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_Template_button_click_10_listener($event) { ɵɵrestoreView(_r230); const ctx_r231 = ɵɵnextContext(); return ctx_r231.onAddNewCategory($event); });
    ɵɵelementStart(11, "mat-icon");
    ɵɵtext(12, "add_box");
    ɵɵelementEnd();
    ɵɵtext(13, " Ajouter une nouvelle cat\u00E9gorie ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(14, "button", 27);
    ɵɵtext(15, " Enregistrer le profil ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(16, "div", 28);
    ɵɵelementStart(17, "div", 29, 30);
    ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_Template_div_cdkDropListDropped_17_listener($event) { ɵɵrestoreView(_r230); const ctx_r232 = ɵɵnextContext(); return ctx_r232.drop($event); });
    ɵɵtemplate(19, TemplateProfileCreateComponent_div_3_div_19_Template, 12, 12, "div", 31);
    ɵɵelementStart(20, "div", 32);
    ɵɵelementStart(21, "button", 19);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_Template_button_click_21_listener($event) { ɵɵrestoreView(_r230); const ctx_r233 = ɵɵnextContext(); return ctx_r233.onAddNewCategory($event); });
    ɵɵelementStart(22, "mat-icon");
    ɵɵtext(23, "add");
    ɵɵelementEnd();
    ɵɵtext(24, " Ajouter une cat\u00E9gorie ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵtextInterpolate(ctx_r8.form.get("Name").value);
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", ctx_r8.categories);
    ɵɵadvance(8);
    ɵɵproperty("cdkDropListData", ctx_r8.categories);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r8.categories);
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
        this.showProfileName = false;
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
        this.defaultCategorie = [
            {
                name: "Utilisateur",
                editable: false,
                deleteable: false,
                expandMore: false,
                expandOnboarding: true,
                defaultValue: false,
                suffixEndpoint: "category/user",
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
                    // {
                    //   label: "ID",
                    //   key: "Id",
                    //   expandOnboarding:true,
                    //   defaultValue: null,
                    //   value: null,
                    //   size: 80,
                    //   isMandatory: true,
                    //   otherValue:'',
                    //   type: "text",
                    //   editable: false,
                    //   deleteable: false,
                    //   subLevel: 1,
                    //   expandMore: false,
                    // }, {
                    //   label: "Etablissement ID",
                    //   key: "AccountId",
                    //   expandOnboarding:true,
                    //   defaultValue: null,
                    //   value: null,
                    //   size: 80,
                    //   isMandatory: true,
                    //   otherValue:'',
                    //   type: "text",
                    //   editable: false,
                    //   deleteable: false,
                    //   subLevel: 1,
                    //   expandMore: false,
                    // },
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
                forms: [
                    {
                        label: "Utilisateur local à créer",
                        key: "UserLocalToCreate",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
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
                        value: null,
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
                                label: "Votre mot de passe.",
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
                                value: null,
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
                forms: [
                    {
                        label: "Adresse mail à créer.",
                        key: "EmailToCreate",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
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
                        label: "Listes  de distribution.",
                        key: "DistributionList",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
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
                                label: "Descriptions.",
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
                        label: "Ajouter des boites mails délégués.",
                        key: "AddInboxMailDelegate",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
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
                        forms: [
                            {
                                label: "Descriptions.",
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
                forms: [
                    {
                        label: "Accès aux lecteurs réseaux.",
                        key: "ReadNetworkAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
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
                forms: [
                    {
                        label: "Accès au VPN",
                        key: "VpnAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
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
                forms: [
                    {
                        label: "Accès aux imprimantes.",
                        key: "PrinterAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
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
                forms: [
                    {
                        label: "Accès aux applications ?",
                        key: "ApplicationAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
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
                forms: [
                    {
                        label: "Paramétrage de poste",
                        key: "PostParameter",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
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
                                value: null,
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
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.id = this.route.snapshot.paramMap.get("id");
            this.form = this.fb.group({
                Name: ["", Validators.required],
                Picto: [""],
                Description: [""],
                Tags: ["", Validators.required],
                Status: [false, Validators.required],
            });
            this.form.valueChanges.subscribe(c => {
                this.canExit = false;
            });
            if (this.id !== "0") {
                this.currentProfil = yield this.service.getProfil(this.id);
                this.form.patchValue(this.currentProfil);
                this.categories = this.currentProfil.categories;
            }
            else {
                this.showProfileName = true;
                this.categories = this.defaultCategorie;
            }
            this.tags = yield this.service.getAllTags();
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
            deleteable: true,
            expandMore: true,
            suffixEndpoint: "",
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
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.form.valid && this.onChangeCategory()) {
                const expandCategories = this.categories
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
                const result = this.id !== "0"
                    ? yield this.service.updateProfil(Object.assign(Object.assign(Object.assign({}, this.currentProfil), this.form.value), { categories: expandCategories }))
                    : yield this.service.createProfil(Object.assign(Object.assign({}, this.form.value), { categories: expandCategories }));
                if (result) {
                    yield this.service.getAllProfil();
                    this.canExit = true;
                    this.router.navigate([this.service.mainPath]);
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
        // this.getConditionValues()
    }
    removeKeyword(keyword, ...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.defaultValue = forms.defaultValue.filter((option) => option.value !== keyword.value);
        // this.getConditionValues()
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
        const dialogRef = this.dialog.open(UpdateProfilComponent, {
            data: {
                matIconList: this.matIconList,
                form: this.form,
                tags: this.tags
            }
        });
        dialogRef.afterClosed().subscribe((confirmed) => {
            if (confirmed) {
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
        console.log('----------------------', conditionsList);
        this.conditionData = conditionsList;
        console.log(conditionsList);
    }
}
TemplateProfileCreateComponent.ɵfac = function TemplateProfileCreateComponent_Factory(t) { return new (t || TemplateProfileCreateComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(MatDialog)); };
TemplateProfileCreateComponent.ɵcmp = ɵɵdefineComponent({ type: TemplateProfileCreateComponent, selectors: [["onboarding-create-profile-template"]], decls: 4, vars: 3, consts: [[3, "formGroup", "submit"], ["class", "box-title", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "box-title"], [1, "box-title-content"], [1, "title"], [1, "profil-name-content"], ["mat-raised-button", "", "color", "primary", 1, "add-picto", 3, "click"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "matInput", "", "formControlName", "Name", "placeholder", "Ex. Manager"], ["class", "list-picto", 4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "Description", "rows", "4", "placeholder", ""], ["formControlName", "Tags", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Status", 1, "form-field"], [1, "link-create-profil"], ["mat-raised-button", "", "color", "primary", 1, "link-add-profil", 3, "disabled", "click"], [1, "list-picto"], [3, "color", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "value"], [1, "category"], [1, "side-bar"], [1, "summary"], ["type", "I"], ["class", "li-title", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "add-category", "transparent", 3, "click"], ["mat-button", "", "type", "submit", 1, "register-button"], ["cdkDropListGroup", "", 1, "fields"], ["cdkDropList", "", 1, "example-list", "mt-20", 3, "cdkDropListData", "cdkDropListDropped"], ["parentList", "cdkDropList"], ["class", "category-item", "cdkDrag", "", 3, "id", 4, "ngFor", "ngForOf"], [1, "add-button-container"], [1, "li-title"], [3, "ngxScrollTo", "click", 4, "ngIf"], ["type", "text", 3, "ngModel", "ngModelOptions", "blur", "ngModelChange", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngxScrollTo", "click"], ["type", "text", 3, "ngModel", "ngModelOptions", "blur", "ngModelChange"], ["edit", ""], [4, "ngIf"], [3, "ngxScrollTo"], ["cdkDrag", "", 1, "category-item", 3, "id"], ["cdkDragHandle", "", 1, "left-action", "move-icons"], ["mat-raised-button", "", 1, "transparent-button", 3, "disabled", "click"], [1, "field-content"], [1, "field-item"], ["type", "text", "required", "", "placeholder", "Saisir le nom de la cat\u00E9gorie", 1, "example-full-width", "input-category-name", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "click"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "", 3, "id", 4, "ngFor", "ngForOf"], [1, "", 3, "id"], ["cdkDrag", ""], [1, "fields-content"], [1, "button-action"], ["mat-mini-fab", "", "color", "warn", 1, "delete-field", "transparent-button", 3, "disabled", "click"], [1, "fields-container"], [3, "field", "length", "i", "j", "conditionData", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onGetConditionValues"], ["class", "child", 4, "ngIf"], ["class", "add-button-container add-button-sub-category", 4, "ngIf"], [1, "child"], [1, "button-action", "child-2-background"], [1, "button-action", "child-3-background"], [1, "add-button-container", "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 2, "margin", "10px auto", 3, "disabled", "click"]], template: function TemplateProfileCreateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "main");
        ɵɵelementStart(1, "form", 0);
        ɵɵlistener("submit", function TemplateProfileCreateComponent_Template_form_submit_1_listener() { return ctx.onSubmit(); });
        ɵɵtemplate(2, TemplateProfileCreateComponent_div_2_Template, 29, 7, "div", 1);
        ɵɵtemplate(3, TemplateProfileCreateComponent_div_3_Template, 25, 4, "div", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showProfileName);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.showProfileName);
    } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, NgIf, MatButton, MatIcon, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, MatSelect, RequiredValidator, NgForOf, MatCheckbox, MatOption, CdkDropListGroup, CdkDropList, ScrollToDirective, NgModel, CdkDrag, CdkDragHandle, SubTemplateProfileComponent], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name[_ngcontent-%COMP%]{border:none;outline:0;text-align:left;font:bold 18px/48px Nexa Text;letter-spacing:0;color:#171f26}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:.5em 0}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}[_nghost-%COMP%]     .cdk-drag-preview .input-category-name div.mat-form-field-outline-start, [_nghost-%COMP%]     .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0!important}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-label-wrapper{display:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-infix{border-top:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-infix{padding:0 0 1em!important}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;min-height:60px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%;-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;align-items:center}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style-position:inside}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px;display:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{display:initial!important}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:20px auto auto;width:100%;min-width:250px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding:10px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #192128!important;border-radius:8px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important}"] });
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

function TemplateProfileListComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "mat-icon", 14);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const d_r235 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(d_r235 == null ? null : d_r235.Picto);
} }
function TemplateProfileListComponent_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "h3");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const d_r235 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(d_r235.Name.substr(0, 2));
} }
const _c0$2 = function (a0) { return [a0]; };
function TemplateProfileListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r241 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵelementStart(1, "div", 10);
    ɵɵtemplate(2, TemplateProfileListComponent_div_13_div_2_Template, 3, 1, "div", 11);
    ɵɵtemplate(3, TemplateProfileListComponent_div_13_div_3_Template, 3, 1, "div", 11);
    ɵɵelementStart(4, "p");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 12);
    ɵɵlistener("click", function TemplateProfileListComponent_div_13_Template_button_click_6_listener($event) { ɵɵrestoreView(_r241); const d_r235 = ctx.$implicit; const ctx_r240 = ɵɵnextContext(); return ctx_r240.onDelete($event, d_r235._id); });
    ɵɵelementStart(7, "mat-icon");
    ɵɵtext(8, "close");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const d_r235 = ctx.$implicit;
    const ctx_r234 = ɵɵnextContext();
    ɵɵproperty("defaultElevation", 0);
    ɵɵadvance(1);
    ɵɵproperty("routerLink", ɵɵpureFunction1(6, _c0$2, ctx_r234.service.mainPath + "/template-builder/" + d_r235._id));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", d_r235 == null ? null : d_r235.Picto);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(d_r235 == null ? null : d_r235.Picto));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", d_r235.Name, "");
    ɵɵadvance(1);
    ɵɵproperty("defaultElevation", ctx_r234.defaultElevation);
} }
class TemplateProfileListComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.displayedColumns = ['Name', 'vcontacts', 'createdAt', 'updatedAt', 'action'];
        this.datas = [];
        this.dataSource = new MatTableDataSource([]);
        this.defaultElevation = 2;
        this.raisedElevation = 8;
        this.service.templates.subscribe((templates) => {
            if (templates.length > 0) {
                this.datas = templates;
            }
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                yield this.getAllProfils(true);
            }), 500);
        });
    }
    onAddProfil() {
        this.router.navigate(['onboarding/template-builder/0']);
    }
    onDelete(e, id) {
        return __awaiter(this, void 0, void 0, function* () {
            e.stopPropagation();
            if (confirm('Voulez vous supprimer cette template ?')) {
                const result = yield this.service.deleteProfil(id);
                if (result) {
                    this.datas = this.datas.filter((data) => data._id !== id);
                }
            }
        });
    }
    getAllProfils(recall) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.datas.length === 0) {
                const profile = yield this.service.getAllProfil();
                this.datas = profile;
            }
            this.dataSource = new MatTableDataSource(this.datas);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
}
TemplateProfileListComponent.ɵfac = function TemplateProfileListComponent_Factory(t) { return new (t || TemplateProfileListComponent)(ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(Router)); };
TemplateProfileListComponent.ɵcmp = ɵɵdefineComponent({ type: TemplateProfileListComponent, selectors: [["onboarding-profile-list"]], viewQuery: function TemplateProfileListComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(MatPaginator, true);
        ɵɵviewQuery(MatSort, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.paginator = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, decls: 14, vars: 4, consts: [[1, "main"], [1, "header-list"], [1, "title"], [1, "sub-title"], [1, "content-list"], [1, "list"], [1, "box-template", "new-template"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "routerLink"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation"], [1, "box-content", 3, "routerLink"], ["class", "picto-preview", 4, "ngIf"], ["mat-mini-fab", "", "color", "accent", "appMaterialElevation", "", "raisedElevation", "16", 3, "defaultElevation", "click"], [1, "picto-preview"], [2, "font-size", "50px", "width", "43%", "height", "40%"]], template: function TemplateProfileListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "h3", 2);
        ɵɵtext(3, "Profils");
        ɵɵelementEnd();
        ɵɵelementStart(4, "p", 3);
        ɵɵtext(5, "Retrouvez ici, l\u2019ensemble des profils d\u2019onboarding que vous avez cr\u00E9\u00E9s");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 4);
        ɵɵelementStart(7, "div", 5);
        ɵɵelementStart(8, "div", 6);
        ɵɵelementStart(9, "p");
        ɵɵtext(10, "Nouveau profil");
        ɵɵelementEnd();
        ɵɵelementStart(11, "a", 7);
        ɵɵtext(12, " Cr\u00E9er un nouveau profil ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(13, TemplateProfileListComponent_div_13_Template, 9, 8, "div", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(11);
        ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c0$2, ctx.service.mainPath + "/template-builder/0"));
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.datas);
    } }, directives: [MatAnchor, RouterLinkWithHref, NgForOf, MaterialElevationDirective, RouterLink, NgIf, MatButton, MatIcon], styles: [".main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]{margin-left:50px;padding-top:10px}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;max-width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;opacity:1;margin:57px;height:80%;padding:49px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:328px;position:relative;height:228px;margin-right:50px;margin-bottom:50px;background:no-repeat padding-box #f4f7f9;border:1px solid #dce4e9;border-radius:6px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font:bold 16px/25px Nexa Text;letter-spacing:.1px;color:#000;opacity:1;margin-top:17px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%]{display:none}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;height:90%;text-align:center;margin-top:10%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:no-repeat padding-box #fff;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}  .box-template:hover .mat-mini-fab .mat-button-wrapper{padding:0!important;display:inline-block;line-height:0}  .box-template:hover .mat-mini-fab{display:initial!important;position:absolute;right:6px;top:7px;background-color:red;width:25px;height:25px}  .box-template:hover .mat-mini-fab .mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:37px;width:24px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TemplateProfileListComponent, [{
        type: Component,
        args: [{
                selector: 'onboarding-profile-list',
                templateUrl: './template-profile-list.component.html',
                styleUrls: ['./template-profile-list.component.scss']
            }]
    }], function () { return [{ type: OnboardingService }, { type: Router }]; }, { paginator: [{
            type: ViewChild,
            args: [MatPaginator]
        }], sort: [{
            type: ViewChild,
            args: [MatSort]
        }] }); })();

class CanDeactivateGuard {
    canDeactivate(component, route, state) {
        //let url: string = state.url;
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
CanDeactivateGuard.ɵfac = function CanDeactivateGuard_Factory(t) { return new (t || CanDeactivateGuard)(); };
CanDeactivateGuard.ɵprov = ɵɵdefineInjectable({ token: CanDeactivateGuard, factory: CanDeactivateGuard.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CanDeactivateGuard, [{
        type: Injectable
    }], null, null); })();

const _c0$3 = function () { return { standalone: true }; };
function SubOnboardingCreateComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r336 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵelementStart(1, "mat-checkbox", 6);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_div_1_Template_mat_checkbox_ngModelChange_1_listener($event) { ɵɵrestoreView(_r336); const ctx_r335 = ɵɵnextContext(2); return ctx_r335.field.value = $event; });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r334 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r334.checkSubForm(ctx_r334.field) ? "checkbox-title-active" : "");
    ɵɵproperty("ngModel", ctx_r334.field.value)("required", ctx_r334.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(6, _c0$3));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r334.field.label, " ");
} }
function SubOnboardingCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, SubOnboardingCreateComponent_div_2_div_1_Template, 3, 7, "div", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "checkbox");
} }
function SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r340 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-checkbox", 9);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { ɵɵrestoreView(_r340); const opt_r338 = ctx.$implicit; return opt_r338.checked = $event; });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const opt_r338 = ctx.$implicit;
    const ctx_r337 = ɵɵnextContext(2);
    ɵɵproperty("checked", opt_r338.checked)("ngModel", opt_r338.checked)("required", ctx_r337.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(5, _c0$3));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", opt_r338.value, " ");
} }
function SubOnboardingCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelementStart(1, "label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 7);
    ɵɵtemplate(4, SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template, 2, 6, "mat-checkbox", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r329 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r329.field.label);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r329.field.defaultValue);
} }
function SubOnboardingCreateComponent_div_4_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-radio-button", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const opt_r343 = ctx.$implicit;
    ɵɵproperty("value", opt_r343.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", opt_r343.value, " ");
} }
function SubOnboardingCreateComponent_div_4_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r345 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 15);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Autre option");
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 16);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r345); const ctx_r344 = ɵɵnextContext(2); return ctx_r344.field.otherValue = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r342 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("required", ctx_r342.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(3, _c0$3))("ngModel", ctx_r342.field.otherValue);
} }
function SubOnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r347 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵelementStart(1, "label", 10);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-radio-group", 11);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_Template_mat_radio_group_ngModelChange_3_listener($event) { ɵɵrestoreView(_r347); const ctx_r346 = ɵɵnextContext(); return ctx_r346.field.value = $event; });
    ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 12);
    ɵɵelementEnd();
    ɵɵtemplate(5, SubOnboardingCreateComponent_div_4_mat_form_field_5_Template, 4, 4, "mat-form-field", 13);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r330 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r330.field.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r330.field.value)("required", ctx_r330.field.isMandatory);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r330.field.defaultValue);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", "autre" === ctx_r330.formatOther(ctx_r330.field.value));
} }
function SubOnboardingCreateComponent_div_5_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const opt_r350 = ctx.$implicit;
    ɵɵproperty("value", opt_r350.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate(opt_r350.value);
} }
function SubOnboardingCreateComponent_div_5_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r352 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 15);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Autre option");
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 16);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_mat_form_field_6_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r352); const ctx_r351 = ɵɵnextContext(2); return ctx_r351.field.otherValue = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r349 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("required", ctx_r349.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(3, _c0$3))("ngModel", ctx_r349.field.otherValue);
} }
function SubOnboardingCreateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r354 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵelementStart(1, "mat-form-field", 17);
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-select", 18);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_Template_mat_select_ngModelChange_4_listener($event) { ɵɵrestoreView(_r354); const ctx_r353 = ɵɵnextContext(); return ctx_r353.field.value = $event; });
    ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_mat_option_5_Template, 2, 2, "mat-option", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(6, SubOnboardingCreateComponent_div_5_mat_form_field_6_Template, 4, 4, "mat-form-field", 13);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r331 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r331.field.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r331.field.value)("ngModelOptions", ɵɵpureFunction0(6, _c0$3))("required", ctx_r331.field.isMandatory);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r331.field.defaultValue);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", "autre" === ctx_r331.formatOther(ctx_r331.field.value));
} }
function SubOnboardingCreateComponent_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r356 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 19);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "textarea", 20);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_6_Template_textarea_ngModelChange_3_listener($event) { ɵɵrestoreView(_r356); const ctx_r355 = ɵɵnextContext(); return ctx_r355.field.value = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r332 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r332.field.label);
    ɵɵadvance(1);
    ɵɵproperty("required", ctx_r332.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(4, _c0$3))("ngModel", ctx_r332.field.value);
} }
function SubOnboardingCreateComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    const _r358 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 21);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 22);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_7_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r358); const ctx_r357 = ɵɵnextContext(); return ctx_r357.field.value = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r333 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r333.field.label);
    ɵɵadvance(1);
    ɵɵproperty("type", ctx_r333.field.type)("required", ctx_r333.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(5, _c0$3))("ngModel", ctx_r333.field.value);
} }
const _c1$1 = [[["", 8, "child"]]];
const _c2$1 = [".child"];
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
        this.chipControl = new FormControl(new Set());
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentChip = "";
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
        if (other) {
            return other.toLocaleLowerCase();
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
}
SubOnboardingCreateComponent.ɵfac = function SubOnboardingCreateComponent_Factory(t) { return new (t || SubOnboardingCreateComponent)(); };
SubOnboardingCreateComponent.ɵcmp = ɵɵdefineComponent({ type: SubOnboardingCreateComponent, selectors: [["lib-sub-create-onboarding"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip" }, ngContentSelectors: _c2$1, decls: 9, vars: 6, consts: [[1, "field-item"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "w-30", "field-size"], [1, "form-field", 3, "ngModel", "required", "ngModelOptions", "ngModelChange"], [2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-field field-size other-option", "appearance", "outline", 4, "ngIf"], [3, "value"], ["appearance", "outline", 1, "form-field", "field-size", "other-option"], ["type", "text", "matInput", "", "placeholder", "", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "rows", "5", "matInput", "", "placeholder", "Description...", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c1$1);
        ɵɵelementStart(0, "div", 0);
        ɵɵelementContainerStart(1, 1);
        ɵɵtemplate(2, SubOnboardingCreateComponent_div_2_Template, 2, 1, "div", 2);
        ɵɵtemplate(3, SubOnboardingCreateComponent_div_3_Template, 5, 2, "div", 2);
        ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_Template, 6, 5, "div", 2);
        ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_Template, 7, 7, "div", 2);
        ɵɵtemplate(6, SubOnboardingCreateComponent_mat_form_field_6_Template, 4, 5, "mat-form-field", 3);
        ɵɵtemplate(7, SubOnboardingCreateComponent_mat_form_field_7_Template, 4, 6, "mat-form-field", 4);
        ɵɵelementContainerEnd();
        ɵɵelementEnd();
        ɵɵprojection(8);
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
    } }, directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, MatCheckbox, MatCheckboxRequiredValidator, NgControlStatus, NgModel, RequiredValidator, NgForOf, MatRadioGroup, NgIf, MatRadioButton, MatFormField, MatLabel, MatInput, DefaultValueAccessor, MatSelect, MatOption], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;min-width:250px;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:20px}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02);margin-bottom:-20px}  .mat-select{padding:0}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active[_ngcontent-%COMP%]{font-weight:700}.other-option[_ngcontent-%COMP%]{margin-left:10px}"] });
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
        }] }); })();

function OnboardingCreateComponent_div_3_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const template_r287 = ctx.$implicit;
    ɵɵproperty("value", template_r287._id);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", template_r287.Name, " ");
} }
function OnboardingCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r289 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "h3");
    ɵɵtext(2, " Onboarding de votre nouveau collaborateur ");
    ɵɵelementEnd();
    ɵɵelementStart(3, "p");
    ɵɵtext(4, "S\u00E9lectionnez le nom de votre profil afin de pouvoir d\u00E9marrer son onboarding.");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 5);
    ɵɵelementStart(6, "mat-form-field", 6);
    ɵɵelementStart(7, "mat-label");
    ɵɵtext(8, "Profil");
    ɵɵelementEnd();
    ɵɵelementStart(9, "mat-select", 7);
    ɵɵlistener("selectionChange", function OnboardingCreateComponent_div_3_Template_mat_select_selectionChange_9_listener($event) { ɵɵrestoreView(_r289); const ctx_r288 = ɵɵnextContext(); return ctx_r288.onSelect($event.value); });
    ɵɵtemplate(10, OnboardingCreateComponent_div_3_mat_option_10_Template, 2, 2, "mat-option", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "button", 9);
    ɵɵlistener("click", function OnboardingCreateComponent_div_3_Template_button_click_11_listener() { ɵɵrestoreView(_r289); const ctx_r290 = ɵɵnextContext(); return ctx_r290.onSelectContactTemplate(); });
    ɵɵtext(12);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r284 = ɵɵnextContext();
    var tmp_1_0 = null;
    const currVal_1 = ((tmp_1_0 = ctx_r284.form.get("TemplateId")) == null ? null : tmp_1_0.value) == "" ? 0.4 : 1;
    var tmp_2_0 = null;
    const currVal_2 = ((tmp_2_0 = ctx_r284.form.get("TemplateId")) == null ? null : tmp_2_0.value) == "";
    ɵɵadvance(10);
    ɵɵproperty("ngForOf", ctx_r284.templates);
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", currVal_1);
    ɵɵproperty("disabled", currVal_2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r284.id !== "0" ? "Modifier l\u2019onboarding" : "D\u00E9marrer l\u2019onboarding", " ");
} }
function OnboardingCreateComponent_div_4_li_6_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "keyboard_arrow_right");
    ɵɵelementEnd();
} }
function OnboardingCreateComponent_div_4_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r297 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 20);
    ɵɵlistener("click", function OnboardingCreateComponent_div_4_li_6_Template_li_click_0_listener() { ɵɵrestoreView(_r297); const i_r294 = ctx.index; const ctx_r296 = ɵɵnextContext(2); return ctx_r296.onSelectMenu(i_r294); });
    ɵɵelementStart(1, "span");
    ɵɵelementStart(2, "span", 21);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, OnboardingCreateComponent_div_4_li_6_mat_icon_4_Template, 2, 0, "mat-icon", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const cat_r293 = ctx.$implicit;
    const i_r294 = ctx.index;
    const ctx_r291 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r291.selectedMenu === i_r294 ? "active" : "");
    ɵɵadvance(2);
    ɵɵproperty("ngxScrollTo", "#" + cat_r293.name);
    ɵɵadvance(1);
    ɵɵtextInterpolate(cat_r293.name);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r291.checkSubForm(cat_r293.forms));
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r315 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 31);
    ɵɵelementStart(1, "div", 32);
    ɵɵelementStart(2, "div", 33);
    ɵɵelementStart(3, "lib-sub-create-onboarding", 34);
    ɵɵlistener("onDrop", function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { ɵɵrestoreView(_r315); const ctx_r314 = ɵɵnextContext(10); return ctx_r314.drop($event); });
    ɵɵelement(4, "div", 35);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r316 = ɵɵnextContext();
    const c2_r311 = ctx_r316.$implicit;
    const l_r312 = ctx_r316.index;
    const ctx_r317 = ɵɵnextContext(3);
    const child_r306 = ctx_r317.$implicit;
    const k_r307 = ctx_r317.index;
    ɵɵadvance(3);
    ɵɵproperty("field", c2_r311)("length", child_r306 == null ? null : child_r306.forms == null ? null : child_r306.forms.length)("i", k_r307)("j", l_r312);
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 39);
    ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template, 5, 4, "div", 30);
    ɵɵelementEnd();
} if (rf & 2) {
    const c2_r311 = ctx.$implicit;
    const ctx_r310 = ɵɵnextContext(9);
    ɵɵproperty("id", c2_r311.key);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", c2_r311.expandOnboarding && ctx_r310.onCheckConditionLocationValue(c2_r311.isConditional, c2_r311.conditionLocation, c2_r311.conditionValue));
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 37);
    ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_Template, 2, 2, "div", 38);
    ɵɵelementEnd();
} if (rf & 2) {
    const child_r306 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", child_r306.forms);
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r320 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 31);
    ɵɵelementStart(1, "div", 32);
    ɵɵelementStart(2, "div", 33);
    ɵɵelementStart(3, "lib-sub-create-onboarding", 34);
    ɵɵlistener("onDrop", function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { ɵɵrestoreView(_r320); const ctx_r319 = ɵɵnextContext(7); return ctx_r319.drop($event); });
    ɵɵelementStart(4, "div", 35);
    ɵɵtemplate(5, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_Template, 2, 1, "div", 36);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r321 = ɵɵnextContext();
    const child_r306 = ctx_r321.$implicit;
    const k_r307 = ctx_r321.index;
    const ctx_r322 = ɵɵnextContext(3);
    const field_r301 = ctx_r322.$implicit;
    const j_r302 = ctx_r322.index;
    ɵɵadvance(3);
    ɵɵproperty("field", child_r306)("length", field_r301 == null ? null : field_r301.forms == null ? null : field_r301.forms.length)("i", j_r302)("j", k_r307);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", child_r306.forms);
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 39);
    ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_Template, 6, 5, "div", 30);
    ɵɵelementEnd();
} if (rf & 2) {
    const child_r306 = ctx.$implicit;
    const ctx_r305 = ɵɵnextContext(6);
    ɵɵproperty("id", child_r306.key);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r306.expandOnboarding && ctx_r305.onCheckConditionLocationValue(child_r306.isConditional, child_r306.conditionLocation, child_r306.conditionValue));
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 37);
    ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_Template, 2, 2, "div", 38);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r301 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", field_r301.forms);
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r325 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 31);
    ɵɵelementStart(1, "div", 32);
    ɵɵelementStart(2, "div", 33);
    ɵɵelementStart(3, "lib-sub-create-onboarding", 34);
    ɵɵlistener("onDrop", function OnboardingCreateComponent_div_4_div_11_div_7_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { ɵɵrestoreView(_r325); const ctx_r324 = ɵɵnextContext(4); return ctx_r324.drop($event); });
    ɵɵelementStart(4, "div", 35);
    ɵɵtemplate(5, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_Template, 2, 1, "div", 36);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r326 = ɵɵnextContext();
    const field_r301 = ctx_r326.$implicit;
    const j_r302 = ctx_r326.index;
    const ctx_r327 = ɵɵnextContext();
    const category_r298 = ctx_r327.$implicit;
    const i_r299 = ctx_r327.index;
    ɵɵadvance(3);
    ɵɵproperty("field", field_r301)("length", category_r298 == null ? null : category_r298.forms == null ? null : category_r298.forms.length)("i", i_r299)("j", j_r302);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", field_r301.forms);
} }
function OnboardingCreateComponent_div_4_div_11_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 29);
    ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_Template, 6, 5, "div", 30);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r301 = ctx.$implicit;
    const ctx_r300 = ɵɵnextContext(3);
    ɵɵproperty("id", field_r301.key);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r301.expandOnboarding && ctx_r300.onCheckConditionLocationValue(field_r301.isConditional, field_r301.conditionLocation, field_r301.conditionValue));
} }
function OnboardingCreateComponent_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 23);
    ɵɵelementStart(1, "div", 24);
    ɵɵelementStart(2, "div", 25);
    ɵɵelementStart(3, "h4", 26);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 27);
    ɵɵelementContainerStart(6);
    ɵɵtemplate(7, OnboardingCreateComponent_div_4_div_11_div_7_Template, 2, 2, "div", 28);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const category_r298 = ctx.$implicit;
    ɵɵproperty("id", category_r298.name);
    ɵɵadvance(4);
    ɵɵtextInterpolate(category_r298.name);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", category_r298.forms);
} }
function OnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵelementStart(1, "div", 12);
    ɵɵelementStart(2, "div", 13);
    ɵɵelementStart(3, "h3", 14);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "ol");
    ɵɵtemplate(6, OnboardingCreateComponent_div_4_li_6_Template, 5, 5, "li", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 16);
    ɵɵtext(8, " Soumettre ma fiche de poste ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 17);
    ɵɵelementStart(10, "div", 18);
    ɵɵtemplate(11, OnboardingCreateComponent_div_4_div_11_Template, 8, 3, "div", 19);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r285 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ctx_r285.currentTemplate == null ? null : ctx_r285.currentTemplate.Name, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r285.categories);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r285.categories);
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
        this.id = "0";
        this.parent = [];
        this.editIndex = null;
        this.showProfileName = false;
        this.selectedMenu = 0;
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
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.onCreateDynamicForm();
            this.id = this.route.snapshot.paramMap.get("id");
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                yield this.service.getAllProfil();
            }), 500);
            this.service._templates.subscribe((data) => {
                this.templates = data;
            });
            this.id = this.route.snapshot.paramMap.get("id");
            if (this.id !== "0") {
                setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    this.currentOnboarding = yield this.service.getOnboarding(this.id);
                    console.log(this.currentOnboarding);
                    this.form.patchValue(this.currentOnboarding);
                    this.categories = this.currentOnboarding.categories;
                    this.currentTemplate = (_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.vtemplates[0];
                    this.onSelectContactTemplate();
                }), 500);
            }
        });
    }
    onCreateDynamicForm() {
        this.form = this.fb.group({
            TemplateId: [0, Validators.required]
        });
    }
    onSelectContactTemplate() {
        this.isSelected = true;
    }
    onSelect(id) {
        this.currentTemplate = this.templates.find((t) => t._id === id);
        this.categories = this.currentTemplate.categories;
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
            console.log(this.categories);
            if (this.form.valid && this.onChangeCategory()) {
                const result = this.id !== "0"
                    ? yield this.service.updateOnboarding(Object.assign(Object.assign({}, this.form.value), { categories: this.categories, _id: this.id }))
                    : yield this.service.createOnboarding(Object.assign(Object.assign({}, this.form.value), { categories: this.categories }));
                if (result) {
                    yield this.service.getAllProfil();
                    this.canExit = true;
                    this.router.navigate([this.service.mainPath + '/onboarding']);
                }
                else {
                    console.log("errror......");
                }
            }
        });
    }
    onExpendMore(event, ...params) {
        if (event) {
            if (event.event) {
                event.event.preventDefault();
            }
            // if (event.field && !event.field.expandMore) {
            //   for (let i = 0; i < this.categories.length; i++) {
            //     this.categories[i].expandMore = false;
            //     if (this.categories[i].forms) {
            //       for (let j = 0; j < this.categories[i].forms.length; j++) {
            //         this.categories[i].forms[j].expandMore = false;
            //       }
            //     }
            //   }
            // }
        }
        if (params.length === 1) {
            this.categories[params[0]].defaultValue = !this.categories[params[0]].defaultValue;
        }
        else if (params.length === 2) {
            this.currentActive = String(params[0]) + String(params[1]);
            if (this.categories[params[0]].forms[params[1]].defaultValue) {
                this.categories[params[0]].forms[params[1]].defaultValue = false;
            }
            else {
                this.categories[params[0]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].defaultValue = true;
            }
        }
        else if (params.length === 3) {
            if (this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue) {
                this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue = false;
            }
            else {
                this.categories[params[0]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue = true;
            }
        }
        else {
            if (this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].defaultValue) {
                this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].defaultValue = false;
            }
            else {
                this.categories[params[0]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].defaultValue = true;
            }
        }
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
    openDialog() {
        const dialogRef = this.dialog.open(UpdateProfilComponent, {
            data: {
                matIconList: this.matIconList,
                form: this.form,
                tags: this.tags
            }
        });
        dialogRef.afterClosed().subscribe((confirmed) => {
            if (confirmed) {
            }
        });
    }
    isExpanded(forms) {
        let isExpend = false;
        for (const form of forms) {
            if (form.defaultValue) {
                isExpend = true;
            }
        }
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
    }
}
OnboardingCreateComponent.ɵfac = function OnboardingCreateComponent_Factory(t) { return new (t || OnboardingCreateComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(MatDialog)); };
OnboardingCreateComponent.ɵcmp = ɵɵdefineComponent({ type: OnboardingCreateComponent, selectors: [["create-onboarding"]], decls: 5, vars: 3, consts: [[1, "content"], [3, "formGroup", "submit"], ["class", "select-contact", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "select-contact"], [1, "select-template"], ["appearance", "outline", 1, "full-width"], ["formControlName", "TemplateId", "required", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "value"], [1, "category"], [1, "side-bar"], [1, "summary"], [1, "template-title"], ["class", "li-title", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "type", "submit", 1, "register-button"], [1, "fields"], [1, "example-list", "mt-20"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "li-title", 3, "click"], [3, "ngxScrollTo"], [4, "ngIf"], [1, "category-item", 3, "id"], [1, "field-content"], [1, "field-item"], [1, "category-name"], [1, "category-container"], ["class", "field-category", 3, "id", 4, "ngFor", "ngForOf"], [1, "field-category", 3, "id"], ["class", "inner-loop", 4, "ngIf"], [1, "inner-loop"], [1, "fields-content"], [1, "fields-container"], [3, "field", "length", "i", "j", "onDrop"], [1, "child"], ["class", "inner-child", 4, "ngIf"], [1, "inner-child"], ["class", "inner-child-content", 3, "id", 4, "ngFor", "ngForOf"], [1, "inner-child-content", 3, "id"]], template: function OnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "main");
        ɵɵelementStart(1, "div", 0);
        ɵɵelementStart(2, "form", 1);
        ɵɵlistener("submit", function OnboardingCreateComponent_Template_form_submit_2_listener() { return ctx.onSubmit(); });
        ɵɵtemplate(3, OnboardingCreateComponent_div_3_Template, 13, 5, "div", 2);
        ɵɵtemplate(4, OnboardingCreateComponent_div_4_Template, 12, 3, "div", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.isSelected);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isSelected);
    } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, NgIf, MatFormField, MatLabel, MatSelect, NgControlStatus, FormControlName, RequiredValidator, NgForOf, MatButton, MatOption, ScrollToDirective, MatIcon, SubOnboardingCreateComponent], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:99%;height:100%;padding-left:1%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{max-width:400px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:40%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:1em 2em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;-ms-grid-row-align:center;align-self:center;width:220px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .onboarding-mat-stepper[_ngcontent-%COMP%]   mat-horizontal-stepper[_ngcontent-%COMP%]   .next-step[_ngcontent-%COMP%]{float:right}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.category-name[_ngcontent-%COMP%]{text-align:left;font:bold 22px/48px Nexa Text;letter-spacing:0;color:#171f26;padding-left:15px}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:.5em 0}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;min-height:60px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%;-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.category-item[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:flex-end}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .inner-child[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3.template-title[_ngcontent-%COMP%]{font:900 24px/36px Nexa Text;letter-spacing:0;color:#171f26}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;margin-right:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center;width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:auto auto 20px;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{width:100%;padding:10px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #192128!important;border-radius:8px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingCreateComponent, [{
        type: Component,
        args: [{
                selector: "create-onboarding",
                templateUrl: "./onboarding-create.component.html",
                styleUrls: ["./onboarding-create.component.scss"],
            }]
    }], function () { return [{ type: FormBuilder }, { type: OnboardingService }, { type: ActivatedRoute }, { type: Router }, { type: MatDialog }]; }, null); })();

function OnboardingListComponent_div_1_img_8_Template(rf, ctx) { if (rf & 1) {
    const _r365 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 15);
    ɵɵlistener("click", function OnboardingListComponent_div_1_img_8_Template_img_click_0_listener() { ɵɵrestoreView(_r365); const ctx_r364 = ɵɵnextContext(2); return ctx_r364.cancelSearch(); });
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵproperty("src", "/assets/icons/search_off-24px.svg", ɵɵsanitizeUrl);
} }
function OnboardingListComponent_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r361 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r361.onboardingList == null ? null : ctx_r361.onboardingList.totalElements, " ticket(s) ");
} }
function OnboardingListComponent_div_1_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
} if (rf & 2) {
    const ctx_r362 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" Onboarding (", (ctx_r362.onboardingList == null ? null : ctx_r362.onboardingList.totalElements) || (ctx_r362.onboardingList == null ? null : ctx_r362.onboardingList.data == null ? null : ctx_r362.onboardingList.data.length), ") ");
} }
function OnboardingListComponent_div_1_ng_template_16_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 20);
} }
function OnboardingListComponent_div_1_ng_template_16_ngx_design_table_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "ngx-design-table", 21);
} if (rf & 2) {
    const ctx_r367 = ɵɵnextContext(3);
    ɵɵproperty("columnDefinitions", ctx_r367.columnDefinitions)("displayDetail", false)("data", ctx_r367.onboardingList)("lang", ctx_r367.lang)("btnOverride", true)("inputSearch", ctx_r367.inputSearch)("EmptyRow", true)("blockDetails", true);
} }
const _c0$4 = function () { return { "margin-bottom": "100vh" }; };
function OnboardingListComponent_div_1_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_16_div_0_Template, 1, 0, "div", 17);
    ɵɵelement(1, "div", 18);
    ɵɵelementStart(2, "div");
    ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_16_ngx_design_table_3_Template, 1, 8, "ngx-design-table", 19);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r363 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r363._loading_table || !ctx_r363.onboardingList);
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r363._loading_table && ɵɵpureFunction0(5, _c0$4));
    ɵɵadvance(1);
    ɵɵclassProp("ticket-list", !ctx_r363._loading_table);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r363.onboardingList);
} }
function OnboardingListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r369 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵelementStart(1, "div", 3);
    ɵɵelementStart(2, "div", 4);
    ɵɵtext(3, " Suivi des demandes ");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 5);
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, "search");
    ɵɵelementEnd();
    ɵɵelementStart(7, "input", 6);
    ɵɵlistener("ngModelChange", function OnboardingListComponent_div_1_Template_input_ngModelChange_7_listener($event) { ɵɵrestoreView(_r369); const ctx_r368 = ɵɵnextContext(); return ctx_r368.inputSearch = $event; });
    ɵɵelementEnd();
    ɵɵtemplate(8, OnboardingListComponent_div_1_img_8_Template, 1, 1, "img", 7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 8);
    ɵɵelementStart(10, "span", 9);
    ɵɵtext(11, " Vous avez actuellement ");
    ɵɵtemplate(12, OnboardingListComponent_div_1_span_12_Template, 2, 1, "span", 10);
    ɵɵelementEnd();
    ɵɵelementStart(13, "mat-tab-group", 11);
    ɵɵlistener("selectedIndexChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedIndexChange_13_listener($event) { ɵɵrestoreView(_r369); const ctx_r370 = ɵɵnextContext(); return ctx_r370.index = $event; })("selectedTabChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedTabChange_13_listener($event) { ɵɵrestoreView(_r369); const ctx_r371 = ɵɵnextContext(); return ctx_r371.triggerChange($event); });
    ɵɵelementStart(14, "mat-tab", 12);
    ɵɵtemplate(15, OnboardingListComponent_div_1_ng_template_15_Template, 1, 1, "ng-template", 13);
    ɵɵtemplate(16, OnboardingListComponent_div_1_ng_template_16_Template, 4, 6, "ng-template", 14);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r359 = ɵɵnextContext();
    ɵɵadvance(7);
    ɵɵproperty("ngModel", ctx_r359.inputSearch);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r359.inputSearch && ctx_r359.inputSearch != "");
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r359.index == 0);
    ɵɵadvance(1);
    ɵɵproperty("@.disabled", true)("selectedIndex", ctx_r359.index);
} }
const _c1$2 = function () { return { "overflow-y": "hidden", "height": "100%", "display": "flex", "position": "absolute" }; };
class OnboardingListComponent {
    constructor(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.inputSearch = '';
        this.search = '';
        this.columnDefinitions = [
            {
                key: 'createdAt',
                value: 'Date de création',
                order: 1,
                class: 'u-2',
                module: CellsComponentList.DateFormat,
                sort: true
            },
            {
                key: 'ContactName',
                value: 'Contact',
                order: 2,
                class: 'u-2',
                sort: true,
                module: CellsComponentList.NameAvatar,
                override: ['ContactName', 'Email'],
            },
        ];
        this._loading_table = true;
        this.HiddenIndex = 0;
        this.index = 0;
        this.lang = 'fr';
    }
    cancelSearch() {
        this.inputSearch = '';
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                yield this.service.getAllOnboarding();
            }), 500);
            this.service.onboarding.subscribe((onboarding) => {
                console.log(onboarding);
                setTimeout(() => {
                    this._loading_table = false;
                }, 2000);
                if (onboarding) {
                    //this.onboardingList=onboarding;
                    let x = onboarding.map((row) => {
                        row.ContactName = row.vcontacts[0].Name;
                        row.Email = row.vcontacts[0].Email;
                        return row;
                    });
                    this.onboardingList = new CoreMatTable(x, {
                        active: 'CreatedDate', direction: 'desc'
                    }, { active: '', valueStart: null, valueEnd: null }, 15, true, true);
                }
            });
        });
    }
    triggerChange($event) {
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
}
OnboardingListComponent.ɵfac = function OnboardingListComponent_Factory(t) { return new (t || OnboardingListComponent)(ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute)); };
OnboardingListComponent.ɵcmp = ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 2, vars: 3, consts: [[1, "full-height", 2, "background", "#F4F7F9 0% 0% no-repeat padding-box", 3, "ngStyle"], ["class", "main-all-ticket-list", 4, "ngIf"], [1, "main-all-ticket-list"], [1, "page-title-container"], [1, "page-title"], [1, "page-search"], ["placeholder", "Recherche", "type", "text", 1, "search-box", 3, "ngModel", "ngModelChange"], [3, "src", "click", 4, "ngIf"], [1, "content-view-list-ticket"], [1, "mat-tab-left"], ["class", "mat-tab-left-count", 4, "ngIf"], [1, "list-ticket-tab", 3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], [2, "background-image", "none"], ["mat-tab-label", ""], ["matTabContent", ""], [3, "src", "click"], [1, "mat-tab-left-count"], ["class", "bt-spinner", 4, "ngIf"], [3, "ngStyle"], [3, "columnDefinitions", "displayDetail", "displayComponent", "data", "lang", "btnOverride", "inputSearch", "EmptyRow", "blockDetails", 4, "ngIf"], [1, "bt-spinner"], [3, "columnDefinitions", "displayDetail", "displayComponent", "data", "lang", "btnOverride", "inputSearch", "EmptyRow", "blockDetails"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-card", 0);
        ɵɵtemplate(1, OnboardingListComponent_div_1_Template, 17, 5, "div", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngStyle", ctx._loading_table && ɵɵpureFunction0(2, _c1$2));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.onboardingList);
    } }, directives: [MatCard, NgStyle, NgIf, MatIcon, DefaultValueAccessor, NgControlStatus, NgModel, MatTabGroup, MatTab, MatTabLabel, MatTabContent, TableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:100%}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%], md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font:bold 13px/20px nexa;letter-spacing:0;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0;grid-row-gap:0;max-width:1500px;margin-left:auto;margin-right:auto;width:100%;animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{-ms-grid-row:2;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}  .mat-tab-label-active .mat-tab-label-content{color:#510b4e;font-weight:600}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@-webkit-keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){-webkit-animation:1.25s linear infinite three-quarters-loader;animation:1.25s linear infinite three-quarters-loader;border:4px solid #4285f4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}@-webkit-keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font:18px/20px \"Nexa Text\";letter-spacing:0;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;font:17px/20px \"Nexa Text Bold\";letter-spacing:0;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px \"Nexa Text Bold\";letter-spacing:0;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width:1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03a9f4;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin;position:relative;left:50%;top:25vh}@-webkit-keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-onboarding-list',
                templateUrl: './onboarding-list.component.html',
                styleUrls: ['./onboarding-list.component.scss']
            }]
    }], function () { return [{ type: OnboardingService }, { type: Router }, { type: ActivatedRoute }]; }, null); })();

;
const onBoardingRoutes = [
    {
        path: 'onboarding',
        component: OnboardingComponent,
        children: [
            {
                path: 'template-builder/:id',
                component: TemplateProfileCreateComponent,
                canDeactivate: [CanDeactivateGuard],
            },
            {
                path: '',
                component: TemplateProfileListComponent
            },
            {
                path: 'onboarding',
                component: OnboardingListComponent
            },
            {
                path: 'onboarding/:id',
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
            MatTabsModule
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
        UpdateProfilComponent,
        ExitConfirmComponent,
        OnboardingListComponent], imports: [FormsModule,
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
        MatTabsModule], exports: [OnboardingComponent,
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
                    UpdateProfilComponent,
                    ExitConfirmComponent,
                    OnboardingListComponent
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
                    MatTabsModule
                ],
                providers: [OnboardingService, CanDeactivateGuard],
                entryComponents: [UpdateProfilComponent, ExitConfirmComponent],
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
