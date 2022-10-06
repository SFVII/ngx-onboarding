import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { locales } from '../../../i18n';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
function TypeComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵlistener("click", function TypeComponent_button_1_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onSelect(item_r1.value); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon", 3);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.selectedType === item_r1.value ? "active" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.locale[item_r1.label], " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.icon);
} }
export class TypeComponent {
    constructor(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.typeList = [{
                label: 'SHORT_TEXT',
                icon: 'list_alt',
                value: 'text'
            },
            {
                label: 'LONG_TEXT',
                icon: 'description',
                value: 'textarea'
            },
            {
                label: 'SINGLE_CHOICE_OPTION',
                icon: 'radio_button_checked',
                value: 'radio'
            },
            {
                label: 'OFF_ON_BUTTON',
                icon: 'check_box_outline_blank',
                value: 'toggle'
            },
            {
                label: 'CHECKBOX',
                icon: 'check_box',
                value: 'checkbox'
            },
            {
                label: 'MULTIPLE_CHECKBOX ',
                icon: 'check_box',
                value: 'checkbox_multiple'
            },
            {
                label: 'DROPDOWN_LIST',
                icon: 'keyboard_arrow_down',
                value: 'select'
            },
            {
                label: 'EMAIL',
                icon: 'mail',
                value: 'email'
            },
            {
                label: 'PASSWORD',
                icon: 'lock',
                value: 'password'
            },
            {
                label: 'PHONE',
                icon: 'phone',
                value: 'tel'
            },
            {
                label: 'DATE',
                icon: 'date_range',
                value: 'date'
            },
            {
                label: 'NONE',
                icon: 'square',
                value: 'none'
            }];
        this.selectedType = "";
        this.locale = {};
        this.selectedType = this.data.selectedType;
        this.service._lang.subscribe((locale) => {
            this.locale = locales[locale].PROFILE;
        });
    }
    ngOnInit() {
    }
    onSelect(type) {
        this.dialogRef.close(type);
    }
}
TypeComponent.ɵfac = function TypeComponent_Factory(t) { return new (t || TypeComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(i2.OnboardingService)); };
TypeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TypeComponent, selectors: [["lib-type"]], decls: 2, vars: 1, consts: [[1, "ngx-onboarding-dialog"], ["mat-button", "", "class", "type-btn", "style", "margin-top: 10px", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "type-btn", 2, "margin-top", "10px", 3, "click"], [2, "margin-left", "10px"]], template: function TypeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-dialog-content", 0);
        i0.ɵɵtemplate(1, TypeComponent_button_1_Template, 4, 4, "button", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.typeList);
    } }, directives: [i1.MatDialogContent, i3.NgForOf, i4.MatButton, i5.MatIcon], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]{background:#E5E8EE;border-radius:4px;margin:5px;height:48px}mat-dialog-content[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]:hover, mat-dialog-content[_ngcontent-%COMP%]   .type-btn.active[_ngcontent-%COMP%]{background-color:transparent;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab);color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TypeComponent, [{
        type: Component,
        args: [{ selector: 'lib-type', template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n  <button *ngFor=\"let item of typeList\" (click)=\"onSelect(item.value)\" mat-button class=\"type-btn\"\r\n    [class]=\"selectedType === item.value ? 'active' : ''\" style=\"margin-top: 10px\">\r\n    {{ locale[item.label] }} <mat-icon style=\"margin-left: 10px;\">{{ item.icon }}</mat-icon>\r\n  </button>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content .type-btn{background:#E5E8EE;border-radius:4px;margin:5px;height:48px}mat-dialog-content .type-btn:hover,mat-dialog-content .type-btn.active{background-color:transparent;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab);color:#fff}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy90ZW1wbGF0ZS90eXBlLWRpYWxvZy90eXBlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9jb21wb25lbnRzL3RlbXBsYXRlL3R5cGUtZGlhbG9nL3R5cGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUNEdEMsaUNBQ2lGO0lBRDNDLHdOQUFTLDhCQUFvQixJQUFDO0lBRWxFLFlBQXlCO0lBQUEsbUNBQXFDO0lBQUEsWUFBZTtJQUFBLGlCQUFXLEVBQUE7Ozs7SUFEeEYsb0VBQXFEO0lBQ3JELGVBQXlCO0lBQXpCLDZEQUF5QjtJQUFxQyxlQUFlO0lBQWYsa0NBQWU7O0FET2pGLE1BQU0sT0FBTyxhQUFhO0lBK0R4QixZQUE2QyxJQUFTLEVBQzVDLFNBQXNDLEVBQVUsT0FBMEI7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUM1QyxjQUFTLEdBQVQsU0FBUyxDQUE2QjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBL0RwRixhQUFRLEdBQUcsQ0FBQztnQkFDVixLQUFLLEVBQUUsWUFBWTtnQkFDbkIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxNQUFNO2FBQ2Q7WUFDRDtnQkFDRSxLQUFLLEVBQUUsV0FBVztnQkFDbEIsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLEtBQUssRUFBRSxVQUFVO2FBQ2xCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHNCQUFzQjtnQkFDN0IsSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsS0FBSyxFQUFFLE9BQU87YUFDZjtZQUNEO2dCQUNFLEtBQUssRUFBRSxlQUFlO2dCQUN0QixJQUFJLEVBQUUseUJBQXlCO2dCQUMvQixLQUFLLEVBQUUsUUFBUTthQUNoQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxVQUFVO2dCQUNqQixJQUFJLEVBQUUsV0FBVztnQkFDakIsS0FBSyxFQUFFLFVBQVU7YUFDbEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsb0JBQW9CO2dCQUMzQixJQUFJLEVBQUUsV0FBVztnQkFDakIsS0FBSyxFQUFFLG1CQUFtQjthQUMzQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxlQUFlO2dCQUN0QixJQUFJLEVBQUUscUJBQXFCO2dCQUMzQixLQUFLLEVBQUUsUUFBUTthQUNoQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxPQUFPO2dCQUNkLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxPQUFPO2FBQ2Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsVUFBVTtnQkFDakIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLFVBQVU7YUFDbEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsS0FBSzthQUNiO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEtBQUssRUFBRSxNQUFNO2FBQ2Q7WUFDRDtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsTUFBTTthQUNkLENBQUMsQ0FBQTtRQUNGLGlCQUFZLEdBQUcsRUFBRSxDQUFBO1FBQ2pCLFdBQU0sR0FBUSxFQUFFLENBQUE7UUFHZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFJO1FBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7MEVBNUVVLGFBQWEsdUJBK0RKLGVBQWU7Z0VBL0R4QixhQUFhO1FDVjFCLDZDQUFrRDtRQUNoRCxvRUFHUztRQUNYLGlCQUFxQjs7UUFKTSxlQUFXO1FBQVgsc0NBQVc7O3VGRFN6QixhQUFhO2NBTHpCLFNBQVM7MkJBQ0UsVUFBVTs7c0JBbUVQLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBsb2NhbGVzIH0gZnJvbSAnLi4vLi4vLi4vaTE4bic7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXR5cGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90eXBlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90eXBlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFR5cGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHR5cGVMaXN0ID0gW3tcclxuICAgIGxhYmVsOiAnU0hPUlRfVEVYVCcsXHJcbiAgICBpY29uOiAnbGlzdF9hbHQnLFxyXG4gICAgdmFsdWU6ICd0ZXh0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdMT05HX1RFWFQnLFxyXG4gICAgaWNvbjogJ2Rlc2NyaXB0aW9uJyxcclxuICAgIHZhbHVlOiAndGV4dGFyZWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ1NJTkdMRV9DSE9JQ0VfT1BUSU9OJyxcclxuICAgIGljb246ICdyYWRpb19idXR0b25fY2hlY2tlZCcsXHJcbiAgICB2YWx1ZTogJ3JhZGlvJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdPRkZfT05fQlVUVE9OJyxcclxuICAgIGljb246ICdjaGVja19ib3hfb3V0bGluZV9ibGFuaycsXHJcbiAgICB2YWx1ZTogJ3RvZ2dsZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnQ0hFQ0tCT1gnLFxyXG4gICAgaWNvbjogJ2NoZWNrX2JveCcsXHJcbiAgICB2YWx1ZTogJ2NoZWNrYm94J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdNVUxUSVBMRV9DSEVDS0JPWCAnLFxyXG4gICAgaWNvbjogJ2NoZWNrX2JveCcsXHJcbiAgICB2YWx1ZTogJ2NoZWNrYm94X211bHRpcGxlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdEUk9QRE9XTl9MSVNUJyxcclxuICAgIGljb246ICdrZXlib2FyZF9hcnJvd19kb3duJyxcclxuICAgIHZhbHVlOiAnc2VsZWN0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdFTUFJTCcsXHJcbiAgICBpY29uOiAnbWFpbCcsXHJcbiAgICB2YWx1ZTogJ2VtYWlsJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdQQVNTV09SRCcsXHJcbiAgICBpY29uOiAnbG9jaycsXHJcbiAgICB2YWx1ZTogJ3Bhc3N3b3JkJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdQSE9ORScsXHJcbiAgICBpY29uOiAncGhvbmUnLFxyXG4gICAgdmFsdWU6ICd0ZWwnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0RBVEUnLFxyXG4gICAgaWNvbjogJ2RhdGVfcmFuZ2UnLFxyXG4gICAgdmFsdWU6ICdkYXRlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdOT05FJyxcclxuICAgIGljb246ICdzcXVhcmUnLFxyXG4gICAgdmFsdWU6ICdub25lJ1xyXG4gIH1dXHJcbiAgc2VsZWN0ZWRUeXBlID0gXCJcIlxyXG4gIGxvY2FsZTogYW55ID0ge31cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnksXHJcbiAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFR5cGVDb21wb25lbnQ+LCBwcml2YXRlIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkVHlwZSA9IHRoaXMuZGF0YS5zZWxlY3RlZFR5cGU7XHJcbiAgICB0aGlzLnNlcnZpY2UuX2xhbmcuc3Vic2NyaWJlKChsb2NhbGUpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVzW2xvY2FsZV0uUFJPRklMRTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0KHR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHR5cGUpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPG1hdC1kaWFsb2ctY29udGVudCBjbGFzcz1cIm5neC1vbmJvYXJkaW5nLWRpYWxvZ1wiPlxyXG4gIDxidXR0b24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgdHlwZUxpc3RcIiAoY2xpY2spPVwib25TZWxlY3QoaXRlbS52YWx1ZSlcIiBtYXQtYnV0dG9uIGNsYXNzPVwidHlwZS1idG5cIlxyXG4gICAgW2NsYXNzXT1cInNlbGVjdGVkVHlwZSA9PT0gaXRlbS52YWx1ZSA/ICdhY3RpdmUnIDogJydcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHhcIj5cclxuICAgIHt7IGxvY2FsZVtpdGVtLmxhYmVsXSB9fSA8bWF0LWljb24gc3R5bGU9XCJtYXJnaW4tbGVmdDogMTBweDtcIj57eyBpdGVtLmljb24gfX08L21hdC1pY29uPlxyXG4gIDwvYnV0dG9uPlxyXG48L21hdC1kaWFsb2ctY29udGVudD4iXX0=