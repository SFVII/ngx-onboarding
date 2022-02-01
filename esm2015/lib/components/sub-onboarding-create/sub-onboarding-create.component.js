import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
let SubOnboardingCreateComponent = class SubOnboardingCreateComponent {
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
        this.chipControl = new FormControl(new Set());
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentChip = "";
        this.prevValue = "";
        this.toggleChip = (chip) => {
            this.onCheckedChip.emit(chip);
            // const addChip = () => { this.chips.add(chip); };
            // const removeChip = () => { this.chips.delete(chip); };
            // this.chips.has(chip) ? removeChip() : addChip();
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
    formatOther(other) {
        if (other) {
            return other.toLocaleLowerCase();
        }
        return '';
    }
    checkSubForm(forms) {
        let hasSubForm = false;
        if (forms.forms && forms.forms.length) {
            hasSubForm = true;
        }
        return hasSubForm;
    }
};
__decorate([
    Input()
], SubOnboardingCreateComponent.prototype, "field", void 0);
__decorate([
    Input()
], SubOnboardingCreateComponent.prototype, "length", void 0);
__decorate([
    Input()
], SubOnboardingCreateComponent.prototype, "i", void 0);
__decorate([
    Input()
], SubOnboardingCreateComponent.prototype, "j", void 0);
__decorate([
    Output()
], SubOnboardingCreateComponent.prototype, "onAddKeywordFromInput", void 0);
__decorate([
    Output()
], SubOnboardingCreateComponent.prototype, "onKeyPress", void 0);
__decorate([
    Output()
], SubOnboardingCreateComponent.prototype, "onDrop", void 0);
__decorate([
    Output()
], SubOnboardingCreateComponent.prototype, "onAddNewField", void 0);
__decorate([
    Output()
], SubOnboardingCreateComponent.prototype, "onRemoveField", void 0);
__decorate([
    Output()
], SubOnboardingCreateComponent.prototype, "onChangeType", void 0);
__decorate([
    Output()
], SubOnboardingCreateComponent.prototype, "onRemoveKeyword", void 0);
__decorate([
    Output()
], SubOnboardingCreateComponent.prototype, "onAddNewSubLevelField", void 0);
__decorate([
    Output()
], SubOnboardingCreateComponent.prototype, "onExpendMore", void 0);
__decorate([
    Output()
], SubOnboardingCreateComponent.prototype, "onChangeLabel", void 0);
__decorate([
    Output()
], SubOnboardingCreateComponent.prototype, "onCheckedChip", void 0);
SubOnboardingCreateComponent = __decorate([
    Component({
        selector: 'lib-sub-create-onboarding',
        template: "<div class=\"field-item\">\n    <ng-container [ngSwitch]=\"field.type\">\n        <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto w-30 field-size\">\n            <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto w-30 field-size\">\n                <mat-checkbox class=\"form-field\" [class]=\"checkSubForm(field) ? 'checkbox-title-active':''\"\n                    [(ngModel)]=\"field.value\" [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\">\n                    {{field.label}}\n                </mat-checkbox>\n            </div>\n        </div>\n        <div *ngSwitchCase=\"'checkbox_multiple'\" class=\"flex-auto w-30 field-size\">\n            <label>{{field.label}}</label>\n            <div style=\"margin-top: 20px;\">\n                <mat-checkbox class=\"form-field\" style=\"display: block; margin-bottom: 5px; margin-top: 10px\" *ngFor=\"let opt of field.defaultValue\" [checked]=\"opt.checked\"\n                    [(ngModel)]=\"opt.checked\" [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\">\n                    {{opt.value}}\n                </mat-checkbox>\n            </div>\n        </div>\n        <div *ngSwitchCase=\"'radio'\" class=\"flex-auto w-30 field-size\">\n            <label style=\"display: block;\"> {{field.label}} </label>\n            <mat-radio-group class=\"form-field radio-group field-size\" [(ngModel)]=\"field.value\"\n                [required]=\"field.isMandatory\" aria-label=\"Select an option\">\n                <mat-radio-button *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">{{opt.value}}\n                </mat-radio-button>\n            </mat-radio-group>\n            <mat-form-field *ngIf=\"'autre'===formatOther(field.value)\" class=\"form-field field-size other-option\"\n                appearance=\"outline\">\n                <mat-label>Autre option</mat-label>\n                <input type=\"text\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\n                    [(ngModel)]=\"field.otherValue\" placeholder=\"\">\n            </mat-form-field>\n        </div>\n        <div *ngSwitchCase=\"'select'\" class=\"flex-auto w-30 field-size\">\n            <mat-form-field class=\"flex-auto w-30 field-size\" appearance=\"outline\">\n                <mat-label> {{field.label}} </mat-label>\n                <mat-select [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\"\n                    [required]=\"field.isMandatory\">\n                    <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">{{opt.value}}</mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field *ngIf=\"'autre'===formatOther(field.value)\" class=\"form-field field-size other-option\"\n                appearance=\"outline\">\n                <mat-label>Autre option</mat-label>\n                <input type=\"text\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\n                    [(ngModel)]=\"field.otherValue\" placeholder=\"\">\n            </mat-form-field>\n        </div>\n        <mat-form-field *ngSwitchCase=\"'textarea'\" class=\"form-field full-width\" appearance=\"outline\">\n            <mat-label>{{field.label}}</mat-label>\n            <textarea type=\"text\" rows=\"5\" matInput [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\"\n                [(ngModel)]=\"field.value\" placeholder=\"Description...\"></textarea>\n        </mat-form-field>\n\n        <mat-form-field *ngSwitchDefault class=\"form-field field-size\" appearance=\"outline\">\n            <mat-label>{{field.label}}</mat-label>\n            <input [type]=\"field.type\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\n                [(ngModel)]=\"field.value\" placeholder=\"\">\n        </mat-form-field>\n    </ng-container>\n</div>\n<ng-content select=\".child\"></ng-content>",
        styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;min-width:250px;position:relative}.field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.field-action{width:10%}.field-size mat-checkbox{margin:20px}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}::ng-deep .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button .material-icons{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active{font-weight:700}.other-option{margin-left:10px}.flex-auto{width:100%}.flex-auto mat-form-field{width:80%}"]
    })
], SubOnboardingCreateComponent);
export { SubOnboardingCreateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdWItb25ib2FyZGluZy1jcmVhdGUvc3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPN0MsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFzQnZDO1FBakJVLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDL0MsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDcEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDaEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ3ZDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUN2QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDdEMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ3pDLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDL0MsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ3RDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUN2QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFFakQsZ0JBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFekMsdUJBQWtCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLGdCQUFXLEdBQUMsRUFBRSxDQUFBO1FBQ2QsY0FBUyxHQUFDLEVBQUUsQ0FBQTtRQW9EWixlQUFVLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM3QixtREFBbUQ7WUFDbkQseURBQXlEO1lBQ3pELG1EQUFtRDtRQUVyRCxDQUFDLENBQUE7SUF6RGUsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFLO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNyQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBQ0QsbUJBQW1CLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBQ0QsVUFBVSxDQUFDLENBQUMsRUFBRSxLQUFLO1FBQ2pCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBRUQsbUJBQW1CLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDcEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFLLEVBQUMsR0FBRztRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFVRCxVQUFVLENBQUMsSUFBSTtRQUNiLElBQUcsSUFBSSxDQUFDLEtBQUssS0FBRyxJQUFJLENBQUMsV0FBVyxFQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUMsRUFBRSxDQUFBO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUMsRUFBRSxDQUFBO1NBQ2xCO2FBQUk7WUFDSCxJQUFJLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFBO1NBQzFCO0lBQ0gsQ0FBQztJQUVELElBQUksS0FBSyxLQUFLLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRTlDLFdBQVcsQ0FBQyxLQUFZO1FBQ3ZCLElBQUcsS0FBSyxFQUFDO1lBQ1IsT0FBTyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtTQUNoQztRQUNELE9BQU8sRUFBRSxDQUFBO0lBQ1YsQ0FBQztJQUdELFlBQVksQ0FBQyxLQUFLO1FBQ2hCLElBQUksVUFBVSxHQUFDLEtBQUssQ0FBQztRQUNyQixJQUFHLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUM7WUFDbkMsVUFBVSxHQUFDLElBQUksQ0FBQztTQUNqQjtRQUNELE9BQU8sVUFBVSxDQUFBO0lBQ25CLENBQUM7Q0FFRixDQUFBO0FBNUdVO0lBQVIsS0FBSyxFQUFFOzJEQUFXO0FBQ1Y7SUFBUixLQUFLLEVBQUU7NERBQVk7QUFDWDtJQUFSLEtBQUssRUFBRTt1REFBTztBQUNOO0lBQVIsS0FBSyxFQUFFO3VEQUFPO0FBQ0w7SUFBVCxNQUFNLEVBQUU7MkVBQWdEO0FBQy9DO0lBQVQsTUFBTSxFQUFFO2dFQUFxQztBQUNwQztJQUFULE1BQU0sRUFBRTs0REFBaUM7QUFDaEM7SUFBVCxNQUFNLEVBQUU7bUVBQXdDO0FBQ3ZDO0lBQVQsTUFBTSxFQUFFO21FQUF3QztBQUN2QztJQUFULE1BQU0sRUFBRTtrRUFBdUM7QUFDdEM7SUFBVCxNQUFNLEVBQUU7cUVBQTBDO0FBQ3pDO0lBQVQsTUFBTSxFQUFFOzJFQUFnRDtBQUMvQztJQUFULE1BQU0sRUFBRTtrRUFBdUM7QUFDdEM7SUFBVCxNQUFNLEVBQUU7bUVBQXdDO0FBQ3ZDO0lBQVQsTUFBTSxFQUFFO21FQUF3QztBQWZ0Qyw0QkFBNEI7SUFMeEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyx1NkhBQXFEOztLQUV0RCxDQUFDO0dBQ1csNEJBQTRCLENBNkd4QztTQTdHWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWJPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZmllbGQ6IGFueVxuICBASW5wdXQoKSBsZW5ndGg6IGFueVxuICBASW5wdXQoKSBpOiBhbnlcbiAgQElucHV0KCkgajogYW55XG4gIEBPdXRwdXQoKSBvbkFkZEtleXdvcmRGcm9tSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25LZXlQcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25BZGROZXdGaWVsZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvblJlbW92ZUZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQ2hhbmdlVHlwZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvblJlbW92ZUtleXdvcmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25BZGROZXdTdWJMZXZlbEZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uRXhwZW5kTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkNoYW5nZUxhYmVsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQ2hlY2tlZENoaXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuXG4gIGNoaXBDb250cm9sID0gbmV3IEZvcm1Db250cm9sKG5ldyBTZXQoKSk7XG5cbiAgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQSwgU0VNSUNPTE9OXTtcbiAgY3VycmVudENoaXA9XCJcIlxuICBwcmV2VmFsdWU9XCJcIlxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgZHJvcChldmVudCkge1xuICAgIHRoaXMub25Ecm9wLmVtaXQoZXZlbnQpXG4gIH1cblxuICBhZGRLZXl3b3JkRnJvbUlucHV0KGV2ZW50LCBpLCBqKSB7XG4gICAgdGhpcy5vbkFkZEtleXdvcmRGcm9tSW5wdXQuZW1pdCh7IGV2ZW50LHByZXY6dGhpcy5wcmV2VmFsdWUsIGksIGogfSk7XG4gIH1cblxuICBrZXlVcChldmVudCwgaSwgaikge1xuICAgIHRoaXMub25LZXlQcmVzcy5lbWl0KHsgZXZlbnQsIGksIGogfSlcbiAgfVxuXG4gIGFkZE5ld0ZpZWxkKGV2ZW50LCBpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25BZGROZXdGaWVsZC5lbWl0KHsgZXZlbnQsIGkgfSlcbiAgfVxuXG4gIHJlbW92ZUZpZWxkKGV2ZW50LCBpLCBqKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25SZW1vdmVGaWVsZC5lbWl0KHsgaSwgaiB9KVxuICB9XG5cbiAgY2hhbmdlVHlwZSh0eXBlLCBpLCBqKSB7XG4gICAgdGhpcy5vbkNoYW5nZVR5cGUuZW1pdCh7IHR5cGUsIGksIGogfSlcbiAgfVxuXG4gIHJlbW92ZUtleXdvcmQoZXZlbnQsIGksIGopIHtcbiAgICB0aGlzLm9uUmVtb3ZlS2V5d29yZC5lbWl0KHsgZXZlbnQsIGksIGogfSlcbiAgfVxuICBhZGROZXdTdWJMZXZlbEZpZWxkKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uQWRkTmV3U3ViTGV2ZWxGaWVsZC5lbWl0KHRydWUpXG4gIH1cbiAgZXhwZW5kTW9yZShlLCBmaWVsZCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25FeHBlbmRNb3JlLmVtaXQoe2V4cGFuZDp0cnVlLCBmaWVsZH0pXG4gIH1cblxuICBpbmdvcmVEZWZhdWx0QWN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNoYW5nZUxhYmVsKGxhYmVsLGtleSl7XG4gICAgdGhpcy5vbkNoYW5nZUxhYmVsLmVtaXQoe2xhYmVsLCBrZXl9KVxuICB9XG5cbiAgdG9nZ2xlQ2hpcCA9IChjaGlwOiBhbnkpID0+IHtcbiAgICB0aGlzLm9uQ2hlY2tlZENoaXAuZW1pdChjaGlwKVxuICAgIC8vIGNvbnN0IGFkZENoaXAgPSAoKSA9PiB7IHRoaXMuY2hpcHMuYWRkKGNoaXApOyB9O1xuICAgIC8vIGNvbnN0IHJlbW92ZUNoaXAgPSAoKSA9PiB7IHRoaXMuY2hpcHMuZGVsZXRlKGNoaXApOyB9O1xuICAgIC8vIHRoaXMuY2hpcHMuaGFzKGNoaXApID8gcmVtb3ZlQ2hpcCgpIDogYWRkQ2hpcCgpO1xuXG4gIH1cblxuICBvbkVkaXRDaGlwKGNoaXApe1xuICAgIGlmKGNoaXAudmFsdWU9PT10aGlzLmN1cnJlbnRDaGlwKXtcbiAgICAgIHRoaXMuY3VycmVudENoaXA9XCJcIlxuICAgICAgdGhpcy5wcmV2VmFsdWU9XCJcIlxuICAgIH1lbHNle1xuICAgICAgdGhpcy5jdXJyZW50Q2hpcD1jaGlwLnZhbHVlO1xuICAgICAgdGhpcy5wcmV2VmFsdWU9Y2hpcC52YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGdldCBjaGlwcygpIHsgcmV0dXJuIHRoaXMuY2hpcENvbnRyb2wudmFsdWU7IH1cblxuICBmb3JtYXRPdGhlcihvdGhlcjpzdHJpbmcpe1xuICAgaWYob3RoZXIpe1xuICAgIHJldHVybiBvdGhlci50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICB9XG4gICByZXR1cm4gJydcbiAgfVxuXG5cbiAgY2hlY2tTdWJGb3JtKGZvcm1zKXtcbiAgICBsZXQgaGFzU3ViRm9ybT1mYWxzZTtcbiAgICBpZihmb3Jtcy5mb3JtcyAmJiBmb3Jtcy5mb3Jtcy5sZW5ndGgpe1xuICAgICAgaGFzU3ViRm9ybT10cnVlO1xuICAgIH0gICAgXG4gICAgcmV0dXJuIGhhc1N1YkZvcm1cbiAgfVxuXG59XG4iXX0=