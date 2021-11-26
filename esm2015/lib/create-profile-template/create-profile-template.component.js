import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { OnboardingService } from '../onboarding.service';
import { ActivatedRoute, Router } from '@angular/router';
let CreateProfileTemplateComponent = class CreateProfileTemplateComponent {
    constructor(fb, service, route, router) {
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
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.form = this.fb.group({
                Name: ['', Validators.required],
                Description: [''],
                Tags: ['', Validators.required],
                Status: [false, Validators.required]
            });
            this.tags = yield this.service.getAllTags();
            this.id = this.route.snapshot.paramMap.get('id');
            if (this.id != '0') {
                this.currentProfil = yield this.service.getProfil(this.id);
                this.form.patchValue(this.currentProfil);
                this.categories = this.currentProfil.categories;
            }
        });
    }
    onAddNewCategory(e) {
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
    }
    onAddNewField(e, i) {
        e.preventDefault();
        this.categories[i].forms.push({
            label: '',
            value: null,
            isMandatory: true,
            type: 'text',
        });
    }
    onRemoveField(e, categoryIndex, fieldIndex) {
        e.preventDefault();
        this.categories[categoryIndex].forms.splice(fieldIndex, 1);
    }
    onRemoveCategory(e, i) {
        e.preventDefault();
        this.categories.splice(i, 1);
    }
    onChangeCategory() {
        return this.categories.every((cat) => cat.name !== '' && cat.forms.every((field) => field.label !== '' && field.type !== ''));
    }
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.form.valid && this.onChangeCategory()) {
                console.log(this.form.value);
                console.log(this.categories);
                const result = this.id !== '0' ?
                    yield this.service.updateProfil(Object.assign(Object.assign(Object.assign({}, this.currentProfil), this.form.value), { categories: this.categories })) :
                    yield this.service.createProfil(Object.assign(Object.assign({}, this.form.value), { categories: this.categories }));
                if (result) {
                    this.router.navigate(['/profil-list']);
                }
                else {
                    console.log('errror......');
                }
            }
            else {
                console.log('xxxxxxxxxxxxxxxxx', this.form.value);
            }
        });
    }
    onChangeType(type, indexCategory, indexField) {
        if (type === 'select' || type === 'radio') {
            this.categories[indexCategory].forms[indexField].value = [];
        }
        else if (type === 'text') {
            this.categories[indexCategory].forms[indexField].value = '';
        }
        else {
            this.categories[indexCategory].forms[indexField].value = false;
        }
    }
    onKeyPress(event, indexCategory, indexField) {
        if (event.key === ';') {
            const exist = this.categories[indexCategory].forms[indexField].value.find((opt) => opt.toLocaleLowerCase() ===
                event.target.value.split(';')[0].toLocaleLowerCase());
            if (!exist) {
                this.categories[indexCategory].forms[indexField].value.push(event.target.value.split(';')[0]);
                event.target.value = '';
            }
            else {
                event.target.value = '';
            }
        }
    }
    removeKeyword(keyword, indexCategory, indexField) {
        this.categories[indexCategory].forms[indexField].value = this.categories[indexCategory].forms[indexField].value.filter((option) => option !== keyword);
    }
    addKeywordFromInput(event, indexCategory, indexField) {
        const input = event.input;
        const value = event.value;
        if (value) {
            const exist = this.categories[indexCategory].forms[indexField].value.find((opt) => opt.toLocaleLowerCase() === event.value.toLocaleLowerCase());
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
    }
};
CreateProfileTemplateComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: OnboardingService },
    { type: ActivatedRoute },
    { type: Router }
];
CreateProfileTemplateComponent = __decorate([
    Component({
        selector: 'onboarding-create-profile-template',
        template: "<div class=\"container\">\n  <h3>Cr\u00E9ation de profil</h3>\n  <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Nom du profil</mat-label>\n      <input\n        type=\"text\"\n        matInput\n        formControlName=\"Name\"\n        placeholder=\"Ex. Manager\"\n      />\n      <mat-error *ngIf=\"form.get('Name').hasError('required')\">\n        Profil est <strong>requis</strong>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>D\u00E9scription</mat-label>\n      <textarea\n        type=\"text\"\n        matInput\n        formControlName=\"Description\"\n        placeholder=\"\"\n      ></textarea>\n    </mat-form-field>  \n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Tags</mat-label>\n      <mat-select formControlName=\"Tags\" required>\n        <mat-option *ngFor=\"let tag of tags\" [value]=\"tag\">{{tag}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-checkbox formControlName=\"Status\">Active</mat-checkbox>\n\n    <hr />\n    <div class=\"category\">\n      <h2>Liste de cat\u00E9gories</h2>\n      <div class=\"category-item\" *ngFor=\"let category of categories;  let i=index\">\n        <div class=\"field-item\">\n          <mat-form-field class=\"example-full-width input-category-name\"  appearance=\"fill\">\n            <mat-label>Cat\u00E9gorie</mat-label>\n            <input\n              type=\"text\"\n              required\n              [readonly]=\"categories.length<4\"\n              matInput\n              [(ngModel)]=\"category.name\"\n              [ngModelOptions]=\"{standalone: true}\"\n              placeholder=\"\"\n            />\n            <mat-error *ngIf=\"category.name == ''\">\n              Cat\u00E9gorie est <strong>requis</strong>\n            </mat-error>\n          </mat-form-field>\n          <div>\n            <button [disabled]=\"i<3\" (click)=\"onRemoveCategory($event,i)\" mat-raised-button color=\"warn\">Supprimer</button>\n          </div>\n        </div>\n        <div class=\"field-item\" *ngFor=\"let field of category.forms;let j=index\">\n          <mat-form-field class=\"form-field field-size\" appearance=\"fill\">\n            <mat-label>Label</mat-label>\n            <input\n              type=\"text\"\n              matInput\n              required\n              [ngModelOptions]=\"{standalone: true}\"\n              [(ngModel)]=\"field.label\"\n              placeholder=\"\"\n            />\n            <mat-error *ngIf=\"field.label === ''\">\n              Label est <strong>requis</strong>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"form-field field-size\" appearance=\"fill\">\n            <mat-label>Type</mat-label>\n            <mat-select [(ngModel)]=\"field.type\" required [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"onChangeType(field.type,i,j)\">\n              <mat-option value=\"text\">Text</mat-option>\n              <mat-option value=\"radio\">Radio</mat-option>\n              <mat-option value=\"select\">Selecteur</mat-option>\n              <mat-option value=\"checkbox\">Checkbox</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field class=\"form-field field-size\" appearance=\"fill\" *ngIf=\"field.type==='text' || field.type===''\">\n            <mat-label>Valeur</mat-label>\n            <input\n              type=\"text\"\n              matInput\n              [ngModelOptions]=\"{standalone: true}\"\n              [(ngModel)]=\"field.value\"\n              placeholder=\"\"\n            >\n          </mat-form-field>\n<!-- \n          <mat-form-field class=\"form-field field-size\" appearance=\"fill\" *ngIf=\"field.type==='select'\">\n            <mat-label>Valeur</mat-label>\n            <mat-select [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\">\n              <mat-option *ngFor=\"let opt of field.value\" [value]=\"opt\">{{opt}}</mat-option>\n            </mat-select>\n          </mat-form-field> -->\n          \n          <div class=\"flex-auto w-30 field-size\" *ngIf=\"field.type==='checkbox'\">\n            <mat-checkbox [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\" >Valeur</mat-checkbox>\n          </div>\n\n          <!-- <mat-radio-group class=\"form-field radio-group field-size\" aria-label=\"Select an option\" *ngIf=\"field.type==='radio'\">\n            <mat-radio-button *ngFor=\"let opt of field.value\" [value]=\"opt\">{{opt}}</mat-radio-button>\n          </mat-radio-group> -->\n          \n          <mat-form-field *ngIf=\"field.type=='radio' || field.type=='select'\" class=\"flex-auto w-30 field-size\">\n            <mat-label> Valeur </mat-label>\n            <mat-chip-list #chipList aria-label=\"Video keywords; let index=index\" multiple>\n              <mat-chip style=\"min-height: 25px;\" *ngFor=\"let option of field.value\" [selected]=\"option\"\n                [value]=\"option\" [removable]=\"true\" (removed)=\"removeKeyword(option, i,j)\">\n                {{option}}\n                <mat-icon matChipRemove>cancel</mat-icon>\n              </mat-chip>\n              <input #chipsInput placeholder=\"add...\" [matChipInputFor]=\"chipList\" [matChipInputAddOnBlur]=\"true\"\n                (matChipInputTokenEnd)=\"addKeywordFromInput($event, i,j)\"\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" (keyup)=\"onKeyPress($event,i,j)\">\n            </mat-chip-list>\n          </mat-form-field>\n              <button mat-mini-fab color=\"success\"  (click)='onAddNewField($event,i)'>\n            <mat-icon>plus_one</mat-icon>\n          </button>\n          <button mat-mini-fab color=\"warn\" class=\"delete-field\" (click)=\"onRemoveField($event,i,j)\" [disabled]=\"category.forms.length<2\">\n            <mat-icon>delete</mat-icon>\n          </button>\n          <mat-checkbox class=\"form-field\" [(ngModel)]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\">obligatoire</mat-checkbox>\n          </div>\n      </div>\n    </div>\n    <div class=\"action\">\n      <button mat-raised-button color=\"primary\" (click)='onAddNewCategory($event)'>Ajouter une cat\u00E9gorie</button>\n      <a [routerLink]=\"['/profil-list']\"  role=\"button\" mat-raised-button color=\"basic\">Liste des profils</a>\n      <button mat-raised-button color=\"basic\" type=\"submit\">Valider</button>\n    </div>\n  </form>\n</div>\n",
        styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.example-full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-aciton{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}"]
    })
], CreateProfileTemplateComponent);
export { CreateProfileTemplateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZS9jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU96RCxJQUFhLDhCQUE4QixHQUEzQyxNQUFhLDhCQUE4QjtJQU96QyxZQUFvQixFQUFlLEVBQVUsT0FBMEIsRUFBVSxLQUFxQixFQUFVLE1BQWM7UUFBMUcsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTDlILGtCQUFhLEdBQUcsS0FBSyxDQUFBO1FBQ3JCLHVCQUFrQixHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvQyxrQkFBYSxHQUFRLEVBQUUsQ0FBQTtRQUN2QixTQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ1QsT0FBRSxHQUFXLEVBQUUsQ0FBQztRQUVoQixlQUFVLEdBQVE7WUFDaEI7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLGNBQWMsRUFBRSxtQkFBbUI7Z0JBQ25DLEtBQUssRUFBRTtvQkFDTDt3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LEdBQUcsRUFBRSxFQUFFLENBQ04sR0FBRyxDQUFDLGlCQUFpQixFQUFFLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUM5RCxDQUFDO1lBQ0YsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDVixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUMxRSxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN0RDtpQkFBTTtnQkFDTCxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDbkM7U0FDRjtJQUNILENBQUM7Q0FDRixDQUFBOztZQTNLeUIsV0FBVztZQUFtQixpQkFBaUI7WUFBaUIsY0FBYztZQUFrQixNQUFNOztBQVBuSCw4QkFBOEI7SUFMMUMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9DQUFvQztRQUM5QyxxK01BQXVEOztLQUV4RCxDQUFDO0dBQ1csOEJBQThCLENBa0wxQztTQWxMWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVOVEVSLCBDT01NQSwgU0VNSUNPTE9OIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IE1hdENoaXBJbnB1dEV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29uYm9hcmRpbmctY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZVByb2ZpbGVUZW1wbGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm06IEZvcm1Hcm91cFxuICB2YWxpZENhdGVnb3J5ID0gZmFsc2VcbiAgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQSwgU0VNSUNPTE9OXTtcbiAgY3VycmVudFByb2ZpbDogYW55ID0ge31cbiAgdGFncyA9IFtdXG4gIGlkOiBzdHJpbmcgPSAnJztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cbiAgY2F0ZWdvcmllczogYW55ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdTb2Z0d2FyZScsXG4gICAgICBzdWZmaXhFbmRwb2ludDogJ2NhdGVnb3J5L3NvZnR3YXJlJyxcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJycsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnSGFyZHdhcmUnLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6ICdjYXRlZ29yeS9oYXJkd2FyZScsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ05ldHdvcmsnLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6ICdjYXRlZ29yeS9uZXR3b3JrJyxcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJycsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBOYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgRGVzY3JpcHRpb246IFsnJ10sXG4gICAgICBUYWdzOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgU3RhdHVzOiBbZmFsc2UsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSlcbiAgICB0aGlzLnRhZ3MgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsVGFncygpO1xuICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcbiAgICBpZiAodGhpcy5pZCAhPSAnMCcpIHtcbiAgICAgIHRoaXMuY3VycmVudFByb2ZpbCA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRQcm9maWwodGhpcy5pZCk7XG4gICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh0aGlzLmN1cnJlbnRQcm9maWwpO1xuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5jdXJyZW50UHJvZmlsLmNhdGVnb3JpZXM7XG4gICAgfVxuXG4gIH1cblxuICBvbkFkZE5ld0NhdGVnb3J5KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLmNhdGVnb3JpZXMucHVzaCh7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJycsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSlcbiAgfVxuXG4gIG9uQWRkTmV3RmllbGQoZSwgaSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtcy5wdXNoKFxuICAgICAge1xuICAgICAgICBsYWJlbDogJycsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgfVxuICAgIClcbiAgfVxuXG5cbiAgb25SZW1vdmVGaWVsZChlLCBjYXRlZ29yeUluZGV4LCBmaWVsZEluZGV4KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5jYXRlZ29yaWVzW2NhdGVnb3J5SW5kZXhdLmZvcm1zLnNwbGljZShmaWVsZEluZGV4LCAxKVxuICB9XG5cbiAgb25SZW1vdmVDYXRlZ29yeShlLCBpKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5jYXRlZ29yaWVzLnNwbGljZShpLCAxKVxuICB9XG5cbiAgb25DaGFuZ2VDYXRlZ29yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzLmV2ZXJ5KChjYXQpID0+IGNhdC5uYW1lICE9PSAnJyAmJiBjYXQuZm9ybXMuZXZlcnkoKGZpZWxkKSA9PiBmaWVsZC5sYWJlbCAhPT0gJycgJiYgZmllbGQudHlwZSAhPT0gJycpXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIG9uU3VibWl0KCkge1xuICAgIGlmICh0aGlzLmZvcm0udmFsaWQgJiYgdGhpcy5vbkNoYW5nZUNhdGVnb3J5KCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNhdGVnb3JpZXMpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5pZCAhPT0gJzAnID9cbiAgICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZVByb2ZpbCh7IC4uLnRoaXMuY3VycmVudFByb2ZpbCwgLi4uIHRoaXMuZm9ybS52YWx1ZSwgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzIH0pIDpcbiAgICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZVByb2ZpbCh7IC4uLiB0aGlzLmZvcm0udmFsdWUsIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyB9KTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcHJvZmlsLWxpc3QnXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJyb3IuLi4uLi4nKTtcblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygneHh4eHh4eHh4eHh4eHh4eHgnLCB0aGlzLmZvcm0udmFsdWUpO1xuXG4gICAgfVxuICB9XG5cblxuICBvbkNoYW5nZVR5cGUodHlwZTogc3RyaW5nLCBpbmRleENhdGVnb3J5OiBudW1iZXIsIGluZGV4RmllbGQpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcgfHwgdHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlID0gW107XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAndGV4dCcpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbaW5kZXhDYXRlZ29yeV0uZm9ybXNbaW5kZXhGaWVsZF0udmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvbktleVByZXNzKGV2ZW50OiBhbnksIGluZGV4Q2F0ZWdvcnksIGluZGV4RmllbGQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnOycpIHtcbiAgICAgIGNvbnN0IGV4aXN0ID0gdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlLmZpbmQoXG4gICAgICAgIChvcHQpID0+XG4gICAgICAgICAgb3B0LnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KCc7JylbMF0udG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIGlmICghZXhpc3QpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlLnB1c2goXG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KCc7JylbMF1cbiAgICAgICAgKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVLZXl3b3JkKGtleXdvcmQ6IHN0cmluZywgaW5kZXhDYXRlZ29yeTogbnVtYmVyLCBpbmRleEZpZWxkKSB7XG4gICAgdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlID0gdGhpcy5jYXRlZ29yaWVzW1xuICAgICAgaW5kZXhDYXRlZ29yeVxuICAgIF0uZm9ybXNbaW5kZXhGaWVsZF0udmFsdWUuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbiAhPT0ga2V5d29yZCk7XG4gIH1cblxuICBhZGRLZXl3b3JkRnJvbUlucHV0KGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCwgaW5kZXhDYXRlZ29yeTogbnVtYmVyLCBpbmRleEZpZWxkKSB7XG4gICAgY29uc3QgaW5wdXQgPSBldmVudC5pbnB1dDtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnZhbHVlO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgZXhpc3QgPSB0aGlzLmNhdGVnb3JpZXNbaW5kZXhDYXRlZ29yeV0uZm9ybXNbaW5kZXhGaWVsZF0udmFsdWUuZmluZChcbiAgICAgICAgKG9wdCkgPT5cbiAgICAgICAgICBvcHQudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gZXZlbnQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIGlmICghZXhpc3QpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlLnB1c2godmFsdWUudHJpbSgpKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJzsgY29uc29sZS5sb2coXCJXV1dXV1dXV1dXV1dcIiwgZXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgY29uc29sZS5sb2coXCJBQUFBQUFBQUFBQVwiLCBldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=