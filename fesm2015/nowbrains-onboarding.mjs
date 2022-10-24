import { __awaiter, __rest } from 'tslib';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import * as i0 from '@angular/core';
import { EventEmitter, Injectable, Inject, Component, Input, Output, HostListener, Directive, ViewChild, NgModule, Optional, SkipSelf, ElementRef, PLATFORM_ID } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, throwError } from 'rxjs';
import * as i2 from '@angular/router';
import { RouterModule } from '@angular/router';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import * as i16 from '@angular/cdk/drag-drop';
import { moveItemInArray, transferArrayItem, DragDropModule } from '@angular/cdk/drag-drop';
import * as i1$2 from '@angular/forms';
import { UntypedFormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1$1 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import * as i2$1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i5 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i6 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i9 from 'ngx-intl-tel-input';
import { CountryISO, PhoneNumberFormat, NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import * as i4 from 'nowboard-icon';
import * as i4$1 from '@angular/common';
import { CommonModule, DatePipe, isPlatformBrowser, DOCUMENT } from '@angular/common';
import * as i6$1 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i5$1 from '@nicky-lenaers/ngx-scroll-to';
import { ScrollToModule as ScrollToModule$1 } from '@nicky-lenaers/ngx-scroll-to';
import * as i4$2 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i7 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i1$3 from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import * as i14$1 from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import * as i10 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i13 from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import * as i11 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i14 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import * as i9$1 from 'ngx-filter';
import { NgxFilterModule } from 'ngx-filter';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as i1$4 from 'ngx-lottie';
import { LottieModule } from 'ngx-lottie';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { CdkTableModule } from '@angular/cdk/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import * as i3 from '@angular/material/bottom-sheet';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import _ from 'lodash';
import * as XLSX from 'xlsx';
import * as i3$1 from '@nowbrains/ngx-table';
import { CoreMatTable, CellsComponentList, TableModule } from '@nowbrains/ngx-table';
import { MatTabsModule } from '@angular/material/tabs';
import player from 'lottie-web';

const downLoadFile = (x, filename) => {
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
        const options = {
            headers: this.header
        };
        return this.http.get(endpoint, Object.assign({ responseType: 'arraybuffer' }, options));
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
            }, err => {
                this.onboarding.next([]);
            });
        });
    }
    downloadAttachment(attach) {
        return __awaiter(this, void 0, void 0, function* () {
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
    getAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}
OnboardingService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingService, deps: [{ token: '__NgxOnboarding__' }, { token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
OnboardingService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingService, decorators: [{
            type: Injectable
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: ['__NgxOnboarding__']
                    }] }, { type: i1.HttpClient }];
    } });

// @ts-ignore
class OnboardingComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
        if (this.router.url.indexOf('onboarding') > -1) {
            this.service.mainPath = this.router.url.split('/onboarding')[0] + '/onboarding';
            if (this.router.url === '/onboarding') {
                this.router.navigate(['onboarding/requests']);
            }
        }
    }
}
OnboardingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingComponent, deps: [{ token: OnboardingService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
OnboardingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: OnboardingComponent, selector: "ngx-onboarding", ngImport: i0, template: "<router-outlet></router-outlet>", styles: [".main{background-color:red!important}\n"], dependencies: [{ kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-onboarding', template: "<router-outlet></router-outlet>", styles: [".main{background-color:red!important}\n"] }]
        }], ctorParameters: function () { return [{ type: OnboardingService }, { type: i2.Router }]; } });

const locales = {
    en: {
        PROFILE: {
            CATEGORY_SUBTITLE: "Lists of information required for the creation of",
            LIVE: 'Live',
            DRAFT: 'Draft',
            ADD_FIELD: "Add a field",
            ADD_STEP: "Add step",
            ADD: "add...",
            SETTING_OF_BLOCK: "Setting of the block",
            TYPE_OF_BLOCK: "Type of block",
            NAME_LABEL: "Name / Label",
            DEFAULT_VALUE: "Default value",
            DEFAULT_CHECKED: "Default checked",
            CANCEL: "Cancel",
            REQUIRED: 'Required',
            CONDITIONAL_VISIBILITY: "Conditional visibility",
            SELECT_CATEGORY: "Select the category",
            SELECT_SUB_CATEGORY: "Select the sub-category",
            SUB_CATEGORY: "Sub-category",
            DUPLICATE_BLOCK: "Duplicate block",
            DELETE_BLOCK: "Delete block",
            SECTION_SETTING: "Section Settings",
            SECTION_NAME: "Section name",
            MANAGEMENT_TEAM: "Management team",
            YOU_DO_NOT_CURRENT: "You do not currently have a typical profile",
            THANKS_TO_THE_STANDARD: "Thanks to the standard profiles you will be able to create form templates for the arrival of your employees.",
            CREATE_PROFILE: "Create profile",
            CREATE_NEW_PROFILE: "Creating a new profile",
            PROFILE_NAME: "Profile name",
            PUBLISH_PROFIL: "Publish profile",
            REGISTER_DRAFT: "Register the draft",
            SHORT_TEXT: "Short text",
            LONG_TEXT: "Long text",
            SINGLE_CHOICE_OPTION: "Single choice options",
            OFF_ON_BUTTON: "On/Off button",
            CHECKBOX: "Checkbox",
            MULTIPLE_CHECKBOX: "Multiple checkbox",
            DROPDOWN_LIST: "Dropdown list",
            EMAIL: "Email",
            PASSWORD: "Password",
            PHONE: "Phone",
            DATE: "Date",
            NONE: "None"
        },
        PROFILES_LIST: {
            PROFILES: 'Profiles',
            STATUS: 'Status',
            DRAFT: 'Draft',
            PUBLISH: 'Publish',
            DATE_MIN: 'Date min',
            DATE_MAX: 'Date max',
            NAME: 'Name',
            CREATE_PROFILE: 'Create a new profile',
            LIVE: 'Live',
        },
        REQUEST: {
            TITLE: "Profile integration",
            CATEGORY_SUBTITLE: "Lists of information required for the creation of",
            CREATION_AN_REQUEST: "Creating an Integration Request",
            INTEGRATION_OF_PROFILE: 'Integration of profile',
            NO_TICKET: "no ticket",
            DOWNLOAD: "Download",
            DRAFT: 'Draft',
            PUBLISH: 'Publish',
            TICKET_RELATED: "Tickets related to your request",
            HERE_YOU_WILL: "Here you will find all the tickets created during the creation of your integration form",
            ARRIVED_ON: 'arrived on',
            NEW: "Make a new request",
            REQUEST_FOR_INTEGRATION: "Requests for integration",
            COLLABORATOR: 'Collaborator',
            RESUME_LATER: "Resume later",
            SEND_MY_FORM: "Send my form",
            DETAIL: 'Detail',
            ID: 'ID',
            TO_FINISHED: 'To finished',
            FINISHED: 'Finished',
            PROFILE: 'Profile',
            REQUESTOR: 'Requestor',
            SITE: 'Site',
            SERVICE: 'Service',
            CREATION_DATE: 'Creation date',
            STATUS: 'Status',
            ACTION: 'Action',
            RESULTS: 'Results',
            SEARCH: 'Search...',
            TYPE_OF_PROFILE: "Type of profile",
            START_REQUEST: "Start the request",
            LEAVE: "Leave",
            DONWLOAD_THE_PDF: "Download the summary PDF",
            OTHER_OPTION: "Other option",
            INVALID_PHONE: "The phone is invalid",
            CLOSE: "Close"
        },
        CONFIRM: {
            TEXT: "All your data will be lost, are you sure you want to continue?",
            CANCEL: "Cancel",
            CONFIRM: 'Confirm',
            ATTENTION: "Attention!"
        }
    },
    fr: {
        PROFILE: {
            CATEGORY_SUBTITLE: "Listes des informations nécessaires pour la création de",
            LIVE: 'Live',
            DRAFT: 'Brouillon',
            ADD_FIELD: "Ajouter un champ",
            ADD_STEP: "Ajouter une étape",
            ADD: "ajouter...",
            SETTING_OF_BLOCK: "Paramètre de bloc",
            TYPE_OF_BLOCK: "Type de bloc",
            NAME_LABEL: "Nom / Label",
            DEFAULT_VALUE: "Valeur par défaut",
            DEFAULT_CHECKED: "Coché par défaut",
            CANCEL: "Annuler",
            REQUIRED: 'Obligatoire',
            CONDITIONAL_VISIBILITY: "Visibilité conditionnelle",
            SELECT_CATEGORY: "Séléctionnez la catégorie",
            SELECT_SUB_CATEGORY: "Séléctionnez la sous-catégorie",
            SUB_CATEGORY: "Sous-catégorie",
            DUPLICATE_BLOCK: "Duppliquer le bloc",
            DELETE_BLOCK: "Supprimer le bloc",
            SECTION_SETTING: "Paramètre le la section",
            SECTION_NAME: "Nom de la section",
            MANAGEMENT_TEAM: "Gestion d'équipe",
            YOU_DO_NOT_CURRENT: "Vous n’avez actuellement aucun profil type",
            THANKS_TO_THE_STANDARD: "Grâce aux profils types vous pourrez créer des modèle de formulaire pour l’arrivée de vos salariés.",
            CREATE_PROFILE: "Créer profil",
            CREATE_NEW_PROFILE: "Création d’un nouveau profil",
            PROFILE_NAME: "Nom de profil",
            PUBLISH_PROFIL: "Publier le profil",
            REGISTER_DRAFT: "Enregistrer le brouillon",
            SHORT_TEXT: "Texte court",
            LONG_TEXT: "Texte longue",
            SINGLE_CHOICE_OPTION: "Options à choix unique",
            OFF_ON_BUTTON: "Bouton On/Off",
            CHECKBOX: "Checkbox",
            MULTIPLE_CHECKBOX: "Multiple checkbox",
            DROPDOWN_LIST: "List déroulante",
            EMAIL: "Email",
            PASSWORD: "Mot de passe",
            PHONE: "Téléphone",
            DATE: "Date",
            NONE: "Aucun"
        },
        PROFILES_LIST: {
            PROFILES: 'Profils',
            STATUS: 'Statut',
            DRAFT: 'Brouillons',
            PUBLISH: 'Publiés',
            DATE_MIN: 'Date min',
            DATE_MAX: 'Date max',
            NAME: 'Nom',
            CREATE_PROFILE: 'Créer un nouveau profil',
            LIVE: 'Live',
        },
        REQUEST: {
            TITLE: "Intégration de profil",
            INTEGRATION_OF_PROFILE: 'Intégration de profil',
            CATEGORY_SUBTITLE: "Listes des informations nécessaires pour la création de",
            CREATION_AN_REQUEST: "Création d'une demande d'intégration",
            TO_FINISHED: 'A finaliser',
            FINISHED: 'Terminé',
            NO_TICKET: "aucun ticket",
            RESUME_LATER: "Reprendre plus tard ",
            SEND_MY_FORM: "Envoyer ma fiche",
            TICKET_RELATED: "Tickets liés à votre demande",
            HERE_YOU_WILL: "Vous retrouverez ici tous les tickets créés lors de la création de votre fiche d’intégration.",
            DOWNLOAD: "Télécharger",
            ARRIVED_ON: 'arrivé le',
            NEW: "Faire une nouvelle demande",
            REQUEST_FOR_INTEGRATION: "Demandes d'intégration",
            COLLABORATOR: 'Collaborateur',
            DETAIL: 'Détail',
            ID: 'ID',
            PROFILE: 'Profil',
            REQUESTOR: 'Demandeur',
            SITE: 'Site',
            SERVICE: 'Service',
            CREATION_DATE: 'Date de création',
            STATUS: 'Statut',
            ACTION: 'Action',
            DRAFT: 'Brouillons',
            PUBLISH: 'Publiés',
            RESULTS: 'Resultats',
            SEARCH: 'Recherche...',
            TYPE_OF_PROFILE: "Type de profil",
            START_REQUEST: "Lancer la demande",
            LEAVE: "Abandonner",
            DONWLOAD_THE_PDF: "Télécharger le pdf récapitulatif",
            OTHER_OPTION: "Autre option",
            INVALID_PHONE: "Le téléphone est invalide",
            CLOSE: "Fermer"
        },
        CONFIRM: {
            TEXT: "Toutes vos données seront perdues, êtes-vous certain de vouloir continuer ?",
            CANCEL: "Annuler",
            CONFIRM: 'Confirmer',
            ATTENTION: "Attention !"
        }
    }
};

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
        this.locale = {};
        this.service._lang.subscribe((locale) => {
            this.locale = locales[locale].PROFILE;
        });
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
DialogCreateTemplateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: DialogCreateTemplateComponent, deps: [{ token: MAT_DIALOG_DATA }, { token: i1$1.MatDialogRef }, { token: OnboardingService }], target: i0.ɵɵFactoryTarget.Component });
DialogCreateTemplateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: DialogCreateTemplateComponent, selector: "lib-dialog-create-template", ngImport: i0, template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n  <h3 class=\"title\">{{locale?.CREATE_NEW_PROFILE}}</h3>\r\n  <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n    <mat-label>{{locale?.PROFILE_NAME}}</mat-label>\r\n    <input type=\"text\" matInput [(ngModel)]=\"profil.Name\" placeholder=\"Ex. Manager\" />\r\n  </mat-form-field>\r\n  <!-- <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n    <mat-label>Description</mat-label>\r\n    <textarea type=\"text\" matInput [(ngModel)]=\"Description\" rows=\"4\" placeholder=\"\"></textarea>\r\n  </mat-form-field> -->\r\n  <!-- <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n    <mat-label>Tags</mat-label>\r\n    <mat-select [(ngModel)]=\"profil.Tags\" required>\r\n      <mat-option *ngFor=\"let tag of tags\" [value]=\"tag\">{{ tag }}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field> -->\r\n  <div class=\"action-content\">\r\n    <button [disabled]=\"disabled()\" class=\"create-profil\" (click)=\"createProfil()\" mat-raised-button>\r\n      {{locale?.CREATE_PROFILE}}\r\n    </button>\r\n    <button class=\"abandon-profil\" (click)=\"close()\" mat-raised-button>\r\n      {{locale?.CANCEL}}\r\n    </button>\r\n  </div>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:555px;min-width:555px}mat-dialog-content mat-form-field{margin-bottom:10px}mat-dialog-content h3{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content .abandon-profil{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px}mat-dialog-content .create-profil{background-color:#171f26;border:1px solid #171f26;color:#fff}mat-dialog-content .action-content{margin-bottom:10px}mat-dialog-content button:disabled,mat-dialog-content button[disabled]{opacity:.5}\n"], dependencies: [{ kind: "directive", type: i1$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2$1.MatLabel, selector: "mat-label" }, { kind: "component", type: i5.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i1$1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i9.NativeElementInjectorDirective, selector: "[ngModel], [formControl], [formControlName]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: DialogCreateTemplateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-dialog-create-template', template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n  <h3 class=\"title\">{{locale?.CREATE_NEW_PROFILE}}</h3>\r\n  <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n    <mat-label>{{locale?.PROFILE_NAME}}</mat-label>\r\n    <input type=\"text\" matInput [(ngModel)]=\"profil.Name\" placeholder=\"Ex. Manager\" />\r\n  </mat-form-field>\r\n  <!-- <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n    <mat-label>Description</mat-label>\r\n    <textarea type=\"text\" matInput [(ngModel)]=\"Description\" rows=\"4\" placeholder=\"\"></textarea>\r\n  </mat-form-field> -->\r\n  <!-- <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n    <mat-label>Tags</mat-label>\r\n    <mat-select [(ngModel)]=\"profil.Tags\" required>\r\n      <mat-option *ngFor=\"let tag of tags\" [value]=\"tag\">{{ tag }}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field> -->\r\n  <div class=\"action-content\">\r\n    <button [disabled]=\"disabled()\" class=\"create-profil\" (click)=\"createProfil()\" mat-raised-button>\r\n      {{locale?.CREATE_PROFILE}}\r\n    </button>\r\n    <button class=\"abandon-profil\" (click)=\"close()\" mat-raised-button>\r\n      {{locale?.CANCEL}}\r\n    </button>\r\n  </div>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:555px;min-width:555px}mat-dialog-content mat-form-field{margin-bottom:10px}mat-dialog-content h3{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content .abandon-profil{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px}mat-dialog-content .create-profil{background-color:#171f26;border:1px solid #171f26;color:#fff}mat-dialog-content .action-content{margin-bottom:10px}mat-dialog-content button:disabled,mat-dialog-content button[disabled]{opacity:.5}\n"] }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }, { type: i1$1.MatDialogRef }, { type: OnboardingService }];
    } });

class ExitConfirmComponent {
    constructor(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.locale = {};
        this.service._lang.subscribe((locale) => {
            this.locale = locales[locale].CONFIRM;
        });
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
ExitConfirmComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: ExitConfirmComponent, deps: [{ token: MAT_DIALOG_DATA }, { token: i1$1.MatDialogRef }, { token: OnboardingService }], target: i0.ɵɵFactoryTarget.Component });
ExitConfirmComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: ExitConfirmComponent, selector: "lib-exit-confirm", ngImport: i0, template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n    <div class=\"close-dialog-icon close-dialog-icon-10\" (click)=\"cancel()\">\r\n        <nb-icon [icon]=\"'close'\" [size]=\"1\"></nb-icon>\r\n    </div>\t\t\r\n    <div class=\"header\">\r\n        {{locale?.ATTENTION}}\r\n    </div>\r\n    <p>{{locale?.TEXT}}</p>\r\n    <div class=\"action-content\">\r\n        <button (click)=\"confirm()\" mat-button class=\"confirm-btn\" style=\"margin-top: 10px\">\r\n            {{locale?.CONFIRM}}\r\n        </button>\r\n\r\n        <button (click)=\"cancel()\" mat-button class=\"cancel-btn\">\r\n            {{locale?.CANCEL}}\r\n        </button>\r\n    </div>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column!important;justify-content:center;align-items:center}mat-dialog-content .header{color:#171f26;font: 900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content p{color:#171f26;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content .cancel-btn{background-color:transparent!important;margin-top:10px}mat-dialog-content button{width:50%}mat-dialog-content .action-content{display:flex;align-items:center;justify-content:space-between;width:100%}mat-dialog-content .action-content .confirm-btn{background-color:rgba(128,128,128,.647) grey}\n"], dependencies: [{ kind: "component", type: i5.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i1$1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "component", type: i4.NowboardIconComponent, selector: "nb-icon", inputs: ["size", "primary", "disabled_color", "disabled", "icon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: ExitConfirmComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-exit-confirm', template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n    <div class=\"close-dialog-icon close-dialog-icon-10\" (click)=\"cancel()\">\r\n        <nb-icon [icon]=\"'close'\" [size]=\"1\"></nb-icon>\r\n    </div>\t\t\r\n    <div class=\"header\">\r\n        {{locale?.ATTENTION}}\r\n    </div>\r\n    <p>{{locale?.TEXT}}</p>\r\n    <div class=\"action-content\">\r\n        <button (click)=\"confirm()\" mat-button class=\"confirm-btn\" style=\"margin-top: 10px\">\r\n            {{locale?.CONFIRM}}\r\n        </button>\r\n\r\n        <button (click)=\"cancel()\" mat-button class=\"cancel-btn\">\r\n            {{locale?.CANCEL}}\r\n        </button>\r\n    </div>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column!important;justify-content:center;align-items:center}mat-dialog-content .header{color:#171f26;font: 900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content p{color:#171f26;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content .cancel-btn{background-color:transparent!important;margin-top:10px}mat-dialog-content button{width:50%}mat-dialog-content .action-content{display:flex;align-items:center;justify-content:space-between;width:100%}mat-dialog-content .action-content .confirm-btn{background-color:rgba(128,128,128,.647) grey}\n"] }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }, { type: i1$1.MatDialogRef }, { type: OnboardingService }];
    } });

class TypeComponent {
    constructor(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.typeList = [{
                label: 'SHORT_TEXT',
                icon: 'list_alt',
                value: 'text'
            },
            {
                label: 'LONG_TEXT',
                icon: 'description',
                value: 'textarea'
            },
            {
                label: 'SINGLE_CHOICE_OPTION',
                icon: 'radio_button_checked',
                value: 'radio'
            },
            {
                label: 'OFF_ON_BUTTON',
                icon: 'check_box_outline_blank',
                value: 'toggle'
            },
            {
                label: 'CHECKBOX',
                icon: 'check_box',
                value: 'checkbox'
            },
            {
                label: 'MULTIPLE_CHECKBOX',
                icon: 'check_box',
                value: 'checkbox_multiple'
            },
            {
                label: 'DROPDOWN_LIST',
                icon: 'keyboard_arrow_down',
                value: 'select'
            },
            {
                label: 'EMAIL',
                icon: 'mail',
                value: 'email'
            },
            {
                label: 'PASSWORD',
                icon: 'lock',
                value: 'password'
            },
            {
                label: 'PHONE',
                icon: 'phone',
                value: 'tel'
            },
            {
                label: 'DATE',
                icon: 'date_range',
                value: 'date'
            },
            {
                label: 'NONE',
                icon: 'square',
                value: 'none'
            }];
        this.selectedType = "";
        this.locale = {};
        this.selectedType = this.data.selectedType;
        this.service._lang.subscribe((locale) => {
            this.locale = locales[locale].PROFILE;
        });
    }
    ngOnInit() {
    }
    onSelect(type) {
        this.dialogRef.close(type);
    }
}
TypeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: TypeComponent, deps: [{ token: MAT_DIALOG_DATA }, { token: i1$1.MatDialogRef }, { token: OnboardingService }], target: i0.ɵɵFactoryTarget.Component });
TypeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: TypeComponent, selector: "lib-type", ngImport: i0, template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n  <button *ngFor=\"let item of typeList\" (click)=\"onSelect(item.value)\" mat-button class=\"type-btn\"\r\n    [class]=\"selectedType === item.value ? 'active' : ''\" style=\"margin-top: 10px\">\r\n    {{ locale[item.label] }} <mat-icon style=\"margin-left: 10px;\">{{ item.icon }}</mat-icon>\r\n  </button>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content .type-btn{background:#E5E8EE;border-radius:4px;margin:5px;height:48px}mat-dialog-content .type-btn:hover,mat-dialog-content .type-btn.active{background-color:transparent;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab);color:#fff}\n"], dependencies: [{ kind: "component", type: i5.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i4$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i6$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i1$1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: TypeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-type', template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n  <button *ngFor=\"let item of typeList\" (click)=\"onSelect(item.value)\" mat-button class=\"type-btn\"\r\n    [class]=\"selectedType === item.value ? 'active' : ''\" style=\"margin-top: 10px\">\r\n    {{ locale[item.label] }} <mat-icon style=\"margin-left: 10px;\">{{ item.icon }}</mat-icon>\r\n  </button>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content .type-btn{background:#E5E8EE;border-radius:4px;margin:5px;height:48px}mat-dialog-content .type-btn:hover,mat-dialog-content .type-btn.active{background-color:transparent;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab);color:#fff}\n"] }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }, { type: i1$1.MatDialogRef }, { type: OnboardingService }];
    } });

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
        this.chipControl = new UntypedFormControl(new Set());
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
SubTemplateProfileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: SubTemplateProfileComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SubTemplateProfileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: SubTemplateProfileComponent, selector: "lib-sub-category", inputs: { field: "field", length: "length", i: "i", j: "j", conditionData: "conditionData", blink: "blink" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckedDefault: "onCheckedDefault", onGetConditionValues: "onGetConditionValues", onEditBlock: "onEditBlock", onCheckValue: "onCheckValue" }, ngImport: i0, template: "<div class=\"field-item\" *ngIf=\"!field.forms || field.forms.length===0\">\r\n  <button class=\"transparent-button setting\" mat-raised-button (click)=\"$event.stopPropagation();editBLock($event)\">\r\n    <mat-icon class=\"setting-icon\">settings</mat-icon>\r\n  </button>\r\n  <button *ngIf=\"field.isConditional\" matTooltip=\"Cliquer pour regarder la condition appliqu\u00E9e \u00E0 ce champ!\"\r\n    class=\"transparent-button conditional-view\" [ngStyle]=\"onChangePosition(field.type)\" mat-raised-button\r\n    (click)=\"$event.stopPropagation();editBLock($event)\">\r\n    <mat-icon class=\"setting-icon\">info_outlined</mat-icon>\r\n  </button>\r\n  <ng-container [ngSwitch]=\"field.type\">\r\n    <div *ngSwitchCase=\"'toggle'\" class=\"flex-auto field-size toggle-button\">\r\n      <span>{{ field.label }}</span>\r\n      <mat-slide-toggle class=\"form-field\" [(ngModel)]=\"field.defaultValue\" [ngModelOptions]=\"{ standalone: true }\"\r\n        [ngStyle]=\"field.selector && { display: 'inine-block' }\">\r\n      </mat-slide-toggle>\r\n    </div>\r\n    <div *ngSwitchCase=\"'tel'\" class=\"form-field full-width tel-input\">\r\n      <mat-label class=\"tel-label\">{{field.label}}</mat-label>\r\n      <ngx-intl-tel-input id=\"onboarding-phone-input\" class=\"phone-input-profile\" [cssClass]=\"'input-phone'\"\r\n        [preferredCountries]=\"preferredCountries\" [enableAutoCountrySelect]=\"false\" [enablePlaceholder]=\"true\"\r\n        [customPlaceholder]=\"'Phone'\" [selectFirstCountry]=\"false\" [selectedCountryISO]=\"flag(field.value)\"\r\n        [maxLength]=\"15\" [inputId]=\"field.key\" [phoneValidation]=\"true\" [separateDialCode]=\"separateDialCode\"\r\n        [numberFormat]=\"PhoneNumberFormat.National\" name=\"phone\" (input)=\"checkPhone(field.value)\"\r\n        [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.value\">\r\n      </ngx-intl-tel-input>\r\n      <mat-error *ngIf=\"invalideValue\">Le t\u00E9l\u00E9phone est invalide</mat-error>\r\n    </div>\r\n    <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto field-size\">\r\n      <mat-checkbox class=\"form-field\" [(ngModel)]=\"field.value\" [ngModelOptions]=\"{ standalone: true }\"\r\n        [ngStyle]=\"field.selector && { display: 'inine-block' }\">\r\n        {{ field.label }}\r\n      </mat-checkbox>\r\n      <mat-select placeholder=\"Company\" [(ngModel)]=\"field.selector.value\" [ngModelOptions]=\"{ standalone: true }\"\r\n        *ngIf=\"field.selector\" style=\"display: inline-block; width: 50%\">\r\n        <mat-option *ngFor=\"let select of field.selector.defaultValue\" [value]=\"select.value\"> {{ select.value }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </div>\r\n    <div *ngSwitchCase=\"'checkbox_multiple'\" class=\"flex-auto field-size\" style=\"width: 100%;\">\r\n      <label>{{ field.label }}</label>\r\n      <div style=\"margin-top: 20px\" class=\"onboarding-select\">\r\n        <mat-checkbox class=\"form-field\"\r\n          style=\"display: block; margin-bottom: 5px; margin-top: 10px; margin-right: 10px;\"\r\n          *ngFor=\"let opt of field.defaultValue\" [checked]=\"opt.checked\" [(ngModel)]=\"opt.checked\"\r\n          [ngModelOptions]=\"{ standalone: true }\">\r\n          {{ opt.value }}\r\n        </mat-checkbox>\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'radio'\" class=\"flex-auto field-size\">\r\n      <label style=\"display: block\"> {{ field.label }} </label>\r\n      <mat-radio-group class=\"form-field radio-group field-size onboarding-select\" [(ngModel)]=\"field.value\"\r\n        [required]=\"field.isMandatory\" aria-label=\"Select an option\">\r\n        <mat-radio-button *ngFor=\"let opt of field.defaultValue\" style=\"margin-bottom: 20px;\" [value]=\"opt.value\">{{\r\n          opt.value }} </mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n    <div *ngSwitchCase=\"'select'\" class=\"flex-auto field-size select-content\">\r\n      <mat-form-field class=\"mat-select flex-auto field-size\" appearance=\"outline\">\r\n        <mat-label> {{ field.label }} </mat-label>\r\n        <mat-select [(ngModel)]=\"field.value\" [ngModelOptions]=\"{ standalone: true }\">\r\n          <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">{{ opt.value }}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div *ngSwitchCase=\"'none'\" class=\"flex-auto field-size select-content\" style=\"opacity:0 ;\">\r\n      <mat-form-field class=\"mat-select flex-auto field-size\" appearance=\"outline\">\r\n        <mat-label></mat-label>\r\n        <input [type]=\"field.type\" disabled=\"true\" matInput />\r\n      </mat-form-field>\r\n    </div>\r\n    <mat-form-field *ngSwitchCase=\"'date'\" class=\"form-field field-size\" appearance=\"outline\">\r\n      <mat-label>{{field.label}}</mat-label>\r\n      <input matInput [matDatepicker]=\"picker\" [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"field.defaultValue\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n    <mat-form-field [class.blink]=\"blink\" *ngSwitchDefault class=\"form-field field-size\" appearance=\"outline\">\r\n      <mat-label>{{ field.label }}</mat-label>\r\n      <input [type]=\"field.type\" matInput [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"field.defaultValue\"\r\n        placeholder=\"\" />\r\n    </mat-form-field>\r\n  </ng-container>\r\n</div>\r\n\r\n<ng-content select=\".child\"></ng-content>", styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative;margin-top:10px}.field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.field-item .setting{position:absolute;top:-5px;right:-12px;z-index:1;background-color:#d5d6d7!important;border-radius:50px;width:40px!important;height:40px!important;display:none}.field-item .conditional-view{position:absolute;top:-28px;left:-9px;z-index:9;background-color:transparent!important;border-radius:50px;width:40px!important;height:40px!important}.field-item:hover .setting{display:block}.field-item:hover .conditional-view{background-color:#d5d6d7!important}.field-action{width:10%}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}::ng-deep .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.expand-button .material-icons{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition{position:relative}.checkbox-condition .condition-container{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition .condition-container button{position:absolute;bottom:5px;left:0}.condition-help{cursor:pointer}.cdk-overlay-pane{width:100%}.child{margin-left:0}.child .cdk-drop-list{display:flex;flex-wrap:wrap}.toggle-button{display:flex;align-items:center}.toggle-button span{margin-right:10px}.onboarding-select{display:grid;grid-template-columns:repeat(6,1fr)}::ng-deep .country-dropdown{min-width:unset!important}::ng-deep .tel-input{position:relative}::ng-deep .tel-input .tel-label{font-size:12px;color:#0009;position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-7px}::ng-deep .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;width:100%}::ng-deep .phone-input-profile .iti{width:100%!important}::ng-deep .phone-input-profile input{outline:none;padding:19px;border-radius:5px;border-color:#0000001f;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}::ng-deep .blink{animation:blink 1s ease-out}::ng-deep .blink.mat-form-field-appearance-outline .mat-form-field-outline{border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;color:#242731!important}@keyframes blink{0%{opacity:0}10%{opacity:.1}20%{opacity:.2}30%{opacity:.3}40%{opacity:.4}50%{opacity:.5}60%{opacity:.6}70%{opacity:.7}80%{opacity:.8}90%{opacity:.9}to{opacity:1}}\n"], dependencies: [{ kind: "directive", type: i1$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2$1.MatError, selector: "mat-error", inputs: ["id"] }, { kind: "component", type: i2$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2$1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2$1.MatSuffix, selector: "[matSuffix]" }, { kind: "component", type: i5.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i4$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i4$1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i4$1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i4$1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: i4$2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "component", type: i6$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i7.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i1$3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i10.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i10.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "directive", type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "component", type: i9.NgxIntlTelInputComponent, selector: "ngx-intl-tel-input", inputs: ["value", "preferredCountries", "enablePlaceholder", "numberFormat", "cssClass", "onlyCountries", "enableAutoCountrySelect", "searchCountryFlag", "searchCountryField", "searchCountryPlaceholder", "maxLength", "selectFirstCountry", "phoneValidation", "inputId", "separateDialCode", "customPlaceholder", "selectedCountryISO"], outputs: ["countryChange"] }, { kind: "directive", type: i9.NativeElementInjectorDirective, selector: "[ngModel], [formControl], [formControlName]" }, { kind: "component", type: i13.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }, { kind: "component", type: i14.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i14.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i14.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: SubTemplateProfileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-sub-category', template: "<div class=\"field-item\" *ngIf=\"!field.forms || field.forms.length===0\">\r\n  <button class=\"transparent-button setting\" mat-raised-button (click)=\"$event.stopPropagation();editBLock($event)\">\r\n    <mat-icon class=\"setting-icon\">settings</mat-icon>\r\n  </button>\r\n  <button *ngIf=\"field.isConditional\" matTooltip=\"Cliquer pour regarder la condition appliqu\u00E9e \u00E0 ce champ!\"\r\n    class=\"transparent-button conditional-view\" [ngStyle]=\"onChangePosition(field.type)\" mat-raised-button\r\n    (click)=\"$event.stopPropagation();editBLock($event)\">\r\n    <mat-icon class=\"setting-icon\">info_outlined</mat-icon>\r\n  </button>\r\n  <ng-container [ngSwitch]=\"field.type\">\r\n    <div *ngSwitchCase=\"'toggle'\" class=\"flex-auto field-size toggle-button\">\r\n      <span>{{ field.label }}</span>\r\n      <mat-slide-toggle class=\"form-field\" [(ngModel)]=\"field.defaultValue\" [ngModelOptions]=\"{ standalone: true }\"\r\n        [ngStyle]=\"field.selector && { display: 'inine-block' }\">\r\n      </mat-slide-toggle>\r\n    </div>\r\n    <div *ngSwitchCase=\"'tel'\" class=\"form-field full-width tel-input\">\r\n      <mat-label class=\"tel-label\">{{field.label}}</mat-label>\r\n      <ngx-intl-tel-input id=\"onboarding-phone-input\" class=\"phone-input-profile\" [cssClass]=\"'input-phone'\"\r\n        [preferredCountries]=\"preferredCountries\" [enableAutoCountrySelect]=\"false\" [enablePlaceholder]=\"true\"\r\n        [customPlaceholder]=\"'Phone'\" [selectFirstCountry]=\"false\" [selectedCountryISO]=\"flag(field.value)\"\r\n        [maxLength]=\"15\" [inputId]=\"field.key\" [phoneValidation]=\"true\" [separateDialCode]=\"separateDialCode\"\r\n        [numberFormat]=\"PhoneNumberFormat.National\" name=\"phone\" (input)=\"checkPhone(field.value)\"\r\n        [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.value\">\r\n      </ngx-intl-tel-input>\r\n      <mat-error *ngIf=\"invalideValue\">Le t\u00E9l\u00E9phone est invalide</mat-error>\r\n    </div>\r\n    <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto field-size\">\r\n      <mat-checkbox class=\"form-field\" [(ngModel)]=\"field.value\" [ngModelOptions]=\"{ standalone: true }\"\r\n        [ngStyle]=\"field.selector && { display: 'inine-block' }\">\r\n        {{ field.label }}\r\n      </mat-checkbox>\r\n      <mat-select placeholder=\"Company\" [(ngModel)]=\"field.selector.value\" [ngModelOptions]=\"{ standalone: true }\"\r\n        *ngIf=\"field.selector\" style=\"display: inline-block; width: 50%\">\r\n        <mat-option *ngFor=\"let select of field.selector.defaultValue\" [value]=\"select.value\"> {{ select.value }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </div>\r\n    <div *ngSwitchCase=\"'checkbox_multiple'\" class=\"flex-auto field-size\" style=\"width: 100%;\">\r\n      <label>{{ field.label }}</label>\r\n      <div style=\"margin-top: 20px\" class=\"onboarding-select\">\r\n        <mat-checkbox class=\"form-field\"\r\n          style=\"display: block; margin-bottom: 5px; margin-top: 10px; margin-right: 10px;\"\r\n          *ngFor=\"let opt of field.defaultValue\" [checked]=\"opt.checked\" [(ngModel)]=\"opt.checked\"\r\n          [ngModelOptions]=\"{ standalone: true }\">\r\n          {{ opt.value }}\r\n        </mat-checkbox>\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'radio'\" class=\"flex-auto field-size\">\r\n      <label style=\"display: block\"> {{ field.label }} </label>\r\n      <mat-radio-group class=\"form-field radio-group field-size onboarding-select\" [(ngModel)]=\"field.value\"\r\n        [required]=\"field.isMandatory\" aria-label=\"Select an option\">\r\n        <mat-radio-button *ngFor=\"let opt of field.defaultValue\" style=\"margin-bottom: 20px;\" [value]=\"opt.value\">{{\r\n          opt.value }} </mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n    <div *ngSwitchCase=\"'select'\" class=\"flex-auto field-size select-content\">\r\n      <mat-form-field class=\"mat-select flex-auto field-size\" appearance=\"outline\">\r\n        <mat-label> {{ field.label }} </mat-label>\r\n        <mat-select [(ngModel)]=\"field.value\" [ngModelOptions]=\"{ standalone: true }\">\r\n          <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">{{ opt.value }}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div *ngSwitchCase=\"'none'\" class=\"flex-auto field-size select-content\" style=\"opacity:0 ;\">\r\n      <mat-form-field class=\"mat-select flex-auto field-size\" appearance=\"outline\">\r\n        <mat-label></mat-label>\r\n        <input [type]=\"field.type\" disabled=\"true\" matInput />\r\n      </mat-form-field>\r\n    </div>\r\n    <mat-form-field *ngSwitchCase=\"'date'\" class=\"form-field field-size\" appearance=\"outline\">\r\n      <mat-label>{{field.label}}</mat-label>\r\n      <input matInput [matDatepicker]=\"picker\" [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"field.defaultValue\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n    <mat-form-field [class.blink]=\"blink\" *ngSwitchDefault class=\"form-field field-size\" appearance=\"outline\">\r\n      <mat-label>{{ field.label }}</mat-label>\r\n      <input [type]=\"field.type\" matInput [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"field.defaultValue\"\r\n        placeholder=\"\" />\r\n    </mat-form-field>\r\n  </ng-container>\r\n</div>\r\n\r\n<ng-content select=\".child\"></ng-content>", styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative;margin-top:10px}.field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.field-item .setting{position:absolute;top:-5px;right:-12px;z-index:1;background-color:#d5d6d7!important;border-radius:50px;width:40px!important;height:40px!important;display:none}.field-item .conditional-view{position:absolute;top:-28px;left:-9px;z-index:9;background-color:transparent!important;border-radius:50px;width:40px!important;height:40px!important}.field-item:hover .setting{display:block}.field-item:hover .conditional-view{background-color:#d5d6d7!important}.field-action{width:10%}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}::ng-deep .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.expand-button .material-icons{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition{position:relative}.checkbox-condition .condition-container{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition .condition-container button{position:absolute;bottom:5px;left:0}.condition-help{cursor:pointer}.cdk-overlay-pane{width:100%}.child{margin-left:0}.child .cdk-drop-list{display:flex;flex-wrap:wrap}.toggle-button{display:flex;align-items:center}.toggle-button span{margin-right:10px}.onboarding-select{display:grid;grid-template-columns:repeat(6,1fr)}::ng-deep .country-dropdown{min-width:unset!important}::ng-deep .tel-input{position:relative}::ng-deep .tel-input .tel-label{font-size:12px;color:#0009;position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-7px}::ng-deep .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;width:100%}::ng-deep .phone-input-profile .iti{width:100%!important}::ng-deep .phone-input-profile input{outline:none;padding:19px;border-radius:5px;border-color:#0000001f;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}::ng-deep .blink{animation:blink 1s ease-out}::ng-deep .blink.mat-form-field-appearance-outline .mat-form-field-outline{border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;color:#242731!important}@keyframes blink{0%{opacity:0}10%{opacity:.1}20%{opacity:.2}30%{opacity:.3}40%{opacity:.4}50%{opacity:.5}60%{opacity:.6}70%{opacity:.7}80%{opacity:.8}90%{opacity:.9}to{opacity:1}}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { field: [{
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
            }] } });

class LoadingPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: LoadingPageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LoadingPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: LoadingPageComponent, selector: "lib-loading-page", ngImport: i0, template: "<!-- <div class=\"container\">\n  <svg class=\"loader\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 340 340\">\n    <circle cx=\"170\" cy=\"170\" r=\"160\" stroke=\"#9d107d\" />\n    <circle cx=\"170\" cy=\"170\" r=\"135\" stroke=\"#4862ab\" />\n    <circle cx=\"170\" cy=\"170\" r=\"110\" stroke=\"#9d107d\" />\n    <circle cx=\"170\" cy=\"170\" r=\"85\" stroke=\"#4862ab\" />\n  </svg>\n</div> -->\n\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"display:block;\" width=\"30px\"\n  height=\"30px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\n  <g transform=\"rotate(0 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9523809523809523s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(17.142857142857142 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9047619047619048s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(34.285714285714285 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8571428571428571s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(51.42857142857143 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8095238095238095s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(68.57142857142857 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7619047619047619s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(85.71428571428571 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7142857142857143s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(102.85714285714286 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6666666666666666s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(120 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6190476190476191s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(137.14285714285714 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5714285714285714s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(154.28571428571428 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5238095238095238s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(171.42857142857142 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.47619047619047616s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(188.57142857142858 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.42857142857142855s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(205.71428571428572 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.38095238095238093s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(222.85714285714286 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3333333333333333s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(240 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.2857142857142857s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(257.14285714285717 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.23809523809523808s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(274.2857142857143 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.19047619047619047s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(291.42857142857144 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.14285714285714285s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(308.57142857142856 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.09523809523809523s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(325.7142857142857 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.047619047619047616s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(342.85714285714283 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\">\n      </animate>\n    </rect>\n  </g>\n</svg>", styles: [".container{display:flex;align-items:center;justify-content:center;height:100vh;width:100vw;background-color:#00000068;z-index:999;position:fixed;top:0;left:0}.loader{max-width:15rem;width:100px;height:auto;stroke-linecap:round}circle{fill:none;stroke-width:3.5;animation-name:preloader;animation-duration:3s;animation-iteration-count:infinite;animation-timing-function:ease-in-out;transform-origin:170px 170px;will-change:transform}circle:nth-of-type(1){stroke-dasharray:550px}circle:nth-of-type(2){stroke-dasharray:500px}circle:nth-of-type(3){stroke-dasharray:450px}circle:nth-of-type(4){stroke-dasharray:300px}circle:nth-of-type(1){animation-delay:-.15s}circle:nth-of-type(2){animation-delay:-.3s}circle:nth-of-type(3){animation-delay:-.45s}circle:nth-of-type(4){animation-delay:-.6s}@keyframes preloader{50%{transform:rotate(360deg)}}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: LoadingPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-loading-page', template: "<!-- <div class=\"container\">\n  <svg class=\"loader\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 340 340\">\n    <circle cx=\"170\" cy=\"170\" r=\"160\" stroke=\"#9d107d\" />\n    <circle cx=\"170\" cy=\"170\" r=\"135\" stroke=\"#4862ab\" />\n    <circle cx=\"170\" cy=\"170\" r=\"110\" stroke=\"#9d107d\" />\n    <circle cx=\"170\" cy=\"170\" r=\"85\" stroke=\"#4862ab\" />\n  </svg>\n</div> -->\n\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"display:block;\" width=\"30px\"\n  height=\"30px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\n  <g transform=\"rotate(0 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9523809523809523s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(17.142857142857142 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9047619047619048s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(34.285714285714285 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8571428571428571s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(51.42857142857143 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8095238095238095s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(68.57142857142857 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7619047619047619s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(85.71428571428571 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7142857142857143s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(102.85714285714286 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6666666666666666s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(120 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6190476190476191s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(137.14285714285714 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5714285714285714s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(154.28571428571428 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5238095238095238s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(171.42857142857142 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.47619047619047616s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(188.57142857142858 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.42857142857142855s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(205.71428571428572 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.38095238095238093s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(222.85714285714286 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3333333333333333s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(240 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.2857142857142857s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(257.14285714285717 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.23809523809523808s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(274.2857142857143 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.19047619047619047s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(291.42857142857144 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.14285714285714285s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(308.57142857142856 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.09523809523809523s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(325.7142857142857 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.047619047619047616s\"\n        repeatCount=\"indefinite\"></animate>\n    </rect>\n  </g>\n  <g transform=\"rotate(342.85714285714283 50 50)\">\n    <rect x=\"47.5\" y=\"25\" rx=\"2.5\" ry=\"3.7\" width=\"5\" height=\"10\" fill=\"#971c84\">\n      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\">\n      </animate>\n    </rect>\n  </g>\n</svg>", styles: [".container{display:flex;align-items:center;justify-content:center;height:100vh;width:100vw;background-color:#00000068;z-index:999;position:fixed;top:0;left:0}.loader{max-width:15rem;width:100px;height:auto;stroke-linecap:round}circle{fill:none;stroke-width:3.5;animation-name:preloader;animation-duration:3s;animation-iteration-count:infinite;animation-timing-function:ease-in-out;transform-origin:170px 170px;will-change:transform}circle:nth-of-type(1){stroke-dasharray:550px}circle:nth-of-type(2){stroke-dasharray:500px}circle:nth-of-type(3){stroke-dasharray:450px}circle:nth-of-type(4){stroke-dasharray:300px}circle:nth-of-type(1){animation-delay:-.15s}circle:nth-of-type(2){animation-delay:-.3s}circle:nth-of-type(3){animation-delay:-.45s}circle:nth-of-type(4){animation-delay:-.6s}@keyframes preloader{50%{transform:rotate(360deg)}}\n"] }]
        }], ctorParameters: function () { return []; } });

