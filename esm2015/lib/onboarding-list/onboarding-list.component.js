import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { OnboardingService } from '../onboarding.service';
let OnboardingListComponent = class OnboardingListComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.service.getAllOnboarding();
            this.service.onboarding.subscribe((onboarding) => {
                console.log(onboarding);
                if (onboarding) {
                    this.onboardingList = onboarding;
                }
            });
        });
    }
};
OnboardingListComponent.ctorParameters = () => [
    { type: OnboardingService }
];
OnboardingListComponent = __decorate([
    Component({
        selector: 'lib-onboarding-list',
        template: "<p>onboarding-list works!</p>\n",
        styles: [""]
    })
], OnboardingListComponent);
export { OnboardingListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFPMUQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFFbEMsWUFBb0IsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7SUFBSSxDQUFDO0lBRTVDLFFBQVE7O1lBQ1osTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxFQUFDLEVBQUU7Z0JBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3hCLElBQUcsVUFBVSxFQUFDO29CQUNaLElBQUksQ0FBQyxjQUFjLEdBQUMsVUFBVSxDQUFDO2lCQUNoQztZQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUFBO0NBRUYsQ0FBQTs7WUFaNkIsaUJBQWlCOztBQUZsQyx1QkFBdUI7SUFMbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQiwyQ0FBK0M7O0tBRWhELENBQUM7R0FDVyx1QkFBdUIsQ0FjbkM7U0FkWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItb25ib2FyZGluZy1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6T25ib2FyZGluZ1NlcnZpY2UpIHsgfVxuICBvbmJvYXJkaW5nTGlzdDphbnlcbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbE9uYm9hcmRpbmcoKTtcbiAgICB0aGlzLnNlcnZpY2Uub25ib2FyZGluZy5zdWJzY3JpYmUoKG9uYm9hcmRpbmcpPT57XG4gICAgICBjb25zb2xlLmxvZyhvbmJvYXJkaW5nKTtcbiAgICAgIGlmKG9uYm9hcmRpbmcpe1xuICAgICAgICB0aGlzLm9uYm9hcmRpbmdMaXN0PW9uYm9hcmRpbmc7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59XG4iXX0=