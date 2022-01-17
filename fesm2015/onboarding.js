import { __awaiter } from 'tslib';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { EventEmitter, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelement, Component, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵproperty, ɵɵpureFunction0, ɵɵtextInterpolate1, ɵɵtemplate, ɵɵreference, ɵɵprojectionDef, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵprojection, ɵɵclassMap, ɵɵstyleProp, Input, Output, ɵɵtextInterpolate, ɵɵtextInterpolate2, ElementRef, Renderer2, ɵɵdefineDirective, ɵɵNgOnChangesFeature, Directive, HostListener, ɵɵpureFunction1, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, RouterOutlet, ActivatedRoute, RouterLinkWithHref, RouterLink, RouterModule } from '@angular/router';
import { DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, Validators, FormBuilder, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { moveItemInArray, transferArrayItem, CdkDropListGroup, CdkDropList, CdkDrag, CdkDragHandle, DragDropModule } from '@angular/cdk/drag-drop';
import { NgSwitch, NgSwitchCase, NgSwitchDefault, NgIf, NgForOf, CommonModule } from '@angular/common';
import { MatButton, MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatCheckbox, MatCheckboxRequiredValidator, MatCheckboxModule } from '@angular/material/checkbox';
import { MatOption } from '@angular/material/core';
import { MatChipList, MatChipInput, MatChip, MatChipRemove, MatChipsModule } from '@angular/material/chips';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatHorizontalStepper, MatStep, MatStepLabel, MatStepperPrevious, MatStepperNext, MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { CdkTableModule } from '@angular/cdk/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

class OnboardingService {
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

const _c0 = function () { return { standalone: true }; };
function SubCategoryComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r193 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 20);
    ɵɵelementStart(1, "mat-checkbox", 21);
    ɵɵlistener("ngModelChange", function SubCategoryComponent_div_30_Template_mat_checkbox_ngModelChange_1_listener($event) { ɵɵrestoreView(_r193); const ctx_r192 = ɵɵnextContext(); return ctx_r192.field.value = $event; });
    ɵɵtext(2, "Valeur ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r187 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r187.field.value)("ngModelOptions", ɵɵpureFunction0(2, _c0));
} }
function SubCategoryComponent_mat_form_field_31_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    const _r199 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-chip", 28);
    ɵɵlistener("removed", function SubCategoryComponent_mat_form_field_31_mat_chip_5_Template_mat_chip_removed_0_listener() { ɵɵrestoreView(_r199); const option_r197 = ctx.$implicit; const ctx_r198 = ɵɵnextContext(2); return ctx_r198.removeKeyword(option_r197, ctx_r198.i, ctx_r198.j); });
    ɵɵtext(1);
    ɵɵelementStart(2, "mat-icon", 29);
    ɵɵtext(3, "cancel");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r197 = ctx.$implicit;
    ɵɵproperty("selected", option_r197)("value", option_r197)("removable", true);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r197, " ");
} }
function SubCategoryComponent_mat_form_field_31_Template(rf, ctx) { if (rf & 1) {
    const _r201 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 22);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, " Valeur ");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-chip-list", 23, 24);
    ɵɵtemplate(5, SubCategoryComponent_mat_form_field_31_mat_chip_5_Template, 4, 4, "mat-chip", 25);
    ɵɵelementStart(6, "input", 26, 27);
    ɵɵlistener("matChipInputTokenEnd", function SubCategoryComponent_mat_form_field_31_Template_input_matChipInputTokenEnd_6_listener($event) { ɵɵrestoreView(_r201); const ctx_r200 = ɵɵnextContext(); return ctx_r200.addKeywordFromInput($event, ctx_r200.i, ctx_r200.j); })("keyup", function SubCategoryComponent_mat_form_field_31_Template_input_keyup_6_listener($event) { ɵɵrestoreView(_r201); const ctx_r202 = ɵɵnextContext(); return ctx_r202.keyUp($event, ctx_r202.i, ctx_r202.j); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r194 = ɵɵreference(4);
    const ctx_r188 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r188.field.defaultValue);
    ɵɵadvance(1);
    ɵɵproperty("matChipInputFor", _r194)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r188.separatorKeysCodes);
} }
function SubCategoryComponent_mat_form_field_32_Template(rf, ctx) { if (rf & 1) {
    const _r204 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 1);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Valeur");
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 30);
    ɵɵlistener("ngModelChange", function SubCategoryComponent_mat_form_field_32_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r204); const ctx_r203 = ɵɵnextContext(); return ctx_r203.field.defaultValue = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r189 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r189.field.type)("ngModelOptions", ɵɵpureFunction0(3, _c0))("ngModel", ctx_r189.field.defaultValue);
} }
function SubCategoryComponent_mat_icon_39_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "expand_less");
    ɵɵelementEnd();
} }
function SubCategoryComponent_mat_icon_40_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "expand_more");
    ɵɵelementEnd();
} }
const _c1 = [[["", 8, "child"]]];
const _c2 = function () { return ["select", "radio"]; };
const _c3 = [".child"];
class SubCategoryComponent {
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
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
    }
    ngOnInit() {
    }
    drop(event) {
        this.onDrop.emit(event);
    }
    addKeywordFromInput(event, i, j) {
        this.onAddKeywordFromInput.emit({ event, i, j });
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
}
SubCategoryComponent.ɵfac = function SubCategoryComponent_Factory(t) { return new (t || SubCategoryComponent)(); };
SubCategoryComponent.ɵcmp = ɵɵdefineComponent({ type: SubCategoryComponent, selectors: [["lib-sub-category"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore" }, ngContentSelectors: _c3, decls: 42, vars: 31, consts: [[1, "field-item"], ["appearance", "outline", 1, "form-field", "field-size"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "readonly", "ngModelOptions", "ngModel", "ngModelChange"], ["required", "", 3, "disabled", "ngModel", "ngModelOptions", "ngModelChange"], ["value", "text"], ["value", "radio"], ["value", "select"], ["value", "checkbox"], ["value", "email"], ["value", "password"], ["value", "date"], ["value", "phone"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-mini-fab", "", "color", "success", 1, "transparent-button", 3, "disabled", "click"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "disabled", "click"], [4, "ngIf"], [1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], ["aria-label", "Video keywords; let index=index", "multiple", ""], ["chipList", ""], ["style", "min-height: 25px;", 3, "selected", "value", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd", "keyup"], ["chipsInput", ""], [2, "min-height", "25px", 3, "selected", "value", "removable", "removed"], ["matChipRemove", ""], ["matInput", "", "placeholder", "", 3, "type", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c1);
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "mat-form-field", 1);
        ɵɵelementStart(2, "mat-label");
        ɵɵtext(3, "Label");
        ɵɵelementEnd();
        ɵɵelementStart(4, "input", 2);
        ɵɵlistener("ngModelChange", function SubCategoryComponent_Template_input_ngModelChange_4_listener($event) { return ctx.field.label = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-form-field", 1);
        ɵɵelementStart(6, "mat-label");
        ɵɵtext(7, "Cl\u00E9 du champ");
        ɵɵelementEnd();
        ɵɵelementStart(8, "input", 2);
        ɵɵlistener("ngModelChange", function SubCategoryComponent_Template_input_ngModelChange_8_listener($event) { return ctx.field.key = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "mat-form-field", 1);
        ɵɵelementStart(10, "mat-label");
        ɵɵtext(11, "Type");
        ɵɵelementEnd();
        ɵɵelementStart(12, "mat-select", 3);
        ɵɵlistener("ngModelChange", function SubCategoryComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.field.type = $event; })("ngModelChange", function SubCategoryComponent_Template_mat_select_ngModelChange_12_listener() { return ctx.changeType(ctx.field.type, ctx.i, ctx.j); });
        ɵɵelementStart(13, "mat-option", 4);
        ɵɵtext(14, "Text");
        ɵɵelementEnd();
        ɵɵelementStart(15, "mat-option", 5);
        ɵɵtext(16, "Radio");
        ɵɵelementEnd();
        ɵɵelementStart(17, "mat-option", 6);
        ɵɵtext(18, "Selecteur");
        ɵɵelementEnd();
        ɵɵelementStart(19, "mat-option", 7);
        ɵɵtext(20, "Checkbox");
        ɵɵelementEnd();
        ɵɵelementStart(21, "mat-option", 8);
        ɵɵtext(22, "Email");
        ɵɵelementEnd();
        ɵɵelementStart(23, "mat-option", 9);
        ɵɵtext(24, "Password");
        ɵɵelementEnd();
        ɵɵelementStart(25, "mat-option", 10);
        ɵɵtext(26, "Date");
        ɵɵelementEnd();
        ɵɵelementStart(27, "mat-option", 11);
        ɵɵtext(28, "Phone");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementContainerStart(29, 12);
        ɵɵtemplate(30, SubCategoryComponent_div_30_Template, 3, 3, "div", 13);
        ɵɵtemplate(31, SubCategoryComponent_mat_form_field_31_Template, 8, 4, "mat-form-field", 14);
        ɵɵtemplate(32, SubCategoryComponent_mat_form_field_32_Template, 4, 4, "mat-form-field", 15);
        ɵɵelementContainerEnd();
        ɵɵelementStart(33, "mat-checkbox", 16);
        ɵɵlistener("ngModelChange", function SubCategoryComponent_Template_mat_checkbox_ngModelChange_33_listener($event) { return ctx.field.isMandatory = $event; });
        ɵɵtext(34, " obligatoire ");
        ɵɵelementEnd();
        ɵɵelementStart(35, "button", 17);
        ɵɵlistener("click", function SubCategoryComponent_Template_button_click_35_listener($event) { return ctx.addNewSubLevelField($event); });
        ɵɵelementStart(36, "mat-icon");
        ɵɵtext(37, "device_hub");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(38, "button", 18);
        ɵɵlistener("click", function SubCategoryComponent_Template_button_click_38_listener($event) { return ctx.expendMore($event, ctx.field); });
        ɵɵtemplate(39, SubCategoryComponent_mat_icon_39_Template, 2, 0, "mat-icon", 19);
        ɵɵtemplate(40, SubCategoryComponent_mat_icon_40_Template, 2, 0, "mat-icon", 19);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵprojection(41);
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵclassMap(!ctx.field.editable ? "readonly" : "");
        ɵɵadvance(3);
        ɵɵproperty("readonly", !ctx.field.editable)("ngModelOptions", ɵɵpureFunction0(26, _c0))("ngModel", ctx.field.label);
        ɵɵadvance(1);
        ɵɵclassMap(!ctx.field.editable ? "readonly" : "");
        ɵɵadvance(3);
        ɵɵproperty("readonly", !ctx.field.editable)("ngModelOptions", ɵɵpureFunction0(27, _c0))("ngModel", ctx.field.key);
        ɵɵadvance(4);
        ɵɵproperty("disabled", !ctx.field.editable)("ngModel", ctx.field.type)("ngModelOptions", ɵɵpureFunction0(28, _c0));
        ɵɵadvance(17);
        ɵɵproperty("ngSwitch", ctx.field.type);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "checkbox");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ɵɵpureFunction0(29, _c2).includes(ctx.field.type) ? ctx.field.type : !ctx.field.type);
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(30, _c0));
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
    } }, directives: [MatFormField, MatLabel, MatInput, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, MatSelect, MatOption, NgSwitch, NgSwitchCase, NgSwitchDefault, MatCheckbox, MatButton, MatIcon, NgIf, MatChipList, NgForOf, MatChipInput, MatChip, MatChipRemove], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02);margin-bottom:-20px}  .mat-select{padding:0}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:space-between;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;margin:auto;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SubCategoryComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sub-category',
                templateUrl: './sub-category.component.html',
                styleUrls: ['./sub-category.component.scss']
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
        }] }); })();

