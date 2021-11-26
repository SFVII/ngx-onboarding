import { __assign, __awaiter, __decorate, __generator } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnboardingService } from '../onboarding.service';
import { ActivatedRoute, Router } from '@angular/router';
var CreateProfileTemplateComponent = /** @class */ (function () {
    function CreateProfileTemplateComponent(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.validCategory = false;
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
    CreateProfileTemplateComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: OnboardingService },
        { type: ActivatedRoute },
        { type: Router }
    ]; };
    CreateProfileTemplateComponent = __decorate([
        Component({
            selector: 'onboarding-create-profile-template',
            template: "<div class=\"container\">\n  <h3>Cr\u00E9ation de profil</h3>\n  <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n    <div class=\"full-width\">\n      <label>Nom du profil</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        formControlName=\"Name\"\n        placeholder=\"Ex. Manager\"\n      />\n      <p class=\"error\" *ngIf=\"form.get('Name').hasError('required')\">\n        Profil est <strong>requis</strong>\n      </p>\n    </div>\n    <div class=\"full-width\">\n      <label>D\u00E9scription</label>\n      <textarea\n        type=\"text\"\n        class=\"form-control\"\n        formControlName=\"Description\"\n        placeholder=\"\"\n      ></textarea>\n    </div>  \n    <div class=\"full-width\">\n      <label>Tags</label>\n      <select formControlName=\"Tags\" required>\n        <option *ngFor=\"let tag of tags\" [value]=\"tag\">{{tag}}</option>\n      </select>\n    </div>\n    <div>\n    <input type=\"checkbox\" name=\"status\" formControlName=\"Status\">\n    <label for=\"status\">Active</label>\n    </div>\n\n    <hr />\n    <div class=\"category\">\n      <h2>Liste de cat\u00E9gories</h2>\n      <div class=\"category-item\" *ngFor=\"let category of categories;  let i=index\">\n        <div class=\"field-item\">\n          <div class=\"full-width input-category-name\" >\n            <label>Cat\u00E9gorie</label>\n            <input\n              type=\"text\"\n              required\n              [readonly]=\"categories.length<4\"\n              [(ngModel)]=\"category.name\"\n              [ngModelOptions]=\"{standalone: true}\"\n              placeholder=\"\"\n            />\n            <p class=\"error\" *ngIf=\"category.name == ''\">\n              Cat\u00E9gorie est <strong>requis</strong>\n            </p>\n          </div>\n          <div>\n            <button [disabled]=\"i<3\" (click)=\"onRemoveCategory($event,i)\" class=\"danger\">Supprimer</button>\n          </div>\n        </div>\n        <div class=\"field-item\" *ngFor=\"let field of category.forms;let j=index\">\n          <div class=\"full-width field-size\">\n            <label>Label</label>\n            <input\n              type=\"text\"\n              required\n              [ngModelOptions]=\"{standalone: true}\"\n              [(ngModel)]=\"field.label\"\n              placeholder=\"\"\n            />\n            <p class=\"error\" *ngIf=\"field.label === ''\">\n              Label est <strong>requis</strong>\n            </p>\n          </div>\n\n          <div class=\"full-width field-size\">\n            <label>Type</label>\n            <select [(ngModel)]=\"field.type\" required [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"onChangeType(field.type,i,j)\">\n              <option value=\"text\">Text</option>\n              <option value=\"radio\">Radio</option>\n              <option value=\"select\">Selecteur</option>\n              <option value=\"checkbox\">Checkbox</option>\n            </select>\n          </div>\n          <div class=\"full-width field-size\" *ngIf=\"field.type==='text' || field.type===''\">\n            <label>Valeur</label>\n            <input\n              type=\"text\"\n              matInput\n              [ngModelOptions]=\"{standalone: true}\"\n              [(ngModel)]=\"field.value\"\n              placeholder=\"\"\n            >\n          </div>\n          \n          <div class=\"flex-auto w-30 field-size\" *ngIf=\"field.type==='checkbox'\">\n            <input name=\"value\" type=\"checkbox\" [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\" >\n            <label for=\"value\">Valeur</label>\n          </div>\n          \n          <div *ngIf=\"field.type=='radio' || field.type=='select'\" class=\"flex-auto w-30 field-size\">\n            <label> Valeur </label>\n\n            <tag-input [(ngModel)]='field.value' placeholder=\"add...\" [ngModelOptions]=\"{standalone: true}\" ></tag-input>\n          </div>\n              <button  (click)='onAddNewField($event,i)'>\n            add\n          </button>\n          <button class=\"delete-field\" (click)=\"onRemoveField($event,i,j)\" [disabled]=\"category.forms.length<2\">\n             suppr\n          </button>\n      <div class=\"flex-auto w-30 field-size\">\n            <input name=\"value\" type=\"checkbox\"  [(ngModel)]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\" >\n            <label for=\"value\">Obligatoire</label>\n          </div>\n          </div>\n      </div>\n    </div>\n    <div class=\"action\">\n      <button (click)='onAddNewCategory($event)'>Ajouter une cat\u00E9gorie</button>\n      <a [routerLink]=\"['/profil-list']\"  role=\"button\">Liste des profils</a>\n      <button type=\"submit\">Valider</button>\n    </div>\n  </form>\n</div>\n",
            styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.example-full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-aciton{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.form-control{border:1px solid grey;border-radius:3px;padding:5px;margin:2px}.error{color:red}.ng-invalid{border-color:red}.full-width{width:100%}"]
        })
    ], CreateProfileTemplateComponent);
    return CreateProfileTemplateComponent;
}());
export { CreateProfileTemplateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZS9jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU96RDtJQU1FLHdDQUFvQixFQUFlLEVBQVUsT0FBMEIsRUFBVSxLQUFxQixFQUFVLE1BQWM7UUFBMUcsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSjlILGtCQUFhLEdBQUcsS0FBSyxDQUFBO1FBQ3JCLGtCQUFhLEdBQVEsRUFBRSxDQUFBO1FBQ3ZCLFNBQUksR0FBRyxFQUFFLENBQUE7UUFDVCxPQUFFLEdBQVcsRUFBRSxDQUFDO1FBRWhCLGVBQVUsR0FBUTtZQUNoQjtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsY0FBYyxFQUFFLG1CQUFtQjtnQkFDbkMsS0FBSyxFQUFFO29CQUNMO3dCQUNFLEtBQUssRUFBRSxFQUFFO3dCQUNULEtBQUssRUFBRSxJQUFJO3dCQUNYLFdBQVcsRUFBRSxJQUFJO3dCQUNqQixJQUFJLEVBQUUsTUFBTTtxQkFDYjtpQkFDRjthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLGNBQWMsRUFBRSxtQkFBbUI7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RCxJQWdLQztTQWhLWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvbmJvYXJkaW5nLWNyZWF0ZS1wcm9maWxlLXRlbXBsYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NyZWF0ZS1wcm9maWxlLXRlbXBsYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVQcm9maWxlVGVtcGxhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtOiBGb3JtR3JvdXBcbiAgdmFsaWRDYXRlZ29yeSA9IGZhbHNlXG4gIGN1cnJlbnRQcm9maWw6IGFueSA9IHt9XG4gIHRhZ3MgPSBbXVxuICBpZDogc3RyaW5nID0gJyc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG4gIGNhdGVnb3JpZXM6IGFueSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnU29mdHdhcmUnLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6ICdjYXRlZ29yeS9zb2Z0d2FyZScsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0hhcmR3YXJlJyxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiAnY2F0ZWdvcnkvaGFyZHdhcmUnLFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdOZXR3b3JrJyxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiAnY2F0ZWdvcnkvbmV0d29yaycsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxuICBhc3luYyBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgTmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIERlc2NyaXB0aW9uOiBbJyddLFxuICAgICAgVGFnczogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIFN0YXR1czogW2ZhbHNlLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pXG4gICAgdGhpcy50YWdzID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFRhZ3MoKTtcbiAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XG4gICAgaWYgKHRoaXMuaWQgIT0gJzAnKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQcm9maWwgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0UHJvZmlsKHRoaXMuaWQpO1xuICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUodGhpcy5jdXJyZW50UHJvZmlsKTtcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMuY3VycmVudFByb2ZpbC5jYXRlZ29yaWVzO1xuICAgIH1cblxuICB9XG5cbiAgb25BZGROZXdDYXRlZ29yeShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goe1xuICAgICAgbmFtZTogJycsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pXG4gIH1cblxuICBvbkFkZE5ld0ZpZWxkKGUsIGkpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMucHVzaChcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIH1cbiAgICApXG4gIH1cblxuXG4gIG9uUmVtb3ZlRmllbGQoZSwgY2F0ZWdvcnlJbmRleCwgZmllbGRJbmRleCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuY2F0ZWdvcmllc1tjYXRlZ29yeUluZGV4XS5mb3Jtcy5zcGxpY2UoZmllbGRJbmRleCwgMSlcbiAgfVxuXG4gIG9uUmVtb3ZlQ2F0ZWdvcnkoZSwgaSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuY2F0ZWdvcmllcy5zcGxpY2UoaSwgMSlcbiAgfVxuXG4gIG9uQ2hhbmdlQ2F0ZWdvcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllcy5ldmVyeSgoY2F0KSA9PiBjYXQubmFtZSAhPT0gJycgJiYgY2F0LmZvcm1zLmV2ZXJ5KChmaWVsZCkgPT4gZmllbGQubGFiZWwgIT09ICcnICYmIGZpZWxkLnR5cGUgIT09ICcnKVxuICAgICk7XG4gIH1cblxuICBhc3luYyBvblN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5mb3JtLnZhbGlkICYmIHRoaXMub25DaGFuZ2VDYXRlZ29yeSgpKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm0udmFsdWUpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5jYXRlZ29yaWVzKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaWQgIT09ICcwJyA/XG4gICAgICAgIGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGVQcm9maWwoeyAuLi50aGlzLmN1cnJlbnRQcm9maWwsIC4uLiB0aGlzLmZvcm0udmFsdWUsIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyB9KSA6XG4gICAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGVQcm9maWwoeyAuLi4gdGhpcy5mb3JtLnZhbHVlLCBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMgfSk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Byb2ZpbC1saXN0J10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJycm9yLi4uLi4uJyk7XG5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3h4eHh4eHh4eHh4eHh4eHh4JywgdGhpcy5mb3JtLnZhbHVlKTtcblxuICAgIH1cbiAgfVxuXG5cbiAgb25DaGFuZ2VUeXBlKHR5cGU6IHN0cmluZywgaW5kZXhDYXRlZ29yeTogbnVtYmVyLCBpbmRleEZpZWxkKSB7XG4gICAgaWYgKHR5cGUgPT09ICdzZWxlY3QnIHx8IHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZSA9IFtdO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbaW5kZXhDYXRlZ29yeV0uZm9ybXNbaW5kZXhGaWVsZF0udmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb25LZXlQcmVzcyhldmVudDogYW55LCBpbmRleENhdGVnb3J5LCBpbmRleEZpZWxkKSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJzsnKSB7XG4gICAgICBjb25zdCBleGlzdCA9IHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZS5maW5kKFxuICAgICAgICAob3B0KSA9PlxuICAgICAgICAgIG9wdC50b0xvY2FsZUxvd2VyQ2FzZSgpID09PVxuICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdCgnOycpWzBdLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZS5wdXNoKFxuICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdCgnOycpWzBdXG4gICAgICAgICk7XG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlS2V5d29yZChrZXl3b3JkOiBzdHJpbmcsIGluZGV4Q2F0ZWdvcnk6IG51bWJlciwgaW5kZXhGaWVsZCkge1xuICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZSA9IHRoaXMuY2F0ZWdvcmllc1tcbiAgICAgIGluZGV4Q2F0ZWdvcnlcbiAgICBdLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24gIT09IGtleXdvcmQpO1xuICB9XG5cbn1cbiJdfQ==