import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from '../onboarding.service';
export declare class ProfileListComponent implements OnInit {
    private service;
    private router;
    displayedColumns: string[];
    datas: any;
    constructor(service: OnboardingService, router: Router);
    ngOnInit(): Promise<void>;
    onAddProfil(): void;
    onDelete(id: any): Promise<void>;
    getAllProfils(): Promise<void>;
}
