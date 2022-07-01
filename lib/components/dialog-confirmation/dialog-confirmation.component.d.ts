import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class DialogConfirmation implements OnInit {
    private data;
    private dialogRef;
    message: string;
    icon: string;
    confirmText: string;
    cancelText: string;
    constructor(data: any, dialogRef: MatDialogRef<DialogConfirmation>);
    ngOnInit(): void;
    close(status: any): void;
    static ɵfac: i0.ɵɵFactoryDef<DialogConfirmation>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DialogConfirmation, "lib-dialog-confirmation", never, {}, {}, never>;
}
