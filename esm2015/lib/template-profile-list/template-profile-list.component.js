import { __awaiter, __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OnboardingService } from '../onboarding.service';
let TemplateProfileListComponent = class TemplateProfileListComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.displayedColumns = ['Name', 'vcontacts', 'createdAt', 'updatedAt', 'action'];
        this.datas = [];
        this.dataSource = new MatTableDataSource([]);
        this.defaultElevation = 2;
        this.raisedElevation = 8;
        this.service.templates.subscribe((templates) => {
            if (templates && templates.length > 0) {
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
};
TemplateProfileListComponent.ctorParameters = () => [
    { type: OnboardingService },
    { type: Router }
];
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
export { TemplateProfileListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGUtcHJvZmlsZS1saXN0L3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDM0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU8xRCxJQUFhLDRCQUE0QixHQUF6QyxNQUFhLDRCQUE0QjtJQVF2QyxZQUFtQixPQUEwQixFQUFVLE1BQWM7UUFBbEQsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUHJFLHFCQUFnQixHQUFHLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdFLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFHLElBQUksa0JBQWtCLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDN0MscUJBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBSWxCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQWEsRUFBQyxFQUFFO1lBQ2hELElBQUcsU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDO2dCQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFDLFNBQVMsQ0FBQTthQUNyQjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVJLFFBQVE7O1lBQ1osVUFBVSxDQUFDLEdBQVMsRUFBRTtnQkFDcEIsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2hDLENBQUMsQ0FBQSxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsQ0FBQztLQUFBO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFBO0lBQ3pELENBQUM7SUFFSyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUU7O1lBQ2xCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQTtZQUNuQixJQUFJLE9BQU8sQ0FBQyx3Q0FBd0MsQ0FBQyxFQUFFO2dCQUNyRCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLE1BQU0sRUFBRTtvQkFDVixJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBUSxFQUFDLEVBQUUsQ0FBQSxJQUFJLENBQUMsR0FBRyxLQUFHLEVBQUUsQ0FBQyxDQUFBO2lCQUN6RDthQUNEO1FBQ0gsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLE1BQU07O1lBQ3hCLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUcsQ0FBQyxFQUFDO2dCQUN2QixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFBO2FBQ3JCO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkMsQ0FBQztLQUFBO0NBRUYsQ0FBQTs7WUF0QzZCLGlCQUFpQjtZQUFrQixNQUFNOztBQUY1QztJQUF4QixTQUFTLENBQUMsWUFBWSxDQUFDOytEQUF5QjtBQUM3QjtJQUFuQixTQUFTLENBQUMsT0FBTyxDQUFDOzBEQUFlO0FBUHZCLDRCQUE0QjtJQUx4QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLDhyREFBcUQ7O0tBRXRELENBQUM7R0FDVyw0QkFBNEIsQ0E4Q3hDO1NBOUNZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQgeyBNYXRTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvbmJvYXJkaW5nLXByb2ZpbGUtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZW1wbGF0ZS1wcm9maWxlLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZW1wbGF0ZS1wcm9maWxlLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVByb2ZpbGVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheWVkQ29sdW1ucyA9IFsnTmFtZScsICd2Y29udGFjdHMnLCAnY3JlYXRlZEF0JywgJ3VwZGF0ZWRBdCcsICdhY3Rpb24nXTtcbiAgZGF0YXM6IGFueSA9IFtdO1xuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KFtdKTtcbiAgZGVmYXVsdEVsZXZhdGlvbiA9IDI7XG4gIHJhaXNlZEVsZXZhdGlvbiA9IDg7XG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLnNlcnZpY2UudGVtcGxhdGVzLnN1YnNjcmliZSgodGVtcGxhdGVzOmFueSk9PntcbiAgICAgIGlmKHRlbXBsYXRlcyAmJiB0ZW1wbGF0ZXMubGVuZ3RoPjApe1xuICAgICAgICB0aGlzLmRhdGFzPXRlbXBsYXRlc1xuICAgICAgfVxuICAgIH0pXG4gICB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCB0aGlzLmdldEFsbFByb2ZpbHModHJ1ZSlcbiAgICB9LDUwMCk7XG4gIH1cblxuICBvbkFkZFByb2ZpbCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ29uYm9hcmRpbmcvdGVtcGxhdGUtYnVpbGRlci8wJ10pXG4gIH1cblxuICBhc3luYyBvbkRlbGV0ZShlLCBpZCkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBpZiAoY29uZmlybSgnVm91bGV6IHZvdXMgc3VwcHJpbWVyIGNldHRlIHRlbXBsYXRlID8nKSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmRlbGV0ZVByb2ZpbChpZCk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMuZGF0YXM9dGhpcy5kYXRhcy5maWx0ZXIoKGRhdGE6YW55KT0+ZGF0YS5faWQhPT1pZClcbiAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldEFsbFByb2ZpbHMocmVjYWxsKSB7XG4gICAgaWYodGhpcy5kYXRhcy5sZW5ndGg9PT0wKXtcbiAgICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XG4gICAgICB0aGlzLmRhdGFzID0gcHJvZmlsZVxuICAgIH1cbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4odGhpcy5kYXRhcyk7XG4gICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICB9XG5cbn1cbiJdfQ==