import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ENTER, COMMA, SEMICOLON } from "@angular/cdk/keycodes";
import { OnboardingService } from "../onboarding.service";
import { ActivatedRoute, Router } from "@angular/router";
import { moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { MatDialog } from "@angular/material/dialog";
import { UpdateProfilComponent } from '../components/update-profil/update-profil.component';
import { ExitConfirmComponent } from '../components/exit-confirm/exit-confirm.component';
let TemplateProfileCreateComponent = class TemplateProfileCreateComponent {
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
                /*selector: {
                  label: "Company",
                  key: "Company",
                  defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                  value: "Nowteam"
                },*/
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
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
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
                        selector: {
                            label: "Company",
                            key: "Company",
                            defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                            value: "Nowteam"
                        },
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
                        selector: {
                            label: "Company",
                            key: "Company",
                            defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                            value: "Nowteam"
                        },
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
                                selector: {
                                    label: "Company",
                                    key: "Company",
                                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                                    value: "Nowteam"
                                },
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
                /*selector: {
                  label: "Company",
                  key: "Company",
                  defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                  value: "Nowteam"
                },*/
                forms: [
                    {
                        label: "Adresse mail à créer",
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
                        selector: {
                            label: "Company",
                            key: "Company",
                            defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                            value: "Nowteam"
                        },
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
                        selector: {
                            label: "Company",
                            key: "Company",
                            defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                            value: "Nowteam"
                        },
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
                        selector: {
                            label: "Company",
                            key: "Company",
                            defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                            value: "Nowteam"
                        },
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
                forms: [
                    {
                        label: "Accès aux lecteurs réseaux",
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
                        selector: {
                            label: "Company",
                            key: "Company",
                            defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                            value: "Nowteam"
                        },
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
                        selector: {
                            label: "Company",
                            key: "Company",
                            defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                            value: "Nowteam"
                        },
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
                        selector: {
                            label: "Company",
                            key: "Company",
                            defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                            value: "Nowteam"
                        },
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
                        selector: {
                            label: "Company",
                            key: "Company",
                            defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                            value: "Nowteam"
                        },
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
                console.log(this.categories);
            }
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                this.tags = yield this.service.getAllTags();
            }), 500);
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
            selector: {
                label: "Company",
                key: "Company",
                defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                value: "Nowteam"
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
};
TemplateProfileCreateComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: OnboardingService },
    { type: ActivatedRoute },
    { type: Router },
    { type: MatDialog }
];
TemplateProfileCreateComponent = __decorate([
    Component({
        selector: "onboarding-create-profile-template",
        template: "<main>\n    <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n        <div class=\"box-title\" *ngIf=\"showProfileName\">\n            <div class=\"box-title-content\">\n                <h3 class=\"title\">Cr\u00E9ation d\u2019un nouveau profil d\u2019onboarding</h3>\n                <p>S\u00E9lectionnez l\u2019icon de votre choix et indiquez le nom de votre nouveau profil d\u2019onboarding</p>\n                <div class=\"profil-name-content\">\n                    <button class=\"add-picto\" mat-raised-button color=\"primary\" (click)=\"onShowPictoList($event)\">\n                        <mat-icon>{{form.get('Picto').value===\"\" ? 'contact_phone' :form.get('Picto').value}}</mat-icon>\n                    </button>\n                    <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                        <mat-label>Nom de votre nouveau profil</mat-label>\n                        <input type=\"text\" matInput formControlName=\"Name\" placeholder=\"Ex. Manager\" />\n                    </mat-form-field>\n                    <div class=\"list-picto\" *ngIf=\"isPictoListShow\">\n                        <mat-icon *ngFor=\"let icon of matIconList\"\n                            [style.color]=\"form.get('Picto').value===icon.name ? '#830B6B':'#000'\"\n                            (click)=\"onSelectPicto($event,icon.name)\">\n                            {{icon.name}}\n                        </mat-icon>\n                    </div>\n                </div>\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                    <mat-label>D\u00E9scription</mat-label>\n                    <textarea type=\"text\" matInput formControlName=\"Description\" rows=\"4\" placeholder=\"\"></textarea>\n                </mat-form-field>\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                    <mat-label>Tags</mat-label>\n                    <mat-select formControlName=\"Tags\" required>\n                        <mat-option *ngFor=\"let tag of tags\" [value]=\"tag\">{{tag}}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n                <mat-checkbox class=\"form-field\" formControlName=\"Status\">Active</mat-checkbox>\n                <div class=\"link-create-profil\">\n                    <button class=\"link-add-profil\"\n                        [style.opacity]=\"(form.get('Name').value==='' || form.get('Tags').value=='') ? 0.4 : 1\"\n                        [disabled]=\"form.get('Name').value==='' || form.get('Tags').value==''\" mat-raised-button\n                        color=\"primary\" (click)='onShowCategory()'>\n                        {{id !== \"0\" ? 'Modifier un profil' :'Cr\u00E9er un nouveau profil'}}\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"category\" *ngIf=\"!showProfileName\">\n            <!-- <div class=\"category\"> -->\n\n            <div class=\"side-bar\">\n                <div class=\"summary\">\n                    <h3><span>{{this.form.get('Name').value}}</span>\n                        <mat-icon (click)=\"openDialog()\">edit</mat-icon>\n                    </h3>\n                    <ol type=\"I\">\n                        <li class=\"li-title\" *ngFor=\"let cat of categories;  let i=index\">\n                            <span [class]=\"editIndex===i ? 'edition-mode':''\">\n                                <span [ngxScrollTo]=\"'#'+cat.name\" (click)=\"onExpendMore({field:cat},i)\"\n                                    *ngIf=\"editIndex!==i\">{{cat.name}}</span>\n                                <input (blur)=\"onEdit()\" #edit *ngIf=\"editIndex===i\" type=\"text\" [(ngModel)]=\"cat.name\"\n                                    [ngModelOptions]=\"{standalone: true}\"\n                                    (ngModelChange)=\"onEditCategoryName(i,cat.name)\">\n                                <mat-icon (click)=\"onPassInEditMode(i)\">edit</mat-icon>\n                            </span>\n                            <ol>\n                                <ng-container *ngFor=\"let sub of cat.forms;let j=index\">\n                                    <ng-container *ngIf=\"sub?.forms\">\n                                        <li [class]=\"sub.expandMore ? 'sub-title active' :'sub-title'\"\n                                            (click)=\"onExpendMore({field:sub},i,j)\">\n                                            <span [ngxScrollTo]=\"'#'+sub.key\">{{j+1}}. {{sub.label}}</span>\n                                        </li>\n                                    </ng-container>\n                                </ng-container>\n                            </ol>\n                        </li>\n                    </ol>\n                    <button mat-button class=\"add-category transparent\" (click)='onAddNewCategory($event)'>\n                        <mat-icon>add_box</mat-icon>\n                        Ajouter une nouvelle cat\u00E9gorie\n                    </button>\n                </div>\n                <button mat-button class=\"register-button\" type=\"submit\">\n                    <!-- <mat-icon>check</mat-icon> -->\n                    Enregistrer le profil\n                </button>\n            </div>\n            <div class=\"fields\" cdkDropListGroup>\n                <div class=\"example-list mt-20\" #parentList=\"cdkDropList\" cdkDropList [cdkDropListData]=\"categories\"\n                    (cdkDropListDropped)=\"drop($event)\">\n                    <div class=\"category-item\" *ngFor=\"let category of categories;  let i=index\" cdkDrag\n                        [id]=\"category.name\">\n                        <div class=\"left-action move-icons\" cdkDragHandle>\n                            <button class=\"transparent-button\" [disabled]=\"!category.deleteable\"\n                                (click)=\"onRemoveCategory($event,i)\" mat-raised-button>\n                                <mat-icon [style.opacity]=\"!category.deleteable ? 0 :1\">delete</mat-icon>\n                            </button>\n                        </div>\n                        <div class=\"field-content\">\n                            <div class=\"field-item\">\n                                <input class=\"example-full-width input-category-name\" type=\"text\" required\n                                    [readonly]=\"categories.length<4 || !category.editable\"\n                                    [readonly]=\"!category.editable\" [(ngModel)]=\"category.name\"\n                                    [ngModelOptions]=\"{standalone: true}\" placeholder=\"Saisir le nom de la cat\u00E9gorie\" />\n\n                                    <mat-select [(value)]=\"category.selector.value\" [(ngModel)]=\"category.selector.value\" [ngModelOptions]=\"{standalone: true}\" required *ngIf=\"category.selector\">\n                                        <mat-option *ngFor=\"let select of category.selector.defaultValue\" [value]=\"select.value\">\n                                            {{select.value}}</mat-option>\n                                    </mat-select>\n                            </div>\n                            <div #childList=\"cdkDropList\" *ngIf=\"category.forms\" [cdkDropListData]=\"category.forms\"\n                                cdkDropList (cdkDropListDropped)=\"drop($event)\">\n                                <ng-container *ngIf=\"category.expandMore\">\n                                    <div class=\"\" *ngFor=\"let field of category.forms;let j=index\" [id]=\"field.key\">\n                                        <div cdkDrag>\n                                            <div class=\"fields-content\">\n                                                <div class=\"button-action\">\n                                                    <button [disabled]=\"!field.deleteable\" mat-mini-fab color=\"warn\"\n                                                        class=\"delete-field transparent-button\"\n                                                        (click)=\"onRemoveField(i,j)\">\n                                                        <mat-icon [style.opacity]=\"!field.deleteable ? 0 :1\">delete\n                                                        </mat-icon>\n                                                    </button>\n                                                </div>\n                                                <div class=\"fields-container\"\n                                                    [class]=\"!field.deleteable ? 'disabled' :''\">\n                                                    <lib-sub-category [field]=\"field\" [length]=\"category?.forms?.length\"\n                                                        [i]=\"i\" [j]=\"j\"\n                                                        (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,$event.prev,i,j)\"\n                                                        (onKeyPress)=\"onKeyPress($event.event,i,j)\"\n                                                        (onAddNewField)=\"onAddNewField(i)\"\n                                                        (onRemoveField)=\"onRemoveField(i,j)\"\n                                                        (onChangeType)=\"onChangeType(field.type,i,j)\"\n                                                        (onRemoveKeyword)=\"removeKeyword($event.event,i,j)\"\n                                                        (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j)\"\n                                                        (onExpendMore)=\"onExpendMore($event,i,j)\"\n                                                        (onChangeLabel)=\"onChangeLabel($event,i,j)\"\n                                                        (onCheckedChip)=\"onCheckedChip($event,i,j)\"\n                                                        (onDrop)=\"drop($event)\"\n                                                        (onCheckedDefault)=\"onCheckedDefault($event,i,j)\"\n                                                        [conditionData]=\"conditionData\"\n                                                        (onGetConditionValues)=\"getConditionValues()\">\n                                                        <div *ngIf=\"field.expandMore\" class=\"child\">\n                                                            <div #childList=\"cdkDropList\" *ngIf=\"field.forms\"\n                                                                [cdkDropListData]=\"field.forms\" cdkDropList\n                                                                (cdkDropListDropped)=\"drop($event)\">\n                                                                <div class=\"\"\n                                                                    *ngFor=\"let child of field.forms;let k=index\"\n                                                                    [id]=\"child.key\">\n                                                                    <div cdkDrag>\n                                                                        <div class=\"fields-content\">\n                                                                            <div\n                                                                                class=\"button-action child-2-background\">\n                                                                                <button [disabled]=\"!child.deleteable\"\n                                                                                    mat-mini-fab color=\"warn\"\n                                                                                    class=\"delete-field transparent-button\"\n                                                                                    (click)=\"onRemoveField(i,j,k)\">\n                                                                                    <mat-icon\n                                                                                        [style.opacity]=\"!child.deleteable ? 0 :1\">\n                                                                                        delete</mat-icon>\n                                                                                </button>\n                                                                            </div>\n                                                                            <div class=\"fields-container\">\n                                                                                <lib-sub-category [field]=\"child\"\n                                                                                    [length]=\"field?.forms?.length\"\n                                                                                    [i]=\"j\" [j]=\"k\"\n                                                                                    (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,$event.prev,i,j,k)\"\n                                                                                    (onKeyPress)=\"onKeyPress($event.event,i,j,k)\"\n                                                                                    (onAddNewField)=\"onAddNewField(i, j)\"\n                                                                                    (onRemoveField)=\"onRemoveField(i,j,k)\"\n                                                                                    (onChangeType)=\"onChangeType(child.type,i,j,k)\"\n                                                                                    (onRemoveKeyword)=\"removeKeyword($event.event,i,j,k)\"\n                                                                                    (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j,k)\"\n                                                                                    (onExpendMore)=\"onExpendMore($event,i,j,k)\"\n                                                                                    (onChangeLabel)=\"onChangeLabel($event,i,j,k)\"\n                                                                                    (onCheckedChip)=\"onCheckedChip($event,i,j,k)\"\n                                                                                    (onDrop)=\"drop($event)\"\n                                                                                    (onCheckedDefault)=\"onCheckedDefault($event,i,j,k)\"\n                                                                                    [conditionData]=\"conditionData\"\n                                                                                    (onGetConditionValues)=\"getConditionValues()\">\n                                                                                    <div *ngIf=\"child.expandMore\"\n                                                                                        class=\"child\">\n                                                                                        <div #childList=\"cdkDropList\"\n                                                                                            *ngIf=\"child.forms\"\n                                                                                            [cdkDropListData]=\"child.forms\"\n                                                                                            cdkDropList\n                                                                                            (cdkDropListDropped)=\"drop($event)\">\n                                                                                            <div class=\"\"\n                                                                                                *ngFor=\"let c2 of child.forms;let l=index\"\n                                                                                                [id]=\"c2.key\">\n                                                                                                <div cdkDrag>\n                                                                                                    <div\n                                                                                                        class=\"fields-content\">\n                                                                                                        <div\n                                                                                                            class=\"button-action child-3-background\">\n                                                                                                            <button\n                                                                                                                [disabled]=\"!field.deleteable\"\n                                                                                                                mat-mini-fab\n                                                                                                                color=\"warn\"\n                                                                                                                class=\"delete-field transparent-button\"\n                                                                                                                (click)=\"onRemoveField(i,j,k,l)\">\n                                                                                                                <mat-icon>\n                                                                                                                    delete\n                                                                                                                </mat-icon>\n                                                                                                            </button>\n                                                                                                        </div>\n                                                                                                        <div\n                                                                                                            class=\"fields-container\">\n                                                                                                            <lib-sub-category\n                                                                                                                [field]=\"c2\"\n                                                                                                                [length]=\"child?.forms?.length\"\n                                                                                                                [i]=\"k\"\n                                                                                                                [j]=\"l\"\n                                                                                                                (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev,i,j,k,l)\"\n                                                                                                                (onKeyPress)=\"onKeyPress($event.event,i,j,k,l)\"\n                                                                                                                (onAddNewField)=\"onAddNewField(i,j,k)\"\n                                                                                                                (onRemoveField)=\"onRemoveField(i,j,k,l)\"\n                                                                                                                (onChangeType)=\"onChangeType(c2.type,i,j,k,l)\"\n                                                                                                                (onRemoveKeyword)=\"removeKeyword($event.event,i,j,k,l)\"\n                                                                                                                (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j,k,l)\"\n                                                                                                                (onExpendMore)=\"onExpendMore($event,i,j,k,l)\"\n                                                                                                                (onChangeLabel)=\"onChangeLabel($event,i,j,k,l)\"\n                                                                                                                (onCheckedChip)=\"onCheckedChip($event,i,j,k,l)\"\n                                                                                                                (onDrop)=\"drop($event)\"\n                                                                                                                (onCheckedDefault)=\"onCheckedDefault($event,i,j,k,l)\"\n                                                                                                                [conditionData]=\"conditionData\"\n                                                                                                                (onGetConditionValues)=\"getConditionValues()\">\n\n                                                                                                                <div\n                                                                                                                    class=\"child\">\n                                                                                                                </div>\n                                                                                                            </lib-sub-category>\n                                                                                                        </div>\n                                                                                                    </div>\n                                                                                                </div>\n                                                                                                <div class=\"add-button-container add-button-sub-category\"\n                                                                                                    *ngIf=\"child?.forms?.length-1===l\">\n                                                                                                    <button\n                                                                                                        style=\"margin:10px auto\"\n                                                                                                        [disabled]=\"child?.forms?.length-1!==l\"\n                                                                                                        [style.opacity]=\"child?.forms?.length-1===l ? 1 :0\"\n                                                                                                        mat-raised-button\n                                                                                                        color=\"primary\"\n                                                                                                        (click)='onAddNewField(i,j,k)'>\n                                                                                                        <mat-icon>\n                                                                                                            add_box\n                                                                                                        </mat-icon>\n                                                                                                        <span>Ajouter un\n                                                                                                            champ</span>\n                                                                                                    </button>\n                                                                                                </div>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                </lib-sub-category>\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"add-button-container add-button-sub-category\"\n                                                                        *ngIf=\"field?.forms?.length-1===k\">\n                                                                        <button style=\"margin:10px auto\"\n                                                                            [disabled]=\"field?.forms?.length-1!==k\"\n                                                                            [style.opacity]=\"field?.forms?.length-1===k ? 1 :0\"\n                                                                            mat-raised-button color=\"primary\"\n                                                                            (click)='onAddNewField(i,j)'>\n                                                                            <mat-icon>add_box</mat-icon>\n                                                                            <span>Ajouter un champ</span>\n                                                                        </button>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </lib-sub-category>\n\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"add-button-container add-button-sub-category\"\n                                            *ngIf=\"category?.forms?.length-1===j\">\n                                            <button style=\"margin:10px auto\" [disabled]=\"category?.forms?.length-1!==j\"\n                                                [style.opacity]=\"category?.forms?.length-1===j ? 1 :0\" mat-raised-button\n                                                color=\"primary\" (click)='onAddNewField(i)'>\n                                                <mat-icon>add_box</mat-icon>\n                                                <span>Ajouter un champ</span>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </ng-container>\n\n                            </div>\n                        </div>\n                        <button mat-mini-fab color=\"primary\" class=\"expand-button\"\n                            (click)=\"onExpendMore({event:$event, field:category},i)\">\n                            <mat-icon *ngIf=\"!category.expandMore\">chevron_right</mat-icon>\n                            <mat-icon *ngIf=\"category.expandMore\">expand_more</mat-icon>\n                        </button>\n                    </div>\n\n                    <div class=\"add-button-container\">\n                        <button (click)='onAddNewCategory($event)'>\n                            <mat-icon>add</mat-icon>\n                            Ajouter une cat\u00E9gorie\n                        </button>\n                        <!-- <button type=\"submit\">\n                            <mat-icon>check</mat-icon>\n                            Enregistrer\n                        </button> -->\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </form>\n</main>",
        styles: ["main{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main .disabled label{background-color:transparent!important}main form{display:flex;height:100%;width:100%}main .box-title{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main .box-title h3{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main .box-title input,main .box-title label{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main .box-title .profil-name-content{display:flex;align-items:center;position:relative}main .box-title .profil-name-content .add-picto{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main .box-title .profil-name-content .add-picto mat-icon{margin-right:10px}main .box-title .profil-name-content .list-picto{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main .box-title .profil-name-content .list-picto mat-icon{margin:15px;border:none;font-size:40px}main .box-title .profil-name-content .list-picto mat-icon:hover{color:#830b6b!important;cursor:pointer}main .box-title .box-title-content{width:100%;margin:25px auto}main .box-title .title{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main .box-title p{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main .box-title .link-create-profil{width:100%;display:flex;justify-content:center}main .box-title button{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main .action{width:100%;display:flex;justify-content:space-between}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name{border:none;outline:0;text-align:left;font:bold 18px/48px Nexa Text;letter-spacing:0;color:#171f26}.example-full-width{width:100%}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}::ng-deep .mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}::ng-deep .mat-select{padding:.5em 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}::ng-deep .mat-form-field-wrapper{padding-bottom:0!important}:host ::ng-deep .cdk-drag-preview .input-category-name div.mat-form-field-outline-start,:host ::ng-deep .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0!important}:host ::ng-deep .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0!important}:host ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background,:host ::ng-deep .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}:host ::ng-deep .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0!important}:host ::ng-deep .input-category-name .mat-form-field-label-wrapper{display:none}:host ::ng-deep .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}:host ::ng-deep .input-category-name .mat-form-field-infix{border-top:none}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item,.cdk-drag-placeholder{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-bottom:10px;margin-top:10px;min-height:60px}.category-item .left-action,.cdk-drag-placeholder .left-action{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item .left-action .transparent-button,.cdk-drag-placeholder .left-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item .field-content,.cdk-drag-placeholder .field-content{width:100%;-ms-grid-row-align:center;align-self:center}.category-item .field-content .field-item,.cdk-drag-placeholder .field-content .field-item{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.category-item .field-content .mat-form-field-outline,.cdk-drag-placeholder .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.cdk-drag-placeholder .field-content .mat-form-field-outline{color:transparent!important}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child{margin-left:0}.category{display:flex;flex-direction:row;width:100vw}.category .summary{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category .summary h3{font-size:25px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;align-items:center}.category .summary h3 mat-icon{margin-left:15px;cursor:pointer}.category .summary ol{font-weight:600;margin-left:-27px;font-size:15px;list-style-position:inside}.category .summary ol li{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category .summary ol li ol{padding-left:0;margin-left:0}.category .summary ol li.li-title{font-size:14px;font-weight:600}.category .summary ol li.li-title input{width:140px;outline:0;border:1px dashed grey}.category .summary ol li.li-title span{display:inline-flex;align-items:center}.category .summary ol li.li-title span mat-icon{margin-left:10px;display:none}.category .summary ol li.li-title:hover mat-icon{display:initial!important}.category .summary ol li.sub-title{list-style:none;padding-left:20px}.category .summary ol li.sub-title.active,.category .summary ol li.sub-title.active::marker,.category .summary ol li.sub-title:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category .fields{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category .disabled{background-color:#f4f7f9!important}.category .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category .expand-button .material-icons{font-size:40px}.category .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.cdk-drag .fields-content{display:flex;height:100%;margin:0;width:100%;min-width:250px}.cdk-drag .fields-content .button-action{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag .fields-content .button-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag .fields-content .child-2-background{background-color:#cffaf4!important}.cdk-drag .fields-content .child-3-background{background-color:#e5e8ee!important}.cdk-drag .fields-content .fields-container{border:1px solid #dce4e9;border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px}.cdk-drag .fields-content .fields-container lib-sub-category .field-item{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.side-bar{display:flex;flex-direction:column}.register-button{background:no-repeat padding-box #171f26!important;border:2px solid #192128!important;border-radius:8px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important}"]
    })
], TemplateProfileCreateComponent);
export { TemplateProfileCreateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9FLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFlLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQU96RixJQUFhLDhCQUE4QixHQUEzQyxNQUFhLDhCQUE4QjtJQXNDekMsWUFDVSxFQUFlLEVBQ2hCLE9BQTBCLEVBQ3pCLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxNQUFpQjtRQUpqQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBekMzQixrQkFBYSxHQUFHLEtBQUss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QztZQUNqRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUNsRixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDcEc7UUFDRCw0QkFBNEI7SUFDOUIsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQXdCLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTTtRQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzFCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDMUIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixNQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFH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LEVBQUUsR0FBRyxNQUFNO1FBQ2pDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0Q7UUFDRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbFEsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRTFCLENBQUM7SUFDRCxhQUFhLENBQUMsS0FBVSxFQUFFLEdBQUcsTUFBTTtRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbFEsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2hGLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssbUJBQW1CLEVBQUU7WUFDdEQsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFL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S0FBSyxFQUFDLENBQUM7d0NBQ1AsYUFBYSxFQUFDLENBQUM7d0NBQ2YsU0FBUyxFQUFDLENBQUM7d0NBQ1gsUUFBUSxFQUFDLENBQUM7d0NBQ1YsWUFBWSxFQUFDLENBQUM7d0NBQ2QsY0FBYyxFQUFDLEtBQUssQ0FBQyxZQUFZO3dDQUNqQyxLQUFLLEVBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsS0FBSyxNQUFNLEdBQUcsQ0FBQyxLQUFLLE9BQU8sS0FBSyxDQUFDLEtBQUssRUFBRTtxQ0FDMUYsQ0FBQyxDQUFBO2lDQUNGOzZCQUVIO3lCQUNGO3FCQUNBO2lCQUNGO2FBQ0Y7U0FFRjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBQyxjQUFjLENBQUE7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUU5QixDQUFDO0NBQ0YsQ0FBQTs7WUF4aERlLFdBQVc7WUFDUCxpQkFBaUI7WUFDbEIsY0FBYztZQUNiLE1BQU07WUFDTixTQUFTOztBQTNDaEIsOEJBQThCO0lBTDFDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQ0FBb0M7UUFDOUMsOGkzQkFBdUQ7O0tBRXhELENBQUM7R0FDVyw4QkFBOEIsQ0ErakQxQztTQS9qRFksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBEb0NoZWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTiB9IGZyb20gXCJAYW5ndWxhci9jZGsva2V5Y29kZXNcIjtcbmltcG9ydCB7IE1hdENoaXBJbnB1dEV2ZW50IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NoaXBzXCI7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gXCIuLi9vbmJvYXJkaW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCB0cmFuc2ZlckFycmF5SXRlbSB9IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XG5pbXBvcnQgeyBVcGRhdGVQcm9maWxDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3VwZGF0ZS1wcm9maWwvdXBkYXRlLXByb2ZpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhpdENvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2V4aXQtY29uZmlybS9leGl0LWNvbmZpcm0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm9uYm9hcmRpbmctY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LnNjc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUHJvZmlsZUNyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgdmFsaWRDYXRlZ29yeSA9IGZhbHNlO1xuICBzZXBhcmF0b3JLZXlzQ29kZXMgPSBbRU5URVIsIENPTU1BLCBTRU1JQ09MT05dO1xuICBjdXJyZW50UHJvZmlsOiBhbnkgPSB7fTtcbiAgY2FuRXhpdCA9IHRydWU7XG4gIHRhZ3MgPSBbXTtcbiAgaWQgPSBcIjBcIjtcbiAgcGFyZW50ID0gW107XG4gIGVkaXRJbmRleCA9IG51bGw7XG4gIHNob3dQcm9maWxlTmFtZSA9IGZhbHNlO1xuICBtYXRJY29uTGlzdCA9IFtcbiAgICB7IG5hbWU6ICdkZXZlbG9wZXJfYm9hcmQnIH0sXG4gICAgeyBuYW1lOiAnY29udGFjdF9waG9uZScgfSxcbiAgICB7IG5hbWU6ICdjb250YWN0X21haWwnIH0sXG4gICAgeyBuYW1lOiAncGxheV9jaXJjbGVfZmlsbGVkJyB9LFxuICAgIHsgbmFtZTogJ2NvbnRyb2xfY2FtZXJhJyB9LFxuICAgIHsgbmFtZTogJ2V4cGxpY2l0JyB9LFxuICAgIHsgbmFtZTogJ3BlcnNvbicgfSxcbiAgICB7IG5hbWU6ICd2aXNpYmlsaXR5JyB9LFxuICAgIHsgbmFtZTogJ3ZpZGVvX2xhYmVsJyB9LFxuICAgIHsgbmFtZTogJ2FkZF9jaXJjbGUnIH0sXG4gICAgeyBuYW1lOiAnd2F0Y2hfbGF0ZXInIH0sXG4gICAgeyBuYW1lOiAnd2hlcmVfdG9fdm90ZScgfSxcbiAgICB7IG5hbWU6ICd3b3JrJyB9LFxuICAgIHsgbmFtZTogJ3dlYicgfSxcbiAgICB7IG5hbWU6ICd3aGF0c2hvdCcgfSxcbiAgICB7IG5hbWU6ICd3aWZpJyB9LFxuICAgIHsgbmFtZTogJ3dvcmtzcGFjZXMnIH0sXG4gICAgeyBuYW1lOiAnd2JfY2xvdWR5JyB9LFxuICAgIHsgbmFtZTogJ3dhdmVzJyB9LFxuICAgIHsgbmFtZTogJ3dhcm5pbmcnIH0sXG4gICAgeyBuYW1lOiAnc3BhY2VfZGFzJyB9XG4gIF07XG4gIGlzUGljdG9MaXN0U2hvdzogYm9vbGVhbjtcbiAgcGljdG8gPSBcIlwiO1xuICBjb25kaXRpb25EYXRhOiBhbnlbXTtcbiAgY2F0ZWdvcmllcz1bXVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwdWJsaWMgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nXG4gICkgeyB9XG5cbiAgZGVmYXVsdENhdGVnb3JpZTogYW55ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiVXRpbGlzYXRldXJcIixcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvdXNlclwiLFxuICAgICAgLypzZWxlY3Rvcjoge1xuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgfSwqL1xuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkNpdmlsaXTDqVwiLFxuICAgICAgICAgIGtleTogXCJTYWx1dGF0aW9uXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTS5cIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJNbWVcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcblxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSBwcm9maWxcIixcbiAgICAgICAgICBrZXk6IFwiVHlwZV9kZV9wcm9maWxfTm93Ym9hcmRfX2NcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJNYW5hZ2VyXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiVXRpbGlzYXRldXJcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIk5vbVwiLFxuICAgICAgICAgIGtleTogXCJMYXN0TmFtZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJQcsOpbm9tXCIsXG4gICAgICAgICAga2V5OiBcIkZpcnN0TmFtZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJFbWFpbFwiLFxuICAgICAgICAgIGtleTogXCJFbWFpbFwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJUw6lsw6lwaG9uZSBmaXhlXCIsXG4gICAgICAgICAga2V5OiBcIlBob25lXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiAyMCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcInRlbFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcblxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiVMOpbMOpcGhvbmUgcG9ydGFibGVcIixcbiAgICAgICAgICBrZXk6IFwiTW9iaWxlUGhvbmVcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwidGVsXCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJGb25jdGlvblwiLFxuICAgICAgICAgIGtleTogXCJUaXRsZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJFdGFibGlzc2VtZW50IC8gU2l0ZVwiLFxuICAgICAgICAgIGtleTogXCJBY2NvdW50TmFtZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBsYWJlbDogXCJJRFwiLFxuICAgICAgICAvLyAgIGtleTogXCJJZFwiLFxuICAgICAgICAvLyAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgLy8gICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgIC8vICAgdmFsdWU6IG51bGwsXG4gICAgICAgIC8vICAgc2l6ZTogODAsXG4gICAgICAgIC8vICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgIC8vICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgLy8gICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgLy8gICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgIC8vICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgIC8vICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgIC8vICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIC8vIH0sIHtcbiAgICAgICAgLy8gICBsYWJlbDogXCJFdGFibGlzc2VtZW50IElEXCIsXG4gICAgICAgIC8vICAga2V5OiBcIkFjY291bnRJZFwiLFxuICAgICAgICAvLyAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgLy8gICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgIC8vICAgdmFsdWU6IG51bGwsXG4gICAgICAgIC8vICAgc2l6ZTogODAsXG4gICAgICAgIC8vICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgIC8vICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgLy8gICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgLy8gICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgIC8vICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgIC8vICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgIC8vICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQWNjw6hzIGF1IHBvcnRhaWxcIixcbiAgICAgICAgICBrZXk6IFwiQWNjX3NfYXVfcG9ydGFpbF9jbGllbnRfTm93Qm9hcmRfX2NcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJPdWlcIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJOb25cIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcblxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiTGFuZ3VlXCIsXG4gICAgICAgICAga2V5OiBcIkxhbmd1ZV9tYXRlcm5lbGxlX19jXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiRnJhbsOnYWlzXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiQW5nbGFpc1wiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQSBxdWl0dMOpIGxhIHNvY2nDqXTDqVwiLFxuICAgICAgICAgIGtleTogXCJBX3F1aXR0X2xhX3NvY2lfdF9fY1wiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk91aVwiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIk5vblwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJTZXNzaW9uIGQndXRpbGlzYXRldXJcIixcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS91c2VyLXNlc3Npb25cIixcbiAgICAgIHNlbGVjdG9yOiB7XG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICB9LFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlV0aWxpc2F0ZXVyIGxvY2FsIMOgIGNyw6llclwiLFxuICAgICAgICAgIGtleTogXCJVc2VyTG9jYWxUb0NyZWF0ZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICBzZWxlY3Rvcjoge1xuICAgICAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxuICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkxvZ2luXCIsXG4gICAgICAgICAgICAgIGtleTogXCJMb2dpblwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJNb3QgZGUgcGFzc2VcIixcbiAgICAgICAgICAgICAga2V5OiBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlV0aWxpc2F0ZXVyIEFEIChzZXJ2ZXVyKSDDoCBjcsOpZXJcIixcbiAgICAgICAgICBrZXk6IFwiVXNlclNlcnZlclRvQ3JlYXRlXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIHNlbGVjdG9yOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9ybXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTm9tIGRlIGRvbWFpbmVcIixcbiAgICAgICAgICAgICAga2V5OiBcIkRvbWFpbk5hbWVcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVm90cmUgbG9naW5cIixcbiAgICAgICAgICAgICAga2V5OiBcIllvdXJMb2dpblwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIlZvdHJlIG1vdCBkZSBwYXNzZVwiLFxuICAgICAgICAgICAgICBrZXk6IFwiWW91clBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkdyb3VwZSBkZSBzw6ljdXJpdMOpXCIsXG4gICAgICAgICAgICAgIGtleTogXCJHcm91cFNlY3VyaXR5XCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlV0aWxpc2F0ZXVyIGF2ZWMgbGVzIGRyb2l0cyBzaW1pbGFpcmVzICpcIixcbiAgICAgICAgICAgICAgICAgIGtleTogXCJVc2VyV2l0aFNpbWlsYXJBY2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc3ViTGV2ZWw6IDMsXG4gICAgICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgIHNpemU6IDI1NSxcbiAgICAgICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc3ViTGV2ZWw6IDMsXG4gICAgICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTWVzc2FnZXJpZVwiLFxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS9tZXNzYWdlcmllXCIsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIC8qc2VsZWN0b3I6IHtcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcbiAgICAgIH0sKi9cbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBZHJlc3NlIG1haWwgw6AgY3LDqWVyXCIsXG4gICAgICAgICAga2V5OiBcIkVtYWlsVG9DcmVhdGVcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICBzZWxlY3Rvcjoge1xuICAgICAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxuICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkFkcmVzc2UgbWFpbFwiLFxuICAgICAgICAgICAgICBrZXk6IFwiRW1haWxcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSBsaWNlbmNlIChzaSBnw6lyw6llcyBwYXIgbGUgY2xpZW50KVwiLFxuICAgICAgICAgICAgICBrZXk6IFwiU2VyaWFsS2V5XCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJMaXN0ZXMgIGRlIGRpc3RyaWJ1dGlvblwiLFxuICAgICAgICAgIGtleTogXCJEaXN0cmlidXRpb25MaXN0XCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgc2VsZWN0b3I6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJVdGlsaXNhdGV1ciBhdmVjIGxlcyBsaXN0ZXMgc2ltaWxhaXJlcyAqXCIsXG4gICAgICAgICAgICAgIGtleTogXCJVc2VyV2l0aFNpbWlsYXJMaXN0XCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25zXCIsXG4gICAgICAgICAgICAgIGtleTogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkFqb3V0ZXIgZGVzIGJvaXRlcyBtYWlscyBkw6lsw6lndcOpc1wiLFxuICAgICAgICAgIGtleTogXCJBZGRJbmJveE1haWxEZWxlZ2F0ZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIHNlbGVjdG9yOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9ybXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25zXCIsXG4gICAgICAgICAgICAgIGtleTogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlNlcnZldXJcIixcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvc2VydmV1clwiLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBzZWxlY3Rvcjoge1xuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgfSxcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBY2PDqHMgYXV4IGxlY3RldXJzIHLDqXNlYXV4XCIsXG4gICAgICAgICAga2V5OiBcIlJlYWROZXR3b3JrQWNjZXNzXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIHNlbGVjdG9yOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9ybXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTm9tIGR1IHNlcnZldXJcIixcbiAgICAgICAgICAgICAga2V5OiBcIlNlcnZlck5hbWVcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiQ2hlbWluIGR1IGRvc3NpZXJcIixcbiAgICAgICAgICAgICAga2V5OiBcIkZvbGRlclBhdGhcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJMZXR0cmUgw6AgYXR0cmlidWVyXCIsXG4gICAgICAgICAgICAgIGtleTogXCJBdHRyaWJ1dExldHRlclwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlZQTlwiLFxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS92cG5cIixcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgc2VsZWN0b3I6IHtcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcbiAgICAgIH0sXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQWNjw6hzIGF1IFZQTlwiLFxuICAgICAgICAgIGtleTogXCJWcG5BY2Nlc3NcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgLy9mb3JtczogW11cbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkltcHJpbWFudGVzXCIsXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L2ltcHJpbWVudGVcIixcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgc2VsZWN0b3I6IHtcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcbiAgICAgIH0sXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQWNjw6hzIGF1eCBpbXByaW1hbnRlc1wiLFxuICAgICAgICAgIGtleTogXCJQcmludGVyQWNjZXNzXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIHNlbGVjdG9yOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9ybXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTm9tIC8gTW9kw6hsZSBkZSBsJ2ltcHJpbWFudGUgLyBsb2NhbGlzYXRpb25cIixcbiAgICAgICAgICAgICAga2V5OiBcIlByaW50ZXJOYW1lXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQXBwbGljYXRpb25zXCIsXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L2FwcGxpY2F0aW9uXCIsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIHNlbGVjdG9yOiB7XG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICB9LFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkFjY8OocyBhdXggYXBwbGljYXRpb25zID9cIixcbiAgICAgICAgICBrZXk6IFwiQXBwbGljYXRpb25BY2Nlc3NcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgc2VsZWN0b3I6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcbiAgICAgICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUG9zdGVcIixcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvcG9zdGVcIixcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgc2VsZWN0b3I6IHtcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcbiAgICAgIH0sXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiUGFyYW3DqXRyYWdlIGRlIHBvc3RlXCIsXG4gICAgICAgICAga2V5OiBcIlBvc3RQYXJhbWV0ZXJcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgc2VsZWN0b3I6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJSZWFsb2NhdGVkRXF1aXBtZW50XCIsXG4gICAgICAgICAgICAgIGtleTogXCJcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiAxMDAwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJOb3V2ZWF1IHBvc3RlXCIsXG4gICAgICAgICAgICAgIGtleTogXCJOZXdQb3N0XCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9ybXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJBY2hldMOpIGNoZXogTm93dGVhbVwiLFxuICAgICAgICAgICAgICAgICAga2V5OiBcIlB1cmNoYXNlZEF0Tm93dGVhbVwiLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICBzaXplOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBzdWJMZXZlbDogMyxcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQXV0cmVcIixcbiAgICAgICAgICAgICAgICAgIGtleTogXCJPdGhlclwiLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICBzaXplOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHN1YkxldmVsOiAzLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkF1dHJlc1wiLFxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS9hdXRyZXNcIixcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgLypzZWxlY3Rvcjoge1xuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgfSwqL1xuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uc1wiLFxuICAgICAgICAgIGtleTogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogMTAwMCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdO1xuXG4gIGNhbkRlYWN0aXZhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmNhbkV4aXQpIHtcbiAgICAgIHRoaXMuZGlhbG9nLm9wZW4oRXhpdENvbmZpcm1Db21wb25lbnQsIHtcbiAgICAgICAgZGF0YTogJydcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmNhbkV4aXQkXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoXCJpZFwiKTtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIE5hbWU6IFtcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIFBpY3RvOiBbXCJcIl0sXG4gICAgICBEZXNjcmlwdGlvbjogW1wiXCJdLFxuICAgICAgVGFnczogW1wiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgU3RhdHVzOiBbZmFsc2UsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIH0pO1xuICAgIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGMgPT4ge1xuICAgICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuaWQgIT09IFwiMFwiKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQcm9maWwgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0UHJvZmlsKHRoaXMuaWQpO1xuICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUodGhpcy5jdXJyZW50UHJvZmlsKTtcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMuY3VycmVudFByb2ZpbC5jYXRlZ29yaWVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dQcm9maWxlTmFtZSA9IHRydWU7XG4gICAgICB0aGlzLmNhdGVnb3JpZXM9dGhpcy5kZWZhdWx0Q2F0ZWdvcmllXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNhdGVnb3JpZXMpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIHRoaXMudGFncyA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxUYWdzKCk7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIG9uQWRkTmV3Q2F0ZWdvcnkoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICB0aGlzLmNhdGVnb3JpZXMucHVzaCh7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBleHBhbmRNb3JlOiB0cnVlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiXCIsXG4gICAgICBzZWxlY3Rvcjoge1xuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgfSxcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJcIixcbiAgICAgICAgICBrZXk6IFwiXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICBvbkFkZE5ld0ZpZWxkKC4uLnBhcmFtcykge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDEgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3JtcyA6IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXM7XG4gICAgZm9ybXMucHVzaCh7XG4gICAgICBsYWJlbDogXCJcIixcbiAgICAgIGtleTogXCJcIixcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgc2l6ZTogODAsXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgc3ViTGV2ZWw6IHBhcmFtcy5sZW5ndGgsXG4gICAgICAvL2Zvcm1zOiBbXVxuICAgIH0pO1xuICB9XG5cbiAgb25BZGROZXdTdWJMZXZlbEZpZWxkKC4uLnBhcmFtcykge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV07XG4gICAgZm9ybXMuZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgZm9ybXMuZm9ybXMgPSBbXTtcbiAgICBmb3Jtcy5mb3Jtcy5wdXNoKHtcbiAgICAgIGxhYmVsOiBcIlwiLFxuICAgICAga2V5OiBcIlwiLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBzaXplOiA4MCxcbiAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICBzdWJMZXZlbDogcGFyYW1zLmxlbmd0aCxcbiAgICAgIGV4cGFuZE1vcmU6IHRydWUsXG4gICAgICAvL2Zvcm1zOiBbXVxuICAgIH0pO1xuICB9XG5cbiAgb25SZW1vdmVGaWVsZCguLi5wYXJhbXMpIHtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXMgOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zO1xuICAgIGZvcm1zLnNwbGljZShwYXJhbXNbbGVuZ3RoIC0gMV0sIDEpO1xuICB9XG5cbiAgb25SZW1vdmVDYXRlZ29yeShlLCBpKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2F0ZWdvcmllcy5zcGxpY2UoaSwgMSk7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gIH1cblxuICBvbkNoYW5nZUNhdGVnb3J5KCkge1xuICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXMuZXZlcnkoKGNhdCkgPT4gY2F0Lm5hbWUgIT09IFwiXCIgJiYgY2F0LmZvcm1zLmV2ZXJ5KChmaWVsZCkgPT4gZmllbGQubGFiZWwgIT09IFwiXCIgJiYgZmllbGQudHlwZSAhPT0gXCJcIikpO1xuICB9XG5cbiAgYXN5bmMgb25TdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCAmJiB0aGlzLm9uQ2hhbmdlQ2F0ZWdvcnkoKSkge1xuICAgICAgY29uc3QgZXhwYW5kQ2F0ZWdvcmllcz1cbiAgICAgIHRoaXMuY2F0ZWdvcmllc1xuICAgICAgLmZpbHRlcigoY2F0KT0+Y2F0LmV4cGFuZE9uYm9hcmRpbmcpXG4gICAgICAubWFwKChjYXQpPT57XG4gICAgICAgIGlmKGNhdC5mb3Jtcyl7XG4gICAgICAgICAgY29uc3QgZj0gY2F0LmZvcm1zXG4gICAgICAgICAgLmZpbHRlcigoZm9ybSk9PmZvcm0uZXhwYW5kT25ib2FyZGluZylcbiAgICAgICAgICAubWFwKChzdWIpPT57XG4gICAgICAgICAgICBpZihzdWIuZm9ybXMpe1xuICAgICAgICAgICAgICBjb25zdCBzPXN1Yi5mb3Jtcy5maWx0ZXIoKGNoaWxkKT0+e1xuICAgICAgICAgICAgICAgIGlmKGNoaWxkLmZvcm1zKXtcbiAgICAgICAgICAgICAgICAgICBjb25zdCBjPWNoaWxkLmZvcm1zLmZpbHRlcigoY2gpPT5jaC5leHBhbmRPbmJvYXJkaW5nKVxuICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAuLi5jaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgIGZvcm1zOmNcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3ViLFxuICAgICAgICAgICAgICAgIGZvcm1zOnNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN1YjtcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jYXQsXG4gICAgICAgICAgICBmb3JtczpmXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXRcbiAgICAgIH0pXG4gICAgICBcbiAgICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICAgIHRoaXMuaWQgIT09IFwiMFwiXG4gICAgICAgICAgPyBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlUHJvZmlsKHtcbiAgICAgICAgICAgIC4uLnRoaXMuY3VycmVudFByb2ZpbCxcbiAgICAgICAgICAgIC4uLnRoaXMuZm9ybS52YWx1ZSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IGV4cGFuZENhdGVnb3JpZXMsXG4gICAgICAgICAgfSlcbiAgICAgICAgICA6IGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGVQcm9maWwoe1xuICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxuICAgICAgICAgICAgY2F0ZWdvcmllczogZXhwYW5kQ2F0ZWdvcmllcyxcbiAgICAgICAgICB9KTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xuICAgICAgICB0aGlzLmNhbkV4aXQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5zZXJ2aWNlLm1haW5QYXRoXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycnJvci4uLi4uLlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZVR5cGUodHlwZTogc3RyaW5nLCAuLi5wYXJhbXMpIHtcblxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3JtcyA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXM7XG4gICAgaWYgKHR5cGUgPT09IFwic2VsZWN0XCIgfHwgdHlwZSA9PT0gXCJyYWRpb1wiIHx8IHR5cGUgPT09IFwiY2hlY2tib3hfbXVsdGlwbGVcIikge1xuICAgICAgZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXS5kZWZhdWx0VmFsdWUgPSBbXTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dLmRlZmF1bHRWYWx1ZSA9IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgb25LZXlQcmVzcyhldmVudDogYW55LCAuLi5wYXJhbXMpIHtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiO1wiKSB7XG4gICAgICBjb25zdCBleGlzdCA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maW5kKChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoXCI7XCIpWzBdLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKCFleGlzdCkge1xuICAgICAgICBmb3Jtcy5kZWZhdWx0VmFsdWUucHVzaCh7XG4gICAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdChcIjtcIilbMF0sXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXG4gIH1cblxuICByZW1vdmVLZXl3b3JkKGtleXdvcmQ6IGFueSwgLi4ucGFyYW1zKSB7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcbiAgICBmb3Jtcy5kZWZhdWx0VmFsdWUgPSBmb3Jtcy5kZWZhdWx0VmFsdWUuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSAhPT0ga2V5d29yZC52YWx1ZSk7XG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxuICB9XG5cbiAgb25FeHBlbmRNb3JlKGV2ZW50LCAuLi5wYXJhbXMpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICBldmVudC5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmZpZWxkICYmICFldmVudC5maWVsZC5leHBhbmRNb3JlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5jYXRlZ29yaWVzW2ldLmV4cGFuZE1vcmUgPSBmYWxzZTtcbiAgICAgICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXNbal0uZXhwYW5kTW9yZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICAgIGlmIChwYXJhbXMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5leHBhbmRNb3JlID0gIXRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmV4cGFuZE1vcmU7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMubGVuZ3RoID09PSAyKSB7XG4gICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5leHBhbmRNb3JlKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZXhwYW5kTW9yZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwYXJhbXMubGVuZ3RoID09PSAzKSB7XG4gICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmV4cGFuZE1vcmUpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmV4cGFuZE1vcmUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmV4cGFuZE1vcmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5leHBhbmRNb3JlKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmV4cGFuZE1vcmUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmV4cGFuZE1vcmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmV4cGFuZE1vcmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hlY2tlZERlZmF1bHQoZXZlbnQsIC4uLnBhcmFtcykge1xuICAgIGlmIChwYXJhbXMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDMpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XG4gICAgfVxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcbiAgfVxuXG4gIGFkZEtleXdvcmRGcm9tSW5wdXQoZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50LCBwcmV2LCAuLi5wYXJhbXMpIHtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmlucHV0O1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWU7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maW5kSW5kZXgoKG9wdCkgPT4gb3B0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IHByZXYudG9Mb2NhbGVMb3dlckNhc2UoKSk7XG4gICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkge1xuICAgICAgICBmb3Jtcy5kZWZhdWx0VmFsdWVbcHJldkluZGV4XS52YWx1ZSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZXhpc3QgPSBmb3Jtcy5kZWZhdWx0VmFsdWUuZmluZCgob3B0KSA9PiBvcHQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gZXZlbnQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSk7XG4gICAgICAgIGlmICghZXhpc3QpIHtcbiAgICAgICAgICBmb3Jtcy5kZWZhdWx0VmFsdWUucHVzaCh7IHZhbHVlOiB2YWx1ZS50cmltKCksIGNoZWNrZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXG4gIH1cblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2ZlckFycmF5SXRlbShldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLCBldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBpbmdvcmVEZWZhdWx0QWN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBvblNob3dDYXRlZ29yeSgpIHtcbiAgICB0aGlzLnNob3dQcm9maWxlTmFtZSA9ICF0aGlzLnNob3dQcm9maWxlTmFtZTtcbiAgfVxuXG4gIG9uU2VsZWN0UGljdG8oZSwgcGljdG8pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoeyBQaWN0bzogcGljdG8gfSk7XG4gICAgdGhpcy5pc1BpY3RvTGlzdFNob3cgPSAhdGhpcy5pc1BpY3RvTGlzdFNob3c7XG4gIH1cbiAgb25TaG93UGljdG9MaXN0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5pc1BpY3RvTGlzdFNob3cgPSAhdGhpcy5pc1BpY3RvTGlzdFNob3c7XG4gIH1cbiAgb25DaGFuZ2VMYWJlbChldmVudDogYW55LCAuLi5wYXJhbXMpIHtcbiAgICBjb25zdCBhcnIgPSBldmVudC5sYWJlbC5zcGxpdChcIiBcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycltpXSA9IGFycltpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGFycltpXS5zbGljZSgxKTtcbiAgICB9XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcbiAgICBmb3Jtcy5rZXkgPSBhcnIuam9pbignJylcblxuICB9XG4gIG9uQ2hlY2tlZENoaXAoZXZlbnQ6IGFueSwgLi4ucGFyYW1zKSB7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcbiAgICBjb25zdCBpbmRleCA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maW5kSW5kZXgoKGNoaXApID0+IGNoaXAudmFsdWUgPT09IGV2ZW50LnZhbHVlKVxuICAgIGlmIChpbmRleCAhPT0gLTEgJiYgZm9ybXMudHlwZSA9PT0gJ2NoZWNrYm94X211bHRpcGxlJykge1xuICAgICAgZm9ybXMuZGVmYXVsdFZhbHVlW2luZGV4XS5jaGVja2VkID0gIWV2ZW50LmNoZWNrZWRcbiAgICB9IGVsc2UgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgZm9ybXMuZGVmYXVsdFZhbHVlLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgIHZhbHVlLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICBmb3Jtcy5kZWZhdWx0VmFsdWVbaW5kZXhdLmNoZWNrZWQgPSAhZXZlbnQuY2hlY2tlZFxuICAgIH1cbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXG4gIH1cblxuICBvcGVuRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oVXBkYXRlUHJvZmlsQ29tcG9uZW50LCB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1hdEljb25MaXN0OiB0aGlzLm1hdEljb25MaXN0LFxuICAgICAgICBmb3JtOiB0aGlzLmZvcm0sXG4gICAgICAgIHRhZ3M6IHRoaXMudGFnc1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoY29uZmlybWVkOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoY29uZmlybWVkKSB7XG5cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uUGFzc0luRWRpdE1vZGUoaSkge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIHRoaXMuZWRpdEluZGV4ID0gaTtcbiAgfVxuXG4gIG9uRWRpdCgpIHtcbiAgICB0aGlzLmVkaXRJbmRleCA9IG51bGw7XG4gIH1cblxuICBvbkVkaXRDYXRlZ29yeU5hbWUoaSwgbmFtZSkge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIHRoaXMuY2F0ZWdvcmllc1tpXS5uYW1lID0gbmFtZTtcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXG4gIH1cbiAgb25BY3JlbGluayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIFxuICBnZXRDb25kaXRpb25WYWx1ZXMoKSB7XG4gICAgY29uc3QgY29uZGl0aW9uc0xpc3QgPSBbXTtcbiAgICBjb25zdCB0eXBlPShmb3Jtcyk9PmZvcm1zLnR5cGUgPT09ICdzZWxlY3QnIHx8IGZvcm1zLnR5cGUgPT09ICdjaGVja29ieCcgfHwgZm9ybXMudHlwZSA9PT0gJ2NoZWNrYm94X211bHRpcGxlJyB8fCBmb3Jtcy50eXBlID09PSAncmFkaW8nXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGZvcm1zID0gdGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zW2pdO1xuICAgICAgICBpZiAodHlwZShmb3JtcykpIHtcbiAgICAgICAgICBjb25kaXRpb25zTGlzdC5wdXNoKHtcbiAgICAgICAgICAgIGxldmVsOiAxLFxuICAgICAgICAgICAgY2F0ZWdvcnlJbmRleDogaSxcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleDogaixcbiAgICAgICAgICAgIHBvc3NpYmxlVmFsdWVzOiBmb3Jtcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICBsYWJlbDogYCR7dGhpcy5jYXRlZ29yaWVzW2ldLm5hbWV9ID4gJHtmb3Jtcy5sYWJlbH1gXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBpZihmb3Jtcy5mb3Jtcyl7XG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBmb3Jtcy5mb3Jtcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgY29uc3Qgc3ViPWZvcm1zLmZvcm1zW2tdICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgaWYoc3ViLnR5cGU9PT0nY2hlY2tib3gnIHx8IHN1Yi50eXBlPT09J3NlbGVjdCcgfHwgc3ViLnR5cGU9PT0ncmFkaW8nIHx8IHN1Yi50eXBlPT09J2NoZWNrYm94X211bHRpcGxlJyl7ICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbmRpdGlvbnNMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgIGxldmVsOjIsXG4gICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJbmRleDppLFxuICAgICAgICAgICAgICAgICAgIGZvcm1JbmRleDpqLFxuICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleDprLFxuICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlVmFsdWVzOnN1Yi5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgbGFiZWw6YCR7dGhpcy5jYXRlZ29yaWVzW2ldLm5hbWV9ID4gJHtmb3Jtcy5sYWJlbH0gPiAke3N1Yi5sYWJlbH1gXG4gICAgICAgICAgICB9KSAgICAgICAgICBcbiAgICAgICAgICAgfSAgXG4gICAgICAgICAgIGlmKHN1Yi5mb3Jtcyl7XG4gICAgICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IHN1Yi5mb3Jtcy5sZW5ndGg7IGwrKykge1xuICAgICAgICAgICAgICBjb25zdCBjaGlsZD1zdWIuZm9ybXNbbF1cbiAgICAgICAgICAgICAgaWYoY2hpbGQudHlwZT09PSdjaGVja2JveCcgfHwgY2hpbGQudHlwZT09PSdzZWxlY3QnIHx8IGNoaWxkLnR5cGU9PT0ncmFkaW8nIHx8IGNoaWxkLnR5cGU9PT0nY2hlY2tib3hfbXVsdGlwbGUnKXsgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbnNMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDozLFxuICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUluZGV4OmksXG4gICAgICAgICAgICAgICAgICAgICAgIGZvcm1JbmRleDpqLFxuICAgICAgICAgICAgICAgICAgICAgICBzdWJJbmRleDpsLFxuICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXg6ayxcbiAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVWYWx1ZXM6Y2hpbGQuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpgJHt0aGlzLmNhdGVnb3JpZXNbaV0ubmFtZX0gPiAke2Zvcm1zLmxhYmVsfSA+ICR7c3ViLmxhYmVsfSA+ICAke2NoaWxkLmxhYmVsfWBcbiAgICAgICAgICAgICAgICB9KSAgICAgICAgICBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCBjb25kaXRpb25zTGlzdCk7XG4gICAgdGhpcy5jb25kaXRpb25EYXRhPWNvbmRpdGlvbnNMaXN0XG4gICAgY29uc29sZS5sb2coY29uZGl0aW9uc0xpc3QpO1xuXG4gIH1cbn1cbiJdfQ==