function CreateProfileTemplateComponent_div_2_div_14_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-icon", 19);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_2_div_14_mat_icon_1_Template_mat_icon_click_0_listener($event) { ɵɵrestoreView(_r7); const icon_r5 = ctx.$implicit; const ctx_r6 = ɵɵnextContext(3); return ctx_r6.onSelectPicto($event, icon_r5.name); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const icon_r5 = ctx.$implicit;
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵstyleProp("color", ctx_r4.form.get("Picto").value === icon_r5.name ? "#830B6B" : "#000");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", icon_r5.name, " ");
} }
function CreateProfileTemplateComponent_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtemplate(1, CreateProfileTemplateComponent_div_2_div_14_mat_icon_1_Template, 2, 3, "mat-icon", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.matIconList);
} }
function CreateProfileTemplateComponent_div_2_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    ɵɵproperty("value", tag_r8);
    ɵɵadvance(1);
    ɵɵtextInterpolate(tag_r8);
} }
function CreateProfileTemplateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
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
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_2_Template_button_click_7_listener($event) { ɵɵrestoreView(_r10); const ctx_r9 = ɵɵnextContext(); return ctx_r9.onShowPictoList($event); });
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
    ɵɵtemplate(14, CreateProfileTemplateComponent_div_2_div_14_Template, 2, 1, "div", 10);
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
    ɵɵtemplate(23, CreateProfileTemplateComponent_div_2_mat_option_23_Template, 2, 2, "mat-option", 13);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(24, "mat-checkbox", 14);
    ɵɵtext(25, "Active");
    ɵɵelementEnd();
    ɵɵelementStart(26, "div", 15);
    ɵɵelementStart(27, "button", 16);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_2_Template_button_click_27_listener() { ɵɵrestoreView(_r10); const ctx_r11 = ɵɵnextContext(); return ctx_r11.onShowCategory(); });
    ɵɵtext(28);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(9);
    ɵɵtextInterpolate(ctx_r0.form.get("Picto").value === "" ? "contact_phone" : ctx_r0.form.get("Picto").value);
    ɵɵadvance(5);
    ɵɵproperty("ngIf", ctx_r0.isPictoListShow);
    ɵɵadvance(9);
    ɵɵproperty("ngForOf", ctx_r0.tags);
    ɵɵadvance(4);
    ɵɵstyleProp("opacity", ctx_r0.form.get("Name").value === "" || ctx_r0.form.get("Tags").value == "" ? 0.4 : 1);
    ɵɵproperty("disabled", ctx_r0.form.get("Name").value === "" || ctx_r0.form.get("Tags").value == "");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r0.id !== "0" ? "Modifier un profil" : "Cr\u00E9er un nouveau profil", " ");
} }
function CreateProfileTemplateComponent_div_3_li_6_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 19);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_li_6_ng_container_4_ng_container_1_Template_li_click_1_listener() { ɵɵrestoreView(_r23); const ctx_r22 = ɵɵnextContext(); const sub_r18 = ctx_r22.$implicit; const j_r19 = ctx_r22.index; const i_r16 = ɵɵnextContext().index; const ctx_r21 = ɵɵnextContext(2); return ctx_r21.onExpendMore({ field: sub_r18 }, i_r16, j_r19); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = ɵɵnextContext();
    const sub_r18 = ctx_r25.$implicit;
    const j_r19 = ctx_r25.index;
    ɵɵadvance(1);
    ɵɵclassMap(sub_r18.expandMore ? "sub-title active" : "sub-title");
    ɵɵadvance(1);
    ɵɵtextInterpolate2(" ", j_r19 + 1, ". ", sub_r18.label, " ");
} }
function CreateProfileTemplateComponent_div_3_li_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CreateProfileTemplateComponent_div_3_li_6_ng_container_4_ng_container_1_Template, 3, 4, "ng-container", 35);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const sub_r18 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", sub_r18 == null ? null : sub_r18.forms);
} }
function CreateProfileTemplateComponent_div_3_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 33);
    ɵɵelementStart(1, "span", 19);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_li_6_Template_span_click_1_listener() { ɵɵrestoreView(_r27); const cat_r15 = ctx.$implicit; const i_r16 = ctx.index; const ctx_r26 = ɵɵnextContext(2); return ctx_r26.onExpendMore({ field: cat_r15 }, i_r16); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "ol");
    ɵɵtemplate(4, CreateProfileTemplateComponent_div_3_li_6_ng_container_4_Template, 2, 1, "ng-container", 34);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const cat_r15 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(cat_r15.name);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", cat_r15.forms);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r55 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 32);
    ɵɵelementStart(1, "button", 59);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template_button_click_1_listener() { ɵɵrestoreView(_r55); const k_r44 = ɵɵnextContext(4).index; const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r53 = ɵɵnextContext(2); return ctx_r53.onAddNewField(i_r29, j_r37, k_r44); });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, " add_box ");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5, "Ajouter un champ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const l_r51 = ɵɵnextContext().index;
    const child_r43 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", (child_r43 == null ? null : child_r43.forms == null ? null : child_r43.forms.length) - 1 === l_r51 ? 1 : 0);
    ɵɵproperty("disabled", (child_r43 == null ? null : child_r43.forms == null ? null : child_r43.forms.length) - 1 !== l_r51);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r62 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 47);
    ɵɵelementStart(1, "div", 48);
    ɵɵelementStart(2, "div", 49);
    ɵɵelementStart(3, "div", 58);
    ɵɵelementStart(4, "button", 51);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_button_click_4_listener() { ɵɵrestoreView(_r62); const l_r51 = ctx.index; const k_r44 = ɵɵnextContext(3).index; const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r60 = ɵɵnextContext(2); return ctx_r60.onRemoveField(i_r29, j_r37, k_r44, l_r51); });
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, " delete ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 52);
    ɵɵelementStart(8, "lib-sub-category", 53);
    ɵɵlistener("onAddKeywordFromInput", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { ɵɵrestoreView(_r62); const l_r51 = ctx.index; const k_r44 = ɵɵnextContext(3).index; const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r65 = ɵɵnextContext(2); return ctx_r65.addKeywordFromInput($event.event, i_r29, j_r37, k_r44, l_r51); })("onKeyPress", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onKeyPress_8_listener($event) { ɵɵrestoreView(_r62); const l_r51 = ctx.index; const k_r44 = ɵɵnextContext(3).index; const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r69 = ɵɵnextContext(2); return ctx_r69.onKeyPress($event.event, i_r29, j_r37, k_r44, l_r51); })("onAddNewField", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddNewField_8_listener() { ɵɵrestoreView(_r62); const k_r44 = ɵɵnextContext(3).index; const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r73 = ɵɵnextContext(2); return ctx_r73.onAddNewField(i_r29, j_r37, k_r44); })("onRemoveField", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onRemoveField_8_listener() { ɵɵrestoreView(_r62); const l_r51 = ctx.index; const k_r44 = ɵɵnextContext(3).index; const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r77 = ɵɵnextContext(2); return ctx_r77.onRemoveField(i_r29, j_r37, k_r44, l_r51); })("onChangeType", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onChangeType_8_listener() { ɵɵrestoreView(_r62); const c2_r50 = ctx.$implicit; const l_r51 = ctx.index; const k_r44 = ɵɵnextContext(3).index; const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r81 = ɵɵnextContext(2); return ctx_r81.onChangeType(c2_r50.type, i_r29, j_r37, k_r44, l_r51); })("onRemoveKeyword", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { ɵɵrestoreView(_r62); const l_r51 = ctx.index; const k_r44 = ɵɵnextContext(3).index; const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r85 = ɵɵnextContext(2); return ctx_r85.removeKeyword($event.event, i_r29, j_r37, k_r44, l_r51); })("onAddNewSubLevelField", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { ɵɵrestoreView(_r62); const l_r51 = ctx.index; const k_r44 = ɵɵnextContext(3).index; const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r89 = ɵɵnextContext(2); return ctx_r89.onAddNewSubLevelField(i_r29, j_r37, k_r44, l_r51); })("onExpendMore", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onExpendMore_8_listener($event) { ɵɵrestoreView(_r62); const l_r51 = ctx.index; const k_r44 = ɵɵnextContext(3).index; const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r93 = ɵɵnextContext(2); return ctx_r93.onExpendMore($event, i_r29, j_r37, k_r44, l_r51); });
    ɵɵelement(9, "div", 56);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(10, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template, 6, 3, "div", 55);
    ɵɵelementEnd();
} if (rf & 2) {
    const c2_r50 = ctx.$implicit;
    const l_r51 = ctx.index;
    const ctx_r98 = ɵɵnextContext(3);
    const child_r43 = ctx_r98.$implicit;
    const k_r44 = ctx_r98.index;
    const field_r36 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(4);
    ɵɵproperty("disabled", !field_r36.deleteable);
    ɵɵadvance(4);
    ɵɵproperty("field", c2_r50)("length", child_r43 == null ? null : child_r43.forms == null ? null : child_r43.forms.length)("i", k_r44)("j", l_r51);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", (child_r43 == null ? null : child_r43.forms == null ? null : child_r43.forms.length) - 1 === l_r51);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r100 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 44, 45);
    ɵɵlistener("cdkDropListDropped", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r100); const ctx_r99 = ɵɵnextContext(10); return ctx_r99.drop($event); });
    ɵɵtemplate(2, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template, 11, 6, "div", 46);
    ɵɵelementEnd();
} if (rf & 2) {
    const child_r43 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("cdkDropListData", child_r43.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", child_r43.forms);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 56);
    ɵɵtemplate(1, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template, 3, 2, "div", 42);
    ɵɵelementEnd();
} if (rf & 2) {
    const child_r43 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r43.forms);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r105 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 32);
    ɵɵelementStart(1, "button", 59);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template_button_click_1_listener() { ɵɵrestoreView(_r105); const j_r37 = ɵɵnextContext(4).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r103 = ɵɵnextContext(2); return ctx_r103.onAddNewField(i_r29, j_r37); });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "add_box");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5, "Ajouter un champ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const k_r44 = ɵɵnextContext().index;
    const field_r36 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", (field_r36 == null ? null : field_r36.forms == null ? null : field_r36.forms.length) - 1 === k_r44 ? 1 : 0);
    ɵɵproperty("disabled", (field_r36 == null ? null : field_r36.forms == null ? null : field_r36.forms.length) - 1 !== k_r44);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r111 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 47);
    ɵɵelementStart(1, "div", 48);
    ɵɵelementStart(2, "div", 49);
    ɵɵelementStart(3, "div", 57);
    ɵɵelementStart(4, "button", 51);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_button_click_4_listener() { ɵɵrestoreView(_r111); const k_r44 = ctx.index; const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r109 = ɵɵnextContext(2); return ctx_r109.onRemoveField(i_r29, j_r37, k_r44); });
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, " delete");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 52);
    ɵɵelementStart(8, "lib-sub-category", 53);
    ɵɵlistener("onAddKeywordFromInput", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { ɵɵrestoreView(_r111); const k_r44 = ctx.index; const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r113 = ɵɵnextContext(2); return ctx_r113.addKeywordFromInput($event.event, i_r29, j_r37, k_r44); })("onKeyPress", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onKeyPress_8_listener($event) { ɵɵrestoreView(_r111); const k_r44 = ctx.index; const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r116 = ɵɵnextContext(2); return ctx_r116.onKeyPress($event.event, i_r29, j_r37, k_r44); })("onAddNewField", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddNewField_8_listener() { ɵɵrestoreView(_r111); const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r119 = ɵɵnextContext(2); return ctx_r119.onAddNewField(i_r29, j_r37); })("onRemoveField", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onRemoveField_8_listener() { ɵɵrestoreView(_r111); const k_r44 = ctx.index; const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r122 = ɵɵnextContext(2); return ctx_r122.onRemoveField(i_r29, j_r37, k_r44); })("onChangeType", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onChangeType_8_listener() { ɵɵrestoreView(_r111); const child_r43 = ctx.$implicit; const k_r44 = ctx.index; const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r125 = ɵɵnextContext(2); return ctx_r125.onChangeType(child_r43.type, i_r29, j_r37, k_r44); })("onRemoveKeyword", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { ɵɵrestoreView(_r111); const k_r44 = ctx.index; const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r128 = ɵɵnextContext(2); return ctx_r128.removeKeyword($event.event, i_r29, j_r37, k_r44); })("onAddNewSubLevelField", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { ɵɵrestoreView(_r111); const k_r44 = ctx.index; const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r131 = ɵɵnextContext(2); return ctx_r131.onAddNewSubLevelField(i_r29, j_r37, k_r44); })("onExpendMore", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onExpendMore_8_listener($event) { ɵɵrestoreView(_r111); const k_r44 = ctx.index; const j_r37 = ɵɵnextContext(3).index; const i_r29 = ɵɵnextContext(3).index; const ctx_r134 = ɵɵnextContext(2); return ctx_r134.onExpendMore($event, i_r29, j_r37, k_r44); });
    ɵɵtemplate(9, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_Template, 2, 1, "div", 54);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(10, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template, 6, 3, "div", 55);
    ɵɵelementEnd();
} if (rf & 2) {
    const child_r43 = ctx.$implicit;
    const k_r44 = ctx.index;
    const ctx_r137 = ɵɵnextContext(3);
    const field_r36 = ctx_r137.$implicit;
    const j_r37 = ctx_r137.index;
    ɵɵadvance(4);
    ɵɵproperty("disabled", !child_r43.deleteable);
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", !child_r43.deleteable ? 0 : 1);
    ɵɵadvance(3);
    ɵɵproperty("field", child_r43)("length", field_r36 == null ? null : field_r36.forms == null ? null : field_r36.forms.length)("i", j_r37)("j", k_r44);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r43.expandMore);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (field_r36 == null ? null : field_r36.forms == null ? null : field_r36.forms.length) - 1 === k_r44);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r139 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 44, 45);
    ɵɵlistener("cdkDropListDropped", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r139); const ctx_r138 = ɵɵnextContext(7); return ctx_r138.drop($event); });
    ɵɵtemplate(2, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template, 11, 9, "div", 46);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r36 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("cdkDropListData", field_r36.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", field_r36.forms);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 56);
    ɵɵtemplate(1, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_Template, 3, 2, "div", 42);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r36 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r36.forms);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r144 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 32);
    ɵɵelementStart(1, "button", 59);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_10_Template_button_click_1_listener() { ɵɵrestoreView(_r144); const i_r29 = ɵɵnextContext(4).index; const ctx_r142 = ɵɵnextContext(2); return ctx_r142.onAddNewField(i_r29); });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "add_box");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5, "Ajouter un champ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const j_r37 = ɵɵnextContext().index;
    const category_r28 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", (category_r28 == null ? null : category_r28.forms == null ? null : category_r28.forms.length) - 1 === j_r37 ? 1 : 0);
    ɵɵproperty("disabled", (category_r28 == null ? null : category_r28.forms == null ? null : category_r28.forms.length) - 1 !== j_r37);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r149 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 47);
    ɵɵelementStart(1, "div", 48);
    ɵɵelementStart(2, "div", 49);
    ɵɵelementStart(3, "div", 50);
    ɵɵelementStart(4, "button", 51);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template_button_click_4_listener() { ɵɵrestoreView(_r149); const j_r37 = ctx.index; const i_r29 = ɵɵnextContext(3).index; const ctx_r147 = ɵɵnextContext(2); return ctx_r147.onRemoveField(i_r29, j_r37); });
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, "delete ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 52);
    ɵɵelementStart(8, "lib-sub-category", 53);
    ɵɵlistener("onAddKeywordFromInput", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { ɵɵrestoreView(_r149); const j_r37 = ctx.index; const i_r29 = ɵɵnextContext(3).index; const ctx_r150 = ɵɵnextContext(2); return ctx_r150.addKeywordFromInput($event.event, i_r29, j_r37); })("onKeyPress", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template_lib_sub_category_onKeyPress_8_listener($event) { ɵɵrestoreView(_r149); const j_r37 = ctx.index; const i_r29 = ɵɵnextContext(3).index; const ctx_r152 = ɵɵnextContext(2); return ctx_r152.onKeyPress($event.event, i_r29, j_r37); })("onAddNewField", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template_lib_sub_category_onAddNewField_8_listener() { ɵɵrestoreView(_r149); const i_r29 = ɵɵnextContext(3).index; const ctx_r154 = ɵɵnextContext(2); return ctx_r154.onAddNewField(i_r29); })("onRemoveField", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template_lib_sub_category_onRemoveField_8_listener() { ɵɵrestoreView(_r149); const j_r37 = ctx.index; const i_r29 = ɵɵnextContext(3).index; const ctx_r156 = ɵɵnextContext(2); return ctx_r156.onRemoveField(i_r29, j_r37); })("onChangeType", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template_lib_sub_category_onChangeType_8_listener() { ɵɵrestoreView(_r149); const field_r36 = ctx.$implicit; const j_r37 = ctx.index; const i_r29 = ɵɵnextContext(3).index; const ctx_r158 = ɵɵnextContext(2); return ctx_r158.onChangeType(field_r36.type, i_r29, j_r37); })("onRemoveKeyword", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { ɵɵrestoreView(_r149); const j_r37 = ctx.index; const i_r29 = ɵɵnextContext(3).index; const ctx_r160 = ɵɵnextContext(2); return ctx_r160.removeKeyword($event.event, i_r29, j_r37); })("onAddNewSubLevelField", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { ɵɵrestoreView(_r149); const j_r37 = ctx.index; const i_r29 = ɵɵnextContext(3).index; const ctx_r162 = ɵɵnextContext(2); return ctx_r162.onAddNewSubLevelField(i_r29, j_r37); })("onExpendMore", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template_lib_sub_category_onExpendMore_8_listener($event) { ɵɵrestoreView(_r149); const j_r37 = ctx.index; const i_r29 = ɵɵnextContext(3).index; const ctx_r164 = ɵɵnextContext(2); return ctx_r164.onExpendMore($event, i_r29, j_r37); });
    ɵɵtemplate(9, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_Template, 2, 1, "div", 54);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(10, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_10_Template, 6, 3, "div", 55);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r36 = ctx.$implicit;
    const j_r37 = ctx.index;
    const ctx_r166 = ɵɵnextContext(3);
    const category_r28 = ctx_r166.$implicit;
    const i_r29 = ctx_r166.index;
    ɵɵadvance(4);
    ɵɵproperty("disabled", !field_r36.deleteable);
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", !field_r36.deleteable ? 0 : 1);
    ɵɵadvance(2);
    ɵɵclassMap(!field_r36.deleteable ? "disabled" : "");
    ɵɵadvance(1);
    ɵɵproperty("field", field_r36)("length", category_r28 == null ? null : category_r28.forms == null ? null : category_r28.forms.length)("i", i_r29)("j", j_r37);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r36.expandMore);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (category_r28 == null ? null : category_r28.forms == null ? null : category_r28.forms.length) - 1 === j_r37);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template, 11, 11, "div", 46);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const category_r28 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", category_r28.forms);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r169 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 44, 45);
    ɵɵlistener("cdkDropListDropped", function CreateProfileTemplateComponent_div_3_div_16_div_8_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r169); const ctx_r168 = ɵɵnextContext(3); return ctx_r168.drop($event); });
    ɵɵtemplate(2, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_Template, 2, 1, "ng-container", 35);
    ɵɵelementEnd();
} if (rf & 2) {
    const category_r28 = ɵɵnextContext().$implicit;
    ɵɵproperty("cdkDropListData", category_r28.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", category_r28.expandMore);
} }
function CreateProfileTemplateComponent_div_3_div_16_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "chevron_right");
    ɵɵelementEnd();
} }
function CreateProfileTemplateComponent_div_3_div_16_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "expand_more");
    ɵɵelementEnd();
} }
const _c0$1 = function () { return { standalone: true }; };
function CreateProfileTemplateComponent_div_3_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r172 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 36);
    ɵɵelementStart(1, "div", 37);
    ɵɵelementStart(2, "button", 38);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_div_16_Template_button_click_2_listener($event) { ɵɵrestoreView(_r172); const i_r29 = ctx.index; const ctx_r171 = ɵɵnextContext(2); return ctx_r171.onRemoveCategory($event, i_r29); });
    ɵɵelementStart(3, "mat-icon");
    ɵɵtext(4, "delete");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 39);
    ɵɵelementStart(6, "div", 40);
    ɵɵelementStart(7, "input", 41);
    ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_3_div_16_Template_input_ngModelChange_7_listener($event) { ɵɵrestoreView(_r172); const category_r28 = ctx.$implicit; return category_r28.name = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(8, CreateProfileTemplateComponent_div_3_div_16_div_8_Template, 3, 2, "div", 42);
    ɵɵelementEnd();
    ɵɵelementStart(9, "button", 43);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_div_16_Template_button_click_9_listener($event) { ɵɵrestoreView(_r172); const category_r28 = ctx.$implicit; const i_r29 = ctx.index; const ctx_r174 = ɵɵnextContext(2); return ctx_r174.onExpendMore({ event: $event, field: category_r28 }, i_r29); });
    ɵɵtemplate(10, CreateProfileTemplateComponent_div_3_div_16_mat_icon_10_Template, 2, 0, "mat-icon", 35);
    ɵɵtemplate(11, CreateProfileTemplateComponent_div_3_div_16_mat_icon_11_Template, 2, 0, "mat-icon", 35);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const category_r28 = ctx.$implicit;
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("disabled", !category_r28.deleteable);
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", !category_r28.deleteable ? 0 : 1);
    ɵɵadvance(4);
    ɵɵproperty("readonly", ctx_r14.categories.length < 4 || !category_r28.editable)("readonly", !category_r28.editable)("ngModel", category_r28.name)("ngModelOptions", ɵɵpureFunction0(10, _c0$1));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", category_r28.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !category_r28.expandMore);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", category_r28.expandMore);
} }
function CreateProfileTemplateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r176 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 21);
    ɵɵelementStart(1, "div", 22);
    ɵɵelementStart(2, "div", 23);
    ɵɵelementStart(3, "h3");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "ol", 24);
    ɵɵtemplate(6, CreateProfileTemplateComponent_div_3_li_6_Template, 5, 2, "li", 25);
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 26);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_Template_button_click_7_listener($event) { ɵɵrestoreView(_r176); const ctx_r175 = ɵɵnextContext(); return ctx_r175.onAddNewCategory($event); });
    ɵɵelementStart(8, "mat-icon");
    ɵɵtext(9, "add_box");
    ɵɵelementEnd();
    ɵɵtext(10, " Ajouter une nouvelle cat\u00E9gorie ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "button", 27);
    ɵɵtext(12, " Enregistrer le profil ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(13, "div", 28);
    ɵɵelementStart(14, "div", 29, 30);
    ɵɵlistener("cdkDropListDropped", function CreateProfileTemplateComponent_div_3_Template_div_cdkDropListDropped_14_listener($event) { ɵɵrestoreView(_r176); const ctx_r177 = ɵɵnextContext(); return ctx_r177.drop($event); });
    ɵɵtemplate(16, CreateProfileTemplateComponent_div_3_div_16_Template, 12, 11, "div", 31);
    ɵɵelementStart(17, "div", 32);
    ɵɵelementStart(18, "button", 19);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_Template_button_click_18_listener($event) { ɵɵrestoreView(_r176); const ctx_r178 = ɵɵnextContext(); return ctx_r178.onAddNewCategory($event); });
    ɵɵelementStart(19, "mat-icon");
    ɵɵtext(20, "add");
    ɵɵelementEnd();
    ɵɵtext(21, " Ajouter une cat\u00E9gorie ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r1.form.get("Name").value);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.categories);
    ɵɵadvance(8);
    ɵɵproperty("cdkDropListData", ctx_r1.categories);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.categories);
} }
class CreateProfileTemplateComponent {
    constructor(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.validCategory = false;
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentProfil = {};
        this.tags = [];
        this.id = "0";
        this.parent = [];
        this.showProfileName = true;
        this.matIconList = [
            { name: 'developer_board' },
            { name: 'contact_phone' },
            { name: 'person' },
            { name: 'visibility' },
            { name: 'watch_later' },
            { name: 'work' },
            { name: 'web' },
            { name: 'whatshot' },
            { name: 'wifi' },
            { name: 'workspaces' },
            { name: 'wb_cloudy' },
            { name: 'water' },
            { name: 'waves' },
            { name: 'warning' },
            { name: 'space_das' }
        ];
        this.picto = "";
        this.categories = [
            {
                name: "Utilisateur",
                editable: false,
                deleteable: false,
                expandMore: false,
                suffixEndpoint: "category/user",
                forms: [
                    {
                        label: "Civilité",
                        key: "Salutation",
                        defaultValue: ["Mr.", "Mme."],
                        value: null,
                        size: 10,
                        isMandatory: true,
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Type de profil",
                        key: "Type",
                        defaultValue: ["Manager", "Utilisateur"],
                        value: null,
                        size: 10,
                        isMandatory: true,
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Nom",
                        key: "LastName",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Prénom",
                        key: "FirstName",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Email",
                        key: "Email",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        type: "email",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Téléphone fixe",
                        key: "Phone",
                        defaultValue: null,
                        value: null,
                        size: 20,
                        isMandatory: true,
                        type: "phone",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Téléphone portable",
                        key: "MobilePhone",
                        defaultValue: null,
                        value: null,
                        size: 20,
                        isMandatory: true,
                        type: "phone",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Fonction",
                        key: "Title",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Accès au portail",
                        key: "Acc_s_au_portail_client_NowBoard__c",
                        defaultValue: ["Oui", "Non"],
                        value: null,
                        size: 10,
                        isMandatory: true,
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Langue",
                        key: "Langue_maternelle__c",
                        defaultValue: ["Français", "Anglais"],
                        value: null,
                        size: 10,
                        isMandatory: true,
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
                deleteable: true,
                selected: true,
                expandMore: false,
                suffixEndpoint: "category/user-session",
                forms: [
                    {
                        label: "Utilisateur local à créer",
                        key: "UserLocalToCreate",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Login",
                                key: "Login",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: false,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Mot de passe",
                                key: "Password",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "password",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                    {
                        label: "Utilisateur AD (serveur) à créer",
                        key: "UserServerToCreate",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Nom de domaine",
                                key: "DomainName",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: false,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Votre login",
                                key: "YourLogin",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Votre mot de passe.",
                                key: "YourPassword",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "password",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Groupe de sécurité",
                                key: "GroupSecurity",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "checkbox",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                                forms: [
                                    {
                                        label: "Utilisateur avec les droits similaires *",
                                        key: "UserWithSimilarAccess",
                                        defaultValue: null,
                                        value: null,
                                        size: 80,
                                        isMandatory: true,
                                        type: "text",
                                        editable: true,
                                        deleteable: true,
                                        subLevel: 3,
                                        expandMore: false,
                                    },
                                    {
                                        label: "Descriptions",
                                        key: "Description",
                                        defaultValue: null,
                                        value: null,
                                        size: 255,
                                        isMandatory: true,
                                        type: "text",
                                        editable: true,
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
                deleteable: true,
                forms: [
                    {
                        label: "Adresse mail à créer.",
                        key: "EmailToCreate",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Adresse mail",
                                key: "Email",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "email",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Type de licence (si gérées par le client)",
                                key: "SerialKey",
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                    {
                        label: "Listes  de distribution.",
                        key: "DistributionList",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Utilisateur avec les listes similaires *",
                                key: "UserWithSimilarList",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Descriptions.",
                                key: "Description",
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                    {
                        label: "Ajouter des boites mails délégués.",
                        key: "AddInboxMailDelegate",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Descriptions.",
                                key: "Description",
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                type: "text",
                                editable: true,
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
                deleteable: true,
                forms: [
                    {
                        label: "Accès aux lecteurs réseaux.",
                        key: "ReadNetworkAccess",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Nom du serveur",
                                key: "ServerName",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: false,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Chemin du dossier",
                                key: "FolderPath",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Lettre à attribuer",
                                key: "AttributLetter",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "text",
                                editable: true,
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
                editable: true,
                deleteable: true,
                forms: [
                    {
                        label: "Accès au VPN",
                        key: "VpnAccess",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        type: "checkbox",
                        editable: true,
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
                deleteable: true,
                forms: [
                    {
                        label: "Accès aux imprimantes.",
                        key: "PrinterAccess",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Nom / Modèle de l'imprimante / localisation",
                                key: "PrinterName",
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                type: "text",
                                editable: true,
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
                deleteable: true,
                forms: [
                    {
                        label: "Accès aux applications ?",
                        key: "ApplicationAccess",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Descriptions",
                                key: "Description",
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                type: "text",
                                editable: true,
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
                editable: true,
                deleteable: true,
                forms: [
                    {
                        label: "Paramétrage de poste",
                        key: "PostParameter",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "RealocatedEquipment",
                                key: "",
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Nouveau poste",
                                key: "NewPost",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "checkbox",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                                forms: [
                                    {
                                        label: "Acheté chez Nowteam",
                                        key: "PurchasedAtNowteam",
                                        defaultValue: null,
                                        value: null,
                                        size: 1000,
                                        isMandatory: true,
                                        type: "text",
                                        editable: true,
                                        deleteable: true,
                                        subLevel: 3,
                                        expandMore: false,
                                    },
                                    {
                                        label: "Autre",
                                        key: "Other",
                                        defaultValue: null,
                                        value: null,
                                        size: 1000,
                                        isMandatory: true,
                                        type: "text",
                                        editable: true,
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
                deleteable: true,
                forms: [
                    {
                        label: "Descriptions",
                        key: "Description",
                        defaultValue: null,
                        value: null,
                        size: 1000,
                        isMandatory: false,
                        type: "text",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                    },
                ],
            },
        ];
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.form = this.fb.group({
                Name: ["", Validators.required],
                Picto: [""],
                Description: [""],
                Tags: ["", Validators.required],
                Status: [false, Validators.required],
            });
            this.tags = yield this.service.getAllTags();
            this.id = this.route.snapshot.paramMap.get("id");
            if (this.id !== "0") {
                this.currentProfil = yield this.service.getProfil(this.id);
                this.form.patchValue(this.currentProfil);
                this.categories = this.currentProfil.categories;
            }
        });
    }
    onAddNewCategory(e) {
        e.preventDefault();
        this.categories.push({
            name: "",
            editable: true,
            deleteable: true,
            expandMore: true,
            suffixEndpoint: "",
            forms: [
                {
                    label: "",
                    key: "",
                    defaultValue: null,
                    value: null,
                    size: 80,
                    isMandatory: true,
                    type: "text",
                    deleteable: true,
                    editable: true,
                },
            ],
        });
    }
    onAddNewField(...params) {
        const length = params.length;
        const forms = length === 1 ? this.categories[params[0]].forms : length === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.push({
            label: "",
            key: "",
            defaultValue: null,
            value: null,
            size: 80,
            isMandatory: true,
            type: "text",
            deleteable: true,
            editable: true,
            subLevel: params.length,
        });
    }
    onAddNewSubLevelField(...params) {
        console.log(params.length - 1);
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.expandMore = true;
        forms.forms = [];
        forms.forms.push({
            label: "",
            key: "",
            defaultValue: null,
            value: null,
            size: 80,
            isMandatory: true,
            type: "text",
            deleteable: true,
            editable: true,
            subLevel: params.length,
            expandMore: true,
        });
        console.log(this.categories);
    }
    onRemoveField(...params) {
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms : length === 3 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.splice(params[length - 1], 1);
    }
    onRemoveCategory(e, i) {
        e.preventDefault();
        this.categories.splice(i, 1);
    }
    onChangeCategory() {
        return this.categories.every((cat) => cat.name !== "" && cat.forms.every((field) => field.label !== "" && field.type !== ""));
    }
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.form.valid && this.onChangeCategory()) {
                const result = this.id !== "0"
                    ? yield this.service.updateProfil(Object.assign(Object.assign(Object.assign({}, this.currentProfil), this.form.value), { categories: this.categories }))
                    : yield this.service.createProfil(Object.assign(Object.assign({}, this.form.value), { categories: this.categories }));
                if (result) {
                    yield this.service.getAllProfil();
                    this.router.navigate([this.service.mainPath]);
                }
                else {
                    console.log("errror......");
                }
            }
        });
    }
    onChangeType(type, ...params) {
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms : length === 3 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        if (type === "select" || type === "radio") {
            forms[params[length - 1]].defaultValue = [];
        }
        else if (type === "text") {
            forms[params[length - 1]].defaultValue = "";
        }
        else {
            forms[params[length - 1]].defaultValue = false;
        }
    }
    onKeyPress(event, ...params) {
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (event.key === ";") {
            const exist = forms.defaultValue.find((opt) => opt.toLocaleLowerCase() === event.target.value.split(";")[0].toLocaleLowerCase());
            if (!exist) {
                forms.defaultValue.push(event.target.value.split(";")[0]);
                event.target.value = "";
            }
            else {
                event.target.value = "";
            }
        }
    }
    removeKeyword(keyword, ...params) {
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.defaultValue = forms.defaultValue.filter((option) => option !== keyword);
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
    addKeywordFromInput(event, ...params) {
        const input = event.input;
        const value = event.value;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (value) {
            const exist = forms.defaultValue.find((opt) => opt.toLocaleLowerCase() === event.value.toLocaleLowerCase());
            if (!exist) {
                forms.defaultValue.push(value.trim());
                input.value = "";
            }
            else {
                input.value = "";
            }
        }
    }
    drop(event) {
        console.log("log", this.categories);
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
        this.form.patchValue({ Picto: picto });
        this.isPictoListShow = !this.isPictoListShow;
    }
    onShowPictoList(e) {
        e.preventDefault();
        this.isPictoListShow = !this.isPictoListShow;
    }
}
CreateProfileTemplateComponent.ɵfac = function CreateProfileTemplateComponent_Factory(t) { return new (t || CreateProfileTemplateComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router)); };
CreateProfileTemplateComponent.ɵcmp = ɵɵdefineComponent({ type: CreateProfileTemplateComponent, selectors: [["onboarding-create-profile-template"]], decls: 4, vars: 3, consts: [[3, "formGroup", "submit"], ["class", "box-title", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "box-title"], [1, "box-title-content"], [1, "title"], [1, "profil-name-content"], ["mat-raised-button", "", "color", "primary", 1, "add-picto", 3, "click"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "matInput", "", "formControlName", "Name", "placeholder", "Ex. Manager"], ["class", "list-picto", 4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "Description", "rows", "4", "placeholder", ""], ["formControlName", "Tags", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Status", 1, "form-field"], [1, "link-create-profil"], ["mat-raised-button", "", "color", "primary", 1, "link-add-profil", 3, "disabled", "click"], [1, "list-picto"], [3, "color", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "value"], [1, "category"], [1, "side-bar"], [1, "summary"], ["type", "I"], ["class", "li-title", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "add-category", "transparent", 3, "click"], ["mat-button", "", "type", "submit", 1, "register-button"], ["cdkDropListGroup", "", 1, "fields"], ["cdkDropList", "", 1, "example-list", "mt-20", 3, "cdkDropListData", "cdkDropListDropped"], ["parentList", "cdkDropList"], ["class", "category-item", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "add-button-container"], [1, "li-title"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["cdkDrag", "", 1, "category-item"], ["cdkDragHandle", "", 1, "left-action", "move-icons"], ["mat-raised-button", "", 1, "transparent-button", 3, "disabled", "click"], [1, "field-content"], [1, "field-item"], ["type", "text", "required", "", "placeholder", "Saisir le nom de la cat\u00E9gorie", 1, "example-full-width", "input-category-name", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "click"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], ["cdkDrag", ""], [1, "fields-content"], [1, "button-action"], ["mat-mini-fab", "", "color", "warn", 1, "delete-field", "transparent-button", 3, "disabled", "click"], [1, "fields-container"], [3, "field", "length", "i", "j", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore"], ["class", "child", 4, "ngIf"], ["class", "add-button-container", 4, "ngIf"], [1, "child"], [1, "button-action", "child-2-background"], [1, "button-action", "child-3-background"], ["mat-raised-button", "", "color", "primary", 2, "margin", "10px auto", 3, "disabled", "click"]], template: function CreateProfileTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "main");
        ɵɵelementStart(1, "form", 0);
        ɵɵlistener("submit", function CreateProfileTemplateComponent_Template_form_submit_1_listener() { return ctx.onSubmit(); });
        ɵɵtemplate(2, CreateProfileTemplateComponent_div_2_Template, 29, 7, "div", 1);
        ɵɵtemplate(3, CreateProfileTemplateComponent_div_3_Template, 22, 4, "div", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showProfileName);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.showProfileName);
    } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, NgIf, MatButton, MatIcon, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, MatSelect, RequiredValidator, NgForOf, MatCheckbox, MatOption, CdkDropListGroup, CdkDropList, CdkDrag, CdkDragHandle, NgModel, SubCategoryComponent], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:78%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{border:none;outline:0;text-align:left;font:bold 20px/48px Nexa Text;letter-spacing:0;color:#171f26}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:.5em 0}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}[_nghost-%COMP%]     .cdk-drag-preview .input-category-name div.mat-form-field-outline-start, [_nghost-%COMP%]     .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0!important}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-label-wrapper{display:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-infix{border-top:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-infix{padding:0 0 1em!important}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;min-height:60px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%;-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\"}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style-position:inside}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:space-between;width:96.5%;margin-left:20px;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;margin:auto;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:20px auto auto;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding:10px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26;border:2px solid #192128;border-radius:8px;color:#fff;width:88%;margin:10px auto;border:none}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CreateProfileTemplateComponent, [{
        type: Component,
        args: [{
                selector: "onboarding-create-profile-template",
                templateUrl: "./create-profile-template.component.html",
                styleUrls: ["./create-profile-template.component.scss"],
            }]
    }], function () { return [{ type: FormBuilder }, { type: OnboardingService }, { type: ActivatedRoute }, { type: Router }]; }, null); })();

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

function ProfileListComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "mat-icon", 14);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const d_r180 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(d_r180 == null ? null : d_r180.Picto);
} }
function ProfileListComponent_div_17_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "h3");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const d_r180 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(d_r180.Name.substr(0, 2));
} }
const _c0$2 = function (a0) { return [a0]; };
function ProfileListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r186 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵelementStart(1, "div", 10);
    ɵɵtemplate(2, ProfileListComponent_div_17_div_2_Template, 3, 1, "div", 11);
    ɵɵtemplate(3, ProfileListComponent_div_17_div_3_Template, 3, 1, "div", 11);
    ɵɵelementStart(4, "p");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 12);
    ɵɵlistener("click", function ProfileListComponent_div_17_Template_button_click_6_listener($event) { ɵɵrestoreView(_r186); const d_r180 = ctx.$implicit; const ctx_r185 = ɵɵnextContext(); return ctx_r185.onDelete($event, d_r180._id); });
    ɵɵelementStart(7, "mat-icon");
    ɵɵtext(8, "close");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const d_r180 = ctx.$implicit;
    const ctx_r179 = ɵɵnextContext();
    ɵɵproperty("defaultElevation", ctx_r179.defaultElevation);
    ɵɵadvance(1);
    ɵɵproperty("routerLink", ɵɵpureFunction1(6, _c0$2, ctx_r179.service.mainPath + "/template-builder/" + d_r180._id));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", d_r180 == null ? null : d_r180.Picto);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(d_r180 == null ? null : d_r180.Picto));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", d_r180.Name, "");
    ɵɵadvance(1);
    ɵɵproperty("defaultElevation", ctx_r179.defaultElevation);
} }
class ProfileListComponent {
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
            yield this.getAllProfils(true);
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
ProfileListComponent.ɵfac = function ProfileListComponent_Factory(t) { return new (t || ProfileListComponent)(ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(Router)); };
ProfileListComponent.ɵcmp = ɵɵdefineComponent({ type: ProfileListComponent, selectors: [["onboarding-profile-list"]], viewQuery: function ProfileListComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(MatPaginator, true);
        ɵɵviewQuery(MatSort, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.paginator = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, decls: 18, vars: 4, consts: [[1, "main"], [1, "header-list"], [1, "content-list"], [1, "title"], [1, "sub-title"], [1, "list"], [1, "box-template", "new-template"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "routerLink"], ["appMaterialElevation", "", "raisedElevation", "16", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], ["appMaterialElevation", "", "raisedElevation", "16", 1, "box-template", 3, "defaultElevation"], [1, "box-content", 3, "routerLink"], ["class", "picto-preview", 4, "ngIf"], ["mat-mini-fab", "", "color", "accent", "appMaterialElevation", "", "raisedElevation", "16", 3, "defaultElevation", "click"], [1, "picto-preview"], [2, "font-size", "50px", "width", "100%", "height", "40%"]], template: function ProfileListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "h2");
        ɵɵtext(3, "On boarding");
        ɵɵelementEnd();
        ɵɵelementStart(4, "p");
        ɵɵtext(5, "Retrouvez ici, l\u2019ensemble des formulaires d\u2019on boarding que vous avez cr\u00E9\u00E9s");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 2);
        ɵɵelementStart(7, "h3", 3);
        ɵɵtext(8, "Profils");
        ɵɵelementEnd();
        ɵɵelementStart(9, "p", 4);
        ɵɵtext(10, "Retrouvez ici, l\u2019ensemble des profils d\u2019onboarding que vous avez cr\u00E9\u00E9s");
        ɵɵelementEnd();
        ɵɵelementStart(11, "div", 5);
        ɵɵelementStart(12, "div", 6);
        ɵɵelementStart(13, "p");
        ɵɵtext(14, "Nouveau profil");
        ɵɵelementEnd();
        ɵɵelementStart(15, "a", 7);
        ɵɵtext(16, " Cr\u00E9er un nouveau profil ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(17, ProfileListComponent_div_17_Template, 9, 8, "div", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(15);
        ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c0$2, ctx.service.mainPath + "/template-builder/0"));
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.datas);
    } }, directives: [MatAnchor, RouterLinkWithHref, NgForOf, MaterialElevationDirective, RouterLink, NgIf, MatButton, MatIcon], styles: [".main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]{margin-left:50px;padding-top:10px}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;opacity:1;margin:57px;height:80%;padding:49px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;margin-bottom:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:328px;position:relative;height:228px;margin-right:50px;margin-bottom:50px;background:no-repeat padding-box #f4f7f9;border:1px solid #dce4e9;border-radius:6px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font:bold 16px/25px Nexa Text;letter-spacing:.1px;color:#000;opacity:1;margin-top:17px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%]{display:none}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;height:90%;text-align:center;margin-top:10%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:no-repeat padding-box #fff;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}  .box-template:hover .mat-mini-fab .mat-button-wrapper{padding:0!important;display:inline-block;line-height:0}  .box-template:hover .mat-mini-fab{display:initial!important;position:absolute;right:6px;top:7px;background-color:red;width:25px;height:25px}  .box-template:hover .mat-mini-fab .mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:37px;width:24px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ProfileListComponent, [{
        type: Component,
        args: [{
                selector: 'onboarding-profile-list',
                templateUrl: './profile-list.component.html',
                styleUrls: ['./profile-list.component.scss']
            }]
    }], function () { return [{ type: OnboardingService }, { type: Router }]; }, { paginator: [{
            type: ViewChild,
            args: [MatPaginator]
        }], sort: [{
            type: ViewChild,
            args: [MatSort]
        }] }); })();

