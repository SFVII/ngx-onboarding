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
        template: "<main>\n    <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n        <div class=\"box-title\" *ngIf=\"showProfileName\">\n            <div class=\"box-title-content\">\n                <h3 class=\"title\">Cr\u00E9ation d\u2019un nouveau profil d\u2019onboarding</h3>\n                <p>S\u00E9lectionnez l\u2019icon de votre choix et indiquez le nom de votre nouveau profil d\u2019onboarding</p>\n                <div class=\"profil-name-content\">\n                    <button class=\"add-picto\" mat-raised-button color=\"primary\" (click)=\"onShowPictoList($event)\">\n                        <mat-icon>{{form.get('Picto').value===\"\" ? 'contact_phone' :form.get('Picto').value}}</mat-icon>\n                    </button>\n                    <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                        <mat-label>Nom de votre nouveau profil</mat-label>\n                        <input type=\"text\" matInput formControlName=\"Name\" placeholder=\"Ex. Manager\" />\n                    </mat-form-field>\n                    <div class=\"list-picto\" *ngIf=\"isPictoListShow\">\n                        <mat-icon *ngFor=\"let icon of matIconList\"\n                            [style.color]=\"form.get('Picto').value===icon.name ? '#830B6B':'#000'\"\n                            (click)=\"onSelectPicto($event,icon.name)\">\n                            {{icon.name}}\n                        </mat-icon>\n                    </div>\n                </div>\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                    <mat-label>D\u00E9scription</mat-label>\n                    <textarea type=\"text\" matInput formControlName=\"Description\" rows=\"4\" placeholder=\"\"></textarea>\n                </mat-form-field>\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                    <mat-label>Tags</mat-label>\n                    <mat-select formControlName=\"Tags\" required>\n                        <mat-option *ngFor=\"let tag of tags\" [value]=\"tag\">{{tag}}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n                <mat-checkbox class=\"form-field\" formControlName=\"Status\">Active</mat-checkbox>\n                <div class=\"link-create-profil\">\n                    <button class=\"link-add-profil\"\n                        [style.opacity]=\"(form.get('Name').value==='' || form.get('Tags').value=='') ? 0.4 : 1\"\n                        [disabled]=\"form.get('Name').value==='' || form.get('Tags').value==''\" mat-raised-button\n                        color=\"primary\" (click)='onShowCategory()'>\n                        {{id !== \"0\" ? 'Modifier un profil' :'Cr\u00E9er un nouveau profil'}}\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"category\" *ngIf=\"!showProfileName\">\n            <!-- <div class=\"category\"> -->\n\n            <div class=\"side-bar\">\n                <div class=\"summary\">\n                    <h3><span>{{this.form.get('Name').value}}</span>\n                        <mat-icon (click)=\"openDialog()\">edit</mat-icon>\n                    </h3>\n                    <ol type=\"I\">\n                        <li class=\"li-title\" *ngFor=\"let cat of categories;  let i=index\">\n                            <span [class]=\"editIndex===i ? 'edition-mode':''\">\n                                <span [ngxScrollTo]=\"'#'+cat.name\" (click)=\"onExpendMore({field:cat},i)\"\n                                    *ngIf=\"editIndex!==i\">{{cat.name}}</span>\n                                <input (blur)=\"onEdit()\" #edit *ngIf=\"editIndex===i\" type=\"text\" [(ngModel)]=\"cat.name\"\n                                    [ngModelOptions]=\"{standalone: true}\"\n                                    (ngModelChange)=\"onEditCategoryName(i,cat.name)\">\n                                <mat-icon (click)=\"onPassInEditMode(i)\">edit</mat-icon>\n                            </span>\n                            <ol>\n                                <ng-container *ngFor=\"let sub of cat.forms;let j=index\">\n                                    <ng-container *ngIf=\"sub?.forms\">\n                                        <li [class]=\"sub.expandMore ? 'sub-title active' :'sub-title'\"\n                                            (click)=\"onExpendMore({field:sub},i,j)\">\n                                            <span [ngxScrollTo]=\"'#'+sub.key\">{{j+1}}. {{sub.label}}</span>\n                                        </li>\n                                    </ng-container>\n                                </ng-container>\n                            </ol>\n                        </li>\n                    </ol>\n                    <button mat-button class=\"add-category transparent\" (click)='onAddNewCategory($event)'>\n                        <mat-icon>add_box</mat-icon>\n                        Ajouter une nouvelle cat\u00E9gorie\n                    </button>\n                </div>\n                <button mat-button class=\"register-button\" type=\"submit\">\n                    <!-- <mat-icon>check</mat-icon> -->\n                    Enregistrer le profil\n                </button>\n            </div>\n            <div class=\"fields\" cdkDropListGroup>\n                <div class=\"example-list mt-20\" #parentList=\"cdkDropList\" cdkDropList [cdkDropListData]=\"categories\"\n                    (cdkDropListDropped)=\"drop($event)\">\n                    <div class=\"category-item\" *ngFor=\"let category of categories;  let i=index\" cdkDrag\n                        [id]=\"category.name\">\n                        <div class=\"left-action move-icons\" cdkDragHandle>\n                            <button class=\"transparent-button\" [disabled]=\"!category.deleteable\"\n                                (click)=\"onRemoveCategory($event,i)\" mat-raised-button>\n                                <mat-icon [style.opacity]=\"!category.deleteable ? 0 :1\">delete</mat-icon>\n                            </button>\n                        </div>\n                        <div class=\"field-content\">\n                            <div class=\"field-item\">\n                                <input class=\"example-full-width input-category-name\" type=\"text\" required\n                                    [readonly]=\"categories.length<4 || !category.editable\"\n                                    [readonly]=\"!category.editable\" [(ngModel)]=\"category.name\"\n                                    [ngModelOptions]=\"{standalone: true}\" placeholder=\"Saisir le nom de la cat\u00E9gorie\" />\n                            </div>\n                            <div #childList=\"cdkDropList\" *ngIf=\"category.forms\" [cdkDropListData]=\"category.forms\"\n                                cdkDropList (cdkDropListDropped)=\"drop($event)\">\n                                <ng-container *ngIf=\"category.expandMore\">\n                                    <div class=\"\" *ngFor=\"let field of category.forms;let j=index\" [id]=\"field.key\">\n                                        <div cdkDrag>\n                                            <div class=\"fields-content\">\n                                                <div class=\"button-action\">\n                                                    <button [disabled]=\"!field.deleteable\" mat-mini-fab color=\"warn\"\n                                                        class=\"delete-field transparent-button\"\n                                                        (click)=\"onRemoveField(i,j)\">\n                                                        <mat-icon [style.opacity]=\"!field.deleteable ? 0 :1\">delete\n                                                        </mat-icon>\n                                                    </button>\n                                                </div>\n                                                <div class=\"fields-container\"\n                                                    [class]=\"!field.deleteable ? 'disabled' :''\">\n                                                    <lib-sub-category [field]=\"field\" [length]=\"category?.forms?.length\"\n                                                        [i]=\"i\" [j]=\"j\"\n                                                        (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,$event.prev,i,j)\"\n                                                        (onKeyPress)=\"onKeyPress($event.event,i,j)\"\n                                                        (onAddNewField)=\"onAddNewField(i)\"\n                                                        (onRemoveField)=\"onRemoveField(i,j)\"\n                                                        (onChangeType)=\"onChangeType(field.type,i,j)\"\n                                                        (onRemoveKeyword)=\"removeKeyword($event.event,i,j)\"\n                                                        (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j)\"\n                                                        (onExpendMore)=\"onExpendMore($event,i,j)\"\n                                                        (onChangeLabel)=\"onChangeLabel($event,i,j)\"\n                                                        (onCheckedChip)=\"onCheckedChip($event,i,j)\"\n                                                        (onDrop)=\"drop($event)\"\n                                                        (onCheckedDefault)=\"onCheckedDefault($event,i,j)\"\n                                                        [conditionData]=\"conditionData\"\n                                                        (onGetConditionValues)=\"getConditionValues()\">\n                                                        <div *ngIf=\"field.expandMore\" class=\"child\">\n                                                            <div #childList=\"cdkDropList\" *ngIf=\"field.forms\"\n                                                                [cdkDropListData]=\"field.forms\" cdkDropList\n                                                                (cdkDropListDropped)=\"drop($event)\">\n                                                                <div class=\"\"\n                                                                    *ngFor=\"let child of field.forms;let k=index\"\n                                                                    [id]=\"child.key\">\n                                                                    <div cdkDrag>\n                                                                        <div class=\"fields-content\">\n                                                                            <div\n                                                                                class=\"button-action child-2-background\">\n                                                                                <button [disabled]=\"!child.deleteable\"\n                                                                                    mat-mini-fab color=\"warn\"\n                                                                                    class=\"delete-field transparent-button\"\n                                                                                    (click)=\"onRemoveField(i,j,k)\">\n                                                                                    <mat-icon\n                                                                                        [style.opacity]=\"!child.deleteable ? 0 :1\">\n                                                                                        delete</mat-icon>\n                                                                                </button>\n                                                                            </div>\n                                                                            <div class=\"fields-container\">\n                                                                                <lib-sub-category [field]=\"child\"\n                                                                                    [length]=\"field?.forms?.length\"\n                                                                                    [i]=\"j\" [j]=\"k\"\n                                                                                    (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,$event.prev,i,j,k)\"\n                                                                                    (onKeyPress)=\"onKeyPress($event.event,i,j,k)\"\n                                                                                    (onAddNewField)=\"onAddNewField(i, j)\"\n                                                                                    (onRemoveField)=\"onRemoveField(i,j,k)\"\n                                                                                    (onChangeType)=\"onChangeType(child.type,i,j,k)\"\n                                                                                    (onRemoveKeyword)=\"removeKeyword($event.event,i,j,k)\"\n                                                                                    (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j,k)\"\n                                                                                    (onExpendMore)=\"onExpendMore($event,i,j,k)\"\n                                                                                    (onChangeLabel)=\"onChangeLabel($event,i,j,k)\"\n                                                                                    (onCheckedChip)=\"onCheckedChip($event,i,j,k)\"\n                                                                                    (onDrop)=\"drop($event)\"\n                                                                                    (onCheckedDefault)=\"onCheckedDefault($event,i,j,k)\"\n                                                                                    [conditionData]=\"conditionData\"\n                                                                                    (onGetConditionValues)=\"getConditionValues()\">\n                                                                                    <div *ngIf=\"child.expandMore\"\n                                                                                        class=\"child\">\n                                                                                        <div #childList=\"cdkDropList\"\n                                                                                            *ngIf=\"child.forms\"\n                                                                                            [cdkDropListData]=\"child.forms\"\n                                                                                            cdkDropList\n                                                                                            (cdkDropListDropped)=\"drop($event)\">\n                                                                                            <div class=\"\"\n                                                                                                *ngFor=\"let c2 of child.forms;let l=index\"\n                                                                                                [id]=\"c2.key\">\n                                                                                                <div cdkDrag>\n                                                                                                    <div\n                                                                                                        class=\"fields-content\">\n                                                                                                        <div\n                                                                                                            class=\"button-action child-3-background\">\n                                                                                                            <button\n                                                                                                                [disabled]=\"!field.deleteable\"\n                                                                                                                mat-mini-fab\n                                                                                                                color=\"warn\"\n                                                                                                                class=\"delete-field transparent-button\"\n                                                                                                                (click)=\"onRemoveField(i,j,k,l)\">\n                                                                                                                <mat-icon>\n                                                                                                                    delete\n                                                                                                                </mat-icon>\n                                                                                                            </button>\n                                                                                                        </div>\n                                                                                                        <div\n                                                                                                            class=\"fields-container\">\n                                                                                                            <lib-sub-category\n                                                                                                                [field]=\"c2\"\n                                                                                                                [length]=\"child?.forms?.length\"\n                                                                                                                [i]=\"k\"\n                                                                                                                [j]=\"l\"\n                                                                                                                (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev,i,j,k,l)\"\n                                                                                                                (onKeyPress)=\"onKeyPress($event.event,i,j,k,l)\"\n                                                                                                                (onAddNewField)=\"onAddNewField(i,j,k)\"\n                                                                                                                (onRemoveField)=\"onRemoveField(i,j,k,l)\"\n                                                                                                                (onChangeType)=\"onChangeType(c2.type,i,j,k,l)\"\n                                                                                                                (onRemoveKeyword)=\"removeKeyword($event.event,i,j,k,l)\"\n                                                                                                                (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j,k,l)\"\n                                                                                                                (onExpendMore)=\"onExpendMore($event,i,j,k,l)\"\n                                                                                                                (onChangeLabel)=\"onChangeLabel($event,i,j,k,l)\"\n                                                                                                                (onCheckedChip)=\"onCheckedChip($event,i,j,k,l)\"\n                                                                                                                (onDrop)=\"drop($event)\"\n                                                                                                                (onCheckedDefault)=\"onCheckedDefault($event,i,j,k,l)\"\n                                                                                                                [conditionData]=\"conditionData\"\n                                                                                                                (onGetConditionValues)=\"getConditionValues()\">\n\n                                                                                                                <div\n                                                                                                                    class=\"child\">\n                                                                                                                </div>\n                                                                                                            </lib-sub-category>\n                                                                                                        </div>\n                                                                                                    </div>\n                                                                                                </div>\n                                                                                                <div class=\"add-button-container add-button-sub-category\"\n                                                                                                    *ngIf=\"child?.forms?.length-1===l\">\n                                                                                                    <button\n                                                                                                        style=\"margin:10px auto\"\n                                                                                                        [disabled]=\"child?.forms?.length-1!==l\"\n                                                                                                        [style.opacity]=\"child?.forms?.length-1===l ? 1 :0\"\n                                                                                                        mat-raised-button\n                                                                                                        color=\"primary\"\n                                                                                                        (click)='onAddNewField(i,j,k)'>\n                                                                                                        <mat-icon>\n                                                                                                            add_box\n                                                                                                        </mat-icon>\n                                                                                                        <span>Ajouter un\n                                                                                                            champ</span>\n                                                                                                    </button>\n                                                                                                </div>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                </lib-sub-category>\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"add-button-container add-button-sub-category\"\n                                                                        *ngIf=\"field?.forms?.length-1===k\">\n                                                                        <button style=\"margin:10px auto\"\n                                                                            [disabled]=\"field?.forms?.length-1!==k\"\n                                                                            [style.opacity]=\"field?.forms?.length-1===k ? 1 :0\"\n                                                                            mat-raised-button color=\"primary\"\n                                                                            (click)='onAddNewField(i,j)'>\n                                                                            <mat-icon>add_box</mat-icon>\n                                                                            <span>Ajouter un champ</span>\n                                                                        </button>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </lib-sub-category>\n\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"add-button-container add-button-sub-category\"\n                                            *ngIf=\"category?.forms?.length-1===j\">\n                                            <button style=\"margin:10px auto\" [disabled]=\"category?.forms?.length-1!==j\"\n                                                [style.opacity]=\"category?.forms?.length-1===j ? 1 :0\" mat-raised-button\n                                                color=\"primary\" (click)='onAddNewField(i)'>\n                                                <mat-icon>add_box</mat-icon>\n                                                <span>Ajouter un champ</span>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </ng-container>\n\n                            </div>\n                        </div>\n                        <button mat-mini-fab color=\"primary\" class=\"expand-button\"\n                            (click)=\"onExpendMore({event:$event, field:category},i)\">\n                            <mat-icon *ngIf=\"!category.expandMore\">chevron_right</mat-icon>\n                            <mat-icon *ngIf=\"category.expandMore\">expand_more</mat-icon>\n                        </button>\n                    </div>\n\n                    <div class=\"add-button-container\">\n                        <button (click)='onAddNewCategory($event)'>\n                            <mat-icon>add</mat-icon>\n                            Ajouter une cat\u00E9gorie\n                        </button>\n                        <!-- <button type=\"submit\">\n                            <mat-icon>check</mat-icon>\n                            Enregistrer\n                        </button> -->\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </form>\n</main>",
        styles: ["main{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main .disabled label{background-color:transparent!important}main form{display:flex;height:100%;width:100%}main .box-title{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main .box-title h3{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main .box-title input,main .box-title label{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main .box-title .profil-name-content{display:flex;align-items:center;position:relative}main .box-title .profil-name-content .add-picto{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main .box-title .profil-name-content .add-picto mat-icon{margin-right:10px}main .box-title .profil-name-content .list-picto{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main .box-title .profil-name-content .list-picto mat-icon{margin:15px;border:none;font-size:40px}main .box-title .profil-name-content .list-picto mat-icon:hover{color:#830b6b!important;cursor:pointer}main .box-title .box-title-content{width:100%;margin:25px auto}main .box-title .title{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main .box-title p{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main .box-title .link-create-profil{width:100%;display:flex;justify-content:center}main .box-title button{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main .action{width:100%;display:flex;justify-content:space-between}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name{border:none;outline:0;text-align:left;font:bold 18px/48px Nexa Text;letter-spacing:0;color:#171f26}.example-full-width{width:100%}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}::ng-deep .mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}::ng-deep .mat-select{padding:.5em 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}::ng-deep .mat-form-field-wrapper{padding-bottom:0!important}:host ::ng-deep .cdk-drag-preview .input-category-name div.mat-form-field-outline-start,:host ::ng-deep .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0!important}:host ::ng-deep .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0!important}:host ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background,:host ::ng-deep .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}:host ::ng-deep .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0!important}:host ::ng-deep .input-category-name .mat-form-field-label-wrapper{display:none}:host ::ng-deep .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}:host ::ng-deep .input-category-name .mat-form-field-infix{border-top:none}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item,.cdk-drag-placeholder{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;min-height:60px}.category-item .left-action,.cdk-drag-placeholder .left-action{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item .left-action .transparent-button,.cdk-drag-placeholder .left-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item .field-content,.cdk-drag-placeholder .field-content{width:100%;-ms-grid-row-align:center;align-self:center}.category-item .field-content .field-item,.cdk-drag-placeholder .field-content .field-item{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.category-item .field-content .mat-form-field-outline,.cdk-drag-placeholder .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.cdk-drag-placeholder .field-content .mat-form-field-outline{color:transparent!important}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child{margin-left:0}.category{display:flex;flex-direction:row;width:100vw}.category .summary{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category .summary h3{font-size:25px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;align-items:center}.category .summary h3 mat-icon{margin-left:15px;cursor:pointer}.category .summary ol{font-weight:600;margin-left:-27px;font-size:15px;list-style-position:inside}.category .summary ol li{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category .summary ol li ol{padding-left:0;margin-left:0}.category .summary ol li.li-title{font-size:14px;font-weight:600}.category .summary ol li.li-title input{width:140px;outline:0;border:1px dashed grey}.category .summary ol li.li-title span{display:inline-flex;align-items:center}.category .summary ol li.li-title span mat-icon{margin-left:10px;display:none}.category .summary ol li.li-title:hover mat-icon{display:initial!important}.category .summary ol li.sub-title{list-style:none;padding-left:20px}.category .summary ol li.sub-title.active,.category .summary ol li.sub-title.active::marker,.category .summary ol li.sub-title:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category .fields{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category .disabled{background-color:#f4f7f9!important}.category .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category .expand-button .material-icons{font-size:40px}.category .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.cdk-drag .fields-content{display:flex;height:100%;margin:0;width:100%;min-width:250px}.cdk-drag .fields-content .button-action{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag .fields-content .button-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag .fields-content .child-2-background{background-color:#cffaf4!important}.cdk-drag .fields-content .child-3-background{background-color:#e5e8ee!important}.cdk-drag .fields-content .fields-container{border:1px solid #dce4e9;border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px}.cdk-drag .fields-content .fields-container lib-sub-category .field-item{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.side-bar{display:flex;flex-direction:column}.register-button{background:no-repeat padding-box #171f26!important;border:2px solid #192128!important;border-radius:8px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important}"]
    })
], TemplateProfileCreateComponent);
export { TemplateProfileCreateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9FLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFlLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQU96RixJQUFhLDhCQUE4QixHQUEzQyxNQUFhLDhCQUE4QjtJQXNDekMsWUFDVSxFQUFlLEVBQ2hCLE9BQTBCLEVBQ3pCLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxNQUFpQjtRQUpqQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBekMzQixrQkFBYSxHQUFHLEtBQUss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QUFFLENBQUM7U0FDN0M7YUFBTSxJQUFJLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQy9DO2FBQU07WUFDTCxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVUsRUFBRSxHQUFHLE1BQU07UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixNQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xRLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7WUFD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QUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUU7Z0JBQzNFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ2pGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDaEY7U0FDRjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRTtnQkFDNUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFD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Q0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDbEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQ3BHO1FBQ0QsNEJBQTRCO0lBQzlCLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUF3QixFQUFFLElBQUksRUFBRSxHQUFHLE1BQU07UUFDM0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzFCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsTUFBTSxLQUFLLEdBQUcsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENB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RUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixNQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xRLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUUxQixDQUFDO0lBQ0QsYUFBYSxDQUFDLEtBQVUsRUFBRSxHQUFHLE1BQU07UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFL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QyxLQUFLLENBQUMsWUFBWTt3Q0FDakMsS0FBSyxFQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEtBQUssTUFBTSxHQUFHLENBQUMsS0FBSyxPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUU7cUNBQzFGLENBQUMsQ0FBQTtpQ0FDRjs2QkFFSDt5QkFDRjtxQkFDQTtpQkFDRjthQUNGO1NBRUY7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLEdBQUMsY0FBYyxDQUFBO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFOUIsQ0FBQztDQUNGLENBQUE7O1lBMzVDZSxXQUFXO1lBQ1AsaUJBQWlCO1lBQ2xCLGNBQWM7WUFDYixNQUFNO1lBQ04sU0FBUzs7QUEzQ2hCLDhCQUE4QjtJQUwxQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0NBQW9DO1FBQzlDLDBsMkJBQXVEOztLQUV4RCxDQUFDO0dBQ1csOEJBQThCLENBazhDMUM7U0FsOENZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRG9DaGVjayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRU5URVIsIENPTU1BLCBTRU1JQ09MT04gfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2tleWNvZGVzXCI7XG5pbXBvcnQgeyBNYXRDaGlwSW5wdXRFdmVudCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jaGlwc1wiO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vb25ib2FyZGluZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW0gfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuaW1wb3J0IHsgVXBkYXRlUHJvZmlsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy91cGRhdGUtcHJvZmlsL3VwZGF0ZS1wcm9maWwuY29tcG9uZW50JztcbmltcG9ydCB7IEV4aXRDb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9leGl0LWNvbmZpcm0vZXhpdC1jb25maXJtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJvbmJvYXJkaW5nLWNyZWF0ZS1wcm9maWxlLXRlbXBsYXRlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3RlbXBsYXRlLXByb2ZpbGUtY3JlYXRlLmNvbXBvbmVudC5zY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVByb2ZpbGVDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtOiBGb3JtR3JvdXA7XG4gIHZhbGlkQ2F0ZWdvcnkgPSBmYWxzZTtcbiAgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQSwgU0VNSUNPTE9OXTtcbiAgY3VycmVudFByb2ZpbDogYW55ID0ge307XG4gIGNhbkV4aXQgPSB0cnVlO1xuICB0YWdzID0gW107XG4gIGlkID0gXCIwXCI7XG4gIHBhcmVudCA9IFtdO1xuICBlZGl0SW5kZXggPSBudWxsO1xuICBzaG93UHJvZmlsZU5hbWUgPSBmYWxzZTtcbiAgbWF0SWNvbkxpc3QgPSBbXG4gICAgeyBuYW1lOiAnZGV2ZWxvcGVyX2JvYXJkJyB9LFxuICAgIHsgbmFtZTogJ2NvbnRhY3RfcGhvbmUnIH0sXG4gICAgeyBuYW1lOiAnY29udGFjdF9tYWlsJyB9LFxuICAgIHsgbmFtZTogJ3BsYXlfY2lyY2xlX2ZpbGxlZCcgfSxcbiAgICB7IG5hbWU6ICdjb250cm9sX2NhbWVyYScgfSxcbiAgICB7IG5hbWU6ICdleHBsaWNpdCcgfSxcbiAgICB7IG5hbWU6ICdwZXJzb24nIH0sXG4gICAgeyBuYW1lOiAndmlzaWJpbGl0eScgfSxcbiAgICB7IG5hbWU6ICd2aWRlb19sYWJlbCcgfSxcbiAgICB7IG5hbWU6ICdhZGRfY2lyY2xlJyB9LFxuICAgIHsgbmFtZTogJ3dhdGNoX2xhdGVyJyB9LFxuICAgIHsgbmFtZTogJ3doZXJlX3RvX3ZvdGUnIH0sXG4gICAgeyBuYW1lOiAnd29yaycgfSxcbiAgICB7IG5hbWU6ICd3ZWInIH0sXG4gICAgeyBuYW1lOiAnd2hhdHNob3QnIH0sXG4gICAgeyBuYW1lOiAnd2lmaScgfSxcbiAgICB7IG5hbWU6ICd3b3Jrc3BhY2VzJyB9LFxuICAgIHsgbmFtZTogJ3diX2Nsb3VkeScgfSxcbiAgICB7IG5hbWU6ICd3YXZlcycgfSxcbiAgICB7IG5hbWU6ICd3YXJuaW5nJyB9LFxuICAgIHsgbmFtZTogJ3NwYWNlX2RhcycgfVxuICBdO1xuICBpc1BpY3RvTGlzdFNob3c6IGJvb2xlYW47XG4gIHBpY3RvID0gXCJcIjtcbiAgY29uZGl0aW9uRGF0YTogYW55W107XG4gIGNhdGVnb3JpZXM9W11cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHVibGljIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZ1xuICApIHsgfVxuXG4gIGRlZmF1bHRDYXRlZ29yaWU6IGFueSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIlV0aWxpc2F0ZXVyXCIsXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L3VzZXJcIixcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJDaXZpbGl0w6lcIixcbiAgICAgICAgICBrZXk6IFwiU2FsdXRhdGlvblwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk0uXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiTW1lXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDEwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG5cbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgcHJvZmlsXCIsXG4gICAgICAgICAga2V5OiBcIlR5cGVfZGVfcHJvZmlsX05vd2JvYXJkX19jXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTWFuYWdlclwiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIlV0aWxpc2F0ZXVyXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDEwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJOb21cIixcbiAgICAgICAgICBrZXk6IFwiTGFzdE5hbWVcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiUHLDqW5vbVwiLFxuICAgICAgICAgIGtleTogXCJGaXJzdE5hbWVcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiRW1haWxcIixcbiAgICAgICAgICBrZXk6IFwiRW1haWxcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiVMOpbMOpcGhvbmUgZml4ZVwiLFxuICAgICAgICAgIGtleTogXCJQaG9uZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogMjAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJ0ZWxcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG5cbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlTDqWzDqXBob25lIHBvcnRhYmxlXCIsXG4gICAgICAgICAga2V5OiBcIk1vYmlsZVBob25lXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiAyMCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcInRlbFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcblxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiRm9uY3Rpb25cIixcbiAgICAgICAgICBrZXk6IFwiVGl0bGVcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiRXRhYmxpc3NlbWVudCAvIFNpdGVcIixcbiAgICAgICAgICBrZXk6IFwiQWNjb3VudE5hbWVcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgbGFiZWw6IFwiSURcIixcbiAgICAgICAgLy8gICBrZXk6IFwiSWRcIixcbiAgICAgICAgLy8gICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgIC8vICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAvLyAgIHZhbHVlOiBudWxsLFxuICAgICAgICAvLyAgIHNpemU6IDgwLFxuICAgICAgICAvLyAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAvLyAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgIC8vICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIC8vICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAvLyAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAvLyAgIHN1YkxldmVsOiAxLFxuICAgICAgICAvLyAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAvLyB9LCB7XG4gICAgICAgIC8vICAgbGFiZWw6IFwiRXRhYmxpc3NlbWVudCBJRFwiLFxuICAgICAgICAvLyAgIGtleTogXCJBY2NvdW50SWRcIixcbiAgICAgICAgLy8gICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgIC8vICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAvLyAgIHZhbHVlOiBudWxsLFxuICAgICAgICAvLyAgIHNpemU6IDgwLFxuICAgICAgICAvLyAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAvLyAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgIC8vICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIC8vICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAvLyAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAvLyAgIHN1YkxldmVsOiAxLFxuICAgICAgICAvLyAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAvLyB9LFxuICAgICAgICBcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkFjY8OocyBhdSBwb3J0YWlsXCIsXG4gICAgICAgICAga2V5OiBcIkFjY19zX2F1X3BvcnRhaWxfY2xpZW50X05vd0JvYXJkX19jXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiT3VpXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiTm9uXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDEwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG5cbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkxhbmd1ZVwiLFxuICAgICAgICAgIGtleTogXCJMYW5ndWVfbWF0ZXJuZWxsZV9fY1wiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkZyYW7Dp2Fpc1wiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIkFuZ2xhaXNcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkEgcXVpdHTDqSBsYSBzb2Npw6l0w6lcIixcbiAgICAgICAgICBrZXk6IFwiQV9xdWl0dF9sYV9zb2NpX3RfX2NcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJPdWlcIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJOb25cIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU2Vzc2lvbiBkJ3V0aWxpc2F0ZXVyXCIsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvdXNlci1zZXNzaW9uXCIsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiVXRpbGlzYXRldXIgbG9jYWwgw6AgY3LDqWVyXCIsXG4gICAgICAgICAga2V5OiBcIlVzZXJMb2NhbFRvQ3JlYXRlXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkxvZ2luXCIsXG4gICAgICAgICAgICAgIGtleTogXCJMb2dpblwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJNb3QgZGUgcGFzc2VcIixcbiAgICAgICAgICAgICAga2V5OiBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlV0aWxpc2F0ZXVyIEFEIChzZXJ2ZXVyKSDDoCBjcsOpZXJcIixcbiAgICAgICAgICBrZXk6IFwiVXNlclNlcnZlclRvQ3JlYXRlXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5vbSBkZSBkb21haW5lXCIsXG4gICAgICAgICAgICAgIGtleTogXCJEb21haW5OYW1lXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIlZvdHJlIGxvZ2luXCIsXG4gICAgICAgICAgICAgIGtleTogXCJZb3VyTG9naW5cIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJWb3RyZSBtb3QgZGUgcGFzc2VcIixcbiAgICAgICAgICAgICAga2V5OiBcIllvdXJQYXNzd29yZFwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJHcm91cGUgZGUgc8OpY3VyaXTDqVwiLFxuICAgICAgICAgICAgICBrZXk6IFwiR3JvdXBTZWN1cml0eVwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVXRpbGlzYXRldXIgYXZlYyBsZXMgZHJvaXRzIHNpbWlsYWlyZXMgKlwiLFxuICAgICAgICAgICAgICAgICAga2V5OiBcIlVzZXJXaXRoU2ltaWxhckFjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBzdWJMZXZlbDogMyxcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25zXCIsXG4gICAgICAgICAgICAgICAgICBrZXk6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgc2l6ZTogMjU1LFxuICAgICAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBzdWJMZXZlbDogMyxcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJNZXNzYWdlcmllXCIsXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L21lc3NhZ2VyaWVcIixcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkFkcmVzc2UgbWFpbCDDoCBjcsOpZXJcIixcbiAgICAgICAgICBrZXk6IFwiRW1haWxUb0NyZWF0ZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkFkcmVzc2UgbWFpbFwiLFxuICAgICAgICAgICAgICBrZXk6IFwiRW1haWxcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSBsaWNlbmNlIChzaSBnw6lyw6llcyBwYXIgbGUgY2xpZW50KVwiLFxuICAgICAgICAgICAgICBrZXk6IFwiU2VyaWFsS2V5XCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJMaXN0ZXMgIGRlIGRpc3RyaWJ1dGlvblwiLFxuICAgICAgICAgIGtleTogXCJEaXN0cmlidXRpb25MaXN0XCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgZm9ybXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVXRpbGlzYXRldXIgYXZlYyBsZXMgbGlzdGVzIHNpbWlsYWlyZXMgKlwiLFxuICAgICAgICAgICAgICBrZXk6IFwiVXNlcldpdGhTaW1pbGFyTGlzdFwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uc1wiLFxuICAgICAgICAgICAgICBrZXk6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiAxMDAwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBam91dGVyIGRlcyBib2l0ZXMgbWFpbHMgZMOpbMOpZ3XDqXNcIixcbiAgICAgICAgICBrZXk6IFwiQWRkSW5ib3hNYWlsRGVsZWdhdGVcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcbiAgICAgICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU2VydmV1clwiLFxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS9zZXJ2ZXVyXCIsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBY2PDqHMgYXV4IGxlY3RldXJzIHLDqXNlYXV4XCIsXG4gICAgICAgICAga2V5OiBcIlJlYWROZXR3b3JrQWNjZXNzXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5vbSBkdSBzZXJ2ZXVyXCIsXG4gICAgICAgICAgICAgIGtleTogXCJTZXJ2ZXJOYW1lXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkNoZW1pbiBkdSBkb3NzaWVyXCIsXG4gICAgICAgICAgICAgIGtleTogXCJGb2xkZXJQYXRoXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTGV0dHJlIMOgIGF0dHJpYnVlclwiLFxuICAgICAgICAgICAgICBrZXk6IFwiQXR0cmlidXRMZXR0ZXJcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJWUE5cIixcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvdnBuXCIsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBY2PDqHMgYXUgVlBOXCIsXG4gICAgICAgICAga2V5OiBcIlZwbkFjY2Vzc1wiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcblxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiSW1wcmltYW50ZXNcIixcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvaW1wcmltZW50ZVwiLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQWNjw6hzIGF1eCBpbXByaW1hbnRlc1wiLFxuICAgICAgICAgIGtleTogXCJQcmludGVyQWNjZXNzXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5vbSAvIE1vZMOobGUgZGUgbCdpbXByaW1hbnRlIC8gbG9jYWxpc2F0aW9uXCIsXG4gICAgICAgICAgICAgIGtleTogXCJQcmludGVyTmFtZVwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkFwcGxpY2F0aW9uc1wiLFxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS9hcHBsaWNhdGlvblwiLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQWNjw6hzIGF1eCBhcHBsaWNhdGlvbnMgP1wiLFxuICAgICAgICAgIGtleTogXCJBcHBsaWNhdGlvbkFjY2Vzc1wiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcbiAgICAgICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUG9zdGVcIixcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvcG9zdGVcIixcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlBhcmFtw6l0cmFnZSBkZSBwb3N0ZVwiLFxuICAgICAgICAgIGtleTogXCJQb3N0UGFyYW1ldGVyXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIlJlYWxvY2F0ZWRFcXVpcG1lbnRcIixcbiAgICAgICAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5vdXZlYXUgcG9zdGVcIixcbiAgICAgICAgICAgICAga2V5OiBcIk5ld1Bvc3RcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFjaGV0w6kgY2hleiBOb3d0ZWFtXCIsXG4gICAgICAgICAgICAgICAgICBrZXk6IFwiUHVyY2hhc2VkQXROb3d0ZWFtXCIsXG4gICAgICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHN1YkxldmVsOiAzLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJBdXRyZVwiLFxuICAgICAgICAgICAgICAgICAga2V5OiBcIk90aGVyXCIsXG4gICAgICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc3ViTGV2ZWw6IDMsXG4gICAgICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQXV0cmVzXCIsXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L2F1dHJlc1wiLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25zXCIsXG4gICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiAxMDAwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG5cbiAgY2FuRGVhY3RpdmF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuY2FuRXhpdCkge1xuICAgICAgdGhpcy5kaWFsb2cub3BlbihFeGl0Q29uZmlybUNvbXBvbmVudCwge1xuICAgICAgICBkYXRhOiAnJ1xuICAgICAgfSlcbiAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY2FuRXhpdCRcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldChcImlkXCIpO1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgTmFtZTogW1wiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgUGljdG86IFtcIlwiXSxcbiAgICAgIERlc2NyaXB0aW9uOiBbXCJcIl0sXG4gICAgICBUYWdzOiBbXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBTdGF0dXM6IFtmYWxzZSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSk7XG4gICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoYyA9PiB7XG4gICAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5pZCAhPT0gXCIwXCIpIHtcbiAgICAgIHRoaXMuY3VycmVudFByb2ZpbCA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRQcm9maWwodGhpcy5pZCk7XG4gICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh0aGlzLmN1cnJlbnRQcm9maWwpO1xuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5jdXJyZW50UHJvZmlsLmNhdGVnb3JpZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd1Byb2ZpbGVOYW1lID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2F0ZWdvcmllcz10aGlzLmRlZmF1bHRDYXRlZ29yaWVcbiAgICB9XG4gICAgdGhpcy50YWdzID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFRhZ3MoKTtcbiAgfVxuXG4gIG9uQWRkTmV3Q2F0ZWdvcnkoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICB0aGlzLmNhdGVnb3JpZXMucHVzaCh7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBleHBhbmRNb3JlOiB0cnVlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiXCIsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiXCIsXG4gICAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgb25BZGROZXdGaWVsZCguLi5wYXJhbXMpIHtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAxID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXMgOiBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zO1xuICAgIGZvcm1zLnB1c2goe1xuICAgICAgbGFiZWw6IFwiXCIsXG4gICAgICBrZXk6IFwiXCIsXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIHNpemU6IDgwLFxuICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgIHN1YkxldmVsOiBwYXJhbXMubGVuZ3RoLFxuICAgIH0pO1xuICB9XG5cbiAgb25BZGROZXdTdWJMZXZlbEZpZWxkKC4uLnBhcmFtcykge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV07XG4gICAgZm9ybXMuZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgZm9ybXMuZm9ybXMgPSBbXTtcbiAgICBmb3Jtcy5mb3Jtcy5wdXNoKHtcbiAgICAgIGxhYmVsOiBcIlwiLFxuICAgICAga2V5OiBcIlwiLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBzaXplOiA4MCxcbiAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICBzdWJMZXZlbDogcGFyYW1zLmxlbmd0aCxcbiAgICAgIGV4cGFuZE1vcmU6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBvblJlbW92ZUZpZWxkKC4uLnBhcmFtcykge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3JtcyA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXM7XG4gICAgZm9ybXMuc3BsaWNlKHBhcmFtc1tsZW5ndGggLSAxXSwgMSk7XG4gIH1cblxuICBvblJlbW92ZUNhdGVnb3J5KGUsIGkpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jYXRlZ29yaWVzLnNwbGljZShpLCAxKTtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgfVxuXG4gIG9uQ2hhbmdlQ2F0ZWdvcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllcy5ldmVyeSgoY2F0KSA9PiBjYXQubmFtZSAhPT0gXCJcIiAmJiBjYXQuZm9ybXMuZXZlcnkoKGZpZWxkKSA9PiBmaWVsZC5sYWJlbCAhPT0gXCJcIiAmJiBmaWVsZC50eXBlICE9PSBcIlwiKSk7XG4gIH1cblxuICBhc3luYyBvblN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5mb3JtLnZhbGlkICYmIHRoaXMub25DaGFuZ2VDYXRlZ29yeSgpKSB7XG4gICAgICBjb25zdCBleHBhbmRDYXRlZ29yaWVzPVxuICAgICAgdGhpcy5jYXRlZ29yaWVzXG4gICAgICAuZmlsdGVyKChjYXQpPT5jYXQuZXhwYW5kT25ib2FyZGluZylcbiAgICAgIC5tYXAoKGNhdCk9PntcbiAgICAgICAgaWYoY2F0LmZvcm1zKXtcbiAgICAgICAgICBjb25zdCBmPSBjYXQuZm9ybXNcbiAgICAgICAgICAuZmlsdGVyKChmb3JtKT0+Zm9ybS5leHBhbmRPbmJvYXJkaW5nKVxuICAgICAgICAgIC5tYXAoKHN1Yik9PntcbiAgICAgICAgICAgIGlmKHN1Yi5mb3Jtcyl7XG4gICAgICAgICAgICAgIGNvbnN0IHM9c3ViLmZvcm1zLmZpbHRlcigoY2hpbGQpPT57XG4gICAgICAgICAgICAgICAgaWYoY2hpbGQuZm9ybXMpe1xuICAgICAgICAgICAgICAgICAgIGNvbnN0IGM9Y2hpbGQuZm9ybXMuZmlsdGVyKChjaCk9PmNoLmV4cGFuZE9uYm9hcmRpbmcpXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgIC4uLmNoaWxkLFxuICAgICAgICAgICAgICAgICAgICAgZm9ybXM6Y1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdWIsXG4gICAgICAgICAgICAgICAgZm9ybXM6c1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3ViO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNhdCxcbiAgICAgICAgICAgIGZvcm1zOmZcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhdFxuICAgICAgfSlcbiAgICAgIFxuICAgICAgY29uc3QgcmVzdWx0ID1cbiAgICAgICAgdGhpcy5pZCAhPT0gXCIwXCJcbiAgICAgICAgICA/IGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGVQcm9maWwoe1xuICAgICAgICAgICAgLi4udGhpcy5jdXJyZW50UHJvZmlsLFxuICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxuICAgICAgICAgICAgY2F0ZWdvcmllczogZXhwYW5kQ2F0ZWdvcmllcyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIDogYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZVByb2ZpbCh7XG4gICAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBleHBhbmRDYXRlZ29yaWVzLFxuICAgICAgICAgIH0pO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XG4gICAgICAgIHRoaXMuY2FuRXhpdCA9IHRydWU7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnNlcnZpY2UubWFpblBhdGhdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJycm9yLi4uLi4uXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlVHlwZSh0eXBlOiBzdHJpbmcsIC4uLnBhcmFtcykge1xuXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3JtcyA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3JtcztcbiAgICBpZiAodHlwZSA9PT0gXCJzZWxlY3RcIiB8fCB0eXBlID09PSBcInJhZGlvXCIgfHwgdHlwZSA9PT0gXCJjaGVja2JveF9tdWx0aXBsZVwiKSB7XG4gICAgICBmb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dLmRlZmF1bHRWYWx1ZSA9IFtdO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICBmb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0uZGVmYXVsdFZhbHVlID0gXCJcIjtcbiAgICB9XG4gIH1cblxuICBvbktleVByZXNzKGV2ZW50OiBhbnksIC4uLnBhcmFtcykge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV07XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCI7XCIpIHtcbiAgICAgIGNvbnN0IGV4aXN0ID0gZm9ybXMuZGVmYXVsdFZhbHVlLmZpbmQoKG9wdCkgPT4gb3B0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdChcIjtcIilbMF0udG9Mb2NhbGVMb3dlckNhc2UoKSk7XG4gICAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZS5wdXNoKHtcbiAgICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KFwiO1wiKVswXSxcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcbiAgfVxuXG4gIHJlbW92ZUtleXdvcmQoa2V5d29yZDogYW55LCAuLi5wYXJhbXMpIHtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xuICAgIGZvcm1zLmRlZmF1bHRWYWx1ZSA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlICE9PSBrZXl3b3JkLnZhbHVlKTtcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXG4gIH1cblxuICBvbkV4cGVuZE1vcmUoZXZlbnQsIC4uLnBhcmFtcykge1xuICAgIGlmIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuZmllbGQgJiYgIWV2ZW50LmZpZWxkLmV4cGFuZE1vcmUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNbaV0uZXhwYW5kTW9yZSA9IGZhbHNlO1xuICAgICAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtc1tqXS5leHBhbmRNb3JlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmV4cGFuZE1vcmUgPSAhdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZXhwYW5kTW9yZTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5leHBhbmRNb3JlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5leHBhbmRNb3JlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5leHBhbmRNb3JlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDMpIHtcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZXhwYW5kTW9yZSkge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZXhwYW5kTW9yZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5leHBhbmRNb3JlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmV4cGFuZE1vcmUpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZXhwYW5kTW9yZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5leHBhbmRNb3JlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DaGVja2VkRGVmYXVsdChldmVudCwgLi4ucGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMykge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcbiAgICB9XG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxuICB9XG5cbiAgYWRkS2V5d29yZEZyb21JbnB1dChldmVudDogTWF0Q2hpcElucHV0RXZlbnQsIHByZXYsIC4uLnBhcmFtcykge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuaW5wdXQ7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgcHJldkluZGV4ID0gZm9ybXMuZGVmYXVsdFZhbHVlLmZpbmRJbmRleCgob3B0KSA9PiBvcHQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gcHJldi50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcbiAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSB7XG4gICAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZVtwcmV2SW5kZXhdLnZhbHVlID0gdmFsdWUudHJpbSgpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBleGlzdCA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maW5kKChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBldmVudC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcbiAgICAgICAgaWYgKCFleGlzdCkge1xuICAgICAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZS5wdXNoKHsgdmFsdWU6IHZhbHVlLnRyaW0oKSwgY2hlY2tlZDogZmFsc2UgfSk7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcbiAgfVxuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XG4gICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZmVyQXJyYXlJdGVtKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsIGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG9uU2hvd0NhdGVnb3J5KCkge1xuICAgIHRoaXMuc2hvd1Byb2ZpbGVOYW1lID0gIXRoaXMuc2hvd1Byb2ZpbGVOYW1lO1xuICB9XG5cbiAgb25TZWxlY3RQaWN0byhlLCBwaWN0bykge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7IFBpY3RvOiBwaWN0byB9KTtcbiAgICB0aGlzLmlzUGljdG9MaXN0U2hvdyA9ICF0aGlzLmlzUGljdG9MaXN0U2hvdztcbiAgfVxuICBvblNob3dQaWN0b0xpc3QoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmlzUGljdG9MaXN0U2hvdyA9ICF0aGlzLmlzUGljdG9MaXN0U2hvdztcbiAgfVxuICBvbkNoYW5nZUxhYmVsKGV2ZW50OiBhbnksIC4uLnBhcmFtcykge1xuICAgIGNvbnN0IGFyciA9IGV2ZW50LmxhYmVsLnNwbGl0KFwiIFwiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyW2ldID0gYXJyW2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYXJyW2ldLnNsaWNlKDEpO1xuICAgIH1cbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xuICAgIGZvcm1zLmtleSA9IGFyci5qb2luKCcnKVxuXG4gIH1cbiAgb25DaGVja2VkQ2hpcChldmVudDogYW55LCAuLi5wYXJhbXMpIHtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xuICAgIGNvbnN0IGluZGV4ID0gZm9ybXMuZGVmYXVsdFZhbHVlLmZpbmRJbmRleCgoY2hpcCkgPT4gY2hpcC52YWx1ZSA9PT0gZXZlbnQudmFsdWUpXG4gICAgaWYgKGluZGV4ICE9PSAtMSAmJiBmb3Jtcy50eXBlID09PSAnY2hlY2tib3hfbXVsdGlwbGUnKSB7XG4gICAgICBmb3Jtcy5kZWZhdWx0VmFsdWVbaW5kZXhdLmNoZWNrZWQgPSAhZXZlbnQuY2hlY2tlZFxuICAgIH0gZWxzZSBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBmb3Jtcy5kZWZhdWx0VmFsdWUuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgdmFsdWUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZVtpbmRleF0uY2hlY2tlZCA9ICFldmVudC5jaGVja2VkXG4gICAgfVxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcbiAgfVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihVcGRhdGVQcm9maWxDb21wb25lbnQsIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWF0SWNvbkxpc3Q6IHRoaXMubWF0SWNvbkxpc3QsXG4gICAgICAgIGZvcm06IHRoaXMuZm9ybSxcbiAgICAgICAgdGFnczogdGhpcy50YWdzXG4gICAgICB9XG4gICAgfSk7XG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChjb25maXJtZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmIChjb25maXJtZWQpIHtcblxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25QYXNzSW5FZGl0TW9kZShpKSB7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgdGhpcy5lZGl0SW5kZXggPSBpO1xuICB9XG5cbiAgb25FZGl0KCkge1xuICAgIHRoaXMuZWRpdEluZGV4ID0gbnVsbDtcbiAgfVxuXG4gIG9uRWRpdENhdGVnb3J5TmFtZShpLCBuYW1lKSB7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgdGhpcy5jYXRlZ29yaWVzW2ldLm5hbWUgPSBuYW1lO1xuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcbiAgfVxuICBvbkFjcmVsaW5rKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgXG4gIGdldENvbmRpdGlvblZhbHVlcygpIHtcbiAgICBjb25zdCBjb25kaXRpb25zTGlzdCA9IFtdO1xuICAgIGNvbnN0IHR5cGU9KGZvcm1zKT0+Zm9ybXMudHlwZSA9PT0gJ3NlbGVjdCcgfHwgZm9ybXMudHlwZSA9PT0gJ2NoZWNrb2J4JyB8fCBmb3Jtcy50eXBlID09PSAnY2hlY2tib3hfbXVsdGlwbGUnIHx8IGZvcm1zLnR5cGUgPT09ICdyYWRpbydcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgZm9ybXMgPSB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXNbal07XG4gICAgICAgIGlmICh0eXBlKGZvcm1zKSkge1xuICAgICAgICAgIGNvbmRpdGlvbnNMaXN0LnB1c2goe1xuICAgICAgICAgICAgbGV2ZWw6IDEsXG4gICAgICAgICAgICBjYXRlZ29yeUluZGV4OiBpLFxuICAgICAgICAgICAgY3VycmVudEluZGV4OiBqLFxuICAgICAgICAgICAgcG9zc2libGVWYWx1ZXM6IGZvcm1zLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgIGxhYmVsOiBgJHt0aGlzLmNhdGVnb3JpZXNbaV0ubmFtZX0gPiAke2Zvcm1zLmxhYmVsfWBcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmKGZvcm1zLmZvcm1zKXtcbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGZvcm1zLmZvcm1zLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBjb25zdCBzdWI9Zm9ybXMuZm9ybXNba10gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICBpZihzdWIudHlwZT09PSdjaGVja2JveCcgfHwgc3ViLnR5cGU9PT0nc2VsZWN0JyB8fCBzdWIudHlwZT09PSdyYWRpbycgfHwgc3ViLnR5cGU9PT0nY2hlY2tib3hfbXVsdGlwbGUnKXsgICAgICAgICAgIFxuICAgICAgICAgICAgY29uZGl0aW9uc0xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgbGV2ZWw6MixcbiAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUluZGV4OmksXG4gICAgICAgICAgICAgICAgICAgZm9ybUluZGV4OmosXG4gICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4OmssXG4gICAgICAgICAgICAgICAgICAgcG9zc2libGVWYWx1ZXM6c3ViLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICBsYWJlbDpgJHt0aGlzLmNhdGVnb3JpZXNbaV0ubmFtZX0gPiAke2Zvcm1zLmxhYmVsfSA+ICR7c3ViLmxhYmVsfWBcbiAgICAgICAgICAgIH0pICAgICAgICAgIFxuICAgICAgICAgICB9ICBcbiAgICAgICAgICAgaWYoc3ViLmZvcm1zKXtcbiAgICAgICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgc3ViLmZvcm1zLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNoaWxkPXN1Yi5mb3Jtc1tsXVxuICAgICAgICAgICAgICBpZihjaGlsZC50eXBlPT09J2NoZWNrYm94JyB8fCBjaGlsZC50eXBlPT09J3NlbGVjdCcgfHwgY2hpbGQudHlwZT09PSdyYWRpbycgfHwgY2hpbGQudHlwZT09PSdjaGVja2JveF9tdWx0aXBsZScpeyAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uc0xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgIGxldmVsOjMsXG4gICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SW5kZXg6aSxcbiAgICAgICAgICAgICAgICAgICAgICAgZm9ybUluZGV4OmosXG4gICAgICAgICAgICAgICAgICAgICAgIHN1YkluZGV4OmwsXG4gICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleDprLFxuICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZVZhbHVlczpjaGlsZC5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOmAke3RoaXMuY2F0ZWdvcmllc1tpXS5uYW1lfSA+ICR7Zm9ybXMubGFiZWx9ID4gJHtzdWIubGFiZWx9ID4gICR7Y2hpbGQubGFiZWx9YFxuICAgICAgICAgICAgICAgIH0pICAgICAgICAgIFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIGNvbmRpdGlvbnNMaXN0KTtcbiAgICB0aGlzLmNvbmRpdGlvbkRhdGE9Y29uZGl0aW9uc0xpc3RcbiAgICBjb25zb2xlLmxvZyhjb25kaXRpb25zTGlzdCk7XG5cbiAgfVxufVxuIl19