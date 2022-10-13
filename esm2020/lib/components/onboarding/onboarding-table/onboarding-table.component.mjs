import { Component, Input } from '@angular/core';
import { CoreMatTableComponent } from '../../../extend/coreMatTableComponent';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/common";
import * as i3 from "ngx-table";
function OnboardingTableComponent_ngx_design_table_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-design-table", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("columnDefinitions", ctx_r0.columnDefinitions)("data", ctx_r0._data)("lang", ctx_r0.lang)("btnOverride", true)("lang", ctx_r0.lang)("EmptyRow", true)("displayDetail", true)("blockDetails", true);
} }
export class OnboardingTableComponent extends CoreMatTableComponent {
    constructor(dateAdapter) {
        super(dateAdapter);
        this.dateAdapter = dateAdapter;
        this.locale = {};
        this.data = [];
        this.filterParamsResult = {};
        this.searchInput = '';
        this.sortInit = {
            active: 'Id',
            direction: 'desc'
        };
        this.size = 15;
        this.filter = {};
        this.columnDefinitions = [];
        this.startPage = 0;
        this.apply(() => {
            return this.data;
        });
    }
    async ngOnInit() {
        super.ngOnInit();
    }
}
OnboardingTableComponent.ɵfac = function OnboardingTableComponent_Factory(t) { return new (t || OnboardingTableComponent)(i0.ɵɵdirectiveInject(i1.DateAdapter)); };
OnboardingTableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnboardingTableComponent, selectors: [["lib-onboarding-table"]], inputs: { _loading_table: "_loading_table", lang: "lang", locale: "locale", data: "data", filterParamsResult: "filterParamsResult", searchInput: "searchInput", sortInit: "sortInit", rangeInit: "rangeInit", size: "size", filter: "filter", columnDefinitions: "columnDefinitions", startPage: "startPage" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 3, consts: [[1, "header-result"], [3, "columnDefinitions", "data", "lang", "btnOverride", "EmptyRow", "displayDetail", "blockDetails", 4, "ngIf"], [3, "columnDefinitions", "data", "lang", "btnOverride", "EmptyRow", "displayDetail", "blockDetails"]], template: function OnboardingTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, OnboardingTableComponent_ngx_design_table_2_Template, 1, 8, "ngx-design-table", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate2("", ctx._data == null ? null : ctx._data.totalElements, " ", ctx.locale == null ? null : ctx.locale.RESULTS, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx._data);
    } }, dependencies: [i2.NgIf, i3.TableComponent], styles: ["ngx-onboarding lib-onboarding-table ngx-design-table .table-wrapper>table{border-collapse:separate!important;border-spacing:0px 20px!important}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-header-row{background:#E5E8EE}  ngx-onboarding lib-onboarding-table ngx-design-table .empty-row{height:0px!important;background:0% 0% no-repeat padding-box padding-box rgb(244,247,249)}  ngx-onboarding lib-onboarding-table ngx-design-table .no-display-detail-empty-row{display:none}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-table{background:0% 0% no-repeat padding-box padding-box rgb(244,247,249)}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell{background:#fff!important}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell a{text-decoration:none!important}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell span{font-style:normal;font-weight:400}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell app-is-mat-icon{width:100px}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td:has(.mat-column-expandedDetailX){border-top:0px solid #f4f7f9!important;border-radius:0 0 14px 14px/0px 0px 14px 14px}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell:first-of-type{border-bottom-left-radius:14px;border-top-left-radius:14px}  ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell:last-of-type{border-bottom-right-radius:14px;border-top-right-radius:14px}  ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-status{width:109px;height:36px;border-radius:4px;text-transform:capitalize;color:#fff;font-weight:500!important;font-size:16px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center}  ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.finished{background:#6FE8D7}  ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.to-finish{background:#F3A124}  ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.last-name{display:flex;flex-direction:column}  ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.last-name span:first-child{font-style:normal;font-weight:700;font-size:14px;line-height:120%;display:flex;align-items:center;color:#242731}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingTableComponent, [{
        type: Component,
        args: [{ selector: 'lib-onboarding-table', template: "<p class=\"header-result\">{{_data?.totalElements}} {{locale?.RESULTS}}</p>\n<ngx-design-table *ngIf=\"_data\" [columnDefinitions]=\"columnDefinitions\" [data]=\"_data\" [lang]=\"lang\"\n  [btnOverride]=\"true\" [lang]=\"lang\" [EmptyRow]=\"true\" [displayDetail]=\"true\" [blockDetails]=\"true\">\n</ngx-design-table>", styles: ["::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .table-wrapper>table{border-collapse:separate!important;border-spacing:0px 20px!important}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-header-row{background:#E5E8EE}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .empty-row{height:0px!important;background:0% 0% no-repeat padding-box padding-box rgb(244,247,249)}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .no-display-detail-empty-row{display:none}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table{background:0% 0% no-repeat padding-box padding-box rgb(244,247,249)}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell{background:#fff!important}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell a{text-decoration:none!important}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell span{font-style:normal;font-weight:400}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell app-is-mat-icon{width:100px}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td:has(.mat-column-expandedDetailX){border-top:0px solid #f4f7f9!important;border-radius:0 0 14px 14px/0px 0px 14px 14px}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell:first-of-type{border-bottom-left-radius:14px;border-top-left-radius:14px}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table .mat-table tbody td.mat-cell:last-of-type{border-bottom-right-radius:14px;border-top-right-radius:14px}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-status{width:109px;height:36px;border-radius:4px;text-transform:capitalize;color:#fff;font-weight:500!important;font-size:16px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.finished{background:#6FE8D7}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.to-finish{background:#F3A124}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.last-name{display:flex;flex-direction:column}::ng-deep ngx-onboarding lib-onboarding-table ngx-design-table lib-custom-cell .custom-cell.last-name span:first-child{font-style:normal;font-weight:700;font-size:14px;line-height:120%;display:flex;align-items:center;color:#242731}\n"] }]
    }], function () { return [{ type: i1.DateAdapter }]; }, { _loading_table: [{
            type: Input
        }], lang: [{
            type: Input
        }], locale: [{
            type: Input
        }], data: [{
            type: Input
        }], filterParamsResult: [{
            type: Input
        }], searchInput: [{
            type: Input
        }], sortInit: [{
            type: Input
        }], rangeInit: [{
            type: Input
        }], size: [{
            type: Input
        }], filter: [{
            type: Input
        }], columnDefinitions: [{
            type: Input
        }], startPage: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmctdGFibGUvb25ib2FyZGluZy10YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmctdGFibGUvb25ib2FyZGluZy10YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUd6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7O0lDRjlFLHNDQUVtQjs7O0lBRmEsNERBQXVDLHNCQUFBLHFCQUFBLHFCQUFBLHFCQUFBLGtCQUFBLHVCQUFBLHNCQUFBOztBRFV2RSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEscUJBQXFCO0lBaUJqRSxZQUNTLFdBQTZCO1FBRXBDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUZYLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQWY3QixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLFNBQUksR0FBVSxFQUFFLENBQUM7UUFDakIsdUJBQWtCLEdBQVEsRUFBRSxDQUFBO1FBQzVCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGFBQVEsR0FBUztZQUN4QixNQUFNLEVBQUUsSUFBSTtZQUNaLFNBQVMsRUFBRSxNQUFNO1NBQ2xCLENBQUM7UUFFTyxTQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ1QsV0FBTSxHQUFHLEVBQUUsQ0FBQTtRQUNYLHNCQUFpQixHQUFRLEVBQUUsQ0FBQTtRQUMzQixjQUFTLEdBQUcsQ0FBQyxDQUFBO1FBTXBCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRO1FBQ1osS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7O2dHQTVCVSx3QkFBd0I7MkVBQXhCLHdCQUF3QjtRQ1hyQyw0QkFBeUI7UUFBQSxZQUE0QztRQUFBLGlCQUFJO1FBQ3pFLG1HQUVtQjs7UUFITSxlQUE0QztRQUE1QyxzSUFBNEM7UUFDbEQsZUFBVztRQUFYLGdDQUFXOzt1RkRVakIsd0JBQXdCO2NBTHBDLFNBQVM7MkJBQ0Usc0JBQXNCOzhEQUt2QixjQUFjO2tCQUF0QixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFJRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyRGF0ZUludGVyZmFjZSwgU29ydCB9IGZyb20gJ25neC10YWJsZSc7XG5cbmltcG9ydCB7IENvcmVNYXRUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2V4dGVuZC9jb3JlTWF0VGFibGVDb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW9uYm9hcmRpbmctdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29uYm9hcmRpbmctdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nVGFibGVDb21wb25lbnQgZXh0ZW5kcyBDb3JlTWF0VGFibGVDb21wb25lbnQge1xuICBASW5wdXQoKSBfbG9hZGluZ190YWJsZTtcbiAgQElucHV0KCkgbGFuZztcbiAgQElucHV0KCkgbG9jYWxlOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgZGF0YTogYW55W10gPSBbXTtcbiAgQElucHV0KCkgZmlsdGVyUGFyYW1zUmVzdWx0OiBhbnkgPSB7fVxuICBASW5wdXQoKSBzZWFyY2hJbnB1dDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHNvcnRJbml0OiBTb3J0ID0ge1xuICAgIGFjdGl2ZTogJ0lkJyxcbiAgICBkaXJlY3Rpb246ICdkZXNjJ1xuICB9O1xuICBASW5wdXQoKSByYW5nZUluaXQhOiBGaWx0ZXJEYXRlSW50ZXJmYWNlO1xuICBASW5wdXQoKSBzaXplID0gMTVcbiAgQElucHV0KCkgZmlsdGVyID0ge31cbiAgQElucHV0KCkgY29sdW1uRGVmaW5pdGlvbnM6IGFueSA9IFtdXG4gIEBJbnB1dCgpIHN0YXJ0UGFnZSA9IDBcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPGFueT5cbiAgKSB7XG4gICAgc3VwZXIoZGF0ZUFkYXB0ZXIpXG4gICAgdGhpcy5hcHBseSgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cbn1cbiIsIjxwIGNsYXNzPVwiaGVhZGVyLXJlc3VsdFwiPnt7X2RhdGE/LnRvdGFsRWxlbWVudHN9fSB7e2xvY2FsZT8uUkVTVUxUU319PC9wPlxuPG5neC1kZXNpZ24tdGFibGUgKm5nSWY9XCJfZGF0YVwiIFtjb2x1bW5EZWZpbml0aW9uc109XCJjb2x1bW5EZWZpbml0aW9uc1wiIFtkYXRhXT1cIl9kYXRhXCIgW2xhbmddPVwibGFuZ1wiXG4gIFtidG5PdmVycmlkZV09XCJ0cnVlXCIgW2xhbmddPVwibGFuZ1wiIFtFbXB0eVJvd109XCJ0cnVlXCIgW2Rpc3BsYXlEZXRhaWxdPVwidHJ1ZVwiIFtibG9ja0RldGFpbHNdPVwidHJ1ZVwiPlxuPC9uZ3gtZGVzaWduLXRhYmxlPiJdfQ==