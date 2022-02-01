import { __decorate, __param } from "tslib";
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingService } from './onboarding.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
;
import { TemplateProfileCreateComponent } from './template-profile-create/template-profile-create.component';
import { TemplateProfileListComponent } from './template-profile-list/template-profile-list.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SubTemplateProfileComponent } from './components/sub-template-profile/sub-template-profile.component';
import { MaterialElevationDirective } from './directives/elevation';
import { UpdateProfilComponent } from './components/update-profil/update-profil.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { ExitConfirmComponent } from './components/exit-confirm/exit-confirm.component';
import { OnboardingCreateComponent } from './onboarding-create/onboarding-create.component';
import { SubOnboardingCreateComponent } from './components/sub-onboarding-create/sub-onboarding-create.component';
import { OnboardingListComponent } from './onboarding-list/onboarding-list.component';
import { TableModule } from 'table';
import { MatTabsModule } from '@angular/material/tabs';
export var onBoardingRoutes = [
    {
        path: 'onboarding',
        component: OnboardingComponent,
        children: [
            {
                path: 'template-builder/:id',
                component: TemplateProfileCreateComponent,
                canDeactivate: [CanDeactivateGuard],
            },
            {
                path: '',
                component: TemplateProfileListComponent
            },
            {
                path: 'onboarding',
                component: OnboardingListComponent
            },
            {
                path: 'onboarding/:id',
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
    OnboardingModule_1 = OnboardingModule;
    OnboardingModule.forRoot = function (config) {
        return {
            ngModule: OnboardingModule_1,
            providers: [
                { provide: '__NgxOnboarding__', useValue: config },
                OnboardingService
            ]
        };
    };
    var OnboardingModule_1;
    OnboardingModule.ctorParameters = function () { return [
        { type: OnboardingModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    OnboardingModule = OnboardingModule_1 = __decorate([
        NgModule({
            declarations: [
                MaterialElevationDirective,
                OnboardingComponent,
                TemplateProfileCreateComponent,
                OnboardingCreateComponent,
                SubOnboardingCreateComponent,
                TemplateProfileListComponent,
                SubTemplateProfileComponent,
                UpdateProfilComponent,
                ExitConfirmComponent,
                OnboardingListComponent
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
                MatTabsModule
            ],
            providers: [OnboardingService, CanDeactivateGuard],
            entryComponents: [UpdateProfilComponent, ExitConfirmComponent],
            exports: [
                OnboardingComponent,
                HttpClientModule,
                TemplateProfileCreateComponent,
                TemplateProfileListComponent,
                OnboardingListComponent,
                OnboardingCreateComponent,
                RouterModule,
                MatTabsModule
            ]
        }),
        __param(0, Optional()), __param(0, SkipSelf())
    ], OnboardingModule);
    return OnboardingModule;
}());
export { OnboardingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL29uYm9hcmRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQUEsQ0FBQztBQUNuRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUs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QWpCRCxJQWlCQztTQWpCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9vbmJvYXJkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlL09uYm9hcmRpbmdJbnRlcmZhY2UnO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuL29uYm9hcmRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnOztcbmltcG9ydCB7IFRlbXBsYXRlUHJvZmlsZUNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUvdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRlbXBsYXRlUHJvZmlsZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL3RlbXBsYXRlLXByb2ZpbGUtbGlzdC90ZW1wbGF0ZS1wcm9maWxlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdFN0ZXBwZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zdGVwcGVyJztcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdENoaXBzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRHcmlkTGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2dyaWQtbGlzdCc7XG5pbXBvcnQgeyBNYXRSYWRpb01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQgeyBDZGtUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBNYXRTb3J0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IE1hdFByb2dyZXNzQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHtNYXRUb29sdGlwTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IFN1YlRlbXBsYXRlUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdWItdGVtcGxhdGUtcHJvZmlsZS9zdWItdGVtcGxhdGUtcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0ZXJpYWxFbGV2YXRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZWxldmF0aW9uJztcbmltcG9ydCB7IFVwZGF0ZVByb2ZpbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91cGRhdGUtcHJvZmlsL3VwZGF0ZS1wcm9maWwuY29tcG9uZW50JztcbmltcG9ydCB7IFNjcm9sbFRvTW9kdWxlIH0gZnJvbSAnQG5pY2t5LWxlbmFlcnMvbmd4LXNjcm9sbC10byc7XG5pbXBvcnQgeyBDYW5EZWFjdGl2YXRlR3VhcmQgfSBmcm9tICcuL2Nhbi1kZWFjdGl2YXRlLWd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXhpdENvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXhpdC1jb25maXJtL2V4aXQtY29uZmlybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vb25ib2FyZGluZy1jcmVhdGUvb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN1Yk9uYm9hcmRpbmdDcmVhdGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3ViLW9uYm9hcmRpbmctY3JlYXRlL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT25ib2FyZGluZ0xpc3RDb21wb25lbnQgfSBmcm9tICcuL29uYm9hcmRpbmctbGlzdC9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7VGFibGVNb2R1bGV9IGZyb20gJ3RhYmxlJztcbmltcG9ydCB7TWF0VGFic01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFicyc7XG5cbmV4cG9ydCBjb25zdCBvbkJvYXJkaW5nUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnb25ib2FyZGluZycsXG4gICAgY29tcG9uZW50OiBPbmJvYXJkaW5nQ29tcG9uZW50LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICd0ZW1wbGF0ZS1idWlsZGVyLzppZCcsXG4gICAgICAgIGNvbXBvbmVudDogVGVtcGxhdGVQcm9maWxlQ3JlYXRlQ29tcG9uZW50LFxuICAgICAgICBjYW5EZWFjdGl2YXRlOiBbQ2FuRGVhY3RpdmF0ZUd1YXJkXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IFRlbXBsYXRlUHJvZmlsZUxpc3RDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdvbmJvYXJkaW5nJyxcbiAgICAgICAgY29tcG9uZW50OiBPbmJvYXJkaW5nTGlzdENvbXBvbmVudFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ29uYm9hcmRpbmcvOmlkJyxcbiAgICAgICAgY29tcG9uZW50OiBPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50XG4gICAgICB9XG4gICAgXVxuICB9LFxuXG4gIC8vIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvcHJvZmlsLWxpc3QnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuXVxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWF0ZXJpYWxFbGV2YXRpb25EaXJlY3RpdmUsXG4gICAgT25ib2FyZGluZ0NvbXBvbmVudCxcbiAgICBUZW1wbGF0ZVByb2ZpbGVDcmVhdGVDb21wb25lbnQsXG4gICAgT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudCxcbiAgICBTdWJPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50LFxuICAgIFRlbXBsYXRlUHJvZmlsZUxpc3RDb21wb25lbnQsXG4gICAgU3ViVGVtcGxhdGVQcm9maWxlQ29tcG9uZW50LFxuICAgIFVwZGF0ZVByb2ZpbENvbXBvbmVudCxcbiAgICBFeGl0Q29uZmlybUNvbXBvbmVudCxcbiAgICBPbmJvYXJkaW5nTGlzdENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdEdyaWRMaXN0TW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChvbkJvYXJkaW5nUm91dGVzKSxcbiAgICBTY3JvbGxUb01vZHVsZS5mb3JSb290KCksXG4gICAgRHJhZ0Ryb3BNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0U3RlcHBlck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIFRhYmxlTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbT25ib2FyZGluZ1NlcnZpY2UsIENhbkRlYWN0aXZhdGVHdWFyZF0sXG4gIGVudHJ5Q29tcG9uZW50czpbVXBkYXRlUHJvZmlsQ29tcG9uZW50LCBFeGl0Q29uZmlybUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6XG4gICAgW1xuICAgICAgT25ib2FyZGluZ0NvbXBvbmVudCxcbiAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICBUZW1wbGF0ZVByb2ZpbGVDcmVhdGVDb21wb25lbnQsXG4gICAgICBUZW1wbGF0ZVByb2ZpbGVMaXN0Q29tcG9uZW50LFxuICAgICAgT25ib2FyZGluZ0xpc3RDb21wb25lbnQsXG4gICAgICBPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50LFxuICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgTWF0VGFic01vZHVsZVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogT25ib2FyZGluZ01vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ09uYm9hcmRpbmdNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnOiBPbmJvYXJkaW5nSW50ZXJmYWNlKTogTW9kdWxlV2l0aFByb3ZpZGVyczxPbmJvYXJkaW5nTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBPbmJvYXJkaW5nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogJ19fTmd4T25ib2FyZGluZ19fJywgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgICBPbmJvYXJkaW5nU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==