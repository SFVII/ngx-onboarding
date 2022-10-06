import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { locales } from '../../../i18n';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/input";
import * as i7 from "ngx-intl-tel-input";
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
        this.locale = {};
        this.service._lang.subscribe((locale) => {
            this.locale = locales[locale].PROFILE;
        });
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
DialogCreateTemplateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogCreateTemplateComponent, selectors: [["lib-dialog-create-template"]], decls: 12, vars: 6, consts: [[1, "ngx-onboarding-dialog"], [1, "title"], ["appearance", "outline", 1, "full-width"], ["type", "text", "matInput", "", "placeholder", "Ex. Manager", 3, "ngModel", "ngModelChange"], [1, "action-content"], ["mat-raised-button", "", 1, "create-profil", 3, "disabled", "click"], ["mat-raised-button", "", 1, "abandon-profil", 3, "click"]], template: function DialogCreateTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-dialog-content", 0)(1, "h3", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-form-field", 2)(4, "mat-label");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "input", 3);
        i0.ɵɵlistener("ngModelChange", function DialogCreateTemplateComponent_Template_input_ngModelChange_6_listener($event) { return ctx.profil.Name = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "div", 4)(8, "button", 5);
        i0.ɵɵlistener("click", function DialogCreateTemplateComponent_Template_button_click_8_listener() { return ctx.createProfil(); });
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 6);
        i0.ɵɵlistener("click", function DialogCreateTemplateComponent_Template_button_click_10_listener() { return ctx.close(); });
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.locale == null ? null : ctx.locale.CREATE_NEW_PROFILE);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.locale == null ? null : ctx.locale.PROFILE_NAME);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.profil.Name);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.disabled());
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.locale == null ? null : ctx.locale.CREATE_PROFILE, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.locale == null ? null : ctx.locale.CANCEL, " ");
    } }, dependencies: [i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.MatFormField, i4.MatLabel, i5.MatButton, i6.MatInput, i1.MatDialogContent, i7.NativeElementInjectorDirective], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:555px;min-width:555px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content[_ngcontent-%COMP%]   .abandon-profil[_ngcontent-%COMP%]{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px}mat-dialog-content[_ngcontent-%COMP%]   .create-profil[_ngcontent-%COMP%]{background-color:#171f26;border:1px solid #171f26;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, mat-dialog-content[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{opacity:.5}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogCreateTemplateComponent, [{
        type: Component,
        args: [{ selector: 'lib-dialog-create-template', template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\n  <h3 class=\"title\">{{locale?.CREATE_NEW_PROFILE}}</h3>\n  <mat-form-field class=\"full-width\" appearance=\"outline\">\n    <mat-label>{{locale?.PROFILE_NAME}}</mat-label>\n    <input type=\"text\" matInput [(ngModel)]=\"profil.Name\" placeholder=\"Ex. Manager\" />\n  </mat-form-field>\n  <!-- <mat-form-field class=\"full-width\" appearance=\"outline\">\n    <mat-label>Description</mat-label>\n    <textarea type=\"text\" matInput [(ngModel)]=\"Description\" rows=\"4\" placeholder=\"\"></textarea>\n  </mat-form-field> -->\n  <!-- <mat-form-field class=\"full-width\" appearance=\"outline\">\n    <mat-label>Tags</mat-label>\n    <mat-select [(ngModel)]=\"profil.Tags\" required>\n      <mat-option *ngFor=\"let tag of tags\" [value]=\"tag\">{{ tag }}</mat-option>\n    </mat-select>\n  </mat-form-field> -->\n  <div class=\"action-content\">\n    <button [disabled]=\"disabled()\" class=\"create-profil\" (click)=\"createProfil()\" mat-raised-button>\n      {{locale?.CREATE_PROFILE}}\n    </button>\n    <button class=\"abandon-profil\" (click)=\"close()\" mat-raised-button>\n      {{locale?.CANCEL}}\n    </button>\n  </div>\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:555px;min-width:555px}mat-dialog-content mat-form-field{margin-bottom:10px}mat-dialog-content h3{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content .abandon-profil{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px}mat-dialog-content .create-profil{background-color:#171f26;border:1px solid #171f26;color:#fff}mat-dialog-content .action-content{margin-bottom:10px}mat-dialog-content button:disabled,mat-dialog-content button[disabled]{opacity:.5}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy90ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlL2RpYWxvZy1jcmVhdGUtdGVtcGxhdGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvdGVtcGxhdGUvZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0FBUXhDLE1BQU0sT0FBTyw2QkFBNkI7SUFReEMsWUFBNkMsSUFBUyxFQUM1QyxTQUFzRCxFQUFVLE9BQTBCO1FBRHZELFNBQUksR0FBSixJQUFJLENBQUs7UUFDNUMsY0FBUyxHQUFULFNBQVMsQ0FBNkM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQVBwRyxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsV0FBTSxHQUFHO1lBQ1AsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtTQUNULENBQUE7UUFDRCxXQUFNLEdBQVEsRUFBRSxDQUFBO1FBR2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNqRCxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQUk7UUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsWUFBWTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ2xDO0lBQ0gsQ0FBQztJQUNELEtBQUs7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFBO0lBQ2hDLENBQUM7OzBHQWpDVSw2QkFBNkIsdUJBUXBCLGVBQWU7Z0ZBUnhCLDZCQUE2QjtRQ1YxQyw2Q0FBa0QsWUFBQTtRQUM5QixZQUE4QjtRQUFBLGlCQUFLO1FBQ3JELHlDQUF3RCxnQkFBQTtRQUMzQyxZQUF3QjtRQUFBLGlCQUFZO1FBQy9DLGdDQUFrRjtRQUF0RCwySkFBeUI7UUFBckQsaUJBQWtGLEVBQUE7UUFZcEYsOEJBQTRCLGdCQUFBO1FBQzRCLDBHQUFTLGtCQUFjLElBQUM7UUFDNUUsWUFDRjtRQUFBLGlCQUFTO1FBQ1Qsa0NBQW1FO1FBQXBDLDJHQUFTLFdBQU8sSUFBQztRQUM5QyxhQUNGO1FBQUEsaUJBQVMsRUFBQSxFQUFBOztRQXJCTyxlQUE4QjtRQUE5QiwrRUFBOEI7UUFFbkMsZUFBd0I7UUFBeEIseUVBQXdCO1FBQ1AsZUFBeUI7UUFBekIseUNBQXlCO1FBYTdDLGVBQXVCO1FBQXZCLHlDQUF1QjtRQUM3QixlQUNGO1FBREUsc0ZBQ0Y7UUFFRSxlQUNGO1FBREUsOEVBQ0Y7O3VGRFpTLDZCQUE2QjtjQUx6QyxTQUFTOzJCQUNFLDRCQUE0Qjs7c0JBWXpCLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IGxvY2FsZXMgfSBmcm9tICcuLi8uLi8uLi9pMThuJztcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWRpYWxvZy1jcmVhdGUtdGVtcGxhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy1jcmVhdGUtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dDcmVhdGVUZW1wbGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdGFncyA9IFtdO1xuICBwcm9maWwgPSB7XG4gICAgTmFtZTogJycsXG4gICAgVGFnczogJydcbiAgfVxuICBsb2NhbGU6IGFueSA9IHt9XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueSxcbiAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0NyZWF0ZVRlbXBsYXRlQ29tcG9uZW50PiwgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSkge1xuICAgIHRoaXMuc2VydmljZS5fbGFuZy5zdWJzY3JpYmUoKGxvY2FsZSkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVzW2xvY2FsZV0uUFJPRklMRTtcbiAgICB9KVxuICB9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGFncyA9IHRoaXMuZGF0YS50YWdzXG4gICAgdGhpcy5wcm9maWwgPSB0aGlzLmRhdGE/LnByb2ZpbCB8fCB0aGlzLnByb2ZpbDtcbiAgfVxuXG4gIG9uU2VsZWN0KHR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0eXBlKTtcbiAgfVxuICBjcmVhdGVQcm9maWwoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKCkpIHtcbiAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMucHJvZmlsKVxuICAgIH1cbiAgfVxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShmYWxzZSlcbiAgfVxuXG4gIGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByb2ZpbC5OYW1lID09PSBcIlwiXG4gIH1cblxufVxuIiwiPG1hdC1kaWFsb2ctY29udGVudCBjbGFzcz1cIm5neC1vbmJvYXJkaW5nLWRpYWxvZ1wiPlxuICA8aDMgY2xhc3M9XCJ0aXRsZVwiPnt7bG9jYWxlPy5DUkVBVEVfTkVXX1BST0ZJTEV9fTwvaDM+XG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgIDxtYXQtbGFiZWw+e3tsb2NhbGU/LlBST0ZJTEVfTkFNRX19PC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJwcm9maWwuTmFtZVwiIHBsYWNlaG9sZGVyPVwiRXguIE1hbmFnZXJcIiAvPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICA8IS0tIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgIDxtYXQtbGFiZWw+RGVzY3JpcHRpb248L21hdC1sYWJlbD5cbiAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cIkRlc2NyaXB0aW9uXCIgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cIlwiPjwvdGV4dGFyZWE+XG4gIDwvbWF0LWZvcm0tZmllbGQ+IC0tPlxuICA8IS0tIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgIDxtYXQtbGFiZWw+VGFnczwvbWF0LWxhYmVsPlxuICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwicHJvZmlsLlRhZ3NcIiByZXF1aXJlZD5cbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCB0YWcgb2YgdGFnc1wiIFt2YWx1ZV09XCJ0YWdcIj57eyB0YWcgfX08L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICA8L21hdC1mb3JtLWZpZWxkPiAtLT5cbiAgPGRpdiBjbGFzcz1cImFjdGlvbi1jb250ZW50XCI+XG4gICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZGlzYWJsZWQoKVwiIGNsYXNzPVwiY3JlYXRlLXByb2ZpbFwiIChjbGljayk9XCJjcmVhdGVQcm9maWwoKVwiIG1hdC1yYWlzZWQtYnV0dG9uPlxuICAgICAge3tsb2NhbGU/LkNSRUFURV9QUk9GSUxFfX1cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYWJhbmRvbi1wcm9maWxcIiAoY2xpY2spPVwiY2xvc2UoKVwiIG1hdC1yYWlzZWQtYnV0dG9uPlxuICAgICAge3tsb2NhbGU/LkNBTkNFTH19XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+Il19