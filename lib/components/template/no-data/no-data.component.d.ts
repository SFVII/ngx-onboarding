import { EventEmitter, OnInit } from '@angular/core';
import { OnboardingService } from '../../../onboarding.service';
import * as i0 from "@angular/core";
export declare class NoDataComponent implements OnInit {
    service: OnboardingService;
    showPopup: EventEmitter<any>;
    locale: any;
    constructor(service: OnboardingService);
    ngOnInit(): void;
    onShowPopup(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NoDataComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NoDataComponent, "lib-no-data", never, {}, { "showPopup": "showPopup"; }, never, never, false>;
}
