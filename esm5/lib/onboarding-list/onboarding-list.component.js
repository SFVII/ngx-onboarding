import { __awaiter, __generator } from "tslib";
import { Component } from '@angular/core';
import { CellsComponentList, CoreMatTable } from "table";
import * as i0 from "@angular/core";
import * as i1 from "../onboarding.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/card";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/forms";
import * as i7 from "@angular/material/tabs";
import * as i8 from "table";
function OnboardingListComponent_div_1_img_8_Template(rf, ctx) { if (rf & 1) {
    var _r737 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 15);
    i0.ɵɵlistener("click", function OnboardingListComponent_div_1_img_8_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r737); var ctx_r736 = i0.ɵɵnextContext(2); return ctx_r736.cancelSearch(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("src", "/assets/icons/search_off-24px.svg", i0.ɵɵsanitizeUrl);
} }
function OnboardingListComponent_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r733 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r733.onboardingList == null ? null : ctx_r733.onboardingList.totalElements, " ticket(s) ");
} }
function OnboardingListComponent_div_1_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    var ctx_r734 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" Onboarding (", (ctx_r734.onboardingList == null ? null : ctx_r734.onboardingList.totalElements) || (ctx_r734.onboardingList == null ? null : ctx_r734.onboardingList.data == null ? null : ctx_r734.onboardingList.data.length), ") ");
} }
function OnboardingListComponent_div_1_ng_template_16_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 20);
} }
function OnboardingListComponent_div_1_ng_template_16_ngx_design_table_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-design-table", 21);
} if (rf & 2) {
    var ctx_r739 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnDefinitions", ctx_r739.columnDefinitions)("displayDetail", false)("data", ctx_r739.onboardingList)("lang", ctx_r739.lang)("btnOverride", true)("inputSearch", ctx_r739.inputSearch)("EmptyRow", true);
} }
var _c0 = function () { return { "margin-bottom": "100vh" }; };
function OnboardingListComponent_div_1_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_16_div_0_Template, 1, 0, "div", 17);
    i0.ɵɵelement(1, "div", 18);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_16_ngx_design_table_3_Template, 1, 7, "ngx-design-table", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r735 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r735._loading_table || !ctx_r735.onboardingList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r735._loading_table && i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ticket-list", !ctx_r735._loading_table);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r735.onboardingList);
} }
function OnboardingListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r741 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵtext(3, " Suivi des demandes ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "search");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 6);
    i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_div_1_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r741); var ctx_r740 = i0.ɵɵnextContext(); return ctx_r740.inputSearch = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, OnboardingListComponent_div_1_img_8_Template, 1, 1, "img", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 8);
    i0.ɵɵelementStart(10, "span", 9);
    i0.ɵɵtext(11, " Vous avez actuellement ");
    i0.ɵɵtemplate(12, OnboardingListComponent_div_1_span_12_Template, 2, 1, "span", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "mat-tab-group", 11);
    i0.ɵɵlistener("selectedIndexChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedIndexChange_13_listener($event) { i0.ɵɵrestoreView(_r741); var ctx_r742 = i0.ɵɵnextContext(); return ctx_r742.index = $event; })("selectedTabChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedTabChange_13_listener($event) { i0.ɵɵrestoreView(_r741); var ctx_r743 = i0.ɵɵnextContext(); return ctx_r743.triggerChange($event); });
    i0.ɵɵelementStart(14, "mat-tab", 12);
    i0.ɵɵtemplate(15, OnboardingListComponent_div_1_ng_template_15_Template, 1, 1, "ng-template", 13);
    i0.ɵɵtemplate(16, OnboardingListComponent_div_1_ng_template_16_Template, 4, 6, "ng-template", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r731 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngModel", ctx_r731.inputSearch);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r731.inputSearch && ctx_r731.inputSearch != "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r731.index == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@.disabled", true)("selectedIndex", ctx_r731.index);
} }
var _c1 = function () { return { "overflow-y": "hidden", "height": "100%", "display": "flex", "position": "absolute" }; };
var OnboardingListComponent = /** @class */ (function () {
    function OnboardingListComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.inputSearch = '';
        this.search = '';
        this.columnDefinitions = [
            {
                key: 'createdAt',
                value: 'Date de création',
                order: 1,
                class: 'u-1',
                module: CellsComponentList.DateFormat,
                sort: true
            },
            {
                key: 'ContactName',
                value: 'Contact',
                order: 2,
                class: 'u-2',
                module: CellsComponentList.NameAvatar,
                sort: true
            },
        ];
        this._loading_table = true;
        this.HiddenIndex = 0;
        this.index = 0;
        this.lang = 'fr';
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
                                return [2 /*return*/];
                        }
                    });
                }); }, 500);
                this.service.onboarding.subscribe(function (onboarding) {
                    console.log(onboarding);
                    setTimeout(function () {
                        _this._loading_table = false;
                    }, 2000);
                    if (onboarding) {
                        //this.onboardingList=onboarding;
                        var x = onboarding.map(function (row) {
                            console.log(row.vcontacts);
                            row.ContactName = row.vcontacts[0].Name;
                            return row;
                        });
                        console.log(x);
                        _this.onboardingList = new CoreMatTable(x, {
                            active: 'CreatedDate', direction: 'desc'
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
    OnboardingListComponent.ɵfac = function OnboardingListComponent_Factory(t) { return new (t || OnboardingListComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
    OnboardingListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 2, vars: 3, consts: [[1, "full-height", 2, "background", "#F4F7F9 0% 0% no-repeat padding-box", 3, "ngStyle"], ["class", "main-all-ticket-list", 4, "ngIf"], [1, "main-all-ticket-list"], [1, "page-title-container"], [1, "page-title"], [1, "page-search"], ["placeholder", "Recherche", "type", "text", 1, "search-box", 3, "ngModel", "ngModelChange"], [3, "src", "click", 4, "ngIf"], [1, "content-view-list-ticket"], [1, "mat-tab-left"], ["class", "mat-tab-left-count", 4, "ngIf"], [1, "list-ticket-tab", 3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], [2, "background-image", "none"], ["mat-tab-label", ""], ["matTabContent", ""], [3, "src", "click"], [1, "mat-tab-left-count"], ["class", "bt-spinner", 4, "ngIf"], [3, "ngStyle"], [3, "columnDefinitions", "displayDetail", "displayComponent", "data", "lang", "btnOverride", "inputSearch", "EmptyRow", 4, "ngIf"], [1, "bt-spinner"], [3, "columnDefinitions", "displayDetail", "displayComponent", "data", "lang", "btnOverride", "inputSearch", "EmptyRow"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-card", 0);
            i0.ɵɵtemplate(1, OnboardingListComponent_div_1_Template, 17, 5, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", ctx._loading_table && i0.ɵɵpureFunction0(2, _c1));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.onboardingList);
        } }, directives: [i3.MatCard, i4.NgStyle, i4.NgIf, i5.MatIcon, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i7.MatTabGroup, i7.MatTab, i7.MatTabLabel, i7.MatTabContent, i8.TableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:100%}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%], md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font:bold 13px/20px nexa;letter-spacing:0;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0;grid-row-gap:0;max-width:1500px;margin-left:auto;margin-right:auto;width:100%;animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{-ms-grid-row:2;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}  .mat-tab-label-active .mat-tab-label-content{color:#510b4e;font-weight:600}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@-webkit-keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){-webkit-animation:1.25s linear infinite three-quarters-loader;animation:1.25s linear infinite three-quarters-loader;border:4px solid #4285f4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}@-webkit-keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font:18px/20px \"Nexa Text\";letter-spacing:0;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;font:17px/20px \"Nexa Text Bold\";letter-spacing:0;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px \"Nexa Text Bold\";letter-spacing:0;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width:1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03a9f4;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin;position:relative;left:50%;top:25vh}@-webkit-keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}"] });
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
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }, { type: i2.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQudHMiLCJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsWUFBWSxFQUFpRSxNQUFNLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7O0lDYXZHLCtCQUVKO0lBRlMscU1BQXdCO0lBQTdCLGlCQUVKOztJQURTLDJFQUEyQzs7O0lBUWhELGdDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFPOzs7SUFESCxlQUNKO0lBREkseUhBQ0o7OztJQVVRLFlBQ0o7OztJQURJLDhQQUNKOzs7SUFFSSwwQkFBd0U7OztJQUtwRSx1Q0FRbUI7OztJQVJzQiw4REFBdUMsd0JBQUEsaUNBQUEsdUJBQUEscUJBQUEscUNBQUEsa0JBQUE7Ozs7SUFMcEYsOEZBQWtFO0lBRWxFLDBCQUFvRTtJQUVwRSwyQkFDSTtJQUFBLHdIQVFBO0lBQ0osaUJBQU07OztJQWRELDBFQUF5QztJQUV6QyxlQUF3RDtJQUF4RCwrRUFBd0Q7SUFFeEQsZUFBcUM7SUFBckMsdURBQXFDO0lBQ3BCLGVBQXNCO0lBQXRCLDhDQUFzQjs7OztJQXpDaEUsOEJBQ0k7SUFBQSw4QkFFSTtJQUFBLDhCQUNJO0lBQUEsb0NBQ0o7SUFBQSxpQkFBTTtJQUVOLDhCQUNJO0lBQUEsZ0NBQVU7SUFBQSxzQkFBTTtJQUFBLGlCQUFXO0lBQzNCLGdDQUdBO0lBSE8sNE5BQXlCO0lBQWhDLGlCQUdBO0lBQUEsOEVBRUo7SUFBQSxpQkFBTTtJQUNWLGlCQUFNO0lBRU4sOEJBQ0k7SUFBQSxnQ0FDSTtJQUFBLHlDQUVBO0lB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QUFiLFVBQWMsTUFBTTtRQUFwQixpQkFrQkQ7UUFqQkcsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFHM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNoQixFQUFFLEVBQ0Y7Z0JBQ0ksVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUN0QixXQUFXLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBQztnQkFDaEQsbUJBQW1CLEVBQUUsT0FBTzthQUMvQixDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7WUFDL0IsVUFBVSxDQUFDO2dCQUNQLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNaO0lBQ0wsQ0FBQztrR0FsRlksdUJBQXVCO2dFQUF2Qix1QkFBdUI7WUNWcEMsbUNBR0k7WUFBQSx5RUFDSTtZQStFUixpQkFBVzs7WUFuRkQsMEVBQ2lDO1lBRUwsZUFBc0I7WUFBdEIseUNBQXNCOztrQ0RINUQ7Q0E4RkMsQUF6RkQsSUF5RkM7U0FwRlksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7Q2VsbHNDb21wb25lbnRMaXN0LCBDb3JlTWF0VGFibGUsIENvcmVNYXRUYWJsZUludGVyZmFjZSwgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSwgVGFibGVTZXJ2aWNlfSBmcm9tIFwidGFibGVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItb25ib2FyZGluZy1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgb25ib2FyZGluZ0xpc3Q6IGFueVxuICBpbnB1dFNlYXJjaCA9ICcnO1xuICBwdWJsaWMgc2VhcmNoOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGNvbHVtbkRlZmluaXRpb25zOiBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlW10gPSBbXG4gICAge1xuICAgICAgICBrZXk6ICdjcmVhdGVkQXQnLFxuICAgICAgICB2YWx1ZTogJ0RhdGUgZGUgY3LDqWF0aW9uJyxcbiAgICAgICAgb3JkZXI6IDEsXG4gICAgICAgIGNsYXNzOiAndS0xJyxcbiAgICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuRGF0ZUZvcm1hdCxcbiAgICAgICAgc29ydDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgICBrZXk6ICdDb250YWN0TmFtZScsXG4gICAgICAgIHZhbHVlOiAnQ29udGFjdCcsXG4gICAgICAgIG9yZGVyOiAyLFxuICAgICAgICBjbGFzczogJ3UtMicsXG4gICAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0Lk5hbWVBdmF0YXIsXG4gICAgICAgIHNvcnQ6IHRydWVcbiAgICB9LFxuICBdO1xuICBsb2NhbFNlcnZpY2U6IGFueTtcbiAgcHVibGljIF9sb2FkaW5nX3RhYmxlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBIaWRkZW5JbmRleCA9IDA7XG4gIHB1YmxpYyBpbmRleCA9IDA7XG4gIGxhbmcgPSAnZnInO1xuXG4gIGNhbmNlbFNlYXJjaCgpIHtcbiAgICB0aGlzLmlucHV0U2VhcmNoID0gJyc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNlcnZpY2U6T25ib2FyZGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgKSB7IH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxPbmJvYXJkaW5nKCk7XG4gICAgfSwgNTAwKTtcbiAgICB0aGlzLnNlcnZpY2Uub25ib2FyZGluZy5zdWJzY3JpYmUoKG9uYm9hcmRpbmcpPT57XG4gICAgICBjb25zb2xlLmxvZyhvbmJvYXJkaW5nKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XG4gICAgICB9LCAyMDAwKTtcblxuICAgICAgaWYob25ib2FyZGluZyl7XG4gICAgICAgIC8vdGhpcy5vbmJvYXJkaW5nTGlzdD1vbmJvYXJkaW5nO1xuICAgICAgICBsZXQgeCA9IG9uYm9hcmRpbmcubWFwKChyb3cpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyb3cudmNvbnRhY3RzKTtcbiAgICAgICAgICByb3cuQ29udGFjdE5hbWUgPSByb3cudmNvbnRhY3RzWzBdLk5hbWU7XG4gICAgICAgICAgcmV0dXJuIHJvdztcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coeCk7XG4gICAgICAgIHRoaXMub25ib2FyZGluZ0xpc3QgPSBuZXcgQ29yZU1hdFRhYmxlKHgsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGFjdGl2ZTogJ0NyZWF0ZWREYXRlJywgZGlyZWN0aW9uOiAnZGVzYydcbiAgICAgICAgICB9LCB7YWN0aXZlOiAnJywgdmFsdWVTdGFydDogbnVsbCwgdmFsdWVFbmQ6IG51bGx9LCAxNSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHRyaWdnZXJDaGFuZ2UoJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudC5pbmRleCAhPT0gdGhpcy5IaWRkZW5JbmRleCkge1xuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gdHJ1ZTtcblxuXG4gICAgICAgIHRoaXMuaW5kZXggPSAkZXZlbnQuaW5kZXg7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICAgICAgW10sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge3BhZ2U6IG51bGwsIHRhYjogJGV2ZW50LmluZGV4ICsgMX0sXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJywgLy8gcmVtb3ZlIHRvIHJlcGxhY2UgYWxsIHF1ZXJ5IHBhcmFtcyBieSBwcm92aWRlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuSGlkZGVuSW5kZXggPSAkZXZlbnQuaW5kZXhcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cbn1cblxufVxuIiwiPG1hdC1jYXJkIFtuZ1N0eWxlXT1cIl9sb2FkaW5nX3RhYmxlICYmIHsnb3ZlcmZsb3cteSc6ICdoaWRkZW4nLCAnaGVpZ2h0JzogJzEwMCUnLFxuJ2Rpc3BsYXknOiAnZmxleCcsICdwb3NpdGlvbic6ICdhYnNvbHV0ZSd9XCIgY2xhc3M9XCJmdWxsLWhlaWdodFwiXG4gICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjRjRGN0Y5IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1hbGwtdGlja2V0LWxpc3RcIiAqbmdJZj1cIm9uYm9hcmRpbmdMaXN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLXRpdGxlLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS10aXRsZVwiPlxuICAgICAgICAgICAgICAgIFN1aXZpIGRlcyBkZW1hbmRlc1xuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5zZWFyY2g8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cImlucHV0U2VhcmNoXCIgY2xhc3M9XCJzZWFyY2gtYm94XCIgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGVcIlxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiPlxuXG4gICAgICAgICAgICAgICAgPGltZyAoY2xpY2spPVwiY2FuY2VsU2VhcmNoKClcIiAqbmdJZj1cImlucHV0U2VhcmNoICYmIGlucHV0U2VhcmNoICE9ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwiJy9hc3NldHMvaWNvbnMvc2VhcmNoX29mZi0yNHB4LnN2ZydcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC12aWV3LWxpc3QtdGlja2V0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdC10YWItbGVmdFwiPlxuICAgICAgICAgICAgICAgIFZvdXMgYXZleiBhY3R1ZWxsZW1lbnRcblxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaW5kZXggPT0gMFwiIGNsYXNzPVwibWF0LXRhYi1sZWZ0LWNvdW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IG9uYm9hcmRpbmdMaXN0Py50b3RhbEVsZW1lbnRzIH19IHRpY2tldChzKVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDwhLS08c3BhbiAqbmdJZj1cImluZGV4ID09IDFcIiBjbGFzcz1cIm1hdC10YWItbGVmdC1jb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICB7e19sb2FkaW5nX3RpY2tldHNfY2xvc2VkID8gdGlja2V0Q2xvc2VkTmIgOiBjbG9zZWQ/LnRvdGFsRWxlbWVudHN9fSB0aWNrZXQocylcbiAgICAgICAgICAgICAgICA8L3NwYW4+LS0+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8bWF0LXRhYi1ncm91cCBbQC5kaXNhYmxlZF09XCJ0cnVlXCIgY2xhc3M9XCJsaXN0LXRpY2tldC10YWJcIiBbKHNlbGVjdGVkSW5kZXgpXT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZFRhYkNoYW5nZSk9XCJ0cmlnZ2VyQ2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8bWF0LXRhYiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgT25ib2FyZGluZyAoe3tvbmJvYXJkaW5nTGlzdD8udG90YWxFbGVtZW50cyB8fCBvbmJvYXJkaW5nTGlzdD8uZGF0YT8ubGVuZ3RofX0pXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXRUYWJDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIl9sb2FkaW5nX3RhYmxlIHx8ICFvbmJvYXJkaW5nTGlzdFwiIGNsYXNzPVwiYnQtc3Bpbm5lclwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtuZ1N0eWxlXT1cIl9sb2FkaW5nX3RhYmxlICYmIHsnbWFyZ2luLWJvdHRvbSc6ICcxMDB2aCd9XCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzLnRpY2tldC1saXN0XT1cIiFfbG9hZGluZ190YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtZGVzaWduLXRhYmxlICpuZ0lmPVwib25ib2FyZGluZ0xpc3RcIiBbY29sdW1uRGVmaW5pdGlvbnNdPVwiY29sdW1uRGVmaW5pdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNwbGF5RGV0YWlsXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzcGxheUNvbXBvbmVudF09XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cIm9uYm9hcmRpbmdMaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFuZ109XCJsYW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYnRuT3ZlcnJpZGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0U2VhcmNoXT1cImlucHV0U2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbRW1wdHlSb3ddPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmd4LWRlc2lnbi10YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvbWF0LXRhYj5cbiAgICAgICAgICAgICAgICA8IS0tPG1hdC10YWI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgT2ZmYm9hcmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICh7e19sb2FkaW5nX3RpY2tldHNfY2xvc2VkID8gdGlja2V0Q2xvc2VkTmIgOiAoY2xvc2VkPy50b3RhbEVsZW1lbnRzIHx8IGNsb3NlZD8uZGF0YT8ubGVuZ3RoKX19KVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJfbG9hZGluZ190aWNrZXRzX2Nsb3NlZFwiIGNsYXNzPVwidGhyZWUtcXVhcnRlcnMtbG9hZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0VGFiQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfbG9hZGluZ190YWJsZSB8fCAhY2xvc2VkXCIgY2xhc3M9XCJidC1zcGlubmVyXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW25nU3R5bGVdPVwiX2xvYWRpbmdfdGFibGUgJiYgeydtYXJnaW4tYm90dG9tJzogJzEwMHZoJ31cIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3MudGlja2V0LWxpc3RdPVwiIV9sb2FkaW5nX3RhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1kZXNpZ24tdGFibGUgKm5nSWY9XCJjbG9zZWRcIiBbY29sdW1uRGVmaW5pdGlvbnNdPVwiY29sdW1uRGVmaW5pdGlvbnNDbG9zZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNwbGF5RGV0YWlsXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNwbGF5Q29tcG9uZW50XT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwiY2xvc2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFuZ109XCJsYW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYnRuT3ZlcnJpZGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0U2VhcmNoXT1cImlucHV0U2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbRW1wdHlSb3ddPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmd4LWRlc2lnbi10YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvbWF0LXRhYj4tLT5cbiAgICAgICAgICAgIDwvbWF0LXRhYi1ncm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L21hdC1jYXJkPiJdfQ==