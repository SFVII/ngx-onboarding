import { EventEmitter, OnInit } from '@angular/core';
import { CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SubTemplateProfileComponent implements OnInit {
    field: any;
    length: any;
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
    onCheckedDefault: EventEmitter<any>;
    onGetConditionValues: EventEmitter<any>;
    onEditBlock: EventEmitter<any>;
    conditionData: any[];
    onCheckValue: EventEmitter<any>;
    chipControl: FormControl;
    preferredCountries: CountryISO[];
    PhoneNumberFormat: typeof PhoneNumberFormat;
    separatorKeysCodes: number[];
    invalideValue: boolean;
    currentChip: string;
    separateDialCode: boolean;
    prevValue: string;
    showCondition: boolean;
    constructor();
    ngOnInit(): void;
    drop(event: any): void;
    addKeywordFromInput(event: any, i: any, j: any): void;
    keyUp(event: any, i: any, j: any): void;
    addNewField(event: any, i: any): void;
    removeField(event: any, i: any, j: any): void;
    changeType(type: any, i: any, j: any): void;
    removeKeyword(event: any, i: any, j: any): void;
    addNewSubLevelField(e: any): void;
    expendMore(e: any, field: any): void;
    getConditionValues(): void;
    ingoreDefaultAction(e: any): void;
    changeLabel(label: any, key: any): void;
    toggleChip: (chip: any) => void;
    onEditChip(chip: any): void;
    get chips(): any;
    checkedDefault(value: any): void;
    onShowCondition(event?: any): void;
    editBLock(event: any): void;
    flag(value: any): "BT" | CountryISO.France | "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW";
    checkPhone(phone: any): void;
    static ɵfac: i0.ɵɵFactoryDef<SubTemplateProfileComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SubTemplateProfileComponent, "lib-sub-category", never, { "field": "field"; "length": "length"; "i": "i"; "j": "j"; "conditionData": "conditionData"; }, { "onAddKeywordFromInput": "onAddKeywordFromInput"; "onKeyPress": "onKeyPress"; "onDrop": "onDrop"; "onAddNewField": "onAddNewField"; "onRemoveField": "onRemoveField"; "onChangeType": "onChangeType"; "onRemoveKeyword": "onRemoveKeyword"; "onAddNewSubLevelField": "onAddNewSubLevelField"; "onExpendMore": "onExpendMore"; "onChangeLabel": "onChangeLabel"; "onCheckedChip": "onCheckedChip"; "onCheckedDefault": "onCheckedDefault"; "onGetConditionValues": "onGetConditionValues"; "onEditBlock": "onEditBlock"; "onCheckValue": "onCheckValue"; }, never>;
}
