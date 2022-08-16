import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
function TypeComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function TypeComponent_button_1_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onSelect(item_r1.value); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.selectedType === item_r1.value ? "active" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r1.label, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.icon);
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
    ngOnInit() {
    }
    onSelect(type) {
        this.dialogRef.close(type);
    }
}
TypeComponent.ɵfac = function TypeComponent_Factory(t) { return new (t || TypeComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(i2.OnboardingService)); };
TypeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TypeComponent, selectors: [["lib-type"]], decls: 2, vars: 1, consts: [["mat-button", "", "class", "type-btn", "style", "margin-top: 10px", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "type-btn", 2, "margin-top", "10px", 3, "click"]], template: function TypeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-dialog-content");
        i0.ɵɵtemplate(1, TypeComponent_button_1_Template, 4, 4, "button", 0);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.typeList);
    } }, directives: [i1.MatDialogContent, i3.NgForOf, i4.MatButton, i5.MatIcon], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]{background:#E5E8EE;border-radius:4px;margin:5px;height:48px}mat-dialog-content[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]:hover, mat-dialog-content[_ngcontent-%COMP%]   .type-btn.active[_ngcontent-%COMP%]{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TypeComponent, [{
        type: Component,
        args: [{ selector: 'lib-type', template: "<mat-dialog-content>\r\n  <button *ngFor=\"let item of typeList\" (click)=\"onSelect(item.value)\" mat-button class=\"type-btn\"\r\n    [class]=\"selectedType === item.value ? 'active' : ''\" style=\"margin-top: 10px\">\r\n    {{ item.label }} <mat-icon>{{ item.icon }}</mat-icon>\r\n  </button>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content .type-btn{background:#E5E8EE;border-radius:4px;margin:5px;height:48px}mat-dialog-content .type-btn:hover,mat-dialog-content .type-btn.active{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy90ZW1wbGF0ZS90eXBlLWRpYWxvZy90eXBlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9jb21wb25lbnRzL3RlbXBsYXRlL3R5cGUtZGlhbG9nL3R5cGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7O0lDQXZFLGlDQUNpRjtJQUQzQyx3TkFBUyw4QkFBb0IsSUFBQztJQUVsRSxZQUFpQjtJQUFBLGdDQUFVO0lBQUEsWUFBZTtJQUFBLGlCQUFXLEVBQUE7Ozs7SUFEckQsb0VBQXFEO0lBQ3JELGVBQWlCO0lBQWpCLDhDQUFpQjtJQUFVLGVBQWU7SUFBZixrQ0FBZTs7QURNOUMsTUFBTSxPQUFPLGFBQWE7SUE4RHhCLFlBQTZDLElBQVMsRUFDNUMsU0FBc0MsRUFBVSxPQUEwQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQzVDLGNBQVMsR0FBVCxTQUFTLENBQTZCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUE5RHBGLGFBQVEsR0FBRyxDQUFDO2dCQUNWLEtBQUssRUFBRSxZQUFZO2dCQUNuQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLE1BQU07YUFDZDtZQUNEO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsS0FBSyxFQUFFLFVBQVU7YUFDbEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsd0JBQXdCO2dCQUMvQixJQUFJLEVBQUUsc0JBQXNCO2dCQUM1QixLQUFLLEVBQUUsT0FBTzthQUNmO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLElBQUksRUFBRSx5QkFBeUI7Z0JBQy9CLEtBQUssRUFBRSxRQUFRO2FBQ2hCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLElBQUksRUFBRSxXQUFXO2dCQUNqQixLQUFLLEVBQUUsVUFBVTthQUNsQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxtQkFBbUI7Z0JBQzFCLElBQUksRUFBRSxXQUFXO2dCQUNqQixLQUFLLEVBQUUsbUJBQW1CO2FBQzNCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsS0FBSyxFQUFFLFFBQVE7YUFDaEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsT0FBTzthQUNmO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxVQUFVO2FBQ2xCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsS0FBSyxFQUFFLE1BQU07YUFDZDtZQUNEO2dCQUNFLEtBQUssRUFBRSxPQUFPO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxNQUFNO2FBQ2QsQ0FBQyxDQUFBO1FBQ0YsaUJBQVksR0FBRyxFQUFFLENBQUE7UUFHZixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdDLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFJO1FBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7MEVBeEVVLGFBQWEsdUJBOERKLGVBQWU7Z0VBOUR4QixhQUFhO1FDVDFCLDBDQUFvQjtRQUNsQixvRUFHUztRQUNYLGlCQUFxQjs7UUFKTSxlQUFXO1FBQVgsc0NBQVc7O3VGRFF6QixhQUFhO2NBTHpCLFNBQVM7MkJBQ0UsVUFBVTs7c0JBa0VQLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi10eXBlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdHlwZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdHlwZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUeXBlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB0eXBlTGlzdCA9IFt7XHJcbiAgICBsYWJlbDogJ1RleHQgQ291cnQnLFxyXG4gICAgaWNvbjogJ2xpc3RfYWx0JyxcclxuICAgIHZhbHVlOiAndGV4dCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnVGV4dCBMb25nJyxcclxuICAgIGljb246ICdkZXNjcmlwdGlvbicsXHJcbiAgICB2YWx1ZTogJ3RleHRhcmVhJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdPcHRpb25zIMOgIGNob2l4IHVuaXF1ZScsXHJcbiAgICBpY29uOiAncmFkaW9fYnV0dG9uX2NoZWNrZWQnLFxyXG4gICAgdmFsdWU6ICdyYWRpbydcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnQm91dG9uIE9uL09mZicsXHJcbiAgICBpY29uOiAnY2hlY2tfYm94X291dGxpbmVfYmxhbmsnLFxyXG4gICAgdmFsdWU6ICd0b2dnbGUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0NoZWNrYm94JyxcclxuICAgIGljb246ICdjaGVja19ib3gnLFxyXG4gICAgdmFsdWU6ICdjaGVja2JveCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnQ2hlY2tib3ggbXVsdGlwbGUnLFxyXG4gICAgaWNvbjogJ2NoZWNrX2JveCcsXHJcbiAgICB2YWx1ZTogJ2NoZWNrYm94X211bHRpcGxlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdMaXN0ZSBkw6lyb3VsYW50ZScsXHJcbiAgICBpY29uOiAna2V5Ym9hcmRfYXJyb3dfZG93bicsXHJcbiAgICB2YWx1ZTogJ3NlbGVjdCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnRW1haWwnLFxyXG4gICAgaWNvbjogJ21haWwnLFxyXG4gICAgdmFsdWU6ICdlbWFpbCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnTW90IGRlIHBhc3NlJyxcclxuICAgIGljb246ICdsb2NrJyxcclxuICAgIHZhbHVlOiAncGFzc3dvcmQnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ1TDqWzDqXBob25lJyxcclxuICAgIGljb246ICdwaG9uZScsXHJcbiAgICB2YWx1ZTogJ3RlbCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnRGF0ZScsXHJcbiAgICBpY29uOiAnZGF0ZV9yYW5nZScsXHJcbiAgICB2YWx1ZTogJ2RhdGUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0F1Y3VuJyxcclxuICAgIGljb246ICdzcXVhcmUnLFxyXG4gICAgdmFsdWU6ICdub25lJ1xyXG4gIH1dXHJcbiAgc2VsZWN0ZWRUeXBlID0gXCJcIlxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueSxcclxuICAgIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VHlwZUNvbXBvbmVudD4sIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRUeXBlID0gdGhpcy5kYXRhLnNlbGVjdGVkVHlwZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3QodHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodHlwZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8bWF0LWRpYWxvZy1jb250ZW50PlxyXG4gIDxidXR0b24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgdHlwZUxpc3RcIiAoY2xpY2spPVwib25TZWxlY3QoaXRlbS52YWx1ZSlcIiBtYXQtYnV0dG9uIGNsYXNzPVwidHlwZS1idG5cIlxyXG4gICAgW2NsYXNzXT1cInNlbGVjdGVkVHlwZSA9PT0gaXRlbS52YWx1ZSA/ICdhY3RpdmUnIDogJydcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHhcIj5cclxuICAgIHt7IGl0ZW0ubGFiZWwgfX0gPG1hdC1pY29uPnt7IGl0ZW0uaWNvbiB9fTwvbWF0LWljb24+XHJcbiAgPC9idXR0b24+XHJcbjwvbWF0LWRpYWxvZy1jb250ZW50PiJdfQ==