const PROFILE_CATEGORIES_KEY = 'profileCategories';
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
        this.locale = {};
        this.liveLabel = this.locale.PUBLISH_PROFIL;
        this.draftLabel = this.locale.REGISTER_DRAFT;
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
        this.onCreateKey = (name) => name.replace(/\s/g, '');
        this.service._lang.subscribe((locale) => {
            this.locale = locales[locale].PROFILE;
            this.liveLabel = this.locale.PUBLISH_PROFIL;
            this.draftLabel = this.locale.REGISTER_DRAFT;
        });
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
                data: '',
                panelClass: 'modal-medium'
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
                    this.getProfileCategories();
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
    getProfileCategories() {
        if (sessionStorage.getItem(PROFILE_CATEGORIES_KEY)) {
            this.categories = JSON.parse(sessionStorage.getItem(PROFILE_CATEGORIES_KEY));
        }
        else {
            this.categories = this.currentProfil.categories.map((data) => (Object.assign(Object.assign({}, data), { key: data.key || data.name.replace(/\s/g, '') })));
        }
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
    onChangeKey(editBlok) {
        if (editBlok.editable) {
            editBlok.key = this.onCreateKey(editBlok.label);
        }
    }
    onAddNewField(...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 1 ? this.categories[params[0]].forms : length === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        const data = {
            label: `Label à renommer (${forms.length + 1})`,
            key: this.onCreateKey(`Label à renommer (${forms.length + 1})`),
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
            label: `Label à renommer (${forms.length + 1})`,
            key: `Label à renommer (${forms.length + 1})`,
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
                sessionStorage.removeItem(PROFILE_CATEGORIES_KEY);
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
        this.getConditionValues();
    }
    removeKeyword(keyword, ...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.defaultValue = forms.defaultValue.filter((option) => option.value !== keyword.value);
        this.getConditionValues();
    }
    scrollTo(category, i) {
        this.onActiveMenu(category, i);
        if (!category.expandMore) {
            let el = document.getElementById(category.name);
            el === null || el === void 0 ? void 0 : el.scrollIntoView({
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
    dropField(event) {
        const containerData = event.container.data;
        const previousContainerData = event.previousContainer.data;
        const category = containerData.category;
        category.forms[previousContainerData.index] = containerData.field;
        category.forms[containerData.index] = previousContainerData.field;
        this.saveCategoriesToSessionStorage();
    }
    saveCategoriesToSessionStorage() {
        sessionStorage.setItem(PROFILE_CATEGORIES_KEY, JSON.stringify(this.categories));
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
        var _a, _b, _c;
        console.log('condition', (_a = this.conditionData[level]) === null || _a === void 0 ? void 0 : _a.find((data) => data.key === value));
        const condition = this.conditionData[level] ? (_b = this.conditionData[level]) === null || _b === void 0 ? void 0 : _b.find((data) => data.key === value) : null;
        if (level === "all") {
            this.conditionData = Object.assign(Object.assign({}, this.conditionData), { s1: [], s2: [], s3: [], defaultValue: [] });
        }
        this.currentEditBlock.condition = condition;
        this.onGetDefaultValue();
        if (condition && ((_c = condition === null || condition === void 0 ? void 0 : condition.forms) === null || _c === void 0 ? void 0 : _c.length) > 0) {
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        this.isBlock = true;
        this.currentEditBlock = block;
        const { condition } = this.currentEditBlock;
        this.getConditionValues();
        if (condition && condition.location) {
            const location = condition.location;
            if ((location === null || location === void 0 ? void 0 : location.s0Index) >= 0) {
                this.all = this.categories[location.s0Index].key;
            }
            if ((location === null || location === void 0 ? void 0 : location.s1Index) >= 0) {
                const s1 = this.categories[location.s0Index];
                this.s1 = (s1 === null || s1 === void 0 ? void 0 : s1.forms[location.s1Index].key) || s1.key;
                this.conditionData.s1 = ((_b = (_a = this.conditionData) === null || _a === void 0 ? void 0 : _a.all[location.s0Index]) === null || _b === void 0 ? void 0 : _b.forms) || [];
            }
            if ((location === null || location === void 0 ? void 0 : location.s2Index) >= 0) {
                const s2 = (_c = this.categories[location.s0Index]) === null || _c === void 0 ? void 0 : _c.forms[location.s1Index];
                this.s2 = ((_d = s2 === null || s2 === void 0 ? void 0 : s2.forms[location.s2Index]) === null || _d === void 0 ? void 0 : _d.key) || s2.key;
                this.conditionData.s2 = ((_e = this.conditionData) === null || _e === void 0 ? void 0 : _e.all[location.s0Index].forms[location.s1Index].forms) || [];
            }
            if ((location === null || location === void 0 ? void 0 : location.s3Index) >= 0) {
                const s3 = (_g = (_f = this.categories[location.s0Index]) === null || _f === void 0 ? void 0 : _f.forms[location.s1Index]) === null || _g === void 0 ? void 0 : _g.forms[location.s2Index];
                this.s3 = ((_h = s3 === null || s3 === void 0 ? void 0 : s3.forms[location.s3Index]) === null || _h === void 0 ? void 0 : _h.key) || s3.key;
                this.conditionData.s3 = ((_j = this.conditionData) === null || _j === void 0 ? void 0 : _j.all[location.s0Index].forms[location.s1Index].forms[location.s2Index]) || [];
            }
            if ((location === null || location === void 0 ? void 0 : location.s4Index) >= 0) {
                const s4 = (_m = (_l = (_k = this.categories[location.s0Index]) === null || _k === void 0 ? void 0 : _k.forms[location.s1Index]) === null || _l === void 0 ? void 0 : _l.forms[location.s2Index]) === null || _m === void 0 ? void 0 : _m.forms[location.s3Index];
                this.s4 = ((_o = s4 === null || s4 === void 0 ? void 0 : s4.forms[location.s4Index]) === null || _o === void 0 ? void 0 : _o.key) || s4.key;
            }
        }
        else {
            this.all = "";
            this.s1 = '';
            this.s2 = "";
            this.s3 = "";
            this.s4 = "";
            this.conditionData = Object.assign(Object.assign({}, this.conditionData), { s1: [], s2: [], s3: [], defaultValue: [] });
        }
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
                    field.defaultValue.push({ value: value.trim().slice(0, 15), checked: false });
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
TemplateProfileCreateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: TemplateProfileCreateComponent, deps: [{ token: i1$2.UntypedFormBuilder }, { token: OnboardingService }, { token: i2.ActivatedRoute }, { token: i2.Router }, { token: i1$1.MatDialog }, { token: i5$1.ScrollToService }], target: i0.ɵɵFactoryTarget.Component });
TemplateProfileCreateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: TemplateProfileCreateComponent, selector: "onboarding-create-profile-template", host: { listeners: { "scroll": "onScroll($event)" } }, ngImport: i0, template: "<main>\r\n  <div class=\"header-create-profile\">\r\n    <div class=\"header-create-profile-top\">\r\n      <h3>\r\n        <span>{{ form.get(\"Name\").value }}</span>\r\n        <mat-icon (click)=\"openDialog()\">edit</mat-icon>\r\n      </h3>\r\n      <div class=\"create-profile-action\">\r\n        <button mat-button class=\"register-button\" type=\"submit\" (click)=\"onSubmit(false)\">\r\n          <lib-loading-page *ngIf=\"loading && !isSubmitted\"></lib-loading-page>{{draftLabel}}\r\n        </button>\r\n        <button mat-button class=\"register-button live-button\" type=\"submit\" (click)=\"onSubmit(true)\">\r\n          <lib-loading-page *ngIf=\"loading && isSubmitted\"></lib-loading-page>\r\n          {{liveLabel}}\r\n        </button>\r\n\r\n        <button [disabled]=\"currentCanceledIndex < 0 || historics.length===0\" mat-button\r\n          class=\"register-button live-button forward\" type=\"submit\" (click)=\"onCancel(true)\">\r\n          <mat-icon>rotate_left</mat-icon>\r\n        </button>\r\n        <button [disabled]=\"currentCanceledIndex===historics.length-1 || currentCanceledIndex===null\" mat-button\r\n          class=\"register-button live-button forward\" type=\"submit\" (click)=\"onCancel(false)\">\r\n          <mat-icon>rotate_right</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"create-profile-menus\">\r\n      <ul>\r\n        <li class=\"li-title\" [class]=\"editIndex === i ? 'active' : ''\" *ngFor=\"let cat of categories; let i = index\"\r\n          (click)=\"scrollTo(cat, i)\" [id]=\"cat.name+'x'\">\r\n          <!-- (click)=\"onActiveMenu(cat, i,true)\" [ngxScrollTo]=\"'#' + cat.name\" [id]=\"cat.name+'x'\"> -->\r\n          {{ cat.name }}\r\n        </li>\r\n        <li>\r\n          <button mat-mini-fab color=\"transparent\" (click)=\"onAddNewCategory($event)\">\r\n            <mat-icon>add</mat-icon>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"category\" cdkDropListGroup>\r\n      <div class=\"fields\">\r\n        <div cdkDropList (cdkDropListDropped)=\"drop($event)\" [cdkDropListData]=\"categories\"\r\n          class=\"fields-inner example-list mt-10\" id=\"categories-id\" (scroll)=\"onScroll($event)\">\r\n          <section class=\"category-item section-item\" *ngFor=\"let category of categories; let i = index\" cdkDrag\r\n            [id]=\"category.name\" [style.paddingBottom]=\"category.expandMore ? '50px' : '10px'\"\r\n            [class]=\"editIndex === i ? 'active' : ''\" (click)=\"scrollTo(category, i)\">\r\n            <!-- [class]=\"editIndex === i ? 'active' : ''\" [ngxScrollTo]=\"'#' + category.name\"> -->\r\n            <div class=\"left-action move-icons\" cdkDragHandle>\r\n              <button class=\"transparent-button\" mat-raised-button\r\n                (click)=\"$event.preventDefault();$event.stopPropagation()\">\r\n                <mat-icon class=\"drag-icon\">drag_indicator</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div class=\"field-content\">\r\n              <div class=\"field-item\">\r\n                <!-- <div class=\"field-item\" (click)=\" onExpendMore({ event: $event, field: category }, i)\"> -->\r\n                <div>\r\n                  <p class=\"full-width input-category-name\">\r\n                    {{ category.name }}\r\n                  </p>\r\n                  <p class=\"sub-category-name\">\r\n                    {{locale?.CATEGORY_SUBTITLE}} {{ catNameStart(category.name) ? \"l'\" +\r\n                    category.name : category.name }}\r\n                  </p>\r\n                </div>\r\n                <button mat-mini-fab color=\"primary\" class=\"expand-button\"\r\n                  (click)=\"$event.stopPropagation();onExpendMore({ event: $event, field: category }, i)\">\r\n                  <mat-icon *ngIf=\"!category.expandMore\">chevron_right</mat-icon>\r\n                  <mat-icon *ngIf=\"category.expandMore\">expand_more</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div class=\"child-list\" *ngIf=\"category.forms\" cdkDropListGroup>\r\n                <ng-container *ngIf=\"category.expandMore\">\r\n                  <ng-container *ngFor=\"let field of category.forms; let j = index\">\r\n                    <div class=\"field-box\" [id]=\"field.key\" cdkDropList cdkDropListOrientation=\"horizontal'\"\r\n                      (cdkDropListDropped)=\"dropField($event)\"\r\n                      [cdkDropListData]=\"{ field: field, index: j, category: category }\"\r\n                      [style.width]=\"field.forms && field.forms.length>0 ? '100%' : fieldWidth(field.type,category.forms.length,j)\">\r\n                      <div cdkDrag class=\"dnd-box\">\r\n                        <div class=\"dnd-placeholder\" *cdkDragPlaceholder></div>\r\n                        <div class=\"fields-content\"\r\n                          [class]=\"field.forms && field.forms.length>0 ? 'sub-category-forms' :''\">\r\n                          <div class=\"button-action\" *ngIf=\"field.forms\">\r\n                            <button class=\"transparent-button\" mat-raised-button\r\n                              (click)=\"$event.stopPropagation();$event.preventDefault()\">\r\n                              <mat-icon class=\"drag-icon\">drag_indicator</mat-icon>\r\n                            </button>\r\n                          </div>\r\n                          <div class=\"fields-container\">\r\n                            <div class=\"sub-header\" *ngIf=\"field.forms\">\r\n                              <div class=\"field-item\">\r\n                                <div>\r\n                                  <p class=\"full-width input-category-name\">\r\n                                    {{ field.label }}\r\n                                  </p>\r\n                                  <p class=\"sub-category-name\">\r\n                                    {{locale?.CATEGORY_SUBTITLE}}\r\n                                    {{ catNameStart(field.label) ? \"l'\" + field.label : field.label }}\r\n                                  </p>\r\n                                </div>\r\n                                <button class=\"transparent-button setting\" mat-raised-button\r\n                                  (click)=\"$event.stopPropagation();onEditBlock(field, i, j)\">\r\n                                  <mat-icon class=\"setting-icon\">settings</mat-icon>\r\n                                </button>\r\n                                <button class=\"expand-button\" [disabled]=\"!(field.forms && field.forms.length > 0)\"\r\n                                  [style.opacity]=\"field.forms && field.forms.length > 0 ? 1 : 0\" mat-mini-fab\r\n                                  color=\"primary\"\r\n                                  (click)=\"$event.stopPropagation();onExpendMore({ event: $event, field: field }, i, j)\">\r\n                                  <mat-icon *ngIf=\"!field.expandMore\">expand_less </mat-icon>\r\n                                  <mat-icon *ngIf=\"field.expandMore\">expand_more </mat-icon>\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                            <lib-sub-category [field]=\"field\" [length]=\"category?.forms?.length\" [i]=\"i\" [j]=\"j\"\r\n                              [blink]=\"checkBlink(j,1)===newFieldIndex\" (onCheckValue)=\"onCheckValue($event)\"\r\n                              (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j)\"\r\n                              (onKeyPress)=\"onKeyPress($event.event, i, j)\" (onAddNewField)=\"onAddNewField(i)\"\r\n                              (onRemoveField)=\"onRemoveField(i, j)\" (onChangeType)=\"onChangeType(field.type, i, j)\"\r\n                              (onRemoveKeyword)=\"removeKeyword($event.event, i, j)\"\r\n                              (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j)\"\r\n                              (onExpendMore)=\"onExpendMore($event, i, j)\" (onChangeLabel)=\"onChangeLabel($event, i, j)\"\r\n                              (onCheckedChip)=\"onCheckedChip($event, i, j)\" (onDrop)=\"drop($event)\"\r\n                              (onCheckedDefault)=\"onCheckedDefault($event, i, j)\"\r\n                              (onEditBlock)=\"onEditBlock(field, i, j)\" [conditionData]=\"conditionData\">\r\n                              <div *ngIf=\"field.expandMore\" class=\"child\">\r\n                                <div #childList=\"cdkDropList\" class=\"child-content\" *ngIf=\"field.forms\"\r\n                                  [cdkDropListData]=\"field.forms\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\r\n                                  <div class=\"\" style=\"margin-bottom: 20px\"\r\n                                    *ngFor=\"let child of field.forms; let k = index\" [id]=\"child.key\"\r\n                                    [style.width]=\"child.forms && child.forms.length>0 ? '100%' : fieldWidth(child.type,field.forms.length,k)\">\r\n                                    <div cdkDrag>\r\n                                      <div class=\"fields-content\"\r\n                                        [class]=\"child.forms && child.forms.length>0 ? 'sub-category-forms' :''\">\r\n                                        <div class=\"button-action child-2-background\"\r\n                                          *ngIf=\"child.forms && child.forms.length>0\">\r\n                                          <button class=\"transparent-button\" mat-raised-button\r\n                                            (click)=\"$event.stopPropagation();$event.preventDefault()\">\r\n                                            <mat-icon class=\"drag-icon\"> drag_indicator</mat-icon>\r\n                                          </button>\r\n                                        </div>\r\n                                        <div class=\"fields-container\">\r\n                                          <div class=\"sub-header\" *ngIf=\"child.forms && child.forms.length>0\">\r\n                                            <div class=\"field-item\">\r\n                                              <div>\r\n                                                <input class=\"full-width input-category-name\" type=\"text\" required\r\n                                                  [readonly]=\"categories.length < 4 || !category.editable\"\r\n                                                  [readonly]=\"!category.editable\" [(ngModel)]=\"child.label\"\r\n                                                  [ngModelOptions]=\"{ standalone: true }\"\r\n                                                  placeholder=\"Saisir le nom de la sous cat\u00E9gorie\" />\r\n                                                <p class=\"sub-category-name\">\r\n                                                  {{locale?.CATEGORY_SUBTITLE}}\r\n                                                  {{ catNameStart(child.label) ? \"l'\" + child.label : child.label }}\r\n                                                </p>\r\n                                              </div>\r\n                                              <button class=\"transparent-button setting\" mat-raised-button\r\n                                                (click)=\"$event.stopPropagation();onEditBlock(child, i, j, k)\">\r\n                                                <mat-icon class=\"setting-icon\">settings</mat-icon>\r\n                                              </button>\r\n                                              <button class=\"expand-button\"\r\n                                                [disabled]=\"!(child.forms && child.forms.length > 0)\"\r\n                                                [style.opacity]=\"child.forms && child.forms.length > 0 ? 1 : 0\"\r\n                                                mat-mini-fab color=\"primary\"\r\n                                                (click)=\"$event.stopPropagation();onExpendMore({ event: $event, field: child }, i, j, k)\">\r\n                                                <mat-icon *ngIf=\"!child.expandMore\"> expand_less </mat-icon>\r\n                                                <mat-icon *ngIf=\"child.expandMore\"> expand_more </mat-icon>\r\n                                              </button>\r\n                                            </div>\r\n                                          </div>\r\n                                          <lib-sub-category [field]=\"child\" [length]=\"field?.forms?.length\" [i]=\"j\"\r\n                                            [blink]=\"checkBlink(k,2)===newFieldIndex\" [j]=\"k\"\r\n                                            (onCheckValue)=\"onCheckValue($event)\"\r\n                                            (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j, k)\"\r\n                                            (onKeyPress)=\"onKeyPress($event.event, i, j, k)\"\r\n                                            (onAddNewField)=\"onAddNewField(i, j)\"\r\n                                            (onRemoveField)=\"onRemoveField(i, j, k)\"\r\n                                            (onChangeType)=\"onChangeType(child.type, i, j, k)\"\r\n                                            (onRemoveKeyword)=\"removeKeyword($event.event, i, j, k)\"\r\n                                            (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j, k)\"\r\n                                            (onExpendMore)=\"onExpendMore($event, i, j, k)\"\r\n                                            (onChangeLabel)=\"onChangeLabel($event, i, j, k)\"\r\n                                            (onCheckedChip)=\"onCheckedChip($event, i, j, k)\" (onDrop)=\"drop($event)\"\r\n                                            (onCheckedDefault)=\"onCheckedDefault($event, i, j, k)\"\r\n                                            [conditionData]=\"conditionData\" (onEditBlock)=\"onEditBlock(child, i, j, k)\">\r\n                                            <div *ngIf=\"child.expandMore\" class=\"child\">\r\n                                              <div class=\"child-content\" #childList=\"cdkDropList\"\r\n                                                *ngIf=\"child.forms && child.forms.length>0\"\r\n                                                [cdkDropListData]=\"child.forms\" cdkDropList\r\n                                                (cdkDropListDropped)=\"drop($event)\">\r\n                                                <div class=\"\" *ngFor=\"let c2 of child.forms; let l = index\"\r\n                                                  [id]=\"c2.key\"\r\n                                                  [style.width]=\"c2.forms && c2.forms.length>0 ? '100%' : fieldWidth(c2.type,child.forms.length,l)\">\r\n                                                  <div cdkDrag>\r\n                                                    <div class=\"fields-content\"\r\n                                                      [class]=\"c2.forms && c2.forms.length>0 ? 'sub-category-forms' :''\">\r\n                                                      <div class=\"button-action child-3-background\"\r\n                                                        *ngIf=\"c2.forms && c2.forms.length>0\">\r\n                                                        <button class=\"transparent-button\" mat-raised-button\r\n                                                          (click)=\"$event.stopPropagation()\">\r\n                                                          <mat-icon class=\"drag-icon\"> drag_indicator </mat-icon>\r\n                                                        </button>\r\n                                                      </div>\r\n                                                      <div class=\"fields-container\">\r\n                                                        <lib-sub-category [field]=\"c2\" [length]=\"child?.forms?.length\"\r\n                                                          [blink]=\"checkBlink(l,3)===newFieldIndex\" [i]=\"k\" [j]=\"l\"\r\n                                                          (onCheckValue)=\"onCheckValue($event)\"\r\n                                                          (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j, k, l)\"\r\n                                                          (onKeyPress)=\"onKeyPress($event.event, i, j, k, l)\"\r\n                                                          (onAddNewField)=\"onAddNewField(i, j, k)\"\r\n                                                          (onRemoveField)=\"onRemoveField(i, j, k, l)\"\r\n                                                          (onChangeType)=\"onChangeType(c2.type, i, j, k, l)\"\r\n                                                          (onRemoveKeyword)=\"removeKeyword($event.event, i, j, k, l)\"\r\n                                                          (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j, k, l)\"\r\n                                                          (onExpendMore)=\"onExpendMore($event, i, j, k, l)\"\r\n                                                          (onChangeLabel)=\"onChangeLabel($event, i, j, k, l)\"\r\n                                                          (onCheckedChip)=\"onCheckedChip($event, i, j, k, l)\"\r\n                                                          (onDrop)=\"drop($event)\"\r\n                                                          (onCheckedDefault)=\"onCheckedDefault($event, i, j, k, l)\"\r\n                                                          (onEditBlock)=\"onEditBlock(c2, i, j, k, l)\"\r\n                                                          [conditionData]=\"conditionData\">\r\n                                                          <div class=\"child\"></div>\r\n                                                        </lib-sub-category>\r\n                                                      </div>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                  <div class=\"add-button-sub-category\"\r\n                                                    *ngIf=\"child?.forms?.length - 1 === l\">\r\n                                                    <button style=\"margin: 10px auto\" mat-raised-button color=\"primary\"\r\n                                                      (click)=\"$event.stopPropagation();onAddNewField(i, j, k)\">\r\n                                                      <span>{{locale?.ADD_FIELD}}</span>\r\n                                                      <mat-icon> add </mat-icon>\r\n                                                    </button>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </lib-sub-category>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"add-button-sub-category\" *ngIf=\"field?.forms?.length - 1 === k\">\r\n                                      <button style=\"margin: 10px auto\" mat-raised-button color=\"primary\"\r\n                                        (click)=\"$event.stopPropagation();onAddNewField(i, j)\">\r\n                                        <span>{{locale?.ADD_FIELD}}</span>\r\n                                        <mat-icon>add</mat-icon>\r\n                                      </button>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </lib-sub-category>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"add-button-container add-button-sub-category\"\r\n                        *ngIf=\"category?.forms?.length - 1 === j\">\r\n                        <button style=\"margin: 10px auto; padding:10px 0\" class=\"add-button\"\r\n                          [disabled]=\"category?.forms?.length - 1 !== j\"\r\n                          [style.opacity]=\"category?.forms?.length - 1 === j ? 1 : 0\" mat-raised-button color=\"primary\"\r\n                          (click)=\"$event.stopPropagation();onAddNewField(i)\">\r\n                          <span>{{locale?.ADD_FIELD}}</span>\r\n                          <mat-icon>add</mat-icon>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </ng-container>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n          </section>\r\n\r\n          <div class=\"add-button-container add-category-button add-step\">\r\n            <button (click)=\"onAddNewCategory($event)\">\r\n              {{locale?.ADD_STEP}}\r\n              <mat-icon>add</mat-icon>\r\n            </button>\r\n          </div>\r\n          <section style=\"background-color: transparent\">\r\n            <div style=\"height: 400px;\"></div>\r\n          </section>\r\n        </div>\r\n      </div>\r\n      <div class=\"field-property\">\r\n        <div class=\"property-content\" *ngIf=\"isBlock && currentEditBlock\">\r\n          <h3>{{locale?.SETTING_OF_BLOCK}} {{ currentEditBlock.label }}</h3>\r\n          <div class=\"property-content-inner\" style=\"width: 100%;\">\r\n            <mat-form-field class=\"form-field mat-select full-width\" style=\"cursor: pointer\" appearance=\"outline\">\r\n              <mat-label>{{locale?.TYPE_OF_BLOCK}}</mat-label>\r\n              <mat-select (click)=\"onOpenTypeDialog(currentEditBlock)\" disabled=\"true\" required\r\n                [(ngModel)]=\"currentEditBlock.type\" (ngModelChange)=\"onChangeTypeBlock(currentEditBlock)\"\r\n                [ngModelOptions]=\"{ standalone: true }\" class=\"select-type-class\">\r\n                <mat-option value=\"text\">Text(80)</mat-option>\r\n                <mat-option value=\"textarea\">Text(80+)</mat-option>\r\n                <mat-option value=\"radio\">Radio</mat-option>\r\n                <mat-option value=\"select\">Selector</mat-option>\r\n                <mat-option value=\"toggle\">Toggle</mat-option>\r\n                <mat-option value=\"checkbox\">Checkbox</mat-option>\r\n                <mat-option value=\"checkbox_multiple\">Checkbox multiple</mat-option>\r\n                <mat-option value=\"email\">Email</mat-option>\r\n                <mat-option value=\"password\">Password</mat-option>\r\n                <mat-option value=\"date\">Date</mat-option>\r\n                <mat-option value=\"tel\">Phone</mat-option>\r\n                <mat-option value=\"none\">None</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <ng-container *ngIf=\"currentEditBlock.type!=='none'\">\r\n              <mat-form-field class=\"form-field full-width\" appearance=\"outline\">\r\n                <mat-label>{{locale?.NAME_LABEL}}</mat-label>\r\n                <input type=\"text\" [(ngModel)]=\"currentEditBlock.label\" [disabled]=\"!currentEditBlock.editable\"\r\n                  (ngModelChange)=\"onChangeKey(currentEditBlock)\" [ngModelOptions]=\"{ standalone: true }\" matInput\r\n                  required placeholder=\"\" />\r\n              </mat-form-field>\r\n              <ng-container [ngSwitch]=\"currentEditBlock.type\">\r\n                <div *ngSwitchCase=\"'toggle'\" class=\"flex-auto\"\r\n                  style=\"display: flex;align-items: flex-end;margin: 10px 0;\">\r\n                  <mat-slide-toggle class=\"form-field\" color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.defaultValue\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                  </mat-slide-toggle>\r\n                  <span style=\"margin-left: 10px;\">{{locale?.DEFAULT_VALUE}}</span>\r\n                </div>\r\n                <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto\">\r\n                  <mat-checkbox class=\"form-field\" [(ngModel)]=\"currentEditBlock.value\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                    {{locale?.DEFAULT_CHECKED}}\r\n                  </mat-checkbox>\r\n                </div>\r\n                <mat-form-field *ngSwitchCase=\"\r\n                                ['select', 'radio', 'checkbox_multiple'].includes(currentEditBlock.type) ? currentEditBlock.type : !currentEditBlock.type\r\n                              \" class=\"flex-auto full-width\" appearance=\"outline\">\r\n                  <mat-label> {{locale?.DEFAULT_VALUE}} </mat-label>\r\n                  <mat-chip-list #childList=\"cdkDropList\" [cdkDropListData]=\"currentEditBlock.defaultValue\" cdkDropList\r\n                    (cdkDropListDropped)=\"drop($event)\" #chipList aria-label=\"Video keywords; let index=index\" multiple\r\n                    selectable>\r\n                    <mat-chip style=\"min-height: 25px;width: auto;\" *ngFor=\"let option of currentEditBlock.defaultValue\"\r\n                      [selected]=\"option.checked\" [value]=\"option.value\" [removable]=\"true\"\r\n                      (dblclick)=\"onCheckedChipBlock(option, currentEditBlock)\" (click)=\"onEditChip(option)\"\r\n                      (removed)=\"removeKeywordBlock(option, currentEditBlock)\" cdkDrag>\r\n                      {{ option.value }}\r\n                      <mat-icon matChipRemove>{{locale?.CANCEL}}</mat-icon>\r\n                    </mat-chip>\r\n                    <input #chipsInput placeholder=\"{{locale?.ADD}}\" [matChipInputFor]=\"chipList\" [matChipInputAddOnBlur]=\"true\"\r\n                      (matChipInputTokenEnd)=\"addKeywordFromInputBlock($event, currentEditBlock, prevValue)\"\r\n                      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                      (keyup)=\"onKeyUpChip($event, currentEditBlock)\" [(ngModel)]=\"currentChip\"\r\n                      [ngModelOptions]=\"{ standalone: true }\" />\r\n                  </mat-chip-list>\r\n                </mat-form-field>\r\n                <mat-form-field *ngSwitchCase=\"'textarea'\" class=\"form-field full-width\" appearance=\"outline\">\r\n                  <mat-label>{{locale?.DEFAULT_VALUE}}</mat-label>\r\n                  <input type=\"text\" matInput [ngModelOptions]=\"{ standalone: true }\"\r\n                    [(ngModel)]=\"currentEditBlock.defaultValue\" placeholder=\"Description...\" />\r\n                </mat-form-field>\r\n\r\n                <mat-form-field *ngSwitchDefault class=\"form-field full-width\"\r\n                  [style.opacity]=\"currentEditBlock.type !== 'tel' ? 1 : 0\" appearance=\"outline\">\r\n                  <mat-label>{{locale?.DEFAULT_VALUE}}</mat-label>\r\n                  <input [type]=\"currentEditBlock.type\" [disabled]=\"currentEditBlock.type === 'tel'\" matInput\r\n                    [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"currentEditBlock.defaultValue\"\r\n                    placeholder=\"\" />\r\n                </mat-form-field>\r\n              </ng-container>\r\n\r\n              <div class=\"mandatory top-10 bottom-10\">\r\n                <div class=\"toogle-button\">\r\n                  <span>{{locale?.REQUIRED}}</span>\r\n                  <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.isMandatory\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                  </mat-slide-toggle>\r\n                </div>\r\n              </div>\r\n              <div class=\"mandatory top-10\" [style]=\"!currentEditBlock.editable ? 'pointer-events:none;opacity:0.3':''\">\r\n                <div class=\"toogle-button\">\r\n                  <span>{{locale?.CONDITIONAL_VISIBILITY}}</span>\r\n                  <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.isConditional\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                  </mat-slide-toggle>\r\n                </div>\r\n              </div>\r\n              <ng-container *ngIf=\"currentEditBlock?.isConditional\">\r\n                <mat-form-field class=\"form-field mat-select full-width\" appearance=\"outline\">\r\n                  <mat-label>{{locale?.SELECT_CATEGORY}}</mat-label>\r\n                  <mat-select [(ngModel)]=\"all\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('all','s1', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.all\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field *ngIf=\"conditionData.s1?.length > 0\" class=\"form-field mat-select full-width\"\r\n                  appearance=\"outline\">\r\n                  <mat-label>{{locale?.SELECT_SUB_CATEGORY}} (s1)</mat-label>\r\n                  <mat-select [(ngModel)]=\"s1\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('s1','s2', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.s1\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"form-field mat-select full-width\" *ngIf=\"conditionData.s2?.length>0\"\r\n                  appearance=\"outline\">\r\n                  <mat-label>{{locale?.SELECT_SUB_CATEGORY}} (s2)</mat-label>\r\n                  <mat-select [(ngModel)]=\"s2\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('s2','s3', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.s2\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"form-field mat-select full-width\" *ngIf=\"conditionData.s3?.length>0\"\r\n                  appearance=\"outline\">\r\n                  <mat-label>{{locale?.SELECT_SUB_CATEGORY}} (s3)</mat-label>\r\n                  <mat-select [(ngModel)]=\"s3\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('s3','s4', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.s3\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </ng-container>\r\n\r\n              <mat-radio-group\r\n                *ngIf=\"currentEditBlock.isConditional && onGetDefaultValue() && onGetDefaultValue()?.length>0\"\r\n                aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\r\n                [(ngModel)]=\"currentEditBlock.condition.value\" [ngModelOptions]=\"{ standalone: true }\">\r\n                <mat-radio-button class=\"example-radio-button\" style=\"margin-right: 10px\"\r\n                  *ngFor=\"let item of onGetDefaultValue()\" [value]=\"item.value\">\r\n                  {{ item.value }}\r\n                </mat-radio-button>\r\n              </mat-radio-group>\r\n              <div class=\"bloc-action\">\r\n                <button *ngIf=\"paramsIndex.length<4\" mat-button [disabled]=\"!currentEditBlock.editable\"\r\n                  (click)=\"onAddNewSubLevelFieldBlock($event)\">{{locale?.SUB_CATEGORY}} <mat-icon>device_hub\r\n                  </mat-icon></button>\r\n                <button mat-button [disabled]=\"!currentEditBlock.editable\"\r\n                  (click)=\"onDuplicatedBlock($event)\">{{locale?.DUPLICATE_BLOCK}}<mat-icon>filter_none</mat-icon>\r\n                </button>\r\n                <button mat-button [disabled]=\"!currentEditBlock.editable\" class=\"delete-bloc\"\r\n                  (click)=\"onRemoveFieldBlock($event)\">{{locale?.DELETE_BLOCK}} <mat-icon>\r\n                    delete </mat-icon></button>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n        <div class=\"property-content\" *ngIf=\"isSection && currentEditBlock\">\r\n          <h3>{{locale?.SECTION_SETTING}} {{ currentEditBlock.name }}</h3>\r\n          <div class=\"property-content-inner\">\r\n            <mat-form-field class=\"form-field full-width\" appearance=\"outline\">\r\n              <mat-label>{{locale?.SECTION_NAME}}</mat-label>\r\n              <input (ngModelChange)=\"onChangeCategoryName()\" type=\"text\" matInput required placeholder=\"\"\r\n                [(ngModel)]=\"currentEditBlock.name\" [ngModelOptions]=\"{ standalone: true }\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"form-field mat-select full-width\" appearance=\"outline\">\r\n              <mat-label>{{locale?.MANAGEMENT_TEAM}}</mat-label>\r\n              <mat-select required [(ngModel)]=\"currentEditBlock.selector.value\"\r\n                [ngModelOptions]=\"{ standalone: true }\">\r\n                <mat-option [value]=\"item.value\" *ngFor=\"let item of currentEditBlock.selector.defaultValue\">{{\r\n                  item.value }}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <div class=\"bloc-action\">\r\n              <button mat-button (click)=\"onAddNewSubLevelFieldBlock($event)\">{{locale?.SUB_CATEGORY}} <mat-icon>\r\n                  device_hub\r\n                </mat-icon></button>\r\n              <button mat-button (click)=\"onDuplicatedBlock($event)\">{{locale?.DUPLICATE_BLOCK}}<mat-icon>filter_none\r\n                </mat-icon>\r\n              </button>\r\n              <button [disabled]=\"!currentEditBlock.editable\" mat-button class=\"delete-bloc\"\r\n                (click)=\"onRemoveFieldBlock($event)\">{{locale?.DELETE_BLOCK}} <mat-icon>\r\n                  delete</mat-icon></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</main>", styles: ["main{background:#f4f7f9 0% 0% no-repeat padding-box;height:100vh;display:flex;flex-direction:column;align-items:center;padding:25px}main .disabled label{background-color:transparent!important}main form{display:flex;height:89%;width:100%}main .box-title{width:786px;margin-top:20vh;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;align-self:center}main .box-title h3{text-align:center;letter-spacing:0px;color:#171f26}main .box-title label,main .box-title input{letter-spacing:0px;color:#171f26}main .box-title .profil-name-content{display:flex;align-items:center;position:relative}main .box-title .profil-name-content .add-picto{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main .box-title .profil-name-content .add-picto mat-icon{margin-right:10px}main .box-title .profil-name-content .list-picto{position:absolute;height:200px;width:100%;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main .box-title .profil-name-content .list-picto mat-icon{margin:15px;border:none;font-size:40px}main .box-title .profil-name-content .list-picto mat-icon:hover{color:#830b6b!important;cursor:pointer}main .box-title .box-title-content{width:100%;margin:25px auto}main .box-title .title{letter-spacing:0px;color:#171f26}main .box-title p{letter-spacing:0px;color:#171f26;text-align:center}main .box-title .link-create-profil{width:100%;display:flex;justify-content:center}main .box-title button{text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;letter-spacing:0px;color:#543cb6}main .action{width:100%;display:flex;justify-content:space-between}main .header-create-profile{width:100%;margin:10px 15px;border-radius:5px}main .header-create-profile .header-create-profile-top{display:flex;align-items:center;text-align:center;justify-content:space-between}main .header-create-profile .header-create-profile-top .create-profile-action{display:flex;align-items:center;gap:25px}main .header-create-profile h3{font-size:25px;padding-bottom:5px;display:flex;align-items:center;justify-content:center}main .header-create-profile h3 span{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;text-transform:capitalize}main .header-create-profile h3 mat-icon{margin-left:15px;cursor:pointer}main .header-create-profile .create-profile-menus{max-width:100%;overflow:auto}main .header-create-profile .create-profile-menus ul{font-weight:600;font-size:16px;list-style:none;display:flex;align-items:center;gap:20px;padding:0}main .header-create-profile .create-profile-menus ul li{font-weight:400;font-size:12px;cursor:pointer;text-align:left;letter-spacing:0px;color:#535760}main .header-create-profile .create-profile-menus ul li .mat-mini-fab{width:28px;height:28px;line-height:24px}main .header-create-profile .create-profile-menus ul li.li-title:hover{border-bottom:2px solid #723CEB}main .header-create-profile .create-profile-menus ul li.li-title.active{border-bottom:2px solid #723CEB;font-weight:600}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name{font-size:15px;font-weight:500;border:none;outline:none;text-align:left;color:#171f26;font-weight:700;font-size:20px;line-height:28px;color:#242731}.sub-category-name{font-style:normal;font-weight:250;font-size:14px;line-height:16px;display:flex;align-items:center;color:#575f6e;word-break:break-word}.full-width{width:100%}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}::ng-deep .mat-mini-fab .mat-button-wrapper{padding:0!important}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}::ng-deep .mat-select.mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}::ng-deep .mat-select{padding:8px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:transparent}::ng-deep .mat-form-field-wrapper{padding-bottom:0!important}:host ::ng-deep .input-category-name div.mat-form-field-outline-start,:host ::ng-deep .cdk-drag-preview .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-label-wrapper{display:none}:host ::ng-deep .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}:host ::ng-deep .input-category-name .mat-form-field-infix{border-top:none}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}:host ::ng-deep .child-list .dnd-box.cdk-drag-preview{width:100%!important;overflow:hidden;box-sizing:border-box;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}:host ::ng-deep .child-list .cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}:host ::ng-deep .child-list .field-box.cdk-drop-list-dragging .dnd-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}:host ::ng-deep .child-list .cdk-drag.dnd-box.cdk-drag-dragging{min-width:185px}:host ::ng-deep .child-list .cdk-drag.dnd-box.cdk-drag-dragging>div{margin-bottom:15px!important;min-width:185px}:host ::ng-deep .child-list .cdk-drag.dnd-box.cdk-drag-dragging>div>div{min-width:185px}:host ::ng-deep .child-list .cdk-drag.dnd-box.cdk-drag-dragging>div .mat-form-field-wrapper{min-width:185px}:host ::ng-deep .child-list .field-box{min-height:84px}:host ::ng-deep .child-list .field-box .dnd-placeholder{margin:0 10px;padding:0;height:44px!important;max-height:44px!important;display:flex;flex-grow:1;align-items:baseline;position:relative;border-radius:8px;opacity:1!important;transform:translateZ(0)!important}:host ::ng-deep .child-list .cdk-drop-list-dragging>div.dnd-box{display:none}::ng-deep .cdk-drag.dnd-box.cdk-drag-preview{height:68px;border-radius:0}::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item{margin:0;height:44px}::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper{height:44px}::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .input-phone,::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .mat-input-element,::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .mat-select-value,::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .mat-select-arrow-wrapper{opacity:0}.category-item,.cdk-drag-placeholder{display:flex;align-items:baseline;position:relative;width:100%;border-radius:8px;background-color:#fff;margin-bottom:15px;margin-right:5px;padding:6px 15px}.category-item .left-action,.cdk-drag-placeholder .left-action{height:auto;width:40px;align-self:baseline;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item .left-action .transparent-button,.cdk-drag-placeholder .left-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item .left-action .transparent-button .drag-icon,.cdk-drag-placeholder .left-action .transparent-button .drag-icon{color:#171f26;cursor:move;margin-right:15px}.category-item .field-content,.cdk-drag-placeholder .field-content{width:calc(100% - 40px);align-self:center}.category-item .field-content .child-list,.cdk-drag-placeholder .field-content .child-list{display:flex;flex-wrap:wrap;background-color:transparent;width:103%;position:relative;margin-left:-1.5%}.category-item .field-content .field-item,.cdk-drag-placeholder .field-content .field-item{display:flex;justify-content:space-between;align-items:baseline;border:transparent!important}.category-item .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.cdk-drag-placeholder .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline{color:transparent!important}.category-item .field-content .mat-form-field-outline,.cdk-drag-placeholder .field-content .mat-form-field-outline{color:transparent!important}.field-box{margin-bottom:15px;display:flex;align-items:center}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.child{margin-left:0}.child-content{display:flex;flex-wrap:wrap;margin-bottom:30px}.sub-category-forms{margin-bottom:0!important;margin-top:10px!important}.category{display:flex;flex-direction:row;width:100%;height:100%}.category .fields{width:100%;overflow:hidden;overflow-x:hidden;position:relative;padding-top:10px;height:calc(100% - 10px)}.category .fields .fields-inner{max-height:100%;height:100%;width:100%;overflow:auto}.category .fields .add-category-button{position:relative!important;width:calc(100% - 40px)!important;padding:20px 0}.category .fields .add-category-button mat-icon{margin-left:10px}.category .fields .add-step{bottom:0!important;top:0!important;width:100%!important}.category .disabled{background-color:#f4f7f9!important}.category .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.category .expand-button .material-icons{font-size:40px}.category .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category{width:93%;position:absolute;left:3%;bottom:-13px}.add-button-sub-category button span{width:100%}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border-radius:8px;margin-top:10px;padding:10px 0;display:flex;justify-content:center;align-items:center;width:100%;margin-bottom:22px;position:absolute;left:0;top:100%}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#000;box-shadow:none}.add-button-container button span{width:100%}.add-category{background-color:#fcfcfe;border-radius:5px;line-height:26px;margin-left:10px;margin-bottom:10px;letter-spacing:0px;color:#c2c8d5;width:92%}.field-content .cdk-drag{width:100%}.cdk-drag{width:auto;position:relative}.cdk-drag .fields-content{display:flex;height:100%;width:100%;margin:0}.cdk-drag .fields-content .button-action{align-self:baseline;margin-top:0;margin-left:3px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag .fields-content .button-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag .fields-content .button-action .transparent-button .drag-icon{color:#171f26;cursor:move;margin-right:15px}.cdk-drag .fields-content .child-3-background{background-color:#e5e8ee!important}.cdk-drag .fields-content .fields-container{border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px;position:relative;margin-bottom:10px}.cdk-drag .fields-content .fields-container lib-sub-category .field-item{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action{background-color:#039be5!important;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.side-bar{display:flex;flex-direction:column}.register-button{background:no-repeat padding-box #171f26!important;border:2px solid #171f26!important;color:#fff!important;box-shadow:0 0 #0003;border-radius:7px}.forward{padding:6px}.live-button{background-color:#fff!important;color:#171f26!important;border:2px solid #171f26!important}.content-item{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}.field-property{padding:11px;height:calc(100% - 22px);width:400px}.field-property h3{font-size:20px;line-height:110%;padding-top:10px;display:flex;align-items:center;color:#242731}.field-property .property-content{display:flex;flex-direction:column;align-items:flex-start;padding:0 20px;background:#ffffff;border-radius:8px 8px 0 0;min-height:100%;height:auto;width:400px}.field-property .property-content button{text-align:center}.field-property .property-content .property-content-inner{display:flex;flex-direction:column;gap:25px;overflow:auto;max-height:700px;padding-bottom:25px}.field-property .bloc-action{text-align:center}.field-property .bloc-action button{width:100%;padding:6px;margin-top:10px}.field-property .bloc-action button mat-icon{margin-left:5px}.field-property .bloc-action .delete-bloc{background:#f44336;box-shadow:0 0 #0003;border-radius:7px;color:#fff}.fields-inner::-webkit-scrollbar{width:5px}.fields-inner::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.fields-inner::-webkit-scrollbar-thumb{background:transparent;border-radius:10px}.fields-inner::-webkit-scrollbar-thumb:hover{background:transparent}.toogle-button{color:#707273!important;display:flex;align-items:center;font-style:normal;font-weight:400;font-size:18px;line-height:18px}.toogle-button span{padding-right:10px}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}:host ::ng-deep .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5}.top-10{margin-top:10px}.bottom-10{margin-bottom:10px}.section-item{border:2px solid transparent;overflow:hidden}.section-item:hover,.section-item.active{border:2px solid #242731;border-radius:8px;cursor:pointer}::ng-deep .select-type-class.mat-select-disabled .mat-select-value{color:#000!important;cursor:pointer}::ng-deep button .mat-button-wrapper{display:flex;align-items:center;justify-content:center}::ng-deep .field-content .mat-form-field,::ng-deep .field-content .select-content{width:100%}::ng-deep .field-content .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:100%!important}::ng-deep .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle,::ng-deep .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5!important}::ng-deep .fields-content .mat-radio-button.mat-accent .mat-radio-inner-circle,::ng-deep .fields-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),::ng-deep .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,::ng-deep .fields-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple,::ng-deep .property-content .mat-radio-button.mat-accent .mat-radio-inner-circle,::ng-deep .property-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),::ng-deep .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,::ng-deep .property-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5!important}::ng-deep .fields-content .mat-checkbox-checkmark-path,::ng-deep .property-content .mat-checkbox-checkmark-path{stroke:#039be5!important}::ng-deep .fields-content .mat-checkbox-frame,::ng-deep .property-content .mat-checkbox-frame{border:2px solid #039BE5!important}::ng-deep .fields-content .mat-checkbox-inner-container,::ng-deep .property-content .mat-checkbox-inner-container{height:20px!important;width:20px!important}.setting{z-index:1;background-color:#d5d6d7!important;border-radius:40px;width:42px!important;height:40px!important;padding:0 10px!important;display:flex;align-items:center;justify-content:center;display:none}.setting .setting-icon,.setting .transparent-button{color:#171f26}.sub-header:hover .setting{display:flex}.add-button-sub-category button{margin:10px auto;width:100%;background-color:transparent;color:#000;box-shadow:none;background-color:#fcfcfe;padding:5px span;padding-width:100%!important}::ng-deep .add-button{padding:10px 0}::ng-deep .add-button span{width:100%}::ng-deep .mat-button[disabled]{opacity:.5!important}\n"], dependencies: [{ kind: "directive", type: i1$2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2$1.MatLabel, selector: "mat-label" }, { kind: "component", type: i5.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i4$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4$1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i4$1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i4$1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i1$2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: i4$2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "component", type: i6$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i7.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i1$3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i14$1.MatChipList, selector: "mat-chip-list", inputs: ["role", "aria-describedby", "errorStateMatcher", "multiple", "compareWith", "value", "required", "placeholder", "disabled", "aria-orientation", "selectable", "tabIndex"], outputs: ["change", "valueChange"], exportAs: ["matChipList"] }, { kind: "directive", type: i14$1.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disableRipple", "tabIndex", "role", "selected", "value", "selectable", "disabled", "removable"], outputs: ["selectionChange", "destroyed", "removed"], exportAs: ["matChip"] }, { kind: "directive", type: i14$1.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i14$1.MatChipRemove, selector: "[matChipRemove]" }, { kind: "directive", type: i10.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i10.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "directive", type: i16.CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: i16.CdkDropListGroup, selector: "[cdkDropListGroup]", inputs: ["cdkDropListGroupDisabled"], exportAs: ["cdkDropListGroup"] }, { kind: "directive", type: i16.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "directive", type: i16.CdkDragHandle, selector: "[cdkDragHandle]", inputs: ["cdkDragHandleDisabled"] }, { kind: "directive", type: i16.CdkDragPlaceholder, selector: "ng-template[cdkDragPlaceholder]", inputs: ["data"] }, { kind: "directive", type: i9.NativeElementInjectorDirective, selector: "[ngModel], [formControl], [formControlName]" }, { kind: "component", type: i13.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }, { kind: "component", type: SubTemplateProfileComponent, selector: "lib-sub-category", inputs: ["field", "length", "i", "j", "conditionData", "blink"], outputs: ["onAddKeywordFromInput", "onKeyPress", "onDrop", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onCheckedDefault", "onGetConditionValues", "onEditBlock", "onCheckValue"] }, { kind: "component", type: LoadingPageComponent, selector: "lib-loading-page" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: TemplateProfileCreateComponent, decorators: [{
            type: Component,
            args: [{ selector: "onboarding-create-profile-template", template: "<main>\r\n  <div class=\"header-create-profile\">\r\n    <div class=\"header-create-profile-top\">\r\n      <h3>\r\n        <span>{{ form.get(\"Name\").value }}</span>\r\n        <mat-icon (click)=\"openDialog()\">edit</mat-icon>\r\n      </h3>\r\n      <div class=\"create-profile-action\">\r\n        <button mat-button class=\"register-button\" type=\"submit\" (click)=\"onSubmit(false)\">\r\n          <lib-loading-page *ngIf=\"loading && !isSubmitted\"></lib-loading-page>{{draftLabel}}\r\n        </button>\r\n        <button mat-button class=\"register-button live-button\" type=\"submit\" (click)=\"onSubmit(true)\">\r\n          <lib-loading-page *ngIf=\"loading && isSubmitted\"></lib-loading-page>\r\n          {{liveLabel}}\r\n        </button>\r\n\r\n        <button [disabled]=\"currentCanceledIndex < 0 || historics.length===0\" mat-button\r\n          class=\"register-button live-button forward\" type=\"submit\" (click)=\"onCancel(true)\">\r\n          <mat-icon>rotate_left</mat-icon>\r\n        </button>\r\n        <button [disabled]=\"currentCanceledIndex===historics.length-1 || currentCanceledIndex===null\" mat-button\r\n          class=\"register-button live-button forward\" type=\"submit\" (click)=\"onCancel(false)\">\r\n          <mat-icon>rotate_right</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"create-profile-menus\">\r\n      <ul>\r\n        <li class=\"li-title\" [class]=\"editIndex === i ? 'active' : ''\" *ngFor=\"let cat of categories; let i = index\"\r\n          (click)=\"scrollTo(cat, i)\" [id]=\"cat.name+'x'\">\r\n          <!-- (click)=\"onActiveMenu(cat, i,true)\" [ngxScrollTo]=\"'#' + cat.name\" [id]=\"cat.name+'x'\"> -->\r\n          {{ cat.name }}\r\n        </li>\r\n        <li>\r\n          <button mat-mini-fab color=\"transparent\" (click)=\"onAddNewCategory($event)\">\r\n            <mat-icon>add</mat-icon>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"category\" cdkDropListGroup>\r\n      <div class=\"fields\">\r\n        <div cdkDropList (cdkDropListDropped)=\"drop($event)\" [cdkDropListData]=\"categories\"\r\n          class=\"fields-inner example-list mt-10\" id=\"categories-id\" (scroll)=\"onScroll($event)\">\r\n          <section class=\"category-item section-item\" *ngFor=\"let category of categories; let i = index\" cdkDrag\r\n            [id]=\"category.name\" [style.paddingBottom]=\"category.expandMore ? '50px' : '10px'\"\r\n            [class]=\"editIndex === i ? 'active' : ''\" (click)=\"scrollTo(category, i)\">\r\n            <!-- [class]=\"editIndex === i ? 'active' : ''\" [ngxScrollTo]=\"'#' + category.name\"> -->\r\n            <div class=\"left-action move-icons\" cdkDragHandle>\r\n              <button class=\"transparent-button\" mat-raised-button\r\n                (click)=\"$event.preventDefault();$event.stopPropagation()\">\r\n                <mat-icon class=\"drag-icon\">drag_indicator</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div class=\"field-content\">\r\n              <div class=\"field-item\">\r\n                <!-- <div class=\"field-item\" (click)=\" onExpendMore({ event: $event, field: category }, i)\"> -->\r\n                <div>\r\n                  <p class=\"full-width input-category-name\">\r\n                    {{ category.name }}\r\n                  </p>\r\n                  <p class=\"sub-category-name\">\r\n                    {{locale?.CATEGORY_SUBTITLE}} {{ catNameStart(category.name) ? \"l'\" +\r\n                    category.name : category.name }}\r\n                  </p>\r\n                </div>\r\n                <button mat-mini-fab color=\"primary\" class=\"expand-button\"\r\n                  (click)=\"$event.stopPropagation();onExpendMore({ event: $event, field: category }, i)\">\r\n                  <mat-icon *ngIf=\"!category.expandMore\">chevron_right</mat-icon>\r\n                  <mat-icon *ngIf=\"category.expandMore\">expand_more</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div class=\"child-list\" *ngIf=\"category.forms\" cdkDropListGroup>\r\n                <ng-container *ngIf=\"category.expandMore\">\r\n                  <ng-container *ngFor=\"let field of category.forms; let j = index\">\r\n                    <div class=\"field-box\" [id]=\"field.key\" cdkDropList cdkDropListOrientation=\"horizontal'\"\r\n                      (cdkDropListDropped)=\"dropField($event)\"\r\n                      [cdkDropListData]=\"{ field: field, index: j, category: category }\"\r\n                      [style.width]=\"field.forms && field.forms.length>0 ? '100%' : fieldWidth(field.type,category.forms.length,j)\">\r\n                      <div cdkDrag class=\"dnd-box\">\r\n                        <div class=\"dnd-placeholder\" *cdkDragPlaceholder></div>\r\n                        <div class=\"fields-content\"\r\n                          [class]=\"field.forms && field.forms.length>0 ? 'sub-category-forms' :''\">\r\n                          <div class=\"button-action\" *ngIf=\"field.forms\">\r\n                            <button class=\"transparent-button\" mat-raised-button\r\n                              (click)=\"$event.stopPropagation();$event.preventDefault()\">\r\n                              <mat-icon class=\"drag-icon\">drag_indicator</mat-icon>\r\n                            </button>\r\n                          </div>\r\n                          <div class=\"fields-container\">\r\n                            <div class=\"sub-header\" *ngIf=\"field.forms\">\r\n                              <div class=\"field-item\">\r\n                                <div>\r\n                                  <p class=\"full-width input-category-name\">\r\n                                    {{ field.label }}\r\n                                  </p>\r\n                                  <p class=\"sub-category-name\">\r\n                                    {{locale?.CATEGORY_SUBTITLE}}\r\n                                    {{ catNameStart(field.label) ? \"l'\" + field.label : field.label }}\r\n                                  </p>\r\n                                </div>\r\n                                <button class=\"transparent-button setting\" mat-raised-button\r\n                                  (click)=\"$event.stopPropagation();onEditBlock(field, i, j)\">\r\n                                  <mat-icon class=\"setting-icon\">settings</mat-icon>\r\n                                </button>\r\n                                <button class=\"expand-button\" [disabled]=\"!(field.forms && field.forms.length > 0)\"\r\n                                  [style.opacity]=\"field.forms && field.forms.length > 0 ? 1 : 0\" mat-mini-fab\r\n                                  color=\"primary\"\r\n                                  (click)=\"$event.stopPropagation();onExpendMore({ event: $event, field: field }, i, j)\">\r\n                                  <mat-icon *ngIf=\"!field.expandMore\">expand_less </mat-icon>\r\n                                  <mat-icon *ngIf=\"field.expandMore\">expand_more </mat-icon>\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                            <lib-sub-category [field]=\"field\" [length]=\"category?.forms?.length\" [i]=\"i\" [j]=\"j\"\r\n                              [blink]=\"checkBlink(j,1)===newFieldIndex\" (onCheckValue)=\"onCheckValue($event)\"\r\n                              (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j)\"\r\n                              (onKeyPress)=\"onKeyPress($event.event, i, j)\" (onAddNewField)=\"onAddNewField(i)\"\r\n                              (onRemoveField)=\"onRemoveField(i, j)\" (onChangeType)=\"onChangeType(field.type, i, j)\"\r\n                              (onRemoveKeyword)=\"removeKeyword($event.event, i, j)\"\r\n                              (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j)\"\r\n                              (onExpendMore)=\"onExpendMore($event, i, j)\" (onChangeLabel)=\"onChangeLabel($event, i, j)\"\r\n                              (onCheckedChip)=\"onCheckedChip($event, i, j)\" (onDrop)=\"drop($event)\"\r\n                              (onCheckedDefault)=\"onCheckedDefault($event, i, j)\"\r\n                              (onEditBlock)=\"onEditBlock(field, i, j)\" [conditionData]=\"conditionData\">\r\n                              <div *ngIf=\"field.expandMore\" class=\"child\">\r\n                                <div #childList=\"cdkDropList\" class=\"child-content\" *ngIf=\"field.forms\"\r\n                                  [cdkDropListData]=\"field.forms\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\r\n                                  <div class=\"\" style=\"margin-bottom: 20px\"\r\n                                    *ngFor=\"let child of field.forms; let k = index\" [id]=\"child.key\"\r\n                                    [style.width]=\"child.forms && child.forms.length>0 ? '100%' : fieldWidth(child.type,field.forms.length,k)\">\r\n                                    <div cdkDrag>\r\n                                      <div class=\"fields-content\"\r\n                                        [class]=\"child.forms && child.forms.length>0 ? 'sub-category-forms' :''\">\r\n                                        <div class=\"button-action child-2-background\"\r\n                                          *ngIf=\"child.forms && child.forms.length>0\">\r\n                                          <button class=\"transparent-button\" mat-raised-button\r\n                                            (click)=\"$event.stopPropagation();$event.preventDefault()\">\r\n                                            <mat-icon class=\"drag-icon\"> drag_indicator</mat-icon>\r\n                                          </button>\r\n                                        </div>\r\n                                        <div class=\"fields-container\">\r\n                                          <div class=\"sub-header\" *ngIf=\"child.forms && child.forms.length>0\">\r\n                                            <div class=\"field-item\">\r\n                                              <div>\r\n                                                <input class=\"full-width input-category-name\" type=\"text\" required\r\n                                                  [readonly]=\"categories.length < 4 || !category.editable\"\r\n                                                  [readonly]=\"!category.editable\" [(ngModel)]=\"child.label\"\r\n                                                  [ngModelOptions]=\"{ standalone: true }\"\r\n                                                  placeholder=\"Saisir le nom de la sous cat\u00E9gorie\" />\r\n                                                <p class=\"sub-category-name\">\r\n                                                  {{locale?.CATEGORY_SUBTITLE}}\r\n                                                  {{ catNameStart(child.label) ? \"l'\" + child.label : child.label }}\r\n                                                </p>\r\n                                              </div>\r\n                                              <button class=\"transparent-button setting\" mat-raised-button\r\n                                                (click)=\"$event.stopPropagation();onEditBlock(child, i, j, k)\">\r\n                                                <mat-icon class=\"setting-icon\">settings</mat-icon>\r\n                                              </button>\r\n                                              <button class=\"expand-button\"\r\n                                                [disabled]=\"!(child.forms && child.forms.length > 0)\"\r\n                                                [style.opacity]=\"child.forms && child.forms.length > 0 ? 1 : 0\"\r\n                                                mat-mini-fab color=\"primary\"\r\n                                                (click)=\"$event.stopPropagation();onExpendMore({ event: $event, field: child }, i, j, k)\">\r\n                                                <mat-icon *ngIf=\"!child.expandMore\"> expand_less </mat-icon>\r\n                                                <mat-icon *ngIf=\"child.expandMore\"> expand_more </mat-icon>\r\n                                              </button>\r\n                                            </div>\r\n                                          </div>\r\n                                          <lib-sub-category [field]=\"child\" [length]=\"field?.forms?.length\" [i]=\"j\"\r\n                                            [blink]=\"checkBlink(k,2)===newFieldIndex\" [j]=\"k\"\r\n                                            (onCheckValue)=\"onCheckValue($event)\"\r\n                                            (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j, k)\"\r\n                                            (onKeyPress)=\"onKeyPress($event.event, i, j, k)\"\r\n                                            (onAddNewField)=\"onAddNewField(i, j)\"\r\n                                            (onRemoveField)=\"onRemoveField(i, j, k)\"\r\n                                            (onChangeType)=\"onChangeType(child.type, i, j, k)\"\r\n                                            (onRemoveKeyword)=\"removeKeyword($event.event, i, j, k)\"\r\n                                            (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j, k)\"\r\n                                            (onExpendMore)=\"onExpendMore($event, i, j, k)\"\r\n                                            (onChangeLabel)=\"onChangeLabel($event, i, j, k)\"\r\n                                            (onCheckedChip)=\"onCheckedChip($event, i, j, k)\" (onDrop)=\"drop($event)\"\r\n                                            (onCheckedDefault)=\"onCheckedDefault($event, i, j, k)\"\r\n                                            [conditionData]=\"conditionData\" (onEditBlock)=\"onEditBlock(child, i, j, k)\">\r\n                                            <div *ngIf=\"child.expandMore\" class=\"child\">\r\n                                              <div class=\"child-content\" #childList=\"cdkDropList\"\r\n                                                *ngIf=\"child.forms && child.forms.length>0\"\r\n                                                [cdkDropListData]=\"child.forms\" cdkDropList\r\n                                                (cdkDropListDropped)=\"drop($event)\">\r\n                                                <div class=\"\" *ngFor=\"let c2 of child.forms; let l = index\"\r\n                                                  [id]=\"c2.key\"\r\n                                                  [style.width]=\"c2.forms && c2.forms.length>0 ? '100%' : fieldWidth(c2.type,child.forms.length,l)\">\r\n                                                  <div cdkDrag>\r\n                                                    <div class=\"fields-content\"\r\n                                                      [class]=\"c2.forms && c2.forms.length>0 ? 'sub-category-forms' :''\">\r\n                                                      <div class=\"button-action child-3-background\"\r\n                                                        *ngIf=\"c2.forms && c2.forms.length>0\">\r\n                                                        <button class=\"transparent-button\" mat-raised-button\r\n                                                          (click)=\"$event.stopPropagation()\">\r\n                                                          <mat-icon class=\"drag-icon\"> drag_indicator </mat-icon>\r\n                                                        </button>\r\n                                                      </div>\r\n                                                      <div class=\"fields-container\">\r\n                                                        <lib-sub-category [field]=\"c2\" [length]=\"child?.forms?.length\"\r\n                                                          [blink]=\"checkBlink(l,3)===newFieldIndex\" [i]=\"k\" [j]=\"l\"\r\n                                                          (onCheckValue)=\"onCheckValue($event)\"\r\n                                                          (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j, k, l)\"\r\n                                                          (onKeyPress)=\"onKeyPress($event.event, i, j, k, l)\"\r\n                                                          (onAddNewField)=\"onAddNewField(i, j, k)\"\r\n                                                          (onRemoveField)=\"onRemoveField(i, j, k, l)\"\r\n                                                          (onChangeType)=\"onChangeType(c2.type, i, j, k, l)\"\r\n                                                          (onRemoveKeyword)=\"removeKeyword($event.event, i, j, k, l)\"\r\n                                                          (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j, k, l)\"\r\n                                                          (onExpendMore)=\"onExpendMore($event, i, j, k, l)\"\r\n                                                          (onChangeLabel)=\"onChangeLabel($event, i, j, k, l)\"\r\n                                                          (onCheckedChip)=\"onCheckedChip($event, i, j, k, l)\"\r\n                                                          (onDrop)=\"drop($event)\"\r\n                                                          (onCheckedDefault)=\"onCheckedDefault($event, i, j, k, l)\"\r\n                                                          (onEditBlock)=\"onEditBlock(c2, i, j, k, l)\"\r\n                                                          [conditionData]=\"conditionData\">\r\n                                                          <div class=\"child\"></div>\r\n                                                        </lib-sub-category>\r\n                                                      </div>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                  <div class=\"add-button-sub-category\"\r\n                                                    *ngIf=\"child?.forms?.length - 1 === l\">\r\n                                                    <button style=\"margin: 10px auto\" mat-raised-button color=\"primary\"\r\n                                                      (click)=\"$event.stopPropagation();onAddNewField(i, j, k)\">\r\n                                                      <span>{{locale?.ADD_FIELD}}</span>\r\n                                                      <mat-icon> add </mat-icon>\r\n                                                    </button>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </lib-sub-category>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"add-button-sub-category\" *ngIf=\"field?.forms?.length - 1 === k\">\r\n                                      <button style=\"margin: 10px auto\" mat-raised-button color=\"primary\"\r\n                                        (click)=\"$event.stopPropagation();onAddNewField(i, j)\">\r\n                                        <span>{{locale?.ADD_FIELD}}</span>\r\n                                        <mat-icon>add</mat-icon>\r\n                                      </button>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </lib-sub-category>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"add-button-container add-button-sub-category\"\r\n                        *ngIf=\"category?.forms?.length - 1 === j\">\r\n                        <button style=\"margin: 10px auto; padding:10px 0\" class=\"add-button\"\r\n                          [disabled]=\"category?.forms?.length - 1 !== j\"\r\n                          [style.opacity]=\"category?.forms?.length - 1 === j ? 1 : 0\" mat-raised-button color=\"primary\"\r\n                          (click)=\"$event.stopPropagation();onAddNewField(i)\">\r\n                          <span>{{locale?.ADD_FIELD}}</span>\r\n                          <mat-icon>add</mat-icon>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </ng-container>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n          </section>\r\n\r\n          <div class=\"add-button-container add-category-button add-step\">\r\n            <button (click)=\"onAddNewCategory($event)\">\r\n              {{locale?.ADD_STEP}}\r\n              <mat-icon>add</mat-icon>\r\n            </button>\r\n          </div>\r\n          <section style=\"background-color: transparent\">\r\n            <div style=\"height: 400px;\"></div>\r\n          </section>\r\n        </div>\r\n      </div>\r\n      <div class=\"field-property\">\r\n        <div class=\"property-content\" *ngIf=\"isBlock && currentEditBlock\">\r\n          <h3>{{locale?.SETTING_OF_BLOCK}} {{ currentEditBlock.label }}</h3>\r\n          <div class=\"property-content-inner\" style=\"width: 100%;\">\r\n            <mat-form-field class=\"form-field mat-select full-width\" style=\"cursor: pointer\" appearance=\"outline\">\r\n              <mat-label>{{locale?.TYPE_OF_BLOCK}}</mat-label>\r\n              <mat-select (click)=\"onOpenTypeDialog(currentEditBlock)\" disabled=\"true\" required\r\n                [(ngModel)]=\"currentEditBlock.type\" (ngModelChange)=\"onChangeTypeBlock(currentEditBlock)\"\r\n                [ngModelOptions]=\"{ standalone: true }\" class=\"select-type-class\">\r\n                <mat-option value=\"text\">Text(80)</mat-option>\r\n                <mat-option value=\"textarea\">Text(80+)</mat-option>\r\n                <mat-option value=\"radio\">Radio</mat-option>\r\n                <mat-option value=\"select\">Selector</mat-option>\r\n                <mat-option value=\"toggle\">Toggle</mat-option>\r\n                <mat-option value=\"checkbox\">Checkbox</mat-option>\r\n                <mat-option value=\"checkbox_multiple\">Checkbox multiple</mat-option>\r\n                <mat-option value=\"email\">Email</mat-option>\r\n                <mat-option value=\"password\">Password</mat-option>\r\n                <mat-option value=\"date\">Date</mat-option>\r\n                <mat-option value=\"tel\">Phone</mat-option>\r\n                <mat-option value=\"none\">None</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <ng-container *ngIf=\"currentEditBlock.type!=='none'\">\r\n              <mat-form-field class=\"form-field full-width\" appearance=\"outline\">\r\n                <mat-label>{{locale?.NAME_LABEL}}</mat-label>\r\n                <input type=\"text\" [(ngModel)]=\"currentEditBlock.label\" [disabled]=\"!currentEditBlock.editable\"\r\n                  (ngModelChange)=\"onChangeKey(currentEditBlock)\" [ngModelOptions]=\"{ standalone: true }\" matInput\r\n                  required placeholder=\"\" />\r\n              </mat-form-field>\r\n              <ng-container [ngSwitch]=\"currentEditBlock.type\">\r\n                <div *ngSwitchCase=\"'toggle'\" class=\"flex-auto\"\r\n                  style=\"display: flex;align-items: flex-end;margin: 10px 0;\">\r\n                  <mat-slide-toggle class=\"form-field\" color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.defaultValue\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                  </mat-slide-toggle>\r\n                  <span style=\"margin-left: 10px;\">{{locale?.DEFAULT_VALUE}}</span>\r\n                </div>\r\n                <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto\">\r\n                  <mat-checkbox class=\"form-field\" [(ngModel)]=\"currentEditBlock.value\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                    {{locale?.DEFAULT_CHECKED}}\r\n                  </mat-checkbox>\r\n                </div>\r\n                <mat-form-field *ngSwitchCase=\"\r\n                                ['select', 'radio', 'checkbox_multiple'].includes(currentEditBlock.type) ? currentEditBlock.type : !currentEditBlock.type\r\n                              \" class=\"flex-auto full-width\" appearance=\"outline\">\r\n                  <mat-label> {{locale?.DEFAULT_VALUE}} </mat-label>\r\n                  <mat-chip-list #childList=\"cdkDropList\" [cdkDropListData]=\"currentEditBlock.defaultValue\" cdkDropList\r\n                    (cdkDropListDropped)=\"drop($event)\" #chipList aria-label=\"Video keywords; let index=index\" multiple\r\n                    selectable>\r\n                    <mat-chip style=\"min-height: 25px;width: auto;\" *ngFor=\"let option of currentEditBlock.defaultValue\"\r\n                      [selected]=\"option.checked\" [value]=\"option.value\" [removable]=\"true\"\r\n                      (dblclick)=\"onCheckedChipBlock(option, currentEditBlock)\" (click)=\"onEditChip(option)\"\r\n                      (removed)=\"removeKeywordBlock(option, currentEditBlock)\" cdkDrag>\r\n                      {{ option.value }}\r\n                      <mat-icon matChipRemove>{{locale?.CANCEL}}</mat-icon>\r\n                    </mat-chip>\r\n                    <input #chipsInput placeholder=\"{{locale?.ADD}}\" [matChipInputFor]=\"chipList\" [matChipInputAddOnBlur]=\"true\"\r\n                      (matChipInputTokenEnd)=\"addKeywordFromInputBlock($event, currentEditBlock, prevValue)\"\r\n                      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                      (keyup)=\"onKeyUpChip($event, currentEditBlock)\" [(ngModel)]=\"currentChip\"\r\n                      [ngModelOptions]=\"{ standalone: true }\" />\r\n                  </mat-chip-list>\r\n                </mat-form-field>\r\n                <mat-form-field *ngSwitchCase=\"'textarea'\" class=\"form-field full-width\" appearance=\"outline\">\r\n                  <mat-label>{{locale?.DEFAULT_VALUE}}</mat-label>\r\n                  <input type=\"text\" matInput [ngModelOptions]=\"{ standalone: true }\"\r\n                    [(ngModel)]=\"currentEditBlock.defaultValue\" placeholder=\"Description...\" />\r\n                </mat-form-field>\r\n\r\n                <mat-form-field *ngSwitchDefault class=\"form-field full-width\"\r\n                  [style.opacity]=\"currentEditBlock.type !== 'tel' ? 1 : 0\" appearance=\"outline\">\r\n                  <mat-label>{{locale?.DEFAULT_VALUE}}</mat-label>\r\n                  <input [type]=\"currentEditBlock.type\" [disabled]=\"currentEditBlock.type === 'tel'\" matInput\r\n                    [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"currentEditBlock.defaultValue\"\r\n                    placeholder=\"\" />\r\n                </mat-form-field>\r\n              </ng-container>\r\n\r\n              <div class=\"mandatory top-10 bottom-10\">\r\n                <div class=\"toogle-button\">\r\n                  <span>{{locale?.REQUIRED}}</span>\r\n                  <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.isMandatory\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                  </mat-slide-toggle>\r\n                </div>\r\n              </div>\r\n              <div class=\"mandatory top-10\" [style]=\"!currentEditBlock.editable ? 'pointer-events:none;opacity:0.3':''\">\r\n                <div class=\"toogle-button\">\r\n                  <span>{{locale?.CONDITIONAL_VISIBILITY}}</span>\r\n                  <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.isConditional\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                  </mat-slide-toggle>\r\n                </div>\r\n              </div>\r\n              <ng-container *ngIf=\"currentEditBlock?.isConditional\">\r\n                <mat-form-field class=\"form-field mat-select full-width\" appearance=\"outline\">\r\n                  <mat-label>{{locale?.SELECT_CATEGORY}}</mat-label>\r\n                  <mat-select [(ngModel)]=\"all\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('all','s1', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.all\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field *ngIf=\"conditionData.s1?.length > 0\" class=\"form-field mat-select full-width\"\r\n                  appearance=\"outline\">\r\n                  <mat-label>{{locale?.SELECT_SUB_CATEGORY}} (s1)</mat-label>\r\n                  <mat-select [(ngModel)]=\"s1\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('s1','s2', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.s1\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"form-field mat-select full-width\" *ngIf=\"conditionData.s2?.length>0\"\r\n                  appearance=\"outline\">\r\n                  <mat-label>{{locale?.SELECT_SUB_CATEGORY}} (s2)</mat-label>\r\n                  <mat-select [(ngModel)]=\"s2\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('s2','s3', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.s2\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"form-field mat-select full-width\" *ngIf=\"conditionData.s3?.length>0\"\r\n                  appearance=\"outline\">\r\n                  <mat-label>{{locale?.SELECT_SUB_CATEGORY}} (s3)</mat-label>\r\n                  <mat-select [(ngModel)]=\"s3\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('s3','s4', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.s3\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </ng-container>\r\n\r\n              <mat-radio-group\r\n                *ngIf=\"currentEditBlock.isConditional && onGetDefaultValue() && onGetDefaultValue()?.length>0\"\r\n                aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\r\n                [(ngModel)]=\"currentEditBlock.condition.value\" [ngModelOptions]=\"{ standalone: true }\">\r\n                <mat-radio-button class=\"example-radio-button\" style=\"margin-right: 10px\"\r\n                  *ngFor=\"let item of onGetDefaultValue()\" [value]=\"item.value\">\r\n                  {{ item.value }}\r\n                </mat-radio-button>\r\n              </mat-radio-group>\r\n              <div class=\"bloc-action\">\r\n                <button *ngIf=\"paramsIndex.length<4\" mat-button [disabled]=\"!currentEditBlock.editable\"\r\n                  (click)=\"onAddNewSubLevelFieldBlock($event)\">{{locale?.SUB_CATEGORY}} <mat-icon>device_hub\r\n                  </mat-icon></button>\r\n                <button mat-button [disabled]=\"!currentEditBlock.editable\"\r\n                  (click)=\"onDuplicatedBlock($event)\">{{locale?.DUPLICATE_BLOCK}}<mat-icon>filter_none</mat-icon>\r\n                </button>\r\n                <button mat-button [disabled]=\"!currentEditBlock.editable\" class=\"delete-bloc\"\r\n                  (click)=\"onRemoveFieldBlock($event)\">{{locale?.DELETE_BLOCK}} <mat-icon>\r\n                    delete </mat-icon></button>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n        <div class=\"property-content\" *ngIf=\"isSection && currentEditBlock\">\r\n          <h3>{{locale?.SECTION_SETTING}} {{ currentEditBlock.name }}</h3>\r\n          <div class=\"property-content-inner\">\r\n            <mat-form-field class=\"form-field full-width\" appearance=\"outline\">\r\n              <mat-label>{{locale?.SECTION_NAME}}</mat-label>\r\n              <input (ngModelChange)=\"onChangeCategoryName()\" type=\"text\" matInput required placeholder=\"\"\r\n                [(ngModel)]=\"currentEditBlock.name\" [ngModelOptions]=\"{ standalone: true }\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"form-field mat-select full-width\" appearance=\"outline\">\r\n              <mat-label>{{locale?.MANAGEMENT_TEAM}}</mat-label>\r\n              <mat-select required [(ngModel)]=\"currentEditBlock.selector.value\"\r\n                [ngModelOptions]=\"{ standalone: true }\">\r\n                <mat-option [value]=\"item.value\" *ngFor=\"let item of currentEditBlock.selector.defaultValue\">{{\r\n                  item.value }}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <div class=\"bloc-action\">\r\n              <button mat-button (click)=\"onAddNewSubLevelFieldBlock($event)\">{{locale?.SUB_CATEGORY}} <mat-icon>\r\n                  device_hub\r\n                </mat-icon></button>\r\n              <button mat-button (click)=\"onDuplicatedBlock($event)\">{{locale?.DUPLICATE_BLOCK}}<mat-icon>filter_none\r\n                </mat-icon>\r\n              </button>\r\n              <button [disabled]=\"!currentEditBlock.editable\" mat-button class=\"delete-bloc\"\r\n                (click)=\"onRemoveFieldBlock($event)\">{{locale?.DELETE_BLOCK}} <mat-icon>\r\n                  delete</mat-icon></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</main>", styles: ["main{background:#f4f7f9 0% 0% no-repeat padding-box;height:100vh;display:flex;flex-direction:column;align-items:center;padding:25px}main .disabled label{background-color:transparent!important}main form{display:flex;height:89%;width:100%}main .box-title{width:786px;margin-top:20vh;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;align-self:center}main .box-title h3{text-align:center;letter-spacing:0px;color:#171f26}main .box-title label,main .box-title input{letter-spacing:0px;color:#171f26}main .box-title .profil-name-content{display:flex;align-items:center;position:relative}main .box-title .profil-name-content .add-picto{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main .box-title .profil-name-content .add-picto mat-icon{margin-right:10px}main .box-title .profil-name-content .list-picto{position:absolute;height:200px;width:100%;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main .box-title .profil-name-content .list-picto mat-icon{margin:15px;border:none;font-size:40px}main .box-title .profil-name-content .list-picto mat-icon:hover{color:#830b6b!important;cursor:pointer}main .box-title .box-title-content{width:100%;margin:25px auto}main .box-title .title{letter-spacing:0px;color:#171f26}main .box-title p{letter-spacing:0px;color:#171f26;text-align:center}main .box-title .link-create-profil{width:100%;display:flex;justify-content:center}main .box-title button{text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;letter-spacing:0px;color:#543cb6}main .action{width:100%;display:flex;justify-content:space-between}main .header-create-profile{width:100%;margin:10px 15px;border-radius:5px}main .header-create-profile .header-create-profile-top{display:flex;align-items:center;text-align:center;justify-content:space-between}main .header-create-profile .header-create-profile-top .create-profile-action{display:flex;align-items:center;gap:25px}main .header-create-profile h3{font-size:25px;padding-bottom:5px;display:flex;align-items:center;justify-content:center}main .header-create-profile h3 span{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;text-transform:capitalize}main .header-create-profile h3 mat-icon{margin-left:15px;cursor:pointer}main .header-create-profile .create-profile-menus{max-width:100%;overflow:auto}main .header-create-profile .create-profile-menus ul{font-weight:600;font-size:16px;list-style:none;display:flex;align-items:center;gap:20px;padding:0}main .header-create-profile .create-profile-menus ul li{font-weight:400;font-size:12px;cursor:pointer;text-align:left;letter-spacing:0px;color:#535760}main .header-create-profile .create-profile-menus ul li .mat-mini-fab{width:28px;height:28px;line-height:24px}main .header-create-profile .create-profile-menus ul li.li-title:hover{border-bottom:2px solid #723CEB}main .header-create-profile .create-profile-menus ul li.li-title.active{border-bottom:2px solid #723CEB;font-weight:600}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name{font-size:15px;font-weight:500;border:none;outline:none;text-align:left;color:#171f26;font-weight:700;font-size:20px;line-height:28px;color:#242731}.sub-category-name{font-style:normal;font-weight:250;font-size:14px;line-height:16px;display:flex;align-items:center;color:#575f6e;word-break:break-word}.full-width{width:100%}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}::ng-deep .mat-mini-fab .mat-button-wrapper{padding:0!important}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}::ng-deep .mat-select.mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}::ng-deep .mat-select{padding:8px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:transparent}::ng-deep .mat-form-field-wrapper{padding-bottom:0!important}:host ::ng-deep .input-category-name div.mat-form-field-outline-start,:host ::ng-deep .cdk-drag-preview .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-label-wrapper{display:none}:host ::ng-deep .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}:host ::ng-deep .input-category-name .mat-form-field-infix{border-top:none}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}:host ::ng-deep .child-list .dnd-box.cdk-drag-preview{width:100%!important;overflow:hidden;box-sizing:border-box;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}:host ::ng-deep .child-list .cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}:host ::ng-deep .child-list .field-box.cdk-drop-list-dragging .dnd-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}:host ::ng-deep .child-list .cdk-drag.dnd-box.cdk-drag-dragging{min-width:185px}:host ::ng-deep .child-list .cdk-drag.dnd-box.cdk-drag-dragging>div{margin-bottom:15px!important;min-width:185px}:host ::ng-deep .child-list .cdk-drag.dnd-box.cdk-drag-dragging>div>div{min-width:185px}:host ::ng-deep .child-list .cdk-drag.dnd-box.cdk-drag-dragging>div .mat-form-field-wrapper{min-width:185px}:host ::ng-deep .child-list .field-box{min-height:84px}:host ::ng-deep .child-list .field-box .dnd-placeholder{margin:0 10px;padding:0;height:44px!important;max-height:44px!important;display:flex;flex-grow:1;align-items:baseline;position:relative;border-radius:8px;opacity:1!important;transform:translateZ(0)!important}:host ::ng-deep .child-list .cdk-drop-list-dragging>div.dnd-box{display:none}::ng-deep .cdk-drag.dnd-box.cdk-drag-preview{height:68px;border-radius:0}::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item{margin:0;height:44px}::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper{height:44px}::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .input-phone,::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .mat-input-element,::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .mat-select-value,::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .mat-select-arrow-wrapper{opacity:0}.category-item,.cdk-drag-placeholder{display:flex;align-items:baseline;position:relative;width:100%;border-radius:8px;background-color:#fff;margin-bottom:15px;margin-right:5px;padding:6px 15px}.category-item .left-action,.cdk-drag-placeholder .left-action{height:auto;width:40px;align-self:baseline;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item .left-action .transparent-button,.cdk-drag-placeholder .left-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item .left-action .transparent-button .drag-icon,.cdk-drag-placeholder .left-action .transparent-button .drag-icon{color:#171f26;cursor:move;margin-right:15px}.category-item .field-content,.cdk-drag-placeholder .field-content{width:calc(100% - 40px);align-self:center}.category-item .field-content .child-list,.cdk-drag-placeholder .field-content .child-list{display:flex;flex-wrap:wrap;background-color:transparent;width:103%;position:relative;margin-left:-1.5%}.category-item .field-content .field-item,.cdk-drag-placeholder .field-content .field-item{display:flex;justify-content:space-between;align-items:baseline;border:transparent!important}.category-item .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.cdk-drag-placeholder .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline{color:transparent!important}.category-item .field-content .mat-form-field-outline,.cdk-drag-placeholder .field-content .mat-form-field-outline{color:transparent!important}.field-box{margin-bottom:15px;display:flex;align-items:center}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.child{margin-left:0}.child-content{display:flex;flex-wrap:wrap;margin-bottom:30px}.sub-category-forms{margin-bottom:0!important;margin-top:10px!important}.category{display:flex;flex-direction:row;width:100%;height:100%}.category .fields{width:100%;overflow:hidden;overflow-x:hidden;position:relative;padding-top:10px;height:calc(100% - 10px)}.category .fields .fields-inner{max-height:100%;height:100%;width:100%;overflow:auto}.category .fields .add-category-button{position:relative!important;width:calc(100% - 40px)!important;padding:20px 0}.category .fields .add-category-button mat-icon{margin-left:10px}.category .fields .add-step{bottom:0!important;top:0!important;width:100%!important}.category .disabled{background-color:#f4f7f9!important}.category .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.category .expand-button .material-icons{font-size:40px}.category .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category{width:93%;position:absolute;left:3%;bottom:-13px}.add-button-sub-category button span{width:100%}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border-radius:8px;margin-top:10px;padding:10px 0;display:flex;justify-content:center;align-items:center;width:100%;margin-bottom:22px;position:absolute;left:0;top:100%}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#000;box-shadow:none}.add-button-container button span{width:100%}.add-category{background-color:#fcfcfe;border-radius:5px;line-height:26px;margin-left:10px;margin-bottom:10px;letter-spacing:0px;color:#c2c8d5;width:92%}.field-content .cdk-drag{width:100%}.cdk-drag{width:auto;position:relative}.cdk-drag .fields-content{display:flex;height:100%;width:100%;margin:0}.cdk-drag .fields-content .button-action{align-self:baseline;margin-top:0;margin-left:3px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag .fields-content .button-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag .fields-content .button-action .transparent-button .drag-icon{color:#171f26;cursor:move;margin-right:15px}.cdk-drag .fields-content .child-3-background{background-color:#e5e8ee!important}.cdk-drag .fields-content .fields-container{border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px;position:relative;margin-bottom:10px}.cdk-drag .fields-content .fields-container lib-sub-category .field-item{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action{background-color:#039be5!important;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.side-bar{display:flex;flex-direction:column}.register-button{background:no-repeat padding-box #171f26!important;border:2px solid #171f26!important;color:#fff!important;box-shadow:0 0 #0003;border-radius:7px}.forward{padding:6px}.live-button{background-color:#fff!important;color:#171f26!important;border:2px solid #171f26!important}.content-item{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}.field-property{padding:11px;height:calc(100% - 22px);width:400px}.field-property h3{font-size:20px;line-height:110%;padding-top:10px;display:flex;align-items:center;color:#242731}.field-property .property-content{display:flex;flex-direction:column;align-items:flex-start;padding:0 20px;background:#ffffff;border-radius:8px 8px 0 0;min-height:100%;height:auto;width:400px}.field-property .property-content button{text-align:center}.field-property .property-content .property-content-inner{display:flex;flex-direction:column;gap:25px;overflow:auto;max-height:700px;padding-bottom:25px}.field-property .bloc-action{text-align:center}.field-property .bloc-action button{width:100%;padding:6px;margin-top:10px}.field-property .bloc-action button mat-icon{margin-left:5px}.field-property .bloc-action .delete-bloc{background:#f44336;box-shadow:0 0 #0003;border-radius:7px;color:#fff}.fields-inner::-webkit-scrollbar{width:5px}.fields-inner::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.fields-inner::-webkit-scrollbar-thumb{background:transparent;border-radius:10px}.fields-inner::-webkit-scrollbar-thumb:hover{background:transparent}.toogle-button{color:#707273!important;display:flex;align-items:center;font-style:normal;font-weight:400;font-size:18px;line-height:18px}.toogle-button span{padding-right:10px}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}:host ::ng-deep .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5}.top-10{margin-top:10px}.bottom-10{margin-bottom:10px}.section-item{border:2px solid transparent;overflow:hidden}.section-item:hover,.section-item.active{border:2px solid #242731;border-radius:8px;cursor:pointer}::ng-deep .select-type-class.mat-select-disabled .mat-select-value{color:#000!important;cursor:pointer}::ng-deep button .mat-button-wrapper{display:flex;align-items:center;justify-content:center}::ng-deep .field-content .mat-form-field,::ng-deep .field-content .select-content{width:100%}::ng-deep .field-content .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:100%!important}::ng-deep .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle,::ng-deep .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5!important}::ng-deep .fields-content .mat-radio-button.mat-accent .mat-radio-inner-circle,::ng-deep .fields-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),::ng-deep .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,::ng-deep .fields-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple,::ng-deep .property-content .mat-radio-button.mat-accent .mat-radio-inner-circle,::ng-deep .property-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),::ng-deep .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,::ng-deep .property-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5!important}::ng-deep .fields-content .mat-checkbox-checkmark-path,::ng-deep .property-content .mat-checkbox-checkmark-path{stroke:#039be5!important}::ng-deep .fields-content .mat-checkbox-frame,::ng-deep .property-content .mat-checkbox-frame{border:2px solid #039BE5!important}::ng-deep .fields-content .mat-checkbox-inner-container,::ng-deep .property-content .mat-checkbox-inner-container{height:20px!important;width:20px!important}.setting{z-index:1;background-color:#d5d6d7!important;border-radius:40px;width:42px!important;height:40px!important;padding:0 10px!important;display:flex;align-items:center;justify-content:center;display:none}.setting .setting-icon,.setting .transparent-button{color:#171f26}.sub-header:hover .setting{display:flex}.add-button-sub-category button{margin:10px auto;width:100%;background-color:transparent;color:#000;box-shadow:none;background-color:#fcfcfe;padding:5px span;padding-width:100%!important}::ng-deep .add-button{padding:10px 0}::ng-deep .add-button span{width:100%}::ng-deep .mat-button[disabled]{opacity:.5!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$2.UntypedFormBuilder }, { type: OnboardingService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: i1$1.MatDialog }, { type: i5$1.ScrollToService }]; }, propDecorators: { onScroll: [{
                type: HostListener,
                args: ['scroll', ['$event']]
            }] } });

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
MaterialElevationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: MaterialElevationDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
MaterialElevationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.6", type: MaterialElevationDirective, selector: "[appMaterialElevation]", inputs: { defaultElevation: "defaultElevation", raisedElevation: "raisedElevation" }, host: { listeners: { "mouseenter": "onMouseEnter()", "mouseleave": "onMouseLeave()" } }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: MaterialElevationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appMaterialElevation]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { defaultElevation: [{
                type: Input
            }], raisedElevation: [{
                type: Input
            }], onMouseEnter: [{
                type: HostListener,
                args: ['mouseenter']
            }], onMouseLeave: [{
                type: HostListener,
                args: ['mouseleave']
            }] } });

class NoDataComponent {
    constructor(service) {
        this.service = service;
        this.showPopup = new EventEmitter();
        this.locale = {};
        this.service._lang.subscribe((locale) => {
            this.locale = locales[locale].PROFILE;
        });
    }
    ngOnInit() {
    }
    onShowPopup() {
        this.showPopup.emit(true);
    }
}
NoDataComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: NoDataComponent, deps: [{ token: OnboardingService }], target: i0.ɵɵFactoryTarget.Component });
NoDataComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: NoDataComponent, selector: "lib-no-data", outputs: { showPopup: "showPopup" }, ngImport: i0, template: "<div class=\"no-data-container\">\n  <div class=\"no-data-spinner\">\n    <div class=\"level-1\">\n      <div class=\"level-2\">\n        <div class=\"level-2-inner\">\n        </div>\n      </div>\n    </div>\n    <div class=\"level-3\">\n      <div class=\"level-3-inner\">\n      </div>\n    </div>\n  </div>\n  <h2>\n    {{locale?.YOU_DO_NOT_CURRENT}}\n  </h2>\n  <p>{{locale?.THANKS_TO_THE_STANDARD}}</p>\n  <a role=\"button\" class=\"add-profil\" mat-raised-button color=\"primary\" (click)=\"onShowPopup()\">\n    {{locale?.CREATE_PROFILE}} <mat-icon>add</mat-icon>\n  </a>\n</div>", styles: [".no-data-container{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;height:98vh;text-align:center}.no-data-container h2{font-style:normal;font-weight:700;font-size:32px;line-height:120%}.no-data-container p{font-style:normal;font-weight:400;font-size:16px;line-height:150%}.no-data-spinner{width:150px;height:150px;position:relative}.no-data-spinner .level-1{width:100%;height:100%;border-radius:150px;background:#717373;filter:blur(5px)}.no-data-spinner .level-2{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.no-data-spinner .level-2 .level-2-inner{width:112.5px;height:112.5px;border-radius:112.5px;background:#B8BABA;filter:blur(5px)}.no-data-spinner .level-3{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0}.no-data-spinner .level-3 .level-3-inner{width:75px;height:75px;border-radius:75px;background:#FFFFFF}\n"], dependencies: [{ kind: "component", type: i5.MatAnchor, selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i6$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: NoDataComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-no-data', template: "<div class=\"no-data-container\">\n  <div class=\"no-data-spinner\">\n    <div class=\"level-1\">\n      <div class=\"level-2\">\n        <div class=\"level-2-inner\">\n        </div>\n      </div>\n    </div>\n    <div class=\"level-3\">\n      <div class=\"level-3-inner\">\n      </div>\n    </div>\n  </div>\n  <h2>\n    {{locale?.YOU_DO_NOT_CURRENT}}\n  </h2>\n  <p>{{locale?.THANKS_TO_THE_STANDARD}}</p>\n  <a role=\"button\" class=\"add-profil\" mat-raised-button color=\"primary\" (click)=\"onShowPopup()\">\n    {{locale?.CREATE_PROFILE}} <mat-icon>add</mat-icon>\n  </a>\n</div>", styles: [".no-data-container{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;height:98vh;text-align:center}.no-data-container h2{font-style:normal;font-weight:700;font-size:32px;line-height:120%}.no-data-container p{font-style:normal;font-weight:400;font-size:16px;line-height:150%}.no-data-spinner{width:150px;height:150px;position:relative}.no-data-spinner .level-1{width:100%;height:100%;border-radius:150px;background:#717373;filter:blur(5px)}.no-data-spinner .level-2{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.no-data-spinner .level-2 .level-2-inner{width:112.5px;height:112.5px;border-radius:112.5px;background:#B8BABA;filter:blur(5px)}.no-data-spinner .level-3{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0}.no-data-spinner .level-3 .level-3-inner{width:75px;height:75px;border-radius:75px;background:#FFFFFF}\n"] }]
        }], ctorParameters: function () { return [{ type: OnboardingService }]; }, propDecorators: { showPopup: [{
                type: Output
            }] } });

