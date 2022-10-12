import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-table";
function OnboardingTableComponent_ngx_design_table_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-design-table", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("columnDefinitions", ctx_r0.columnDefinitions)("data", ctx_r0.data)("lang", ctx_r0.lang)("btnOverride", true)("lang", ctx_r0.lang)("EmptyRow", true)("displayDetail", true)("blockDetails", true);
} }
export class OnboardingTableComponent {
    constructor() { }
    ngOnInit() {
    }
}
OnboardingTableComponent.ɵfac = function OnboardingTableComponent_Factory(t) { return new (t || OnboardingTableComponent)(); };
OnboardingTableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnboardingTableComponent, selectors: [["lib-onboarding-table"]], inputs: { _loading_table: "_loading_table", data: "data", columnDefinitions: "columnDefinitions", lang: "lang", inputSearch: "inputSearch" }, decls: 1, vars: 1, consts: [[3, "columnDefinitions", "data", "lang", "btnOverride", "EmptyRow", "displayDetail", "blockDetails", 4, "ngIf"], [3, "columnDefinitions", "data", "lang", "btnOverride", "EmptyRow", "displayDetail", "blockDetails"]], template: function OnboardingTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, OnboardingTableComponent_ngx_design_table_0_Template, 1, 8, "ngx-design-table", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.data);
    } }, dependencies: [i1.NgIf, i2.TableComponent] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingTableComponent, [{
        type: Component,
        args: [{ selector: 'lib-onboarding-table', template: "<ngx-design-table *ngIf=\"data\" [columnDefinitions]=\"columnDefinitions\" [data]=\"data\" [lang]=\"lang\" [btnOverride]=\"true\"\n  [lang]=\"lang\" [EmptyRow]=\"true\" [displayDetail]=\"true\" [blockDetails]=\"true\">\n</ngx-design-table>" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmctdGFibGUvb25ib2FyZGluZy10YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmctdGFibGUvb25ib2FyZGluZy10YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNBekQsc0NBRW1COzs7SUFGWSw0REFBdUMscUJBQUEscUJBQUEscUJBQUEscUJBQUEsa0JBQUEsdUJBQUEsc0JBQUE7O0FET3RFLE1BQU0sT0FBTyx3QkFBd0I7SUFPbkMsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7O2dHQVZVLHdCQUF3QjsyRUFBeEIsd0JBQXdCO1FDUHJDLG1HQUVtQjs7UUFGQSwrQkFBVTs7dUZET2hCLHdCQUF3QjtjQUxwQyxTQUFTOzJCQUNFLHNCQUFzQjtzQ0FLdkIsY0FBYztrQkFBdEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW9uYm9hcmRpbmctdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29uYm9hcmRpbmctdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBfbG9hZGluZ190YWJsZTtcbiAgQElucHV0KCkgZGF0YTtcbiAgQElucHV0KCkgY29sdW1uRGVmaW5pdGlvbnM7XG4gIEBJbnB1dCgpIGxhbmc7XG4gIEBJbnB1dCgpIGlucHV0U2VhcmNoO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPG5neC1kZXNpZ24tdGFibGUgKm5nSWY9XCJkYXRhXCIgW2NvbHVtbkRlZmluaXRpb25zXT1cImNvbHVtbkRlZmluaXRpb25zXCIgW2RhdGFdPVwiZGF0YVwiIFtsYW5nXT1cImxhbmdcIiBbYnRuT3ZlcnJpZGVdPVwidHJ1ZVwiXG4gIFtsYW5nXT1cImxhbmdcIiBbRW1wdHlSb3ddPVwidHJ1ZVwiIFtkaXNwbGF5RGV0YWlsXT1cInRydWVcIiBbYmxvY2tEZXRhaWxzXT1cInRydWVcIj5cbjwvbmd4LWRlc2lnbi10YWJsZT4iXX0=