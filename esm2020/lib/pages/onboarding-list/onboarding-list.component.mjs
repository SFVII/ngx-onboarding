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
                // subTitle: "date",
                value: 'Nom de famille',
                order: 1,
                class: 'u-7',
                // addClass: 'lastNameClass',
                // module: CellsComponentList.CustomCell,
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
                key: 'createdAt',
                value: 'Date de création',
                order: 6,
                class: 'u-6',
                module: CellsComponentList.DateFormat,
                sort: true
            },
            {
                key: 'Status',
                value: "Statut",
                order: 7,
                // addClass: 'CustomClass',
                class: 'u-4',
                sort: true,
                // module: CellsComponentList.CustomCell,
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
                    row.TemplateName = row.vtemplates.length > 0 ? row.vtemplates[0].Name : '';
                    row.Id = index + 1;
                    // row.mainPath = this.service.mainPath.includes('onboarding') ? `${this.service.mainPath}/requests/` : `/onboarding/requests/`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBR2pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQTZCLE1BQU0sV0FBVyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUZBQXlGLENBQUM7Ozs7Ozs7Ozs7OztJQ2tCbEgsWUFDSjs7O0lBREksdUhBQ0o7OztJQUVJLDBCQUF3RTs7O0lBS3BFLDJDQUV1Qjs7O0lBRnNCLDREQUF1QywrQkFBQSxxQkFBQSxtQ0FBQTs7OztJQUx4Riw0RkFBd0U7SUFFeEUsMEJBQW9FO0lBRXBFLDJCQUEyQztJQUN2QywrSEFFdUI7SUFDM0IsaUJBQU07OztJQVJBLHNFQUF1QztJQUV4QyxlQUF3RDtJQUF4RCw2RUFBd0Q7SUFFeEQsZUFBcUM7SUFBckMscURBQXFDO0lBQ2YsZUFBb0I7SUFBcEIsNENBQW9COzs7SUFRL0MsWUFDSjs7O0lBREksdUZBQ0o7OztJQUVJLDBCQUE0RTs7O0lBS3hFLDJDQUV1Qjs7O0lBRjBCLDZEQUF1QyxvQ0FBQSxzQkFBQSxvQ0FBQTs7O0lBTDVGLDZGQUE0RTtJQUU1RSwwQkFBb0U7SUFFcEUsMkJBQTJDO0lBQ3ZDLGdJQUV1QjtJQUMzQixpQkFBTTs7O0lBUkEsMEVBQTJDO0lB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SSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsYUFBYSxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFBO2FBQ3BGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs4RkFuTFUsdUJBQXVCOzBFQUF2Qix1QkFBdUI7UUNmcEMsbUNBRTZEO1FBQ3pELHlFQTJFTTtRQUNWLGlCQUFXOztRQS9FRCwwRUFDaUM7UUFFc0IsZUFBb0I7UUFBcEIseUNBQW9COzt1RkRZeEUsdUJBQXVCO2NBTG5DLFNBQVM7MkJBQ0UscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2VsbHNDb21wb25lbnRMaXN0LCBDb3JlTWF0VGFibGUsIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2UgfSBmcm9tIFwibmd4LXRhYmxlXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItb25ib2FyZGluZy1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG9uYm9hcmRpbmdMaXN0OiBhbnlcclxuICBpbnB1dFNlYXJjaCA9ICcnO1xyXG4gIGN1cnJlbnRMZW5ndGggPSAwO1xyXG4gIGN1cnJlbnRGaWx0ZXIgPSAnYWxsJ1xyXG4gIHB1YmxpYyBzZWFyY2g6IHN0cmluZyA9ICcnO1xyXG4gIG9uYm9hcmRpbmdGb3JtYXRMaXN0ID0gW11cclxuICBvbmJvYXJkaW5nRmluaXNoZWQ6IGFueVxyXG4gIG9uYm9hcmRpbmdUb0ZpbmlzaDogYW55XHJcbiAgdGVtcGxhdGVzID0gW11cclxuICBwdWJsaWMgY29sdW1uRGVmaW5pdGlvbnM6IGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VbXSA9IFtcclxuICAgIHtcclxuICAgICAga2V5OiAnTmFtZScsXHJcbiAgICAgIC8vIHN1YlRpdGxlOiBcImRhdGVcIixcclxuICAgICAgdmFsdWU6ICdOb20gZGUgZmFtaWxsZScsXHJcbiAgICAgIG9yZGVyOiAxLFxyXG4gICAgICBjbGFzczogJ3UtNycsXHJcbiAgICAgIC8vIGFkZENsYXNzOiAnbGFzdE5hbWVDbGFzcycsXHJcbiAgICAgIC8vIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkN1c3RvbUNlbGwsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICdJZCcsXHJcbiAgICAgIHZhbHVlOiAnUG9zaXRpb24nLFxyXG4gICAgICBvcmRlcjogMixcclxuICAgICAgY2xhc3M6ICd1LTQnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdUaXRsZScsXHJcbiAgICAgIHZhbHVlOiAnUHJvZmlsJyxcclxuICAgICAgb3JkZXI6IDIsXHJcbiAgICAgIGNsYXNzOiAndS00JyxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgIH0sIHtcclxuICAgICAga2V5OiAncmVxdWVzdG9yJyxcclxuICAgICAgdmFsdWU6ICdEZW1hbmRldXInLFxyXG4gICAgICBvcmRlcjogNCxcclxuICAgICAgY2xhc3M6ICd1LTUnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdUZW1wbGF0ZU5hbWUnLFxyXG4gICAgICB2YWx1ZTogJ1NlcnZpY2UnLFxyXG4gICAgICBvcmRlcjogNSxcclxuICAgICAgY2xhc3M6ICd1LTUnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnY3JlYXRlZEF0JyxcclxuICAgICAgdmFsdWU6ICdEYXRlIGRlIGNyw6lhdGlvbicsXHJcbiAgICAgIG9yZGVyOiA2LFxyXG4gICAgICBjbGFzczogJ3UtNicsXHJcbiAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkRhdGVGb3JtYXQsXHJcbiAgICAgIHNvcnQ6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ1N0YXR1cycsXHJcbiAgICAgIHZhbHVlOiBcIlN0YXR1dFwiLFxyXG4gICAgICBvcmRlcjogNyxcclxuICAgICAgLy8gYWRkQ2xhc3M6ICdDdXN0b21DbGFzcycsXHJcbiAgICAgIGNsYXNzOiAndS00JyxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgICAgLy8gbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuQ3VzdG9tQ2VsbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ0FjdGlvbicsXHJcbiAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgb3JkZXI6IDgsXHJcbiAgICAgIGNsYXNzOiAndS00JyxcclxuICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuQnV0dG9uTGluayxcclxuICAgICAgZGlzcGxheTogXCJEw6l0YWlsXCIsXHJcbiAgICAgIG92ZXJyaWRlOiBbYCR7dGhpcy5jaGVja09uYm9hcmRpbmdQYXRoKCl9YCwgJ1RlbXBsYXRlSWQnLCAnX2lkJ10sXHJcbiAgICAgIGFsaWduOiAnY2VudGVyJ1xyXG4gICAgfVxyXG5cclxuICBdO1xyXG4gIGxvY2FsU2VydmljZTogYW55O1xyXG4gIHB1YmxpYyBfbG9hZGluZ190YWJsZSA9IHRydWU7XHJcbiAgcHJpdmF0ZSBIaWRkZW5JbmRleCA9IDA7XHJcbiAgcHVibGljIGluZGV4ID0gMDtcclxuICBsYW5nID0gJ2ZyJztcclxuXHJcbiAgY2FuY2VsU2VhcmNoKCkge1xyXG4gICAgdGhpcy5pbnB1dFNlYXJjaCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZ1xyXG4gICkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLl90ZW1wbGF0ZXMuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMudGVtcGxhdGVzID0gZGF0YTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tPbmJvYXJkaW5nUGF0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNlcnZpY2UubWFpblBhdGguaW5jbHVkZXMoJ29uYm9hcmRpbmcnKSA/IGAke3RoaXMuc2VydmljZS5tYWluUGF0aH0vcmVxdWVzdHMvYCA6IGAvb25ib2FyZGluZy9yZXF1ZXN0cy9gXHJcbiAgfVxyXG5cclxuICBhc3luYyBuZ09uSW5pdCgpIHtcclxuICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxPbmJvYXJkaW5nKCk7XHJcbiAgICB0aGlzLnNlcnZpY2Uub25ib2FyZGluZy5zdWJzY3JpYmUoKG9uYm9hcmRpbmcpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IGZhbHNlO1xyXG4gICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICAgIGlmIChvbmJvYXJkaW5nKSB7XHJcbiAgICAgICAgbGV0IHggPSBvbmJvYXJkaW5nLm1hcCgocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdXNlciA9IHJvdy5jYXRlZ29yaWVzLmZpbmQoKGNhdCkgPT4gY2F0Lm5hbWUgPT09IFwiVXRpbGlzYXRldXJcIik7XHJcbiAgICAgICAgICBjb25zdCBmb3JtVXNlciA9IHVzZXIuZm9ybXMubWFwKChmb3JtKSA9PiAoeyBrZXk6IGZvcm0ua2V5LCB2YWx1ZTogZm9ybS52YWx1ZSB9KSkucmVkdWNlKChhLCB2KSA9PiAoeyAuLi5hLCBbdi5rZXldOiB2LnZhbHVlIH0pLCB7fSlcclxuICAgICAgICAgIHJvdy5TdGF0dXMgPSByb3cuRmluaXNoZWQgPyBcIlRlcm1pbsOpZVwiIDogXCJBIGZpbmFsaXNlclwiO1xyXG4gICAgICAgICAgcm93LkN1c3RvbUNsYXNzID0gcm93LkZpbmlzaGVkID8gXCJjdXN0b20tc3RhdHVzIGZpbmlzaGVkXCIgOiBcImN1c3RvbS1zdGF0dXMgdG8tZmluaXNoXCI7XHJcbiAgICAgICAgICByb3cubGFzdE5hbWVDbGFzcyA9IFwibGFzdC1uYW1lXCJcclxuICAgICAgICAgIHJvdy5yZXF1ZXN0b3IgPSByb3c/LnZjb250YWN0c1swXT8uTmFtZSB8fCAnJztcclxuICAgICAgICAgIHJvdy5OYW1lID0gcm93LkNvbnRhY3ROYW1lID0gZm9ybVVzZXI/Lkxhc3ROYW1lICsgXCIgXCIgKyBmb3JtVXNlcj8uRmlyc3ROYW1lIHx8IFwiXCJcclxuICAgICAgICAgIHJvdy5UaXRsZSA9IGZvcm1Vc2VyPy5UaXRsZSB8fCBcIlwiXHJcbiAgICAgICAgICByb3cuRW1haWwgPSBmb3JtVXNlcj8uRW1haWwgfHwgJyc7XHJcbiAgICAgICAgICByb3cuZGF0ZSA9IG1vbWVudChyb3cuY3JlYXRlZEF0KS5mb3JtYXQoJ0REL01NL1lZJylcclxuICAgICAgICAgIHJvdy5UZW1wbGF0ZU5hbWUgPSByb3cudnRlbXBsYXRlcy5sZW5ndGggPiAwID8gcm93LnZ0ZW1wbGF0ZXNbMF0uTmFtZSA6ICcnO1xyXG4gICAgICAgICAgcm93LklkID0gaW5kZXggKyAxO1xyXG4gICAgICAgICAgLy8gcm93Lm1haW5QYXRoID0gdGhpcy5zZXJ2aWNlLm1haW5QYXRoLmluY2x1ZGVzKCdvbmJvYXJkaW5nJykgPyBgJHt0aGlzLnNlcnZpY2UubWFpblBhdGh9L3JlcXVlc3RzL2AgOiBgL29uYm9hcmRpbmcvcmVxdWVzdHMvYFxyXG4gICAgICAgICAgcmV0dXJuIHJvdztcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMub25ib2FyZGluZ0Zvcm1hdExpc3QgPSB4O1xyXG4gICAgICAgIHRoaXMub25ib2FyZGluZ0xpc3QgPSBuZXcgQ29yZU1hdFRhYmxlKHgsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogJ0lkJywgZGlyZWN0aW9uOiAnZGVzYydcclxuICAgICAgICAgIH0sIHsgYWN0aXZlOiAnJywgdmFsdWVTdGFydDogbnVsbCwgdmFsdWVFbmQ6IG51bGwgfSwgMTUsIHRydWUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudExlbmd0aCA9IHRoaXMub25ib2FyZGluZ0xpc3QuZGF0YS5sZW5ndGhcclxuICAgICAgICB0aGlzLm9uYm9hcmRpbmdGaW5pc2hlZCA9IG5ldyBDb3JlTWF0VGFibGUoeC5maWx0ZXIoKGRhdGEpID0+IGRhdGEuRmluaXNoZWQpLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBhY3RpdmU6ICdJZCcsIGRpcmVjdGlvbjogJ2Rlc2MnXHJcbiAgICAgICAgICB9LCB7IGFjdGl2ZTogJycsIHZhbHVlU3RhcnQ6IG51bGwsIHZhbHVlRW5kOiBudWxsIH0sIDE1LCB0cnVlLCB0cnVlKTtcclxuICAgICAgICB0aGlzLm9uYm9hcmRpbmdUb0ZpbmlzaCA9IG5ldyBDb3JlTWF0VGFibGUoeC5maWx0ZXIoKGRhdGEpID0+ICFkYXRhLkZpbmlzaGVkKSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYWN0aXZlOiAnSWQnLCBkaXJlY3Rpb246ICdkZXNjJ1xyXG4gICAgICAgICAgfSwgeyBhY3RpdmU6ICcnLCB2YWx1ZVN0YXJ0OiBudWxsLCB2YWx1ZUVuZDogbnVsbCB9LCAxNSwgdHJ1ZSwgdHJ1ZSk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdHJpZ2dlckNoYW5nZSgkZXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcy5vbmJvYXJkaW5nVG9GaWZpc2hcIiwgJGV2ZW50KTtcclxuICAgIGlmICgkZXZlbnQuaW5kZXggPT09IDApIHtcclxuICAgICAgdGhpcy5jdXJyZW50TGVuZ3RoID0gdGhpcy5vbmJvYXJkaW5nTGlzdC5kYXRhLmxlbmd0aFxyXG4gICAgfSBlbHNlIGlmICgkZXZlbnQuaW5kZXggPT09IDEpIHtcclxuICAgICAgdGhpcy5jdXJyZW50TGVuZ3RoID0gdGhpcy5vbmJvYXJkaW5nRmluaXNoZWQuZGF0YS5sZW5ndGhcclxuICAgIH0gZWxzZSBpZiAoJGV2ZW50LmluZGV4ID09PSAyKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudExlbmd0aCA9IHRoaXMub25ib2FyZGluZ1RvRmluaXNoLmRhdGEubGVuZ3RoXHJcbiAgICB9XHJcbiAgICBpZiAoJGV2ZW50LmluZGV4ICE9PSB0aGlzLkhpZGRlbkluZGV4KSB7XHJcbiAgICAgIHRoaXMuX2xvYWRpbmdfdGFibGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluZGV4ID0gJGV2ZW50LmluZGV4O1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcclxuICAgICAgICBbXSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHsgcGFnZTogbnVsbCwgdGFiOiAkZXZlbnQuaW5kZXggKyAxIH0sXHJcbiAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHRoaXMuSGlkZGVuSW5kZXggPSAkZXZlbnQuaW5kZXhcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IGZhbHNlO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5EaWFsb2coKSB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0NyZWF0ZU9uYm9hcmRpbmdDb21wb25lbnQsIHtcclxuICAgICAgZGF0YToge31cclxuICAgIH0pO1xyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChjdXJyZW50OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UuY3VycmVudE9uYm9hcmRpbmcubmV4dChjdXJyZW50KTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5zZXJ2aWNlLm1haW5QYXRoICsgYC9yZXF1ZXN0cy8ke2N1cnJlbnQuVGVtcGxhdGVJZH0vMGBdKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPG1hdC1jYXJkIFtuZ1N0eWxlXT1cIl9sb2FkaW5nX3RhYmxlICYmIHsnb3ZlcmZsb3cteSc6ICdoaWRkZW4nLCAnaGVpZ2h0JzogJzEwMCUnLFxyXG4nZGlzcGxheSc6ICdmbGV4JywgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJ31cIiBjbGFzcz1cImZ1bGwtaGVpZ2h0XCJcclxuICAgIHN0eWxlPVwiYmFja2dyb3VuZDogI0Y0RjdGOSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1hbGwtdGlja2V0LWxpc3Qgb25ib2FyZGluZy1saXN0LWNvbnRhaW5lclwiICpuZ0lmPVwib25ib2FyZGluZ0xpc3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC12aWV3LWxpc3QtdGlja2V0XCI+XHJcbiAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImxpc3QtdGl0bGUgXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPVwiY3Vyc29yOiBkZWZhdWx0O1wiPlZvdXMgYXZleiBhY3R1ZWxsZW1lbnQge3tvbmJvYXJkaW5nRm9ybWF0TGlzdC5sZW5ndGh9fSBEZW1hbmRlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIFtjbGFzc109XCJjdXJyZW50RmlsdGVyPT09J2FsbCcgPyAnYWN0aXZlJyA6JydcIiAoY2xpY2spPVwiZmlsdGVyT25ib2FyZGluZygnYWxsJylcIj4gVG91c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoe3tvbmJvYXJkaW5nRm9ybWF0TGlzdC5sZW5ndGh9fSkgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgW2NsYXNzXT1cImN1cnJlbnRGaWx0ZXI9PT0ncHVibGlzaCcgPyAnYWN0aXZlJyA6JydcIiAoY2xpY2spPVwiZmlsdGVyT25ib2FyZGluZygncHVibGlzaCcpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRlcm1pbsOpZXMgKHt7b25ib2FyZGluZ0Zvcm1hdExpc3QubGVuZ3RofX0pIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIFtjbGFzc109XCJjdXJyZW50RmlsdGVyPT09J2RyYWZ0JyA/ICdhY3RpdmUnIDonJ1wiIChjbGljayk9XCJmaWx0ZXJPbmJvYXJkaW5nKCdkcmFmdCcpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEEgZmluYWxpc2VyICh7ezB9fSkgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4gLS0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGUtdGFibGVcIiBzdHlsZT1cImN1cnNvcjogZGVmYXVsdDtcIj5Wb3VzIGF2ZXogYWN0dWVsbGVtZW50IHt7Y3VycmVudExlbmd0aH19XHJcbiAgICAgICAgICAgICAgICBEZW1hbmRlczwvc3Bhbj5cclxuICAgICAgICAgICAgPG1hdC10YWItZ3JvdXAgW0AuZGlzYWJsZWRdPVwidHJ1ZVwiIGNsYXNzPVwibGlzdC10aWNrZXQtdGFiXCIgWyhzZWxlY3RlZEluZGV4KV09XCJpbmRleFwiXHJcbiAgICAgICAgICAgICAgICAoc2VsZWN0ZWRUYWJDaGFuZ2UpPVwidHJpZ2dlckNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXRhYj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG1hdC10YWItbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvdXRlcyAoe3tvbmJvYXJkaW5nTGlzdC5kYXRhPy5sZW5ndGh9fSlcclxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXRUYWJDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX2xvYWRpbmdfdGFibGUgfHwgIW9uYm9hcmRpbmdMaXN0XCIgY2xhc3M9XCJidC1zcGlubmVyXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtuZ1N0eWxlXT1cIl9sb2FkaW5nX3RhYmxlICYmIHsnbWFyZ2luLWJvdHRvbSc6ICcxMDB2aCd9XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy50aWNrZXQtbGlzdF09XCIhX2xvYWRpbmdfdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItb25ib2FyZGluZy10YWJsZSAqbmdJZj1cIm9uYm9hcmRpbmdMaXN0XCIgW2NvbHVtbkRlZmluaXRpb25zXT1cImNvbHVtbkRlZmluaXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJvbmJvYXJkaW5nTGlzdFwiIFtsYW5nXT1cImxhbmdcIiBbaW5wdXRTZWFyY2hdPVwiaW5wdXRTZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLW9uYm9hcmRpbmctdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L21hdC10YWI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXRhYj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0LXRhYi1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGVybWluw6llcyAoe3tvbmJvYXJkaW5nRmluaXNoZWQuZGF0YS5sZW5ndGh9fSlcclxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXRUYWJDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX2xvYWRpbmdfdGFibGUgfHwgIW9uYm9hcmRpbmdGaW5pc2hlZFwiIGNsYXNzPVwiYnQtc3Bpbm5lclwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJfbG9hZGluZ190YWJsZSAmJiB7J21hcmdpbi1ib3R0b20nOiAnMTAwdmgnfVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3MudGlja2V0LWxpc3RdPVwiIV9sb2FkaW5nX3RhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLW9uYm9hcmRpbmctdGFibGUgKm5nSWY9XCJvbmJvYXJkaW5nRmluaXNoZWRcIiBbY29sdW1uRGVmaW5pdGlvbnNdPVwiY29sdW1uRGVmaW5pdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cIm9uYm9hcmRpbmdGaW5pc2hlZFwiIFtsYW5nXT1cImxhbmdcIiBbaW5wdXRTZWFyY2hdPVwiaW5wdXRTZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLW9uYm9hcmRpbmctdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L21hdC10YWI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXRhYj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0LXRhYi1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQSBmaW5hbGlzZXIgKHt7b25ib2FyZGluZ1RvRmluaXNoLmRhdGEubGVuZ3RofX0pXHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0VGFiQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIl9sb2FkaW5nX3RhYmxlIHx8ICFvbmJvYXJkaW5nVG9GaW5pc2hcIiBjbGFzcz1cImJ0LXNwaW5uZXJcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW25nU3R5bGVdPVwiX2xvYWRpbmdfdGFibGUgJiYgeydtYXJnaW4tYm90dG9tJzogJzEwMHZoJ31cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzLnRpY2tldC1saXN0XT1cIiFfbG9hZGluZ190YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1vbmJvYXJkaW5nLXRhYmxlICpuZ0lmPVwib25ib2FyZGluZ1RvRmluaXNoXCIgW2NvbHVtbkRlZmluaXRpb25zXT1cImNvbHVtbkRlZmluaXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJvbmJvYXJkaW5nVG9GaW5pc2hcIiBbbGFuZ109XCJsYW5nXCIgW2lucHV0U2VhcmNoXT1cImlucHV0U2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1vbmJvYXJkaW5nLXRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtdGFiPlxyXG4gICAgICAgICAgICA8L21hdC10YWItZ3JvdXA+XHJcbiAgICAgICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImFkZC1vbmJvYXJkaW5nXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPlxyXG4gICAgICAgICAgICAgICAgTm91dmVsbGUgZGVtYW5kZSBk4oCZaW50w6lncmF0aW9uIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwhLS0gPGxpYi1vbmJvYXJkaW5nLXRhYmxlIFtfbG9hZGluZ190YWJsZV09XCJvbmJvYXJkaW5nTGlzdFwiIFtvbmJvYXJkaW5nTGlzdF09XCJvbmJvYXJkaW5nTGlzdFwiXHJcbiAgICAgICAgICAgICAgICBbY29sdW1uRGVmaW5pdGlvbnNdPVwiY29sdW1uRGVmaW5pdGlvbnNcIiBbbGFuZ109XCJsYW5nXCIgW2lucHV0U2VhcmNoXT1cImlucHV0U2VhcmNoXCI+XHJcbiAgICAgICAgICAgIDwvbGliLW9uYm9hcmRpbmctdGFibGU+IC0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvbWF0LWNhcmQ+Il19