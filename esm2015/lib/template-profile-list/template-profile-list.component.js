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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGUtcHJvZmlsZS1saXN0L3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQudHMiLCJsaWIvdGVtcGxhdGUtcHJvZmlsZS1saXN0L3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztJQ2V6QywrQkFDSTtJQUFBLG9DQUNjO0lBQUEsWUFBWTtJQUFBLGlCQUFXO0lBQ3pDLGlCQUFNOzs7SUFEWSxlQUFZO0lBQVosMERBQVk7OztJQUU5QiwrQkFDSTtJQUFBLDBCQUFJO0lBQUEsWUFBc0I7SUFBQSxpQkFBSztJQUNuQyxpQkFBTTs7O0lBREUsZUFBc0I7SUFBdEIsOENBQXNCOzs7OztJQVJ0Qyw4QkFFSTtJQUFBLCtCQUNJO0lBQUEscUZBQ0k7SUFHSixxRkFDSTtJQUVKLHlCQUFJO0lBQUEsWUFBVTtJQUFBLGlCQUFJO0lBQ3RCLGlCQUFNO0lBQ04sa0NBRUk7SUFGSSwyUEFBZ0M7SUFFcEMsZ0NBQVU7SUFBQSxxQkFBSztJQUFBLGlCQUFXO0lBQzlCLGlCQUFTO0lBQ2IsaUJBQU07Ozs7SUFoQm9CLG9DQUFzQjtJQUVuQixlQUFpRTtJQUFqRSxzSEFBaUU7SUFDakYsZUFBZ0I7SUFBaEIsMkRBQWdCO0lBSWhCLGVBQWlCO0lBQWpCLDhEQUFpQjtJQUdsQixlQUFVO0lBQVYsMkNBQVU7SUFHZCxl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QkFDbkMsV0FBVyxFQUFFLHdDQUF3QztnQkFDckQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7YUFDdEQ7O2tCQU9FLFNBQVM7bUJBQUMsWUFBWTs7a0JBQ3RCLFNBQVM7bUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQgeyBNYXRTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvbmJvYXJkaW5nLXByb2ZpbGUtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZW1wbGF0ZS1wcm9maWxlLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZW1wbGF0ZS1wcm9maWxlLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVByb2ZpbGVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheWVkQ29sdW1ucyA9IFsnTmFtZScsICd2Y29udGFjdHMnLCAnY3JlYXRlZEF0JywgJ3VwZGF0ZWRBdCcsICdhY3Rpb24nXTtcbiAgZGF0YXM6IGFueSA9IFtdO1xuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KFtdKTtcbiAgZGVmYXVsdEVsZXZhdGlvbiA9IDI7XG4gIHJhaXNlZEVsZXZhdGlvbiA9IDg7XG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLnNlcnZpY2UudGVtcGxhdGVzLnN1YnNjcmliZSgodGVtcGxhdGVzOmFueSk9PntcbiAgICAgIGlmKHRlbXBsYXRlcy5sZW5ndGg+MCl7XG4gICAgICAgIHRoaXMuZGF0YXM9dGVtcGxhdGVzXG4gICAgICB9XG4gICAgfSlcbiAgIH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLmdldEFsbFByb2ZpbHModHJ1ZSlcbiAgfVxuXG4gIG9uQWRkUHJvZmlsKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnb25ib2FyZGluZy90ZW1wbGF0ZS1idWlsZGVyLzAnXSlcbiAgfVxuXG4gIGFzeW5jIG9uRGVsZXRlKGUsIGlkKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmIChjb25maXJtKCdWb3VsZXogdm91cyBzdXBwcmltZXIgY2V0dGUgdGVtcGxhdGUgPycpKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZGVsZXRlUHJvZmlsKGlkKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5kYXRhcz10aGlzLmRhdGFzLmZpbHRlcigoZGF0YTphbnkpPT5kYXRhLl9pZCE9PWlkKVxuICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0QWxsUHJvZmlscyhyZWNhbGwpIHtcbiAgICBpZih0aGlzLmRhdGFzLmxlbmd0aD09PTApe1xuICAgICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTtcbiAgICAgIHRoaXMuZGF0YXMgPSBwcm9maWxlXG4gICAgfVxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55Pih0aGlzLmRhdGFzKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWxpc3RcIj5cbiAgICAgICAgPGgzIGNsYXNzPVwidGl0bGVcIj5Qcm9maWxzPC9oMz5cbiAgICAgICAgPHAgY2xhc3M9XCJzdWItdGl0bGVcIj5SZXRyb3V2ZXogaWNpLCBs4oCZZW5zZW1ibGUgZGVzIHByb2ZpbHMgZOKAmW9uYm9hcmRpbmcgcXVlIHZvdXMgYXZleiBjcsOpw6lzPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWxpc3RcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10ZW1wbGF0ZSBuZXctdGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8cD5Ob3V2ZWF1IHByb2ZpbDwvcD5cbiAgICAgICAgICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgY2xhc3M9XCJhZGQtcHJvZmlsXCIgW3JvdXRlckxpbmtdPVwiW3RoaXMuc2VydmljZS5tYWluUGF0aCsnL3RlbXBsYXRlLWJ1aWxkZXIvMCddXCJcbiAgICAgICAgICAgICAgICAgICAgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIENyw6llciB1biBub3V2ZWF1IHByb2ZpbFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBhcHBNYXRlcmlhbEVsZXZhdGlvbiBbZGVmYXVsdEVsZXZhdGlvbl09XCIwXCIgcmFpc2VkRWxldmF0aW9uPVwiMVwiIGNsYXNzPVwiYm94LXRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZCBvZiBkYXRhc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtY29udGVudFwiIFtyb3V0ZXJMaW5rXT1cIlt0aGlzLnNlcnZpY2UubWFpblBhdGgrJy90ZW1wbGF0ZS1idWlsZGVyLycrZC5faWRdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJkPy5QaWN0b1wiIGNsYXNzPVwicGljdG8tcHJldmlld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIHN0eWxlPVwiZm9udC1zaXplOjUwcHggOyAgICB3aWR0aDogNDMlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCU7XCI+e3tkPy5QaWN0b319PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhZD8uUGljdG9cIiBjbGFzcz1cInBpY3RvLXByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57e2QuTmFtZS5zdWJzdHIoMCwyKX19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPiB7e2QuTmFtZX19PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uRGVsZXRlKCRldmVudCxkLl9pZClcIiBtYXQtbWluaS1mYWIgY29sb3I9XCJhY2NlbnRcIiBhcHBNYXRlcmlhbEVsZXZhdGlvblxuICAgICAgICAgICAgICAgICAgICBbZGVmYXVsdEVsZXZhdGlvbl09XCJkZWZhdWx0RWxldmF0aW9uXCIgcmFpc2VkRWxldmF0aW9uPVwiMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmNsb3NlPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==