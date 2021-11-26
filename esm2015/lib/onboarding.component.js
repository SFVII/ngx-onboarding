import { Component } from '@angular/core';
import { OnboardingService } from './onboarding.service';
// @ts-ignore
export class OnboardingComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
}
OnboardingComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-onboarding',
                template: "<!-- <onboarding-create-profile-template></onboarding-create-profile-template> -->\n<router-outlet></router-outlet>"
            },] }
];
OnboardingComponent.ctorParameters = () => [
    { type: OnboardingService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvb25ib2FyZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekQsYUFBYTtBQU1iLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFBb0IsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7SUFDOUMsQ0FBQztJQUNELFFBQVE7SUFFUixDQUFDOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsK0hBQXdDO2FBRXpDOzs7WUFQUSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuXG4vLyBAdHMtaWdub3JlXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtb25ib2FyZGluZycsXG4gIHRlbXBsYXRlVXJsOiAnb25ib2FyZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UpIHtcbiAgfVxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cblxufVxuIl19