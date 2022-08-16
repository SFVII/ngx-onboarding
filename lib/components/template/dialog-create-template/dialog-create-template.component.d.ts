import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OnboardingService } from '../../../onboarding.service';
import * as i0 from "@angular/core";
export declare class DialogCreateTemplateComponent implements OnInit {
    private data;
    private dialogRef;
    private service;
    constructor(data: any, dialogRef: MatDialogRef<DialogCreateTemplateComponent>, service: OnboardingService);
    tags: any[];
    profil: {
        Name: string;
        Tags: string;
    };
    ngOnInit(): void;
    onSelect(type: any): void;
    createProfil(): void;
    close(): void;
    disabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogCreateTemplateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogCreateTemplateComponent, "lib-dialog-create-template", never, {}, {}, never, never>;
}
