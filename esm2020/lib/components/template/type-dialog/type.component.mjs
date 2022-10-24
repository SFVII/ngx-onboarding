import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { locales } from '../../../i18n';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/icon";
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
                label: 'MULTIPLE_CHECKBOX',
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
TypeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: TypeComponent, deps: [{ token: MAT_DIALOG_DATA }, { token: i1.MatDialogRef }, { token: i2.OnboardingService }], target: i0.ɵɵFactoryTarget.Component });
TypeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: TypeComponent, selector: "lib-type", ngImport: i0, template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n  <button *ngFor=\"let item of typeList\" (click)=\"onSelect(item.value)\" mat-button class=\"type-btn\"\r\n    [class]=\"selectedType === item.value ? 'active' : ''\" style=\"margin-top: 10px\">\r\n    {{ locale[item.label] }} <mat-icon style=\"margin-left: 10px;\">{{ item.icon }}</mat-icon>\r\n  </button>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content .type-btn{background:#E5E8EE;border-radius:4px;margin:5px;height:48px}mat-dialog-content .type-btn:hover,mat-dialog-content .type-btn.active{background-color:transparent;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab);color:#fff}\n"], dependencies: [{ kind: "component", type: i3.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: TypeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-type', template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n  <button *ngFor=\"let item of typeList\" (click)=\"onSelect(item.value)\" mat-button class=\"type-btn\"\r\n    [class]=\"selectedType === item.value ? 'active' : ''\" style=\"margin-top: 10px\">\r\n    {{ locale[item.label] }} <mat-icon style=\"margin-left: 10px;\">{{ item.icon }}</mat-icon>\r\n  </button>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content .type-btn{background:#E5E8EE;border-radius:4px;margin:5px;height:48px}mat-dialog-content .type-btn:hover,mat-dialog-content .type-btn.active{background-color:transparent;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab);color:#fff}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i1.MatDialogRef }, { type: i2.OnboardingService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy90ZW1wbGF0ZS90eXBlLWRpYWxvZy90eXBlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9jb21wb25lbnRzL3RlbXBsYXRlL3R5cGUtZGlhbG9nL3R5cGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBUXhDLE1BQU0sT0FBTyxhQUFhO0lBK0R4QixZQUE2QyxJQUFTLEVBQzVDLFNBQXNDLEVBQVUsT0FBMEI7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUM1QyxjQUFTLEdBQVQsU0FBUyxDQUE2QjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBL0RwRixhQUFRLEdBQUcsQ0FBQztnQkFDVixLQUFLLEVBQUUsWUFBWTtnQkFDbkIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxNQUFNO2FBQ2Q7WUFDRDtnQkFDRSxLQUFLLEVBQUUsV0FBVztnQkFDbEIsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLEtBQUssRUFBRSxVQUFVO2FBQ2xCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHNCQUFzQjtnQkFDN0IsSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsS0FBSyxFQUFFLE9BQU87YUFDZjtZQUNEO2dCQUNFLEtBQUssRUFBRSxlQUFlO2dCQUN0QixJQUFJLEVBQUUseUJBQXlCO2dCQUMvQixLQUFLLEVBQUUsUUFBUTthQUNoQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxVQUFVO2dCQUNqQixJQUFJLEVBQUUsV0FBVztnQkFDakIsS0FBSyxFQUFFLFVBQVU7YUFDbEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsbUJBQW1CO2dCQUMxQixJQUFJLEVBQUUsV0FBVztnQkFDakIsS0FBSyxFQUFFLG1CQUFtQjthQUMzQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxlQUFlO2dCQUN0QixJQUFJLEVBQUUscUJBQXFCO2dCQUMzQixLQUFLLEVBQUUsUUFBUTthQUNoQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxPQUFPO2dCQUNkLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxPQUFPO2FBQ2Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsVUFBVTtnQkFDakIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLFVBQVU7YUFDbEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsS0FBSzthQUNiO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEtBQUssRUFBRSxNQUFNO2FBQ2Q7WUFDRDtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsTUFBTTthQUNkLENBQUMsQ0FBQTtRQUNGLGlCQUFZLEdBQUcsRUFBRSxDQUFBO1FBQ2pCLFdBQU0sR0FBUSxFQUFFLENBQUE7UUFHZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFJO1FBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7MEdBNUVVLGFBQWEsa0JBK0RKLGVBQWU7OEZBL0R4QixhQUFhLGdEQ1YxQix1WUFLcUI7MkZES1IsYUFBYTtrQkFMekIsU0FBUzsrQkFDRSxVQUFVOzswQkFtRVAsTUFBTTsyQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IGxvY2FsZXMgfSBmcm9tICcuLi8uLi8uLi9pMThuJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItdHlwZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3R5cGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3R5cGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHlwZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdHlwZUxpc3QgPSBbe1xyXG4gICAgbGFiZWw6ICdTSE9SVF9URVhUJyxcclxuICAgIGljb246ICdsaXN0X2FsdCcsXHJcbiAgICB2YWx1ZTogJ3RleHQnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0xPTkdfVEVYVCcsXHJcbiAgICBpY29uOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgdmFsdWU6ICd0ZXh0YXJlYSdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnU0lOR0xFX0NIT0lDRV9PUFRJT04nLFxyXG4gICAgaWNvbjogJ3JhZGlvX2J1dHRvbl9jaGVja2VkJyxcclxuICAgIHZhbHVlOiAncmFkaW8nXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ09GRl9PTl9CVVRUT04nLFxyXG4gICAgaWNvbjogJ2NoZWNrX2JveF9vdXRsaW5lX2JsYW5rJyxcclxuICAgIHZhbHVlOiAndG9nZ2xlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdDSEVDS0JPWCcsXHJcbiAgICBpY29uOiAnY2hlY2tfYm94JyxcclxuICAgIHZhbHVlOiAnY2hlY2tib3gnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ01VTFRJUExFX0NIRUNLQk9YJyxcclxuICAgIGljb246ICdjaGVja19ib3gnLFxyXG4gICAgdmFsdWU6ICdjaGVja2JveF9tdWx0aXBsZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnRFJPUERPV05fTElTVCcsXHJcbiAgICBpY29uOiAna2V5Ym9hcmRfYXJyb3dfZG93bicsXHJcbiAgICB2YWx1ZTogJ3NlbGVjdCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnRU1BSUwnLFxyXG4gICAgaWNvbjogJ21haWwnLFxyXG4gICAgdmFsdWU6ICdlbWFpbCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnUEFTU1dPUkQnLFxyXG4gICAgaWNvbjogJ2xvY2snLFxyXG4gICAgdmFsdWU6ICdwYXNzd29yZCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnUEhPTkUnLFxyXG4gICAgaWNvbjogJ3Bob25lJyxcclxuICAgIHZhbHVlOiAndGVsJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdEQVRFJyxcclxuICAgIGljb246ICdkYXRlX3JhbmdlJyxcclxuICAgIHZhbHVlOiAnZGF0ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnTk9ORScsXHJcbiAgICBpY29uOiAnc3F1YXJlJyxcclxuICAgIHZhbHVlOiAnbm9uZSdcclxuICB9XVxyXG4gIHNlbGVjdGVkVHlwZSA9IFwiXCJcclxuICBsb2NhbGU6IGFueSA9IHt9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55LFxyXG4gICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUeXBlQ29tcG9uZW50PiwgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFR5cGUgPSB0aGlzLmRhdGEuc2VsZWN0ZWRUeXBlO1xyXG4gICAgdGhpcy5zZXJ2aWNlLl9sYW5nLnN1YnNjcmliZSgobG9jYWxlKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlc1tsb2NhbGVdLlBST0ZJTEU7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdCh0eXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0eXBlKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxtYXQtZGlhbG9nLWNvbnRlbnQgY2xhc3M9XCJuZ3gtb25ib2FyZGluZy1kaWFsb2dcIj5cclxuICA8YnV0dG9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHR5cGVMaXN0XCIgKGNsaWNrKT1cIm9uU2VsZWN0KGl0ZW0udmFsdWUpXCIgbWF0LWJ1dHRvbiBjbGFzcz1cInR5cGUtYnRuXCJcclxuICAgIFtjbGFzc109XCJzZWxlY3RlZFR5cGUgPT09IGl0ZW0udmFsdWUgPyAnYWN0aXZlJyA6ICcnXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4XCI+XHJcbiAgICB7eyBsb2NhbGVbaXRlbS5sYWJlbF0gfX0gPG1hdC1pY29uIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDEwcHg7XCI+e3sgaXRlbS5pY29uIH19PC9tYXQtaWNvbj5cclxuICA8L2J1dHRvbj5cclxuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+Il19