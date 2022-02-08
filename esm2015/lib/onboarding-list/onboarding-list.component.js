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
                key: 'Id',
                value: 'Id',
                order: 1,
                class: 'u-1',
                module: CellsComponentList.ButtonLink,
                sort: true,
                override: ['/administration/onboarding/requests', '_id']
            },
            {
                key: 'createdAt',
                value: 'Date de création',
                order: 2,
                class: 'u-2',
                module: CellsComponentList.DateFormat,
                sort: true
            },
            {
                key: 'ContactName',
                value: 'Contact',
                order: 3,
                class: 'u-2',
                sort: true,
                module: CellsComponentList.NameAvatar,
                override: ['ContactName', 'Email'],
            },
            {
                key: 'TemplateName',
                value: 'Template',
                order: 4,
                class: 'u-2'
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
                    let x = onboarding.map((row, index) => {
                        var _a, _b, _c, _d;
                        row.ContactName = ((_b = (_a = row) === null || _a === void 0 ? void 0 : _a.vcontacts[0]) === null || _b === void 0 ? void 0 : _b.Name) || '';
                        row.Email = ((_d = (_c = row) === null || _c === void 0 ? void 0 : _c.vcontacts[0]) === null || _d === void 0 ? void 0 : _d.Email) || '';
                        row.TemplateName = row.vtemplates.length > 0 ? row.vtemplates[0].Name : '';
                        row.Id = index + 1;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFlBQVksRUFBaUUsTUFBTSxPQUFPLENBQUM7QUFDdkgsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVF6RCxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQWdEbEMsWUFDVSxPQUF5QixFQUN6QixNQUFjLEVBQ2QsS0FBcUI7UUFGckIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBakQvQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNWLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsc0JBQWlCLEdBQWdDO1lBQ3REO2dCQUNFLEdBQUcsRUFBRSxJQUFJO2dCQUNULEtBQUssRUFBRSxJQUFJO2dCQUNYLEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxLQUFLO2dCQUNaLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxVQUFVO2dCQUNyQyxJQUFJLEVBQUUsSUFBSTtnQkFDVixRQUFRLEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxLQUFLLENBQUM7YUFDekQ7WUFDRDtnQkFDSSxHQUFHLEVBQUUsV0FBVztnQkFDaEIsS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osTUFBTSxFQUFFLGtCQUFrQixD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QUFFLElBQUksQ0FBQyxLQUFLO2dCQUN0QixXQUFXLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBQztnQkFDaEQsbUJBQW1CLEVBQUUsT0FBTzthQUMvQixDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7WUFDL0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDWixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUNoQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDWjtJQUNMLENBQUM7Q0FFQSxDQUFBOztZQXBEbUIsaUJBQWlCO1lBQ2pCLE1BQU07WUFDUCxjQUFjOztBQW5EcEIsdUJBQXVCO0lBTG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IseTRJQUErQzs7S0FFaEQsQ0FBQztHQUNXLHVCQUF1QixDQXFHbkM7U0FyR1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7Q2VsbHNDb21wb25lbnRMaXN0LCBDb3JlTWF0VGFibGUsIENvcmVNYXRUYWJsZUludGVyZmFjZSwgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSwgVGFibGVTZXJ2aWNlfSBmcm9tIFwidGFibGVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1vbmJvYXJkaW5nLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBvbmJvYXJkaW5nTGlzdDogYW55XG4gIGlucHV0U2VhcmNoID0gJyc7XG4gIHB1YmxpYyBzZWFyY2g6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgY29sdW1uRGVmaW5pdGlvbnM6IGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VbXSA9IFtcbiAgICB7XG4gICAgICBrZXk6ICdJZCcsXG4gICAgICB2YWx1ZTogJ0lkJyxcbiAgICAgIG9yZGVyOiAxLFxuICAgICAgY2xhc3M6ICd1LTEnLFxuICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuQnV0dG9uTGluayxcbiAgICAgIHNvcnQ6IHRydWUsXG4gICAgICBvdmVycmlkZTogWycvYWRtaW5pc3RyYXRpb24vb25ib2FyZGluZy9yZXF1ZXN0cycsICdfaWQnXVxuICAgIH0sXG4gICAge1xuICAgICAgICBrZXk6ICdjcmVhdGVkQXQnLFxuICAgICAgICB2YWx1ZTogJ0RhdGUgZGUgY3LDqWF0aW9uJyxcbiAgICAgICAgb3JkZXI6IDIsXG4gICAgICAgIGNsYXNzOiAndS0yJyxcbiAgICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuRGF0ZUZvcm1hdCxcbiAgICAgICAgc29ydDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgICBrZXk6ICdDb250YWN0TmFtZScsXG4gICAgICAgIHZhbHVlOiAnQ29udGFjdCcsXG4gICAgICAgIG9yZGVyOiAzLFxuICAgICAgICBjbGFzczogJ3UtMicsXG4gICAgICAgIHNvcnQ6IHRydWUsXG4gICAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0Lk5hbWVBdmF0YXIsXG4gICAgICAgIG92ZXJyaWRlOiBbJ0NvbnRhY3ROYW1lJywgJ0VtYWlsJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICdUZW1wbGF0ZU5hbWUnLFxuICAgICAgdmFsdWU6ICdUZW1wbGF0ZScsXG4gICAgICBvcmRlcjogNCxcbiAgICAgIGNsYXNzOiAndS0yJ1xuICAgIH1cbiAgXTtcbiAgbG9jYWxTZXJ2aWNlOiBhbnk7XG4gIHB1YmxpYyBfbG9hZGluZ190YWJsZSA9IHRydWU7XG4gIHByaXZhdGUgSGlkZGVuSW5kZXggPSAwO1xuICBwdWJsaWMgaW5kZXggPSAwO1xuICBsYW5nID0gJ2ZyJztcblxuICBjYW5jZWxTZWFyY2goKSB7XG4gICAgdGhpcy5pbnB1dFNlYXJjaCA9ICcnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOk9uYm9hcmRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICkgeyB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsT25ib2FyZGluZygpO1xuICAgIH0sIDUwMCk7XG4gICAgdGhpcy5zZXJ2aWNlLm9uYm9hcmRpbmcuc3Vic2NyaWJlKChvbmJvYXJkaW5nKT0+e1xuICAgICAgY29uc29sZS5sb2cob25ib2FyZGluZyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IGZhbHNlO1xuICAgICAgfSwgMjAwMCk7XG5cbiAgICAgIGlmKG9uYm9hcmRpbmcpe1xuICAgICAgICAvL3RoaXMub25ib2FyZGluZ0xpc3Q9b25ib2FyZGluZztcbiAgICAgICAgbGV0IHggPSBvbmJvYXJkaW5nLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJvdy5Db250YWN0TmFtZSA9IHJvdz8udmNvbnRhY3RzWzBdPy5OYW1lIHx8ICcnO1xuICAgICAgICAgIHJvdy5FbWFpbCA9IHJvdz8udmNvbnRhY3RzWzBdPy5FbWFpbCB8fCAnJztcbiAgICAgICAgICByb3cuVGVtcGxhdGVOYW1lID0gcm93LnZ0ZW1wbGF0ZXMubGVuZ3RoID4gMCA/IHJvdy52dGVtcGxhdGVzWzBdLk5hbWUgOiAnJztcbiAgICAgICAgICByb3cuSWQgPSBpbmRleCArIDE7XG4gICAgICAgICAgcmV0dXJuIHJvdztcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nTGlzdCA9IG5ldyBDb3JlTWF0VGFibGUoeCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYWN0aXZlOiAnQ3JlYXRlZERhdGUnLCBkaXJlY3Rpb246ICdkZXNjJ1xuICAgICAgICAgIH0sIHthY3RpdmU6ICcnLCB2YWx1ZVN0YXJ0OiBudWxsLCB2YWx1ZUVuZDogbnVsbH0sIDE1LCB0cnVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdHJpZ2dlckNoYW5nZSgkZXZlbnQpIHtcbiAgICBpZiAoJGV2ZW50LmluZGV4ICE9PSB0aGlzLkhpZGRlbkluZGV4KSB7XG4gICAgICAgIHRoaXMuX2xvYWRpbmdfdGFibGUgPSB0cnVlO1xuXG5cbiAgICAgICAgdGhpcy5pbmRleCA9ICRldmVudC5pbmRleDtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICAgICAgICBbXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7cGFnZTogbnVsbCwgdGFiOiAkZXZlbnQuaW5kZXggKyAxfSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5IaWRkZW5JbmRleCA9ICRldmVudC5pbmRleFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRpbmdfdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxufVxuXG59XG4iXX0=