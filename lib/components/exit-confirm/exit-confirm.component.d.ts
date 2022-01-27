import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OnboardingService } from '../../onboarding.service';
export declare class ExitConfirmComponent implements OnInit {
    private data;
    private dialogRef;
    private service;
    constructor(data: any, dialogRef: MatDialogRef<ExitConfirmComponent>, service: OnboardingService);
    ngOnInit(): void;
    confirm(): void;
    cancel(): void;
}
