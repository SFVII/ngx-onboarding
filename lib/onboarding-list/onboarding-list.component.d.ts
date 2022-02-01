import { OnInit } from '@angular/core';
import { OnboardingService } from '../onboarding.service';
import { displayedColumnsInterface } from "table";
import { Router, ActivatedRoute } from '@angular/router';
export declare class OnboardingListComponent implements OnInit {
    private service;
    private router;
    private route;
    onboardingList: any;
    inputSearch: string;
    search: string;
    columnDefinitions: displayedColumnsInterface[];
    localService: any;
    _loading_table: boolean;
    private HiddenIndex;
    index: number;
    lang: string;
    cancelSearch(): void;
    constructor(service: OnboardingService, router: Router, route: ActivatedRoute);
    ngOnInit(): Promise<void>;
    triggerChange($event: any): void;
}
