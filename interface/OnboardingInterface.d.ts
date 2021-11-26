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
    lang: string;
    token: string;
}