const FadeInOut = trigger('fadeInOut', [
    state('loaded', style({
        opacity: 0,
        'z-index': -1
    })),
    state('loading', style({
        opacity: 1,
    })),
    transition('* => *', animate('500ms ease-out')),
]);
class NowboardLoaderComponent {
    constructor() {
        this.state = true;
        this._state = 'loading';
        this.options = {
            path: '/assets/loader/light.json',
        };
    }
    set State(value) {
        this._state = value;
    }
    animationCreated(animationItem) {
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes && changes.state !== undefined) {
            this.State = changes.state.currentValue ? 'loading' : 'loaded';
        }
    }
}
NowboardLoaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: NowboardLoaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NowboardLoaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: NowboardLoaderComponent, selector: "nowboard-loader", inputs: { state: "state" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"nowboard-loader\" [@fadeInOut]=\"_state\">\r\n  <ng-lottie [options]=\"options\" (animationCreated)=\"animationCreated($event)\" width=\"400\"></ng-lottie>\r\n</div>\r\n", styles: [".loader{margin:0 auto;width:60px;height:50px;text-align:center;font-size:10px;position:absolute;top:50%;left:50%;-webkit-transform:translateY(-50%) translateX(-50%)}.loader>div{height:100%;width:8px;display:inline-block;float:left;margin-left:2px;animation:delay .8s infinite ease-in-out}.loader .bar1{background-color:#754fa0}.loader .bar2{background-color:#09b7bf;animation-delay:-.7s}.loader .bar3{background-color:#90d36b;animation-delay:-.6s}.loader .bar4{background-color:#f2d40d;animation-delay:-.5s}.loader .bar5{background-color:#fcb12b;animation-delay:-.4s}.loader .bar6{background-color:#ed1b72;animation-delay:-.3s}@keyframes delay{0%,40%,to{transform:scaleY(.05);-webkit-transform:scaleY(.05)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}\n"], dependencies: [{ kind: "component", type: i1$4.LottieComponent, selector: "ng-lottie", inputs: ["width", "height"] }], animations: [
        FadeInOut
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: NowboardLoaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nowboard-loader', animations: [
                        FadeInOut
                    ], template: "<div class=\"nowboard-loader\" [@fadeInOut]=\"_state\">\r\n  <ng-lottie [options]=\"options\" (animationCreated)=\"animationCreated($event)\" width=\"400\"></ng-lottie>\r\n</div>\r\n", styles: [".loader{margin:0 auto;width:60px;height:50px;text-align:center;font-size:10px;position:absolute;top:50%;left:50%;-webkit-transform:translateY(-50%) translateX(-50%)}.loader>div{height:100%;width:8px;display:inline-block;float:left;margin-left:2px;animation:delay .8s infinite ease-in-out}.loader .bar1{background-color:#754fa0}.loader .bar2{background-color:#09b7bf;animation-delay:-.7s}.loader .bar3{background-color:#90d36b;animation-delay:-.6s}.loader .bar4{background-color:#f2d40d;animation-delay:-.5s}.loader .bar5{background-color:#fcb12b;animation-delay:-.4s}.loader .bar6{background-color:#ed1b72;animation-delay:-.3s}@keyframes delay{0%,40%,to{transform:scaleY(.05);-webkit-transform:scaleY(.05)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { state: [{
                type: Input
            }] } });

