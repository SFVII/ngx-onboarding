import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./onboarding.service";
import * as i2 from "@angular/router";
import * as i3 from "./pages/template-profile-create/template-profile-create.component";
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
OnboardingComponent.ɵfac = function OnboardingComponent_Factory(t) { return new (t || OnboardingComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService), i0.ɵɵdirectiveInject(i2.Router)); };
OnboardingComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnboardingComponent, selectors: [["ngx-onboarding"]], decls: 2, vars: 0, template: function OnboardingComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "router-outlet")(1, "onboarding-create-profile-template");
    } }, dependencies: [i2.RouterOutlet, i3.TemplateProfileCreateComponent], styles: [".main[_ngcontent-%COMP%]{background-color:red!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingComponent, [{
        type: Component,
        args: [{ selector: 'ngx-onboarding', template: "<router-outlet></router-outlet>\r\n<!-- TODO remove it -->\r\n<onboarding-create-profile-template></onboarding-create-profile-template>", styles: [".main{background-color:red!important}\n"] }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvb25ib2FyZGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvb25ib2FyZGluZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFLeEUsYUFBYTtBQU1iLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFBb0IsT0FBMEIsRUFBVSxNQUFjO1FBQWxELFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUN0RSxDQUFDO0lBQ0QsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUM7WUFDaEYsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxhQUFhLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFBO2FBQzlDO1NBQ0Y7SUFFSCxDQUFDOztzRkFYVSxtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQ1hoQyxnQ0FBK0IseUNBQUE7O3VGRFdsQixtQkFBbUI7Y0FML0IsU0FBUzsyQkFDRSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1vbmJvYXJkaW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJ29uYm9hcmRpbmcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuLi8uLi9hc3NldHMvbWFpbi5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5yb3V0ZXIudXJsLmluZGV4T2YoJ29uYm9hcmRpbmcnKSA+IC0xKSB7XHJcbiAgICAgIHRoaXMuc2VydmljZS5tYWluUGF0aCA9IHRoaXMucm91dGVyLnVybC5zcGxpdCgnL29uYm9hcmRpbmcnKVswXSArICcvb25ib2FyZGluZyc7XHJcbiAgICAgIGlmICh0aGlzLnJvdXRlci51cmwgPT09ICcvb25ib2FyZGluZycpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ29uYm9hcmRpbmcvcmVxdWVzdHMnXSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuIiwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48IS0tIFRPRE8gcmVtb3ZlIGl0IC0tPlxyXG48b25ib2FyZGluZy1jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZT48L29uYm9hcmRpbmctY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGU+Il19