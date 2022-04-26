import { __assign, __awaiter, __generator } from "tslib";
import { CellsComponentList, CoreMatTable } from "table";
import { Component } from '@angular/core';
import { DialogCreateOnboardingComponent } from '../../components/onboarding/dialog-create-onboarding/dialog-create-onboarding.component';
import * as i0 from "@angular/core";
import * as i1 from "../../onboarding.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/material/card";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/icon";
import * as i8 from "../../components/onboarding/onboarding-table/onboarding-table.component";
function OnboardingListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r884 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "ul");
    i0.ɵɵelementStart(4, "li", 5);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "li", 6);
    i0.ɵɵlistener("click", function OnboardingListComponent_div_1_Template_li_click_6_listener() { i0.ɵɵrestoreView(_r884); var ctx_r883 = i0.ɵɵnextContext(); return ctx_r883.filterOnboarding("all"); });
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "li", 6);
    i0.ɵɵlistener("click", function OnboardingListComponent_div_1_Template_li_click_8_listener() { i0.ɵɵrestoreView(_r884); var ctx_r885 = i0.ɵɵnextContext(); return ctx_r885.filterOnboarding("publish"); });
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "li", 6);
    i0.ɵɵlistener("click", function OnboardingListComponent_div_1_Template_li_click_10_listener() { i0.ɵɵrestoreView(_r884); var ctx_r886 = i0.ɵɵnextContext(); return ctx_r886.filterOnboarding("draft"); });
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "a", 7);
    i0.ɵɵlistener("click", function OnboardingListComponent_div_1_Template_a_click_12_listener() { i0.ɵɵrestoreView(_r884); var ctx_r887 = i0.ɵɵnextContext(); return ctx_r887.openDialog(); });
    i0.ɵɵtext(13, " Nouvelle demande d\u2019int\u00E9gration ");
    i0.ɵɵelementStart(14, "mat-icon");
    i0.ɵɵtext(15, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "lib-onboarding-table", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r882 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Vous avez actuellement ", ctx_r882.onboardingFormatList.length, " Demandes");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r882.currentFilter === "all" ? "active" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Tous (", ctx_r882.onboardingFormatList.length, ") ");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r882.currentFilter === "publish" ? "active" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Termin\u00E9es (", ctx_r882.onboardingFormatList.length, ") ");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r882.currentFilter === "draft" ? "active" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" A finaliser (", 0, ") ");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("_loading_table", ctx_r882.onboardingList)("onboardingList", ctx_r882.onboardingList)("columnDefinitions", ctx_r882.columnDefinitions)("lang", ctx_r882.lang)("inputSearch", ctx_r882.inputSearch);
} }
var _c0 = function () { return { "overflow-y": "hidden", "height": "100%", "display": "flex", "position": "absolute" }; };
var OnboardingListComponent = /** @class */ (function () {
    function OnboardingListComponent(service, router, route, dialog) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.inputSearch = '';
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
                override: ["/" + this.service.mainPath + "/request", 'TemplateId', '_id'],
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
                                return [4 /*yield*/, this.service.getAllProfil()];
                            case 2:
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
                            row.requestor = ((_b = (_a = row) === null || _a === void 0 ? void 0 : _a.vcontacts[0]) === null || _b === void 0 ? void 0 : _b.Name) || '';
                            row.Name = row.ContactName = ((_c = formUser) === null || _c === void 0 ? void 0 : _c.LastName) + " " + ((_d = formUser) === null || _d === void 0 ? void 0 : _d.FirstName) || "";
                            row.Profil = ((_e = formUser) === null || _e === void 0 ? void 0 : _e.Type_de_profil_Nowboard__c) || "";
                            row.Email = ((_f = formUser) === null || _f === void 0 ? void 0 : _f.Email) || '';
                            row.TemplateName = row.vtemplates.length > 0 ? row.vtemplates[0].Name : '';
                            row.Id = index + 1;
                            return row;
                        });
                        _this.onboardingFormatList = x;
                        _this.onboardingList = new CoreMatTable(x, {
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
    OnboardingListComponent.prototype.filterOnboarding = function (name) {
        this.currentFilter = name;
        var newFiltered = name === 'draft' ? [] : this.onboardingFormatList;
        this.onboardingList = new CoreMatTable(newFiltered, {
            active: 'Id', direction: 'desc'
        }, { active: '', valueStart: null, valueEnd: null }, 15, true, true);
    };
    OnboardingListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogCreateOnboardingComponent, {
            data: {
                templates: this.templates
            }
        });
        dialogRef.afterClosed().subscribe(function (current) {
            if (current) {
                _this.service.currentOnboarding.next(current);
                _this.router.navigate([_this.service.mainPath + ("/request/" + current.TemplateId + "/0")]);
            }
        });
    };
    OnboardingListComponent.ɵfac = function OnboardingListComponent_Factory(t) { return new (t || OnboardingListComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.MatDialog)); };
    OnboardingListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 2, vars: 3, consts: [[1, "full-height", 2, "background", "#F4F7F9 0% 0% no-repeat padding-box", 3, "ngStyle"], ["class", "main-all-ticket-list onboarding-list-container", 4, "ngIf"], [1, "main-all-ticket-list", "onboarding-list-container"], [1, "content-view-list-ticket"], [1, "list-title"], [2, "cursor", "default"], [3, "click"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-onboarding", 3, "click"], [3, "_loading_table", "onboardingList", "columnDefinitions", "lang", "inputSearch"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-card", 0);
            i0.ɵɵtemplate(1, OnboardingListComponent_div_1_Template, 17, 15, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", ctx._loading_table && i0.ɵɵpureFunction0(2, _c0));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.onboardingList);
        } }, directives: [i4.MatCard, i5.NgStyle, i5.NgIf, i6.MatAnchor, i7.MatIcon, i8.OnboardingTableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:98%}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%], md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font:bold 13px/20px nexa;letter-spacing:0;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0;grid-row-gap:0;max-width:1500px;margin-left:auto;margin-right:auto;width:100%;animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{-ms-grid-row:2;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@-webkit-keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){-webkit-animation:1.25s linear infinite three-quarters-loader;animation:1.25s linear infinite three-quarters-loader;border:4px solid #4285f4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}@-webkit-keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font:18px/20px \"Nexa Text\";letter-spacing:0;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;font:17px/20px \"Nexa Text Bold\";letter-spacing:0;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px \"Nexa Text Bold\";letter-spacing:0;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width:1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03a9f4;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin;position:relative;left:50%;top:25vh}@-webkit-keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:10px;cursor:pointer}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   .add-onboarding[_ngcontent-%COMP%]{background:#171f26;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFlBQVksRUFBNkIsTUFBTSxPQUFPLENBQUM7QUFDcEYsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx5RkFBeUYsQ0FBQzs7Ozs7Ozs7Ozs7O0lDRHRJLDhCQUNJO0lBQUEsOEJBQ0k7SUFBQSw4QkFDSTtJQUFBLDBCQUNJO0lBQUEsNkJBQTZCO0lBQUEsWUFBK0Q7SUFBQSxpQkFBSztJQUNqRyw2QkFBc0Y7SUFBbkMsNExBQTBCLEtBQUssS0FBRTtJQUFFLFlBQ2hEO0lBQUEsaUJBQUs7SUFDM0MsNkJBQ0k7SUFEbUQsNExBQTBCLFNBQVMsS0FBRTtJQUN4RixZQUE0QztJQUFBLGlCQUFLO0lBQ3JELDhCQUNJO0lBRGlELDZMQUEwQixPQUFPLEtBQUU7SUFDcEYsYUFBb0I7SUFBQSxpQkFBSztJQUNqQyxpQkFBSztJQUNMLDZCQUNJO0lBRHNFLDJMQUFzQjtJQUM1RiwyREFBK0I7SUFBQSxpQ0FBVTtJQUFBLG9CQUFHO0lBQUEsaUJBQVc7SUFDM0QsaUJBQUk7SUFDUixpQkFBTTtJQUNOLDJDQUV1QjtJQUMzQixpQkFBTTtJQUNWLGlCQUFNOzs7SUFoQnVDLGVBQStEO0lBQS9ELG1HQUErRDtJQUN4RixlQUE4QztJQUE5QywrREFBOEM7SUFBb0MsZUFDaEQ7SUFEZ0QsNEVBQ2hEO0lBQ2xDLGVBQWtEO0lBQWxELG1FQUFrRDtJQUNsRCxlQUE0QztJQUE1Qyxz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QVlDO1FBWEMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUU7WUFDbEUsSUFBSSxFQUFFO2dCQUNKLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUzthQUMxQjtTQUNGLENBQUMsQ0FBQztRQUNILFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFZO1lBQzdDLElBQUksT0FBTyxFQUFFO2dCQUNYLEtBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFHLGNBQVksT0FBTyxDQUFDLFVBQVUsT0FBSSxDQUFBLENBQUMsQ0FBQyxDQUFBO2FBQ25GO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO2tHQXBLVSx1QkFBdUI7Z0VBQXZCLHVCQUF1QjtZQ2JwQyxtQ0FHSTtZQUFBLDBFQUNJO1lBb0JSLGlCQUFXOztZQXhCRCwwRUFDaUM7WUFFcUIsZUFBc0I7WUFBdEIseUNBQXNCOztrQ0RIdEY7Q0FrTEMsQUExS0QsSUEwS0M7U0FyS1ksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENlbGxzQ29tcG9uZW50TGlzdCwgQ29yZU1hdFRhYmxlLCBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlIH0gZnJvbSBcInRhYmxlXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItb25ib2FyZGluZy1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG9uYm9hcmRpbmdMaXN0OiBhbnlcclxuICBpbnB1dFNlYXJjaCA9ICcnO1xyXG4gIGN1cnJlbnRGaWx0ZXIgPSAnYWxsJ1xyXG4gIHB1YmxpYyBzZWFyY2g6IHN0cmluZyA9ICcnO1xyXG4gIG9uYm9hcmRpbmdGb3JtYXRMaXN0ID0gW11cclxuICB0ZW1wbGF0ZXMgPSBbXVxyXG4gIHB1YmxpYyBjb2x1bW5EZWZpbml0aW9uczogZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZVtdID0gW1xyXG4gICAge1xyXG4gICAgICBrZXk6ICdOYW1lJyxcclxuICAgICAgdmFsdWU6ICdOYW1lJyxcclxuICAgICAgb3JkZXI6IDEsXHJcbiAgICAgIGNsYXNzOiAndS0xJyxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ0lkJyxcclxuICAgICAgdmFsdWU6ICdJZCcsXHJcbiAgICAgIG9yZGVyOiAyLFxyXG4gICAgICBjbGFzczogJ3UtMicsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LCB7XHJcbiAgICAgIGtleTogJ3JlcXVlc3RvcicsXHJcbiAgICAgIHZhbHVlOiAnRGVtYW5kZXVyJyxcclxuICAgICAgb3JkZXI6IDMsXHJcbiAgICAgIGNsYXNzOiAndS0zJyxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgIH0sIHtcclxuICAgICAga2V5OiAnVGVtcGxhdGVOYW1lJyxcclxuICAgICAgdmFsdWU6ICdTZXJ2aWNlJyxcclxuICAgICAgb3JkZXI6IDQsXHJcbiAgICAgIGNsYXNzOiAndS00JyxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ2NyZWF0ZWRBdCcsXHJcbiAgICAgIHZhbHVlOiAnRGF0ZSBkZSBjcsOpYXRpb24nLFxyXG4gICAgICBvcmRlcjogNSxcclxuICAgICAgY2xhc3M6ICd1LTUnLFxyXG4gICAgICBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5EYXRlRm9ybWF0LFxyXG4gICAgICBzb3J0OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICBrZXk6ICdDb250YWN0TmFtZScsXHJcbiAgICAvLyAgIHZhbHVlOiAnQ29udGFjdCcsXHJcbiAgICAvLyAgIG9yZGVyOiA2LFxyXG4gICAgLy8gICBjbGFzczogJ3UtNicsXHJcbiAgICAvLyAgIHNvcnQ6IHRydWUsXHJcbiAgICAvLyAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0Lk5hbWVBdmF0YXIsXHJcbiAgICAvLyAgIG92ZXJyaWRlOiBbJ0NvbnRhY3ROYW1lJywgJ0VtYWlsJ10sXHJcbiAgICAvLyB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICdTdGF0dXMnLFxyXG4gICAgICB2YWx1ZTogXCJTdGF0dXNcIixcclxuICAgICAgb3JkZXI6IDYsXHJcbiAgICAgIGNsYXNzOiAndS02JyxcclxuICAgICAgc29ydDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnQWN0aW9uJyxcclxuICAgICAgdmFsdWU6ICdBY3Rpb24nLFxyXG4gICAgICBvcmRlcjogNyxcclxuICAgICAgY2xhc3M6ICd1LTcnLFxyXG4gICAgICBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5CdXR0b25MaW5rVGV4dCxcclxuICAgICAgb3ZlcnJpZGU6IFtgLyR7dGhpcy5zZXJ2aWNlLm1haW5QYXRofS9yZXF1ZXN0YCwgJ1RlbXBsYXRlSWQnLCAnX2lkJ10sXHJcbiAgICAgIGFsaWduOiAnY2VudGVyJ1xyXG4gICAgfVxyXG5cclxuICBdO1xyXG4gIGxvY2FsU2VydmljZTogYW55O1xyXG4gIHB1YmxpYyBfbG9hZGluZ190YWJsZSA9IHRydWU7XHJcbiAgcHJpdmF0ZSBIaWRkZW5JbmRleCA9IDA7XHJcbiAgcHVibGljIGluZGV4ID0gMDtcclxuICBsYW5nID0gJ2ZyJztcclxuXHJcbiAgY2FuY2VsU2VhcmNoKCkge1xyXG4gICAgdGhpcy5pbnB1dFNlYXJjaCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZ1xyXG4gICkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLl90ZW1wbGF0ZXMuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMudGVtcGxhdGVzID0gZGF0YTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbE9uYm9hcmRpbmcoKTtcclxuICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xyXG4gICAgfSwgNTAwKTtcclxuICAgIHRoaXMuc2VydmljZS5vbmJvYXJkaW5nLnN1YnNjcmliZSgob25ib2FyZGluZykgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XHJcbiAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgaWYgKG9uYm9hcmRpbmcpIHtcclxuICAgICAgICBsZXQgeCA9IG9uYm9hcmRpbmcubWFwKChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gcm93LmNhdGVnb3JpZXMuZmluZCgoY2F0KSA9PiBjYXQubmFtZSA9PT0gXCJVdGlsaXNhdGV1clwiKTtcclxuICAgICAgICAgIGNvbnN0IGZvcm1Vc2VyID0gdXNlci5mb3Jtcy5tYXAoKGZvcm0pID0+ICh7IGtleTogZm9ybS5rZXksIHZhbHVlOiBmb3JtLnZhbHVlIH0pKS5yZWR1Y2UoKGEsIHYpID0+ICh7IC4uLmEsIFt2LmtleV06IHYudmFsdWUgfSksIHt9KVxyXG4gICAgICAgICAgcm93LlN0YXR1cyA9IHJvdy5GaW5pc2hlZCA/IFwiVGVybWluZXJcIiA6IFwiQSBmaW5hbGlzZXJcIjtcclxuICAgICAgICAgIHJvdy5yZXF1ZXN0b3IgPSByb3c/LnZjb250YWN0c1swXT8uTmFtZSB8fCAnJztcclxuICAgICAgICAgIHJvdy5OYW1lID0gcm93LkNvbnRhY3ROYW1lID0gZm9ybVVzZXI/Lkxhc3ROYW1lICsgXCIgXCIgKyBmb3JtVXNlcj8uRmlyc3ROYW1lIHx8IFwiXCJcclxuICAgICAgICAgIHJvdy5Qcm9maWwgPSBmb3JtVXNlcj8uVHlwZV9kZV9wcm9maWxfTm93Ym9hcmRfX2MgfHwgXCJcIlxyXG4gICAgICAgICAgcm93LkVtYWlsID0gZm9ybVVzZXI/LkVtYWlsIHx8ICcnO1xyXG4gICAgICAgICAgcm93LlRlbXBsYXRlTmFtZSA9IHJvdy52dGVtcGxhdGVzLmxlbmd0aCA+IDAgPyByb3cudnRlbXBsYXRlc1swXS5OYW1lIDogJyc7XHJcbiAgICAgICAgICByb3cuSWQgPSBpbmRleCArIDE7XHJcbiAgICAgICAgICByZXR1cm4gcm93O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nRm9ybWF0TGlzdCA9IHg7XHJcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nTGlzdCA9IG5ldyBDb3JlTWF0VGFibGUoeCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYWN0aXZlOiAnSWQnLCBkaXJlY3Rpb246ICdkZXNjJ1xyXG4gICAgICAgICAgfSwgeyBhY3RpdmU6ICcnLCB2YWx1ZVN0YXJ0OiBudWxsLCB2YWx1ZUVuZDogbnVsbCB9LCAxNSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyQ2hhbmdlKCRldmVudCkge1xyXG4gICAgaWYgKCRldmVudC5pbmRleCAhPT0gdGhpcy5IaWRkZW5JbmRleCkge1xyXG4gICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICB0aGlzLmluZGV4ID0gJGV2ZW50LmluZGV4O1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcclxuICAgICAgICBbXSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHsgcGFnZTogbnVsbCwgdGFiOiAkZXZlbnQuaW5kZXggKyAxIH0sXHJcbiAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHRoaXMuSGlkZGVuSW5kZXggPSAkZXZlbnQuaW5kZXhcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IGZhbHNlO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbHRlck9uYm9hcmRpbmcobmFtZSkge1xyXG4gICAgdGhpcy5jdXJyZW50RmlsdGVyID0gbmFtZTtcclxuICAgIGNvbnN0IG5ld0ZpbHRlcmVkID0gbmFtZSA9PT0gJ2RyYWZ0JyA/IFtdIDogdGhpcy5vbmJvYXJkaW5nRm9ybWF0TGlzdFxyXG4gICAgdGhpcy5vbmJvYXJkaW5nTGlzdCA9IG5ldyBDb3JlTWF0VGFibGUobmV3RmlsdGVyZWQsXHJcbiAgICAgIHtcclxuICAgICAgICBhY3RpdmU6ICdJZCcsIGRpcmVjdGlvbjogJ2Rlc2MnXHJcbiAgICAgIH0sIHsgYWN0aXZlOiAnJywgdmFsdWVTdGFydDogbnVsbCwgdmFsdWVFbmQ6IG51bGwgfSwgMTUsIHRydWUsIHRydWUpO1xyXG5cclxuICB9XHJcblxyXG4gIG9wZW5EaWFsb2coKSB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0NyZWF0ZU9uYm9hcmRpbmdDb21wb25lbnQsIHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRlbXBsYXRlczogdGhpcy50ZW1wbGF0ZXNcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKGN1cnJlbnQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5jdXJyZW50T25ib2FyZGluZy5uZXh0KGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnNlcnZpY2UubWFpblBhdGggKyBgL3JlcXVlc3QvJHtjdXJyZW50LlRlbXBsYXRlSWR9LzBgXSlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxtYXQtY2FyZCBbbmdTdHlsZV09XCJfbG9hZGluZ190YWJsZSAmJiB7J292ZXJmbG93LXknOiAnaGlkZGVuJywgJ2hlaWdodCc6ICcxMDAlJyxcclxuJ2Rpc3BsYXknOiAnZmxleCcsICdwb3NpdGlvbic6ICdhYnNvbHV0ZSd9XCIgY2xhc3M9XCJmdWxsLWhlaWdodFwiXHJcbiAgICBzdHlsZT1cImJhY2tncm91bmQ6ICNGNEY3RjkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1haW4tYWxsLXRpY2tldC1saXN0IG9uYm9hcmRpbmctbGlzdC1jb250YWluZXJcIiAqbmdJZj1cIm9uYm9hcmRpbmdMaXN0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtdmlldy1saXN0LXRpY2tldFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC10aXRsZSBcIj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9XCJjdXJzb3I6IGRlZmF1bHQ7XCI+Vm91cyBhdmV6IGFjdHVlbGxlbWVudCB7e29uYm9hcmRpbmdGb3JtYXRMaXN0Lmxlbmd0aH19IERlbWFuZGVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgW2NsYXNzXT1cImN1cnJlbnRGaWx0ZXI9PT0nYWxsJyA/ICdhY3RpdmUnIDonJ1wiIChjbGljayk9XCJmaWx0ZXJPbmJvYXJkaW5nKCdhbGwnKVwiPiBUb3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh7e29uYm9hcmRpbmdGb3JtYXRMaXN0Lmxlbmd0aH19KSA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBbY2xhc3NdPVwiY3VycmVudEZpbHRlcj09PSdwdWJsaXNoJyA/ICdhY3RpdmUnIDonJ1wiIChjbGljayk9XCJmaWx0ZXJPbmJvYXJkaW5nKCdwdWJsaXNoJylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGVybWluw6llcyAoe3tvbmJvYXJkaW5nRm9ybWF0TGlzdC5sZW5ndGh9fSkgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgW2NsYXNzXT1cImN1cnJlbnRGaWx0ZXI9PT0nZHJhZnQnID8gJ2FjdGl2ZScgOicnXCIgKGNsaWNrKT1cImZpbHRlck9uYm9hcmRpbmcoJ2RyYWZ0JylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQSBmaW5hbGlzZXIgKHt7MH19KSA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImFkZC1vbmJvYXJkaW5nXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE5vdXZlbGxlIGRlbWFuZGUgZOKAmWludMOpZ3JhdGlvbiA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxsaWItb25ib2FyZGluZy10YWJsZSBbX2xvYWRpbmdfdGFibGVdPVwib25ib2FyZGluZ0xpc3RcIiBbb25ib2FyZGluZ0xpc3RdPVwib25ib2FyZGluZ0xpc3RcIlxyXG4gICAgICAgICAgICAgICAgW2NvbHVtbkRlZmluaXRpb25zXT1cImNvbHVtbkRlZmluaXRpb25zXCIgW2xhbmddPVwibGFuZ1wiIFtpbnB1dFNlYXJjaF09XCJpbnB1dFNlYXJjaFwiPlxyXG4gICAgICAgICAgICA8L2xpYi1vbmJvYXJkaW5nLXRhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvbWF0LWNhcmQ+Il19