class TemplateProfileListComponent {
    constructor(service, router, dialog) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ["Name", "vcontacts", "createdAt", "updatedAt", "action"];
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
        this.locale = {};
        this.ngxFilterData = [];
        this.toTemplateCopyId = "";
        this.currentFilter = "all";
        this.tags = [];
        this.showNowboardLoader = false;
        this.showCreateProfileButton = false;
        this.service.templates.subscribe((templates) => {
            if (templates && templates.length > 0) {
                this.datas = templates;
            }
        });
        this.service._lang.subscribe((locale) => {
            if (locale) {
                this.locale = locales[locale].PROFILES_LIST;
                this.ngxFilterData = [
                    {
                        filterData: {
                            type: "select",
                            value: "",
                            key: 'Status',
                            label: this.locale.STATUS,
                            options: [
                                {
                                    value: true,
                                    label: this.locale.PUBLISH
                                },
                                {
                                    value: false,
                                    label: this.locale.DRAFT
                                },
                            ],
                        }
                    },
                    {
                        filterData: {
                            type: 'date',
                            key: 'createdAt',
                            operator: "gte",
                            label: this.locale.DATE_MIN
                        }
                    },
                    {
                        filterData: {
                            type: 'date',
                            key: 'createdAt',
                            operator: "lte",
                            label: this.locale.DATE_MAX
                        }
                    },
                    {
                        filterData: {
                            type: "sort",
                            key: "Name",
                            value: "asc",
                            label: this.locale.NAME
                        }
                    }
                ];
            }
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.ngxFilterInit = JSON.stringify(this.ngxFilterData);
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                yield this.getAllProfils();
                this.tags = yield this.service.getAllTags();
            }), 500);
        });
    }
    onFilter(event) {
        if (event.datas) {
            this.publishTemplate = event.datas.filter((d) => d.Status === true);
            this.draftTemplate = event.datas.filter((d) => d.Status === false);
        }
    }
    onRefresh(event) {
        this.ngxFilterData = JSON.parse(this.ngxFilterInit);
        // if (event.datas) {
        //   this.publishTemplate = event.datas.filter((d) => d.Status === true);
        //   this.draftTemplate = event.datas.filter((d) => d.Status === false);
        // }
    }
    onScroll(event) {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll(".live-template .box-template");
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
            this.showNowboardLoader = true;
            const profile = yield this.service.getAllProfil();
            this.datas = profile;
            this.publishTemplate = this.datas.filter((d) => d.Status === true);
            this.draftTemplate = this.datas.filter((d) => d.Status === false);
            this.publishTemplateLength = this.publishTemplate.length;
            this.draftTemplateLength = this.draftTemplate.length;
            setTimeout(() => {
                this.showNowboardLoader = false;
                this.showCreateProfileButton = this.datas.length ? false : true;
            }, 500);
        });
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
TemplateProfileListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: TemplateProfileListComponent, deps: [{ token: OnboardingService }, { token: i2.Router }, { token: i1$1.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
TemplateProfileListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: TemplateProfileListComponent, selector: "onboarding-profile-list", host: { listeners: { "scroll": "onScroll($event)" } }, viewQueries: [{ propertyName: "paginator", first: true, predicate: MatPaginator, descendants: true }, { propertyName: "sort", first: true, predicate: MatSort, descendants: true }], ngImport: i0, template: "<div class=\"main\">\r\n\r\n    <ng-container *ngIf=\"showNowboardLoader && !showCreateProfileButton\">\r\n        <div class=\"nowboard-loader-container\">\r\n            <nowboard-loader [state]=\"showNowboardLoader\"></nowboard-loader>\r\n        </div>    \r\n    </ng-container>\r\n    <ng-container *ngIf=\"!showCreateProfileButton else noDatas\">\r\n        <div class=\"content-list\" *ngIf=\"datas && datas?.length!==0\">\r\n            <div class=\"list\">\r\n                <div class=\"header-top\">\r\n                    <h2>{{locale?.PROFILES}} ({{datas.length}})</h2>\r\n                    <a role=\"button\" class=\"add-profil\" (click)=\"openDialog()\" mat-raised-button color=\"primary\">\r\n                        <mat-icon>add</mat-icon> {{locale?.CREATE_PROFILE}}\r\n                    </a>\r\n                </div>\r\n                <div class=\"list-title\">\r\n                    <ngx-filter [filterConfig]=\"ngxFilterData\" lang=\"fr\" (onFilter)=\"onFilter($event)\"\r\n                        (onRefresh)=\"onRefresh($event)\" [datas]=\"datas\" placeholder=\"Recherche...\" [withRefresh]=\"true\">\r\n                    </ngx-filter>\r\n                    <!-- <div class=\"filter-item\">\r\n                        <ngx-filter searchType=\"search-text\" lang=\"fr\" (onFilter)=\"onFilter($event)\"\r\n                            (onRefresh)=\"onFilter($event)\" [datas]=\"datas\">\r\n                        </ngx-filter>\r\n                    </div> -->\r\n                </div>\r\n                <div class=\"profil-list-content\">\r\n                    <div class=\"live-template\" (scroll)=\"onScroll($event)\">\r\n                        <section appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\r\n                            *ngFor=\"let d of publishTemplate;let index=index\" [id]=\"d.Name\">\r\n                            <div class=\"toogle-button\"><span>{{locale?.LIVE}}</span>\r\n                                <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"d.Status\"\r\n                                    (ngModelChange)=\"onChangeStatus(d,false)\">\r\n                                </mat-slide-toggle>\r\n                            </div>\r\n                            <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\r\n                                <p class=\"template-title\"> {{d.Name}}</p>\r\n                                <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\r\n                            </div>\r\n    \r\n                            <div class=\"template-footer\">\r\n                                <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                    (click)=\"onEditProfil(d._id)\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                    (click)=\"copyTemplate(d)\" [ngxScrollTo]=\"toTemplateCopyId\">\r\n                                    <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\r\n                                    <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\r\n                                </button>\r\n                                <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                    (click)=\"onDelete(d._id)\">\r\n                                    <mat-icon>delete</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </section>\r\n                    </div>\r\n                    <div class=\"draft-template\">\r\n                        <div appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\r\n                            *ngFor=\"let d of draftTemplate;let index=index\">\r\n                            <div class=\"toogle-button draft\"><span>{{locale?.DRAFT}}</span>\r\n                                <mat-slide-toggle class=\"draft\" [(ngModel)]=\"d.Status\"\r\n                                    (ngModelChange)=\"onChangeStatus(d,true)\">\r\n                                </mat-slide-toggle>\r\n                            </div>\r\n                            <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\r\n                                <p class=\"template-title\"> {{d.Name}}</p>\r\n                                <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\r\n                            </div>\r\n    \r\n                            <div class=\"template-footer\">\r\n                                <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                    (click)=\"onEditProfil(d._id)\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                    (click)=\"copyTemplate(d)\">\r\n                                    <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\r\n                                    <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\r\n                                </button>\r\n                                <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                    (click)=\"onDelete(d._id)\">\r\n                                    <mat-icon>delete</mat-icon>\r\n                                </button>\r\n                            </div>\r\n    \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>    \r\n    </ng-container>\r\n    <ng-template #noDatas>\r\n        <lib-no-data (showPopup)=\"openDialog()\"></lib-no-data>\r\n    </ng-template>\r\n</div>\r\n", styles: [".main{background:#f4f7f9 0% 0% no-repeat padding-box;opacity:1;height:100%}.main .content-list{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main .content-list h3{text-align:left;letter-spacing:0px;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main .content-list p.sub-title{margin-bottom:57px;letter-spacing:0px;color:#171f26;width:300px}.main .content-list .template-title{font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main .content-list .template-date{font-weight:250;font-size:14px;line-height:120%}.main .content-list .list{display:flex;flex-direction:column;gap:25px}.main .content-list .list .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.main .content-list .list .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.main .content-list .list .list-title ul li{padding-bottom:10px;cursor:pointer}.main .content-list .list .list-title ul li.active{border-bottom:4px solid #3c4252}.main .content-list .list .list-title .add-profil{margin-right:50px}.main .content-list .list .draft-template,.main .content-list .list .live-template{display:flex;flex-wrap:wrap;justify-content:flex-start;margin-bottom:30px;gap:30px}.main .content-list .list .box-template{width:277px;height:300px;position:relative;background:#ffffff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main .content-list .list .box-template img{width:81px;height:81px}.main .content-list .list .box-template a{background:#171f26 0% 0% no-repeat padding-box;border-radius:7px;font-size:15px}.main .content-list .list .box-template .box-content{width:100%;text-align:center}.main .content-list .list .box-template .box-content .picto-preview{width:113px;height:113px;background:#ffffff 0% 0% no-repeat padding-box;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main .content-list .list .box-template .box-content .picto-preview h3{font-size:40px;color:#dce4e9}.main .content-list .list .box-template .toogle-button{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-style:normal;font-size:18px;line-height:18px}.main .content-list .list .box-template .toogle-button span{padding-right:10px}.main .content-list .list .box-template .toogle-button.draft{color:#f3a124}.main .content-list .list .new-template{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main .content-list .list .add-profil{background-color:#171f26}.main .content-list .template-footer{background:#543cb6;border-radius:0 0 5px 5px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main .content-list .template-footer button.action-button{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}.blink{animation:blink 2s ease-out;border:2px solid red;border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}to{transform:scale(1);opacity:1}}.header-top{display:flex;align-items:center;justify-content:space-between}.profil-list-content{max-height:70vh;overflow:auto}.profil-list-content::-webkit-scrollbar{width:5px}.profil-list-content::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.nowboard-loader-container{margin:auto;width:200px;height:200px;position:absolute;inset:0;overflow:hidden;z-index:999}::ng-deep ngx-filter{width:100%}::ng-deep ngx-filter ngx-filter-group ul{padding:0}\n"], dependencies: [{ kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i5.MatAnchor, selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matButton", "matAnchor"] }, { kind: "directive", type: i4$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i2.RouterLink, selector: ":not(a):not(area)[routerLink]", inputs: ["queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i5$1.ScrollToDirective, selector: "[ngxScrollTo]", inputs: ["ngxScrollTo", "ngxScrollToEvent", "ngxScrollToDuration", "ngxScrollToEasing", "ngxScrollToOffset", "ngxScrollToOffsetMap"] }, { kind: "component", type: i9$1.NgxFilterLibraryComponent, selector: "ngx-filter", inputs: ["filterConfig", "lang", "withRefresh", "withGlobalSearch", "placeholder", "searchType", "datas"], outputs: ["onFilter", "onRefresh"] }, { kind: "directive", type: i9.NativeElementInjectorDirective, selector: "[ngModel], [formControl], [formControlName]" }, { kind: "component", type: i13.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }, { kind: "directive", type: MaterialElevationDirective, selector: "[appMaterialElevation]", inputs: ["defaultElevation", "raisedElevation"] }, { kind: "component", type: LoadingPageComponent, selector: "lib-loading-page" }, { kind: "component", type: NoDataComponent, selector: "lib-no-data", outputs: ["showPopup"] }, { kind: "component", type: NowboardLoaderComponent, selector: "nowboard-loader", inputs: ["state"] }, { kind: "pipe", type: i4$1.DatePipe, name: "date" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: TemplateProfileListComponent, decorators: [{
            type: Component,
            args: [{ selector: "onboarding-profile-list", template: "<div class=\"main\">\r\n\r\n    <ng-container *ngIf=\"showNowboardLoader && !showCreateProfileButton\">\r\n        <div class=\"nowboard-loader-container\">\r\n            <nowboard-loader [state]=\"showNowboardLoader\"></nowboard-loader>\r\n        </div>    \r\n    </ng-container>\r\n    <ng-container *ngIf=\"!showCreateProfileButton else noDatas\">\r\n        <div class=\"content-list\" *ngIf=\"datas && datas?.length!==0\">\r\n            <div class=\"list\">\r\n                <div class=\"header-top\">\r\n                    <h2>{{locale?.PROFILES}} ({{datas.length}})</h2>\r\n                    <a role=\"button\" class=\"add-profil\" (click)=\"openDialog()\" mat-raised-button color=\"primary\">\r\n                        <mat-icon>add</mat-icon> {{locale?.CREATE_PROFILE}}\r\n                    </a>\r\n                </div>\r\n                <div class=\"list-title\">\r\n                    <ngx-filter [filterConfig]=\"ngxFilterData\" lang=\"fr\" (onFilter)=\"onFilter($event)\"\r\n                        (onRefresh)=\"onRefresh($event)\" [datas]=\"datas\" placeholder=\"Recherche...\" [withRefresh]=\"true\">\r\n                    </ngx-filter>\r\n                    <!-- <div class=\"filter-item\">\r\n                        <ngx-filter searchType=\"search-text\" lang=\"fr\" (onFilter)=\"onFilter($event)\"\r\n                            (onRefresh)=\"onFilter($event)\" [datas]=\"datas\">\r\n                        </ngx-filter>\r\n                    </div> -->\r\n                </div>\r\n                <div class=\"profil-list-content\">\r\n                    <div class=\"live-template\" (scroll)=\"onScroll($event)\">\r\n                        <section appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\r\n                            *ngFor=\"let d of publishTemplate;let index=index\" [id]=\"d.Name\">\r\n                            <div class=\"toogle-button\"><span>{{locale?.LIVE}}</span>\r\n                                <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"d.Status\"\r\n                                    (ngModelChange)=\"onChangeStatus(d,false)\">\r\n                                </mat-slide-toggle>\r\n                            </div>\r\n                            <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\r\n                                <p class=\"template-title\"> {{d.Name}}</p>\r\n                                <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\r\n                            </div>\r\n    \r\n                            <div class=\"template-footer\">\r\n                                <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                    (click)=\"onEditProfil(d._id)\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                    (click)=\"copyTemplate(d)\" [ngxScrollTo]=\"toTemplateCopyId\">\r\n                                    <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\r\n                                    <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\r\n                                </button>\r\n                                <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                    (click)=\"onDelete(d._id)\">\r\n                                    <mat-icon>delete</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </section>\r\n                    </div>\r\n                    <div class=\"draft-template\">\r\n                        <div appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\r\n                            *ngFor=\"let d of draftTemplate;let index=index\">\r\n                            <div class=\"toogle-button draft\"><span>{{locale?.DRAFT}}</span>\r\n                                <mat-slide-toggle class=\"draft\" [(ngModel)]=\"d.Status\"\r\n                                    (ngModelChange)=\"onChangeStatus(d,true)\">\r\n                                </mat-slide-toggle>\r\n                            </div>\r\n                            <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\r\n                                <p class=\"template-title\"> {{d.Name}}</p>\r\n                                <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\r\n                            </div>\r\n    \r\n                            <div class=\"template-footer\">\r\n                                <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                    (click)=\"onEditProfil(d._id)\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                    (click)=\"copyTemplate(d)\">\r\n                                    <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\r\n                                    <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\r\n                                </button>\r\n                                <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                    (click)=\"onDelete(d._id)\">\r\n                                    <mat-icon>delete</mat-icon>\r\n                                </button>\r\n                            </div>\r\n    \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>    \r\n    </ng-container>\r\n    <ng-template #noDatas>\r\n        <lib-no-data (showPopup)=\"openDialog()\"></lib-no-data>\r\n    </ng-template>\r\n</div>\r\n", styles: [".main{background:#f4f7f9 0% 0% no-repeat padding-box;opacity:1;height:100%}.main .content-list{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main .content-list h3{text-align:left;letter-spacing:0px;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main .content-list p.sub-title{margin-bottom:57px;letter-spacing:0px;color:#171f26;width:300px}.main .content-list .template-title{font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main .content-list .template-date{font-weight:250;font-size:14px;line-height:120%}.main .content-list .list{display:flex;flex-direction:column;gap:25px}.main .content-list .list .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.main .content-list .list .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.main .content-list .list .list-title ul li{padding-bottom:10px;cursor:pointer}.main .content-list .list .list-title ul li.active{border-bottom:4px solid #3c4252}.main .content-list .list .list-title .add-profil{margin-right:50px}.main .content-list .list .draft-template,.main .content-list .list .live-template{display:flex;flex-wrap:wrap;justify-content:flex-start;margin-bottom:30px;gap:30px}.main .content-list .list .box-template{width:277px;height:300px;position:relative;background:#ffffff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main .content-list .list .box-template img{width:81px;height:81px}.main .content-list .list .box-template a{background:#171f26 0% 0% no-repeat padding-box;border-radius:7px;font-size:15px}.main .content-list .list .box-template .box-content{width:100%;text-align:center}.main .content-list .list .box-template .box-content .picto-preview{width:113px;height:113px;background:#ffffff 0% 0% no-repeat padding-box;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main .content-list .list .box-template .box-content .picto-preview h3{font-size:40px;color:#dce4e9}.main .content-list .list .box-template .toogle-button{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-style:normal;font-size:18px;line-height:18px}.main .content-list .list .box-template .toogle-button span{padding-right:10px}.main .content-list .list .box-template .toogle-button.draft{color:#f3a124}.main .content-list .list .new-template{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main .content-list .list .add-profil{background-color:#171f26}.main .content-list .template-footer{background:#543cb6;border-radius:0 0 5px 5px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main .content-list .template-footer button.action-button{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}.blink{animation:blink 2s ease-out;border:2px solid red;border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}to{transform:scale(1);opacity:1}}.header-top{display:flex;align-items:center;justify-content:space-between}.profil-list-content{max-height:70vh;overflow:auto}.profil-list-content::-webkit-scrollbar{width:5px}.profil-list-content::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.nowboard-loader-container{margin:auto;width:200px;height:200px;position:absolute;inset:0;overflow:hidden;z-index:999}::ng-deep ngx-filter{width:100%}::ng-deep ngx-filter ngx-filter-group ul{padding:0}\n"] }]
        }], ctorParameters: function () { return [{ type: OnboardingService }, { type: i2.Router }, { type: i1$1.MatDialog }]; }, propDecorators: { paginator: [{
                type: ViewChild,
                args: [MatPaginator]
            }], sort: [{
                type: ViewChild,
                args: [MatSort]
            }], onScroll: [{
                type: HostListener,
                args: ['scroll', ['$event']]
            }] } });

class CanDeactivateGuard {
    canDeactivate(component, route, state) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
CanDeactivateGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: CanDeactivateGuard, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CanDeactivateGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: CanDeactivateGuard });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: CanDeactivateGuard, decorators: [{
            type: Injectable
        }] });

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
DialogConfirmation.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: DialogConfirmation, deps: [{ token: MAT_DIALOG_DATA }, { token: i1$1.MatDialogRef }], target: i0.ɵɵFactoryTarget.Component });
DialogConfirmation.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: DialogConfirmation, selector: "lib-dialog-confirmation", ngImport: i0, template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n  <h3 class=\"title\">\r\n    <p>\r\n      <mat-icon>check_circle</mat-icon>\r\n    </p>\r\n    <p class=\"message\">{{message}}</p>\r\n  </h3>\r\n  <div class=\"action-content\">\r\n    <button class=\"confirm\" (click)=\"close(true)\" mat-raised-button>\r\n      {{confirmText}}\r\n    </button>\r\n    <button class=\"cancel\" (click)=\"close(false)\" mat-raised-button>\r\n      {{cancelText}}\r\n    </button>\r\n\r\n  </div>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column;justify-content:space-between;text-align:center;padding:12px 25px}mat-dialog-content mat-form-field{margin-bottom:10px}mat-dialog-content h3{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content .action-content{display:flex;justify-content:space-around}mat-dialog-content .confirm{background-color:#242731;color:#fff;box-shadow:0 0 #0003;padding:10px!important;border-radius:7px}mat-dialog-content .cancel{box-shadow:none;border:1px solid #242731;border-radius:7px;padding:10px!important}mat-dialog-content .title{display:flex;flex-direction:column;align-items:center;justify-content:center}mat-dialog-content .title mat-icon{font-size:50px;color:#6fe8d7}mat-dialog-content .title .message{font-style:normal;font-weight:700;font-size:20px;line-height:110%;color:#242731}\n"], dependencies: [{ kind: "component", type: i5.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i6$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i1$1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: DialogConfirmation, decorators: [{
            type: Component,
            args: [{ selector: 'lib-dialog-confirmation', template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n  <h3 class=\"title\">\r\n    <p>\r\n      <mat-icon>check_circle</mat-icon>\r\n    </p>\r\n    <p class=\"message\">{{message}}</p>\r\n  </h3>\r\n  <div class=\"action-content\">\r\n    <button class=\"confirm\" (click)=\"close(true)\" mat-raised-button>\r\n      {{confirmText}}\r\n    </button>\r\n    <button class=\"cancel\" (click)=\"close(false)\" mat-raised-button>\r\n      {{cancelText}}\r\n    </button>\r\n\r\n  </div>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column;justify-content:space-between;text-align:center;padding:12px 25px}mat-dialog-content mat-form-field{margin-bottom:10px}mat-dialog-content h3{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content .action-content{display:flex;justify-content:space-around}mat-dialog-content .confirm{background-color:#242731;color:#fff;box-shadow:0 0 #0003;padding:10px!important;border-radius:7px}mat-dialog-content .cancel{box-shadow:none;border:1px solid #242731;border-radius:7px;padding:10px!important}mat-dialog-content .title{display:flex;flex-direction:column;align-items:center;justify-content:center}mat-dialog-content .title mat-icon{font-size:50px;color:#6fe8d7}mat-dialog-content .title .message{font-style:normal;font-weight:700;font-size:20px;line-height:110%;color:#242731}\n"] }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }, { type: i1$1.MatDialogRef }];
    } });

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
function getIntesectFilterBy(groupResult, textResult, key) {
    return _.intersectionBy(groupResult, textResult, key);
}
const filterParse = (filterConfig, active = 'CreatedDate') => {
    var _a;
    if (filterConfig) {
        const filterData = {};
        const filterDate = {};
        for (const data of filterConfig) {
            if (data.filterData.type !== 'divider' && data.filterData.type !== 'date' && !!((_a = data.filterData) === null || _a === void 0 ? void 0 : _a.value)) {
                filterData[data.filterData.key] = data.filterData.value;
            }
            else if (data.filterData.type !== 'divider') {
                filterDate.active = active;
                if (data.filterData.operator === "gte") {
                    filterDate["valueStart"] = !!data.filterData.value ? data.filterData.value : null;
                }
                else {
                    filterDate["valueEnd"] = !!data.filterData.value ? data.filterData.value : null;
                }
            }
        }
        return { filterData, filterDate };
    }
    return {};
};

class SubOnboardingCreateComponent {
    constructor() {
        this.onAddKeywordFromInput = new EventEmitter();
        this.onKeyPress = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onAddNewField = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onRemoveField = new EventEmitter();
        this.onChangeType = new EventEmitter();
        this.onRemoveKeyword = new EventEmitter();
        this.onAddNewSubLevelField = new EventEmitter();
        this.onExpendMore = new EventEmitter();
        this.onChangeLabel = new EventEmitter();
        this.onCheckedChip = new EventEmitter();
        this.onCheckValue = new EventEmitter();
        this.chipControl = new UntypedFormControl(new Set());
        this.preferredCountries = [CountryISO.UnitedStates, CountryISO.France];
        this.PhoneNumberFormat = PhoneNumberFormat;
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.invalideValue = false;
        this.currentChip = "";
        this.separateDialCode = false;
        this.accounts = [];
        this.prevValue = "";
        this.toggleChip = (chip) => {
            this.onCheckedChip.emit(chip);
            // const addChip = () => { this.chips.add(chip); };
            // const removeChip = () => { this.chips.delete(chip); };
            // this.chips.has(chip) ? removeChip() : addChip();
        };
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
        });
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
    change() {
        this.onChange.emit(true);
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
SubOnboardingCreateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: SubOnboardingCreateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SubOnboardingCreateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: SubOnboardingCreateComponent, selector: "lib-sub-create-onboarding", inputs: { field: "field", length: "length", locale: "locale", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onChange: "onChange", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckValue: "onCheckValue" }, ngImport: i0, template: "<div class=\"field-item\">\r\n    <ng-container *ngIf=\"field.key!=='AccountName'\" [ngSwitch]=\"field.type\">\r\n        <div *ngSwitchCase=\"'toggle'\" class=\"flex-auto field-size toggle-button\">\r\n            <span>{{ field.label }}</span>\r\n            <mat-slide-toggle class=\"form-field\" [(ngModel)]=\"field.value\" (ngModelChange)=\"change()\"\r\n                [ngModelOptions]=\"{ standalone: true }\" [ngStyle]=\"field.selector && { display: 'inine-block' }\">\r\n            </mat-slide-toggle>\r\n        </div>\r\n        <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto w-30\">\r\n            <mat-checkbox class=\"form-field\" style=\"margin-right: 10px;\" (ngModelChange)=\"change()\"\r\n                [class.mat-form-field-invalid]=\"checkboxControl.invalid && checkboxControl.touched\"\r\n                [class]=\"checkSubForm(field) ? 'checkbox-title-active':''\" [(ngModel)]=\"field.value\"\r\n                [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\"\r\n                [ngStyle]=\"field.selector && {'display': 'inine-block'}\" #checkboxControl=\"ngModel\">\r\n                <label>{{field.label}}</label>\r\n                <ng-container *ngIf=\"field.isMandatory\">\r\n                    <span [class.mat-form-field-invalid]=\"checkboxControl.invalid && checkboxControl.touched\">*</span>\r\n                </ng-container>\r\n            </mat-checkbox>\r\n\r\n            <mat-select placeholder=\"Company\" (ngModelChange)=\"change()\" [(ngModel)]=\"field.selector.value\"\r\n                [ngModelOptions]=\"{standalone: true}\" required *ngIf=\"field.selector\"\r\n                style=\"display: inline-block; width: 50%;\">\r\n                <mat-option *ngFor=\"let select of field.selector.defaultValue\" [value]=\"select.value\">\r\n                    {{select.value}}</mat-option>\r\n            </mat-select>\r\n        </div>\r\n        <div *ngSwitchCase=\"'checkbox_multiple'\" class=\"flex-auto w-30\">\r\n            <label>{{field.label}}</label>\r\n            <div class=\"onboarding-select\" style=\"margin-top: 20px;\">\r\n                <mat-checkbox class=\"form-field\"\r\n                    style=\"display: block; margin-bottom: 5px; margin-top: 10px;margin-right: 10px;\"\r\n                    *ngFor=\"let opt of field.defaultValue\" [checked]=\"opt.checked\" [(ngModel)]=\"opt.checked\"\r\n                    [required]=\"field.isMandatory\" (ngModelChange)=\"change()\" [ngModelOptions]=\"{standalone: true}\">\r\n                    {{opt.value}}\r\n                </mat-checkbox>\r\n            </div>\r\n        </div>\r\n        <div *ngSwitchCase=\"'radio'\" class=\"flex-auto w-30 field-size\">\r\n            <label style=\"display: block;\"> {{field.label}} </label>\r\n            <mat-radio-group class=\"form-field radio-group field-size\" (ngModelChange)=\"change()\"\r\n                [(ngModel)]=\"field.value\" [required]=\"field.isMandatory\" aria-label=\"Select an option\">\r\n                <mat-radio-button *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">{{opt.value}}\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n            <mat-form-field *ngIf=\"'autre'===formatOther(field.value)\" class=\"form-field field-size other-option\"\r\n                appearance=\"outline\">\r\n                <mat-label>{{locale?.OTHER_OPTION}}</mat-label>\r\n                <input type=\"text\" [required]=\"field.isMandatory\" matInput (ngModelChange)=\"change()\"\r\n                    [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.otherValue\" placeholder=\"\">\r\n            </mat-form-field>\r\n        </div>\r\n        <div *ngSwitchCase=\"'select'\" class=\"flex-auto w-30 field-size\">\r\n            <mat-form-field class=\" mat-select flex-auto w-30 field-size\" appearance=\"outline\">\r\n                <mat-label> {{field.label}} </mat-label>\r\n                <mat-select [(ngModel)]=\"field.value\" (ngModelChange)=\"change()\" [ngModelOptions]=\"{standalone: true}\"\r\n                    [required]=\"field.isMandatory\">\r\n                    <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">\r\n                        {{opt.value}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"'autre'===formatOther(field.value)\" class=\"form-field field-size other-option\"\r\n                appearance=\"outline\">\r\n                <mat-label>Autre option</mat-label>\r\n                <input type=\"text\" [required]=\"field.isMandatory\" (ngModelChange)=\"change()\" matInput\r\n                    [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.otherValue\" placeholder=\"\">\r\n            </mat-form-field>\r\n        </div>\r\n        <mat-form-field *ngSwitchCase=\"'textarea'\" class=\"form-field full-width\" appearance=\"outline\">\r\n            <mat-label>{{field.label}}</mat-label>\r\n            <textarea type=\"text\" rows=\"5\" matInput [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\"\r\n                [(ngModel)]=\"field.value\" (ngModelChange)=\"change()\" placeholder=\"Description...\"></textarea>\r\n        </mat-form-field>\r\n        <div *ngSwitchCase=\"'tel'\" class=\"form-field full-width tel-input\">\r\n            <mat-label class=\"tel-label\">\r\n                {{field.label}}\r\n                <ng-container *ngIf=\"field.isMandatory\">\r\n                    <span [class.mat-form-field-invalid]=\"inputPhoneConrol.invalid && inputPhoneConrol.touched\">*</span>\r\n                </ng-container>\r\n            </mat-label>\r\n            <ngx-intl-tel-input [required]=\"field.isMandatory\" id=\"onboarding-phone-input\" class=\"phone-input-profile\"\r\n                [cssClass]=\"'input-phone'\" [preferredCountries]=\"preferredCountries\" [enableAutoCountrySelect]=\"false\"\r\n                [enablePlaceholder]=\"true\" [customPlaceholder]=\"'Phone'\" [selectFirstCountry]=\"false\"\r\n                [selectedCountryISO]=\"flag(field.value)\" [maxLength]=\"15\" [inputId]=\"field.key\" [phoneValidation]=\"true\"\r\n                [separateDialCode]=\"separateDialCode\" [numberFormat]=\"PhoneNumberFormat.National\" name=\"phone\"\r\n                (input)=\"checkPhone(field.value)\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.value\"\r\n                (ngModelChange)=\"change()\" #inputPhoneConrol=\"ngModel\">\r\n            </ngx-intl-tel-input>\r\n            <mat-error *ngIf=\"invalideValue\">{{locale?.INVALID_PHONE}}</mat-error>\r\n        </div>\r\n        <mat-form-field *ngSwitchCase=\"'none'\" class=\"form-field field-size\" appearance=\"outline\" style=\"opacity:0 ;\">\r\n            <mat-label></mat-label>\r\n            <input [type]=\"field.type\" disabled=\"true\" matInput />\r\n        </mat-form-field>\r\n        <mat-form-field *ngSwitchCase=\"'date'\" class=\"form-field field-size\" appearance=\"outline\">\r\n            <mat-label>{{field.label}}</mat-label>\r\n            <input matInput [matDatepicker]=\"picker\" [ngModelOptions]=\"{ standalone: true }\"\r\n                [required]=\"field.isMandatory\" [(ngModel)]=\"field.value\" (ngModelChange)=\"change()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n        <mat-form-field *ngSwitchDefault class=\"form-field field-size\" appearance=\"outline\">\r\n            <mat-label>{{field.label}}</mat-label>\r\n            <input [type]=\"field.type\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\r\n                [(ngModel)]=\"field.value\" (ngModelChange)=\"change()\" placeholder=\"\">\r\n        </mat-form-field>\r\n    </ng-container>\r\n    <div *ngIf=\"field.key==='AccountName'\" class=\"flex-auto w-30 field-size\">\r\n        <mat-form-field class=\" mat-select flex-auto w-30 field-size\" appearance=\"outline\">\r\n            <mat-label> {{field.label}} </mat-label>\r\n            <mat-select [(ngModel)]=\"field.value\" (ngModelChange)=\"change()\" [ngModelOptions]=\"{standalone: true}\"\r\n                [required]=\"field.isMandatory\">\r\n                <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt._id\">\r\n                    {{opt.Name}}</mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n    </div>\r\n</div>\r\n<ng-content select=\".child\"></ng-content>", styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative}.field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.field-action{width:10%}.field-size mat-checkbox{margin:20px}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}::ng-deep .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.expand-button .material-icons{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active{font-weight:700}.other-option{margin-left:10px}.flex-auto{width:100%}::ng-deep .country-dropdown{min-width:unset!important}::ng-deep .tel-input{position:relative}::ng-deep .tel-input .tel-label{font-size:12px;color:#0009;position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-3px}::ng-deep .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;width:100%}::ng-deep .phone-input-profile .iti{width:100%!important}::ng-deep .phone-input-profile .iti input[type=tel]{margin-top:4px}::ng-deep .phone-input-profile input{outline:none;padding:17px;border-radius:5px;border-color:#0000001f;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}.toggle-button{padding-top:15px;display:flex;align-items:center}.toggle-button span{margin-right:10px}.onboarding-select{display:grid;grid-template-columns:repeat(6,1fr)}\n"], dependencies: [{ kind: "directive", type: i1$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2$1.MatError, selector: "mat-error", inputs: ["id"] }, { kind: "component", type: i2$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2$1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2$1.MatSuffix, selector: "[matSuffix]" }, { kind: "directive", type: i4$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i4$1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i4$1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i4$1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: i4$2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "directive", type: i4$2.MatCheckboxRequiredValidator, selector: "mat-checkbox[required][formControlName],             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]" }, { kind: "component", type: i7.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i1$3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i10.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i10.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "component", type: i9.NgxIntlTelInputComponent, selector: "ngx-intl-tel-input", inputs: ["value", "preferredCountries", "enablePlaceholder", "numberFormat", "cssClass", "onlyCountries", "enableAutoCountrySelect", "searchCountryFlag", "searchCountryField", "searchCountryPlaceholder", "maxLength", "selectFirstCountry", "phoneValidation", "inputId", "separateDialCode", "customPlaceholder", "selectedCountryISO"], outputs: ["countryChange"] }, { kind: "directive", type: i9.NativeElementInjectorDirective, selector: "[ngModel], [formControl], [formControlName]" }, { kind: "component", type: i13.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }, { kind: "component", type: i14.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i14.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i14.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: SubOnboardingCreateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-sub-create-onboarding', template: "<div class=\"field-item\">\r\n    <ng-container *ngIf=\"field.key!=='AccountName'\" [ngSwitch]=\"field.type\">\r\n        <div *ngSwitchCase=\"'toggle'\" class=\"flex-auto field-size toggle-button\">\r\n            <span>{{ field.label }}</span>\r\n            <mat-slide-toggle class=\"form-field\" [(ngModel)]=\"field.value\" (ngModelChange)=\"change()\"\r\n                [ngModelOptions]=\"{ standalone: true }\" [ngStyle]=\"field.selector && { display: 'inine-block' }\">\r\n            </mat-slide-toggle>\r\n        </div>\r\n        <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto w-30\">\r\n            <mat-checkbox class=\"form-field\" style=\"margin-right: 10px;\" (ngModelChange)=\"change()\"\r\n                [class.mat-form-field-invalid]=\"checkboxControl.invalid && checkboxControl.touched\"\r\n                [class]=\"checkSubForm(field) ? 'checkbox-title-active':''\" [(ngModel)]=\"field.value\"\r\n                [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\"\r\n                [ngStyle]=\"field.selector && {'display': 'inine-block'}\" #checkboxControl=\"ngModel\">\r\n                <label>{{field.label}}</label>\r\n                <ng-container *ngIf=\"field.isMandatory\">\r\n                    <span [class.mat-form-field-invalid]=\"checkboxControl.invalid && checkboxControl.touched\">*</span>\r\n                </ng-container>\r\n            </mat-checkbox>\r\n\r\n            <mat-select placeholder=\"Company\" (ngModelChange)=\"change()\" [(ngModel)]=\"field.selector.value\"\r\n                [ngModelOptions]=\"{standalone: true}\" required *ngIf=\"field.selector\"\r\n                style=\"display: inline-block; width: 50%;\">\r\n                <mat-option *ngFor=\"let select of field.selector.defaultValue\" [value]=\"select.value\">\r\n                    {{select.value}}</mat-option>\r\n            </mat-select>\r\n        </div>\r\n        <div *ngSwitchCase=\"'checkbox_multiple'\" class=\"flex-auto w-30\">\r\n            <label>{{field.label}}</label>\r\n            <div class=\"onboarding-select\" style=\"margin-top: 20px;\">\r\n                <mat-checkbox class=\"form-field\"\r\n                    style=\"display: block; margin-bottom: 5px; margin-top: 10px;margin-right: 10px;\"\r\n                    *ngFor=\"let opt of field.defaultValue\" [checked]=\"opt.checked\" [(ngModel)]=\"opt.checked\"\r\n                    [required]=\"field.isMandatory\" (ngModelChange)=\"change()\" [ngModelOptions]=\"{standalone: true}\">\r\n                    {{opt.value}}\r\n                </mat-checkbox>\r\n            </div>\r\n        </div>\r\n        <div *ngSwitchCase=\"'radio'\" class=\"flex-auto w-30 field-size\">\r\n            <label style=\"display: block;\"> {{field.label}} </label>\r\n            <mat-radio-group class=\"form-field radio-group field-size\" (ngModelChange)=\"change()\"\r\n                [(ngModel)]=\"field.value\" [required]=\"field.isMandatory\" aria-label=\"Select an option\">\r\n                <mat-radio-button *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">{{opt.value}}\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n            <mat-form-field *ngIf=\"'autre'===formatOther(field.value)\" class=\"form-field field-size other-option\"\r\n                appearance=\"outline\">\r\n                <mat-label>{{locale?.OTHER_OPTION}}</mat-label>\r\n                <input type=\"text\" [required]=\"field.isMandatory\" matInput (ngModelChange)=\"change()\"\r\n                    [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.otherValue\" placeholder=\"\">\r\n            </mat-form-field>\r\n        </div>\r\n        <div *ngSwitchCase=\"'select'\" class=\"flex-auto w-30 field-size\">\r\n            <mat-form-field class=\" mat-select flex-auto w-30 field-size\" appearance=\"outline\">\r\n                <mat-label> {{field.label}} </mat-label>\r\n                <mat-select [(ngModel)]=\"field.value\" (ngModelChange)=\"change()\" [ngModelOptions]=\"{standalone: true}\"\r\n                    [required]=\"field.isMandatory\">\r\n                    <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">\r\n                        {{opt.value}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"'autre'===formatOther(field.value)\" class=\"form-field field-size other-option\"\r\n                appearance=\"outline\">\r\n                <mat-label>Autre option</mat-label>\r\n                <input type=\"text\" [required]=\"field.isMandatory\" (ngModelChange)=\"change()\" matInput\r\n                    [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.otherValue\" placeholder=\"\">\r\n            </mat-form-field>\r\n        </div>\r\n        <mat-form-field *ngSwitchCase=\"'textarea'\" class=\"form-field full-width\" appearance=\"outline\">\r\n            <mat-label>{{field.label}}</mat-label>\r\n            <textarea type=\"text\" rows=\"5\" matInput [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\"\r\n                [(ngModel)]=\"field.value\" (ngModelChange)=\"change()\" placeholder=\"Description...\"></textarea>\r\n        </mat-form-field>\r\n        <div *ngSwitchCase=\"'tel'\" class=\"form-field full-width tel-input\">\r\n            <mat-label class=\"tel-label\">\r\n                {{field.label}}\r\n                <ng-container *ngIf=\"field.isMandatory\">\r\n                    <span [class.mat-form-field-invalid]=\"inputPhoneConrol.invalid && inputPhoneConrol.touched\">*</span>\r\n                </ng-container>\r\n            </mat-label>\r\n            <ngx-intl-tel-input [required]=\"field.isMandatory\" id=\"onboarding-phone-input\" class=\"phone-input-profile\"\r\n                [cssClass]=\"'input-phone'\" [preferredCountries]=\"preferredCountries\" [enableAutoCountrySelect]=\"false\"\r\n                [enablePlaceholder]=\"true\" [customPlaceholder]=\"'Phone'\" [selectFirstCountry]=\"false\"\r\n                [selectedCountryISO]=\"flag(field.value)\" [maxLength]=\"15\" [inputId]=\"field.key\" [phoneValidation]=\"true\"\r\n                [separateDialCode]=\"separateDialCode\" [numberFormat]=\"PhoneNumberFormat.National\" name=\"phone\"\r\n                (input)=\"checkPhone(field.value)\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.value\"\r\n                (ngModelChange)=\"change()\" #inputPhoneConrol=\"ngModel\">\r\n            </ngx-intl-tel-input>\r\n            <mat-error *ngIf=\"invalideValue\">{{locale?.INVALID_PHONE}}</mat-error>\r\n        </div>\r\n        <mat-form-field *ngSwitchCase=\"'none'\" class=\"form-field field-size\" appearance=\"outline\" style=\"opacity:0 ;\">\r\n            <mat-label></mat-label>\r\n            <input [type]=\"field.type\" disabled=\"true\" matInput />\r\n        </mat-form-field>\r\n        <mat-form-field *ngSwitchCase=\"'date'\" class=\"form-field field-size\" appearance=\"outline\">\r\n            <mat-label>{{field.label}}</mat-label>\r\n            <input matInput [matDatepicker]=\"picker\" [ngModelOptions]=\"{ standalone: true }\"\r\n                [required]=\"field.isMandatory\" [(ngModel)]=\"field.value\" (ngModelChange)=\"change()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n        <mat-form-field *ngSwitchDefault class=\"form-field field-size\" appearance=\"outline\">\r\n            <mat-label>{{field.label}}</mat-label>\r\n            <input [type]=\"field.type\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\r\n                [(ngModel)]=\"field.value\" (ngModelChange)=\"change()\" placeholder=\"\">\r\n        </mat-form-field>\r\n    </ng-container>\r\n    <div *ngIf=\"field.key==='AccountName'\" class=\"flex-auto w-30 field-size\">\r\n        <mat-form-field class=\" mat-select flex-auto w-30 field-size\" appearance=\"outline\">\r\n            <mat-label> {{field.label}} </mat-label>\r\n            <mat-select [(ngModel)]=\"field.value\" (ngModelChange)=\"change()\" [ngModelOptions]=\"{standalone: true}\"\r\n                [required]=\"field.isMandatory\">\r\n                <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt._id\">\r\n                    {{opt.Name}}</mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n    </div>\r\n</div>\r\n<ng-content select=\".child\"></ng-content>", styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative}.field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.field-action{width:10%}.field-size mat-checkbox{margin:20px}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}::ng-deep .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.expand-button .material-icons{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active{font-weight:700}.other-option{margin-left:10px}.flex-auto{width:100%}::ng-deep .country-dropdown{min-width:unset!important}::ng-deep .tel-input{position:relative}::ng-deep .tel-input .tel-label{font-size:12px;color:#0009;position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-3px}::ng-deep .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;width:100%}::ng-deep .phone-input-profile .iti{width:100%!important}::ng-deep .phone-input-profile .iti input[type=tel]{margin-top:4px}::ng-deep .phone-input-profile input{outline:none;padding:17px;border-radius:5px;border-color:#0000001f;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}.toggle-button{padding-top:15px;display:flex;align-items:center}.toggle-button span{margin-right:10px}.onboarding-select{display:grid;grid-template-columns:repeat(6,1fr)}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { field: [{
                type: Input
            }], length: [{
                type: Input
            }], locale: [{
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
            }], onChange: [{
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
            }] } });

