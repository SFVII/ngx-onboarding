import { EventEmitter, OnInit } from '@angular/core';
import { OnboardingService } from '../../../onboarding.service';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class OnboardingDetailComponent implements OnInit {
    private router;
    private service;
    detailView: any;
    onShowMode: EventEmitter<boolean>;
    constructor(router: Router, service: OnboardingService);
    ngOnInit(): void;
    onScroll(event: any): void;
    catNameStart(str: string): boolean;
    onEdit(): void;
    progress(completed: any, length: any): number;
    onViewTicket(CaseNumber: any): void;
    onFormatDisplayValue(value: any): any;
    static ɵfac: i0.ɵɵFactoryDef<OnboardingDetailComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OnboardingDetailComponent, "lib-onboarding-detail", never, { "detailView": "detailView"; }, { "onShowMode": "onShowMode"; }, never>;
}
