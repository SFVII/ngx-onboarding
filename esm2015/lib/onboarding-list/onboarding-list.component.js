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
    const _r365 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 15);
    i0.ɵɵlistener("click", function OnboardingListComponent_div_1_img_8_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r365); const ctx_r364 = i0.ɵɵnextContext(2); return ctx_r364.cancelSearch(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("src", "/assets/icons/search_off-24px.svg", i0.ɵɵsanitizeUrl);
} }
function OnboardingListComponent_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r361 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r361.onboardingList == null ? null : ctx_r361.onboardingList.totalElements, " ticket(s) ");
} }
function OnboardingListComponent_div_1_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r362 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" Onboarding (", (ctx_r362.onboardingList == null ? null : ctx_r362.onboardingList.totalElements) || (ctx_r362.onboardingList == null ? null : ctx_r362.onboardingList.data == null ? null : ctx_r362.onboardingList.data.length), ") ");
} }
function OnboardingListComponent_div_1_ng_template_16_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 20);
} }
function OnboardingListComponent_div_1_ng_template_16_ngx_design_table_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-design-table", 21);
} if (rf & 2) {
    const ctx_r367 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnDefinitions", ctx_r367.columnDefinitions)("displayDetail", false)("data", ctx_r367.onboardingList)("lang", ctx_r367.lang)("btnOverride", true)("inputSearch", ctx_r367.inputSearch)("EmptyRow", true);
} }
const _c0 = function () { return { "margin-bottom": "100vh" }; };
function OnboardingListComponent_div_1_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_16_div_0_Template, 1, 0, "div", 17);
    i0.ɵɵelement(1, "div", 18);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_16_ngx_design_table_3_Template, 1, 7, "ngx-design-table", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r363 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r363._loading_table || !ctx_r363.onboardingList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r363._loading_table && i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ticket-list", !ctx_r363._loading_table);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r363.onboardingList);
} }
function OnboardingListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r369 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_div_1_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r369); const ctx_r368 = i0.ɵɵnextContext(); return ctx_r368.inputSearch = $event; });
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
    i0.ɵɵlistener("selectedIndexChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedIndexChange_13_listener($event) { i0.ɵɵrestoreView(_r369); const ctx_r370 = i0.ɵɵnextContext(); return ctx_r370.index = $event; })("selectedTabChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedTabChange_13_listener($event) { i0.ɵɵrestoreView(_r369); const ctx_r371 = i0.ɵɵnextContext(); return ctx_r371.triggerChange($event); });
    i0.ɵɵelementStart(14, "mat-tab", 12);
    i0.ɵɵtemplate(15, OnboardingListComponent_div_1_ng_template_15_Template, 1, 1, "ng-template", 13);
    i0.ɵɵtemplate(16, OnboardingListComponent_div_1_ng_template_16_Template, 4, 6, "ng-template", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r359 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngModel", ctx_r359.inputSearch);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r359.inputSearch && ctx_r359.inputSearch != "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r359.index == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@.disabled", true)("selectedIndex", ctx_r359.index);
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
                    let x = onboarding.map((row) => {
                        row.ContactName = row.vcontacts[0].Name;
                        return row;
                    });
                    this.onboardingList = new CoreMatTable(x, {
                        active: 'CreatedDate', direction: 'desc'
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
OnboardingListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 2, vars: 3, consts: [[1, "full-height", 2, "background", "#F4F7F9 0% 0% no-repeat padding-box", 3, "ngStyle"], ["class", "main-all-ticket-list", 4, "ngIf"], [1, "main-all-ticket-list"], [1, "page-title-container"], [1, "page-title"], [1, "page-search"], ["placeholder", "Recherche", "type", "text", 1, "search-box", 3, "ngModel", "ngModelChange"], [3, "src", "click", 4, "ngIf"], [1, "content-view-list-ticket"], [1, "mat-tab-left"], ["class", "mat-tab-left-count", 4, "ngIf"], [1, "list-ticket-tab", 3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], [2, "background-image", "none"], ["mat-tab-label", ""], ["matTabContent", ""], [3, "src", "click"], [1, "mat-tab-left-count"], ["class", "bt-spinner", 4, "ngIf"], [3, "ngStyle"], [3, "columnDefinitions", "displayDetail", "displayComponent", "data", "lang", "btnOverride", "inputSearch", "EmptyRow", 4, "ngIf"], [1, "bt-spinner"], [3, "columnDefinitions", "displayDetail", "displayComponent", "data", "lang", "btnOverride", "inputSearch", "EmptyRow"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵtemplate(1, OnboardingListComponent_div_1_Template, 17, 5, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", ctx._loading_table && i0.ɵɵpureFunction0(2, _c1));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.onboardingList);
    } }, directives: [i3.MatCard, i4.NgStyle, i4.NgIf, i5.MatIcon, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i7.MatTabGroup, i7.MatTab, i7.MatTabLabel, i7.MatTabContent, i8.TableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:100%}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%], md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font:bold 13px/20px nexa;letter-spacing:0;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0;grid-row-gap:0;max-width:1500px;margin-left:auto;margin-right:auto;width:100%;animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{-ms-grid-row:2;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}  .mat-tab-label-active .mat-tab-label-content{color:#510b4e;font-weight:600}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@-webkit-keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){-webkit-animation:1.25s linear infinite three-quarters-loader;animation:1.25s linear infinite three-quarters-loader;border:4px solid #4285f4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}@-webkit-keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font:18px/20px \"Nexa Text\";letter-spacing:0;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;font:17px/20px \"Nexa Text Bold\";letter-spacing:0;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px \"Nexa Text Bold\";letter-spacing:0;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width:1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03a9f4;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin;position:relative;left:50%;top:25vh}@-webkit-keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-onboarding-list',
                templateUrl: './onboarding-list.component.html',
                styleUrls: ['./onboarding-list.component.scss']
            }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }, { type: i2.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQudHMiLCJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsWUFBWSxFQUFpRSxNQUFNLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7O0lDYXZHLCtCQUVKO0lBRlMsdU1BQXdCO0lBQTdCLGlCQUVKOztJQURTLDJFQUEyQzs7O0lBUWhELGdDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFPOzs7SUFESCxlQUNKO0lBREkseUhBQ0o7OztJQVVRLFlBQ0o7OztJQURJLDhQQUNKOzs7SUFFSSwwQkFBd0U7OztJQUtwRSx1Q0FRbUI7OztJQVJzQiw4REFBdUMsd0JBQUEsaUNBQUEsdUJBQUEscUJBQUEscUNBQUEsa0JBQUE7Ozs7SUFMcEYsOEZBQWtFO0lBRWxFLDBCQUFvRTtJQUVwRSwyQkFDSTtJQUFBLHdIQVFBO0lBQ0osaUJBQU07OztJQWRELDBFQUF5QztJQUV6QyxlQUF3RDtJQUF4RCwrRUFBd0Q7SUFFeEQsZUFBcUM7SUFBckMsdURBQXFDO0lBQ3BCLGVBQXNCO0lBQXRCLDhDQUFzQjs7OztJQXpDaEUsOEJBQ0k7SUFBQSw4QkFFSTtJQUFBLDhCQUNJO0lBQUEsb0NBQ0o7SUFBQSxpQkFBTTtJQUVOLDhCQUNJO0lBQUEsZ0NBQVU7SUFBQSxzQkFBTTtJQUFBLGlCQUFXO0lBQzNCLGdDQUdBO0lBSE8sOE5BQXlCO0lBQWhDLGlCQUdBO0lBQUEsOEVBRUo7SUFBQSxpQkFBTTtJQUNWLGlCQUFNO0lBRU4sOEJBQ0k7SUFBQSxnQ0FDSTtJQUFBLHlDQUVBO0lB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Q25DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBRzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDaEIsRUFBRSxFQUNGO2dCQUNJLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDdEIsV0FBVyxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUM7Z0JBQ2hELG1CQUFtQixFQUFFLE9BQU87YUFDL0IsQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO1lBQy9CLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDaEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1o7SUFDTCxDQUFDOzs4RkFoRlksdUJBQXVCOzREQUF2Qix1QkFBdUI7UUNWcEMsbUNBR0k7UUFBQSx5RUFDSTtRQStFUixpQkFBVzs7UUFuRkQsMEVBQ2lDO1FBRUwsZUFBc0I7UUFBdEIseUNBQXNCOztrRERPL0MsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5pbXBvcnQge0NlbGxzQ29tcG9uZW50TGlzdCwgQ29yZU1hdFRhYmxlLCBDb3JlTWF0VGFibGVJbnRlcmZhY2UsIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2UsIFRhYmxlU2VydmljZX0gZnJvbSBcInRhYmxlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW9uYm9hcmRpbmctbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG9uYm9hcmRpbmdMaXN0OiBhbnlcbiAgaW5wdXRTZWFyY2ggPSAnJztcbiAgcHVibGljIHNlYXJjaDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBjb2x1bW5EZWZpbml0aW9uczogZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZVtdID0gW1xuICAgIHtcbiAgICAgICAga2V5OiAnY3JlYXRlZEF0JyxcbiAgICAgICAgdmFsdWU6ICdEYXRlIGRlIGNyw6lhdGlvbicsXG4gICAgICAgIG9yZGVyOiAxLFxuICAgICAgICBjbGFzczogJ3UtMScsXG4gICAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkRhdGVGb3JtYXQsXG4gICAgICAgIHNvcnQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgICAga2V5OiAnQ29udGFjdE5hbWUnLFxuICAgICAgICB2YWx1ZTogJ0NvbnRhY3QnLFxuICAgICAgICBvcmRlcjogMixcbiAgICAgICAgY2xhc3M6ICd1LTInLFxuICAgICAgICBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5OYW1lQXZhdGFyLFxuICAgICAgICBzb3J0OiB0cnVlXG4gICAgfSxcbiAgXTtcbiAgbG9jYWxTZXJ2aWNlOiBhbnk7XG4gIHB1YmxpYyBfbG9hZGluZ190YWJsZSA9IHRydWU7XG4gIHByaXZhdGUgSGlkZGVuSW5kZXggPSAwO1xuICBwdWJsaWMgaW5kZXggPSAwO1xuICBsYW5nID0gJ2ZyJztcblxuICBjYW5jZWxTZWFyY2goKSB7XG4gICAgdGhpcy5pbnB1dFNlYXJjaCA9ICcnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOk9uYm9hcmRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICkgeyB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsT25ib2FyZGluZygpO1xuICAgIH0sIDUwMCk7XG4gICAgdGhpcy5zZXJ2aWNlLm9uYm9hcmRpbmcuc3Vic2NyaWJlKChvbmJvYXJkaW5nKT0+e1xuICAgICAgY29uc29sZS5sb2cob25ib2FyZGluZyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IGZhbHNlO1xuICAgICAgfSwgMjAwMCk7XG5cbiAgICAgIGlmKG9uYm9hcmRpbmcpe1xuICAgICAgICAvL3RoaXMub25ib2FyZGluZ0xpc3Q9b25ib2FyZGluZztcbiAgICAgICAgbGV0IHggPSBvbmJvYXJkaW5nLm1hcCgocm93KSA9PiB7XG4gICAgICAgICAgcm93LkNvbnRhY3ROYW1lID0gcm93LnZjb250YWN0c1swXS5OYW1lO1xuICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMub25ib2FyZGluZ0xpc3QgPSBuZXcgQ29yZU1hdFRhYmxlKHgsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGFjdGl2ZTogJ0NyZWF0ZWREYXRlJywgZGlyZWN0aW9uOiAnZGVzYydcbiAgICAgICAgICB9LCB7YWN0aXZlOiAnJywgdmFsdWVTdGFydDogbnVsbCwgdmFsdWVFbmQ6IG51bGx9LCAxNSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHRyaWdnZXJDaGFuZ2UoJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudC5pbmRleCAhPT0gdGhpcy5IaWRkZW5JbmRleCkge1xuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gdHJ1ZTtcblxuXG4gICAgICAgIHRoaXMuaW5kZXggPSAkZXZlbnQuaW5kZXg7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICAgICAgW10sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge3BhZ2U6IG51bGwsIHRhYjogJGV2ZW50LmluZGV4ICsgMX0sXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJywgLy8gcmVtb3ZlIHRvIHJlcGxhY2UgYWxsIHF1ZXJ5IHBhcmFtcyBieSBwcm92aWRlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuSGlkZGVuSW5kZXggPSAkZXZlbnQuaW5kZXhcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cbn1cblxufVxuIiwiPG1hdC1jYXJkIFtuZ1N0eWxlXT1cIl9sb2FkaW5nX3RhYmxlICYmIHsnb3ZlcmZsb3cteSc6ICdoaWRkZW4nLCAnaGVpZ2h0JzogJzEwMCUnLFxuJ2Rpc3BsYXknOiAnZmxleCcsICdwb3NpdGlvbic6ICdhYnNvbHV0ZSd9XCIgY2xhc3M9XCJmdWxsLWhlaWdodFwiXG4gICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjRjRGN0Y5IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1hbGwtdGlja2V0LWxpc3RcIiAqbmdJZj1cIm9uYm9hcmRpbmdMaXN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLXRpdGxlLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS10aXRsZVwiPlxuICAgICAgICAgICAgICAgIFN1aXZpIGRlcyBkZW1hbmRlc1xuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5zZWFyY2g8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cImlucHV0U2VhcmNoXCIgY2xhc3M9XCJzZWFyY2gtYm94XCIgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGVcIlxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiPlxuXG4gICAgICAgICAgICAgICAgPGltZyAoY2xpY2spPVwiY2FuY2VsU2VhcmNoKClcIiAqbmdJZj1cImlucHV0U2VhcmNoICYmIGlucHV0U2VhcmNoICE9ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwiJy9hc3NldHMvaWNvbnMvc2VhcmNoX29mZi0yNHB4LnN2ZydcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC12aWV3LWxpc3QtdGlja2V0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdC10YWItbGVmdFwiPlxuICAgICAgICAgICAgICAgIFZvdXMgYXZleiBhY3R1ZWxsZW1lbnRcblxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaW5kZXggPT0gMFwiIGNsYXNzPVwibWF0LXRhYi1sZWZ0LWNvdW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IG9uYm9hcmRpbmdMaXN0Py50b3RhbEVsZW1lbnRzIH19IHRpY2tldChzKVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDwhLS08c3BhbiAqbmdJZj1cImluZGV4ID09IDFcIiBjbGFzcz1cIm1hdC10YWItbGVmdC1jb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICB7e19sb2FkaW5nX3RpY2tldHNfY2xvc2VkID8gdGlja2V0Q2xvc2VkTmIgOiBjbG9zZWQ/LnRvdGFsRWxlbWVudHN9fSB0aWNrZXQocylcbiAgICAgICAgICAgICAgICA8L3NwYW4+LS0+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8bWF0LXRhYi1ncm91cCBbQC5kaXNhYmxlZF09XCJ0cnVlXCIgY2xhc3M9XCJsaXN0LXRpY2tldC10YWJcIiBbKHNlbGVjdGVkSW5kZXgpXT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZFRhYkNoYW5nZSk9XCJ0cmlnZ2VyQ2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8bWF0LXRhYiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgT25ib2FyZGluZyAoe3tvbmJvYXJkaW5nTGlzdD8udG90YWxFbGVtZW50cyB8fCBvbmJvYXJkaW5nTGlzdD8uZGF0YT8ubGVuZ3RofX0pXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXRUYWJDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIl9sb2FkaW5nX3RhYmxlIHx8ICFvbmJvYXJkaW5nTGlzdFwiIGNsYXNzPVwiYnQtc3Bpbm5lclwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtuZ1N0eWxlXT1cIl9sb2FkaW5nX3RhYmxlICYmIHsnbWFyZ2luLWJvdHRvbSc6ICcxMDB2aCd9XCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzLnRpY2tldC1saXN0XT1cIiFfbG9hZGluZ190YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtZGVzaWduLXRhYmxlICpuZ0lmPVwib25ib2FyZGluZ0xpc3RcIiBbY29sdW1uRGVmaW5pdGlvbnNdPVwiY29sdW1uRGVmaW5pdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNwbGF5RGV0YWlsXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzcGxheUNvbXBvbmVudF09XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cIm9uYm9hcmRpbmdMaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFuZ109XCJsYW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYnRuT3ZlcnJpZGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0U2VhcmNoXT1cImlucHV0U2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbRW1wdHlSb3ddPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmd4LWRlc2lnbi10YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvbWF0LXRhYj5cbiAgICAgICAgICAgICAgICA8IS0tPG1hdC10YWI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgT2ZmYm9hcmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICh7e19sb2FkaW5nX3RpY2tldHNfY2xvc2VkID8gdGlja2V0Q2xvc2VkTmIgOiAoY2xvc2VkPy50b3RhbEVsZW1lbnRzIHx8IGNsb3NlZD8uZGF0YT8ubGVuZ3RoKX19KVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJfbG9hZGluZ190aWNrZXRzX2Nsb3NlZFwiIGNsYXNzPVwidGhyZWUtcXVhcnRlcnMtbG9hZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbWF0VGFiQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfbG9hZGluZ190YWJsZSB8fCAhY2xvc2VkXCIgY2xhc3M9XCJidC1zcGlubmVyXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW25nU3R5bGVdPVwiX2xvYWRpbmdfdGFibGUgJiYgeydtYXJnaW4tYm90dG9tJzogJzEwMHZoJ31cIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3MudGlja2V0LWxpc3RdPVwiIV9sb2FkaW5nX3RhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1kZXNpZ24tdGFibGUgKm5nSWY9XCJjbG9zZWRcIiBbY29sdW1uRGVmaW5pdGlvbnNdPVwiY29sdW1uRGVmaW5pdGlvbnNDbG9zZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNwbGF5RGV0YWlsXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNwbGF5Q29tcG9uZW50XT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwiY2xvc2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFuZ109XCJsYW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYnRuT3ZlcnJpZGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0U2VhcmNoXT1cImlucHV0U2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbRW1wdHlSb3ddPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmd4LWRlc2lnbi10YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvbWF0LXRhYj4tLT5cbiAgICAgICAgICAgIDwvbWF0LXRhYi1ncm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L21hdC1jYXJkPiJdfQ==