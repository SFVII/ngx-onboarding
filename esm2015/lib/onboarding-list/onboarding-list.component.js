import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../onboarding.service";
export class OnboardingListComponent {
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
}
OnboardingListComponent.ɵfac = function OnboardingListComponent_Factory(t) { return new (t || OnboardingListComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService)); };
OnboardingListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 2, vars: 0, template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "onboarding-list works!");
        i0.ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-onboarding-list',
                templateUrl: './onboarding-list.component.html',
                styleUrls: ['./onboarding-list.component.scss']
            }]
    }], function () { return [{ type: i1.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQudHMiLCJsaWIvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBUWxELE1BQU0sT0FBTyx1QkFBdUI7SUFFbEMsWUFBb0IsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7SUFBSSxDQUFDO0lBRTVDLFFBQVE7O1lBQ1osTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxFQUFDLEVBQUU7Z0JBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3hCLElBQUcsVUFBVSxFQUFDO29CQUNaLElBQUksQ0FBQyxjQUFjLEdBQUMsVUFBVSxDQUFDO2lCQUNoQztZQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUFBOzs4RkFaVSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ1JwQyx5QkFBRztRQUFBLHNDQUFzQjtRQUFBLGlCQUFJOztrRERRaEIsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1vbmJvYXJkaW5nLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTpPbmJvYXJkaW5nU2VydmljZSkgeyB9XG4gIG9uYm9hcmRpbmdMaXN0OmFueVxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsT25ib2FyZGluZygpO1xuICAgIHRoaXMuc2VydmljZS5vbmJvYXJkaW5nLnN1YnNjcmliZSgob25ib2FyZGluZyk9PntcbiAgICAgIGNvbnNvbGUubG9nKG9uYm9hcmRpbmcpO1xuICAgICAgaWYob25ib2FyZGluZyl7XG4gICAgICAgIHRoaXMub25ib2FyZGluZ0xpc3Q9b25ib2FyZGluZztcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbn1cbiIsIjxwPm9uYm9hcmRpbmctbGlzdCB3b3JrcyE8L3A+XG4iXX0=