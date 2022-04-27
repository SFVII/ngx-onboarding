import { __awaiter } from "tslib";
import { CellsComponentList, CoreMatTable } from "table";
import { Component } from '@angular/core';
import { DialogCreateOnboardingComponent } from '../../components/onboarding/dialog-create-onboarding/dialog-create-onboarding.component';
import * as i0 from "@angular/core";
import * as i1 from "../../onboarding.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/material/card";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/tabs";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/icon";
import * as i9 from "../../components/onboarding/onboarding-table/onboarding-table.component";
function OnboardingListComponent_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r422 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" Tous (", ctx_r422.onboardingList.data == null ? null : ctx_r422.onboardingList.data.length, ") ");
} }
function OnboardingListComponent_div_1_ng_template_7_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} }
function OnboardingListComponent_div_1_ng_template_7_lib_onboarding_table_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-onboarding-table", 13);
} if (rf & 2) {
    const ctx_r429 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnDefinitions", ctx_r429.columnDefinitions)("data", ctx_r429.onboardingList)("lang", ctx_r429.lang)("inputSearch", ctx_r429.inputSearch);
} }
const _c0 = function () { return { "margin-bottom": "100vh" }; };
function OnboardingListComponent_div_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_7_div_0_Template, 1, 0, "div", 9);
    i0.ɵɵelement(1, "div", 10);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_7_lib_onboarding_table_3_Template, 1, 4, "lib-onboarding-table", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r423 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r423._loading_table || !ctx_r423.onboardingList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r423._loading_table && i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ticket-list", !ctx_r423._loading_table);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r423.onboardingList);
} }
function OnboardingListComponent_div_1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r424 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" Termin\u00E9es (", ctx_r424.onboardingFinished.data.length, ") ");
} }
function OnboardingListComponent_div_1_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} }
function OnboardingListComponent_div_1_ng_template_10_lib_onboarding_table_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-onboarding-table", 13);
} if (rf & 2) {
    const ctx_r431 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnDefinitions", ctx_r431.columnDefinitions)("data", ctx_r431.onboardingFinished)("lang", ctx_r431.lang)("inputSearch", ctx_r431.inputSearch);
} }
function OnboardingListComponent_div_1_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_10_div_0_Template, 1, 0, "div", 9);
    i0.ɵɵelement(1, "div", 10);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_10_lib_onboarding_table_3_Template, 1, 4, "lib-onboarding-table", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r425 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r425._loading_table || !ctx_r425.onboardingFinished);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r425._loading_table && i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ticket-list", !ctx_r425._loading_table);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r425.onboardingFinished);
} }
function OnboardingListComponent_div_1_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r426 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" A finaliser (", ctx_r426.onboardingToFinish.data.length, ") ");
} }
function OnboardingListComponent_div_1_ng_template_13_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} }
function OnboardingListComponent_div_1_ng_template_13_lib_onboarding_table_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-onboarding-table", 13);
} if (rf & 2) {
    const ctx_r433 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnDefinitions", ctx_r433.columnDefinitions)("data", ctx_r433.onboardingToFinish)("lang", ctx_r433.lang)("inputSearch", ctx_r433.inputSearch);
} }
function OnboardingListComponent_div_1_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_13_div_0_Template, 1, 0, "div", 9);
    i0.ɵɵelement(1, "div", 10);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_13_lib_onboarding_table_3_Template, 1, 4, "lib-onboarding-table", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r427 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r427._loading_table || !ctx_r427.onboardingToFinish);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r427._loading_table && i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ticket-list", !ctx_r427._loading_table);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r427.onboardingToFinish);
} }
function OnboardingListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r435 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "span", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-tab-group", 5);
    i0.ɵɵlistener("selectedIndexChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedIndexChange_4_listener($event) { i0.ɵɵrestoreView(_r435); const ctx_r434 = i0.ɵɵnextContext(); return ctx_r434.index = $event; })("selectedTabChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedTabChange_4_listener($event) { i0.ɵɵrestoreView(_r435); const ctx_r436 = i0.ɵɵnextContext(); return ctx_r436.triggerChange($event); });
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
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "a", 8);
    i0.ɵɵlistener("click", function OnboardingListComponent_div_1_Template_a_click_14_listener() { i0.ɵɵrestoreView(_r435); const ctx_r437 = i0.ɵɵnextContext(); return ctx_r437.openDialog(); });
    i0.ɵɵtext(15, " Nouvelle demande d\u2019int\u00E9gration ");
    i0.ɵɵelementStart(16, "mat-icon");
    i0.ɵɵtext(17, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r421 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Vous avez actuellement ", ctx_r421.currentLength, " Demandes");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@.disabled", true)("selectedIndex", ctx_r421.index);
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
                // await this.service.getAllProfil();
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
            data: {}
        });
        dialogRef.afterClosed().subscribe((current) => {
            if (current) {
                this.service.currentOnboarding.next(current);
                this.router.navigate([this.service.mainPath + `/request/${current.TemplateId}/0`]);
            }
        });
    }
}
OnboardingListComponent.ɵfac = function OnboardingListComponent_Factory(t) { return new (t || OnboardingListComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.MatDialog)); };
OnboardingListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 2, vars: 3, consts: [[1, "full-height", 2, "background", "#F4F7F9 0% 0% no-repeat padding-box", 3, "ngStyle"], ["class", "main-all-ticket-list onboarding-list-container", 4, "ngIf"], [1, "main-all-ticket-list", "onboarding-list-container"], [1, "content-view-list-ticket"], [1, "title-table", 2, "cursor", "default"], [1, "list-ticket-tab", 3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], ["mat-tab-label", ""], ["matTabContent", ""], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-onboarding", 3, "click"], ["class", "bt-spinner", 4, "ngIf"], [3, "ngStyle"], [3, "columnDefinitions", "data", "lang", "inputSearch", 4, "ngIf"], [1, "bt-spinner"], [3, "columnDefinitions", "data", "lang", "inputSearch"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵtemplate(1, OnboardingListComponent_div_1_Template, 18, 3, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", ctx._loading_table && i0.ɵɵpureFunction0(2, _c1));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.onboardingList);
    } }, directives: [i4.MatCard, i5.NgStyle, i5.NgIf, i6.MatTabGroup, i6.MatTab, i6.MatTabLabel, i6.MatTabContent, i7.MatAnchor, i8.MatIcon, i9.OnboardingTableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:98%}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%], md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font:bold 13px/20px nexa;letter-spacing:0;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0;grid-row-gap:0;max-width:1500px;margin-left:auto;margin-right:auto;width:100%;animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{-ms-grid-row:2;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@-webkit-keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){-webkit-animation:1.25s linear infinite three-quarters-loader;animation:1.25s linear infinite three-quarters-loader;border:4px solid #4285f4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}@-webkit-keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font:18px/20px \"Nexa Text\";letter-spacing:0;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;font:17px/20px \"Nexa Text Bold\";letter-spacing:0;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px \"Nexa Text Bold\";letter-spacing:0;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width:1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03a9f4;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin;position:relative;left:50%;top:25vh}@-webkit-keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}  .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none}  .mat-tab-header .mat-tab-label-active{background:0 0}  .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}.onboarding-list-container[_ngcontent-%COMP%]{position:relative}.onboarding-list-container[_ngcontent-%COMP%]   .title-table[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container[_ngcontent-%COMP%]   .add-onboarding[_ngcontent-%COMP%]{background:#171f26;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px;position:absolute;right:48px;top:30px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:10px;cursor:pointer}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-onboarding-list',
                templateUrl: './onboarding-list.component.html',
                styleUrls: ['./onboarding-list.component.scss']
            }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFlBQVksRUFBNkIsTUFBTSxPQUFPLENBQUM7QUFDcEYsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx5RkFBeUYsQ0FBQzs7Ozs7Ozs7Ozs7O0lDb0JsSCxZQUNKOzs7SUFESSx5SEFDSjs7O0lBRUksMEJBQXdFOzs7SUFLcEUsMkNBRXVCOzs7SUFGc0IsOERBQXVDLGlDQUFBLHVCQUFBLHFDQUFBOzs7O0lBTHhGLDRGQUFrRTtJQUVsRSwwQkFBb0U7SUFFcEUsMkJBQ0k7SUFBQSwrSEFFQTtJQUNKLGlCQUFNOzs7SUFSRCwwRUFBeUM7SUFFekMsZUFBd0Q7SUFBeEQsK0VBQXdEO0lBRXhELGVBQXFDO0lBQXJDLHVEQUFxQztJQUNoQixlQUFzQjtJQUF0Qiw4Q0FBc0I7OztJQVFoRCxZQUNKOzs7SUFESSx5RkFDSjs7O0lBRUksMEJBQTRFOzs7SUFLeEUsMkNBRXVCOzs7SUFGMEIsOERBQXVDLHFDQUFBLHVCQUFBLHFDQUFBOzs7SUFMNUYsNkZBQXNFO0lBRXRFLDBCQUFvRTtJQUVwRSwyQkFDSTtJQUFBLGdJQUVBO0lBQ0osaUJBQU07OztJQVJELDhFQUE2QztJQUU3QyxlQUF3RDtJQUF4RCwrRUFBd0Q7SUFFeEQsZUFBcUM7SUFBckMsdURBQXFDO0lBQ2hCLGVBQTBCO0lBQTFCLGtEQUEwQjs7O0lBUXBELFlBQ0o7OztJQURJLHNGQUNKOzs7SUFFSSwwQkFB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Q2xELG1CQUFtQixFQUFFLE9BQU87YUFDN0IsQ0FBQyxDQUFDO1lBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO1lBQy9CLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDOUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1Y7SUFDSCxDQUFDO0lBRUQsVUFBVTtRQUNSLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFO1lBQ2xFLElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FBQyxDQUFDO1FBQ0gsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQVksRUFBRSxFQUFFO1lBQ2pELElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLFlBQVksT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQTthQUNuRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OEZBMUtVLHVCQUF1Qjs0REFBdkIsdUJBQXVCO1FDYnBDLG1DQUdJO1FBQUEseUVBQ0k7UUEyRVIsaUJBQVc7O1FBL0VELDBFQUNpQztRQUVxQixlQUFzQjtRQUF0Qix5Q0FBc0I7O2tERFV6RSx1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENlbGxzQ29tcG9uZW50TGlzdCwgQ29yZU1hdFRhYmxlLCBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlIH0gZnJvbSBcInRhYmxlXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItb25ib2FyZGluZy1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG9uYm9hcmRpbmdMaXN0OiBhbnlcclxuICBpbnB1dFNlYXJjaCA9ICcnO1xyXG4gIGN1cnJlbnRMZW5ndGggPSAwO1xyXG4gIGN1cnJlbnRGaWx0ZXIgPSAnYWxsJ1xyXG4gIHB1YmxpYyBzZWFyY2g6IHN0cmluZyA9ICcnO1xyXG4gIG9uYm9hcmRpbmdGb3JtYXRMaXN0ID0gW11cclxuICBvbmJvYXJkaW5nRmluaXNoZWQ6IGFueVxyXG4gIG9uYm9hcmRpbmdUb0ZpbmlzaDogYW55XHJcbiAgdGVtcGxhdGVzID0gW11cclxuICBwdWJsaWMgY29sdW1uRGVmaW5pdGlvbnM6IGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VbXSA9IFtcclxuICAgIHtcclxuICAgICAga2V5OiAnTmFtZScsXHJcbiAgICAgIHZhbHVlOiAnTmFtZScsXHJcbiAgICAgIG9yZGVyOiAxLFxyXG4gICAgICBjbGFzczogJ3UtMScsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICdJZCcsXHJcbiAgICAgIHZhbHVlOiAnSWQnLFxyXG4gICAgICBvcmRlcjogMixcclxuICAgICAgY2xhc3M6ICd1LTInLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdyZXF1ZXN0b3InLFxyXG4gICAgICB2YWx1ZTogJ0RlbWFuZGV1cicsXHJcbiAgICAgIG9yZGVyOiAzLFxyXG4gICAgICBjbGFzczogJ3UtMycsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LCB7XHJcbiAgICAgIGtleTogJ1RlbXBsYXRlTmFtZScsXHJcbiAgICAgIHZhbHVlOiAnU2VydmljZScsXHJcbiAgICAgIG9yZGVyOiA0LFxyXG4gICAgICBjbGFzczogJ3UtNCcsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICdjcmVhdGVkQXQnLFxyXG4gICAgICB2YWx1ZTogJ0RhdGUgZGUgY3LDqWF0aW9uJyxcclxuICAgICAgb3JkZXI6IDUsXHJcbiAgICAgIGNsYXNzOiAndS01JyxcclxuICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuRGF0ZUZvcm1hdCxcclxuICAgICAgc29ydDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAga2V5OiAnQ29udGFjdE5hbWUnLFxyXG4gICAgLy8gICB2YWx1ZTogJ0NvbnRhY3QnLFxyXG4gICAgLy8gICBvcmRlcjogNixcclxuICAgIC8vICAgY2xhc3M6ICd1LTYnLFxyXG4gICAgLy8gICBzb3J0OiB0cnVlLFxyXG4gICAgLy8gICBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5OYW1lQXZhdGFyLFxyXG4gICAgLy8gICBvdmVycmlkZTogWydDb250YWN0TmFtZScsICdFbWFpbCddLFxyXG4gICAgLy8gfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnU3RhdHVzJyxcclxuICAgICAgdmFsdWU6IFwiU3RhdHVzXCIsXHJcbiAgICAgIG9yZGVyOiA2LFxyXG4gICAgICBjbGFzczogJ3UtNicsXHJcbiAgICAgIHNvcnQ6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ0FjdGlvbicsXHJcbiAgICAgIHZhbHVlOiAnQWN0aW9uJyxcclxuICAgICAgb3JkZXI6IDcsXHJcbiAgICAgIGNsYXNzOiAndS03JyxcclxuICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuQnV0dG9uTGlua1RleHQsXHJcbiAgICAgIG92ZXJyaWRlOiBbYC8ke3RoaXMuc2VydmljZS5tYWluUGF0aH0vcmVxdWVzdGAsICdUZW1wbGF0ZUlkJywgJ19pZCddLFxyXG4gICAgICBhbGlnbjogJ2NlbnRlcidcclxuICAgIH1cclxuXHJcbiAgXTtcclxuICBsb2NhbFNlcnZpY2U6IGFueTtcclxuICBwdWJsaWMgX2xvYWRpbmdfdGFibGUgPSB0cnVlO1xyXG4gIHByaXZhdGUgSGlkZGVuSW5kZXggPSAwO1xyXG4gIHB1YmxpYyBpbmRleCA9IDA7XHJcbiAgbGFuZyA9ICdmcic7XHJcblxyXG4gIGNhbmNlbFNlYXJjaCgpIHtcclxuICAgIHRoaXMuaW5wdXRTZWFyY2ggPSAnJztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2dcclxuICApIHtcclxuICAgIHRoaXMuc2VydmljZS5fdGVtcGxhdGVzLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLnRlbXBsYXRlcyA9IGRhdGE7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCkge1xyXG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxPbmJvYXJkaW5nKCk7XHJcbiAgICAgIC8vIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgICB0aGlzLnNlcnZpY2Uub25ib2FyZGluZy5zdWJzY3JpYmUoKG9uYm9hcmRpbmcpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IGZhbHNlO1xyXG4gICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICAgIGlmIChvbmJvYXJkaW5nKSB7XHJcbiAgICAgICAgbGV0IHggPSBvbmJvYXJkaW5nLm1hcCgocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdXNlciA9IHJvdy5jYXRlZ29yaWVzLmZpbmQoKGNhdCkgPT4gY2F0Lm5hbWUgPT09IFwiVXRpbGlzYXRldXJcIik7XHJcbiAgICAgICAgICBjb25zdCBmb3JtVXNlciA9IHVzZXIuZm9ybXMubWFwKChmb3JtKSA9PiAoeyBrZXk6IGZvcm0ua2V5LCB2YWx1ZTogZm9ybS52YWx1ZSB9KSkucmVkdWNlKChhLCB2KSA9PiAoeyAuLi5hLCBbdi5rZXldOiB2LnZhbHVlIH0pLCB7fSlcclxuICAgICAgICAgIHJvdy5TdGF0dXMgPSByb3cuRmluaXNoZWQgPyBcIlRlcm1pbmVyXCIgOiBcIkEgZmluYWxpc2VyXCI7XHJcbiAgICAgICAgICByb3cucmVxdWVzdG9yID0gcm93Py52Y29udGFjdHNbMF0/Lk5hbWUgfHwgJyc7XHJcbiAgICAgICAgICByb3cuTmFtZSA9IHJvdy5Db250YWN0TmFtZSA9IGZvcm1Vc2VyPy5MYXN0TmFtZSArIFwiIFwiICsgZm9ybVVzZXI/LkZpcnN0TmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICByb3cuUHJvZmlsID0gZm9ybVVzZXI/LlR5cGVfZGVfcHJvZmlsX05vd2JvYXJkX19jIHx8IFwiXCJcclxuICAgICAgICAgIHJvdy5FbWFpbCA9IGZvcm1Vc2VyPy5FbWFpbCB8fCAnJztcclxuICAgICAgICAgIHJvdy5UZW1wbGF0ZU5hbWUgPSByb3cudnRlbXBsYXRlcy5sZW5ndGggPiAwID8gcm93LnZ0ZW1wbGF0ZXNbMF0uTmFtZSA6ICcnO1xyXG4gICAgICAgICAgcm93LklkID0gaW5kZXggKyAxO1xyXG4gICAgICAgICAgcmV0dXJuIHJvdztcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMub25ib2FyZGluZ0Zvcm1hdExpc3QgPSB4O1xyXG4gICAgICAgIHRoaXMub25ib2FyZGluZ0xpc3QgPSBuZXcgQ29yZU1hdFRhYmxlKHgsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogJ0lkJywgZGlyZWN0aW9uOiAnZGVzYydcclxuICAgICAgICAgIH0sIHsgYWN0aXZlOiAnJywgdmFsdWVTdGFydDogbnVsbCwgdmFsdWVFbmQ6IG51bGwgfSwgMTUsIHRydWUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudExlbmd0aCA9IHRoaXMub25ib2FyZGluZ0xpc3QuZGF0YS5sZW5ndGhcclxuICAgICAgICB0aGlzLm9uYm9hcmRpbmdGaW5pc2hlZCA9IG5ldyBDb3JlTWF0VGFibGUoeC5maWx0ZXIoKGRhdGEpID0+IGRhdGEuRmluaXNoZWQpLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBhY3RpdmU6ICdJZCcsIGRpcmVjdGlvbjogJ2Rlc2MnXHJcbiAgICAgICAgICB9LCB7IGFjdGl2ZTogJycsIHZhbHVlU3RhcnQ6IG51bGwsIHZhbHVlRW5kOiBudWxsIH0sIDE1LCB0cnVlLCB0cnVlKTtcclxuICAgICAgICB0aGlzLm9uYm9hcmRpbmdUb0ZpbmlzaCA9IG5ldyBDb3JlTWF0VGFibGUoeC5maWx0ZXIoKGRhdGEpID0+ICFkYXRhLkZpbmlzaGVkKSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYWN0aXZlOiAnSWQnLCBkaXJlY3Rpb246ICdkZXNjJ1xyXG4gICAgICAgICAgfSwgeyBhY3RpdmU6ICcnLCB2YWx1ZVN0YXJ0OiBudWxsLCB2YWx1ZUVuZDogbnVsbCB9LCAxNSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyQ2hhbmdlKCRldmVudCkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLm9uYm9hcmRpbmdUb0ZpZmlzaFwiLCAkZXZlbnQpO1xyXG4gICAgaWYgKCRldmVudC5pbmRleCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRMZW5ndGggPSB0aGlzLm9uYm9hcmRpbmdMaXN0LmRhdGEubGVuZ3RoXHJcbiAgICB9IGVsc2UgaWYgKCRldmVudC5pbmRleCA9PT0gMSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRMZW5ndGggPSB0aGlzLm9uYm9hcmRpbmdGaW5pc2hlZC5kYXRhLmxlbmd0aFxyXG4gICAgfSBlbHNlIGlmICgkZXZlbnQuaW5kZXggPT09IDIpIHtcclxuICAgICAgdGhpcy5jdXJyZW50TGVuZ3RoID0gdGhpcy5vbmJvYXJkaW5nVG9GaW5pc2guZGF0YS5sZW5ndGhcclxuICAgIH1cclxuICAgIGlmICgkZXZlbnQuaW5kZXggIT09IHRoaXMuSGlkZGVuSW5kZXgpIHtcclxuICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5kZXggPSAkZXZlbnQuaW5kZXg7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxyXG4gICAgICAgIFtdLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXHJcbiAgICAgICAgICBxdWVyeVBhcmFtczogeyBwYWdlOiBudWxsLCB0YWI6ICRldmVudC5pbmRleCArIDEgfSxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcclxuICAgICAgICB9KTtcclxuICAgICAgdGhpcy5IaWRkZW5JbmRleCA9ICRldmVudC5pbmRleFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlbkRpYWxvZygpIHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7fVxyXG4gICAgfSk7XHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKGN1cnJlbnQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5jdXJyZW50T25ib2FyZGluZy5uZXh0KGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnNlcnZpY2UubWFpblBhdGggKyBgL3JlcXVlc3QvJHtjdXJyZW50LlRlbXBsYXRlSWR9LzBgXSlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxtYXQtY2FyZCBbbmdTdHlsZV09XCJfbG9hZGluZ190YWJsZSAmJiB7J292ZXJmbG93LXknOiAnaGlkZGVuJywgJ2hlaWdodCc6ICcxMDAlJyxcclxuJ2Rpc3BsYXknOiAnZmxleCcsICdwb3NpdGlvbic6ICdhYnNvbHV0ZSd9XCIgY2xhc3M9XCJmdWxsLWhlaWdodFwiXHJcbiAgICBzdHlsZT1cImJhY2tncm91bmQ6ICNGNEY3RjkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1haW4tYWxsLXRpY2tldC1saXN0IG9uYm9hcmRpbmctbGlzdC1jb250YWluZXJcIiAqbmdJZj1cIm9uYm9hcmRpbmdMaXN0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtdmlldy1saXN0LXRpY2tldFwiPlxyXG4gICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJsaXN0LXRpdGxlIFwiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT1cImN1cnNvcjogZGVmYXVsdDtcIj5Wb3VzIGF2ZXogYWN0dWVsbGVtZW50IHt7b25ib2FyZGluZ0Zvcm1hdExpc3QubGVuZ3RofX0gRGVtYW5kZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBbY2xhc3NdPVwiY3VycmVudEZpbHRlcj09PSdhbGwnID8gJ2FjdGl2ZScgOicnXCIgKGNsaWNrKT1cImZpbHRlck9uYm9hcmRpbmcoJ2FsbCcpXCI+IFRvdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHt7b25ib2FyZGluZ0Zvcm1hdExpc3QubGVuZ3RofX0pIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIFtjbGFzc109XCJjdXJyZW50RmlsdGVyPT09J3B1Ymxpc2gnID8gJ2FjdGl2ZScgOicnXCIgKGNsaWNrKT1cImZpbHRlck9uYm9hcmRpbmcoJ3B1Ymxpc2gnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXJtaW7DqWVzICh7e29uYm9hcmRpbmdGb3JtYXRMaXN0Lmxlbmd0aH19KSA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBbY2xhc3NdPVwiY3VycmVudEZpbHRlcj09PSdkcmFmdCcgPyAnYWN0aXZlJyA6JydcIiAoY2xpY2spPVwiZmlsdGVyT25ib2FyZGluZygnZHJhZnQnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBIGZpbmFsaXNlciAoe3swfX0pIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlLXRhYmxlXCIgc3R5bGU9XCJjdXJzb3I6IGRlZmF1bHQ7XCI+Vm91cyBhdmV6IGFjdHVlbGxlbWVudCB7e2N1cnJlbnRMZW5ndGh9fVxyXG4gICAgICAgICAgICAgICAgRGVtYW5kZXM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxtYXQtdGFiLWdyb3VwIFtALmRpc2FibGVkXT1cInRydWVcIiBjbGFzcz1cImxpc3QtdGlja2V0LXRhYlwiIFsoc2VsZWN0ZWRJbmRleCldPVwiaW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgKHNlbGVjdGVkVGFiQ2hhbmdlKT1cInRyaWdnZXJDaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC10YWI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb3VzICh7e29uYm9hcmRpbmdMaXN0LmRhdGE/Lmxlbmd0aH19KVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG1hdFRhYkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfbG9hZGluZ190YWJsZSB8fCAhb25ib2FyZGluZ0xpc3RcIiBjbGFzcz1cImJ0LXNwaW5uZXJcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW25nU3R5bGVdPVwiX2xvYWRpbmdfdGFibGUgJiYgeydtYXJnaW4tYm90dG9tJzogJzEwMHZoJ31cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzLnRpY2tldC1saXN0XT1cIiFfbG9hZGluZ190YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1vbmJvYXJkaW5nLXRhYmxlICpuZ0lmPVwib25ib2FyZGluZ0xpc3RcIiBbY29sdW1uRGVmaW5pdGlvbnNdPVwiY29sdW1uRGVmaW5pdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cIm9uYm9hcmRpbmdMaXN0XCIgW2xhbmddPVwibGFuZ1wiIFtpbnB1dFNlYXJjaF09XCJpbnB1dFNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItb25ib2FyZGluZy10YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXRhYj5cclxuICAgICAgICAgICAgICAgIDxtYXQtdGFiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXJtaW7DqWVzICh7e29uYm9hcmRpbmdGaW5pc2hlZC5kYXRhLmxlbmd0aH19KVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG1hdFRhYkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfbG9hZGluZ190YWJsZSB8fCAhb25ib2FyZGluZ0ZpbmlzaGVkXCIgY2xhc3M9XCJidC1zcGlubmVyXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtuZ1N0eWxlXT1cIl9sb2FkaW5nX3RhYmxlICYmIHsnbWFyZ2luLWJvdHRvbSc6ICcxMDB2aCd9XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy50aWNrZXQtbGlzdF09XCIhX2xvYWRpbmdfdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItb25ib2FyZGluZy10YWJsZSAqbmdJZj1cIm9uYm9hcmRpbmdGaW5pc2hlZFwiIFtjb2x1bW5EZWZpbml0aW9uc109XCJjb2x1bW5EZWZpbml0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwib25ib2FyZGluZ0ZpbmlzaGVkXCIgW2xhbmddPVwibGFuZ1wiIFtpbnB1dFNlYXJjaF09XCJpbnB1dFNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItb25ib2FyZGluZy10YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXRhYj5cclxuICAgICAgICAgICAgICAgIDxtYXQtdGFiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBIGZpbmFsaXNlciAoe3tvbmJvYXJkaW5nVG9GaW5pc2guZGF0YS5sZW5ndGh9fSlcclxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXRUYWJDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX2xvYWRpbmdfdGFibGUgfHwgIW9uYm9hcmRpbmdUb0ZpbmlzaFwiIGNsYXNzPVwiYnQtc3Bpbm5lclwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJfbG9hZGluZ190YWJsZSAmJiB7J21hcmdpbi1ib3R0b20nOiAnMTAwdmgnfVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3MudGlja2V0LWxpc3RdPVwiIV9sb2FkaW5nX3RhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLW9uYm9hcmRpbmctdGFibGUgKm5nSWY9XCJvbmJvYXJkaW5nVG9GaW5pc2hcIiBbY29sdW1uRGVmaW5pdGlvbnNdPVwiY29sdW1uRGVmaW5pdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cIm9uYm9hcmRpbmdUb0ZpbmlzaFwiIFtsYW5nXT1cImxhbmdcIiBbaW5wdXRTZWFyY2hdPVwiaW5wdXRTZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLW9uYm9hcmRpbmctdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L21hdC10YWI+XHJcbiAgICAgICAgICAgIDwvbWF0LXRhYi1ncm91cD5cclxuICAgICAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiIGNsYXNzPVwiYWRkLW9uYm9hcmRpbmdcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+XHJcbiAgICAgICAgICAgICAgICBOb3V2ZWxsZSBkZW1hbmRlIGTigJlpbnTDqWdyYXRpb24gPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPCEtLSA8bGliLW9uYm9hcmRpbmctdGFibGUgW19sb2FkaW5nX3RhYmxlXT1cIm9uYm9hcmRpbmdMaXN0XCIgW29uYm9hcmRpbmdMaXN0XT1cIm9uYm9hcmRpbmdMaXN0XCJcclxuICAgICAgICAgICAgICAgIFtjb2x1bW5EZWZpbml0aW9uc109XCJjb2x1bW5EZWZpbml0aW9uc1wiIFtsYW5nXT1cImxhbmdcIiBbaW5wdXRTZWFyY2hdPVwiaW5wdXRTZWFyY2hcIj5cclxuICAgICAgICAgICAgPC9saWItb25ib2FyZGluZy10YWJsZT4gLS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9tYXQtY2FyZD4iXX0=