class OnboardingDetailComponent {
    constructor(router, service, _bottomSheet) {
        this.router = router;
        this.service = service;
        this._bottomSheet = _bottomSheet;
        this.onShowMode = new EventEmitter(true);
        this.locale = {};
        this.service._lang.subscribe((locale) => {
            this.locale = locales[locale].REQUEST;
        });
    }
    ngOnInit() {
    }
    openBottomSheet(attach) {
        this._bottomSheet.open(BottomSheet, {
            data: attach
            // data: Attachement && Attachement.length > 1 ? Attachement.find((attach: any) => attach.Name.includes("Configuration")) : Attachement[0]
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
    substr(name) {
        return name.length > 30 ? `${name.slice(0, 15)}...${name.slice(-15)}` : name;
    }
    onViewTicket(Case) {
        this.router.navigate([`reporting/dashboard/${Case._id}`]);
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
OnboardingDetailComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingDetailComponent, deps: [{ token: i2.Router }, { token: OnboardingService }, { token: i3.MatBottomSheet }], target: i0.ɵɵFactoryTarget.Component });
OnboardingDetailComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: OnboardingDetailComponent, selector: "lib-onboarding-detail", inputs: { detailView: "detailView" }, outputs: { onShowMode: "onShowMode" }, host: { listeners: { "scroll": "onScroll($event)" } }, ngImport: i0, template: "<div class=\"onboarding-detail\">\n    <h1 class=\"title\">\n        <p>{{locale?.INTEGRATION_OF_PROFILE}} {{detailView?.Name}}</p>\n        <mat-icon *ngIf=\"!detailView?.Finished\" style=\"margin-left: 20px; cursor: pointer;\" (click)=\"onEdit()\">edit\n        </mat-icon>\n    </h1>\n    <div class=\"view-content\">\n        <div class=\"left-content\">\n            <div class=\"user-info\">\n                <div class=\"user-name\">\n                    <h2>{{detailView?.user.FirstName }} {{detailView?.user.LastName }} <span>{{locale?.ARRIVED_ON}}\n                        </span>\n                        <p>{{detailView?.createdAt | date:'dd/MM/yy' }}</p>\n                    </h2>\n                </div>\n                <p class=\"contact\">{{detailView?.user?.AccountName }} <span></span> {{detailView?.user?.Title}}</p>\n                <p class=\"contact\">\n                    <mat-icon fontSet=\"material-icons-outlined\">email</mat-icon>{{detailView?.user?.Email }}\n                    <ng-container *ngIf=\"detailView?.user?.MobilePhone?.internationalNumber\">\n                        <span></span>\n                        <mat-icon fontSet=\"material-icons-outlined\">phone</mat-icon>\n                        {{detailView?.user?.MobilePhone?.internationalNumber}}\n                    </ng-container>\n\n                    <ng-container *ngIf=\"detailView?.user?.Phone?.internationalNumber\">\n                        <span></span>\n                        <mat-icon fontSet=\"material-icons-outlined\">smartphone</mat-icon>\n                        {{detailView?.user?.Phone?.internationalNumber}}\n                    </ng-container>\n\n                </p>\n\n            </div>\n\n            <div id=\"fields\" class=\"fields\">\n                <ul>\n                    <li [ngxScrollTo]=\"'#'+category.name\" class=\"menu-item\" [class]=\"i===0 ? 'active':''\"\n                        *ngFor=\"let category of detailView?.categories;  let i=index\" [id]=\"category.name+'x'\">\n                        <a>{{category.name}}</a>\n                    </li>\n                </ul>\n                <div class=\"category-view-container\" (scroll)=\"onScroll($event)\">\n                    <section class=\"category-item\" *ngFor=\"let category of detailView?.categories;  let i=index\"\n                        [id]=\"category.name\">\n                        <div class=\"category-item-inner\">\n                            <div class=\"category-header\">\n                                <div class=\"title-content\">\n                                    <h2>{{category.name}}</h2>\n                                    <p class=\"category-description\">\n                                        {{locale?.CATEGORY_SUBTITLE}} {{\n                                        catNameStart(category.name) ? \"l'\" + category.name :\n                                        category.name }}\n                                    </p>\n                                </div>\n                                <div class=\"progress-status\">\n                                    <!-- {{category?.fieldCompleted}} / {{category?.fieldLength}} -->\n                                    <!-- <div *ngIf=\"category?.fieldCompleted===category?.fieldLength\"\n                                        class=\"status in-progress\">\n                                        <span>En cours de traitement</span>\n                                        <lib-loading></lib-loading>\n                                    </div> -->\n                                    <!-- <div *ngIf=\"category?.fieldCompleted ===category?.fieldLength\"\n                                        class=\"status ongoing\">\n                                        <span style=\"margin-right: 10px;\">En cours</span>\n                                        <mat-icon>check</mat-icon>\n                                    </div> -->\n                                    <!-- <div *ngIf=\"category?.fieldCompleted < category?.fieldLength\"\n                                        class=\"status progress-bar\">\n                                        <span style=\"width: 300px;\">{{progress(category?.fieldCompleted ,\n                                            category?.fieldLength)}}% Termin\u00E9</span>\n                                        <mat-progress-bar mode=\"determinate\"\n                                            [value]=\"progress(category?.fieldCompleted , category?.fieldLength)\">\n                                        </mat-progress-bar>\n                                    </div> -->\n                                </div>\n                            </div>\n                            <div class=\"category-item-forms\" *ngFor=\"let forms of category.forms\">\n                                <ng-container *ngIf=\"!forms.forms\">\n                                    <p class=\"label\">{{forms.label}}</p>\n                                    <ng-container *ngIf=\"onFormatDisplayValue(forms.value).type==='array'\">\n                                        <ul class=\"ul-list\">\n                                            <li *ngFor=\"let item of forms.value \">{{item}}</li>\n                                        </ul>\n                                    </ng-container>\n\n                                    <h4 *ngIf=\"onFormatDisplayValue(forms.value).type!=='array'\">\n                                        {{onFormatDisplayValue(forms.value).value}}\n                                    </h4>\n                                </ng-container>\n                                <ng-container *ngIf=\"forms.forms\">\n                                    <h3>{{forms.label}}</h3>\n                                    <div class=\"category-item-forms\" *ngFor=\"let sub of forms.forms\">\n                                        <ng-container *ngIf=\"!sub.forms\">\n                                            <p class=\"label\">{{sub.label}}</p>\n                                            <ng-container *ngIf=\"onFormatDisplayValue(sub.value).type==='array'\">\n                                                <ul class=\"ul-list\">\n                                                    <li *ngFor=\"let item of sub.value \">{{item}}</li>\n                                                </ul>\n                                            </ng-container>\n                                            <h4 *ngIf=\"onFormatDisplayValue(sub.value).type!=='array'\">\n                                                {{onFormatDisplayValue(sub.value).value}}</h4>\n                                        </ng-container>\n                                        <ng-container *ngIf=\"sub.forms\">\n                                            <h3>{{sub.label}}</h3>\n                                            <div class=\"category-item-forms\" *ngFor=\"let child of sub.forms\">\n                                                <ng-container *ngIf=\"!child.forms\">\n                                                    <p class=\"label\">{{child.label}}</p>\n                                                    <ng-container\n                                                        *ngIf=\"onFormatDisplayValue(child.value).type==='array'\">\n                                                        <ul class=\"ul-list\">\n                                                            <li *ngFor=\"let item of child.value\">{{item}}</li>\n                                                        </ul>\n                                                    </ng-container>\n                                                    <h4 *ngIf=\"onFormatDisplayValue(child.value).type!=='array'\">\n                                                        {{onFormatDisplayValue(child.value).value}}</h4>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"child.forms\">\n                                                    <h3>{{child.label}}</h3>\n                                                    <div class=\"category-item-forms\" *ngFor=\"let c2 of child.forms\">\n                                                        <p class=\"label\">{{c2.label}}</p>\n                                                        <ng-container\n                                                            *ngIf=\"onFormatDisplayValue(c2.value).type==='array'\">\n                                                            <ul class=\"ul-list\">\n                                                                <li *ngFor=\"let item of c2.value \">{{item}}</li>\n                                                            </ul>\n                                                        </ng-container>\n                                                        <h4 *ngIf=\"onFormatDisplayValue(c2.value).type!=='array'\">\n                                                            {{onFormatDisplayValue(c2.value).value}}</h4>\n                                                    </div>\n                                                </ng-container>\n                                            </div>\n                                        </ng-container>\n                                    </div>\n                                </ng-container>\n                            </div>\n                        </div>\n                    </section>\n                    <section style=\"background-color: transparent\">\n                        <div style=\"height: 450px;\"></div>\n                    </section>\n                </div>\n            </div>\n        </div>\n        <div class=\"right-content\">\n            <h2>{{locale?.TICKET_RELATED}}</h2>\n            <p class=\"subtitle\">{{locale?.HERE_YOU_WILL}}</p>\n            <ng-container *ngIf=\"detailView?.tickets && detailView?.tickets.length>0\">\n                <div class=\"box-ticket-info\" *ngFor=\"let ticket of detailView?.tickets\">\n                    <div class=\"d-flex-row box-header\">\n                        <button mat-button class=\"d-flex-row\" style=\"color: #575F6E;padding-left: 0;\"\n                            (click)=\"onViewTicket(ticket)\">\n                            <mat-icon fontSet=\"material-icons-outlined\">list_alt</mat-icon><span\n                                style=\"font-weight: 400;\">Ticket\n                                {{ticket.CaseNumber}}</span>\n                        </button>\n                        <button mat-button class=\"progress\">{{ticket.Status}}</button>\n                    </div>\n                    <p class=\"date\">{{ticket.CreatedDate | date :'dd/MM/yy'}}</p>\n                    <div class=\"box-header\">\n                        <h3 style=\"width: 70%;margin-top: 10px;\">{{ticket.Subject}}</h3>\n                    </div>\n                    <div class=\"d-flex-row\" style=\"gap: 10px;width: 70%;margin-top: 10px;margin-top: 10px;\">\n                        <progress style=\"width: 88%;\" id=\"file\" max=\"100\"\n                            [value]=\"ticket.WorkflowProgress || 0\"></progress>\n                        <span class=\"percentage\" style=\"width: 100px;\">{{ticket.WorkflowProgress}} %</span>\n                    </div>\n                    <!-- <button *ngIf=\"ticket.Attachments && ticket.Attachments.length>0\" mat-button class=\"download-ticket\" -->\n                    <button *ngFor=\"let attach of ticket.Attachments\" mat-button class=\"download-ticket\"\n                        (click)=\"openBottomSheet(attach)\"> {{substr(attach.Name)}}.pdf\n                    </button>\n                </div>\n            </ng-container>\n            <div class=\"box-ticket-info\" *ngIf=\"!detailView?.tickets\">\n                <p class=\"description\">\"{{locale?.NO_TICKET}}\"</p>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".onboarding-detail{padding-top:30px}.onboarding-detail h1,.onboarding-detail h2,.onboarding-detail h3,.onboarding-detail h4,.onboarding-detail h5,.onboarding-detail h6{margin:0;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail p{margin:0}.onboarding-detail h1{font-size:24px}.onboarding-detail h1.title{margin-bottom:33px;margin-top:10px}.onboarding-detail h2{font-size:20px}.onboarding-detail h3{font-size:18px}.onboarding-detail h4{font-size:16px}.onboarding-detail h5{font-size:14px}.onboarding-detail h6{font-size:12px}.onboarding-detail .view-content{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail .view-content .left-content{width:70%;border-radius:6px;margin-right:2%}@media (max-width: 1200px){.onboarding-detail .view-content .left-content{width:50%}}.onboarding-detail .view-content .left-content .user-info{background:transparent;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail .view-content .left-content .user-info span:before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail .view-content .left-content .user-info p{font-weight:400;display:flex;align-items:center}.onboarding-detail .view-content .left-content .user-info p mat-icon{padding-right:5px}.onboarding-detail .view-content .left-content .user-info p.contact{margin-top:10px}.onboarding-detail .view-content .left-content .user-info .user-name{line-height:30px}.onboarding-detail .view-content .left-content .user-info .user-name span{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail .view-content .left-content .user-info .user-contact{line-height:30px}.onboarding-detail .view-content .left-content section{background:#FFFFFF;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail .view-content .left-content section .category-item-inner .category-description{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms{margin-top:20px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms .label{font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail .view-content .right-content{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail .view-content .right-content p{color:#575f6e}.onboarding-detail .view-content .right-content .box-ticket-info{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #E2E4E5}.onboarding-detail .view-content .right-content .box-ticket-info .box-header{display:flex;justify-content:space-between;align-items:center}.onboarding-detail .view-content .right-content .box-ticket-info .box-header button{min-width:auto;height:36px;border-radius:4px;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .finished{background:#6FE8D7}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .progress{background:#F3A124}.onboarding-detail .view-content .right-content .box-ticket-info .download-ticket{margin-top:20px;background-color:#fff;border:1px solid #171F26;display:block}.onboarding-detail .view-content .category-view-container{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail .view-content .right-content::-webkit-scrollbar,.onboarding-detail .view-content .category-view-container::-webkit-scrollbar{display:none}.onboarding-detail .view-content .right-content,.onboarding-detail .view-content .category-view-container{-ms-overflow-style:none;scrollbar-width:none}.fields{height:84%}.fields ul{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields ul li{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields ul li a{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields ul li.menu-item:hover,.fields ul li.menu-item.active{cursor:pointer;border-bottom:3px solid #3C4252}.fields ul li.menu-item:hover a,.fields ul li.menu-item.active a{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status .status{display:flex;align-items:center}.progress-status .ongoing{color:#6fe8d7}.progress-status .in-progress{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}::ng-deep .progress-status{font-size:16px}::ng-deep .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity .25s linear;width:100%}::ng-deep .progress-status .mat-progress-bar-fill:after{background-color:#6fe8d7}::ng-deep .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header{display:flex;align-items:center;justify-content:space-between}.d-flex-row{display:flex;align-items:center}.d-flex-row mat-icon{margin-right:5px}::ng-deep mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#F4F7F9!important;display:flex!important;flex-direction:column;justify-content:center}::ng-deep mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}::ng-deep mat-bottom-sheet-container h3{font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}::ng-deep mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171F26;box-shadow:0 0 #0003;border-radius:7px;color:#fff;margin:0 25px}::ng-deep mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 #0003;border-radius:7px;color:#171f26;border:1px solid #171F26}.ul-list{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list li:before{content:\".\";font-size:40px}\n"], dependencies: [{ kind: "component", type: i5.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i4$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5$1.ScrollToDirective, selector: "[ngxScrollTo]", inputs: ["ngxScrollTo", "ngxScrollToEvent", "ngxScrollToDuration", "ngxScrollToEasing", "ngxScrollToOffset", "ngxScrollToOffsetMap"] }, { kind: "pipe", type: i4$1.DatePipe, name: "date" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingDetailComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-onboarding-detail', template: "<div class=\"onboarding-detail\">\n    <h1 class=\"title\">\n        <p>{{locale?.INTEGRATION_OF_PROFILE}} {{detailView?.Name}}</p>\n        <mat-icon *ngIf=\"!detailView?.Finished\" style=\"margin-left: 20px; cursor: pointer;\" (click)=\"onEdit()\">edit\n        </mat-icon>\n    </h1>\n    <div class=\"view-content\">\n        <div class=\"left-content\">\n            <div class=\"user-info\">\n                <div class=\"user-name\">\n                    <h2>{{detailView?.user.FirstName }} {{detailView?.user.LastName }} <span>{{locale?.ARRIVED_ON}}\n                        </span>\n                        <p>{{detailView?.createdAt | date:'dd/MM/yy' }}</p>\n                    </h2>\n                </div>\n                <p class=\"contact\">{{detailView?.user?.AccountName }} <span></span> {{detailView?.user?.Title}}</p>\n                <p class=\"contact\">\n                    <mat-icon fontSet=\"material-icons-outlined\">email</mat-icon>{{detailView?.user?.Email }}\n                    <ng-container *ngIf=\"detailView?.user?.MobilePhone?.internationalNumber\">\n                        <span></span>\n                        <mat-icon fontSet=\"material-icons-outlined\">phone</mat-icon>\n                        {{detailView?.user?.MobilePhone?.internationalNumber}}\n                    </ng-container>\n\n                    <ng-container *ngIf=\"detailView?.user?.Phone?.internationalNumber\">\n                        <span></span>\n                        <mat-icon fontSet=\"material-icons-outlined\">smartphone</mat-icon>\n                        {{detailView?.user?.Phone?.internationalNumber}}\n                    </ng-container>\n\n                </p>\n\n            </div>\n\n            <div id=\"fields\" class=\"fields\">\n                <ul>\n                    <li [ngxScrollTo]=\"'#'+category.name\" class=\"menu-item\" [class]=\"i===0 ? 'active':''\"\n                        *ngFor=\"let category of detailView?.categories;  let i=index\" [id]=\"category.name+'x'\">\n                        <a>{{category.name}}</a>\n                    </li>\n                </ul>\n                <div class=\"category-view-container\" (scroll)=\"onScroll($event)\">\n                    <section class=\"category-item\" *ngFor=\"let category of detailView?.categories;  let i=index\"\n                        [id]=\"category.name\">\n                        <div class=\"category-item-inner\">\n                            <div class=\"category-header\">\n                                <div class=\"title-content\">\n                                    <h2>{{category.name}}</h2>\n                                    <p class=\"category-description\">\n                                        {{locale?.CATEGORY_SUBTITLE}} {{\n                                        catNameStart(category.name) ? \"l'\" + category.name :\n                                        category.name }}\n                                    </p>\n                                </div>\n                                <div class=\"progress-status\">\n                                    <!-- {{category?.fieldCompleted}} / {{category?.fieldLength}} -->\n                                    <!-- <div *ngIf=\"category?.fieldCompleted===category?.fieldLength\"\n                                        class=\"status in-progress\">\n                                        <span>En cours de traitement</span>\n                                        <lib-loading></lib-loading>\n                                    </div> -->\n                                    <!-- <div *ngIf=\"category?.fieldCompleted ===category?.fieldLength\"\n                                        class=\"status ongoing\">\n                                        <span style=\"margin-right: 10px;\">En cours</span>\n                                        <mat-icon>check</mat-icon>\n                                    </div> -->\n                                    <!-- <div *ngIf=\"category?.fieldCompleted < category?.fieldLength\"\n                                        class=\"status progress-bar\">\n                                        <span style=\"width: 300px;\">{{progress(category?.fieldCompleted ,\n                                            category?.fieldLength)}}% Termin\u00E9</span>\n                                        <mat-progress-bar mode=\"determinate\"\n                                            [value]=\"progress(category?.fieldCompleted , category?.fieldLength)\">\n                                        </mat-progress-bar>\n                                    </div> -->\n                                </div>\n                            </div>\n                            <div class=\"category-item-forms\" *ngFor=\"let forms of category.forms\">\n                                <ng-container *ngIf=\"!forms.forms\">\n                                    <p class=\"label\">{{forms.label}}</p>\n                                    <ng-container *ngIf=\"onFormatDisplayValue(forms.value).type==='array'\">\n                                        <ul class=\"ul-list\">\n                                            <li *ngFor=\"let item of forms.value \">{{item}}</li>\n                                        </ul>\n                                    </ng-container>\n\n                                    <h4 *ngIf=\"onFormatDisplayValue(forms.value).type!=='array'\">\n                                        {{onFormatDisplayValue(forms.value).value}}\n                                    </h4>\n                                </ng-container>\n                                <ng-container *ngIf=\"forms.forms\">\n                                    <h3>{{forms.label}}</h3>\n                                    <div class=\"category-item-forms\" *ngFor=\"let sub of forms.forms\">\n                                        <ng-container *ngIf=\"!sub.forms\">\n                                            <p class=\"label\">{{sub.label}}</p>\n                                            <ng-container *ngIf=\"onFormatDisplayValue(sub.value).type==='array'\">\n                                                <ul class=\"ul-list\">\n                                                    <li *ngFor=\"let item of sub.value \">{{item}}</li>\n                                                </ul>\n                                            </ng-container>\n                                            <h4 *ngIf=\"onFormatDisplayValue(sub.value).type!=='array'\">\n                                                {{onFormatDisplayValue(sub.value).value}}</h4>\n                                        </ng-container>\n                                        <ng-container *ngIf=\"sub.forms\">\n                                            <h3>{{sub.label}}</h3>\n                                            <div class=\"category-item-forms\" *ngFor=\"let child of sub.forms\">\n                                                <ng-container *ngIf=\"!child.forms\">\n                                                    <p class=\"label\">{{child.label}}</p>\n                                                    <ng-container\n                                                        *ngIf=\"onFormatDisplayValue(child.value).type==='array'\">\n                                                        <ul class=\"ul-list\">\n                                                            <li *ngFor=\"let item of child.value\">{{item}}</li>\n                                                        </ul>\n                                                    </ng-container>\n                                                    <h4 *ngIf=\"onFormatDisplayValue(child.value).type!=='array'\">\n                                                        {{onFormatDisplayValue(child.value).value}}</h4>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"child.forms\">\n                                                    <h3>{{child.label}}</h3>\n                                                    <div class=\"category-item-forms\" *ngFor=\"let c2 of child.forms\">\n                                                        <p class=\"label\">{{c2.label}}</p>\n                                                        <ng-container\n                                                            *ngIf=\"onFormatDisplayValue(c2.value).type==='array'\">\n                                                            <ul class=\"ul-list\">\n                                                                <li *ngFor=\"let item of c2.value \">{{item}}</li>\n                                                            </ul>\n                                                        </ng-container>\n                                                        <h4 *ngIf=\"onFormatDisplayValue(c2.value).type!=='array'\">\n                                                            {{onFormatDisplayValue(c2.value).value}}</h4>\n                                                    </div>\n                                                </ng-container>\n                                            </div>\n                                        </ng-container>\n                                    </div>\n                                </ng-container>\n                            </div>\n                        </div>\n                    </section>\n                    <section style=\"background-color: transparent\">\n                        <div style=\"height: 450px;\"></div>\n                    </section>\n                </div>\n            </div>\n        </div>\n        <div class=\"right-content\">\n            <h2>{{locale?.TICKET_RELATED}}</h2>\n            <p class=\"subtitle\">{{locale?.HERE_YOU_WILL}}</p>\n            <ng-container *ngIf=\"detailView?.tickets && detailView?.tickets.length>0\">\n                <div class=\"box-ticket-info\" *ngFor=\"let ticket of detailView?.tickets\">\n                    <div class=\"d-flex-row box-header\">\n                        <button mat-button class=\"d-flex-row\" style=\"color: #575F6E;padding-left: 0;\"\n                            (click)=\"onViewTicket(ticket)\">\n                            <mat-icon fontSet=\"material-icons-outlined\">list_alt</mat-icon><span\n                                style=\"font-weight: 400;\">Ticket\n                                {{ticket.CaseNumber}}</span>\n                        </button>\n                        <button mat-button class=\"progress\">{{ticket.Status}}</button>\n                    </div>\n                    <p class=\"date\">{{ticket.CreatedDate | date :'dd/MM/yy'}}</p>\n                    <div class=\"box-header\">\n                        <h3 style=\"width: 70%;margin-top: 10px;\">{{ticket.Subject}}</h3>\n                    </div>\n                    <div class=\"d-flex-row\" style=\"gap: 10px;width: 70%;margin-top: 10px;margin-top: 10px;\">\n                        <progress style=\"width: 88%;\" id=\"file\" max=\"100\"\n                            [value]=\"ticket.WorkflowProgress || 0\"></progress>\n                        <span class=\"percentage\" style=\"width: 100px;\">{{ticket.WorkflowProgress}} %</span>\n                    </div>\n                    <!-- <button *ngIf=\"ticket.Attachments && ticket.Attachments.length>0\" mat-button class=\"download-ticket\" -->\n                    <button *ngFor=\"let attach of ticket.Attachments\" mat-button class=\"download-ticket\"\n                        (click)=\"openBottomSheet(attach)\"> {{substr(attach.Name)}}.pdf\n                    </button>\n                </div>\n            </ng-container>\n            <div class=\"box-ticket-info\" *ngIf=\"!detailView?.tickets\">\n                <p class=\"description\">\"{{locale?.NO_TICKET}}\"</p>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".onboarding-detail{padding-top:30px}.onboarding-detail h1,.onboarding-detail h2,.onboarding-detail h3,.onboarding-detail h4,.onboarding-detail h5,.onboarding-detail h6{margin:0;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail p{margin:0}.onboarding-detail h1{font-size:24px}.onboarding-detail h1.title{margin-bottom:33px;margin-top:10px}.onboarding-detail h2{font-size:20px}.onboarding-detail h3{font-size:18px}.onboarding-detail h4{font-size:16px}.onboarding-detail h5{font-size:14px}.onboarding-detail h6{font-size:12px}.onboarding-detail .view-content{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail .view-content .left-content{width:70%;border-radius:6px;margin-right:2%}@media (max-width: 1200px){.onboarding-detail .view-content .left-content{width:50%}}.onboarding-detail .view-content .left-content .user-info{background:transparent;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail .view-content .left-content .user-info span:before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail .view-content .left-content .user-info p{font-weight:400;display:flex;align-items:center}.onboarding-detail .view-content .left-content .user-info p mat-icon{padding-right:5px}.onboarding-detail .view-content .left-content .user-info p.contact{margin-top:10px}.onboarding-detail .view-content .left-content .user-info .user-name{line-height:30px}.onboarding-detail .view-content .left-content .user-info .user-name span{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail .view-content .left-content .user-info .user-contact{line-height:30px}.onboarding-detail .view-content .left-content section{background:#FFFFFF;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail .view-content .left-content section .category-item-inner .category-description{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms{margin-top:20px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms .label{font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail .view-content .right-content{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail .view-content .right-content p{color:#575f6e}.onboarding-detail .view-content .right-content .box-ticket-info{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #E2E4E5}.onboarding-detail .view-content .right-content .box-ticket-info .box-header{display:flex;justify-content:space-between;align-items:center}.onboarding-detail .view-content .right-content .box-ticket-info .box-header button{min-width:auto;height:36px;border-radius:4px;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .finished{background:#6FE8D7}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .progress{background:#F3A124}.onboarding-detail .view-content .right-content .box-ticket-info .download-ticket{margin-top:20px;background-color:#fff;border:1px solid #171F26;display:block}.onboarding-detail .view-content .category-view-container{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail .view-content .right-content::-webkit-scrollbar,.onboarding-detail .view-content .category-view-container::-webkit-scrollbar{display:none}.onboarding-detail .view-content .right-content,.onboarding-detail .view-content .category-view-container{-ms-overflow-style:none;scrollbar-width:none}.fields{height:84%}.fields ul{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields ul li{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields ul li a{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields ul li.menu-item:hover,.fields ul li.menu-item.active{cursor:pointer;border-bottom:3px solid #3C4252}.fields ul li.menu-item:hover a,.fields ul li.menu-item.active a{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status .status{display:flex;align-items:center}.progress-status .ongoing{color:#6fe8d7}.progress-status .in-progress{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}::ng-deep .progress-status{font-size:16px}::ng-deep .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity .25s linear;width:100%}::ng-deep .progress-status .mat-progress-bar-fill:after{background-color:#6fe8d7}::ng-deep .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header{display:flex;align-items:center;justify-content:space-between}.d-flex-row{display:flex;align-items:center}.d-flex-row mat-icon{margin-right:5px}::ng-deep mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#F4F7F9!important;display:flex!important;flex-direction:column;justify-content:center}::ng-deep mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}::ng-deep mat-bottom-sheet-container h3{font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}::ng-deep mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171F26;box-shadow:0 0 #0003;border-radius:7px;color:#fff;margin:0 25px}::ng-deep mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 #0003;border-radius:7px;color:#171f26;border:1px solid #171F26}.ul-list{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list li:before{content:\".\";font-size:40px}\n"] }]
        }], ctorParameters: function () { return [{ type: i2.Router }, { type: OnboardingService }, { type: i3.MatBottomSheet }]; }, propDecorators: { detailView: [{
                type: Input
            }], onShowMode: [{
                type: Output
            }], onScroll: [{
                type: HostListener,
                args: ['scroll', ['$event']]
            }] } });
class BottomSheet {
    constructor(_bottomSheetRef, service) {
        this._bottomSheetRef = _bottomSheetRef;
        this.service = service;
        this.attach = null;
        this.filename = "";
        this.not_found = "";
        this.locale = {};
        this.service._lang.subscribe((locale) => {
            this.locale = locales[locale].REQUEST;
        });
    }
    ngOnInit() {
        this.attach = this._bottomSheetRef.containerInstance._config.data;
    }
    close() {
        this._bottomSheetRef.dismiss();
    }
    onDownloadFile() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.attach) {
                const result = yield this.service.downloadAttachment(this.attach);
                if (!result) {
                    this.not_found = "fichier non trouvé";
                    setTimeout(() => {
                        this._bottomSheetRef.dismiss();
                        this.not_found = "";
                    }, 3000);
                }
            }
        });
    }
}
BottomSheet.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: BottomSheet, deps: [{ token: i3.MatBottomSheetRef }, { token: OnboardingService }], target: i0.ɵɵFactoryTarget.Component });
BottomSheet.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: BottomSheet, selector: "bottom-sheet", ngImport: i0, template: "<div class=\"sheet-content\">\r\n  <h3>\r\n    {{attach.Name}}.pdf\r\n  </h3>\r\n  <button class=\"download-button\" mat-button (click)=\"onDownloadFile()\">{{locale?.DONWLOAD_THE_PDF}}</button>\r\n  <button class=\"close-button\" mat-button (click)=\"close()\">{{locale?.CLOSE}}</button>\r\n\r\n</div>", styles: [".onboarding-detail{padding-top:30px}.onboarding-detail h1,.onboarding-detail h2,.onboarding-detail h3,.onboarding-detail h4,.onboarding-detail h5,.onboarding-detail h6{margin:0;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail p{margin:0}.onboarding-detail h1{font-size:24px}.onboarding-detail h1.title{margin-bottom:33px;margin-top:10px}.onboarding-detail h2{font-size:20px}.onboarding-detail h3{font-size:18px}.onboarding-detail h4{font-size:16px}.onboarding-detail h5{font-size:14px}.onboarding-detail h6{font-size:12px}.onboarding-detail .view-content{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail .view-content .left-content{width:70%;border-radius:6px;margin-right:2%}@media (max-width: 1200px){.onboarding-detail .view-content .left-content{width:50%}}.onboarding-detail .view-content .left-content .user-info{background:transparent;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail .view-content .left-content .user-info span:before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail .view-content .left-content .user-info p{font-weight:400;display:flex;align-items:center}.onboarding-detail .view-content .left-content .user-info p mat-icon{padding-right:5px}.onboarding-detail .view-content .left-content .user-info p.contact{margin-top:10px}.onboarding-detail .view-content .left-content .user-info .user-name{line-height:30px}.onboarding-detail .view-content .left-content .user-info .user-name span{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail .view-content .left-content .user-info .user-contact{line-height:30px}.onboarding-detail .view-content .left-content section{background:#FFFFFF;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail .view-content .left-content section .category-item-inner .category-description{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms{margin-top:20px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms .label{font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail .view-content .right-content{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail .view-content .right-content p{color:#575f6e}.onboarding-detail .view-content .right-content .box-ticket-info{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #E2E4E5}.onboarding-detail .view-content .right-content .box-ticket-info .box-header{display:flex;justify-content:space-between;align-items:center}.onboarding-detail .view-content .right-content .box-ticket-info .box-header button{min-width:auto;height:36px;border-radius:4px;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .finished{background:#6FE8D7}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .progress{background:#F3A124}.onboarding-detail .view-content .right-content .box-ticket-info .download-ticket{margin-top:20px;background-color:#fff;border:1px solid #171F26;display:block}.onboarding-detail .view-content .category-view-container{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail .view-content .right-content::-webkit-scrollbar,.onboarding-detail .view-content .category-view-container::-webkit-scrollbar{display:none}.onboarding-detail .view-content .right-content,.onboarding-detail .view-content .category-view-container{-ms-overflow-style:none;scrollbar-width:none}.fields{height:84%}.fields ul{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields ul li{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields ul li a{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields ul li.menu-item:hover,.fields ul li.menu-item.active{cursor:pointer;border-bottom:3px solid #3C4252}.fields ul li.menu-item:hover a,.fields ul li.menu-item.active a{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status .status{display:flex;align-items:center}.progress-status .ongoing{color:#6fe8d7}.progress-status .in-progress{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}::ng-deep .progress-status{font-size:16px}::ng-deep .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity .25s linear;width:100%}::ng-deep .progress-status .mat-progress-bar-fill:after{background-color:#6fe8d7}::ng-deep .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header{display:flex;align-items:center;justify-content:space-between}.d-flex-row{display:flex;align-items:center}.d-flex-row mat-icon{margin-right:5px}::ng-deep mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#F4F7F9!important;display:flex!important;flex-direction:column;justify-content:center}::ng-deep mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}::ng-deep mat-bottom-sheet-container h3{font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}::ng-deep mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171F26;box-shadow:0 0 #0003;border-radius:7px;color:#fff;margin:0 25px}::ng-deep mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 #0003;border-radius:7px;color:#171f26;border:1px solid #171F26}.ul-list{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list li:before{content:\".\";font-size:40px}\n"], dependencies: [{ kind: "component", type: i5.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: BottomSheet, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet', template: "<div class=\"sheet-content\">\r\n  <h3>\r\n    {{attach.Name}}.pdf\r\n  </h3>\r\n  <button class=\"download-button\" mat-button (click)=\"onDownloadFile()\">{{locale?.DONWLOAD_THE_PDF}}</button>\r\n  <button class=\"close-button\" mat-button (click)=\"close()\">{{locale?.CLOSE}}</button>\r\n\r\n</div>", styles: [".onboarding-detail{padding-top:30px}.onboarding-detail h1,.onboarding-detail h2,.onboarding-detail h3,.onboarding-detail h4,.onboarding-detail h5,.onboarding-detail h6{margin:0;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail p{margin:0}.onboarding-detail h1{font-size:24px}.onboarding-detail h1.title{margin-bottom:33px;margin-top:10px}.onboarding-detail h2{font-size:20px}.onboarding-detail h3{font-size:18px}.onboarding-detail h4{font-size:16px}.onboarding-detail h5{font-size:14px}.onboarding-detail h6{font-size:12px}.onboarding-detail .view-content{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail .view-content .left-content{width:70%;border-radius:6px;margin-right:2%}@media (max-width: 1200px){.onboarding-detail .view-content .left-content{width:50%}}.onboarding-detail .view-content .left-content .user-info{background:transparent;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail .view-content .left-content .user-info span:before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail .view-content .left-content .user-info p{font-weight:400;display:flex;align-items:center}.onboarding-detail .view-content .left-content .user-info p mat-icon{padding-right:5px}.onboarding-detail .view-content .left-content .user-info p.contact{margin-top:10px}.onboarding-detail .view-content .left-content .user-info .user-name{line-height:30px}.onboarding-detail .view-content .left-content .user-info .user-name span{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail .view-content .left-content .user-info .user-contact{line-height:30px}.onboarding-detail .view-content .left-content section{background:#FFFFFF;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail .view-content .left-content section .category-item-inner .category-description{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms{margin-top:20px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms .label{font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail .view-content .right-content{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail .view-content .right-content p{color:#575f6e}.onboarding-detail .view-content .right-content .box-ticket-info{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #E2E4E5}.onboarding-detail .view-content .right-content .box-ticket-info .box-header{display:flex;justify-content:space-between;align-items:center}.onboarding-detail .view-content .right-content .box-ticket-info .box-header button{min-width:auto;height:36px;border-radius:4px;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .finished{background:#6FE8D7}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .progress{background:#F3A124}.onboarding-detail .view-content .right-content .box-ticket-info .download-ticket{margin-top:20px;background-color:#fff;border:1px solid #171F26;display:block}.onboarding-detail .view-content .category-view-container{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail .view-content .right-content::-webkit-scrollbar,.onboarding-detail .view-content .category-view-container::-webkit-scrollbar{display:none}.onboarding-detail .view-content .right-content,.onboarding-detail .view-content .category-view-container{-ms-overflow-style:none;scrollbar-width:none}.fields{height:84%}.fields ul{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields ul li{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields ul li a{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields ul li.menu-item:hover,.fields ul li.menu-item.active{cursor:pointer;border-bottom:3px solid #3C4252}.fields ul li.menu-item:hover a,.fields ul li.menu-item.active a{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status .status{display:flex;align-items:center}.progress-status .ongoing{color:#6fe8d7}.progress-status .in-progress{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}::ng-deep .progress-status{font-size:16px}::ng-deep .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity .25s linear;width:100%}::ng-deep .progress-status .mat-progress-bar-fill:after{background-color:#6fe8d7}::ng-deep .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header{display:flex;align-items:center;justify-content:space-between}.d-flex-row{display:flex;align-items:center}.d-flex-row mat-icon{margin-right:5px}::ng-deep mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#F4F7F9!important;display:flex!important;flex-direction:column;justify-content:center}::ng-deep mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}::ng-deep mat-bottom-sheet-container h3{font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}::ng-deep mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171F26;box-shadow:0 0 #0003;border-radius:7px;color:#fff;margin:0 25px}::ng-deep mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 #0003;border-radius:7px;color:#171f26;border:1px solid #171F26}.ul-list{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list li:before{content:\".\";font-size:40px}\n"] }]
        }], ctorParameters: function () { return [{ type: i3.MatBottomSheetRef }, { type: OnboardingService }]; } });

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
        this.locale = {};
        this.showMode = false;
        this.selectedCategoryIndex = null;
        this.loading = false;
        this.fieldWidth = fieldWidth;
        this.submitLabel = 'Envoyer ma fiche';
        this.resumeLabel = 'Reprendre plus tard';
        this.lang = 'fr';
        this.isCheckedMultiple = (currentData, condition) => { var _a; return ((_a = currentData.defaultValue.find((d) => d.value === condition.value)) === null || _a === void 0 ? void 0 : _a.checked) || false; };
        this.service._lang.subscribe((locale) => {
            this.lang = locale;
            this.locale = locales[locale].REQUEST;
            this.submitLabel = this.locale.SEND_MY_FORM;
            this.resumeLabel = this.locale.RESUME_LATER;
        });
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
                yield this.loadCategories(this.currentOnboarding.categories);
                this.onLoadViewDetail(this.categories);
                this.currentTemplate = (_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.vtemplates[0];
                if (this.currentOnboarding.TemplateId) {
                    this.isSelected = true;
                }
            }
        });
    }
    loadCategories(categories) {
        return __awaiter(this, void 0, void 0, function* () {
            this.accounts = yield this.service.getAccounts();
            this.categories = categories.map((cat) => {
                const forms = cat.forms.map((form) => {
                    if (form.key === 'AccountName') {
                        form.defaultValue = this.accounts;
                        form.type = 'select';
                    }
                    return form;
                });
                return Object.assign(Object.assign({}, cat), { forms });
            });
        });
    }
    onLoadViewDetail(categories) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
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
            AccountName: ((_c = (_b = this.currentOnboarding) === null || _b === void 0 ? void 0 : _b.vcontacts[0]) === null || _c === void 0 ? void 0 : _c.Account.Name) || '',
            categories: categoriesView,
            // view: this.currentOnboarding.view,
            tickets: (_d = this.currentOnboarding) === null || _d === void 0 ? void 0 : _d.vtickets,
            createdAt: ((_e = this.currentOnboarding) === null || _e === void 0 ? void 0 : _e.createdAt) || new Date().toISOString(),
            user: Object.assign(Object.assign({}, user), { AccountName: this.findAccount(user.AccountName) }),
            Name: ((_g = (_f = this.currentOnboarding) === null || _f === void 0 ? void 0 : _f.vtemplates[0]) === null || _g === void 0 ? void 0 : _g.Name) || ((_h = this.currentTemplate) === null || _h === void 0 ? void 0 : _h.Name)
        };
    }
    findAccount(account) {
        const result = this.accounts.find((acc) => acc._id === account);
        if (result)
            return result.Name;
        return account;
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
                yield this.loadCategories(onboarding ? onboarding.categories : this.currentTemplate.categories);
                this.categories = this.categories
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
        firstInvalidControl === null || firstInvalidControl === void 0 ? void 0 : firstInvalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (firstInvalidControl) {
            firstInvalidControl.focus();
        }
    }
    onChangeCategory() {
        const checkMandatory = (field) => !!field.value && field.isMandatory && (field.type !== "checkbox_multiple" || field.type !== 'checkbox' || !field.isConditional) || !field.isMandatory || field.type === "checkbox_multiple" || field.type === 'checkbox' || field.type === 'toggle' || field.isConditional && this.onCheckConditionLocationValue(field) && !!field.value || field.isConditional && !this.onCheckConditionLocationValue(field);
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
                    if (!!form.key) {
                        userData[form.key] = form.value;
                    }
                });
                this.loading = true;
                this.submitLabel = "Chargement...";
                const result = this.onboardingId && this.onboardingId !== "0"
                    ? yield this.service.updateOnboarding(Object.assign(Object.assign({}, this.form.value), { user: userData, categories: this.categories, Finished: submit, _id: this.onboardingId, AccountName: this.findAccount(userData.AccountName), tickets: (_c = (_b = this.currentOnboarding) === null || _b === void 0 ? void 0 : _b.vtickets) === null || _c === void 0 ? void 0 : _c.map((ticket) => ticket.Id) }))
                    : yield this.service.createOnboarding(Object.assign(Object.assign({}, this.form.value), { user: userData, categories: this.categories, Finished: submit, AccountName: this.findAccount(userData.AccountName) }));
                if (result) {
                    if (this.onboardingId && this.onboardingId !== "0") {
                        yield this.loadCategories(result.categories);
                        this.currentOnboarding = result;
                    }
                    // await this.service.getAllProfil();
                    this.onboardingId = result._id;
                    this.loading = false;
                    this.submitLabel = this.locale.SEND_MY_FORM;
                    this.canExit = true;
                    this.showMode = true;
                    const { AccountName: Account, date_of_entry } = userData, rest = __rest(userData, ["AccountName", "date_of_entry"]);
                    if (submit) {
                        yield this.service.createContact(Object.assign(Object.assign({}, rest), { A_quitt_la_soci_t__c: "false", Phone: (_d = userData === null || userData === void 0 ? void 0 : userData.Phone) === null || _d === void 0 ? void 0 : _d.e164Number, MobilePhone: (_e = userData === null || userData === void 0 ? void 0 : userData.MobilePhone) === null || _e === void 0 ? void 0 : _e.e164Number, Account, ServiceOrigin: 'Salesforce' }));
                        this.router.navigate([`${this.checkOnboardingPath()}`, result.TemplateId, result._id]);
                        this.ngOnInit();
                        // this.onCreateConfirm();
                    }
                    else {
                        this.router.navigate([`${this.checkOnboardingPath()}`, result.TemplateId, result._id]);
                    }
                }
                else {
                    this.loading = false;
                    this.submitLabel = this.locale.SEND_MY_FORM;
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
    ingoreDefaultAction(e) {
        e.preventDefault();
    }
    onCheckConditionLocationValue(field) {
        const { isConditional, condition } = field;
        if (!isConditional || !(condition === null || condition === void 0 ? void 0 : condition.location)) {
            return true;
        }
        const _a = condition.location, { s0Index } = _a, rest = __rest(_a, ["s0Index"]);
        let currentData = this.categories[s0Index];
        for (const key in rest) {
            if (currentData.forms[rest[key]]) {
                currentData = currentData.forms[rest[key]];
            }
        }
        return currentData.type === "checkbox_multiple" ? this.isCheckedMultiple(currentData, condition) : currentData.defaultValue ? currentData.value === condition.value || currentData.value === true : !!currentData.value;
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
    onChange(event) {
        this.canExit = false;
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
                const result = yield this.service.downloadAttachment(attach);
            }
        }));
    }
}
OnboardingCreateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingCreateComponent, deps: [{ token: i1$2.UntypedFormBuilder }, { token: OnboardingService }, { token: i2.ActivatedRoute }, { token: i2.Router }, { token: i1$1.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
OnboardingCreateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: OnboardingCreateComponent, selector: "create-onboarding", host: { listeners: { "scroll": "onScroll($event)" } }, ngImport: i0, template: "<main>\r\n    <div class=\"content\">\r\n        <form *ngIf=\"!showMode\" [formGroup]=\"form\" id=\"form\" (submit)=\"onSubmit(true)\" #f=\"ngForm\">\r\n            <div class=\"category\">\r\n                <div class=\"title-group\">\r\n                    <h2>{{locale?.TITLE}} {{currentTemplate?.Name}} <mat-icon\r\n                            style=\"margin-left: 20px; cursor: pointer;\" (click)=\"onShowMode()\">visibility</mat-icon>\r\n                    </h2>\r\n                    <div>\r\n                        <button [disabled]=\"loading || !form.valid\" mat-button class=\"register-button send-form\"\r\n                            type=\"submit\">\r\n                            <lib-loading-page *ngIf=\"loading && isSubmitted\"></lib-loading-page>{{submitLabel}}\r\n                        </button>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <div id=\"fields\" class=\"fields\">\r\n                    <ul>\r\n                        <li [ngxScrollTo]=\"'#'+category.name\" class=\"menu-item\"\r\n                            *ngFor=\"let category of categories;  let i=index\" [id]=\"category.name+'x'\">\r\n                            <a>{{category.name}}</a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"category-container\" (scroll)=\"onScroll($event)\">\r\n                        <section class=\"category-item content-item\" *ngFor=\"let category of categories;  let i=index\"\r\n                            [id]=\"category.name\">\r\n                            <div class=\"field-content\">\r\n                                <div class=\"field-item\">\r\n                                    <div class=\"category-title-group\">\r\n                                        <h4 class=\"category-name\">{{category.name}}</h4>\r\n                                        <p>\r\n                                            {{locale?.CATEGORY_SUBTITLE}} {{\r\n                                            catNameStart(category.name) ? \"l'\" + category.name :\r\n                                            category.name }}\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"category-container\">\r\n                                    <ng-container *ngFor=\"let field of category.forms;let j=index\">\r\n                                        <div class=\"field-category\" [id]=\"field.key\"\r\n                                            [style.width]=\"field.forms ? '100%' : fieldWidth(field.type,category.forms.length,j)\"\r\n                                            *ngIf=\"field.expandOnboarding && onCheckConditionLocationValue(field)\">\r\n                                            <div class=\"inner-loop\">\r\n                                                <div class=\"fields-content\">\r\n                                                    <div class=\"fields-container\">\r\n                                                        <lib-sub-create-onboarding [field]=\"field\" [locale]=\"locale\"\r\n                                                            (onChange)=\"onChange($event)\"\r\n                                                            [length]=\"category?.forms?.length\" [i]=\"i\" [j]=\"j\">\r\n                                                            <div class=\"child\">\r\n                                                                <div class=\"inner-child\"\r\n                                                                    *ngIf=\"field.forms && field.value\">\r\n                                                                    <ng-container\r\n                                                                        *ngFor=\"let child of field.forms;let k=index\">\r\n                                                                        <ng-container\r\n                                                                            *ngIf=\"child.expandOnboarding && onCheckConditionLocationValue(child)\">\r\n                                                                            <div class=\"inner-child-content\"\r\n                                                                                [id]=\"child.key\"\r\n                                                                                [style.width]=\"child.forms ? '100%' : fieldWidth(child.type,field.forms.length,k)\">\r\n                                                                                <div class=\"inner-loop\">\r\n                                                                                    <div class=\"fields-content\">\r\n                                                                                        <div class=\"fields-container\">\r\n                                                                                            <lib-sub-create-onboarding\r\n                                                                                                [field]=\"child\"\r\n                                                                                                [locale]=\"locale\"\r\n                                                                                                (onChange)=\"onChange($event)\"\r\n                                                                                                [length]=\"field?.forms?.length\"\r\n                                                                                                [i]=\"j\" [j]=\"k\"\r\n                                                                                                (onCheckValue)=\"onCheckValue($event)\">\r\n                                                                                                <div class=\"child\">\r\n                                                                                                    <div class=\"inner-child\"\r\n                                                                                                        *ngIf=\"child.forms && child.value\">\r\n                                                                                                        <ng-container\r\n                                                                                                            *ngFor=\"let c2 of child.forms;let l=index\">\r\n                                                                                                            <div class=\"inner-child-content\"\r\n                                                                                                                *ngIf=\"c2.expandOnboarding && onCheckConditionLocationValue(c2)\"\r\n                                                                                                                [id]=\"c2.key\"\r\n                                                                                                                [style.width]=\"c2.forms ? '100%' : fieldWidth(c2.type,child.forms.length,l)\">\r\n                                                                                                                <div\r\n                                                                                                                    class=\"inner-loop\">\r\n                                                                                                                    <div\r\n                                                                                                                        class=\"fields-content\">\r\n                                                                                                                        <div\r\n                                                                                                                            class=\"fields-container\">\r\n                                                                                                                            <lib-sub-create-onboarding\r\n                                                                                                                                [field]=\"c2\"\r\n                                                                                                                                [locale]=\"locale\"\r\n                                                                                                                                (onChange)=\"onChange($event)\"\r\n                                                                                                                                [length]=\"child?.forms?.length\"\r\n                                                                                                                                [i]=\"k\"\r\n                                                                                                                                [j]=\"l\"\r\n                                                                                                                                (onCheckValue)=\"onCheckValue($event)\">\r\n                                                                                                                                <div\r\n                                                                                                                                    class=\"child\">\r\n                                                                                                                                </div>\r\n                                                                                                                            </lib-sub-create-onboarding>\r\n                                                                                                                        </div>\r\n                                                                                                                    </div>\r\n                                                                                                                </div>\r\n                                                                                                            </div>\r\n                                                                                                        </ng-container>\r\n                                                                                                    </div>\r\n                                                                                                </div>\r\n                                                                                            </lib-sub-create-onboarding>\r\n                                                                                        </div>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                            </div>\r\n                                                                        </ng-container>\r\n                                                                    </ng-container>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </lib-sub-create-onboarding>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </ng-container>\r\n                                </div>\r\n                            </div>\r\n                        </section>\r\n                        <div class=\"onboarding-create-footer\">\r\n                            <div class=\"actions-button\" style=\"margin-bottom: 50px;display: flex;\">\r\n                                <button [disabled]=\"loading || !form.valid\" mat-button class=\"register-button send-form\"\r\n                                    type=\"submit\">\r\n                                    <lib-loading-page *ngIf=\"loading && isSubmitted\"></lib-loading-page>{{submitLabel}}\r\n                                </button>\r\n                                <button [disabled]=\"loading\" mat-button class=\"register-button resume\" type=\"button\"\r\n                                    (click)=\"onSubmit(false)\">\r\n                                    <lib-loading-page *ngIf=\"loading && !isSubmitted\"></lib-loading-page>{{resumeLabel}}\r\n                                </button>\r\n                            </div>\r\n                            <section style=\"background-color: transparent\">\r\n                                <div style=\"height: 450px;\"></div>\r\n                            </section>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <lib-onboarding-detail *ngIf=\"showMode\" (onShowMode)=\"onShowMode()\" [detailView]=\"detailView\">\r\n        </lib-onboarding-detail>\r\n    </div>\r\n\r\n</main>", styles: ["main{background:#f4f7f9 0% 0% no-repeat padding-box;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main .disabled label{background-color:transparent!important}main .content{width:96%;height:100%;padding-left:2%;padding-right:2%}main .content h3{letter-spacing:0px;color:#171f26;padding-top:20px}main .content p{letter-spacing:0px;color:#171f26}main .content p.sub-title{max-width:400px}main .content .select-contact{max-width:70%;margin:5% auto auto;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;padding:5%}main .content .select-contact .select-template{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main .content .select-contact .select-template .full-width{width:40%}main .content .select-contact .select-template button{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:1em 2em;display:flex;align-items:center;background-color:transparent;letter-spacing:0px;color:#543cb6;align-self:center;width:220px}main .content .category .onboarding-mat-stepper mat-horizontal-stepper .next-step{float:right}main .content form{display:flex;height:100%;width:100%;margin:auto;overflow:hidden}main .content form .select-contact{max-width:70%;margin:5% auto auto;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;padding:5%}main .content form .select-contact button{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;letter-spacing:0px;color:#543cb6;align-self:flex-end}main .box-title{width:786px;margin-top:20vh;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;align-self:center}main .box-title h3{text-align:center;letter-spacing:0px;color:#171f26}main .box-title label,main .box-title input{letter-spacing:0px;color:#171f26}main .box-title .profil-name-content{display:flex;align-items:center;position:relative}main .box-title .profil-name-content .add-picto{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main .box-title .profil-name-content .add-picto mat-icon{margin-right:10px}main .box-title .profil-name-content .list-picto{position:absolute;height:200px;width:100%;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main .box-title .profil-name-content .list-picto mat-icon{margin:15px;border:none;font-size:40px}main .box-title .profil-name-content .list-picto mat-icon:hover{color:#830b6b!important;cursor:pointer}main .box-title .box-title-content{width:100%;margin:25px auto}main .box-title .title{letter-spacing:0px;color:#171f26}main .box-title p{letter-spacing:0px;color:#171f26;text-align:center}main .box-title .link-create-profil{width:100%;display:flex;justify-content:center}main .box-title button{text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;letter-spacing:0px;color:#543cb6}main .action{width:100%;display:flex;justify-content:space-between}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.full-width{width:100%}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}::ng-deep .mat-select{padding:0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:transparent}.category-action{display:flex;width:100%;overflow:hidden}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item,.cdk-drag-placeholder{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;padding:15px}.category-item .left-action,.cdk-drag-placeholder .left-action{height:auto;background-color:#49a094;padding-top:7px;width:40px;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item .left-action .transparent-button,.cdk-drag-placeholder .left-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item .field-content,.cdk-drag-placeholder .field-content{width:100%}.category-item .field-content .field-item,.cdk-drag-placeholder .field-content .field-item{display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;border:transparent!important}.category-item .field-content .field-item .category-title-group p,.cdk-drag-placeholder .field-content .field-item .category-title-group p{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e}.category-item .field-content .field-item .category-title-group .category-name,.cdk-drag-placeholder .field-content .field-item .category-title-group .category-name{text-align:left;letter-spacing:0px;color:#171f26;margin:0}.category-item .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.cdk-drag-placeholder .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline{color:transparent!important}.category-item .field-content .mat-form-field-outline,.cdk-drag-placeholder .field-content .mat-form-field-outline{color:transparent!important}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.child{margin-left:0}.child .inner-child{display:flex;flex-wrap:wrap}.category{width:100%}.category .summary{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid rgba(219,203,203,.5882352941)}.category .summary h3{font-size:15px;border-bottom:1px solid rgba(219,203,203,.5882352941);margin:10px;padding-bottom:5px;padding-top:0;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category .summary h3 span{font-weight:600;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:-5px}.category .summary h3 mat-icon{margin-left:15px;cursor:pointer}.category .summary h3.template-title{letter-spacing:0px;color:#171f26}.category .summary ol{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category .summary ol li{font-weight:500;padding:5px;margin:5px auto;font-size:12px;cursor:pointer;text-align:left;letter-spacing:0px;color:#535760}.category .summary ol li ol{padding-left:0;margin-left:0}.category .summary ol li.li-title{font-size:14px;font-weight:600;margin-right:10px}.category .summary ol li.li-title input{width:140px;outline:none;border:1px dashed grey}.category .summary ol li.li-title span{display:inline-flex;align-items:center;width:100%}.category .summary ol li.li-title span mat-icon{margin-left:10px}.category .summary ol li.li-title:hover,.category .summary ol li.li-title.active{background:#e5e8ee 0% 0% no-repeat padding-box;border-radius:5px}.category .summary ol li.sub-title{list-style:none;padding-left:20px}.category .summary ol li.sub-title:hover,.category .summary ol li.sub-title.active,.category .summary ol li.sub-title.active::marker{font-weight:600;background:#e5e8ee 0% 0% no-repeat padding-box;border-radius:5px}.category .disabled{background-color:#f4f7f9!important}.category .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category .expand-button .material-icons{font-size:40px}.category .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.category .title-group{display:flex;justify-content:space-between;margin-top:10px}.category .title-group h2{margin:0 0 8px;display:flex;align-items:center}.add-button-sub-category{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.add-category{border:1px dashed #c2c8d5;border-radius:5px;line-height:26px;margin-left:10px;margin-bottom:10px;letter-spacing:0px;color:#c2c8d5;width:92%}.inner-loop .fields-content{display:flex;height:100%;width:98%;margin:10px 0}.inner-loop .fields-content .button-action{background-color:#6fe8d7;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop .fields-content .button-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop .fields-content .child-2-background{background-color:#cffaf4!important}.inner-loop .fields-content .child-3-background{background-color:#e5e8ee!important}.inner-loop .fields-content .fields-container{width:100%;padding-right:10px;padding-top:5px}.inner-loop .fields-content .fields-container lib-sub-category .field-item{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop .fields-content .fields-container lib-sub-category .field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop .fields-content .fields-container lib-sub-category .field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.side-bar{display:flex;flex-direction:column}.register-button{background:transparent;border:2px solid #192128!important;border-radius:8px;margin-left:22px!important;color:#000;padding:10px!important}.register-button[disabled][disabled]{opacity:.5!important;background:no-repeat padding-box #dadee2!important}.content-item{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}::ng-deep .phone-input-view-collab{border-bottom:1px solid #949494!important;padding-bottom:.3em;padding-top:1em;display:block!important;max-width:100%;width:95%}::ng-deep .country-dropdown{min-width:unset!important}::ng-deep .iti{width:100%!important}::ng-deep #phone{width:90%!important}::ng-deep #mobile-phone{width:100%}::ng-deep .fields{max-height:100vh;overflow:auto;margin-right:.5%;overflow:hidden;width:100%}::ng-deep .fields mat-tab-group{height:100%;width:100%;overflow:hidden}::ng-deep .fields mat-tab-group .mat-tab-body-wrapper{height:100%;max-height:90vh;overflow:auto}::ng-deep .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body{height:100%}::ng-deep .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body .mat-tab-body-content{width:100%;overflow:hidden}.fields{height:95%}.fields ul{list-style:none;display:flex;margin:0;padding:0;overflow:auto}.fields ul li{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields ul li a{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields ul li.menu-item:hover,.fields ul li.menu-item.active{cursor:pointer;border-bottom:3px solid #3C4252}.fields ul li.menu-item:hover a,.fields ul li.menu-item.active a{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}::ng-deep .category-container{overflow:auto;max-height:100%;display:flex;flex-wrap:wrap}::ng-deep .category-container mat-form-field{width:100%}::ng-deep .category-container .actions-button{margin-top:20px;margin-bottom:50px}::ng-deep .category-container .actions-button .send-form{margin-left:0!important;background-color:#000;color:#fff;padding:10px!important}::ng-deep .category-container .actions-button .resume{margin-left:25px!important}::ng-deep .category-container::-webkit-scrollbar{display:none}::ng-deep .category-container{-ms-overflow-style:none;scrollbar-width:none}::ng-deep .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5}::ng-deep .category-item .mat-radio-button.mat-accent .mat-radio-inner-circle,::ng-deep .category-item .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),::ng-deep .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,::ng-deep .category-item .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5}::ng-deep .category-item .mat-checkbox-checkmark-path{stroke:#fff}::ng-deep .category-item .mat-checkbox-frame{border:2px solid #039BE5}::ng-deep .category-item .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background,::ng-deep .category-item .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#039be5}::ng-deep .category-item .mat-checkbox-inner-container{height:20px!important;width:20px!important}::ng-deep button .mat-button-wrapper{display:flex;align-items:center;justify-content:center}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}:host ::ng-deep .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5}.onboarding-create-footer{display:flex;flex-direction:column}div.page{background:white;display:block;margin:0 auto .5cm;box-shadow:0 0 .5cm #00000080}div.page[size=A4]{width:210cm;height:29.7cm}div.page[size=A4][layout=portrait]{width:29.7cm;height:21cm}@media print{body,div.page{margin:0;box-shadow:0}}\n"], dependencies: [{ kind: "directive", type: i1$2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "component", type: i5.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i4$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: i6$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5$1.ScrollToDirective, selector: "[ngxScrollTo]", inputs: ["ngxScrollTo", "ngxScrollToEvent", "ngxScrollToDuration", "ngxScrollToEasing", "ngxScrollToOffset", "ngxScrollToOffsetMap"] }, { kind: "component", type: SubOnboardingCreateComponent, selector: "lib-sub-create-onboarding", inputs: ["field", "length", "locale", "i", "j"], outputs: ["onAddKeywordFromInput", "onKeyPress", "onDrop", "onAddNewField", "onChange", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onCheckValue"] }, { kind: "component", type: OnboardingDetailComponent, selector: "lib-onboarding-detail", inputs: ["detailView"], outputs: ["onShowMode"] }, { kind: "component", type: LoadingPageComponent, selector: "lib-loading-page" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingCreateComponent, decorators: [{
            type: Component,
            args: [{ selector: "create-onboarding", template: "<main>\r\n    <div class=\"content\">\r\n        <form *ngIf=\"!showMode\" [formGroup]=\"form\" id=\"form\" (submit)=\"onSubmit(true)\" #f=\"ngForm\">\r\n            <div class=\"category\">\r\n                <div class=\"title-group\">\r\n                    <h2>{{locale?.TITLE}} {{currentTemplate?.Name}} <mat-icon\r\n                            style=\"margin-left: 20px; cursor: pointer;\" (click)=\"onShowMode()\">visibility</mat-icon>\r\n                    </h2>\r\n                    <div>\r\n                        <button [disabled]=\"loading || !form.valid\" mat-button class=\"register-button send-form\"\r\n                            type=\"submit\">\r\n                            <lib-loading-page *ngIf=\"loading && isSubmitted\"></lib-loading-page>{{submitLabel}}\r\n                        </button>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <div id=\"fields\" class=\"fields\">\r\n                    <ul>\r\n                        <li [ngxScrollTo]=\"'#'+category.name\" class=\"menu-item\"\r\n                            *ngFor=\"let category of categories;  let i=index\" [id]=\"category.name+'x'\">\r\n                            <a>{{category.name}}</a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"category-container\" (scroll)=\"onScroll($event)\">\r\n                        <section class=\"category-item content-item\" *ngFor=\"let category of categories;  let i=index\"\r\n                            [id]=\"category.name\">\r\n                            <div class=\"field-content\">\r\n                                <div class=\"field-item\">\r\n                                    <div class=\"category-title-group\">\r\n                                        <h4 class=\"category-name\">{{category.name}}</h4>\r\n                                        <p>\r\n                                            {{locale?.CATEGORY_SUBTITLE}} {{\r\n                                            catNameStart(category.name) ? \"l'\" + category.name :\r\n                                            category.name }}\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"category-container\">\r\n                                    <ng-container *ngFor=\"let field of category.forms;let j=index\">\r\n                                        <div class=\"field-category\" [id]=\"field.key\"\r\n                                            [style.width]=\"field.forms ? '100%' : fieldWidth(field.type,category.forms.length,j)\"\r\n                                            *ngIf=\"field.expandOnboarding && onCheckConditionLocationValue(field)\">\r\n                                            <div class=\"inner-loop\">\r\n                                                <div class=\"fields-content\">\r\n                                                    <div class=\"fields-container\">\r\n                                                        <lib-sub-create-onboarding [field]=\"field\" [locale]=\"locale\"\r\n                                                            (onChange)=\"onChange($event)\"\r\n                                                            [length]=\"category?.forms?.length\" [i]=\"i\" [j]=\"j\">\r\n                                                            <div class=\"child\">\r\n                                                                <div class=\"inner-child\"\r\n                                                                    *ngIf=\"field.forms && field.value\">\r\n                                                                    <ng-container\r\n                                                                        *ngFor=\"let child of field.forms;let k=index\">\r\n                                                                        <ng-container\r\n                                                                            *ngIf=\"child.expandOnboarding && onCheckConditionLocationValue(child)\">\r\n                                                                            <div class=\"inner-child-content\"\r\n                                                                                [id]=\"child.key\"\r\n                                                                                [style.width]=\"child.forms ? '100%' : fieldWidth(child.type,field.forms.length,k)\">\r\n                                                                                <div class=\"inner-loop\">\r\n                                                                                    <div class=\"fields-content\">\r\n                                                                                        <div class=\"fields-container\">\r\n                                                                                            <lib-sub-create-onboarding\r\n                                                                                                [field]=\"child\"\r\n                                                                                                [locale]=\"locale\"\r\n                                                                                                (onChange)=\"onChange($event)\"\r\n                                                                                                [length]=\"field?.forms?.length\"\r\n                                                                                                [i]=\"j\" [j]=\"k\"\r\n                                                                                                (onCheckValue)=\"onCheckValue($event)\">\r\n                                                                                                <div class=\"child\">\r\n                                                                                                    <div class=\"inner-child\"\r\n                                                                                                        *ngIf=\"child.forms && child.value\">\r\n                                                                                                        <ng-container\r\n                                                                                                            *ngFor=\"let c2 of child.forms;let l=index\">\r\n                                                                                                            <div class=\"inner-child-content\"\r\n                                                                                                                *ngIf=\"c2.expandOnboarding && onCheckConditionLocationValue(c2)\"\r\n                                                                                                                [id]=\"c2.key\"\r\n                                                                                                                [style.width]=\"c2.forms ? '100%' : fieldWidth(c2.type,child.forms.length,l)\">\r\n                                                                                                                <div\r\n                                                                                                                    class=\"inner-loop\">\r\n                                                                                                                    <div\r\n                                                                                                                        class=\"fields-content\">\r\n                                                                                                                        <div\r\n                                                                                                                            class=\"fields-container\">\r\n                                                                                                                            <lib-sub-create-onboarding\r\n                                                                                                                                [field]=\"c2\"\r\n                                                                                                                                [locale]=\"locale\"\r\n                                                                                                                                (onChange)=\"onChange($event)\"\r\n                                                                                                                                [length]=\"child?.forms?.length\"\r\n                                                                                                                                [i]=\"k\"\r\n                                                                                                                                [j]=\"l\"\r\n                                                                                                                                (onCheckValue)=\"onCheckValue($event)\">\r\n                                                                                                                                <div\r\n                                                                                                                                    class=\"child\">\r\n                                                                                                                                </div>\r\n                                                                                                                            </lib-sub-create-onboarding>\r\n                                                                                                                        </div>\r\n                                                                                                                    </div>\r\n                                                                                                                </div>\r\n                                                                                                            </div>\r\n                                                                                                        </ng-container>\r\n                                                                                                    </div>\r\n                                                                                                </div>\r\n                                                                                            </lib-sub-create-onboarding>\r\n                                                                                        </div>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                            </div>\r\n                                                                        </ng-container>\r\n                                                                    </ng-container>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </lib-sub-create-onboarding>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </ng-container>\r\n                                </div>\r\n                            </div>\r\n                        </section>\r\n                        <div class=\"onboarding-create-footer\">\r\n                            <div class=\"actions-button\" style=\"margin-bottom: 50px;display: flex;\">\r\n                                <button [disabled]=\"loading || !form.valid\" mat-button class=\"register-button send-form\"\r\n                                    type=\"submit\">\r\n                                    <lib-loading-page *ngIf=\"loading && isSubmitted\"></lib-loading-page>{{submitLabel}}\r\n                                </button>\r\n                                <button [disabled]=\"loading\" mat-button class=\"register-button resume\" type=\"button\"\r\n                                    (click)=\"onSubmit(false)\">\r\n                                    <lib-loading-page *ngIf=\"loading && !isSubmitted\"></lib-loading-page>{{resumeLabel}}\r\n                                </button>\r\n                            </div>\r\n                            <section style=\"background-color: transparent\">\r\n                                <div style=\"height: 450px;\"></div>\r\n                            </section>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <lib-onboarding-detail *ngIf=\"showMode\" (onShowMode)=\"onShowMode()\" [detailView]=\"detailView\">\r\n        </lib-onboarding-detail>\r\n    </div>\r\n\r\n</main>", styles: ["main{background:#f4f7f9 0% 0% no-repeat padding-box;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main .disabled label{background-color:transparent!important}main .content{width:96%;height:100%;padding-left:2%;padding-right:2%}main .content h3{letter-spacing:0px;color:#171f26;padding-top:20px}main .content p{letter-spacing:0px;color:#171f26}main .content p.sub-title{max-width:400px}main .content .select-contact{max-width:70%;margin:5% auto auto;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;padding:5%}main .content .select-contact .select-template{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main .content .select-contact .select-template .full-width{width:40%}main .content .select-contact .select-template button{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:1em 2em;display:flex;align-items:center;background-color:transparent;letter-spacing:0px;color:#543cb6;align-self:center;width:220px}main .content .category .onboarding-mat-stepper mat-horizontal-stepper .next-step{float:right}main .content form{display:flex;height:100%;width:100%;margin:auto;overflow:hidden}main .content form .select-contact{max-width:70%;margin:5% auto auto;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;padding:5%}main .content form .select-contact button{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;letter-spacing:0px;color:#543cb6;align-self:flex-end}main .box-title{width:786px;margin-top:20vh;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;align-self:center}main .box-title h3{text-align:center;letter-spacing:0px;color:#171f26}main .box-title label,main .box-title input{letter-spacing:0px;color:#171f26}main .box-title .profil-name-content{display:flex;align-items:center;position:relative}main .box-title .profil-name-content .add-picto{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main .box-title .profil-name-content .add-picto mat-icon{margin-right:10px}main .box-title .profil-name-content .list-picto{position:absolute;height:200px;width:100%;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main .box-title .profil-name-content .list-picto mat-icon{margin:15px;border:none;font-size:40px}main .box-title .profil-name-content .list-picto mat-icon:hover{color:#830b6b!important;cursor:pointer}main .box-title .box-title-content{width:100%;margin:25px auto}main .box-title .title{letter-spacing:0px;color:#171f26}main .box-title p{letter-spacing:0px;color:#171f26;text-align:center}main .box-title .link-create-profil{width:100%;display:flex;justify-content:center}main .box-title button{text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;letter-spacing:0px;color:#543cb6}main .action{width:100%;display:flex;justify-content:space-between}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.full-width{width:100%}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}::ng-deep .mat-select{padding:0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:transparent}.category-action{display:flex;width:100%;overflow:hidden}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item,.cdk-drag-placeholder{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;padding:15px}.category-item .left-action,.cdk-drag-placeholder .left-action{height:auto;background-color:#49a094;padding-top:7px;width:40px;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item .left-action .transparent-button,.cdk-drag-placeholder .left-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item .field-content,.cdk-drag-placeholder .field-content{width:100%}.category-item .field-content .field-item,.cdk-drag-placeholder .field-content .field-item{display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;border:transparent!important}.category-item .field-content .field-item .category-title-group p,.cdk-drag-placeholder .field-content .field-item .category-title-group p{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e}.category-item .field-content .field-item .category-title-group .category-name,.cdk-drag-placeholder .field-content .field-item .category-title-group .category-name{text-align:left;letter-spacing:0px;color:#171f26;margin:0}.category-item .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.cdk-drag-placeholder .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline{color:transparent!important}.category-item .field-content .mat-form-field-outline,.cdk-drag-placeholder .field-content .mat-form-field-outline{color:transparent!important}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.child{margin-left:0}.child .inner-child{display:flex;flex-wrap:wrap}.category{width:100%}.category .summary{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid rgba(219,203,203,.5882352941)}.category .summary h3{font-size:15px;border-bottom:1px solid rgba(219,203,203,.5882352941);margin:10px;padding-bottom:5px;padding-top:0;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category .summary h3 span{font-weight:600;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:-5px}.category .summary h3 mat-icon{margin-left:15px;cursor:pointer}.category .summary h3.template-title{letter-spacing:0px;color:#171f26}.category .summary ol{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category .summary ol li{font-weight:500;padding:5px;margin:5px auto;font-size:12px;cursor:pointer;text-align:left;letter-spacing:0px;color:#535760}.category .summary ol li ol{padding-left:0;margin-left:0}.category .summary ol li.li-title{font-size:14px;font-weight:600;margin-right:10px}.category .summary ol li.li-title input{width:140px;outline:none;border:1px dashed grey}.category .summary ol li.li-title span{display:inline-flex;align-items:center;width:100%}.category .summary ol li.li-title span mat-icon{margin-left:10px}.category .summary ol li.li-title:hover,.category .summary ol li.li-title.active{background:#e5e8ee 0% 0% no-repeat padding-box;border-radius:5px}.category .summary ol li.sub-title{list-style:none;padding-left:20px}.category .summary ol li.sub-title:hover,.category .summary ol li.sub-title.active,.category .summary ol li.sub-title.active::marker{font-weight:600;background:#e5e8ee 0% 0% no-repeat padding-box;border-radius:5px}.category .disabled{background-color:#f4f7f9!important}.category .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category .expand-button .material-icons{font-size:40px}.category .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.category .title-group{display:flex;justify-content:space-between;margin-top:10px}.category .title-group h2{margin:0 0 8px;display:flex;align-items:center}.add-button-sub-category{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.add-category{border:1px dashed #c2c8d5;border-radius:5px;line-height:26px;margin-left:10px;margin-bottom:10px;letter-spacing:0px;color:#c2c8d5;width:92%}.inner-loop .fields-content{display:flex;height:100%;width:98%;margin:10px 0}.inner-loop .fields-content .button-action{background-color:#6fe8d7;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop .fields-content .button-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop .fields-content .child-2-background{background-color:#cffaf4!important}.inner-loop .fields-content .child-3-background{background-color:#e5e8ee!important}.inner-loop .fields-content .fields-container{width:100%;padding-right:10px;padding-top:5px}.inner-loop .fields-content .fields-container lib-sub-category .field-item{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop .fields-content .fields-container lib-sub-category .field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop .fields-content .fields-container lib-sub-category .field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.side-bar{display:flex;flex-direction:column}.register-button{background:transparent;border:2px solid #192128!important;border-radius:8px;margin-left:22px!important;color:#000;padding:10px!important}.register-button[disabled][disabled]{opacity:.5!important;background:no-repeat padding-box #dadee2!important}.content-item{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}::ng-deep .phone-input-view-collab{border-bottom:1px solid #949494!important;padding-bottom:.3em;padding-top:1em;display:block!important;max-width:100%;width:95%}::ng-deep .country-dropdown{min-width:unset!important}::ng-deep .iti{width:100%!important}::ng-deep #phone{width:90%!important}::ng-deep #mobile-phone{width:100%}::ng-deep .fields{max-height:100vh;overflow:auto;margin-right:.5%;overflow:hidden;width:100%}::ng-deep .fields mat-tab-group{height:100%;width:100%;overflow:hidden}::ng-deep .fields mat-tab-group .mat-tab-body-wrapper{height:100%;max-height:90vh;overflow:auto}::ng-deep .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body{height:100%}::ng-deep .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body .mat-tab-body-content{width:100%;overflow:hidden}.fields{height:95%}.fields ul{list-style:none;display:flex;margin:0;padding:0;overflow:auto}.fields ul li{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields ul li a{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields ul li.menu-item:hover,.fields ul li.menu-item.active{cursor:pointer;border-bottom:3px solid #3C4252}.fields ul li.menu-item:hover a,.fields ul li.menu-item.active a{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}::ng-deep .category-container{overflow:auto;max-height:100%;display:flex;flex-wrap:wrap}::ng-deep .category-container mat-form-field{width:100%}::ng-deep .category-container .actions-button{margin-top:20px;margin-bottom:50px}::ng-deep .category-container .actions-button .send-form{margin-left:0!important;background-color:#000;color:#fff;padding:10px!important}::ng-deep .category-container .actions-button .resume{margin-left:25px!important}::ng-deep .category-container::-webkit-scrollbar{display:none}::ng-deep .category-container{-ms-overflow-style:none;scrollbar-width:none}::ng-deep .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5}::ng-deep .category-item .mat-radio-button.mat-accent .mat-radio-inner-circle,::ng-deep .category-item .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),::ng-deep .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,::ng-deep .category-item .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5}::ng-deep .category-item .mat-checkbox-checkmark-path{stroke:#fff}::ng-deep .category-item .mat-checkbox-frame{border:2px solid #039BE5}::ng-deep .category-item .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background,::ng-deep .category-item .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#039be5}::ng-deep .category-item .mat-checkbox-inner-container{height:20px!important;width:20px!important}::ng-deep button .mat-button-wrapper{display:flex;align-items:center;justify-content:center}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}:host ::ng-deep .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5}.onboarding-create-footer{display:flex;flex-direction:column}div.page{background:white;display:block;margin:0 auto .5cm;box-shadow:0 0 .5cm #00000080}div.page[size=A4]{width:210cm;height:29.7cm}div.page[size=A4][layout=portrait]{width:29.7cm;height:21cm}@media print{body,div.page{margin:0;box-shadow:0}}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$2.UntypedFormBuilder }, { type: OnboardingService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: i1$1.MatDialog }]; }, propDecorators: { onScroll: [{
                type: HostListener,
                args: ['scroll', ['$event']]
            }] } });

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
        this.locale = {};
        this.onboarding = {
            TemplateId: 0,
        };
        this.service._lang.subscribe((locale) => {
            this.locale = locales[locale].REQUEST;
        });
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
DialogCreateOnboardingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: DialogCreateOnboardingComponent, deps: [{ token: MAT_DIALOG_DATA }, { token: i1$1.MatDialogRef }, { token: OnboardingService }], target: i0.ɵɵFactoryTarget.Component });
DialogCreateOnboardingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: DialogCreateOnboardingComponent, selector: "lib-dialog-create-onboarding", ngImport: i0, template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n  <h3 class=\"title\">{{locale?.CREATION_AN_REQUEST}}</h3>\r\n  <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n    <mat-label>{{locale?.TYPE_OF_PROFILE}}</mat-label>\r\n    <mat-select [(ngModel)]=\"onboarding.TemplateId\" required>\r\n      <mat-option *ngFor=\"let template of templates\" [value]=\"template._id\">{{ template.Name }}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <div class=\"action-content\">\r\n    <button [disabled]=\"disabled()\" class=\"create-profil\" (click)=\"createOnboarding()\" mat-raised-button>\r\n      {{locale?.START_REQUEST}}\r\n    </button>\r\n    <button class=\"abandon-profil\" (click)=\"close()\" mat-raised-button>\r\n      {{locale?.LEAVE}}\r\n    </button>\r\n  </div>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:400px;min-width:400px}mat-dialog-content mat-form-field{margin-bottom:10px}mat-dialog-content h3{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content .abandon-profil{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px;padding:10px!important}mat-dialog-content .create-profil{background-color:#171f26;border:1px solid #171f26;color:#fff;padding:10px!important}mat-dialog-content button:disabled,mat-dialog-content button[disabled]{opacity:.5}\n"], dependencies: [{ kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2$1.MatLabel, selector: "mat-label" }, { kind: "component", type: i5.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i4$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i7.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i1$3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i1$1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i9.NativeElementInjectorDirective, selector: "[ngModel], [formControl], [formControlName]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: DialogCreateOnboardingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-dialog-create-onboarding', template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n  <h3 class=\"title\">{{locale?.CREATION_AN_REQUEST}}</h3>\r\n  <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n    <mat-label>{{locale?.TYPE_OF_PROFILE}}</mat-label>\r\n    <mat-select [(ngModel)]=\"onboarding.TemplateId\" required>\r\n      <mat-option *ngFor=\"let template of templates\" [value]=\"template._id\">{{ template.Name }}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <div class=\"action-content\">\r\n    <button [disabled]=\"disabled()\" class=\"create-profil\" (click)=\"createOnboarding()\" mat-raised-button>\r\n      {{locale?.START_REQUEST}}\r\n    </button>\r\n    <button class=\"abandon-profil\" (click)=\"close()\" mat-raised-button>\r\n      {{locale?.LEAVE}}\r\n    </button>\r\n  </div>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:400px;min-width:400px}mat-dialog-content mat-form-field{margin-bottom:10px}mat-dialog-content h3{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content .abandon-profil{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px;padding:10px!important}mat-dialog-content .create-profil{background-color:#171f26;border:1px solid #171f26;color:#fff;padding:10px!important}mat-dialog-content button:disabled,mat-dialog-content button[disabled]{opacity:.5}\n"] }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }, { type: i1$1.MatDialogRef }, { type: OnboardingService }];
    } });

