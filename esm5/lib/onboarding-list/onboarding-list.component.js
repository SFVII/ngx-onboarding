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
    i0.ɵɵelementStart(0, "img", 14);
    i0.ɵɵlistener("click", function OnboardingListComponent_div_1_img_8_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r737); var ctx_r736 = i0.ɵɵnextContext(2); return ctx_r736.cancelSearch(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("src", "/assets/icons/search_off-24px.svg", i0.ɵɵsanitizeUrl);
} }
function OnboardingListComponent_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
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
    i0.ɵɵelement(0, "div", 19);
} }
function OnboardingListComponent_div_1_ng_template_16_ngx_design_table_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-design-table", 20);
} if (rf & 2) {
    var ctx_r739 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnDefinitions", ctx_r739.columnDefinitions)("displayDetail", true)("data", ctx_r739.onboardingList)("lang", ctx_r739.lang)("btnOverride", true)("inputSearch", ctx_r739.inputSearch)("EmptyRow", true);
} }
var _c0 = function () { return { "margin-bottom": "100vh" }; };
function OnboardingListComponent_div_1_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_16_div_0_Template, 1, 0, "div", 16);
    i0.ɵɵelement(1, "div", 17);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_16_ngx_design_table_3_Template, 1, 7, "ngx-design-table", 18);
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
    i0.ɵɵelementStart(14, "mat-tab");
    i0.ɵɵtemplate(15, OnboardingListComponent_div_1_ng_template_15_Template, 1, 1, "ng-template", 12);
    i0.ɵɵtemplate(16, OnboardingListComponent_div_1_ng_template_16_Template, 4, 6, "ng-template", 13);
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
                key: 'CreatedDate',
                value: 'Date de création',
                order: 1,
                class: 'u-4',
                module: CellsComponentList.DateFormat,
                sort: true
            }
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
                        _this.onboardingList = new CoreMatTable(onboarding, {
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
    OnboardingListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 2, vars: 3, consts: [[1, "full-height", 2, "background", "#F4F7F9 0% 0% no-repeat padding-box", 3, "ngStyle"], ["class", "main-all-ticket-list", 4, "ngIf"], [1, "main-all-ticket-list"], [1, "page-title-container"], [1, "page-title"], [1, "page-search"], ["placeholder", "Recherche", "type", "text", 1, "search-box", 3, "ngModel", "ngModelChange"], [3, "src", "click", 4, "ngIf"], [1, "content-view-list-ticket"], [1, "mat-tab-left"], ["class", "mat-tab-left-count", 4, "ngIf"], [1, "list-ticket-tab", 3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], ["mat-tab-label", ""], ["matTabContent", ""], [3, "src", "click"], [1, "mat-tab-left-count"], ["class", "bt-spinner", 4, "ngIf"], [3, "ngStyle"], [3, "columnDefinitions", "displayDetail", "displayComponent", "data", "lang", "btnOverride", "inputSearch", "EmptyRow", 4, "ngIf"], [1, "bt-spinner"], [3, "columnDefinitions", "displayDetail", "displayComponent", "data", "lang", "btnOverride", "inputSearch", "EmptyRow"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-card", 0);
            i0.ɵɵtemplate(1, OnboardingListComponent_div_1_Template, 17, 5, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", ctx._loading_table && i0.ɵɵpureFunction0(2, _c1));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.onboardingList);
        } }, directives: [i3.MatCard, i4.NgStyle, i4.NgIf, i5.MatIcon, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i7.MatTabGroup, i7.MatTab, i7.MatTabLabel, i7.MatTabContent, i8.TableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:100%}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%], md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font:bold 13px/20px nexa;letter-spacing:0;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0;grid-row-gap:0;max-width:1500px;margin-left:auto;margin-right:auto;width:100%;animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{-ms-grid-row:2;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}  .mat-tab-label-active .mat-tab-label-content{color:#510b4e;font-weight:600}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@-webkit-keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){-webkit-animation:1.25s linear infinite three-quarters-loader;animation:1.25s linear infinite three-quarters-loader;border:4px solid #4285f4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}@-webkit-keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font:18px/20px \"Nexa Text\";letter-spacing:0;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;font:17px/20px \"Nexa Text Bold\";letter-spacing:0;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px \"Nexa Text Bold\";letter-spacing:0;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width:1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03a9f4;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin;position:relative;left:50%;top:25vh}@-webkit-keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQudHMiLCJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsWUFBWSxFQUFpRSxNQUFNLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7O0lDYXZHLCtCQUVKO0lBRlMscU1BQXdCO0lBQTdCLGlCQUVKOztJQURTLDJFQUEyQzs7O0lBUWhELGdDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFPOzs7SUFESCxlQUNKO0lBREkseUhBQ0o7OztJQVVRLFlBQ0o7OztJQURJLDhQQUNKOzs7SUFFSSwwQkFBd0U7OztJQUtwRSx1Q0FRbUI7OztJQVJzQiw4REFBdUMsdUJBQUEsaUNBQUEsdUJBQUEscUJBQUEscUNBQUEsa0JBQUE7Ozs7SUFMcEYsOEZBQWtFO0lBRWxFLDBCQUFvRTtJQUVwRSwyQkFDSTtJQUFBLHdIQVFBO0lBQ0osaUJBQU07OztJQWRELDBFQUF5QztJQUV6QyxlQUF3RDtJQUF4RCwrRUFBd0Q7SUFFeEQsZUFBcUM7SUFBckMsdURBQXFDO0lBQ3BCLGVBQXNCO0lBQXRCLDhDQUFzQjs7OztJQXpDaEUsOEJBQ0k7SUFBQSw4QkFFSTtJQUFBLDhCQUNJO0lBQUEsb0NBQ0o7SUFBQSxpQkFBTTtJQUVOLDhCQUNJO0lBQUEsZ0NBQVU7SUFBQSxzQkFBTTtJQUFBLGlCQUFXO0lBQzNCLGdDQUdBO0lBSE8sNE5BQXlCO0lBQWhDLGlCQUdBO0lBQUEsOEVBRUo7SUFBQSxpQkFBTTtJQUNWLGlCQUFNO0lBRU4sOEJBQ0k7SUFBQSxnQ0FDSTtJQUFBLHlDQUVBO0lB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LFVBQVUsQ0FBQztnQkFDUCxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUNoQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDWjtJQUNMLENBQUM7a0dBcEVZLHVCQUF1QjtnRUFBdkIsdUJBQXVCO1lDVnBDLG1DQUdJO1lBQUEseUVBQ0k7WUErRVIsaUJBQVc7O1lBbkZELDBFQUNpQztZQUVMLGVBQXNCO1lBQXRCLHlDQUFzQjs7a0NESDVEO0NBZ0ZDLEFBM0VELElBMkVDO1NBdEVZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5pbXBvcnQge0NlbGxzQ29tcG9uZW50TGlzdCwgQ29yZU1hdFRhYmxlLCBDb3JlTWF0VGFibGVJbnRlcmZhY2UsIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2UsIFRhYmxlU2VydmljZX0gZnJvbSBcInRhYmxlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW9uYm9hcmRpbmctbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG9uYm9hcmRpbmdMaXN0OiBhbnlcbiAgaW5wdXRTZWFyY2ggPSAnJztcbiAgcHVibGljIHNlYXJjaDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBjb2x1bW5EZWZpbml0aW9uczogZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZVtdID0gW1xuICAgIHtcbiAgICAgICAga2V5OiAnQ3JlYXRlZERhdGUnLFxuICAgICAgICB2YWx1ZTogJ0RhdGUgZGUgY3LDqWF0aW9uJyxcbiAgICAgICAgb3JkZXI6IDEsXG4gICAgICAgIGNsYXNzOiAndS00JyxcbiAgICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuRGF0ZUZvcm1hdCxcbiAgICAgICAgc29ydDogdHJ1ZVxuICAgIH1cbiAgXTtcbiAgbG9jYWxTZXJ2aWNlOiBhbnk7XG4gIHB1YmxpYyBfbG9hZGluZ190YWJsZSA9IHRydWU7XG4gIHByaXZhdGUgSGlkZGVuSW5kZXggPSAwO1xuICBwdWJsaWMgaW5kZXggPSAwO1xuICBsYW5nID0gJ2ZyJztcblxuICBjYW5jZWxTZWFyY2goKSB7XG4gICAgdGhpcy5pbnB1dFNlYXJjaCA9ICcnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOk9uYm9hcmRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICkgeyB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsT25ib2FyZGluZygpO1xuICAgIH0sIDUwMCk7XG4gICAgdGhpcy5zZXJ2aWNlLm9uYm9hcmRpbmcuc3Vic2NyaWJlKChvbmJvYXJkaW5nKT0+e1xuICAgICAgY29uc29sZS5sb2cob25ib2FyZGluZyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IGZhbHNlO1xuICAgICAgfSwgMjAwMCk7XG5cbiAgICAgIGlmKG9uYm9hcmRpbmcpe1xuICAgICAgICAvL3RoaXMub25ib2FyZGluZ0xpc3Q9b25ib2FyZGluZztcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nTGlzdCA9IG5ldyBDb3JlTWF0VGFibGUob25ib2FyZGluZyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYWN0aXZlOiAnQ3JlYXRlZERhdGUnLCBkaXJlY3Rpb246ICdkZXNjJ1xuICAgICAgICAgIH0sIHthY3RpdmU6ICcnLCB2YWx1ZVN0YXJ0OiBudWxsLCB2YWx1ZUVuZDogbnVsbH0sIDE1LCB0cnVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdHJpZ2dlckNoYW5nZSgkZXZlbnQpIHtcbiAgICBpZiAoJGV2ZW50LmluZGV4ICE9PSB0aGlzLkhpZGRlbkluZGV4KSB7XG4gICAgICAgIHRoaXMuX2xvYWRpbmdfdGFibGUgPSB0cnVlO1xuXG5cbiAgICAgICAgdGhpcy5pbmRleCA9ICRldmVudC5pbmRleDtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICAgICAgICBbXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7cGFnZTogbnVsbCwgdGFiOiAkZXZlbnQuaW5kZXggKyAxfSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5IaWRkZW5JbmRleCA9ICRldmVudC5pbmRleFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRpbmdfdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxufVxuXG59XG4iLCI8bWF0LWNhcmQgW25nU3R5bGVdPVwiX2xvYWRpbmdfdGFibGUgJiYgeydvdmVyZmxvdy15JzogJ2hpZGRlbicsICdoZWlnaHQnOiAnMTAwJScsXG4nZGlzcGxheSc6ICdmbGV4JywgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJ31cIiBjbGFzcz1cImZ1bGwtaGVpZ2h0XCJcbiAgICAgICAgICBzdHlsZT1cImJhY2tncm91bmQ6ICNGNEY3RjkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1wiPlxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWFsbC10aWNrZXQtbGlzdFwiICpuZ0lmPVwib25ib2FyZGluZ0xpc3RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtdGl0bGUtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgU3VpdmkgZGVzIGRlbWFuZGVzXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2Utc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1pY29uPnNlYXJjaDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwiaW5wdXRTZWFyY2hcIiBjbGFzcz1cInNlYXJjaC1ib3hcIiBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCI+XG5cbiAgICAgICAgICAgICAgICA8aW1nIChjbGljayk9XCJjYW5jZWxTZWFyY2goKVwiICpuZ0lmPVwiaW5wdXRTZWFyY2ggJiYgaW5wdXRTZWFyY2ggIT0gJydcIlxuICAgICAgICAgICAgICAgICAgICAgW3NyY109XCInL2Fzc2V0cy9pY29ucy9zZWFyY2hfb2ZmLTI0cHguc3ZnJ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXZpZXctbGlzdC10aWNrZXRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0LXRhYi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgVm91cyBhdmV6IGFjdHVlbGxlbWVudFxuXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpbmRleCA9PSAwXCIgY2xhc3M9XCJtYXQtdGFiLWxlZnQtY291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgb25ib2FyZGluZ0xpc3Q/LnRvdGFsRWxlbWVudHMgfX0gdGlja2V0KHMpXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPCEtLTxzcGFuICpuZ0lmPVwiaW5kZXggPT0gMVwiIGNsYXNzPVwibWF0LXRhYi1sZWZ0LWNvdW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7X2xvYWRpbmdfdGlja2V0c19jbG9zZWQgPyB0aWNrZXRDbG9zZWROYiA6IGNsb3NlZD8udG90YWxFbGVtZW50c319IHRpY2tldChzKVxuICAgICAgICAgICAgICAgIDwvc3Bhbj4tLT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxtYXQtdGFiLWdyb3VwIFtALmRpc2FibGVkXT1cInRydWVcIiBjbGFzcz1cImxpc3QtdGlja2V0LXRhYlwiIFsoc2VsZWN0ZWRJbmRleCldPVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkVGFiQ2hhbmdlKT1cInRyaWdnZXJDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtdGFiPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0LXRhYi1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9uYm9hcmRpbmcgKHt7b25ib2FyZGluZ0xpc3Q/LnRvdGFsRWxlbWVudHMgfHwgb25ib2FyZGluZ0xpc3Q/LmRhdGE/Lmxlbmd0aH19KVxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0VGFiQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfbG9hZGluZ190YWJsZSB8fCAhb25ib2FyZGluZ0xpc3RcIiBjbGFzcz1cImJ0LXNwaW5uZXJcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJfbG9hZGluZ190YWJsZSAmJiB7J21hcmdpbi1ib3R0b20nOiAnMTAwdmgnfVwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy50aWNrZXQtbGlzdF09XCIhX2xvYWRpbmdfdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWRlc2lnbi10YWJsZSAqbmdJZj1cIm9uYm9hcmRpbmdMaXN0XCIgW2NvbHVtbkRlZmluaXRpb25zXT1cImNvbHVtbkRlZmluaXRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzcGxheURldGFpbF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzcGxheUNvbXBvbmVudF09XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cIm9uYm9hcmRpbmdMaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFuZ109XCJsYW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYnRuT3ZlcnJpZGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0U2VhcmNoXT1cImlucHV0U2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbRW1wdHlSb3ddPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmd4LWRlc2lnbi10YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvbWF0LXRhYj5cbiAgICAgICAgICAgICAgICA8IS0tPG1hdC10YWI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgT2ZmYm9hcmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICh7e19sb2FkaW5nX3RpY2tldHNfY2xvc2VkID8gdGlja2V0Q2xvc2VkTmIgOiAoY2xvc2VkPy50b3RhbEVsZW1lbnRzIHx8IGNsb3NlZD8uZGF0YT8ubGVuZ3RoKX19KVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJfbG9hZGluZ190aWNrZXRzX2Nsb3NlZFwiIGNsYXNzPVwidGhyZWUtcXVhcnRlcnMtbG9hZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0VGFiQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfbG9hZGluZ190YWJsZSB8fCAhY2xvc2VkXCIgY2xhc3M9XCJidC1zcGlubmVyXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW25nU3R5bGVdPVwiX2xvYWRpbmdfdGFibGUgJiYgeydtYXJnaW4tYm90dG9tJzogJzEwMHZoJ31cIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3MudGlja2V0LWxpc3RdPVwiIV9sb2FkaW5nX3RhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1kZXNpZ24tdGFibGUgKm5nSWY9XCJjbG9zZWRcIiBbY29sdW1uRGVmaW5pdGlvbnNdPVwiY29sdW1uRGVmaW5pdGlvbnNDbG9zZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNwbGF5RGV0YWlsXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNwbGF5Q29tcG9uZW50XT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwiY2xvc2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFuZ109XCJsYW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYnRuT3ZlcnJpZGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0U2VhcmNoXT1cImlucHV0U2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbRW1wdHlSb3ddPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmd4LWRlc2lnbi10YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvbWF0LXRhYj4tLT5cbiAgICAgICAgICAgIDwvbWF0LXRhYi1ncm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L21hdC1jYXJkPiJdfQ==