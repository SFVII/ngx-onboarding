import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
function TypeComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r467 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function TypeComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r467); var item_r465 = ctx.$implicit; var ctx_r466 = i0.ɵɵnextContext(); return ctx_r466.onSelect(item_r465.value); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r465 = ctx.$implicit;
    var ctx_r464 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r464.selectedType === item_r465.value ? "active" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r465.label, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r465.icon);
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
    TypeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TypeComponent, selectors: [["lib-type"]], decls: 2, vars: 1, consts: [["mat-button", "", "class", "nowboard-btn", "style", "margin-top: 10px", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "nowboard-btn", 2, "margin-top", "10px", 3, "click"]], template: function TypeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-dialog-content");
            i0.ɵɵtemplate(1, TypeComponent_button_1_Template, 4, 4, "button", 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.typeList);
        } }, directives: [i1.MatDialogContent, i3.NgForOf, i4.MatButton, i5.MatIcon], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content[_ngcontent-%COMP%]   .nowboard-btn[_ngcontent-%COMP%]{background:#e5e8ee;border-radius:4px;margin:5px;height:48px}mat-dialog-content[_ngcontent-%COMP%]   .nowboard-btn.active[_ngcontent-%COMP%], mat-dialog-content[_ngcontent-%COMP%]   .nowboard-btn[_ngcontent-%COMP%]:hover{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGVtcGxhdGUvdHlwZS1kaWFsb2cvdHlwZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy90ZW1wbGF0ZS90eXBlLWRpYWxvZy90eXBlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztJQ0F2RSxpQ0FRRTtJQU5BLG9PQUE4QjtJQU05QixZQUFpQjtJQUFBLGdDQUFVO0lBQUEsWUFBZTtJQUFBLGlCQUFXO0lBQ3ZELGlCQUFTOzs7O0lBSlAsd0VBQXFEO0lBR3JELGVBQWlCO0lBQWpCLGdEQUFpQjtJQUFVLGVBQWU7SUFBZixvQ0FBZTs7QURMOUM7SUF5REUsdUJBQTZDLElBQVMsRUFDNUMsU0FBc0MsRUFBVSxPQUEwQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQzVDLGNBQVMsR0FBVCxTQUFTLENBQTZCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFwRHBGLGFBQVEsR0FBRyxDQUFDO2dCQUNWLEtBQUssRUFBRSxZQUFZO2dCQUNuQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLE1BQU07YUFDZDtZQUNEO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsS0FBSyxFQUFFLFVBQVU7YUFDbEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsd0JBQXdCO2dCQUMvQixJQUFJLEVBQUUsc0JBQXNCO2dCQUM1QixLQUFLLEVBQUUsT0FBTzthQUNmO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLElBQUksRUFBRSxXQUFXO2dCQUNqQixLQUFLLEVBQUUsVUFBVTthQUNsQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxtQkFBbUI7Z0JBQzFCLElBQUksRUFBRSxXQUFXO2dCQUNqQixLQUFLLEVBQUUsbUJBQW1CO2FBQzNCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsS0FBSyxFQUFFLFFBQVE7YUFDaEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsT0FBTzthQUNmO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxVQUFVO2FBQ2xCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsS0FBSyxFQUFFLE1BQU07YUFDZCxDQUFDLENBQUE7UUFDRixpQkFBWSxHQUFHLEVBQUUsQ0FBQTtRQUdmLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0MsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLElBQUk7UUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzhFQTlEVSxhQUFhLHVCQW9ESixlQUFlO3NEQXBEeEIsYUFBYTtZQ1QxQiwwQ0FDRTtZQUFBLG9FQVFFO1lBRUosaUJBQXFCOztZQVRqQixlQUE2QjtZQUE3QixzQ0FBNkI7O3dCREZqQztDQXlFQyxBQXJFRCxJQXFFQztTQWhFWSxhQUFhO2tEQUFiLGFBQWE7Y0FMekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUNyQzs7c0JBcURjLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi10eXBlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdHlwZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdHlwZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUeXBlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB0eXBlTGlzdCA9IFt7XHJcbiAgICBsYWJlbDogJ1RleHQgQ291cnQnLFxyXG4gICAgaWNvbjogJ2xpc3RfYWx0JyxcclxuICAgIHZhbHVlOiAndGV4dCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnVGV4dCBMb25nJyxcclxuICAgIGljb246ICdkZXNjcmlwdGlvbicsXHJcbiAgICB2YWx1ZTogJ3RleHRhcmVhJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdPcHRpb25zIMOgIGNob2l4IHVuaXF1ZScsXHJcbiAgICBpY29uOiAncmFkaW9fYnV0dG9uX2NoZWNrZWQnLFxyXG4gICAgdmFsdWU6ICdyYWRpbydcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnQm91dG9uIE9uL09mZicsXHJcbiAgICBpY29uOiAnY2hlY2tfYm94JyxcclxuICAgIHZhbHVlOiAnY2hlY2tib3gnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0NoZWNrYm94IG11bHRpcGxlJyxcclxuICAgIGljb246ICdjaGVja19ib3gnLFxyXG4gICAgdmFsdWU6ICdjaGVja2JveF9tdWx0aXBsZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnTGlzdGUgZMOpcm91bGFudGUnLFxyXG4gICAgaWNvbjogJ2tleWJvYXJkX2Fycm93X2Rvd24nLFxyXG4gICAgdmFsdWU6ICdzZWxlY3QnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0VtYWlsJyxcclxuICAgIGljb246ICdtYWlsJyxcclxuICAgIHZhbHVlOiAnZW1haWwnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ01vdCBkZSBwYXNzZScsXHJcbiAgICBpY29uOiAnbG9jaycsXHJcbiAgICB2YWx1ZTogJ3Bhc3N3b3JkJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdUw6lsw6lwaG9uZScsXHJcbiAgICBpY29uOiAncGhvbmUnLFxyXG4gICAgdmFsdWU6ICd0ZWwnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0RhdGUnLFxyXG4gICAgaWNvbjogJ2RhdGVfcmFuZ2UnLFxyXG4gICAgdmFsdWU6ICdkYXRlJ1xyXG4gIH1dXHJcbiAgc2VsZWN0ZWRUeXBlID0gXCJcIlxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueSxcclxuICAgIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VHlwZUNvbXBvbmVudD4sIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRUeXBlID0gdGhpcy5kYXRhLnNlbGVjdGVkVHlwZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3QodHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodHlwZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8bWF0LWRpYWxvZy1jb250ZW50PlxyXG4gIDxidXR0b25cclxuICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIHR5cGVMaXN0XCJcclxuICAgIChjbGljayk9XCJvblNlbGVjdChpdGVtLnZhbHVlKVwiXHJcbiAgICBtYXQtYnV0dG9uXHJcbiAgICBjbGFzcz1cIm5vd2JvYXJkLWJ0blwiXHJcbiAgICBbY2xhc3NdPVwic2VsZWN0ZWRUeXBlID09PSBpdGVtLnZhbHVlID8gJ2FjdGl2ZScgOiAnJ1wiXHJcbiAgICBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHhcIlxyXG4gID5cclxuICAgIHt7IGl0ZW0ubGFiZWwgfX0gPG1hdC1pY29uPnt7IGl0ZW0uaWNvbiB9fTwvbWF0LWljb24+XHJcbiAgPC9idXR0b24+XHJcbjwvbWF0LWRpYWxvZy1jb250ZW50PlxyXG4iXX0=