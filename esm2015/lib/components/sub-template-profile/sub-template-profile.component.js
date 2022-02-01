import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
let SubTemplateProfileComponent = class SubTemplateProfileComponent {
    constructor() {
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
        this.toggleChip = (chip) => {
            this.onCheckedChip.emit(chip);
        };
    }
    ngOnInit() {
    }
    drop(event) {
        this.onDrop.emit(event);
    }
    addKeywordFromInput(event, i, j) {
        this.onAddKeywordFromInput.emit({ event, prev: this.prevValue, i, j });
    }
    keyUp(event, i, j) {
        this.onKeyPress.emit({ event, i, j });
    }
    addNewField(event, i) {
        event.preventDefault();
        this.onAddNewField.emit({ event, i });
    }
    removeField(event, i, j) {
        event.preventDefault();
        this.onRemoveField.emit({ i, j });
    }
    changeType(type, i, j) {
        this.onChangeType.emit({ type, i, j });
    }
    removeKeyword(event, i, j) {
        this.onRemoveKeyword.emit({ event, i, j });
    }
    addNewSubLevelField(e) {
        e.preventDefault();
        this.onAddNewSubLevelField.emit(true);
    }
    expendMore(e, field) {
        e.preventDefault();
        this.onExpendMore.emit({ expand: true, field });
    }
    getConditionValues() {
        this.onGetConditionValues.emit(true);
    }
    ingoreDefaultAction(e) {
        e.preventDefault();
    }
    changeLabel(label, key) {
        this.onChangeLabel.emit({ label, key });
    }
    onEditChip(chip) {
        if (chip.value === this.currentChip) {
            this.currentChip = "";
            this.prevValue = "";
        }
        else {
            this.currentChip = chip.value;
            this.prevValue = chip.value;
        }
    }
    get chips() { return this.chipControl.value; }
    checkedDefault(value) {
        this.onCheckedDefault.emit(value);
    }
    onShowCondition(event = null) {
        if (event) {
            event.preventDefault();
        }
        this.showCondition = !this.showCondition;
    }
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
export { SubTemplateProfileComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPN0MsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUEwQnRDO1FBckJVLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDL0MsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDcEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDaEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ3ZDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUN2QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDdEMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ3pDLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDL0MsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ3RDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUN2QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDdkMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUMxQyx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FB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QUU7MEVBQWdEO0FBQy9DO0lBQVQsTUFBTSxFQUFFO2lFQUF1QztBQUN0QztJQUFULE1BQU0sRUFBRTtrRUFBd0M7QUFDdkM7SUFBVCxNQUFNLEVBQUU7a0VBQXdDO0FBQ3ZDO0lBQVQsTUFBTSxFQUFFO3FFQUEyQztBQUMxQztJQUFULE1BQU0sRUFBRTt5RUFBK0M7QUFDL0M7SUFBUixLQUFLLEVBQUU7a0VBQWlCO0FBbEJkLDJCQUEyQjtJQUx2QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLGd2T0FBb0Q7O0tBRXJELENBQUM7R0FDVywyQkFBMkIsQ0ErR3ZDO1NBL0dZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVOVEVSLCBDT01NQSwgU0VNSUNPTE9OIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc3ViLWNhdGVnb3J5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWJUZW1wbGF0ZVByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaWVsZDogYW55XG4gIEBJbnB1dCgpIGxlbmd0aDogYW55XG4gIEBJbnB1dCgpIGk6IGFueVxuICBASW5wdXQoKSBqOiBhbnlcbiAgQE91dHB1dCgpIG9uQWRkS2V5d29yZEZyb21JbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbktleVByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkFkZE5ld0ZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uUmVtb3ZlRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25DaGFuZ2VUeXBlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uUmVtb3ZlS2V5d29yZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkFkZE5ld1N1YkxldmVsRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25FeHBlbmRNb3JlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQ2hhbmdlTGFiZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25DaGVja2VkQ2hpcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkNoZWNrZWREZWZhdWx0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uR2V0Q29uZGl0aW9uVmFsdWVzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQElucHV0KCkgY29uZGl0aW9uRGF0YT1bXVxuXG4gIGNoaXBDb250cm9sID0gbmV3IEZvcm1Db250cm9sKG5ldyBTZXQoKSk7XG5cbiAgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQSwgU0VNSUNPTE9OXTtcbiAgY3VycmVudENoaXA9XCJcIlxuICBwcmV2VmFsdWU9XCJcIlxuICBzaG93Q29uZGl0aW9uPWZhbHNlXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBkcm9wKGV2ZW50KSB7XG4gICAgdGhpcy5vbkRyb3AuZW1pdChldmVudClcbiAgfVxuXG4gIGFkZEtleXdvcmRGcm9tSW5wdXQoZXZlbnQsIGksIGopIHtcbiAgICB0aGlzLm9uQWRkS2V5d29yZEZyb21JbnB1dC5lbWl0KHsgZXZlbnQscHJldjp0aGlzLnByZXZWYWx1ZSwgaSwgaiB9KTtcbiAgfVxuXG4gIGtleVVwKGV2ZW50LCBpLCBqKSB7XG4gICAgdGhpcy5vbktleVByZXNzLmVtaXQoeyBldmVudCwgaSwgaiB9KVxuICB9XG5cbiAgYWRkTmV3RmllbGQoZXZlbnQsIGkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkFkZE5ld0ZpZWxkLmVtaXQoeyBldmVudCwgaSB9KVxuICB9XG5cbiAgcmVtb3ZlRmllbGQoZXZlbnQsIGksIGopIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vblJlbW92ZUZpZWxkLmVtaXQoeyBpLCBqIH0pXG4gIH1cblxuICBjaGFuZ2VUeXBlKHR5cGUsIGksIGopIHtcbiAgICB0aGlzLm9uQ2hhbmdlVHlwZS5lbWl0KHsgdHlwZSwgaSwgaiB9KVxuICB9XG5cbiAgcmVtb3ZlS2V5d29yZChldmVudCwgaSwgaikge1xuICAgIHRoaXMub25SZW1vdmVLZXl3b3JkLmVtaXQoeyBldmVudCwgaSwgaiB9KVxuICB9XG4gIGFkZE5ld1N1YkxldmVsRmllbGQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25BZGROZXdTdWJMZXZlbEZpZWxkLmVtaXQodHJ1ZSlcbiAgfVxuICBleHBlbmRNb3JlKGUsIGZpZWxkKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkV4cGVuZE1vcmUuZW1pdCh7ZXhwYW5kOnRydWUsIGZpZWxkfSlcbiAgfSAgXG4gIGdldENvbmRpdGlvblZhbHVlcygpIHtcbiAgICB0aGlzLm9uR2V0Q29uZGl0aW9uVmFsdWVzLmVtaXQodHJ1ZSlcbiAgfVxuXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY2hhbmdlTGFiZWwobGFiZWwsa2V5KXtcbiAgICB0aGlzLm9uQ2hhbmdlTGFiZWwuZW1pdCh7bGFiZWwsIGtleX0pXG4gIH1cblxuICB0b2dnbGVDaGlwID0gKGNoaXA6IGFueSkgPT4ge1xuICAgIHRoaXMub25DaGVja2VkQ2hpcC5lbWl0KGNoaXApXG4gIH1cblxuICBvbkVkaXRDaGlwKGNoaXApe1xuICAgIGlmKGNoaXAudmFsdWU9PT10aGlzLmN1cnJlbnRDaGlwKXtcbiAgICAgIHRoaXMuY3VycmVudENoaXA9XCJcIlxuICAgICAgdGhpcy5wcmV2VmFsdWU9XCJcIlxuICAgIH1lbHNle1xuICAgICAgdGhpcy5jdXJyZW50Q2hpcD1jaGlwLnZhbHVlO1xuICAgICAgdGhpcy5wcmV2VmFsdWU9Y2hpcC52YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGdldCBjaGlwcygpIHsgcmV0dXJuIHRoaXMuY2hpcENvbnRyb2wudmFsdWU7IH1cblxuICBjaGVja2VkRGVmYXVsdCh2YWx1ZSl7XG4gICAgdGhpcy5vbkNoZWNrZWREZWZhdWx0LmVtaXQodmFsdWUpXG4gIH1cblxuICBvblNob3dDb25kaXRpb24oZXZlbnQ9bnVsbCl7XG4gICAgaWYoZXZlbnQpe1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cbiAgICB0aGlzLnNob3dDb25kaXRpb249IXRoaXMuc2hvd0NvbmRpdGlvblxuICB9XG5cbiAgLy8gY2hlY2tlZChsb2NhdGlvblZhbHVlLHZhbHVlKXtcbiAgLy8gICByZXR1cm4gbG9jYXRpb25WYWx1ZS5pbmNsdWRlcyh2YWx1ZSlcbiAgLy8gfVxuXG59XG4iXX0=