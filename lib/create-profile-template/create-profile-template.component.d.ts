import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OnboardingService } from '../onboarding.service';
import { ActivatedRoute, Router } from '@angular/router';
export declare class CreateProfileTemplateComponent implements OnInit {
    private fb;
    private service;
    private route;
    private router;
    form: FormGroup;
    validCategory: boolean;
    currentProfil: any;
    tags: any[];
    id: string;
    constructor(fb: FormBuilder, service: OnboardingService, route: ActivatedRoute, router: Router);
    categories: any;
    ngOnInit(): Promise<void>;
    onAddNewCategory(e: any): void;
    onAddNewField(e: any, i: any): void;
    onRemoveField(e: any, categoryIndex: any, fieldIndex: any): void;
    onRemoveCategory(e: any, i: any): void;
    onChangeCategory(): any;
    onSubmit(): Promise<void>;
    onChangeType(type: string, indexCategory: number, indexField: any): void;
    onKeyPress(event: any, indexCategory: any, indexField: any): void;
    removeKeyword(keyword: string, indexCategory: number, indexField: any): void;
}
