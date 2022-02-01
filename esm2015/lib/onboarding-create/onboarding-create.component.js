import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OnboardingService } from "../onboarding.service";
import { ActivatedRoute, Router } from "@angular/router";
import { moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { MatDialog } from "@angular/material/dialog";
import { UpdateProfilComponent } from '../components/update-profil/update-profil.component';
import { ExitConfirmComponent } from '../components/exit-confirm/exit-confirm.component';
let OnboardingCreateComponent = class OnboardingCreateComponent {
    constructor(fb, service, route, router, dialog) {
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
    canDeactivate() {
        if (!this.canExit) {
            this.dialog.open(ExitConfirmComponent, {
                data: ''
            });
            return this.service.canExit$;
        }
        return true;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.onCreateDynamicForm();
            this.id = this.route.snapshot.paramMap.get("id");
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                yield this.service.getAllProfil();
            }), 500);
            this.service._templates.subscribe((data) => {
                this.templates = data;
            });
            this.id = this.route.snapshot.paramMap.get("id");
            if (this.id !== "0") {
                setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    this.currentOnboarding = yield this.service.getOnboarding(this.id);
                    console.log(this.currentOnboarding);
                    this.form.patchValue(this.currentOnboarding);
                    this.categories = this.currentOnboarding.categories;
                    this.currentTemplate = (_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.vtemplates[0];
                    if (this.currentOnboarding.TemplateId) {
                        this.onSelectContactTemplate();
                    }
                }), 500);
            }
            else {
                setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    this.currentOnboarding = yield this.service.getOnboarding(this.id);
                    console.log(this.currentOnboarding);
                    this.form.patchValue(this.currentOnboarding);
                    this.categories = this.currentOnboarding.categories;
                    //this.currentTemplate=this.currentOnboarding?.vtemplates[0]
                    //this.onSelectContactTemplate()
                }), 500);
            }
        });
    }
    onCreateDynamicForm() {
        this.form = this.fb.group({
            TemplateId: [0, Validators.required]
        });
    }
    onSelectContactTemplate() {
        this.isSelected = true;
    }
    onSelect(id) {
        this.currentTemplate = this.templates.find((t) => t._id === id);
        this.categories = this.currentTemplate.categories;
    }
    existSubForm(forms) {
        let exist = false;
        if (forms) {
            for (const sub of forms) {
                if (sub.forms) {
                    exist = true;
                }
            }
        }
        return exist;
    }
    onChangeCategory() {
        const checkMandatory = (field) => !!field.value && field.isMandatory && field.type !== "checkbox_multiple" || field.isConditional || !field.isMandatory || field.type === "checkbox_multiple";
        return this.categories.every((cat) => cat.forms.every((field) => {
            if (field.forms) {
                return field.forms.every((form) => {
                    if (form.forms) {
                        return form.forms.every((child) => {
                            return checkMandatory(child);
                        });
                    }
                    return checkMandatory(form);
                });
            }
            return checkMandatory(field);
        }));
    }
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(this.categories);
            if (this.form.valid && this.onChangeCategory()) {
                const result = this.id && this.id !== "0"
                    ? yield this.service.updateOnboarding(Object.assign(Object.assign({}, this.form.value), { categories: this.categories, _id: this.id }))
                    : yield this.service.createOnboarding(Object.assign(Object.assign({}, this.form.value), { categories: this.categories }));
                if (result) {
                    yield this.service.getAllProfil();
                    this.canExit = true;
                    console.log(this.service.mainPath + '/onboarding');
                    //this.router.navigate([this.service.mainPath+'/onboarding']);
                }
                else {
                    console.log("errror......");
                }
            }
        });
    }
    onExpendMore(event, ...params) {
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
    }
    drop(event) {
        this.canExit = false;
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    ingoreDefaultAction(e) {
        e.preventDefault();
    }
    onShowCategory() {
        this.showProfileName = !this.showProfileName;
    }
    onSelectPicto(e, picto) {
        e.preventDefault();
        this.canExit = false;
        this.form.patchValue({ Picto: picto });
        this.isPictoListShow = !this.isPictoListShow;
    }
    onShowPictoList(e) {
        e.preventDefault();
        this.isPictoListShow = !this.isPictoListShow;
    }
    openDialog() {
        const dialogRef = this.dialog.open(UpdateProfilComponent, {
            data: {
                matIconList: this.matIconList,
                form: this.form,
                tags: this.tags
            }
        });
        dialogRef.afterClosed().subscribe((confirmed) => {
            if (confirmed) {
            }
        });
    }
    isExpanded(forms) {
        let isExpend = false;
        for (const form of forms) {
            if (form.defaultValue) {
                isExpend = true;
            }
        }
    }
    onCheckConditionLocationValue(iscondition, location, conditionValue) {
        if (!iscondition) {
            return true;
        }
        if (location.level === 1) {
            if (this.categories[location.categoryIndex].forms[location.currentIndex].type === 'checkbox_multiple') {
                const array = this.categories[location.categoryIndex].forms[location.currentIndex].defaultValue.filter((check) => check.checked);
                let checked = false;
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
                const array = this.categories[location.categoryIndex].forms[location.formIndex].forms[location.currentIndex].defaultValue.filter((check) => check.checked);
                let checked = false;
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
                const array = this.categories[location.categoryIndex].forms[location.formIndex].forms[location.subIndex].forms[location.currentIndex].defaultValue.filter((check) => check.checked);
                let checked = false;
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
    }
    checkSubForm(forms) {
        let hasSubForm = false;
        for (const form of forms) {
            if (form.forms && form.forms.length > 0) {
                hasSubForm = true;
                break;
            }
        }
        return hasSubForm;
    }
    onSelectMenu(i) {
        this.selectedMenu = i;
    }
};
OnboardingCreateComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: OnboardingService },
    { type: ActivatedRoute },
    { type: Router },
    { type: MatDialog }
];
OnboardingCreateComponent = __decorate([
    Component({
        selector: "create-onboarding",
        template: "<main>\n    <div class=\"content\">\n        <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n            <div class=\"select-contact\" *ngIf=\"!isSelected\">\n                <h3>\n                    Onboarding de votre nouveau collaborateur\n                </h3>\n                <p>S\u00E9lectionnez le nom de votre profil afin de pouvoir d\u00E9marrer son onboarding.</p>\n                <div class=\"select-template\">\n                    <mat-form-field class=\"full-width\" appearance=\"outline\">\n                        <mat-label>Profil</mat-label>\n                        <mat-select formControlName=\"TemplateId\" required (selectionChange)=\"onSelect($event.value)\">\n                            <mat-option *ngFor=\"let template of templates\" [value]=\"template._id\">{{template.Name}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <button [style.opacity]=\"form.get('TemplateId')?.value=='' ? 0.4 : 1\"\n                        [disabled]=\"form.get('TemplateId')?.value==''\" mat-raised-button color=\"primary\"\n                        (click)='onSelectContactTemplate()'>\n                        {{id !== \"0\" ? 'Modifier l\u2019onboarding' :'D\u00E9marrer l\u2019onboarding'}}\n                    </button>\n                </div>\n            </div>\n            <div class=\"category\" *ngIf=\"isSelected\">\n                <!-- <div class=\"category\"> -->\n\n                <div class=\"side-bar\">\n                    <div class=\"summary\">\n                        <h3 class=\"template-title\">\n                            {{currentTemplate?.Name}}\n                        </h3>\n                        <ol>\n                            <li class=\"li-title\" *ngFor=\"let cat of categories;  let i=index\"\n                                [class]=\"selectedMenu===i ?'active':''\" (click)=\"onSelectMenu(i)\">\n                                <span>\n                                    <span [ngxScrollTo]=\"'#'+cat.name\">{{cat.name}}</span>\n                                    <mat-icon *ngIf=\"checkSubForm(cat.forms)\">keyboard_arrow_right</mat-icon>\n                                </span>\n                            </li>\n                        </ol>\n                    </div>\n                    <button mat-button class=\"register-button\" type=\"submit\">\n                        <!-- <mat-icon>check</mat-icon> -->\n                        Soumettre ma fiche de poste\n                    </button>\n                </div>\n                <div class=\"fields\">\n                    <div class=\"example-list mt-20\">\n                        <div class=\"category-item\" *ngFor=\"let category of categories;  let i=index\"\n                            [id]=\"category.name\">\n\n                            <div class=\"field-content\">\n                                <div class=\"field-item\">\n                                    <h4 class=\"category-name\">{{category.name}}</h4>\n                                </div>\n                                <div class=\"category-container\">\n                                    <ng-container>\n                                        <div class=\"field-category\" *ngFor=\"let field of category.forms;let j=index\"\n                                            [id]=\"field.key\">\n                                            <div class=\"inner-loop\"\n                                                *ngIf=\"field.expandOnboarding && onCheckConditionLocationValue(field.isConditional,field.conditionLocation,field.conditionValue)\">\n                                                <div class=\"fields-content\">\n\n                                                    <div class=\"fields-container\">\n                                                        <lib-sub-create-onboarding [field]=\"field\"\n                                                            [length]=\"category?.forms?.length\" [i]=\"i\" [j]=\"j\"\n                                                            (onDrop)=\"drop($event)\">\n                                                            <div class=\"child\">\n                                                                <div class=\"inner-child\" *ngIf=\"field.forms\">\n                                                                    <div class=\"inner-child-content\"\n                                                                        *ngFor=\"let child of field.forms;let k=index\"\n                                                                        [id]=\"child.key\">\n                                                                        <div class=\"inner-loop\"\n                                                                            *ngIf=\"child.expandOnboarding && onCheckConditionLocationValue(child.isConditional,child.conditionLocation,child.conditionValue)\">\n                                                                            <div class=\"fields-content\">\n\n                                                                                <div class=\"fields-container\">\n                                                                                    <lib-sub-create-onboarding\n                                                                                        [field]=\"child\"\n                                                                                        [length]=\"field?.forms?.length\"\n                                                                                        [i]=\"j\" [j]=\"k\"\n                                                                                        (onDrop)=\"drop($event)\">\n                                                                                        <div class=\"child\">\n                                                                                            <div class=\"inner-child\"\n                                                                                                *ngIf=\"child.forms\">\n                                                                                                <div class=\"inner-child-content\"\n                                                                                                    *ngFor=\"let c2 of child.forms;let l=index\"\n                                                                                                    [id]=\"c2.key\">\n                                                                                                    <div class=\"inner-loop\"\n                                                                                                        *ngIf=\"c2.expandOnboarding && onCheckConditionLocationValue(c2.isConditional,c2.conditionLocation,c2.conditionValue)\">\n                                                                                                        <div\n                                                                                                            class=\"fields-content\">\n                                                                                                            <div\n                                                                                                                class=\"fields-container\">\n                                                                                                                <lib-sub-create-onboarding\n                                                                                                                    [field]=\"c2\"\n                                                                                                                    [length]=\"child?.forms?.length\"\n                                                                                                                    [i]=\"k\"\n                                                                                                                    [j]=\"l\"\n                                                                                                                    (onDrop)=\"drop($event)\">\n                                                                                                                    <div\n                                                                                                                        class=\"child\">\n                                                                                                                    </div>\n                                                                                                                </lib-sub-create-onboarding>\n                                                                                                            </div>\n                                                                                                        </div>\n                                                                                                    </div>\n                                                                                                </div>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                    </lib-sub-create-onboarding>\n                                                                                </div>\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </lib-sub-create-onboarding>\n\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </ng-container>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </form>\n    </div>\n\n</main>",
        styles: ["main{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main .disabled label{background-color:transparent!important}main .content{width:99%;height:100%;padding-left:1%}main .content h3{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}main .content p{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}main .content p.sub-title{max-width:400px}main .content .select-contact{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main .content .select-contact .select-template{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main .content .select-contact .select-template .full-width{width:40%}main .content .select-contact .select-template button{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:1em 2em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;-ms-grid-row-align:center;align-self:center;width:220px}main .content .category .onboarding-mat-stepper mat-horizontal-stepper .next-step{float:right}main .content form{display:flex;height:100%;width:100%}main .content form .select-contact{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main .content form .select-contact button{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}main .box-title{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main .box-title h3{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main .box-title input,main .box-title label{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main .box-title .profil-name-content{display:flex;align-items:center;position:relative}main .box-title .profil-name-content .add-picto{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main .box-title .profil-name-content .add-picto mat-icon{margin-right:10px}main .box-title .profil-name-content .list-picto{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main .box-title .profil-name-content .list-picto mat-icon{margin:15px;border:none;font-size:40px}main .box-title .profil-name-content .list-picto mat-icon:hover{color:#830b6b!important;cursor:pointer}main .box-title .box-title-content{width:100%;margin:25px auto}main .box-title .title{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main .box-title p{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main .box-title .link-create-profil{width:100%;display:flex;justify-content:center}main .box-title button{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main .action{width:100%;display:flex;justify-content:space-between}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.category-name{text-align:left;font:bold 22px/48px Nexa Text;letter-spacing:0;color:#171f26;padding-left:15px}.full-width{width:100%}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}::ng-deep .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}:host ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background,:host ::ng-deep .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item,.cdk-drag-placeholder{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;min-height:60px}.category-item .left-action,.cdk-drag-placeholder .left-action{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item .left-action .transparent-button,.cdk-drag-placeholder .left-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item .field-content,.cdk-drag-placeholder .field-content{width:100%;-ms-grid-row-align:center;align-self:center}.category-item .field-content .field-item,.cdk-drag-placeholder .field-content .field-item{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.category-item .field-content .mat-form-field-outline,.cdk-drag-placeholder .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.cdk-drag-placeholder .field-content .mat-form-field-outline{color:transparent!important}.category-item .category-container,.cdk-drag-placeholder .category-container{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:flex-end}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child{margin-left:0}.child .inner-child{display:flex;flex-wrap:wrap}.category{display:flex;flex-direction:row;width:100vw}.category .summary{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category .summary h3{font-size:15px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category .summary h3 span{font-weight:600}.category .summary h3 mat-icon{margin-left:15px;cursor:pointer}.category .summary h3.template-title{font:900 24px/36px Nexa Text;letter-spacing:0;color:#171f26}.category .summary ol{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category .summary ol li{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category .summary ol li ol{padding-left:0;margin-left:0}.category .summary ol li.li-title{font-size:14px;font-weight:600;margin-right:10px}.category .summary ol li.li-title input{width:140px;outline:0;border:1px dashed grey}.category .summary ol li.li-title span{display:inline-flex;align-items:center;width:100%}.category .summary ol li.li-title span mat-icon{margin-left:10px}.category .summary ol li.li-title.active,.category .summary ol li.li-title:hover{background:no-repeat padding-box #e5e8ee;border-radius:5px}.category .summary ol li.sub-title{list-style:none;padding-left:20px}.category .summary ol li.sub-title.active,.category .summary ol li.sub-title.active::marker,.category .summary ol li.sub-title:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category .fields{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category .disabled{background-color:#f4f7f9!important}.category .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category .expand-button .material-icons{font-size:40px}.category .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.inner-loop .fields-content{display:flex;height:100%;margin:0;width:100%}.inner-loop .fields-content .button-action{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop .fields-content .button-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop .fields-content .child-2-background{background-color:#cffaf4!important}.inner-loop .fields-content .child-3-background{background-color:#e5e8ee!important}.inner-loop .fields-content .fields-container{width:100%;padding-left:10px;padding-right:10px;padding-top:5px}.inner-loop .fields-content .fields-container lib-sub-category .field-item{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop .fields-content .fields-container lib-sub-category .field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop .fields-content .fields-container lib-sub-category .field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.side-bar{display:flex;flex-direction:column}.register-button{background:no-repeat padding-box #171f26!important;border:2px solid #192128!important;border-radius:8px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important}"]
    })
], OnboardingCreateComponent);
export { OnboardingCreateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9vbmJvYXJkaW5nLWNyZWF0ZS9vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQWUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBT3pGLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBMENwQyxZQUNVLEVBQWUsRUFDaEIsT0FBMEIsRUFDekIsS0FBcUIsRUFDckIsTUFBYyxFQUNkLE1BQWlCO1FBSmpCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVc7UUE3QzNCLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBQ3hCLFlBQU8sR0FBQyxJQUFJLENBQUM7UUFDYixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsT0FBRSxHQUFHLEdBQUcsQ0FBQztR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Q0FBQzthQUNoQjtpQkFBSTtnQkFDSCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssS0FBRyxjQUFjLENBQUE7YUFDdEo7U0FDRjthQUFJO1lBQ0gsT0FBTyxJQUFJLENBQUE7U0FDWjtJQUVILENBQUM7SUFFRCxZQUFZLENBQUMsS0FBSztRQUNoQixJQUFJLFVBQVUsR0FBQyxLQUFLLENBQUM7UUFDckIsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDeEIsSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQztnQkFDbkMsVUFBVSxHQUFDLElBQUksQ0FBQztnQkFDaEIsTUFBTTthQUNQO1NBQ0Y7UUFDRCxPQUFPLFVBQVUsQ0FBQTtJQUNuQixDQUFDO0lBRUQsWUFBWSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQTtJQUNyQixDQUFDO0NBRUYsQ0FBQTs7WUF2U2UsV0FBVztZQUNQLGlCQUFpQjtZQUNsQixjQUFjO1lBQ2IsTUFBTTtZQUNOLFNBQVM7O0FBL0NoQix5QkFBeUI7SUFMckMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3Qixxd1VBQWlEOztLQUVsRCxDQUFDO0dBQ1cseUJBQXlCLENBa1ZyQztTQWxWWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vb25ib2FyZGluZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW0gfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuaW1wb3J0IHsgVXBkYXRlUHJvZmlsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy91cGRhdGUtcHJvZmlsL3VwZGF0ZS1wcm9maWwuY29tcG9uZW50JztcbmltcG9ydCB7IEV4aXRDb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9leGl0LWNvbmZpcm0vZXhpdC1jb25maXJtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJjcmVhdGUtb25ib2FyZGluZ1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL29uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQuc2Nzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgY3VycmVudFByb2ZpbDogYW55ID0ge307XG4gIGNhbkV4aXQ9dHJ1ZTtcbiAgdGFncyA9IFtdO1xuICBpZCA9IFwiMFwiO1xuICBwYXJlbnQgPSBbXTtcbiAgZWRpdEluZGV4PW51bGw7XG4gIHNob3dQcm9maWxlTmFtZSA9IGZhbHNlO1xuICBzZWxlY3RlZE1lbnU9MDtcbiAgdGVtcGxhdGVzOiBhbnk7XG4gIGNvbnRhY3RzOiBhbnk7XG4gIG1hdEljb25MaXN0ID0gW1xuICAgIHsgbmFtZTogJ2RldmVsb3Blcl9ib2FyZCcgfSxcbiAgICB7IG5hbWU6ICdjb250YWN0X3Bob25lJyB9LFxuICAgIHsgbmFtZTogJ2NvbnRhY3RfbWFpbCcgfSxcbiAgICB7IG5hbWU6ICdwbGF5X2NpcmNsZV9maWxsZWQnIH0sXG4gICAgeyBuYW1lOiAnY29udHJvbF9jYW1lcmEnIH0sXG4gICAgeyBuYW1lOiAnZXhwbGljaXQnIH0sXG4gICAgeyBuYW1lOiAncGVyc29uJyB9LFxuICAgIHsgbmFtZTogJ3Zpc2liaWxpdHknIH0sXG4gICAgeyBuYW1lOiAndmlkZW9fbGFiZWwnIH0sXG4gICAgeyBuYW1lOiAnYWRkX2NpcmNsZScgfSxcbiAgICB7IG5hbWU6ICd3YXRjaF9sYXRlcicgfSxcbiAgICB7IG5hbWU6ICd3aGVyZV90b192b3RlJyB9LFxuICAgIHsgbmFtZTogJ3dvcmsnIH0sXG4gICAgeyBuYW1lOiAnd2ViJyB9LFxuICAgIHsgbmFtZTogJ3doYXRzaG90JyB9LFxuICAgIHsgbmFtZTogJ3dpZmknIH0sXG4gICAgeyBuYW1lOiAnd29ya3NwYWNlcycgfSxcbiAgICB7IG5hbWU6ICd3Yl9jbG91ZHknIH0sXG4gICAgeyBuYW1lOiAnd2F2ZXMnIH0sXG4gICAgeyBuYW1lOiAnd2FybmluZycgfSxcbiAgICB7IG5hbWU6ICdzcGFjZV9kYXMnIH1cbiAgXTtcbiAgaXNQaWN0b0xpc3RTaG93OiBib29sZWFuO1xuICBwaWN0byA9IFwiXCI7XG4gIGN1cnJlbnRPbmJvYXJkaW5nOiBhbnk7XG4gIGN1cnJlbnRUZW1wbGF0ZTphbnlcbiAgaXNTZWxlY3RlZDogYm9vbGVhbjtcbiAgY3VycmVudFVzZXI6IGFueTtcbiAgY3VycmVudEFjdGl2ZTogYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgXG4gICAgcHVibGljIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLCBcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nXG4gICAgKSB7IH1cbiAgXG4gIGNhdGVnb3JpZXM6IGFueVxuXG4gIGNhbkRlYWN0aXZhdGUoKXtcbiAgICBpZighdGhpcy5jYW5FeGl0KXtcbiAgICAgIHRoaXMuZGlhbG9nLm9wZW4oRXhpdENvbmZpcm1Db21wb25lbnQse1xuICAgICAgICBkYXRhOicnXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5jYW5FeGl0JFxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZSAgICBcbiAgfVxuICBcbiAgYXN5bmMgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLm9uQ3JlYXRlRHluYW1pY0Zvcm0oKTtcbiAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoXCJpZFwiKTtcblxuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpOyAgICAgIFxuICAgIH0sIDUwMCk7XG5cbiAgICB0aGlzLnNlcnZpY2UuX3RlbXBsYXRlcy5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIHRoaXMudGVtcGxhdGVzID0gZGF0YTtcbiAgICB9KTtcbiAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoXCJpZFwiKTtcbiAgICBpZiAodGhpcy5pZCAhPT0gXCIwXCIpIHtcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRPbmJvYXJkaW5nID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldE9uYm9hcmRpbmcodGhpcy5pZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudE9uYm9hcmRpbmcpO1xuICAgICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh0aGlzLmN1cnJlbnRPbmJvYXJkaW5nKVxuICAgICAgICB0aGlzLmNhdGVnb3JpZXM9dGhpcy5jdXJyZW50T25ib2FyZGluZy5jYXRlZ29yaWVzO1xuICAgICAgICB0aGlzLmN1cnJlbnRUZW1wbGF0ZT10aGlzLmN1cnJlbnRPbmJvYXJkaW5nPy52dGVtcGxhdGVzWzBdXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPbmJvYXJkaW5nLlRlbXBsYXRlSWQpIHtcbiAgICAgICAgICB0aGlzLm9uU2VsZWN0Q29udGFjdFRlbXBsYXRlKClcbiAgICAgICAgfVxuICAgICAgfSwgNTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3VycmVudE9uYm9hcmRpbmcgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0T25ib2FyZGluZyh0aGlzLmlkKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50T25ib2FyZGluZyk7XG4gICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHRoaXMuY3VycmVudE9uYm9hcmRpbmcpXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcz10aGlzLmN1cnJlbnRPbmJvYXJkaW5nLmNhdGVnb3JpZXM7XG4gICAgICAgIC8vdGhpcy5jdXJyZW50VGVtcGxhdGU9dGhpcy5jdXJyZW50T25ib2FyZGluZz8udnRlbXBsYXRlc1swXVxuICAgICAgICAvL3RoaXMub25TZWxlY3RDb250YWN0VGVtcGxhdGUoKVxuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICBvbkNyZWF0ZUR5bmFtaWNGb3JtKCkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgVGVtcGxhdGVJZDogWzAsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cblxuICBvblNlbGVjdENvbnRhY3RUZW1wbGF0ZSgpIHtcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cblxuICBvblNlbGVjdChpZCkge1xuICAgIHRoaXMuY3VycmVudFRlbXBsYXRlPSB0aGlzLnRlbXBsYXRlcy5maW5kKCh0KSA9PiB0Ll9pZCA9PT0gaWQpO1xuICAgIHRoaXMuY2F0ZWdvcmllcyA9dGhpcy5jdXJyZW50VGVtcGxhdGUuY2F0ZWdvcmllc1xuICB9XG5cbiAgZXhpc3RTdWJGb3JtKGZvcm1zKXtcbiAgICBsZXQgZXhpc3Q9ZmFsc2U7XG4gICAgaWYoZm9ybXMpe1xuICAgICAgZm9yIChjb25zdCBzdWIgb2YgZm9ybXMpIHtcbiAgICAgICAgaWYoc3ViLmZvcm1zKXtcbiAgICAgICAgICBleGlzdD10cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBleGlzdFxuICB9XG5cbiAgb25DaGFuZ2VDYXRlZ29yeSgpIHtcbiAgICBjb25zdCBjaGVja01hbmRhdG9yeT0oZmllbGQpPT4gISFmaWVsZC52YWx1ZSAmJiBmaWVsZC5pc01hbmRhdG9yeSAmJiBmaWVsZC50eXBlIT09XCJjaGVja2JveF9tdWx0aXBsZVwiICB8fCBmaWVsZC5pc0NvbmRpdGlvbmFsICB8fCAhZmllbGQuaXNNYW5kYXRvcnkgfHwgZmllbGQudHlwZT09PVwiY2hlY2tib3hfbXVsdGlwbGVcIlxuICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXMuZXZlcnkoKGNhdCkgPT4gY2F0LmZvcm1zLmV2ZXJ5KChmaWVsZCkgPT4geyBcbiAgICAgIGlmKGZpZWxkLmZvcm1zKXtcbiAgICAgICAgIHJldHVybiBmaWVsZC5mb3Jtcy5ldmVyeSgoZm9ybSk9PntcbiAgICAgICAgICAgaWYoZm9ybS5mb3Jtcyl7XG4gICAgICAgICAgICAgIHJldHVybiBmb3JtLmZvcm1zLmV2ZXJ5KChjaGlsZCk9PntcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjaGVja01hbmRhdG9yeShjaGlsZClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgfVxuICAgICAgICAgICByZXR1cm4gY2hlY2tNYW5kYXRvcnkoZm9ybSlcbiAgICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZXR1cm4gY2hlY2tNYW5kYXRvcnkoZmllbGQpXG4gICAgfSkpO1xuICB9XG5cblxuICBhc3luYyBvblN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNhdGVnb3JpZXMpO1xuICAgIFxuICAgIGlmICh0aGlzLmZvcm0udmFsaWQgJiYgdGhpcy5vbkNoYW5nZUNhdGVnb3J5KCkpIHsgXG4gICAgICBjb25zdCByZXN1bHQgPVxuICAgICAgICB0aGlzLmlkICYmIHRoaXMuaWQgIT09IFwiMFwiXG4gICAgICAgICAgPyBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlT25ib2FyZGluZyh7XG4gICAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMsXG4gICAgICAgICAgICBfaWQ6dGhpcy5pZFxuICAgICAgICAgIH0pXG4gICAgICAgICAgOiBhd2FpdCB0aGlzLnNlcnZpY2UuY3JlYXRlT25ib2FyZGluZyh7XG4gICAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXNcbiAgICAgICAgICB9KTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xuICAgICAgICB0aGlzLmNhbkV4aXQ9dHJ1ZTsgXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VydmljZS5tYWluUGF0aCsnL29uYm9hcmRpbmcnKTtcbiAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5zZXJ2aWNlLm1haW5QYXRoKycvb25ib2FyZGluZyddKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJycm9yLi4uLi4uXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgb25FeHBlbmRNb3JlKGV2ZW50LCAuLi5wYXJhbXMpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICBldmVudC5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgLy8gaWYgKGV2ZW50LmZpZWxkICYmICFldmVudC5maWVsZC5leHBhbmRNb3JlKSB7XG4gICAgICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAgICAgdGhpcy5jYXRlZ29yaWVzW2ldLmV4cGFuZE1vcmUgPSBmYWxzZTtcbiAgICAgIC8vICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zKSB7XG4gICAgICAvLyAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtcy5sZW5ndGg7IGorKykge1xuICAgICAgLy8gICAgICAgICB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXNbal0uZXhwYW5kTW9yZSA9IGZhbHNlO1xuICAgICAgLy8gICAgICAgfVxuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuXG4gICAgfVxuICAgIGlmIChwYXJhbXMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWUgPSAhdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5jdXJyZW50QWN0aXZlPVN0cmluZyhwYXJhbXNbMF0pICsgU3RyaW5nKHBhcmFtc1sxXSlcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMykge1xuICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmRlZmF1bHRWYWx1ZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZGVmYXVsdFZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5kZWZhdWx0VmFsdWUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XG4gICAgdGhpcy5jYW5FeGl0PWZhbHNlOyAgXG4gICAgaWYgKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyID09PSBldmVudC5jb250YWluZXIpIHtcbiAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmZXJBcnJheUl0ZW0oZXZlbnQucHJldmlvdXNDb250YWluZXIuZGF0YSwgZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgaW5nb3JlRGVmYXVsdEFjdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIG9uU2hvd0NhdGVnb3J5KCkge1xuICAgIHRoaXMuc2hvd1Byb2ZpbGVOYW1lID0gIXRoaXMuc2hvd1Byb2ZpbGVOYW1lO1xuICB9XG5cbiAgb25TZWxlY3RQaWN0byhlLCBwaWN0bykge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNhbkV4aXQ9ZmFsc2U7ICBcbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7IFBpY3RvOiBwaWN0byB9KTtcbiAgICB0aGlzLmlzUGljdG9MaXN0U2hvdyA9ICF0aGlzLmlzUGljdG9MaXN0U2hvdztcbiAgfVxuXG4gIG9uU2hvd1BpY3RvTGlzdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuaXNQaWN0b0xpc3RTaG93ID0gIXRoaXMuaXNQaWN0b0xpc3RTaG93O1xuICB9XG4gXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihVcGRhdGVQcm9maWxDb21wb25lbnQse1xuICAgICAgZGF0YTp7XG4gICAgICAgIG1hdEljb25MaXN0OnRoaXMubWF0SWNvbkxpc3QsXG4gICAgICAgIGZvcm06dGhpcy5mb3JtLFxuICAgICAgICB0YWdzOnRoaXMudGFnc1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoY29uZmlybWVkOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoY29uZmlybWVkKSB7XG4gICAgICAgIFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNFeHBhbmRlZChmb3JtczphbnlbXSl7XG4gICBsZXQgaXNFeHBlbmQ9ZmFsc2U7XG4gICAgZm9yIChjb25zdCBmb3JtIG9mIGZvcm1zKSB7XG4gICAgICBpZihmb3JtLmRlZmF1bHRWYWx1ZSl7XG4gICAgICAgIGlzRXhwZW5kPXRydWU7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIH1cblxuICBvbkNoZWNrQ29uZGl0aW9uTG9jYXRpb25WYWx1ZShpc2NvbmRpdGlvbixsb2NhdGlvbiwgY29uZGl0aW9uVmFsdWUpe1xuICAgIGlmKCFpc2NvbmRpdGlvbil7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYobG9jYXRpb24ubGV2ZWw9PT0xKXtcbiAgICAgIGlmKHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnR5cGU9PT0nY2hlY2tib3hfbXVsdGlwbGUnKXtcbiAgICAgICAgY29uc3QgYXJyYXk9dGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0uZGVmYXVsdFZhbHVlLmZpbHRlcigoY2hlY2spPT5jaGVjay5jaGVja2VkKVxuICAgICAgICBsZXQgY2hlY2tlZD1mYWxzZTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFycmF5W2ldLnZhbHVlID09IGNvbmRpdGlvblZhbHVlKSB7XG4gICAgICAgICAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hlY2tlZDtcbiAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0udmFsdWU9PT1jb25kaXRpb25WYWx1ZVxuICAgICAgfSAgICAgXG4gICAgfWVsc2UgaWYobG9jYXRpb24ubGV2ZWw9PT0yKXtcbiAgICAgIGlmKHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5mb3JtSW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0udHlwZT09PSdjaGVja2JveF9tdWx0aXBsZScpe1xuICAgICAgICBjb25zdCBhcnJheT10aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLmRlZmF1bHRWYWx1ZS5maWx0ZXIoKGNoZWNrKT0+Y2hlY2suY2hlY2tlZClcbiAgICAgICAgbGV0IGNoZWNrZWQ9ZmFsc2U7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChhcnJheVtpXS52YWx1ZSA9PSBjb25kaXRpb25WYWx1ZSkge1xuICAgICAgICAgICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoZWNrZWQ7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5mb3JtSW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0udmFsdWU9PT1jb25kaXRpb25WYWx1ZVxuICAgICAgfVxuICAgIH1lbHNlIGlmKGxvY2F0aW9uLmxldmVsPT09Myl7XG4gICAgICBpZih0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zdWJJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS50eXBlPT09J2NoZWNrYm94X211bHRpcGxlJyl7XG4gICAgICAgIGNvbnN0IGFycmF5PXRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5mb3JtSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnN1YkluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLmRlZmF1bHRWYWx1ZS5maWx0ZXIoKGNoZWNrKT0+Y2hlY2suY2hlY2tlZClcbiAgICAgICAgbGV0IGNoZWNrZWQ9ZmFsc2U7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChhcnJheVtpXS52YWx1ZSA9PSBjb25kaXRpb25WYWx1ZSkge1xuICAgICAgICAgICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoZWNrZWQ7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5mb3JtSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnN1YkluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnZhbHVlPT09Y29uZGl0aW9uVmFsdWVcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuIFxuICB9XG5cbiAgY2hlY2tTdWJGb3JtKGZvcm1zKXtcbiAgICBsZXQgaGFzU3ViRm9ybT1mYWxzZTtcbiAgICBmb3IgKGNvbnN0IGZvcm0gb2YgZm9ybXMpIHtcbiAgICAgIGlmKGZvcm0uZm9ybXMgJiYgZm9ybS5mb3Jtcy5sZW5ndGg+MCl7XG4gICAgICAgIGhhc1N1YkZvcm09dHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBoYXNTdWJGb3JtXG4gIH1cblxuICBvblNlbGVjdE1lbnUoaSl7XG4gICAgdGhpcy5zZWxlY3RlZE1lbnU9aVxuICB9XG5cbn1cbiJdfQ==