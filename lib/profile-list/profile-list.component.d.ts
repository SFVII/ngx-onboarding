import { OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OnboardingService } from '../onboarding.service';
import * as i0 from "@angular/core";
export declare class ProfileListComponent implements OnInit {
    private service;
    private router;
    displayedColumns: string[];
    datas: any;
    dataSource: MatTableDataSource<any>;
    paginator: MatPaginator;
    sort: MatSort;
    constructor(service: OnboardingService, router: Router);
    ngOnInit(): Promise<void>;
    onAddProfil(): void;
    onDelete(id: any): Promise<void>;
    getAllProfils(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDef<ProfileListComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ProfileListComponent, "onboarding-profile-list", never, {}, {}, never>;
}
