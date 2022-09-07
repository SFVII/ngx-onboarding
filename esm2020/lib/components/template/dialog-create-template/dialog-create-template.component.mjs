import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/forms";
import * as i6 from "ngx-intl-tel-input";
import * as i7 from "@angular/material/button";
export class DialogCreateTemplateComponent {
    constructor(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.tags = [];
        this.profil = {
            Name: '',
            Tags: ''
        };
    }
    ngOnInit() {
        this.tags = this.data.tags;
        this.profil = this.data?.profil || this.profil;
    }
    onSelect(type) {
        this.dialogRef.close(type);
    }
    createProfil() {
        if (!this.disabled()) {
            this.dialogRef.close(this.profil);
        }
    }
    close() {
        this.dialogRef.close(false);
    }
    disabled() {
        return this.profil.Name === "";
    }
}
DialogCreateTemplateComponent.ɵfac = function DialogCreateTemplateComponent_Factory(t) { return new (t || DialogCreateTemplateComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(i2.OnboardingService)); };
DialogCreateTemplateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogCreateTemplateComponent, selectors: [["lib-dialog-create-template"]], decls: 12, vars: 2, consts: [[1, "ngx-onboarding-dialog"], [1, "title"], ["appearance", "outline", 1, "full-width"], ["type", "text", "matInput", "", "placeholder", "Ex. Manager", 3, "ngModel", "ngModelChange"], [1, "action-content"], ["mat-raised-button", "", 1, "create-profil", 3, "disabled", "click"], ["mat-raised-button", "", 1, "abandon-profil", 3, "click"]], template: function DialogCreateTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-dialog-content", 0)(1, "h3", 1);
        i0.ɵɵtext(2, "Cr\u00E9ation d\u2019un nouveau profil");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-form-field", 2)(4, "mat-label");
        i0.ɵɵtext(5, "Nom de votre nouveau profil");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "input", 3);
        i0.ɵɵlistener("ngModelChange", function DialogCreateTemplateComponent_Template_input_ngModelChange_6_listener($event) { return ctx.profil.Name = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "div", 4)(8, "button", 5);
        i0.ɵɵlistener("click", function DialogCreateTemplateComponent_Template_button_click_8_listener() { return ctx.createProfil(); });
        i0.ɵɵtext(9, " Cr\u00E9er profil ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 6);
        i0.ɵɵlistener("click", function DialogCreateTemplateComponent_Template_button_click_10_listener() { return ctx.close(); });
        i0.ɵɵtext(11, " Abandonner ");
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.profil.Name);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.disabled());
    } }, directives: [i1.MatDialogContent, i3.MatFormField, i3.MatLabel, i4.MatInput, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i6.NativeElementInjectorDirective, i7.MatButton], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:555px;min-width:555px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content[_ngcontent-%COMP%]   .abandon-profil[_ngcontent-%COMP%]{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px}mat-dialog-content[_ngcontent-%COMP%]   .create-profil[_ngcontent-%COMP%]{background-color:#171f26;border:1px solid #171f26;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, mat-dialog-content[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{opacity:.5}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogCreateTemplateComponent, [{
        type: Component,
        args: [{ selector: 'lib-dialog-create-template', template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n  <h3 class=\"title\">Cr\u00E9ation d\u2019un nouveau profil</h3>\r\n  <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n    <mat-label>Nom de votre nouveau profil</mat-label>\r\n    <input type=\"text\" matInput [(ngModel)]=\"profil.Name\" placeholder=\"Ex. Manager\" />\r\n  </mat-form-field>\r\n  <!-- <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n    <mat-label>Description</mat-label>\r\n    <textarea type=\"text\" matInput [(ngModel)]=\"Description\" rows=\"4\" placeholder=\"\"></textarea>\r\n  </mat-form-field> -->\r\n  <!-- <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n    <mat-label>Tags</mat-label>\r\n    <mat-select [(ngModel)]=\"profil.Tags\" required>\r\n      <mat-option *ngFor=\"let tag of tags\" [value]=\"tag\">{{ tag }}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field> -->\r\n  <div class=\"action-content\">\r\n    <button [disabled]=\"disabled()\" class=\"create-profil\" (click)=\"createProfil()\" mat-raised-button>\r\n      Cr\u00E9er profil\r\n    </button>\r\n    <button class=\"abandon-profil\" (click)=\"close()\" mat-raised-button>\r\n      Abandonner\r\n    </button>\r\n  </div>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:555px;min-width:555px}mat-dialog-content mat-form-field{margin-bottom:10px}mat-dialog-content h3{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content .abandon-profil{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px}mat-dialog-content .create-profil{background-color:#171f26;border:1px solid #171f26;color:#fff}mat-dialog-content .action-content{margin-bottom:10px}mat-dialog-content button:disabled,mat-dialog-content button[disabled]{opacity:.5}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy90ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlL2RpYWxvZy1jcmVhdGUtdGVtcGxhdGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvdGVtcGxhdGUvZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztBQVF6RSxNQUFNLE9BQU8sNkJBQTZCO0lBRXhDLFlBQTZDLElBQVMsRUFDNUMsU0FBc0QsRUFBVSxPQUEwQjtRQUR2RCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQzVDLGNBQVMsR0FBVCxTQUFTLENBQTZDO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFHcEcsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFdBQU0sR0FBRztZQUNQLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFBO0lBTEQsQ0FBQztJQU1ELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNqRCxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQUk7UUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsWUFBWTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ2xDO0lBQ0gsQ0FBQztJQUNELEtBQUs7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFBO0lBQ2hDLENBQUM7OzBHQTlCVSw2QkFBNkIsdUJBRXBCLGVBQWU7Z0ZBRnhCLDZCQUE2QjtRQ1QxQyw2Q0FBa0QsWUFBQTtRQUM5QixzREFBNEI7UUFBQSxpQkFBSztRQUNuRCx5Q0FBd0QsZ0JBQUE7UUFDM0MsMkNBQTJCO1FBQUEsaUJBQVk7UUFDbEQsZ0NBQWtGO1FBQXRELDJKQUF5QjtRQUFyRCxpQkFBa0YsRUFBQTtRQVlwRiw4QkFBNEIsZ0JBQUE7UUFDNEIsMEdBQVMsa0JBQWMsSUFBQztRQUM1RSxtQ0FDRjtRQUFBLGlCQUFTO1FBQ1Qsa0NBQW1FO1FBQXBDLDJHQUFTLFdBQU8sSUFBQztRQUM5Qyw2QkFDRjtRQUFBLGlCQUFTLEVBQUEsRUFBQTs7UUFsQm1CLGVBQXlCO1FBQXpCLHlDQUF5QjtRQWE3QyxlQUF1QjtRQUF2Qix5Q0FBdUI7O3VGRFJ0Qiw2QkFBNkI7Y0FMekMsU0FBUzsyQkFDRSw0QkFBNEI7O3NCQU16QixNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy1jcmVhdGUtdGVtcGxhdGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy1jcmVhdGUtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nQ3JlYXRlVGVtcGxhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnksXHJcbiAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0NyZWF0ZVRlbXBsYXRlQ29tcG9uZW50PiwgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSkge1xyXG5cclxuICB9XHJcbiAgdGFncyA9IFtdO1xyXG4gIHByb2ZpbCA9IHtcclxuICAgIE5hbWU6ICcnLFxyXG4gICAgVGFnczogJydcclxuICB9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhZ3MgPSB0aGlzLmRhdGEudGFnc1xyXG4gICAgdGhpcy5wcm9maWwgPSB0aGlzLmRhdGE/LnByb2ZpbCB8fCB0aGlzLnByb2ZpbDtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0KHR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHR5cGUpO1xyXG4gIH1cclxuICBjcmVhdGVQcm9maWwoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQoKSkge1xyXG4gICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLnByb2ZpbClcclxuICAgIH1cclxuICB9XHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShmYWxzZSlcclxuICB9XHJcblxyXG4gIGRpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvZmlsLk5hbWUgPT09IFwiXCJcclxuICB9XHJcblxyXG59XHJcbiIsIjxtYXQtZGlhbG9nLWNvbnRlbnQgY2xhc3M9XCJuZ3gtb25ib2FyZGluZy1kaWFsb2dcIj5cclxuICA8aDMgY2xhc3M9XCJ0aXRsZVwiPkNyw6lhdGlvbiBk4oCZdW4gbm91dmVhdSBwcm9maWw8L2gzPlxyXG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgPG1hdC1sYWJlbD5Ob20gZGUgdm90cmUgbm91dmVhdSBwcm9maWw8L21hdC1sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IFsobmdNb2RlbCldPVwicHJvZmlsLk5hbWVcIiBwbGFjZWhvbGRlcj1cIkV4LiBNYW5hZ2VyXCIgLz5cclxuICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwhLS0gPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICA8bWF0LWxhYmVsPkRlc2NyaXB0aW9uPC9tYXQtbGFiZWw+XHJcbiAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cIkRlc2NyaXB0aW9uXCIgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cIlwiPjwvdGV4dGFyZWE+XHJcbiAgPC9tYXQtZm9ybS1maWVsZD4gLS0+XHJcbiAgPCEtLSA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgIDxtYXQtbGFiZWw+VGFnczwvbWF0LWxhYmVsPlxyXG4gICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJwcm9maWwuVGFnc1wiIHJlcXVpcmVkPlxyXG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgdGFnIG9mIHRhZ3NcIiBbdmFsdWVdPVwidGFnXCI+e3sgdGFnIH19PC9tYXQtb3B0aW9uPlxyXG4gICAgPC9tYXQtc2VsZWN0PlxyXG4gIDwvbWF0LWZvcm0tZmllbGQ+IC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJhY3Rpb24tY29udGVudFwiPlxyXG4gICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZGlzYWJsZWQoKVwiIGNsYXNzPVwiY3JlYXRlLXByb2ZpbFwiIChjbGljayk9XCJjcmVhdGVQcm9maWwoKVwiIG1hdC1yYWlzZWQtYnV0dG9uPlxyXG4gICAgICBDcsOpZXIgcHJvZmlsXHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJhYmFuZG9uLXByb2ZpbFwiIChjbGljayk9XCJjbG9zZSgpXCIgbWF0LXJhaXNlZC1idXR0b24+XHJcbiAgICAgIEFiYW5kb25uZXJcclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L21hdC1kaWFsb2ctY29udGVudD4iXX0=