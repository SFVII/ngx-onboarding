import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { OnboardingService } from '../onboarding.service';
import { ActivatedRoute, Router } from '@angular/router';
export class CreateProfileTemplateComponent {
    constructor(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.validCategory = false;
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentProfil = {};
        this.tags = [];
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
            if (this.form && this.form.valid && this.onChangeCategory()) {
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
                console.log('xxxxxxxxxxxxxxxxx');
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
}
CreateProfileTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'onboarding-create-profile-template',
                template: "<div class=\"container\">\n  <h3>Cr\u00E9ation de profil</h3>\n  <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Nom du profil</mat-label>\n      <input\n        type=\"text\"\n        matInput\n        formControlName=\"Name\"\n        placeholder=\"Ex. Manager\"\n      />\n      <mat-error *ngIf=\"form.get('Name').hasError('required')\">\n        Profil est <strong>requis</strong>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>D\u00E9scription</mat-label>\n      <textarea\n        type=\"text\"\n        matInput\n        formControlName=\"Description\"\n        placeholder=\"\"\n      ></textarea>\n    </mat-form-field>  \n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Tags</mat-label>\n      <mat-select formControlName=\"Tags\" required>\n        <mat-option *ngFor=\"let tag of tags\" [value]=\"tag\">{{tag}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-checkbox formControlName=\"Status\">Active</mat-checkbox>\n\n    <hr />\n    <div class=\"category\">\n      <h2>Liste de cat\u00E9gories</h2>\n      <div class=\"category-item\" *ngFor=\"let category of categories;  let i=index\">\n        <div class=\"field-item\">\n          <mat-form-field class=\"example-full-width input-category-name\"  appearance=\"fill\">\n            <mat-label>Cat\u00E9gorie</mat-label>\n            <input\n              type=\"text\"\n              required\n              [readonly]=\"categories.length<4\"\n              matInput\n              [(ngModel)]=\"category.name\"\n              [ngModelOptions]=\"{standalone: true}\"\n              placeholder=\"\"\n            />\n            <mat-error *ngIf=\"category.name == ''\">\n              Cat\u00E9gorie est <strong>requis</strong>\n            </mat-error>\n          </mat-form-field>\n          <div>\n            <button [disabled]=\"i<3\" (click)=\"onRemoveCategory($event,i)\" mat-raised-button color=\"warn\">Supprimer</button>\n          </div>\n        </div>\n        <div class=\"field-item\" *ngFor=\"let field of category.forms;let j=index\">\n          <mat-form-field class=\"form-field field-size\" appearance=\"fill\">\n            <mat-label>Label</mat-label>\n            <input\n              type=\"text\"\n              matInput\n              required\n              [ngModelOptions]=\"{standalone: true}\"\n              [(ngModel)]=\"field.label\"\n              placeholder=\"\"\n            />\n            <mat-error *ngIf=\"field.label === ''\">\n              Label est <strong>requis</strong>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"form-field field-size\" appearance=\"fill\">\n            <mat-label>Type</mat-label>\n            <mat-select [(ngModel)]=\"field.type\" required [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"onChangeType(field.type,i,j)\">\n              <mat-option value=\"text\">Text</mat-option>\n              <mat-option value=\"radio\">Radio</mat-option>\n              <mat-option value=\"select\">Selecteur</mat-option>\n              <mat-option value=\"checkbox\">Checkbox</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field class=\"form-field field-size\" appearance=\"fill\" *ngIf=\"field.type==='text' || field.type===''\">\n            <mat-label>Valeur</mat-label>\n            <input\n              type=\"text\"\n              matInput\n              [ngModelOptions]=\"{standalone: true}\"\n              [(ngModel)]=\"field.value\"\n              placeholder=\"\"\n            >\n          </mat-form-field>\n<!-- \n          <mat-form-field class=\"form-field field-size\" appearance=\"fill\" *ngIf=\"field.type==='select'\">\n            <mat-label>Valeur</mat-label>\n            <mat-select [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\">\n              <mat-option *ngFor=\"let opt of field.value\" [value]=\"opt\">{{opt}}</mat-option>\n            </mat-select>\n          </mat-form-field> -->\n          \n          <div class=\"flex-auto w-30 field-size\" *ngIf=\"field.type==='checkbox'\">\n            <mat-checkbox [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\" >Valeur</mat-checkbox>\n          </div>\n\n          <!-- <mat-radio-group class=\"form-field radio-group field-size\" aria-label=\"Select an option\" *ngIf=\"field.type==='radio'\">\n            <mat-radio-button *ngFor=\"let opt of field.value\" [value]=\"opt\">{{opt}}</mat-radio-button>\n          </mat-radio-group> -->\n          \n          <mat-form-field *ngIf=\"field.type=='radio' || field.type=='select'\" class=\"flex-auto w-30 field-size\">\n            <mat-label> Valeur </mat-label>\n            <mat-chip-list #chipList aria-label=\"Video keywords; let index=index\" multiple>\n              <mat-chip style=\"min-height: 25px;\" *ngFor=\"let option of field.value\" [selected]=\"option\"\n                [value]=\"option\" [removable]=\"true\" (removed)=\"removeKeyword(option, i,j)\">\n                {{option}}\n                <mat-icon matChipRemove>cancel</mat-icon>\n              </mat-chip>\n              <input #chipsInput placeholder=\"add...\" [matChipInputFor]=\"chipList\" [matChipInputAddOnBlur]=\"true\"\n                (matChipInputTokenEnd)=\"addKeywordFromInput($event, i,j)\"\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" (keyup)=\"onKeyPress($event,i,j)\">\n            </mat-chip-list>\n          </mat-form-field>\n              <button mat-mini-fab color=\"success\"  (click)='onAddNewField($event,i)'>\n            <mat-icon>plus_one</mat-icon>\n          </button>\n          <button mat-mini-fab color=\"warn\" class=\"delete-field\" (click)=\"onRemoveField($event,i,j)\" [disabled]=\"category.forms.length<2\">\n            <mat-icon>delete</mat-icon>\n          </button>\n          <mat-checkbox class=\"form-field\" [(ngModel)]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\">obligatoire</mat-checkbox>\n          </div>\n      </div>\n    </div>\n    <div class=\"action\">\n      <button mat-raised-button color=\"primary\" (click)='onAddNewCategory($event)'>Ajouter une cat\u00E9gorie</button>\n      <a [routerLink]=\"['/profil-list']\"  role=\"button\" mat-raised-button color=\"basic\">Liste des profils</a>\n      <button mat-raised-button color=\"basic\" type=\"submit\">Valider</button>\n    </div>\n  </form>\n</div>\n",
                styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.example-full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-aciton{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}\n"]
            },] }
];
CreateProfileTemplateComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: OnboardingService },
    { type: ActivatedRoute },
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NyZWF0ZS1wcm9maWxlLXRlbXBsYXRlL2NyZWF0ZS1wcm9maWxlLXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPekQsTUFBTSxPQUFPLDhCQUE4QjtJQU96QyxZQUFvQixFQUFlLEVBQVUsT0FBMEIsRUFBVSxLQUFxQixFQUFVLE1BQWM7UUFBMUcsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTDlILGtCQUFhLEdBQUcsS0FBSyxDQUFBO1FBQ3JCLHVCQUFrQixHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvQyxrQkFBYSxHQUFRLEVBQUUsQ0FBQTtRQUN2QixTQUFJLEdBQUcsRUFBRSxDQUFBO1FBR1QsZUFBVSxHQUFRO1lBQ2hCO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixjQUFjLEVBQUUsbUJBQW1CO2dCQUNuQyxLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsS0FBSyxFQUFFLEVBQUU7d0JBQ1Qs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QWlCLEVBQUUsS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQzlELENBQUM7WUFDRixJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQzFFLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNuQztTQUNGO0lBQ0gsQ0FBQzs7O1lBdExGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxxK01BQXVEOzthQUV4RDs7O1lBVlEsV0FBVztZQUdYLGlCQUFpQjtZQUNqQixjQUFjO1lBQUUsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRU5URVIsIENPTU1BLCBTRU1JQ09MT04gfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgTWF0Q2hpcElucHV0RXZlbnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb25ib2FyZGluZy1jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NyZWF0ZS1wcm9maWxlLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlUHJvZmlsZVRlbXBsYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybTogRm9ybUdyb3VwXG4gIHZhbGlkQ2F0ZWdvcnkgPSBmYWxzZVxuICBzZXBhcmF0b3JLZXlzQ29kZXMgPSBbRU5URVIsIENPTU1BLCBTRU1JQ09MT05dO1xuICBjdXJyZW50UHJvZmlsOiBhbnkgPSB7fVxuICB0YWdzID0gW11cbiAgaWQ6IGFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cbiAgY2F0ZWdvcmllczogYW55ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdTb2Z0d2FyZScsXG4gICAgICBzdWZmaXhFbmRwb2ludDogJ2NhdGVnb3J5L3NvZnR3YXJlJyxcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJycsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnSGFyZHdhcmUnLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6ICdjYXRlZ29yeS9oYXJkd2FyZScsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ05ldHdvcmsnLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6ICdjYXRlZ29yeS9uZXR3b3JrJyxcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJycsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBOYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgRGVzY3JpcHRpb246IFsnJ10sXG4gICAgICBUYWdzOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgU3RhdHVzOiBbZmFsc2UsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSlcbiAgICB0aGlzLnRhZ3MgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsVGFncygpO1xuICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcbiAgICBpZiAodGhpcy5pZCAhPSAnMCcpIHtcbiAgICAgIHRoaXMuY3VycmVudFByb2ZpbCA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRQcm9maWwodGhpcy5pZCk7XG4gICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh0aGlzLmN1cnJlbnRQcm9maWwpO1xuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5jdXJyZW50UHJvZmlsLmNhdGVnb3JpZXM7XG4gICAgfVxuXG4gIH1cblxuICBvbkFkZE5ld0NhdGVnb3J5KGU6IGFueSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KVxuICB9XG5cbiAgb25BZGROZXdGaWVsZChlOiBhbnksIGk6IGFueSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtcy5wdXNoKFxuICAgICAge1xuICAgICAgICBsYWJlbDogJycsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgfVxuICAgIClcbiAgfVxuXG5cbiAgb25SZW1vdmVGaWVsZChlOiBhbnksIGNhdGVnb3J5SW5kZXg6IGFueSwgZmllbGRJbmRleDogYW55KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5jYXRlZ29yaWVzW2NhdGVnb3J5SW5kZXhdLmZvcm1zLnNwbGljZShmaWVsZEluZGV4LCAxKVxuICB9XG5cbiAgb25SZW1vdmVDYXRlZ29yeShlOiBhbnksIGk6IGFueSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuY2F0ZWdvcmllcy5zcGxpY2UoaSwgMSlcbiAgfVxuXG4gIG9uQ2hhbmdlQ2F0ZWdvcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllcy5ldmVyeSgoY2F0OiBhbnkpID0+IGNhdC5uYW1lICE9PSAnJyAmJiBjYXQuZm9ybXMuZXZlcnkoKGZpZWxkOiBhbnkpID0+IGZpZWxkLmxhYmVsICE9PSAnJyAmJiBmaWVsZC50eXBlICE9PSAnJylcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgb25TdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybSAmJiB0aGlzLmZvcm0udmFsaWQgJiYgdGhpcy5vbkNoYW5nZUNhdGVnb3J5KCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNhdGVnb3JpZXMpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5pZCAhPT0gJzAnID9cbiAgICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZVByb2ZpbCh7IC4uLnRoaXMuY3VycmVudFByb2ZpbCwgLi4uIHRoaXMuZm9ybS52YWx1ZSwgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzIH0pIDpcbiAgICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZVByb2ZpbCh7IC4uLiB0aGlzLmZvcm0udmFsdWUsIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyB9KTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcHJvZmlsLWxpc3QnXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJyb3IuLi4uLi4nKTtcblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygneHh4eHh4eHh4eHh4eHh4eHgnKTtcblxuICAgIH1cbiAgfVxuXG5cbiAgb25DaGFuZ2VUeXBlKHR5cGU6IHN0cmluZywgaW5kZXhDYXRlZ29yeTogbnVtYmVyLCBpbmRleEZpZWxkOiBhbnkpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcgfHwgdHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlID0gW107XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAndGV4dCcpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbaW5kZXhDYXRlZ29yeV0uZm9ybXNbaW5kZXhGaWVsZF0udmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvbktleVByZXNzKGV2ZW50OiBhbnksIGluZGV4Q2F0ZWdvcnk6IGFueSwgaW5kZXhGaWVsZDogYW55KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJzsnKSB7XG4gICAgICBjb25zdCBleGlzdCA9IHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZS5maW5kKFxuICAgICAgICAob3B0OiBhbnkpID0+XG4gICAgICAgICAgb3B0LnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KCc7JylbMF0udG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIGlmICghZXhpc3QpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlLnB1c2goXG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KCc7JylbMF1cbiAgICAgICAgKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVLZXl3b3JkKGtleXdvcmQ6IHN0cmluZywgaW5kZXhDYXRlZ29yeTogbnVtYmVyLCBpbmRleEZpZWxkOiBhbnkpIHtcbiAgICB0aGlzLmNhdGVnb3JpZXNbaW5kZXhDYXRlZ29yeV0uZm9ybXNbaW5kZXhGaWVsZF0udmFsdWUgPSB0aGlzLmNhdGVnb3JpZXNbXG4gICAgICBpbmRleENhdGVnb3J5XG4gICAgXS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZS5maWx0ZXIoKG9wdGlvbjogYW55KSA9PiBvcHRpb24gIT09IGtleXdvcmQpO1xuICB9XG5cbiAgYWRkS2V5d29yZEZyb21JbnB1dChldmVudDogTWF0Q2hpcElucHV0RXZlbnQsIGluZGV4Q2F0ZWdvcnk6IG51bWJlciwgaW5kZXhGaWVsZDogYW55KSB7XG4gICAgY29uc3QgaW5wdXQgPSBldmVudC5pbnB1dDtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnZhbHVlO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgZXhpc3QgPSB0aGlzLmNhdGVnb3JpZXNbaW5kZXhDYXRlZ29yeV0uZm9ybXNbaW5kZXhGaWVsZF0udmFsdWUuZmluZChcbiAgICAgICAgKG9wdDogYW55KSA9PlxuICAgICAgICAgIG9wdC50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBldmVudC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgICApO1xuICAgICAgaWYgKCFleGlzdCkge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbaW5kZXhDYXRlZ29yeV0uZm9ybXNbaW5kZXhGaWVsZF0udmFsdWUucHVzaCh2YWx1ZS50cmltKCkpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnOyBjb25zb2xlLmxvZyhcIldXV1dXV1dXV1dXV1wiLCBldmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFBQUFBQUFBQUFBXCIsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==