class CoreMatTableComponent {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        this.data = [];
        this.filterParamsResult = {};
        this.searchInput = '';
        this.size = 15;
        this.filter = {};
        this.startPage = 0;
        this.columnDefinitions = [];
        this.lang = "fr";
    }
    ngOnInit() {
        this._data = new CoreMatTable(this.data ? this.data : [], this.sortInit, this.rangeInit, this.size, true, true, this.filter, this.startPage);
    }
    ngOnChanges(changes) {
        this.triggerChanges(changes);
    }
    triggerChanges(changes) {
        var _a;
        if (this.data.length >= 0) {
            const x = this.mapData();
            if (this._data && changes.data)
                this._data.setData(x);
            if (this._data) {
                if (changes.searchInput)
                    this._data.search.next((_a = changes.searchInput) === null || _a === void 0 ? void 0 : _a.currentValue);
                if (changes.filterParamsResult) {
                    const { filterDate, filterData } = this.filterParamsResult;
                    if (filterDate && filterDate !== this._currentDate) {
                        this._currentDate = filterDate;
                        this._data.filterDate(filterDate);
                    }
                    if (filterData && filterData !== this._currentFilter) {
                        this._currentFilter = filterData;
                        this._data.filter(filterData);
                    }
                }
            }
        }
        else if (this._data) {
            this._data.setData([]);
        }
    }
    apply(map) {
        this.mapData = map;
    }
}
CoreMatTableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: CoreMatTableComponent, deps: [{ token: i1$3.DateAdapter }], target: i0.ɵɵFactoryTarget.Injectable });
CoreMatTableComponent.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: CoreMatTableComponent });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: CoreMatTableComponent, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1$3.DateAdapter }]; }, propDecorators: { data: [{
                type: Input
            }], filterParamsResult: [{
                type: Input
            }], searchInput: [{
                type: Input
            }], sortInit: [{
                type: Input
            }], rangeInit: [{
                type: Input
            }], size: [{
                type: Input
            }], filter: [{
                type: Input
            }], startPage: [{
                type: Input
            }], columnDefinitions: [{
                type: Input
            }] } });