const _c0$3 = function () { return { standalone: true }; };
function SubOnboaringComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r331 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "mat-checkbox", 5);
    ɵɵlistener("ngModelChange", function SubOnboaringComponent_div_2_Template_mat_checkbox_ngModelChange_1_listener($event) { ɵɵrestoreView(_r331); const ctx_r330 = ɵɵnextContext(); return ctx_r330.field.value = $event; });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r326 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r326.field.value)("required", ctx_r326.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(4, _c0$3));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r326.field.label, " ");
} }
function SubOnboaringComponent_mat_form_field_3_mat_radio_group_3_mat_radio_button_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-radio-button", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const opt_r334 = ctx.$implicit;
    ɵɵproperty("value", opt_r334);
    ɵɵadvance(1);
    ɵɵtextInterpolate(opt_r334);
} }
function SubOnboaringComponent_mat_form_field_3_mat_radio_group_3_Template(rf, ctx) { if (rf & 1) {
    const _r336 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-radio-group", 7);
    ɵɵlistener("ngModelChange", function SubOnboaringComponent_mat_form_field_3_mat_radio_group_3_Template_mat_radio_group_ngModelChange_0_listener($event) { ɵɵrestoreView(_r336); const ctx_r335 = ɵɵnextContext(2); return ctx_r335.field.value = $event; });
    ɵɵtemplate(1, SubOnboaringComponent_mat_form_field_3_mat_radio_group_3_mat_radio_button_1_Template, 2, 2, "mat-radio-button", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r332 = ɵɵnextContext(2);
    ɵɵproperty("ngModel", ctx_r332.field.value);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r332.field.defaultValue);
} }
function SubOnboaringComponent_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-form-field", 4);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, SubOnboaringComponent_mat_form_field_3_mat_radio_group_3_Template, 2, 2, "mat-radio-group", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r327 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r327.field.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r327.field.type === "radio");
} }
function SubOnboaringComponent_mat_form_field_4_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const opt_r338 = ctx.$implicit;
    ɵɵproperty("value", opt_r338);
    ɵɵadvance(1);
    ɵɵtextInterpolate(opt_r338);
} }
function SubOnboaringComponent_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    const _r340 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 4);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-select", 10);
    ɵɵlistener("ngModelChange", function SubOnboaringComponent_mat_form_field_4_Template_mat_select_ngModelChange_3_listener($event) { ɵɵrestoreView(_r340); const ctx_r339 = ɵɵnextContext(); return ctx_r339.field.value = $event; });
    ɵɵtemplate(4, SubOnboaringComponent_mat_form_field_4_mat_option_4_Template, 2, 2, "mat-option", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r328 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r328.field.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r328.field.value)("ngModelOptions", ɵɵpureFunction0(5, _c0$3))("required", ctx_r328.field.isMandatory);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r328.field.defaultValue);
} }
function SubOnboaringComponent_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r342 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 11);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 12);
    ɵɵlistener("ngModelChange", function SubOnboaringComponent_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r342); const ctx_r341 = ɵɵnextContext(); return ctx_r341.field.value = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r329 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r329.field.label);
    ɵɵadvance(1);
    ɵɵproperty("type", ctx_r329.field.type)("required", ctx_r329.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(5, _c0$3))("ngModel", ctx_r329.field.value);
} }
const _c1$1 = [[["", 8, "child"]]];
const _c2$1 = [".child"];
class SubOnboaringComponent {
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
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
    }
    ngOnInit() {
    }
    drop(event) {
        this.onDrop.emit(event);
    }
    addKeywordFromInput(event, i, j) {
        this.onAddKeywordFromInput.emit({ event, i, j });
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
    expendMore(e) {
        e.preventDefault();
        this.onExpendMore.emit(true);
    }
    ingoreDefaultAction(e) {
        e.preventDefault();
    }
}
SubOnboaringComponent.ɵfac = function SubOnboaringComponent_Factory(t) { return new (t || SubOnboaringComponent)(); };
SubOnboaringComponent.ɵcmp = ɵɵdefineComponent({ type: SubOnboaringComponent, selectors: [["lib-sub-onboarding"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore" }, ngContentSelectors: _c2$1, decls: 7, vars: 4, consts: [[1, "field-item"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "fill", 4, "ngSwitchDefault"], [1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "required", "ngModelOptions", "ngModelChange"], ["class", "form-field radio-group field-size", "aria-label", "Select an option", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "fill", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboaringComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c1$1);
        ɵɵelementStart(0, "div", 0);
        ɵɵelementContainerStart(1, 1);
        ɵɵtemplate(2, SubOnboaringComponent_div_2_Template, 3, 5, "div", 2);
        ɵɵtemplate(3, SubOnboaringComponent_mat_form_field_3_Template, 4, 2, "mat-form-field", 2);
        ɵɵtemplate(4, SubOnboaringComponent_mat_form_field_4_Template, 5, 6, "mat-form-field", 2);
        ɵɵtemplate(5, SubOnboaringComponent_mat_form_field_5_Template, 4, 6, "mat-form-field", 3);
        ɵɵelementContainerEnd();
        ɵɵelementEnd();
        ɵɵprojection(6);
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngSwitch", ctx.field.type);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "checkbox");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "radio");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "select");
    } }, directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, MatCheckbox, MatCheckboxRequiredValidator, NgControlStatus, NgModel, RequiredValidator, MatFormField, MatLabel, NgIf, MatRadioGroup, NgForOf, MatRadioButton, MatSelect, MatOption, MatInput, DefaultValueAccessor], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02);margin-bottom:-20px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SubOnboaringComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sub-onboarding',
                templateUrl: './sub-onboarding.component.html',
                styleUrls: ['./sub-onboarding.component.scss']
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
        }] }); })();

