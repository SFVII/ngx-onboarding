import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
let SubOnboaringComponent = class SubOnboaringComponent {
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
    expendMore(e) {
        e.preventDefault();
        this.onExpendMore.emit(true);
    }
    ingoreDefaultAction(e) {
        e.preventDefault();
    }
};
__decorate([
    Input()
], SubOnboaringComponent.prototype, "field", void 0);
__decorate([
    Input()
], SubOnboaringComponent.prototype, "length", void 0);
__decorate([
    Input()
], SubOnboaringComponent.prototype, "i", void 0);
__decorate([
    Input()
], SubOnboaringComponent.prototype, "j", void 0);
__decorate([
    Output()
], SubOnboaringComponent.prototype, "onAddKeywordFromInput", void 0);
__decorate([
    Output()
], SubOnboaringComponent.prototype, "onKeyPress", void 0);
__decorate([
    Output()
], SubOnboaringComponent.prototype, "onDrop", void 0);
__decorate([
    Output()
], SubOnboaringComponent.prototype, "onAddNewField", void 0);
__decorate([
    Output()
], SubOnboaringComponent.prototype, "onRemoveField", void 0);
__decorate([
    Output()
], SubOnboaringComponent.prototype, "onChangeType", void 0);
__decorate([
    Output()
], SubOnboaringComponent.prototype, "onRemoveKeyword", void 0);
__decorate([
    Output()
], SubOnboaringComponent.prototype, "onAddNewSubLevelField", void 0);
__decorate([
    Output()
], SubOnboaringComponent.prototype, "onExpendMore", void 0);
SubOnboaringComponent = __decorate([
    Component({
        selector: 'lib-sub-onboarding',
        template: "<div class=\"field-item\">\n    <ng-container [ngSwitch]=\"field.type\">\n        <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto w-30 field-size\">\n            <mat-checkbox [(ngModel)]=\"field.value\" [required]=\"field.isMandatory\"\n                [ngModelOptions]=\"{standalone: true}\">\n                {{field.label}}\n            </mat-checkbox>\n        </div>\n        <mat-form-field *ngSwitchCase=\"'radio'\" class=\"flex-auto w-30 field-size\">\n            <mat-label> {{field.label}} </mat-label>\n            <mat-radio-group class=\"form-field radio-group field-size\" [(ngModel)]=\"field.value\"\n                aria-label=\"Select an option\" *ngIf=\"field.type==='radio'\">\n                <mat-radio-button *ngFor=\"let opt of field.defaultValue\" [value]=\"opt\">{{opt}}</mat-radio-button>\n            </mat-radio-group>\n        </mat-form-field>\n        <mat-form-field *ngSwitchCase=\"'select'\" class=\"flex-auto w-30 field-size\">\n            <mat-label> {{field.label}} </mat-label>\n            <mat-select [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\" [required]=\"field.isMandatory\">\n                <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt\">{{opt}}</mat-option>\n            </mat-select>\n        </mat-form-field>\n        <mat-form-field *ngSwitchDefault class=\"form-field field-size\" appearance=\"fill\">\n            <mat-label>{{field.label}}</mat-label>\n            <input [type]=\"field.type\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\n                [(ngModel)]=\"field.value\" placeholder=\"\">\n        </mat-form-field>\n    </ng-container>\n</div>\n\n<ng-content select=\".child\"></ng-content>",
        styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.example-full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}::ng-deep .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02);margin-bottom:-20px}"]
    })
], SubOnboaringComponent);
export { SubOnboaringComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW9uYm9hcmRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3N1Yi1vbmJvYXJkaW5nL3N1Yi1vbmJvYXJkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU9oRSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQWlCaEM7UUFaVSwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQy9DLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ3BDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ2hDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUN2QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDdkMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ3RDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUN6QywwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQy9DLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUdoRCx1QkFBa0IsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFLO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFFRCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNyQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBQ0QsbUJBQW1CLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBQ0QsVUFBVSxDQUFDLENBQUM7UUFDVixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUVELG1CQUFtQixDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ3BCLENBQUM7Q0FFRixDQUFBO0FBL0RVO0lBQVIsS0FBSyxFQUFFO29EQUFXO0FBQ1Y7SUFBUixLQUFLLEVBQUU7cURBQVk7QUFDWDtJQUFSLEtBQUssRUFBRTtnREFBTztBQUNOO0lBQVIsS0FBSyxFQUFFO2dEQUFPO0FBQ0w7SUFBVCxNQUFNLEVBQUU7b0VBQWdEO0FBQy9DO0lBQVQsTUFBTSxFQUFFO3lEQUFxQztBQUNwQztJQUFULE1BQU0sRUFBRTtxREFBaUM7QUFDaEM7SUFBVCxNQUFNLEVBQUU7NERBQXdDO0FBQ3ZDO0lBQVQsTUFBTSxFQUFFOzREQUF3QztBQUN2QztJQUFULE1BQU0sRUFBRTsyREFBdUM7QUFDdEM7SUFBVCxNQUFNLEVBQUU7OERBQTBDO0FBQ3pDO0lBQVQsTUFBTSxFQUFFO29FQUFnRDtBQUMvQztJQUFULE1BQU0sRUFBRTsyREFBdUM7QUFickMscUJBQXFCO0lBTGpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsK3REQUE4Qzs7S0FFL0MsQ0FBQztHQUNXLHFCQUFxQixDQWdFakM7U0FoRVkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRU5URVIsIENPTU1BLCBTRU1JQ09MT04gfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc3ViLW9uYm9hcmRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ViLW9uYm9hcmRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWItb25ib2FyZGluZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1Yk9uYm9hcmluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpZWxkOiBhbnlcbiAgQElucHV0KCkgbGVuZ3RoOiBhbnlcbiAgQElucHV0KCkgaTogYW55XG4gIEBJbnB1dCgpIGo6IGFueVxuICBAT3V0cHV0KCkgb25BZGRLZXl3b3JkRnJvbUlucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uS2V5UHJlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25Ecm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQWRkTmV3RmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25SZW1vdmVGaWVsZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkNoYW5nZVR5cGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25SZW1vdmVLZXl3b3JkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkV4cGVuZE1vcmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuXG5cbiAgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQSwgU0VNSUNPTE9OXTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGRyb3AoZXZlbnQpIHtcbiAgICB0aGlzLm9uRHJvcC5lbWl0KGV2ZW50KVxuICB9XG5cbiAgYWRkS2V5d29yZEZyb21JbnB1dChldmVudCwgaSwgaikge1xuICAgIHRoaXMub25BZGRLZXl3b3JkRnJvbUlucHV0LmVtaXQoeyBldmVudCwgaSwgaiB9KVxuICB9XG5cbiAga2V5VXAoZXZlbnQsIGksIGopIHtcbiAgICB0aGlzLm9uS2V5UHJlc3MuZW1pdCh7IGV2ZW50LCBpLCBqIH0pXG4gIH1cblxuICBhZGROZXdGaWVsZChldmVudCwgaSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uQWRkTmV3RmllbGQuZW1pdCh7IGV2ZW50LCBpIH0pXG4gIH1cblxuICByZW1vdmVGaWVsZChldmVudCwgaSwgaikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uUmVtb3ZlRmllbGQuZW1pdCh7IGksIGogfSlcbiAgfVxuXG4gIGNoYW5nZVR5cGUodHlwZSwgaSwgaikge1xuICAgIHRoaXMub25DaGFuZ2VUeXBlLmVtaXQoeyB0eXBlLCBpLCBqIH0pXG4gIH1cblxuICByZW1vdmVLZXl3b3JkKGV2ZW50LCBpLCBqKSB7XG4gICAgdGhpcy5vblJlbW92ZUtleXdvcmQuZW1pdCh7IGV2ZW50LCBpLCBqIH0pXG4gIH1cbiAgYWRkTmV3U3ViTGV2ZWxGaWVsZChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkFkZE5ld1N1YkxldmVsRmllbGQuZW1pdCh0cnVlKVxuICB9XG4gIGV4cGVuZE1vcmUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25FeHBlbmRNb3JlLmVtaXQodHJ1ZSlcbiAgfVxuXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbn1cbiJdfQ==