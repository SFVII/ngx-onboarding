import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OnboardingService } from '../../../onboarding.service';
import * as i0 from "@angular/core";
export declare class DialogCreateOnboardingComponent implements OnInit {
    private data;
    private dialogRef;
    private service;
    templates: any[];
    onboarding: {
        TemplateId: number;
    };
    constructor(data: any, dialogRef: MatDialogRef<DialogCreateOnboardingComponent>, service: OnboardingService);
    ngOnInit(): void;
    createOnboarding(): void;
    close(): void;
    disabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<DialogCreateOnboardingComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DialogCreateOnboardingComponent, "lib-dialog-create-onboarding", never, {}, {}, never>;
}
