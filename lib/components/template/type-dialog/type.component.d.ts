import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OnboardingService } from '../../../onboarding.service';
import * as i0 from "@angular/core";
export declare class TypeComponent implements OnInit {
    private data;
    private dialogRef;
    private service;
    typeList: {
        label: string;
        icon: string;
        value: string;
    }[];
    selectedType: string;
    constructor(data: any, dialogRef: MatDialogRef<TypeComponent>, service: OnboardingService);
    ngOnInit(): void;
    onSelect(type: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TypeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TypeComponent, "lib-type", never, {}, {}, never, never>;
}
