import { __assign, __awaiter, __generator } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "../onboarding.service";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/select";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/core";
import * as i9 from "@angular/cdk/drag-drop";
import * as i10 from "@angular/material/stepper";
import * as i11 from "../components/sub-onboarding/sub-onboarding.component";
function OnboardingFormComponent_div_7_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var contact_r552 = ctx.$implicit;
    i0.ɵɵproperty("value", contact_r552.Id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(contact_r552.Name);
} }
function OnboardingFormComponent_div_7_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var template_r553 = ctx.$implicit;
    i0.ɵɵproperty("value", template_r553._id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", template_r553.Name, " ");
} }
function OnboardingFormComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r555 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2, " Onboarding de votre nouveau collaborateur ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "S\u00E9lectionnez le nom de votre nouveau collaborateur afin de pouvoir d\u00E9marrer son onboarding.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-form-field", 7);
    i0.ɵɵelementStart(6, "mat-label");
    i0.ɵɵtext(7, "Contact");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-select", 8);
    i0.ɵɵlistener("selectionChange", function OnboardingFormComponent_div_7_Template_mat_select_selectionChange_8_listener($event) { i0.ɵɵrestoreView(_r555); var ctx_r554 = i0.ɵɵnextContext(); return ctx_r554.onSelectUser($event.value); });
    i0.ɵɵtemplate(9, OnboardingFormComponent_div_7_mat_option_9_Template, 2, 2, "mat-option", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-form-field", 7);
    i0.ɵɵelementStart(11, "mat-label");
    i0.ɵɵtext(12, "Template");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "mat-select", 10);
    i0.ɵɵlistener("selectionChange", function OnboardingFormComponent_div_7_Template_mat_select_selectionChange_13_listener($event) { i0.ɵɵrestoreView(_r555); var ctx_r556 = i0.ɵɵnextContext(); return ctx_r556.onSelect($event.value); });
    i0.ɵɵtemplate(14, OnboardingFormComponent_div_7_mat_option_14_Template, 2, 2, "mat-option", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 11);
    i0.ɵɵlistener("click", function OnboardingFormComponent_div_7_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r555); var ctx_r557 = i0.ɵɵnextContext(); return ctx_r557.onSelectContactTemplate(); });
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r548 = i0.ɵɵnextContext();
    var tmp_2_0 = null;
    var currVal_2 = ((tmp_2_0 = ctx_r548.onboardingForm.get("ContactId")) == null ? null : tmp_2_0.value) === "" || ((tmp_2_0 = ctx_r548.onboardingForm.get("templateId")) == null ? null : tmp_2_0.value) == "" ? 0.4 : 1;
    var tmp_3_0 = null;
    var currVal_3 = ((tmp_3_0 = ctx_r548.onboardingForm.get("ContactId")) == null ? null : tmp_3_0.value) === "" || ((tmp_3_0 = ctx_r548.onboardingForm.get("templateId")) == null ? null : tmp_3_0.value) == "";
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r548.contacts);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r548.templates);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", currVal_2);
    i0.ɵɵproperty("disabled", currVal_3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r548.id !== "0" ? "Modifier l\u2019onboarding" : "D\u00E9marrer l\u2019onboarding", " ");
} }
function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r580 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelementStart(1, "lib-sub-onboarding", 34);
    i0.ɵɵlistener("onAddKeywordFromInput", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onAddKeywordFromInput_1_listener($event) { i0.ɵɵrestoreView(_r580); var l_r578 = ctx.index; var k_r573 = i0.ɵɵnextContext(2).index; var j_r568 = i0.ɵɵnextContext(2).index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r579 = i0.ɵɵnextContext(2); return ctx_r579.addKeywordFromInput($event.event, i_r563, j_r568, k_r573, l_r578); })("onKeyPress", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onKeyPress_1_listener($event) { i0.ɵɵrestoreView(_r580); var l_r578 = ctx.index; var k_r573 = i0.ɵɵnextContext(2).index; var j_r568 = i0.ɵɵnextContext(2).index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r584 = i0.ɵɵnextContext(2); return ctx_r584.onKeyPress($event.event, i_r563, j_r568, k_r573, l_r578); })("onAddNewField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onAddNewField_1_listener() { i0.ɵɵrestoreView(_r580); var k_r573 = i0.ɵɵnextContext(2).index; var j_r568 = i0.ɵɵnextContext(2).index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r588 = i0.ɵɵnextContext(2); return ctx_r588.onAddNewField(i_r563, j_r568, k_r573); })("onRemoveField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onRemoveField_1_listener() { i0.ɵɵrestoreView(_r580); var l_r578 = ctx.index; var k_r573 = i0.ɵɵnextContext(2).index; var j_r568 = i0.ɵɵnextContext(2).index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r592 = i0.ɵɵnextContext(2); return ctx_r592.onRemoveField(i_r563, j_r568, k_r573, l_r578); })("onChangeType", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onChangeType_1_listener() { i0.ɵɵrestoreView(_r580); var c2_r577 = ctx.$implicit; var l_r578 = ctx.index; var k_r573 = i0.ɵɵnextContext(2).index; var j_r568 = i0.ɵɵnextContext(2).index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r596 = i0.ɵɵnextContext(2); return ctx_r596.onChangeType(c2_r577.type, i_r563, j_r568, k_r573, l_r578); })("onRemoveKeyword", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onRemoveKeyword_1_listener($event) { i0.ɵɵrestoreView(_r580); var l_r578 = ctx.index; var k_r573 = i0.ɵɵnextContext(2).index; var j_r568 = i0.ɵɵnextContext(2).index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r600 = i0.ɵɵnextContext(2); return ctx_r600.removeKeyword($event.event, i_r563, j_r568, k_r573, l_r578); })("onAddNewSubLevelField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onAddNewSubLevelField_1_listener() { i0.ɵɵrestoreView(_r580); var l_r578 = ctx.index; var k_r573 = i0.ɵɵnextContext(2).index; var j_r568 = i0.ɵɵnextContext(2).index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r604 = i0.ɵɵnextContext(2); return ctx_r604.onAddNewSubLevelField(i_r563, j_r568, k_r573, l_r578); })("onExpendMore", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onExpendMore_1_listener() { i0.ɵɵrestoreView(_r580); var l_r578 = ctx.index; var k_r573 = i0.ɵɵnextContext(2).index; var j_r568 = i0.ɵɵnextContext(2).index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r608 = i0.ɵɵnextContext(2); return ctx_r608.onExpendMore(null, i_r563, j_r568, k_r573, l_r578); });
    i0.ɵɵelement(2, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var c2_r577 = ctx.$implicit;
    var l_r578 = ctx.index;
    var ctx_r612 = i0.ɵɵnextContext(2);
    var child_r572 = ctx_r612.$implicit;
    var k_r573 = ctx_r612.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("field", c2_r577)("length", child_r572 == null ? null : child_r572.forms == null ? null : child_r572.forms.length)("i", k_r573)("j", l_r578);
} }
function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r614 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30, 31);
    i0.ɵɵlistener("cdkDropListDropped", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r614); var ctx_r613 = i0.ɵɵnextContext(7); return ctx_r613.drop($event); });
    i0.ɵɵtemplate(2, OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template, 3, 4, "div", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r572 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("cdkDropListData", child_r572.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", child_r572.forms);
} }
function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r617 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelementStart(1, "lib-sub-onboarding", 34);
    i0.ɵɵlistener("onAddKeywordFromInput", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onAddKeywordFromInput_1_listener($event) { i0.ɵɵrestoreView(_r617); var k_r573 = ctx.index; var j_r568 = i0.ɵɵnextContext(2).index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r616 = i0.ɵɵnextContext(2); return ctx_r616.addKeywordFromInput($event.event, i_r563, j_r568, k_r573); })("onKeyPress", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onKeyPress_1_listener($event) { i0.ɵɵrestoreView(_r617); var k_r573 = ctx.index; var j_r568 = i0.ɵɵnextContext(2).index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r620 = i0.ɵɵnextContext(2); return ctx_r620.onKeyPress($event.event, i_r563, j_r568, k_r573); })("onAddNewField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onAddNewField_1_listener() { i0.ɵɵrestoreView(_r617); var j_r568 = i0.ɵɵnextContext(2).index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r623 = i0.ɵɵnextContext(2); return ctx_r623.onAddNewField(i_r563, j_r568); })("onRemoveField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onRemoveField_1_listener() { i0.ɵɵrestoreView(_r617); var k_r573 = ctx.index; var j_r568 = i0.ɵɵnextContext(2).index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r626 = i0.ɵɵnextContext(2); return ctx_r626.onRemoveField(i_r563, j_r568, k_r573); })("onChangeType", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onChangeType_1_listener() { i0.ɵɵrestoreView(_r617); var child_r572 = ctx.$implicit; var k_r573 = ctx.index; var j_r568 = i0.ɵɵnextContext(2).index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r629 = i0.ɵɵnextContext(2); return ctx_r629.onChangeType(child_r572.type, i_r563, j_r568, k_r573); })("onRemoveKeyword", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onRemoveKeyword_1_listener($event) { i0.ɵɵrestoreView(_r617); var k_r573 = ctx.index; var j_r568 = i0.ɵɵnextContext(2).index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r632 = i0.ɵɵnextContext(2); return ctx_r632.removeKeyword($event.event, i_r563, j_r568, k_r573); })("onAddNewSubLevelField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onAddNewSubLevelField_1_listener() { i0.ɵɵrestoreView(_r617); var k_r573 = ctx.index; var j_r568 = i0.ɵɵnextContext(2).index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r635 = i0.ɵɵnextContext(2); return ctx_r635.onAddNewSubLevelField(i_r563, j_r568, k_r573); })("onExpendMore", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onExpendMore_1_listener() { i0.ɵɵrestoreView(_r617); var k_r573 = ctx.index; var j_r568 = i0.ɵɵnextContext(2).index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r638 = i0.ɵɵnextContext(2); return ctx_r638.onExpendMore(null, i_r563, j_r568, k_r573); });
    i0.ɵɵelementStart(2, "div", 35);
    i0.ɵɵtemplate(3, OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_Template, 3, 2, "div", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r572 = ctx.$implicit;
    var k_r573 = ctx.index;
    var ctx_r641 = i0.ɵɵnextContext(2);
    var field_r567 = ctx_r641.$implicit;
    var j_r568 = ctx_r641.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("field", child_r572)("length", field_r567 == null ? null : field_r567.forms == null ? null : field_r567.forms.length)("i", j_r568)("j", k_r573);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", child_r572.forms);
} }
function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r643 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30, 31);
    i0.ɵɵlistener("cdkDropListDropped", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r643); var ctx_r642 = i0.ɵɵnextContext(5); return ctx_r642.drop($event); });
    i0.ɵɵtemplate(2, OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template, 4, 5, "div", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r567 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("cdkDropListData", field_r567.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", field_r567.forms);
} }
function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r646 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelementStart(1, "lib-sub-onboarding", 34);
    i0.ɵɵlistener("onAddKeywordFromInput", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onAddKeywordFromInput_1_listener($event) { i0.ɵɵrestoreView(_r646); var j_r568 = ctx.index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r645 = i0.ɵɵnextContext(2); return ctx_r645.addKeywordFromInput($event.event, i_r563, j_r568); })("onKeyPress", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onKeyPress_1_listener($event) { i0.ɵɵrestoreView(_r646); var j_r568 = ctx.index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r648 = i0.ɵɵnextContext(2); return ctx_r648.onKeyPress($event.event, i_r563, j_r568); })("onAddNewField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onAddNewField_1_listener() { i0.ɵɵrestoreView(_r646); var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r650 = i0.ɵɵnextContext(2); return ctx_r650.onAddNewField(i_r563); })("onRemoveField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onRemoveField_1_listener() { i0.ɵɵrestoreView(_r646); var j_r568 = ctx.index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r652 = i0.ɵɵnextContext(2); return ctx_r652.onRemoveField(i_r563, j_r568); })("onChangeType", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onChangeType_1_listener() { i0.ɵɵrestoreView(_r646); var field_r567 = ctx.$implicit; var j_r568 = ctx.index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r654 = i0.ɵɵnextContext(2); return ctx_r654.onChangeType(field_r567.type, i_r563, j_r568); })("onRemoveKeyword", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onRemoveKeyword_1_listener($event) { i0.ɵɵrestoreView(_r646); var j_r568 = ctx.index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r656 = i0.ɵɵnextContext(2); return ctx_r656.removeKeyword($event.event, i_r563, j_r568); })("onAddNewSubLevelField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onAddNewSubLevelField_1_listener() { i0.ɵɵrestoreView(_r646); var j_r568 = ctx.index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r658 = i0.ɵɵnextContext(2); return ctx_r658.onAddNewSubLevelField(i_r563, j_r568); })("onExpendMore", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onExpendMore_1_listener() { i0.ɵɵrestoreView(_r646); var j_r568 = ctx.index; var i_r563 = i0.ɵɵnextContext(2).index; var ctx_r660 = i0.ɵɵnextContext(2); return ctx_r660.onExpendMore(null, i_r563, j_r568); });
    i0.ɵɵelementStart(2, "div", 35);
    i0.ɵɵtemplate(3, OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_Template, 3, 2, "div", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r567 = ctx.$implicit;
    var j_r568 = ctx.index;
    var ctx_r662 = i0.ɵɵnextContext(2);
    var category_r562 = ctx_r662.$implicit;
    var i_r563 = ctx_r662.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("field", field_r567)("length", category_r562 == null ? null : category_r562.forms == null ? null : category_r562.forms.length)("i", i_r563)("j", j_r568);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r567.forms);
} }
function OnboardingFormComponent_div_8_mat_step_6_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r664 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30, 31);
    i0.ɵɵlistener("cdkDropListDropped", function OnboardingFormComponent_div_8_mat_step_6_div_5_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r664); var ctx_r663 = i0.ɵɵnextContext(3); return ctx_r663.drop($event); });
    i0.ɵɵelementContainerStart(2);
    i0.ɵɵtemplate(3, OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template, 4, 5, "div", 32);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r562 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("cdkDropListData", category_r562.forms);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", category_r562.forms);
} }
function OnboardingFormComponent_div_8_mat_step_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-step", 24);
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵelementStart(2, "div", 26);
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, OnboardingFormComponent_div_8_mat_step_6_div_5_Template, 4, 2, "div", 27);
    i0.ɵɵelementStart(6, "button", 28);
    i0.ɵɵtext(7, "Pr\u00E9c\u00E9dent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 29);
    i0.ɵɵtext(9, "Suivant");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r562 = ctx.$implicit;
    var ctx_r560 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("stepControl", ctx_r560.onboardingForm)("label", category_r562.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(category_r562.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r562.forms);
} }
function OnboardingFormComponent_div_8_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Review");
} }
function OnboardingFormComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r667 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵelementStart(2, "div", 15, 16);
    i0.ɵɵlistener("cdkDropListDropped", function OnboardingFormComponent_div_8_Template_div_cdkDropListDropped_2_listener($event) { i0.ɵɵrestoreView(_r667); var ctx_r666 = i0.ɵɵnextContext(); return ctx_r666.drop($event); });
    i0.ɵɵelementStart(4, "mat-horizontal-stepper", 17, 18);
    i0.ɵɵtemplate(6, OnboardingFormComponent_div_8_mat_step_6_Template, 10, 4, "mat-step", 19);
    i0.ɵɵelementStart(7, "mat-step");
    i0.ɵɵtemplate(8, OnboardingFormComponent_div_8_ng_template_8_Template, 1, 0, "ng-template", 20);
    i0.ɵɵelementStart(9, "h5");
    i0.ɵɵtext(10, "You are now done.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div");
    i0.ɵɵelementStart(12, "button", 21);
    i0.ɵɵtext(13, "Back");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(14, " \u00A0 \u00A0 ");
    i0.ɵɵelementStart(15, "button", 22);
    i0.ɵɵtext(16, "Submit");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17, " \u00A0 \u00A0 ");
    i0.ɵɵelementStart(18, "button", 23);
    i0.ɵɵlistener("click", function OnboardingFormComponent_div_8_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r667); var _r559 = i0.ɵɵreference(5); return _r559.reset(); });
    i0.ɵɵtext(19, "Reset");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r549 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkDropListData", ctx_r549.categories);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("linear", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r549.categories);
} }
var OnboardingFormComponent = /** @class */ (function () {
    function OnboardingFormComponent(service, fb, route) {
        this.service = service;
        this.fb = fb;
        this.route = route;
        this.isSelected = false;
        this.id = "0";
    }
    OnboardingFormComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.onCreateDynamicForm();
                        return [4 /*yield*/, this.service.getContacts()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.service.getAllProfil()];
                    case 2:
                        _b.sent();
                        this.service._contacts.subscribe(function (contacts) { return _this.contacts = contacts; });
                        this.service._templates.subscribe(function (data) { return _this.templates = data; });
                        this.id = this.route.snapshot.paramMap.get("id");
                        if (!(this.id !== "0")) return [3 /*break*/, 4];
                        _a = this;
                        return [4 /*yield*/, this.service.getOnboarding(this.id)];
                    case 3:
                        _a.currentOnboarding = _b.sent();
                        _b.label = 4;
                    case 4:
                        console.log(this.templates);
                        return [2 /*return*/];
                }
            });
        });
    };
    OnboardingFormComponent.prototype.onSelectContactTemplate = function () {
        this.isSelected = true;
    };
    OnboardingFormComponent.prototype.onCreateDynamicForm = function () {
        this.onboardingForm = this.fb.group({
            contactId: ['', Validators.required],
            templateId: [0, Validators.required]
        });
    };
    OnboardingFormComponent.prototype.onPopulateValue = function () {
        var _this = this;
        var user = this.categories[0].forms;
        var populateContact = user.map(function (u) { return (__assign(__assign({}, u), { value: _this.currentUser[u.key] })); });
        this.categories[0].forms = populateContact;
    };
    OnboardingFormComponent.prototype.onSelect = function (id) {
        this.categories = this.templates.find(function (t) { return t._id === id; }).categories;
        if (this.contacts) {
            this.onPopulateValue();
        }
    };
    OnboardingFormComponent.prototype.onSelectUser = function (Id) {
        this.currentUser = this.contacts.find(function (u) { return u.Id === Id; });
        if (this.categories) {
            this.onPopulateValue();
        }
    };
    OnboardingFormComponent.prototype.onAddNewCategory = function (e) {
        e.preventDefault();
        this.categories.push({
            name: "",
            editable: true,
            deleteable: true,
            expandMore: true,
            suffixEndpoint: "",
            forms: [
                {
                    label: "",
                    value: null,
                    size: 80,
                    isMandatory: true,
                    type: "text",
                    deleteable: true,
                    editable: true
                },
            ],
        });
    };
    OnboardingFormComponent.prototype.onAddNewField = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 1
            ? this.categories[params[0]].forms
            : length === 2
                ? this.categories[params[0]].forms[params[1]].forms
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.push({
            label: "",
            value: null,
            size: 80,
            isMandatory: true,
            type: "text",
            deleteable: true,
            editable: true,
            subLevel: params.length
        });
    };
    OnboardingFormComponent.prototype.onAddNewSubLevelField = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        console.log(params.length - 1);
        var length = params.length;
        var forms = length === 2
            ? this.categories[params[0]].forms[params[length - 1]]
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]]
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.expandMore = true;
        forms.forms = [];
        forms.forms.push({
            label: "",
            value: null,
            size: 80,
            isMandatory: true,
            type: "text",
            deleteable: true,
            editable: true,
            subLevel: params.length,
            expandMore: true
        });
        console.log(this.categories);
    };
    OnboardingFormComponent.prototype.onRemoveField = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 2
            ? this.categories[params[0]].forms
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.splice(params[length - 1], 1);
    };
    OnboardingFormComponent.prototype.onRemoveCategory = function (e, i) {
        e.preventDefault();
        this.categories.splice(i, 1);
    };
    OnboardingFormComponent.prototype.onChangeCategory = function () {
        return this.categories.every(function (cat) {
            return cat.name !== "" &&
                cat.forms.every(function (field) { return field.label !== "" && field.type !== ""; });
        });
    };
    OnboardingFormComponent.prototype.onChangeType = function (type) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 2
            ? this.categories[params[0]].forms
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        if (type === "select" || type === "radio") {
            forms[params[length - 1]].value = [];
        }
        else if (type === "text") {
            forms[params[length - 1]].value = "";
        }
        else {
            forms[params[length - 1]].value = false;
        }
    };
    OnboardingFormComponent.prototype.onKeyPress = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 2
            ? this.categories[params[0]].forms[params[length - 1]]
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]]
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (event.key === ";") {
            var exist = forms.value.find(function (opt) {
                return opt.toLocaleLowerCase() ===
                    event.target.value.split(";")[0].toLocaleLowerCase();
            });
            if (!exist) {
                forms.value.push(event.target.value.split(";")[0]);
                event.target.value = "";
            }
            else {
                event.target.value = "";
            }
        }
    };
    OnboardingFormComponent.prototype.removeKeyword = function (keyword) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 2
            ? this.categories[params[0]].forms[params[length - 1]]
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]]
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.value = forms.value.filter(function (option) { return option !== keyword; });
    };
    OnboardingFormComponent.prototype.onExpendMore = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (event) {
            event.preventDefault();
        }
        console.log(event);
        var length = params.length;
        var forms = length === 1
            ? this.categories[params[0]] :
            length === 2 ? this.categories[params[0]].forms[params[length - 1]] :
                length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] :
                    this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.expandMore = !forms.expandMore;
    };
    OnboardingFormComponent.prototype.addKeywordFromInput = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var input = event.input;
        var value = event.value;
        var length = params.length;
        var forms = length === 2
            ? this.categories[params[0]].forms[params[length - 1]]
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]]
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (value) {
            var exist = forms.value.find(function (opt) { return opt.toLocaleLowerCase() === event.value.toLocaleLowerCase(); });
            if (!exist) {
                forms.value.push(value.trim());
                input.value = "";
            }
            else {
                input.value = "";
            }
        }
    };
    OnboardingFormComponent.prototype.drop = function (event) {
        console.log("log", this.categories);
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    OnboardingFormComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    OnboardingFormComponent.ɵfac = function OnboardingFormComponent_Factory(t) { return new (t || OnboardingFormComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.ActivatedRoute)); };
    OnboardingFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingFormComponent, selectors: [["lib-onboarding-form"]], decls: 9, vars: 3, consts: [[1, "container"], [1, "content"], [1, "sub-title"], [3, "formGroup"], ["class", "select-contact", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "select-contact"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "contactId", "required", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "templateId", "required", "", 3, "selectionChange"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "value"], [1, "category"], ["cdkDropListGroup", ""], ["cdkDropList", "", 1, "example-list", "mt-20", "onboarding-mat-stepper", 3, "cdkDropListData", "cdkDropListDropped"], ["parentList", "cdkDropList"], ["labelPosition", "bottom", 3, "linear"], ["stepper", ""], ["class", "category-item", 3, "stepControl", "label", 4, "ngFor", "ngForOf"], ["matStepLabel", ""], ["mat-raised-button", "", "color", "primary", "matStepperPrevious", ""], ["mat-raised-button", "", "color", "accent", "type", "submit"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "category-item", 3, "stepControl", "label"], [1, "field-content"], [1, "field-item"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "matStepperPrevious", "", 1, "next-step", 2, "float", "left"], ["mat-raised-button", "", "color", "primary", "matStepperNext", "", 1, "next-step"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "field", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "field"], [3, "field", "length", "i", "j", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore"], [1, "child"]], template: function OnboardingFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "h3");
            i0.ɵɵtext(3, "Nouvel Onboarding");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 2);
            i0.ɵɵtext(5, "Cr\u00E9ez ici, l\u2019onboarding de votre nouveau collaborateur.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "form", 3);
            i0.ɵɵtemplate(7, OnboardingFormComponent_div_7_Template, 17, 6, "div", 4);
            i0.ɵɵtemplate(8, OnboardingFormComponent_div_8_Template, 20, 3, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("formGroup", ctx.onboardingForm);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isSelected);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isSelected);
        } }, directives: [i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i2.FormGroupDirective, i4.NgIf, i5.MatFormField, i5.MatLabel, i6.MatSelect, i2.NgControlStatus, i2.FormControlName, i2.RequiredValidator, i4.NgForOf, i7.MatButton, i8.MatOption, i9.CdkDropListGroup, i9.CdkDropList, i10.MatHorizontalStepper, i10.MatStep, i10.MatStepLabel, i10.MatStepperPrevious, i10.MatStepperNext, i9.CdkDrag, i11.SubOnboaringComponent], styles: [".onboarding-mat-stepper .mat-horizontal-stepper-header-container{display:none!important}.container[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;width:100%;height:auto;min-height:100%}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:99%;height:100%;padding-left:1%}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{max-width:300px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .onboarding-mat-stepper[_ngcontent-%COMP%]   mat-horizontal-stepper[_ngcontent-%COMP%]   .next-step[_ngcontent-%COMP%]{float:right}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:5%}"] });
    return OnboardingFormComponent;
}());
export { OnboardingFormComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnboardingFormComponent, [{
        type: Component,
        args: [{
                selector: 'lib-onboarding-form',
                templateUrl: './onboarding-form.component.html',
                styleUrls: ['./onboarding-form.component.scss']
            }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.FormBuilder }, { type: i3.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvb25ib2FyZGluZy1mb3JtL29uYm9hcmRpbmctZm9ybS5jb21wb25lbnQudHMiLCJsaWIvb25ib2FyZGluZy1mb3JtL29uYm9hcmRpbmctZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQTBCLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBZSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUNVakUsc0NBQWtFO0lBQUEsWUFBZ0I7SUFBQSxpQkFBYTs7O0lBQWxELHVDQUFvQjtJQUFDLGVBQWdCO0lBQWhCLHVDQUFnQjs7O0lBTWxGLHNDQUFzRTtJQUFBLFlBQ3RFO0lBQUEsaUJBQWE7OztJQURrQyx5Q0FBc0I7SUFBQyxlQUN0RTtJQURzRSxrREFDdEU7Ozs7SUFmWiw4QkFDSTtJQUFBLDBCQUNJO0lBQUEsMkRBQ0o7SUFBQSxpQkFBSztJQUNMLHlCQUFHO0lBQUEscUhBQTJGO0lBQUEsaUJBQUk7SUFDbEcseUNBQ0k7SUFBQSxpQ0FBVztJQUFBLHVCQUFPO0lBQUEsaUJBQVk7SUFDOUIscUNBQ0k7SUFENkMsMk9BQThDO0lBQzNGLDRGQUFrRTtJQUN0RSxpQkFBYTtJQUNqQixpQkFBaUI7SUFDakIsMENBQ0k7SUFBQSxrQ0FBVztJQUFBLHlCQUFRO0lBQUEsaUJBQVk7SUFDL0IsdUNBQ0k7SUFEOEMsd09BQTBDO0lBQ3hGLDhGQUFzRTtJQUUxRSxpQkFBYTtJQUNqQixpQkFBaUI7SUFFakIsbUNBSUk7SUFEa0MsNk1BQW1DO0lBQ3JFLGFBQ0o7SUFBQSxpQkFBUztJQUNiLGlCQUFNOzs7Ozs7O0lBakJrQixlQUFnQztJ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QWtDLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXksIHRyYW5zZmVyQXJyYXlJdGVtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQgeyBNYXRDaGlwSW5wdXRFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW9uYm9hcmRpbmctZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWZvcm0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG9uYm9hcmRpbmdGb3JtOiBGb3JtR3JvdXA7XG4gIGN1cnJlbnRVc2VyOiBhbnk7XG4gIHRlbXBsYXRlczogYW55O1xuICBjb250YWN0czogYW55O1xuICBjYXRlZ29yaWVzOiBhbnk7XG4gIGlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgY3VycmVudE9uYm9hcmRpbmc6IGFueTtcbiAgaWQgPSBcIjBcIjtcbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIHRoaXMub25DcmVhdGVEeW5hbWljRm9ybSgpO1xuICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRDb250YWN0cygpO1xuICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTtcbiAgICB0aGlzLnNlcnZpY2UuX2NvbnRhY3RzLnN1YnNjcmliZSgoY29udGFjdHMpID0+IHRoaXMuY29udGFjdHMgPSBjb250YWN0cyk7XG4gICAgdGhpcy5zZXJ2aWNlLl90ZW1wbGF0ZXMuc3Vic2NyaWJlKChkYXRhKSA9PiB0aGlzLnRlbXBsYXRlcyA9IGRhdGEpO1xuICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldChcImlkXCIpO1xuICAgIGlmICh0aGlzLmlkICE9PSBcIjBcIikge1xuICAgICAgdGhpcy5jdXJyZW50T25ib2FyZGluZyA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRPbmJvYXJkaW5nKHRoaXMuaWQpO1xuICAgICAgLy8gdGhpcy5vbmJvYXJkaW5nRm9ybS5wYXRjaFZhbHVlKHRoaXMuY3VycmVudE9uYm9hcmRpbmcpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnRlbXBsYXRlcyk7XG5cbiAgfVxuXG4gIG9uU2VsZWN0Q29udGFjdFRlbXBsYXRlKCkge1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XG4gIH1cblxuICBvbkNyZWF0ZUR5bmFtaWNGb3JtKCkge1xuICAgIHRoaXMub25ib2FyZGluZ0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGNvbnRhY3RJZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHRlbXBsYXRlSWQ6IFswLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG5cbiAgb25Qb3B1bGF0ZVZhbHVlKCkge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLmNhdGVnb3JpZXNbMF0uZm9ybXM7XG4gICAgY29uc3QgcG9wdWxhdGVDb250YWN0ID0gdXNlci5tYXAoKHUpID0+ICh7XG4gICAgICAuLi51LFxuICAgICAgdmFsdWU6IHRoaXMuY3VycmVudFVzZXJbdS5rZXldXG4gICAgfSkpO1xuICAgIHRoaXMuY2F0ZWdvcmllc1swXS5mb3JtcyA9IHBvcHVsYXRlQ29udGFjdDtcbiAgfVxuXG4gIG9uU2VsZWN0KGlkKSB7XG4gICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy50ZW1wbGF0ZXMuZmluZCgodCkgPT4gdC5faWQgPT09IGlkKS5jYXRlZ29yaWVzO1xuICAgIGlmICh0aGlzLmNvbnRhY3RzKSB7XG4gICAgICB0aGlzLm9uUG9wdWxhdGVWYWx1ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0VXNlcihJZCkge1xuICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmNvbnRhY3RzLmZpbmQoKHUpID0+IHUuSWQgPT09IElkKTtcbiAgICBpZiAodGhpcy5jYXRlZ29yaWVzKSB7XG4gICAgICB0aGlzLm9uUG9wdWxhdGVWYWx1ZSgpO1xuICAgIH1cbiAgfVxuXG5cblxuXG5cbiAgb25BZGROZXdDYXRlZ29yeShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBleHBhbmRNb3JlOiB0cnVlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiXCIsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiXCIsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQWRkTmV3RmllbGQoLi4ucGFyYW1zKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9XG4gICAgICBsZW5ndGggPT09IDFcbiAgICAgICAgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1xuICAgICAgICA6IGxlbmd0aCA9PT0gMlxuICAgICAgICAgID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1xuICAgICAgICAgIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zO1xuICAgIGZvcm1zLnB1c2goe1xuICAgICAgbGFiZWw6IFwiXCIsXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIHNpemU6IDgwLFxuICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIHN1YkxldmVsOiBwYXJhbXMubGVuZ3RoXG4gICAgfSk7XG4gIH1cblxuICBvbkFkZE5ld1N1YkxldmVsRmllbGQoLi4ucGFyYW1zKSB7XG4gICAgY29uc29sZS5sb2cocGFyYW1zLmxlbmd0aCAtIDEpO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9XG4gICAgICBsZW5ndGggPT09IDJcbiAgICAgICAgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dXG4gICAgICAgIDogbGVuZ3RoID09PSAzXG4gICAgICAgICAgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV1cbiAgICAgICAgICA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1tcbiAgICAgICAgICBwYXJhbXNbbGVuZ3RoIC0gMV1cbiAgICAgICAgICBdO1xuICAgIGZvcm1zLmV4cGFuZE1vcmUgPSB0cnVlO1xuICAgIGZvcm1zLmZvcm1zID0gW107XG4gICAgZm9ybXMuZm9ybXMucHVzaCh7XG4gICAgICBsYWJlbDogXCJcIixcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgc2l6ZTogODAsXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgc3ViTGV2ZWw6IHBhcmFtcy5sZW5ndGgsXG4gICAgICBleHBhbmRNb3JlOiB0cnVlXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2codGhpcy5jYXRlZ29yaWVzKTtcbiAgfVxuXG4gIG9uUmVtb3ZlRmllbGQoLi4ucGFyYW1zKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9XG4gICAgICBsZW5ndGggPT09IDJcbiAgICAgICAgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1xuICAgICAgICA6IGxlbmd0aCA9PT0gM1xuICAgICAgICAgID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1xuICAgICAgICAgIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zO1xuICAgIGZvcm1zLnNwbGljZShwYXJhbXNbbGVuZ3RoIC0gMV0sIDEpO1xuICB9XG5cbiAgb25SZW1vdmVDYXRlZ29yeShlLCBpKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2F0ZWdvcmllcy5zcGxpY2UoaSwgMSk7XG4gIH1cblxuICBvbkNoYW5nZUNhdGVnb3J5KCkge1xuICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXMuZXZlcnkoXG4gICAgICAoY2F0KSA9PlxuICAgICAgICBjYXQubmFtZSAhPT0gXCJcIiAmJlxuICAgICAgICBjYXQuZm9ybXMuZXZlcnkoKGZpZWxkKSA9PiBmaWVsZC5sYWJlbCAhPT0gXCJcIiAmJiBmaWVsZC50eXBlICE9PSBcIlwiKVxuICAgICk7XG4gIH1cblxuXG5cbiAgb25DaGFuZ2VUeXBlKHR5cGU6IHN0cmluZywgLi4ucGFyYW1zKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9XG4gICAgICBsZW5ndGggPT09IDJcbiAgICAgICAgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1xuICAgICAgICA6IGxlbmd0aCA9PT0gM1xuICAgICAgICAgID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1xuICAgICAgICAgIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zO1xuICAgIGlmICh0eXBlID09PSBcInNlbGVjdFwiIHx8IHR5cGUgPT09IFwicmFkaW9cIikge1xuICAgICAgZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXS52YWx1ZSA9IFtdO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgIGZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0udmFsdWUgPSBcIlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dLnZhbHVlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb25LZXlQcmVzcyhldmVudDogYW55LCAuLi5wYXJhbXMpIHtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID1cbiAgICAgIGxlbmd0aCA9PT0gMlxuICAgICAgICA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV1cbiAgICAgICAgOiBsZW5ndGggPT09IDNcbiAgICAgICAgICA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXVxuICAgICAgICAgIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW1xuICAgICAgICAgIHBhcmFtc1tsZW5ndGggLSAxXVxuICAgICAgICAgIF07XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCI7XCIpIHtcbiAgICAgIGNvbnN0IGV4aXN0ID0gZm9ybXMudmFsdWUuZmluZChcbiAgICAgICAgKG9wdCkgPT5cbiAgICAgICAgICBvcHQudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoXCI7XCIpWzBdLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgIGZvcm1zLnZhbHVlLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KFwiO1wiKVswXSk7XG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUtleXdvcmQoa2V5d29yZDogc3RyaW5nLCAuLi5wYXJhbXMpIHtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID1cbiAgICAgIGxlbmd0aCA9PT0gMlxuICAgICAgICA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV1cbiAgICAgICAgOiBsZW5ndGggPT09IDNcbiAgICAgICAgICA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXVxuICAgICAgICAgIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW1xuICAgICAgICAgIHBhcmFtc1tsZW5ndGggLSAxXVxuICAgICAgICAgIF07XG4gICAgZm9ybXMudmFsdWUgPSBmb3Jtcy52YWx1ZS5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uICE9PSBrZXl3b3JkKTtcbiAgfVxuXG4gIG9uRXhwZW5kTW9yZShldmVudCwgLi4ucGFyYW1zKSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG5cbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID1cbiAgICAgIGxlbmd0aCA9PT0gMVxuICAgICAgICA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dIDpcbiAgICAgICAgbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6XG4gICAgICAgICAgbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDpcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xuICAgIGZvcm1zLmV4cGFuZE1vcmUgPSAhZm9ybXMuZXhwYW5kTW9yZTtcbiAgfVxuXG4gIGFkZEtleXdvcmRGcm9tSW5wdXQoZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50LCAuLi5wYXJhbXMpIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmlucHV0O1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWU7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9XG4gICAgICBsZW5ndGggPT09IDJcbiAgICAgICAgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dXG4gICAgICAgIDogbGVuZ3RoID09PSAzXG4gICAgICAgICAgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV1cbiAgICAgICAgICA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1tcbiAgICAgICAgICBwYXJhbXNbbGVuZ3RoIC0gMV1cbiAgICAgICAgICBdO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgZXhpc3QgPSBmb3Jtcy52YWx1ZS5maW5kKFxuICAgICAgICAob3B0KSA9PiBvcHQudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gZXZlbnQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIGlmICghZXhpc3QpIHtcbiAgICAgICAgZm9ybXMudmFsdWUucHVzaCh2YWx1ZS50cmltKCkpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XG4gICAgY29uc29sZS5sb2coXCJsb2dcIiwgdGhpcy5jYXRlZ29yaWVzKTtcbiAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KFxuICAgICAgICBldmVudC5jb250YWluZXIuZGF0YSxcbiAgICAgICAgZXZlbnQucHJldmlvdXNJbmRleCxcbiAgICAgICAgZXZlbnQuY3VycmVudEluZGV4XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2ZlckFycmF5SXRlbShcbiAgICAgICAgZXZlbnQucHJldmlvdXNDb250YWluZXIuZGF0YSxcbiAgICAgICAgZXZlbnQuY29udGFpbmVyLmRhdGEsXG4gICAgICAgIGV2ZW50LnByZXZpb3VzSW5kZXgsXG4gICAgICAgIGV2ZW50LmN1cnJlbnRJbmRleFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBpbmdvcmVEZWZhdWx0QWN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxoMz5Ob3V2ZWwgT25ib2FyZGluZzwvaDM+XG4gICAgICAgIDxwIGNsYXNzPVwic3ViLXRpdGxlXCI+Q3LDqWV6IGljaSwgbOKAmW9uYm9hcmRpbmcgZGUgdm90cmUgbm91dmVhdSBjb2xsYWJvcmF0ZXVyLjwvcD5cbiAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJvbmJvYXJkaW5nRm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdC1jb250YWN0XCIgKm5nSWY9XCIhaXNTZWxlY3RlZFwiPlxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgT25ib2FyZGluZyBkZSB2b3RyZSBub3V2ZWF1IGNvbGxhYm9yYXRldXJcbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxwPlPDqWxlY3Rpb25uZXogbGUgbm9tIGRlIHZvdHJlIG5vdXZlYXUgY29sbGFib3JhdGV1ciBhZmluIGRlIHBvdXZvaXIgZMOpbWFycmVyIHNvbiBvbmJvYXJkaW5nLjwvcD5cbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkNvbnRhY3Q8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwiY29udGFjdElkXCIgcmVxdWlyZWQgKHNlbGVjdGlvbkNoYW5nZSk9XCJvblNlbGVjdFVzZXIoJGV2ZW50LnZhbHVlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGNvbnRhY3Qgb2YgY29udGFjdHNcIiBbdmFsdWVdPVwiY29udGFjdC5JZFwiPnt7Y29udGFjdC5OYW1lfX08L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+VGVtcGxhdGU8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwidGVtcGxhdGVJZFwiIHJlcXVpcmVkIChzZWxlY3Rpb25DaGFuZ2UpPVwib25TZWxlY3QoJGV2ZW50LnZhbHVlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHRlbXBsYXRlIG9mIHRlbXBsYXRlc1wiIFt2YWx1ZV09XCJ0ZW1wbGF0ZS5faWRcIj57e3RlbXBsYXRlLk5hbWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiKG9uYm9hcmRpbmdGb3JtLmdldCgnQ29udGFjdElkJyk/LnZhbHVlPT09JycgfHwgb25ib2FyZGluZ0Zvcm0uZ2V0KCd0ZW1wbGF0ZUlkJyk/LnZhbHVlPT0nJykgPyAwLjQgOiAxXCJcbiAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIm9uYm9hcmRpbmdGb3JtLmdldCgnQ29udGFjdElkJyk/LnZhbHVlPT09JycgfHwgb25ib2FyZGluZ0Zvcm0uZ2V0KCd0ZW1wbGF0ZUlkJyk/LnZhbHVlPT0nJ1wiXG4gICAgICAgICAgICAgICAgICAgIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9J29uU2VsZWN0Q29udGFjdFRlbXBsYXRlKCknPlxuICAgICAgICAgICAgICAgICAgICB7e2lkICE9PSBcIjBcIiA/ICdNb2RpZmllciBs4oCZb25ib2FyZGluZycgOidEw6ltYXJyZXIgbOKAmW9uYm9hcmRpbmcnfX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIiAqbmdJZj1cImlzU2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNka0Ryb3BMaXN0R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxpc3QgbXQtMjAgb25ib2FyZGluZy1tYXQtc3RlcHBlclwiICNwYXJlbnRMaXN0PVwiY2RrRHJvcExpc3RcIiBjZGtEcm9wTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJjYXRlZ29yaWVzXCIgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaG9yaXpvbnRhbC1zdGVwcGVyIFtsaW5lYXJdPVwidHJ1ZVwiICNzdGVwcGVyIGxhYmVsUG9zaXRpb249XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXN0ZXAgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiIFtzdGVwQ29udHJvbF09XCJvbmJvYXJkaW5nRm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbF09XCJjYXRlZ29yeS5uYW1lXCIgY2xhc3M9XCJjYXRlZ29yeS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57e2NhdGVnb3J5Lm5hbWV9fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAjY2hpbGRMaXN0PVwiY2RrRHJvcExpc3RcIiAqbmdJZj1cImNhdGVnb3J5LmZvcm1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2RrRHJvcExpc3REYXRhXT1cImNhdGVnb3J5LmZvcm1zXCIgY2RrRHJvcExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBjYXRlZ29yeS5mb3JtcztsZXQgaj1pbmRleFwiIGNka0RyYWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1vbmJvYXJkaW5nIFtmaWVsZF09XCJmaWVsZFwiIFtsZW5ndGhdPVwiY2F0ZWdvcnk/LmZvcm1zPy5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpXT1cImlcIiBbal09XCJqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGRLZXl3b3JkRnJvbUlucHV0KT1cImFkZEtleXdvcmRGcm9tSW5wdXQoJGV2ZW50LmV2ZW50LGksailcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbktleVByZXNzKT1cIm9uS2V5UHJlc3MoJGV2ZW50LmV2ZW50LGksailcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZE5ld0ZpZWxkKT1cIm9uQWRkTmV3RmllbGQoaSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblJlbW92ZUZpZWxkKT1cIm9uUmVtb3ZlRmllbGQoaSxqKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlVHlwZSk9XCJvbkNoYW5nZVR5cGUoZmllbGQudHlwZSxpLGopXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVLZXl3b3JkKT1cInJlbW92ZUtleXdvcmQoJGV2ZW50LmV2ZW50LGksailcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZE5ld1N1YkxldmVsRmllbGQpPVwib25BZGROZXdTdWJMZXZlbEZpZWxkKGksailcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkV4cGVuZE1vcmUpPVwib25FeHBlbmRNb3JlKG51bGwsaSxqKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICNjaGlsZExpc3Q9XCJjZGtEcm9wTGlzdFwiICpuZ0lmPVwiZmllbGQuZm9ybXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJmaWVsZC5mb3Jtc1wiIGNka0Ryb3BMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgZmllbGQuZm9ybXM7bGV0IGs9aW5kZXhcIiBjZGtEcmFnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLW9uYm9hcmRpbmcgW2ZpZWxkXT1cImNoaWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlbmd0aF09XCJmaWVsZD8uZm9ybXM/Lmxlbmd0aFwiIFtpXT1cImpcIiBbal09XCJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkS2V5d29yZEZyb21JbnB1dCk9XCJhZGRLZXl3b3JkRnJvbUlucHV0KCRldmVudC5ldmVudCxpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25LZXlQcmVzcyk9XCJvbktleVByZXNzKCRldmVudC5ldmVudCxpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGROZXdGaWVsZCk9XCJvbkFkZE5ld0ZpZWxkKGksIGopXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlRmllbGQpPVwib25SZW1vdmVGaWVsZChpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VUeXBlKT1cIm9uQ2hhbmdlVHlwZShjaGlsZC50eXBlLGksaixrKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblJlbW92ZUtleXdvcmQpPVwicmVtb3ZlS2V5d29yZCgkZXZlbnQuZXZlbnQsaSxqLGspXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCk9XCJvbkFkZE5ld1N1YkxldmVsRmllbGQoaSxqLGspXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRXhwZW5kTW9yZSk9XCJvbkV4cGVuZE1vcmUobnVsbCxpLGosaylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICNjaGlsZExpc3Q9XCJjZGtEcm9wTGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGlsZC5mb3Jtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJjaGlsZC5mb3Jtc1wiIGNka0Ryb3BMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgYzIgb2YgY2hpbGQuZm9ybXM7bGV0IGw9aW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZGtEcmFnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1vbmJvYXJkaW5nIFtmaWVsZF09XCJjMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVuZ3RoXT1cImNoaWxkPy5mb3Jtcz8ubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpXT1cImtcIiBbal09XCJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZEtleXdvcmRGcm9tSW5wdXQpPVwiYWRkS2V5d29yZEZyb21JbnB1dCgkZXZlbnQuZXZlbnQsaSxqLGssbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uS2V5UHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQuZXZlbnQsaSxqLGssbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3RmllbGQpPVwib25BZGROZXdGaWVsZChpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlRmllbGQpPVwib25SZW1vdmVGaWVsZChpLGosayxsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VUeXBlKT1cIm9uQ2hhbmdlVHlwZShjMi50eXBlLGksaixrLGwpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblJlbW92ZUtleXdvcmQpPVwicmVtb3ZlS2V5d29yZCgkZXZlbnQuZXZlbnQsaSxqLGssbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCk9XCJvbkFkZE5ld1N1YkxldmVsRmllbGQoaSxqLGssbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRXhwZW5kTW9yZSk9XCJvbkV4cGVuZE1vcmUobnVsbCxpLGosayxsKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLW9uYm9hcmRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLW9uYm9hcmRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1zdWItb25ib2FyZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBzdHlsZT1cImZsb2F0OiBsZWZ0O1wiIGNsYXNzPVwibmV4dC1zdGVwXCIgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRTdGVwcGVyUHJldmlvdXM+UHLDqWPDqWRlbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJuZXh0LXN0ZXBcIiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdFN0ZXBwZXJOZXh0PlN1aXZhbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zdGVwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc3RlcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5SZXZpZXc8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+WW91IGFyZSBub3cgZG9uZS48L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPiAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj4gJm5ic3A7ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cIndhcm5cIiAoY2xpY2spPVwic3RlcHBlci5yZXNldCgpXCI+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc3RlcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxuZy10ZW1wbGF0ZSBtYXRTdGVwcGVySWNvbj1cInBob25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+cGhvbmU8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPiAtLT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtaG9yaXpvbnRhbC1zdGVwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbVwiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzOyAgbGV0IGk9aW5kZXhcIiBjZGtEcmFnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3tjYXRlZ29yeS5uYW1lfX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICNjaGlsZExpc3Q9XCJjZGtEcm9wTGlzdFwiICpuZ0lmPVwiY2F0ZWdvcnkuZm9ybXNcIiBbY2RrRHJvcExpc3REYXRhXT1cImNhdGVnb3J5LmZvcm1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNka0Ryb3BMaXN0IChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBjYXRlZ29yeS5mb3JtcztsZXQgaj1pbmRleFwiIGNka0RyYWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLW9uYm9hcmRpbmcgW2ZpZWxkXT1cImZpZWxkXCIgW2xlbmd0aF09XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaV09XCJpXCIgW2pdPVwialwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGRLZXl3b3JkRnJvbUlucHV0KT1cImFkZEtleXdvcmRGcm9tSW5wdXQoJGV2ZW50LmV2ZW50LGksailcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uS2V5UHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQuZXZlbnQsaSxqKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGROZXdGaWVsZCk9XCJvbkFkZE5ld0ZpZWxkKGkpXCIgKG9uUmVtb3ZlRmllbGQpPVwib25SZW1vdmVGaWVsZChpLGopXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoYW5nZVR5cGUpPVwib25DaGFuZ2VUeXBlKGZpZWxkLnR5cGUsaSxqKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVLZXl3b3JkKT1cInJlbW92ZUtleXdvcmQoJGV2ZW50LmV2ZW50LGksailcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCk9XCJvbkFkZE5ld1N1YkxldmVsRmllbGQoaSxqKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25FeHBlbmRNb3JlKT1cIm9uRXhwZW5kTW9yZShudWxsLGksailcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgI2NoaWxkTGlzdD1cImNka0Ryb3BMaXN0XCIgKm5nSWY9XCJmaWVsZC5mb3Jtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjZGtEcm9wTGlzdERhdGFdPVwiZmllbGQuZm9ybXNcIiBjZGtEcm9wTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIiAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgZmllbGQuZm9ybXM7bGV0IGs9aW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2RrRHJhZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLW9uYm9hcmRpbmcgW2ZpZWxkXT1cImNoaWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVuZ3RoXT1cImZpZWxkPy5mb3Jtcz8ubGVuZ3RoXCIgW2ldPVwialwiIFtqXT1cImtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZEtleXdvcmRGcm9tSW5wdXQpPVwiYWRkS2V5d29yZEZyb21JbnB1dCgkZXZlbnQuZXZlbnQsaSxqLGspXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25LZXlQcmVzcyk9XCJvbktleVByZXNzKCRldmVudC5ldmVudCxpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZE5ld0ZpZWxkKT1cIm9uQWRkTmV3RmllbGQoaSwgailcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblJlbW92ZUZpZWxkKT1cIm9uUmVtb3ZlRmllbGQoaSxqLGspXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VUeXBlKT1cIm9uQ2hhbmdlVHlwZShjaGlsZC50eXBlLGksaixrKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlS2V5d29yZCk9XCJyZW1vdmVLZXl3b3JkKCRldmVudC5ldmVudCxpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZE5ld1N1YkxldmVsRmllbGQpPVwib25BZGROZXdTdWJMZXZlbEZpZWxkKGksaixrKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRXhwZW5kTW9yZSk9XCJvbkV4cGVuZE1vcmUobnVsbCxpLGosaylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAjY2hpbGRMaXN0PVwiY2RrRHJvcExpc3RcIiAqbmdJZj1cImNoaWxkLmZvcm1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjZGtEcm9wTGlzdERhdGFdPVwiY2hpbGQuZm9ybXNcIiBjZGtEcm9wTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGMyIG9mIGNoaWxkLmZvcm1zO2xldCBsPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZGtEcmFnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLW9uYm9hcmRpbmcgW2ZpZWxkXT1cImMyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlbmd0aF09XCJjaGlsZD8uZm9ybXM/Lmxlbmd0aFwiIFtpXT1cImtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbal09XCJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkS2V5d29yZEZyb21JbnB1dCk9XCJhZGRLZXl3b3JkRnJvbUlucHV0KCRldmVudC5ldmVudCxpLGosayxsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbktleVByZXNzKT1cIm9uS2V5UHJlc3MoJGV2ZW50LmV2ZW50LGksaixrLGwpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3RmllbGQpPVwib25BZGROZXdGaWVsZChpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVGaWVsZCk9XCJvblJlbW92ZUZpZWxkKGksaixrLGwpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlVHlwZSk9XCJvbkNoYW5nZVR5cGUoYzIudHlwZSxpLGosayxsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblJlbW92ZUtleXdvcmQpPVwicmVtb3ZlS2V5d29yZCgkZXZlbnQuZXZlbnQsaSxqLGssbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGROZXdTdWJMZXZlbEZpZWxkKT1cIm9uQWRkTmV3U3ViTGV2ZWxGaWVsZChpLGosayxsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkV4cGVuZE1vcmUpPVwib25FeHBlbmRNb3JlKG51bGwsaSxqLGssbClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1vbmJvYXJkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLW9uYm9hcmRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1vbmJvYXJkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJhY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiW3NlcnZpY2UubWFpblBhdGhdXCIgcm9sZT1cImJ1dHRvblwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwiYmFzaWNcIj5MaXN0ZSBkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uYm9hcmRpbmc8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJiYXNpY1wiIHR5cGU9XCJzdWJtaXRcIj5WYWxpZGVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuPC9kaXY+Il19