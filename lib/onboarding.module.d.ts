import { ModuleWithProviders } from '@angular/core';
import { OnboardingInterface } from '../interface/OnboardingInterface';
export declare class OnboardingModule {
    constructor(parentModule?: OnboardingModule);
    static forRoot(config: OnboardingInterface): ModuleWithProviders<OnboardingModule>;
}
