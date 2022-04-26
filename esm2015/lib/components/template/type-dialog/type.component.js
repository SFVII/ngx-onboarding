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
TypeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TypeComponent, selectors: [["lib-type"]], decls: 2, vars: 1, consts: [["mat-button", "", "class", "type-btn", "style", "margin-top: 10px", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "type-btn", 2, "margin-top", "10px", 3, "click"]], template: function TypeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-dialog-content");
        i0.ɵɵtemplate(1, TypeComponent_button_1_Template, 4, 4, "button", 0);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.typeList);
    } }, directives: [i1.MatDialogContent, i3.NgForOf, i4.MatButton, i5.MatIcon], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]{background:#e5e8ee;border-radius:4px;margin:5px;height:48px}mat-dialog-content[_ngcontent-%COMP%]   .type-btn.active[_ngcontent-%COMP%], mat-dialog-content[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]:hover{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGVtcGxhdGUvdHlwZS1kaWFsb2cvdHlwZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy90ZW1wbGF0ZS90eXBlLWRpYWxvZy90eXBlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztJQ0F2RSxpQ0FFRTtJQUZvQyw4TkFBOEI7SUFFbEUsWUFBaUI7SUFBQSxnQ0FBVTtJQUFBLFlBQWU7SUFBQSxpQkFBVztJQUN2RCxpQkFBUzs7OztJQUZQLG9FQUFxRDtJQUNyRCxlQUFpQjtJQUFqQiw4Q0FBaUI7SUFBVSxlQUFlO0lBQWYsa0NBQWU7O0FETTlDLE1BQU0sT0FBTyxhQUFhO0lBb0R4QixZQUE2QyxJQUFTLEVBQzVDLFNBQXNDLEVBQVUsT0FBMEI7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUM1QyxjQUFTLEdBQVQsU0FBUyxDQUE2QjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBcERwRixhQUFRLEdBQUcsQ0FBQztnQkFDVixLQUFLLEVBQUUsWUFBWTtnQkFDbkIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxNQUFNO2FBQ2Q7WUFDRDtnQkFDRSxLQUFLLEVBQUUsV0FBVztnQkFDbEIsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLEtBQUssRUFBRSxVQUFVO2FBQ2xCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHdCQUF3QjtnQkFDL0IsSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsS0FBSyxFQUFFLE9BQU87YUFDZjtZQUNEO2dCQUNFLEtBQUssRUFBRSxlQUFlO2dCQUN0QixJQUFJLEVBQUUsV0FBVztnQkFDakIsS0FBSyxFQUFFLFVBQVU7YUFDbEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsbUJBQW1CO2dCQUMxQixJQUFJLEVBQUUsV0FBVztnQkFDakIsS0FBSyxFQUFFLG1CQUFtQjthQUMzQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLEtBQUssRUFBRSxRQUFRO2FBQ2hCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLE9BQU87YUFDZjtZQUNEO2dCQUNFLEtBQUssRUFBRSxjQUFjO2dCQUNyQixJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsVUFBVTthQUNsQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsS0FBSzthQUNiO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEtBQUssRUFBRSxNQUFNO2FBQ2QsQ0FBQyxDQUFBO1FBQ0YsaUJBQVksR0FBRyxFQUFFLENBQUE7UUFHZixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdDLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFJO1FBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7MEVBOURVLGFBQWEsdUJBb0RKLGVBQWU7a0RBcER4QixhQUFhO1FDVDFCLDBDQUNFO1FBQUEsb0VBRUU7UUFFSixpQkFBcUI7O1FBSlgsZUFBNkI7UUFBN0Isc0NBQTZCOztrRERRMUIsYUFBYTtjQUx6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3JDOztzQkFxRGMsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXR5cGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90eXBlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90eXBlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFR5cGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHR5cGVMaXN0ID0gW3tcclxuICAgIGxhYmVsOiAnVGV4dCBDb3VydCcsXHJcbiAgICBpY29uOiAnbGlzdF9hbHQnLFxyXG4gICAgdmFsdWU6ICd0ZXh0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdUZXh0IExvbmcnLFxyXG4gICAgaWNvbjogJ2Rlc2NyaXB0aW9uJyxcclxuICAgIHZhbHVlOiAndGV4dGFyZWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ09wdGlvbnMgw6AgY2hvaXggdW5pcXVlJyxcclxuICAgIGljb246ICdyYWRpb19idXR0b25fY2hlY2tlZCcsXHJcbiAgICB2YWx1ZTogJ3JhZGlvJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdCb3V0b24gT24vT2ZmJyxcclxuICAgIGljb246ICdjaGVja19ib3gnLFxyXG4gICAgdmFsdWU6ICdjaGVja2JveCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnQ2hlY2tib3ggbXVsdGlwbGUnLFxyXG4gICAgaWNvbjogJ2NoZWNrX2JveCcsXHJcbiAgICB2YWx1ZTogJ2NoZWNrYm94X211bHRpcGxlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdMaXN0ZSBkw6lyb3VsYW50ZScsXHJcbiAgICBpY29uOiAna2V5Ym9hcmRfYXJyb3dfZG93bicsXHJcbiAgICB2YWx1ZTogJ3NlbGVjdCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnRW1haWwnLFxyXG4gICAgaWNvbjogJ21haWwnLFxyXG4gICAgdmFsdWU6ICdlbWFpbCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnTW90IGRlIHBhc3NlJyxcclxuICAgIGljb246ICdsb2NrJyxcclxuICAgIHZhbHVlOiAncGFzc3dvcmQnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ1TDqWzDqXBob25lJyxcclxuICAgIGljb246ICdwaG9uZScsXHJcbiAgICB2YWx1ZTogJ3RlbCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnRGF0ZScsXHJcbiAgICBpY29uOiAnZGF0ZV9yYW5nZScsXHJcbiAgICB2YWx1ZTogJ2RhdGUnXHJcbiAgfV1cclxuICBzZWxlY3RlZFR5cGUgPSBcIlwiXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55LFxyXG4gICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUeXBlQ29tcG9uZW50PiwgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFR5cGUgPSB0aGlzLmRhdGEuc2VsZWN0ZWRUeXBlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdCh0eXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0eXBlKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxtYXQtZGlhbG9nLWNvbnRlbnQ+XHJcbiAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0eXBlTGlzdFwiIChjbGljayk9XCJvblNlbGVjdChpdGVtLnZhbHVlKVwiIG1hdC1idXR0b24gY2xhc3M9XCJ0eXBlLWJ0blwiXHJcbiAgICBbY2xhc3NdPVwic2VsZWN0ZWRUeXBlID09PSBpdGVtLnZhbHVlID8gJ2FjdGl2ZScgOiAnJ1wiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweFwiPlxyXG4gICAge3sgaXRlbS5sYWJlbCB9fSA8bWF0LWljb24+e3sgaXRlbS5pY29uIH19PC9tYXQtaWNvbj5cclxuICA8L2J1dHRvbj5cclxuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+Il19