import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "ngx-intl-tel-input";
import * as i8 from "@angular/common";
import * as i9 from "@angular/material/select";
import * as i10 from "@angular/material/checkbox";
import * as i11 from "@angular/material/core";
function UpdateProfilComponent_div_17_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    var _r430 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 20);
    i0.ɵɵlistener("click", function UpdateProfilComponent_div_17_mat_icon_1_Template_mat_icon_click_0_listener($event) { i0.ɵɵrestoreView(_r430); var icon_r428 = ctx.$implicit; var ctx_r429 = i0.ɵɵnextContext(2); return ctx_r429.onSelectPicto($event, icon_r428.name); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var icon_r428 = ctx.$implicit;
    var ctx_r427 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("color", ctx_r427.form.get("Picto").value === icon_r428.name ? "#830B6B" : "#000");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", icon_r428.name, " ");
} }
function UpdateProfilComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, UpdateProfilComponent_div_17_mat_icon_1_Template, 2, 3, "mat-icon", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r425 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r425.matIconList);
} }
function UpdateProfilComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tag_r431 = ctx.$implicit;
    i0.ɵɵproperty("value", tag_r431);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tag_r431);
} }
var UpdateProfilComponent = /** @class */ (function () {
    function UpdateProfilComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.form = this.data.form;
        this.tags = this.data.tags;
        this.matIconList = this.data.matIconList;
    }
    UpdateProfilComponent.prototype.ngOnInit = function () {
    };
    UpdateProfilComponent.prototype.onConfirm = function () {
        this.dialogRef.close(true);
    };
    UpdateProfilComponent.prototype.onClose = function () {
        this.dialogRef.close(false);
    };
    UpdateProfilComponent.prototype.onSelectPicto = function (e, picto) {
        e.preventDefault();
        this.form.patchValue({ Picto: picto });
        this.isPictoListShow = !this.isPictoListShow;
    };
    UpdateProfilComponent.prototype.onShowPictoList = function (e) {
        e.preventDefault();
        this.isPictoListShow = !this.isPictoListShow;
    };
    UpdateProfilComponent.ɵfac = function UpdateProfilComponent_Factory(t) { return new (t || UpdateProfilComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
    UpdateProfilComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UpdateProfilComponent, selectors: [["lib-update-profil"]], decls: 36, vars: 7, consts: [[3, "formGroup"], [1, "box-title"], [1, "box-title-content"], [1, "title"], [1, "profil-name-content"], ["mat-raised-button", "", "color", "primary", 1, "add-picto", 3, "click"], ["appearance", "outline", 1, "full-width"], ["type", "text", "matInput", "", "formControlName", "Name", "placeholder", "Ex. Manager"], ["class", "list-picto", 4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "Description", "rows", "4", "placeholder", ""], ["appearance", "outline", 1, "full-width", "margin-top"], ["formControlName", "Tags", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Status", 1, "form-field"], [1, "action"], [1, "link-create-profil"], ["mat-raised-button", "", "color", "primary", 1, "link-add-profil", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "link-add-profil", 3, "disabled", "click"], [1, "list-picto"], [3, "color", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "value"]], template: function UpdateProfilComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-dialog-content");
            i0.ɵɵelementStart(1, "main");
            i0.ɵɵelementStart(2, "form", 0);
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵelementStart(5, "h3", 3);
            i0.ɵɵtext(6, "Modification votre profil d\u2019onboarding");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "S\u00E9lectionnez l\u2019icon de votre choix et modifiez votre profil d\u2019onboarding");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 4);
            i0.ɵɵelementStart(10, "button", 5);
            i0.ɵɵlistener("click", function UpdateProfilComponent_Template_button_click_10_listener($event) { return ctx.onShowPictoList($event); });
            i0.ɵɵelementStart(11, "mat-icon");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "mat-form-field", 6);
            i0.ɵɵelementStart(14, "mat-label");
            i0.ɵɵtext(15, "Nom de votre nouveau profil");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(16, "input", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(17, UpdateProfilComponent_div_17_Template, 2, 1, "div", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "mat-form-field", 6);
            i0.ɵɵelementStart(19, "mat-label");
            i0.ɵɵtext(20, "Description");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(21, "textarea", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "mat-form-field", 10);
            i0.ɵɵelementStart(23, "mat-label");
            i0.ɵɵtext(24, "Tags");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "mat-select", 11);
            i0.ɵɵtemplate(26, UpdateProfilComponent_mat_option_26_Template, 2, 2, "mat-option", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "mat-checkbox", 13);
            i0.ɵɵtext(28, "Active");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 14);
            i0.ɵɵelementStart(30, "div", 15);
            i0.ɵɵelementStart(31, "button", 16);
            i0.ɵɵlistener("click", function UpdateProfilComponent_Template_button_click_31_listener() { return ctx.onClose(); });
            i0.ɵɵtext(32, " Annuler ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "div", 15);
            i0.ɵɵelementStart(34, "button", 17);
            i0.ɵɵlistener("click", function UpdateProfilComponent_Template_button_click_34_listener() { return ctx.onConfirm(); });
            i0.ɵɵtext(35, " Modifier un profil ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx.form.get("Picto").value === "" ? "contact_phone" : ctx.form.get("Picto").value);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.isPictoListShow);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngForOf", ctx.tags);
            i0.ɵɵadvance(8);
            i0.ɵɵstyleProp("opacity", ctx.form.get("Name").value === "" || ctx.form.get("Tags").value == "" ? 0.4 : 1);
            i0.ɵɵproperty("disabled", ctx.form.get("Name").value === "" || ctx.form.get("Tags").value == "");
        } }, directives: [i1.MatDialogContent, i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i2.FormGroupDirective, i3.MatButton, i4.MatIcon, i5.MatFormField, i5.MatLabel, i6.MatInput, i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlName, i7.NativeElementInjectorDirective, i8.NgIf, i9.MatSelect, i2.RequiredValidator, i8.NgForOf, i10.MatCheckbox, i11.MatOption], styles: ["main[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;margin-bottom:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px;border:1px solid #171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-top:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{border:none;outline:0;text-align:left;font:bold 20px/48px Nexa Text;letter-spacing:0;color:#171f26}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}.margin-top[_ngcontent-%COMP%]{margin-top:10px}.action[_ngcontent-%COMP%]{display:flex;align-items:center}"] });
    return UpdateProfilComponent;
}());
export { UpdateProfilComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UpdateProfilComponent, [{
        type: Component,
        args: [{
                selector: 'lib-update-profil',
                templateUrl: './update-profil.component.html',
                styleUrls: ['./update-profil.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXBkYXRlLXByb2ZpbC91cGRhdGUtcHJvZmlsLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3VwZGF0ZS1wcm9maWwvdXBkYXRlLXByb2ZpbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNlckQsb0NBR0k7SUFEQSwwUUFBeUM7SUFDekMsWUFDSjtJQUFBLGlCQUFXOzs7O0lBSFAsaUdBQXNFO0lBRXRFLGVBQ0o7SUFESSwrQ0FDSjs7O0lBTEosK0JBQ0k7SUFBQSx3RkFHSTtJQUVSLGlCQUFNOzs7SUFMUSxlQUFnQztJQUFoQyw4Q0FBZ0M7OztJQWMxQyxzQ0FBbUQ7SUFBQSxZQUFPO0lBQUEsaUJBQWE7OztJQUFsQyxnQ0FBYTtJQUFDLGVBQU87SUFBUCw4QkFBTzs7QUQxQjlFO0lBVUUsK0JBQStDLElBQVMsRUFDaEQsU0FBOEM7UUFEUCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQ2hELGNBQVMsR0FBVCxTQUFTLENBQXFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFRCx3Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELHlDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsdUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFHRCw2Q0FBYSxHQUFiLFVBQWMsQ0FBQyxFQUFFLEtBQUs7UUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDL0MsQ0FBQztJQUVELCtDQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUMvQyxDQUFDOzhGQWhDVSxxQkFBcUIsdUJBS1YsZUFBZTs4REFMMUIscUJBQXFCO1lDVGxDLDBDQUNJO1lBQUEsNEJBQ0k7WUFBQSwrQkFDSjtZQUFBLDhCQUNJO1lBQUEsOEJBQ0k7WUFBQSw2QkFBa0I7WUFBQSwyREFBc0M7WUFBQSxpQkFBSztZQUM3RCx5QkFBRztZQUFBLHVHQUF3RTtZQUFBLGlCQUFJO1lBQy9FLDhCQUNJO1lBQUEsa0NBQ0k7WUFEd0QseUdBQVMsMkJBQXVCLElBQUM7WUFDekYsaUNBQVU7WUFBQSxhQUEyRTtZQUFBLGlCQUFXO1lBQ3BHLGlCQUFTO1lBQ1QsMENBQ0k7WUFBQSxrQ0FBVztZQUFBLDRDQUEyQjtZQUFBLGlCQUFZO1lBQ2xELDRCQUNKO1lBQUEsaUJBQWlCO1lBQ2pCLHdFQUNJO1lBTVIsaUJBQU07WUFDTiwwQ0FDSTtZQUFBLGtDQUFXO1lBQUEsNEJBQVc7WUFBQSxpQkFBWTtZQUNsQywrQkFBZ0c7WUFDcEcsaUJBQWlCO1lBQ2pCLDJDQUNJO1lBQUEsa0NBQVc7WUFBQSxxQkFBSTtZQUFBLGlCQUFZO1lBQzNCLHVDQUNJO1lBQUEsdUZBQW1EO1lBQ3ZELGlCQUFhO1lBQ2pCLGlCQUFpQjtZQUNqQix5Q0FBMEQ7WUFBQSx1QkFBTTtZQUFBLGlCQUFlO1lBQy9FLGdDQUNJO1lBQUEsZ0NBQ0k7WUFBQSxtQ0FFSTtZQURnQixtR0FBUyxhQUFTLElBQUM7WUFDbkMsMEJBQ0o7WUFBQSxpQkFBUztZQUNiLGlCQUFNO1lBQ04sZ0NBQ0k7WUFBQSxtQ0FJSTtZQURnQixtR0FBUyxlQUFXLElBQUM7WUFDckMscUNBQ0o7WUFBQSxpQkFBUztZQUNiLGlCQUFNO1lBQ1YsaUJBQU07WUFDVixpQkFBTTtZQUNWLGlCQUFNO1lBQ1YsaUJBQU87WUFDUCxpQkFBTztZQUNQLGlCQUFxQjs7WUFwRFAsZUFBa0I7WUFBbEIsb0NBQWtCO1lBT0YsZ0JBQTJFO1lBQTNFLHdHQUEyRTtZQU1qRSxlQUF1QjtZQUF2QiwwQ0FBdUI7WUFlL0IsZUFBd0I7WUFBeEIsa0NBQXdCO1lBYWhDLGVBQXVGO1lBQXZGLDBHQUF1RjtZQUN2RixnR0FBc0U7O2dDRDVDOUY7Q0EyQ0MsQUF2Q0QsSUF1Q0M7U0FsQ1kscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQzlDOztzQkFNZ0IsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdXBkYXRlLXByb2ZpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGRhdGUtcHJvZmlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXBkYXRlLXByb2ZpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZVByb2ZpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm06Rm9ybUdyb3VwO1xuICB0YWdzOmFueTtcbiAgbWF0SWNvbkxpc3Q6YW55O1xuICBpc1BpY3RvTGlzdFNob3c6Ym9vbGVhblxuICBjb25zdHJ1Y3RvciggIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueSxcbiAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxVcGRhdGVQcm9maWxDb21wb25lbnQ+KSB7IFxuICAgIHRoaXMuZm9ybT10aGlzLmRhdGEuZm9ybTtcbiAgICB0aGlzLnRhZ3M9dGhpcy5kYXRhLnRhZ3M7XG4gICAgdGhpcy5tYXRJY29uTGlzdD10aGlzLmRhdGEubWF0SWNvbkxpc3Q7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG9uQ29uZmlybSgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0cnVlKTtcbiAgfSBcbiAgb25DbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShmYWxzZSk7XG4gIH1cblxuXG4gIG9uU2VsZWN0UGljdG8oZSwgcGljdG8pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoeyBQaWN0bzogcGljdG8gfSk7XG4gICAgdGhpcy5pc1BpY3RvTGlzdFNob3cgPSAhdGhpcy5pc1BpY3RvTGlzdFNob3c7XG4gIH1cblxuICBvblNob3dQaWN0b0xpc3QoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmlzUGljdG9MaXN0U2hvdyA9ICF0aGlzLmlzUGljdG9MaXN0U2hvdztcbiAgfVxuXG59XG4iLCI8bWF0LWRpYWxvZy1jb250ZW50PlxuICAgIDxtYWluPlxuICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiYm94LXRpdGxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtdGl0bGUtY29udGVudFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwidGl0bGVcIj5Nb2RpZmljYXRpb24gdm90cmUgcHJvZmlsIGTigJlvbmJvYXJkaW5nPC9oMz5cbiAgICAgICAgICAgIDxwPlPDqWxlY3Rpb25uZXogbOKAmWljb24gZGUgdm90cmUgY2hvaXggZXQgbW9kaWZpZXogdm90cmUgcHJvZmlsIGTigJlvbmJvYXJkaW5nPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2ZpbC1uYW1lLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXBpY3RvXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm9uU2hvd1BpY3RvTGlzdCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj57e2Zvcm0uZ2V0KCdQaWN0bycpLnZhbHVlPT09XCJcIiA/ICdjb250YWN0X3Bob25lJyA6Zm9ybS5nZXQoJ1BpY3RvJykudmFsdWV9fTwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+Tm9tIGRlIHZvdHJlIG5vdXZlYXUgcHJvZmlsPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cIk5hbWVcIiBwbGFjZWhvbGRlcj1cIkV4LiBNYW5hZ2VyXCIgLz5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LXBpY3RvXCIgKm5nSWY9XCJpc1BpY3RvTGlzdFNob3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0Zvcj1cImxldCBpY29uIG9mIG1hdEljb25MaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS5jb2xvcl09XCJmb3JtLmdldCgnUGljdG8nKS52YWx1ZT09PWljb24ubmFtZSA/ICcjODMwQjZCJzonIzAwMCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0UGljdG8oJGV2ZW50LGljb24ubmFtZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aWNvbi5uYW1lfX1cbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5EZXNjcmlwdGlvbjwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cIkRlc2NyaXB0aW9uXCIgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cIlwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZnVsbC13aWR0aCBtYXJnaW4tdG9wXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPlRhZ3M8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJUYWdzXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCB0YWcgb2YgdGFnc1wiIFt2YWx1ZV09XCJ0YWdcIj57e3RhZ319PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiIGZvcm1Db250cm9sTmFtZT1cIlN0YXR1c1wiPkFjdGl2ZTwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLWNyZWF0ZS1wcm9maWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpbmstYWRkLXByb2ZpbFwiIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPSdvbkNsb3NlKCknPlxuICAgICAgICAgICAgICAgICAgICAgICAgQW5udWxlclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay1jcmVhdGUtcHJvZmlsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaW5rLWFkZC1wcm9maWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiKGZvcm0uZ2V0KCdOYW1lJykudmFsdWU9PT0nJyB8fCBmb3JtLmdldCgnVGFncycpLnZhbHVlPT0nJykgPyAwLjQgOiAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmb3JtLmdldCgnTmFtZScpLnZhbHVlPT09JycgfHwgZm9ybS5nZXQoJ1RhZ3MnKS52YWx1ZT09JydcIiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT0nb25Db25maXJtKCknPlxuICAgICAgICAgICAgICAgICAgICAgICAgTW9kaWZpZXIgdW4gcHJvZmlsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PiAgICBcbjwvZm9ybT5cbjwvbWFpbj5cbjwvbWF0LWRpYWxvZy1jb250ZW50PiJdfQ==