import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component, route, state) {
        //let url: string = state.url;
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuard.ɵfac = function CanDeactivateGuard_Factory(t) { return new (t || CanDeactivateGuard)(); };
    CanDeactivateGuard.ɵprov = i0.ɵɵdefineInjectable({ token: CanDeactivateGuard, factory: CanDeactivateGuard.ɵfac });
    return CanDeactivateGuard;
}());
export { CanDeactivateGuard };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CanDeactivateGuard, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuLWRlYWN0aXZhdGUtZ3VhcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY2FuLWRlYWN0aXZhdGUtZ3VhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVEzQztJQUFBO0tBVUM7SUFSQywwQ0FBYSxHQUFiLFVBQWMsU0FBaUMsRUFDdEMsS0FBNkIsRUFDN0IsS0FBMEI7UUFFaEMsOEJBQThCO1FBRTlCLE9BQU8sU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckUsQ0FBQzt3RkFSVSxrQkFBa0I7OERBQWxCLGtCQUFrQixXQUFsQixrQkFBa0I7NkJBVC9CO0NBa0JDLEFBVkQsSUFVQztTQVRZLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENhbkRlYWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDYW5Db21wb25lbnREZWFjdGl2YXRlIHtcbiAgY2FuRGVhY3RpdmF0ZTogKCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FuRGVhY3RpdmF0ZUd1YXJkIGltcGxlbWVudHMgQ2FuRGVhY3RpdmF0ZTxDYW5Db21wb25lbnREZWFjdGl2YXRlPiB7XG4gIGNhbkRlYWN0aXZhdGUoY29tcG9uZW50OiBDYW5Db21wb25lbnREZWFjdGl2YXRlLCBcbiAgICAgICAgICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFxuICAgICAgICAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuXG4gICAgIC8vbGV0IHVybDogc3RyaW5nID0gc3RhdGUudXJsO1xuXG4gICAgIHJldHVybiBjb21wb25lbnQuY2FuRGVhY3RpdmF0ZSA/IGNvbXBvbmVudC5jYW5EZWFjdGl2YXRlKCkgOiB0cnVlO1xuICB9XG59ICJdfQ==