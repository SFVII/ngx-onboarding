import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OnboardingService } from '../../onboarding.service';
import * as i0 from "@angular/core";
export declare class ExitConfirmComponent implements OnInit {
    private data;
    private dialogRef;
    private service;
    constructor(data: any, dialogRef: MatDialogRef<ExitConfirmComponent>, service: OnboardingService);
    ngOnInit(): void;
    confirm(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDef<ExitConfirmComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ExitConfirmComponent, "lib-exit-confirm", never, {}, {}, never>;
}
