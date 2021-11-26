import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./onboarding.service";
import * as i2 from "@angular/router";
// @ts-ignore
export class OnboardingComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
}
OnboardingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: OnboardingComponent, deps: [{ token: i1.OnboardingService }], target: i0.ɵɵFactoryTarget.Component });
OnboardingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: OnboardingComponent, selector: "ngx-onboarding", ngImport: i0, template: "<!-- <onboarding-create-profile-template></onboarding-create-profile-template> -->\n<router-outlet></router-outlet>", directives: [{ type: i2.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: OnboardingComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-onboarding',
                    templateUrl: 'onboarding.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.OnboardingService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvb25ib2FyZGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvb25ib2FyZGluZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUd4RSxhQUFhO0FBTWIsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixZQUFvQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUM5QyxDQUFDO0lBQ0QsUUFBUTtJQUVSLENBQUM7O2lIQUxVLG1CQUFtQjtxR0FBbkIsbUJBQW1CLHNEQ1RoQyxxSEFDK0I7NEZEUWxCLG1CQUFtQjtrQkFML0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixXQUFXLEVBQUUsMkJBQTJCO29CQUN4QyxNQUFNLEVBQUUsRUFBRTtpQkFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuL29uYm9hcmRpbmcuc2VydmljZSc7XG5cbi8vIEB0cy1pZ25vcmVcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1vbmJvYXJkaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICdvbmJvYXJkaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSkge1xuICB9XG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuXG59XG4iLCI8IS0tIDxvbmJvYXJkaW5nLWNyZWF0ZS1wcm9maWxlLXRlbXBsYXRlPjwvb25ib2FyZGluZy1jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZT4gLS0+XG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+Il19