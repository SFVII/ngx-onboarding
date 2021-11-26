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
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    { path: 'profil-form/:id', component: CreateProfileTemplateComponent },
    { path: 'profil-list', component: ProfileListComponent },
    { path: '', redirectTo: '/profil-list', pathMatch: 'full' },
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
            providers: [{ provide: '__NgxOnboarding__', useValue: config }]
        };
    }
}
OnboardingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: OnboardingModule, deps: [{ token: OnboardingModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
OnboardingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: OnboardingModule, declarations: [OnboardingComponent, CreateProfileTemplateComponent, ProfileListComponent], imports: [FormsModule,
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
        MatTableModule, i1.RouterModule], exports: [OnboardingComponent, HttpClientModule, CreateProfileTemplateComponent, ProfileListComponent, OnboardingComponent] });
OnboardingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: OnboardingModule, providers: [OnboardingService], imports: [[
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
        ], HttpClientModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: OnboardingModule, decorators: [{
            type: NgModule,
            args: [{
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
                    exports: [OnboardingComponent, HttpClientModule, CreateProfileTemplateComponent, ProfileListComponent, OnboardingComponent]
                }]
        }], ctorParameters: function () { return [{ type: OnboardingModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvb25ib2FyZGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDN0csT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8s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Qjt3QkFDakIsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixjQUFjO3dCQUNkLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO3FCQUM3QjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDOUIsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsOEJBQThCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLENBQUM7aUJBQzVIOzBEQUdvRCxnQkFBZ0I7MEJBQXRELFFBQVE7OzBCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9vbmJvYXJkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlL09uYm9hcmRpbmdJbnRlcmZhY2UnO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuL29uYm9hcmRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IENyZWF0ZVByb2ZpbGVUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUvY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQgeyBNYXRSYWRpb01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7IE1hdENoaXBzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0R3JpZExpc3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ncmlkLWxpc3QnO1xuaW1wb3J0IHsgUHJvZmlsZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUtbGlzdC9wcm9maWxlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IE1hdFNvcnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7IE1hdExpc3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6ICdwcm9maWwtZm9ybS86aWQnLCBjb21wb25lbnQ6IENyZWF0ZVByb2ZpbGVUZW1wbGF0ZUNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdwcm9maWwtbGlzdCcsIGNvbXBvbmVudDogUHJvZmlsZUxpc3RDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9wcm9maWwtbGlzdCcsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG5dXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtPbmJvYXJkaW5nQ29tcG9uZW50LCBDcmVhdGVQcm9maWxlVGVtcGxhdGVDb21wb25lbnQsIFByb2ZpbGVMaXN0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdEdyaWRMaXN0TW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcbiAgXSxcbiAgcHJvdmlkZXJzOiBbT25ib2FyZGluZ1NlcnZpY2VdLFxuICBleHBvcnRzOiBbT25ib2FyZGluZ0NvbXBvbmVudCwgSHR0cENsaWVudE1vZHVsZSwgQ3JlYXRlUHJvZmlsZVRlbXBsYXRlQ29tcG9uZW50LCBQcm9maWxlTGlzdENvbXBvbmVudCwgT25ib2FyZGluZ0NvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogT25ib2FyZGluZ01vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ09uYm9hcmRpbmdNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnOiBPbmJvYXJkaW5nSW50ZXJmYWNlKTogTW9kdWxlV2l0aFByb3ZpZGVyczxPbmJvYXJkaW5nTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBPbmJvYXJkaW5nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiAnX19OZ3hPbmJvYXJkaW5nX18nLCB1c2VWYWx1ZTogY29uZmlnIH1dXG4gICAgfTtcbiAgfVxufVxuIl19