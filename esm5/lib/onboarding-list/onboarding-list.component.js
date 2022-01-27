import { __awaiter, __generator } from "tslib";
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../onboarding.service";
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
    OnboardingListComponent.ɵfac = function OnboardingListComponent_Factory(t) { return new (t || OnboardingListComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService)); };
    OnboardingListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 2, vars: 0, template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "onboarding-list works!");
            i0.ɵɵelementEnd();
        } }, styles: [""] });
    return OnboardingListComponent;
}());
export { OnboardingListComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-onboarding-list',
                templateUrl: './onboarding-list.component.html',
                styleUrls: ['./onboarding-list.component.scss']
            }]
    }], function () { return [{ type: i1.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQudHMiLCJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBR2xEO0lBT0UsaUNBQW9CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO0lBQUksQ0FBQztJQUU1QywwQ0FBUSxHQUFkOzs7Ozs0QkFDRSxxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUFyQyxTQUFxQyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQyxVQUFVOzRCQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUN4QixJQUFHLFVBQVUsRUFBQztnQ0FDWixLQUFJLENBQUMsY0FBYyxHQUFDLFVBQVUsQ0FBQzs2QkFDaEM7d0JBQ0gsQ0FBQyxDQUFDLENBQUE7Ozs7O0tBQ0g7a0dBWlUsdUJBQXVCO2dFQUF2Qix1QkFBdUI7WUNScEMseUJBQUc7WUFBQSxzQ0FBc0I7WUFBQSxpQkFBSTs7a0NEQTdCO0NBc0JDLEFBbkJELElBbUJDO1NBZFksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW9uYm9hcmRpbmctbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOk9uYm9hcmRpbmdTZXJ2aWNlKSB7IH1cbiAgb25ib2FyZGluZ0xpc3Q6YW55XG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxPbmJvYXJkaW5nKCk7XG4gICAgdGhpcy5zZXJ2aWNlLm9uYm9hcmRpbmcuc3Vic2NyaWJlKChvbmJvYXJkaW5nKT0+e1xuICAgICAgY29uc29sZS5sb2cob25ib2FyZGluZyk7XG4gICAgICBpZihvbmJvYXJkaW5nKXtcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nTGlzdD1vbmJvYXJkaW5nO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxufVxuIiwiPHA+b25ib2FyZGluZy1saXN0IHdvcmtzITwvcD5cbiJdfQ==