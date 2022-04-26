import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "table";
function OnboardingTableComponent_ngx_design_table_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-design-table", 1);
} if (rf & 2) {
    var ctx_r890 = i0.ɵɵnextContext();
    i0.ɵɵproperty("columnDefinitions", ctx_r890.columnDefinitions)("displayDetail", false)("data", ctx_r890.onboardingList)("lang", ctx_r890.lang)("btnOverride", true)("inputSearch", ctx_r890.inputSearch)("EmptyRow", true)("displayDetail", true)("blockDetails", true);
} }
var OnboardingTableComponent = /** @class */ (function () {
    function OnboardingTableComponent() {
    }
    OnboardingTableComponent.prototype.ngOnInit = function () {
    };
    OnboardingTableComponent.ɵfac = function OnboardingTableComponent_Factory(t) { return new (t || OnboardingTableComponent)(); };
    OnboardingTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingTableComponent, selectors: [["lib-onboarding-table"]], inputs: { _loading_table: "_loading_table", onboardingList: "onboardingList", columnDefinitions: "columnDefinitions", lang: "lang", inputSearch: "inputSearch" }, decls: 1, vars: 1, consts: [[3, "columnDefinitions", "displayDetail", "data", "lang", "btnOverride", "inputSearch", "EmptyRow", "blockDetails", 4, "ngIf"], [3, "columnDefinitions", "displayDetail", "data", "lang", "btnOverride", "inputSearch", "EmptyRow", "blockDetails"]], template: function OnboardingTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, OnboardingTableComponent_ngx_design_table_0_Template, 1, 9, "ngx-design-table", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.onboardingList);
        } }, directives: [i1.NgIf, i2.TableComponent], styles: ["ngx-design-table th span{margin:auto;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26}  ngx-design-table .mat-header-row{background:#e5e8ee}  ngx-design-table .empty-row{height:5px!important;background:no-repeat padding-box #f4f7f9}  ngx-design-table .mat-table{background:no-repeat padding-box #f4f7f9}  ngx-design-table .mat-table tbody tr.element-row{height:83px!important;border-radius:6px;margin:10px 0}  ngx-design-table .mat-table tbody td.mat-cell{background-color:#fff}  ngx-design-table .mat-table tbody td.mat-cell a{text-decoration:none!important}  ngx-design-table .mat-table tbody td.mat-cell:first-of-type{border-bottom-left-radius:8px;border-top-left-radius:8px}  ngx-design-table .mat-table tbody td.mat-cell:last-of-type{border-bottom-right-radius:8px;border-top-right-radius:8px}"] });
    return OnboardingTableComponent;
}());
export { OnboardingTableComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnboardingTableComponent, [{
        type: Component,
        args: [{
                selector: 'lib-onboarding-table',
                templateUrl: './onboarding-table.component.html',
                styleUrls: ['./onboarding-table.component.scss']
            }]
    }], function () { return []; }, { _loading_table: [{
            type: Input
        }], onboardingList: [{
            type: Input
        }], columnDefinitions: [{
            type: Input
        }], lang: [{
            type: Input
        }], inputSearch: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLXRhYmxlL29uYm9hcmRpbmctdGFibGUuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLXRhYmxlL29uYm9hcmRpbmctdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDQXpELHNDQUdtQjs7O0lBSHNCLDhEQUF1Qyx3QkFBQSxpQ0FBQSx1QkFBQSxxQkFBQSxxQ0FBQSxrQkFBQSx1QkFBQSxzQkFBQTs7QURFaEY7SUFZRTtJQUFnQixDQUFDO0lBRWpCLDJDQUFRLEdBQVI7SUFDQSxDQUFDO29HQVZVLHdCQUF3QjtpRUFBeEIsd0JBQXdCO1lDUHJDLG1HQUdBOztZQUhrQix5Q0FBc0I7O21DREF4QztDQW1CQyxBQWpCRCxJQWlCQztTQVpZLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNqRDs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItb25ib2FyZGluZy10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vb25ib2FyZGluZy10YWJsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIF9sb2FkaW5nX3RhYmxlO1xuICBASW5wdXQoKSBvbmJvYXJkaW5nTGlzdDtcbiAgQElucHV0KCkgY29sdW1uRGVmaW5pdGlvbnM7XG4gIEBJbnB1dCgpIGxhbmc7XG4gIEBJbnB1dCgpIGlucHV0U2VhcmNoO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPG5neC1kZXNpZ24tdGFibGUgKm5nSWY9XCJvbmJvYXJkaW5nTGlzdFwiIFtjb2x1bW5EZWZpbml0aW9uc109XCJjb2x1bW5EZWZpbml0aW9uc1wiIFtkaXNwbGF5RGV0YWlsXT1cImZhbHNlXCJcbiAgICBbZGF0YV09XCJvbmJvYXJkaW5nTGlzdFwiIFtsYW5nXT1cImxhbmdcIiBbYnRuT3ZlcnJpZGVdPVwidHJ1ZVwiIFtpbnB1dFNlYXJjaF09XCJpbnB1dFNlYXJjaFwiIFtFbXB0eVJvd109XCJ0cnVlXCJcbiAgICBbZGlzcGxheURldGFpbF09XCJ0cnVlXCIgW2Jsb2NrRGV0YWlsc109XCJ0cnVlXCI+XG48L25neC1kZXNpZ24tdGFibGU+Il19