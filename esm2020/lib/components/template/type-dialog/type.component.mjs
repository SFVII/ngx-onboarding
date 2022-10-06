import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { locales } from '../../../i18n';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/icon";
function TypeComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵlistener("click", function TypeComponent_button_1_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onSelect(item_r1.value)); });
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
    } }, dependencies: [i3.MatButton, i4.NgForOf, i5.MatIcon, i1.MatDialogContent], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]{background:#E5E8EE;border-radius:4px;margin:5px;height:48px}mat-dialog-content[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]:hover, mat-dialog-content[_ngcontent-%COMP%]   .type-btn.active[_ngcontent-%COMP%]{background-color:transparent;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab);color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TypeComponent, [{
        type: Component,
        args: [{ selector: 'lib-type', template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\n  <button *ngFor=\"let item of typeList\" (click)=\"onSelect(item.value)\" mat-button class=\"type-btn\"\n    [class]=\"selectedType === item.value ? 'active' : ''\" style=\"margin-top: 10px\">\n    {{ locale[item.label] }} <mat-icon style=\"margin-left: 10px;\">{{ item.icon }}</mat-icon>\n  </button>\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content .type-btn{background:#E5E8EE;border-radius:4px;margin:5px;height:48px}mat-dialog-content .type-btn:hover,mat-dialog-content .type-btn.active{background-color:transparent;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab);color:#fff}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy90ZW1wbGF0ZS90eXBlLWRpYWxvZy90eXBlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9jb21wb25lbnRzL3RlbXBsYXRlL3R5cGUtZGlhbG9nL3R5cGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUNEdEMsaUNBQ2lGO0lBRDNDLHdOQUFTLGVBQUEsOEJBQW9CLENBQUEsSUFBQztJQUVsRSxZQUF5QjtJQUFBLG1DQUFxQztJQUFBLFlBQWU7SUFBQSxpQkFBVyxFQUFBOzs7O0lBRHhGLG9FQUFxRDtJQUNyRCxlQUF5QjtJQUF6Qiw2REFBeUI7SUFBcUMsZUFBZTtJQUFmLGtDQUFlOztBRE9qRixNQUFNLE9BQU8sYUFBYTtJQStEeEIsWUFBNkMsSUFBUyxFQUM1QyxTQUFzQyxFQUFVLE9BQTBCO1FBRHZDLFNBQUksR0FBSixJQUFJLENBQUs7UUFDNUMsY0FBUyxHQUFULFNBQVMsQ0FBNkI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQS9EcEYsYUFBUSxHQUFHLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsTUFBTTthQUNkO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLElBQUksRUFBRSxhQUFhO2dCQUNuQixLQUFLLEVBQUUsVUFBVTthQUNsQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxzQkFBc0I7Z0JBQzdCLElBQUksRUFBRSxzQkFBc0I7Z0JBQzVCLEtBQUssRUFBRSxPQUFPO2FBQ2Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsZUFBZTtnQkFDdEIsSUFBSSxFQUFFLHlCQUF5QjtnQkFDL0IsS0FBSyxFQUFFLFFBQVE7YUFDaEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsVUFBVTtnQkFDakIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRSxVQUFVO2FBQ2xCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLG9CQUFvQjtnQkFDM0IsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRSxtQkFBbUI7YUFDM0I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsZUFBZTtnQkFDdEIsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsS0FBSyxFQUFFLFFBQVE7YUFDaEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsT0FBTzthQUNmO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxVQUFVO2FBQ2xCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLEtBQUs7YUFDYjtZQUNEO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLElBQUksRUFBRSxZQUFZO2dCQUNsQixLQUFLLEVBQUUsTUFBTTthQUNkO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLE1BQU07YUFDZCxDQUFDLENBQUE7UUFDRixpQkFBWSxHQUFHLEVBQUUsQ0FBQTtRQUNqQixXQUFNLEdBQVEsRUFBRSxDQUFBO1FBR2QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBSTtRQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7OzBFQTVFVSxhQUFhLHVCQStESixlQUFlO2dFQS9EeEIsYUFBYTtRQ1YxQiw2Q0FBa0Q7UUFDaEQsb0VBR1M7UUFDWCxpQkFBcUI7O1FBSk0sZUFBVztRQUFYLHNDQUFXOzt1RkRTekIsYUFBYTtjQUx6QixTQUFTOzJCQUNFLFVBQVU7O3NCQW1FUCxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBsb2NhbGVzIH0gZnJvbSAnLi4vLi4vLi4vaTE4bic7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10eXBlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3R5cGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90eXBlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVHlwZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHR5cGVMaXN0ID0gW3tcbiAgICBsYWJlbDogJ1NIT1JUX1RFWFQnLFxuICAgIGljb246ICdsaXN0X2FsdCcsXG4gICAgdmFsdWU6ICd0ZXh0J1xuICB9LFxuICB7XG4gICAgbGFiZWw6ICdMT05HX1RFWFQnLFxuICAgIGljb246ICdkZXNjcmlwdGlvbicsXG4gICAgdmFsdWU6ICd0ZXh0YXJlYSdcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnU0lOR0xFX0NIT0lDRV9PUFRJT04nLFxuICAgIGljb246ICdyYWRpb19idXR0b25fY2hlY2tlZCcsXG4gICAgdmFsdWU6ICdyYWRpbydcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnT0ZGX09OX0JVVFRPTicsXG4gICAgaWNvbjogJ2NoZWNrX2JveF9vdXRsaW5lX2JsYW5rJyxcbiAgICB2YWx1ZTogJ3RvZ2dsZSdcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnQ0hFQ0tCT1gnLFxuICAgIGljb246ICdjaGVja19ib3gnLFxuICAgIHZhbHVlOiAnY2hlY2tib3gnXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ01VTFRJUExFX0NIRUNLQk9YICcsXG4gICAgaWNvbjogJ2NoZWNrX2JveCcsXG4gICAgdmFsdWU6ICdjaGVja2JveF9tdWx0aXBsZSdcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnRFJPUERPV05fTElTVCcsXG4gICAgaWNvbjogJ2tleWJvYXJkX2Fycm93X2Rvd24nLFxuICAgIHZhbHVlOiAnc2VsZWN0J1xuICB9LFxuICB7XG4gICAgbGFiZWw6ICdFTUFJTCcsXG4gICAgaWNvbjogJ21haWwnLFxuICAgIHZhbHVlOiAnZW1haWwnXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1BBU1NXT1JEJyxcbiAgICBpY29uOiAnbG9jaycsXG4gICAgdmFsdWU6ICdwYXNzd29yZCdcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnUEhPTkUnLFxuICAgIGljb246ICdwaG9uZScsXG4gICAgdmFsdWU6ICd0ZWwnXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0RBVEUnLFxuICAgIGljb246ICdkYXRlX3JhbmdlJyxcbiAgICB2YWx1ZTogJ2RhdGUnXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ05PTkUnLFxuICAgIGljb246ICdzcXVhcmUnLFxuICAgIHZhbHVlOiAnbm9uZSdcbiAgfV1cbiAgc2VsZWN0ZWRUeXBlID0gXCJcIlxuICBsb2NhbGU6IGFueSA9IHt9XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueSxcbiAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFR5cGVDb21wb25lbnQ+LCBwcml2YXRlIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlKSB7XG4gICAgdGhpcy5zZWxlY3RlZFR5cGUgPSB0aGlzLmRhdGEuc2VsZWN0ZWRUeXBlO1xuICAgIHRoaXMuc2VydmljZS5fbGFuZy5zdWJzY3JpYmUoKGxvY2FsZSkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVzW2xvY2FsZV0uUFJPRklMRTtcbiAgICB9KVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBvblNlbGVjdCh0eXBlKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodHlwZSk7XG4gIH1cblxufVxuIiwiPG1hdC1kaWFsb2ctY29udGVudCBjbGFzcz1cIm5neC1vbmJvYXJkaW5nLWRpYWxvZ1wiPlxuICA8YnV0dG9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHR5cGVMaXN0XCIgKGNsaWNrKT1cIm9uU2VsZWN0KGl0ZW0udmFsdWUpXCIgbWF0LWJ1dHRvbiBjbGFzcz1cInR5cGUtYnRuXCJcbiAgICBbY2xhc3NdPVwic2VsZWN0ZWRUeXBlID09PSBpdGVtLnZhbHVlID8gJ2FjdGl2ZScgOiAnJ1wiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweFwiPlxuICAgIHt7IGxvY2FsZVtpdGVtLmxhYmVsXSB9fSA8bWF0LWljb24gc3R5bGU9XCJtYXJnaW4tbGVmdDogMTBweDtcIj57eyBpdGVtLmljb24gfX08L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbjwvbWF0LWRpYWxvZy1jb250ZW50PiJdfQ==