import { __assign, __awaiter, __decorate, __generator } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { OnboardingService } from '../onboarding.service';
import { ActivatedRoute, Router } from '@angular/router';
var CreateProfileTemplateComponent = /** @class */ (function () {
    function CreateProfileTemplateComponent(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.validCategory = false;
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentProfil = {};
        this.tags = [];
        this.id = '';
        this.categories = [
            {
                name: 'Software',
                suffixEndpoint: 'category/software',
                forms: [
                    {
                        label: '',
                        value: null,
                        isMandatory: true,
                        type: 'text',
                    }
                ]
            },
            {
                name: 'Hardware',
                suffixEndpoint: 'category/hardware',
                forms: [
                    {
                        label: '',
                        value: null,
                        isMandatory: true,
                        type: 'text',
                    }
                ]
            },
            {
                name: 'Network',
                suffixEndpoint: 'category/network',
                forms: [
                    {
                        label: '',
                        value: null,
                        isMandatory: true,
                        type: 'text',
                    }
                ]
            }
        ];
    }
    CreateProfileTemplateComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.form = this.fb.group({
                            Name: ['', Validators.required],
                            Description: [''],
                            Tags: ['', Validators.required],
                            Status: [false, Validators.required]
                        });
                        _a = this;
                        return [4 /*yield*/, this.service.getAllTags()];
                    case 1:
                        _a.tags = _c.sent();
                        this.id = this.route.snapshot.paramMap.get('id');
                        if (!(this.id != '0')) return [3 /*break*/, 3];
                        _b = this;
                        return [4 /*yield*/, this.service.getProfil(this.id)];
                    case 2:
                        _b.currentProfil = _c.sent();
                        this.form.patchValue(this.currentProfil);
                        this.categories = this.currentProfil.categories;
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CreateProfileTemplateComponent.prototype.onAddNewCategory = function (e) {
        e.preventDefault();
        this.categories.push({
            name: '',
            forms: [
                {
                    label: '',
                    value: null,
                    isMandatory: true,
                    type: 'text',
                }
            ]
        });
    };
    CreateProfileTemplateComponent.prototype.onAddNewField = function (e, i) {
        e.preventDefault();
        this.categories[i].forms.push({
            label: '',
            value: null,
            isMandatory: true,
            type: 'text',
        });
    };
    CreateProfileTemplateComponent.prototype.onRemoveField = function (e, categoryIndex, fieldIndex) {
        e.preventDefault();
        this.categories[categoryIndex].forms.splice(fieldIndex, 1);
    };
    CreateProfileTemplateComponent.prototype.onRemoveCategory = function (e, i) {
        e.preventDefault();
        this.categories.splice(i, 1);
    };
    CreateProfileTemplateComponent.prototype.onChangeCategory = function () {
        return this.categories.every(function (cat) { return cat.name !== '' && cat.forms.every(function (field) { return field.label !== '' && field.type !== ''; }); });
    };
    CreateProfileTemplateComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.form.valid && this.onChangeCategory())) return [3 /*break*/, 5];
                        console.log(this.form.value);
                        console.log(this.categories);
                        if (!(this.id !== '0')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.updateProfil(__assign(__assign(__assign({}, this.currentProfil), this.form.value), { categories: this.categories }))];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.service.createProfil(__assign(__assign({}, this.form.value), { categories: this.categories }))];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        result = _a;
                        if (result) {
                            this.router.navigate(['/profil-list']);
                        }
                        else {
                            console.log('errror......');
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        console.log('xxxxxxxxxxxxxxxxx', this.form.value);
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CreateProfileTemplateComponent.prototype.onChangeType = function (type, indexCategory, indexField) {
        if (type === 'select' || type === 'radio') {
            this.categories[indexCategory].forms[indexField].value = [];
        }
        else if (type === 'text') {
            this.categories[indexCategory].forms[indexField].value = '';
        }
        else {
            this.categories[indexCategory].forms[indexField].value = false;
        }
    };
    CreateProfileTemplateComponent.prototype.onKeyPress = function (event, indexCategory, indexField) {
        if (event.key === ';') {
            var exist = this.categories[indexCategory].forms[indexField].value.find(function (opt) {
                return opt.toLocaleLowerCase() ===
                    event.target.value.split(';')[0].toLocaleLowerCase();
            });
            if (!exist) {
                this.categories[indexCategory].forms[indexField].value.push(event.target.value.split(';')[0]);
                event.target.value = '';
            }
            else {
                event.target.value = '';
            }
        }
    };
    CreateProfileTemplateComponent.prototype.removeKeyword = function (keyword, indexCategory, indexField) {
        this.categories[indexCategory].forms[indexField].value = this.categories[indexCategory].forms[indexField].value.filter(function (option) { return option !== keyword; });
    };
    CreateProfileTemplateComponent.prototype.addKeywordFromInput = function (event, indexCategory, indexField) {
        var input = event.input;
        var value = event.value;
        if (value) {
            var exist = this.categories[indexCategory].forms[indexField].value.find(function (opt) {
                return opt.toLocaleLowerCase() === event.value.toLocaleLowerCase();
            });
            if (!exist) {
                this.categories[indexCategory].forms[indexField].value.push(value.trim());
                input.value = '';
                console.log("WWWWWWWWWWWW", event);
            }
            else {
                input.value = '';
                console.log("AAAAAAAAAAA", event);
            }
        }
    };
    CreateProfileTemplateComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: OnboardingService },
        { type: ActivatedRoute },
        { type: Router }
    ]; };
    CreateProfileTemplateComponent = __decorate([
        Component({
            selector: 'onboarding-create-profile-template',
            template: "<div class=\"container\">\n  <h3>Cr\u00E9ation de profil</h3>\n  <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Nom du profil</mat-label>\n      <input\n        type=\"text\"\n        matInput\n        formControlName=\"Name\"\n        placeholder=\"Ex. Manager\"\n      />\n      <mat-error *ngIf=\"form.get('Name').hasError('required')\">\n        Profil est <strong>requis</strong>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>D\u00E9scription</mat-label>\n      <textarea\n        type=\"text\"\n        matInput\n        formControlName=\"Description\"\n        placeholder=\"\"\n      ></textarea>\n    </mat-form-field>  \n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Tags</mat-label>\n      <mat-select formControlName=\"Tags\" required>\n        <mat-option *ngFor=\"let tag of tags\" [value]=\"tag\">{{tag}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-checkbox formControlName=\"Status\">Active</mat-checkbox>\n\n    <hr />\n    <div class=\"category\">\n      <h2>Liste de cat\u00E9gories</h2>\n      <div class=\"category-item\" *ngFor=\"let category of categories;  let i=index\">\n        <div class=\"field-item\">\n          <mat-form-field class=\"example-full-width input-category-name\"  appearance=\"fill\">\n            <mat-label>Cat\u00E9gorie</mat-label>\n            <input\n              type=\"text\"\n              required\n              [readonly]=\"categories.length<4\"\n              matInput\n              [(ngModel)]=\"category.name\"\n              [ngModelOptions]=\"{standalone: true}\"\n              placeholder=\"\"\n            />\n            <mat-error *ngIf=\"category.name == ''\">\n              Cat\u00E9gorie est <strong>requis</strong>\n            </mat-error>\n          </mat-form-field>\n          <div>\n            <button [disabled]=\"i<3\" (click)=\"onRemoveCategory($event,i)\" mat-raised-button color=\"warn\">Supprimer</button>\n          </div>\n        </div>\n        <div class=\"field-item\" *ngFor=\"let field of category.forms;let j=index\">\n          <mat-form-field class=\"form-field field-size\" appearance=\"fill\">\n            <mat-label>Label</mat-label>\n            <input\n              type=\"text\"\n              matInput\n              required\n              [ngModelOptions]=\"{standalone: true}\"\n              [(ngModel)]=\"field.label\"\n              placeholder=\"\"\n            />\n            <mat-error *ngIf=\"field.label === ''\">\n              Label est <strong>requis</strong>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"form-field field-size\" appearance=\"fill\">\n            <mat-label>Type</mat-label>\n            <mat-select [(ngModel)]=\"field.type\" required [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"onChangeType(field.type,i,j)\">\n              <mat-option value=\"text\">Text</mat-option>\n              <mat-option value=\"radio\">Radio</mat-option>\n              <mat-option value=\"select\">Selecteur</mat-option>\n              <mat-option value=\"checkbox\">Checkbox</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field class=\"form-field field-size\" appearance=\"fill\" *ngIf=\"field.type==='text' || field.type===''\">\n            <mat-label>Valeur</mat-label>\n            <input\n              type=\"text\"\n              matInput\n              [ngModelOptions]=\"{standalone: true}\"\n              [(ngModel)]=\"field.value\"\n              placeholder=\"\"\n            >\n          </mat-form-field>\n<!-- \n          <mat-form-field class=\"form-field field-size\" appearance=\"fill\" *ngIf=\"field.type==='select'\">\n            <mat-label>Valeur</mat-label>\n            <mat-select [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\">\n              <mat-option *ngFor=\"let opt of field.value\" [value]=\"opt\">{{opt}}</mat-option>\n            </mat-select>\n          </mat-form-field> -->\n          \n          <div class=\"flex-auto w-30 field-size\" *ngIf=\"field.type==='checkbox'\">\n            <mat-checkbox [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\" >Valeur</mat-checkbox>\n          </div>\n\n          <!-- <mat-radio-group class=\"form-field radio-group field-size\" aria-label=\"Select an option\" *ngIf=\"field.type==='radio'\">\n            <mat-radio-button *ngFor=\"let opt of field.value\" [value]=\"opt\">{{opt}}</mat-radio-button>\n          </mat-radio-group> -->\n          \n          <mat-form-field *ngIf=\"field.type=='radio' || field.type=='select'\" class=\"flex-auto w-30 field-size\">\n            <mat-label> Valeur </mat-label>\n            <mat-chip-list #chipList aria-label=\"Video keywords; let index=index\" multiple>\n              <mat-chip style=\"min-height: 25px;\" *ngFor=\"let option of field.value\" [selected]=\"option\"\n                [value]=\"option\" [removable]=\"true\" (removed)=\"removeKeyword(option, i,j)\">\n                {{option}}\n                <mat-icon matChipRemove>cancel</mat-icon>\n              </mat-chip>\n              <input #chipsInput placeholder=\"add...\" [matChipInputFor]=\"chipList\" [matChipInputAddOnBlur]=\"true\"\n                (matChipInputTokenEnd)=\"addKeywordFromInput($event, i,j)\"\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" (keyup)=\"onKeyPress($event,i,j)\">\n            </mat-chip-list>\n          </mat-form-field>\n              <button mat-mini-fab color=\"success\"  (click)='onAddNewField($event,i)'>\n            <mat-icon>plus_one</mat-icon>\n          </button>\n          <button mat-mini-fab color=\"warn\" class=\"delete-field\" (click)=\"onRemoveField($event,i,j)\" [disabled]=\"category.forms.length<2\">\n            <mat-icon>delete</mat-icon>\n          </button>\n          <mat-checkbox class=\"form-field\" [(ngModel)]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\">obligatoire</mat-checkbox>\n          </div>\n      </div>\n    </div>\n    <div class=\"action\">\n      <button mat-raised-button color=\"primary\" (click)='onAddNewCategory($event)'>Ajouter une cat\u00E9gorie</button>\n      <a [routerLink]=\"['/profil-list']\"  role=\"button\" mat-raised-button color=\"basic\">Liste des profils</a>\n      <button mat-raised-button color=\"basic\" type=\"submit\">Valider</button>\n    </div>\n  </form>\n</div>\n",
            styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.example-full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-aciton{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}"]
        })
    ], CreateProfileTemplateComponent);
    return CreateProfileTemplateComponent;
}());
export { CreateProfileTemplateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZS9jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU96RDtJQU9FLHdDQUFvQixFQUFlLEVBQVUsT0FBMEIsRUFBVSxLQUFxQixFQUFVLE1BQWM7UUFBMUcsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTDlILGtCQUFhLEdBQUcsS0FBSyxDQUFBO1FBQ3JCLHVCQUFrQixHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvQyxrQkFBYSxHQUFRLEVBQUUsQ0FBQTtRQUN2QixTQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ1QsT0FBRSxHQUFXLEVBQUUsQ0FBQztRQUVoQixlQUFVLEdBQVE7WUFDaEI7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLGNBQWMsRUFBRSxtQkFBbUI7Z0JBQ25DLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxLQUFLLEVBQUUsRUFBRTt3QkFDVCxLQUFL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cm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBNYXRDaGlwSW5wdXRFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvbmJvYXJkaW5nLWNyZWF0ZS1wcm9maWxlLXRlbXBsYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NyZWF0ZS1wcm9maWxlLXRlbXBsYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVQcm9maWxlVGVtcGxhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtOiBGb3JtR3JvdXBcbiAgdmFsaWRDYXRlZ29yeSA9IGZhbHNlXG4gIHNlcGFyYXRvcktleXNDb2RlcyA9IFtFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTl07XG4gIGN1cnJlbnRQcm9maWw6IGFueSA9IHt9XG4gIHRhZ3MgPSBbXVxuICBpZDogc3RyaW5nID0gJyc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG4gIGNhdGVnb3JpZXM6IGFueSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnU29mdHdhcmUnLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6ICdjYXRlZ29yeS9zb2Z0d2FyZScsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0hhcmR3YXJlJyxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiAnY2F0ZWdvcnkvaGFyZHdhcmUnLFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdOZXR3b3JrJyxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiAnY2F0ZWdvcnkvbmV0d29yaycsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxuICBhc3luYyBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgTmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIERlc2NyaXB0aW9uOiBbJyddLFxuICAgICAgVGFnczogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIFN0YXR1czogW2ZhbHNlLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pXG4gICAgdGhpcy50YWdzID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFRhZ3MoKTtcbiAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XG4gICAgaWYgKHRoaXMuaWQgIT0gJzAnKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQcm9maWwgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0UHJvZmlsKHRoaXMuaWQpO1xuICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUodGhpcy5jdXJyZW50UHJvZmlsKTtcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMuY3VycmVudFByb2ZpbC5jYXRlZ29yaWVzO1xuICAgIH1cblxuICB9XG5cbiAgb25BZGROZXdDYXRlZ29yeShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goe1xuICAgICAgbmFtZTogJycsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pXG4gIH1cblxuICBvbkFkZE5ld0ZpZWxkKGUsIGkpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMucHVzaChcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIH1cbiAgICApXG4gIH1cblxuXG4gIG9uUmVtb3ZlRmllbGQoZSwgY2F0ZWdvcnlJbmRleCwgZmllbGRJbmRleCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuY2F0ZWdvcmllc1tjYXRlZ29yeUluZGV4XS5mb3Jtcy5zcGxpY2UoZmllbGRJbmRleCwgMSlcbiAgfVxuXG4gIG9uUmVtb3ZlQ2F0ZWdvcnkoZSwgaSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuY2F0ZWdvcmllcy5zcGxpY2UoaSwgMSlcbiAgfVxuXG4gIG9uQ2hhbmdlQ2F0ZWdvcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllcy5ldmVyeSgoY2F0KSA9PiBjYXQubmFtZSAhPT0gJycgJiYgY2F0LmZvcm1zLmV2ZXJ5KChmaWVsZCkgPT4gZmllbGQubGFiZWwgIT09ICcnICYmIGZpZWxkLnR5cGUgIT09ICcnKVxuICAgICk7XG4gIH1cblxuICBhc3luYyBvblN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5mb3JtLnZhbGlkICYmIHRoaXMub25DaGFuZ2VDYXRlZ29yeSgpKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm0udmFsdWUpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5jYXRlZ29yaWVzKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaWQgIT09ICcwJyA/XG4gICAgICAgIGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGVQcm9maWwoeyAuLi50aGlzLmN1cnJlbnRQcm9maWwsIC4uLiB0aGlzLmZvcm0udmFsdWUsIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyB9KSA6XG4gICAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGVQcm9maWwoeyAuLi4gdGhpcy5mb3JtLnZhbHVlLCBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMgfSk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Byb2ZpbC1saXN0J10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJycm9yLi4uLi4uJyk7XG5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3h4eHh4eHh4eHh4eHh4eHh4JywgdGhpcy5mb3JtLnZhbHVlKTtcblxuICAgIH1cbiAgfVxuXG5cbiAgb25DaGFuZ2VUeXBlKHR5cGU6IHN0cmluZywgaW5kZXhDYXRlZ29yeTogbnVtYmVyLCBpbmRleEZpZWxkKSB7XG4gICAgaWYgKHR5cGUgPT09ICdzZWxlY3QnIHx8IHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZSA9IFtdO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbaW5kZXhDYXRlZ29yeV0uZm9ybXNbaW5kZXhGaWVsZF0udmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb25LZXlQcmVzcyhldmVudDogYW55LCBpbmRleENhdGVnb3J5LCBpbmRleEZpZWxkKSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJzsnKSB7XG4gICAgICBjb25zdCBleGlzdCA9IHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZS5maW5kKFxuICAgICAgICAob3B0KSA9PlxuICAgICAgICAgIG9wdC50b0xvY2FsZUxvd2VyQ2FzZSgpID09PVxuICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdCgnOycpWzBdLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZS5wdXNoKFxuICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdCgnOycpWzBdXG4gICAgICAgICk7XG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlS2V5d29yZChrZXl3b3JkOiBzdHJpbmcsIGluZGV4Q2F0ZWdvcnk6IG51bWJlciwgaW5kZXhGaWVsZCkge1xuICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZSA9IHRoaXMuY2F0ZWdvcmllc1tcbiAgICAgIGluZGV4Q2F0ZWdvcnlcbiAgICBdLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24gIT09IGtleXdvcmQpO1xuICB9XG5cbiAgYWRkS2V5d29yZEZyb21JbnB1dChldmVudDogTWF0Q2hpcElucHV0RXZlbnQsIGluZGV4Q2F0ZWdvcnk6IG51bWJlciwgaW5kZXhGaWVsZCkge1xuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuaW5wdXQ7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGNvbnN0IGV4aXN0ID0gdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlLmZpbmQoXG4gICAgICAgIChvcHQpID0+XG4gICAgICAgICAgb3B0LnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGV2ZW50LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZS5wdXNoKHZhbHVlLnRyaW0oKSk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7IGNvbnNvbGUubG9nKFwiV1dXV1dXV1dXV1dXXCIsIGV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQUFBQUFBQUFBQUFcIiwgZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19