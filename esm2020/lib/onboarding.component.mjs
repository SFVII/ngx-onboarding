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
            if (this.router.url === '/onboarding') {
                this.router.navigate(['onboarding/requests']);
            }
        }
    }
}
OnboardingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingComponent, deps: [{ token: i1.OnboardingService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
OnboardingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: OnboardingComponent, selector: "ngx-onboarding", ngImport: i0, template: "<router-outlet></router-outlet>", styles: [".main{background-color:red!important}\n"], dependencies: [{ kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-onboarding', template: "<router-outlet></router-outlet>", styles: [".main{background-color:red!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.OnboardingService }, { type: i2.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvb25ib2FyZGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvb25ib2FyZGluZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUt4RSxhQUFhO0FBTWIsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixZQUFvQixPQUEwQixFQUFVLE1BQWM7UUFBbEQsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3RFLENBQUM7SUFDRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQztZQUNoRixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLGFBQWEsRUFBRTtnQkFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7YUFDOUM7U0FDRjtJQUVILENBQUM7O2dIQVhVLG1CQUFtQjtvR0FBbkIsbUJBQW1CLHNEQ1hoQyxpQ0FBK0I7MkZEV2xCLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1vbmJvYXJkaW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJ29uYm9hcmRpbmcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuLi8uLi9hc3NldHMvbWFpbi5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5yb3V0ZXIudXJsLmluZGV4T2YoJ29uYm9hcmRpbmcnKSA+IC0xKSB7XHJcbiAgICAgIHRoaXMuc2VydmljZS5tYWluUGF0aCA9IHRoaXMucm91dGVyLnVybC5zcGxpdCgnL29uYm9hcmRpbmcnKVswXSArICcvb25ib2FyZGluZyc7XHJcbiAgICAgIGlmICh0aGlzLnJvdXRlci51cmwgPT09ICcvb25ib2FyZGluZycpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ29uYm9hcmRpbmcvcmVxdWVzdHMnXSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuIiwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PiJdfQ==