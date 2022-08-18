import * as moment from 'moment';
import { CellsComponentList, CoreMatTable } from "ngx-table";
import { Component } from '@angular/core';
import { DialogCreateOnboardingComponent } from '../../components/onboarding/dialog-create-onboarding/dialog-create-onboarding.component';
import * as i0 from "@angular/core";
import * as i1 from "../../onboarding.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/material/card";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/tabs";
import * as i7 from "../../components/onboarding/onboarding-table/onboarding-table.component";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/icon";
function OnboardingListComponent_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" Toutes (", ctx_r1.onboardingList.data == null ? null : ctx_r1.onboardingList.data.length, ") ");
} }
function OnboardingListComponent_div_1_ng_template_7_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} }
function OnboardingListComponent_div_1_ng_template_7_lib_onboarding_table_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-onboarding-table", 13);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnDefinitions", ctx_r8.columnDefinitions)("data", ctx_r8.onboardingList)("lang", ctx_r8.lang)("inputSearch", ctx_r8.inputSearch);
} }
const _c0 = function () { return { "margin-bottom": "100vh" }; };
function OnboardingListComponent_div_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_7_div_0_Template, 1, 0, "div", 9);
    i0.ɵɵelement(1, "div", 10);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_7_lib_onboarding_table_3_Template, 1, 4, "lib-onboarding-table", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r2._loading_table || !ctx_r2.onboardingList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r2._loading_table && i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ticket-list", !ctx_r2._loading_table);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.onboardingList);
} }
function OnboardingListComponent_div_1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" Termin\u00E9es (", ctx_r3.onboardingFinished.data.length, ") ");
} }
function OnboardingListComponent_div_1_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} }
function OnboardingListComponent_div_1_ng_template_10_lib_onboarding_table_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-onboarding-table", 13);
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnDefinitions", ctx_r10.columnDefinitions)("data", ctx_r10.onboardingFinished)("lang", ctx_r10.lang)("inputSearch", ctx_r10.inputSearch);
} }
function OnboardingListComponent_div_1_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_10_div_0_Template, 1, 0, "div", 9);
    i0.ɵɵelement(1, "div", 10);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_10_lib_onboarding_table_3_Template, 1, 4, "lib-onboarding-table", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r4._loading_table || !ctx_r4.onboardingFinished);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r4._loading_table && i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ticket-list", !ctx_r4._loading_table);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.onboardingFinished);
} }
function OnboardingListComponent_div_1_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" A finaliser (", ctx_r5.onboardingToFinish.data.length, ") ");
} }
function OnboardingListComponent_div_1_ng_template_13_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} }
function OnboardingListComponent_div_1_ng_template_13_lib_onboarding_table_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-onboarding-table", 13);
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnDefinitions", ctx_r12.columnDefinitions)("data", ctx_r12.onboardingToFinish)("lang", ctx_r12.lang)("inputSearch", ctx_r12.inputSearch);
} }
function OnboardingListComponent_div_1_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_13_div_0_Template, 1, 0, "div", 9);
    i0.ɵɵelement(1, "div", 10);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_13_lib_onboarding_table_3_Template, 1, 4, "lib-onboarding-table", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r6._loading_table || !ctx_r6.onboardingToFinish);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r6._loading_table && i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ticket-list", !ctx_r6._loading_table);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.onboardingToFinish);
} }
function OnboardingListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-tab-group", 5);
    i0.ɵɵlistener("selectedIndexChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedIndexChange_4_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.index = $event; })("selectedTabChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedTabChange_4_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.triggerChange($event); });
    i0.ɵɵelementStart(5, "mat-tab");
    i0.ɵɵtemplate(6, OnboardingListComponent_div_1_ng_template_6_Template, 1, 1, "ng-template", 6);
    i0.ɵɵtemplate(7, OnboardingListComponent_div_1_ng_template_7_Template, 4, 6, "ng-template", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-tab");
    i0.ɵɵtemplate(9, OnboardingListComponent_div_1_ng_template_9_Template, 1, 1, "ng-template", 6);
    i0.ɵɵtemplate(10, OnboardingListComponent_div_1_ng_template_10_Template, 4, 6, "ng-template", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "mat-tab");
    i0.ɵɵtemplate(12, OnboardingListComponent_div_1_ng_template_12_Template, 1, 1, "ng-template", 6);
    i0.ɵɵtemplate(13, OnboardingListComponent_div_1_ng_template_13_Template, 4, 6, "ng-template", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "a", 8);
    i0.ɵɵlistener("click", function OnboardingListComponent_div_1_Template_a_click_14_listener() { i0.ɵɵrestoreView(_r14); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.openDialog(); });
    i0.ɵɵtext(15, " Nouvelle demande d\u2019int\u00E9gration ");
    i0.ɵɵelementStart(16, "mat-icon");
    i0.ɵɵtext(17, "add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Vous avez actuellement ", ctx_r0.currentLength, " Demandes");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@.disabled", true)("selectedIndex", ctx_r0.index);
} }
const _c1 = function () { return { "overflow-y": "hidden", "height": "100%", "display": "flex", "position": "absolute" }; };
export class OnboardingListComponent {
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
                subTitle: "date",
                value: 'Nom de famille',
                order: 1,
                class: 'u-7',
                addClass: 'lastNameClass',
                module: CellsComponentList.CustomCell,
                sort: true,
            },
            {
                key: 'Id',
                value: 'Position',
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
                key: 'creationDate',
                value: 'Date de création',
                order: 6,
                class: 'u-6',
                sort: true
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
            this.templates = data;
        });
    }
    cancelSearch() {
        this.inputSearch = '';
    }
    checkOnboardingPath() {
        return this.service.mainPath.includes('onboarding') ? `${this.service.mainPath}/requests/` : `/onboarding/requests/`;
    }
    async ngOnInit() {
        await this.service.getAllOnboarding();
        this.service.onboarding.subscribe((onboarding) => {
            setTimeout(() => {
                this._loading_table = false;
            }, 2000);
            if (onboarding) {
                let x = onboarding.map((row, index) => {
                    const user = row.categories.find((cat) => cat.name === "Utilisateur");
                    const formUser = user.forms.map((form) => ({ key: form.key, value: form.value })).reduce((a, v) => ({ ...a, [v.key]: v.value }), {});
                    row.Status = row.Finished ? "Terminée" : "A finaliser";
                    row.CustomClass = row.Finished ? "custom-status finished" : "custom-status to-finish";
                    row.lastNameClass = "last-name";
                    row.requestor = row?.vcontacts[0]?.Name || '';
                    row.Name = row.ContactName = formUser?.LastName + " " + formUser?.FirstName || "";
                    row.Title = formUser?.Title || "";
                    row.Email = formUser?.Email || '';
                    row.date = moment(row.createdAt).format('DD/MM/YY');
                    row.creationDate = moment(row.createdAt).format('DD/MM/YY');
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
}
OnboardingListComponent.ɵfac = function OnboardingListComponent_Factory(t) { return new (t || OnboardingListComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.MatDialog)); };
OnboardingListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 2, vars: 3, consts: [[1, "full-height", 2, "background", "#F4F7F9 0% 0% no-repeat padding-box", 3, "ngStyle"], ["class", "main-all-ticket-list onboarding-list-container", 4, "ngIf"], [1, "main-all-ticket-list", "onboarding-list-container"], [1, "content-view-list-ticket"], [1, "title-table", 2, "cursor", "default"], [1, "list-ticket-tab", 3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], ["mat-tab-label", ""], ["matTabContent", ""], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-onboarding", 3, "click"], ["class", "bt-spinner", 4, "ngIf"], [3, "ngStyle"], [3, "columnDefinitions", "data", "lang", "inputSearch", 4, "ngIf"], [1, "bt-spinner"], [3, "columnDefinitions", "data", "lang", "inputSearch"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵtemplate(1, OnboardingListComponent_div_1_Template, 18, 3, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", ctx._loading_table && i0.ɵɵpureFunction0(2, _c1));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.onboardingList);
    } }, directives: [i4.MatCard, i5.NgStyle, i5.NgIf, i6.MatTabGroup, i6.MatTab, i6.MatTabLabel, i6.MatTabContent, i7.OnboardingTableComponent, i8.MatAnchor, i9.MatIcon], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:98%}md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font: 700 13px/20px nexa;letter-spacing:0px;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0px;grid-row-gap:0px;max-width:1500px;margin-left:auto;margin-right:auto;width:100%;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font: 18px/20px Nexa Text;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;font: 17px/20px Nexa Text Bold;letter-spacing:0px;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;font: 700 32px/30px Nexa Text Bold;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;left:50%;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}  .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}  .mat-tab-header .mat-tab-label-active{background:transparent}  .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}  lib-onboarding-table{background-color:red!important}  lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container[_ngcontent-%COMP%]{position:relative}.onboarding-list-container[_ngcontent-%COMP%]   .title-table[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container[_ngcontent-%COMP%]   .add-onboarding[_ngcontent-%COMP%]{background:#171F26;box-shadow:0 0 #0003;border-radius:7px;position:absolute;right:48px;top:30px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:10px;cursor:pointer}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{ selector: 'lib-onboarding-list', template: "<mat-card [ngStyle]=\"_loading_table && {'overflow-y': 'hidden', 'height': '100%',\r\n'display': 'flex', 'position': 'absolute'}\" class=\"full-height\"\r\n    style=\"background: #F4F7F9 0% 0% no-repeat padding-box;\">\r\n    <div class=\"main-all-ticket-list onboarding-list-container\" *ngIf=\"onboardingList\">\r\n        <div class=\"content-view-list-ticket\">\r\n            <!-- <div class=\"list-title \">\r\n                <ul>\r\n                    <li style=\"cursor: default;\">Vous avez actuellement {{onboardingFormatList.length}} Demandes</li>\r\n                    <li [class]=\"currentFilter==='all' ? 'active' :''\" (click)=\"filterOnboarding('all')\"> Tous\r\n                        ({{onboardingFormatList.length}}) </li>\r\n                    <li [class]=\"currentFilter==='publish' ? 'active' :''\" (click)=\"filterOnboarding('publish')\">\r\n                        Termin\u00E9es ({{onboardingFormatList.length}}) </li>\r\n                    <li [class]=\"currentFilter==='draft' ? 'active' :''\" (click)=\"filterOnboarding('draft')\">\r\n                        A finaliser ({{0}}) </li>\r\n                </ul>\r\n               \r\n            </div> -->\r\n            <span class=\"title-table\" style=\"cursor: default;\">Vous avez actuellement {{currentLength}}\r\n                Demandes</span>\r\n            <mat-tab-group [@.disabled]=\"true\" class=\"list-ticket-tab\" [(selectedIndex)]=\"index\"\r\n                (selectedTabChange)=\"triggerChange($event)\">\r\n                <mat-tab>\r\n\r\n                    <ng-template mat-tab-label>\r\n                        Toutes ({{onboardingList.data?.length}})\r\n                    </ng-template>\r\n                    <ng-template matTabContent>\r\n                        <div *ngIf=\"_loading_table || !onboardingList\" class=\"bt-spinner\"></div>\r\n\r\n                        <div [ngStyle]=\"_loading_table && {'margin-bottom': '100vh'}\"></div>\r\n\r\n                        <div [class.ticket-list]=\"!_loading_table\">\r\n                            <lib-onboarding-table *ngIf=\"onboardingList\" [columnDefinitions]=\"columnDefinitions\"\r\n                                [data]=\"onboardingList\" [lang]=\"lang\" [inputSearch]=\"inputSearch\">\r\n                            </lib-onboarding-table>\r\n                        </div>\r\n                    </ng-template>\r\n                </mat-tab>\r\n                <mat-tab>\r\n                    <ng-template mat-tab-label>\r\n                        Termin\u00E9es ({{onboardingFinished.data.length}})\r\n                    </ng-template>\r\n                    <ng-template matTabContent>\r\n                        <div *ngIf=\"_loading_table || !onboardingFinished\" class=\"bt-spinner\"></div>\r\n\r\n                        <div [ngStyle]=\"_loading_table && {'margin-bottom': '100vh'}\"></div>\r\n\r\n                        <div [class.ticket-list]=\"!_loading_table\">\r\n                            <lib-onboarding-table *ngIf=\"onboardingFinished\" [columnDefinitions]=\"columnDefinitions\"\r\n                                [data]=\"onboardingFinished\" [lang]=\"lang\" [inputSearch]=\"inputSearch\">\r\n                            </lib-onboarding-table>\r\n                        </div>\r\n                    </ng-template>\r\n                </mat-tab>\r\n                <mat-tab>\r\n                    <ng-template mat-tab-label>\r\n                        A finaliser ({{onboardingToFinish.data.length}})\r\n                    </ng-template>\r\n                    <ng-template matTabContent>\r\n                        <div *ngIf=\"_loading_table || !onboardingToFinish\" class=\"bt-spinner\"></div>\r\n\r\n                        <div [ngStyle]=\"_loading_table && {'margin-bottom': '100vh'}\"></div>\r\n\r\n                        <div [class.ticket-list]=\"!_loading_table\">\r\n                            <lib-onboarding-table *ngIf=\"onboardingToFinish\" [columnDefinitions]=\"columnDefinitions\"\r\n                                [data]=\"onboardingToFinish\" [lang]=\"lang\" [inputSearch]=\"inputSearch\">\r\n                            </lib-onboarding-table>\r\n                        </div>\r\n                    </ng-template>\r\n                </mat-tab>\r\n            </mat-tab-group>\r\n            <a role=\"button\" class=\"add-onboarding\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">\r\n                Nouvelle demande d\u2019int\u00E9gration <mat-icon>add</mat-icon>\r\n            </a>\r\n            <!-- <lib-onboarding-table [_loading_table]=\"onboardingList\" [onboardingList]=\"onboardingList\"\r\n                [columnDefinitions]=\"columnDefinitions\" [lang]=\"lang\" [inputSearch]=\"inputSearch\">\r\n            </lib-onboarding-table> -->\r\n        </div>\r\n    </div>\r\n</mat-card>", styles: ["mat-card{display:block;width:98%}md-tooltip.tt-multiline ._md-content{height:auto}md-tooltip ._md-content{height:auto}table{width:100%}.element-detail .inline{display:table;width:90%}.element-detail .inline .block1{display:inline-table;float:left;width:50%;text-align:left}.element-detail .inline .block1 strong{font: 700 13px/20px nexa;letter-spacing:0px;color:#171f26}.element-detail .inline .block1 p,.element-detail .inline .block1 small{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list{display:block;grid-column-gap:0px;grid-row-gap:0px;max-width:1500px;margin-left:auto;margin-right:auto;width:100%;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list .component-title{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list .content-view-list-ticket{grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list .content-view-list-ticket table{width:100%}app-list-preview{width:100%}::ng-deep .mat-tab-label-active{background:#b6d1cd;opacity:1!important}.col-lg-6{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left{color:#171f26;font: 18px/20px Nexa Text;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count{color:#171f26;font: 17px/20px Nexa Text Bold;letter-spacing:0px;text-align:left}.page-title-container{display:flex;margin-right:48px}.page-title{text-align:left;font: 700 32px/30px Nexa Text Bold;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search{margin-left:auto;position:relative;width:400px}.page-search mat-icon{left:18%;margin-top:10px;position:absolute}.page-search img{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab{padding-left:48px;padding-right:48px}.detail-view-ticket{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search mat-icon{left:16%}}.ticket-list{animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.bt-spinner{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;left:50%;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active,.site-view-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active{background-image:none!important;color:#171f26!important}::ng-deep .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}::ng-deep .mat-tab-header .mat-tab-label-active{background:transparent}::ng-deep .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}::ng-deep lib-onboarding-table{background-color:red!important}::ng-deep lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container{position:relative}.onboarding-list-container .title-table{font-family:Nexa;font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container .add-onboarding{background:#171F26;box-shadow:0 0 #0003;border-radius:7px;position:absolute;right:48px;top:30px}.onboarding-list-container .list-title{font-family:Nexa;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.onboarding-list-container .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0}.onboarding-list-container .list-title ul li{margin-right:20px;padding-bottom:10px;cursor:pointer}.onboarding-list-container .list-title ul li.active{border-bottom:4px solid #3c4252}\n"] }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBR2pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQTZCLE1BQU0sV0FBVyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUZBQXlGLENBQUM7Ozs7Ozs7Ozs7OztJQ2tCbEgsWUFDSjs7O0lBREksdUhBQ0o7OztJQUVJLDBCQUF3RTs7O0lBS3BFLDJDQUV1Qjs7O0lBRnNCLDREQUF1QywrQkFBQSxxQkFBQSxtQ0FBQTs7OztJQUx4Riw0RkFBd0U7SUFFeEUsMEJBQW9FO0lBRXBFLDJCQUEyQztJQUN2QywrSEFFdUI7SUFDM0IsaUJBQU07OztJQVJBLHNFQUF1QztJQUV4QyxlQUF3RDtJQUF4RCw2RUFBd0Q7SUFFeEQsZUFBcUM7SUFBckMscURBQXFDO0lBQ2YsZUFBb0I7SUFBcEIsNENBQW9COzs7SUFRL0MsWUFDSjs7O0lBREksdUZBQ0o7OztJQUVJLDBCQUE0RTs7O0lBS3hFLDJDQUV1Qjs7O0lBRjBCLDZEQUF1QyxvQ0FBQSxzQkFBQSxvQ0FBQTs7O0lBTDVGLDZGQUE0RTtJQUU1RSwwQkFBb0U7SUFFcEUsMkJBQTJDO0lBQ3ZDLGdJQUV1QjtJQUMzQixpQkFBTTs7O0lBUkEsMEVBQTJDO0lB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Q1QsQ0FBQyxDQUFDO1FBQ0gsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQVksRUFBRSxFQUFFO1lBQ2pELElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLGFBQWEsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQTthQUNwRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OEZBbExVLHVCQUF1QjswRUFBdkIsdUJBQXVCO1FDZnBDLG1DQUU2RDtRQUN6RCx5RUEyRU07UUFDVixpQkFBVzs7UUEvRUQsMEVBQ2lDO1FBRXNCLGVBQW9CO1FBQXBCLHlDQUFvQjs7dUZEWXhFLHVCQUF1QjtjQUxuQyxTQUFTOzJCQUNFLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENlbGxzQ29tcG9uZW50TGlzdCwgQ29yZU1hdFRhYmxlLCBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlIH0gZnJvbSBcIm5neC10YWJsZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcvZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLW9uYm9hcmRpbmctbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBvbmJvYXJkaW5nTGlzdDogYW55XHJcbiAgaW5wdXRTZWFyY2ggPSAnJztcclxuICBjdXJyZW50TGVuZ3RoID0gMDtcclxuICBjdXJyZW50RmlsdGVyID0gJ2FsbCdcclxuICBwdWJsaWMgc2VhcmNoOiBzdHJpbmcgPSAnJztcclxuICBvbmJvYXJkaW5nRm9ybWF0TGlzdCA9IFtdXHJcbiAgb25ib2FyZGluZ0ZpbmlzaGVkOiBhbnlcclxuICBvbmJvYXJkaW5nVG9GaW5pc2g6IGFueVxyXG4gIHRlbXBsYXRlcyA9IFtdXHJcbiAgcHVibGljIGNvbHVtbkRlZmluaXRpb25zOiBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ05hbWUnLFxyXG4gICAgICBzdWJUaXRsZTogXCJkYXRlXCIsXHJcbiAgICAgIHZhbHVlOiAnTm9tIGRlIGZhbWlsbGUnLFxyXG4gICAgICBvcmRlcjogMSxcclxuICAgICAgY2xhc3M6ICd1LTcnLFxyXG4gICAgICBhZGRDbGFzczogJ2xhc3ROYW1lQ2xhc3MnLFxyXG4gICAgICBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5DdXN0b21DZWxsLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnSWQnLFxyXG4gICAgICB2YWx1ZTogJ1Bvc2l0aW9uJyxcclxuICAgICAgb3JkZXI6IDIsXHJcbiAgICAgIGNsYXNzOiAndS00JyxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgIH0sIHtcclxuICAgICAga2V5OiAnVGl0bGUnLFxyXG4gICAgICB2YWx1ZTogJ1Byb2ZpbCcsXHJcbiAgICAgIG9yZGVyOiAyLFxyXG4gICAgICBjbGFzczogJ3UtNCcsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LCB7XHJcbiAgICAgIGtleTogJ3JlcXVlc3RvcicsXHJcbiAgICAgIHZhbHVlOiAnRGVtYW5kZXVyJyxcclxuICAgICAgb3JkZXI6IDQsXHJcbiAgICAgIGNsYXNzOiAndS01JyxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgIH0sIHtcclxuICAgICAga2V5OiAnVGVtcGxhdGVOYW1lJyxcclxuICAgICAgdmFsdWU6ICdTZXJ2aWNlJyxcclxuICAgICAgb3JkZXI6IDUsXHJcbiAgICAgIGNsYXNzOiAndS01JyxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ2NyZWF0aW9uRGF0ZScsXHJcbiAgICAgIHZhbHVlOiAnRGF0ZSBkZSBjcsOpYXRpb24nLFxyXG4gICAgICBvcmRlcjogNixcclxuICAgICAgY2xhc3M6ICd1LTYnLFxyXG4gICAgICBzb3J0OiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICdTdGF0dXMnLFxyXG4gICAgICB2YWx1ZTogXCJTdGF0dXRcIixcclxuICAgICAgb3JkZXI6IDcsXHJcbiAgICAgIGFkZENsYXNzOiAnQ3VzdG9tQ2xhc3MnLFxyXG4gICAgICBjbGFzczogJ3UtNCcsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkN1c3RvbUNlbGwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICdBY3Rpb24nLFxyXG4gICAgICB2YWx1ZTogJycsXHJcbiAgICAgIG9yZGVyOiA4LFxyXG4gICAgICBjbGFzczogJ3UtNCcsXHJcbiAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkJ1dHRvbkxpbmssXHJcbiAgICAgIGRpc3BsYXk6IFwiRMOpdGFpbFwiLFxyXG4gICAgICBvdmVycmlkZTogW2Ake3RoaXMuY2hlY2tPbmJvYXJkaW5nUGF0aCgpfWAsICdUZW1wbGF0ZUlkJywgJ19pZCddLFxyXG4gICAgICBhbGlnbjogJ2NlbnRlcidcclxuICAgIH1cclxuXHJcbiAgXTtcclxuICBsb2NhbFNlcnZpY2U6IGFueTtcclxuICBwdWJsaWMgX2xvYWRpbmdfdGFibGUgPSB0cnVlO1xyXG4gIHByaXZhdGUgSGlkZGVuSW5kZXggPSAwO1xyXG4gIHB1YmxpYyBpbmRleCA9IDA7XHJcbiAgbGFuZyA9ICdmcic7XHJcblxyXG4gIGNhbmNlbFNlYXJjaCgpIHtcclxuICAgIHRoaXMuaW5wdXRTZWFyY2ggPSAnJztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2dcclxuICApIHtcclxuICAgIHRoaXMuc2VydmljZS5fdGVtcGxhdGVzLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLnRlbXBsYXRlcyA9IGRhdGE7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrT25ib2FyZGluZ1BhdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLm1haW5QYXRoLmluY2x1ZGVzKCdvbmJvYXJkaW5nJykgPyBgJHt0aGlzLnNlcnZpY2UubWFpblBhdGh9L3JlcXVlc3RzL2AgOiBgL29uYm9hcmRpbmcvcmVxdWVzdHMvYFxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsT25ib2FyZGluZygpO1xyXG4gICAgdGhpcy5zZXJ2aWNlLm9uYm9hcmRpbmcuc3Vic2NyaWJlKChvbmJvYXJkaW5nKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2xvYWRpbmdfdGFibGUgPSBmYWxzZTtcclxuICAgICAgfSwgMjAwMCk7XHJcblxyXG4gICAgICBpZiAob25ib2FyZGluZykge1xyXG4gICAgICAgIGxldCB4ID0gb25ib2FyZGluZy5tYXAoKHJvdywgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSByb3cuY2F0ZWdvcmllcy5maW5kKChjYXQpID0+IGNhdC5uYW1lID09PSBcIlV0aWxpc2F0ZXVyXCIpO1xyXG4gICAgICAgICAgY29uc3QgZm9ybVVzZXIgPSB1c2VyLmZvcm1zLm1hcCgoZm9ybSkgPT4gKHsga2V5OiBmb3JtLmtleSwgdmFsdWU6IGZvcm0udmFsdWUgfSkpLnJlZHVjZSgoYSwgdikgPT4gKHsgLi4uYSwgW3Yua2V5XTogdi52YWx1ZSB9KSwge30pXHJcbiAgICAgICAgICByb3cuU3RhdHVzID0gcm93LkZpbmlzaGVkID8gXCJUZXJtaW7DqWVcIiA6IFwiQSBmaW5hbGlzZXJcIjtcclxuICAgICAgICAgIHJvdy5DdXN0b21DbGFzcyA9IHJvdy5GaW5pc2hlZCA/IFwiY3VzdG9tLXN0YXR1cyBmaW5pc2hlZFwiIDogXCJjdXN0b20tc3RhdHVzIHRvLWZpbmlzaFwiO1xyXG4gICAgICAgICAgcm93Lmxhc3ROYW1lQ2xhc3MgPSBcImxhc3QtbmFtZVwiXHJcbiAgICAgICAgICByb3cucmVxdWVzdG9yID0gcm93Py52Y29udGFjdHNbMF0/Lk5hbWUgfHwgJyc7XHJcbiAgICAgICAgICByb3cuTmFtZSA9IHJvdy5Db250YWN0TmFtZSA9IGZvcm1Vc2VyPy5MYXN0TmFtZSArIFwiIFwiICsgZm9ybVVzZXI/LkZpcnN0TmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICByb3cuVGl0bGUgPSBmb3JtVXNlcj8uVGl0bGUgfHwgXCJcIlxyXG4gICAgICAgICAgcm93LkVtYWlsID0gZm9ybVVzZXI/LkVtYWlsIHx8ICcnO1xyXG4gICAgICAgICAgcm93LmRhdGUgPSBtb21lbnQocm93LmNyZWF0ZWRBdCkuZm9ybWF0KCdERC9NTS9ZWScpXHJcbiAgICAgICAgICByb3cuY3JlYXRpb25EYXRlID0gbW9tZW50KHJvdy5jcmVhdGVkQXQpLmZvcm1hdCgnREQvTU0vWVknKVxyXG4gICAgICAgICAgcm93LlRlbXBsYXRlTmFtZSA9IHJvdy52dGVtcGxhdGVzLmxlbmd0aCA+IDAgPyByb3cudnRlbXBsYXRlc1swXS5OYW1lIDogJyc7XHJcbiAgICAgICAgICByb3cuSWQgPSBpbmRleCArIDE7XHJcbiAgICAgICAgICByZXR1cm4gcm93O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nRm9ybWF0TGlzdCA9IHg7XHJcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nTGlzdCA9IG5ldyBDb3JlTWF0VGFibGUoeCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYWN0aXZlOiAnSWQnLCBkaXJlY3Rpb246ICdkZXNjJ1xyXG4gICAgICAgICAgfSwgeyBhY3RpdmU6ICcnLCB2YWx1ZVN0YXJ0OiBudWxsLCB2YWx1ZUVuZDogbnVsbCB9LCAxNSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGVuZ3RoID0gdGhpcy5vbmJvYXJkaW5nTGlzdC5kYXRhLmxlbmd0aFxyXG4gICAgICAgIHRoaXMub25ib2FyZGluZ0ZpbmlzaGVkID0gbmV3IENvcmVNYXRUYWJsZSh4LmZpbHRlcigoZGF0YSkgPT4gZGF0YS5GaW5pc2hlZCksXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogJ0lkJywgZGlyZWN0aW9uOiAnZGVzYydcclxuICAgICAgICAgIH0sIHsgYWN0aXZlOiAnJywgdmFsdWVTdGFydDogbnVsbCwgdmFsdWVFbmQ6IG51bGwgfSwgMTUsIHRydWUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMub25ib2FyZGluZ1RvRmluaXNoID0gbmV3IENvcmVNYXRUYWJsZSh4LmZpbHRlcigoZGF0YSkgPT4gIWRhdGEuRmluaXNoZWQpLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBhY3RpdmU6ICdJZCcsIGRpcmVjdGlvbjogJ2Rlc2MnXHJcbiAgICAgICAgICB9LCB7IGFjdGl2ZTogJycsIHZhbHVlU3RhcnQ6IG51bGwsIHZhbHVlRW5kOiBudWxsIH0sIDE1LCB0cnVlLCB0cnVlKTtcclxuXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyQ2hhbmdlKCRldmVudCkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLm9uYm9hcmRpbmdUb0ZpZmlzaFwiLCAkZXZlbnQpO1xyXG4gICAgaWYgKCRldmVudC5pbmRleCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRMZW5ndGggPSB0aGlzLm9uYm9hcmRpbmdMaXN0LmRhdGEubGVuZ3RoXHJcbiAgICB9IGVsc2UgaWYgKCRldmVudC5pbmRleCA9PT0gMSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRMZW5ndGggPSB0aGlzLm9uYm9hcmRpbmdGaW5pc2hlZC5kYXRhLmxlbmd0aFxyXG4gICAgfSBlbHNlIGlmICgkZXZlbnQuaW5kZXggPT09IDIpIHtcclxuICAgICAgdGhpcy5jdXJyZW50TGVuZ3RoID0gdGhpcy5vbmJvYXJkaW5nVG9GaW5pc2guZGF0YS5sZW5ndGhcclxuICAgIH1cclxuICAgIGlmICgkZXZlbnQuaW5kZXggIT09IHRoaXMuSGlkZGVuSW5kZXgpIHtcclxuICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5kZXggPSAkZXZlbnQuaW5kZXg7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxyXG4gICAgICAgIFtdLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXHJcbiAgICAgICAgICBxdWVyeVBhcmFtczogeyBwYWdlOiBudWxsLCB0YWI6ICRldmVudC5pbmRleCArIDEgfSxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcclxuICAgICAgICB9KTtcclxuICAgICAgdGhpcy5IaWRkZW5JbmRleCA9ICRldmVudC5pbmRleFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlbkRpYWxvZygpIHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7fVxyXG4gICAgfSk7XHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKGN1cnJlbnQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5jdXJyZW50T25ib2FyZGluZy5uZXh0KGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnNlcnZpY2UubWFpblBhdGggKyBgL3JlcXVlc3RzLyR7Y3VycmVudC5UZW1wbGF0ZUlkfS8wYF0pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8bWF0LWNhcmQgW25nU3R5bGVdPVwiX2xvYWRpbmdfdGFibGUgJiYgeydvdmVyZmxvdy15JzogJ2hpZGRlbicsICdoZWlnaHQnOiAnMTAwJScsXHJcbidkaXNwbGF5JzogJ2ZsZXgnLCAncG9zaXRpb24nOiAnYWJzb2x1dGUnfVwiIGNsYXNzPVwiZnVsbC1oZWlnaHRcIlxyXG4gICAgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjRjRGN0Y5IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWFsbC10aWNrZXQtbGlzdCBvbmJvYXJkaW5nLWxpc3QtY29udGFpbmVyXCIgKm5nSWY9XCJvbmJvYXJkaW5nTGlzdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXZpZXctbGlzdC10aWNrZXRcIj5cclxuICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwibGlzdC10aXRsZSBcIj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9XCJjdXJzb3I6IGRlZmF1bHQ7XCI+Vm91cyBhdmV6IGFjdHVlbGxlbWVudCB7e29uYm9hcmRpbmdGb3JtYXRMaXN0Lmxlbmd0aH19IERlbWFuZGVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgW2NsYXNzXT1cImN1cnJlbnRGaWx0ZXI9PT0nYWxsJyA/ICdhY3RpdmUnIDonJ1wiIChjbGljayk9XCJmaWx0ZXJPbmJvYXJkaW5nKCdhbGwnKVwiPiBUb3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh7e29uYm9hcmRpbmdGb3JtYXRMaXN0Lmxlbmd0aH19KSA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBbY2xhc3NdPVwiY3VycmVudEZpbHRlcj09PSdwdWJsaXNoJyA/ICdhY3RpdmUnIDonJ1wiIChjbGljayk9XCJmaWx0ZXJPbmJvYXJkaW5nKCdwdWJsaXNoJylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGVybWluw6llcyAoe3tvbmJvYXJkaW5nRm9ybWF0TGlzdC5sZW5ndGh9fSkgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgW2NsYXNzXT1cImN1cnJlbnRGaWx0ZXI9PT0nZHJhZnQnID8gJ2FjdGl2ZScgOicnXCIgKGNsaWNrKT1cImZpbHRlck9uYm9hcmRpbmcoJ2RyYWZ0JylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQSBmaW5hbGlzZXIgKHt7MH19KSA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZS10YWJsZVwiIHN0eWxlPVwiY3Vyc29yOiBkZWZhdWx0O1wiPlZvdXMgYXZleiBhY3R1ZWxsZW1lbnQge3tjdXJyZW50TGVuZ3RofX1cclxuICAgICAgICAgICAgICAgIERlbWFuZGVzPC9zcGFuPlxyXG4gICAgICAgICAgICA8bWF0LXRhYi1ncm91cCBbQC5kaXNhYmxlZF09XCJ0cnVlXCIgY2xhc3M9XCJsaXN0LXRpY2tldC10YWJcIiBbKHNlbGVjdGVkSW5kZXgpXT1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgIChzZWxlY3RlZFRhYkNoYW5nZSk9XCJ0cmlnZ2VyQ2hhbmdlKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtdGFiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0LXRhYi1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVG91dGVzICh7e29uYm9hcmRpbmdMaXN0LmRhdGE/Lmxlbmd0aH19KVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG1hdFRhYkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfbG9hZGluZ190YWJsZSB8fCAhb25ib2FyZGluZ0xpc3RcIiBjbGFzcz1cImJ0LXNwaW5uZXJcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW25nU3R5bGVdPVwiX2xvYWRpbmdfdGFibGUgJiYgeydtYXJnaW4tYm90dG9tJzogJzEwMHZoJ31cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzLnRpY2tldC1saXN0XT1cIiFfbG9hZGluZ190YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1vbmJvYXJkaW5nLXRhYmxlICpuZ0lmPVwib25ib2FyZGluZ0xpc3RcIiBbY29sdW1uRGVmaW5pdGlvbnNdPVwiY29sdW1uRGVmaW5pdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cIm9uYm9hcmRpbmdMaXN0XCIgW2xhbmddPVwibGFuZ1wiIFtpbnB1dFNlYXJjaF09XCJpbnB1dFNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItb25ib2FyZGluZy10YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXRhYj5cclxuICAgICAgICAgICAgICAgIDxtYXQtdGFiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXJtaW7DqWVzICh7e29uYm9hcmRpbmdGaW5pc2hlZC5kYXRhLmxlbmd0aH19KVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG1hdFRhYkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfbG9hZGluZ190YWJsZSB8fCAhb25ib2FyZGluZ0ZpbmlzaGVkXCIgY2xhc3M9XCJidC1zcGlubmVyXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtuZ1N0eWxlXT1cIl9sb2FkaW5nX3RhYmxlICYmIHsnbWFyZ2luLWJvdHRvbSc6ICcxMDB2aCd9XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy50aWNrZXQtbGlzdF09XCIhX2xvYWRpbmdfdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItb25ib2FyZGluZy10YWJsZSAqbmdJZj1cIm9uYm9hcmRpbmdGaW5pc2hlZFwiIFtjb2x1bW5EZWZpbml0aW9uc109XCJjb2x1bW5EZWZpbml0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwib25ib2FyZGluZ0ZpbmlzaGVkXCIgW2xhbmddPVwibGFuZ1wiIFtpbnB1dFNlYXJjaF09XCJpbnB1dFNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItb25ib2FyZGluZy10YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXRhYj5cclxuICAgICAgICAgICAgICAgIDxtYXQtdGFiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBIGZpbmFsaXNlciAoe3tvbmJvYXJkaW5nVG9GaW5pc2guZGF0YS5sZW5ndGh9fSlcclxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXRUYWJDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX2xvYWRpbmdfdGFibGUgfHwgIW9uYm9hcmRpbmdUb0ZpbmlzaFwiIGNsYXNzPVwiYnQtc3Bpbm5lclwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJfbG9hZGluZ190YWJsZSAmJiB7J21hcmdpbi1ib3R0b20nOiAnMTAwdmgnfVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3MudGlja2V0LWxpc3RdPVwiIV9sb2FkaW5nX3RhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLW9uYm9hcmRpbmctdGFibGUgKm5nSWY9XCJvbmJvYXJkaW5nVG9GaW5pc2hcIiBbY29sdW1uRGVmaW5pdGlvbnNdPVwiY29sdW1uRGVmaW5pdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cIm9uYm9hcmRpbmdUb0ZpbmlzaFwiIFtsYW5nXT1cImxhbmdcIiBbaW5wdXRTZWFyY2hdPVwiaW5wdXRTZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLW9uYm9hcmRpbmctdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L21hdC10YWI+XHJcbiAgICAgICAgICAgIDwvbWF0LXRhYi1ncm91cD5cclxuICAgICAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiIGNsYXNzPVwiYWRkLW9uYm9hcmRpbmdcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+XHJcbiAgICAgICAgICAgICAgICBOb3V2ZWxsZSBkZW1hbmRlIGTigJlpbnTDqWdyYXRpb24gPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPCEtLSA8bGliLW9uYm9hcmRpbmctdGFibGUgW19sb2FkaW5nX3RhYmxlXT1cIm9uYm9hcmRpbmdMaXN0XCIgW29uYm9hcmRpbmdMaXN0XT1cIm9uYm9hcmRpbmdMaXN0XCJcclxuICAgICAgICAgICAgICAgIFtjb2x1bW5EZWZpbml0aW9uc109XCJjb2x1bW5EZWZpbml0aW9uc1wiIFtsYW5nXT1cImxhbmdcIiBbaW5wdXRTZWFyY2hdPVwiaW5wdXRTZWFyY2hcIj5cclxuICAgICAgICAgICAgPC9saWItb25ib2FyZGluZy10YWJsZT4gLS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9tYXQtY2FyZD4iXX0=