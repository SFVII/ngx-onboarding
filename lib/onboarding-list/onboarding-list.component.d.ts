import { OnInit } from '@angular/core';
import { OnboardingService } from '../onboarding.service';
import * as i0 from "@angular/core";
export declare class OnboardingListComponent implements OnInit {
    private service;
    constructor(service: OnboardingService);
    onboardingList: any;
    ngOnInit(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDef<OnboardingListComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OnboardingListComponent, "lib-onboarding-list", never, {}, {}, never>;
}
