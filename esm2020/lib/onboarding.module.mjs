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
import { TableModule } from '@nowbrains/ngx-table';
import { DatePipe } from '@angular/common';
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
import { NgxFilterModule } from 'ngx-filter';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { NowboardLoaderComponent } from './common/nowboard-loader/nowboard-loader.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@nicky-lenaers/ngx-scroll-to";
import * as i3 from "ngx-filter";
import * as i4 from "ngx-lottie";
export function playerFactory() {
    return player;
}
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
                component: OnboardingCreateComponent,
                canDeactivate: [CanDeactivateGuard],
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
OnboardingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingModule, deps: [{ token: OnboardingModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
OnboardingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.6", ngImport: i0, type: OnboardingModule, declarations: [MaterialElevationDirective,
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
        NowboardLoaderComponent], imports: [FormsModule,
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
        MatTableModule, i1.RouterModule, i2.ScrollToModule, i3.NgxFilterModule, DragDropModule,
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
        MatProgressBarModule, i4.LottieModule], exports: [OnboardingComponent,
        HttpClientModule,
        TemplateProfileCreateComponent,
        TemplateProfileListComponent,
        OnboardingListComponent,
        OnboardingCreateComponent,
        DialogCreateOnboardingComponent,
        RouterModule,
        MatTabsModule] });
OnboardingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingModule, providers: [OnboardingService, CanDeactivateGuard, MatDatepickerModule, DatePipe,], imports: [FormsModule,
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
        NgxFilterModule.forRoot(),
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
        MatProgressBarModule,
        LottieModule.forRoot({ player: playerFactory }), HttpClientModule,
        RouterModule,
        MatTabsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingModule, decorators: [{
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
                        NowboardLoaderComponent,
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
                        NgxFilterModule.forRoot(),
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
                        MatProgressBarModule,
                        LottieModule.forRoot({ player: playerFactory })
                    ],
                    providers: [OnboardingService, CanDeactivateGuard, MatDatepickerModule, DatePipe,],
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
        }], ctorParameters: function () { return [{ type: OnboardingModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvb25ib2FyZGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFrQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUM3RyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxP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QixpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsWUFBWSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDdkMsY0FBYyxDQUFDLE9BQU8sRUFBRTt3QkFDeEIsZUFBZSxDQUFDLE9BQU8sRUFBRTt3QkFDekIsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxhQUFhO3dCQUNiLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLENBQUM7cUJBQ2hEO29CQUNELFNBQVMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRTtvQkFDbEYsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQiw4QkFBOEI7d0JBQzlCLDRCQUE0Qjt3QkFDNUIsdUJBQXVCO3dCQUN2Qix5QkFBeUI7d0JBQ3pCLCtCQUErQjt3QkFDL0IsWUFBWTt3QkFDWixhQUFhO3FCQUNkO2lCQUNGOzswQkFHYyxRQUFROzswQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTE9DQUxFX0lELCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdDb21wb25lbnQgfSBmcm9tICcuL29uYm9hcmRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT25ib2FyZGluZ0ludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZS9PbmJvYXJkaW5nSW50ZXJmYWNlJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuL29uYm9hcmRpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgVGVtcGxhdGVQcm9maWxlQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVByb2ZpbGVMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWxpc3QvdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE1hdFN0ZXBwZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zdGVwcGVyJztcclxuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcclxuaW1wb3J0IHsgTWF0Q2hpcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IE1hdE5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0R3JpZExpc3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ncmlkLWxpc3QnO1xyXG5pbXBvcnQgeyBNYXRSYWRpb01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcclxuaW1wb3J0IHsgQ2RrVGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xyXG5pbXBvcnQgeyBNYXRTb3J0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XHJcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBNYXRQcm9ncmVzc0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XHJcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXQnO1xyXG5cclxuaW1wb3J0IHsgRHJhZ0Ryb3BNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBTdWJUZW1wbGF0ZVByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVtcGxhdGUvc3ViLXRlbXBsYXRlLXByb2ZpbGUvc3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0ZXJpYWxFbGV2YXRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZWxldmF0aW9uJztcclxuaW1wb3J0IHsgU2Nyb2xsVG9Nb2R1bGUgfSBmcm9tICdAbmlja3ktbGVuYWVycy9uZ3gtc2Nyb2xsLXRvJztcclxuaW1wb3J0IHsgQ2FuRGVhY3RpdmF0ZUd1YXJkIH0gZnJvbSAnLi9jYW4tZGVhY3RpdmF0ZS1ndWFyZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXhpdENvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXhpdC1jb25maXJtL2V4aXQtY29uZmlybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9vbmJvYXJkaW5nLWNyZWF0ZS9vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWJPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29uYm9hcmRpbmcvc3ViLW9uYm9hcmRpbmctY3JlYXRlL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJsZU1vZHVsZSwgVGFibGVTZXJ2aWNlIH0gZnJvbSAnQG5vd2JyYWlucy9uZ3gtdGFibGUnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1hdFRhYnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcclxuaW1wb3J0IHsgTmd4SW50bFRlbElucHV0TW9kdWxlIH0gZnJvbSAnbmd4LWludGwtdGVsLWlucHV0JztcclxuaW1wb3J0IHsgTWF0U2xpZGVUb2dnbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xyXG5pbXBvcnQgeyBUeXBlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlL3R5cGUtZGlhbG9nL3R5cGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlhbG9nQ3JlYXRlVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVtcGxhdGUvZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmctdGFibGUvb25ib2FyZGluZy10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29uYm9hcmRpbmcvZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCb3R0b21TaGVldCwgT25ib2FyZGluZ0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmctZGV0YWlsL29uYm9hcmRpbmctZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb25ib2FyZGluZy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlhbG9nQ29uZmlybWF0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZy1jb25maXJtYXRpb24vZGlhbG9nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkaW5nUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTm9EYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlL25vLWRhdGEvbm8tZGF0YS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hGaWx0ZXJNb2R1bGUgfSBmcm9tICduZ3gtZmlsdGVyJztcclxuaW1wb3J0IHsgTG90dGllTW9kdWxlIH0gZnJvbSAnbmd4LWxvdHRpZSc7XHJcbmltcG9ydCBwbGF5ZXIgZnJvbSAnbG90dGllLXdlYic7XHJcbmltcG9ydCB7IE5vd2JvYXJkTG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tb24vbm93Ym9hcmQtbG9hZGVyL25vd2JvYXJkLWxvYWRlci5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllckZhY3RvcnkoKSB7XHJcbiAgcmV0dXJuIHBsYXllcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG9uQm9hcmRpbmdSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnb25ib2FyZGluZycsXHJcbiAgICBjb21wb25lbnQ6IE9uYm9hcmRpbmdDb21wb25lbnQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3RlbXBsYXRlLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBUZW1wbGF0ZVByb2ZpbGVDcmVhdGVDb21wb25lbnQsXHJcbiAgICAgICAgY2FuRGVhY3RpdmF0ZTogW0NhbkRlYWN0aXZhdGVHdWFyZF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAndGVtcGxhdGUnLFxyXG4gICAgICAgIGNvbXBvbmVudDogVGVtcGxhdGVQcm9maWxlTGlzdENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3JlcXVlc3RzJyxcclxuICAgICAgICBjb21wb25lbnQ6IE9uYm9hcmRpbmdMaXN0Q29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAncmVxdWVzdHMvOnRlbXBsYXRlSWQvOm9uYm9hcmRpbmdJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50LFxyXG4gICAgICAgIGNhbkRlYWN0aXZhdGU6IFtDYW5EZWFjdGl2YXRlR3VhcmRdLFxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuXHJcbiAgLy8geyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9wcm9maWwtbGlzdCcsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbl1cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE1hdGVyaWFsRWxldmF0aW9uRGlyZWN0aXZlLFxyXG4gICAgT25ib2FyZGluZ0NvbXBvbmVudCxcclxuICAgIFRlbXBsYXRlUHJvZmlsZUNyZWF0ZUNvbXBvbmVudCxcclxuICAgIE9uYm9hcmRpbmdDcmVhdGVDb21wb25lbnQsXHJcbiAgICBTdWJPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50LFxyXG4gICAgVGVtcGxhdGVQcm9maWxlTGlzdENvbXBvbmVudCxcclxuICAgIFN1YlRlbXBsYXRlUHJvZmlsZUNvbXBvbmVudCxcclxuICAgIEV4aXRDb25maXJtQ29tcG9uZW50LFxyXG4gICAgT25ib2FyZGluZ0xpc3RDb21wb25lbnQsXHJcbiAgICBUeXBlQ29tcG9uZW50LFxyXG4gICAgT25ib2FyZGluZ1RhYmxlQ29tcG9uZW50LFxyXG4gICAgRGlhbG9nQ3JlYXRlVGVtcGxhdGVDb21wb25lbnQsXHJcbiAgICBEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50LFxyXG4gICAgT25ib2FyZGluZ0RldGFpbENvbXBvbmVudCxcclxuICAgIExvYWRpbmdDb21wb25lbnQsXHJcbiAgICBMb2FkaW5nUGFnZUNvbXBvbmVudCxcclxuICAgIERpYWxvZ0NvbmZpcm1hdGlvbixcclxuICAgIEJvdHRvbVNoZWV0LFxyXG4gICAgTm9EYXRhQ29tcG9uZW50LFxyXG4gICAgTm93Ym9hcmRMb2FkZXJDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE1hdFNlbGVjdE1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgTWF0Q2hpcHNNb2R1bGUsXHJcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcclxuICAgIE1hdFJhZGlvTW9kdWxlLFxyXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxyXG4gICAgQ2RrVGFibGVNb2R1bGUsXHJcbiAgICBNYXRTb3J0TW9kdWxlLFxyXG4gICAgTWF0VGFibGVNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQob25Cb2FyZGluZ1JvdXRlcyksXHJcbiAgICBTY3JvbGxUb01vZHVsZS5mb3JSb290KCksXHJcbiAgICBOZ3hGaWx0ZXJNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRHJhZ0Ryb3BNb2R1bGUsXHJcbiAgICBNYXRDYXJkTW9kdWxlLFxyXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gICAgTWF0U3RlcHBlck1vZHVsZSxcclxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgIFRhYmxlTW9kdWxlLFxyXG4gICAgTWF0VGFic01vZHVsZSxcclxuICAgIE5neEludGxUZWxJbnB1dE1vZHVsZSxcclxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbiAgICBNYXRCb3R0b21TaGVldE1vZHVsZSxcclxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG4gICAgTG90dGllTW9kdWxlLmZvclJvb3QoeyBwbGF5ZXI6IHBsYXllckZhY3RvcnkgfSlcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW09uYm9hcmRpbmdTZXJ2aWNlLCBDYW5EZWFjdGl2YXRlR3VhcmQsIE1hdERhdGVwaWNrZXJNb2R1bGUsIERhdGVQaXBlLF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgT25ib2FyZGluZ0NvbXBvbmVudCxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBUZW1wbGF0ZVByb2ZpbGVDcmVhdGVDb21wb25lbnQsXHJcbiAgICBUZW1wbGF0ZVByb2ZpbGVMaXN0Q29tcG9uZW50LFxyXG4gICAgT25ib2FyZGluZ0xpc3RDb21wb25lbnQsXHJcbiAgICBPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50LFxyXG4gICAgRGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudCxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIE1hdFRhYnNNb2R1bGVcclxuICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ01vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogT25ib2FyZGluZ01vZHVsZSkge1xyXG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ09uYm9hcmRpbmdNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWc6IE9uYm9hcmRpbmdJbnRlcmZhY2UpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE9uYm9hcmRpbmdNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBPbmJvYXJkaW5nTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6ICdfX05neE9uYm9hcmRpbmdfXycsIHVzZVZhbHVlOiBjb25maWcgfSxcclxuICAgICAgICBPbmJvYXJkaW5nU2VydmljZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=