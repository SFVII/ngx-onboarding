import { EventEmitter, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { OnboardingService } from '../../../onboarding.service';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class OnboardingDetailComponent implements OnInit {
    private router;
    private service;
    private _bottomSheet;
    detailView: any;
    onShowMode: EventEmitter<boolean>;
    constructor(router: Router, service: OnboardingService, _bottomSheet: MatBottomSheet);
    ngOnInit(): void;
    openBottomSheet(Attachement: any): void;
    onScroll(event: any): void;
    catNameStart(str: string): boolean;
    onEdit(): void;
    progress(completed: any, length: any): number;
    onViewTicket(CaseNumber: any): void;
    onFormatDisplayValue(value: any): {
        value: any;
        type: string;
    };
    static ɵfac: i0.ɵɵFactoryDef<OnboardingDetailComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OnboardingDetailComponent, "lib-onboarding-detail", never, { "detailView": "detailView"; }, { "onShowMode": "onShowMode"; }, never>;
}
export declare class BottomSheet implements OnInit {
    private _bottomSheetRef;
    private service;
    constructor(_bottomSheetRef: MatBottomSheetRef<BottomSheet>, service: OnboardingService);
    attach: any;
    filename: string;
    ngOnInit(): void;
    close(): void;
    onDownloadFile(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDef<BottomSheet>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BottomSheet, "bottom-sheet", never, {}, {}, never>;
}
