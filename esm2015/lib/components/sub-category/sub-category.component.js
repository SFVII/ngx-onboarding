import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
let SubCategoryComponent = class SubCategoryComponent {
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
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
    }
    ngOnInit() {
    }
    drop(event) {
        this.onDrop.emit(event);
    }
    addKeywordFromInput(event, i, j) {
        this.onAddKeywordFromInput.emit({ event, i, j });
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
    ingoreDefaultAction(e) {
        e.preventDefault();
    }
};
__decorate([
    Input()
], SubCategoryComponent.prototype, "field", void 0);
__decorate([
    Input()
], SubCategoryComponent.prototype, "length", void 0);
__decorate([
    Input()
], SubCategoryComponent.prototype, "i", void 0);
__decorate([
    Input()
], SubCategoryComponent.prototype, "j", void 0);
__decorate([
    Output()
], SubCategoryComponent.prototype, "onAddKeywordFromInput", void 0);
__decorate([
    Output()
], SubCategoryComponent.prototype, "onKeyPress", void 0);
__decorate([
    Output()
], SubCategoryComponent.prototype, "onDrop", void 0);
__decorate([
    Output()
], SubCategoryComponent.prototype, "onAddNewField", void 0);
__decorate([
    Output()
], SubCategoryComponent.prototype, "onRemoveField", void 0);
__decorate([
    Output()
], SubCategoryComponent.prototype, "onChangeType", void 0);
__decorate([
    Output()
], SubCategoryComponent.prototype, "onRemoveKeyword", void 0);
__decorate([
    Output()
], SubCategoryComponent.prototype, "onAddNewSubLevelField", void 0);
__decorate([
    Output()
], SubCategoryComponent.prototype, "onExpendMore", void 0);
SubCategoryComponent = __decorate([
    Component({
        selector: 'lib-sub-category',
        template: "<div class=\"field-item\">\n    <mat-form-field class=\"form-field field-size\" [class]=\"!field.editable ? 'readonly' :'' \" appearance=\"outline\">\n        <mat-label>Label</mat-label>\n        <input type=\"text\" [readonly]=\"!field.editable\" matInput required [ngModelOptions]=\"{standalone: true}\"\n            [(ngModel)]=\"field.label\" placeholder=\"\" />\n    </mat-form-field>\n\n    <mat-form-field class=\"form-field field-size\" [class]=\"!field.editable ? 'readonly' :'' \" appearance=\"outline\">\n        <mat-label>Cl\u00E9 du champ</mat-label>\n        <input type=\"text\" [readonly]=\"!field.editable\" matInput required [ngModelOptions]=\"{standalone: true}\"\n            [(ngModel)]=\"field.key\" placeholder=\"\" />\n    </mat-form-field>\n\n    <mat-form-field class=\"form-field field-size\" appearance=\"outline\">\n        <mat-label>Type</mat-label>\n        <mat-select [disabled]=\"!field.editable\" [(ngModel)]=\"field.type\" required [ngModelOptions]=\"{standalone: true}\"\n            (ngModelChange)=\"changeType(field.type,i,j)\">\n            <mat-option value=\"text\">Text</mat-option>\n            <mat-option value=\"radio\">Radio</mat-option>\n            <mat-option value=\"select\">Selecteur</mat-option>\n            <mat-option value=\"checkbox\">Checkbox</mat-option>\n            <mat-option value=\"email\">Email</mat-option>\n            <mat-option value=\"password\">Password</mat-option>\n            <mat-option value=\"date\">Date</mat-option>\n            <mat-option value=\"phone\">Phone</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <ng-container [ngSwitch]=\"field.type\">\n        <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto w-30 field-size\">\n            <mat-checkbox [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\">Valeur\n            </mat-checkbox>\n        </div>\n        <mat-form-field *ngSwitchCase=\"['select', 'radio'].includes(field.type) ? field.type : !field.type\"\n            class=\"flex-auto w-30 field-size\" appearance=\"outline\">\n            <mat-label> Valeur </mat-label>\n            <mat-chip-list #chipList aria-label=\"Video keywords; let index=index\" multiple>\n                <mat-chip style=\"min-height: 25px;\" *ngFor=\"let option of field.defaultValue\" [selected]=\"option\"\n                    [value]=\"option\" [removable]=\"true\" (removed)=\"removeKeyword(option, i,j)\">\n                    {{option}}\n                    <mat-icon matChipRemove>cancel</mat-icon>\n                </mat-chip>\n                <input #chipsInput placeholder=\"add...\" [matChipInputFor]=\"chipList\" [matChipInputAddOnBlur]=\"true\"\n                    (matChipInputTokenEnd)=\"addKeywordFromInput($event, i,j)\"\n                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" (keyup)=\"keyUp($event,i,j)\">\n            </mat-chip-list>\n        </mat-form-field>\n        <mat-form-field *ngSwitchDefault class=\"form-field field-size\" appearance=\"outline\">\n            <mat-label>Valeur</mat-label>\n            <input [type]=\"field.type\" matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.defaultValue\"\n                placeholder=\"\">\n        </mat-form-field>\n    </ng-container>\n\n    <mat-checkbox class=\"form-field\" [(ngModel)]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\">\n        obligatoire\n    </mat-checkbox>\n    <button class=\"transparent-button\" [disabled]=\"field.subLevel>2 || !field.editable\"\n        [style.opacity]=\"(field.subLevel>2 || !field.editable) ? 0 :1\" mat-mini-fab color=\"success\"\n        (click)='addNewSubLevelField($event)'>\n        <mat-icon>device_hub</mat-icon>\n    </button>\n\n    <button class=\"expand-button\" [disabled]=\"!(field.forms && field.forms.length>0)\"\n        [style.opacity]=\"field.forms && field.forms.length>0 ? 1 :0\" mat-mini-fab color=\"primary\"\n        (click)=\"expendMore($event,field)\">\n        <mat-icon *ngIf=\"!field.expandMore\">expand_less</mat-icon>\n        <mat-icon *ngIf=\"field.expandMore\">expand_more</mat-icon>\n    </button>\n</div>\n\n<!-- <div class=\"add-button-container\" *ngIf=\"length-1===j\">\n    <button style=\"margin:10px auto\" [disabled]=\"length-1!==j\" [style.opacity]=\"length-1===j ? 1 :0\" mat-raised-button\n        color=\"primary\" (click)='addNewField($event,i)'>\n        <mat-icon>add_box</mat-icon>\n        <span>Ajouter un champ</span>\n    </button>\n</div> -->\n\n<ng-content select=\".child\"></ng-content>",
        styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.example-full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center;width:100%}.field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}::ng-deep mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}::ng-deep .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}::ng-deep .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02);margin-bottom:-20px}::ng-deep .mat-select{padding:0}.add-button-container{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:space-between;width:98%;margin-left:0;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;margin:auto;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button{color:#5a607f;background-color:transparent;box-shadow:none}.expand-button .material-icons{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto}"]
    })
], SubCategoryComponent);
export { SubCategoryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLWNhdGVnb3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdWItY2F0ZWdvcnkvc3ViLWNhdGVnb3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU9oRSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQWlCL0I7UUFaVSwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQy9DLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ3BDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ2hDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUN2QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDdkMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ3RDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUN6QywwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQy9DLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUdoRCx1QkFBa0IsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFLO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFFRCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNyQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBQ0QsbUJBQW1CLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBQ0QsVUFBVSxDQUFDLENBQUMsRUFBRSxLQUFLO1FBQ2pCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBRUQsbUJBQW1CLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDcEIsQ0FBQztDQUVGLENBQUE7QUEvRFU7SUFBUixLQUFLLEVBQUU7bURBQVc7QUFDVjtJQUFSLEtBQUssRUFBRTtvREFBWTtBQUNYO0lBQVIsS0FBSyxFQUFFOytDQUFPO0FBQ047SUFBUixLQUFLLEVBQUU7K0NBQU87QUFDTDtJQUFULE1BQU0sRUFBRTttRUFBZ0Q7QUFDL0M7SUFBVCxNQUFNLEVBQUU7d0RBQXFDO0FBQ3BDO0lBQVQsTUFBTSxFQUFFO29EQUFpQztBQUNoQztJQUFULE1BQU0sRUFBRTsyREFBd0M7QUFDdkM7SUFBVCxNQUFNLEVBQUU7MkRBQXdDO0FBQ3ZDO0lBQVQsTUFBTSxFQUFFOzBEQUF1QztBQUN0QztJQUFULE1BQU0sRUFBRTs2REFBMEM7QUFDekM7SUFBVCxNQUFNLEVBQUU7bUVBQWdEO0FBQy9DO0lBQVQsTUFBTSxFQUFFOzBEQUF1QztBQWJyQyxvQkFBb0I7SUFMaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1Qiw0OElBQTRDOztLQUU3QyxDQUFDO0dBQ1csb0JBQW9CLENBZ0VoQztTQWhFWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zdWItY2F0ZWdvcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ViLWNhdGVnb3J5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3ViLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3ViQ2F0ZWdvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaWVsZDogYW55XG4gIEBJbnB1dCgpIGxlbmd0aDogYW55XG4gIEBJbnB1dCgpIGk6IGFueVxuICBASW5wdXQoKSBqOiBhbnlcbiAgQE91dHB1dCgpIG9uQWRkS2V5d29yZEZyb21JbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbktleVByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkFkZE5ld0ZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uUmVtb3ZlRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25DaGFuZ2VUeXBlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uUmVtb3ZlS2V5d29yZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkFkZE5ld1N1YkxldmVsRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25FeHBlbmRNb3JlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcblxuXG4gIHNlcGFyYXRvcktleXNDb2RlcyA9IFtFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTl07XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBkcm9wKGV2ZW50KSB7XG4gICAgdGhpcy5vbkRyb3AuZW1pdChldmVudClcbiAgfVxuXG4gIGFkZEtleXdvcmRGcm9tSW5wdXQoZXZlbnQsIGksIGopIHtcbiAgICB0aGlzLm9uQWRkS2V5d29yZEZyb21JbnB1dC5lbWl0KHsgZXZlbnQsIGksIGogfSlcbiAgfVxuXG4gIGtleVVwKGV2ZW50LCBpLCBqKSB7XG4gICAgdGhpcy5vbktleVByZXNzLmVtaXQoeyBldmVudCwgaSwgaiB9KVxuICB9XG5cbiAgYWRkTmV3RmllbGQoZXZlbnQsIGkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkFkZE5ld0ZpZWxkLmVtaXQoeyBldmVudCwgaSB9KVxuICB9XG5cbiAgcmVtb3ZlRmllbGQoZXZlbnQsIGksIGopIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vblJlbW92ZUZpZWxkLmVtaXQoeyBpLCBqIH0pXG4gIH1cblxuICBjaGFuZ2VUeXBlKHR5cGUsIGksIGopIHtcbiAgICB0aGlzLm9uQ2hhbmdlVHlwZS5lbWl0KHsgdHlwZSwgaSwgaiB9KVxuICB9XG5cbiAgcmVtb3ZlS2V5d29yZChldmVudCwgaSwgaikge1xuICAgIHRoaXMub25SZW1vdmVLZXl3b3JkLmVtaXQoeyBldmVudCwgaSwgaiB9KVxuICB9XG4gIGFkZE5ld1N1YkxldmVsRmllbGQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25BZGROZXdTdWJMZXZlbEZpZWxkLmVtaXQodHJ1ZSlcbiAgfVxuICBleHBlbmRNb3JlKGUsIGZpZWxkKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkV4cGVuZE1vcmUuZW1pdCh7ZXhwYW5kOnRydWUsIGZpZWxkfSlcbiAgfVxuXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbn1cbiJdfQ==