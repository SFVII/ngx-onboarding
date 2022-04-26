import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
function TypeComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function TypeComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const item_r3 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onSelect(item_r3.value); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r2.selectedType === item_r3.value ? "active" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r3.label, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.icon);
} }
export class TypeComponent {
    constructor(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.typeList = [{
                label: 'Text Court',
                icon: 'list_alt',
                value: 'text'
            },
            {
                label: 'Text Long',
                icon: 'description',
                value: 'textarea'
            },
            {
                label: 'Options à choix unique',
                icon: 'radio_button_checked',
                value: 'radio'
            },
            {
                label: 'Bouton On/Off',
                icon: 'check_box',
                value: 'checkbox'
            },
            {
                label: 'Checkbox multiple',
                icon: 'check_box',
                value: 'checkbox_multiple'
            },
            {
                label: 'Liste déroulante',
                icon: 'keyboard_arrow_down',
                value: 'select'
            },
            {
                label: 'Email',
                icon: 'mail',
                value: 'email'
            },
            {
                label: 'Mot de passe',
                icon: 'lock',
                value: 'password'
            },
            {
                label: 'Téléphone',
                icon: 'phone',
                value: 'tel'
            },
            {
                label: 'Date',
                icon: 'date_range',
                value: 'date'
            }];
        this.selectedType = "";
        this.selectedType = this.data.selectedType;
    }
    ngOnInit() {
    }
    onSelect(type) {
        this.dialogRef.close(type);
    }
}
TypeComponent.ɵfac = function TypeComponent_Factory(t) { return new (t || TypeComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(i2.OnboardingService)); };
TypeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TypeComponent, selectors: [["lib-type"]], decls: 2, vars: 1, consts: [["mat-button", "", "class", "nowboard-btn", "style", "margin-top: 10px", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "nowboard-btn", 2, "margin-top", "10px", 3, "click"]], template: function TypeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-dialog-content");
        i0.ɵɵtemplate(1, TypeComponent_button_1_Template, 4, 4, "button", 0);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.typeList);
    } }, directives: [i1.MatDialogContent, i3.NgForOf, i4.MatButton, i5.MatIcon], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content[_ngcontent-%COMP%]   .nowboard-btn[_ngcontent-%COMP%]{background:#e5e8ee;border-radius:4px;margin:5px;height:48px}mat-dialog-content[_ngcontent-%COMP%]   .nowboard-btn.active[_ngcontent-%COMP%], mat-dialog-content[_ngcontent-%COMP%]   .nowboard-btn[_ngcontent-%COMP%]:hover{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TypeComponent, [{
        type: Component,
        args: [{
                selector: 'lib-type',
                templateUrl: './type.component.html',
                styleUrls: ['./type.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGVtcGxhdGUvdHlwZS1kaWFsb2cvdHlwZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy90ZW1wbGF0ZS90eXBlLWRpYWxvZy90eXBlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztJQ0F2RSxpQ0FRRTtJQU5BLDhOQUE4QjtJQU05QixZQUFpQjtJQUFBLGdDQUFVO0lBQUEsWUFBZTtJQUFBLGlCQUFXO0lBQ3ZELGlCQUFTOzs7O0lBSlAsb0VBQXFEO0lBR3JELGVBQWlCO0lBQWpCLDhDQUFpQjtJQUFVLGVBQWU7SUFBZixrQ0FBZTs7QURBOUMsTUFBTSxPQUFPLGFBQWE7SUFvRHhCLFlBQTZDLElBQVMsRUFDNUMsU0FBc0MsRUFBVSxPQUEwQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQzVDLGNBQVMsR0FBVCxTQUFTLENBQTZCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFwRHBGLGFBQVEsR0FBRyxDQUFDO2dCQUNWLEtBQUssRUFBRSxZQUFZO2dCQUNuQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLE1BQU07YUFDZDtZQUNEO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsS0FBSyxFQUFFLFVBQVU7YUFDbEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsd0JBQXdCO2dCQUMvQixJQUFJLEVBQUUsc0JBQXNCO2dCQUM1QixLQUFLLEVBQUUsT0FBTzthQUNmO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLElBQUksRUFBRSxXQUFXO2dCQUNqQixLQUFLLEVBQUUsVUFBVTthQUNsQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxtQkFBbUI7Z0JBQzFCLElBQUksRUFBRSxXQUFXO2dCQUNqQixLQUFLLEVBQUUsbUJBQW1CO2FBQzNCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsS0FBSyxFQUFFLFFBQVE7YUFDaEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsT0FBTzthQUNmO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxVQUFVO2FBQ2xCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsS0FBSyxFQUFFLE1BQU07YUFDZCxDQUFDLENBQUE7UUFDRixpQkFBWSxHQUFHLEVBQUUsQ0FBQTtRQUdmLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0MsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsUUFBUSxDQUFDLElBQUk7UUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzswRUE5RFUsYUFBYSx1QkFvREosZUFBZTtrREFwRHhCLGFBQWE7UUNUMUIsMENBQ0U7UUFBQSxvRUFRRTtRQUVKLGlCQUFxQjs7UUFUakIsZUFBNkI7UUFBN0Isc0NBQTZCOztrRERPcEIsYUFBYTtjQUx6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3JDOztzQkFxRGMsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXR5cGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90eXBlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90eXBlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFR5cGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHR5cGVMaXN0ID0gW3tcclxuICAgIGxhYmVsOiAnVGV4dCBDb3VydCcsXHJcbiAgICBpY29uOiAnbGlzdF9hbHQnLFxyXG4gICAgdmFsdWU6ICd0ZXh0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdUZXh0IExvbmcnLFxyXG4gICAgaWNvbjogJ2Rlc2NyaXB0aW9uJyxcclxuICAgIHZhbHVlOiAndGV4dGFyZWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ09wdGlvbnMgw6AgY2hvaXggdW5pcXVlJyxcclxuICAgIGljb246ICdyYWRpb19idXR0b25fY2hlY2tlZCcsXHJcbiAgICB2YWx1ZTogJ3JhZGlvJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdCb3V0b24gT24vT2ZmJyxcclxuICAgIGljb246ICdjaGVja19ib3gnLFxyXG4gICAgdmFsdWU6ICdjaGVja2JveCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnQ2hlY2tib3ggbXVsdGlwbGUnLFxyXG4gICAgaWNvbjogJ2NoZWNrX2JveCcsXHJcbiAgICB2YWx1ZTogJ2NoZWNrYm94X211bHRpcGxlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdMaXN0ZSBkw6lyb3VsYW50ZScsXHJcbiAgICBpY29uOiAna2V5Ym9hcmRfYXJyb3dfZG93bicsXHJcbiAgICB2YWx1ZTogJ3NlbGVjdCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnRW1haWwnLFxyXG4gICAgaWNvbjogJ21haWwnLFxyXG4gICAgdmFsdWU6ICdlbWFpbCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnTW90IGRlIHBhc3NlJyxcclxuICAgIGljb246ICdsb2NrJyxcclxuICAgIHZhbHVlOiAncGFzc3dvcmQnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ1TDqWzDqXBob25lJyxcclxuICAgIGljb246ICdwaG9uZScsXHJcbiAgICB2YWx1ZTogJ3RlbCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnRGF0ZScsXHJcbiAgICBpY29uOiAnZGF0ZV9yYW5nZScsXHJcbiAgICB2YWx1ZTogJ2RhdGUnXHJcbiAgfV1cclxuICBzZWxlY3RlZFR5cGUgPSBcIlwiXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55LFxyXG4gICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUeXBlQ29tcG9uZW50PiwgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFR5cGUgPSB0aGlzLmRhdGEuc2VsZWN0ZWRUeXBlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdCh0eXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0eXBlKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxtYXQtZGlhbG9nLWNvbnRlbnQ+XHJcbiAgPGJ1dHRvblxyXG4gICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdHlwZUxpc3RcIlxyXG4gICAgKGNsaWNrKT1cIm9uU2VsZWN0KGl0ZW0udmFsdWUpXCJcclxuICAgIG1hdC1idXR0b25cclxuICAgIGNsYXNzPVwibm93Ym9hcmQtYnRuXCJcclxuICAgIFtjbGFzc109XCJzZWxlY3RlZFR5cGUgPT09IGl0ZW0udmFsdWUgPyAnYWN0aXZlJyA6ICcnXCJcclxuICAgIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweFwiXHJcbiAgPlxyXG4gICAge3sgaXRlbS5sYWJlbCB9fSA8bWF0LWljb24+e3sgaXRlbS5pY29uIH19PC9tYXQtaWNvbj5cclxuICA8L2J1dHRvbj5cclxuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+XHJcbiJdfQ==