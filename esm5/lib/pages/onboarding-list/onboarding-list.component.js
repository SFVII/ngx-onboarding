import { __assign, __awaiter, __generator } from "tslib";
import * as moment from 'moment';
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
    var ctx_r914 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" Toutes (", ctx_r914.onboardingList.data == null ? null : ctx_r914.onboardingList.data.length, ") ");
} }
function OnboardingListComponent_div_1_ng_template_7_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} }
function OnboardingListComponent_div_1_ng_template_7_lib_onboarding_table_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-onboarding-table", 13);
} if (rf & 2) {
    var ctx_r921 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnDefinitions", ctx_r921.columnDefinitions)("data", ctx_r921.onboardingList)("lang", ctx_r921.lang)("inputSearch", ctx_r921.inputSearch);
} }
var _c0 = function () { return { "margin-bottom": "100vh" }; };
function OnboardingListComponent_div_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_7_div_0_Template, 1, 0, "div", 9);
    i0.ɵɵelement(1, "div", 10);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_7_lib_onboarding_table_3_Template, 1, 4, "lib-onboarding-table", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r915 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r915._loading_table || !ctx_r915.onboardingList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r915._loading_table && i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ticket-list", !ctx_r915._loading_table);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r915.onboardingList);
} }
function OnboardingListComponent_div_1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    var ctx_r916 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" Termin\u00E9es (", ctx_r916.onboardingFinished.data.length, ") ");
} }
function OnboardingListComponent_div_1_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} }
function OnboardingListComponent_div_1_ng_template_10_lib_onboarding_table_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-onboarding-table", 13);
} if (rf & 2) {
    var ctx_r923 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnDefinitions", ctx_r923.columnDefinitions)("data", ctx_r923.onboardingFinished)("lang", ctx_r923.lang)("inputSearch", ctx_r923.inputSearch);
} }
function OnboardingListComponent_div_1_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_10_div_0_Template, 1, 0, "div", 9);
    i0.ɵɵelement(1, "div", 10);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_10_lib_onboarding_table_3_Template, 1, 4, "lib-onboarding-table", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r917 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r917._loading_table || !ctx_r917.onboardingFinished);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r917._loading_table && i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ticket-list", !ctx_r917._loading_table);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r917.onboardingFinished);
} }
function OnboardingListComponent_div_1_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    var ctx_r918 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" A finaliser (", ctx_r918.onboardingToFinish.data.length, ") ");
} }
function OnboardingListComponent_div_1_ng_template_13_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} }
function OnboardingListComponent_div_1_ng_template_13_lib_onboarding_table_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-onboarding-table", 13);
} if (rf & 2) {
    var ctx_r925 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnDefinitions", ctx_r925.columnDefinitions)("data", ctx_r925.onboardingToFinish)("lang", ctx_r925.lang)("inputSearch", ctx_r925.inputSearch);
} }
function OnboardingListComponent_div_1_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_13_div_0_Template, 1, 0, "div", 9);
    i0.ɵɵelement(1, "div", 10);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_13_lib_onboarding_table_3_Template, 1, 4, "lib-onboarding-table", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r919 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r919._loading_table || !ctx_r919.onboardingToFinish);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r919._loading_table && i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ticket-list", !ctx_r919._loading_table);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r919.onboardingToFinish);
} }
function OnboardingListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r927 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "span", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-tab-group", 5);
    i0.ɵɵlistener("selectedIndexChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedIndexChange_4_listener($event) { i0.ɵɵrestoreView(_r927); var ctx_r926 = i0.ɵɵnextContext(); return ctx_r926.index = $event; })("selectedTabChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedTabChange_4_listener($event) { i0.ɵɵrestoreView(_r927); var ctx_r928 = i0.ɵɵnextContext(); return ctx_r928.triggerChange($event); });
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
    i0.ɵɵlistener("click", function OnboardingListComponent_div_1_Template_a_click_14_listener() { i0.ɵɵrestoreView(_r927); var ctx_r929 = i0.ɵɵnextContext(); return ctx_r929.openDialog(); });
    i0.ɵɵtext(15, " Nouvelle demande d\u2019int\u00E9gration ");
    i0.ɵɵelementStart(16, "mat-icon");
    i0.ɵɵtext(17, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r913 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Vous avez actuellement ", ctx_r913.currentLength, " Demandes");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@.disabled", true)("selectedIndex", ctx_r913.index);
} }
var _c1 = function () { return { "overflow-y": "hidden", "height": "100%", "display": "flex", "position": "absolute" }; };
var OnboardingListComponent = /** @class */ (function () {
    function OnboardingListComponent(service, router, route, dialog) {
        var _this = this;
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
                override: ["" + this.checkOnboardingPath(), 'TemplateId', '_id'],
                align: 'center'
            }
        ];
        this._loading_table = true;
        this.HiddenIndex = 0;
        this.index = 0;
        this.lang = 'fr';
        this.service._templates.subscribe(function (data) {
            _this.templates = data;
        });
    }
    OnboardingListComponent.prototype.cancelSearch = function () {
        this.inputSearch = '';
    };
    OnboardingListComponent.prototype.checkOnboardingPath = function () {
        return this.service.mainPath.includes('onboarding') ? this.service.mainPath + "/requests/" : "/onboarding/requests/";
    };
    OnboardingListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getAllOnboarding()];
                    case 1:
                        _a.sent();
                        this.service.onboarding.subscribe(function (onboarding) {
                            setTimeout(function () {
                                _this._loading_table = false;
                            }, 2000);
                            if (onboarding) {
                                var x = onboarding.map(function (row, index) {
                                    var _a, _b, _c, _d, _e, _f;
                                    var user = row.categories.find(function (cat) { return cat.name === "Utilisateur"; });
                                    var formUser = user.forms.map(function (form) { return ({ key: form.key, value: form.value }); }).reduce(function (a, v) {
                                        var _a;
                                        return (__assign(__assign({}, a), (_a = {}, _a[v.key] = v.value, _a)));
                                    }, {});
                                    row.Status = row.Finished ? "Terminée" : "A finaliser";
                                    row.CustomClass = row.Finished ? "custom-status finished" : "custom-status to-finish";
                                    row.lastNameClass = "last-name";
                                    row.requestor = ((_b = (_a = row) === null || _a === void 0 ? void 0 : _a.vcontacts[0]) === null || _b === void 0 ? void 0 : _b.Name) || '';
                                    row.Name = row.ContactName = ((_c = formUser) === null || _c === void 0 ? void 0 : _c.LastName) + " " + ((_d = formUser) === null || _d === void 0 ? void 0 : _d.FirstName) || "";
                                    row.Title = ((_e = formUser) === null || _e === void 0 ? void 0 : _e.Title) || "";
                                    row.Email = ((_f = formUser) === null || _f === void 0 ? void 0 : _f.Email) || '';
                                    row.date = moment(row.createdAt).format('DD/MM/YY');
                                    row.TemplateName = row.vtemplates.length > 0 ? row.vtemplates[0].Name : '';
                                    row.Id = index + 1;
                                    // row.mainPath = this.service.mainPath.includes('onboarding') ? `${this.service.mainPath}/requests/` : `/onboarding/requests/`
                                    return row;
                                });
                                _this.onboardingFormatList = x;
                                _this.onboardingList = new CoreMatTable(x, {
                                    active: 'Id', direction: 'desc'
                                }, { active: '', valueStart: null, valueEnd: null }, 15, true, true);
                                _this.currentLength = _this.onboardingList.data.length;
                                _this.onboardingFinished = new CoreMatTable(x.filter(function (data) { return data.Finished; }), {
                                    active: 'Id', direction: 'desc'
                                }, { active: '', valueStart: null, valueEnd: null }, 15, true, true);
                                _this.onboardingToFinish = new CoreMatTable(x.filter(function (data) { return !data.Finished; }), {
                                    active: 'Id', direction: 'desc'
                                }, { active: '', valueStart: null, valueEnd: null }, 15, true, true);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OnboardingListComponent.prototype.triggerChange = function ($event) {
        var _this = this;
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
            setTimeout(function () {
                _this._loading_table = false;
            }, 2000);
        }
    };
    OnboardingListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogCreateOnboardingComponent, {
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (current) {
            if (current) {
                _this.service.currentOnboarding.next(current);
                _this.router.navigate([_this.service.mainPath + ("/requests/" + current.TemplateId + "/0")]);
            }
        });
    };
    OnboardingListComponent.ɵfac = function OnboardingListComponent_Factory(t) { return new (t || OnboardingListComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.MatDialog)); };
    OnboardingListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 2, vars: 3, consts: [[1, "full-height", 2, "background", "#F4F7F9 0% 0% no-repeat padding-box", 3, "ngStyle"], ["class", "main-all-ticket-list onboarding-list-container", 4, "ngIf"], [1, "main-all-ticket-list", "onboarding-list-container"], [1, "content-view-list-ticket"], [1, "title-table", 2, "cursor", "default"], [1, "list-ticket-tab", 3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], ["mat-tab-label", ""], ["matTabContent", ""], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-onboarding", 3, "click"], ["class", "bt-spinner", 4, "ngIf"], [3, "ngStyle"], [3, "columnDefinitions", "data", "lang", "inputSearch", 4, "ngIf"], [1, "bt-spinner"], [3, "columnDefinitions", "data", "lang", "inputSearch"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-card", 0);
            i0.ɵɵtemplate(1, OnboardingListComponent_div_1_Template, 18, 3, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", ctx._loading_table && i0.ɵɵpureFunction0(2, _c1));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.onboardingList);
        } }, directives: [i4.MatCard, i5.NgStyle, i5.NgIf, i6.MatTabGroup, i6.MatTab, i6.MatTabLabel, i6.MatTabContent, i7.MatAnchor, i8.MatIcon, i9.OnboardingTableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:98%}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%], md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font:bold 13px/20px nexa;letter-spacing:0;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0;grid-row-gap:0;max-width:1500px;margin-left:auto;margin-right:auto;width:100%;animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{-ms-grid-row:2;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@-webkit-keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){-webkit-animation:1.25s linear infinite three-quarters-loader;animation:1.25s linear infinite three-quarters-loader;border:4px solid #4285f4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}@-webkit-keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font:18px/20px \"Nexa Text\";letter-spacing:0;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;font:17px/20px \"Nexa Text Bold\";letter-spacing:0;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px \"Nexa Text Bold\";letter-spacing:0;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width:1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03a9f4;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin;position:relative;left:50%;top:25vh}@-webkit-keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}  .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}  .mat-tab-header .mat-tab-label-active{background:0 0}  .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}  lib-onboarding-table{background-color:red!important}  lib-onboarding-table .link-btn{background:#e5e8ee;padding:2px!important;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:4px;color:#707070;font-weight:700;font-size:16px}.onboarding-list-container[_ngcontent-%COMP%]{position:relative}.onboarding-list-container[_ngcontent-%COMP%]   .title-table[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container[_ngcontent-%COMP%]   .add-onboarding[_ngcontent-%COMP%]{background:#171f26;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px;position:absolute;right:48px;top:30px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:10px;cursor:pointer}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}"] });
    return OnboardingListComponent;
}());
export { OnboardingListComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-onboarding-list',
                templateUrl: './onboarding-list.component.html',
                styleUrls: ['./onboarding-list.component.scss']
            }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFHakMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFlBQVksRUFBNkIsTUFBTSxPQUFPLENBQUM7QUFDcEYsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx5RkFBeUYsQ0FBQzs7Ozs7Ozs7Ozs7O0lDa0JsSCxZQUNKOzs7SUFESSwySEFDSjs7O0lBRUksMEJBQXdFOzs7SUFLcEUsMkNBRXVCOzs7SUFGc0IsOERBQXVDLGlDQUFBLHVCQUFBLHFDQUFBOzs7O0lBTHhGLDRGQUFrRTtJQUVsRSwwQkFBb0U7SUFFcEUsMkJBQ0k7SUFBQSwrSEFFQTtJQUNKLGlCQUFNOzs7SUFSRCwwRUFBeUM7SUFFekMsZUFBd0Q7SUFBeEQsK0VBQXdEO0lBRXhELGVBQXFDO0lBQXJDLHVEQUFxQztJQUNoQixlQUFzQjtJQUF0Qiw4Q0FBc0I7OztJQVFoRCxZQUNKOzs7SUFESSx5RkFDSjs7O0lBRUksMEJBQTRFOzs7SUFLeEUsMkNBRXVCOzs7SUFGMEIsOERBQXVDLHFDQUFBLHVCQUFBLHFDQUFBOzs7SUFMNUYsNkZBQXNFO0lBRXRFLDBCQUFvRTtJQUVwRSwyQkFDSTtJQUFBLGdJQUVBO0lBQ0osaUJBQU07OztJQVJELDhFQUE2QztJQUU3QyxlQUF3RDtJQUF4RCwrRUFBd0Q7SUFFeEQsZUFBcUM7SUFBckMsdURBQXFDO0lBQ2hCLGVBQTBCO0lBQTFCLGtEQUEwQjs7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QUksT0FBTyxFQUFFO2dCQUNYLEtBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFHLGVBQWEsT0FBTyxDQUFDLFVBQVUsT0FBSSxDQUFBLENBQUMsQ0FBQyxDQUFBO2FBQ3BGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO2tHQWxMVSx1QkFBdUI7Z0VBQXZCLHVCQUF1QjtZQ2ZwQyxtQ0FHSTtZQUFBLHlFQUNJO1lBMkVSLGlCQUFXOztZQS9FRCwwRUFDaUM7WUFFcUIsZUFBc0I7WUFBdEIseUNBQXNCOztrQ0RIdEY7Q0FrTUMsQUF4TEQsSUF3TEM7U0FuTFksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2VsbHNDb21wb25lbnRMaXN0LCBDb3JlTWF0VGFibGUsIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2UgfSBmcm9tIFwidGFibGVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERpYWxvZ0NyZWF0ZU9uYm9hcmRpbmdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL29uYm9hcmRpbmcvZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1vbmJvYXJkaW5nLWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgb25ib2FyZGluZ0xpc3Q6IGFueVxyXG4gIGlucHV0U2VhcmNoID0gJyc7XHJcbiAgY3VycmVudExlbmd0aCA9IDA7XHJcbiAgY3VycmVudEZpbHRlciA9ICdhbGwnXHJcbiAgcHVibGljIHNlYXJjaDogc3RyaW5nID0gJyc7XHJcbiAgb25ib2FyZGluZ0Zvcm1hdExpc3QgPSBbXVxyXG4gIG9uYm9hcmRpbmdGaW5pc2hlZDogYW55XHJcbiAgb25ib2FyZGluZ1RvRmluaXNoOiBhbnlcclxuICB0ZW1wbGF0ZXMgPSBbXVxyXG4gIHB1YmxpYyBjb2x1bW5EZWZpbml0aW9uczogZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZVtdID0gW1xyXG4gICAge1xyXG4gICAgICBrZXk6ICdOYW1lJyxcclxuICAgICAgc3ViVGl0bGU6IFwiZGF0ZVwiLFxyXG4gICAgICB2YWx1ZTogJ05vbSBkZSBmYW1pbGxlJyxcclxuICAgICAgb3JkZXI6IDEsXHJcbiAgICAgIGNsYXNzOiAndS03JyxcclxuICAgICAgYWRkQ2xhc3M6ICdsYXN0TmFtZUNsYXNzJyxcclxuICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuQ3VzdG9tQ2VsbCxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ0lkJyxcclxuICAgICAgdmFsdWU6ICdQb3NpdGlvbicsXHJcbiAgICAgIG9yZGVyOiAyLFxyXG4gICAgICBjbGFzczogJ3UtNCcsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LCB7XHJcbiAgICAgIGtleTogJ1RpdGxlJyxcclxuICAgICAgdmFsdWU6ICdQcm9maWwnLFxyXG4gICAgICBvcmRlcjogMixcclxuICAgICAgY2xhc3M6ICd1LTQnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdyZXF1ZXN0b3InLFxyXG4gICAgICB2YWx1ZTogJ0RlbWFuZGV1cicsXHJcbiAgICAgIG9yZGVyOiA0LFxyXG4gICAgICBjbGFzczogJ3UtNScsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LCB7XHJcbiAgICAgIGtleTogJ1RlbXBsYXRlTmFtZScsXHJcbiAgICAgIHZhbHVlOiAnU2VydmljZScsXHJcbiAgICAgIG9yZGVyOiA1LFxyXG4gICAgICBjbGFzczogJ3UtNScsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICdjcmVhdGVkQXQnLFxyXG4gICAgICB2YWx1ZTogJ0RhdGUgZGUgY3LDqWF0aW9uJyxcclxuICAgICAgb3JkZXI6IDYsXHJcbiAgICAgIGNsYXNzOiAndS02JyxcclxuICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuRGF0ZUZvcm1hdCxcclxuICAgICAgc29ydDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnU3RhdHVzJyxcclxuICAgICAgdmFsdWU6IFwiU3RhdHV0XCIsXHJcbiAgICAgIG9yZGVyOiA3LFxyXG4gICAgICBhZGRDbGFzczogJ0N1c3RvbUNsYXNzJyxcclxuICAgICAgY2xhc3M6ICd1LTQnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgICBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5DdXN0b21DZWxsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnQWN0aW9uJyxcclxuICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICBvcmRlcjogOCxcclxuICAgICAgY2xhc3M6ICd1LTQnLFxyXG4gICAgICBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5CdXR0b25MaW5rLFxyXG4gICAgICBkaXNwbGF5OiBcIkTDqXRhaWxcIixcclxuICAgICAgb3ZlcnJpZGU6IFtgJHt0aGlzLmNoZWNrT25ib2FyZGluZ1BhdGgoKX1gLCAnVGVtcGxhdGVJZCcsICdfaWQnXSxcclxuICAgICAgYWxpZ246ICdjZW50ZXInXHJcbiAgICB9XHJcblxyXG4gIF07XHJcbiAgbG9jYWxTZXJ2aWNlOiBhbnk7XHJcbiAgcHVibGljIF9sb2FkaW5nX3RhYmxlID0gdHJ1ZTtcclxuICBwcml2YXRlIEhpZGRlbkluZGV4ID0gMDtcclxuICBwdWJsaWMgaW5kZXggPSAwO1xyXG4gIGxhbmcgPSAnZnInO1xyXG5cclxuICBjYW5jZWxTZWFyY2goKSB7XHJcbiAgICB0aGlzLmlucHV0U2VhcmNoID0gJyc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuX3RlbXBsYXRlcy5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgdGhpcy50ZW1wbGF0ZXMgPSBkYXRhO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGVja09uYm9hcmRpbmdQYXRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5tYWluUGF0aC5pbmNsdWRlcygnb25ib2FyZGluZycpID8gYCR7dGhpcy5zZXJ2aWNlLm1haW5QYXRofS9yZXF1ZXN0cy9gIDogYC9vbmJvYXJkaW5nL3JlcXVlc3RzL2BcclxuICB9XHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCkge1xyXG4gICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbE9uYm9hcmRpbmcoKTtcclxuICAgIHRoaXMuc2VydmljZS5vbmJvYXJkaW5nLnN1YnNjcmliZSgob25ib2FyZGluZykgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XHJcbiAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgaWYgKG9uYm9hcmRpbmcpIHtcclxuICAgICAgICBsZXQgeCA9IG9uYm9hcmRpbmcubWFwKChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gcm93LmNhdGVnb3JpZXMuZmluZCgoY2F0KSA9PiBjYXQubmFtZSA9PT0gXCJVdGlsaXNhdGV1clwiKTtcclxuICAgICAgICAgIGNvbnN0IGZvcm1Vc2VyID0gdXNlci5mb3Jtcy5tYXAoKGZvcm0pID0+ICh7IGtleTogZm9ybS5rZXksIHZhbHVlOiBmb3JtLnZhbHVlIH0pKS5yZWR1Y2UoKGEsIHYpID0+ICh7IC4uLmEsIFt2LmtleV06IHYudmFsdWUgfSksIHt9KVxyXG4gICAgICAgICAgcm93LlN0YXR1cyA9IHJvdy5GaW5pc2hlZCA/IFwiVGVybWluw6llXCIgOiBcIkEgZmluYWxpc2VyXCI7XHJcbiAgICAgICAgICByb3cuQ3VzdG9tQ2xhc3MgPSByb3cuRmluaXNoZWQgPyBcImN1c3RvbS1zdGF0dXMgZmluaXNoZWRcIiA6IFwiY3VzdG9tLXN0YXR1cyB0by1maW5pc2hcIjtcclxuICAgICAgICAgIHJvdy5sYXN0TmFtZUNsYXNzID0gXCJsYXN0LW5hbWVcIlxyXG4gICAgICAgICAgcm93LnJlcXVlc3RvciA9IHJvdz8udmNvbnRhY3RzWzBdPy5OYW1lIHx8ICcnO1xyXG4gICAgICAgICAgcm93Lk5hbWUgPSByb3cuQ29udGFjdE5hbWUgPSBmb3JtVXNlcj8uTGFzdE5hbWUgKyBcIiBcIiArIGZvcm1Vc2VyPy5GaXJzdE5hbWUgfHwgXCJcIlxyXG4gICAgICAgICAgcm93LlRpdGxlID0gZm9ybVVzZXI/LlRpdGxlIHx8IFwiXCJcclxuICAgICAgICAgIHJvdy5FbWFpbCA9IGZvcm1Vc2VyPy5FbWFpbCB8fCAnJztcclxuICAgICAgICAgIHJvdy5kYXRlID0gbW9tZW50KHJvdy5jcmVhdGVkQXQpLmZvcm1hdCgnREQvTU0vWVknKVxyXG4gICAgICAgICAgcm93LlRlbXBsYXRlTmFtZSA9IHJvdy52dGVtcGxhdGVzLmxlbmd0aCA+IDAgPyByb3cudnRlbXBsYXRlc1swXS5OYW1lIDogJyc7XHJcbiAgICAgICAgICByb3cuSWQgPSBpbmRleCArIDE7XHJcbiAgICAgICAgICAvLyByb3cubWFpblBhdGggPSB0aGlzLnNlcnZpY2UubWFpblBhdGguaW5jbHVkZXMoJ29uYm9hcmRpbmcnKSA/IGAke3RoaXMuc2VydmljZS5tYWluUGF0aH0vcmVxdWVzdHMvYCA6IGAvb25ib2FyZGluZy9yZXF1ZXN0cy9gXHJcbiAgICAgICAgICByZXR1cm4gcm93O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nRm9ybWF0TGlzdCA9IHg7XHJcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nTGlzdCA9IG5ldyBDb3JlTWF0VGFibGUoeCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYWN0aXZlOiAnSWQnLCBkaXJlY3Rpb246ICdkZXNjJ1xyXG4gICAgICAgICAgfSwgeyBhY3RpdmU6ICcnLCB2YWx1ZVN0YXJ0OiBudWxsLCB2YWx1ZUVuZDogbnVsbCB9LCAxNSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGVuZ3RoID0gdGhpcy5vbmJvYXJkaW5nTGlzdC5kYXRhLmxlbmd0aFxyXG4gICAgICAgIHRoaXMub25ib2FyZGluZ0ZpbmlzaGVkID0gbmV3IENvcmVNYXRUYWJsZSh4LmZpbHRlcigoZGF0YSkgPT4gZGF0YS5GaW5pc2hlZCksXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogJ0lkJywgZGlyZWN0aW9uOiAnZGVzYydcclxuICAgICAgICAgIH0sIHsgYWN0aXZlOiAnJywgdmFsdWVTdGFydDogbnVsbCwgdmFsdWVFbmQ6IG51bGwgfSwgMTUsIHRydWUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMub25ib2FyZGluZ1RvRmluaXNoID0gbmV3IENvcmVNYXRUYWJsZSh4LmZpbHRlcigoZGF0YSkgPT4gIWRhdGEuRmluaXNoZWQpLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBhY3RpdmU6ICdJZCcsIGRpcmVjdGlvbjogJ2Rlc2MnXHJcbiAgICAgICAgICB9LCB7IGFjdGl2ZTogJycsIHZhbHVlU3RhcnQ6IG51bGwsIHZhbHVlRW5kOiBudWxsIH0sIDE1LCB0cnVlLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHRyaWdnZXJDaGFuZ2UoJGV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMub25ib2FyZGluZ1RvRmlmaXNoXCIsICRldmVudCk7XHJcbiAgICBpZiAoJGV2ZW50LmluZGV4ID09PSAwKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudExlbmd0aCA9IHRoaXMub25ib2FyZGluZ0xpc3QuZGF0YS5sZW5ndGhcclxuICAgIH0gZWxzZSBpZiAoJGV2ZW50LmluZGV4ID09PSAxKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudExlbmd0aCA9IHRoaXMub25ib2FyZGluZ0ZpbmlzaGVkLmRhdGEubGVuZ3RoXHJcbiAgICB9IGVsc2UgaWYgKCRldmVudC5pbmRleCA9PT0gMikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRMZW5ndGggPSB0aGlzLm9uYm9hcmRpbmdUb0ZpbmlzaC5kYXRhLmxlbmd0aFxyXG4gICAgfVxyXG4gICAgaWYgKCRldmVudC5pbmRleCAhPT0gdGhpcy5IaWRkZW5JbmRleCkge1xyXG4gICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbmRleCA9ICRldmVudC5pbmRleDtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXHJcbiAgICAgICAgW10sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHBhZ2U6IG51bGwsIHRhYjogJGV2ZW50LmluZGV4ICsgMSB9LFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJywgLy8gcmVtb3ZlIHRvIHJlcGxhY2UgYWxsIHF1ZXJ5IHBhcmFtcyBieSBwcm92aWRlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB0aGlzLkhpZGRlbkluZGV4ID0gJGV2ZW50LmluZGV4XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2xvYWRpbmdfdGFibGUgPSBmYWxzZTtcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuRGlhbG9nKCkge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHt9XHJcbiAgICB9KTtcclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoY3VycmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChjdXJyZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmN1cnJlbnRPbmJvYXJkaW5nLm5leHQoY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuc2VydmljZS5tYWluUGF0aCArIGAvcmVxdWVzdHMvJHtjdXJyZW50LlRlbXBsYXRlSWR9LzBgXSlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxtYXQtY2FyZCBbbmdTdHlsZV09XCJfbG9hZGluZ190YWJsZSAmJiB7J292ZXJmbG93LXknOiAnaGlkZGVuJywgJ2hlaWdodCc6ICcxMDAlJyxcclxuJ2Rpc3BsYXknOiAnZmxleCcsICdwb3NpdGlvbic6ICdhYnNvbHV0ZSd9XCIgY2xhc3M9XCJmdWxsLWhlaWdodFwiXHJcbiAgICBzdHlsZT1cImJhY2tncm91bmQ6ICNGNEY3RjkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1haW4tYWxsLXRpY2tldC1saXN0IG9uYm9hcmRpbmctbGlzdC1jb250YWluZXJcIiAqbmdJZj1cIm9uYm9hcmRpbmdMaXN0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtdmlldy1saXN0LXRpY2tldFwiPlxyXG4gICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJsaXN0LXRpdGxlIFwiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT1cImN1cnNvcjogZGVmYXVsdDtcIj5Wb3VzIGF2ZXogYWN0dWVsbGVtZW50IHt7b25ib2FyZGluZ0Zvcm1hdExpc3QubGVuZ3RofX0gRGVtYW5kZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBbY2xhc3NdPVwiY3VycmVudEZpbHRlcj09PSdhbGwnID8gJ2FjdGl2ZScgOicnXCIgKGNsaWNrKT1cImZpbHRlck9uYm9hcmRpbmcoJ2FsbCcpXCI+IFRvdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHt7b25ib2FyZGluZ0Zvcm1hdExpc3QubGVuZ3RofX0pIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIFtjbGFzc109XCJjdXJyZW50RmlsdGVyPT09J3B1Ymxpc2gnID8gJ2FjdGl2ZScgOicnXCIgKGNsaWNrKT1cImZpbHRlck9uYm9hcmRpbmcoJ3B1Ymxpc2gnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXJtaW7DqWVzICh7e29uYm9hcmRpbmdGb3JtYXRMaXN0Lmxlbmd0aH19KSA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBbY2xhc3NdPVwiY3VycmVudEZpbHRlcj09PSdkcmFmdCcgPyAnYWN0aXZlJyA6JydcIiAoY2xpY2spPVwiZmlsdGVyT25ib2FyZGluZygnZHJhZnQnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBIGZpbmFsaXNlciAoe3swfX0pIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlLXRhYmxlXCIgc3R5bGU9XCJjdXJzb3I6IGRlZmF1bHQ7XCI+Vm91cyBhdmV6IGFjdHVlbGxlbWVudCB7e2N1cnJlbnRMZW5ndGh9fVxyXG4gICAgICAgICAgICAgICAgRGVtYW5kZXM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxtYXQtdGFiLWdyb3VwIFtALmRpc2FibGVkXT1cInRydWVcIiBjbGFzcz1cImxpc3QtdGlja2V0LXRhYlwiIFsoc2VsZWN0ZWRJbmRleCldPVwiaW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgKHNlbGVjdGVkVGFiQ2hhbmdlKT1cInRyaWdnZXJDaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC10YWI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb3V0ZXMgKHt7b25ib2FyZGluZ0xpc3QuZGF0YT8ubGVuZ3RofX0pXHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0VGFiQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIl9sb2FkaW5nX3RhYmxlIHx8ICFvbmJvYXJkaW5nTGlzdFwiIGNsYXNzPVwiYnQtc3Bpbm5lclwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJfbG9hZGluZ190YWJsZSAmJiB7J21hcmdpbi1ib3R0b20nOiAnMTAwdmgnfVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3MudGlja2V0LWxpc3RdPVwiIV9sb2FkaW5nX3RhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLW9uYm9hcmRpbmctdGFibGUgKm5nSWY9XCJvbmJvYXJkaW5nTGlzdFwiIFtjb2x1bW5EZWZpbml0aW9uc109XCJjb2x1bW5EZWZpbml0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwib25ib2FyZGluZ0xpc3RcIiBbbGFuZ109XCJsYW5nXCIgW2lucHV0U2VhcmNoXT1cImlucHV0U2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1vbmJvYXJkaW5nLXRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtdGFiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC10YWI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG1hdC10YWItbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRlcm1pbsOpZXMgKHt7b25ib2FyZGluZ0ZpbmlzaGVkLmRhdGEubGVuZ3RofX0pXHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0VGFiQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIl9sb2FkaW5nX3RhYmxlIHx8ICFvbmJvYXJkaW5nRmluaXNoZWRcIiBjbGFzcz1cImJ0LXNwaW5uZXJcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW25nU3R5bGVdPVwiX2xvYWRpbmdfdGFibGUgJiYgeydtYXJnaW4tYm90dG9tJzogJzEwMHZoJ31cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzLnRpY2tldC1saXN0XT1cIiFfbG9hZGluZ190YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1vbmJvYXJkaW5nLXRhYmxlICpuZ0lmPVwib25ib2FyZGluZ0ZpbmlzaGVkXCIgW2NvbHVtbkRlZmluaXRpb25zXT1cImNvbHVtbkRlZmluaXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJvbmJvYXJkaW5nRmluaXNoZWRcIiBbbGFuZ109XCJsYW5nXCIgW2lucHV0U2VhcmNoXT1cImlucHV0U2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1vbmJvYXJkaW5nLXRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtdGFiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC10YWI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG1hdC10YWItbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEEgZmluYWxpc2VyICh7e29uYm9hcmRpbmdUb0ZpbmlzaC5kYXRhLmxlbmd0aH19KVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG1hdFRhYkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfbG9hZGluZ190YWJsZSB8fCAhb25ib2FyZGluZ1RvRmluaXNoXCIgY2xhc3M9XCJidC1zcGlubmVyXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtuZ1N0eWxlXT1cIl9sb2FkaW5nX3RhYmxlICYmIHsnbWFyZ2luLWJvdHRvbSc6ICcxMDB2aCd9XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy50aWNrZXQtbGlzdF09XCIhX2xvYWRpbmdfdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItb25ib2FyZGluZy10YWJsZSAqbmdJZj1cIm9uYm9hcmRpbmdUb0ZpbmlzaFwiIFtjb2x1bW5EZWZpbml0aW9uc109XCJjb2x1bW5EZWZpbml0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwib25ib2FyZGluZ1RvRmluaXNoXCIgW2xhbmddPVwibGFuZ1wiIFtpbnB1dFNlYXJjaF09XCJpbnB1dFNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItb25ib2FyZGluZy10YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXRhYj5cclxuICAgICAgICAgICAgPC9tYXQtdGFiLWdyb3VwPlxyXG4gICAgICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgY2xhc3M9XCJhZGQtb25ib2FyZGluZ1wiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5cclxuICAgICAgICAgICAgICAgIE5vdXZlbGxlIGRlbWFuZGUgZOKAmWludMOpZ3JhdGlvbiA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8IS0tIDxsaWItb25ib2FyZGluZy10YWJsZSBbX2xvYWRpbmdfdGFibGVdPVwib25ib2FyZGluZ0xpc3RcIiBbb25ib2FyZGluZ0xpc3RdPVwib25ib2FyZGluZ0xpc3RcIlxyXG4gICAgICAgICAgICAgICAgW2NvbHVtbkRlZmluaXRpb25zXT1cImNvbHVtbkRlZmluaXRpb25zXCIgW2xhbmddPVwibGFuZ1wiIFtpbnB1dFNlYXJjaF09XCJpbnB1dFNlYXJjaFwiPlxyXG4gICAgICAgICAgICA8L2xpYi1vbmJvYXJkaW5nLXRhYmxlPiAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L21hdC1jYXJkPiJdfQ==