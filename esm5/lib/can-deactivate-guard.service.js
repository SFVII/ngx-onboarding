import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component, route, state) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuLWRlYWN0aXZhdGUtZ3VhcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY2FuLWRlYWN0aXZhdGUtZ3VhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU8zQztJQUFBO0tBT0M7SUFMQywwQ0FBYSxHQUFiLFVBQWMsU0FBaUMsRUFDN0MsS0FBNkIsRUFDN0IsS0FBMEI7UUFDMUIsT0FBTyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNwRSxDQUFDO3dGQUxVLGtCQUFrQjs4REFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQjs2QkFWL0I7Q0FnQkMsQUFQRCxJQU9DO1NBTlksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkRlYWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbkNvbXBvbmVudERlYWN0aXZhdGUge1xyXG4gIGNhbkRlYWN0aXZhdGU6ICgpID0+IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbjtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FuRGVhY3RpdmF0ZUd1YXJkIGltcGxlbWVudHMgQ2FuRGVhY3RpdmF0ZTxDYW5Db21wb25lbnREZWFjdGl2YXRlPiB7XHJcbiAgY2FuRGVhY3RpdmF0ZShjb21wb25lbnQ6IENhbkNvbXBvbmVudERlYWN0aXZhdGUsXHJcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XHJcbiAgICByZXR1cm4gY29tcG9uZW50LmNhbkRlYWN0aXZhdGUgPyBjb21wb25lbnQuY2FuRGVhY3RpdmF0ZSgpIDogdHJ1ZTtcclxuICB9XHJcbn0gIl19