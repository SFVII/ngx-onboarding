var OnboardingModule_1;
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
export const onBoardingRoutes = [
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
let OnboardingModule = OnboardingModule_1 = class OnboardingModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('OnboardingModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: OnboardingModule_1,
            providers: [
                { provide: '__NgxOnboarding__', useValue: config },
                OnboardingService
            ]
        };
    }
};
OnboardingModule.ctorParameters = () => [
    { type: OnboardingModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
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
            MatTooltipModule
        ],
        providers: [OnboardingService, CanDeactivateGuard],
        entryComponents: [UpdateProfilComponent, ExitConfirmComponent],
        exports: [
            OnboardingComponent,
            HttpClientModule,
            TemplateProfileCreateComponent,
            TemplateProfileListComponent,
            OnboardingListComponent,
            RouterModule,
        ]
    }),
    __param(0, Optional()), __param(0, SkipSelf())
], OnboardingModule);
export { OnboardingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL29uYm9hcmRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUFBLENBQUM7QUFDbkUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDN0csT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFF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bUI7WUFDbkIsOEJBQThCO1lBQzlCLHlCQUF5QjtZQUN6Qiw0QkFBNEI7WUFDNUIsNEJBQTRCO1lBQzVCLDJCQUEyQjtZQUMzQixxQkFBcUI7WUFDckIsb0JBQW9CO1lBQ3BCLHVCQUF1QjtTQUN4QjtRQUNELE9BQU8sRUFBRTtZQUNQLFdBQVc7WUFDWCxrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLFlBQVk7WUFDWixhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYixlQUFlO1lBQ2YsY0FBYztZQUNkLGNBQWM7WUFDZCxpQkFBaUI7WUFDakIsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsYUFBYTtZQUNiLGNBQWM7WUFDZCxZQUFZLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1lBQ3ZDLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsY0FBYztZQUNkLGFBQWE7WUFDYixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtZQUNwQixnQkFBZ0I7U0FDakI7UUFDRCxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztRQUNsRCxlQUFlLEVBQUMsQ0FBQyxxQkFBcUIsRUFBRSxvQkFBb0IsQ0FBQztRQUM3RCxPQUFPLEVBQ0w7WUFDRSxtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLDhCQUE4QjtZQUM5Qiw0QkFBNEI7WUFDNUIsdUJBQXVCO1lBQ3ZCLFlBQVk7U0FDYjtLQUNKLENBQUM7SUFHYSxXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxRQUFRLEVBQUUsQ0FBQTtHQUR4QixnQkFBZ0IsQ0FpQjVCO1NBakJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uYm9hcmRpbmdDb21wb25lbnQgfSBmcm9tICcuL29uYm9hcmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IE9uYm9hcmRpbmdJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UvT25ib2FyZGluZ0ludGVyZmFjZSc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4vb25ib2FyZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7O1xuaW1wb3J0IHsgVGVtcGxhdGVQcm9maWxlQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGVtcGxhdGVQcm9maWxlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdGVtcGxhdGUtcHJvZmlsZS1saXN0L3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0U3RlcHBlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3N0ZXBwZXInO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0Q2hpcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdEdyaWRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZ3JpZC1saXN0JztcbmltcG9ydCB7IE1hdFJhZGlvTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IE1hdFNvcnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IERyYWdEcm9wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgU3ViVGVtcGxhdGVQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRlcmlhbEVsZXZhdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9lbGV2YXRpb24nO1xuaW1wb3J0IHsgVXBkYXRlUHJvZmlsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VwZGF0ZS1wcm9maWwvdXBkYXRlLXByb2ZpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2Nyb2xsVG9Nb2R1bGUgfSBmcm9tICdAbmlja3ktbGVuYWVycy9uZ3gtc2Nyb2xsLXRvJztcbmltcG9ydCB7IENhbkRlYWN0aXZhdGVHdWFyZCB9IGZyb20gJy4vY2FuLWRlYWN0aXZhdGUtZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBFeGl0Q29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9leGl0LWNvbmZpcm0vZXhpdC1jb25maXJtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9vbmJvYXJkaW5nLWNyZWF0ZS9vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3ViT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdWItb25ib2FyZGluZy1jcmVhdGUvc3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nTGlzdENvbXBvbmVudCB9IGZyb20gJy4vb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQnO1xuXG5cbmV4cG9ydCBjb25zdCBvbkJvYXJkaW5nUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnb25ib2FyZGluZycsXG4gICAgY29tcG9uZW50OiBPbmJvYXJkaW5nQ29tcG9uZW50LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICd0ZW1wbGF0ZS1idWlsZGVyLzppZCcsXG4gICAgICAgIGNvbXBvbmVudDogVGVtcGxhdGVQcm9maWxlQ3JlYXRlQ29tcG9uZW50LFxuICAgICAgICBjYW5EZWFjdGl2YXRlOiBbQ2FuRGVhY3RpdmF0ZUd1YXJkXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IFRlbXBsYXRlUHJvZmlsZUxpc3RDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdvbmJvYXJkaW5nJyxcbiAgICAgICAgY29tcG9uZW50OiBPbmJvYXJkaW5nTGlzdENvbXBvbmVudFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ29uYm9hcmRpbmcvOmlkJyxcbiAgICAgICAgY29tcG9uZW50OiBPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50XG4gICAgICB9XG4gICAgXVxuICB9LFxuXG4gIC8vIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvcHJvZmlsLWxpc3QnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuXVxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWF0ZXJpYWxFbGV2YXRpb25EaXJlY3RpdmUsXG4gICAgT25ib2FyZGluZ0NvbXBvbmVudCxcbiAgICBUZW1wbGF0ZVByb2ZpbGVDcmVhdGVDb21wb25lbnQsXG4gICAgT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudCxcbiAgICBTdWJPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50LFxuICAgIFRlbXBsYXRlUHJvZmlsZUxpc3RDb21wb25lbnQsXG4gICAgU3ViVGVtcGxhdGVQcm9maWxlQ29tcG9uZW50LFxuICAgIFVwZGF0ZVByb2ZpbENvbXBvbmVudCxcbiAgICBFeGl0Q29uZmlybUNvbXBvbmVudCxcbiAgICBPbmJvYXJkaW5nTGlzdENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdEdyaWRMaXN0TW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChvbkJvYXJkaW5nUm91dGVzKSxcbiAgICBTY3JvbGxUb01vZHVsZS5mb3JSb290KCksXG4gICAgRHJhZ0Ryb3BNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0U3RlcHBlck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW09uYm9hcmRpbmdTZXJ2aWNlLCBDYW5EZWFjdGl2YXRlR3VhcmRdLFxuICBlbnRyeUNvbXBvbmVudHM6W1VwZGF0ZVByb2ZpbENvbXBvbmVudCwgRXhpdENvbmZpcm1Db21wb25lbnRdLFxuICBleHBvcnRzOlxuICAgIFtcbiAgICAgIE9uYm9hcmRpbmdDb21wb25lbnQsXG4gICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgVGVtcGxhdGVQcm9maWxlQ3JlYXRlQ29tcG9uZW50LFxuICAgICAgVGVtcGxhdGVQcm9maWxlTGlzdENvbXBvbmVudCxcbiAgICAgIE9uYm9hcmRpbmdMaXN0Q29tcG9uZW50LFxuICAgICAgUm91dGVyTW9kdWxlLFxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogT25ib2FyZGluZ01vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ09uYm9hcmRpbmdNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnOiBPbmJvYXJkaW5nSW50ZXJmYWNlKTogTW9kdWxlV2l0aFByb3ZpZGVyczxPbmJvYXJkaW5nTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBPbmJvYXJkaW5nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogJ19fTmd4T25ib2FyZGluZ19fJywgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgICBPbmJvYXJkaW5nU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==