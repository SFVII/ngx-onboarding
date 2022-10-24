import { CoreMatTableInterface, FilterDateInterface, Sort } from '@nowbrains/ngx-table';
import { OnInit, SimpleChanges } from "@angular/core";
import { DateAdapter } from '@angular/material/core';
import * as i0 from "@angular/core";
export declare class CoreMatTableComponent implements OnInit {
    dateAdapter: DateAdapter<any>;
    data: any[];
    filterParamsResult: any;
    searchInput: string;
    sortInit: Sort;
    rangeInit: FilterDateInterface;
    size: number;
    filter: {};
    startPage: number;
    columnDefinitions: any[];
    mapData: () => any;
    lang: string;
    _data: CoreMatTableInterface | undefined;
    private _currentDate;
    private _currentFilter;
    constructor(dateAdapter: DateAdapter<any>);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private triggerChanges;
    apply(map: () => any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CoreMatTableComponent, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CoreMatTableComponent>;
}
