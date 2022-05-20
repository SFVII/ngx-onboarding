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
    var ctx_r942 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" Tous (", ctx_r942.onboardingList.data == null ? null : ctx_r942.onboardingList.data.length, ") ");
} }
function OnboardingListComponent_div_1_ng_template_7_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} }
function OnboardingListComponent_div_1_ng_template_7_lib_onboarding_table_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-onboarding-table", 13);
} if (rf & 2) {
    var ctx_r949 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnDefinitions", ctx_r949.columnDefinitions)("data", ctx_r949.onboardingList)("lang", ctx_r949.lang)("inputSearch", ctx_r949.inputSearch);
} }
var _c0 = function () { return { "margin-bottom": "100vh" }; };
function OnboardingListComponent_div_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_7_div_0_Template, 1, 0, "div", 9);
    i0.ɵɵelement(1, "div", 10);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_7_lib_onboarding_table_3_Template, 1, 4, "lib-onboarding-table", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r943 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r943._loading_table || !ctx_r943.onboardingList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r943._loading_table && i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ticket-list", !ctx_r943._loading_table);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r943.onboardingList);
} }
function OnboardingListComponent_div_1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    var ctx_r944 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" Termin\u00E9es (", ctx_r944.onboardingFinished.data.length, ") ");
} }
function OnboardingListComponent_div_1_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} }
function OnboardingListComponent_div_1_ng_template_10_lib_onboarding_table_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-onboarding-table", 13);
} if (rf & 2) {
    var ctx_r951 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnDefinitions", ctx_r951.columnDefinitions)("data", ctx_r951.onboardingFinished)("lang", ctx_r951.lang)("inputSearch", ctx_r951.inputSearch);
} }
function OnboardingListComponent_div_1_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_10_div_0_Template, 1, 0, "div", 9);
    i0.ɵɵelement(1, "div", 10);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_10_lib_onboarding_table_3_Template, 1, 4, "lib-onboarding-table", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r945 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r945._loading_table || !ctx_r945.onboardingFinished);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r945._loading_table && i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ticket-list", !ctx_r945._loading_table);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r945.onboardingFinished);
} }
function OnboardingListComponent_div_1_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    var ctx_r946 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" A finaliser (", ctx_r946.onboardingToFinish.data.length, ") ");
} }
function OnboardingListComponent_div_1_ng_template_13_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} }
function OnboardingListComponent_div_1_ng_template_13_lib_onboarding_table_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-onboarding-table", 13);
} if (rf & 2) {
    var ctx_r953 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnDefinitions", ctx_r953.columnDefinitions)("data", ctx_r953.onboardingToFinish)("lang", ctx_r953.lang)("inputSearch", ctx_r953.inputSearch);
} }
function OnboardingListComponent_div_1_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_13_div_0_Template, 1, 0, "div", 9);
    i0.ɵɵelement(1, "div", 10);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_13_lib_onboarding_table_3_Template, 1, 4, "lib-onboarding-table", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r947 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r947._loading_table || !ctx_r947.onboardingToFinish);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r947._loading_table && i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ticket-list", !ctx_r947._loading_table);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r947.onboardingToFinish);
} }
function OnboardingListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r955 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "span", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-tab-group", 5);
    i0.ɵɵlistener("selectedIndexChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedIndexChange_4_listener($event) { i0.ɵɵrestoreView(_r955); var ctx_r954 = i0.ɵɵnextContext(); return ctx_r954.index = $event; })("selectedTabChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedTabChange_4_listener($event) { i0.ɵɵrestoreView(_r955); var ctx_r956 = i0.ɵɵnextContext(); return ctx_r956.triggerChange($event); });
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
    i0.ɵɵlistener("click", function OnboardingListComponent_div_1_Template_a_click_14_listener() { i0.ɵɵrestoreView(_r955); var ctx_r957 = i0.ɵɵnextContext(); return ctx_r957.openDialog(); });
    i0.ɵɵtext(15, " Nouvelle demande d\u2019int\u00E9gration ");
    i0.ɵɵelementStart(16, "mat-icon");
    i0.ɵɵtext(17, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r941 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Vous avez actuellement ", ctx_r941.currentLength, " Demandes");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@.disabled", true)("selectedIndex", ctx_r941.index);
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
                module: CellsComponentList.ButtonLinkText,
                override: [this.checkOnboardingPath(this.service.mainPath) + "/request", 'TemplateId', '_id'],
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
    OnboardingListComponent.prototype.checkOnboardingPath = function (mainUrl) {
        return mainUrl.includes('onboarding') ? mainUrl : "/onboarding/";
    };
    OnboardingListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.service.getAllOnboarding()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }, 500);
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
                            row.Status = row.Finished ? "Terminer" : "A finaliser";
                            row.CustomClass = row.Finished ? "custom-status finished" : "custom-status to-finish";
                            row.lastNameClass = "last-name";
                            row.requestor = ((_b = (_a = row) === null || _a === void 0 ? void 0 : _a.vcontacts[0]) === null || _b === void 0 ? void 0 : _b.Name) || '';
                            row.Name = row.ContactName = ((_c = formUser) === null || _c === void 0 ? void 0 : _c.LastName) + " " + ((_d = formUser) === null || _d === void 0 ? void 0 : _d.FirstName) || "";
                            row.Title = ((_e = formUser) === null || _e === void 0 ? void 0 : _e.Title) || "";
                            row.Email = ((_f = formUser) === null || _f === void 0 ? void 0 : _f.Email) || '';
                            row.date = moment(row.createdAt).format('DD/MM/yy');
                            row.TemplateName = row.vtemplates.length > 0 ? row.vtemplates[0].Name : '';
                            row.Id = index + 1;
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
                _this.router.navigate([_this.service.mainPath + ("/request/" + current.TemplateId + "/0")]);
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
        } }, directives: [i4.MatCard, i5.NgStyle, i5.NgIf, i6.MatTabGroup, i6.MatTab, i6.MatTabLabel, i6.MatTabContent, i7.MatAnchor, i8.MatIcon, i9.OnboardingTableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:98%}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%], md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font:bold 13px/20px nexa;letter-spacing:0;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0;grid-row-gap:0;max-width:1500px;margin-left:auto;margin-right:auto;width:100%;animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{-ms-grid-row:2;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@-webkit-keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){-webkit-animation:1.25s linear infinite three-quarters-loader;animation:1.25s linear infinite three-quarters-loader;border:4px solid #4285f4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}@-webkit-keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font:18px/20px \"Nexa Text\";letter-spacing:0;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;font:17px/20px \"Nexa Text Bold\";letter-spacing:0;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px \"Nexa Text Bold\";letter-spacing:0;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width:1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03a9f4;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin;position:relative;left:50%;top:25vh}@-webkit-keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}  .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}  .mat-tab-header .mat-tab-label-active{background:0 0}  .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}.onboarding-list-container[_ngcontent-%COMP%]{position:relative}.onboarding-list-container[_ngcontent-%COMP%]   .title-table[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container[_ngcontent-%COMP%]   .add-onboarding[_ngcontent-%COMP%]{background:#171f26;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px;position:absolute;right:48px;top:30px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:10px;cursor:pointer}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFHakMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFlBQVksRUFBNkIsTUFBTSxPQUFPLENBQUM7QUFDcEYsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx5RkFBeUYsQ0FBQzs7Ozs7Ozs7Ozs7O0lDa0JsSCxZQUNKOzs7SUFESSx5SEFDSjs7O0lBRUksMEJBQXdFOzs7SUFLcEUsMkNBRXVCOzs7SUFGc0IsOERBQXVDLGlDQUFBLHVCQUFBLHFDQUFBOzs7O0lBTHhGLDRGQUFrRTtJQUVsRSwwQkFBb0U7SUFFcEUsMkJBQ0k7SUFBQSwrSEFFQTtJQUNKLGlCQUFNOzs7SUFSRCwwRUFBeUM7SUFFekMsZUFBd0Q7SUFBeEQsK0VBQXdEO0lBRXhELGVBQXFDO0lBQXJDLHVEQUFxQztJQUNoQixlQUFzQjtJQUF0Qiw4Q0FBc0I7OztJQVFoRCxZQUNKOzs7SUFESSx5RkFDSjs7O0lBRUksMEJBQTRFOzs7SUFLeEUsMkNBRXVCOzs7SUFGMEIsOERBQXVDLHFDQUFBLHVCQUFBLHFDQUFBOzs7SUFMNUYsNkZBQXNFO0lBRXRFLDBCQUFvRTtJQUVwRSwyQkFDSTtJQUFBLGdJQUVBO0lBQ0osaUJBQU07OztJQVJELDhFQUE2QztJQUU3QyxlQUF3RDtJQUF4RCwrRUFBd0Q7SUFFeEQsZUFBcUM7SUFBckMsdURBQXFDO0lBQ2hCLGVBQTBCO0lBQTFCLGtEQUEwQjs7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QyxJQUFJLE9BQU8sRUFBRTtnQkFDWCxLQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBRyxjQUFZLE9BQU8sQ0FBQyxVQUFVLE9BQUksQ0FBQSxDQUFDLENBQUMsQ0FBQTthQUNuRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztrR0FuTFUsdUJBQXVCO2dFQUF2Qix1QkFBdUI7WUNmcEMsbUNBR0k7WUFBQSx5RUFDSTtZQTJFUixpQkFBVzs7WUEvRUQsMEVBQ2lDO1lBRXFCLGVBQXNCO1lBQXRCLHlDQUFzQjs7a0NESHRGO0NBbU1DLEFBekxELElBeUxDO1NBcExZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENlbGxzQ29tcG9uZW50TGlzdCwgQ29yZU1hdFRhYmxlLCBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlIH0gZnJvbSBcInRhYmxlXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItb25ib2FyZGluZy1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG9uYm9hcmRpbmdMaXN0OiBhbnlcclxuICBpbnB1dFNlYXJjaCA9ICcnO1xyXG4gIGN1cnJlbnRMZW5ndGggPSAwO1xyXG4gIGN1cnJlbnRGaWx0ZXIgPSAnYWxsJ1xyXG4gIHB1YmxpYyBzZWFyY2g6IHN0cmluZyA9ICcnO1xyXG4gIG9uYm9hcmRpbmdGb3JtYXRMaXN0ID0gW11cclxuICBvbmJvYXJkaW5nRmluaXNoZWQ6IGFueVxyXG4gIG9uYm9hcmRpbmdUb0ZpbmlzaDogYW55XHJcbiAgdGVtcGxhdGVzID0gW11cclxuICBwdWJsaWMgY29sdW1uRGVmaW5pdGlvbnM6IGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VbXSA9IFtcclxuICAgIHtcclxuICAgICAga2V5OiAnTmFtZScsXHJcbiAgICAgIHN1YlRpdGxlOiBcImRhdGVcIixcclxuICAgICAgdmFsdWU6ICdOb20gZGUgZmFtaWxsZScsXHJcbiAgICAgIG9yZGVyOiAxLFxyXG4gICAgICBjbGFzczogJ3UtNycsXHJcbiAgICAgIGFkZENsYXNzOiAnbGFzdE5hbWVDbGFzcycsXHJcbiAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkN1c3RvbUNlbGwsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICdJZCcsXHJcbiAgICAgIHZhbHVlOiAnUG9zaXRpb24nLFxyXG4gICAgICBvcmRlcjogMixcclxuICAgICAgY2xhc3M6ICd1LTQnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdUaXRsZScsXHJcbiAgICAgIHZhbHVlOiAnUHJvZmlsJyxcclxuICAgICAgb3JkZXI6IDIsXHJcbiAgICAgIGNsYXNzOiAndS00JyxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgIH0sIHtcclxuICAgICAga2V5OiAncmVxdWVzdG9yJyxcclxuICAgICAgdmFsdWU6ICdEZW1hbmRldXInLFxyXG4gICAgICBvcmRlcjogNCxcclxuICAgICAgY2xhc3M6ICd1LTUnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdUZW1wbGF0ZU5hbWUnLFxyXG4gICAgICB2YWx1ZTogJ1NlcnZpY2UnLFxyXG4gICAgICBvcmRlcjogNSxcclxuICAgICAgY2xhc3M6ICd1LTUnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnY3JlYXRlZEF0JyxcclxuICAgICAgdmFsdWU6ICdEYXRlIGRlIGNyw6lhdGlvbicsXHJcbiAgICAgIG9yZGVyOiA2LFxyXG4gICAgICBjbGFzczogJ3UtNicsXHJcbiAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkRhdGVGb3JtYXQsXHJcbiAgICAgIHNvcnQ6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ1N0YXR1cycsXHJcbiAgICAgIHZhbHVlOiBcIlN0YXR1dFwiLFxyXG4gICAgICBvcmRlcjogNyxcclxuICAgICAgYWRkQ2xhc3M6ICdDdXN0b21DbGFzcycsXHJcbiAgICAgIGNsYXNzOiAndS00JyxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuQ3VzdG9tQ2VsbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ0FjdGlvbicsXHJcbiAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgb3JkZXI6IDgsXHJcbiAgICAgIGNsYXNzOiAndS00JyxcclxuICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuQnV0dG9uTGlua1RleHQsXHJcbiAgICAgIG92ZXJyaWRlOiBbYCR7dGhpcy5jaGVja09uYm9hcmRpbmdQYXRoKHRoaXMuc2VydmljZS5tYWluUGF0aCl9L3JlcXVlc3RgLCAnVGVtcGxhdGVJZCcsICdfaWQnXSxcclxuICAgICAgYWxpZ246ICdjZW50ZXInXHJcbiAgICB9XHJcblxyXG4gIF07XHJcbiAgbG9jYWxTZXJ2aWNlOiBhbnk7XHJcbiAgcHVibGljIF9sb2FkaW5nX3RhYmxlID0gdHJ1ZTtcclxuICBwcml2YXRlIEhpZGRlbkluZGV4ID0gMDtcclxuICBwdWJsaWMgaW5kZXggPSAwO1xyXG4gIGxhbmcgPSAnZnInO1xyXG5cclxuICBjYW5jZWxTZWFyY2goKSB7XHJcbiAgICB0aGlzLmlucHV0U2VhcmNoID0gJyc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuX3RlbXBsYXRlcy5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgdGhpcy50ZW1wbGF0ZXMgPSBkYXRhO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGVja09uYm9hcmRpbmdQYXRoKG1haW5Vcmw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIG1haW5VcmwuaW5jbHVkZXMoJ29uYm9hcmRpbmcnKSA/IG1haW5VcmwgOiBgL29uYm9hcmRpbmcvYFxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbE9uYm9hcmRpbmcoKTtcclxuICAgICAgLy8gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xyXG4gICAgfSwgNTAwKTtcclxuICAgIHRoaXMuc2VydmljZS5vbmJvYXJkaW5nLnN1YnNjcmliZSgob25ib2FyZGluZykgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XHJcbiAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgaWYgKG9uYm9hcmRpbmcpIHtcclxuICAgICAgICBsZXQgeCA9IG9uYm9hcmRpbmcubWFwKChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gcm93LmNhdGVnb3JpZXMuZmluZCgoY2F0KSA9PiBjYXQubmFtZSA9PT0gXCJVdGlsaXNhdGV1clwiKTtcclxuICAgICAgICAgIGNvbnN0IGZvcm1Vc2VyID0gdXNlci5mb3Jtcy5tYXAoKGZvcm0pID0+ICh7IGtleTogZm9ybS5rZXksIHZhbHVlOiBmb3JtLnZhbHVlIH0pKS5yZWR1Y2UoKGEsIHYpID0+ICh7IC4uLmEsIFt2LmtleV06IHYudmFsdWUgfSksIHt9KVxyXG4gICAgICAgICAgcm93LlN0YXR1cyA9IHJvdy5GaW5pc2hlZCA/IFwiVGVybWluZXJcIiA6IFwiQSBmaW5hbGlzZXJcIjtcclxuICAgICAgICAgIHJvdy5DdXN0b21DbGFzcyA9IHJvdy5GaW5pc2hlZCA/IFwiY3VzdG9tLXN0YXR1cyBmaW5pc2hlZFwiIDogXCJjdXN0b20tc3RhdHVzIHRvLWZpbmlzaFwiO1xyXG4gICAgICAgICAgcm93Lmxhc3ROYW1lQ2xhc3MgPSBcImxhc3QtbmFtZVwiXHJcbiAgICAgICAgICByb3cucmVxdWVzdG9yID0gcm93Py52Y29udGFjdHNbMF0/Lk5hbWUgfHwgJyc7XHJcbiAgICAgICAgICByb3cuTmFtZSA9IHJvdy5Db250YWN0TmFtZSA9IGZvcm1Vc2VyPy5MYXN0TmFtZSArIFwiIFwiICsgZm9ybVVzZXI/LkZpcnN0TmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICByb3cuVGl0bGUgPSBmb3JtVXNlcj8uVGl0bGUgfHwgXCJcIlxyXG4gICAgICAgICAgcm93LkVtYWlsID0gZm9ybVVzZXI/LkVtYWlsIHx8ICcnO1xyXG4gICAgICAgICAgcm93LmRhdGUgPSBtb21lbnQocm93LmNyZWF0ZWRBdCkuZm9ybWF0KCdERC9NTS95eScpXHJcbiAgICAgICAgICByb3cuVGVtcGxhdGVOYW1lID0gcm93LnZ0ZW1wbGF0ZXMubGVuZ3RoID4gMCA/IHJvdy52dGVtcGxhdGVzWzBdLk5hbWUgOiAnJztcclxuICAgICAgICAgIHJvdy5JZCA9IGluZGV4ICsgMTtcclxuICAgICAgICAgIHJldHVybiByb3c7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm9uYm9hcmRpbmdGb3JtYXRMaXN0ID0geDtcclxuICAgICAgICB0aGlzLm9uYm9hcmRpbmdMaXN0ID0gbmV3IENvcmVNYXRUYWJsZSh4LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBhY3RpdmU6ICdJZCcsIGRpcmVjdGlvbjogJ2Rlc2MnXHJcbiAgICAgICAgICB9LCB7IGFjdGl2ZTogJycsIHZhbHVlU3RhcnQ6IG51bGwsIHZhbHVlRW5kOiBudWxsIH0sIDE1LCB0cnVlLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZW5ndGggPSB0aGlzLm9uYm9hcmRpbmdMaXN0LmRhdGEubGVuZ3RoXHJcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nRmluaXNoZWQgPSBuZXcgQ29yZU1hdFRhYmxlKHguZmlsdGVyKChkYXRhKSA9PiBkYXRhLkZpbmlzaGVkKSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYWN0aXZlOiAnSWQnLCBkaXJlY3Rpb246ICdkZXNjJ1xyXG4gICAgICAgICAgfSwgeyBhY3RpdmU6ICcnLCB2YWx1ZVN0YXJ0OiBudWxsLCB2YWx1ZUVuZDogbnVsbCB9LCAxNSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nVG9GaW5pc2ggPSBuZXcgQ29yZU1hdFRhYmxlKHguZmlsdGVyKChkYXRhKSA9PiAhZGF0YS5GaW5pc2hlZCksXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogJ0lkJywgZGlyZWN0aW9uOiAnZGVzYydcclxuICAgICAgICAgIH0sIHsgYWN0aXZlOiAnJywgdmFsdWVTdGFydDogbnVsbCwgdmFsdWVFbmQ6IG51bGwgfSwgMTUsIHRydWUsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdHJpZ2dlckNoYW5nZSgkZXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcy5vbmJvYXJkaW5nVG9GaWZpc2hcIiwgJGV2ZW50KTtcclxuICAgIGlmICgkZXZlbnQuaW5kZXggPT09IDApIHtcclxuICAgICAgdGhpcy5jdXJyZW50TGVuZ3RoID0gdGhpcy5vbmJvYXJkaW5nTGlzdC5kYXRhLmxlbmd0aFxyXG4gICAgfSBlbHNlIGlmICgkZXZlbnQuaW5kZXggPT09IDEpIHtcclxuICAgICAgdGhpcy5jdXJyZW50TGVuZ3RoID0gdGhpcy5vbmJvYXJkaW5nRmluaXNoZWQuZGF0YS5sZW5ndGhcclxuICAgIH0gZWxzZSBpZiAoJGV2ZW50LmluZGV4ID09PSAyKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudExlbmd0aCA9IHRoaXMub25ib2FyZGluZ1RvRmluaXNoLmRhdGEubGVuZ3RoXHJcbiAgICB9XHJcbiAgICBpZiAoJGV2ZW50LmluZGV4ICE9PSB0aGlzLkhpZGRlbkluZGV4KSB7XHJcbiAgICAgIHRoaXMuX2xvYWRpbmdfdGFibGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluZGV4ID0gJGV2ZW50LmluZGV4O1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcclxuICAgICAgICBbXSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHsgcGFnZTogbnVsbCwgdGFiOiAkZXZlbnQuaW5kZXggKyAxIH0sXHJcbiAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHRoaXMuSGlkZGVuSW5kZXggPSAkZXZlbnQuaW5kZXhcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IGZhbHNlO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5EaWFsb2coKSB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0NyZWF0ZU9uYm9hcmRpbmdDb21wb25lbnQsIHtcclxuICAgICAgZGF0YToge31cclxuICAgIH0pO1xyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChjdXJyZW50OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UuY3VycmVudE9uYm9hcmRpbmcubmV4dChjdXJyZW50KTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5zZXJ2aWNlLm1haW5QYXRoICsgYC9yZXF1ZXN0LyR7Y3VycmVudC5UZW1wbGF0ZUlkfS8wYF0pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8bWF0LWNhcmQgW25nU3R5bGVdPVwiX2xvYWRpbmdfdGFibGUgJiYgeydvdmVyZmxvdy15JzogJ2hpZGRlbicsICdoZWlnaHQnOiAnMTAwJScsXHJcbidkaXNwbGF5JzogJ2ZsZXgnLCAncG9zaXRpb24nOiAnYWJzb2x1dGUnfVwiIGNsYXNzPVwiZnVsbC1oZWlnaHRcIlxyXG4gICAgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjRjRGN0Y5IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWFsbC10aWNrZXQtbGlzdCBvbmJvYXJkaW5nLWxpc3QtY29udGFpbmVyXCIgKm5nSWY9XCJvbmJvYXJkaW5nTGlzdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXZpZXctbGlzdC10aWNrZXRcIj5cclxuICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwibGlzdC10aXRsZSBcIj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9XCJjdXJzb3I6IGRlZmF1bHQ7XCI+Vm91cyBhdmV6IGFjdHVlbGxlbWVudCB7e29uYm9hcmRpbmdGb3JtYXRMaXN0Lmxlbmd0aH19IERlbWFuZGVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgW2NsYXNzXT1cImN1cnJlbnRGaWx0ZXI9PT0nYWxsJyA/ICdhY3RpdmUnIDonJ1wiIChjbGljayk9XCJmaWx0ZXJPbmJvYXJkaW5nKCdhbGwnKVwiPiBUb3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh7e29uYm9hcmRpbmdGb3JtYXRMaXN0Lmxlbmd0aH19KSA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBbY2xhc3NdPVwiY3VycmVudEZpbHRlcj09PSdwdWJsaXNoJyA/ICdhY3RpdmUnIDonJ1wiIChjbGljayk9XCJmaWx0ZXJPbmJvYXJkaW5nKCdwdWJsaXNoJylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGVybWluw6llcyAoe3tvbmJvYXJkaW5nRm9ybWF0TGlzdC5sZW5ndGh9fSkgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgW2NsYXNzXT1cImN1cnJlbnRGaWx0ZXI9PT0nZHJhZnQnID8gJ2FjdGl2ZScgOicnXCIgKGNsaWNrKT1cImZpbHRlck9uYm9hcmRpbmcoJ2RyYWZ0JylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQSBmaW5hbGlzZXIgKHt7MH19KSA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZS10YWJsZVwiIHN0eWxlPVwiY3Vyc29yOiBkZWZhdWx0O1wiPlZvdXMgYXZleiBhY3R1ZWxsZW1lbnQge3tjdXJyZW50TGVuZ3RofX1cclxuICAgICAgICAgICAgICAgIERlbWFuZGVzPC9zcGFuPlxyXG4gICAgICAgICAgICA8bWF0LXRhYi1ncm91cCBbQC5kaXNhYmxlZF09XCJ0cnVlXCIgY2xhc3M9XCJsaXN0LXRpY2tldC10YWJcIiBbKHNlbGVjdGVkSW5kZXgpXT1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgIChzZWxlY3RlZFRhYkNoYW5nZSk9XCJ0cmlnZ2VyQ2hhbmdlKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtdGFiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0LXRhYi1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVG91cyAoe3tvbmJvYXJkaW5nTGlzdC5kYXRhPy5sZW5ndGh9fSlcclxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXRUYWJDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX2xvYWRpbmdfdGFibGUgfHwgIW9uYm9hcmRpbmdMaXN0XCIgY2xhc3M9XCJidC1zcGlubmVyXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtuZ1N0eWxlXT1cIl9sb2FkaW5nX3RhYmxlICYmIHsnbWFyZ2luLWJvdHRvbSc6ICcxMDB2aCd9XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy50aWNrZXQtbGlzdF09XCIhX2xvYWRpbmdfdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItb25ib2FyZGluZy10YWJsZSAqbmdJZj1cIm9uYm9hcmRpbmdMaXN0XCIgW2NvbHVtbkRlZmluaXRpb25zXT1cImNvbHVtbkRlZmluaXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJvbmJvYXJkaW5nTGlzdFwiIFtsYW5nXT1cImxhbmdcIiBbaW5wdXRTZWFyY2hdPVwiaW5wdXRTZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLW9uYm9hcmRpbmctdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L21hdC10YWI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXRhYj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0LXRhYi1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGVybWluw6llcyAoe3tvbmJvYXJkaW5nRmluaXNoZWQuZGF0YS5sZW5ndGh9fSlcclxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXRUYWJDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX2xvYWRpbmdfdGFibGUgfHwgIW9uYm9hcmRpbmdGaW5pc2hlZFwiIGNsYXNzPVwiYnQtc3Bpbm5lclwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJfbG9hZGluZ190YWJsZSAmJiB7J21hcmdpbi1ib3R0b20nOiAnMTAwdmgnfVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3MudGlja2V0LWxpc3RdPVwiIV9sb2FkaW5nX3RhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLW9uYm9hcmRpbmctdGFibGUgKm5nSWY9XCJvbmJvYXJkaW5nRmluaXNoZWRcIiBbY29sdW1uRGVmaW5pdGlvbnNdPVwiY29sdW1uRGVmaW5pdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cIm9uYm9hcmRpbmdGaW5pc2hlZFwiIFtsYW5nXT1cImxhbmdcIiBbaW5wdXRTZWFyY2hdPVwiaW5wdXRTZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLW9uYm9hcmRpbmctdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L21hdC10YWI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXRhYj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0LXRhYi1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQSBmaW5hbGlzZXIgKHt7b25ib2FyZGluZ1RvRmluaXNoLmRhdGEubGVuZ3RofX0pXHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0VGFiQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIl9sb2FkaW5nX3RhYmxlIHx8ICFvbmJvYXJkaW5nVG9GaW5pc2hcIiBjbGFzcz1cImJ0LXNwaW5uZXJcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW25nU3R5bGVdPVwiX2xvYWRpbmdfdGFibGUgJiYgeydtYXJnaW4tYm90dG9tJzogJzEwMHZoJ31cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzLnRpY2tldC1saXN0XT1cIiFfbG9hZGluZ190YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1vbmJvYXJkaW5nLXRhYmxlICpuZ0lmPVwib25ib2FyZGluZ1RvRmluaXNoXCIgW2NvbHVtbkRlZmluaXRpb25zXT1cImNvbHVtbkRlZmluaXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJvbmJvYXJkaW5nVG9GaW5pc2hcIiBbbGFuZ109XCJsYW5nXCIgW2lucHV0U2VhcmNoXT1cImlucHV0U2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1vbmJvYXJkaW5nLXRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtdGFiPlxyXG4gICAgICAgICAgICA8L21hdC10YWItZ3JvdXA+XHJcbiAgICAgICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImFkZC1vbmJvYXJkaW5nXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPlxyXG4gICAgICAgICAgICAgICAgTm91dmVsbGUgZGVtYW5kZSBk4oCZaW50w6lncmF0aW9uIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwhLS0gPGxpYi1vbmJvYXJkaW5nLXRhYmxlIFtfbG9hZGluZ190YWJsZV09XCJvbmJvYXJkaW5nTGlzdFwiIFtvbmJvYXJkaW5nTGlzdF09XCJvbmJvYXJkaW5nTGlzdFwiXHJcbiAgICAgICAgICAgICAgICBbY29sdW1uRGVmaW5pdGlvbnNdPVwiY29sdW1uRGVmaW5pdGlvbnNcIiBbbGFuZ109XCJsYW5nXCIgW2lucHV0U2VhcmNoXT1cImlucHV0U2VhcmNoXCI+XHJcbiAgICAgICAgICAgIDwvbGliLW9uYm9hcmRpbmctdGFibGU+IC0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvbWF0LWNhcmQ+Il19