class OnboardingTableComponent extends CoreMatTableComponent {
    constructor(dateAdapter) {
        super(dateAdapter);
        this.dateAdapter = dateAdapter;
        this.locale = {};
        this.data = [];
        this.filterParamsResult = {};
        this.searchInput = '';
        this.sortInit = {
            active: 'Id',
            direction: 'desc'
        };
        this.size = 15;
        this.filter = {};
        this.columnDefinitions = [];
        this.startPage = 0;
        this.apply(() => {
            return this.data;
        });
    }
    ngOnInit() {
        const _super = Object.create(null, {
            ngOnInit: { get: () => super.ngOnInit }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.ngOnInit.call(this);
        });
    }
}
OnboardingTableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingTableComponent, deps: [{ token: i1$3.DateAdapter }], target: i0.ɵɵFactoryTarget.Component });
OnboardingTableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: OnboardingTableComponent, selector: "lib-onboarding-table", inputs: { _loading_table: "_loading_table", lang: "lang", locale: "locale", data: "data", filterParamsResult: "filterParamsResult", searchInput: "searchInput", sortInit: "sortInit", rangeInit: "rangeInit", size: "size", filter: "filter", columnDefinitions: "columnDefinitions", startPage: "startPage" }, usesInheritance: true, ngImport: i0, template: "<p class=\"header-result\">{{_data?.totalElements}} {{locale?.RESULTS}}</p>\n<ngx-design-table *ngIf=\"_data\" [columnDefinitions]=\"columnDefinitions\" [data]=\"_data\" [lang]=\"lang\"\n  [btnOverride]=\"true\" [lang]=\"lang\" [EmptyRow]=\"true\" [displayDetail]=\"true\" [blockDetails]=\"true\">\n</ngx-design-table>", styles: ["::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .table-wrapper>table{border-collapse:separate!important;border-spacing:0px 20px!important}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-header-row{background:#E5E8EE}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .empty-row{height:0px!important;background:0% 0% no-repeat padding-box padding-box rgb(244,247,249)}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .no-display-detail-empty-row{display:none}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table{background:0% 0% no-repeat padding-box padding-box rgb(244,247,249)}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell{background:#fff!important}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell a{text-decoration:none!important}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell span{font-style:normal;font-weight:400}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell app-is-mat-icon{width:100px}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td:has(.mat-column-expandedDetailX){border-top:0px solid #f4f7f9!important;border-radius:0 0 14px 14px/0px 0px 14px 14px}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell:first-of-type{border-bottom-left-radius:14px;border-top-left-radius:14px}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell:last-of-type{border-bottom-right-radius:14px;border-top-right-radius:14px}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-status{width:109px;height:36px;border-radius:4px;text-transform:capitalize;color:#fff;font-weight:500!important;font-size:16px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.finished{background:#6FE8D7}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.to-finish{background:#F3A124}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.last-name{display:flex;flex-direction:column}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.last-name span:first-child{font-style:normal;font-weight:700;font-size:14px;line-height:120%;display:flex;align-items:center;color:#242731}\n"], dependencies: [{ kind: "directive", type: i4$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3$1.TableComponent, selector: "ngx-design-table", inputs: ["columnDefinitions", "displayDetail", "displayComponent", "data", "rowMargin", "lang", "btnOverride", "inputSearch", "EmptyRow", "blockDetails"], outputs: ["callFunction", "onReady", "clicked"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-onboarding-table', template: "<p class=\"header-result\">{{_data?.totalElements}} {{locale?.RESULTS}}</p>\n<ngx-design-table *ngIf=\"_data\" [columnDefinitions]=\"columnDefinitions\" [data]=\"_data\" [lang]=\"lang\"\n  [btnOverride]=\"true\" [lang]=\"lang\" [EmptyRow]=\"true\" [displayDetail]=\"true\" [blockDetails]=\"true\">\n</ngx-design-table>", styles: ["::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .table-wrapper>table{border-collapse:separate!important;border-spacing:0px 20px!important}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-header-row{background:#E5E8EE}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .empty-row{height:0px!important;background:0% 0% no-repeat padding-box padding-box rgb(244,247,249)}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .no-display-detail-empty-row{display:none}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table{background:0% 0% no-repeat padding-box padding-box rgb(244,247,249)}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell{background:#fff!important}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell a{text-decoration:none!important}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell span{font-style:normal;font-weight:400}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell app-is-mat-icon{width:100px}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td:has(.mat-column-expandedDetailX){border-top:0px solid #f4f7f9!important;border-radius:0 0 14px 14px/0px 0px 14px 14px}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell:first-of-type{border-bottom-left-radius:14px;border-top-left-radius:14px}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell:last-of-type{border-bottom-right-radius:14px;border-top-right-radius:14px}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-status{width:109px;height:36px;border-radius:4px;text-transform:capitalize;color:#fff;font-weight:500!important;font-size:16px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.finished{background:#6FE8D7}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.to-finish{background:#F3A124}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.last-name{display:flex;flex-direction:column}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.last-name span:first-child{font-style:normal;font-weight:700;font-size:14px;line-height:120%;display:flex;align-items:center;color:#242731}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$3.DateAdapter }]; }, propDecorators: { _loading_table: [{
                type: Input
            }], lang: [{
                type: Input
            }], locale: [{
                type: Input
            }], data: [{
                type: Input
            }], filterParamsResult: [{
                type: Input
            }], searchInput: [{
                type: Input
            }], sortInit: [{
                type: Input
            }], rangeInit: [{
                type: Input
            }], size: [{
                type: Input
            }], filter: [{
                type: Input
            }], columnDefinitions: [{
                type: Input
            }], startPage: [{
                type: Input
            }] } });

// save the file
class OnboardingListComponent {
    constructor(service, router, route, dialog, datepipe) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.datepipe = datepipe;
        this.currentLength = 0;
        this.currentFilter = 'all';
        this.search = '';
        this.onboardingFormatList = [];
        this.templates = [];
        this.locale = {};
        this.ngxFilterData = [];
        this.ngxFilterInit = "";
        this.columnDefinitions = [];
        this._loading_table = true;
        this.HiddenIndex = 0;
        this.index = 0;
        this.lang = 'fr';
        this.filterParamsResult = {};
        this.searchInput = "";
        this.service._lang.subscribe((locale) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            this.lang = locale;
            this.locale = locales[locale].REQUEST;
            this.ngxFilterData = [
                {
                    filterData: {
                        type: "select",
                        value: "",
                        key: 'FinishedStatus',
                        label: this.locale.STATUS,
                        options: [
                            {
                                value: 'finished',
                                label: this.locale.FINISHED
                            },
                            {
                                value: 'to-finish',
                                label: this.locale.TO_FINISHED
                            },
                        ],
                    }
                },
                {
                    filterData: {
                        type: "select",
                        value: "",
                        label: 'Service',
                        key: 'TemplateId',
                        options: [],
                    }
                },
                {
                    filterData: {
                        type: 'date',
                        key: 'createdAt',
                        operator: "gte",
                        label: 'Date Min  '
                    }
                },
                {
                    filterData: {
                        type: 'date',
                        key: 'createdAt',
                        operator: "lte",
                        label: 'Date Max'
                    }
                }
            ];
            this.service._templates.subscribe((data) => {
                if (data) {
                    this.templates = data.filter((d) => d.Status);
                    this.ngxFilterData[1].filterData.options = this.templates.map((t) => ({ value: t._id, label: t.Name }));
                    this.ngxFilterInit = JSON.stringify(this.ngxFilterData);
                }
            });
            this.columnDefinitions = [
                {
                    key: 'Name',
                    // subTitle: "date_of_entry",
                    value: (_a = this.locale) === null || _a === void 0 ? void 0 : _a.COLLABORATOR,
                    // subTitleFormat: "date",
                    order: 1,
                    class: 'w-pmin15',
                    // addClass: 'lastNameClass',
                    // module: CellsComponentList.CustomCell,
                    sort: true,
                },
                {
                    key: 'Id',
                    value: (_b = this.locale) === null || _b === void 0 ? void 0 : _b.ID,
                    order: 2,
                    class: 'w-pmin5',
                    sort: true,
                },
                {
                    key: 'Title',
                    value: (_c = this.locale) === null || _c === void 0 ? void 0 : _c.PROFILE,
                    order: 2,
                    class: 'w-pmin10',
                    sort: true,
                },
                {
                    key: 'requestor',
                    value: (_d = this.locale) === null || _d === void 0 ? void 0 : _d.REQUESTOR,
                    order: 4,
                    class: 'w-pmin15',
                    sort: true,
                },
                {
                    key: 'AccountName',
                    value: (_e = this.locale) === null || _e === void 0 ? void 0 : _e.SITE,
                    order: 5,
                    class: 'w-pmin15',
                    sort: true,
                },
                {
                    key: 'TemplateName',
                    value: (_f = this.locale) === null || _f === void 0 ? void 0 : _f.SERVICE,
                    order: 6,
                    class: 'w-pmin10',
                    sort: true,
                },
                {
                    key: 'createdAt',
                    value: (_g = this.locale) === null || _g === void 0 ? void 0 : _g.CREATION_DATE,
                    order: 7,
                    // module: CellsComponentList.DateFormat,
                    class: 'w-pmin10',
                    sort: true,
                    align: 'left',
                },
                {
                    key: 'Status',
                    value: (_h = this.locale) === null || _h === void 0 ? void 0 : _h.STATUS,
                    order: 8,
                    addClass: 'CustomClass',
                    class: 'w-pmin10',
                    sort: true,
                    module: CellsComponentList.CustomCell,
                },
                {
                    key: 'Action',
                    value: '',
                    order: 9,
                    class: 'w-pmin10',
                    module: CellsComponentList.ButtonLink,
                    display: (_j = this.locale) === null || _j === void 0 ? void 0 : _j.DETAIL,
                    override: [`${this.checkOnboardingPath()}`, 'TemplateId', '_id'],
                    align: 'center'
                }
            ];
        });
    }
    onFilter(event) {
        this.filterParamsResult = filterParse(event.filterConfig);
        this.searchInput = (event === null || event === void 0 ? void 0 : event.searchInput) || '';
    }
    onRefresh(event) {
        this.ngxFilterData = JSON.parse(this.ngxFilterInit);
    }
    checkOnboardingPath() {
        return this.service.mainPath.includes('onboarding') ? `${this.service.mainPath}/requests/` : `/onboarding/requests/`;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.service.getAllProfil();
            yield this.service.getAllOnboarding();
            this.accounts = yield this.service.getAccounts();
            this.service.onboarding.subscribe((onboarding) => {
                setTimeout(() => {
                    this._loading_table = false;
                }, 2000);
                if (onboarding) {
                    this.onboardingList = onboarding.map((row, index) => {
                        var _a, _b;
                        const user = row.categories.find((cat) => cat.name === "Utilisateur");
                        const formUser = user.forms.map((form) => ({ key: form.key, value: form.value })).reduce((a, v) => (Object.assign(Object.assign({}, a), { [v.key]: v.value })), {});
                        row.Finished = !!row.Finished;
                        row.FinishedStatus = !!row.Finished ? 'finished' : 'to-finish';
                        row.Status = row.Finished ? (this.locale === 'fr' ? "Terminée" : 'Finished') : (this.locale === 'fr' ? "A finaliser" : 'To finished');
                        row.CustomClass = row.Finished ? "custom-status finished" : "custom-status to-finish";
                        row.lastNameClass = "last-name";
                        row.requestor = ((_a = row === null || row === void 0 ? void 0 : row.vcontacts[0]) === null || _a === void 0 ? void 0 : _a.Name) || '';
                        // row.AccountName = row?.vcontacts[0]?.Account.Name || '';
                        row.AccountName = this.findAccount(formUser.AccountName);
                        row.Name = row.ContactName = (formUser === null || formUser === void 0 ? void 0 : formUser.LastName) + " " + (formUser === null || formUser === void 0 ? void 0 : formUser.FirstName) || "";
                        row.Title = (formUser === null || formUser === void 0 ? void 0 : formUser.Title) || "";
                        row.Email = (formUser === null || formUser === void 0 ? void 0 : formUser.Email) || '';
                        row.date_of_entry = formUser.date_of_entry ? formUser.date_of_entry : null;
                        row.TemplateName = ((_b = row === null || row === void 0 ? void 0 : row.vtemplates) === null || _b === void 0 ? void 0 : _b.length) > 0 ? row === null || row === void 0 ? void 0 : row.vtemplates[0].Name : '';
                        row.Id = index + 1;
                        row.CreatedDate = row.createdAt;
                        row.createdAt = this.lang === 'fr' ? new Date(row.createdAt).toLocaleDateString("fr-FR") : new Date(row.createdAt).toLocaleDateString("en-GB");
                        return row;
                    });
                }
            });
        });
    }
    findAccount(account) {
        const result = this.accounts.find((acc) => acc._id === account);
        if (result)
            return result.Name;
        return account;
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
    onExportToXLSX() {
        try {
            const dataToExport = this.onboardingList.map((d) => {
                var _a, _b;
                return ({
                    Status: d.Status,
                    Requestor: d.ContactName,
                    Name: d.Name,
                    Title: d.Title,
                    Email: d.Email,
                    CreationDate: d.createdAt,
                    TemplateName: ((_a = d.vtemplates) === null || _a === void 0 ? void 0 : _a.length) ? d.vtemplates[0].Name : '',
                    CaseId: ((_b = d.vtickets) === null || _b === void 0 ? void 0 : _b.length) ? d.vtickets[0].CaseNumber : ''
                });
            });
            try {
                const ws = XLSX.utils.json_to_sheet(dataToExport, {});
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, 'onboarding-request');
                XLSX.writeFile(wb, `${'onboarding-request-exported'}.xlsx`);
            }
            catch (error) {
                console.log('error');
            }
        }
        catch (error) {
            console.log('error', error);
        }
    }
}
OnboardingListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingListComponent, deps: [{ token: OnboardingService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: i1$1.MatDialog }, { token: i4$1.DatePipe }], target: i0.ɵɵFactoryTarget.Component });
OnboardingListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: OnboardingListComponent, selector: "lib-onboarding-list", ngImport: i0, template: "<div class=\"main-all-ticket-list onboarding-list-container\">\r\n    <div class=\"header-top\">\r\n        <h2 style=\"margin: 0;\">\r\n            {{locale?.REQUEST_FOR_INTEGRATION}} ({{onboardingList?.length}})\r\n        </h2>\r\n        <a role=\"button\" class=\"add-onboarding\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">\r\n            <mat-icon>add</mat-icon> {{locale?.NEW}}\r\n        </a>\r\n    </div>\r\n    <div class=\"list-title\">\r\n        <ngx-filter [filterConfig]=\"ngxFilterData\" lang=\"fr\" (onFilter)=\"onFilter($event)\"\r\n            (onRefresh)=\"onRefresh($event)\" [datas]=\"onboardingList\" [withRefresh]=\"true\"\r\n            [placeholder]=\"locale?.SEARCH\">\r\n            <button mat-flat-button appearance=\"text\" class=\"export-to-csv rounded secondary download-btn mr30\"\r\n                (click)=\"onExportToXLSX()\">\r\n                <nb-icon [icon]=\"'download'\" [size]=\"2\" class=\"mr5\"></nb-icon>\r\n                (.xlsx)\r\n            </button>\r\n        </ngx-filter>\r\n\r\n    </div>\r\n    <div class=\"content-view-list-ticket\">\r\n\r\n        <div *ngIf=\"onboardingList\">\r\n            <lib-onboarding-table [columnDefinitions]=\"columnDefinitions\" [data]=\"onboardingList\"\r\n                [filterParamsResult]=\"filterParamsResult\" [lang]=\"lang\" [searchInput]=\"searchInput\" [locale]=\"locale\">\r\n            </lib-onboarding-table>\r\n        </div>\r\n    </div>\r\n</div>", styles: ["mat-card{display:block;width:98%}md-tooltip.tt-multiline ._md-content{height:auto}md-tooltip ._md-content{height:auto}table{width:100%}.element-detail .inline{display:table;width:90%}.element-detail .inline .block1{display:inline-table;float:left;width:50%;text-align:left}.element-detail .inline .block1 strong{letter-spacing:0px;color:#171f26}.element-detail .inline .block1 p,.element-detail .inline .block1 small{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list .component-title{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list .content-view-list-ticket{grid-area:2/1/4/3;padding-left:0;padding-right:0}.main-all-ticket-list .content-view-list-ticket table{width:100%}.main-all-ticket-list .content-view-list-ticket table thead{position:sticky;top:-1px;z-index:999}app-list-preview{width:100%}::ng-deep .mat-tab-label-active{background:#b6d1cd;opacity:1!important}::ng-deep .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left{color:#171f26;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count{color:#171f26;letter-spacing:0px;text-align:left}.page-title-container{display:flex;margin-right:48px}.page-title{text-align:left;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search{margin-left:auto;position:relative;width:400px}.page-search mat-icon{left:18%;margin-top:10px;position:absolute}.page-search img{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab{padding-left:48px;padding-right:48px}.detail-view-ticket{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search mat-icon{left:16%}}.ticket-list{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list::-webkit-scrollbar{width:5px}.ticket-list::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active,.site-view-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active{background-image:none!important;color:#171f26!important}::ng-deep .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}::ng-deep .mat-tab-header .mat-tab-label-active{background:transparent}::ng-deep .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}::ng-deep lib-onboarding-table{background-color:red!important}::ng-deep lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container{position:relative;padding:30px;display:flex;flex-direction:column;gap:25px;min-height:100vh}.onboarding-list-container .header-top{display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .title-table{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container .add-onboarding{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.onboarding-list-container .list-title ul li{cursor:pointer}.onboarding-list-container .list-title ul li.active{border-bottom:4px solid #3c4252}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}::ng-deep .right-action{display:flex;align-items:center}.header-result{font-style:normal;font-weight:400;font-size:12px;color:#d1dbea;padding:0;margin:0}::ng-deep ngx-filter{width:100%}::ng-deep ngx-filter ngx-filter-group ul{padding:0}\n"], dependencies: [{ kind: "component", type: i5.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i5.MatAnchor, selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matButton", "matAnchor"] }, { kind: "directive", type: i4$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i9$1.NgxFilterLibraryComponent, selector: "ngx-filter", inputs: ["filterConfig", "lang", "withRefresh", "withGlobalSearch", "placeholder", "searchType", "datas"], outputs: ["onFilter", "onRefresh"] }, { kind: "component", type: i4.NowboardIconComponent, selector: "nb-icon", inputs: ["size", "primary", "disabled_color", "disabled", "icon"] }, { kind: "component", type: OnboardingTableComponent, selector: "lib-onboarding-table", inputs: ["_loading_table", "lang", "locale", "data", "filterParamsResult", "searchInput", "sortInit", "rangeInit", "size", "filter", "columnDefinitions", "startPage"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-onboarding-list', template: "<div class=\"main-all-ticket-list onboarding-list-container\">\r\n    <div class=\"header-top\">\r\n        <h2 style=\"margin: 0;\">\r\n            {{locale?.REQUEST_FOR_INTEGRATION}} ({{onboardingList?.length}})\r\n        </h2>\r\n        <a role=\"button\" class=\"add-onboarding\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">\r\n            <mat-icon>add</mat-icon> {{locale?.NEW}}\r\n        </a>\r\n    </div>\r\n    <div class=\"list-title\">\r\n        <ngx-filter [filterConfig]=\"ngxFilterData\" lang=\"fr\" (onFilter)=\"onFilter($event)\"\r\n            (onRefresh)=\"onRefresh($event)\" [datas]=\"onboardingList\" [withRefresh]=\"true\"\r\n            [placeholder]=\"locale?.SEARCH\">\r\n            <button mat-flat-button appearance=\"text\" class=\"export-to-csv rounded secondary download-btn mr30\"\r\n                (click)=\"onExportToXLSX()\">\r\n                <nb-icon [icon]=\"'download'\" [size]=\"2\" class=\"mr5\"></nb-icon>\r\n                (.xlsx)\r\n            </button>\r\n        </ngx-filter>\r\n\r\n    </div>\r\n    <div class=\"content-view-list-ticket\">\r\n\r\n        <div *ngIf=\"onboardingList\">\r\n            <lib-onboarding-table [columnDefinitions]=\"columnDefinitions\" [data]=\"onboardingList\"\r\n                [filterParamsResult]=\"filterParamsResult\" [lang]=\"lang\" [searchInput]=\"searchInput\" [locale]=\"locale\">\r\n            </lib-onboarding-table>\r\n        </div>\r\n    </div>\r\n</div>", styles: ["mat-card{display:block;width:98%}md-tooltip.tt-multiline ._md-content{height:auto}md-tooltip ._md-content{height:auto}table{width:100%}.element-detail .inline{display:table;width:90%}.element-detail .inline .block1{display:inline-table;float:left;width:50%;text-align:left}.element-detail .inline .block1 strong{letter-spacing:0px;color:#171f26}.element-detail .inline .block1 p,.element-detail .inline .block1 small{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list .component-title{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list .content-view-list-ticket{grid-area:2/1/4/3;padding-left:0;padding-right:0}.main-all-ticket-list .content-view-list-ticket table{width:100%}.main-all-ticket-list .content-view-list-ticket table thead{position:sticky;top:-1px;z-index:999}app-list-preview{width:100%}::ng-deep .mat-tab-label-active{background:#b6d1cd;opacity:1!important}::ng-deep .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left{color:#171f26;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count{color:#171f26;letter-spacing:0px;text-align:left}.page-title-container{display:flex;margin-right:48px}.page-title{text-align:left;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search{margin-left:auto;position:relative;width:400px}.page-search mat-icon{left:18%;margin-top:10px;position:absolute}.page-search img{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab{padding-left:48px;padding-right:48px}.detail-view-ticket{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search mat-icon{left:16%}}.ticket-list{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list::-webkit-scrollbar{width:5px}.ticket-list::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active,.site-view-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active{background-image:none!important;color:#171f26!important}::ng-deep .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}::ng-deep .mat-tab-header .mat-tab-label-active{background:transparent}::ng-deep .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}::ng-deep lib-onboarding-table{background-color:red!important}::ng-deep lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container{position:relative;padding:30px;display:flex;flex-direction:column;gap:25px;min-height:100vh}.onboarding-list-container .header-top{display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .title-table{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container .add-onboarding{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.onboarding-list-container .list-title ul li{cursor:pointer}.onboarding-list-container .list-title ul li.active{border-bottom:4px solid #3c4252}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}::ng-deep .right-action{display:flex;align-items:center}.header-result{font-style:normal;font-weight:400;font-size:12px;color:#d1dbea;padding:0;margin:0}::ng-deep ngx-filter{width:100%}::ng-deep ngx-filter ngx-filter-group ul{padding:0}\n"] }]
        }], ctorParameters: function () { return [{ type: OnboardingService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i1$1.MatDialog }, { type: i4$1.DatePipe }]; } });

class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: LoadingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LoadingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: LoadingComponent, selector: "lib-loading", ngImport: i0, template: "<div class=\"lds-spinner\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n</div>", styles: [".lds-spinner{color:official;display:inline-block;position:relative;width:20px;height:20px}.lds-spinner div{transform-origin:34px 15px;animation:lds-spinner 1.2s linear infinite}.lds-spinner div:after{content:\" \";display:block;position:absolute;top:4px;left:33px;width:2px;height:6px;border-radius:20%;background:#F3A124}.lds-spinner div:nth-child(1){transform:rotate(0);animation-delay:-1.1s}.lds-spinner div:nth-child(2){transform:rotate(30deg);animation-delay:-1s}.lds-spinner div:nth-child(3){transform:rotate(60deg);animation-delay:-.9s}.lds-spinner div:nth-child(4){transform:rotate(90deg);animation-delay:-.8s}.lds-spinner div:nth-child(5){transform:rotate(120deg);animation-delay:-.7s}.lds-spinner div:nth-child(6){transform:rotate(150deg);animation-delay:-.6s}.lds-spinner div:nth-child(7){transform:rotate(180deg);animation-delay:-.5s}.lds-spinner div:nth-child(8){transform:rotate(210deg);animation-delay:-.4s}.lds-spinner div:nth-child(9){transform:rotate(240deg);animation-delay:-.3s}.lds-spinner div:nth-child(10){transform:rotate(270deg);animation-delay:-.2s}.lds-spinner div:nth-child(11){transform:rotate(300deg);animation-delay:-.1s}.lds-spinner div:nth-child(12){transform:rotate(330deg);animation-delay:0s}@keyframes lds-spinner{0%{opacity:1}to{opacity:0}}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: LoadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-loading', template: "<div class=\"lds-spinner\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n</div>", styles: [".lds-spinner{color:official;display:inline-block;position:relative;width:20px;height:20px}.lds-spinner div{transform-origin:34px 15px;animation:lds-spinner 1.2s linear infinite}.lds-spinner div:after{content:\" \";display:block;position:absolute;top:4px;left:33px;width:2px;height:6px;border-radius:20%;background:#F3A124}.lds-spinner div:nth-child(1){transform:rotate(0);animation-delay:-1.1s}.lds-spinner div:nth-child(2){transform:rotate(30deg);animation-delay:-1s}.lds-spinner div:nth-child(3){transform:rotate(60deg);animation-delay:-.9s}.lds-spinner div:nth-child(4){transform:rotate(90deg);animation-delay:-.8s}.lds-spinner div:nth-child(5){transform:rotate(120deg);animation-delay:-.7s}.lds-spinner div:nth-child(6){transform:rotate(150deg);animation-delay:-.6s}.lds-spinner div:nth-child(7){transform:rotate(180deg);animation-delay:-.5s}.lds-spinner div:nth-child(8){transform:rotate(210deg);animation-delay:-.4s}.lds-spinner div:nth-child(9){transform:rotate(240deg);animation-delay:-.3s}.lds-spinner div:nth-child(10){transform:rotate(270deg);animation-delay:-.2s}.lds-spinner div:nth-child(11){transform:rotate(300deg);animation-delay:-.1s}.lds-spinner div:nth-child(12){transform:rotate(330deg);animation-delay:0s}@keyframes lds-spinner{0%{opacity:1}to{opacity:0}}\n"] }]
        }], ctorParameters: function () { return []; } });

function playerFactory() {
    return player;
}
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
                component: OnboardingCreateComponent,
                canDeactivate: [CanDeactivateGuard],
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
OnboardingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingModule, deps: [{ token: OnboardingModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
OnboardingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.6", ngImport: i0, type: OnboardingModule, declarations: [MaterialElevationDirective,
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
        NowboardLoaderComponent], imports: [FormsModule,
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
        MatTableModule, i2.RouterModule, i5$1.ScrollToModule, i9$1.NgxFilterModule, DragDropModule,
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
        MatBottomSheetModule,
        MatProgressBarModule, i1$4.LottieModule], exports: [OnboardingComponent,
        HttpClientModule,
        TemplateProfileCreateComponent,
        TemplateProfileListComponent,
        OnboardingListComponent,
        OnboardingCreateComponent,
        DialogCreateOnboardingComponent,
        RouterModule,
        MatTabsModule] });
OnboardingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingModule, providers: [OnboardingService, CanDeactivateGuard, MatDatepickerModule, DatePipe,], imports: [FormsModule,
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
        NgxFilterModule.forRoot(),
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
        MatBottomSheetModule,
        MatProgressBarModule,
        LottieModule.forRoot({ player: playerFactory }), HttpClientModule,
        RouterModule,
        MatTabsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingModule, decorators: [{
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
                        NowboardLoaderComponent,
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
                        NgxFilterModule.forRoot(),
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
                        MatBottomSheetModule,
                        MatProgressBarModule,
                        LottieModule.forRoot({ player: playerFactory })
                    ],
                    providers: [OnboardingService, CanDeactivateGuard, MatDatepickerModule, DatePipe,],
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
        }], ctorParameters: function () {
        return [{ type: OnboardingModule, decorators: [{
                        type: Optional
                    }, {
                        type: SkipSelf
                    }] }];
    } });

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
ScrollToService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: ScrollToService, deps: [{ token: DOCUMENT }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
ScrollToService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: ScrollToService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: ScrollToService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [DOCUMENT]
                    }] }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [PLATFORM_ID]
                    }] }];
    } });

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
ScrollToDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: ScrollToDirective, deps: [{ token: i0.ElementRef }, { token: ScrollToService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
ScrollToDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.6", type: ScrollToDirective, selector: "[ngxScrollTo]", inputs: { ngxScrollTo: "ngxScrollTo", ngxScrollToEvent: "ngxScrollToEvent", ngxScrollToDuration: "ngxScrollToDuration", ngxScrollToEasing: "ngxScrollToEasing", ngxScrollToOffset: "ngxScrollToOffset", ngxScrollToOffsetMap: "ngxScrollToOffsetMap" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: ScrollToDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxScrollTo]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: ScrollToService }, { type: i0.Renderer2 }]; }, propDecorators: { ngxScrollTo: [{
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
            }] } });

/** Scroll To Module */
class ScrollToModule {
}
ScrollToModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: ScrollToModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ScrollToModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.6", ngImport: i0, type: ScrollToModule, declarations: [ScrollToDirective], exports: [ScrollToDirective] });
ScrollToModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: ScrollToModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: ScrollToModule, decorators: [{
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
        }] });

/*
 * Public API Surface of onboarding
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DialogConfirmation, DialogCreateOnboardingComponent, OnboardingComponent, OnboardingCreateComponent, OnboardingListComponent, OnboardingModule, OnboardingService, ScrollToDirective, ScrollToModule, ScrollToService, TemplateProfileCreateComponent, TemplateProfileListComponent, onBoardingRoutes, playerFactory };
//# sourceMappingURL=nowbrains-onboarding.mjs.map
