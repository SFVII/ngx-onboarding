import { __awaiter, __decorate, __generator } from "tslib";
import { Component } from '@angular/core';
import { OnboardingService } from '../onboarding.service';
var OnboardingListComponent = /** @class */ (function () {
    function OnboardingListComponent(service) {
        this.service = service;
    }
    OnboardingListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getAllOnboarding()];
                    case 1:
                        _a.sent();
                        this.service.onboarding.subscribe(function (onboarding) {
                            console.log(onboarding);
                            if (onboarding) {
                                _this.onboardingList = onboarding;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OnboardingListComponent.ctorParameters = function () { return [
        { type: OnboardingService }
    ]; };
    OnboardingListComponent = __decorate([
        Component({
            selector: 'lib-onboarding-list',
            template: "<p>onboarding-list works!</p>\n",
            styles: [""]
        })
    ], OnboardingListComponent);
    return OnboardingListComponent;
}());
export { OnboardingListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFPMUQ7SUFFRSxpQ0FBb0IsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7SUFBSSxDQUFDO0lBRTVDLDBDQUFRLEdBQWQ7Ozs7OzRCQUNFLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7d0JBQXJDLFNBQXFDLENBQUM7d0JBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFDLFVBQVU7NEJBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7NEJBQ3hCLElBQUcsVUFBVSxFQUFDO2dDQUNaLEtBQUksQ0FBQyxjQUFjLEdBQUMsVUFBVSxDQUFDOzZCQUNoQzt3QkFDSCxDQUFDLENBQUMsQ0FBQTs7Ozs7S0FDSDs7Z0JBVjJCLGlCQUFpQjs7SUFGbEMsdUJBQXVCO1FBTG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsMkNBQStDOztTQUVoRCxDQUFDO09BQ1csdUJBQXVCLENBY25DO0lBQUQsOEJBQUM7Q0FBQSxBQWRELElBY0M7U0FkWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItb25ib2FyZGluZy1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6T25ib2FyZGluZ1NlcnZpY2UpIHsgfVxuICBvbmJvYXJkaW5nTGlzdDphbnlcbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbE9uYm9hcmRpbmcoKTtcbiAgICB0aGlzLnNlcnZpY2Uub25ib2FyZGluZy5zdWJzY3JpYmUoKG9uYm9hcmRpbmcpPT57XG4gICAgICBjb25zb2xlLmxvZyhvbmJvYXJkaW5nKTtcbiAgICAgIGlmKG9uYm9hcmRpbmcpe1xuICAgICAgICB0aGlzLm9uYm9hcmRpbmdMaXN0PW9uYm9hcmRpbmc7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59XG4iXX0=