import { __awaiter } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "../onboarding.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/common";
import * as i5 from "../directives/elevation";
import * as i6 from "@angular/material/icon";
function TemplateProfileListComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "mat-icon", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r235 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r235 == null ? null : d_r235.Picto);
} }
function TemplateProfileListComponent_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r235 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r235.Name.substr(0, 2));
} }
const _c0 = function (a0) { return [a0]; };
function TemplateProfileListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r241 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵtemplate(2, TemplateProfileListComponent_div_13_div_2_Template, 3, 1, "div", 11);
    i0.ɵɵtemplate(3, TemplateProfileListComponent_div_13_div_3_Template, 3, 1, "div", 11);
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 12);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_13_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r241); const d_r235 = ctx.$implicit; const ctx_r240 = i0.ɵɵnextContext(); return ctx_r240.onDelete($event, d_r235._id); });
    i0.ɵɵelementStart(7, "mat-icon");
    i0.ɵɵtext(8, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r235 = ctx.$implicit;
    const ctx_r234 = i0.ɵɵnextContext();
    i0.ɵɵproperty("defaultElevation", 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(6, _c0, ctx_r234.service.mainPath + "/template-builder/" + d_r235._id));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", d_r235 == null ? null : d_r235.Picto);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(d_r235 == null ? null : d_r235.Picto));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", d_r235.Name, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("defaultElevation", ctx_r234.defaultElevation);
} }
export class TemplateProfileListComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.displayedColumns = ['Name', 'vcontacts', 'createdAt', 'updatedAt', 'action'];
        this.datas = [];
        this.dataSource = new MatTableDataSource([]);
        this.defaultElevation = 2;
        this.raisedElevation = 8;
        this.service.templates.subscribe((templates) => {
            if (templates.length > 0) {
                this.datas = templates;
            }
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                yield this.getAllProfils(true);
            }), 500);
        });
    }
    onAddProfil() {
        this.router.navigate(['onboarding/template-builder/0']);
    }
    onDelete(e, id) {
        return __awaiter(this, void 0, void 0, function* () {
            e.stopPropagation();
            if (confirm('Voulez vous supprimer cette template ?')) {
                const result = yield this.service.deleteProfil(id);
                if (result) {
                    this.datas = this.datas.filter((data) => data._id !== id);
                }
            }
        });
    }
    getAllProfils(recall) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.datas.length === 0) {
                const profile = yield this.service.getAllProfil();
                this.datas = profile;
            }
            this.dataSource = new MatTableDataSource(this.datas);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
}
TemplateProfileListComponent.ɵfac = function TemplateProfileListComponent_Factory(t) { return new (t || TemplateProfileListComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService), i0.ɵɵdirectiveInject(i2.Router)); };
TemplateProfileListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TemplateProfileListComponent, selectors: [["onboarding-profile-list"]], viewQuery: function TemplateProfileListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatPaginator, true);
        i0.ɵɵviewQuery(MatSort, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, decls: 14, vars: 4, consts: [[1, "main"], [1, "header-list"], [1, "title"], [1, "sub-title"], [1, "content-list"], [1, "list"], [1, "box-template", "new-template"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "routerLink"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation"], [1, "box-content", 3, "routerLink"], ["class", "picto-preview", 4, "ngIf"], ["mat-mini-fab", "", "color", "accent", "appMaterialElevation", "", "raisedElevation", "16", 3, "defaultElevation", "click"], [1, "picto-preview"], [2, "font-size", "50px", "width", "43%", "height", "40%"]], template: function TemplateProfileListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "h3", 2);
        i0.ɵɵtext(3, "Profils");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "p", 3);
        i0.ɵɵtext(5, "Retrouvez ici, l\u2019ensemble des profils d\u2019onboarding que vous avez cr\u00E9\u00E9s");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵelementStart(8, "div", 6);
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵtext(10, "Nouveau profil");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "a", 7);
        i0.ɵɵtext(12, " Cr\u00E9er un nouveau profil ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(13, TemplateProfileListComponent_div_13_Template, 9, 8, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, ctx.service.mainPath + "/template-builder/0"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.datas);
    } }, directives: [i3.MatAnchor, i2.RouterLinkWithHref, i4.NgForOf, i5.MaterialElevationDirective, i2.RouterLink, i4.NgIf, i3.MatButton, i6.MatIcon], styles: [".main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]{margin-left:50px;padding-top:10px}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;max-width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;opacity:1;margin:57px;height:80%;padding:49px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:328px;position:relative;height:228px;margin-right:50px;margin-bottom:50px;background:no-repeat padding-box #f4f7f9;border:1px solid #dce4e9;border-radius:6px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font:bold 16px/25px Nexa Text;letter-spacing:.1px;color:#000;opacity:1;margin-top:17px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%]{display:none}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;height:90%;text-align:center;margin-top:10%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:no-repeat padding-box #fff;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}  .box-template:hover .mat-mini-fab .mat-button-wrapper{padding:0!important;display:inline-block;line-height:0}  .box-template:hover .mat-mini-fab{display:initial!important;position:absolute;right:6px;top:7px;background-color:red;width:25px;height:25px}  .box-template:hover .mat-mini-fab .mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:37px;width:24px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TemplateProfileListComponent, [{
        type: Component,
        args: [{
                selector: 'onboarding-profile-list',
                templateUrl: './template-profile-list.component.html',
                styleUrls: ['./template-profile-list.component.scss']
            }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }]; }, { paginator: [{
            type: ViewChild,
            args: [MatPaginator]
        }], sort: [{
            type: ViewChild,
            args: [MatSort]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGUtcHJvZmlsZS1saXN0L3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQudHMiLCJsaWIvdGVtcGxhdGUtcHJvZmlsZS1saXN0L3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztJQ2V6QywrQkFDSTtJQUFBLG9DQUNjO0lBQUEsWUFBWTtJQUFBLGlCQUFXO0lBQ3pDLGlCQUFNOzs7SUFEWSxlQUFZO0lBQVosMERBQVk7OztJQUU5QiwrQkFDSTtJQUFBLDBCQUFJO0lBQUEsWUFBc0I7SUFBQSxpQkFBSztJQUNuQyxpQkFBTTs7O0lBREUsZUFBc0I7SUFBdEIsOENBQXNCOzs7OztJQVJ0Qyw4QkFFSTtJQUFBLCtCQUNJO0lBQUEscUZBQ0k7SUFHSixxRkFDSTtJQUVKLHlCQUFJO0lBQUEsWUFBVTtJQUFBLGlCQUFJO0lBQ3RCLGlCQUFNO0lBQ04sa0NBRUk7SUFGSSwyUEFBZ0M7SUFFcEMsZ0NBQVU7SUFBQSxxQkFBSztJQUFBLGlCQUFXO0lBQzlCLGlCQUFTO0lBQ2IsaUJBQU07Ozs7SUFoQm9CLG9DQUFzQjtJQUVuQixlQUFpRTtJQUFqRSxzSEFBaUU7SUFDakYsZUFBZ0I7SUFBaEIsMkRBQWdCO0lBSWhCLGVBQWlCO0lBQWpCLDhEQUFpQjtJQUdsQixlQUFVO0lBQVYsMkNBQVU7SUFHZCxl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bUNBQXVCOztrRERKMUIsNEJBQTRCO2NBTHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsd0NBQXdDO2dCQUNyRCxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQzthQUN0RDs7a0JBT0UsU0FBUzttQkFBQyxZQUFZOztrQkFDdEIsU0FBUzttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7IE1hdFNvcnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29uYm9hcmRpbmctcHJvZmlsZS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUHJvZmlsZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkaXNwbGF5ZWRDb2x1bW5zID0gWydOYW1lJywgJ3Zjb250YWN0cycsICdjcmVhdGVkQXQnLCAndXBkYXRlZEF0JywgJ2FjdGlvbiddO1xuICBkYXRhczogYW55ID0gW107XG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4oW10pO1xuICBkZWZhdWx0RWxldmF0aW9uID0gMjtcbiAgcmFpc2VkRWxldmF0aW9uID0gODtcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMuc2VydmljZS50ZW1wbGF0ZXMuc3Vic2NyaWJlKCh0ZW1wbGF0ZXM6YW55KT0+e1xuICAgICAgaWYodGVtcGxhdGVzLmxlbmd0aD4wKXtcbiAgICAgICAgdGhpcy5kYXRhcz10ZW1wbGF0ZXNcbiAgICAgIH1cbiAgICB9KVxuICAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgdGhpcy5nZXRBbGxQcm9maWxzKHRydWUpXG4gICAgfSw1MDApO1xuICB9XG5cbiAgb25BZGRQcm9maWwoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydvbmJvYXJkaW5nL3RlbXBsYXRlLWJ1aWxkZXIvMCddKVxuICB9XG5cbiAgYXN5bmMgb25EZWxldGUoZSwgaWQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgKGNvbmZpcm0oJ1ZvdWxleiB2b3VzIHN1cHByaW1lciBjZXR0ZSB0ZW1wbGF0ZSA/JykpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2VydmljZS5kZWxldGVQcm9maWwoaWQpO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLmRhdGFzPXRoaXMuZGF0YXMuZmlsdGVyKChkYXRhOmFueSk9PmRhdGEuX2lkIT09aWQpXG4gICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRBbGxQcm9maWxzKHJlY2FsbCkge1xuICAgIGlmKHRoaXMuZGF0YXMubGVuZ3RoPT09MCl7XG4gICAgICBjb25zdCBwcm9maWxlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xuICAgICAgdGhpcy5kYXRhcyA9IHByb2ZpbGVcbiAgICB9XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KHRoaXMuZGF0YXMpO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItbGlzdFwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJ0aXRsZVwiPlByb2ZpbHM8L2gzPlxuICAgICAgICA8cCBjbGFzcz1cInN1Yi10aXRsZVwiPlJldHJvdXZleiBpY2ksIGzigJllbnNlbWJsZSBkZXMgcHJvZmlscyBk4oCZb25ib2FyZGluZyBxdWUgdm91cyBhdmV6IGNyw6nDqXM8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtbGlzdFwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LXRlbXBsYXRlIG5ldy10ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxwPk5vdXZlYXUgcHJvZmlsPC9wPlxuICAgICAgICAgICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImFkZC1wcm9maWxcIiBbcm91dGVyTGlua109XCJbdGhpcy5zZXJ2aWNlLm1haW5QYXRoKycvdGVtcGxhdGUtYnVpbGRlci8wJ11cIlxuICAgICAgICAgICAgICAgICAgICBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgQ3LDqWVyIHVuIG5vdXZlYXUgcHJvZmlsXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGFwcE1hdGVyaWFsRWxldmF0aW9uIFtkZWZhdWx0RWxldmF0aW9uXT1cIjBcIiByYWlzZWRFbGV2YXRpb249XCIxXCIgY2xhc3M9XCJib3gtdGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBkIG9mIGRhdGFzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1jb250ZW50XCIgW3JvdXRlckxpbmtdPVwiW3RoaXMuc2VydmljZS5tYWluUGF0aCsnL3RlbXBsYXRlLWJ1aWxkZXIvJytkLl9pZF1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImQ/LlBpY3RvXCIgY2xhc3M9XCJwaWN0by1wcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gc3R5bGU9XCJmb250LXNpemU6NTBweCA7ICAgIHdpZHRoOiA0MyU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwJTtcIj57e2Q/LlBpY3RvfX08L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFkPy5QaWN0b1wiIGNsYXNzPVwicGljdG8tcHJldmlld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt7ZC5OYW1lLnN1YnN0cigwLDIpfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+IHt7ZC5OYW1lfX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25EZWxldGUoJGV2ZW50LGQuX2lkKVwiIG1hdC1taW5pLWZhYiBjb2xvcj1cImFjY2VudFwiIGFwcE1hdGVyaWFsRWxldmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIFtkZWZhdWx0RWxldmF0aW9uXT1cImRlZmF1bHRFbGV2YXRpb25cIiByYWlzZWRFbGV2YXRpb249XCIxNlwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+Y2xvc2U8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19