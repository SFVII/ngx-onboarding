import { ModuleWithProviders } from '@angular/core';
import { OnboardingInterface } from '../interface/OnboardingInterface';
import { Routes } from '@angular/router';
export declare const onBoardingRoutes: Routes;
export declare class OnboardingModule {
    constructor(parentModule?: OnboardingModule);
    static forRoot(config: OnboardingInterface): ModuleWithProviders<OnboardingModule>;
}
