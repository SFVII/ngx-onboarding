import { __awaiter, __generator } from "tslib";
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
function ProfileListComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "mat-icon", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var d_r523 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r523 == null ? null : d_r523.Picto);
} }
function ProfileListComponent_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var d_r523 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r523.Name.substr(0, 2));
} }
var _c0 = function (a0) { return [a0]; };
function ProfileListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    var _r529 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵtemplate(2, ProfileListComponent_div_13_div_2_Template, 3, 1, "div", 11);
    i0.ɵɵtemplate(3, ProfileListComponent_div_13_div_3_Template, 3, 1, "div", 11);
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 12);
    i0.ɵɵlistener("click", function ProfileListComponent_div_13_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r529); var d_r523 = ctx.$implicit; var ctx_r528 = i0.ɵɵnextContext(); return ctx_r528.onDelete($event, d_r523._id); });
    i0.ɵɵelementStart(7, "mat-icon");
    i0.ɵɵtext(8, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var d_r523 = ctx.$implicit;
    var ctx_r522 = i0.ɵɵnextContext();
    i0.ɵɵproperty("defaultElevation", ctx_r522.defaultElevation);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(6, _c0, ctx_r522.service.mainPath + "/template-builder/" + d_r523._id));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", d_r523 == null ? null : d_r523.Picto);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(d_r523 == null ? null : d_r523.Picto));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", d_r523.Name, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("defaultElevation", ctx_r522.defaultElevation);
} }
var ProfileListComponent = /** @class */ (function () {
    function ProfileListComponent(service, router) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.displayedColumns = ['Name', 'vcontacts', 'createdAt', 'updatedAt', 'action'];
        this.datas = [];
        this.dataSource = new MatTableDataSource([]);
        this.defaultElevation = 2;
        this.raisedElevation = 8;
        this.service.templates.subscribe(function (templates) {
            if (templates.length > 0) {
                _this.datas = templates;
            }
        });
    }
    ProfileListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllProfils(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileListComponent.prototype.onAddProfil = function () {
        this.router.navigate(['onboarding/template-builder/0']);
    };
    ProfileListComponent.prototype.onDelete = function (e, id) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.stopPropagation();
                        if (!confirm('Voulez vous supprimer cette template ?')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.deleteProfil(id)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.datas = this.datas.filter(function (data) { return data._id !== id; });
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ProfileListComponent.prototype.getAllProfils = function (recall) {
        return __awaiter(this, void 0, void 0, function () {
            var profile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.datas.length === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.getAllProfil()];
                    case 1:
                        profile = _a.sent();
                        this.datas = profile;
                        _a.label = 2;
                    case 2:
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
        } }, decls: 14, vars: 4, consts: [[1, "main"], [1, "header-list"], [1, "title"], [1, "sub-title"], [1, "content-list"], [1, "list"], [1, "box-template", "new-template"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "routerLink"], ["appMaterialElevation", "", "raisedElevation", "16", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], ["appMaterialElevation", "", "raisedElevation", "16", 1, "box-template", 3, "defaultElevation"], [1, "box-content", 3, "routerLink"], ["class", "picto-preview", 4, "ngIf"], ["mat-mini-fab", "", "color", "accent", "appMaterialElevation", "", "raisedElevation", "16", 3, "defaultElevation", "click"], [1, "picto-preview"], [2, "font-size", "50px", "width", "100%", "height", "40%"]], template: function ProfileListComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵtemplate(13, ProfileListComponent_div_13_Template, 9, 8, "div", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, ctx.service.mainPath + "/template-builder/0"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.datas);
        } }, directives: [i3.MatAnchor, i2.RouterLinkWithHref, i4.NgForOf, i5.MaterialElevationDirective, i2.RouterLink, i4.NgIf, i3.MatButton, i6.MatIcon], styles: [".main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]{margin-left:50px;padding-top:10px}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;max-width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;opacity:1;margin:57px;height:80%;padding:49px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:328px;position:relative;height:228px;margin-right:50px;margin-bottom:50px;background:no-repeat padding-box #f4f7f9;border:1px solid #dce4e9;border-radius:6px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font:bold 16px/25px Nexa Text;letter-spacing:.1px;color:#000;opacity:1;margin-top:17px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%]{display:none}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;height:90%;text-align:center;margin-top:10%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:no-repeat padding-box #fff;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}  .box-template:hover .mat-mini-fab .mat-button-wrapper{padding:0!important;display:inline-block;line-height:0}  .box-template:hover .mat-mini-fab{display:initial!important;position:absolute;right:6px;top:7px;background-color:red;width:25px;height:25px}  .box-template:hover .mat-mini-fab .mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:37px;width:24px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS1saXN0L3Byb2ZpbGUtbGlzdC5jb21wb25lbnQudHMiLCJsaWIvcHJvZmlsZS1saXN0L3Byb2ZpbGUtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztJQ2dCekMsK0JBQ0k7SUFBQSxvQ0FBNEQ7SUFBQSxZQUFZO0lBQUEsaUJBQVc7SUFDdkYsaUJBQU07OztJQUQwRCxlQUFZO0lBQVosMERBQVk7OztJQUU1RSwrQkFDSTtJQUFBLDBCQUFJO0lBQUEsWUFBc0I7SUFBQSxpQkFBSztJQUNuQyxpQkFBTTs7O0lBREUsZUFBc0I7SUFBdEIsOENBQXNCOzs7OztJQVB0Qyw4QkFFSTtJQUFBLCtCQUNJO0lBQUEsNkVBQ0k7SUFFSiw2RUFDSTtJQUVKLHlCQUFJO0lBQUEsWUFBVTtJQUFBLGlCQUFJO0lBQ3RCLGlCQUFNO0lBQ04sa0NBRUk7SUFGSSwrT0FBZ0M7SUFFcEMsZ0NBQVU7SUFBQSxxQkFBSztJQUFBLGlCQUFXO0lBQzlCLGlCQUFTO0lBQ2IsaUJBQU07Ozs7SUFmb0IsNERBQXFDO0lBRWxDLGVBQWlFO0lBQWpFLHNIQUFpRTtJQUNqRixlQUFnQjtJQUFoQiwyREFBZ0I7SUFHaEIsZUFBaUI7SUFBakIsOERBQWlCO0lBR2xCLGVBQVU7SUFBViwyQ0FBVTtJQUdkLGVBQXFDO0lBQXJDLDREQUFxQzs7QURyQnpEO0lBYUUsOEJBQW1CLE9BQTBC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b0I7a0RBQXBCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7O2tCQU9FLFNBQVM7bUJBQUMsWUFBWTs7a0JBQ3RCLFNBQVM7bUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQgeyBNYXRTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvbmJvYXJkaW5nLXByb2ZpbGUtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9maWxlLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9maWxlLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRpc3BsYXllZENvbHVtbnMgPSBbJ05hbWUnLCAndmNvbnRhY3RzJywgJ2NyZWF0ZWRBdCcsICd1cGRhdGVkQXQnLCAnYWN0aW9uJ107XG4gIGRhdGFzOiBhbnkgPSBbXTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55PihbXSk7XG4gIGRlZmF1bHRFbGV2YXRpb24gPSAyO1xuICByYWlzZWRFbGV2YXRpb24gPSA4O1xuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5zZXJ2aWNlLnRlbXBsYXRlcy5zdWJzY3JpYmUoKHRlbXBsYXRlczphbnkpPT57XG4gICAgICBpZih0ZW1wbGF0ZXMubGVuZ3RoPjApe1xuICAgICAgICB0aGlzLmRhdGFzPXRlbXBsYXRlc1xuICAgICAgfVxuICAgIH0pXG4gICB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgYXdhaXQgdGhpcy5nZXRBbGxQcm9maWxzKHRydWUpXG4gIH1cblxuICBvbkFkZFByb2ZpbCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ29uYm9hcmRpbmcvdGVtcGxhdGUtYnVpbGRlci8wJ10pXG4gIH1cblxuICBhc3luYyBvbkRlbGV0ZShlLCBpZCkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBpZiAoY29uZmlybSgnVm91bGV6IHZvdXMgc3VwcHJpbWVyIGNldHRlIHRlbXBsYXRlID8nKSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmRlbGV0ZVByb2ZpbChpZCk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMuZGF0YXM9dGhpcy5kYXRhcy5maWx0ZXIoKGRhdGE6YW55KT0+ZGF0YS5faWQhPT1pZClcbiAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldEFsbFByb2ZpbHMocmVjYWxsKSB7XG4gICAgaWYodGhpcy5kYXRhcy5sZW5ndGg9PT0wKXtcbiAgICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XG4gICAgICB0aGlzLmRhdGFzID0gcHJvZmlsZVxuICAgIH1cbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4odGhpcy5kYXRhcyk7XG4gICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1saXN0XCI+XG4gICAgICAgIDxoMyBjbGFzcz1cInRpdGxlXCI+UHJvZmlsczwvaDM+XG4gICAgICAgIDxwIGNsYXNzPVwic3ViLXRpdGxlXCI+UmV0cm91dmV6IGljaSwgbOKAmWVuc2VtYmxlIGRlcyBwcm9maWxzIGTigJlvbmJvYXJkaW5nIHF1ZSB2b3VzIGF2ZXogY3LDqcOpczwvcD5cbiAgICAgICAgPCEtLSA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9J29uQWRkUHJvZmlsKCknPkFqb3V0ZXIgdW4gcHJpZmlsPC9idXR0b24+IC0tPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWxpc3RcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10ZW1wbGF0ZSBuZXctdGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8cD5Ob3V2ZWF1IHByb2ZpbDwvcD5cbiAgICAgICAgICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgY2xhc3M9XCJhZGQtcHJvZmlsXCIgW3JvdXRlckxpbmtdPVwiW3RoaXMuc2VydmljZS5tYWluUGF0aCsnL3RlbXBsYXRlLWJ1aWxkZXIvMCddXCJcbiAgICAgICAgICAgICAgICAgICAgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIENyw6llciB1biBub3V2ZWF1IHByb2ZpbFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBhcHBNYXRlcmlhbEVsZXZhdGlvbiBbZGVmYXVsdEVsZXZhdGlvbl09XCJkZWZhdWx0RWxldmF0aW9uXCIgcmFpc2VkRWxldmF0aW9uPVwiMTZcIiBjbGFzcz1cImJveC10ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGQgb2YgZGF0YXNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWNvbnRlbnRcIiBbcm91dGVyTGlua109XCJbdGhpcy5zZXJ2aWNlLm1haW5QYXRoKycvdGVtcGxhdGUtYnVpbGRlci8nK2QuX2lkXVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZD8uUGljdG9cIiBjbGFzcz1cInBpY3RvLXByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBzdHlsZT1cImZvbnQtc2l6ZTo1MHB4IDt3aWR0aDogMTAwJTsgaGVpZ2h0OiA0MCU7XCI+e3tkPy5QaWN0b319PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhZD8uUGljdG9cIiBjbGFzcz1cInBpY3RvLXByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57e2QuTmFtZS5zdWJzdHIoMCwyKX19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPiB7e2QuTmFtZX19PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uRGVsZXRlKCRldmVudCxkLl9pZClcIiBtYXQtbWluaS1mYWIgY29sb3I9XCJhY2NlbnRcIiBhcHBNYXRlcmlhbEVsZXZhdGlvblxuICAgICAgICAgICAgICAgICAgICBbZGVmYXVsdEVsZXZhdGlvbl09XCJkZWZhdWx0RWxldmF0aW9uXCIgcmFpc2VkRWxldmF0aW9uPVwiMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmNsb3NlPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==