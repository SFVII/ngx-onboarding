import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OnboardingService } from '../../../onboarding.service';
import * as i0 from "@angular/core";
export declare class DialogCreateOnboardingComponent implements OnInit {
    private data;
    private dialogRef;
    private service;
    templates: any[];
    defaultUserForm: {
        label: string;
        key: string;
        expandOnboarding: boolean;
        defaultValue: {
            value: string;
            checked: boolean;
        }[];
        value: any;
        size: number;
        isMandatory: boolean;
        otherValue: string;
        type: string;
        editable: boolean;
        deleteable: boolean;
        subLevel: number;
        expandMore: boolean;
    }[];
    userForm: any[];
    onboarding: {
        TemplateId: number;
    };
    constructor(data: any, dialogRef: MatDialogRef<DialogCreateOnboardingComponent>, service: OnboardingService);
    ngOnInit(): Promise<void>;
    createOnboarding(): void;
    close(): void;
    disabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogCreateOnboardingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogCreateOnboardingComponent, "lib-dialog-create-onboarding", never, {}, {}, never, never>;
}
