import { OnInit } from '@angular/core';
import { OnboardingService } from './onboarding.service';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class OnboardingComponent implements OnInit {
    private service;
    private router;
    constructor(service: OnboardingService, router: Router);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OnboardingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OnboardingComponent, "ngx-onboarding", never, {}, {}, never, never, false>;
}
