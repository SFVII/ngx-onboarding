import { ActivatedRoute, Router } from '@angular/router';
import { displayedColumnsInterface } from "table";
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OnboardingService } from '../../onboarding.service';
import * as i0 from "@angular/core";
export declare class OnboardingListComponent implements OnInit {
    private service;
    private router;
    private route;
    private dialog;
    onboardingList: any;
    inputSearch: string;
    currentLength: number;
    currentFilter: string;
    search: string;
    onboardingFormatList: any[];
    onboardingFinished: any;
    onboardingToFinish: any;
    templates: any[];
    columnDefinitions: displayedColumnsInterface[];
    localService: any;
    _loading_table: boolean;
    private HiddenIndex;
    index: number;
    lang: string;
    cancelSearch(): void;
    constructor(service: OnboardingService, router: Router, route: ActivatedRoute, dialog: MatDialog);
    checkOnboardingPath(): string;
    ngOnInit(): Promise<void>;
    triggerChange($event: any): void;
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OnboardingListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OnboardingListComponent, "lib-onboarding-list", never, {}, {}, never, never>;
}
