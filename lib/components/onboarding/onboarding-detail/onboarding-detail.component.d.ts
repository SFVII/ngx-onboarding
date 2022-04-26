import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class OnboardingDetailComponent implements OnInit {
    detailView: any;
    onShowMode: EventEmitter<boolean>;
    constructor();
    ngOnInit(): void;
    onScroll(event: any): void;
    catNameStart(str: string): boolean;
    onEdit(): void;
    progress(completed: any, length: any): number;
    static ɵfac: i0.ɵɵFactoryDef<OnboardingDetailComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OnboardingDetailComponent, "lib-onboarding-detail", never, { "detailView": "detailView"; }, { "onShowMode": "onShowMode"; }, never>;
}
