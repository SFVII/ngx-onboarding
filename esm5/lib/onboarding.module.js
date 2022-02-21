import { NgModule, Optional, SkipSelf } from '@angular/core';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingService } from './onboarding.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
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
                path: 'request/:id',
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
    OnboardingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function OnboardingModule_Factory(t) { return new (t || OnboardingModule)(i0.ɵɵinject(OnboardingModule, 12)); }, providers: [OnboardingService, CanDeactivateGuard], imports: [[
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
                NgxIntlTelInputModule
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
        UpdateProfilComponent,
        ExitConfirmComponent,
        OnboardingListComponent], imports: [FormsModule,
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
        NgxIntlTelInputModule], exports: [OnboardingComponent,
        HttpClientModule,
        TemplateProfileCreateComponent,
        TemplateProfileListComponent,
        OnboardingListComponent,
        OnboardingCreateComponent,
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
                    MatTabsModule,
                    NgxIntlTelInputModule
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
            }]
    }], function () { return [{ type: OnboardingModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL29uYm9hcmRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDN0csT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxN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LG9CQUFvQixDQUFDO2dCQUM3RCxPQUFPLEVBQ0w7b0JBQ0UsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLDhCQUE4QjtvQkFDOUIsNEJBQTRCO29CQUM1Qix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsWUFBWTtvQkFDWixhQUFhO2lCQUNkO2FBQ0o7c0NBR29ELGdCQUFnQjtzQkFBdEQsUUFBUTs7c0JBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uYm9hcmRpbmdDb21wb25lbnQgfSBmcm9tICcuL29uYm9hcmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IE9uYm9hcmRpbmdJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UvT25ib2FyZGluZ0ludGVyZmFjZSc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4vb25ib2FyZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7O1xuaW1wb3J0IHsgVGVtcGxhdGVQcm9maWxlQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGVtcGxhdGVQcm9maWxlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdGVtcGxhdGUtcHJvZmlsZS1saXN0L3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0U3RlcHBlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3N0ZXBwZXInO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0Q2hpcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdEdyaWRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZ3JpZC1saXN0JztcbmltcG9ydCB7IE1hdFJhZGlvTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IE1hdFNvcnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IERyYWdEcm9wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgU3ViVGVtcGxhdGVQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRlcmlhbEVsZXZhdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9lbGV2YXRpb24nO1xuaW1wb3J0IHsgVXBkYXRlUHJvZmlsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VwZGF0ZS1wcm9maWwvdXBkYXRlLXByb2ZpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2Nyb2xsVG9Nb2R1bGUgfSBmcm9tICdAbmlja3ktbGVuYWVycy9uZ3gtc2Nyb2xsLXRvJztcbmltcG9ydCB7IENhbkRlYWN0aXZhdGVHdWFyZCB9IGZyb20gJy4vY2FuLWRlYWN0aXZhdGUtZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBFeGl0Q29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9leGl0LWNvbmZpcm0vZXhpdC1jb25maXJtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9vbmJvYXJkaW5nLWNyZWF0ZS9vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3ViT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdWItb25ib2FyZGluZy1jcmVhdGUvc3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nTGlzdENvbXBvbmVudCB9IGZyb20gJy4vb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVNb2R1bGUsIFRhYmxlU2VydmljZSB9IGZyb20gJ3RhYmxlJztcbmltcG9ydCB7TWF0VGFic01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFicyc7XG5pbXBvcnQgeyBOZ3hJbnRsVGVsSW5wdXRNb2R1bGUgfSBmcm9tICduZ3gtaW50bC10ZWwtaW5wdXQnO1xuXG5leHBvcnQgY29uc3Qgb25Cb2FyZGluZ1JvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ29uYm9hcmRpbmcnLFxuICAgIGNvbXBvbmVudDogT25ib2FyZGluZ0NvbXBvbmVudCxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAndGVtcGxhdGUvOmlkJyxcbiAgICAgICAgY29tcG9uZW50OiBUZW1wbGF0ZVByb2ZpbGVDcmVhdGVDb21wb25lbnQsXG4gICAgICAgIGNhbkRlYWN0aXZhdGU6IFtDYW5EZWFjdGl2YXRlR3VhcmRdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3RlbXBsYXRlJyxcbiAgICAgICAgY29tcG9uZW50OiBUZW1wbGF0ZVByb2ZpbGVMaXN0Q29tcG9uZW50XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAncmVxdWVzdHMnLFxuICAgICAgICBjb21wb25lbnQ6IE9uYm9hcmRpbmdMaXN0Q29tcG9uZW50XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAncmVxdWVzdC86aWQnLFxuICAgICAgICBjb21wb25lbnQ6IE9uYm9hcmRpbmdDcmVhdGVDb21wb25lbnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG5cbiAgLy8geyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9wcm9maWwtbGlzdCcsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG5dXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNYXRlcmlhbEVsZXZhdGlvbkRpcmVjdGl2ZSxcbiAgICBPbmJvYXJkaW5nQ29tcG9uZW50LFxuICAgIFRlbXBsYXRlUHJvZmlsZUNyZWF0ZUNvbXBvbmVudCxcbiAgICBPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50LFxuICAgIFN1Yk9uYm9hcmRpbmdDcmVhdGVDb21wb25lbnQsXG4gICAgVGVtcGxhdGVQcm9maWxlTGlzdENvbXBvbmVudCxcbiAgICBTdWJUZW1wbGF0ZVByb2ZpbGVDb21wb25lbnQsXG4gICAgVXBkYXRlUHJvZmlsQ29tcG9uZW50LFxuICAgIEV4aXRDb25maXJtQ29tcG9uZW50LFxuICAgIE9uYm9hcmRpbmdMaXN0Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKG9uQm9hcmRpbmdSb3V0ZXMpLFxuICAgIFNjcm9sbFRvTW9kdWxlLmZvclJvb3QoKSxcbiAgICBEcmFnRHJvcE1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRTdGVwcGVyTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgVGFibGVNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBOZ3hJbnRsVGVsSW5wdXRNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbT25ib2FyZGluZ1NlcnZpY2UsIENhbkRlYWN0aXZhdGVHdWFyZF0sXG4gIGVudHJ5Q29tcG9uZW50czpbVXBkYXRlUHJvZmlsQ29tcG9uZW50LCBFeGl0Q29uZmlybUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6XG4gICAgW1xuICAgICAgT25ib2FyZGluZ0NvbXBvbmVudCxcbiAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICBUZW1wbGF0ZVByb2ZpbGVDcmVhdGVDb21wb25lbnQsXG4gICAgICBUZW1wbGF0ZVByb2ZpbGVMaXN0Q29tcG9uZW50LFxuICAgICAgT25ib2FyZGluZ0xpc3RDb21wb25lbnQsXG4gICAgICBPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50LFxuICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgTWF0VGFic01vZHVsZVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogT25ib2FyZGluZ01vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ09uYm9hcmRpbmdNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnOiBPbmJvYXJkaW5nSW50ZXJmYWNlKTogTW9kdWxlV2l0aFByb3ZpZGVyczxPbmJvYXJkaW5nTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBPbmJvYXJkaW5nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogJ19fTmd4T25ib2FyZGluZ19fJywgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgICBPbmJvYXJkaW5nU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==