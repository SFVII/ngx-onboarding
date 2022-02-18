import { __awaiter } from "tslib";
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
    const _r410 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 15);
    i0.ɵɵlistener("click", function OnboardingListComponent_div_1_img_8_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r410); const ctx_r409 = i0.ɵɵnextContext(2); return ctx_r409.cancelSearch(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("src", "/assets/icons/search_off-24px.svg", i0.ɵɵsanitizeUrl);
} }
function OnboardingListComponent_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r406 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r406.onboardingList == null ? null : ctx_r406.onboardingList.totalElements, " ticket(s) ");
} }
function OnboardingListComponent_div_1_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r407 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" Onboarding (", (ctx_r407.onboardingList == null ? null : ctx_r407.onboardingList.totalElements) || (ctx_r407.onboardingList == null ? null : ctx_r407.onboardingList.data == null ? null : ctx_r407.onboardingList.data.length), ") ");
} }
function OnboardingListComponent_div_1_ng_template_16_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 20);
} }
function OnboardingListComponent_div_1_ng_template_16_ngx_design_table_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-design-table", 21);
} if (rf & 2) {
    const ctx_r412 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnDefinitions", ctx_r412.columnDefinitions)("displayDetail", false)("data", ctx_r412.onboardingList)("lang", ctx_r412.lang)("btnOverride", true)("inputSearch", ctx_r412.inputSearch)("EmptyRow", true)("displayDetail", true)("blockDetails", true);
} }
const _c0 = function () { return { "margin-bottom": "100vh" }; };
function OnboardingListComponent_div_1_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_16_div_0_Template, 1, 0, "div", 17);
    i0.ɵɵelement(1, "div", 18);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_16_ngx_design_table_3_Template, 1, 9, "ngx-design-table", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r408 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r408._loading_table || !ctx_r408.onboardingList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r408._loading_table && i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ticket-list", !ctx_r408._loading_table);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r408.onboardingList);
} }
function OnboardingListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r414 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_div_1_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r414); const ctx_r413 = i0.ɵɵnextContext(); return ctx_r413.inputSearch = $event; });
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
    i0.ɵɵlistener("selectedIndexChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedIndexChange_13_listener($event) { i0.ɵɵrestoreView(_r414); const ctx_r415 = i0.ɵɵnextContext(); return ctx_r415.index = $event; })("selectedTabChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedTabChange_13_listener($event) { i0.ɵɵrestoreView(_r414); const ctx_r416 = i0.ɵɵnextContext(); return ctx_r416.triggerChange($event); });
    i0.ɵɵelementStart(14, "mat-tab", 12);
    i0.ɵɵtemplate(15, OnboardingListComponent_div_1_ng_template_15_Template, 1, 1, "ng-template", 13);
    i0.ɵɵtemplate(16, OnboardingListComponent_div_1_ng_template_16_Template, 4, 6, "ng-template", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r404 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngModel", ctx_r404.inputSearch);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r404.inputSearch && ctx_r404.inputSearch != "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r404.index == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@.disabled", true)("selectedIndex", ctx_r404.index);
} }
const _c1 = function () { return { "overflow-y": "hidden", "height": "100%", "display": "flex", "position": "absolute" }; };
export class OnboardingListComponent {
    constructor(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.inputSearch = '';
        this.search = '';
        this.columnDefinitions = [
            {
                key: 'Id',
                value: 'Id',
                order: 1,
                class: 'u-1',
                module: CellsComponentList.ButtonLink,
                sort: true,
                override: [`${this.service.mainPath}/request`, '_id']
            },
            {
                key: 'createdAt',
                value: 'Date de création',
                order: 2,
                class: 'u-2',
                module: CellsComponentList.DateFormat,
                sort: true
            },
            {
                key: 'ContactName',
                value: 'Contact',
                order: 3,
                class: 'u-2',
                sort: true,
                module: CellsComponentList.NameAvatar,
                override: ['ContactName', 'Email'],
            },
            {
                key: 'TemplateName',
                value: 'Template',
                order: 4,
                class: 'u-2'
            }
        ];
        this._loading_table = true;
        this.HiddenIndex = 0;
        this.index = 0;
        this.lang = 'fr';
    }
    cancelSearch() {
        this.inputSearch = '';
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                yield this.service.getAllOnboarding();
            }), 500);
            this.service.onboarding.subscribe((onboarding) => {
                console.log(onboarding);
                setTimeout(() => {
                    this._loading_table = false;
                }, 2000);
                if (onboarding) {
                    //this.onboardingList=onboarding;
                    let x = onboarding.map((row, index) => {
                        var _a, _b, _c, _d;
                        row.ContactName = ((_b = (_a = row) === null || _a === void 0 ? void 0 : _a.vcontacts[0]) === null || _b === void 0 ? void 0 : _b.Name) || '';
                        row.Email = ((_d = (_c = row) === null || _c === void 0 ? void 0 : _c.vcontacts[0]) === null || _d === void 0 ? void 0 : _d.Email) || '';
                        row.TemplateName = row.vtemplates.length > 0 ? row.vtemplates[0].Name : '';
                        row.Id = index + 1;
                        return row;
                    });
                    this.onboardingList = new CoreMatTable(x, {
                        active: 'Id', direction: 'desc'
                    }, { active: '', valueStart: null, valueEnd: null }, 15, true, true);
                }
            });
        });
    }
    triggerChange($event) {
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
}
OnboardingListComponent.ɵfac = function OnboardingListComponent_Factory(t) { return new (t || OnboardingListComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
OnboardingListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 2, vars: 3, consts: [[1, "full-height", 2, "background", "#F4F7F9 0% 0% no-repeat padding-box", 3, "ngStyle"], ["class", "main-all-ticket-list", 4, "ngIf"], [1, "main-all-ticket-list"], [1, "page-title-container"], [1, "page-title"], [1, "page-search"], ["placeholder", "Recherche", "type", "text", 1, "search-box", 3, "ngModel", "ngModelChange"], [3, "src", "click", 4, "ngIf"], [1, "content-view-list-ticket"], [1, "mat-tab-left"], ["class", "mat-tab-left-count", 4, "ngIf"], [1, "list-ticket-tab", 3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], [2, "background-image", "none"], ["mat-tab-label", ""], ["matTabContent", ""], [3, "src", "click"], [1, "mat-tab-left-count"], ["class", "bt-spinner", 4, "ngIf"], [3, "ngStyle"], [3, "columnDefinitions", "displayDetail", "data", "lang", "btnOverride", "inputSearch", "EmptyRow", "blockDetails", 4, "ngIf"], [1, "bt-spinner"], [3, "columnDefinitions", "displayDetail", "data", "lang", "btnOverride", "inputSearch", "EmptyRow", "blockDetails"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵtemplate(1, OnboardingListComponent_div_1_Template, 17, 5, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", ctx._loading_table && i0.ɵɵpureFunction0(2, _c1));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.onboardingList);
    } }, directives: [i3.MatCard, i4.NgStyle, i4.NgIf, i5.MatIcon, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i7.MatTabGroup, i7.MatTab, i7.MatTabLabel, i7.MatTabContent, i8.TableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:100%}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%], md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font:bold 13px/20px nexa;letter-spacing:0;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0;grid-row-gap:0;max-width:1500px;margin-left:auto;margin-right:auto;width:100%;animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{-ms-grid-row:2;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@-webkit-keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){-webkit-animation:1.25s linear infinite three-quarters-loader;animation:1.25s linear infinite three-quarters-loader;border:4px solid #4285f4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}@-webkit-keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font:18px/20px \"Nexa Text\";letter-spacing:0;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;font:17px/20px \"Nexa Text Bold\";letter-spacing:0;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px \"Nexa Text Bold\";letter-spacing:0;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width:1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03a9f4;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin;position:relative;left:50%;top:25vh}@-webkit-keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-onboarding-list',
                templateUrl: './onboarding-list.component.html',
                styleUrls: ['./onboarding-list.component.scss']
            }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }, { type: i2.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQudHMiLCJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsWUFBWSxFQUFpRSxNQUFNLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7O0lDYXZHLCtCQUVKO0lBRlMsdU1BQXdCO0lBQTdCLGlCQUVKOztJQURTLDJFQUEyQzs7O0lBUWhELGdDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFPOzs7SUFESCxlQUNKO0lBREkseUhBQ0o7OztJQVVRLFlBQ0o7OztJQURJLDhQQUNKOzs7SUFFSSwwQkFBd0U7OztJQUtwRSx1Q0FTbUI7OztJQVRzQiw4REFBdUMsd0JBQUEsaUNBQUEsdUJBQUEscUJBQUEscUNBQUEsa0JBQUEsdUJBQUEsc0JBQUE7Ozs7SUFMcEYsOEZBQWtFO0lBRWxFLDBCQUFvRTtJQUVwRSwyQkFDSTtJQUFBLHdIQVNBO0lBQ0osaUJBQU07OztJQWZELDBFQUF5QztJQUV6QyxlQUF3RDtJQUF4RCwrRUFBd0Q7SUFFeEQsZUFBcUM7SUFBckMsdURBQXFDO0lBQ3BCLGVBQXNCO0lBQXRCLDhDQUFzQjs7OztJQXpDaEUsOEJBQ0k7SUFBQSw4QkFFSTtJQUFBLDhCQUNJO0lBQUEsb0NBQ0o7SUFBQSxpQkFBTTtJQUVOLDhCQUNJO0lBQUEsZ0NBQVU7SUFBQSxzQkFBTTtJQUFBLGlCQUFXO0lBQzNCLGdDQUdBO0lBSE8sOE5BQXlCO0lBQWhDLGlCQUdBO0lBQUEsOEVBRUo7SUFBQSxpQkFBTTtJQUNWLGlCQUFNO0lBRU4sOEJBQ0k7SUFBQSxnQ0FDSTtJ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QyxFQUFDO2dCQUNoRCxtQkFBbUIsRUFBRSxPQUFPO2FBQy9CLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQTtZQUMvQixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNaLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNaO0lBQ0wsQ0FBQzs7OEZBbkdZLHVCQUF1Qjs0REFBdkIsdUJBQXVCO1FDWHBDLG1DQUdJO1FBQUEseUVBQ0k7UUFnRlIsaUJBQVc7O1FBcEZELDBFQUNpQztRQUVMLGVBQXNCO1FBQXRCLHlDQUFzQjs7a0REUS9DLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHtDZWxsc0NvbXBvbmVudExpc3QsIENvcmVNYXRUYWJsZSwgQ29yZU1hdFRhYmxlSW50ZXJmYWNlLCBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlLCBUYWJsZVNlcnZpY2V9IGZyb20gXCJ0YWJsZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW9uYm9hcmRpbmctbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG9uYm9hcmRpbmdMaXN0OiBhbnlcbiAgaW5wdXRTZWFyY2ggPSAnJztcbiAgcHVibGljIHNlYXJjaDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBjb2x1bW5EZWZpbml0aW9uczogZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZVtdID0gW1xuICAgIHtcbiAgICAgIGtleTogJ0lkJyxcbiAgICAgIHZhbHVlOiAnSWQnLFxuICAgICAgb3JkZXI6IDEsXG4gICAgICBjbGFzczogJ3UtMScsXG4gICAgICBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5CdXR0b25MaW5rLFxuICAgICAgc29ydDogdHJ1ZSxcbiAgICAgIG92ZXJyaWRlOiBbYCR7dGhpcy5zZXJ2aWNlLm1haW5QYXRofS9yZXF1ZXN0YCwgJ19pZCddXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGtleTogJ2NyZWF0ZWRBdCcsXG4gICAgICAgIHZhbHVlOiAnRGF0ZSBkZSBjcsOpYXRpb24nLFxuICAgICAgICBvcmRlcjogMixcbiAgICAgICAgY2xhc3M6ICd1LTInLFxuICAgICAgICBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5EYXRlRm9ybWF0LFxuICAgICAgICBzb3J0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGtleTogJ0NvbnRhY3ROYW1lJyxcbiAgICAgICAgdmFsdWU6ICdDb250YWN0JyxcbiAgICAgICAgb3JkZXI6IDMsXG4gICAgICAgIGNsYXNzOiAndS0yJyxcbiAgICAgICAgc29ydDogdHJ1ZSxcbiAgICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuTmFtZUF2YXRhcixcbiAgICAgICAgb3ZlcnJpZGU6IFsnQ29udGFjdE5hbWUnLCAnRW1haWwnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJ1RlbXBsYXRlTmFtZScsXG4gICAgICB2YWx1ZTogJ1RlbXBsYXRlJyxcbiAgICAgIG9yZGVyOiA0LFxuICAgICAgY2xhc3M6ICd1LTInXG4gICAgfVxuICBdO1xuICBsb2NhbFNlcnZpY2U6IGFueTtcbiAgcHVibGljIF9sb2FkaW5nX3RhYmxlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBIaWRkZW5JbmRleCA9IDA7XG4gIHB1YmxpYyBpbmRleCA9IDA7XG4gIGxhbmcgPSAnZnInO1xuXG4gIGNhbmNlbFNlYXJjaCgpIHtcbiAgICB0aGlzLmlucHV0U2VhcmNoID0gJyc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNlcnZpY2U6T25ib2FyZGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgKSB7IH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxPbmJvYXJkaW5nKCk7XG4gICAgfSwgNTAwKTtcbiAgICB0aGlzLnNlcnZpY2Uub25ib2FyZGluZy5zdWJzY3JpYmUoKG9uYm9hcmRpbmcpPT57XG4gICAgICBjb25zb2xlLmxvZyhvbmJvYXJkaW5nKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XG4gICAgICB9LCAyMDAwKTtcblxuICAgICAgaWYob25ib2FyZGluZyl7XG4gICAgICAgIC8vdGhpcy5vbmJvYXJkaW5nTGlzdD1vbmJvYXJkaW5nO1xuICAgICAgICBsZXQgeCA9IG9uYm9hcmRpbmcubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgcm93LkNvbnRhY3ROYW1lID0gcm93Py52Y29udGFjdHNbMF0/Lk5hbWUgfHwgJyc7XG4gICAgICAgICAgcm93LkVtYWlsID0gcm93Py52Y29udGFjdHNbMF0/LkVtYWlsIHx8ICcnO1xuICAgICAgICAgIHJvdy5UZW1wbGF0ZU5hbWUgPSByb3cudnRlbXBsYXRlcy5sZW5ndGggPiAwID8gcm93LnZ0ZW1wbGF0ZXNbMF0uTmFtZSA6ICcnO1xuICAgICAgICAgIHJvdy5JZCA9IGluZGV4ICsgMTtcbiAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLm9uYm9hcmRpbmdMaXN0ID0gbmV3IENvcmVNYXRUYWJsZSh4LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhY3RpdmU6ICdJZCcsIGRpcmVjdGlvbjogJ2Rlc2MnXG4gICAgICAgICAgfSwge2FjdGl2ZTogJycsIHZhbHVlU3RhcnQ6IG51bGwsIHZhbHVlRW5kOiBudWxsfSwgMTUsIHRydWUsIHRydWUpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB0cmlnZ2VyQ2hhbmdlKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQuaW5kZXggIT09IHRoaXMuSGlkZGVuSW5kZXgpIHtcbiAgICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IHRydWU7XG5cblxuICAgICAgICB0aGlzLmluZGV4ID0gJGV2ZW50LmluZGV4O1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcbiAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtwYWdlOiBudWxsLCB0YWI6ICRldmVudC5pbmRleCArIDF9LFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLkhpZGRlbkluZGV4ID0gJGV2ZW50LmluZGV4XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IGZhbHNlO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG59XG5cbn1cbiIsIjxtYXQtY2FyZCBbbmdTdHlsZV09XCJfbG9hZGluZ190YWJsZSAmJiB7J292ZXJmbG93LXknOiAnaGlkZGVuJywgJ2hlaWdodCc6ICcxMDAlJyxcbidkaXNwbGF5JzogJ2ZsZXgnLCAncG9zaXRpb24nOiAnYWJzb2x1dGUnfVwiIGNsYXNzPVwiZnVsbC1oZWlnaHRcIlxuICAgICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZDogI0Y0RjdGOSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XCI+XG4gICAgPGRpdiBjbGFzcz1cIm1haW4tYWxsLXRpY2tldC1saXN0XCIgKm5nSWY9XCJvbmJvYXJkaW5nTGlzdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS10aXRsZS1jb250YWluZXJcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICBTdWl2aSBkZXMgZGVtYW5kZXNcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWljb24+c2VhcmNoPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJpbnB1dFNlYXJjaFwiIGNsYXNzPVwic2VhcmNoLWJveFwiIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIj5cblxuICAgICAgICAgICAgICAgIDxpbWcgKGNsaWNrKT1cImNhbmNlbFNlYXJjaCgpXCIgKm5nSWY9XCJpbnB1dFNlYXJjaCAmJiBpbnB1dFNlYXJjaCAhPSAnJ1wiXG4gICAgICAgICAgICAgICAgICAgICBbc3JjXT1cIicvYXNzZXRzL2ljb25zL3NlYXJjaF9vZmYtMjRweC5zdmcnXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtdmlldy1saXN0LXRpY2tldFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXQtdGFiLWxlZnRcIj5cbiAgICAgICAgICAgICAgICBWb3VzIGF2ZXogYWN0dWVsbGVtZW50XG5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImluZGV4ID09IDBcIiBjbGFzcz1cIm1hdC10YWItbGVmdC1jb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBvbmJvYXJkaW5nTGlzdD8udG90YWxFbGVtZW50cyB9fSB0aWNrZXQocylcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8IS0tPHNwYW4gKm5nSWY9XCJpbmRleCA9PSAxXCIgY2xhc3M9XCJtYXQtdGFiLWxlZnQtY291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAge3tfbG9hZGluZ190aWNrZXRzX2Nsb3NlZCA/IHRpY2tldENsb3NlZE5iIDogY2xvc2VkPy50b3RhbEVsZW1lbnRzfX0gdGlja2V0KHMpXG4gICAgICAgICAgICAgICAgPC9zcGFuPi0tPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPG1hdC10YWItZ3JvdXAgW0AuZGlzYWJsZWRdPVwidHJ1ZVwiIGNsYXNzPVwibGlzdC10aWNrZXQtdGFiXCIgWyhzZWxlY3RlZEluZGV4KV09XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRUYWJDaGFuZ2UpPVwidHJpZ2dlckNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPG1hdC10YWIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiBub25lO1wiPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0LXRhYi1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9uYm9hcmRpbmcgKHt7b25ib2FyZGluZ0xpc3Q/LnRvdGFsRWxlbWVudHMgfHwgb25ib2FyZGluZ0xpc3Q/LmRhdGE/Lmxlbmd0aH19KVxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0VGFiQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfbG9hZGluZ190YWJsZSB8fCAhb25ib2FyZGluZ0xpc3RcIiBjbGFzcz1cImJ0LXNwaW5uZXJcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJfbG9hZGluZ190YWJsZSAmJiB7J21hcmdpbi1ib3R0b20nOiAnMTAwdmgnfVwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy50aWNrZXQtbGlzdF09XCIhX2xvYWRpbmdfdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWRlc2lnbi10YWJsZSAqbmdJZj1cIm9uYm9hcmRpbmdMaXN0XCIgW2NvbHVtbkRlZmluaXRpb25zXT1cImNvbHVtbkRlZmluaXRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzcGxheURldGFpbF09XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwib25ib2FyZGluZ0xpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYW5nXT1cImxhbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtidG5PdmVycmlkZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRTZWFyY2hdPVwiaW5wdXRTZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtFbXB0eVJvd109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzcGxheURldGFpbF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYmxvY2tEZXRhaWxzXT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25neC1kZXNpZ24tdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L21hdC10YWI+XG4gICAgICAgICAgICAgICAgPCEtLTxtYXQtdGFiPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0LXRhYi1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9mZmJvYXJkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAoe3tfbG9hZGluZ190aWNrZXRzX2Nsb3NlZCA/IHRpY2tldENsb3NlZE5iIDogKGNsb3NlZD8udG90YWxFbGVtZW50cyB8fCBjbG9zZWQ/LmRhdGE/Lmxlbmd0aCl9fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiX2xvYWRpbmdfdGlja2V0c19jbG9zZWRcIiBjbGFzcz1cInRocmVlLXF1YXJ0ZXJzLWxvYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG1hdFRhYkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX2xvYWRpbmdfdGFibGUgfHwgIWNsb3NlZFwiIGNsYXNzPVwiYnQtc3Bpbm5lclwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtuZ1N0eWxlXT1cIl9sb2FkaW5nX3RhYmxlICYmIHsnbWFyZ2luLWJvdHRvbSc6ICcxMDB2aCd9XCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzLnRpY2tldC1saXN0XT1cIiFfbG9hZGluZ190YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtZGVzaWduLXRhYmxlICpuZ0lmPVwiY2xvc2VkXCIgW2NvbHVtbkRlZmluaXRpb25zXT1cImNvbHVtbkRlZmluaXRpb25zQ2xvc2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzcGxheURldGFpbF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzcGxheUNvbXBvbmVudF09XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cImNsb3NlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhbmddPVwibGFuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2J0bk92ZXJyaWRlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dFNlYXJjaF09XCJpbnB1dFNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW0VtcHR5Um93XT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25neC1kZXNpZ24tdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L21hdC10YWI+LS0+XG4gICAgICAgICAgICA8L21hdC10YWItZ3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9tYXQtY2FyZD4iXX0=