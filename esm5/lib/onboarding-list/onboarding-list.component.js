import { __awaiter, __decorate, __generator } from "tslib";
import { Component } from '@angular/core';
import { OnboardingService } from '../onboarding.service';
import { CellsComponentList, CoreMatTable } from "table";
import { Router, ActivatedRoute } from '@angular/router';
var OnboardingListComponent = /** @class */ (function () {
    function OnboardingListComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.inputSearch = '';
        this.search = '';
        this.columnDefinitions = [
            {
                key: '_id',
                value: 'Id',
                order: 1,
                class: 'u-1'
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
    OnboardingListComponent.prototype.cancelSearch = function () {
        this.inputSearch = '';
    };
    OnboardingListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.service.getAllOnboarding()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }, 500);
                this.service.onboarding.subscribe(function (onboarding) {
                    console.log(onboarding);
                    setTimeout(function () {
                        _this._loading_table = false;
                    }, 2000);
                    if (onboarding) {
                        //this.onboardingList=onboarding;
                        var x = onboarding.map(function (row) {
                            row.ContactName = row.vcontacts[0].Name;
                            row.Email = row.vcontacts[0].Email;
                            row.TemplateName = row.vtemplates.length > 0 ? row.vtemplates[0].Name : '';
                            return row;
                        });
                        _this.onboardingList = new CoreMatTable(x, {
                            active: 'CreatedDate', direction: 'desc'
                        }, { active: '', valueStart: null, valueEnd: null }, 15, true, true);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    OnboardingListComponent.prototype.triggerChange = function ($event) {
        var _this = this;
        if ($event.index !== this.HiddenIndex) {
            this._loading_table = true;
            this.index = $event.index;
            this.router.navigate([], {
                relativeTo: this.route,
                queryParams: { page: null, tab: $event.index + 1 },
                queryParamsHandling: 'merge',
            });
            this.HiddenIndex = $event.index;
            setTimeout(function () {
                _this._loading_table = false;
            }, 2000);
        }
    };
    OnboardingListComponent.ctorParameters = function () { return [
        { type: OnboardingService },
        { type: Router },
        { type: ActivatedRoute }
    ]; };
    OnboardingListComponent = __decorate([
        Component({
            selector: 'lib-onboarding-list',
            template: "<mat-card [ngStyle]=\"_loading_table && {'overflow-y': 'hidden', 'height': '100%',\n'display': 'flex', 'position': 'absolute'}\" class=\"full-height\"\n          style=\"background: #F4F7F9 0% 0% no-repeat padding-box;\">\n    <div class=\"main-all-ticket-list\" *ngIf=\"onboardingList\">\n        <div class=\"page-title-container\">\n\n            <div class=\"page-title\">\n                Suivi des demandes\n            </div>\n\n            <div class=\"page-search\">\n                <mat-icon>search</mat-icon>\n                <input [(ngModel)]=\"inputSearch\" class=\"search-box\" placeholder=\"Recherche\"\n                       type=\"text\">\n\n                <img (click)=\"cancelSearch()\" *ngIf=\"inputSearch && inputSearch != ''\"\n                     [src]=\"'/assets/icons/search_off-24px.svg'\">\n            </div>\n        </div>\n\n        <div class=\"content-view-list-ticket\">\n            <span class=\"mat-tab-left\">\n                Vous avez actuellement\n\n                <span *ngIf=\"index == 0\" class=\"mat-tab-left-count\">\n                    {{ onboardingList?.totalElements }} ticket(s)\n                </span>\n\n                <!--<span *ngIf=\"index == 1\" class=\"mat-tab-left-count\">\n                    {{_loading_tickets_closed ? ticketClosedNb : closed?.totalElements}} ticket(s)\n                </span>-->\n            </span>\n            <mat-tab-group [@.disabled]=\"true\" class=\"list-ticket-tab\" [(selectedIndex)]=\"index\"\n                           (selectedTabChange)=\"triggerChange($event)\">\n                <mat-tab style=\"background-image: none;\">\n                    <ng-template mat-tab-label>\n                        Onboarding ({{onboardingList?.totalElements || onboardingList?.data?.length}})\n                    </ng-template>\n                    <ng-template matTabContent>\n                        <div *ngIf=\"_loading_table || !onboardingList\" class=\"bt-spinner\"></div>\n\n                        <div [ngStyle]=\"_loading_table && {'margin-bottom': '100vh'}\"></div>\n\n                        <div [class.ticket-list]=\"!_loading_table\">\n                            <ngx-design-table *ngIf=\"onboardingList\" [columnDefinitions]=\"columnDefinitions\"\n                                              [displayDetail]=\"false\"\n                                              [data]=\"onboardingList\"\n                                              [lang]=\"lang\"\n                                              [btnOverride]=\"true\"\n                                              [inputSearch]=\"inputSearch\"\n                                              [EmptyRow]=\"true\"\n                                              [displayDetail]=\"true\"\n                                              [blockDetails]=\"true\">\n                            </ngx-design-table>\n                        </div>\n                    </ng-template>\n                </mat-tab>\n                <!--<mat-tab>\n                    <ng-template mat-tab-label>\n                        Offboarding\n                        ({{_loading_tickets_closed ? ticketClosedNb : (closed?.totalElements || closed?.data?.length)}})\n                        <span *ngIf=\"_loading_tickets_closed\" class=\"three-quarters-loader\"></span>\n                    </ng-template>\n                    <ng-template matTabContent>\n                        <div *ngIf=\"_loading_table || !closed\" class=\"bt-spinner\"></div>\n\n                        <div [ngStyle]=\"_loading_table && {'margin-bottom': '100vh'}\"></div>\n\n                        <div [class.ticket-list]=\"!_loading_table\">\n                            <ngx-design-table *ngIf=\"closed\" [columnDefinitions]=\"columnDefinitionsClosed\"\n                                              [displayDetail]=\"true\"\n                                              [displayComponent]=\"\"\n                                              [data]=\"closed\"\n                                              [lang]=\"lang\"\n                                              [btnOverride]=\"true\"\n                                              [inputSearch]=\"inputSearch\"\n                                              [EmptyRow]=\"true\">\n                            </ngx-design-table>\n                        </div>\n                    </ng-template>\n                </mat-tab>-->\n            </mat-tab-group>\n        </div>\n    </div>\n</mat-card>",
            styles: ["mat-card{display:block;width:100%}md-tooltip ._md-content,md-tooltip.tt-multiline ._md-content{height:auto}table{width:100%}.element-detail .inline{display:table;width:90%}.element-detail .inline .block1{display:inline-table;float:left;width:50%;text-align:left}.element-detail .inline .block1 strong{font:bold 13px/20px nexa;letter-spacing:0;color:#171f26}.element-detail .inline .block1 p,.element-detail .inline .block1 small{font-size:13px!important;letter-spacing:0;color:#171f26}.main-all-ticket-list{display:block;grid-column-gap:0;grid-row-gap:0;max-width:1500px;margin-left:auto;margin-right:auto;width:100%;animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.main-all-ticket-list .component-title{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list .content-view-list-ticket{-ms-grid-row:2;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list .content-view-list-ticket table,app-list-preview{width:100%}::ng-deep .mat-tab-label-active{background:#b6d1cd;opacity:1!important}.col-lg-6{width:50%;vertical-align:top;display:inline-table}@-webkit-keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.three-quarters-loader:not(:required){-webkit-animation:1.25s linear infinite three-quarters-loader;animation:1.25s linear infinite three-quarters-loader;border:4px solid #4285f4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}@-webkit-keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left{color:#171f26;font:18px/20px \"Nexa Text\";letter-spacing:0;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count{color:#171f26;font:17px/20px \"Nexa Text Bold\";letter-spacing:0;text-align:left}.page-title-container{display:flex;margin-right:48px}.page-title{text-align:left;font:bold 32px/30px \"Nexa Text Bold\";letter-spacing:0;color:#171f26;margin-left:2em;margin-top:-8px}.page-search{margin-left:auto;position:relative;width:400px}.page-search mat-icon{left:18%;margin-top:10px;position:absolute}.page-search img{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab{padding-left:48px;padding-right:48px}.detail-view-ticket{float:right;margin-right:20px;margin-top:-30px}@media (min-width:1800px){.page-search mat-icon{left:16%}}.ticket-list{animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.bt-spinner{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03a9f4;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin;position:relative;left:50%;top:25vh}@-webkit-keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active,.site-view-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active{background-image:none!important;color:#171f26!important}"]
        })
    ], OnboardingListComponent);
    return OnboardingListComponent;
}());
export { OnboardingListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFlBQVksRUFBaUUsTUFBTSxPQUFPLENBQUM7QUFDdkgsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVF6RDtJQTZDRSxpQ0FDVSxPQUF5QixFQUN6QixNQUFjLEVBQ2QsS0FBcUI7UUFGckIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBOUMvQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNWLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsc0JBQWlCLEdBQWdDO1lBQ3REO2dCQUNFLEdBQUcsRUFBRSxLQUFLO2dCQUNWLEtBQUssRUFBRSxJQUFJO2dCQUNYLEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRDtnQkFDSSxHQUFHLEVBQUUsV0FBVztnQkFDaEIsS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osTUFBTSxFQUFFLGtCQUFrQixDQUFDLFVBQVU7Z0JBQ3JDLElBQUksRUFBRSxJQUFJO2FBQ2I7WUFDRDtnQkFDSSxHQUFHLEVBQUUsYUFBYTtnQkFDbEIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxLQUFLO2dC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LEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNaO0lBQ0wsQ0FBQzs7Z0JBakRtQixpQkFBaUI7Z0JBQ2pCLE1BQU07Z0JBQ1AsY0FBYzs7SUFoRHBCLHVCQUF1QjtRQUxuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLHk0SUFBK0M7O1NBRWhELENBQUM7T0FDVyx1QkFBdUIsQ0FpR25DO0lBQUQsOEJBQUM7Q0FBQSxBQWpHRCxJQWlHQztTQWpHWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHtDZWxsc0NvbXBvbmVudExpc3QsIENvcmVNYXRUYWJsZSwgQ29yZU1hdFRhYmxlSW50ZXJmYWNlLCBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlLCBUYWJsZVNlcnZpY2V9IGZyb20gXCJ0YWJsZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW9uYm9hcmRpbmctbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG9uYm9hcmRpbmdMaXN0OiBhbnlcbiAgaW5wdXRTZWFyY2ggPSAnJztcbiAgcHVibGljIHNlYXJjaDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBjb2x1bW5EZWZpbml0aW9uczogZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZVtdID0gW1xuICAgIHtcbiAgICAgIGtleTogJ19pZCcsXG4gICAgICB2YWx1ZTogJ0lkJyxcbiAgICAgIG9yZGVyOiAxLFxuICAgICAgY2xhc3M6ICd1LTEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGtleTogJ2NyZWF0ZWRBdCcsXG4gICAgICAgIHZhbHVlOiAnRGF0ZSBkZSBjcsOpYXRpb24nLFxuICAgICAgICBvcmRlcjogMixcbiAgICAgICAgY2xhc3M6ICd1LTInLFxuICAgICAgICBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5EYXRlRm9ybWF0LFxuICAgICAgICBzb3J0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGtleTogJ0NvbnRhY3ROYW1lJyxcbiAgICAgICAgdmFsdWU6ICdDb250YWN0JyxcbiAgICAgICAgb3JkZXI6IDMsXG4gICAgICAgIGNsYXNzOiAndS0yJyxcbiAgICAgICAgc29ydDogdHJ1ZSxcbiAgICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuTmFtZUF2YXRhcixcbiAgICAgICAgb3ZlcnJpZGU6IFsnQ29udGFjdE5hbWUnLCAnRW1haWwnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJ1RlbXBsYXRlTmFtZScsXG4gICAgICB2YWx1ZTogJ1RlbXBsYXRlJyxcbiAgICAgIG9yZGVyOiA0LFxuICAgICAgY2xhc3M6ICd1LTInXG4gICAgfVxuICBdO1xuICBsb2NhbFNlcnZpY2U6IGFueTtcbiAgcHVibGljIF9sb2FkaW5nX3RhYmxlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBIaWRkZW5JbmRleCA9IDA7XG4gIHB1YmxpYyBpbmRleCA9IDA7XG4gIGxhbmcgPSAnZnInO1xuXG4gIGNhbmNlbFNlYXJjaCgpIHtcbiAgICB0aGlzLmlucHV0U2VhcmNoID0gJyc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNlcnZpY2U6T25ib2FyZGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgKSB7IH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxPbmJvYXJkaW5nKCk7XG4gICAgfSwgNTAwKTtcbiAgICB0aGlzLnNlcnZpY2Uub25ib2FyZGluZy5zdWJzY3JpYmUoKG9uYm9hcmRpbmcpPT57XG4gICAgICBjb25zb2xlLmxvZyhvbmJvYXJkaW5nKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XG4gICAgICB9LCAyMDAwKTtcblxuICAgICAgaWYob25ib2FyZGluZyl7XG4gICAgICAgIC8vdGhpcy5vbmJvYXJkaW5nTGlzdD1vbmJvYXJkaW5nO1xuICAgICAgICBsZXQgeCA9IG9uYm9hcmRpbmcubWFwKChyb3cpID0+IHtcbiAgICAgICAgICByb3cuQ29udGFjdE5hbWUgPSByb3cudmNvbnRhY3RzWzBdLk5hbWU7XG4gICAgICAgICAgcm93LkVtYWlsID0gcm93LnZjb250YWN0c1swXS5FbWFpbDtcbiAgICAgICAgICByb3cuVGVtcGxhdGVOYW1lID0gcm93LnZ0ZW1wbGF0ZXMubGVuZ3RoID4gMCA/IHJvdy52dGVtcGxhdGVzWzBdLk5hbWUgOiAnJztcbiAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLm9uYm9hcmRpbmdMaXN0ID0gbmV3IENvcmVNYXRUYWJsZSh4LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhY3RpdmU6ICdDcmVhdGVkRGF0ZScsIGRpcmVjdGlvbjogJ2Rlc2MnXG4gICAgICAgICAgfSwge2FjdGl2ZTogJycsIHZhbHVlU3RhcnQ6IG51bGwsIHZhbHVlRW5kOiBudWxsfSwgMTUsIHRydWUsIHRydWUpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB0cmlnZ2VyQ2hhbmdlKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQuaW5kZXggIT09IHRoaXMuSGlkZGVuSW5kZXgpIHtcbiAgICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IHRydWU7XG5cblxuICAgICAgICB0aGlzLmluZGV4ID0gJGV2ZW50LmluZGV4O1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcbiAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtwYWdlOiBudWxsLCB0YWI6ICRldmVudC5pbmRleCArIDF9LFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLkhpZGRlbkluZGV4ID0gJGV2ZW50LmluZGV4XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IGZhbHNlO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG59XG5cbn1cbiJdfQ==