function OnboardingFormComponent_div_7_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const contact_r209 = ctx.$implicit;
    ɵɵproperty("value", contact_r209.Id);
    ɵɵadvance(1);
    ɵɵtextInterpolate(contact_r209.Name);
} }
function OnboardingFormComponent_div_7_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const template_r210 = ctx.$implicit;
    ɵɵproperty("value", template_r210._id);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", template_r210.Name, " ");
} }
function OnboardingFormComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r212 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵelementStart(1, "h3");
    ɵɵtext(2, " Onboarding de votre nouveau collaborateur ");
    ɵɵelementEnd();
    ɵɵelementStart(3, "p");
    ɵɵtext(4, "S\u00E9lectionnez le nom de votre nouveau collaborateur afin de pouvoir d\u00E9marrer son onboarding.");
    ɵɵelementEnd();
    ɵɵelementStart(5, "mat-form-field", 7);
    ɵɵelementStart(6, "mat-label");
    ɵɵtext(7, "Contact");
    ɵɵelementEnd();
    ɵɵelementStart(8, "mat-select", 8);
    ɵɵlistener("selectionChange", function OnboardingFormComponent_div_7_Template_mat_select_selectionChange_8_listener($event) { ɵɵrestoreView(_r212); const ctx_r211 = ɵɵnextContext(); return ctx_r211.onSelectUser($event.value); });
    ɵɵtemplate(9, OnboardingFormComponent_div_7_mat_option_9_Template, 2, 2, "mat-option", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(10, "mat-form-field", 7);
    ɵɵelementStart(11, "mat-label");
    ɵɵtext(12, "Template");
    ɵɵelementEnd();
    ɵɵelementStart(13, "mat-select", 10);
    ɵɵlistener("selectionChange", function OnboardingFormComponent_div_7_Template_mat_select_selectionChange_13_listener($event) { ɵɵrestoreView(_r212); const ctx_r213 = ɵɵnextContext(); return ctx_r213.onSelect($event.value); });
    ɵɵtemplate(14, OnboardingFormComponent_div_7_mat_option_14_Template, 2, 2, "mat-option", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(15, "button", 11);
    ɵɵlistener("click", function OnboardingFormComponent_div_7_Template_button_click_15_listener() { ɵɵrestoreView(_r212); const ctx_r214 = ɵɵnextContext(); return ctx_r214.onSelectContactTemplate(); });
    ɵɵtext(16);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r205 = ɵɵnextContext();
    var tmp_2_0 = null;
    const currVal_2 = ((tmp_2_0 = ctx_r205.onboardingForm.get("ContactId")) == null ? null : tmp_2_0.value) === "" || ((tmp_2_0 = ctx_r205.onboardingForm.get("templateId")) == null ? null : tmp_2_0.value) == "" ? 0.4 : 1;
    var tmp_3_0 = null;
    const currVal_3 = ((tmp_3_0 = ctx_r205.onboardingForm.get("ContactId")) == null ? null : tmp_3_0.value) === "" || ((tmp_3_0 = ctx_r205.onboardingForm.get("templateId")) == null ? null : tmp_3_0.value) == "";
    ɵɵadvance(9);
    ɵɵproperty("ngForOf", ctx_r205.contacts);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r205.templates);
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", currVal_2);
    ɵɵproperty("disabled", currVal_3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r205.id !== "0" ? "Modifier l\u2019onboarding" : "D\u00E9marrer l\u2019onboarding", " ");
} }
function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r237 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 33);
    ɵɵelementStart(1, "lib-sub-onboarding", 34);
    ɵɵlistener("onAddKeywordFromInput", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onAddKeywordFromInput_1_listener($event) { ɵɵrestoreView(_r237); const l_r235 = ctx.index; const k_r230 = ɵɵnextContext(2).index; const j_r225 = ɵɵnextContext(2).index; const i_r220 = ɵɵnextContext(2).index; const ctx_r236 = ɵɵnextContext(2); return ctx_r236.addKeywordFromInput($event.event, i_r220, j_r225, k_r230, l_r235); })("onKeyPress", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onKeyPress_1_listener($event) { ɵɵrestoreView(_r237); const l_r235 = ctx.index; const k_r230 = ɵɵnextContext(2).index; const j_r225 = ɵɵnextContext(2).index; const i_r220 = ɵɵnextContext(2).index; const ctx_r241 = ɵɵnextContext(2); return ctx_r241.onKeyPress($event.event, i_r220, j_r225, k_r230, l_r235); })("onAddNewField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onAddNewField_1_listener() { ɵɵrestoreView(_r237); const k_r230 = ɵɵnextContext(2).index; const j_r225 = ɵɵnextContext(2).index; const i_r220 = ɵɵnextContext(2).index; const ctx_r245 = ɵɵnextContext(2); return ctx_r245.onAddNewField(i_r220, j_r225, k_r230); })("onRemoveField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onRemoveField_1_listener() { ɵɵrestoreView(_r237); const l_r235 = ctx.index; const k_r230 = ɵɵnextContext(2).index; const j_r225 = ɵɵnextContext(2).index; const i_r220 = ɵɵnextContext(2).index; const ctx_r249 = ɵɵnextContext(2); return ctx_r249.onRemoveField(i_r220, j_r225, k_r230, l_r235); })("onChangeType", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onChangeType_1_listener() { ɵɵrestoreView(_r237); const c2_r234 = ctx.$implicit; const l_r235 = ctx.index; const k_r230 = ɵɵnextContext(2).index; const j_r225 = ɵɵnextContext(2).index; const i_r220 = ɵɵnextContext(2).index; const ctx_r253 = ɵɵnextContext(2); return ctx_r253.onChangeType(c2_r234.type, i_r220, j_r225, k_r230, l_r235); })("onRemoveKeyword", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onRemoveKeyword_1_listener($event) { ɵɵrestoreView(_r237); const l_r235 = ctx.index; const k_r230 = ɵɵnextContext(2).index; const j_r225 = ɵɵnextContext(2).index; const i_r220 = ɵɵnextContext(2).index; const ctx_r257 = ɵɵnextContext(2); return ctx_r257.removeKeyword($event.event, i_r220, j_r225, k_r230, l_r235); })("onAddNewSubLevelField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onAddNewSubLevelField_1_listener() { ɵɵrestoreView(_r237); const l_r235 = ctx.index; const k_r230 = ɵɵnextContext(2).index; const j_r225 = ɵɵnextContext(2).index; const i_r220 = ɵɵnextContext(2).index; const ctx_r261 = ɵɵnextContext(2); return ctx_r261.onAddNewSubLevelField(i_r220, j_r225, k_r230, l_r235); })("onExpendMore", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onExpendMore_1_listener() { ɵɵrestoreView(_r237); const l_r235 = ctx.index; const k_r230 = ɵɵnextContext(2).index; const j_r225 = ɵɵnextContext(2).index; const i_r220 = ɵɵnextContext(2).index; const ctx_r265 = ɵɵnextContext(2); return ctx_r265.onExpendMore(null, i_r220, j_r225, k_r230, l_r235); });
    ɵɵelement(2, "div", 35);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const c2_r234 = ctx.$implicit;
    const l_r235 = ctx.index;
    const ctx_r269 = ɵɵnextContext(2);
    const child_r229 = ctx_r269.$implicit;
    const k_r230 = ctx_r269.index;
    ɵɵadvance(1);
    ɵɵproperty("field", c2_r234)("length", child_r229 == null ? null : child_r229.forms == null ? null : child_r229.forms.length)("i", k_r230)("j", l_r235);
} }
function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r271 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 30, 31);
    ɵɵlistener("cdkDropListDropped", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r271); const ctx_r270 = ɵɵnextContext(7); return ctx_r270.drop($event); });
    ɵɵtemplate(2, OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template, 3, 4, "div", 32);
    ɵɵelementEnd();
} if (rf & 2) {
    const child_r229 = ɵɵnextContext().$implicit;
    ɵɵproperty("cdkDropListData", child_r229.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", child_r229.forms);
} }
function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r274 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 33);
    ɵɵelementStart(1, "lib-sub-onboarding", 34);
    ɵɵlistener("onAddKeywordFromInput", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onAddKeywordFromInput_1_listener($event) { ɵɵrestoreView(_r274); const k_r230 = ctx.index; const j_r225 = ɵɵnextContext(2).index; const i_r220 = ɵɵnextContext(2).index; const ctx_r273 = ɵɵnextContext(2); return ctx_r273.addKeywordFromInput($event.event, i_r220, j_r225, k_r230); })("onKeyPress", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onKeyPress_1_listener($event) { ɵɵrestoreView(_r274); const k_r230 = ctx.index; const j_r225 = ɵɵnextContext(2).index; const i_r220 = ɵɵnextContext(2).index; const ctx_r277 = ɵɵnextContext(2); return ctx_r277.onKeyPress($event.event, i_r220, j_r225, k_r230); })("onAddNewField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onAddNewField_1_listener() { ɵɵrestoreView(_r274); const j_r225 = ɵɵnextContext(2).index; const i_r220 = ɵɵnextContext(2).index; const ctx_r280 = ɵɵnextContext(2); return ctx_r280.onAddNewField(i_r220, j_r225); })("onRemoveField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onRemoveField_1_listener() { ɵɵrestoreView(_r274); const k_r230 = ctx.index; const j_r225 = ɵɵnextContext(2).index; const i_r220 = ɵɵnextContext(2).index; const ctx_r283 = ɵɵnextContext(2); return ctx_r283.onRemoveField(i_r220, j_r225, k_r230); })("onChangeType", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onChangeType_1_listener() { ɵɵrestoreView(_r274); const child_r229 = ctx.$implicit; const k_r230 = ctx.index; const j_r225 = ɵɵnextContext(2).index; const i_r220 = ɵɵnextContext(2).index; const ctx_r286 = ɵɵnextContext(2); return ctx_r286.onChangeType(child_r229.type, i_r220, j_r225, k_r230); })("onRemoveKeyword", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onRemoveKeyword_1_listener($event) { ɵɵrestoreView(_r274); const k_r230 = ctx.index; const j_r225 = ɵɵnextContext(2).index; const i_r220 = ɵɵnextContext(2).index; const ctx_r289 = ɵɵnextContext(2); return ctx_r289.removeKeyword($event.event, i_r220, j_r225, k_r230); })("onAddNewSubLevelField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onAddNewSubLevelField_1_listener() { ɵɵrestoreView(_r274); const k_r230 = ctx.index; const j_r225 = ɵɵnextContext(2).index; const i_r220 = ɵɵnextContext(2).index; const ctx_r292 = ɵɵnextContext(2); return ctx_r292.onAddNewSubLevelField(i_r220, j_r225, k_r230); })("onExpendMore", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onExpendMore_1_listener() { ɵɵrestoreView(_r274); const k_r230 = ctx.index; const j_r225 = ɵɵnextContext(2).index; const i_r220 = ɵɵnextContext(2).index; const ctx_r295 = ɵɵnextContext(2); return ctx_r295.onExpendMore(null, i_r220, j_r225, k_r230); });
    ɵɵelementStart(2, "div", 35);
    ɵɵtemplate(3, OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_Template, 3, 2, "div", 27);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const child_r229 = ctx.$implicit;
    const k_r230 = ctx.index;
    const ctx_r298 = ɵɵnextContext(2);
    const field_r224 = ctx_r298.$implicit;
    const j_r225 = ctx_r298.index;
    ɵɵadvance(1);
    ɵɵproperty("field", child_r229)("length", field_r224 == null ? null : field_r224.forms == null ? null : field_r224.forms.length)("i", j_r225)("j", k_r230);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", child_r229.forms);
} }
function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r300 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 30, 31);
    ɵɵlistener("cdkDropListDropped", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r300); const ctx_r299 = ɵɵnextContext(5); return ctx_r299.drop($event); });
    ɵɵtemplate(2, OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template, 4, 5, "div", 32);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r224 = ɵɵnextContext().$implicit;
    ɵɵproperty("cdkDropListData", field_r224.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", field_r224.forms);
} }
function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r303 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 33);
    ɵɵelementStart(1, "lib-sub-onboarding", 34);
    ɵɵlistener("onAddKeywordFromInput", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onAddKeywordFromInput_1_listener($event) { ɵɵrestoreView(_r303); const j_r225 = ctx.index; const i_r220 = ɵɵnextContext(2).index; const ctx_r302 = ɵɵnextContext(2); return ctx_r302.addKeywordFromInput($event.event, i_r220, j_r225); })("onKeyPress", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onKeyPress_1_listener($event) { ɵɵrestoreView(_r303); const j_r225 = ctx.index; const i_r220 = ɵɵnextContext(2).index; const ctx_r305 = ɵɵnextContext(2); return ctx_r305.onKeyPress($event.event, i_r220, j_r225); })("onAddNewField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onAddNewField_1_listener() { ɵɵrestoreView(_r303); const i_r220 = ɵɵnextContext(2).index; const ctx_r307 = ɵɵnextContext(2); return ctx_r307.onAddNewField(i_r220); })("onRemoveField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onRemoveField_1_listener() { ɵɵrestoreView(_r303); const j_r225 = ctx.index; const i_r220 = ɵɵnextContext(2).index; const ctx_r309 = ɵɵnextContext(2); return ctx_r309.onRemoveField(i_r220, j_r225); })("onChangeType", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onChangeType_1_listener() { ɵɵrestoreView(_r303); const field_r224 = ctx.$implicit; const j_r225 = ctx.index; const i_r220 = ɵɵnextContext(2).index; const ctx_r311 = ɵɵnextContext(2); return ctx_r311.onChangeType(field_r224.type, i_r220, j_r225); })("onRemoveKeyword", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onRemoveKeyword_1_listener($event) { ɵɵrestoreView(_r303); const j_r225 = ctx.index; const i_r220 = ɵɵnextContext(2).index; const ctx_r313 = ɵɵnextContext(2); return ctx_r313.removeKeyword($event.event, i_r220, j_r225); })("onAddNewSubLevelField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onAddNewSubLevelField_1_listener() { ɵɵrestoreView(_r303); const j_r225 = ctx.index; const i_r220 = ɵɵnextContext(2).index; const ctx_r315 = ɵɵnextContext(2); return ctx_r315.onAddNewSubLevelField(i_r220, j_r225); })("onExpendMore", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onExpendMore_1_listener() { ɵɵrestoreView(_r303); const j_r225 = ctx.index; const i_r220 = ɵɵnextContext(2).index; const ctx_r317 = ɵɵnextContext(2); return ctx_r317.onExpendMore(null, i_r220, j_r225); });
    ɵɵelementStart(2, "div", 35);
    ɵɵtemplate(3, OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_Template, 3, 2, "div", 27);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r224 = ctx.$implicit;
    const j_r225 = ctx.index;
    const ctx_r319 = ɵɵnextContext(2);
    const category_r219 = ctx_r319.$implicit;
    const i_r220 = ctx_r319.index;
    ɵɵadvance(1);
    ɵɵproperty("field", field_r224)("length", category_r219 == null ? null : category_r219.forms == null ? null : category_r219.forms.length)("i", i_r220)("j", j_r225);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", field_r224.forms);
} }
function OnboardingFormComponent_div_8_mat_step_6_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r321 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 30, 31);
    ɵɵlistener("cdkDropListDropped", function OnboardingFormComponent_div_8_mat_step_6_div_5_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r321); const ctx_r320 = ɵɵnextContext(3); return ctx_r320.drop($event); });
    ɵɵelementContainerStart(2);
    ɵɵtemplate(3, OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template, 4, 5, "div", 32);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const category_r219 = ɵɵnextContext().$implicit;
    ɵɵproperty("cdkDropListData", category_r219.forms);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", category_r219.forms);
} }
function OnboardingFormComponent_div_8_mat_step_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-step", 24);
    ɵɵelementStart(1, "div", 25);
    ɵɵelementStart(2, "div", 26);
    ɵɵelementStart(3, "h2");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(5, OnboardingFormComponent_div_8_mat_step_6_div_5_Template, 4, 2, "div", 27);
    ɵɵelementStart(6, "button", 28);
    ɵɵtext(7, "Pr\u00E9c\u00E9dent");
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 29);
    ɵɵtext(9, "Suivant");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const category_r219 = ctx.$implicit;
    const ctx_r217 = ɵɵnextContext(2);
    ɵɵproperty("stepControl", ctx_r217.onboardingForm)("label", category_r219.name);
    ɵɵadvance(4);
    ɵɵtextInterpolate(category_r219.name);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", category_r219.forms);
} }
function OnboardingFormComponent_div_8_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Review");
} }
function OnboardingFormComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r324 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "div", 14);
    ɵɵelementStart(2, "div", 15, 16);
    ɵɵlistener("cdkDropListDropped", function OnboardingFormComponent_div_8_Template_div_cdkDropListDropped_2_listener($event) { ɵɵrestoreView(_r324); const ctx_r323 = ɵɵnextContext(); return ctx_r323.drop($event); });
    ɵɵelementStart(4, "mat-horizontal-stepper", 17, 18);
    ɵɵtemplate(6, OnboardingFormComponent_div_8_mat_step_6_Template, 10, 4, "mat-step", 19);
    ɵɵelementStart(7, "mat-step");
    ɵɵtemplate(8, OnboardingFormComponent_div_8_ng_template_8_Template, 1, 0, "ng-template", 20);
    ɵɵelementStart(9, "h5");
    ɵɵtext(10, "You are now done.");
    ɵɵelementEnd();
    ɵɵelementStart(11, "div");
    ɵɵelementStart(12, "button", 21);
    ɵɵtext(13, "Back");
    ɵɵelementEnd();
    ɵɵtext(14, " \u00A0 \u00A0 ");
    ɵɵelementStart(15, "button", 22);
    ɵɵtext(16, "Submit");
    ɵɵelementEnd();
    ɵɵtext(17, " \u00A0 \u00A0 ");
    ɵɵelementStart(18, "button", 23);
    ɵɵlistener("click", function OnboardingFormComponent_div_8_Template_button_click_18_listener() { ɵɵrestoreView(_r324); const _r216 = ɵɵreference(5); return _r216.reset(); });
    ɵɵtext(19, "Reset");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r206 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("cdkDropListData", ctx_r206.categories);
    ɵɵadvance(2);
    ɵɵproperty("linear", true);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r206.categories);
} }
class OnboardingFormComponent {
    constructor(service, fb, route) {
        this.service = service;
        this.fb = fb;
        this.route = route;
        this.isSelected = false;
        this.id = "0";
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.onCreateDynamicForm();
            yield this.service.getContacts();
            yield this.service.getAllProfil();
            this.service._contacts.subscribe((contacts) => this.contacts = contacts);
            this.service._templates.subscribe((data) => this.templates = data);
            this.id = this.route.snapshot.paramMap.get("id");
            if (this.id !== "0") {
                this.currentOnboarding = yield this.service.getOnboarding(this.id);
                // this.onboardingForm.patchValue(this.currentOnboarding);
            }
            console.log(this.templates);
        });
    }
    onSelectContactTemplate() {
        this.isSelected = true;
    }
    onCreateDynamicForm() {
        this.onboardingForm = this.fb.group({
            contactId: ['', Validators.required],
            templateId: [0, Validators.required]
        });
    }
    onPopulateValue() {
        const user = this.categories[0].forms;
        const populateContact = user.map((u) => (Object.assign(Object.assign({}, u), { value: this.currentUser[u.key] })));
        this.categories[0].forms = populateContact;
    }
    onSelect(id) {
        this.categories = this.templates.find((t) => t._id === id).categories;
        if (this.contacts) {
            this.onPopulateValue();
        }
    }
    onSelectUser(Id) {
        this.currentUser = this.contacts.find((u) => u.Id === Id);
        if (this.categories) {
            this.onPopulateValue();
        }
    }
    onAddNewCategory(e) {
        e.preventDefault();
        this.categories.push({
            name: "",
            editable: true,
            deleteable: true,
            expandMore: true,
            suffixEndpoint: "",
            forms: [
                {
                    label: "",
                    value: null,
                    size: 80,
                    isMandatory: true,
                    type: "text",
                    deleteable: true,
                    editable: true
                },
            ],
        });
    }
    onAddNewField(...params) {
        const length = params.length;
        const forms = length === 1
            ? this.categories[params[0]].forms
            : length === 2
                ? this.categories[params[0]].forms[params[1]].forms
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.push({
            label: "",
            value: null,
            size: 80,
            isMandatory: true,
            type: "text",
            deleteable: true,
            editable: true,
            subLevel: params.length
        });
    }
    onAddNewSubLevelField(...params) {
        console.log(params.length - 1);
        const length = params.length;
        const forms = length === 2
            ? this.categories[params[0]].forms[params[length - 1]]
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]]
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.expandMore = true;
        forms.forms = [];
        forms.forms.push({
            label: "",
            value: null,
            size: 80,
            isMandatory: true,
            type: "text",
            deleteable: true,
            editable: true,
            subLevel: params.length,
            expandMore: true
        });
        console.log(this.categories);
    }
    onRemoveField(...params) {
        const length = params.length;
        const forms = length === 2
            ? this.categories[params[0]].forms
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.splice(params[length - 1], 1);
    }
    onRemoveCategory(e, i) {
        e.preventDefault();
        this.categories.splice(i, 1);
    }
    onChangeCategory() {
        return this.categories.every((cat) => cat.name !== "" &&
            cat.forms.every((field) => field.label !== "" && field.type !== ""));
    }
    onChangeType(type, ...params) {
        const length = params.length;
        const forms = length === 2
            ? this.categories[params[0]].forms
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        if (type === "select" || type === "radio") {
            forms[params[length - 1]].value = [];
        }
        else if (type === "text") {
            forms[params[length - 1]].value = "";
        }
        else {
            forms[params[length - 1]].value = false;
        }
    }
    onKeyPress(event, ...params) {
        const length = params.length;
        const forms = length === 2
            ? this.categories[params[0]].forms[params[length - 1]]
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]]
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (event.key === ";") {
            const exist = forms.value.find((opt) => opt.toLocaleLowerCase() ===
                event.target.value.split(";")[0].toLocaleLowerCase());
            if (!exist) {
                forms.value.push(event.target.value.split(";")[0]);
                event.target.value = "";
            }
            else {
                event.target.value = "";
            }
        }
    }
    removeKeyword(keyword, ...params) {
        const length = params.length;
        const forms = length === 2
            ? this.categories[params[0]].forms[params[length - 1]]
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]]
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.value = forms.value.filter((option) => option !== keyword);
    }
    onExpendMore(event, ...params) {
        if (event) {
            event.preventDefault();
        }
        console.log(event);
        const length = params.length;
        const forms = length === 1
            ? this.categories[params[0]] :
            length === 2 ? this.categories[params[0]].forms[params[length - 1]] :
                length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] :
                    this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.expandMore = !forms.expandMore;
    }
    addKeywordFromInput(event, ...params) {
        const input = event.input;
        const value = event.value;
        const length = params.length;
        const forms = length === 2
            ? this.categories[params[0]].forms[params[length - 1]]
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]]
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (value) {
            const exist = forms.value.find((opt) => opt.toLocaleLowerCase() === event.value.toLocaleLowerCase());
            if (!exist) {
                forms.value.push(value.trim());
                input.value = "";
            }
            else {
                input.value = "";
            }
        }
    }
    drop(event) {
        console.log("log", this.categories);
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
}
OnboardingFormComponent.ɵfac = function OnboardingFormComponent_Factory(t) { return new (t || OnboardingFormComponent)(ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(ActivatedRoute)); };
OnboardingFormComponent.ɵcmp = ɵɵdefineComponent({ type: OnboardingFormComponent, selectors: [["lib-onboarding-form"]], decls: 9, vars: 3, consts: [[1, "container"], [1, "content"], [1, "sub-title"], [3, "formGroup"], ["class", "select-contact", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "select-contact"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "contactId", "required", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "templateId", "required", "", 3, "selectionChange"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "value"], [1, "category"], ["cdkDropListGroup", ""], ["cdkDropList", "", 1, "example-list", "mt-20", "onboarding-mat-stepper", 3, "cdkDropListData", "cdkDropListDropped"], ["parentList", "cdkDropList"], ["labelPosition", "bottom", 3, "linear"], ["stepper", ""], ["class", "category-item", 3, "stepControl", "label", 4, "ngFor", "ngForOf"], ["matStepLabel", ""], ["mat-raised-button", "", "color", "primary", "matStepperPrevious", ""], ["mat-raised-button", "", "color", "accent", "type", "submit"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "category-item", 3, "stepControl", "label"], [1, "field-content"], [1, "field-item"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "matStepperPrevious", "", 1, "next-step", 2, "float", "left"], ["mat-raised-button", "", "color", "primary", "matStepperNext", "", 1, "next-step"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "field", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "field"], [3, "field", "length", "i", "j", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore"], [1, "child"]], template: function OnboardingFormComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "h3");
        ɵɵtext(3, "Nouvel Onboarding");
        ɵɵelementEnd();
        ɵɵelementStart(4, "p", 2);
        ɵɵtext(5, "Cr\u00E9ez ici, l\u2019onboarding de votre nouveau collaborateur.");
        ɵɵelementEnd();
        ɵɵelementStart(6, "form", 3);
        ɵɵtemplate(7, OnboardingFormComponent_div_7_Template, 17, 6, "div", 4);
        ɵɵtemplate(8, OnboardingFormComponent_div_8_Template, 20, 3, "div", 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(6);
        ɵɵproperty("formGroup", ctx.onboardingForm);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.isSelected);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isSelected);
    } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, NgIf, MatFormField, MatLabel, MatSelect, NgControlStatus, FormControlName, RequiredValidator, NgForOf, MatButton, MatOption, CdkDropListGroup, CdkDropList, MatHorizontalStepper, MatStep, MatStepLabel, MatStepperPrevious, MatStepperNext, CdkDrag, SubOnboaringComponent], styles: [".onboarding-mat-stepper .mat-horizontal-stepper-header-container{display:none!important}.container[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;width:100%;height:auto;min-height:100%}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:99%;height:100%;padding-left:1%}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{max-width:300px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .onboarding-mat-stepper[_ngcontent-%COMP%]   mat-horizontal-stepper[_ngcontent-%COMP%]   .next-step[_ngcontent-%COMP%]{float:right}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:5%}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingFormComponent, [{
        type: Component,
        args: [{
                selector: 'lib-onboarding-form',
                templateUrl: './onboarding-form.component.html',
                styleUrls: ['./onboarding-form.component.scss']
            }]
    }], function () { return [{ type: OnboardingService }, { type: FormBuilder }, { type: ActivatedRoute }]; }, null); })();

