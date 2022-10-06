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
    locale: any;
    constructor(router: Router, service: OnboardingService, _bottomSheet: MatBottomSheet);
    ngOnInit(): void;
    openBottomSheet(attach: any): void;
    onScroll(event: any): void;
    catNameStart(str: string): boolean;
    onEdit(): void;
    progress(completed: any, length: any): number;
    substr(name: string): string;
    onViewTicket(Case: any): void;
    onFormatDisplayValue(value: any): {
        value: any;
        type: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<OnboardingDetailComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OnboardingDetailComponent, "lib-onboarding-detail", never, { "detailView": "detailView"; }, { "onShowMode": "onShowMode"; }, never, never, false>;
}
export declare class BottomSheet implements OnInit {
    private _bottomSheetRef;
    private service;
    attach: any;
    filename: string;
    not_found: string;
    locale: any;
    constructor(_bottomSheetRef: MatBottomSheetRef<BottomSheet>, service: OnboardingService);
    ngOnInit(): void;
    close(): void;
    onDownloadFile(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BottomSheet, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BottomSheet, "bottom-sheet", never, {}, {}, never, never, false>;
}
