import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
function TypeComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r517 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function TypeComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r517); var item_r515 = ctx.$implicit; var ctx_r516 = i0.ɵɵnextContext(); return ctx_r516.onSelect(item_r515.value); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r515 = ctx.$implicit;
    var ctx_r514 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r514.selectedType === item_r515.value ? "active" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r515.label, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r515.icon);
} }
var TypeComponent = /** @class */ (function () {
    function TypeComponent(data, dialogRef, service) {
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
                icon: 'check_box_outline_blank',
                value: 'toggle'
            },
            {
                label: 'Checkbox',
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
            },
            {
                label: 'Aucun',
                icon: 'square',
                value: 'none'
            }];
        this.selectedType = "";
        this.selectedType = this.data.selectedType;
    }
    TypeComponent.prototype.ngOnInit = function () {
    };
    TypeComponent.prototype.onSelect = function (type) {
        this.dialogRef.close(type);
    };
    TypeComponent.ɵfac = function TypeComponent_Factory(t) { return new (t || TypeComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(i2.OnboardingService)); };
    TypeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TypeComponent, selectors: [["lib-type"]], decls: 2, vars: 1, consts: [["mat-button", "", "class", "type-btn", "style", "margin-top: 10px", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "type-btn", 2, "margin-top", "10px", 3, "click"]], template: function TypeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-dialog-content");
            i0.ɵɵtemplate(1, TypeComponent_button_1_Template, 4, 4, "button", 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.typeList);
        } }, directives: [i1.MatDialogContent, i3.NgForOf, i4.MatButton, i5.MatIcon], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]{background:#e5e8ee;border-radius:4px;margin:5px;height:48px}mat-dialog-content[_ngcontent-%COMP%]   .type-btn.active[_ngcontent-%COMP%], mat-dialog-content[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]:hover{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}"] });
    return TypeComponent;
}());
export { TypeComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGVtcGxhdGUvdHlwZS1kaWFsb2cvdHlwZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy90ZW1wbGF0ZS90eXBlLWRpYWxvZy90eXBlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztJQ0F2RSxpQ0FFRTtJQUZvQyxvT0FBOEI7SUFFbEUsWUFBaUI7SUFBQSxnQ0FBVTtJQUFBLFlBQWU7SUFBQSxpQkFBVztJQUN2RCxpQkFBUzs7OztJQUZQLHdFQUFxRDtJQUNyRCxlQUFpQjtJQUFqQixnREFBaUI7SUFBVSxlQUFlO0lBQWYsb0NBQWU7O0FEQzlDO0lBbUVFLHVCQUE2QyxJQUFTLEVBQzVDLFNBQXNDLEVBQVUsT0FBMEI7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUM1QyxjQUFTLEdBQVQsU0FBUyxDQUE2QjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBOURwRixhQUFRLEdBQUcsQ0FBQztnQkFDVixLQUFLLEVBQUUsWUFBWTtnQkFDbkIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxNQUFNO2FBQ2Q7WUFDRDtnQkFDRSxLQUFLLEVBQUUsV0FBVztnQkFDbEIsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLEtBQUssRUFBRSxVQUFVO2FBQ2xCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHdCQUF3QjtnQkFDL0IsSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsS0FBSyxFQUFFLE9BQU87YUFDZjtZQUNEO2dCQUNFLEtBQUssRUFBRSxlQUFlO2dCQUN0QixJQUFJLEVBQUUseUJBQXlCO2dCQUMvQixLQUFLLEVBQUUsUUFBUTthQUNoQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxVQUFVO2dCQUNqQixJQUFJLEVBQUUsV0FBVztnQkFDakIsS0FBSyxFQUFFLFVBQVU7YUFDbEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsbUJBQW1CO2dCQUMxQixJQUFJLEVBQUUsV0FBVztnQkFDakIsS0FBSyxFQUFFLG1CQUFtQjthQUMzQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLEtBQUssRUFBRSxRQUFRO2FBQ2hCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLE9BQU87YUFDZjtZQUNEO2dCQUNFLEtBQUssRUFBRSxjQUFjO2dCQUNyQixJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsVUFBVTthQUNsQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsS0FBSzthQUNiO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEtBQUssRUFBRSxNQUFNO2FBQ2Q7WUFDRDtnQkFDRSxLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsTUFBTTthQUNkLENBQUMsQ0FBQTtRQUNGLGlCQUFZLEdBQUcsRUFBRSxDQUFBO1FBR2YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsSUFBSTtRQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7OEVBeEVVLGFBQWEsdUJBOERKLGVBQWU7c0RBOUR4QixhQUFhO1lDVDFCLDBDQUNFO1lBQUEsb0VBRUU7WUFFSixpQkFBcUI7O1lBSlgsZUFBNkI7WUFBN0Isc0NBQTZCOzt3QkREdkM7Q0FtRkMsQUEvRUQsSUErRUM7U0ExRVksYUFBYTtrREFBYixhQUFhO2NBTHpCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDckM7O3NCQStEYyxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItdHlwZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3R5cGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3R5cGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHlwZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdHlwZUxpc3QgPSBbe1xyXG4gICAgbGFiZWw6ICdUZXh0IENvdXJ0JyxcclxuICAgIGljb246ICdsaXN0X2FsdCcsXHJcbiAgICB2YWx1ZTogJ3RleHQnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ1RleHQgTG9uZycsXHJcbiAgICBpY29uOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgdmFsdWU6ICd0ZXh0YXJlYSdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnT3B0aW9ucyDDoCBjaG9peCB1bmlxdWUnLFxyXG4gICAgaWNvbjogJ3JhZGlvX2J1dHRvbl9jaGVja2VkJyxcclxuICAgIHZhbHVlOiAncmFkaW8nXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0JvdXRvbiBPbi9PZmYnLFxyXG4gICAgaWNvbjogJ2NoZWNrX2JveF9vdXRsaW5lX2JsYW5rJyxcclxuICAgIHZhbHVlOiAndG9nZ2xlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdDaGVja2JveCcsXHJcbiAgICBpY29uOiAnY2hlY2tfYm94JyxcclxuICAgIHZhbHVlOiAnY2hlY2tib3gnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0NoZWNrYm94IG11bHRpcGxlJyxcclxuICAgIGljb246ICdjaGVja19ib3gnLFxyXG4gICAgdmFsdWU6ICdjaGVja2JveF9tdWx0aXBsZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnTGlzdGUgZMOpcm91bGFudGUnLFxyXG4gICAgaWNvbjogJ2tleWJvYXJkX2Fycm93X2Rvd24nLFxyXG4gICAgdmFsdWU6ICdzZWxlY3QnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0VtYWlsJyxcclxuICAgIGljb246ICdtYWlsJyxcclxuICAgIHZhbHVlOiAnZW1haWwnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ01vdCBkZSBwYXNzZScsXHJcbiAgICBpY29uOiAnbG9jaycsXHJcbiAgICB2YWx1ZTogJ3Bhc3N3b3JkJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdUw6lsw6lwaG9uZScsXHJcbiAgICBpY29uOiAncGhvbmUnLFxyXG4gICAgdmFsdWU6ICd0ZWwnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0RhdGUnLFxyXG4gICAgaWNvbjogJ2RhdGVfcmFuZ2UnLFxyXG4gICAgdmFsdWU6ICdkYXRlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdBdWN1bicsXHJcbiAgICBpY29uOiAnc3F1YXJlJyxcclxuICAgIHZhbHVlOiAnbm9uZSdcclxuICB9XVxyXG4gIHNlbGVjdGVkVHlwZSA9IFwiXCJcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnksXHJcbiAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFR5cGVDb21wb25lbnQ+LCBwcml2YXRlIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkVHlwZSA9IHRoaXMuZGF0YS5zZWxlY3RlZFR5cGU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0KHR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHR5cGUpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPG1hdC1kaWFsb2ctY29udGVudD5cclxuICA8YnV0dG9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHR5cGVMaXN0XCIgKGNsaWNrKT1cIm9uU2VsZWN0KGl0ZW0udmFsdWUpXCIgbWF0LWJ1dHRvbiBjbGFzcz1cInR5cGUtYnRuXCJcclxuICAgIFtjbGFzc109XCJzZWxlY3RlZFR5cGUgPT09IGl0ZW0udmFsdWUgPyAnYWN0aXZlJyA6ICcnXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4XCI+XHJcbiAgICB7eyBpdGVtLmxhYmVsIH19IDxtYXQtaWNvbj57eyBpdGVtLmljb24gfX08L21hdC1pY29uPlxyXG4gIDwvYnV0dG9uPlxyXG48L21hdC1kaWFsb2ctY29udGVudD4iXX0=