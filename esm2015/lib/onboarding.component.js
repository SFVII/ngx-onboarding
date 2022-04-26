import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./onboarding.service";
import * as i2 from "@angular/router";
// @ts-ignore
export class OnboardingComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
        if (this.router.url.indexOf('onboarding') > -1) {
            this.service.mainPath = this.router.url.split('/onboarding')[0] + '/onboarding';
            console.log('--------------------------', this.service.mainPath);
        }
    }
}
OnboardingComponent.ɵfac = function OnboardingComponent_Factory(t) { return new (t || OnboardingComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService), i0.ɵɵdirectiveInject(i2.Router)); };
OnboardingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingComponent, selectors: [["ngx-onboarding"]], decls: 1, vars: 0, template: function OnboardingComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "router-outlet");
    } }, directives: [i2.RouterOutlet], styles: [".main[_ngcontent-%COMP%]{background-color:red!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnboardingComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-onboarding',
                templateUrl: 'onboarding.component.html',
                styleUrls: ['../../assets/main.scss']
            }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL29uYm9hcmRpbmcuY29tcG9uZW50LnRzIiwibGliL29uYm9hcmRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsTUFBTSxlQUFlLENBQUM7Ozs7QUFJeEUsYUFBYTtBQU1iLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFBb0IsT0FBMEIsRUFBVSxNQUFjO1FBQWxELFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUN0RSxDQUFDO0lBQ0QsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUM7WUFDaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xFO0lBRUgsQ0FBQzs7c0ZBVFUsbUJBQW1CO3dEQUFuQixtQkFBbUI7UUNWaEMsZ0NBQStCOztrRERVbEIsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4vb25ib2FyZGluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtb25ib2FyZGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICdvbmJvYXJkaW5nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi4vLi4vYXNzZXRzL21haW4uc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMucm91dGVyLnVybC5pbmRleE9mKCdvbmJvYXJkaW5nJykgPiAtMSkge1xyXG4gICAgICB0aGlzLnNlcnZpY2UubWFpblBhdGggPSB0aGlzLnJvdXRlci51cmwuc3BsaXQoJy9vbmJvYXJkaW5nJylbMF0gKyAnL29uYm9hcmRpbmcnO1xyXG4gICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB0aGlzLnNlcnZpY2UubWFpblBhdGgpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxufVxyXG4iLCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+Il19