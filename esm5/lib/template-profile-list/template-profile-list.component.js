import { __awaiter, __decorate, __generator } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OnboardingService } from '../onboarding.service';
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
        this.router.navigate(['onboarding/template-builder/0']);
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
    TemplateProfileListComponent.ctorParameters = function () { return [
        { type: OnboardingService },
        { type: Router }
    ]; };
    __decorate([
        ViewChild(MatPaginator)
    ], TemplateProfileListComponent.prototype, "paginator", void 0);
    __decorate([
        ViewChild(MatSort)
    ], TemplateProfileListComponent.prototype, "sort", void 0);
    TemplateProfileListComponent = __decorate([
        Component({
            selector: 'onboarding-profile-list',
            template: "<div class=\"main\">\n    <div class=\"header-list\">\n        <h3 class=\"title\">Profils</h3>\n        <p class=\"sub-title\">Retrouvez ici, l\u2019ensemble des profils d\u2019onboarding que vous avez cr\u00E9\u00E9s</p>\n    </div>\n    <div class=\"content-list\">\n\n        <div class=\"list\">\n            <div class=\"box-template new-template\">\n                <p>Nouveau profil</p>\n                <a role=\"button\" class=\"add-profil\" [routerLink]=\"[this.service.mainPath+'/template-builder/0']\"\n                    mat-raised-button color=\"primary\">\n                    Cr\u00E9er un nouveau profil\n                </a>\n            </div>\n            <div appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\n                *ngFor=\"let d of datas\">\n                <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template-builder/'+d._id]\">\n                    <div *ngIf=\"d?.Picto\" class=\"picto-preview\">\n                        <mat-icon style=\"font-size:50px ;    width: 43%;\n                        height: 40%;\">{{d?.Picto}}</mat-icon>\n                    </div>\n                    <div *ngIf=\"!d?.Picto\" class=\"picto-preview\">\n                        <h3>{{d.Name.substr(0,2)}}</h3>\n                    </div>\n                    <p> {{d.Name}}</p>\n                </div>\n                <button (click)=\"onDelete($event,d._id)\" mat-mini-fab color=\"accent\" appMaterialElevation\n                    [defaultElevation]=\"defaultElevation\" raisedElevation=\"16\">\n                    <mat-icon>close</mat-icon>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>",
            styles: [".main{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main .header-list{margin-left:50px;padding-top:10px}.main .header-list h3{text-align:left;font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main .header-list p{text-align:left;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;max-width:300px}.main .content-list{background-color:#fff;border-radius:8px;opacity:1;margin:57px;height:80%;padding:49px}.main .content-list h3{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main .content-list p.sub-title{margin-bottom:57px;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;width:300px}.main .content-list .list{display:flex;flex-wrap:wrap}.main .content-list .list .box-template{width:328px;position:relative;height:228px;margin-right:50px;margin-bottom:50px;background:no-repeat padding-box #f4f7f9;border:1px solid #dce4e9;border-radius:6px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main .content-list .list .box-template img{width:81px;height:81px}.main .content-list .list .box-template p{text-align:center;font:bold 16px/25px Nexa Text;letter-spacing:.1px;color:#000;opacity:1;margin-top:17px}.main .content-list .list .box-template a{background:no-repeat padding-box #171f26;border-radius:7px;font-size:15px}.main .content-list .list .box-template .mat-mini-fab{display:none}.main .content-list .list .box-template .box-content{width:100%;height:90%;text-align:center;margin-top:10%}.main .content-list .list .box-template .box-content .picto-preview{width:113px;height:113px;background:no-repeat padding-box #fff;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main .content-list .list .box-template .box-content .picto-preview h3{font-size:40px;color:#dce4e9}.main .content-list .list .new-template{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}::ng-deep .box-template:hover .mat-mini-fab .mat-button-wrapper{padding:0!important;display:inline-block;line-height:0}::ng-deep .box-template:hover .mat-mini-fab{display:initial!important;position:absolute;right:6px;top:7px;background-color:red;width:25px;height:25px}::ng-deep .box-template:hover .mat-mini-fab .mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:37px;width:24px}"]
        })
    ], TemplateProfileListComponent);
    return TemplateProfileListComponent;
}());
export { TemplateProfileListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGUtcHJvZmlsZS1saXN0L3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDM0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU8xRDtJQVFFLHNDQUFtQixPQUEwQixFQUFVLE1BQWM7UUFBckUsaUJBTUU7UUFOaUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUHJFLHFCQUFnQixHQUFHLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdFLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFHLElBQUksa0JBQWtCLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDN0MscUJBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBSWxCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFNBQWE7WUFDN0MsSUFBRyxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUM7Z0JBQ2pDLEtBQUksQ0FBQyxLQUFLLEdBQUMsU0FBUyxDQUFBO2FBQ3JCO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUksK0NBQVEsR0FBZDs7OztnQkFDRSxVQUFVLENBQUM7OztvQ0FDVCxxQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFBOztnQ0FBOUIsU0FBOEIsQ0FBQTs7OztxQkFDL0IsRUFBQyxHQUFHLENBQUMsQ0FBQzs7OztLQUNSO0lBRUQsa0RBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFBO0lBQ3pELENBQUM7SUFFSywrQ0FBUSxHQUFkLFVBQWUsQ0FBQyxFQUFFLEVBQUU7Ozs7Ozt3QkFDbEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFBOzZCQUNmLE9BQU8sQ0FBQyx3Q0FBd0MsQ0FBQyxFQUFqRCx3QkFBaUQ7d0JBQ3BDLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFBOzt3QkFBNUMsTUFBTSxHQUFHLFNBQW1DO3dCQUNsRCxJQUFJLE1BQU0sRUFBRTs0QkFDVixJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBUSxJQUFHLE9BQUEsSUFBSSxDQUFDLEdBQUcsS0FBRyxFQUFFLEVBQWIsQ0FBYSxDQUFDLENBQUE7eUJBQ3pEOzs7Ozs7S0FFSDtJQUVLLG9EQUFhLEdBQW5CLFVBQW9CLE1BQU07Ozs7Ozs2QkFDckIsQ0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBRyxDQUFDLENBQUEsRUFBckIsd0JBQXFCO3dCQUNOLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUE7O3dCQUEzQyxPQUFPLEdBQUcsU0FBaUM7d0JBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFBOzs7d0JBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzFELElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7O0tBQ2xDOztnQkFwQzJCLGlCQUFpQjtnQkFBa0IsTUFBTTs7SUFGNUM7UUFBeEIsU0FBUyxDQUFDLFlBQVksQ0FBQzttRUFBeUI7SUFDN0I7UUFBbkIsU0FBUyxDQUFDLE9BQU8sQ0FBQzs4REFBZTtJQVB2Qiw0QkFBNEI7UUFMeEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyw4ckRBQXFEOztTQUV0RCxDQUFDO09BQ1csNEJBQTRCLENBOEN4QztJQUFELG1DQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7U0E5Q1ksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7IE1hdFNvcnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29uYm9hcmRpbmctcHJvZmlsZS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUHJvZmlsZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkaXNwbGF5ZWRDb2x1bW5zID0gWydOYW1lJywgJ3Zjb250YWN0cycsICdjcmVhdGVkQXQnLCAndXBkYXRlZEF0JywgJ2FjdGlvbiddO1xuICBkYXRhczogYW55ID0gW107XG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4oW10pO1xuICBkZWZhdWx0RWxldmF0aW9uID0gMjtcbiAgcmFpc2VkRWxldmF0aW9uID0gODtcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMuc2VydmljZS50ZW1wbGF0ZXMuc3Vic2NyaWJlKCh0ZW1wbGF0ZXM6YW55KT0+e1xuICAgICAgaWYodGVtcGxhdGVzICYmIHRlbXBsYXRlcy5sZW5ndGg+MCl7XG4gICAgICAgIHRoaXMuZGF0YXM9dGVtcGxhdGVzXG4gICAgICB9XG4gICAgfSlcbiAgIH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHRoaXMuZ2V0QWxsUHJvZmlscyh0cnVlKVxuICAgIH0sNTAwKTtcbiAgfVxuXG4gIG9uQWRkUHJvZmlsKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnb25ib2FyZGluZy90ZW1wbGF0ZS1idWlsZGVyLzAnXSlcbiAgfVxuXG4gIGFzeW5jIG9uRGVsZXRlKGUsIGlkKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmIChjb25maXJtKCdWb3VsZXogdm91cyBzdXBwcmltZXIgY2V0dGUgdGVtcGxhdGUgPycpKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZGVsZXRlUHJvZmlsKGlkKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5kYXRhcz10aGlzLmRhdGFzLmZpbHRlcigoZGF0YTphbnkpPT5kYXRhLl9pZCE9PWlkKVxuICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0QWxsUHJvZmlscyhyZWNhbGwpIHtcbiAgICBpZih0aGlzLmRhdGFzLmxlbmd0aD09PTApe1xuICAgICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTtcbiAgICAgIHRoaXMuZGF0YXMgPSBwcm9maWxlXG4gICAgfVxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55Pih0aGlzLmRhdGFzKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gIH1cblxufVxuIl19