;
const onBoardingRoutes = [
    {
        path: 'onboarding',
        component: OnboardingComponent,
        children: [
            {
                path: 'template-builder/:id',
                component: CreateProfileTemplateComponent
            },
            {
                path: '',
                component: ProfileListComponent
            },
            // {
            //   path: 'onboarding',
            //   component: OnboardingFormComponent
            // },
            {
                path: ':id',
                component: OnboardingFormComponent
            },
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
OnboardingModule.ɵinj = ɵɵdefineInjector({ factory: function OnboardingModule_Factory(t) { return new (t || OnboardingModule)(ɵɵinject(OnboardingModule, 12)); }, providers: [OnboardingService], imports: [[
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
            DragDropModule,
            MatCardModule,
            MatDialogModule,
            MatStepperModule
        ],
        HttpClientModule,
        RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(OnboardingModule, { declarations: [MaterialElevationDirective,
        OnboardingComponent,
        CreateProfileTemplateComponent,
        ProfileListComponent,
        SubCategoryComponent,
        SubOnboaringComponent,
        OnboardingFormComponent], imports: [FormsModule,
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
        MatTableModule, RouterModule, DragDropModule,
        MatCardModule,
        MatDialogModule,
        MatStepperModule], exports: [OnboardingComponent,
        HttpClientModule,
        CreateProfileTemplateComponent,
        ProfileListComponent,
        OnboardingComponent,
        RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MaterialElevationDirective,
                    OnboardingComponent,
                    CreateProfileTemplateComponent,
                    ProfileListComponent,
                    SubCategoryComponent,
                    SubOnboaringComponent,
                    OnboardingFormComponent
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
                    DragDropModule,
                    MatCardModule,
                    MatDialogModule,
                    MatStepperModule
                ],
                providers: [OnboardingService],
                exports: [
                    OnboardingComponent,
                    HttpClientModule,
                    CreateProfileTemplateComponent,
                    ProfileListComponent,
                    OnboardingComponent,
                    RouterModule
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

export { CreateProfileTemplateComponent, OnboardingComponent, OnboardingModule, OnboardingService, ProfileListComponent, onBoardingRoutes };
//# sourceMappingURL=onboarding.js.map
