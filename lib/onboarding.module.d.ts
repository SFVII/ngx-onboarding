import { ModuleWithProviders } from '@angular/core';
import { OnboardingInterface } from '../interface/OnboardingInterface';
import { Routes } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "./directives/elevation";
import * as i2 from "./onboarding.component";
import * as i3 from "./pages/template-profile-create/template-profile-create.component";
import * as i4 from "./pages/onboarding-create/onboarding-create.component";
import * as i5 from "./components/onboarding/sub-onboarding-create/sub-onboarding-create.component";
import * as i6 from "./pages/template-profile-list/template-profile-list.component";
import * as i7 from "./components/template/sub-template-profile/sub-template-profile.component";
import * as i8 from "./components/exit-confirm/exit-confirm.component";
import * as i9 from "./pages/onboarding-list/onboarding-list.component";
import * as i10 from "./components/template/type-dialog/type.component";
import * as i11 from "./components/onboarding/onboarding-table/onboarding-table.component";
import * as i12 from "./components/template/dialog-create-template/dialog-create-template.component";
import * as i13 from "./components/onboarding/dialog-create-onboarding/dialog-create-onboarding.component";
import * as i14 from "./components/onboarding/onboarding-detail/onboarding-detail.component";
import * as i15 from "./components/onboarding/loading/loading.component";
import * as i16 from "./components/loading/loading.component";
import * as i17 from "./components/dialog-confirmation/dialog-confirmation.component";
import * as i18 from "./components/template/no-data/no-data.component";
import * as i19 from "@angular/forms";
import * as i20 from "@angular/material/form-field";
import * as i21 from "@angular/material/button";
import * as i22 from "@angular/common";
import * as i23 from "@angular/platform-browser";
import * as i24 from "@angular/platform-browser/animations";
import * as i25 from "@angular/material/checkbox";
import * as i26 from "@angular/material/icon";
import * as i27 from "@angular/material/select";
import * as i28 from "@angular/material/input";
import * as i29 from "@angular/material/chips";
import * as i30 from "@angular/material/grid-list";
import * as i31 from "@angular/material/radio";
import * as i32 from "@angular/material/paginator";
import * as i33 from "@angular/cdk/table";
import * as i34 from "@angular/material/sort";
import * as i35 from "@angular/material/table";
import * as i36 from "@angular/router";
import * as i37 from "@nicky-lenaers/ngx-scroll-to";
import * as i38 from "ngx-filter";
import * as i39 from "@angular/cdk/drag-drop";
import * as i40 from "@angular/material/card";
import * as i41 from "@angular/material/dialog";
import * as i42 from "@angular/material/stepper";
import * as i43 from "@angular/material/progress-bar";
import * as i44 from "@angular/material/tooltip";
import * as i45 from "ngx-table";
import * as i46 from "@angular/material/tabs";
import * as i47 from "ngx-intl-tel-input";
import * as i48 from "@angular/material/slide-toggle";
import * as i49 from "@angular/material/datepicker";
import * as i50 from "@angular/material/core";
import * as i51 from "@angular/material/bottom-sheet";
import * as i52 from "@angular/common/http";
export declare const onBoardingRoutes: Routes;
export declare class OnboardingModule {
    constructor(parentModule?: OnboardingModule);
    static forRoot(config: OnboardingInterface): ModuleWithProviders<OnboardingModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OnboardingModule, [{ optional: true; skipSelf: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<OnboardingModule, [typeof i1.MaterialElevationDirective, typeof i2.OnboardingComponent, typeof i3.TemplateProfileCreateComponent, typeof i4.OnboardingCreateComponent, typeof i5.SubOnboardingCreateComponent, typeof i6.TemplateProfileListComponent, typeof i7.SubTemplateProfileComponent, typeof i8.ExitConfirmComponent, typeof i9.OnboardingListComponent, typeof i10.TypeComponent, typeof i11.OnboardingTableComponent, typeof i12.DialogCreateTemplateComponent, typeof i13.DialogCreateOnboardingComponent, typeof i14.OnboardingDetailComponent, typeof i15.LoadingComponent, typeof i16.LoadingPageComponent, typeof i17.DialogConfirmation, typeof i14.BottomSheet, typeof i18.NoDataComponent], [typeof i19.FormsModule, typeof i20.MatFormFieldModule, typeof i21.MatButtonModule, typeof i22.CommonModule, typeof i23.BrowserModule, typeof i24.BrowserAnimationsModule, typeof i19.FormsModule, typeof i19.ReactiveFormsModule, typeof i25.MatCheckboxModule, typeof i26.MatIconModule, typeof i27.MatSelectModule, typeof i28.MatInputModule, typeof i29.MatChipsModule, typeof i30.MatGridListModule, typeof i31.MatRadioModule, typeof i32.MatPaginatorModule, typeof i33.CdkTableModule, typeof i34.MatSortModule, typeof i35.MatTableModule, typeof i36.RouterModule, typeof i37.ScrollToModule, typeof i38.FilterModule, typeof i39.DragDropModule, typeof i40.MatCardModule, typeof i41.MatDialogModule, typeof i42.MatStepperModule, typeof i43.MatProgressBarModule, typeof i44.MatTooltipModule, typeof i45.TableModule, typeof i46.MatTabsModule, typeof i47.NgxIntlTelInputModule, typeof i48.MatSlideToggleModule, typeof i49.MatDatepickerModule, typeof i50.MatNativeDateModule, typeof i51.MatBottomSheetModule, typeof i43.MatProgressBarModule], [typeof i2.OnboardingComponent, typeof i52.HttpClientModule, typeof i3.TemplateProfileCreateComponent, typeof i6.TemplateProfileListComponent, typeof i9.OnboardingListComponent, typeof i4.OnboardingCreateComponent, typeof i13.DialogCreateOnboardingComponent, typeof i36.RouterModule, typeof i46.MatTabsModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<OnboardingModule>;
}
