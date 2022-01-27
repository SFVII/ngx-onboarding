import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class UpdateProfilComponent implements OnInit {
    private data;
    private dialogRef;
    form: FormGroup;
    tags: any;
    matIconList: any;
    isPictoListShow: boolean;
    constructor(data: any, dialogRef: MatDialogRef<UpdateProfilComponent>);
    ngOnInit(): void;
    onConfirm(): void;
    onClose(): void;
    onSelectPicto(e: any, picto: any): void;
    onShowPictoList(e: any): void;
    static ɵfac: i0.ɵɵFactoryDef<UpdateProfilComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UpdateProfilComponent, "lib-update-profil", never, {}, {}, never>;
}
