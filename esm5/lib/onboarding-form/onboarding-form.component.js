import { __assign, __awaiter, __decorate, __generator } from "tslib";
import { Component } from '@angular/core';
import { OnboardingService } from '../onboarding.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
var OnboardingFormComponent = /** @class */ (function () {
    function OnboardingFormComponent(service, fb, route) {
        this.service = service;
        this.fb = fb;
        this.route = route;
        this.isSelected = false;
        this.id = "0";
    }
    OnboardingFormComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.onCreateDynamicForm();
                        return [4 /*yield*/, this.service.getContacts()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.service.getAllProfil()];
                    case 2:
                        _b.sent();
                        this.service._contacts.subscribe(function (contacts) { return _this.contacts = contacts; });
                        this.service._templates.subscribe(function (data) { return _this.templates = data; });
                        this.id = this.route.snapshot.paramMap.get("id");
                        if (!(this.id !== "0")) return [3 /*break*/, 4];
                        _a = this;
                        return [4 /*yield*/, this.service.getOnboarding(this.id)];
                    case 3:
                        _a.currentOnboarding = _b.sent();
                        _b.label = 4;
                    case 4:
                        console.log(this.templates);
                        return [2 /*return*/];
                }
            });
        });
    };
    OnboardingFormComponent.prototype.onSelectContactTemplate = function () {
        this.isSelected = true;
    };
    OnboardingFormComponent.prototype.onCreateDynamicForm = function () {
        this.onboardingForm = this.fb.group({
            contactId: ['', Validators.required],
            templateId: [0, Validators.required]
        });
    };
    OnboardingFormComponent.prototype.onPopulateValue = function () {
        var _this = this;
        var user = this.categories[0].forms;
        var populateContact = user.map(function (u) { return (__assign(__assign({}, u), { value: _this.currentUser[u.key] })); });
        this.categories[0].forms = populateContact;
    };
    OnboardingFormComponent.prototype.onSelect = function (id) {
        this.categories = this.templates.find(function (t) { return t._id === id; }).categories;
        if (this.contacts) {
            this.onPopulateValue();
        }
    };
    OnboardingFormComponent.prototype.onSelectUser = function (Id) {
        this.currentUser = this.contacts.find(function (u) { return u.Id === Id; });
        if (this.categories) {
            this.onPopulateValue();
        }
    };
    OnboardingFormComponent.prototype.onAddNewCategory = function (e) {
        e.preventDefault();
        this.categories.push({
            name: "",
            editable: true,
            deleteable: true,
            expandMore: true,
            suffixEndpoint: "",
            forms: [
                {
                    label: "",
                    value: null,
                    size: 80,
                    isMandatory: true,
                    type: "text",
                    deleteable: true,
                    editable: true
                },
            ],
        });
    };
    OnboardingFormComponent.prototype.onAddNewField = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 1
            ? this.categories[params[0]].forms
            : length === 2
                ? this.categories[params[0]].forms[params[1]].forms
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.push({
            label: "",
            value: null,
            size: 80,
            isMandatory: true,
            type: "text",
            deleteable: true,
            editable: true,
            subLevel: params.length
        });
    };
    OnboardingFormComponent.prototype.onAddNewSubLevelField = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        console.log(params.length - 1);
        var length = params.length;
        var forms = length === 2
            ? this.categories[params[0]].forms[params[length - 1]]
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]]
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.expandMore = true;
        forms.forms = [];
        forms.forms.push({
            label: "",
            value: null,
            size: 80,
            isMandatory: true,
            type: "text",
            deleteable: true,
            editable: true,
            subLevel: params.length,
            expandMore: true
        });
        console.log(this.categories);
    };
    OnboardingFormComponent.prototype.onRemoveField = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 2
            ? this.categories[params[0]].forms
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.splice(params[length - 1], 1);
    };
    OnboardingFormComponent.prototype.onRemoveCategory = function (e, i) {
        e.preventDefault();
        this.categories.splice(i, 1);
    };
    OnboardingFormComponent.prototype.onChangeCategory = function () {
        return this.categories.every(function (cat) {
            return cat.name !== "" &&
                cat.forms.every(function (field) { return field.label !== "" && field.type !== ""; });
        });
    };
    OnboardingFormComponent.prototype.onChangeType = function (type) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 2
            ? this.categories[params[0]].forms
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        if (type === "select" || type === "radio") {
            forms[params[length - 1]].value = [];
        }
        else if (type === "text") {
            forms[params[length - 1]].value = "";
        }
        else {
            forms[params[length - 1]].value = false;
        }
    };
    OnboardingFormComponent.prototype.onKeyPress = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 2
            ? this.categories[params[0]].forms[params[length - 1]]
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]]
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (event.key === ";") {
            var exist = forms.value.find(function (opt) {
                return opt.toLocaleLowerCase() ===
                    event.target.value.split(";")[0].toLocaleLowerCase();
            });
            if (!exist) {
                forms.value.push(event.target.value.split(";")[0]);
                event.target.value = "";
            }
            else {
                event.target.value = "";
            }
        }
    };
    OnboardingFormComponent.prototype.removeKeyword = function (keyword) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 2
            ? this.categories[params[0]].forms[params[length - 1]]
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]]
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.value = forms.value.filter(function (option) { return option !== keyword; });
    };
    OnboardingFormComponent.prototype.onExpendMore = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (event) {
            event.preventDefault();
        }
        console.log(event);
        var length = params.length;
        var forms = length === 1
            ? this.categories[params[0]] :
            length === 2 ? this.categories[params[0]].forms[params[length - 1]] :
                length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] :
                    this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.expandMore = !forms.expandMore;
    };
    OnboardingFormComponent.prototype.addKeywordFromInput = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var input = event.input;
        var value = event.value;
        var length = params.length;
        var forms = length === 2
            ? this.categories[params[0]].forms[params[length - 1]]
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]]
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (value) {
            var exist = forms.value.find(function (opt) { return opt.toLocaleLowerCase() === event.value.toLocaleLowerCase(); });
            if (!exist) {
                forms.value.push(value.trim());
                input.value = "";
            }
            else {
                input.value = "";
            }
        }
    };
    OnboardingFormComponent.prototype.drop = function (event) {
        console.log("log", this.categories);
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    OnboardingFormComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    OnboardingFormComponent.ctorParameters = function () { return [
        { type: OnboardingService },
        { type: FormBuilder },
        { type: ActivatedRoute }
    ]; };
    OnboardingFormComponent = __decorate([
        Component({
            selector: 'lib-onboarding-form',
            template: "<div class=\"container\">\n    <div class=\"content\">\n        <h3>Nouvel Onboarding</h3>\n        <p class=\"sub-title\">Cr\u00E9ez ici, l\u2019onboarding de votre nouveau collaborateur.</p>\n        <form [formGroup]=\"onboardingForm\">\n            <div class=\"select-contact\" *ngIf=\"!isSelected\">\n                <h3>\n                    Onboarding de votre nouveau collaborateur\n                </h3>\n                <p>S\u00E9lectionnez le nom de votre nouveau collaborateur afin de pouvoir d\u00E9marrer son onboarding.</p>\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                    <mat-label>Contact</mat-label>\n                    <mat-select formControlName=\"contactId\" required (selectionChange)=\"onSelectUser($event.value)\">\n                        <mat-option *ngFor=\"let contact of contacts\" [value]=\"contact.Id\">{{contact.Name}}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                    <mat-label>Template</mat-label>\n                    <mat-select formControlName=\"templateId\" required (selectionChange)=\"onSelect($event.value)\">\n                        <mat-option *ngFor=\"let template of templates\" [value]=\"template._id\">{{template.Name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <button\n                    [style.opacity]=\"(onboardingForm.get('ContactId')?.value==='' || onboardingForm.get('templateId')?.value=='') ? 0.4 : 1\"\n                    [disabled]=\"onboardingForm.get('ContactId')?.value==='' || onboardingForm.get('templateId')?.value==''\"\n                    mat-raised-button color=\"primary\" (click)='onSelectContactTemplate()'>\n                    {{id !== \"0\" ? 'Modifier l\u2019onboarding' :'D\u00E9marrer l\u2019onboarding'}}\n                </button>\n            </div>\n\n            <div class=\"category\" *ngIf=\"isSelected\">\n                <div cdkDropListGroup>\n                    <div class=\"example-list mt-20 onboarding-mat-stepper\" #parentList=\"cdkDropList\" cdkDropList\n                        [cdkDropListData]=\"categories\" (cdkDropListDropped)=\"drop($event)\">\n                        <mat-horizontal-stepper [linear]=\"true\" #stepper labelPosition=\"bottom\">\n                            <mat-step *ngFor=\"let category of categories;  let i=index\" [stepControl]=\"onboardingForm\"\n                                [label]=\"category.name\" class=\"category-item\">\n                                <div class=\"field-content\">\n                                    <div class=\"field-item\">\n                                        <h2>{{category.name}}</h2>\n                                    </div>\n\n                                    <div #childList=\"cdkDropList\" *ngIf=\"category.forms\"\n                                        [cdkDropListData]=\"category.forms\" cdkDropList\n                                        (cdkDropListDropped)=\"drop($event)\">\n                                        <ng-container>\n                                            <div class=\"field\" *ngFor=\"let field of category.forms;let j=index\" cdkDrag>\n                                                <lib-sub-onboarding [field]=\"field\" [length]=\"category?.forms?.length\"\n                                                    [i]=\"i\" [j]=\"j\"\n                                                    (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,i,j)\"\n                                                    (onKeyPress)=\"onKeyPress($event.event,i,j)\"\n                                                    (onAddNewField)=\"onAddNewField(i)\"\n                                                    (onRemoveField)=\"onRemoveField(i,j)\"\n                                                    (onChangeType)=\"onChangeType(field.type,i,j)\"\n                                                    (onRemoveKeyword)=\"removeKeyword($event.event,i,j)\"\n                                                    (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j)\"\n                                                    (onExpendMore)=\"onExpendMore(null,i,j)\">\n                                                    <div class=\"child\">\n                                                        <div #childList=\"cdkDropList\" *ngIf=\"field.forms\"\n                                                            [cdkDropListData]=\"field.forms\" cdkDropList\n                                                            (cdkDropListDropped)=\"drop($event)\">\n                                                            <div class=\"field\"\n                                                                *ngFor=\"let child of field.forms;let k=index\" cdkDrag>\n                                                                <lib-sub-onboarding [field]=\"child\"\n                                                                    [length]=\"field?.forms?.length\" [i]=\"j\" [j]=\"k\"\n                                                                    (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,i,j,k)\"\n                                                                    (onKeyPress)=\"onKeyPress($event.event,i,j,k)\"\n                                                                    (onAddNewField)=\"onAddNewField(i, j)\"\n                                                                    (onRemoveField)=\"onRemoveField(i,j,k)\"\n                                                                    (onChangeType)=\"onChangeType(child.type,i,j,k)\"\n                                                                    (onRemoveKeyword)=\"removeKeyword($event.event,i,j,k)\"\n                                                                    (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j,k)\"\n                                                                    (onExpendMore)=\"onExpendMore(null,i,j,k)\">\n                                                                    <div class=\"child\">\n                                                                        <div #childList=\"cdkDropList\"\n                                                                            *ngIf=\"child.forms\"\n                                                                            [cdkDropListData]=\"child.forms\" cdkDropList\n                                                                            (cdkDropListDropped)=\"drop($event)\">\n                                                                            <div class=\"field\"\n                                                                                *ngFor=\"let c2 of child.forms;let l=index\"\n                                                                                cdkDrag>\n                                                                                <lib-sub-onboarding [field]=\"c2\"\n                                                                                    [length]=\"child?.forms?.length\"\n                                                                                    [i]=\"k\" [j]=\"l\"\n                                                                                    (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,i,j,k,l)\"\n                                                                                    (onKeyPress)=\"onKeyPress($event.event,i,j,k,l)\"\n                                                                                    (onAddNewField)=\"onAddNewField(i,j,k)\"\n                                                                                    (onRemoveField)=\"onRemoveField(i,j,k,l)\"\n                                                                                    (onChangeType)=\"onChangeType(c2.type,i,j,k,l)\"\n                                                                                    (onRemoveKeyword)=\"removeKeyword($event.event,i,j,k,l)\"\n                                                                                    (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j,k,l)\"\n                                                                                    (onExpendMore)=\"onExpendMore(null,i,j,k,l)\">\n                                                                                    <div class=\"child\">\n                                                                                    </div>\n                                                                                </lib-sub-onboarding>\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </lib-sub-onboarding>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </lib-sub-onboarding>\n                                            </div>\n                                        </ng-container>\n\n                                    </div>\n                                    <button mat-raised-button style=\"float: left;\" class=\"next-step\" color=\"primary\"\n                                        matStepperPrevious>Pr\u00E9c\u00E9dent</button>\n                                    <button mat-raised-button class=\"next-step\" color=\"primary\"\n                                        matStepperNext>Suivant</button>\n                                </div>\n\n                            </mat-step>\n                            <mat-step>\n                                <ng-template matStepLabel>Review</ng-template>\n                                <h5>You are now done.</h5>\n                                <div>\n                                    <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button> &nbsp;\n                                    &nbsp;\n                                    <button mat-raised-button color=\"accent\" type=\"submit\">Submit</button> &nbsp; &nbsp;\n                                    <button mat-raised-button color=\"warn\" (click)=\"stepper.reset()\">Reset</button>\n                                </div>\n                            </mat-step>\n                            <!-- <ng-template matStepperIcon=\"phone\">\n                              <mat-icon>phone</mat-icon>\n                          </ng-template> -->\n\n                        </mat-horizontal-stepper>\n                        <!-- <div class=\"category-item\" *ngFor=\"let category of categories;  let i=index\" cdkDrag>\n                            <div class=\"field-content\">\n                                <div class=\"field-item\">\n                                    <h2>{{category.name}}</h2>\n                                </div>\n\n                                <div #childList=\"cdkDropList\" *ngIf=\"category.forms\" [cdkDropListData]=\"category.forms\"\n                                    cdkDropList (cdkDropListDropped)=\"drop($event)\">\n                                    <ng-container>\n                                        <div class=\"field\" *ngFor=\"let field of category.forms;let j=index\" cdkDrag>\n                                            <lib-sub-onboarding [field]=\"field\" [length]=\"category?.forms?.length\"\n                                                [i]=\"i\" [j]=\"j\"\n                                                (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,i,j)\"\n                                                (onKeyPress)=\"onKeyPress($event.event,i,j)\"\n                                                (onAddNewField)=\"onAddNewField(i)\" (onRemoveField)=\"onRemoveField(i,j)\"\n                                                (onChangeType)=\"onChangeType(field.type,i,j)\"\n                                                (onRemoveKeyword)=\"removeKeyword($event.event,i,j)\"\n                                                (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j)\"\n                                                (onExpendMore)=\"onExpendMore(null,i,j)\">\n                                                <div class=\"child\">\n                                                    <div #childList=\"cdkDropList\" *ngIf=\"field.forms\"\n                                                        [cdkDropListData]=\"field.forms\" cdkDropList\n                                                        (cdkDropListDropped)=\"drop($event)\">\n                                                        <div class=\"field\" *ngFor=\"let child of field.forms;let k=index\"\n                                                            cdkDrag>\n                                                            <lib-sub-onboarding [field]=\"child\"\n                                                                [length]=\"field?.forms?.length\" [i]=\"j\" [j]=\"k\"\n                                                                (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,i,j,k)\"\n                                                                (onKeyPress)=\"onKeyPress($event.event,i,j,k)\"\n                                                                (onAddNewField)=\"onAddNewField(i, j)\"\n                                                                (onRemoveField)=\"onRemoveField(i,j,k)\"\n                                                                (onChangeType)=\"onChangeType(child.type,i,j,k)\"\n                                                                (onRemoveKeyword)=\"removeKeyword($event.event,i,j,k)\"\n                                                                (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j,k)\"\n                                                                (onExpendMore)=\"onExpendMore(null,i,j,k)\">\n                                                                <div class=\"child\">\n                                                                    <div #childList=\"cdkDropList\" *ngIf=\"child.forms\"\n                                                                        [cdkDropListData]=\"child.forms\" cdkDropList\n                                                                        (cdkDropListDropped)=\"drop($event)\">\n                                                                        <div class=\"field\"\n                                                                            *ngFor=\"let c2 of child.forms;let l=index\"\n                                                                            cdkDrag>\n                                                                            <lib-sub-onboarding [field]=\"c2\"\n                                                                                [length]=\"child?.forms?.length\" [i]=\"k\"\n                                                                                [j]=\"l\"\n                                                                                (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,i,j,k,l)\"\n                                                                                (onKeyPress)=\"onKeyPress($event.event,i,j,k,l)\"\n                                                                                (onAddNewField)=\"onAddNewField(i,j,k)\"\n                                                                                (onRemoveField)=\"onRemoveField(i,j,k,l)\"\n                                                                                (onChangeType)=\"onChangeType(c2.type,i,j,k,l)\"\n                                                                                (onRemoveKeyword)=\"removeKeyword($event.event,i,j,k,l)\"\n                                                                                (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j,k,l)\"\n                                                                                (onExpendMore)=\"onExpendMore(null,i,j,k,l)\">\n                                                                                <div class=\"child\">\n                                                                                </div>\n                                                                            </lib-sub-onboarding>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </lib-sub-onboarding>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </lib-sub-onboarding>\n                                        </div>\n                                    </ng-container>\n\n                                </div>\n\n                            </div>\n                        </div> -->\n                    </div>\n\n                </div>\n                <!-- <div class=\"action\">\n                    <a [routerLink]=\"[service.mainPath]\" role=\"button\" mat-raised-button color=\"basic\">Liste des\n                        onboarding</a>\n                    <button mat-raised-button color=\"basic\" type=\"submit\">Valider</button>\n                </div> -->\n            </div>\n\n        </form>\n    </div>\n</div>",
            styles: ["::ng-deep .onboarding-mat-stepper .mat-horizontal-stepper-header-container{display:none!important}.container{background:no-repeat padding-box #f4f7f9;width:100%;height:auto;min-height:100%}.container .content{width:99%;height:100%;padding-left:1%}.container .content h3{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}.container .content p{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}.container .content p.sub-title{max-width:300px}.container .content .select-contact{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}.container .content .select-contact button{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}.container .content .category .onboarding-mat-stepper mat-horizontal-stepper .next-step{float:right}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.example-full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child{margin-left:5%}"]
        })
    ], OnboardingFormComponent);
    return OnboardingFormComponent;
}());
export { OnboardingFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvb25ib2FyZGluZy1mb3JtL29uYm9hcmRpbmctZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFlLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU9qRDtJQVNFLGlDQUFtQixPQUEwQixFQUFVLEVBQWUsRUFBVSxLQUFxQjtRQUFsRixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUhyRyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLE9BQUUsR0FBRyxHQUFHLENBQUM7SUFDZ0csQ0FBQztJQUVwRywwQ0FBUSxHQUFkOzs7Ozs7O3dCQUNFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO3dCQUMzQixxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFBOzt3QkFBaEMsU0FBZ0MsQ0FBQzt3QkFDakMscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBQTs7d0JBQWpDLFNBQWlDLENBQUM7d0JBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixDQUFD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U0FDSDtJQUNILENBQUM7SUFFRCxxREFBbUIsR0FBbkIsVUFBb0IsQ0FBQztRQUNuQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Z0JBM1EyQixpQkFBaUI7Z0JBQWMsV0FBVztnQkFBaUIsY0FBYzs7SUFUMUYsdUJBQXVCO1FBTG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsbytpQkFBK0M7O1NBRWhELENBQUM7T0FDVyx1QkFBdUIsQ0FzUm5DO0lBQUQsOEJBQUM7Q0FBQSxBQXRSRCxJQXNSQztTQXRSWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXksIHRyYW5zZmVyQXJyYXlJdGVtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQgeyBNYXRDaGlwSW5wdXRFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW9uYm9hcmRpbmctZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWZvcm0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG9uYm9hcmRpbmdGb3JtOiBGb3JtR3JvdXA7XG4gIGN1cnJlbnRVc2VyOiBhbnk7XG4gIHRlbXBsYXRlczogYW55O1xuICBjb250YWN0czogYW55O1xuICBjYXRlZ29yaWVzOiBhbnk7XG4gIGlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgY3VycmVudE9uYm9hcmRpbmc6IGFueTtcbiAgaWQgPSBcIjBcIjtcbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIHRoaXMub25DcmVhdGVEeW5hbWljRm9ybSgpO1xuICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRDb250YWN0cygpO1xuICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTtcbiAgICB0aGlzLnNlcnZpY2UuX2NvbnRhY3RzLnN1YnNjcmliZSgoY29udGFjdHMpID0+IHRoaXMuY29udGFjdHMgPSBjb250YWN0cyk7XG4gICAgdGhpcy5zZXJ2aWNlLl90ZW1wbGF0ZXMuc3Vic2NyaWJlKChkYXRhKSA9PiB0aGlzLnRlbXBsYXRlcyA9IGRhdGEpO1xuICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldChcImlkXCIpO1xuICAgIGlmICh0aGlzLmlkICE9PSBcIjBcIikge1xuICAgICAgdGhpcy5jdXJyZW50T25ib2FyZGluZyA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRPbmJvYXJkaW5nKHRoaXMuaWQpO1xuICAgICAgLy8gdGhpcy5vbmJvYXJkaW5nRm9ybS5wYXRjaFZhbHVlKHRoaXMuY3VycmVudE9uYm9hcmRpbmcpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnRlbXBsYXRlcyk7XG5cbiAgfVxuXG4gIG9uU2VsZWN0Q29udGFjdFRlbXBsYXRlKCkge1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XG4gIH1cblxuICBvbkNyZWF0ZUR5bmFtaWNGb3JtKCkge1xuICAgIHRoaXMub25ib2FyZGluZ0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGNvbnRhY3RJZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHRlbXBsYXRlSWQ6IFswLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG5cbiAgb25Qb3B1bGF0ZVZhbHVlKCkge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLmNhdGVnb3JpZXNbMF0uZm9ybXM7XG4gICAgY29uc3QgcG9wdWxhdGVDb250YWN0ID0gdXNlci5tYXAoKHUpID0+ICh7XG4gICAgICAuLi51LFxuICAgICAgdmFsdWU6IHRoaXMuY3VycmVudFVzZXJbdS5rZXldXG4gICAgfSkpO1xuICAgIHRoaXMuY2F0ZWdvcmllc1swXS5mb3JtcyA9IHBvcHVsYXRlQ29udGFjdDtcbiAgfVxuXG4gIG9uU2VsZWN0KGlkKSB7XG4gICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy50ZW1wbGF0ZXMuZmluZCgodCkgPT4gdC5faWQgPT09IGlkKS5jYXRlZ29yaWVzO1xuICAgIGlmICh0aGlzLmNvbnRhY3RzKSB7XG4gICAgICB0aGlzLm9uUG9wdWxhdGVWYWx1ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0VXNlcihJZCkge1xuICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmNvbnRhY3RzLmZpbmQoKHUpID0+IHUuSWQgPT09IElkKTtcbiAgICBpZiAodGhpcy5jYXRlZ29yaWVzKSB7XG4gICAgICB0aGlzLm9uUG9wdWxhdGVWYWx1ZSgpO1xuICAgIH1cbiAgfVxuXG5cblxuXG5cbiAgb25BZGROZXdDYXRlZ29yeShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBleHBhbmRNb3JlOiB0cnVlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiXCIsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiXCIsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQWRkTmV3RmllbGQoLi4ucGFyYW1zKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9XG4gICAgICBsZW5ndGggPT09IDFcbiAgICAgICAgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1xuICAgICAgICA6IGxlbmd0aCA9PT0gMlxuICAgICAgICAgID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1xuICAgICAgICAgIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zO1xuICAgIGZvcm1zLnB1c2goe1xuICAgICAgbGFiZWw6IFwiXCIsXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIHNpemU6IDgwLFxuICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIHN1YkxldmVsOiBwYXJhbXMubGVuZ3RoXG4gICAgfSk7XG4gIH1cblxuICBvbkFkZE5ld1N1YkxldmVsRmllbGQoLi4ucGFyYW1zKSB7XG4gICAgY29uc29sZS5sb2cocGFyYW1zLmxlbmd0aCAtIDEpO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9XG4gICAgICBsZW5ndGggPT09IDJcbiAgICAgICAgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dXG4gICAgICAgIDogbGVuZ3RoID09PSAzXG4gICAgICAgICAgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV1cbiAgICAgICAgICA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1tcbiAgICAgICAgICBwYXJhbXNbbGVuZ3RoIC0gMV1cbiAgICAgICAgICBdO1xuICAgIGZvcm1zLmV4cGFuZE1vcmUgPSB0cnVlO1xuICAgIGZvcm1zLmZvcm1zID0gW107XG4gICAgZm9ybXMuZm9ybXMucHVzaCh7XG4gICAgICBsYWJlbDogXCJcIixcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgc2l6ZTogODAsXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgc3ViTGV2ZWw6IHBhcmFtcy5sZW5ndGgsXG4gICAgICBleHBhbmRNb3JlOiB0cnVlXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2codGhpcy5jYXRlZ29yaWVzKTtcbiAgfVxuXG4gIG9uUmVtb3ZlRmllbGQoLi4ucGFyYW1zKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9XG4gICAgICBsZW5ndGggPT09IDJcbiAgICAgICAgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1xuICAgICAgICA6IGxlbmd0aCA9PT0gM1xuICAgICAgICAgID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1xuICAgICAgICAgIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zO1xuICAgIGZvcm1zLnNwbGljZShwYXJhbXNbbGVuZ3RoIC0gMV0sIDEpO1xuICB9XG5cbiAgb25SZW1vdmVDYXRlZ29yeShlLCBpKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2F0ZWdvcmllcy5zcGxpY2UoaSwgMSk7XG4gIH1cblxuICBvbkNoYW5nZUNhdGVnb3J5KCkge1xuICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXMuZXZlcnkoXG4gICAgICAoY2F0KSA9PlxuICAgICAgICBjYXQubmFtZSAhPT0gXCJcIiAmJlxuICAgICAgICBjYXQuZm9ybXMuZXZlcnkoKGZpZWxkKSA9PiBmaWVsZC5sYWJlbCAhPT0gXCJcIiAmJiBmaWVsZC50eXBlICE9PSBcIlwiKVxuICAgICk7XG4gIH1cblxuXG5cbiAgb25DaGFuZ2VUeXBlKHR5cGU6IHN0cmluZywgLi4ucGFyYW1zKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9XG4gICAgICBsZW5ndGggPT09IDJcbiAgICAgICAgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1xuICAgICAgICA6IGxlbmd0aCA9PT0gM1xuICAgICAgICAgID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1xuICAgICAgICAgIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zO1xuICAgIGlmICh0eXBlID09PSBcInNlbGVjdFwiIHx8IHR5cGUgPT09IFwicmFkaW9cIikge1xuICAgICAgZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXS52YWx1ZSA9IFtdO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgIGZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0udmFsdWUgPSBcIlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dLnZhbHVlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb25LZXlQcmVzcyhldmVudDogYW55LCAuLi5wYXJhbXMpIHtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID1cbiAgICAgIGxlbmd0aCA9PT0gMlxuICAgICAgICA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV1cbiAgICAgICAgOiBsZW5ndGggPT09IDNcbiAgICAgICAgICA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXVxuICAgICAgICAgIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW1xuICAgICAgICAgIHBhcmFtc1tsZW5ndGggLSAxXVxuICAgICAgICAgIF07XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCI7XCIpIHtcbiAgICAgIGNvbnN0IGV4aXN0ID0gZm9ybXMudmFsdWUuZmluZChcbiAgICAgICAgKG9wdCkgPT5cbiAgICAgICAgICBvcHQudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoXCI7XCIpWzBdLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgIGZvcm1zLnZhbHVlLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KFwiO1wiKVswXSk7XG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUtleXdvcmQoa2V5d29yZDogc3RyaW5nLCAuLi5wYXJhbXMpIHtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID1cbiAgICAgIGxlbmd0aCA9PT0gMlxuICAgICAgICA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV1cbiAgICAgICAgOiBsZW5ndGggPT09IDNcbiAgICAgICAgICA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXVxuICAgICAgICAgIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW1xuICAgICAgICAgIHBhcmFtc1tsZW5ndGggLSAxXVxuICAgICAgICAgIF07XG4gICAgZm9ybXMudmFsdWUgPSBmb3Jtcy52YWx1ZS5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uICE9PSBrZXl3b3JkKTtcbiAgfVxuXG4gIG9uRXhwZW5kTW9yZShldmVudCwgLi4ucGFyYW1zKSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG5cbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID1cbiAgICAgIGxlbmd0aCA9PT0gMVxuICAgICAgICA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dIDpcbiAgICAgICAgbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6XG4gICAgICAgICAgbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDpcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xuICAgIGZvcm1zLmV4cGFuZE1vcmUgPSAhZm9ybXMuZXhwYW5kTW9yZTtcbiAgfVxuXG4gIGFkZEtleXdvcmRGcm9tSW5wdXQoZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50LCAuLi5wYXJhbXMpIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmlucHV0O1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWU7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9XG4gICAgICBsZW5ndGggPT09IDJcbiAgICAgICAgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dXG4gICAgICAgIDogbGVuZ3RoID09PSAzXG4gICAgICAgICAgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV1cbiAgICAgICAgICA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1tcbiAgICAgICAgICBwYXJhbXNbbGVuZ3RoIC0gMV1cbiAgICAgICAgICBdO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgZXhpc3QgPSBmb3Jtcy52YWx1ZS5maW5kKFxuICAgICAgICAob3B0KSA9PiBvcHQudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gZXZlbnQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIGlmICghZXhpc3QpIHtcbiAgICAgICAgZm9ybXMudmFsdWUucHVzaCh2YWx1ZS50cmltKCkpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XG4gICAgY29uc29sZS5sb2coXCJsb2dcIiwgdGhpcy5jYXRlZ29yaWVzKTtcbiAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KFxuICAgICAgICBldmVudC5jb250YWluZXIuZGF0YSxcbiAgICAgICAgZXZlbnQucHJldmlvdXNJbmRleCxcbiAgICAgICAgZXZlbnQuY3VycmVudEluZGV4XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2ZlckFycmF5SXRlbShcbiAgICAgICAgZXZlbnQucHJldmlvdXNDb250YWluZXIuZGF0YSxcbiAgICAgICAgZXZlbnQuY29udGFpbmVyLmRhdGEsXG4gICAgICAgIGV2ZW50LnByZXZpb3VzSW5kZXgsXG4gICAgICAgIGV2ZW50LmN1cnJlbnRJbmRleFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBpbmdvcmVEZWZhdWx0QWN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxufVxuIl19