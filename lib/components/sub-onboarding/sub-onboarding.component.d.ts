import { OnInit, EventEmitter } from '@angular/core';
export declare class SubOnboaringComponent implements OnInit {
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
    separatorKeysCodes: number[];
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
    expendMore(e: any): void;
    ingoreDefaultAction(e: any): void;
}
