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
function TemplateProfileListComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "mat-icon", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var d_r653 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r653 == null ? null : d_r653.Picto);
} }
function TemplateProfileListComponent_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var d_r653 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r653.Name.substr(0, 2));
} }
var _c0 = function (a0) { return [a0]; };
function TemplateProfileListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    var _r659 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵtemplate(2, TemplateProfileListComponent_div_13_div_2_Template, 3, 1, "div", 11);
    i0.ɵɵtemplate(3, TemplateProfileListComponent_div_13_div_3_Template, 3, 1, "div", 11);
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 12);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_13_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r659); var d_r653 = ctx.$implicit; var ctx_r658 = i0.ɵɵnextContext(); return ctx_r658.onDelete($event, d_r653._id); });
    i0.ɵɵelementStart(7, "mat-icon");
    i0.ɵɵtext(8, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var d_r653 = ctx.$implicit;
    var ctx_r652 = i0.ɵɵnextContext();
    i0.ɵɵproperty("defaultElevation", 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(6, _c0, ctx_r652.service.mainPath + "/template/" + d_r653._id));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", d_r653 == null ? null : d_r653.Picto);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(d_r653 == null ? null : d_r653.Picto));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", d_r653.Name, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("defaultElevation", ctx_r652.defaultElevation);
} }
var TemplateProfileListComponent = /** @class */ (function () {
    function TemplateProfileListComponent(service, router) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.displayedColumns = ['Name', 'vcontacts', 'createdAt', 'updatedAt', 'action'];
        this.datas = [];
        this.dataSource = new MatTableDataSource([]);
        this.defaultElevation = 2;
        this.raisedElevation = 8;
        this.service.templates.subscribe(function (templates) {
            if (templates && templates.length > 0) {
                _this.datas = templates;
            }
        });
    }
    TemplateProfileListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.getAllProfils(true)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }, 500);
                return [2 /*return*/];
            });
        });
    };
    TemplateProfileListComponent.prototype.onAddProfil = function () {
        this.router.navigate(['onboarding/template/0']);
    };
    TemplateProfileListComponent.prototype.onDelete = function (e, id) {
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
    TemplateProfileListComponent.prototype.getAllProfils = function (recall) {
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
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, ctx.service.mainPath + "/template/0"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.datas);
        } }, directives: [i3.MatAnchor, i2.RouterLinkWithHref, i4.NgForOf, i5.MaterialElevationDirective, i2.RouterLink, i4.NgIf, i3.MatButton, i6.MatIcon], styles: [".main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]{margin-left:50px;padding-top:10px}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;max-width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;opacity:1;margin:57px;padding:49px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:328px;position:relative;height:228px;margin-right:50px;margin-bottom:50px;background:no-repeat padding-box #f4f7f9;border:1px solid #dce4e9;border-radius:6px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font:bold 16px/25px Nexa Text;letter-spacing:.1px;color:#000;opacity:1;margin-top:17px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%]{display:none}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;height:90%;text-align:center;margin-top:10%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:no-repeat padding-box #fff;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}  .box-template:hover .mat-mini-fab .mat-button-wrapper{padding:0!important;display:inline-block;line-height:0}  .box-template:hover .mat-mini-fab{display:initial!important;position:absolute;right:6px;top:7px;background-color:red;width:25px;height:25px}  .box-template:hover .mat-mini-fab .mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:37px;width:24px}"] });
    return TemplateProfileListComponent;
}());
export { TemplateProfileListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGUtcHJvZmlsZS1saXN0L3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQudHMiLCJsaWIvdGVtcGxhdGUtcHJvZmlsZS1saXN0L3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztJQ2V6QywrQkFDSTtJQUFBLG9DQUNjO0lBQUEsWUFBWTtJQUFBLGlCQUFXO0lBQ3pDLGlCQUFNOzs7SUFEWSxlQUFZO0lBQVosMERBQVk7OztJQUU5QiwrQkFDSTtJQUFBLDBCQUFJO0lBQUEsWUFBc0I7SUFBQSxpQkFBSztJQUNuQyxpQkFBTTs7O0lBREUsZUFBc0I7SUFBdEIsOENBQXNCOzs7OztJQVJ0Qyw4QkFFSTtJQUFBLCtCQUNJO0lBQUEscUZBQ0k7SUFHSixxRkFDSTtJQUVKLHlCQUFJO0lBQUEsWUFBVTtJQUFBLGlCQUFJO0lBQ3RCLGlCQUFNO0lBQ04sa0NBRUk7SUFGSSx1UEFBZ0M7SUFFcEMsZ0NBQVU7SUFBQSxxQkFBSztJQUFBLGlCQUFXO0lBQzlCLGlCQUFTO0lBQ2IsaUJBQU07Ozs7SUFoQm9CLG9DQUFzQjtJQUVuQixlQUF5RDtJQUF6RCw4R0FBeUQ7SUFDekUsZUFBZ0I7SUFBaEIsMkRBQWdCO0lBSWhCLGVBQWlCO0lBQWpCLDhEQUFpQjtJQUdsQixlQUFVO0lBQVYsMkNBQVU7SUFHZCxl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Q1YsaUJBQU07O1lBeEI4QyxnQkFBb0Q7WUFBcEQsNkZBQW9EO1lBTXhGLGVBQXVCO1lBQXZCLG1DQUF1Qjs7dUNEaEJ2QztDQTBEQyxBQW5ERCxJQW1EQztTQTlDWSw0QkFBNEI7a0RBQTVCLDRCQUE0QjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLHdDQUF3QztnQkFDckQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7YUFDdEQ7O2tCQU9FLFNBQVM7bUJBQUMsWUFBWTs7a0JBQ3RCLFNBQVM7bUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQgeyBNYXRTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvbmJvYXJkaW5nLXByb2ZpbGUtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZW1wbGF0ZS1wcm9maWxlLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZW1wbGF0ZS1wcm9maWxlLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVByb2ZpbGVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheWVkQ29sdW1ucyA9IFsnTmFtZScsICd2Y29udGFjdHMnLCAnY3JlYXRlZEF0JywgJ3VwZGF0ZWRBdCcsICdhY3Rpb24nXTtcbiAgZGF0YXM6IGFueSA9IFtdO1xuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KFtdKTtcbiAgZGVmYXVsdEVsZXZhdGlvbiA9IDI7XG4gIHJhaXNlZEVsZXZhdGlvbiA9IDg7XG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLnNlcnZpY2UudGVtcGxhdGVzLnN1YnNjcmliZSgodGVtcGxhdGVzOmFueSk9PntcbiAgICAgIGlmKHRlbXBsYXRlcyAmJiB0ZW1wbGF0ZXMubGVuZ3RoPjApe1xuICAgICAgICB0aGlzLmRhdGFzPXRlbXBsYXRlc1xuICAgICAgfVxuICAgIH0pXG4gICB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCB0aGlzLmdldEFsbFByb2ZpbHModHJ1ZSlcbiAgICB9LDUwMCk7XG4gIH1cblxuICBvbkFkZFByb2ZpbCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ29uYm9hcmRpbmcvdGVtcGxhdGUvMCddKVxuICB9XG5cbiAgYXN5bmMgb25EZWxldGUoZSwgaWQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgKGNvbmZpcm0oJ1ZvdWxleiB2b3VzIHN1cHByaW1lciBjZXR0ZSB0ZW1wbGF0ZSA/JykpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2VydmljZS5kZWxldGVQcm9maWwoaWQpO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLmRhdGFzPXRoaXMuZGF0YXMuZmlsdGVyKChkYXRhOmFueSk9PmRhdGEuX2lkIT09aWQpXG4gICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRBbGxQcm9maWxzKHJlY2FsbCkge1xuICAgIGlmKHRoaXMuZGF0YXMubGVuZ3RoPT09MCl7XG4gICAgICBjb25zdCBwcm9maWxlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xuICAgICAgdGhpcy5kYXRhcyA9IHByb2ZpbGVcbiAgICB9XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KHRoaXMuZGF0YXMpO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItbGlzdFwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJ0aXRsZVwiPlByb2ZpbHM8L2gzPlxuICAgICAgICA8cCBjbGFzcz1cInN1Yi10aXRsZVwiPlJldHJvdXZleiBpY2ksIGzigJllbnNlbWJsZSBkZXMgcHJvZmlscyBk4oCZb25ib2FyZGluZyBxdWUgdm91cyBhdmV6IGNyw6nDqXM8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtbGlzdFwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LXRlbXBsYXRlIG5ldy10ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxwPk5vdXZlYXUgcHJvZmlsPC9wPlxuICAgICAgICAgICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImFkZC1wcm9maWxcIiBbcm91dGVyTGlua109XCJbdGhpcy5zZXJ2aWNlLm1haW5QYXRoKycvdGVtcGxhdGUvMCddXCJcbiAgICAgICAgICAgICAgICAgICAgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIENyw6llciB1biBub3V2ZWF1IHByb2ZpbFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBhcHBNYXRlcmlhbEVsZXZhdGlvbiBbZGVmYXVsdEVsZXZhdGlvbl09XCIwXCIgcmFpc2VkRWxldmF0aW9uPVwiMVwiIGNsYXNzPVwiYm94LXRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZCBvZiBkYXRhc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtY29udGVudFwiIFtyb3V0ZXJMaW5rXT1cIlt0aGlzLnNlcnZpY2UubWFpblBhdGgrJy90ZW1wbGF0ZS8nK2QuX2lkXVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZD8uUGljdG9cIiBjbGFzcz1cInBpY3RvLXByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBzdHlsZT1cImZvbnQtc2l6ZTo1MHB4IDsgICAgd2lkdGg6IDQzJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAlO1wiPnt7ZD8uUGljdG99fTwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWQ/LlBpY3RvXCIgY2xhc3M9XCJwaWN0by1wcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3tkLk5hbWUuc3Vic3RyKDAsMil9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD4ge3tkLk5hbWV9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkRlbGV0ZSgkZXZlbnQsZC5faWQpXCIgbWF0LW1pbmktZmFiIGNvbG9yPVwiYWNjZW50XCIgYXBwTWF0ZXJpYWxFbGV2YXRpb25cbiAgICAgICAgICAgICAgICAgICAgW2RlZmF1bHRFbGV2YXRpb25dPVwiZGVmYXVsdEVsZXZhdGlvblwiIHJhaXNlZEVsZXZhdGlvbj1cIjE2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5jbG9zZTwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=