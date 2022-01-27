import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/common";
import * as i8 from "@angular/material/select";
import * as i9 from "@angular/material/checkbox";
import * as i10 from "@angular/material/core";
function UpdateProfilComponent_div_17_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    var _r364 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 20);
    i0.ɵɵlistener("click", function UpdateProfilComponent_div_17_mat_icon_1_Template_mat_icon_click_0_listener($event) { i0.ɵɵrestoreView(_r364); var icon_r362 = ctx.$implicit; var ctx_r363 = i0.ɵɵnextContext(2); return ctx_r363.onSelectPicto($event, icon_r362.name); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var icon_r362 = ctx.$implicit;
    var ctx_r361 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("color", ctx_r361.form.get("Picto").value === icon_r362.name ? "#830B6B" : "#000");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", icon_r362.name, " ");
} }
function UpdateProfilComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, UpdateProfilComponent_div_17_mat_icon_1_Template, 2, 3, "mat-icon", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r359 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r359.matIconList);
} }
function UpdateProfilComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tag_r365 = ctx.$implicit;
    i0.ɵɵproperty("value", tag_r365);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tag_r365);
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
            i0.ɵɵtext(20, "D\u00E9scription");
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
        } }, directives: [i1.MatDialogContent, i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i2.FormGroupDirective, i3.MatButton, i4.MatIcon, i5.MatFormField, i5.MatLabel, i6.MatInput, i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlName, i7.NgIf, i8.MatSelect, i2.RequiredValidator, i7.NgForOf, i9.MatCheckbox, i10.MatOption], styles: ["main[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;margin-bottom:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px;border:1px solid #171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-top:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{border:none;outline:0;text-align:left;font:bold 20px/48px Nexa Text;letter-spacing:0;color:#171f26}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}.margin-top[_ngcontent-%COMP%]{margin-top:10px}.action[_ngcontent-%COMP%]{display:flex;align-items:center}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXBkYXRlLXByb2ZpbC91cGRhdGUtcHJvZmlsLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3VwZGF0ZS1wcm9maWwvdXBkYXRlLXByb2ZpbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7OztJQ2VyRCxvQ0FHSTtJQURBLDBRQUF5QztJQUN6QyxZQUNKO0lBQUEsaUJBQVc7Ozs7SUFIUCxpR0FBc0U7SUFFdEUsZUFDSjtJQURJLCtDQUNKOzs7SUFMSiwrQkFDSTtJQUFBLHdGQUdJO0lBRVIsaUJBQU07OztJQUxRLGVBQWdDO0lBQWhDLDhDQUFnQzs7O0lBYzFDLHNDQUFtRDtJQUFBLFlBQU87SUFBQSxpQkFBYTs7O0lBQWxDLGdDQUFhO0lBQUMsZUFBTztJQUFQLDhCQUFPOztBRDFCOUU7SUFVRSwrQkFBK0MsSUFBUyxFQUNoRCxTQUE4QztRQURQLFNBQUksR0FBSixJQUFJLENBQUs7UUFDaEQsY0FBUyxHQUFULFNBQVMsQ0FBcUM7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUVELHdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQseUNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCx1Q0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUdELDZDQUFhLEdBQWIsVUFBYyxDQUFDLEVBQUUsS0FBSztRQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUMvQyxDQUFDO0lBRUQsK0NBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQy9DLENBQUM7OEZBaENVLHFCQUFxQix1QkFLVixlQUFlOzhEQUwxQixxQkFBcUI7WUNUbEMsMENBQ0k7WUFBQSw0QkFDSTtZQUFBLCtCQUNKO1lBQUEsOEJBQ0k7WUFBQSw4QkFDSTtZQUFBLDZCQUFrQjtZQUFBLDJEQUFzQztZQUFBLGlCQUFLO1lBQzdELHlCQUFHO1lBQUEsdUdBQXdFO1lBQUEsaUJBQUk7WUFDL0UsOEJBQ0k7WUFBQSxrQ0FDSTtZQUR3RCx5R0FBUywyQkFBdUIsSUFBQztZQUN6RixpQ0FBVTtZQUFBLGFBQTJFO1lBQUEsaUJBQVc7WUFDcEcsaUJBQVM7WUFDVCwwQ0FDSTtZQUFBLGtDQUFXO1lBQUEsNENBQTJCO1lBQUEsaUJBQVk7WUFDbEQsNEJBQ0o7WUFBQSxpQkFBaUI7WUFDakIsd0VBQ0k7WUFNUixpQkFBTTtZQUNOLDBDQUNJO1lBQUEsa0NBQVc7WUFBQSxpQ0FBVztZQUFBLGlCQUFZO1lBQ2xDLCtCQUFnRztZQUNwRyxpQkFBaUI7WUFDakIsMkNBQ0k7WUFBQSxrQ0FBVztZQUFBLHFCQUFJO1lBQUEsaUJBQVk7WUFDM0IsdUNBQ0k7WUFBQSx1RkFBbUQ7WUFDdkQsaUJBQWE7WUFDakIsaUJBQWlCO1lBQ2pCLHlDQUEwRDtZQUFBLHVCQUFNO1lBQUEsaUJBQWU7WUFDL0UsZ0NBQ0k7WUFBQSxnQ0FDSTtZQUFBLG1DQUVJO1lBRGdCLG1HQUFTLGFBQVMsSUFBQztZQUNuQywwQkFDSjtZQUFBLGlCQUFTO1lBQ2IsaUJBQU07WUFDTixnQ0FDSTtZQUFBLG1DQUlJO1lBRGdCLG1HQUFTLGVBQVcsSUFBQztZQUNyQyxxQ0FDSjtZQUFBLGlCQUFTO1lBQ2IsaUJBQU07WUFDVixpQkFBTTtZQUNWLGlCQUFNO1lBQ1YsaUJBQU07WUFDVixpQkFBTztZQUNQLGlCQUFPO1lBQ1AsaUJBQXFCOztZQXBEUCxlQUFrQjtZQUFsQixvQ0FBa0I7WUFPRixnQkFBMkU7WUFBM0Usd0dBQTJFO1lBTWpFLGVBQXVCO1lBQXZCLDBDQUF1QjtZQWUvQixlQUF3QjtZQUF4QixrQ0FBd0I7WUFhaEMsZUFBdUY7WUFBdkYsMEdBQXVGO1lBQ3ZGLGdHQUFzRTs7Z0NENUM5RjtDQTJDQyxBQXZDRCxJQXVDQztTQWxDWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUM7O3NCQU1nQixNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi11cGRhdGUtcHJvZmlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VwZGF0ZS1wcm9maWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91cGRhdGUtcHJvZmlsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlUHJvZmlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybTpGb3JtR3JvdXA7XG4gIHRhZ3M6YW55O1xuICBtYXRJY29uTGlzdDphbnk7XG4gIGlzUGljdG9MaXN0U2hvdzpib29sZWFuXG4gIGNvbnN0cnVjdG9yKCAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55LFxuICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFVwZGF0ZVByb2ZpbENvbXBvbmVudD4pIHsgXG4gICAgdGhpcy5mb3JtPXRoaXMuZGF0YS5mb3JtO1xuICAgIHRoaXMudGFncz10aGlzLmRhdGEudGFncztcbiAgICB0aGlzLm1hdEljb25MaXN0PXRoaXMuZGF0YS5tYXRJY29uTGlzdDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgb25Db25maXJtKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRydWUpO1xuICB9IFxuICBvbkNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKGZhbHNlKTtcbiAgfVxuXG5cbiAgb25TZWxlY3RQaWN0byhlLCBwaWN0bykge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7IFBpY3RvOiBwaWN0byB9KTtcbiAgICB0aGlzLmlzUGljdG9MaXN0U2hvdyA9ICF0aGlzLmlzUGljdG9MaXN0U2hvdztcbiAgfVxuXG4gIG9uU2hvd1BpY3RvTGlzdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuaXNQaWN0b0xpc3RTaG93ID0gIXRoaXMuaXNQaWN0b0xpc3RTaG93O1xuICB9XG5cbn1cbiIsIjxtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gICAgPG1haW4+XG4gICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgIDxkaXYgY2xhc3M9XCJib3gtdGl0bGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC10aXRsZS1jb250ZW50XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJ0aXRsZVwiPk1vZGlmaWNhdGlvbiB2b3RyZSBwcm9maWwgZOKAmW9uYm9hcmRpbmc8L2gzPlxuICAgICAgICAgICAgPHA+U8OpbGVjdGlvbm5leiBs4oCZaWNvbiBkZSB2b3RyZSBjaG9peCBldCBtb2RpZmlleiB2b3RyZSBwcm9maWwgZOKAmW9uYm9hcmRpbmc8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZmlsLW5hbWUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtcGljdG9cIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwib25TaG93UGljdG9MaXN0KCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPnt7Zm9ybS5nZXQoJ1BpY3RvJykudmFsdWU9PT1cIlwiID8gJ2NvbnRhY3RfcGhvbmUnIDpmb3JtLmdldCgnUGljdG8nKS52YWx1ZX19PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5Ob20gZGUgdm90cmUgbm91dmVhdSBwcm9maWw8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiTmFtZVwiIHBsYWNlaG9sZGVyPVwiRXguIE1hbmFnZXJcIiAvPlxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtcGljdG9cIiAqbmdJZj1cImlzUGljdG9MaXN0U2hvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nRm9yPVwibGV0IGljb24gb2YgbWF0SWNvbkxpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLmNvbG9yXT1cImZvcm0uZ2V0KCdQaWN0bycpLnZhbHVlPT09aWNvbi5uYW1lID8gJyM4MzBCNkInOicjMDAwJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25TZWxlY3RQaWN0bygkZXZlbnQsaWNvbi5uYW1lKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tpY29uLm5hbWV9fVxuICAgICAgICAgICAgICAgICAgICA8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkTDqXNjcmlwdGlvbjwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cIkRlc2NyaXB0aW9uXCIgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cIlwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZnVsbC13aWR0aCBtYXJnaW4tdG9wXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPlRhZ3M8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJUYWdzXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCB0YWcgb2YgdGFnc1wiIFt2YWx1ZV09XCJ0YWdcIj57e3RhZ319PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiIGZvcm1Db250cm9sTmFtZT1cIlN0YXR1c1wiPkFjdGl2ZTwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLWNyZWF0ZS1wcm9maWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpbmstYWRkLXByb2ZpbFwiIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPSdvbkNsb3NlKCknPlxuICAgICAgICAgICAgICAgICAgICAgICAgQW5udWxlclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay1jcmVhdGUtcHJvZmlsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaW5rLWFkZC1wcm9maWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiKGZvcm0uZ2V0KCdOYW1lJykudmFsdWU9PT0nJyB8fCBmb3JtLmdldCgnVGFncycpLnZhbHVlPT0nJykgPyAwLjQgOiAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmb3JtLmdldCgnTmFtZScpLnZhbHVlPT09JycgfHwgZm9ybS5nZXQoJ1RhZ3MnKS52YWx1ZT09JydcIiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT0nb25Db25maXJtKCknPlxuICAgICAgICAgICAgICAgICAgICAgICAgTW9kaWZpZXIgdW4gcHJvZmlsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PiAgICBcbjwvZm9ybT5cbjwvbWFpbj5cbjwvbWF0LWRpYWxvZy1jb250ZW50PiJdfQ==