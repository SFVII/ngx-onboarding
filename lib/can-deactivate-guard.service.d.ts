import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
export declare class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDef<CanDeactivateGuard>;
    static ɵprov: i0.ɵɵInjectableDef<CanDeactivateGuard>;
}
