import { __awaiter, __generator } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "../onboarding.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/common";
var _c0 = function (a0) { return [a0]; };
function ProfileListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "img", 8);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var d_r107 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, "/profil-form/" + d_r107._id));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", d_r107.Name, "");
} }
var _c1 = function () { return ["/profil-form/0"]; };
var ProfileListComponent = /** @class */ (function () {
    function ProfileListComponent(service, router) {
        this.service = service;
        this.router = router;
        this.displayedColumns = ['Name', 'vcontacts', 'createdAt', 'updatedAt', 'action'];
        this.datas = [];
        this.dataSource = new MatTableDataSource([]);
    }
    ProfileListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllProfils()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileListComponent.prototype.onAddProfil = function () {
        this.router.navigate(['/profil-form/0']);
    };
    ProfileListComponent.prototype.onDelete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.deleteProfil(id)];
                    case 1:
                        result = _a.sent();
                        if (!result) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getAllProfils()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProfileListComponent.prototype.getAllProfils = function () {
        return __awaiter(this, void 0, void 0, function () {
            var profile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getAllProfil()];
                    case 1:
                        profile = _a.sent();
                        this.datas = profile;
                        this.dataSource = new MatTableDataSource(this.datas);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileListComponent.ɵfac = function ProfileListComponent_Factory(t) { return new (t || ProfileListComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService), i0.ɵɵdirectiveInject(i2.Router)); };
    ProfileListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProfileListComponent, selectors: [["onboarding-profile-list"]], viewQuery: function ProfileListComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(MatPaginator, true);
            i0.ɵɵviewQuery(MatSort, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
        } }, decls: 18, vars: 3, consts: [[1, "main"], [1, "header-list"], [1, "content-list"], [1, "list"], [1, "box-template"], ["role", "button", "mat-raised-button", "", "color", "primary", 3, "routerLink"], ["class", "box-template", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "box-template", 3, "routerLink"], ["src", "data:image/png;base64,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", "alt", ""]], template: function ProfileListComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵelementStart(7, "h3");
            i0.ɵɵtext(8, "Fiches collaborateurs");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 3);
            i0.ɵɵelementStart(10, "div", 4);
            i0.ɵɵelementStart(11, "p");
            i0.ɵɵtext(12, "Nouvelle cat\u00E9gorie");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "a", 5);
            i0.ɵɵelementStart(14, "mat-icon");
            i0.ɵɵtext(15, "add");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(16, " Cr\u00E9er une fiche ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(17, ProfileListComponent_div_17_Template, 4, 4, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(2, _c1));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.datas);
        } }, directives: [i3.MatAnchor, i2.RouterLinkWithHref, i4.MatIcon, i5.NgForOf, i2.RouterLink], styles: [".main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]{margin-left:50px;padding-top:10px}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;opacity:1;margin:57px;height:80%;padding:49px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:328px;height:228px;margin-right:50px;margin-bottom:50px;background:no-repeat padding-box #f4f7f9;border:1px solid #dce4e9;border-radius:6px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font:bold 16px/25px Nexa Text;letter-spacing:.1px;color:#5a607f;opacity:1}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:no-repeat padding-box #5a607f;border-radius:7px;font-size:15px}"] });
    return ProfileListComponent;
}());
export { ProfileListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS1saXN0L3Byb2ZpbGUtbGlzdC5jb21wb25lbnQudHMiLCJsaWIvcHJvZmlsZS1saXN0L3Byb2ZpbGUtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztJQ2F2RCw4QkFDRTtJQUFBLHlCQUNBO0lBQUEseUJBQUk7SUFBQSxZQUFVO0lBQUEsaUJBQUk7SUFDcEIsaUJBQU07OztJQUg0QyxxRkFBdUM7SUFFbkYsZUFBVTtJQUFWLDJDQUFVOzs7QURYdEI7SUFXRSw4QkFBb0IsT0FBMEIsRUFBVSxNQUFjO1FBQWxELFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUx0RSxxQkFBZ0IsR0FBRyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM3RSxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFNLEVBQUUsQ0FBQyxDQUFDO0lBRzZCLENBQUM7SUFFckUsdUNBQVEsR0FBZDs7Ozs0QkFDRSxxQkFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUE7O3dCQUExQixTQUEwQixDQUFBOzs7OztLQUMzQjtJQUVELDBDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBRUssdUNBQVEsR0FBZCxVQUFlLEVBQUU7Ozs7OzRCQUNBLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFBOzt3QkFBNUMsTUFBTSxHQUFHLFNBQW1DOzZCQUM5QyxNQUFNLEVBQU4sd0JBQU07d0JBQ1IscUJBQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFBOzt3QkFBMUIsU0FBMEIsQ0FBQTs7Ozs7O0tBRTdCO0lBRUssNENBQWEsR0FBbkI7Ozs7OzRCQUNrQixxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFBOzt3QkFBM0MsT0FBTyxHQUFHLFNBQWlDO3dCQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQTt3QkFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDMUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzs7Ozs7S0FDbEM7NEZBN0JVLG9CQUFvQjs2REFBcEIsb0JBQW9COzJCQUlwQixZQUFZOzJCQUNaLE9BQU87Ozs7OztZQ2pCcEIsOEJBQ0U7WUFBQSw4QkFDRTtZQUFBLDBCQUFJO1lBQUEsMkJBQVc7WUFBQSxpQkFBSztZQUNwQix5QkFBRztZQUFBLCtHQUEyRTtZQUFBLGlCQUFJO1lBRXBGLGlCQUFNO1lBQ04sOEJBQ0U7WUFBQSwwQkFBSTtZQUFBLHFDQUFxQjtZQUFBLGlCQUFLO1lBQzlCLDhCQUNFO1lBQUEsK0JBQ0U7WUFBQSwwQkFBRztZQUFBLHdDQUFrQjtZQUFBLGlCQUFJO1lBQ3pCLDZCQUNFO1lBQUEsaUNBQVU7WUFBQSxvQkFBRztZQUFBLGlCQUFXO1lBQ3hCLHVDQUNGO1lBQUEsaUJBQUk7WUFDTixpQkFBTTtZQUNOLHVFQUNFO1lBR0osaUJBQU07WUErQ1IsaUJBQU07WUFDUixpQkFBTTs7WUF6RG1CLGdCQUFpQztZQUFqQyx1REFBaUM7WUFLMUIsZUFBdUI7WUFBdkIsbUNBQXVCOzsrQkRoQnZEO0NBMkNDLEFBcENELElBb0NDO1NBL0JZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3Qzs7a0JBS0UsU0FBUzttQkFBQyxZQUFZOztrQkFDdEIsU0FBUzttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7IE1hdFNvcnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29uYm9hcmRpbmctcHJvZmlsZS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2ZpbGUtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2ZpbGUtbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheWVkQ29sdW1ucyA9IFsnTmFtZScsICd2Y29udGFjdHMnLCAnY3JlYXRlZEF0JywgJ3VwZGF0ZWRBdCcsICdhY3Rpb24nXTtcbiAgZGF0YXM6IGFueSA9IFtdO1xuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KFtdKTtcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIGF3YWl0IHRoaXMuZ2V0QWxsUHJvZmlscygpXG4gIH1cblxuICBvbkFkZFByb2ZpbCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wcm9maWwtZm9ybS8wJ10pXG4gIH1cblxuICBhc3luYyBvbkRlbGV0ZShpZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2VydmljZS5kZWxldGVQcm9maWwoaWQpO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGF3YWl0IHRoaXMuZ2V0QWxsUHJvZmlscygpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0QWxsUHJvZmlscygpIHtcbiAgICBjb25zdCBwcm9maWxlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xuICAgIHRoaXMuZGF0YXMgPSBwcm9maWxlXG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KHRoaXMuZGF0YXMpO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibWFpblwiPlxuICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWxpc3RcIj5cbiAgICA8aDI+T24gYm9hcmRpbmc8L2gyPlxuICAgIDxwPlJldHJvdXZleiBpY2ksIGzigJllbnNlbWJsZSBkZXMgZm9ybXVsYWlyZXMgZOKAmW9uIGJvYXJkaW5nIHF1ZSB2b3VzIGF2ZXogY3LDqcOpczwvcD5cbiAgICA8IS0tIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT0nb25BZGRQcm9maWwoKSc+QWpvdXRlciB1biBwcmlmaWw8L2J1dHRvbj4gLS0+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29udGVudC1saXN0XCI+XG4gICAgPGgzPkZpY2hlcyBjb2xsYWJvcmF0ZXVyczwvaDM+XG4gICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJib3gtdGVtcGxhdGVcIj5cbiAgICAgICAgPHA+Tm91dmVsbGUgY2F0w6lnb3JpZTwvcD5cbiAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiIFtyb3V0ZXJMaW5rXT1cIlsnL3Byb2ZpbC1mb3JtLzAnXVwiICAgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XG4gICAgICAgICAgQ3LDqWVyIHVuZSBmaWNoZVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJib3gtdGVtcGxhdGVcIiAqbmdGb3I9XCJsZXQgZCBvZiBkYXRhc1wiIFtyb3V0ZXJMaW5rXT1cIlsnL3Byb2ZpbC1mb3JtLycrIGQuX2lkXVwiPlxuICAgICAgICA8aW1nIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUUFBQUFFQUNBWUFBQUJjY3FobUFBQUFBWE5TUjBJQXJzNGM2UUFBRGJ0SlJFRlVlRjd0blUxc25GY1Zoby9qbjdneGFleEFnUlRpUllHMkNDR2dwQ2tGQkFVV2dQaEpnK29zRUlFRm0yYVRRc1dtRUg2SzJDRUV5UUt4b0lLR2xpSWhTcHFLVnFMbFJ5SnRCU0VSVWlRS0NuVFJpaVNsTkxpMVl5ZE80a0hYMVlCeGJNL005MzMzdnZmN3pqTmJ6OXd6OTdubmZlYk1qMmY2akFzRUlPQ1dRSi9ibmJOeENFREFFQUJOQUFISEJCQ0E0OE5uNnhCQUFQUUFCQndUUUFDT0Q1K3RRd0FCMEFNUWNFd0FBVGcrZkxZT0FRUkFEMERBTVFFRTRQancyVG9FRUFBOUFBSEhCQkNBNDhObjZ4QkFBUFFBQkJ3VFFBQ09ENSt0UXdBQjBBTVFjRXdBQVRnK2ZMWU9BUVJBRDBEQU1RRUU0UGp3MlRvRUVBQTlBQUhIQkJDQTQ4Tm42eEJBQVBRQUJCd1RRQUNPRDUrdFF3QUIwQU1RY0V3QUFUZytmTFlPQVFSQUQwREFNUUVFNFBqdzJUb0VFQUE5QUFISEJCQ0E0OE5uNnhCQUFQUUFCQndUUUFDT0Q1K3RRd0FCMEFNUWNFd0FBVGcrZkxZT0FRUkFEMERBTVFFRTRQancyVG9FRUFBOUFBSEhCQkNBNDhObjZ4QkFBUFFBQkJ3VFFBQ09ENSt0UXdBQjBBTVFjRXdBQVRnK2ZMWU9BUVJBRDBEQU1RRUU0UGp3MlRvRUVBQTlBQUhIQkJDQTQ4Tm42eEJBQVBRQUJCd1RRQUNPRDUrdFF3QUIwQU1RY0V3QUFUZytmTFlPQVFSQUQwREFNUUVFNFBqdzJUb0VFQUE5QUFISEJCQ0E0OE5uNnhCQUFQUUFCQndUUUFDT0Q1K3RRd0FCMEFNUWNFd0FBVGcrZkxZT0FRUkFEMERBTVFFRTRQancyVG9FNUFKbzNYYmJCTWNBQWE4RSt2YnUvYWx5NzNvQjdON2RVZ0tnTmdTVUJQcjI3Wk5tVUZvOGdHOGhBR1gvVVZ0TUFBRWdBSEVMVWw1SkFBRWdBR1gvVVZ0TUFBRWdBSEVMVWw1SkFBRWdBR1gvVVZ0TUFBRWdBSEVMVWw1SkFBRWdBR1gvVVZ0TUFBRWdBSEVMVWw1SkFBRWdBR1gvVVZ0TUFBRWdBSEVMVWw1SkFBRWdBR1gvVVZ0TUFBRWdBSEVMVWw1SkFBRWdBR1gvVVZ0TUFBRWdBSEVMVWw1SkFBRWdBR1gvVVZ0TUFBRWdBSEVMVWw1SkFBRWdBR1gvVVZ0TUFBRWdBSEVMVWw1SkFBRWdBR1gvVVZ0TUFBRWdBSEVMVWw1SkFBRWdBR1gvVVZ0TUFBRWdBSEVMVWw1SkFBRWdBR1gvVVZ0TUFBRWdBSEVMVWw1SkFBRWdBR1gvVVZ0TUFBRWdBSEVMVWw1SkFBRWdBR1gvVVZ0TUFBRWdBSEVMVWw1SkFBRWdBR1gvVVZ0TUFBRWdBSEVMVWw1SkFBRWdBRm4vemJmTVRreGZ0QlBUOC9iYzdMeU5ydTJ6SzliMTIvamwvVGJjTDd0YnJnb2pBQVNRdk9GLzlmU2MvZno0V1h2b3FYUDIzR3pya3ZvaC9PL2RQR1FmdldxdDdiaDIyTllOeUg5RlBqbWpWQVVSQUFKSTFXdjJoNVBuN2N1UFRkdmpKODUzWFhQVHlCcjc0ZzBqdHZOTmwxay9IdWlhVzdkWFJBQUlvTnRlS1hXOTcvNXB4dTc0M2JTRnNiL0k1ZjNqUTNiM2h6Y3NQRTNnVWgwQkJJQUFxdXVtWlZZS2diLzFrUmZ0dnIrY0xWM25kYVA5ZG5EN21JMnZYMU42TFJaNGlRQUNRQUJSc3hCRy91OGNtYW1zeHB0Zk1XQ1BUSXpaeUNDVFFCVlFFUUFDcUtLUGxsM2ovdVBuN0RNUHYxRDUrcmRjUFd3LytORGxsYThiYThHcHVaWjkrdUVYN0k2dEk3WjEwMkNzTW9YV1JRQUlvRkRqZExyUjJZdG0xKzEvM3A2WnV0anBxb1grL290UGpOcDdYanRVNkxZcGJ4VEN2KzNBcEIwK2RkN1dEZmJaL1IvZllPOTZUVDczR3dFZ2dDaDUySHQweHZZY21vNnlkbGowK2xjUDJxOTNqRVZidjRxRlEvaHZmbUJ5NGQyUDltWDlVSjhkMkRhYXpTU0FBQkJBRmIxK3lSclgvZWkwSGYvM2hTaHJ0eGM5L0ttTmR1M0dnYWcxaWk2KytKRi82Um81VFFJSUFBRVU3ZkVWYi9mM3lZdjIxdjNQVjc3dTBnVy9ldU9JZmVINmtlaDFlaTJ3V3ZqYmErVWlBUVNBQUhydDc0N1gvLzZ4V2Z2OGI2WTZYcS9zRlc3YVBHUVBiaDh0dTB5bHQxOXU3RitwUUE1UEJ4QUFBcWcwQUdHeHJ6MCtiZC82WTNWdi9hMTBCOTh3Tm1CSGQyNnMvUDRYWGJDYlIvN2NuZzRnQUFSUXROOVh2RjM0NE0rOVQ1Yi80RStuT3hZK0MzQnExeFdkcnBiazcwWENuOFBUQVFTQUFDb1B5SzVIcCt5ZVA4OVd2dTdTQmNNSWZlSld2UURLaEY4dEFRU0FBQ29QNnRlZk9HUGZQSHltOG5XWExuajFXTDhkMmZueTZIVldLMUJGK0pVU1FBQUlvUElBM1hWczFqNlg0RVhBOTIwZXNvUENGd0Y3ZWNHdlc4aXBYeGhFQUFpZzI5N3MrbnBQVFY2d3Qrdy8zZlgxaTE3eHpuZU8yTzFiTkc4RFZ2bklyM3hoRUFFZ2dLTDVXL1YyVys0NWJYODlIZmVEUUdIOEQwOERVbDlpaGovMTB3RUVnQUNpNUdmZjBSbjdVc1NQQXQrd2FkQWVuVWovVWVBWVkvOUtCNURpNlFBQ1FBQlJCQkQrR2VqdCsvOWxUMC9OUjFuL2w3ZU0yWTFYcHYzUHVoU1AvS21mRGlBQUJCQWxvR0hSQTM4N1p6c2ZxdjdmZ1hkY00yeDNmVER0dndPbmZPUmY3dTNPV1A5QWhBQVFRRFFCaElXLzh0aTBmYnZpTHdRSm8zLzRMSDJxaStLUlA5VWtnQUFRUU5RY2hhOEVDeDhNK3ZHVDVUOFk5UHFGcndRYnRjM3IwNzN3cDN6a1R6RUpJQUFFRUZVQTdjWExmaW5vQjhhSDdJZUp2eFEwaDBmKzJKTUFBa0FBU1FRUWloeDU5b0x0T1RSbGgvN1IvZGVDWC9teWZ0dnpqaEg3NUJ1SGszNHRlRTZQL0RFbkFRU0FBSklKb0Yzb3Q4L01XZmkrd1BERElNL09YUG91UWZoaGtKdkcxOXJIcmhxeWlXdUc3YkxFUHd5U2MvamJES3Q2aXhBQklJRGtBbWdYREs4UG5Ed3p2L0R6WVArY2VlbW53VjQxMG0rYjE2K3h0YUpmQWFsRCtLdVVBQUpBQURJQjVGWTR4K2Y4blJpVi9XWWhCSUFBT3ZXWWk3L1hNZnp0Z3lrakFRU0FBRndFZkxWTjFqbjhaU1dBQUJDQWF3RTBJZnhsSklBQUVJQmJBVFFwL0VVbGdBQVFnRXNCTkRIOFJTU0FBQkNBT3dFME9meTlTZ0FCSUFCWEF2QVEvbDRrZ0FBUWdCc0JlQXAvdHhKQUFBakFoUUE4aHI4YkNTQUFCUEIvQWdpL1pIdm5FMmZzM285c1dQaG9iaE11bnNQZlNRSUlBQUg4TitNaC9PSG5yRU5nM3ZiS0FUdTRmYXoyRWlEOC8xUDRjcDhZUkFBSVlLRkRGb2UvM1RKMWx3RGh2M1IrV3lvQkJJQUFsZzEvM1NWQStGZCs4clpZQWdqQXVRQ1dlK1JmMmpwMW13UUlmK2RYYnRvU2VQZlB2aWQ5b1VkYVBHQnFPUlpBTitGdnQ5TFdUWU1XdnBrMmZCRkZ6cGM2L1QrL21tTTR5NU56OTBrUFZGcmNzd0I2Q1g5ZG5nN3d5Tis3VXFidEo5SU1Tb3Q3RlVDUjhPY3VBY0xmZS9qRExSQ0FzNmNBWmNLZnF3UUlmN0h3SXdCbnJ3RlVFZjdjSkVENGk0Y2ZBVGdTUUpYaHowVUNoTDljK0JHQUV3SEVDTDlhQW9TL2ZQZ1JnQU1CeEF5L1NnS0V2NXJ3STRDR0N5QkYrRk5MZ1BCWEYzNEUwR0FCcEF4L0tna1EvbXJEandBYUtnQkYrR05MZ1BCWEgzNEUwRUFCS01NZlN3S0VQMDc0RVVEREJKQkQrS3VXQU9HUEYzNEUwQ0FCNUJUK3FpUkErT09HSHdFMFJBQTVocitzQkFoLy9QQWpnQVlJSU9md0Y1VUE0VThUZmdSUWN3SFVJZnk5U29Ed3B3cy9BcWl4QU9vVS9tNGxRUGpUaGg4QjFGUUFkUXgvSndrUS92VGhSd0ExRkVDZHc3K1NCQWkvSnZ3SW9HWUNhRUw0bDBxZ3Y4OXMyNEZKTzN6cXZDNEZqaXZ6alVBMStVYWdKb1cvbmJmd1JhUGhFdmJHUlVNQUFkUkFBRTBNdjZiZHFicVVBQUxJWEFDRW45REdKSUFBTWhZQTRZL1orcXpOaTRBWnZ3aEkrQWxvQ2dKTUFCbE9BSVEvUmV0VGd3a2d3d21BOEJQTWxBU1lBREthQUFoL3l0YW5GaE5BUmhNQTRTZVFDZ0pNQUJsTUFJUmYwZnJVWkFMSVlBSWcvQVJSU1lBSlFEZ0JFSDVsNjFPYkNVQTRBUkIrQXBnREFTWUF3UVJBK0hOb2ZlNERFNEJnQWlEOEJDOG5Ba3dBQ1NjQXdwOVQ2M05mbUFBU1RnQ0VuOERsU0lBSklNRUVRUGh6YkgzdUV4TkFnZ21BOEJPMG5Ba3dBVVNjQUFoL3pxM1BmV01DaURnQkVINENWZ2NDVEFBUkpnRENYNGZXNXo0eUFVU1lBQWcvd2FvVEFTYUFDaWNBd2wrbjF1ZStNZ0ZVT0FFUWZnSlZSd0pNQUJWTUFJUy9qcTNQZldZQ3FHQUNJUHdFcWM0RW1BQktUQUNFdjg2dHozMW5BaWd4QVJCK0F0UUVBa3dBQlNZQXd0K0UxbWNQVEFBRkpnRENUM0NhUklBSm9JY0pnUEEzcWZYWkN4TkFEeE1BNFNjd1RTVEFCTkRGQkVENG05ajY3SWtKb0lzSmdQQVRsQ1lUWUFKWVpRSWcvRTF1ZmZiR0JMREtCRUQ0Q1lnSEFrd0F5MHdBaE45RDY3TkhKb0JsSmdEQ1R6QThFV0FDV0RRQkVINVByYzllbVFBV1RRQ0VuMEI0Sk1BRXNIdDNpL0I3YkgzMnpBUmdacitmMk5XNitZRkptNXByMFJFUWNFZkEvUVN3Wjh0bnYvSGl1UXZyM0owOEc0YUFtZTA3ZHZmdFNoQjl5dUxVaGdBRXRBUVFnSlkvMVNFZ0pZQUFwUGdwRGdFdEFRU2c1VTkxQ0VnSklBQXBmb3BEUUVzQUFXajVVeDBDVWdJSVFJcWY0aERRRWtBQVd2NVVoNENVQUFLUTRxYzRCTFFFRUlDV1A5VWhJQ1dBQUtUNEtRNEJMUUVFb09WUGRRaElDU0FBS1g2S1EwQkxBQUZvK1ZNZEFsSUNDRUNLbitJUTBCSkFBRnIrVkllQWxBQUNrT0tuT0FTMEJCQ0Fsai9WSVNBbGdBQ2srQ2tPQVMwQkJLRGxUM1VJU0FrZ0FDbCtpa05BU3dBQmFQbFRIUUpTQWdoQWlwL2lFTkFTUUFCYS9sU0hnSlFBQXBEaXB6Z0V0QVFRZ0pZLzFTRWdKWUFBcFBncERnRXRBUVNnNVU5MUNFZ0pJQUFwZm9wRFFFc0FBV2o1VXgwQ1VnSUlRSXFmNGhEUUVrQUFXdjVVaDRDVUFBS1E0cWM0QkxRRUVJQ1dQOVVoSUNXQUFLVDRLUTRCTFFFRW9PVlBkUWhJQ1NBQUtYNktRMEJMQUFGbytWTWRBbElDQ0VDS24rSVEwQkpBQUZyK1ZJZUFsQUFDa09Lbk9BUzBCQkNBbGovVklTQWxnQUNrK0NrT0FTMEJCS0RsVDNVSVNBa2dBQ2wraWtOQVN3QUJhUGxUSFFKU0FnaEFpcC9pRU5BU1FBQmEvbFNIZ0pRQUFwRGlwemdFdEFRUWdKWS8xU0VnSllBQXBQZ3BEZ0V0QVFTZzVVOTFDRWdKSUFBcGZvcERRRXNBQVdqNVV4MENVZ0lJUUlxZjRoRFFFa0FBV3Y1VWg0Q1VBQUtRNHFjNEJMUUVFSUNXUDlVaElDWHdINFJ0TTJyd2FnbENBQUFBQUVsRlRrU3VRbUNDXCIgYWx0PVwiXCI+XG4gICAgICAgIDxwPiB7e2QuTmFtZX19PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXIgbWF0LWVsZXZhdGlvbi16OFwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1pY29uIG1hdFByZWZpeD5zZWFyY2g8L21hdC1pY29uPlxuICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cInJlY2hlcmNoZVwiIGNsYXNzPVwic2VhcmNoLWlucHV0XCIgPlxuICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC10YWJsZSAjdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIG1hdFNvcnQ+XG4gICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJOYW1lXCI+XG4gICAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTm9tIGR1IHByb2ZpbC4gPC9tYXQtaGVhZGVyLWNlbGw+XG4gICAgICAgICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50Py5OYW1lfX0gPC9tYXQtY2VsbD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgXG4gICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwidmNvbnRhY3RzXCI+XG4gICAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IENyw6llIHBhciA8L21hdC1oZWFkZXItY2VsbD5cbiAgICAgICAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQ/LnZjb250YWN0c1swXS5GaXJzdE5hbWUgKyAnICcrZWxlbWVudD8udmNvbnRhY3RzWzBdLkxhc3ROYW1lIH19IDwvbWF0LWNlbGw+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIFxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImNyZWF0ZWRBdFwiPlxuICAgICAgICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiBEYXRlIGRlIGNyw6lhdGlvbiA8L21hdC1oZWFkZXItY2VsbD5cbiAgICAgICAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQ/LmNyZWF0ZWRBdCB8IGRhdGUgOiAnZGQvTU0veXl5eSd9fSA8L21hdC1jZWxsPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICBcbiAgICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInVwZGF0ZWRBdFwiPlxuICAgICAgICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiBEYXRlIGRlIGRlcm5pw6hyZSBtb2RpZmljYXRpb24gPC9tYXQtaGVhZGVyLWNlbGw+XG4gICAgICAgICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50Py51cGRhdGVkQXQgfCBkYXRlIDogJ2RkL01NL3l5eXknfX0gPC9tYXQtY2VsbD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gIFxuICAgICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImFjdGlvblwiPlxuICAgICAgICAgICAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gQWN0aW9uIDwvbWF0LWhlYWRlci1jZWxsPlxuICAgICAgICAgICAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiBcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWFjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3Byb2ZpbC1mb3JtLycrIGVsZW1lbnQuX2lkXVwiIHJvdXRlckxpbmtBY3RpdmU9XCJyb3V0ZXItbGluay1hY3RpdmVcIiAgbWF0LXJhaXNlZC1idXR0b24gcm9sZT1cImJ1dHRvblwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4O1wiIGNvbG9yPVwicHJpbWFyeVwiPk1vZGlmaWVyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJhY2NlbnRcIiAoY2xpY2spPVwib25EZWxldGUoZWxlbWVudC5faWQpXCI+U3VwcHJpbWVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICAgICAgICA8L21hdC1jZWxsPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgXG4gICAgICAgIDxtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvbWF0LWhlYWRlci1yb3c+XG4gICAgICAgIDxtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvbWF0LXJvdz5cbiAgICAgIDwvbWF0LXRhYmxlPlxuICAgIFxuICAgICAgPG1hdC1wYWdpbmF0b3IgI3BhZ2luYXRvclxuICAgICAgICAgICAgICAgICAgICAgW3BhZ2VTaXplXT1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgIFtwYWdlU2l6ZU9wdGlvbnNdPVwiWzUsIDEwLCAyMF1cIj5cbiAgICAgIDwvbWF0LXBhZ2luYXRvcj5cbiAgICA8L2Rpdj4gLS0+XG4gIDwvZGl2PlxuPC9kaXY+Il19