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
            console.log('--------------------------', this.router.url);
            if (this.router.url === '/onboarding') {
                this.router.navigate(['onboarding/requests']);
            }
        }
    }
}
OnboardingComponent.ɵfac = function OnboardingComponent_Factory(t) { return new (t || OnboardingComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService), i0.ɵɵdirectiveInject(i2.Router)); };
OnboardingComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnboardingComponent, selectors: [["ngx-onboarding"]], decls: 1, vars: 0, template: function OnboardingComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "router-outlet");
    } }, directives: [i2.RouterOutlet], styles: [".main[_ngcontent-%COMP%]{background-color:red!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingComponent, [{
        type: Component,
        args: [{ selector: 'ngx-onboarding', template: "<router-outlet></router-outlet>", styles: [".main{background-color:red!important}\n"] }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvb25ib2FyZGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvb25ib2FyZGluZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUt4RSxhQUFhO0FBTWIsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixZQUFvQixPQUEwQixFQUFVLE1BQWM7UUFBbEQsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3RFLENBQUM7SUFDRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQztZQUNoRixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxhQUFhLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFBO2FBQzlDO1NBQ0Y7SUFFSCxDQUFDOztzRkFaVSxtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQ1hoQyxnQ0FBK0I7O3VGRFdsQixtQkFBbUI7Y0FML0IsU0FBUzsyQkFDRSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1vbmJvYXJkaW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJ29uYm9hcmRpbmcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuLi8uLi9hc3NldHMvbWFpbi5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5yb3V0ZXIudXJsLmluZGV4T2YoJ29uYm9hcmRpbmcnKSA+IC0xKSB7XHJcbiAgICAgIHRoaXMuc2VydmljZS5tYWluUGF0aCA9IHRoaXMucm91dGVyLnVybC5zcGxpdCgnL29uYm9hcmRpbmcnKVswXSArICcvb25ib2FyZGluZyc7XHJcbiAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIHRoaXMucm91dGVyLnVybCk7XHJcbiAgICAgIGlmICh0aGlzLnJvdXRlci51cmwgPT09ICcvb25ib2FyZGluZycpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ29uYm9hcmRpbmcvcmVxdWVzdHMnXSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxufVxyXG4iLCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+Il19