import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "table";
function OnboardingTableComponent_ngx_design_table_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-design-table", 1);
} if (rf & 2) {
    var ctx_r931 = i0.ɵɵnextContext();
    i0.ɵɵproperty("columnDefinitions", ctx_r931.columnDefinitions)("data", ctx_r931.data)("lang", ctx_r931.lang)("btnOverride", true)("displayDetail", false);
} }
var OnboardingTableComponent = /** @class */ (function () {
    function OnboardingTableComponent() {
    }
    OnboardingTableComponent.prototype.ngOnInit = function () {
    };
    OnboardingTableComponent.ɵfac = function OnboardingTableComponent_Factory(t) { return new (t || OnboardingTableComponent)(); };
    OnboardingTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingTableComponent, selectors: [["lib-onboarding-table"]], inputs: { _loading_table: "_loading_table", data: "data", columnDefinitions: "columnDefinitions", lang: "lang", inputSearch: "inputSearch" }, decls: 1, vars: 1, consts: [[3, "columnDefinitions", "data", "lang", "btnOverride", "displayDetail", 4, "ngIf"], [3, "columnDefinitions", "data", "lang", "btnOverride", "displayDetail"]], template: function OnboardingTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, OnboardingTableComponent_ngx_design_table_0_Template, 1, 5, "ngx-design-table", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.data);
        } }, directives: [i1.NgIf, i2.TableComponent], styles: ["ngx-design-table th span{margin:auto;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26}  ngx-design-table .mat-header-row{background:#e5e8ee}  ngx-design-table .empty-row{height:5px!important;background:no-repeat padding-box #f4f7f9}  ngx-design-table .detail-row .mat-column-expandedDetailX{display:none}  ngx-design-table .no-display-detail-empty-row{display:none}  ngx-design-table .mat-table{background:no-repeat padding-box #f4f7f9}  ngx-design-table .mat-table tbody tr.element-row{height:83px!important;border-radius:6px;margin:10px 0}  ngx-design-table .mat-table tbody td.mat-cell{border-bottom:7px solid #f4f7f9;border-top:7px solid #f4f7f9;background:#fff}  ngx-design-table .mat-table tbody td.mat-cell a{text-decoration:none!important}  ngx-design-table .mat-table tbody td.mat-cell span{font-family:Nexa;font-style:normal;font-weight:400}  ngx-design-table .mat-table tbody td.mat-cell app-is-mat-icon{width:100px}  ngx-design-table .mat-table tbody td.mat-cell:first-of-type{border-bottom-left-radius:10px;border-top-left-radius:10px}  ngx-design-table .mat-table tbody td.mat-cell:last-of-type{border-bottom-right-radius:10px;border-top-right-radius:10px}  ngx-design-table lib-custom-cell .custom-status{width:109px;height:36px;border-radius:4px;text-transform:capitalize;color:#fff;font-weight:500!important;font-size:16px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center}  ngx-design-table lib-custom-cell .custom-cell.finished{background:#6fe8d7}  ngx-design-table lib-custom-cell .custom-cell.to-finish{background:#f3a124}  ngx-design-table lib-custom-cell .custom-cell.last-name{display:flex;flex-direction:column}  ngx-design-table lib-custom-cell .custom-cell.last-name span:first-child{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;display:flex;align-items:center;color:#242731}"] });
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
        }], data: [{
            type: Input
        }], columnDefinitions: [{
            type: Input
        }], lang: [{
            type: Input
        }], inputSearch: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLXRhYmxlL29uYm9hcmRpbmctdGFibGUuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLXRhYmxlL29uYm9hcmRpbmctdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDQXpELHNDQUVtQjs7O0lBRlksOERBQXVDLHVCQUFBLHVCQUFBLHFCQUFBLHdCQUFBOztBREV0RTtJQVlFO0lBQWdCLENBQUM7SUFFakIsMkNBQVEsR0FBUjtJQUNBLENBQUM7b0dBVlUsd0JBQXdCO2lFQUF4Qix3QkFBd0I7WUNQckMsbUdBRUE7O1lBRmtCLCtCQUFZOzttQ0RBOUI7Q0FtQkMsQUFqQkQsSUFpQkM7U0FaWSx3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQ7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW9uYm9hcmRpbmctdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29uYm9hcmRpbmctdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBfbG9hZGluZ190YWJsZTtcbiAgQElucHV0KCkgZGF0YTtcbiAgQElucHV0KCkgY29sdW1uRGVmaW5pdGlvbnM7XG4gIEBJbnB1dCgpIGxhbmc7XG4gIEBJbnB1dCgpIGlucHV0U2VhcmNoO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPG5neC1kZXNpZ24tdGFibGUgKm5nSWY9XCJkYXRhXCIgW2NvbHVtbkRlZmluaXRpb25zXT1cImNvbHVtbkRlZmluaXRpb25zXCIgW2RhdGFdPVwiZGF0YVwiIFtsYW5nXT1cImxhbmdcIiBbYnRuT3ZlcnJpZGVdPVwidHJ1ZVwiXG4gIFtkaXNwbGF5RGV0YWlsXT1cImZhbHNlXCI+XG48L25neC1kZXNpZ24tdGFibGU+Il19