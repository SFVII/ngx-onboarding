import { FilterDateInterface, Sort } from 'ngx-table';
import { CoreMatTableComponent } from '../../../extend/coreMatTableComponent';
import { DateAdapter } from '@angular/material/core';
import * as i0 from "@angular/core";
export declare class OnboardingTableComponent extends CoreMatTableComponent {
    dateAdapter: DateAdapter<any>;
    _loading_table: any;
    lang: any;
    locale: any;
    data: any[];
    filterParamsResult: any;
    searchInput: string;
    sortInit: Sort;
    rangeInit: FilterDateInterface;
    size: number;
    filter: {};
    columnDefinitions: any;
    startPage: number;
    constructor(dateAdapter: DateAdapter<any>);
    ngOnInit(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OnboardingTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OnboardingTableComponent, "lib-onboarding-table", never, { "_loading_table": "_loading_table"; "lang": "lang"; "locale": "locale"; "data": "data"; "filterParamsResult": "filterParamsResult"; "searchInput": "searchInput"; "sortInit": "sortInit"; "rangeInit": "rangeInit"; "size": "size"; "filter": "filter"; "columnDefinitions": "columnDefinitions"; "startPage": "startPage"; }, {}, never, never, false>;
}
