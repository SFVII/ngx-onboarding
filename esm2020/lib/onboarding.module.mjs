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
import { NoDataComponent } from './components/template/no-data/no-data.component';
import { FilterModule } from 'ngx-filter';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@nicky-lenaers/ngx-scroll-to";
import * as i3 from "ngx-filter";
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
            ScrollToModule.forRoot(),
            FilterModule.forRoot(),
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
        ], HttpClientModule,
        RouterModule,
        MatTabsModule] });
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
                    NoDataComponent,
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
                    FilterModule.forRoot(),
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
        NoDataComponent], imports: [FormsModule,
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
        MatTableModule, i1.RouterModule, i2.ScrollToModule, i3.FilterModule, DragDropModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvb25ib2FyZGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFrQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUM3RyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDeEgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQzdILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxXQUFXLEVBQWdCLE1BQU0sV0FBVyxDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDakYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDOUgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDL0csT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDdEksT0FBTyxFQUFFLFdBQVcsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQy9ILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7OztBQWhEd0IsQ0FBQztBQWtEbkUsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQVc7SUFDdEM7UUFDRSxJQUFJLEVBQUUsWUFBWTtRQUNsQixTQUFTLEVBQUUsbUJBQW1CO1FBQzlCLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxjQUFjO2dCQUNwQixTQUFTLEVBQUUsOEJBQThCO2dCQUN6QyxhQUFhLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUNwQztZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsNEJBQTRCO2FBQ3hDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSx1QkFBdUI7YUFDbkM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsb0NBQW9DO2dCQUMxQyxTQUFTLEVBQUUseUJBQXlCO2FBQ3JDO1NBQ0Y7S0FDRjtJQUVELCtEQUErRDtDQUNoRSxDQUFBO0FBNEVELE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsWUFBb0MsWUFBK0I7UUFDakUsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FDYixxRUFBcUUsQ0FBQyxDQUFDO1NBQzFFO0lBQ0gsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBMkI7UUFDL0MsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQ2xELGlCQUFpQjthQUNsQjtTQUNGLENBQUM7SUFDSixDQUFDOztnRkFoQlUsZ0JBQWdCLGNBQ3dCLGdCQUFnQjtrRUFEeEQsZ0JBQWdCO3VFQWhCaEIsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQyxZQXJDOUQ7WUFDUCxXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixZQUFZO1lBQ1osYUFBYTtZQUNiLHVCQUF1QjtZQUN2QixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2IsZUFBZTtZQUNmLGNBQWM7WUFDZCxjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsY0FBYztZQUNkLGFBQWE7WUFDYixjQUFjO1lBQ2QsWUFBWSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUN2QyxjQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3hCLFlBQVksQ0FBQyxPQUFPLEVBQUU7WUFDdEIsY0FBYztZQUNkLGFBQWE7WUFDYixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtZQUNwQixnQkFBZ0I7WUFDaEIsV0FBVztZQUNYLGFBQWE7WUFDYixxQkFBcUI7WUFDckIsb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsb0JBQW9CO1NBQ3JCLEVBTUcsZ0JBQWdCO1FBTWhCLFlBQVk7UUFDWixhQUFhO3VGQUlOLGdCQUFnQjtjQTNFNUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWiwwQkFBMEI7b0JBQzFCLG1CQUFtQjtvQkFDbkIsOEJBQThCO29CQUM5Qix5QkFBeUI7b0JBQ3pCLDRCQUE0QjtvQkFDNUIsNEJBQTRCO29CQUM1QiwyQkFBMkI7b0JBQzNCLG9CQUFvQjtvQkFDcEIsdUJBQXVCO29CQUN2QixhQUFhO29CQUNiLHdCQUF3QjtvQkFDeEIsNkJBQTZCO29CQUM3QiwrQkFBK0I7b0JBQy9CLHlCQUF5QjtvQkFDekIsZ0JBQWdCO29CQUNoQixvQkFBb0I7b0JBQ3BCLGtCQUFrQjtvQkFDbEIsV0FBVztvQkFDWCxlQUFlO2lCQUNoQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBQ2YsWUFBWTtvQkFDWixhQUFhO29CQUNiLHVCQUF1QjtvQkFDdkIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxZQUFZLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO29CQUN2QyxjQUFjLENBQUMsT0FBTyxFQUFFO29CQUN4QixZQUFZLENBQUMsT0FBTyxFQUFFO29CQUN0QixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsZ0JBQWdCO29CQUNoQixXQUFXO29CQUNYLGFBQWE7b0JBQ2IscUJBQXFCO29CQUNyQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQixvQkFBb0I7aUJBQ3JCO2dCQUNELFNBQVMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDO2dCQUN2RSxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsa0JBQWtCLENBQUM7Z0JBQzFJLE9BQU8sRUFDTDtvQkFDRSxtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIsOEJBQThCO29CQUM5Qiw0QkFBNEI7b0JBQzVCLHVCQUF1QjtvQkFDdkIseUJBQXlCO29CQUN6QiwrQkFBK0I7b0JBQy9CLFlBQVk7b0JBQ1osYUFBYTtpQkFDZDthQUNKO3NDQUdvRCxnQkFBZ0I7c0JBQXRELFFBQVE7O3NCQUFJLFFBQVE7O3dGQUR0QixnQkFBZ0IsbUJBekV6QiwwQkFBMEI7UUFDMUIsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5Qix5QkFBeUI7UUFDekIsNEJBQTRCO1FBQzVCLDRCQUE0QjtRQUM1QiwyQkFBMkI7UUFDM0Isb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2Isd0JBQXdCO1FBQ3hCLDZCQUE2QjtRQUM3QiwrQkFBK0I7UUFDL0IseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxlQUFlLGFBR2YsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsWUFBWTtRQUNaLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGVBQWU7UUFDZixjQUFjO1FBQ2QsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxhQUFhO1FBQ2IsY0FBYyx1REFJZCxjQUFjO1FBQ2QsYUFBYTtRQUNiLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsYUFBYTtRQUNiLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixvQkFBb0IsYUFNbEIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQiw4QkFBOEI7UUFDOUIsNEJBQTRCO1FBQzVCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsK0JBQStCO1FBQy9CLFlBQVk7UUFDWixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTE9DQUxFX0lELCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdDb21wb25lbnQgfSBmcm9tICcuL29uYm9hcmRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT25ib2FyZGluZ0ludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZS9PbmJvYXJkaW5nSW50ZXJmYWNlJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuL29uYm9hcmRpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJzs7XHJcbmltcG9ydCB7IFRlbXBsYXRlUHJvZmlsZUNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUvdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGVtcGxhdGVQcm9maWxlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvdGVtcGxhdGUtcHJvZmlsZS1saXN0L3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQgeyBNYXRTdGVwcGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc3RlcHBlcic7XHJcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XHJcbmltcG9ydCB7IE1hdENoaXBzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBNYXROYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IE1hdEdyaWRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZ3JpZC1saXN0JztcclxuaW1wb3J0IHsgTWF0UmFkaW9Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XHJcbmltcG9ydCB7IE1hdFBhZ2luYXRvck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XHJcbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcclxuaW1wb3J0IHsgTWF0U29ydE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xyXG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcclxuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYm90dG9tLXNoZWV0JztcclxuXHJcbmltcG9ydCB7IERyYWdEcm9wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgU3ViVGVtcGxhdGVQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsRWxldmF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2VsZXZhdGlvbic7XHJcbmltcG9ydCB7IFNjcm9sbFRvTW9kdWxlIH0gZnJvbSAnQG5pY2t5LWxlbmFlcnMvbmd4LXNjcm9sbC10byc7XHJcbmltcG9ydCB7IENhbkRlYWN0aXZhdGVHdWFyZCB9IGZyb20gJy4vY2FuLWRlYWN0aXZhdGUtZ3VhcmQuc2VydmljZSc7XHJcbmltcG9ydCB7IEV4aXRDb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V4aXQtY29uZmlybS9leGl0LWNvbmZpcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvb25ib2FyZGluZy1jcmVhdGUvb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3ViT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vbmJvYXJkaW5nL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT25ib2FyZGluZ0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL29uYm9hcmRpbmctbGlzdC9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFibGVNb2R1bGUsIFRhYmxlU2VydmljZSB9IGZyb20gJ25neC10YWJsZSc7XHJcbmltcG9ydCB7IE1hdFRhYnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcclxuaW1wb3J0IHsgTmd4SW50bFRlbElucHV0TW9kdWxlIH0gZnJvbSAnbmd4LWludGwtdGVsLWlucHV0JztcclxuaW1wb3J0IHsgTWF0U2xpZGVUb2dnbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xyXG5pbXBvcnQgeyBUeXBlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlL3R5cGUtZGlhbG9nL3R5cGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlhbG9nQ3JlYXRlVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVtcGxhdGUvZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmctdGFibGUvb25ib2FyZGluZy10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29uYm9hcmRpbmcvZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCb3R0b21TaGVldCwgT25ib2FyZGluZ0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmctZGV0YWlsL29uYm9hcmRpbmctZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb25ib2FyZGluZy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlhbG9nQ29uZmlybWF0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZy1jb25maXJtYXRpb24vZGlhbG9nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkaW5nUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTm9EYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlL25vLWRhdGEvbm8tZGF0YS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWx0ZXJNb2R1bGUgfSBmcm9tICduZ3gtZmlsdGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBvbkJvYXJkaW5nUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJ29uYm9hcmRpbmcnLFxyXG4gICAgY29tcG9uZW50OiBPbmJvYXJkaW5nQ29tcG9uZW50LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd0ZW1wbGF0ZS86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogVGVtcGxhdGVQcm9maWxlQ3JlYXRlQ29tcG9uZW50LFxyXG4gICAgICAgIGNhbkRlYWN0aXZhdGU6IFtDYW5EZWFjdGl2YXRlR3VhcmRdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3RlbXBsYXRlJyxcclxuICAgICAgICBjb21wb25lbnQ6IFRlbXBsYXRlUHJvZmlsZUxpc3RDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdyZXF1ZXN0cycsXHJcbiAgICAgICAgY29tcG9uZW50OiBPbmJvYXJkaW5nTGlzdENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3JlcXVlc3RzLzp0ZW1wbGF0ZUlkLzpvbmJvYXJkaW5nSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudFxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuXHJcbiAgLy8geyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9wcm9maWwtbGlzdCcsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbl1cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE1hdGVyaWFsRWxldmF0aW9uRGlyZWN0aXZlLFxyXG4gICAgT25ib2FyZGluZ0NvbXBvbmVudCxcclxuICAgIFRlbXBsYXRlUHJvZmlsZUNyZWF0ZUNvbXBvbmVudCxcclxuICAgIE9uYm9hcmRpbmdDcmVhdGVDb21wb25lbnQsXHJcbiAgICBTdWJPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50LFxyXG4gICAgVGVtcGxhdGVQcm9maWxlTGlzdENvbXBvbmVudCxcclxuICAgIFN1YlRlbXBsYXRlUHJvZmlsZUNvbXBvbmVudCxcclxuICAgIEV4aXRDb25maXJtQ29tcG9uZW50LFxyXG4gICAgT25ib2FyZGluZ0xpc3RDb21wb25lbnQsXHJcbiAgICBUeXBlQ29tcG9uZW50LFxyXG4gICAgT25ib2FyZGluZ1RhYmxlQ29tcG9uZW50LFxyXG4gICAgRGlhbG9nQ3JlYXRlVGVtcGxhdGVDb21wb25lbnQsXHJcbiAgICBEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50LFxyXG4gICAgT25ib2FyZGluZ0RldGFpbENvbXBvbmVudCxcclxuICAgIExvYWRpbmdDb21wb25lbnQsXHJcbiAgICBMb2FkaW5nUGFnZUNvbXBvbmVudCxcclxuICAgIERpYWxvZ0NvbmZpcm1hdGlvbixcclxuICAgIEJvdHRvbVNoZWV0LFxyXG4gICAgTm9EYXRhQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRTZWxlY3RNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdENoaXBzTW9kdWxlLFxyXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXHJcbiAgICBNYXRSYWRpb01vZHVsZSxcclxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcclxuICAgIENka1RhYmxlTW9kdWxlLFxyXG4gICAgTWF0U29ydE1vZHVsZSxcclxuICAgIE1hdFRhYmxlTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKG9uQm9hcmRpbmdSb3V0ZXMpLFxyXG4gICAgU2Nyb2xsVG9Nb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRmlsdGVyTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIERyYWdEcm9wTW9kdWxlLFxyXG4gICAgTWF0Q2FyZE1vZHVsZSxcclxuICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXHJcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICBUYWJsZU1vZHVsZSxcclxuICAgIE1hdFRhYnNNb2R1bGUsXHJcbiAgICBOZ3hJbnRsVGVsSW5wdXRNb2R1bGUsXHJcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxyXG4gICAgTWF0Qm90dG9tU2hlZXRNb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW09uYm9hcmRpbmdTZXJ2aWNlLCBDYW5EZWFjdGl2YXRlR3VhcmQsIE1hdERhdGVwaWNrZXJNb2R1bGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0V4aXRDb25maXJtQ29tcG9uZW50LCBUeXBlQ29tcG9uZW50LCBEaWFsb2dDcmVhdGVUZW1wbGF0ZUNvbXBvbmVudCwgRGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudCwgRGlhbG9nQ29uZmlybWF0aW9uXSxcclxuICBleHBvcnRzOlxyXG4gICAgW1xyXG4gICAgICBPbmJvYXJkaW5nQ29tcG9uZW50LFxyXG4gICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICBUZW1wbGF0ZVByb2ZpbGVDcmVhdGVDb21wb25lbnQsXHJcbiAgICAgIFRlbXBsYXRlUHJvZmlsZUxpc3RDb21wb25lbnQsXHJcbiAgICAgIE9uYm9hcmRpbmdMaXN0Q29tcG9uZW50LFxyXG4gICAgICBPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50LFxyXG4gICAgICBEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50LFxyXG4gICAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICAgIE1hdFRhYnNNb2R1bGVcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU/OiBPbmJvYXJkaW5nTW9kdWxlKSB7XHJcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnT25ib2FyZGluZ01vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZzogT25ib2FyZGluZ0ludGVyZmFjZSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8T25ib2FyZGluZ01vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE9uYm9hcmRpbmdNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogJ19fTmd4T25ib2FyZGluZ19fJywgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG4gICAgICAgIE9uYm9hcmRpbmdTZXJ2aWNlXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==