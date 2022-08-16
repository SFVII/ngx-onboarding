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
// import { ScrollToModule } from './module/scroll-to/scroll-to.module';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { ExitConfirmComponent } from './components/exit-confirm/exit-confirm.component';
import { OnboardingCreateComponent } from './pages/onboarding-create/onboarding-create.component';
import { SubOnboardingCreateComponent } from './components/onboarding/sub-onboarding-create/sub-onboarding-create.component';
import { OnboardingListComponent } from './pages/onboarding-list/onboarding-list.component';
import { TableModule } from 'ngx-table';
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
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
;
export const onBoardingRoutes = [
    {
        path: 'onboarding',
        component: OnboardingComponent,
        children: [
            {
                path: 'template/:id',
                component: TemplateProfileCreateComponent,
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
    // { path: '', redirectTo: '/profil-list', pathMatch: 'full' },
];
export class OnboardingModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('OnboardingModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: OnboardingModule,
            providers: [
                { provide: '__NgxOnboarding__', useValue: config },
                OnboardingService
            ]
        };
    }
}
OnboardingModule.ɵfac = function OnboardingModule_Factory(t) { return new (t || OnboardingModule)(i0.ɵɵinject(OnboardingModule, 12)); };
OnboardingModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: OnboardingModule });
OnboardingModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [OnboardingService, CanDeactivateGuard, MatDatepickerModule], imports: [[
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
            ScrollToModule,
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
            MatBottomSheetModule,
            ScrollToModule
        ], HttpClientModule,
        RouterModule,
        MatTabsModule,
        ScrollToModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingModule, [{
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
                    ScrollToModule,
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
                    MatBottomSheetModule,
                    ScrollToModule
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
                    MatTabsModule,
                    ScrollToModule
                ]
            }]
    }], function () { return [{ type: OnboardingModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
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
        BottomSheet], imports: [FormsModule,
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
        MatTableModule, i1.RouterModule, ScrollToModule,
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
        MatBottomSheetModule,
        ScrollToModule], exports: [OnboardingComponent,
        HttpClientModule,
        TemplateProfileCreateComponent,
        TemplateProfileListComponent,
        OnboardingListComponent,
        OnboardingCreateComponent,
        DialogCreateOnboardingComponent,
        RouterModule,
        MatTabsModule,
        ScrollToModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvb25ib2FyZGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFrQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUM3RyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxP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O1FBQ2QsYUFBYTtRQUNiLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsYUFBYTtRQUNiLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsY0FBYyxhQU1aLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsOEJBQThCO1FBQzlCLDRCQUE0QjtRQUM1Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLCtCQUErQjtRQUMvQixZQUFZO1FBQ1osYUFBYTtRQUNiLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMT0NBTEVfSUQsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vb25ib2FyZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlL09uYm9hcmRpbmdJbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4vb25ib2FyZGluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnOztcclxuaW1wb3J0IHsgVGVtcGxhdGVQcm9maWxlQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVByb2ZpbGVMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWxpc3QvdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE1hdFN0ZXBwZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zdGVwcGVyJztcclxuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcclxuaW1wb3J0IHsgTWF0Q2hpcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IE1hdE5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0R3JpZExpc3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ncmlkLWxpc3QnO1xyXG5pbXBvcnQgeyBNYXRSYWRpb01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcclxuaW1wb3J0IHsgQ2RrVGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xyXG5pbXBvcnQgeyBNYXRTb3J0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XHJcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBNYXRQcm9ncmVzc0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XHJcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXQnO1xyXG5cclxuaW1wb3J0IHsgRHJhZ0Ryb3BNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBTdWJUZW1wbGF0ZVByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVtcGxhdGUvc3ViLXRlbXBsYXRlLXByb2ZpbGUvc3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0ZXJpYWxFbGV2YXRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZWxldmF0aW9uJztcclxuLy8gaW1wb3J0IHsgU2Nyb2xsVG9Nb2R1bGUgfSBmcm9tICcuL21vZHVsZS9zY3JvbGwtdG8vc2Nyb2xsLXRvLm1vZHVsZSc7XHJcbmltcG9ydCB7IENhbkRlYWN0aXZhdGVHdWFyZCB9IGZyb20gJy4vY2FuLWRlYWN0aXZhdGUtZ3VhcmQuc2VydmljZSc7XHJcbmltcG9ydCB7IEV4aXRDb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V4aXQtY29uZmlybS9leGl0LWNvbmZpcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvb25ib2FyZGluZy1jcmVhdGUvb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3ViT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vbmJvYXJkaW5nL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT25ib2FyZGluZ0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL29uYm9hcmRpbmctbGlzdC9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFibGVNb2R1bGUsIFRhYmxlU2VydmljZSB9IGZyb20gJ25neC10YWJsZSc7XHJcbmltcG9ydCB7IE1hdFRhYnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcclxuaW1wb3J0IHsgTmd4SW50bFRlbElucHV0TW9kdWxlIH0gZnJvbSAnbmd4LWludGwtdGVsLWlucHV0JztcclxuaW1wb3J0IHsgTWF0U2xpZGVUb2dnbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xyXG5pbXBvcnQgeyBUeXBlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlL3R5cGUtZGlhbG9nL3R5cGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlhbG9nQ3JlYXRlVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVtcGxhdGUvZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmctdGFibGUvb25ib2FyZGluZy10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29uYm9hcmRpbmcvZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCb3R0b21TaGVldCwgT25ib2FyZGluZ0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmctZGV0YWlsL29uYm9hcmRpbmctZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb25ib2FyZGluZy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlhbG9nQ29uZmlybWF0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZy1jb25maXJtYXRpb24vZGlhbG9nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkaW5nUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2Nyb2xsVG9Nb2R1bGUgfSBmcm9tICdAbmlja3ktbGVuYWVycy9uZ3gtc2Nyb2xsLXRvJztcclxuXHJcbmV4cG9ydCBjb25zdCBvbkJvYXJkaW5nUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJ29uYm9hcmRpbmcnLFxyXG4gICAgY29tcG9uZW50OiBPbmJvYXJkaW5nQ29tcG9uZW50LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd0ZW1wbGF0ZS86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogVGVtcGxhdGVQcm9maWxlQ3JlYXRlQ29tcG9uZW50LFxyXG4gICAgICAgIGNhbkRlYWN0aXZhdGU6IFtDYW5EZWFjdGl2YXRlR3VhcmRdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3RlbXBsYXRlJyxcclxuICAgICAgICBjb21wb25lbnQ6IFRlbXBsYXRlUHJvZmlsZUxpc3RDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdyZXF1ZXN0cycsXHJcbiAgICAgICAgY29tcG9uZW50OiBPbmJvYXJkaW5nTGlzdENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3JlcXVlc3RzLzp0ZW1wbGF0ZUlkLzpvbmJvYXJkaW5nSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudFxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuXHJcbiAgLy8geyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9wcm9maWwtbGlzdCcsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbl1cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE1hdGVyaWFsRWxldmF0aW9uRGlyZWN0aXZlLFxyXG4gICAgT25ib2FyZGluZ0NvbXBvbmVudCxcclxuICAgIFRlbXBsYXRlUHJvZmlsZUNyZWF0ZUNvbXBvbmVudCxcclxuICAgIE9uYm9hcmRpbmdDcmVhdGVDb21wb25lbnQsXHJcbiAgICBTdWJPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50LFxyXG4gICAgVGVtcGxhdGVQcm9maWxlTGlzdENvbXBvbmVudCxcclxuICAgIFN1YlRlbXBsYXRlUHJvZmlsZUNvbXBvbmVudCxcclxuICAgIEV4aXRDb25maXJtQ29tcG9uZW50LFxyXG4gICAgT25ib2FyZGluZ0xpc3RDb21wb25lbnQsXHJcbiAgICBUeXBlQ29tcG9uZW50LFxyXG4gICAgT25ib2FyZGluZ1RhYmxlQ29tcG9uZW50LFxyXG4gICAgRGlhbG9nQ3JlYXRlVGVtcGxhdGVDb21wb25lbnQsXHJcbiAgICBEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50LFxyXG4gICAgT25ib2FyZGluZ0RldGFpbENvbXBvbmVudCxcclxuICAgIExvYWRpbmdDb21wb25lbnQsXHJcbiAgICBMb2FkaW5nUGFnZUNvbXBvbmVudCxcclxuICAgIERpYWxvZ0NvbmZpcm1hdGlvbixcclxuICAgIEJvdHRvbVNoZWV0LFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRTZWxlY3RNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdENoaXBzTW9kdWxlLFxyXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXHJcbiAgICBNYXRSYWRpb01vZHVsZSxcclxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcclxuICAgIENka1RhYmxlTW9kdWxlLFxyXG4gICAgTWF0U29ydE1vZHVsZSxcclxuICAgIE1hdFRhYmxlTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKG9uQm9hcmRpbmdSb3V0ZXMpLFxyXG4gICAgU2Nyb2xsVG9Nb2R1bGUsXHJcbiAgICBEcmFnRHJvcE1vZHVsZSxcclxuICAgIE1hdENhcmRNb2R1bGUsXHJcbiAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICBNYXRTdGVwcGVyTW9kdWxlLFxyXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxyXG4gICAgVGFibGVNb2R1bGUsXHJcbiAgICBNYXRUYWJzTW9kdWxlLFxyXG4gICAgTmd4SW50bFRlbElucHV0TW9kdWxlLFxyXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcclxuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxyXG4gICAgU2Nyb2xsVG9Nb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW09uYm9hcmRpbmdTZXJ2aWNlLCBDYW5EZWFjdGl2YXRlR3VhcmQsIE1hdERhdGVwaWNrZXJNb2R1bGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0V4aXRDb25maXJtQ29tcG9uZW50LCBUeXBlQ29tcG9uZW50LCBEaWFsb2dDcmVhdGVUZW1wbGF0ZUNvbXBvbmVudCwgRGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudCwgRGlhbG9nQ29uZmlybWF0aW9uXSxcclxuICBleHBvcnRzOlxyXG4gICAgW1xyXG4gICAgICBPbmJvYXJkaW5nQ29tcG9uZW50LFxyXG4gICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICBUZW1wbGF0ZVByb2ZpbGVDcmVhdGVDb21wb25lbnQsXHJcbiAgICAgIFRlbXBsYXRlUHJvZmlsZUxpc3RDb21wb25lbnQsXHJcbiAgICAgIE9uYm9hcmRpbmdMaXN0Q29tcG9uZW50LFxyXG4gICAgICBPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50LFxyXG4gICAgICBEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50LFxyXG4gICAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICAgIE1hdFRhYnNNb2R1bGUsXHJcbiAgICAgIFNjcm9sbFRvTW9kdWxlXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ01vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogT25ib2FyZGluZ01vZHVsZSkge1xyXG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ09uYm9hcmRpbmdNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWc6IE9uYm9hcmRpbmdJbnRlcmZhY2UpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE9uYm9hcmRpbmdNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBPbmJvYXJkaW5nTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6ICdfX05neE9uYm9hcmRpbmdfXycsIHVzZVZhbHVlOiBjb25maWcgfSxcclxuICAgICAgICBPbmJvYXJkaW5nU2VydmljZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=