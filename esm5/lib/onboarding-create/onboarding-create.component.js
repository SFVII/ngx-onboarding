import { __assign, __awaiter, __decorate, __generator, __values } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OnboardingService } from "../onboarding.service";
import { ActivatedRoute, Router } from "@angular/router";
import { moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { MatDialog } from "@angular/material/dialog";
import { UpdateProfilComponent } from '../components/update-profil/update-profil.component';
import { ExitConfirmComponent } from '../components/exit-confirm/exit-confirm.component';
var OnboardingCreateComponent = /** @class */ (function () {
    function OnboardingCreateComponent(fb, service, route, router, dialog) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.currentProfil = {};
        this.canExit = true;
        this.tags = [];
        this.id = "0";
        this.parent = [];
        this.editIndex = null;
        this.showProfileName = false;
        this.selectedMenu = 0;
        this.matIconList = [
            { name: 'developer_board' },
            { name: 'contact_phone' },
            { name: 'contact_mail' },
            { name: 'play_circle_filled' },
            { name: 'control_camera' },
            { name: 'explicit' },
            { name: 'person' },
            { name: 'visibility' },
            { name: 'video_label' },
            { name: 'add_circle' },
            { name: 'watch_later' },
            { name: 'where_to_vote' },
            { name: 'work' },
            { name: 'web' },
            { name: 'whatshot' },
            { name: 'wifi' },
            { name: 'workspaces' },
            { name: 'wb_cloudy' },
            { name: 'waves' },
            { name: 'warning' },
            { name: 'space_das' }
        ];
        this.picto = "";
    }
    OnboardingCreateComponent.prototype.canDeactivate = function () {
        if (!this.canExit) {
            this.dialog.open(ExitConfirmComponent, {
                data: ''
            });
            return this.service.canExit$;
        }
        return true;
    };
    OnboardingCreateComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.onCreateDynamicForm();
                this.id = this.route.snapshot.paramMap.get("id");
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.service.getAllProfil()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }, 500);
                this.service._templates.subscribe(function (data) {
                    _this.templates = data;
                });
                this.id = this.route.snapshot.paramMap.get("id");
                if (this.id !== "0") {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        var _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _a = this;
                                    return [4 /*yield*/, this.service.getOnboarding(this.id)];
                                case 1:
                                    _a.currentOnboarding = _c.sent();
                                    console.log(this.currentOnboarding);
                                    this.form.patchValue(this.currentOnboarding);
                                    this.categories = this.currentOnboarding.categories;
                                    this.currentTemplate = (_b = this.currentOnboarding) === null || _b === void 0 ? void 0 : _b.vtemplates[0];
                                    if (this.currentOnboarding.TemplateId) {
                                        this.onSelectContactTemplate();
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 500);
                }
                else {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = this;
                                    return [4 /*yield*/, this.service.getOnboarding(this.id)];
                                case 1:
                                    _a.currentOnboarding = _b.sent();
                                    console.log(this.currentOnboarding);
                                    this.form.patchValue(this.currentOnboarding);
                                    this.categories = this.currentOnboarding.categories;
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 500);
                }
                return [2 /*return*/];
            });
        });
    };
    OnboardingCreateComponent.prototype.onCreateDynamicForm = function () {
        this.form = this.fb.group({
            TemplateId: [0, Validators.required]
        });
    };
    OnboardingCreateComponent.prototype.onSelectContactTemplate = function () {
        this.isSelected = true;
    };
    OnboardingCreateComponent.prototype.onSelect = function (id) {
        this.currentTemplate = this.templates.find(function (t) { return t._id === id; });
        this.categories = this.currentTemplate.categories;
    };
    OnboardingCreateComponent.prototype.existSubForm = function (forms) {
        var e_1, _a;
        var exist = false;
        if (forms) {
            try {
                for (var forms_1 = __values(forms), forms_1_1 = forms_1.next(); !forms_1_1.done; forms_1_1 = forms_1.next()) {
                    var sub = forms_1_1.value;
                    if (sub.forms) {
                        exist = true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (forms_1_1 && !forms_1_1.done && (_a = forms_1.return)) _a.call(forms_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return exist;
    };
    OnboardingCreateComponent.prototype.onChangeCategory = function () {
        var checkMandatory = function (field) { return !!field.value && field.isMandatory && field.type !== "checkbox_multiple" || field.isConditional || !field.isMandatory || field.type === "checkbox_multiple"; };
        return this.categories.every(function (cat) { return cat.forms.every(function (field) {
            if (field.forms) {
                return field.forms.every(function (form) {
                    if (form.forms) {
                        return form.forms.every(function (child) {
                            return checkMandatory(child);
                        });
                    }
                    return checkMandatory(form);
                });
            }
            return checkMandatory(field);
        }); });
    };
    OnboardingCreateComponent.prototype.onSubmit = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var result, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log(this.categories);
                        if (!(this.form.valid && this.onChangeCategory())) return [3 /*break*/, 7];
                        if (!(this.id && this.id !== "0")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.updateOnboarding(__assign(__assign({}, this.form.value), { categories: this.categories, _id: this.id }))];
                    case 1:
                        _b = _c.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.service.createOnboarding(__assign(__assign({}, this.form.value), { categories: this.categories }))];
                    case 3:
                        _b = _c.sent();
                        _c.label = 4;
                    case 4:
                        result = _b;
                        if (!result) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.service.getAllProfil()];
                    case 5:
                        _c.sent();
                        this.canExit = true;
                        console.log(this.service.mainPath + '/onboarding');
                        this.router.navigate([this.service.mainPath + '/requests/' + ((_a = result) === null || _a === void 0 ? void 0 : _a._id)]);
                        return [3 /*break*/, 7];
                    case 6:
                        console.log("errror......");
                        _c.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    OnboardingCreateComponent.prototype.onExpendMore = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (event) {
            if (event.event) {
                event.event.preventDefault();
            }
            // if (event.field && !event.field.expandMore) {
            //   for (let i = 0; i < this.categories.length; i++) {
            //     this.categories[i].expandMore = false;
            //     if (this.categories[i].forms) {
            //       for (let j = 0; j < this.categories[i].forms.length; j++) {
            //         this.categories[i].forms[j].expandMore = false;
            //       }
            //     }
            //   }
            // }
        }
        if (params.length === 1) {
            this.categories[params[0]].defaultValue = !this.categories[params[0]].defaultValue;
        }
        else if (params.length === 2) {
            this.currentActive = String(params[0]) + String(params[1]);
            if (this.categories[params[0]].forms[params[1]].defaultValue) {
                this.categories[params[0]].forms[params[1]].defaultValue = false;
            }
            else {
                this.categories[params[0]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].defaultValue = true;
            }
        }
        else if (params.length === 3) {
            if (this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue) {
                this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue = false;
            }
            else {
                this.categories[params[0]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue = true;
            }
        }
        else {
            if (this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].defaultValue) {
                this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].defaultValue = false;
            }
            else {
                this.categories[params[0]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].defaultValue = true;
            }
        }
    };
    OnboardingCreateComponent.prototype.drop = function (event) {
        this.canExit = false;
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    OnboardingCreateComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    OnboardingCreateComponent.prototype.onShowCategory = function () {
        this.showProfileName = !this.showProfileName;
    };
    OnboardingCreateComponent.prototype.onSelectPicto = function (e, picto) {
        e.preventDefault();
        this.canExit = false;
        this.form.patchValue({ Picto: picto });
        this.isPictoListShow = !this.isPictoListShow;
    };
    OnboardingCreateComponent.prototype.onShowPictoList = function (e) {
        e.preventDefault();
        this.isPictoListShow = !this.isPictoListShow;
    };
    OnboardingCreateComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(UpdateProfilComponent, {
            data: {
                matIconList: this.matIconList,
                form: this.form,
                tags: this.tags
            }
        });
        dialogRef.afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
            }
        });
    };
    OnboardingCreateComponent.prototype.isExpanded = function (forms) {
        var e_2, _a;
        var isExpend = false;
        try {
            for (var forms_2 = __values(forms), forms_2_1 = forms_2.next(); !forms_2_1.done; forms_2_1 = forms_2.next()) {
                var form = forms_2_1.value;
                if (form.defaultValue) {
                    isExpend = true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (forms_2_1 && !forms_2_1.done && (_a = forms_2.return)) _a.call(forms_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    OnboardingCreateComponent.prototype.onCheckConditionLocationValue = function (iscondition, location, conditionValue) {
        if (!iscondition) {
            return true;
        }
        if (location.level === 1) {
            if (this.categories[location.categoryIndex].forms[location.currentIndex].type === 'checkbox_multiple') {
                var array = this.categories[location.categoryIndex].forms[location.currentIndex].defaultValue.filter(function (check) { return check.checked; });
                var checked = false;
                for (var i = 0; i < array.length; i++) {
                    if (array[i].value == conditionValue) {
                        checked = true;
                        break;
                    }
                }
                return checked;
            }
            else {
                return this.categories[location.categoryIndex].forms[location.currentIndex].value === conditionValue;
            }
        }
        else if (location.level === 2) {
            if (this.categories[location.categoryIndex].forms[location.formIndex].forms[location.currentIndex].type === 'checkbox_multiple') {
                var array = this.categories[location.categoryIndex].forms[location.formIndex].forms[location.currentIndex].defaultValue.filter(function (check) { return check.checked; });
                var checked = false;
                for (var i = 0; i < array.length; i++) {
                    if (array[i].value == conditionValue) {
                        checked = true;
                        break;
                    }
                }
                return checked;
            }
            else {
                return this.categories[location.categoryIndex].forms[location.formIndex].forms[location.currentIndex].value === conditionValue;
            }
        }
        else if (location.level === 3) {
            if (this.categories[location.categoryIndex].forms[location.formIndex].forms[location.subIndex].forms[location.currentIndex].type === 'checkbox_multiple') {
                var array = this.categories[location.categoryIndex].forms[location.formIndex].forms[location.subIndex].forms[location.currentIndex].defaultValue.filter(function (check) { return check.checked; });
                var checked = false;
                for (var i = 0; i < array.length; i++) {
                    if (array[i].value == conditionValue) {
                        checked = true;
                        break;
                    }
                }
                return checked;
            }
            else {
                return this.categories[location.categoryIndex].forms[location.formIndex].forms[location.subIndex].forms[location.currentIndex].value === conditionValue;
            }
        }
        else {
            return true;
        }
    };
    OnboardingCreateComponent.prototype.checkSubForm = function (forms) {
        var e_3, _a;
        var hasSubForm = false;
        try {
            for (var forms_3 = __values(forms), forms_3_1 = forms_3.next(); !forms_3_1.done; forms_3_1 = forms_3.next()) {
                var form = forms_3_1.value;
                if (form.forms && form.forms.length > 0) {
                    hasSubForm = true;
                    break;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (forms_3_1 && !forms_3_1.done && (_a = forms_3.return)) _a.call(forms_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return hasSubForm;
    };
    OnboardingCreateComponent.prototype.onSelectMenu = function (i) {
        this.selectedMenu = i;
    };
    OnboardingCreateComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: OnboardingService },
        { type: ActivatedRoute },
        { type: Router },
        { type: MatDialog }
    ]; };
    OnboardingCreateComponent = __decorate([
        Component({
            selector: "create-onboarding",
            template: "<main>\n    <div class=\"content\">\n        <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n            <div class=\"select-contact\" *ngIf=\"!isSelected\">\n                <h3>\n                    Onboarding de votre nouveau collaborateur\n                </h3>\n                <p>S\u00E9lectionnez le nom de votre profil afin de pouvoir d\u00E9marrer son onboarding.</p>\n                <div class=\"select-template\">\n                    <mat-form-field class=\"full-width\" appearance=\"outline\">\n                        <mat-label>Profil</mat-label>\n                        <mat-select formControlName=\"TemplateId\" required (selectionChange)=\"onSelect($event.value)\">\n                            <mat-option *ngFor=\"let template of templates\" [value]=\"template._id\">{{template.Name}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <button [style.opacity]=\"form.get('TemplateId')?.value=='' ? 0.4 : 1\"\n                        [disabled]=\"form.get('TemplateId')?.value==''\" mat-raised-button color=\"primary\"\n                        (click)='onSelectContactTemplate()'>\n                        {{id !== \"0\" ? 'Modifier l\u2019onboarding' :'D\u00E9marrer l\u2019onboarding'}}\n                    </button>\n                </div>\n            </div>\n            <div class=\"category\" *ngIf=\"isSelected\">\n                <!-- <div class=\"category\"> -->\n\n                <div class=\"side-bar\">\n                    <div class=\"summary\">\n                        <h3 class=\"template-title\">\n                            {{currentTemplate?.Name}}\n                        </h3>\n                        <ol>\n                            <li class=\"li-title\" *ngFor=\"let cat of categories;  let i=index\"\n                                [class]=\"selectedMenu===i ?'active':''\" (click)=\"onSelectMenu(i)\">\n                                <span>\n                                    <span [ngxScrollTo]=\"'#'+cat.name\">{{cat.name}}</span>\n                                    <mat-icon *ngIf=\"checkSubForm(cat.forms)\">keyboard_arrow_right</mat-icon>\n                                </span>\n                            </li>\n                        </ol>\n                    </div>\n                    <button mat-button class=\"register-button\" type=\"submit\">\n                        <!-- <mat-icon>check</mat-icon> -->\n                        Soumettre ma fiche de poste\n                    </button>\n                </div>\n                <div class=\"fields\">\n                    <div class=\"example-list mt-20\">\n                        <div class=\"category-item\" *ngFor=\"let category of categories;  let i=index\"\n                            [id]=\"category.name\">\n\n                            <div class=\"field-content\">\n                                <div class=\"field-item\">\n                                    <h4 class=\"category-name\">{{category.name}}</h4>\n                                </div>\n                                <div class=\"category-container\">\n                                    <ng-container>\n                                        <div class=\"field-category\" *ngFor=\"let field of category.forms;let j=index\"\n                                            [id]=\"field.key\">\n                                            <div class=\"inner-loop\"\n                                                *ngIf=\"field.expandOnboarding && onCheckConditionLocationValue(field.isConditional,field.conditionLocation,field.conditionValue)\">\n                                                <div class=\"fields-content\">\n\n                                                    <div class=\"fields-container\">\n                                                        <lib-sub-create-onboarding [field]=\"field\"\n                                                            [length]=\"category?.forms?.length\" [i]=\"i\" [j]=\"j\"\n                                                            (onDrop)=\"drop($event)\">\n                                                            <div class=\"child\">\n                                                                <div class=\"inner-child\" *ngIf=\"field.forms\">\n                                                                    <div class=\"inner-child-content\"\n                                                                        *ngFor=\"let child of field.forms;let k=index\"\n                                                                        [id]=\"child.key\">\n                                                                        <div class=\"inner-loop\"\n                                                                            *ngIf=\"child.expandOnboarding && onCheckConditionLocationValue(child.isConditional,child.conditionLocation,child.conditionValue)\">\n                                                                            <div class=\"fields-content\">\n\n                                                                                <div class=\"fields-container\">\n                                                                                    <lib-sub-create-onboarding\n                                                                                        [field]=\"child\"\n                                                                                        [length]=\"field?.forms?.length\"\n                                                                                        [i]=\"j\" [j]=\"k\"\n                                                                                        (onDrop)=\"drop($event)\">\n                                                                                        <div class=\"child\">\n                                                                                            <div class=\"inner-child\"\n                                                                                                *ngIf=\"child.forms\">\n                                                                                                <div class=\"inner-child-content\"\n                                                                                                    *ngFor=\"let c2 of child.forms;let l=index\"\n                                                                                                    [id]=\"c2.key\">\n                                                                                                    <div class=\"inner-loop\"\n                                                                                                        *ngIf=\"c2.expandOnboarding && onCheckConditionLocationValue(c2.isConditional,c2.conditionLocation,c2.conditionValue)\">\n                                                                                                        <div\n                                                                                                            class=\"fields-content\">\n                                                                                                            <div\n                                                                                                                class=\"fields-container\">\n                                                                                                                <lib-sub-create-onboarding\n                                                                                                                    [field]=\"c2\"\n                                                                                                                    [length]=\"child?.forms?.length\"\n                                                                                                                    [i]=\"k\"\n                                                                                                                    [j]=\"l\"\n                                                                                                                    (onDrop)=\"drop($event)\">\n                                                                                                                    <div\n                                                                                                                        class=\"child\">\n                                                                                                                    </div>\n                                                                                                                </lib-sub-create-onboarding>\n                                                                                                            </div>\n                                                                                                        </div>\n                                                                                                    </div>\n                                                                                                </div>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                    </lib-sub-create-onboarding>\n                                                                                </div>\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </lib-sub-create-onboarding>\n\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </ng-container>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </form>\n    </div>\n\n</main>",
            styles: ["main{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main .disabled label{background-color:transparent!important}main .content{width:99%;height:100%;padding-left:1%}main .content h3{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}main .content p{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}main .content p.sub-title{max-width:400px}main .content .select-contact{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main .content .select-contact .select-template{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main .content .select-contact .select-template .full-width{width:40%}main .content .select-contact .select-template button{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:1em 2em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;-ms-grid-row-align:center;align-self:center;width:220px}main .content .category .onboarding-mat-stepper mat-horizontal-stepper .next-step{float:right}main .content form{display:flex;height:100%;width:100%}main .content form .select-contact{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main .content form .select-contact button{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}main .box-title{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main .box-title h3{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main .box-title input,main .box-title label{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main .box-title .profil-name-content{display:flex;align-items:center;position:relative}main .box-title .profil-name-content .add-picto{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main .box-title .profil-name-content .add-picto mat-icon{margin-right:10px}main .box-title .profil-name-content .list-picto{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main .box-title .profil-name-content .list-picto mat-icon{margin:15px;border:none;font-size:40px}main .box-title .profil-name-content .list-picto mat-icon:hover{color:#830b6b!important;cursor:pointer}main .box-title .box-title-content{width:100%;margin:25px auto}main .box-title .title{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main .box-title p{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main .box-title .link-create-profil{width:100%;display:flex;justify-content:center}main .box-title button{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main .action{width:100%;display:flex;justify-content:space-between}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.category-name{text-align:left;font:bold 22px/48px Nexa Text;letter-spacing:0;color:#171f26;padding-left:15px}.full-width{width:100%}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}::ng-deep .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}:host ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background,:host ::ng-deep .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item,.cdk-drag-placeholder{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;min-height:60px}.category-item .left-action,.cdk-drag-placeholder .left-action{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item .left-action .transparent-button,.cdk-drag-placeholder .left-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item .field-content,.cdk-drag-placeholder .field-content{width:100%;-ms-grid-row-align:center;align-self:center}.category-item .field-content .field-item,.cdk-drag-placeholder .field-content .field-item{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.category-item .field-content .mat-form-field-outline,.cdk-drag-placeholder .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.cdk-drag-placeholder .field-content .mat-form-field-outline{color:transparent!important}.category-item .category-container,.cdk-drag-placeholder .category-container{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:flex-end}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child{margin-left:0}.child .inner-child{display:flex;flex-wrap:wrap}.category{display:flex;flex-direction:row;width:100vw}.category .summary{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category .summary h3{font-size:15px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category .summary h3 span{font-weight:600}.category .summary h3 mat-icon{margin-left:15px;cursor:pointer}.category .summary h3.template-title{font:900 24px/36px Nexa Text;letter-spacing:0;color:#171f26}.category .summary ol{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category .summary ol li{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category .summary ol li ol{padding-left:0;margin-left:0}.category .summary ol li.li-title{font-size:14px;font-weight:600;margin-right:10px}.category .summary ol li.li-title input{width:140px;outline:0;border:1px dashed grey}.category .summary ol li.li-title span{display:inline-flex;align-items:center;width:100%}.category .summary ol li.li-title span mat-icon{margin-left:10px}.category .summary ol li.li-title.active,.category .summary ol li.li-title:hover{background:no-repeat padding-box #e5e8ee;border-radius:5px}.category .summary ol li.sub-title{list-style:none;padding-left:20px}.category .summary ol li.sub-title.active,.category .summary ol li.sub-title.active::marker,.category .summary ol li.sub-title:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category .fields{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category .disabled{background-color:#f4f7f9!important}.category .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category .expand-button .material-icons{font-size:40px}.category .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.inner-loop .fields-content{display:flex;height:100%;margin:0;width:100%}.inner-loop .fields-content .button-action{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop .fields-content .button-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop .fields-content .child-2-background{background-color:#cffaf4!important}.inner-loop .fields-content .child-3-background{background-color:#e5e8ee!important}.inner-loop .fields-content .fields-container{width:100%;padding-left:10px;padding-right:10px;padding-top:5px}.inner-loop .fields-content .fields-container lib-sub-category .field-item{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop .fields-content .fields-container lib-sub-category .field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop .fields-content .fields-container lib-sub-category .field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.side-bar{display:flex;flex-direction:column}.register-button{background:no-repeat padding-box #171f26!important;border:2px solid #192128!important;border-radius:8px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important}"]
        })
    ], OnboardingCreateComponent);
    return OnboardingCreateComponent;
}());
export { OnboardingCreateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9vbmJvYXJkaW5nLWNyZWF0ZS9vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQWUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBT3pGO0lBMENFLG1DQUNVLEVBQWUsRUFDaEIsT0FBMEIsRUFDekIsS0FBcUIsRUFDckIsTUFBYyxFQUNkLE1BQWlCO1FBSmpCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVc7UUE3QzNCLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBQ3hCLFlBQU8sR0FBQyxJQUFJLENBQUM7UUFDYixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsT0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNULFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixj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LENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2FBQ2xGO1NBQ0Y7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUU7Z0JBQzlGLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUNwRztpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtB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Ozs7UUFDRCxPQUFPLFVBQVUsQ0FBQTtJQUNuQixDQUFDO0lBRUQsZ0RBQVksR0FBWixVQUFhLENBQUM7UUFDWixJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQTtJQUNyQixDQUFDOztnQkF0U2EsV0FBVztnQkFDUCxpQkFBaUI7Z0JBQ2xCLGNBQWM7Z0JBQ2IsTUFBTTtnQkFDTixTQUFTOztJQS9DaEIseUJBQXlCO1FBTHJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IscXdVQUFpRDs7U0FFbEQsQ0FBQztPQUNXLHlCQUF5QixDQW1WckM7SUFBRCxnQ0FBQztDQUFBLEFBblZELElBbVZDO1NBblZZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gXCIuLi9vbmJvYXJkaW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCB0cmFuc2ZlckFycmF5SXRlbSB9IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XG5pbXBvcnQgeyBVcGRhdGVQcm9maWxDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3VwZGF0ZS1wcm9maWwvdXBkYXRlLXByb2ZpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhpdENvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2V4aXQtY29uZmlybS9leGl0LWNvbmZpcm0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImNyZWF0ZS1vbmJvYXJkaW5nXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL29uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5zY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBjdXJyZW50UHJvZmlsOiBhbnkgPSB7fTtcbiAgY2FuRXhpdD10cnVlO1xuICB0YWdzID0gW107XG4gIGlkID0gXCIwXCI7XG4gIHBhcmVudCA9IFtdO1xuICBlZGl0SW5kZXg9bnVsbDtcbiAgc2hvd1Byb2ZpbGVOYW1lID0gZmFsc2U7XG4gIHNlbGVjdGVkTWVudT0wO1xuICB0ZW1wbGF0ZXM6IGFueTtcbiAgY29udGFjdHM6IGFueTtcbiAgbWF0SWNvbkxpc3QgPSBbXG4gICAgeyBuYW1lOiAnZGV2ZWxvcGVyX2JvYXJkJyB9LFxuICAgIHsgbmFtZTogJ2NvbnRhY3RfcGhvbmUnIH0sXG4gICAgeyBuYW1lOiAnY29udGFjdF9tYWlsJyB9LFxuICAgIHsgbmFtZTogJ3BsYXlfY2lyY2xlX2ZpbGxlZCcgfSxcbiAgICB7IG5hbWU6ICdjb250cm9sX2NhbWVyYScgfSxcbiAgICB7IG5hbWU6ICdleHBsaWNpdCcgfSxcbiAgICB7IG5hbWU6ICdwZXJzb24nIH0sXG4gICAgeyBuYW1lOiAndmlzaWJpbGl0eScgfSxcbiAgICB7IG5hbWU6ICd2aWRlb19sYWJlbCcgfSxcbiAgICB7IG5hbWU6ICdhZGRfY2lyY2xlJyB9LFxuICAgIHsgbmFtZTogJ3dhdGNoX2xhdGVyJyB9LFxuICAgIHsgbmFtZTogJ3doZXJlX3RvX3ZvdGUnIH0sXG4gICAgeyBuYW1lOiAnd29yaycgfSxcbiAgICB7IG5hbWU6ICd3ZWInIH0sXG4gICAgeyBuYW1lOiAnd2hhdHNob3QnIH0sXG4gICAgeyBuYW1lOiAnd2lmaScgfSxcbiAgICB7IG5hbWU6ICd3b3Jrc3BhY2VzJyB9LFxuICAgIHsgbmFtZTogJ3diX2Nsb3VkeScgfSxcbiAgICB7IG5hbWU6ICd3YXZlcycgfSxcbiAgICB7IG5hbWU6ICd3YXJuaW5nJyB9LFxuICAgIHsgbmFtZTogJ3NwYWNlX2RhcycgfVxuICBdO1xuICBpc1BpY3RvTGlzdFNob3c6IGJvb2xlYW47XG4gIHBpY3RvID0gXCJcIjtcbiAgY3VycmVudE9uYm9hcmRpbmc6IGFueTtcbiAgY3VycmVudFRlbXBsYXRlOmFueVxuICBpc1NlbGVjdGVkOiBib29sZWFuO1xuICBjdXJyZW50VXNlcjogYW55O1xuICBjdXJyZW50QWN0aXZlOiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBcbiAgICBwdWJsaWMgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2dcbiAgICApIHsgfVxuICBcbiAgY2F0ZWdvcmllczogYW55XG5cbiAgY2FuRGVhY3RpdmF0ZSgpe1xuICAgIGlmKCF0aGlzLmNhbkV4aXQpe1xuICAgICAgdGhpcy5kaWFsb2cub3BlbihFeGl0Q29uZmlybUNvbXBvbmVudCx7XG4gICAgICAgIGRhdGE6JydcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmNhbkV4aXQkXG4gICAgfVxuICAgIHJldHVybiB0cnVlICAgIFxuICB9XG4gIFxuICBhc3luYyBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMub25DcmVhdGVEeW5hbWljRm9ybSgpO1xuICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldChcImlkXCIpO1xuXG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7ICAgICAgXG4gICAgfSwgNTAwKTtcblxuICAgIHRoaXMuc2VydmljZS5fdGVtcGxhdGVzLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgdGhpcy50ZW1wbGF0ZXMgPSBkYXRhO1xuICAgIH0pO1xuICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldChcImlkXCIpO1xuICAgIGlmICh0aGlzLmlkICE9PSBcIjBcIikge1xuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3VycmVudE9uYm9hcmRpbmcgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0T25ib2FyZGluZyh0aGlzLmlkKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50T25ib2FyZGluZyk7XG4gICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHRoaXMuY3VycmVudE9uYm9hcmRpbmcpXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcz10aGlzLmN1cnJlbnRPbmJvYXJkaW5nLmNhdGVnb3JpZXM7XG4gICAgICAgIHRoaXMuY3VycmVudFRlbXBsYXRlPXRoaXMuY3VycmVudE9uYm9hcmRpbmc/LnZ0ZW1wbGF0ZXNbMF1cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9uYm9hcmRpbmcuVGVtcGxhdGVJZCkge1xuICAgICAgICAgIHRoaXMub25TZWxlY3RDb250YWN0VGVtcGxhdGUoKVxuICAgICAgICB9XG4gICAgICB9LCA1MDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50T25ib2FyZGluZyA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRPbmJvYXJkaW5nKHRoaXMuaWQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRPbmJvYXJkaW5nKTtcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUodGhpcy5jdXJyZW50T25ib2FyZGluZylcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzPXRoaXMuY3VycmVudE9uYm9hcmRpbmcuY2F0ZWdvcmllcztcbiAgICAgICAgLy90aGlzLmN1cnJlbnRUZW1wbGF0ZT10aGlzLmN1cnJlbnRPbmJvYXJkaW5nPy52dGVtcGxhdGVzWzBdXG4gICAgICAgIC8vdGhpcy5vblNlbGVjdENvbnRhY3RUZW1wbGF0ZSgpXG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgfVxuXG4gIG9uQ3JlYXRlRHluYW1pY0Zvcm0oKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBUZW1wbGF0ZUlkOiBbMCwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxuXG4gIG9uU2VsZWN0Q29udGFjdFRlbXBsYXRlKCkge1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XG4gIH1cblxuXG4gIG9uU2VsZWN0KGlkKSB7XG4gICAgdGhpcy5jdXJyZW50VGVtcGxhdGU9IHRoaXMudGVtcGxhdGVzLmZpbmQoKHQpID0+IHQuX2lkID09PSBpZCk7XG4gICAgdGhpcy5jYXRlZ29yaWVzID10aGlzLmN1cnJlbnRUZW1wbGF0ZS5jYXRlZ29yaWVzXG4gIH1cblxuICBleGlzdFN1YkZvcm0oZm9ybXMpe1xuICAgIGxldCBleGlzdD1mYWxzZTtcbiAgICBpZihmb3Jtcyl7XG4gICAgICBmb3IgKGNvbnN0IHN1YiBvZiBmb3Jtcykge1xuICAgICAgICBpZihzdWIuZm9ybXMpe1xuICAgICAgICAgIGV4aXN0PXRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGV4aXN0XG4gIH1cblxuICBvbkNoYW5nZUNhdGVnb3J5KCkge1xuICAgIGNvbnN0IGNoZWNrTWFuZGF0b3J5PShmaWVsZCk9PiAhIWZpZWxkLnZhbHVlICYmIGZpZWxkLmlzTWFuZGF0b3J5ICYmIGZpZWxkLnR5cGUhPT1cImNoZWNrYm94X211bHRpcGxlXCIgIHx8IGZpZWxkLmlzQ29uZGl0aW9uYWwgIHx8ICFmaWVsZC5pc01hbmRhdG9yeSB8fCBmaWVsZC50eXBlPT09XCJjaGVja2JveF9tdWx0aXBsZVwiXG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllcy5ldmVyeSgoY2F0KSA9PiBjYXQuZm9ybXMuZXZlcnkoKGZpZWxkKSA9PiB7IFxuICAgICAgaWYoZmllbGQuZm9ybXMpe1xuICAgICAgICAgcmV0dXJuIGZpZWxkLmZvcm1zLmV2ZXJ5KChmb3JtKT0+e1xuICAgICAgICAgICBpZihmb3JtLmZvcm1zKXtcbiAgICAgICAgICAgICAgcmV0dXJuIGZvcm0uZm9ybXMuZXZlcnkoKGNoaWxkKT0+e1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrTWFuZGF0b3J5KGNoaWxkKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICB9XG4gICAgICAgICAgIHJldHVybiBjaGVja01hbmRhdG9yeShmb3JtKVxuICAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGVja01hbmRhdG9yeShmaWVsZClcbiAgICB9KSk7XG4gIH1cblxuXG4gIGFzeW5jIG9uU3VibWl0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY2F0ZWdvcmllcyk7XG4gICAgXG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCAmJiB0aGlzLm9uQ2hhbmdlQ2F0ZWdvcnkoKSkgeyBcbiAgICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICAgIHRoaXMuaWQgJiYgdGhpcy5pZCAhPT0gXCIwXCJcbiAgICAgICAgICA/IGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGVPbmJvYXJkaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuZm9ybS52YWx1ZSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyxcbiAgICAgICAgICAgIF9pZDp0aGlzLmlkXG4gICAgICAgICAgfSlcbiAgICAgICAgICA6IGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGVPbmJvYXJkaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuZm9ybS52YWx1ZSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllc1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XG4gICAgICAgIHRoaXMuY2FuRXhpdD10cnVlOyBcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZXJ2aWNlLm1haW5QYXRoKycvb25ib2FyZGluZycpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5zZXJ2aWNlLm1haW5QYXRoKycvcmVxdWVzdHMvJytyZXN1bHQ/Ll9pZF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJyb3IuLi4uLi5cIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBvbkV4cGVuZE1vcmUoZXZlbnQsIC4uLnBhcmFtcykge1xuICAgIGlmIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICAvLyBpZiAoZXZlbnQuZmllbGQgJiYgIWV2ZW50LmZpZWxkLmV4cGFuZE1vcmUpIHtcbiAgICAgIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICAgICB0aGlzLmNhdGVnb3JpZXNbaV0uZXhwYW5kTW9yZSA9IGZhbHNlO1xuICAgICAgLy8gICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMpIHtcbiAgICAgIC8vICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAvLyAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtc1tqXS5leHBhbmRNb3JlID0gZmFsc2U7XG4gICAgICAvLyAgICAgICB9XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG5cbiAgICB9XG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9ICF0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWU7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMubGVuZ3RoID09PSAyKSB7XG4gICAgICB0aGlzLmN1cnJlbnRBY3RpdmU9U3RyaW5nKHBhcmFtc1swXSkgKyBTdHJpbmcocGFyYW1zWzFdKVxuICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwYXJhbXMubGVuZ3RoID09PSAzKSB7XG4gICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZGVmYXVsdFZhbHVlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmRlZmF1bHRWYWx1ZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZGVmYXVsdFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZGVmYXVsdFZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICB0aGlzLmNhbkV4aXQ9ZmFsc2U7ICBcbiAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2ZlckFycmF5SXRlbShldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLCBldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBpbmdvcmVEZWZhdWx0QWN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgb25TaG93Q2F0ZWdvcnkoKSB7XG4gICAgdGhpcy5zaG93UHJvZmlsZU5hbWUgPSAhdGhpcy5zaG93UHJvZmlsZU5hbWU7XG4gIH1cblxuICBvblNlbGVjdFBpY3RvKGUsIHBpY3RvKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2FuRXhpdD1mYWxzZTsgIFxuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHsgUGljdG86IHBpY3RvIH0pO1xuICAgIHRoaXMuaXNQaWN0b0xpc3RTaG93ID0gIXRoaXMuaXNQaWN0b0xpc3RTaG93O1xuICB9XG5cbiAgb25TaG93UGljdG9MaXN0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5pc1BpY3RvTGlzdFNob3cgPSAhdGhpcy5pc1BpY3RvTGlzdFNob3c7XG4gIH1cbiBcbiAgb3BlbkRpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFVwZGF0ZVByb2ZpbENvbXBvbmVudCx7XG4gICAgICBkYXRhOntcbiAgICAgICAgbWF0SWNvbkxpc3Q6dGhpcy5tYXRJY29uTGlzdCxcbiAgICAgICAgZm9ybTp0aGlzLmZvcm0sXG4gICAgICAgIHRhZ3M6dGhpcy50YWdzXG4gICAgICB9XG4gICAgfSk7XG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChjb25maXJtZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmIChjb25maXJtZWQpIHtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc0V4cGFuZGVkKGZvcm1zOmFueVtdKXtcbiAgIGxldCBpc0V4cGVuZD1mYWxzZTtcbiAgICBmb3IgKGNvbnN0IGZvcm0gb2YgZm9ybXMpIHtcbiAgICAgIGlmKGZvcm0uZGVmYXVsdFZhbHVlKXtcbiAgICAgICAgaXNFeHBlbmQ9dHJ1ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgfVxuXG4gIG9uQ2hlY2tDb25kaXRpb25Mb2NhdGlvblZhbHVlKGlzY29uZGl0aW9uLGxvY2F0aW9uLCBjb25kaXRpb25WYWx1ZSl7XG4gICAgaWYoIWlzY29uZGl0aW9uKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZihsb2NhdGlvbi5sZXZlbD09PTEpe1xuICAgICAgaWYodGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0udHlwZT09PSdjaGVja2JveF9tdWx0aXBsZScpe1xuICAgICAgICBjb25zdCBhcnJheT10aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS5kZWZhdWx0VmFsdWUuZmlsdGVyKChjaGVjayk9PmNoZWNrLmNoZWNrZWQpXG4gICAgICAgIGxldCBjaGVja2VkPWZhbHNlO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJyYXlbaV0udmFsdWUgPT0gY29uZGl0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGVja2VkO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS52YWx1ZT09PWNvbmRpdGlvblZhbHVlXG4gICAgICB9ICAgICBcbiAgICB9ZWxzZSBpZihsb2NhdGlvbi5sZXZlbD09PTIpe1xuICAgICAgaWYodGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS50eXBlPT09J2NoZWNrYm94X211bHRpcGxlJyl7XG4gICAgICAgIGNvbnN0IGFycmF5PXRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5mb3JtSW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0uZGVmYXVsdFZhbHVlLmZpbHRlcigoY2hlY2spPT5jaGVjay5jaGVja2VkKVxuICAgICAgICBsZXQgY2hlY2tlZD1mYWxzZTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFycmF5W2ldLnZhbHVlID09IGNvbmRpdGlvblZhbHVlKSB7XG4gICAgICAgICAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hlY2tlZDtcbiAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS52YWx1ZT09PWNvbmRpdGlvblZhbHVlXG4gICAgICB9XG4gICAgfWVsc2UgaWYobG9jYXRpb24ubGV2ZWw9PT0zKXtcbiAgICAgIGlmKHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5mb3JtSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnN1YkluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnR5cGU9PT0nY2hlY2tib3hfbXVsdGlwbGUnKXtcbiAgICAgICAgY29uc3QgYXJyYXk9dGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uc3ViSW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0uZGVmYXVsdFZhbHVlLmZpbHRlcigoY2hlY2spPT5jaGVjay5jaGVja2VkKVxuICAgICAgICBsZXQgY2hlY2tlZD1mYWxzZTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFycmF5W2ldLnZhbHVlID09IGNvbmRpdGlvblZhbHVlKSB7XG4gICAgICAgICAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hlY2tlZDtcbiAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uc3ViSW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0udmFsdWU9PT1jb25kaXRpb25WYWx1ZVxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gXG4gIH1cblxuICBjaGVja1N1YkZvcm0oZm9ybXMpe1xuICAgIGxldCBoYXNTdWJGb3JtPWZhbHNlO1xuICAgIGZvciAoY29uc3QgZm9ybSBvZiBmb3Jtcykge1xuICAgICAgaWYoZm9ybS5mb3JtcyAmJiBmb3JtLmZvcm1zLmxlbmd0aD4wKXtcbiAgICAgICAgaGFzU3ViRm9ybT10cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhhc1N1YkZvcm1cbiAgfVxuXG4gIG9uU2VsZWN0TWVudShpKXtcbiAgICB0aGlzLnNlbGVjdGVkTWVudT1pXG4gIH1cblxufVxuIl19