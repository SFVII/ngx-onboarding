import { ActivatedRoute, Router } from "@angular/router";
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { OnboardingService } from "../../onboarding.service";
import { fieldWidth } from "../../utils/utils";
import * as i0 from "@angular/core";
export declare class OnboardingCreateComponent implements OnInit {
    private fb;
    service: OnboardingService;
    private route;
    private router;
    private dialog;
    form: FormGroup;
    currentProfil: any;
    canExit: boolean;
    tags: any[];
    onboardingId: string;
    templateId: string;
    parent: any[];
    selectedMenu: number;
    templates: any;
    contacts: any;
    currentOnboarding: any;
    currentTemplate: any;
    isSelected: boolean;
    currentUser: any;
    currentActive: any;
    showMode: boolean;
    selectedCategoryIndex: any;
    loading: boolean;
    invalideValue: boolean;
    detailView: any;
    fieldWidth: typeof fieldWidth;
    categories: any;
    submitLabel: string;
    resumeLabel: string;
    isSubmitted: boolean;
    constructor(fb: FormBuilder, service: OnboardingService, route: ActivatedRoute, router: Router, dialog: MatDialog);
    isObject(obj: any): boolean;
    canDeactivate(): true | import("rxjs").Subject<boolean>;
    onScroll(event: any): void;
    ngOnInit(): Promise<void>;
    onLoadViewDetail(categories: any): void;
    onCreateDynamicForm(): void;
    catNameStart(str: string): boolean;
    onSelect(id: any, onboarding: any): Promise<void>;
    existSubForm(forms: any): boolean;
    private scrollToFirstInvalidControl;
    onChangeCategory(): any;
    onSubmit(submit?: boolean): Promise<void>;
    checkOnboardingPath(): string;
    ingoreDefaultAction(e: any): void;
    onCheckConditionLocationValue(iscondition: any, condition: any): boolean;
    checkSubForm(forms: any): boolean;
    onSelectMenu(i: any): void;
    onCheckValue(event: boolean): void;
    onLink(e: any): void;
    onShowMode(): void;
    onCreateConfirm(): void;
    static ??fac: i0.????FactoryDef<OnboardingCreateComponent>;
    static ??cmp: i0.????ComponentDefWithMeta<OnboardingCreateComponent, "create-onboarding", never, {}, {}, never>;
}
