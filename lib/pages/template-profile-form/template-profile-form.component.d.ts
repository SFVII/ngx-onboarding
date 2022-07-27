import { CdkDrag, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TemplateProfileFormComponent implements OnInit {
    listGroup: CdkDropListGroup<CdkDropList>;
    placeholder: CdkDropList;
    defaultCategorie: Array<any>;
    target: CdkDropList;
    targetIndex: number;
    source: any;
    sourceIndex: number;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    drop(): void;
    enter: (drag: CdkDrag<any>, drop: CdkDropList<any>) => boolean;
    static ɵfac: i0.ɵɵFactoryDef<TemplateProfileFormComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TemplateProfileFormComponent, "lib-template-profile-form", never, {}, {}, never>;
}
