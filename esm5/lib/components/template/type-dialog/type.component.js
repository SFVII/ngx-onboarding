import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
function TypeComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r489 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function TypeComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r489); var item_r487 = ctx.$implicit; var ctx_r488 = i0.ɵɵnextContext(); return ctx_r488.onSelect(item_r487.value); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r487 = ctx.$implicit;
    var ctx_r486 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r486.selectedType === item_r487.value ? "active" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r487.label, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r487.icon);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGVtcGxhdGUvdHlwZS1kaWFsb2cvdHlwZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy90ZW1wbGF0ZS90eXBlLWRpYWxvZy90eXBlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztJQ0F2RSxpQ0FFRTtJQUZvQyxvT0FBOEI7SUFFbEUsWUFBaUI7SUFBQSxnQ0FBVTtJQUFBLFlBQWU7SUFBQSxpQkFBVztJQUN2RCxpQkFBUzs7OztJQUZQLHdFQUFxRDtJQUNyRCxlQUFpQjtJQUFqQixnREFBaUI7SUFBVSxlQUFlO0lBQWYsb0NBQWU7O0FEQzlDO0lBOERFLHVCQUE2QyxJQUFTLEVBQzVDLFNBQXNDLEVBQVUsT0FBMEI7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUM1QyxjQUFTLEdBQVQsU0FBUyxDQUE2QjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBekRwRixhQUFRLEdBQUcsQ0FBQztnQkFDVixLQUFLLEVBQUUsWUFBWTtnQkFDbkIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxNQUFNO2FBQ2Q7WUFDRDtnQkFDRSxLQUFLLEVBQUUsV0FBVztnQkFDbEIsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLEtBQUssRUFBRSxVQUFVO2FBQ2xCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHdCQUF3QjtnQkFDL0IsSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsS0FBSyxFQUFFLE9BQU87YUFDZjtZQUNEO2dCQUNFLEtBQUssRUFBRSxlQUFlO2dCQUN0QixJQUFJLEVBQUUseUJBQXlCO2dCQUMvQixLQUFLLEVBQUUsUUFBUTthQUNoQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxVQUFVO2dCQUNqQixJQUFJLEVBQUUsV0FBVztnQkFDakIsS0FBSyxFQUFFLFVBQVU7YUFDbEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsbUJBQW1CO2dCQUMxQixJQUFJLEVBQUUsV0FBVztnQkFDakIsS0FBSyxFQUFFLG1CQUFtQjthQUMzQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLEtBQUssRUFBRSxRQUFRO2FBQ2hCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLE9BQU87YUFDZjtZQUNEO2dCQUNFLEtBQUssRUFBRSxjQUFjO2dCQUNyQixJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsVUFBVTthQUNsQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsS0FBSzthQUNiO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEtBQUssRUFBRSxNQUFNO2FBQ2QsQ0FBQyxDQUFBO1FBQ0YsaUJBQVksR0FBRyxFQUFFLENBQUE7UUFHZixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs4RUFuRVUsYUFBYSx1QkF5REosZUFBZTtzREF6RHhCLGFBQWE7WUNUMUIsMENBQ0U7WUFBQSxvRUFFRTtZQUVKLGlCQUFxQjs7WUFKWCxlQUE2QjtZQUE3QixzQ0FBNkI7O3dCRER2QztDQThFQyxBQTFFRCxJQTBFQztTQXJFWSxhQUFhO2tEQUFiLGFBQWE7Y0FMekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUNyQzs7c0JBMERjLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi10eXBlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdHlwZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdHlwZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUeXBlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB0eXBlTGlzdCA9IFt7XHJcbiAgICBsYWJlbDogJ1RleHQgQ291cnQnLFxyXG4gICAgaWNvbjogJ2xpc3RfYWx0JyxcclxuICAgIHZhbHVlOiAndGV4dCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnVGV4dCBMb25nJyxcclxuICAgIGljb246ICdkZXNjcmlwdGlvbicsXHJcbiAgICB2YWx1ZTogJ3RleHRhcmVhJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdPcHRpb25zIMOgIGNob2l4IHVuaXF1ZScsXHJcbiAgICBpY29uOiAncmFkaW9fYnV0dG9uX2NoZWNrZWQnLFxyXG4gICAgdmFsdWU6ICdyYWRpbydcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnQm91dG9uIE9uL09mZicsXHJcbiAgICBpY29uOiAnY2hlY2tfYm94X291dGxpbmVfYmxhbmsnLFxyXG4gICAgdmFsdWU6ICd0b2dnbGUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0NoZWNrYm94JyxcclxuICAgIGljb246ICdjaGVja19ib3gnLFxyXG4gICAgdmFsdWU6ICdjaGVja2JveCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnQ2hlY2tib3ggbXVsdGlwbGUnLFxyXG4gICAgaWNvbjogJ2NoZWNrX2JveCcsXHJcbiAgICB2YWx1ZTogJ2NoZWNrYm94X211bHRpcGxlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdMaXN0ZSBkw6lyb3VsYW50ZScsXHJcbiAgICBpY29uOiAna2V5Ym9hcmRfYXJyb3dfZG93bicsXHJcbiAgICB2YWx1ZTogJ3NlbGVjdCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnRW1haWwnLFxyXG4gICAgaWNvbjogJ21haWwnLFxyXG4gICAgdmFsdWU6ICdlbWFpbCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnTW90IGRlIHBhc3NlJyxcclxuICAgIGljb246ICdsb2NrJyxcclxuICAgIHZhbHVlOiAncGFzc3dvcmQnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ1TDqWzDqXBob25lJyxcclxuICAgIGljb246ICdwaG9uZScsXHJcbiAgICB2YWx1ZTogJ3RlbCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnRGF0ZScsXHJcbiAgICBpY29uOiAnZGF0ZV9yYW5nZScsXHJcbiAgICB2YWx1ZTogJ2RhdGUnXHJcbiAgfV1cclxuICBzZWxlY3RlZFR5cGUgPSBcIlwiXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55LFxyXG4gICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUeXBlQ29tcG9uZW50PiwgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFR5cGUgPSB0aGlzLmRhdGEuc2VsZWN0ZWRUeXBlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdCh0eXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0eXBlKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxtYXQtZGlhbG9nLWNvbnRlbnQ+XHJcbiAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0eXBlTGlzdFwiIChjbGljayk9XCJvblNlbGVjdChpdGVtLnZhbHVlKVwiIG1hdC1idXR0b24gY2xhc3M9XCJ0eXBlLWJ0blwiXHJcbiAgICBbY2xhc3NdPVwic2VsZWN0ZWRUeXBlID09PSBpdGVtLnZhbHVlID8gJ2FjdGl2ZScgOiAnJ1wiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweFwiPlxyXG4gICAge3sgaXRlbS5sYWJlbCB9fSA8bWF0LWljb24+e3sgaXRlbS5pY29uIH19PC9tYXQtaWNvbj5cclxuICA8L2J1dHRvbj5cclxuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+Il19