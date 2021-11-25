/**
 * Interface setting forRoot Onboarding
 */
export interface OnboardingInterface {
    endpoint: string;
    token?: string;
    auth?: boolean;
    lang?: string;
}
export interface OnboardingUser {
    userId: string;
    lang: string;
    location?: string;
    firstVisit?: any;
    [index: string]: any;
}
