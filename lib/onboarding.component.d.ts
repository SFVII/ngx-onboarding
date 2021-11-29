import { OnInit } from '@angular/core';
import { OnboardingService } from './onboarding.service';
import { Router } from '@angular/router';
export declare class OnboardingComponent implements OnInit {
    private service;
    private router;
    constructor(service: OnboardingService, router: Router);
    ngOnInit(): void;
}
