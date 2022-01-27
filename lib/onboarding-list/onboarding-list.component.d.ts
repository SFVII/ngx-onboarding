import { OnInit } from '@angular/core';
import { OnboardingService } from '../onboarding.service';
export declare class OnboardingListComponent implements OnInit {
    private service;
    constructor(service: OnboardingService);
    onboardingList: any;
    ngOnInit(): Promise<void>;
}
