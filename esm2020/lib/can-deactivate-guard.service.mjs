import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class CanDeactivateGuard {
    canDeactivate(component, route, state) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
CanDeactivateGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: CanDeactivateGuard, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CanDeactivateGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: CanDeactivateGuard });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: CanDeactivateGuard, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuLWRlYWN0aXZhdGUtZ3VhcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9jYW4tZGVhY3RpdmF0ZS1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUTNDLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsYUFBYSxDQUFDLFNBQWlDLEVBQzdDLEtBQTZCLEVBQzdCLEtBQTBCO1FBQzFCLE9BQU8sU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEUsQ0FBQzs7K0dBTFUsa0JBQWtCO21IQUFsQixrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkRlYWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbkNvbXBvbmVudERlYWN0aXZhdGUge1xyXG4gIGNhbkRlYWN0aXZhdGU6ICgpID0+IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbjtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FuRGVhY3RpdmF0ZUd1YXJkIGltcGxlbWVudHMgQ2FuRGVhY3RpdmF0ZTxDYW5Db21wb25lbnREZWFjdGl2YXRlPiB7XHJcbiAgY2FuRGVhY3RpdmF0ZShjb21wb25lbnQ6IENhbkNvbXBvbmVudERlYWN0aXZhdGUsXHJcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XHJcbiAgICByZXR1cm4gY29tcG9uZW50LmNhbkRlYWN0aXZhdGUgPyBjb21wb25lbnQuY2FuRGVhY3RpdmF0ZSgpIDogdHJ1ZTtcclxuICB9XHJcbn0gIl19