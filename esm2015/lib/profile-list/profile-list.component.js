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
function ProfileListComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "mat-icon", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r180 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r180 == null ? null : d_r180.Picto);
} }
function ProfileListComponent_div_17_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r180 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r180.Name.substr(0, 2));
} }
const _c0 = function (a0) { return [a0]; };
function ProfileListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r186 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵtemplate(2, ProfileListComponent_div_17_div_2_Template, 3, 1, "div", 11);
    i0.ɵɵtemplate(3, ProfileListComponent_div_17_div_3_Template, 3, 1, "div", 11);
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 12);
    i0.ɵɵlistener("click", function ProfileListComponent_div_17_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r186); const d_r180 = ctx.$implicit; const ctx_r185 = i0.ɵɵnextContext(); return ctx_r185.onDelete($event, d_r180._id); });
    i0.ɵɵelementStart(7, "mat-icon");
    i0.ɵɵtext(8, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r180 = ctx.$implicit;
    const ctx_r179 = i0.ɵɵnextContext();
    i0.ɵɵproperty("defaultElevation", ctx_r179.defaultElevation);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(6, _c0, ctx_r179.service.mainPath + "/template-builder/" + d_r180._id));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", d_r180 == null ? null : d_r180.Picto);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(d_r180 == null ? null : d_r180.Picto));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", d_r180.Name, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("defaultElevation", ctx_r179.defaultElevation);
} }
export class ProfileListComponent {
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
            yield this.getAllProfils(true);
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
ProfileListComponent.ɵfac = function ProfileListComponent_Factory(t) { return new (t || ProfileListComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService), i0.ɵɵdirectiveInject(i2.Router)); };
ProfileListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProfileListComponent, selectors: [["onboarding-profile-list"]], viewQuery: function ProfileListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatPaginator, true);
        i0.ɵɵviewQuery(MatSort, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, decls: 18, vars: 4, consts: [[1, "main"], [1, "header-list"], [1, "content-list"], [1, "title"], [1, "sub-title"], [1, "list"], [1, "box-template", "new-template"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "routerLink"], ["appMaterialElevation", "", "raisedElevation", "16", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], ["appMaterialElevation", "", "raisedElevation", "16", 1, "box-template", 3, "defaultElevation"], [1, "box-content", 3, "routerLink"], ["class", "picto-preview", 4, "ngIf"], ["mat-mini-fab", "", "color", "accent", "appMaterialElevation", "", "raisedElevation", "16", 3, "defaultElevation", "click"], [1, "picto-preview"], [2, "font-size", "50px", "width", "100%", "height", "40%"]], template: function ProfileListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "h2");
        i0.ɵɵtext(3, "On boarding");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "p");
        i0.ɵɵtext(5, "Retrouvez ici, l\u2019ensemble des formulaires d\u2019on boarding que vous avez cr\u00E9\u00E9s");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 2);
        i0.ɵɵelementStart(7, "h3", 3);
        i0.ɵɵtext(8, "Profils");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "p", 4);
        i0.ɵɵtext(10, "Retrouvez ici, l\u2019ensemble des profils d\u2019onboarding que vous avez cr\u00E9\u00E9s");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 5);
        i0.ɵɵelementStart(12, "div", 6);
        i0.ɵɵelementStart(13, "p");
        i0.ɵɵtext(14, "Nouveau profil");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "a", 7);
        i0.ɵɵtext(16, " Cr\u00E9er un nouveau profil ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(17, ProfileListComponent_div_17_Template, 9, 8, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(15);
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, ctx.service.mainPath + "/template-builder/0"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.datas);
    } }, directives: [i3.MatAnchor, i2.RouterLinkWithHref, i4.NgForOf, i5.MaterialElevationDirective, i2.RouterLink, i4.NgIf, i3.MatButton, i6.MatIcon], styles: [".main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]{margin-left:50px;padding-top:10px}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;opacity:1;margin:57px;height:80%;padding:49px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;margin-bottom:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:328px;position:relative;height:228px;margin-right:50px;margin-bottom:50px;background:no-repeat padding-box #f4f7f9;border:1px solid #dce4e9;border-radius:6px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font:bold 16px/25px Nexa Text;letter-spacing:.1px;color:#000;opacity:1;margin-top:17px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%]{display:none}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;height:90%;text-align:center;margin-top:10%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:no-repeat padding-box #fff;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}  .box-template:hover .mat-mini-fab .mat-button-wrapper{padding:0!important;display:inline-block;line-height:0}  .box-template:hover .mat-mini-fab{display:initial!important;position:absolute;right:6px;top:7px;background-color:red;width:25px;height:25px}  .box-template:hover .mat-mini-fab .mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:37px;width:24px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProfileListComponent, [{
        type: Component,
        args: [{
                selector: 'onboarding-profile-list',
                templateUrl: './profile-list.component.html',
                styleUrls: ['./profile-list.component.scss']
            }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }]; }, { paginator: [{
            type: ViewChild,
            args: [MatPaginator]
        }], sort: [{
            type: ViewChild,
            args: [MatSort]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS1saXN0L3Byb2ZpbGUtbGlzdC5jb21wb25lbnQudHMiLCJsaWIvcHJvZmlsZS1saXN0L3Byb2ZpbGUtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztJQ2lCekMsK0JBQ0k7SUFBQSxvQ0FBNEQ7SUFBQSxZQUFZO0lBQUEsaUJBQVc7SUFDdkYsaUJBQU07OztJQUQwRCxlQUFZO0lBQVosMERBQVk7OztJQUU1RSwrQkFDSTtJQUFBLDBCQUFJO0lBQUEsWUFBc0I7SUFBQSxpQkFBSztJQUNuQyxpQkFBTTs7O0lBREUsZUFBc0I7SUFBdEIsOENBQXNCOzs7OztJQVB0Qyw4QkFFSTtJQUFBLCtCQUNJO0lBQUEsNkVBQ0k7SUFFSiw2RUFDSTtJQUVKLHlCQUFJO0lBQUEsWUFBVTtJQUFBLGlCQUFJO0lBQ3RCLGlCQUFNO0lBQ04sa0NBRUk7SUFGSSxtUEFBZ0M7SUFFcEMsZ0NBQVU7SUFBQSxxQkFBSztJQUFBLGlCQUFXO0lBQzlCLGlCQUFTO0lBQ2IsaUJBQU07Ozs7SUFmb0IsNERBQXFDO0lBRWxDLGVBQWlFO0lBQWpFLHNIQUFpRTtJQUNqRixlQUFnQjtJQUFoQiwyREFBZ0I7SUFHaEIsZUFBaUI7SUFBakIsOERBQWlCO0lBR2xCLGVBQVU7SUFBViwyQ0FBVTtJQUdkLGVBQXFDO0lBQXJDLDREQUFxQzs7QURqQnpELE1BQU0sT0FBTyxvQkFBb0I7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QztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3Qzs7a0JBT0UsU0FBUzttQkFBQyxZQUFZOztrQkFDdEIsU0FBUzttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7IE1hdFNvcnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29uYm9hcmRpbmctcHJvZmlsZS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2ZpbGUtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2ZpbGUtbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheWVkQ29sdW1ucyA9IFsnTmFtZScsICd2Y29udGFjdHMnLCAnY3JlYXRlZEF0JywgJ3VwZGF0ZWRBdCcsICdhY3Rpb24nXTtcbiAgZGF0YXM6IGFueSA9IFtdO1xuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KFtdKTtcbiAgZGVmYXVsdEVsZXZhdGlvbiA9IDI7XG4gIHJhaXNlZEVsZXZhdGlvbiA9IDg7XG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLnNlcnZpY2UudGVtcGxhdGVzLnN1YnNjcmliZSgodGVtcGxhdGVzOmFueSk9PntcbiAgICAgIGlmKHRlbXBsYXRlcy5sZW5ndGg+MCl7XG4gICAgICAgIHRoaXMuZGF0YXM9dGVtcGxhdGVzXG4gICAgICB9XG4gICAgfSlcbiAgIH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLmdldEFsbFByb2ZpbHModHJ1ZSlcbiAgfVxuXG4gIG9uQWRkUHJvZmlsKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnb25ib2FyZGluZy90ZW1wbGF0ZS1idWlsZGVyLzAnXSlcbiAgfVxuXG4gIGFzeW5jIG9uRGVsZXRlKGUsIGlkKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmIChjb25maXJtKCdWb3VsZXogdm91cyBzdXBwcmltZXIgY2V0dGUgdGVtcGxhdGUgPycpKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZGVsZXRlUHJvZmlsKGlkKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5kYXRhcz10aGlzLmRhdGFzLmZpbHRlcigoZGF0YTphbnkpPT5kYXRhLl9pZCE9PWlkKVxuICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0QWxsUHJvZmlscyhyZWNhbGwpIHtcbiAgICBpZih0aGlzLmRhdGFzLmxlbmd0aD09PTApe1xuICAgICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTtcbiAgICAgIHRoaXMuZGF0YXMgPSBwcm9maWxlXG4gICAgfVxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55Pih0aGlzLmRhdGFzKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWxpc3RcIj5cbiAgICAgICAgPGgyPk9uIGJvYXJkaW5nPC9oMj5cbiAgICAgICAgPHA+UmV0cm91dmV6IGljaSwgbOKAmWVuc2VtYmxlIGRlcyBmb3JtdWxhaXJlcyBk4oCZb24gYm9hcmRpbmcgcXVlIHZvdXMgYXZleiBjcsOpw6lzPC9wPlxuICAgICAgICA8IS0tIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT0nb25BZGRQcm9maWwoKSc+QWpvdXRlciB1biBwcmlmaWw8L2J1dHRvbj4gLS0+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtbGlzdFwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJ0aXRsZVwiPlByb2ZpbHM8L2gzPlxuICAgICAgICA8cCBjbGFzcz1cInN1Yi10aXRsZVwiPlJldHJvdXZleiBpY2ksIGzigJllbnNlbWJsZSBkZXMgcHJvZmlscyBk4oCZb25ib2FyZGluZyBxdWUgdm91cyBhdmV6IGNyw6nDqXM8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LXRlbXBsYXRlIG5ldy10ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxwPk5vdXZlYXUgcHJvZmlsPC9wPlxuICAgICAgICAgICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImFkZC1wcm9maWxcIiBbcm91dGVyTGlua109XCJbdGhpcy5zZXJ2aWNlLm1haW5QYXRoKycvdGVtcGxhdGUtYnVpbGRlci8wJ11cIlxuICAgICAgICAgICAgICAgICAgICBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgQ3LDqWVyIHVuIG5vdXZlYXUgcHJvZmlsXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGFwcE1hdGVyaWFsRWxldmF0aW9uIFtkZWZhdWx0RWxldmF0aW9uXT1cImRlZmF1bHRFbGV2YXRpb25cIiByYWlzZWRFbGV2YXRpb249XCIxNlwiIGNsYXNzPVwiYm94LXRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZCBvZiBkYXRhc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtY29udGVudFwiIFtyb3V0ZXJMaW5rXT1cIlt0aGlzLnNlcnZpY2UubWFpblBhdGgrJy90ZW1wbGF0ZS1idWlsZGVyLycrZC5faWRdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJkPy5QaWN0b1wiIGNsYXNzPVwicGljdG8tcHJldmlld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIHN0eWxlPVwiZm9udC1zaXplOjUwcHggO3dpZHRoOiAxMDAlOyBoZWlnaHQ6IDQwJTtcIj57e2Q/LlBpY3RvfX08L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFkPy5QaWN0b1wiIGNsYXNzPVwicGljdG8tcHJldmlld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt7ZC5OYW1lLnN1YnN0cigwLDIpfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+IHt7ZC5OYW1lfX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25EZWxldGUoJGV2ZW50LGQuX2lkKVwiIG1hdC1taW5pLWZhYiBjb2xvcj1cImFjY2VudFwiIGFwcE1hdGVyaWFsRWxldmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIFtkZWZhdWx0RWxldmF0aW9uXT1cImRlZmF1bHRFbGV2YXRpb25cIiByYWlzZWRFbGV2YXRpb249XCIxNlwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+Y2xvc2U8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19