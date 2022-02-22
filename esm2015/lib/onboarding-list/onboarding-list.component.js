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
import * as i7 from "ngx-intl-tel-input";
import * as i8 from "@angular/material/tabs";
import * as i9 from "table";
function OnboardingListComponent_div_1_img_8_Template(rf, ctx) { if (rf & 1) {
    const _r425 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 15);
    i0.ɵɵlistener("click", function OnboardingListComponent_div_1_img_8_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r425); const ctx_r424 = i0.ɵɵnextContext(2); return ctx_r424.cancelSearch(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("src", "/assets/icons/search_off-24px.svg", i0.ɵɵsanitizeUrl);
} }
function OnboardingListComponent_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r421 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r421.onboardingList == null ? null : ctx_r421.onboardingList.totalElements, " ticket(s) ");
} }
function OnboardingListComponent_div_1_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r422 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" Onboarding (", (ctx_r422.onboardingList == null ? null : ctx_r422.onboardingList.totalElements) || (ctx_r422.onboardingList == null ? null : ctx_r422.onboardingList.data == null ? null : ctx_r422.onboardingList.data.length), ") ");
} }
function OnboardingListComponent_div_1_ng_template_16_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 20);
} }
function OnboardingListComponent_div_1_ng_template_16_ngx_design_table_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-design-table", 21);
} if (rf & 2) {
    const ctx_r427 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnDefinitions", ctx_r427.columnDefinitions)("displayDetail", false)("data", ctx_r427.onboardingList)("lang", ctx_r427.lang)("btnOverride", true)("inputSearch", ctx_r427.inputSearch)("EmptyRow", true)("displayDetail", true)("blockDetails", true);
} }
const _c0 = function () { return { "margin-bottom": "100vh" }; };
function OnboardingListComponent_div_1_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_16_div_0_Template, 1, 0, "div", 17);
    i0.ɵɵelement(1, "div", 18);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_16_ngx_design_table_3_Template, 1, 9, "ngx-design-table", 19);
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
function OnboardingListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r429 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_div_1_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r429); const ctx_r428 = i0.ɵɵnextContext(); return ctx_r428.inputSearch = $event; });
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
    i0.ɵɵlistener("selectedIndexChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedIndexChange_13_listener($event) { i0.ɵɵrestoreView(_r429); const ctx_r430 = i0.ɵɵnextContext(); return ctx_r430.index = $event; })("selectedTabChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedTabChange_13_listener($event) { i0.ɵɵrestoreView(_r429); const ctx_r431 = i0.ɵɵnextContext(); return ctx_r431.triggerChange($event); });
    i0.ɵɵelementStart(14, "mat-tab", 12);
    i0.ɵɵtemplate(15, OnboardingListComponent_div_1_ng_template_15_Template, 1, 1, "ng-template", 13);
    i0.ɵɵtemplate(16, OnboardingListComponent_div_1_ng_template_16_Template, 4, 6, "ng-template", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r419 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngModel", ctx_r419.inputSearch);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r419.inputSearch && ctx_r419.inputSearch != "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r419.index == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@.disabled", true)("selectedIndex", ctx_r419.index);
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
    } }, directives: [i3.MatCard, i4.NgStyle, i4.NgIf, i5.MatIcon, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i7.NativeElementInjectorDirective, i8.MatTabGroup, i8.MatTab, i8.MatTabLabel, i8.MatTabContent, i9.TableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:100%}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%], md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font:bold 13px/20px nexa;letter-spacing:0;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0;grid-row-gap:0;max-width:1500px;margin-left:auto;margin-right:auto;width:100%;animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{-ms-grid-row:2;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@-webkit-keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){-webkit-animation:1.25s linear infinite three-quarters-loader;animation:1.25s linear infinite three-quarters-loader;border:4px solid #4285f4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}@-webkit-keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font:18px/20px \"Nexa Text\";letter-spacing:0;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;font:17px/20px \"Nexa Text Bold\";letter-spacing:0;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px \"Nexa Text Bold\";letter-spacing:0;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width:1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03a9f4;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin;position:relative;left:50%;top:25vh}@-webkit-keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-onboarding-list',
                templateUrl: './onboarding-list.component.html',
                styleUrls: ['./onboarding-list.component.scss']
            }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }, { type: i2.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQudHMiLCJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsWUFBWSxFQUFpRSxNQUFNLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7OztJQ2F2RywrQkFFSjtJQUZTLHVNQUF3QjtJQUE3QixpQkFFSjs7SUFEUywyRUFBMkM7OztJQVFoRCxnQ0FDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBTzs7O0lBREgsZUFDSjtJQURJLHlIQUNKOzs7SUFVUSxZQUNKOzs7SUFESSw4UEFDSjs7O0lBRUksMEJBQXdFOzs7SUFLcEUsdUNBU21COzs7SUFUc0IsOERBQXVDLHdCQUFBLGlDQUFBLHVCQUFBLHFCQUFBLHFDQUFBLGtCQUFBLHVCQUFBLHNCQUFBOzs7O0lBTHBGLDhGQUFrRTtJQUVsRSwwQkFBb0U7SUFFcEUsMkJBQ0k7SUFBQSx3SEFTQTtJQUNKLGlCQUFNOzs7SUFmRCwwRUFBeUM7SUFFekMsZUFBd0Q7SUFBeEQsK0VBQXdEO0lBRXhELGVBQXFDO0lBQXJDLHVEQUFxQztJQUNwQixlQUFzQjtJQUF0Qiw4Q0FBc0I7Ozs7SUF6Q2hFLDhCQUNJO0lBQUEsOEJBRUk7SUFBQSw4QkFDSTtJQUFBLG9DQUNKO0lBQUEsaUJBQU07SUFFTiw4QkFDSTtJQUFBLGdDQUFVO0lBQUEsc0JBQU07SUFBQSxpQkFBVztJQUMzQixnQ0FHQTtJQUhPLDhOQUF5QjtJQUFoQyxpQkFHQTtJQUFBLDhFQUVKO0lBQUEsaUJBQU07SUFDVixpQkFBTTtJQUVOLDhCQUNJO0lBQUEsZ0NBQ0k7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QUMsRUFBQztnQkFDaEQsbUJBQW1CLEVBQUUsT0FBTzthQUMvQixDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7WUFDL0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDWixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUNoQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDWjtJQUNMLENBQUM7OzhGQW5HWSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ1hwQyxtQ0FHSTtRQUFBLHlFQUNJO1FBZ0ZSLGlCQUFXOztRQXBGRCwwRUFDaUM7UUFFTCxlQUFzQjtRQUF0Qix5Q0FBc0I7O2tERFEvQyx1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7Q2VsbHNDb21wb25lbnRMaXN0LCBDb3JlTWF0VGFibGUsIENvcmVNYXRUYWJsZUludGVyZmFjZSwgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSwgVGFibGVTZXJ2aWNlfSBmcm9tIFwidGFibGVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1vbmJvYXJkaW5nLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBvbmJvYXJkaW5nTGlzdDogYW55XG4gIGlucHV0U2VhcmNoID0gJyc7XG4gIHB1YmxpYyBzZWFyY2g6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgY29sdW1uRGVmaW5pdGlvbnM6IGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VbXSA9IFtcbiAgICB7XG4gICAgICBrZXk6ICdJZCcsXG4gICAgICB2YWx1ZTogJ0lkJyxcbiAgICAgIG9yZGVyOiAxLFxuICAgICAgY2xhc3M6ICd1LTEnLFxuICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuQnV0dG9uTGluayxcbiAgICAgIHNvcnQ6IHRydWUsXG4gICAgICBvdmVycmlkZTogW2Ake3RoaXMuc2VydmljZS5tYWluUGF0aH0vcmVxdWVzdGAsICdfaWQnXVxuICAgIH0sXG4gICAge1xuICAgICAgICBrZXk6ICdjcmVhdGVkQXQnLFxuICAgICAgICB2YWx1ZTogJ0RhdGUgZGUgY3LDqWF0aW9uJyxcbiAgICAgICAgb3JkZXI6IDIsXG4gICAgICAgIGNsYXNzOiAndS0yJyxcbiAgICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuRGF0ZUZvcm1hdCxcbiAgICAgICAgc29ydDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgICBrZXk6ICdDb250YWN0TmFtZScsXG4gICAgICAgIHZhbHVlOiAnQ29udGFjdCcsXG4gICAgICAgIG9yZGVyOiAzLFxuICAgICAgICBjbGFzczogJ3UtMicsXG4gICAgICAgIHNvcnQ6IHRydWUsXG4gICAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0Lk5hbWVBdmF0YXIsXG4gICAgICAgIG92ZXJyaWRlOiBbJ0NvbnRhY3ROYW1lJywgJ0VtYWlsJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICdUZW1wbGF0ZU5hbWUnLFxuICAgICAgdmFsdWU6ICdUZW1wbGF0ZScsXG4gICAgICBvcmRlcjogNCxcbiAgICAgIGNsYXNzOiAndS0yJ1xuICAgIH1cbiAgXTtcbiAgbG9jYWxTZXJ2aWNlOiBhbnk7XG4gIHB1YmxpYyBfbG9hZGluZ190YWJsZSA9IHRydWU7XG4gIHByaXZhdGUgSGlkZGVuSW5kZXggPSAwO1xuICBwdWJsaWMgaW5kZXggPSAwO1xuICBsYW5nID0gJ2ZyJztcblxuICBjYW5jZWxTZWFyY2goKSB7XG4gICAgdGhpcy5pbnB1dFNlYXJjaCA9ICcnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOk9uYm9hcmRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICkgeyB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsT25ib2FyZGluZygpO1xuICAgIH0sIDUwMCk7XG4gICAgdGhpcy5zZXJ2aWNlLm9uYm9hcmRpbmcuc3Vic2NyaWJlKChvbmJvYXJkaW5nKT0+e1xuICAgICAgY29uc29sZS5sb2cob25ib2FyZGluZyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IGZhbHNlO1xuICAgICAgfSwgMjAwMCk7XG5cbiAgICAgIGlmKG9uYm9hcmRpbmcpe1xuICAgICAgICAvL3RoaXMub25ib2FyZGluZ0xpc3Q9b25ib2FyZGluZztcbiAgICAgICAgbGV0IHggPSBvbmJvYXJkaW5nLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJvdy5Db250YWN0TmFtZSA9IHJvdz8udmNvbnRhY3RzWzBdPy5OYW1lIHx8ICcnO1xuICAgICAgICAgIHJvdy5FbWFpbCA9IHJvdz8udmNvbnRhY3RzWzBdPy5FbWFpbCB8fCAnJztcbiAgICAgICAgICByb3cuVGVtcGxhdGVOYW1lID0gcm93LnZ0ZW1wbGF0ZXMubGVuZ3RoID4gMCA/IHJvdy52dGVtcGxhdGVzWzBdLk5hbWUgOiAnJztcbiAgICAgICAgICByb3cuSWQgPSBpbmRleCArIDE7XG4gICAgICAgICAgcmV0dXJuIHJvdztcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nTGlzdCA9IG5ldyBDb3JlTWF0VGFibGUoeCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYWN0aXZlOiAnSWQnLCBkaXJlY3Rpb246ICdkZXNjJ1xuICAgICAgICAgIH0sIHthY3RpdmU6ICcnLCB2YWx1ZVN0YXJ0OiBudWxsLCB2YWx1ZUVuZDogbnVsbH0sIDE1LCB0cnVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdHJpZ2dlckNoYW5nZSgkZXZlbnQpIHtcbiAgICBpZiAoJGV2ZW50LmluZGV4ICE9PSB0aGlzLkhpZGRlbkluZGV4KSB7XG4gICAgICAgIHRoaXMuX2xvYWRpbmdfdGFibGUgPSB0cnVlO1xuXG5cbiAgICAgICAgdGhpcy5pbmRleCA9ICRldmVudC5pbmRleDtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICAgICAgICBbXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7cGFnZTogbnVsbCwgdGFiOiAkZXZlbnQuaW5kZXggKyAxfSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5IaWRkZW5JbmRleCA9ICRldmVudC5pbmRleFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRpbmdfdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxufVxuXG59XG4iLCI8bWF0LWNhcmQgW25nU3R5bGVdPVwiX2xvYWRpbmdfdGFibGUgJiYgeydvdmVyZmxvdy15JzogJ2hpZGRlbicsICdoZWlnaHQnOiAnMTAwJScsXG4nZGlzcGxheSc6ICdmbGV4JywgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJ31cIiBjbGFzcz1cImZ1bGwtaGVpZ2h0XCJcbiAgICAgICAgICBzdHlsZT1cImJhY2tncm91bmQ6ICNGNEY3RjkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1wiPlxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWFsbC10aWNrZXQtbGlzdFwiICpuZ0lmPVwib25ib2FyZGluZ0xpc3RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtdGl0bGUtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgU3VpdmkgZGVzIGRlbWFuZGVzXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2Utc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1pY29uPnNlYXJjaDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwiaW5wdXRTZWFyY2hcIiBjbGFzcz1cInNlYXJjaC1ib3hcIiBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCI+XG5cbiAgICAgICAgICAgICAgICA8aW1nIChjbGljayk9XCJjYW5jZWxTZWFyY2goKVwiICpuZ0lmPVwiaW5wdXRTZWFyY2ggJiYgaW5wdXRTZWFyY2ggIT0gJydcIlxuICAgICAgICAgICAgICAgICAgICAgW3NyY109XCInL2Fzc2V0cy9pY29ucy9zZWFyY2hfb2ZmLTI0cHguc3ZnJ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXZpZXctbGlzdC10aWNrZXRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0LXRhYi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgVm91cyBhdmV6IGFjdHVlbGxlbWVudFxuXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpbmRleCA9PSAwXCIgY2xhc3M9XCJtYXQtdGFiLWxlZnQtY291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgb25ib2FyZGluZ0xpc3Q/LnRvdGFsRWxlbWVudHMgfX0gdGlja2V0KHMpXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPCEtLTxzcGFuICpuZ0lmPVwiaW5kZXggPT0gMVwiIGNsYXNzPVwibWF0LXRhYi1sZWZ0LWNvdW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7X2xvYWRpbmdfdGlja2V0c19jbG9zZWQgPyB0aWNrZXRDbG9zZWROYiA6IGNsb3NlZD8udG90YWxFbGVtZW50c319IHRpY2tldChzKVxuICAgICAgICAgICAgICAgIDwvc3Bhbj4tLT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxtYXQtdGFiLWdyb3VwIFtALmRpc2FibGVkXT1cInRydWVcIiBjbGFzcz1cImxpc3QtdGlja2V0LXRhYlwiIFsoc2VsZWN0ZWRJbmRleCldPVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkVGFiQ2hhbmdlKT1cInRyaWdnZXJDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtdGFiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG1hdC10YWItbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBPbmJvYXJkaW5nICh7e29uYm9hcmRpbmdMaXN0Py50b3RhbEVsZW1lbnRzIHx8IG9uYm9hcmRpbmdMaXN0Py5kYXRhPy5sZW5ndGh9fSlcbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG1hdFRhYkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX2xvYWRpbmdfdGFibGUgfHwgIW9uYm9hcmRpbmdMaXN0XCIgY2xhc3M9XCJidC1zcGlubmVyXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW25nU3R5bGVdPVwiX2xvYWRpbmdfdGFibGUgJiYgeydtYXJnaW4tYm90dG9tJzogJzEwMHZoJ31cIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3MudGlja2V0LWxpc3RdPVwiIV9sb2FkaW5nX3RhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1kZXNpZ24tdGFibGUgKm5nSWY9XCJvbmJvYXJkaW5nTGlzdFwiIFtjb2x1bW5EZWZpbml0aW9uc109XCJjb2x1bW5EZWZpbml0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc3BsYXlEZXRhaWxdPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cIm9uYm9hcmRpbmdMaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFuZ109XCJsYW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYnRuT3ZlcnJpZGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0U2VhcmNoXT1cImlucHV0U2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbRW1wdHlSb3ddPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc3BsYXlEZXRhaWxdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Jsb2NrRGV0YWlsc109XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGVzaWduLXRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9tYXQtdGFiPlxuICAgICAgICAgICAgICAgIDwhLS08bWF0LXRhYj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG1hdC10YWItbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBPZmZib2FyZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgKHt7X2xvYWRpbmdfdGlja2V0c19jbG9zZWQgPyB0aWNrZXRDbG9zZWROYiA6IChjbG9zZWQ/LnRvdGFsRWxlbWVudHMgfHwgY2xvc2VkPy5kYXRhPy5sZW5ndGgpfX0pXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIl9sb2FkaW5nX3RpY2tldHNfY2xvc2VkXCIgY2xhc3M9XCJ0aHJlZS1xdWFydGVycy1sb2FkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXRUYWJDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIl9sb2FkaW5nX3RhYmxlIHx8ICFjbG9zZWRcIiBjbGFzcz1cImJ0LXNwaW5uZXJcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJfbG9hZGluZ190YWJsZSAmJiB7J21hcmdpbi1ib3R0b20nOiAnMTAwdmgnfVwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy50aWNrZXQtbGlzdF09XCIhX2xvYWRpbmdfdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWRlc2lnbi10YWJsZSAqbmdJZj1cImNsb3NlZFwiIFtjb2x1bW5EZWZpbml0aW9uc109XCJjb2x1bW5EZWZpbml0aW9uc0Nsb3NlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc3BsYXlEZXRhaWxdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc3BsYXlDb21wb25lbnRdPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJjbG9zZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYW5nXT1cImxhbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtidG5PdmVycmlkZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRTZWFyY2hdPVwiaW5wdXRTZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtFbXB0eVJvd109XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGVzaWduLXRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9tYXQtdGFiPi0tPlxuICAgICAgICAgICAgPC9tYXQtdGFiLWdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvbWF0LWNhcmQ+Il19