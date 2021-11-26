import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { OnboardingService } from './onboarding.service';
// @ts-ignore
let OnboardingComponent = class OnboardingComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
};
OnboardingComponent.ctorParameters = () => [
    { type: OnboardingService }
];
OnboardingComponent = __decorate([
    Component({
        selector: 'ngx-onboarding',
        template: "<!-- <onboarding-create-profile-template></onboarding-create-profile-template> -->\n<router-outlet></router-outlet>",
        styles: [".main{background-color:red!important}"]
    })
], OnboardingComponent);
export { OnboardingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL29uYm9hcmRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQyxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxhQUFhO0FBTWIsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFDOUIsWUFBb0IsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7SUFDOUMsQ0FBQztJQUNELFFBQVE7SUFFUixDQUFDO0NBR0YsQ0FBQTs7WUFQOEIsaUJBQWlCOztBQURuQyxtQkFBbUI7SUFML0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQiwrSEFBd0M7O0tBRXpDLENBQUM7R0FDVyxtQkFBbUIsQ0FRL0I7U0FSWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuXG4vLyBAdHMtaWdub3JlXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtb25ib2FyZGluZycsXG4gIHRlbXBsYXRlVXJsOiAnb25ib2FyZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuLi8uLi9hc3NldHMvbWFpbi5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UpIHtcbiAgfVxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cblxufVxuIl19