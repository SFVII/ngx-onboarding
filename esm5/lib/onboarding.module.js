import { __decorate, __param } from "tslib";
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingService } from './onboarding.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CreateProfileTemplateComponent } from './create-profile-template/create-profile-template.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule } from '@angular/router';
var routes = [
    { path: 'profil-form/:id', component: CreateProfileTemplateComponent },
    { path: 'profil-list', component: ProfileListComponent },
    { path: '', redirectTo: '/profil-list', pathMatch: 'full' },
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
                HttpClientModule,
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
                RouterModule.forRoot(routes)
            ],
            providers: [OnboardingService],
            exports: [OnboardingComponent, HttpClientModule, CreateProfileTemplateComponent, ProfileListComponent, OnboardingComponent, FormsModule,
                HttpClientModule,
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
                MatTableModule,]
        }),
        __param(0, Optional()), __param(0, SkipSelf())
    ], OnboardingModule);
    return OnboardingModule;
}());
export { OnboardingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL29uYm9hcmRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsOEJBQThCLEVBQUU7SUFDdEUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRTtJQUN4RCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0NBQzVELENBQUE7QUFpREQ7SUFDRSwwQkFBb0MsWUFBK0I7UUFDakUsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FDYixxRUFBcUUsQ0FBQyxDQUFDO1NBQzFFO0lBQ0gsQ0FBQzt5QkFOVSxnQkFBZ0I7SUFRYix3QkFBTyxHQUFyQixVQUFzQixNQUEyQjtRQUMvQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDbEQsaUJBQWlCO2FBQ2xCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztnQkFma0QsZ0JBQWdCLHVCQUF0RCxRQUFRLFlBQUksUUFBUTs7SUFEdEIsZ0JBQWdCO1FBaEQ1QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSw4QkFBOEIsRUFBRSxvQkFBb0IsQ0FBQztZQUN6RixPQUFPLEVBQUU7Z0JBQ1AsV0FBVztnQkFDWCxnQkFBZ0I7Z0JBQ2hCLGtCQUFrQjtnQkFDbEIsZUFBZTtnQkFDZixZQUFZO2dCQUNaLGFBQWE7Z0JBQ2IsdUJBQXVCO2dCQUN2QixXQUFXO2dCQUNYLG1CQUFtQjtnQkFDbkIsaUJBQWlCO2dCQUNqQixhQUFhO2dCQUNiLGVBQWU7Z0JBQ2YsY0FBYztnQkFDZCxjQUFjO2dCQUNkLGlCQUFpQjtnQkFDakIsY0FBYztnQkFDZCxrQkFBa0I7Z0JBQ2xCLGNBQWM7Z0JBQ2QsYUFBYTtnQkFDYixjQUFjO2dCQUNkLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQzdCO1lBQ0QsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7WUFDOUIsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsOEJBQThCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsV0FBVztnQkFDckksZ0JBQWdCO2dCQUNoQixrQkFBa0I7Z0JBQ2xCLGVBQWU7Z0JBQ2YsWUFBWTtnQkFDWixhQUFhO2dCQUNiLHVCQUF1QjtnQkFDdkIsV0FBVztnQkFDWCxtQkFBbUI7Z0JBQ25CLGlCQUFpQjtnQkFDakIsYUFBYTtnQkFDYixlQUFlO2dCQUNmLGNBQWM7Z0JBQ2QsY0FBYztnQkFDZCxpQkFBaUI7Z0JBQ2pCLGNBQWM7Z0JBQ2Qsa0JBQWtCO2dCQUNsQixjQUFjO2dCQUNkLGFBQWE7Z0JBQ2IsY0FBYyxFQUFFO1NBQ25CLENBQUM7UUFHYSxXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxRQUFRLEVBQUUsQ0FBQTtPQUR4QixnQkFBZ0IsQ0FpQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWpCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9vbmJvYXJkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlL09uYm9hcmRpbmdJbnRlcmZhY2UnO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuL29uYm9hcmRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IENyZWF0ZVByb2ZpbGVUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUvY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQgeyBNYXRSYWRpb01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7IE1hdENoaXBzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0R3JpZExpc3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ncmlkLWxpc3QnO1xuaW1wb3J0IHsgUHJvZmlsZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUtbGlzdC9wcm9maWxlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IE1hdFNvcnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7IE1hdExpc3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6ICdwcm9maWwtZm9ybS86aWQnLCBjb21wb25lbnQ6IENyZWF0ZVByb2ZpbGVUZW1wbGF0ZUNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdwcm9maWwtbGlzdCcsIGNvbXBvbmVudDogUHJvZmlsZUxpc3RDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9wcm9maWwtbGlzdCcsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG5dXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtPbmJvYXJkaW5nQ29tcG9uZW50LCBDcmVhdGVQcm9maWxlVGVtcGxhdGVDb21wb25lbnQsIFByb2ZpbGVMaXN0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdEdyaWRMaXN0TW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcbiAgXSxcbiAgcHJvdmlkZXJzOiBbT25ib2FyZGluZ1NlcnZpY2VdLFxuICBleHBvcnRzOiBbT25ib2FyZGluZ0NvbXBvbmVudCwgSHR0cENsaWVudE1vZHVsZSwgQ3JlYXRlUHJvZmlsZVRlbXBsYXRlQ29tcG9uZW50LCBQcm9maWxlTGlzdENvbXBvbmVudCwgT25ib2FyZGluZ0NvbXBvbmVudCwgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXVxufSlcblxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU/OiBPbmJvYXJkaW5nTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnT25ib2FyZGluZ01vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWc6IE9uYm9hcmRpbmdJbnRlcmZhY2UpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE9uYm9hcmRpbmdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE9uYm9hcmRpbmdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiAnX19OZ3hPbmJvYXJkaW5nX18nLCB1c2VWYWx1ZTogY29uZmlnIH0sXG4gICAgICAgIE9uYm9hcmRpbmdTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19