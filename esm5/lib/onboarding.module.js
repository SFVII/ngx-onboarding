import { NgModule, Optional, SkipSelf } from '@angular/core';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingService } from './onboarding.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateProfileCreateComponent } from './pages/template-profile-create/template-profile-create.component';
import { TemplateProfileListComponent } from './pages/template-profile-list/template-profile-list.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SubTemplateProfileComponent } from './components/template/sub-template-profile/sub-template-profile.component';
import { MaterialElevationDirective } from './directives/elevation';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { ExitConfirmComponent } from './components/exit-confirm/exit-confirm.component';
import { OnboardingCreateComponent } from './pages/onboarding-create/onboarding-create.component';
import { SubOnboardingCreateComponent } from './components/onboarding/sub-onboarding-create/sub-onboarding-create.component';
import { OnboardingListComponent } from './pages/onboarding-list/onboarding-list.component';
import { TableModule } from 'table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TypeComponent } from './components/template/type-dialog/type.component';
import { DialogCreateTemplateComponent } from './components/template/dialog-create-template/dialog-create-template.component';
import { OnboardingTableComponent } from './components/onboarding/onboarding-table/onboarding-table.component';
import { DialogCreateOnboardingComponent } from './components/onboarding/dialog-create-onboarding/dialog-create-onboarding.component';
import { BottomSheet, OnboardingDetailComponent } from './components/onboarding/onboarding-detail/onboarding-detail.component';
import { LoadingComponent } from './components/onboarding/loading/loading.component';
import { DialogConfirmation } from './components/dialog-confirmation/dialog-confirmation.component';
import { LoadingPageComponent } from './components/loading/loading.component';
import { TemplateProfileFormComponent } from './pages/template-profile-form/template-profile-form.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@nicky-lenaers/ngx-scroll-to";
;
export var onBoardingRoutes = [
    {
        path: 'onboarding',
        component: OnboardingComponent,
        children: [
            {
                path: 'template/:id',
                component: TemplateProfileFormComponent,
                canDeactivate: [CanDeactivateGuard],
            },
            {
                path: 'template',
                component: TemplateProfileListComponent
            },
            {
                path: 'requests',
                component: OnboardingListComponent
            },
            {
                path: 'requests/:templateId/:onboardingId',
                component: OnboardingCreateComponent
            }
        ]
    },
];
var OnboardingModule = /** @class */ (function () {
    function OnboardingModule(parentModule) {
        if (parentModule) {
            throw new Error('OnboardingModule is already loaded. Import it in the AppModule only');
        }
    }
    OnboardingModule.forRoot = function (config) {
        return {
            ngModule: OnboardingModule,
            providers: [
                { provide: '__NgxOnboarding__', useValue: config },
                OnboardingService
            ]
        };
    };
    OnboardingModule.ɵmod = i0.ɵɵdefineNgModule({ type: OnboardingModule });
    OnboardingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function OnboardingModule_Factory(t) { return new (t || OnboardingModule)(i0.ɵɵinject(OnboardingModule, 12)); }, providers: [OnboardingService, CanDeactivateGuard, MatDatepickerModule], imports: [[
                FormsModule,
                MatFormFieldModule,
                MatButtonModule,
                CommonModule,
                BrowserModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                MatCheckboxModule,
                MatIconModule,
                MatSelectModule,
                MatInputModule,
                MatChipsModule,
                MatGridListModule,
                MatRadioModule,
                MatPaginatorModule,
                CdkTableModule,
                MatSortModule,
                MatTableModule,
                RouterModule.forChild(onBoardingRoutes),
                ScrollToModule.forRoot(),
                DragDropModule,
                MatCardModule,
                MatDialogModule,
                MatStepperModule,
                MatProgressBarModule,
                MatTooltipModule,
                TableModule,
                MatTabsModule,
                NgxIntlTelInputModule,
                MatSlideToggleModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatBottomSheetModule
            ],
            HttpClientModule,
            RouterModule,
            MatTabsModule] });
    return OnboardingModule;
}());
export { OnboardingModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OnboardingModule, { declarations: [MaterialElevationDirective,
        OnboardingComponent,
        TemplateProfileCreateComponent,
        OnboardingCreateComponent,
        SubOnboardingCreateComponent,
        TemplateProfileListComponent,
        SubTemplateProfileComponent,
        ExitConfirmComponent,
        OnboardingListComponent,
        TypeComponent,
        OnboardingTableComponent,
        DialogCreateTemplateComponent,
        DialogCreateOnboardingComponent,
        OnboardingDetailComponent,
        LoadingComponent,
        LoadingPageComponent,
        DialogConfirmation,
        BottomSheet,
        TemplateProfileFormComponent], imports: [FormsModule,
        MatFormFieldModule,
        MatButtonModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        MatChipsModule,
        MatGridListModule,
        MatRadioModule,
        MatPaginatorModule,
        CdkTableModule,
        MatSortModule,
        MatTableModule, i1.RouterModule, i2.ScrollToModule, DragDropModule,
        MatCardModule,
        MatDialogModule,
        MatStepperModule,
        MatProgressBarModule,
        MatTooltipModule,
        TableModule,
        MatTabsModule,
        NgxIntlTelInputModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatBottomSheetModule], exports: [OnboardingComponent,
        HttpClientModule,
        TemplateProfileCreateComponent,
        TemplateProfileListComponent,
        OnboardingListComponent,
        OnboardingCreateComponent,
        DialogCreateOnboardingComponent,
        RouterModule,
        MatTabsModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnboardingModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MaterialElevationDirective,
                    OnboardingComponent,
                    TemplateProfileCreateComponent,
                    OnboardingCreateComponent,
                    SubOnboardingCreateComponent,
                    TemplateProfileListComponent,
                    SubTemplateProfileComponent,
                    ExitConfirmComponent,
                    OnboardingListComponent,
                    TypeComponent,
                    OnboardingTableComponent,
                    DialogCreateTemplateComponent,
                    DialogCreateOnboardingComponent,
                    OnboardingDetailComponent,
                    LoadingComponent,
                    LoadingPageComponent,
                    DialogConfirmation,
                    BottomSheet,
                    TemplateProfileFormComponent
                ],
                imports: [
                    FormsModule,
                    MatFormFieldModule,
                    MatButtonModule,
                    CommonModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatSelectModule,
                    MatInputModule,
                    MatChipsModule,
                    MatGridListModule,
                    MatRadioModule,
                    MatPaginatorModule,
                    CdkTableModule,
                    MatSortModule,
                    MatTableModule,
                    RouterModule.forChild(onBoardingRoutes),
                    ScrollToModule.forRoot(),
                    DragDropModule,
                    MatCardModule,
                    MatDialogModule,
                    MatStepperModule,
                    MatProgressBarModule,
                    MatTooltipModule,
                    TableModule,
                    MatTabsModule,
                    NgxIntlTelInputModule,
                    MatSlideToggleModule,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    MatBottomSheetModule
                ],
                providers: [OnboardingService, CanDeactivateGuard, MatDatepickerModule],
                entryComponents: [ExitConfirmComponent, TypeComponent, DialogCreateTemplateComponent, DialogCreateOnboardingComponent, DialogConfirmation],
                exports: [
                    OnboardingComponent,
                    HttpClientModule,
                    TemplateProfileCreateComponent,
                    TemplateProfileListComponent,
                    OnboardingListComponent,
                    OnboardingCreateComponent,
                    DialogCreateOnboardingComponent,
                    RouterModule,
                    MatTabsModule
                ]
            }]
    }], function () { return [{ type: OnboardingModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL29uYm9hcmRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBa0MsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDbkgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDN0csT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxN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QUFTLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQztnQkFDdkUsZUFBZSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsYUFBYSxFQUFFLDZCQUE2QixFQUFFLCtCQUErQixFQUFFLGtCQUFrQixDQUFDO2dCQUMxSSxPQUFPLEVBQ0w7b0JBQ0UsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLDhCQUE4QjtvQkFDOUIsNEJBQTRCO29CQUM1Qix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsK0JBQStCO29CQUMvQixZQUFZO29CQUNaLGFBQWE7aUJBQ2Q7YUFDSjtzQ0FHb0QsZ0JBQWdCO3NCQUF0RCxRQUFROztzQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTE9DQUxFX0lELCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdDb21wb25lbnQgfSBmcm9tICcuL29uYm9hcmRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT25ib2FyZGluZ0ludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZS9PbmJvYXJkaW5nSW50ZXJmYWNlJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuL29uYm9hcmRpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJzs7XHJcbmltcG9ydCB7IFRlbXBsYXRlUHJvZmlsZUNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUvdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGVtcGxhdGVQcm9maWxlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvdGVtcGxhdGUtcHJvZmlsZS1saXN0L3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQgeyBNYXRTdGVwcGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc3RlcHBlcic7XHJcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XHJcbmltcG9ydCB7IE1hdENoaXBzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBNYXROYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IE1hdEdyaWRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZ3JpZC1saXN0JztcclxuaW1wb3J0IHsgTWF0UmFkaW9Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XHJcbmltcG9ydCB7IE1hdFBhZ2luYXRvck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XHJcbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcclxuaW1wb3J0IHsgTWF0U29ydE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xyXG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcclxuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYm90dG9tLXNoZWV0JztcclxuXHJcbmltcG9ydCB7IERyYWdEcm9wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgU3ViVGVtcGxhdGVQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsRWxldmF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2VsZXZhdGlvbic7XHJcbmltcG9ydCB7IFNjcm9sbFRvTW9kdWxlIH0gZnJvbSAnQG5pY2t5LWxlbmFlcnMvbmd4LXNjcm9sbC10byc7XHJcbmltcG9ydCB7IENhbkRlYWN0aXZhdGVHdWFyZCB9IGZyb20gJy4vY2FuLWRlYWN0aXZhdGUtZ3VhcmQuc2VydmljZSc7XHJcbmltcG9ydCB7IEV4aXRDb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V4aXQtY29uZmlybS9leGl0LWNvbmZpcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvb25ib2FyZGluZy1jcmVhdGUvb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3ViT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vbmJvYXJkaW5nL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT25ib2FyZGluZ0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL29uYm9hcmRpbmctbGlzdC9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFibGVNb2R1bGUsIFRhYmxlU2VydmljZSB9IGZyb20gJ3RhYmxlJztcclxuaW1wb3J0IHsgTWF0VGFic01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xyXG5pbXBvcnQgeyBOZ3hJbnRsVGVsSW5wdXRNb2R1bGUgfSBmcm9tICduZ3gtaW50bC10ZWwtaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXRTbGlkZVRvZ2dsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZSc7XHJcbmltcG9ydCB7IFR5cGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVtcGxhdGUvdHlwZS1kaWFsb2cvdHlwZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaWFsb2dDcmVhdGVUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlL2RpYWxvZy1jcmVhdGUtdGVtcGxhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT25ib2FyZGluZ1RhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29uYm9hcmRpbmcvb25ib2FyZGluZy10YWJsZS9vbmJvYXJkaW5nLXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERpYWxvZ0NyZWF0ZU9uYm9hcmRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcvZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJvdHRvbVNoZWV0LCBPbmJvYXJkaW5nRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29uYm9hcmRpbmcvb25ib2FyZGluZy1kZXRhaWwvb25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vbmJvYXJkaW5nL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaWFsb2dDb25maXJtYXRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nLWNvbmZpcm1hdGlvbi9kaWFsb2ctY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRpbmdQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVByb2ZpbGVGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWZvcm0vdGVtcGxhdGUtcHJvZmlsZS1mb3JtLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY29uc3Qgb25Cb2FyZGluZ1JvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICdvbmJvYXJkaW5nJyxcclxuICAgIGNvbXBvbmVudDogT25ib2FyZGluZ0NvbXBvbmVudCxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAndGVtcGxhdGUvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IFRlbXBsYXRlUHJvZmlsZUZvcm1Db21wb25lbnQsXHJcbiAgICAgICAgY2FuRGVhY3RpdmF0ZTogW0NhbkRlYWN0aXZhdGVHdWFyZF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAndGVtcGxhdGUnLFxyXG4gICAgICAgIGNvbXBvbmVudDogVGVtcGxhdGVQcm9maWxlTGlzdENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3JlcXVlc3RzJyxcclxuICAgICAgICBjb21wb25lbnQ6IE9uYm9hcmRpbmdMaXN0Q29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAncmVxdWVzdHMvOnRlbXBsYXRlSWQvOm9uYm9hcmRpbmdJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG5cclxuICAvLyB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL3Byb2ZpbC1saXN0JywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuXVxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTWF0ZXJpYWxFbGV2YXRpb25EaXJlY3RpdmUsXHJcbiAgICBPbmJvYXJkaW5nQ29tcG9uZW50LFxyXG4gICAgVGVtcGxhdGVQcm9maWxlQ3JlYXRlQ29tcG9uZW50LFxyXG4gICAgT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudCxcclxuICAgIFN1Yk9uYm9hcmRpbmdDcmVhdGVDb21wb25lbnQsXHJcbiAgICBUZW1wbGF0ZVByb2ZpbGVMaXN0Q29tcG9uZW50LFxyXG4gICAgU3ViVGVtcGxhdGVQcm9maWxlQ29tcG9uZW50LFxyXG4gICAgRXhpdENvbmZpcm1Db21wb25lbnQsXHJcbiAgICBPbmJvYXJkaW5nTGlzdENvbXBvbmVudCxcclxuICAgIFR5cGVDb21wb25lbnQsXHJcbiAgICBPbmJvYXJkaW5nVGFibGVDb21wb25lbnQsXHJcbiAgICBEaWFsb2dDcmVhdGVUZW1wbGF0ZUNvbXBvbmVudCxcclxuICAgIERpYWxvZ0NyZWF0ZU9uYm9hcmRpbmdDb21wb25lbnQsXHJcbiAgICBPbmJvYXJkaW5nRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgTG9hZGluZ0NvbXBvbmVudCxcclxuICAgIExvYWRpbmdQYWdlQ29tcG9uZW50LFxyXG4gICAgRGlhbG9nQ29uZmlybWF0aW9uLFxyXG4gICAgQm90dG9tU2hlZXQsXHJcbiAgICBUZW1wbGF0ZVByb2ZpbGVGb3JtQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE1hdFNlbGVjdE1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgTWF0Q2hpcHNNb2R1bGUsXHJcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcclxuICAgIE1hdFJhZGlvTW9kdWxlLFxyXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxyXG4gICAgQ2RrVGFibGVNb2R1bGUsXHJcbiAgICBNYXRTb3J0TW9kdWxlLFxyXG4gICAgTWF0VGFibGVNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQob25Cb2FyZGluZ1JvdXRlcyksXHJcbiAgICBTY3JvbGxUb01vZHVsZS5mb3JSb290KCksXHJcbiAgICBEcmFnRHJvcE1vZHVsZSxcclxuICAgIE1hdENhcmRNb2R1bGUsXHJcbiAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICBNYXRTdGVwcGVyTW9kdWxlLFxyXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxyXG4gICAgVGFibGVNb2R1bGUsXHJcbiAgICBNYXRUYWJzTW9kdWxlLFxyXG4gICAgTmd4SW50bFRlbElucHV0TW9kdWxlLFxyXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcclxuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtPbmJvYXJkaW5nU2VydmljZSwgQ2FuRGVhY3RpdmF0ZUd1YXJkLCBNYXREYXRlcGlja2VyTW9kdWxlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtFeGl0Q29uZmlybUNvbXBvbmVudCwgVHlwZUNvbXBvbmVudCwgRGlhbG9nQ3JlYXRlVGVtcGxhdGVDb21wb25lbnQsIERpYWxvZ0NyZWF0ZU9uYm9hcmRpbmdDb21wb25lbnQsIERpYWxvZ0NvbmZpcm1hdGlvbl0sXHJcbiAgZXhwb3J0czpcclxuICAgIFtcclxuICAgICAgT25ib2FyZGluZ0NvbXBvbmVudCxcclxuICAgICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgICAgVGVtcGxhdGVQcm9maWxlQ3JlYXRlQ29tcG9uZW50LFxyXG4gICAgICBUZW1wbGF0ZVByb2ZpbGVMaXN0Q29tcG9uZW50LFxyXG4gICAgICBPbmJvYXJkaW5nTGlzdENvbXBvbmVudCxcclxuICAgICAgT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudCxcclxuICAgICAgRGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudCxcclxuICAgICAgUm91dGVyTW9kdWxlLFxyXG4gICAgICBNYXRUYWJzTW9kdWxlXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ01vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogT25ib2FyZGluZ01vZHVsZSkge1xyXG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ09uYm9hcmRpbmdNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWc6IE9uYm9hcmRpbmdJbnRlcmZhY2UpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE9uYm9hcmRpbmdNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBPbmJvYXJkaW5nTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6ICdfX05neE9uYm9hcmRpbmdfXycsIHVzZVZhbHVlOiBjb25maWcgfSxcclxuICAgICAgICBPbmJvYXJkaW5nU2VydmljZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=