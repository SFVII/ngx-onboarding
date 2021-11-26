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
import { CreateProfileTemplateComponent } from './create-profile-template/create-profile-template.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
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
var routes = [
    {
        path: 'onboarding',
        component: ProfileListComponent,
        children: [{
                path: '',
                component: ProfileListComponent
            },
            // {
            //   path: 'template',
            //   component: ProfileListComponent
            // },
            {
                path: 'template-builder/:id',
                component: CreateProfileTemplateComponent
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
            declarations: [OnboardingComponent, CreateProfileTemplateComponent, ProfileListComponent],
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
                RouterModule.forChild(routes)
            ],
            providers: [OnboardingService],
            exports: [OnboardingComponent, HttpClientModule, CreateProfileTemplateComponent, ProfileListComponent, OnboardingComponent]
        }),
        __param(0, Optional()), __param(0, SkipSelf())
    ], OnboardingModule);
    return OnboardingModule;
}());
export { OnboardingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL29uYm9hcmRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQUEsQ0FBQztBQUNuRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsSUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsWUFBWTtRQUNsQixTQUFTLEVBQUUsb0JBQW9CO1FBQy9CLFFBQVEsRUFBRSxDQUFDO2dCQUNULElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxvQkFBb0I7YUFDaEM7WUFDRCxJQUFJO1lBQ0osc0JBQXNCO1lBQ3RCLG9DQUFvQztZQUNwQyxLQUFLO1lBQ0w7Z0JBQ0UsSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsU0FBUyxFQUFFLDhCQUE4QjthQUMxQztTQUNBO0tBQ0Y7Q0FFRixDQUFBO0FBNkJEO0lBQ0UsMEJBQW9DLFlBQStCO1FBQ2pFLElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQ2IscUVBQXFFLENBQUMsQ0FBQztTQUMxRTtJQUNILENBQUM7eUJBTlUsZ0JBQWdCO0lBUWIsd0JBQU8sR0FBckIsVUFBc0IsTUFBMkI7UUFDL0MsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBZ0I7WUFDMUIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQ2xELGlCQUFpQjthQUNsQjtTQUNGLENBQUM7SUFDSixDQUFDOzs7Z0JBZmtELGdCQUFnQix1QkFBdEQsUUFBUSxZQUFJLFFBQVE7O0lBRHRCLGdCQUFnQjtRQTVCNUIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsOEJBQThCLEVBQUUsb0JBQW9CLENBQUM7WUFDekYsT0FBTyxFQUFFO2dCQUNQLFdBQVc7Z0JBQ1gsa0JBQWtCO2dCQUNsQixlQUFlO2dCQUNmLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYix1QkFBdUI7Z0JBQ3ZCLFdBQVc7Z0JBQ1gsbUJBQW1CO2dCQUNuQixpQkFBaUI7Z0JBQ2pCLGFBQWE7Z0JBQ2IsZUFBZTtnQkFDZixjQUFjO2dCQUNkLGNBQWM7Z0JBQ2QsaUJBQWlCO2dCQUNqQixjQUFjO2dCQUNkLGtCQUFrQjtnQkFDbEIsY0FBYztnQkFDZCxhQUFhO2dCQUNiLGNBQWM7Z0JBQ2QsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDOUI7WUFDRCxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztZQUM5QixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSw4QkFBOEIsRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsQ0FBQztTQUM1SCxDQUFDO1FBR2EsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7T0FEeEIsZ0JBQWdCLENBaUI1QjtJQUFELHVCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FqQlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25ib2FyZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vb25ib2FyZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT25ib2FyZGluZ0ludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZS9PbmJvYXJkaW5nSW50ZXJmYWNlJztcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJzs7XG5pbXBvcnQgeyBDcmVhdGVQcm9maWxlVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL2NyZWF0ZS1wcm9maWxlLXRlbXBsYXRlL2NyZWF0ZS1wcm9maWxlLXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9maWxlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcHJvZmlsZS1saXN0L3Byb2ZpbGUtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0Q2hpcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdEdyaWRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZ3JpZC1saXN0JztcbmltcG9ydCB7IE1hdFJhZGlvTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IE1hdFNvcnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnb25ib2FyZGluZycsXG4gICAgY29tcG9uZW50OiBQcm9maWxlTGlzdENvbXBvbmVudCxcbiAgICBjaGlsZHJlbjogW3tcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgY29tcG9uZW50OiBQcm9maWxlTGlzdENvbXBvbmVudFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgcGF0aDogJ3RlbXBsYXRlJyxcbiAgICAvLyAgIGNvbXBvbmVudDogUHJvZmlsZUxpc3RDb21wb25lbnRcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICd0ZW1wbGF0ZS1idWlsZGVyLzppZCcsXG4gICAgICBjb21wb25lbnQ6IENyZWF0ZVByb2ZpbGVUZW1wbGF0ZUNvbXBvbmVudFxuICAgIH1cbiAgICBdXG4gIH0sXG4gIC8vIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvcHJvZmlsLWxpc3QnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuXVxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbT25ib2FyZGluZ0NvbXBvbmVudCwgQ3JlYXRlUHJvZmlsZVRlbXBsYXRlQ29tcG9uZW50LCBQcm9maWxlTGlzdENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcylcbiAgXSxcbiAgcHJvdmlkZXJzOiBbT25ib2FyZGluZ1NlcnZpY2VdLFxuICBleHBvcnRzOiBbT25ib2FyZGluZ0NvbXBvbmVudCwgSHR0cENsaWVudE1vZHVsZSwgQ3JlYXRlUHJvZmlsZVRlbXBsYXRlQ29tcG9uZW50LCBQcm9maWxlTGlzdENvbXBvbmVudCwgT25ib2FyZGluZ0NvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogT25ib2FyZGluZ01vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ09uYm9hcmRpbmdNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnOiBPbmJvYXJkaW5nSW50ZXJmYWNlKTogTW9kdWxlV2l0aFByb3ZpZGVyczxPbmJvYXJkaW5nTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBPbmJvYXJkaW5nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogJ19fTmd4T25ib2FyZGluZ19fJywgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgICBPbmJvYXJkaW5nU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==