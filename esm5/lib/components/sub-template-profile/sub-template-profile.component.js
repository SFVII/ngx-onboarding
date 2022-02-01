import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
var SubTemplateProfileComponent = /** @class */ (function () {
    function SubTemplateProfileComponent() {
        var _this = this;
        this.onAddKeywordFromInput = new EventEmitter();
        this.onKeyPress = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onAddNewField = new EventEmitter();
        this.onRemoveField = new EventEmitter();
        this.onChangeType = new EventEmitter();
        this.onRemoveKeyword = new EventEmitter();
        this.onAddNewSubLevelField = new EventEmitter();
        this.onExpendMore = new EventEmitter();
        this.onChangeLabel = new EventEmitter();
        this.onCheckedChip = new EventEmitter();
        this.onCheckedDefault = new EventEmitter();
        this.onGetConditionValues = new EventEmitter();
        this.conditionData = [];
        this.chipControl = new FormControl(new Set());
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentChip = "";
        this.prevValue = "";
        this.showCondition = false;
        this.toggleChip = function (chip) {
            _this.onCheckedChip.emit(chip);
        };
    }
    SubTemplateProfileComponent.prototype.ngOnInit = function () {
    };
    SubTemplateProfileComponent.prototype.drop = function (event) {
        this.onDrop.emit(event);
    };
    SubTemplateProfileComponent.prototype.addKeywordFromInput = function (event, i, j) {
        this.onAddKeywordFromInput.emit({ event: event, prev: this.prevValue, i: i, j: j });
    };
    SubTemplateProfileComponent.prototype.keyUp = function (event, i, j) {
        this.onKeyPress.emit({ event: event, i: i, j: j });
    };
    SubTemplateProfileComponent.prototype.addNewField = function (event, i) {
        event.preventDefault();
        this.onAddNewField.emit({ event: event, i: i });
    };
    SubTemplateProfileComponent.prototype.removeField = function (event, i, j) {
        event.preventDefault();
        this.onRemoveField.emit({ i: i, j: j });
    };
    SubTemplateProfileComponent.prototype.changeType = function (type, i, j) {
        this.onChangeType.emit({ type: type, i: i, j: j });
    };
    SubTemplateProfileComponent.prototype.removeKeyword = function (event, i, j) {
        this.onRemoveKeyword.emit({ event: event, i: i, j: j });
    };
    SubTemplateProfileComponent.prototype.addNewSubLevelField = function (e) {
        e.preventDefault();
        this.onAddNewSubLevelField.emit(true);
    };
    SubTemplateProfileComponent.prototype.expendMore = function (e, field) {
        e.preventDefault();
        this.onExpendMore.emit({ expand: true, field: field });
    };
    SubTemplateProfileComponent.prototype.getConditionValues = function () {
        this.onGetConditionValues.emit(true);
    };
    SubTemplateProfileComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    SubTemplateProfileComponent.prototype.changeLabel = function (label, key) {
        this.onChangeLabel.emit({ label: label, key: key });
    };
    SubTemplateProfileComponent.prototype.onEditChip = function (chip) {
        if (chip.value === this.currentChip) {
            this.currentChip = "";
            this.prevValue = "";
        }
        else {
            this.currentChip = chip.value;
            this.prevValue = chip.value;
        }
    };
    Object.defineProperty(SubTemplateProfileComponent.prototype, "chips", {
        get: function () { return this.chipControl.value; },
        enumerable: true,
        configurable: true
    });
    SubTemplateProfileComponent.prototype.checkedDefault = function (value) {
        this.onCheckedDefault.emit(value);
    };
    SubTemplateProfileComponent.prototype.onShowCondition = function (event) {
        if (event === void 0) { event = null; }
        if (event) {
            event.preventDefault();
        }
        this.showCondition = !this.showCondition;
    };
    __decorate([
        Input()
    ], SubTemplateProfileComponent.prototype, "field", void 0);
    __decorate([
        Input()
    ], SubTemplateProfileComponent.prototype, "length", void 0);
    __decorate([
        Input()
    ], SubTemplateProfileComponent.prototype, "i", void 0);
    __decorate([
        Input()
    ], SubTemplateProfileComponent.prototype, "j", void 0);
    __decorate([
        Output()
    ], SubTemplateProfileComponent.prototype, "onAddKeywordFromInput", void 0);
    __decorate([
        Output()
    ], SubTemplateProfileComponent.prototype, "onKeyPress", void 0);
    __decorate([
        Output()
    ], SubTemplateProfileComponent.prototype, "onDrop", void 0);
    __decorate([
        Output()
    ], SubTemplateProfileComponent.prototype, "onAddNewField", void 0);
    __decorate([
        Output()
    ], SubTemplateProfileComponent.prototype, "onRemoveField", void 0);
    __decorate([
        Output()
    ], SubTemplateProfileComponent.prototype, "onChangeType", void 0);
    __decorate([
        Output()
    ], SubTemplateProfileComponent.prototype, "onRemoveKeyword", void 0);
    __decorate([
        Output()
    ], SubTemplateProfileComponent.prototype, "onAddNewSubLevelField", void 0);
    __decorate([
        Output()
    ], SubTemplateProfileComponent.prototype, "onExpendMore", void 0);
    __decorate([
        Output()
    ], SubTemplateProfileComponent.prototype, "onChangeLabel", void 0);
    __decorate([
        Output()
    ], SubTemplateProfileComponent.prototype, "onCheckedChip", void 0);
    __decorate([
        Output()
    ], SubTemplateProfileComponent.prototype, "onCheckedDefault", void 0);
    __decorate([
        Output()
    ], SubTemplateProfileComponent.prototype, "onGetConditionValues", void 0);
    __decorate([
        Input()
    ], SubTemplateProfileComponent.prototype, "conditionData", void 0);
    SubTemplateProfileComponent = __decorate([
        Component({
            selector: 'lib-sub-category',
            template: "<div class=\"field-item\">\n    <mat-form-field class=\"form-field field-size\" [class]=\"!field.editable ? 'readonly' :'' \" appearance=\"outline\">\n        <mat-label>Label</mat-label>\n        <input type=\"text\" [readonly]=\"!field.editable\" matInput required [ngModelOptions]=\"{standalone: true}\"\n            [(ngModel)]=\"field.label\" placeholder=\"\" (ngModelChange)=\"changeLabel(field.label, field.key)\" />\n    </mat-form-field>\n\n    <mat-form-field style=\"display: none;\" class=\"form-field field-size\" [class]=\"!field.editable ? 'readonly' :'' \"\n        appearance=\"outline\">\n        <mat-label>Cl\u00E9 du champ</mat-label>\n        <input type=\"text\" [readonly]=\"!field.editable\" matInput required [ngModelOptions]=\"{standalone: true}\"\n            [(ngModel)]=\"field.key\" placeholder=\"\" />\n    </mat-form-field>\n\n    <mat-form-field class=\"form-field field-size\" appearance=\"outline\">\n        <mat-label>Type</mat-label>\n        <mat-select [disabled]=\"!field.editable\" [(ngModel)]=\"field.type\" required [ngModelOptions]=\"{standalone: true}\"\n            (ngModelChange)=\"changeType(field.type,i,j)\">\n            <mat-option value=\"text\">Text(80)</mat-option>\n            <mat-option value=\"textarea\">Text(80+)</mat-option>\n            <mat-option value=\"radio\">Radio</mat-option>\n            <mat-option value=\"select\">Selecteur</mat-option>\n            <mat-option value=\"checkbox\">Checkbox</mat-option>\n            <mat-option value=\"checkbox_multiple\">Checkbox multiple</mat-option>\n            <mat-option value=\"email\">Email</mat-option>\n            <mat-option value=\"password\">Password</mat-option>\n            <mat-option value=\"date\">Date</mat-option>\n            <mat-option value=\"tel\">Phone</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <ng-container [ngSwitch]=\"field.type\">\n        <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto w-30 field-size\">\n            <mat-checkbox class=\"form-field\" [(ngModel)]=\"field.expandOnboarding\" [ngModelOptions]=\"{standalone: true}\">\n                Coch\u00E9 par\n                default\n            </mat-checkbox>\n        </div>\n        <mat-form-field\n            *ngSwitchCase=\"['select', 'radio','checkbox_multiple'].includes(field.type) ? field.type : !field.type\"\n            class=\"flex-auto w-30 field-size\" appearance=\"outline\">\n            <mat-label> Valeur par default </mat-label>\n            <mat-chip-list #childList=\"cdkDropList\" [cdkDropListData]=\"field.defaultValue\" cdkDropList\n                (cdkDropListDropped)=\"drop($event)\" #chipList aria-label=\"Video keywords; let index=index\" multiple\n                selectable>\n                <mat-chip style=\"min-height: 25px;\" *ngFor=\"let option of field.defaultValue\"\n                    [selected]=\"option.checked\" [value]=\"option.value\" [removable]=\"true\"\n                    (dblclick)=\"toggleChip(option)\" (click)=\"onEditChip(option)\" (removed)=\"removeKeyword(option, i,j)\"\n                    cdkDrag>\n                    {{option.value}}\n                    <mat-icon matChipRemove>cancel</mat-icon>\n                </mat-chip>\n                <input #chipsInput placeholder=\"add...\" [matChipInputFor]=\"chipList\" [matChipInputAddOnBlur]=\"true\"\n                    (matChipInputTokenEnd)=\"addKeywordFromInput($event, i,j)\"\n                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" (keyup)=\"keyUp($event,i,j)\"\n                    [(ngModel)]=\"currentChip\">\n            </mat-chip-list>\n        </mat-form-field>\n        <mat-form-field *ngSwitchCase=\"'textarea'\" class=\"form-field field-size\" appearance=\"outline\">\n            <mat-label>Valeur par default</mat-label>\n            <input type=\"text\" matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.defaultValue\"\n                placeholder=\"Description...\">\n        </mat-form-field>\n\n        <mat-form-field *ngSwitchDefault class=\"form-field field-size\" [style.opacity]=\"field.type!=='tel' ? 1 :0\"\n            appearance=\"outline\">\n            <mat-label>Valeur par default</mat-label>\n            <input [type]=\"field.type\" [disabled]=\"field.type==='tel'\" matInput [ngModelOptions]=\"{standalone: true}\"\n                [(ngModel)]=\"field.defaultValue\" placeholder=\"\">\n        </mat-form-field>\n    </ng-container>\n\n    <div class=\"checkbox-condition\">\n        <mat-checkbox *ngIf=\"field.editable\" class=\"form-field\" [(ngModel)]=\"field.isConditional\"\n            [ngModelOptions]=\"{standalone: true}\" (ngModelChange)='getConditionValues()'>\n            \u00E0 condition\n        </mat-checkbox>\n        <div class=\"condition-container\" *ngIf=\"showCondition\">\n            <mat-form-field class=\"form-field field-size full-width\" appearance=\"outline\">\n                <mat-label>Champ de condition :</mat-label>\n                <mat-select [(ngModel)]=\"field.conditionLocation\" required [ngModelOptions]=\"{standalone: true}\">\n                    <mat-option *ngFor=\"let cond of conditionData\" [value]=\"cond\">{{cond.label}}</mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n                [(ngModel)]=\"field.conditionValue\">\n                <mat-radio-button class=\"example-radio-button\"\n                    *ngFor=\"let item of field.conditionLocation.possibleValues\" [value]=\"item.value\">\n                    {{item.value}}\n                </mat-radio-button>\n            </mat-radio-group>\n            <button mat-button color=\"primary\" (click)='onShowCondition($event)'>\n                <mat-icon>close</mat-icon>Fermer\n            </button>\n        </div>\n    </div>\n\n    <mat-icon (click)='onShowCondition()' class=\"condition-help\" *ngIf=\"field.isConditional\"\n        matTooltip=\"Param\u00E8trer la condition ici !\">help\n    </mat-icon>\n    <mat-checkbox class=\"form-field\" [(ngModel)]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\">\n        obligatoire\n    </mat-checkbox>\n    <button class=\"transparent-button\" [disabled]=\"field.subLevel>2 || !field.editable\"\n        [style.opacity]=\"(field.subLevel>2 || !field.editable) ? 0 :1\" mat-mini-fab color=\"success\"\n        (click)='addNewSubLevelField($event)' matTooltip=\"Ajouter une sous-cat\u00E9gorie\">\n        <mat-icon>device_hub</mat-icon>\n    </button>\n\n    <button class=\"expand-button\" [disabled]=\"!(field.forms && field.forms.length>0)\"\n        [style.opacity]=\"field.forms && field.forms.length>0 ? 1 :0\" mat-mini-fab color=\"primary\"\n        (click)=\"expendMore($event,field)\">\n        <mat-icon *ngIf=\"!field.expandMore\">expand_less</mat-icon>\n        <mat-icon *ngIf=\"field.expandMore\">expand_more</mat-icon>\n    </button>\n</div>\n\n<!-- <div class=\"add-button-container\" *ngIf=\"length-1===j\">\n    <button style=\"margin:10px auto\" [disabled]=\"length-1!==j\" [style.opacity]=\"length-1===j ? 1 :0\" mat-raised-button\n        color=\"primary\" (click)='addNewField($event,i)'>\n        <mat-icon>add_box</mat-icon>\n        <span>Ajouter un champ</span>\n    </button>\n</div> -->\n\n<ng-content select=\".child\"></ng-content>",
            styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap}.field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.field-action{width:10%}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}::ng-deep .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button .material-icons{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition{position:relative}.checkbox-condition .condition-container{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition .condition-container button{position:absolute;bottom:5px;left:0}.condition-help{cursor:pointer}.cdk-overlay-pane{width:100%}"]
        })
    ], SubTemplateProfileComponent);
    return SubTemplateProfileComponent;
}());
export { SubTemplateProfileComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPN0M7SUEwQkU7UUFBQSxpQkFBaUI7UUFyQlAsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUMvQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUNwQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUNoQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDdkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ3ZDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUN0QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDekMsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUMvQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDdEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ3ZDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUN2QyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQzFDLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDL0Msa0JBQWEsR0FBQyxFQUFF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UUFBVCxNQUFNLEVBQUU7bUVBQXFDO0lBQ3BDO1FBQVQsTUFBTSxFQUFFOytEQUFpQztJQUNoQztRQUFULE1BQU0sRUFBRTtzRUFBd0M7SUFDdkM7UUFBVCxNQUFNLEVBQUU7c0VBQXdDO0lBQ3ZDO1FBQVQsTUFBTSxFQUFFO3FFQUF1QztJQUN0QztRQUFULE1BQU0sRUFBRTt3RUFBMEM7SUFDekM7UUFBVCxNQUFNLEVBQUU7OEVBQWdEO0lBQy9DO1FBQVQsTUFBTSxFQUFFO3FFQUF1QztJQUN0QztRQUFULE1BQU0sRUFBRTtzRUFBd0M7SUFDdkM7UUFBVCxNQUFNLEVBQUU7c0VBQXdDO0lBQ3ZDO1FBQVQsTUFBTSxFQUFFO3lFQUEyQztJQUMxQztRQUFULE1BQU0sRUFBRTs2RUFBK0M7SUFDL0M7UUFBUixLQUFLLEVBQUU7c0VBQWlCO0lBbEJkLDJCQUEyQjtRQUx2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLGd2T0FBb0Q7O1NBRXJELENBQUM7T0FDVywyQkFBMkIsQ0ErR3ZDO0lBQUQsa0NBQUM7Q0FBQSxBQS9HRCxJQStHQztTQS9HWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXN1Yi1jYXRlZ29yeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWItdGVtcGxhdGUtcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3ViVGVtcGxhdGVQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZmllbGQ6IGFueVxuICBASW5wdXQoKSBsZW5ndGg6IGFueVxuICBASW5wdXQoKSBpOiBhbnlcbiAgQElucHV0KCkgajogYW55XG4gIEBPdXRwdXQoKSBvbkFkZEtleXdvcmRGcm9tSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25LZXlQcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25BZGROZXdGaWVsZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvblJlbW92ZUZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQ2hhbmdlVHlwZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvblJlbW92ZUtleXdvcmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25BZGROZXdTdWJMZXZlbEZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uRXhwZW5kTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkNoYW5nZUxhYmVsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQ2hlY2tlZENoaXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25DaGVja2VkRGVmYXVsdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkdldENvbmRpdGlvblZhbHVlcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBJbnB1dCgpIGNvbmRpdGlvbkRhdGE9W11cblxuICBjaGlwQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChuZXcgU2V0KCkpO1xuXG4gIHNlcGFyYXRvcktleXNDb2RlcyA9IFtFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTl07XG4gIGN1cnJlbnRDaGlwPVwiXCJcbiAgcHJldlZhbHVlPVwiXCJcbiAgc2hvd0NvbmRpdGlvbj1mYWxzZVxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgZHJvcChldmVudCkge1xuICAgIHRoaXMub25Ecm9wLmVtaXQoZXZlbnQpXG4gIH1cblxuICBhZGRLZXl3b3JkRnJvbUlucHV0KGV2ZW50LCBpLCBqKSB7XG4gICAgdGhpcy5vbkFkZEtleXdvcmRGcm9tSW5wdXQuZW1pdCh7IGV2ZW50LHByZXY6dGhpcy5wcmV2VmFsdWUsIGksIGogfSk7XG4gIH1cblxuICBrZXlVcChldmVudCwgaSwgaikge1xuICAgIHRoaXMub25LZXlQcmVzcy5lbWl0KHsgZXZlbnQsIGksIGogfSlcbiAgfVxuXG4gIGFkZE5ld0ZpZWxkKGV2ZW50LCBpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25BZGROZXdGaWVsZC5lbWl0KHsgZXZlbnQsIGkgfSlcbiAgfVxuXG4gIHJlbW92ZUZpZWxkKGV2ZW50LCBpLCBqKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25SZW1vdmVGaWVsZC5lbWl0KHsgaSwgaiB9KVxuICB9XG5cbiAgY2hhbmdlVHlwZSh0eXBlLCBpLCBqKSB7XG4gICAgdGhpcy5vbkNoYW5nZVR5cGUuZW1pdCh7IHR5cGUsIGksIGogfSlcbiAgfVxuXG4gIHJlbW92ZUtleXdvcmQoZXZlbnQsIGksIGopIHtcbiAgICB0aGlzLm9uUmVtb3ZlS2V5d29yZC5lbWl0KHsgZXZlbnQsIGksIGogfSlcbiAgfVxuICBhZGROZXdTdWJMZXZlbEZpZWxkKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uQWRkTmV3U3ViTGV2ZWxGaWVsZC5lbWl0KHRydWUpXG4gIH1cbiAgZXhwZW5kTW9yZShlLCBmaWVsZCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25FeHBlbmRNb3JlLmVtaXQoe2V4cGFuZDp0cnVlLCBmaWVsZH0pXG4gIH0gIFxuICBnZXRDb25kaXRpb25WYWx1ZXMoKSB7XG4gICAgdGhpcy5vbkdldENvbmRpdGlvblZhbHVlcy5lbWl0KHRydWUpXG4gIH1cblxuICBpbmdvcmVEZWZhdWx0QWN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNoYW5nZUxhYmVsKGxhYmVsLGtleSl7XG4gICAgdGhpcy5vbkNoYW5nZUxhYmVsLmVtaXQoe2xhYmVsLCBrZXl9KVxuICB9XG5cbiAgdG9nZ2xlQ2hpcCA9IChjaGlwOiBhbnkpID0+IHtcbiAgICB0aGlzLm9uQ2hlY2tlZENoaXAuZW1pdChjaGlwKVxuICB9XG5cbiAgb25FZGl0Q2hpcChjaGlwKXtcbiAgICBpZihjaGlwLnZhbHVlPT09dGhpcy5jdXJyZW50Q2hpcCl7XG4gICAgICB0aGlzLmN1cnJlbnRDaGlwPVwiXCJcbiAgICAgIHRoaXMucHJldlZhbHVlPVwiXCJcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuY3VycmVudENoaXA9Y2hpcC52YWx1ZTtcbiAgICAgIHRoaXMucHJldlZhbHVlPWNoaXAudmFsdWVcbiAgICB9XG4gIH1cblxuICBnZXQgY2hpcHMoKSB7IHJldHVybiB0aGlzLmNoaXBDb250cm9sLnZhbHVlOyB9XG5cbiAgY2hlY2tlZERlZmF1bHQodmFsdWUpe1xuICAgIHRoaXMub25DaGVja2VkRGVmYXVsdC5lbWl0KHZhbHVlKVxuICB9XG5cbiAgb25TaG93Q29uZGl0aW9uKGV2ZW50PW51bGwpe1xuICAgIGlmKGV2ZW50KXtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG4gICAgdGhpcy5zaG93Q29uZGl0aW9uPSF0aGlzLnNob3dDb25kaXRpb25cbiAgfVxuXG4gIC8vIGNoZWNrZWQobG9jYXRpb25WYWx1ZSx2YWx1ZSl7XG4gIC8vICAgcmV0dXJuIGxvY2F0aW9uVmFsdWUuaW5jbHVkZXModmFsdWUpXG4gIC8vIH1cblxufVxuIl19