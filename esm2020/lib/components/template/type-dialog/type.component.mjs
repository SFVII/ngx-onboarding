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
        args: [{ selector: 'lib-type', template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n  <button *ngFor=\"let item of typeList\" (click)=\"onSelect(item.value)\" mat-button class=\"type-btn\"\r\n    [class]=\"selectedType === item.value ? 'active' : ''\" style=\"margin-top: 10px\">\r\n    {{ item.label }} <mat-icon style=\"margin-left: 10px;\">{{ item.icon }}</mat-icon>\r\n  </button>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content .type-btn{background:#E5E8EE;border-radius:4px;margin:5px;height:48px}mat-dialog-content .type-btn:hover,mat-dialog-content .type-btn.active{background-color:transparent;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab);color:#fff}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy90ZW1wbGF0ZS90eXBlLWRpYWxvZy90eXBlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9jb21wb25lbnRzL3RlbXBsYXRlL3R5cGUtZGlhbG9nL3R5cGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7O0lDQXZFLGlDQUNpRjtJQUQzQyx3TkFBUyw4QkFBb0IsSUFBQztJQUVsRSxZQUFpQjtJQUFBLG1DQUFxQztJQUFBLFlBQWU7SUFBQSxpQkFBVyxFQUFBOzs7O0lBRGhGLG9FQUFxRDtJQUNyRCxlQUFpQjtJQUFqQiw4Q0FBaUI7SUFBcUMsZUFBZTtJQUFmLGtDQUFlOztBRE16RSxNQUFNLE9BQU8sYUFBYTtJQThEeEIsWUFBNkMsSUFBUyxFQUM1QyxTQUFzQyxFQUFVLE9BQTBCO1FBRHZDLFNBQUksR0FBSixJQUFJLENBQUs7UUFDNUMsY0FBUyxHQUFULFNBQVMsQ0FBNkI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQTlEcEYsYUFBUSxHQUFHLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsTUFBTTthQUNkO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLElBQUksRUFBRSxhQUFhO2dCQUNuQixLQUFLLEVBQUUsVUFBVTthQUNsQjtZQUNEO2dCQUNFLEtBQUssRUFBRSx3QkFBd0I7Z0JBQy9CLElBQUksRUFBRSxzQkFBc0I7Z0JBQzVCLEtBQUssRUFBRSxPQUFPO2FBQ2Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsZUFBZTtnQkFDdEIsSUFBSSxFQUFFLHlCQUF5QjtnQkFDL0IsS0FBSyxFQUFFLFFBQVE7YUFDaEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsVUFBVTtnQkFDakIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRSxVQUFVO2FBQ2xCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLG1CQUFtQjtnQkFDMUIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRSxtQkFBbUI7YUFDM0I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsa0JBQWtCO2dCQUN6QixJQUFJLEVBQUUscUJBQXFCO2dCQUMzQixLQUFLLEVBQUUsUUFBUTthQUNoQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxPQUFPO2dCQUNkLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxPQUFPO2FBQ2Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsY0FBYztnQkFDckIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLFVBQVU7YUFDbEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsV0FBVztnQkFDbEIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLEtBQUs7YUFDYjtZQUNEO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLElBQUksRUFBRSxZQUFZO2dCQUNsQixLQUFLLEVBQUUsTUFBTTthQUNkO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLE1BQU07YUFDZCxDQUFDLENBQUE7UUFDRixpQkFBWSxHQUFHLEVBQUUsQ0FBQTtRQUdmLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0MsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsUUFBUSxDQUFDLElBQUk7UUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzswRUF4RVUsYUFBYSx1QkE4REosZUFBZTtnRUE5RHhCLGFBQWE7UUNUMUIsNkNBQWtEO1FBQ2hELG9FQUdTO1FBQ1gsaUJBQXFCOztRQUpNLGVBQVc7UUFBWCxzQ0FBVzs7dUZEUXpCLGFBQWE7Y0FMekIsU0FBUzsyQkFDRSxVQUFVOztzQkFrRVAsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXR5cGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90eXBlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90eXBlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFR5cGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHR5cGVMaXN0ID0gW3tcclxuICAgIGxhYmVsOiAnVGV4dCBDb3VydCcsXHJcbiAgICBpY29uOiAnbGlzdF9hbHQnLFxyXG4gICAgdmFsdWU6ICd0ZXh0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdUZXh0IExvbmcnLFxyXG4gICAgaWNvbjogJ2Rlc2NyaXB0aW9uJyxcclxuICAgIHZhbHVlOiAndGV4dGFyZWEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ09wdGlvbnMgw6AgY2hvaXggdW5pcXVlJyxcclxuICAgIGljb246ICdyYWRpb19idXR0b25fY2hlY2tlZCcsXHJcbiAgICB2YWx1ZTogJ3JhZGlvJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdCb3V0b24gT24vT2ZmJyxcclxuICAgIGljb246ICdjaGVja19ib3hfb3V0bGluZV9ibGFuaycsXHJcbiAgICB2YWx1ZTogJ3RvZ2dsZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnQ2hlY2tib3gnLFxyXG4gICAgaWNvbjogJ2NoZWNrX2JveCcsXHJcbiAgICB2YWx1ZTogJ2NoZWNrYm94J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdDaGVja2JveCBtdWx0aXBsZScsXHJcbiAgICBpY29uOiAnY2hlY2tfYm94JyxcclxuICAgIHZhbHVlOiAnY2hlY2tib3hfbXVsdGlwbGUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0xpc3RlIGTDqXJvdWxhbnRlJyxcclxuICAgIGljb246ICdrZXlib2FyZF9hcnJvd19kb3duJyxcclxuICAgIHZhbHVlOiAnc2VsZWN0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdFbWFpbCcsXHJcbiAgICBpY29uOiAnbWFpbCcsXHJcbiAgICB2YWx1ZTogJ2VtYWlsJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdNb3QgZGUgcGFzc2UnLFxyXG4gICAgaWNvbjogJ2xvY2snLFxyXG4gICAgdmFsdWU6ICdwYXNzd29yZCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnVMOpbMOpcGhvbmUnLFxyXG4gICAgaWNvbjogJ3Bob25lJyxcclxuICAgIHZhbHVlOiAndGVsJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdEYXRlJyxcclxuICAgIGljb246ICdkYXRlX3JhbmdlJyxcclxuICAgIHZhbHVlOiAnZGF0ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnQXVjdW4nLFxyXG4gICAgaWNvbjogJ3NxdWFyZScsXHJcbiAgICB2YWx1ZTogJ25vbmUnXHJcbiAgfV1cclxuICBzZWxlY3RlZFR5cGUgPSBcIlwiXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55LFxyXG4gICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUeXBlQ29tcG9uZW50PiwgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFR5cGUgPSB0aGlzLmRhdGEuc2VsZWN0ZWRUeXBlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdCh0eXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0eXBlKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxtYXQtZGlhbG9nLWNvbnRlbnQgY2xhc3M9XCJuZ3gtb25ib2FyZGluZy1kaWFsb2dcIj5cclxuICA8YnV0dG9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHR5cGVMaXN0XCIgKGNsaWNrKT1cIm9uU2VsZWN0KGl0ZW0udmFsdWUpXCIgbWF0LWJ1dHRvbiBjbGFzcz1cInR5cGUtYnRuXCJcclxuICAgIFtjbGFzc109XCJzZWxlY3RlZFR5cGUgPT09IGl0ZW0udmFsdWUgPyAnYWN0aXZlJyA6ICcnXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4XCI+XHJcbiAgICB7eyBpdGVtLmxhYmVsIH19IDxtYXQtaWNvbiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxMHB4O1wiPnt7IGl0ZW0uaWNvbiB9fTwvbWF0LWljb24+XHJcbiAgPC9idXR0b24+XHJcbjwvbWF0LWRpYWxvZy1jb250ZW50PiJdfQ==