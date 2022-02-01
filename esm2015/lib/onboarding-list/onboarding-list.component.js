import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { OnboardingService } from '../onboarding.service';
import { CellsComponentList, CoreMatTable } from "table";
import { Router, ActivatedRoute } from '@angular/router';
let OnboardingListComponent = class OnboardingListComponent {
    constructor(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.inputSearch = '';
        this.search = '';
        this.columnDefinitions = [
            {
                key: 'createdAt',
                value: 'Date de création',
                order: 1,
                class: 'u-2',
                module: CellsComponentList.DateFormat,
                sort: true
            },
            {
                key: 'ContactName',
                value: 'Contact',
                order: 2,
                class: 'u-2',
                sort: true,
                module: CellsComponentList.NameAvatar,
                override: ['ContactName', 'Email'],
            },
            {
                key: 'TemplateName',
                value: 'Template',
                order: 3
            }
        ];
        this._loading_table = true;
        this.HiddenIndex = 0;
        this.index = 0;
        this.lang = 'fr';
    }
    cancelSearch() {
        this.inputSearch = '';
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                yield this.service.getAllOnboarding();
            }), 500);
            this.service.onboarding.subscribe((onboarding) => {
                console.log(onboarding);
                setTimeout(() => {
                    this._loading_table = false;
                }, 2000);
                if (onboarding) {
                    //this.onboardingList=onboarding;
                    let x = onboarding.map((row) => {
                        row.ContactName = row.vcontacts[0].Name;
                        row.Email = row.vcontacts[0].Email;
                        row.TemplateName = row.vtemplates.length > 0 ? row.vtemplates[0].Name : '';
                        return row;
                    });
                    this.onboardingList = new CoreMatTable(x, {
                        active: 'CreatedDate', direction: 'desc'
                    }, { active: '', valueStart: null, valueEnd: null }, 15, true, true);
                }
            });
        });
    }
    triggerChange($event) {
        if ($event.index !== this.HiddenIndex) {
            this._loading_table = true;
            this.index = $event.index;
            this.router.navigate([], {
                relativeTo: this.route,
                queryParams: { page: null, tab: $event.index + 1 },
                queryParamsHandling: 'merge',
            });
            this.HiddenIndex = $event.index;
            setTimeout(() => {
                this._loading_table = false;
            }, 2000);
        }
    }
};
OnboardingListComponent.ctorParameters = () => [
    { type: OnboardingService },
    { type: Router },
    { type: ActivatedRoute }
];
OnboardingListComponent = __decorate([
    Component({
        selector: 'lib-onboarding-list',
        template: "<mat-card [ngStyle]=\"_loading_table && {'overflow-y': 'hidden', 'height': '100%',\n'display': 'flex', 'position': 'absolute'}\" class=\"full-height\"\n          style=\"background: #F4F7F9 0% 0% no-repeat padding-box;\">\n    <div class=\"main-all-ticket-list\" *ngIf=\"onboardingList\">\n        <div class=\"page-title-container\">\n\n            <div class=\"page-title\">\n                Suivi des demandes\n            </div>\n\n            <div class=\"page-search\">\n                <mat-icon>search</mat-icon>\n                <input [(ngModel)]=\"inputSearch\" class=\"search-box\" placeholder=\"Recherche\"\n                       type=\"text\">\n\n                <img (click)=\"cancelSearch()\" *ngIf=\"inputSearch && inputSearch != ''\"\n                     [src]=\"'/assets/icons/search_off-24px.svg'\">\n            </div>\n        </div>\n\n        <div class=\"content-view-list-ticket\">\n            <span class=\"mat-tab-left\">\n                Vous avez actuellement\n\n                <span *ngIf=\"index == 0\" class=\"mat-tab-left-count\">\n                    {{ onboardingList?.totalElements }} ticket(s)\n                </span>\n\n                <!--<span *ngIf=\"index == 1\" class=\"mat-tab-left-count\">\n                    {{_loading_tickets_closed ? ticketClosedNb : closed?.totalElements}} ticket(s)\n                </span>-->\n            </span>\n            <mat-tab-group [@.disabled]=\"true\" class=\"list-ticket-tab\" [(selectedIndex)]=\"index\"\n                           (selectedTabChange)=\"triggerChange($event)\">\n                <mat-tab style=\"background-image: none;\">\n                    <ng-template mat-tab-label>\n                        Onboarding ({{onboardingList?.totalElements || onboardingList?.data?.length}})\n                    </ng-template>\n                    <ng-template matTabContent>\n                        <div *ngIf=\"_loading_table || !onboardingList\" class=\"bt-spinner\"></div>\n\n                        <div [ngStyle]=\"_loading_table && {'margin-bottom': '100vh'}\"></div>\n\n                        <div [class.ticket-list]=\"!_loading_table\">\n                            <ngx-design-table *ngIf=\"onboardingList\" [columnDefinitions]=\"columnDefinitions\"\n                                              [displayDetail]=\"false\"\n                                              [data]=\"onboardingList\"\n                                              [lang]=\"lang\"\n                                              [btnOverride]=\"true\"\n                                              [inputSearch]=\"inputSearch\"\n                                              [EmptyRow]=\"true\"\n                                              [displayDetail]=\"true\"\n                                              [blockDetails]=\"true\">\n                            </ngx-design-table>\n                        </div>\n                    </ng-template>\n                </mat-tab>\n                <!--<mat-tab>\n                    <ng-template mat-tab-label>\n                        Offboarding\n                        ({{_loading_tickets_closed ? ticketClosedNb : (closed?.totalElements || closed?.data?.length)}})\n                        <span *ngIf=\"_loading_tickets_closed\" class=\"three-quarters-loader\"></span>\n                    </ng-template>\n                    <ng-template matTabContent>\n                        <div *ngIf=\"_loading_table || !closed\" class=\"bt-spinner\"></div>\n\n                        <div [ngStyle]=\"_loading_table && {'margin-bottom': '100vh'}\"></div>\n\n                        <div [class.ticket-list]=\"!_loading_table\">\n                            <ngx-design-table *ngIf=\"closed\" [columnDefinitions]=\"columnDefinitionsClosed\"\n                                              [displayDetail]=\"true\"\n                                              [displayComponent]=\"\"\n                                              [data]=\"closed\"\n                                              [lang]=\"lang\"\n                                              [btnOverride]=\"true\"\n                                              [inputSearch]=\"inputSearch\"\n                                              [EmptyRow]=\"true\">\n                            </ngx-design-table>\n                        </div>\n                    </ng-template>\n                </mat-tab>-->\n            </mat-tab-group>\n        </div>\n    </div>\n</mat-card>",
        styles: ["mat-card{display:block;width:100%}md-tooltip ._md-content,md-tooltip.tt-multiline ._md-content{height:auto}table{width:100%}.element-detail .inline{display:table;width:90%}.element-detail .inline .block1{display:inline-table;float:left;width:50%;text-align:left}.element-detail .inline .block1 strong{font:bold 13px/20px nexa;letter-spacing:0;color:#171f26}.element-detail .inline .block1 p,.element-detail .inline .block1 small{font-size:13px!important;letter-spacing:0;color:#171f26}.main-all-ticket-list{display:block;grid-column-gap:0;grid-row-gap:0;max-width:1500px;margin-left:auto;margin-right:auto;width:100%;animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.main-all-ticket-list .component-title{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list .content-view-list-ticket{-ms-grid-row:2;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list .content-view-list-ticket table,app-list-preview{width:100%}::ng-deep .mat-tab-label-active{background:#b6d1cd;opacity:1!important}.col-lg-6{width:50%;vertical-align:top;display:inline-table}@-webkit-keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.three-quarters-loader:not(:required){-webkit-animation:1.25s linear infinite three-quarters-loader;animation:1.25s linear infinite three-quarters-loader;border:4px solid #4285f4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}@-webkit-keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left{color:#171f26;font:18px/20px \"Nexa Text\";letter-spacing:0;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count{color:#171f26;font:17px/20px \"Nexa Text Bold\";letter-spacing:0;text-align:left}.page-title-container{display:flex;margin-right:48px}.page-title{text-align:left;font:bold 32px/30px \"Nexa Text Bold\";letter-spacing:0;color:#171f26;margin-left:2em;margin-top:-8px}.page-search{margin-left:auto;position:relative;width:400px}.page-search mat-icon{left:18%;margin-top:10px;position:absolute}.page-search img{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab{padding-left:48px;padding-right:48px}.detail-view-ticket{float:right;margin-right:20px;margin-top:-30px}@media (min-width:1800px){.page-search mat-icon{left:16%}}.ticket-list{animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.bt-spinner{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03a9f4;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin;position:relative;left:50%;top:25vh}@-webkit-keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active,.site-view-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active{background-image:none!important;color:#171f26!important}"]
    })
], OnboardingListComponent);
export { OnboardingListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFlBQVksRUFBaUUsTUFBTSxPQUFPLENBQUM7QUFDdkgsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU96RCxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQXNDbEMsWUFDVSxPQUF5QixFQUN6QixNQUFjLEVBQ2QsS0FBcUI7UUFGckIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBdkMvQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNWLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsc0JBQWlCLEdBQWdDO1lBQ3REO2dCQUNJLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixLQUFLLEVBQUUsa0JBQWtCO2dCQUN6QixLQUFLLEVBQUUsQ0FBQztnQkFDUixLQUFLLEVBQUUsS0FBSztnQkFDWixNQUFNLEVBQUUsa0JBQWtCLENBQUMsVUFBVTtnQkFDckMsSUFBSSxFQUFFLElBQUk7YUFDYjtZQUNEO2dCQUNJLEdBQUcsRUFBRSxhQUFhO2dCQUNsQixLQUFLLEVBQUUsU0FBUztnQkFDaEIsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLGtCQUFrQixDQUFDLFVBQVU7Z0JBQ3JDLFFBQVEs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RUEsQ0FBQTs7WUFuRG1CLGlCQUFpQjtZQUNqQixNQUFNO1lBQ1AsY0FBYzs7QUF6Q3BCLHVCQUF1QjtJQUxuQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLHk0SUFBK0M7O0tBRWhELENBQUM7R0FDVyx1QkFBdUIsQ0EwRm5DO1NBMUZZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5pbXBvcnQge0NlbGxzQ29tcG9uZW50TGlzdCwgQ29yZU1hdFRhYmxlLCBDb3JlTWF0VGFibGVJbnRlcmZhY2UsIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2UsIFRhYmxlU2VydmljZX0gZnJvbSBcInRhYmxlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW9uYm9hcmRpbmctbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG9uYm9hcmRpbmdMaXN0OiBhbnlcbiAgaW5wdXRTZWFyY2ggPSAnJztcbiAgcHVibGljIHNlYXJjaDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBjb2x1bW5EZWZpbml0aW9uczogZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZVtdID0gW1xuICAgIHtcbiAgICAgICAga2V5OiAnY3JlYXRlZEF0JyxcbiAgICAgICAgdmFsdWU6ICdEYXRlIGRlIGNyw6lhdGlvbicsXG4gICAgICAgIG9yZGVyOiAxLFxuICAgICAgICBjbGFzczogJ3UtMicsXG4gICAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkRhdGVGb3JtYXQsXG4gICAgICAgIHNvcnQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgICAga2V5OiAnQ29udGFjdE5hbWUnLFxuICAgICAgICB2YWx1ZTogJ0NvbnRhY3QnLFxuICAgICAgICBvcmRlcjogMixcbiAgICAgICAgY2xhc3M6ICd1LTInLFxuICAgICAgICBzb3J0OiB0cnVlLFxuICAgICAgICBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5OYW1lQXZhdGFyLFxuICAgICAgICBvdmVycmlkZTogWydDb250YWN0TmFtZScsICdFbWFpbCddLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnVGVtcGxhdGVOYW1lJyxcbiAgICAgIHZhbHVlOiAnVGVtcGxhdGUnLFxuICAgICAgb3JkZXI6IDNcbiAgICB9XG4gIF07XG4gIGxvY2FsU2VydmljZTogYW55O1xuICBwdWJsaWMgX2xvYWRpbmdfdGFibGUgPSB0cnVlO1xuICBwcml2YXRlIEhpZGRlbkluZGV4ID0gMDtcbiAgcHVibGljIGluZGV4ID0gMDtcbiAgbGFuZyA9ICdmcic7XG5cbiAgY2FuY2VsU2VhcmNoKCkge1xuICAgIHRoaXMuaW5wdXRTZWFyY2ggPSAnJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2VydmljZTpPbmJvYXJkaW5nU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICApIHsgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbE9uYm9hcmRpbmcoKTtcbiAgICB9LCA1MDApO1xuICAgIHRoaXMuc2VydmljZS5vbmJvYXJkaW5nLnN1YnNjcmliZSgob25ib2FyZGluZyk9PntcbiAgICAgIGNvbnNvbGUubG9nKG9uYm9hcmRpbmcpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2xvYWRpbmdfdGFibGUgPSBmYWxzZTtcbiAgICAgIH0sIDIwMDApO1xuXG4gICAgICBpZihvbmJvYXJkaW5nKXtcbiAgICAgICAgLy90aGlzLm9uYm9hcmRpbmdMaXN0PW9uYm9hcmRpbmc7XG4gICAgICAgIGxldCB4ID0gb25ib2FyZGluZy5tYXAoKHJvdykgPT4ge1xuICAgICAgICAgIHJvdy5Db250YWN0TmFtZSA9IHJvdy52Y29udGFjdHNbMF0uTmFtZTtcbiAgICAgICAgICByb3cuRW1haWwgPSByb3cudmNvbnRhY3RzWzBdLkVtYWlsO1xuICAgICAgICAgIHJvdy5UZW1wbGF0ZU5hbWUgPSByb3cudnRlbXBsYXRlcy5sZW5ndGggPiAwID8gcm93LnZ0ZW1wbGF0ZXNbMF0uTmFtZSA6ICcnO1xuICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMub25ib2FyZGluZ0xpc3QgPSBuZXcgQ29yZU1hdFRhYmxlKHgsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGFjdGl2ZTogJ0NyZWF0ZWREYXRlJywgZGlyZWN0aW9uOiAnZGVzYydcbiAgICAgICAgICB9LCB7YWN0aXZlOiAnJywgdmFsdWVTdGFydDogbnVsbCwgdmFsdWVFbmQ6IG51bGx9LCAxNSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHRyaWdnZXJDaGFuZ2UoJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudC5pbmRleCAhPT0gdGhpcy5IaWRkZW5JbmRleCkge1xuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gdHJ1ZTtcblxuXG4gICAgICAgIHRoaXMuaW5kZXggPSAkZXZlbnQuaW5kZXg7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICAgICAgW10sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge3BhZ2U6IG51bGwsIHRhYjogJGV2ZW50LmluZGV4ICsgMX0sXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJywgLy8gcmVtb3ZlIHRvIHJlcGxhY2UgYWxsIHF1ZXJ5IHBhcmFtcyBieSBwcm92aWRlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuSGlkZGVuSW5kZXggPSAkZXZlbnQuaW5kZXhcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cbn1cblxufVxuIl19