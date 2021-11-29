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
                    this.router.navigate(['./../']);
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
        template: "<div class=\"container\">\n  <h3>Cr\u00E9ation de profil</h3>\n  <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Nom du profil</mat-label>\n      <input\n        type=\"text\"\n        matInput\n        formControlName=\"Name\"\n        placeholder=\"Ex. Manager\"\n      />\n      <mat-error *ngIf=\"form.get('Name').hasError('required')\">\n        Profil est <strong>requis</strong>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>D\u00E9scription</mat-label>\n      <textarea\n        type=\"text\"\n        matInput\n        formControlName=\"Description\"\n        placeholder=\"\"\n      ></textarea>\n    </mat-form-field>  \n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Tags</mat-label>\n      <mat-select formControlName=\"Tags\" required>\n        <mat-option *ngFor=\"let tag of tags\" [value]=\"tag\">{{tag}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-checkbox formControlName=\"Status\">Active</mat-checkbox>\n\n    <hr />\n    <div class=\"category\">\n      <h2>Liste de cat\u00E9gories</h2>\n      <div class=\"category-item\" *ngFor=\"let category of categories;  let i=index\">\n        <div class=\"field-item\">\n          <mat-form-field class=\"example-full-width input-category-name\"  appearance=\"fill\">\n            <mat-label>Cat\u00E9gorie</mat-label>\n            <input\n              type=\"text\"\n              required\n              [readonly]=\"categories.length<4\"\n              matInput\n              [(ngModel)]=\"category.name\"\n              [ngModelOptions]=\"{standalone: true}\"\n              placeholder=\"\"\n            />\n            <mat-error *ngIf=\"category.name == ''\">\n              Cat\u00E9gorie est <strong>requis</strong>\n            </mat-error>\n          </mat-form-field>\n          <div>\n            <button [disabled]=\"i<3\" (click)=\"onRemoveCategory($event,i)\" mat-raised-button color=\"warn\">Supprimer</button>\n          </div>\n        </div>\n        <div class=\"field-item\" *ngFor=\"let field of category.forms;let j=index\">\n          <mat-form-field class=\"form-field field-size\" appearance=\"fill\">\n            <mat-label>Label</mat-label>\n            <input\n              type=\"text\"\n              matInput\n              required\n              [ngModelOptions]=\"{standalone: true}\"\n              [(ngModel)]=\"field.label\"\n              placeholder=\"\"\n            />\n            <mat-error *ngIf=\"field.label === ''\">\n              Label est <strong>requis</strong>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"form-field field-size\" appearance=\"fill\">\n            <mat-label>Type</mat-label>\n            <mat-select [(ngModel)]=\"field.type\" required [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"onChangeType(field.type,i,j)\">\n              <mat-option value=\"text\">Text</mat-option>\n              <mat-option value=\"radio\">Radio</mat-option>\n              <mat-option value=\"select\">Selecteur</mat-option>\n              <mat-option value=\"checkbox\">Checkbox</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field class=\"form-field field-size\" appearance=\"fill\" *ngIf=\"field.type==='text' || field.type===''\">\n            <mat-label>Valeur</mat-label>\n            <input\n              type=\"text\"\n              matInput\n              [ngModelOptions]=\"{standalone: true}\"\n              [(ngModel)]=\"field.value\"\n              placeholder=\"\"\n            >\n          </mat-form-field>\n<!-- \n          <mat-form-field class=\"form-field field-size\" appearance=\"fill\" *ngIf=\"field.type==='select'\">\n            <mat-label>Valeur</mat-label>\n            <mat-select [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\">\n              <mat-option *ngFor=\"let opt of field.value\" [value]=\"opt\">{{opt}}</mat-option>\n            </mat-select>\n          </mat-form-field> -->\n          \n          <div class=\"flex-auto w-30 field-size\" *ngIf=\"field.type==='checkbox'\">\n            <mat-checkbox [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\" >Valeur</mat-checkbox>\n          </div>\n\n          <!-- <mat-radio-group class=\"form-field radio-group field-size\" aria-label=\"Select an option\" *ngIf=\"field.type==='radio'\">\n            <mat-radio-button *ngFor=\"let opt of field.value\" [value]=\"opt\">{{opt}}</mat-radio-button>\n          </mat-radio-group> -->\n          \n          <mat-form-field *ngIf=\"field.type=='radio' || field.type=='select'\" class=\"flex-auto w-30 field-size\">\n            <mat-label> Valeur </mat-label>\n            <mat-chip-list #chipList aria-label=\"Video keywords; let index=index\" multiple>\n              <mat-chip style=\"min-height: 25px;\" *ngFor=\"let option of field.value\" [selected]=\"option\"\n                [value]=\"option\" [removable]=\"true\" (removed)=\"removeKeyword(option, i,j)\">\n                {{option}}\n                <mat-icon matChipRemove>cancel</mat-icon>\n              </mat-chip>\n              <input #chipsInput placeholder=\"add...\" [matChipInputFor]=\"chipList\" [matChipInputAddOnBlur]=\"true\"\n                (matChipInputTokenEnd)=\"addKeywordFromInput($event, i,j)\"\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" (keyup)=\"onKeyPress($event,i,j)\">\n            </mat-chip-list>\n          </mat-form-field>\n              <button mat-mini-fab color=\"success\"  (click)='onAddNewField($event,i)'>\n            <mat-icon>plus_one</mat-icon>\n          </button>\n          <button mat-mini-fab color=\"warn\" class=\"delete-field\" (click)=\"onRemoveField($event,i,j)\" [disabled]=\"category.forms.length<2\">\n            <mat-icon>delete</mat-icon>\n          </button>\n          <mat-checkbox class=\"form-field\" [(ngModel)]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\">obligatoire</mat-checkbox>\n          </div>\n      </div>\n    </div>\n    <div class=\"action\">\n      <button mat-raised-button color=\"primary\" (click)='onAddNewCategory($event)'>Ajouter une cat\u00E9gorie</button>\n      <a [routerLink]=\"[service.mainPath]\"  role=\"button\" mat-raised-button color=\"basic\">Liste des profils</a>\n      <button mat-raised-button color=\"basic\" type=\"submit\">Valider</button>\n    </div>\n  </form>\n</div>\n",
        styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.example-full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-aciton{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}"]
    })
], CreateProfileTemplateComponent);
export { CreateProfileTemplateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZS9jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU96RCxJQUFhLDhCQUE4QixHQUEzQyxNQUFhLDhCQUE4QjtJQU96QyxZQUFvQixFQUFlLEVBQVMsT0FBMEIsRUFBVSxLQUFxQixFQUFVLE1BQWM7UUFBekcsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTDdILGtCQUFhLEdBQUcsS0FBSyxDQUFBO1FBQ3JCLHVCQUFrQixHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvQyxrQkFBYSxHQUFRLEVBQUUsQ0FBQTtRQUN2QixTQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ1QsT0FBRSxHQUFXLEVBQUUsQ0FBQztRQUVoQixlQUFVLEdBQVE7WUFDaEI7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLGNBQWMsRUFBRSxtQkFBbUI7Z0JBQ25DLEtBQUssRUFBRTtvQkFDTDt3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LEdBQUcsRUFBRSxFQUFFLENBQ04sR0FBRyxDQUFDLGlCQUFpQixFQUFFLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUM5RCxDQUFDO1lBQ0YsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDVixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUMxRSxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN0RDtpQkFBTTtnQkFDTCxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDbkM7U0FDRjtJQUNILENBQUM7Q0FDRixDQUFBOztZQTNLeUIsV0FBVztZQUFrQixpQkFBaUI7WUFBaUIsY0FBYztZQUFrQixNQUFNOztBQVBsSCw4QkFBOEI7SUFMMUMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9DQUFvQztRQUM5Qyx1K01BQXVEOztLQUV4RCxDQUFDO0dBQ1csOEJBQThCLENBa0wxQztTQWxMWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVOVEVSLCBDT01NQSwgU0VNSUNPTE9OIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IE1hdENoaXBJbnB1dEV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29uYm9hcmRpbmctY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZVByb2ZpbGVUZW1wbGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm06IEZvcm1Hcm91cFxuICB2YWxpZENhdGVnb3J5ID0gZmFsc2VcbiAgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQSwgU0VNSUNPTE9OXTtcbiAgY3VycmVudFByb2ZpbDogYW55ID0ge31cbiAgdGFncyA9IFtdXG4gIGlkOiBzdHJpbmcgPSAnJztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuICBjYXRlZ29yaWVzOiBhbnkgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1NvZnR3YXJlJyxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiAnY2F0ZWdvcnkvc29mdHdhcmUnLFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdIYXJkd2FyZScsXG4gICAgICBzdWZmaXhFbmRwb2ludDogJ2NhdGVnb3J5L2hhcmR3YXJlJyxcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJycsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTmV0d29yaycsXG4gICAgICBzdWZmaXhFbmRwb2ludDogJ2NhdGVnb3J5L25ldHdvcmsnLFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBEZXNjcmlwdGlvbjogWycnXSxcbiAgICAgIFRhZ3M6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBTdGF0dXM6IFtmYWxzZSwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KVxuICAgIHRoaXMudGFncyA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxUYWdzKCk7XG4gICAgdGhpcy5pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xuICAgIGlmICh0aGlzLmlkICE9ICcwJykge1xuICAgICAgdGhpcy5jdXJyZW50UHJvZmlsID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldFByb2ZpbCh0aGlzLmlkKTtcbiAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHRoaXMuY3VycmVudFByb2ZpbCk7XG4gICAgICB0aGlzLmNhdGVnb3JpZXMgPSB0aGlzLmN1cnJlbnRQcm9maWwuY2F0ZWdvcmllcztcbiAgICB9XG5cbiAgfVxuXG4gIG9uQWRkTmV3Q2F0ZWdvcnkoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KVxuICB9XG5cbiAgb25BZGROZXdGaWVsZChlLCBpKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zLnB1c2goXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB9XG4gICAgKVxuICB9XG5cblxuICBvblJlbW92ZUZpZWxkKGUsIGNhdGVnb3J5SW5kZXgsIGZpZWxkSW5kZXgpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLmNhdGVnb3JpZXNbY2F0ZWdvcnlJbmRleF0uZm9ybXMuc3BsaWNlKGZpZWxkSW5kZXgsIDEpXG4gIH1cblxuICBvblJlbW92ZUNhdGVnb3J5KGUsIGkpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLmNhdGVnb3JpZXMuc3BsaWNlKGksIDEpXG4gIH1cblxuICBvbkNoYW5nZUNhdGVnb3J5KCkge1xuICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXMuZXZlcnkoKGNhdCkgPT4gY2F0Lm5hbWUgIT09ICcnICYmIGNhdC5mb3Jtcy5ldmVyeSgoZmllbGQpID0+IGZpZWxkLmxhYmVsICE9PSAnJyAmJiBmaWVsZC50eXBlICE9PSAnJylcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgb25TdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCAmJiB0aGlzLm9uQ2hhbmdlQ2F0ZWdvcnkoKSkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtLnZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2F0ZWdvcmllcyk7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmlkICE9PSAnMCcgP1xuICAgICAgICBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlUHJvZmlsKHsgLi4udGhpcy5jdXJyZW50UHJvZmlsLCAuLi4gdGhpcy5mb3JtLnZhbHVlLCBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMgfSkgOlxuICAgICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuY3JlYXRlUHJvZmlsKHsgLi4uIHRoaXMuZm9ybS52YWx1ZSwgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzIH0pO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vLi4vJ10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJycm9yLi4uLi4uJyk7XG5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3h4eHh4eHh4eHh4eHh4eHh4JywgdGhpcy5mb3JtLnZhbHVlKTtcblxuICAgIH1cbiAgfVxuXG5cbiAgb25DaGFuZ2VUeXBlKHR5cGU6IHN0cmluZywgaW5kZXhDYXRlZ29yeTogbnVtYmVyLCBpbmRleEZpZWxkKSB7XG4gICAgaWYgKHR5cGUgPT09ICdzZWxlY3QnIHx8IHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZSA9IFtdO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbaW5kZXhDYXRlZ29yeV0uZm9ybXNbaW5kZXhGaWVsZF0udmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb25LZXlQcmVzcyhldmVudDogYW55LCBpbmRleENhdGVnb3J5LCBpbmRleEZpZWxkKSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJzsnKSB7XG4gICAgICBjb25zdCBleGlzdCA9IHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZS5maW5kKFxuICAgICAgICAob3B0KSA9PlxuICAgICAgICAgIG9wdC50b0xvY2FsZUxvd2VyQ2FzZSgpID09PVxuICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdCgnOycpWzBdLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZS5wdXNoKFxuICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdCgnOycpWzBdXG4gICAgICAgICk7XG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlS2V5d29yZChrZXl3b3JkOiBzdHJpbmcsIGluZGV4Q2F0ZWdvcnk6IG51bWJlciwgaW5kZXhGaWVsZCkge1xuICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZSA9IHRoaXMuY2F0ZWdvcmllc1tcbiAgICAgIGluZGV4Q2F0ZWdvcnlcbiAgICBdLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24gIT09IGtleXdvcmQpO1xuICB9XG5cbiAgYWRkS2V5d29yZEZyb21JbnB1dChldmVudDogTWF0Q2hpcElucHV0RXZlbnQsIGluZGV4Q2F0ZWdvcnk6IG51bWJlciwgaW5kZXhGaWVsZCkge1xuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuaW5wdXQ7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGNvbnN0IGV4aXN0ID0gdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlLmZpbmQoXG4gICAgICAgIChvcHQpID0+XG4gICAgICAgICAgb3B0LnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGV2ZW50LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZS5wdXNoKHZhbHVlLnRyaW0oKSk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7IGNvbnNvbGUubG9nKFwiV1dXV1dXV1dXV1dXXCIsIGV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQUFBQUFBQUFBQUFcIiwgZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19