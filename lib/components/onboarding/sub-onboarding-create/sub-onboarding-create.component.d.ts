import { EventEmitter, OnInit } from '@angular/core';
import { CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SubOnboardingCreateComponent implements OnInit {
    field: any;
    length: any;
    locale: any;
    i: any;
    j: any;
    onAddKeywordFromInput: EventEmitter<any>;
    onKeyPress: EventEmitter<any>;
    onDrop: EventEmitter<any>;
    onAddNewField: EventEmitter<any>;
    onRemoveField: EventEmitter<any>;
    onChangeType: EventEmitter<any>;
    onRemoveKeyword: EventEmitter<any>;
    onAddNewSubLevelField: EventEmitter<any>;
    onExpendMore: EventEmitter<any>;
    onChangeLabel: EventEmitter<any>;
    onCheckedChip: EventEmitter<any>;
    onCheckValue: EventEmitter<any>;
    chipControl: FormControl;
    preferredCountries: CountryISO[];
    PhoneNumberFormat: typeof PhoneNumberFormat;
    separatorKeysCodes: number[];
    invalideValue: boolean;
    currentChip: string;
    separateDialCode: boolean;
    accounts: any[];
    prevValue: string;
    constructor();
    ngOnInit(): Promise<void>;
    drop(event: any): void;
    addKeywordFromInput(event: any, i: any, j: any): void;
    keyUp(event: any, i: any, j: any): void;
    addNewField(event: any, i: any): void;
    removeField(event: any, i: any, j: any): void;
    changeType(type: any, i: any, j: any): void;
    removeKeyword(event: any, i: any, j: any): void;
    addNewSubLevelField(e: any): void;
    expendMore(e: any, field: any): void;
    ingoreDefaultAction(e: any): void;
    changeLabel(label: any, key: any): void;
    toggleChip: (chip: any) => void;
    onEditChip(chip: any): void;
    get chips(): any;
    formatOther(other: any): any;
    checkSubForm(forms: any): boolean;
    flag(value: any): CountryISO.France | import("libphonenumber-js").CountryCode;
    checkPhone(phone: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubOnboardingCreateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SubOnboardingCreateComponent, "lib-sub-create-onboarding", never, { "field": "field"; "length": "length"; "locale": "locale"; "i": "i"; "j": "j"; }, { "onAddKeywordFromInput": "onAddKeywordFromInput"; "onKeyPress": "onKeyPress"; "onDrop": "onDrop"; "onAddNewField": "onAddNewField"; "onRemoveField": "onRemoveField"; "onChangeType": "onChangeType"; "onRemoveKeyword": "onRemoveKeyword"; "onAddNewSubLevelField": "onAddNewSubLevelField"; "onExpendMore": "onExpendMore"; "onChangeLabel": "onChangeLabel"; "onCheckedChip": "onCheckedChip"; "onCheckValue": "onCheckValue"; }, never, [".child"]>;
}
