import { Component, HostListener, ViewChild } from "@angular/core";
import { DialogCreateTemplateComponent } from "../../components/template/dialog-create-template/dialog-create-template.component";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import * as i0 from "@angular/core";
import * as i1 from "../../onboarding.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/select";
import * as i9 from "@angular/forms";
import * as i10 from "ngx-intl-tel-input";
import * as i11 from "@angular/material/core";
import * as i12 from "@angular/material/input";
import * as i13 from "@angular/material/datepicker";
import * as i14 from "../../directives/elevation";
import * as i15 from "@angular/material/slide-toggle";
import * as i16 from "@nicky-lenaers/ngx-scroll-to";
import * as i17 from "../../components/loading/loading.component";
import * as i18 from "../../components/template/no-data/no-data.component";
function TemplateProfileListComponent_div_1_mat_icon_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "arrow_downward");
    i0.ɵɵelementEnd();
} }
function TemplateProfileListComponent_div_1_mat_icon_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "arrow_upward");
    i0.ɵɵelementEnd();
} }
function TemplateProfileListComponent_div_1_section_44_lib_loading_page_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function TemplateProfileListComponent_div_1_section_44_mat_icon_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "filter_none");
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return [a0]; };
function TemplateProfileListComponent_div_1_section_44_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 28)(1, "div", 29)(2, "span");
    i0.ɵɵtext(3, "Live");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-slide-toggle", 30);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_section_44_Template_mat_slide_toggle_ngModelChange_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r13); const d_r8 = restoredCtx.$implicit; return d_r8.Status = $event; })("ngModelChange", function TemplateProfileListComponent_div_1_section_44_Template_mat_slide_toggle_ngModelChange_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const d_r8 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.onChangeStatus(d_r8, false); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 31)(6, "p", 32);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 33);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 34)(12, "button", 35);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_section_44_Template_button_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const d_r8 = restoredCtx.$implicit; const ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.onEditProfil(d_r8._id); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "button", 36);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_section_44_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const d_r8 = restoredCtx.$implicit; const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.copyTemplate(d_r8); });
    i0.ɵɵtemplate(16, TemplateProfileListComponent_div_1_section_44_lib_loading_page_16_Template, 1, 0, "lib-loading-page", 20);
    i0.ɵɵtemplate(17, TemplateProfileListComponent_div_1_section_44_mat_icon_17_Template, 2, 0, "mat-icon", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 35);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_section_44_Template_button_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const d_r8 = restoredCtx.$implicit; const ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.onDelete(d_r8._id); });
    i0.ɵɵelementStart(19, "mat-icon");
    i0.ɵɵtext(20, "delete");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const d_r8 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("defaultElevation", 0)("id", d_r8.Name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", d_r8.Status);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(12, _c0, ctx_r6.service.mainPath + "/template/" + d_r8._id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", d_r8.Name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 9, d_r8.createdAt, "dd/MM/yy"), "");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngxScrollTo", ctx_r6.toTemplateCopyId);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.loading && ctx_r6.cpId === d_r8._id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r6.loading || ctx_r6.cpId !== d_r8._id);
} }
function TemplateProfileListComponent_div_1_div_46_lib_loading_page_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function TemplateProfileListComponent_div_1_div_46_mat_icon_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "filter_none");
    i0.ɵɵelementEnd();
} }
function TemplateProfileListComponent_div_1_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37)(1, "div", 38)(2, "span");
    i0.ɵɵtext(3, "Brouillon");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-slide-toggle", 39);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_div_46_Template_mat_slide_toggle_ngModelChange_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r23); const d_r18 = restoredCtx.$implicit; return d_r18.Status = $event; })("ngModelChange", function TemplateProfileListComponent_div_1_div_46_Template_mat_slide_toggle_ngModelChange_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r23); const d_r18 = restoredCtx.$implicit; const ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.onChangeStatus(d_r18, true); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 31)(6, "p", 32);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 33);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 34)(12, "button", 35);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_div_46_Template_button_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r23); const d_r18 = restoredCtx.$implicit; const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.onEditProfil(d_r18._id); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "button", 35);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_div_46_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r23); const d_r18 = restoredCtx.$implicit; const ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.copyTemplate(d_r18); });
    i0.ɵɵtemplate(16, TemplateProfileListComponent_div_1_div_46_lib_loading_page_16_Template, 1, 0, "lib-loading-page", 20);
    i0.ɵɵtemplate(17, TemplateProfileListComponent_div_1_div_46_mat_icon_17_Template, 2, 0, "mat-icon", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 35);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_div_46_Template_button_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r23); const d_r18 = restoredCtx.$implicit; const ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.onDelete(d_r18._id); });
    i0.ɵɵelementStart(19, "mat-icon");
    i0.ɵɵtext(20, "delete");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const d_r18 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("defaultElevation", 0);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", d_r18.Status);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(10, _c0, ctx_r7.service.mainPath + "/template/" + d_r18._id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", d_r18.Name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 7, d_r18.createdAt, "dd/MM/yy"), "");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r7.loading && ctx_r7.cpId === d_r18._id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r7.loading || ctx_r7.cpId !== d_r18._id);
} }
function TemplateProfileListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 6);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.openDialog(); });
    i0.ɵɵtext(6, " Cr\u00E9er profil ");
    i0.ɵɵelementStart(7, "mat-icon");
    i0.ɵɵtext(8, "add");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 7)(10, "ul")(11, "li", 8)(12, "mat-form-field", 9)(13, "mat-select", 10);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_Template_mat_select_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.filterData.Status = $event; })("ngModelChange", function TemplateProfileListComponent_div_1_Template_mat_select_ngModelChange_13_listener() { i0.ɵɵrestoreView(_r29); const ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.onFilterTemplate(); });
    i0.ɵɵelementStart(14, "mat-option", 11);
    i0.ɵɵtext(15, " Tout");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "mat-option", 12);
    i0.ɵɵtext(17, " Publi\u00E9s");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "mat-option", 13);
    i0.ɵɵtext(19, " Brouillons");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(20, "li", 8)(21, "mat-form-field", 9)(22, "input", 14);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.filterData.start_date = $event; })("ngModelChange", function TemplateProfileListComponent_div_1_Template_input_ngModelChange_22_listener() { i0.ɵɵrestoreView(_r29); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.onFilterTemplate(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(23, "mat-datepicker-toggle", 15)(24, "mat-datepicker", null, 16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "li", 8)(27, "mat-form-field", 9)(28, "input", 17);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_Template_input_ngModelChange_28_listener() { i0.ɵɵrestoreView(_r29); const ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.onFilterTemplate(); })("ngModelChange", function TemplateProfileListComponent_div_1_Template_input_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.filterData.end_date = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(29, "mat-datepicker-toggle", 15)(30, "mat-datepicker", null, 18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "li", 8)(33, "div", 19);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_Template_div_click_33_listener() { i0.ɵɵrestoreView(_r29); const ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.onSort(); });
    i0.ɵɵelementStart(34, "span");
    i0.ɵɵtext(35, "Nom");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(36, TemplateProfileListComponent_div_1_mat_icon_36_Template, 2, 0, "mat-icon", 20);
    i0.ɵɵtemplate(37, TemplateProfileListComponent_div_1_mat_icon_37_Template, 2, 0, "mat-icon", 20);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(38, "div", 8)(39, "mat-form-field", 21)(40, "mat-icon", 22);
    i0.ɵɵtext(41, "search");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "input", 23);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_Template_input_ngModelChange_42_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.filterData.searchText = $event; })("ngModelChange", function TemplateProfileListComponent_div_1_Template_input_ngModelChange_42_listener() { i0.ɵɵrestoreView(_r29); const ctx_r38 = i0.ɵɵnextContext(); return ctx_r38.onFilterTemplate(); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(43, "div", 24);
    i0.ɵɵlistener("scroll", function TemplateProfileListComponent_div_1_Template_div_scroll_43_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.onScroll($event); });
    i0.ɵɵtemplate(44, TemplateProfileListComponent_div_1_section_44_Template, 21, 14, "section", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "div", 26);
    i0.ɵɵtemplate(46, TemplateProfileListComponent_div_1_div_46_Template, 21, 12, "div", 27);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const _r2 = i0.ɵɵreference(25);
    const _r3 = i0.ɵɵreference(31);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Profils (", ctx_r0.datas.length, ")");
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngModel", ctx_r0.filterData.Status);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("matDatepicker", _r2)("max", ctx_r0.filterData.end_date)("ngModel", ctx_r0.filterData.start_date);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", _r2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("matDatepicker", _r3)("min", ctx_r0.filterData.start_date)("ngModel", ctx_r0.filterData.end_date);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", _r3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r0.filterData.sortNameAsc);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.filterData.sortNameAsc);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r0.filterData.searchText);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.publishTemplate);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.draftTemplate);
} }
function TemplateProfileListComponent_lib_no_data_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "lib-no-data", 40);
    i0.ɵɵlistener("showPopup", function TemplateProfileListComponent_lib_no_data_2_Template_lib_no_data_showPopup_0_listener() { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.openDialog(); });
    i0.ɵɵelementEnd();
} }
export class TemplateProfileListComponent {
    constructor(service, router, dialog) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ["Name", "vcontacts", "createdAt", "updatedAt", "action"];
        this.datas = [];
        this.publishTemplate = [];
        this.draftTemplate = [];
        this.dataSource = new MatTableDataSource([]);
        this.defaultElevation = 2;
        this.raisedElevation = 8;
        this.loading = false;
        this.cpId = null;
        this.filterData = {
            Status: null,
            sortNameAsc: true,
            start_date: null,
            end_date: null,
            searchText: '',
            service: ''
        };
        this.toTemplateCopyId = "";
        this.currentFilter = "all";
        this.tags = [];
        this.service.templates.subscribe((templates) => {
            if (templates && templates.length > 0) {
                this.datas = templates;
            }
        });
    }
    async ngOnInit() {
        setTimeout(async () => {
            await this.getAllProfils();
            this.tags = await this.service.getAllTags();
        }, 500);
    }
    onScroll(event) {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll(".live-template .box-template");
        console.log('------------WWWWWWWWWWWWW------------------', navLi);
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (event.target.scrollTop > sectionTop) {
                current = section.getAttribute("id");
            }
        });
        navLi.forEach((li) => {
            const id = li.getAttribute('id');
            li.classList.add("blink");
            if (id.substring(0, id.length - 1) === current) {
                li.classList.add("blink");
            }
            else {
                li.classList.remove('blink');
            }
        });
    }
    onAddProfil() {
        this.router.navigate(["onboarding/template/0"]);
    }
    onEditProfil(id) {
        this.router.navigate(["onboarding/template/", id]);
    }
    async onChangeStatus(data, Status) {
        const result = await this.service.updateProfil({ ...data, Status });
        this.publishTemplate = this.datas.filter((d) => d.Status === true);
        this.draftTemplate = this.datas.filter((d) => d.Status === false);
        if (result) {
            await this.getAllProfils();
        }
        else {
            console.log("errror......");
        }
    }
    async onDelete(id) {
        this.loading = true;
        if (confirm("Voulez vous supprimer cette template ?")) {
            const result = await this.service.deleteProfil(id);
            if (result) {
                await this.getAllProfils();
                this.loading = false;
            }
        }
    }
    async getAllProfils() {
        const profile = await this.service.getAllProfil();
        this.datas = profile;
        this.publishTemplate = this.datas.filter((d) => d.Status === true);
        this.draftTemplate = this.datas.filter((d) => d.Status === false);
        this.publishTemplateLength = this.publishTemplate.length;
        this.draftTemplateLength = this.draftTemplate.length;
    }
    onFilterTemplate() {
        const dataToFilter = this.filterData.searchText !== '' ? this.datas.filter((d) => d.Name.toLowerCase().search(this.filterData.searchText.toLocaleLowerCase()) > -1) : this.datas;
        if (this.filterData.Status === "all") {
            this.publishTemplate = dataToFilter.filter((d) => d.Status === true);
            this.draftTemplate = dataToFilter.filter((d) => d.Status === false);
        }
        else if (this.filterData.Status === 'publish') {
            this.publishTemplate = dataToFilter.filter((d) => d.Status === true);
            this.draftTemplate = [];
        }
        else if (this.filterData.Status === 'draft') {
            this.publishTemplate = [];
            this.draftTemplate = dataToFilter.filter((d) => d.Status === false);
        }
        if (this.filterData.start_date) {
            this.publishTemplate = this.publishTemplate.filter((data) => new Date(data.createdAt).getTime() >= new Date(this.filterData.start_date).getTime());
            this.draftTemplate = this.draftTemplate.filter((data) => new Date(data.createdAt).getTime() >= new Date(this.filterData.start_date).getTime());
        }
        if (this.filterData.end_date) {
            this.publishTemplate = this.publishTemplate.filter((data) => new Date(data.createdAt).getTime() <= new Date(this.filterData.end_date).getTime());
            this.draftTemplate = this.draftTemplate.filter((data) => new Date(data.createdAt).getTime() <= new Date(this.filterData.end_date).getTime());
        }
        this.publishTemplate.sort((a, b) => this.filterData.sortNameAsc ? (b.Name.toLowerCase() > a.Name.toLowerCase() ? 1 : -1) : (b.Name.toLowerCase() > a.Name.toLowerCase() ? -1 : 1));
        this.draftTemplate.sort((a, b) => this.filterData.sortNameAsc ? (b.Name.toLowerCase() > a.Name.toLowerCase() ? 1 : -1) : (b.Name.toLowerCase() > a.Name.toLowerCase() ? -1 : 1));
    }
    onSort() {
        this.filterData.sortNameAsc = !this.filterData.sortNameAsc;
        this.onFilterTemplate();
    }
    async copyTemplate(data) {
        this.loading = true;
        this.cpId = data._id;
        const { _id, ...rest } = data;
        const copyName = data.Name + " - copie";
        const result = await this.service.createProfil({ ...rest, Name: copyName });
        this.toTemplateCopyId = `#${copyName}`;
        if (result) {
            this.onEditProfil(result._id);
            this.cpId = null;
        }
        else {
            console.log("errror......");
        }
        this.loading = false;
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogCreateTemplateComponent, {
            data: {
                tags: this.tags,
            }
        });
        dialogRef.afterClosed().subscribe((current) => {
            if (current) {
                this.service.currentTemplate.next(current);
                this.router.navigate([this.service.mainPath + '/template/0']);
            }
        });
    }
}
TemplateProfileListComponent.ɵfac = function TemplateProfileListComponent_Factory(t) { return new (t || TemplateProfileListComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.MatDialog)); };
TemplateProfileListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TemplateProfileListComponent, selectors: [["onboarding-profile-list"]], viewQuery: function TemplateProfileListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatPaginator, 5);
        i0.ɵɵviewQuery(MatSort, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, hostBindings: function TemplateProfileListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("scroll", function TemplateProfileListComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } }, decls: 3, vars: 2, consts: [[1, "main"], ["class", "content-list", 4, "ngIf"], [3, "showPopup", 4, "ngIf"], [1, "content-list"], [1, "list"], [1, "header-top"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "click"], [1, "list-title"], [1, "filter-item"], ["appearance", "text"], [3, "ngModel", "ngModelChange"], ["value", "all"], ["value", "publish"], ["value", "draft"], ["matInput", "", "placeholder", "Date minimum", 3, "matDatepicker", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["pickerMin", ""], ["matInput", "", "placeholder", "Date maximum", 3, "matDatepicker", "min", "ngModel", "ngModelChange"], ["pickerMax", ""], [1, "filter-item-inner", 3, "click"], [4, "ngIf"], ["appearance", "text", 1, "search-text"], ["matPrefix", "", 2, "margin-left", "5px"], ["matInput", "", "placeholder", "Recherche...", "type", "search", 3, "ngModel", "ngModelChange"], [1, "live-template", 3, "scroll"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", "id", 4, "ngFor", "ngForOf"], [1, "draft-template"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation", "id"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelChange"], [1, "box-content", 3, "routerLink"], [1, "template-title"], [1, "template-date"], [1, "template-footer"], [1, "action-button", 2, "background-color", "transparent", 3, "click"], [1, "action-button", 2, "background-color", "transparent", 3, "ngxScrollTo", "click"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation"], [1, "toogle-button", "draft"], [1, "draft", 3, "ngModel", "ngModelChange"], [3, "showPopup"]], template: function TemplateProfileListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, TemplateProfileListComponent_div_1_Template, 47, 15, "div", 1);
        i0.ɵɵtemplate(2, TemplateProfileListComponent_lib_no_data_2_Template, 1, 0, "lib-no-data", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.datas && ctx.datas.length !== 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.datas.length === 0);
    } }, directives: [i4.NgIf, i5.MatAnchor, i6.MatIcon, i7.MatFormField, i8.MatSelect, i9.NgControlStatus, i9.NgModel, i10.NativeElementInjectorDirective, i11.MatOption, i12.MatInput, i13.MatDatepickerInput, i9.DefaultValueAccessor, i13.MatDatepickerToggle, i7.MatSuffix, i13.MatDatepicker, i7.MatPrefix, i4.NgForOf, i14.MaterialElevationDirective, i15.MatSlideToggle, i2.RouterLink, i16.ScrollToDirective, i17.LoadingPageComponent, i18.NoDataComponent], pipes: [i4.DatePipe], styles: [".main[_ngcontent-%COMP%]{background:#f4f7f9 0% 0% no-repeat padding-box;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font: 700 23px/30px Nexa Text;letter-spacing:0px;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font: 20px/26px Nexa Text;letter-spacing:0px;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-title[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-date[_ngcontent-%COMP%]{font-family:Nexa;font-weight:250;font-size:14px;line-height:120%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:10px;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{margin-right:50px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .draft-template[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .live-template[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:266px;height:300px;position:relative;margin-right:50px;margin-bottom:50px;background:#ffffff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#171f26 0% 0% no-repeat padding-box;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;text-align:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:#ffffff 0% 0% no-repeat padding-box;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-family:Nexa;font-style:normal;font-size:18px;line-height:18px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button.draft[_ngcontent-%COMP%]{color:#f3a124}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{background-color:#171f26}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]{background:#543cb6;border-radius:0 0 5px 5px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]   button.action-button[_ngcontent-%COMP%]{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}.blink[_ngcontent-%COMP%]{animation:blink 2s ease-out;border:2px solid red;border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}  .filter-item{display:flex;align-items:center}  .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}  .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}to{transform:scale(1);opacity:1}}.header-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TemplateProfileListComponent, [{
        type: Component,
        args: [{ selector: "onboarding-profile-list", template: "<div class=\"main\">\r\n    <div class=\"content-list\" *ngIf=\"datas && datas.length!==0\">\r\n        <div class=\"list\">\r\n            <div class=\"header-top\">\r\n                <h2>Profils ({{datas.length}})</h2>\r\n                <a role=\"button\" class=\"add-profil\" (click)=\"openDialog()\" mat-raised-button color=\"primary\">\r\n                    Cr\u00E9er profil <mat-icon>add</mat-icon>\r\n                </a>\r\n            </div>\r\n            <div class=\"list-title\">\r\n                <ul>\r\n                    <li class=\"filter-item\">\r\n                        <mat-form-field appearance=\"text\">\r\n                            <mat-select [(ngModel)]=\"filterData.Status\" (ngModelChange)=\"onFilterTemplate()\">\r\n                                <mat-option value=\"all\"> Tout</mat-option>\r\n                                <mat-option value=\"publish\"> Publi\u00E9s</mat-option>\r\n                                <mat-option value=\"draft\"> Brouillons</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </li>\r\n                    <li class=\"filter-item\">\r\n                        <mat-form-field appearance=\"text\">\r\n                            <input matInput placeholder=\"Date minimum\" [matDatepicker]=\"pickerMin\"\r\n                                [max]=\"filterData.end_date\" [(ngModel)]=\"filterData.start_date\"\r\n                                (ngModelChange)=\"onFilterTemplate()\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"pickerMin\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #pickerMin></mat-datepicker>\r\n                        </mat-form-field>\r\n                    </li>\r\n                    <li class=\"filter-item\">\r\n                        <mat-form-field appearance=\"text\">\r\n                            <input matInput [matDatepicker]=\"pickerMax\" (ngModelChange)=\"onFilterTemplate()\"\r\n                                placeholder=\"Date maximum\" [min]=\"filterData.start_date\"\r\n                                [(ngModel)]=\"filterData.end_date\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"pickerMax\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #pickerMax></mat-datepicker>\r\n                        </mat-form-field>\r\n                    </li>\r\n                    <li class=\"filter-item\">\r\n                        <div class=\"filter-item-inner\" (click)=\"onSort()\">\r\n                            <span>Nom</span>\r\n                            <mat-icon *ngIf=\"filterData.sortNameAsc\">arrow_downward</mat-icon>\r\n                            <mat-icon *ngIf=\"!filterData.sortNameAsc\">arrow_upward</mat-icon>\r\n                        </div>\r\n                    </li>\r\n\r\n                </ul>\r\n                <div class=\"filter-item\">\r\n                    <mat-form-field class=\"search-text\" appearance=\"text\">\r\n                        <mat-icon matPrefix style=\"margin-left: 5px;\">search</mat-icon>\r\n                        <input matInput placeholder=\"Recherche...\" type=\"search\" [(ngModel)]=\"filterData.searchText\"\r\n                            (ngModelChange)=\"onFilterTemplate()\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <div class=\"live-template\" (scroll)=\"onScroll($event)\">\r\n                <section appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\r\n                    *ngFor=\"let d of publishTemplate;let index=index\" [id]=\"d.Name\">\r\n                    <div class=\"toogle-button\"><span>Live</span>\r\n                        <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"d.Status\"\r\n                            (ngModelChange)=\"onChangeStatus(d,false)\">\r\n                        </mat-slide-toggle>\r\n                    </div>\r\n                    <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\r\n                        <p class=\"template-title\"> {{d.Name}}</p>\r\n                        <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\r\n                    </div>\r\n\r\n                    <div class=\"template-footer\">\r\n                        <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                            (click)=\"onEditProfil(d._id)\">\r\n                            <mat-icon>edit</mat-icon>\r\n                        </button>\r\n                        <button class=\"action-button\" style=\"background-color: transparent;\" (click)=\"copyTemplate(d)\"\r\n                            [ngxScrollTo]=\"toTemplateCopyId\">\r\n                            <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\r\n                            <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\r\n                        </button>\r\n                        <button class=\"action-button\" style=\"background-color: transparent;\" (click)=\"onDelete(d._id)\">\r\n                            <mat-icon>delete</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                </section>\r\n            </div>\r\n            <div class=\"draft-template\">\r\n                <div appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\r\n                    *ngFor=\"let d of draftTemplate;let index=index\">\r\n                    <div class=\"toogle-button draft\"><span>Brouillon</span>\r\n                        <mat-slide-toggle class=\"draft\" [(ngModel)]=\"d.Status\" (ngModelChange)=\"onChangeStatus(d,true)\">\r\n                        </mat-slide-toggle>\r\n                    </div>\r\n                    <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\r\n                        <p class=\"template-title\"> {{d.Name}}</p>\r\n                        <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\r\n                    </div>\r\n\r\n                    <div class=\"template-footer\">\r\n                        <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                            (click)=\"onEditProfil(d._id)\">\r\n                            <mat-icon>edit</mat-icon>\r\n                        </button>\r\n                        <button class=\"action-button\" style=\"background-color: transparent;\" (click)=\"copyTemplate(d)\">\r\n                            <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\r\n                            <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\r\n                        </button>\r\n                        <button class=\"action-button\" style=\"background-color: transparent;\" (click)=\"onDelete(d._id)\">\r\n                            <mat-icon>delete</mat-icon>\r\n                        </button>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <lib-no-data *ngIf=\"datas.length===0\" (showPopup)=\"openDialog()\"></lib-no-data>\r\n</div>", styles: [".main{background:#f4f7f9 0% 0% no-repeat padding-box;opacity:1;height:100%}.main .content-list{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main .content-list h3{text-align:left;font: 700 23px/30px Nexa Text;letter-spacing:0px;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main .content-list p.sub-title{margin-bottom:57px;font: 20px/26px Nexa Text;letter-spacing:0px;color:#171f26;width:300px}.main .content-list .template-title{font-family:Nexa;font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main .content-list .template-date{font-family:Nexa;font-weight:250;font-size:14px;line-height:120%}.main .content-list .list .list-title{font-family:Nexa;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.main .content-list .list .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0}.main .content-list .list .list-title ul li{margin-right:20px;padding-bottom:10px;cursor:pointer}.main .content-list .list .list-title ul li.active{border-bottom:4px solid #3c4252}.main .content-list .list .list-title .add-profil{margin-right:50px}.main .content-list .list .draft-template,.main .content-list .list .live-template{display:flex;flex-wrap:wrap;justify-content:flex-start}.main .content-list .list .box-template{width:266px;height:300px;position:relative;margin-right:50px;margin-bottom:50px;background:#ffffff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main .content-list .list .box-template img{width:81px;height:81px}.main .content-list .list .box-template a{background:#171f26 0% 0% no-repeat padding-box;border-radius:7px;font-size:15px}.main .content-list .list .box-template .box-content{width:100%;text-align:center}.main .content-list .list .box-template .box-content .picto-preview{width:113px;height:113px;background:#ffffff 0% 0% no-repeat padding-box;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main .content-list .list .box-template .box-content .picto-preview h3{font-size:40px;color:#dce4e9}.main .content-list .list .box-template .toogle-button{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-family:Nexa;font-style:normal;font-size:18px;line-height:18px}.main .content-list .list .box-template .toogle-button span{padding-right:10px}.main .content-list .list .box-template .toogle-button.draft{color:#f3a124}.main .content-list .list .new-template{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main .content-list .list .add-profil{background-color:#171f26}.main .content-list .template-footer{background:#543cb6;border-radius:0 0 5px 5px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main .content-list .template-footer button.action-button{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}.blink{animation:blink 2s ease-out;border:2px solid red;border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}to{transform:scale(1);opacity:1}}.header-top{display:flex;align-items:center;justify-content:space-between}\n"] }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }, { type: i3.MatDialog }]; }, { paginator: [{
            type: ViewChild,
            args: [MatPaginator]
        }], sort: [{
            type: ViewChild,
            args: [MatSort]
        }], onScroll: [{
            type: HostListener,
            args: ['scroll', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWxpc3QvdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWxpc3QvdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFFbEksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbUNqQyxnQ0FBeUM7SUFBQSw4QkFBYztJQUFBLGlCQUFXOzs7SUFDbEUsZ0NBQTBDO0lBQUEsNEJBQVk7SUFBQSxpQkFBVzs7O0lBaUNqRSxtQ0FBcUU7OztJQUNyRSxnQ0FBMkM7SUFBQSwyQkFBVztJQUFBLGlCQUFXOzs7OztJQXBCN0UsbUNBQ29FLGNBQUEsV0FBQTtJQUMvQixvQkFBSTtJQUFBLGlCQUFPO0lBQ3hDLDRDQUM4QztJQURaLGtRQUFzQiw0UEFDbkMsNkJBQWlCLEtBQUssQ0FBQyxJQURZO0lBRXhELGlCQUFtQixFQUFBO0lBRXZCLCtCQUFtRixZQUFBO0lBQ3BELFlBQVU7SUFBQSxpQkFBSTtJQUN6Qyw2QkFBeUI7SUFBQyxZQUFr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RyxLQUFLLENBQUE7SUFFdEIsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRTtZQUNoRSxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2FBQ2hCO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQVksRUFBRSxFQUFFO1lBQ2pELElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFBO2FBQzlEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzt3R0FyS1UsNEJBQTRCOytFQUE1Qiw0QkFBNEI7dUJBcUI1QixZQUFZO3VCQUNaLE9BQU87Ozs7OztpSEF0QlAsb0JBQWdCOztRQ2Y3Qiw4QkFBa0I7UUFDZCwrRUFnSE07UUFDTiw2RkFBK0U7UUFDbkYsaUJBQU07O1FBbEh5QixlQUErQjtRQUEvQiwwREFBK0I7UUFpSDVDLGVBQXNCO1FBQXRCLDZDQUFzQjs7dUZEbkczQiw0QkFBNEI7Y0FMeEMsU0FBUzsyQkFDRSx5QkFBeUI7aUhBeUJWLFNBQVM7a0JBQWpDLFNBQVM7bUJBQUMsWUFBWTtZQUNILElBQUk7a0JBQXZCLFNBQVM7bUJBQUMsT0FBTztZQW9CbEIsUUFBUTtrQkFEUCxZQUFZO21CQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dDcmVhdGVUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlbXBsYXRlL2RpYWxvZy1jcmVhdGUtdGVtcGxhdGUvZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xyXG5pbXBvcnQgeyBNYXRQYWdpbmF0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XHJcbmltcG9ydCB7IE1hdFNvcnQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xyXG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGVcIjtcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm9uYm9hcmRpbmctcHJvZmlsZS1saXN0XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi90ZW1wbGF0ZS1wcm9maWxlLWxpc3QuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5zY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQcm9maWxlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZGlzcGxheWVkQ29sdW1ucyA9IFtcIk5hbWVcIiwgXCJ2Y29udGFjdHNcIiwgXCJjcmVhdGVkQXRcIiwgXCJ1cGRhdGVkQXRcIiwgXCJhY3Rpb25cIl07XHJcbiAgZGF0YXM6IGFueSA9IFtdO1xyXG4gIHB1Ymxpc2hUZW1wbGF0ZTogYW55ID0gW107XHJcbiAgZHJhZnRUZW1wbGF0ZTogYW55ID0gW107XHJcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55PihbXSk7XHJcbiAgZGVmYXVsdEVsZXZhdGlvbiA9IDI7XHJcbiAgcmFpc2VkRWxldmF0aW9uID0gODtcclxuICBsb2FkaW5nID0gZmFsc2U7XHJcbiAgY3BJZCA9IG51bGw7XHJcbiAgZmlsdGVyRGF0YSA9IHtcclxuICAgIFN0YXR1czogbnVsbCxcclxuICAgIHNvcnROYW1lQXNjOiB0cnVlLFxyXG4gICAgc3RhcnRfZGF0ZTogbnVsbCxcclxuICAgIGVuZF9kYXRlOiBudWxsLFxyXG4gICAgc2VhcmNoVGV4dDogJycsXHJcbiAgICBzZXJ2aWNlOiAnJ1xyXG4gIH1cclxuXHJcbiAgdG9UZW1wbGF0ZUNvcHlJZCA9IFwiXCJcclxuICBjdXJyZW50RmlsdGVyID0gXCJhbGxcIlxyXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcclxuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XHJcbiAgcHVibGlzaFRlbXBsYXRlTGVuZ3RoOiBhbnk7XHJcbiAgZHJhZnRUZW1wbGF0ZUxlbmd0aDogYW55O1xyXG4gIHRhZ3MgPSBbXVxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlLnRlbXBsYXRlcy5zdWJzY3JpYmUoKHRlbXBsYXRlczogYW55KSA9PiB7XHJcbiAgICAgIGlmICh0ZW1wbGF0ZXMgJiYgdGVtcGxhdGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLmRhdGFzID0gdGVtcGxhdGVzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCkge1xyXG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IHRoaXMuZ2V0QWxsUHJvZmlscygpO1xyXG4gICAgICB0aGlzLnRhZ3MgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsVGFncygpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcsIFsnJGV2ZW50J10pXHJcbiAgb25TY3JvbGwoZXZlbnQpIHtcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIik7XHJcbiAgICBjb25zdCBuYXZMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGl2ZS10ZW1wbGF0ZSAuYm94LXRlbXBsYXRlXCIpO1xyXG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLVdXV1dXV1dXV1dXV1ctLS0tLS0tLS0tLS0tLS0tLS0nLCBuYXZMaSk7XHJcbiAgICBsZXQgY3VycmVudCA9IFwiXCI7XHJcbiAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlY3Rpb25Ub3AgPSBzZWN0aW9uLm9mZnNldFRvcDtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5zY3JvbGxUb3AgPiBzZWN0aW9uVG9wKSB7XHJcbiAgICAgICAgY3VycmVudCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKFwiaWRcIilcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBuYXZMaS5mb3JFYWNoKChsaSkgPT4ge1xyXG5cclxuXHJcbiAgICAgIGNvbnN0IGlkID0gbGkuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYmxpbmtcIik7XHJcbiAgICAgIGlmIChpZC5zdWJzdHJpbmcoMCwgaWQubGVuZ3RoIC0gMSkgPT09IGN1cnJlbnQpIHtcclxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYmxpbmtcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnYmxpbmsnKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQWRkUHJvZmlsKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib25ib2FyZGluZy90ZW1wbGF0ZS8wXCJdKTtcclxuICB9XHJcblxyXG4gIG9uRWRpdFByb2ZpbChpZCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib25ib2FyZGluZy90ZW1wbGF0ZS9cIiwgaWRdKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uQ2hhbmdlU3RhdHVzKGRhdGEsIFN0YXR1cykge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZVByb2ZpbCh7IC4uLmRhdGEsIFN0YXR1cyB9KTtcclxuICAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSB0cnVlKTtcclxuICAgIHRoaXMuZHJhZnRUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gZmFsc2UpO1xyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBhd2FpdCB0aGlzLmdldEFsbFByb2ZpbHMoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJyb3IuLi4uLi5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkRlbGV0ZShpZCkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxyXG4gICAgaWYgKGNvbmZpcm0oXCJWb3VsZXogdm91cyBzdXBwcmltZXIgY2V0dGUgdGVtcGxhdGUgP1wiKSkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZGVsZXRlUHJvZmlsKGlkKTtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0QWxsUHJvZmlscygpXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0QWxsUHJvZmlscygpIHtcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XHJcbiAgICB0aGlzLmRhdGFzID0gcHJvZmlsZTtcclxuICAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSB0cnVlKTtcclxuICAgIHRoaXMuZHJhZnRUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gZmFsc2UpO1xyXG5cclxuICAgIHRoaXMucHVibGlzaFRlbXBsYXRlTGVuZ3RoID0gdGhpcy5wdWJsaXNoVGVtcGxhdGUubGVuZ3RoXHJcbiAgICB0aGlzLmRyYWZ0VGVtcGxhdGVMZW5ndGggPSB0aGlzLmRyYWZ0VGVtcGxhdGUubGVuZ3RoXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIG9uRmlsdGVyVGVtcGxhdGUoKSB7XHJcbiAgICBjb25zdCBkYXRhVG9GaWx0ZXIgPSB0aGlzLmZpbHRlckRhdGEuc2VhcmNoVGV4dCAhPT0gJycgPyB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5OYW1lLnRvTG93ZXJDYXNlKCkuc2VhcmNoKHRoaXMuZmlsdGVyRGF0YS5zZWFyY2hUZXh0LnRvTG9jYWxlTG93ZXJDYXNlKCkpID4gLTEpIDogdGhpcy5kYXRhc1xyXG4gICAgaWYgKHRoaXMuZmlsdGVyRGF0YS5TdGF0dXMgPT09IFwiYWxsXCIpIHtcclxuICAgICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSBkYXRhVG9GaWx0ZXIuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gdHJ1ZSk7XHJcbiAgICAgIHRoaXMuZHJhZnRUZW1wbGF0ZSA9IGRhdGFUb0ZpbHRlci5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyRGF0YS5TdGF0dXMgPT09ICdwdWJsaXNoJykge1xyXG4gICAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IGRhdGFUb0ZpbHRlci5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSB0cnVlKTtcclxuICAgICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gW107XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyRGF0YS5TdGF0dXMgPT09ICdkcmFmdCcpIHtcclxuICAgICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSBbXTtcclxuICAgICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gZGF0YVRvRmlsdGVyLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZpbHRlckRhdGEuc3RhcnRfZGF0ZSkge1xyXG4gICAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IHRoaXMucHVibGlzaFRlbXBsYXRlLmZpbHRlcigoZGF0YSkgPT4gbmV3IERhdGUoZGF0YS5jcmVhdGVkQXQpLmdldFRpbWUoKSA+PSBuZXcgRGF0ZSh0aGlzLmZpbHRlckRhdGEuc3RhcnRfZGF0ZSkuZ2V0VGltZSgpKTtcclxuICAgICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gdGhpcy5kcmFmdFRlbXBsYXRlLmZpbHRlcigoZGF0YSkgPT4gbmV3IERhdGUoZGF0YS5jcmVhdGVkQXQpLmdldFRpbWUoKSA+PSBuZXcgRGF0ZSh0aGlzLmZpbHRlckRhdGEuc3RhcnRfZGF0ZSkuZ2V0VGltZSgpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZpbHRlckRhdGEuZW5kX2RhdGUpIHtcclxuICAgICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSB0aGlzLnB1Ymxpc2hUZW1wbGF0ZS5maWx0ZXIoKGRhdGEpID0+IG5ldyBEYXRlKGRhdGEuY3JlYXRlZEF0KS5nZXRUaW1lKCkgPD0gbmV3IERhdGUodGhpcy5maWx0ZXJEYXRhLmVuZF9kYXRlKS5nZXRUaW1lKCkpO1xyXG4gICAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSB0aGlzLmRyYWZ0VGVtcGxhdGUuZmlsdGVyKChkYXRhKSA9PiBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkuZ2V0VGltZSgpIDw9IG5ldyBEYXRlKHRoaXMuZmlsdGVyRGF0YS5lbmRfZGF0ZSkuZ2V0VGltZSgpKTtcclxuICAgIH1cclxuICAgIHRoaXMucHVibGlzaFRlbXBsYXRlLnNvcnQoKGEsIGIpID0+IHRoaXMuZmlsdGVyRGF0YS5zb3J0TmFtZUFzYyA/IChiLk5hbWUudG9Mb3dlckNhc2UoKSA+IGEuTmFtZS50b0xvd2VyQ2FzZSgpID8gMSA6IC0xKSA6IChiLk5hbWUudG9Mb3dlckNhc2UoKSA+IGEuTmFtZS50b0xvd2VyQ2FzZSgpID8gLTEgOiAxKSk7XHJcbiAgICB0aGlzLmRyYWZ0VGVtcGxhdGUuc29ydCgoYSwgYikgPT4gdGhpcy5maWx0ZXJEYXRhLnNvcnROYW1lQXNjID8gKGIuTmFtZS50b0xvd2VyQ2FzZSgpID4gYS5OYW1lLnRvTG93ZXJDYXNlKCkgPyAxIDogLTEpIDogKGIuTmFtZS50b0xvd2VyQ2FzZSgpID4gYS5OYW1lLnRvTG93ZXJDYXNlKCkgPyAtMSA6IDEpKTtcclxuICB9XHJcbiAgb25Tb3J0KCkge1xyXG4gICAgdGhpcy5maWx0ZXJEYXRhLnNvcnROYW1lQXNjID0gIXRoaXMuZmlsdGVyRGF0YS5zb3J0TmFtZUFzYztcclxuICAgIHRoaXMub25GaWx0ZXJUZW1wbGF0ZSgpXHJcbiAgfVxyXG5cclxuICBhc3luYyBjb3B5VGVtcGxhdGUoZGF0YSkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxyXG4gICAgdGhpcy5jcElkID0gZGF0YS5faWRcclxuICAgIGNvbnN0IHsgX2lkLCAuLi5yZXN0IH0gPSBkYXRhXHJcbiAgICBjb25zdCBjb3B5TmFtZSA9IGRhdGEuTmFtZSArIFwiIC0gY29waWVcIlxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZVByb2ZpbCh7IC4uLnJlc3QsIE5hbWU6IGNvcHlOYW1lIH0pO1xyXG4gICAgdGhpcy50b1RlbXBsYXRlQ29weUlkID0gYCMke2NvcHlOYW1lfWBcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgdGhpcy5vbkVkaXRQcm9maWwocmVzdWx0Ll9pZClcclxuICAgICAgdGhpcy5jcElkID0gbnVsbFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJyb3IuLi4uLi5cIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG5cclxuICB9XHJcblxyXG4gIG9wZW5EaWFsb2coKSB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0NyZWF0ZVRlbXBsYXRlQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChjdXJyZW50OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UuY3VycmVudFRlbXBsYXRlLm5leHQoY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuc2VydmljZS5tYWluUGF0aCArICcvdGVtcGxhdGUvMCddKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1haW5cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWxpc3RcIiAqbmdJZj1cImRhdGFzICYmIGRhdGFzLmxlbmd0aCE9PTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPlByb2ZpbHMgKHt7ZGF0YXMubGVuZ3RofX0pPC9oMj5cclxuICAgICAgICAgICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImFkZC1wcm9maWxcIiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3LDqWVyIHByb2ZpbCA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZmlsdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cImZpbHRlckRhdGEuU3RhdHVzXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25GaWx0ZXJUZW1wbGF0ZSgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJhbGxcIj4gVG91dDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInB1Ymxpc2hcIj4gUHVibGnDqXM8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJkcmFmdFwiPiBCcm91aWxsb25zPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZmlsdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJEYXRlIG1pbmltdW1cIiBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJNaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYXhdPVwiZmlsdGVyRGF0YS5lbmRfZGF0ZVwiIFsobmdNb2RlbCldPVwiZmlsdGVyRGF0YS5zdGFydF9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkZpbHRlclRlbXBsYXRlKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyTWluXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlck1pbj48L21hdC1kYXRlcGlja2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZmlsdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyTWF4XCIgKG5nTW9kZWxDaGFuZ2UpPVwib25GaWx0ZXJUZW1wbGF0ZSgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRhdGUgbWF4aW11bVwiIFttaW5dPVwiZmlsdGVyRGF0YS5zdGFydF9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpbHRlckRhdGEuZW5kX2RhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyTWF4XCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlck1heD48L21hdC1kYXRlcGlja2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZmlsdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1pdGVtLWlubmVyXCIgKGNsaWNrKT1cIm9uU29ydCgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ob208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJmaWx0ZXJEYXRhLnNvcnROYW1lQXNjXCI+YXJyb3dfZG93bndhcmQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWZpbHRlckRhdGEuc29ydE5hbWVBc2NcIj5hcnJvd191cHdhcmQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJzZWFyY2gtdGV4dFwiIGFwcGVhcmFuY2U9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBtYXRQcmVmaXggc3R5bGU9XCJtYXJnaW4tbGVmdDogNXB4O1wiPnNlYXJjaDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZS4uLlwiIHR5cGU9XCJzZWFyY2hcIiBbKG5nTW9kZWwpXT1cImZpbHRlckRhdGEuc2VhcmNoVGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkZpbHRlclRlbXBsYXRlKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS10ZW1wbGF0ZVwiIChzY3JvbGwpPVwib25TY3JvbGwoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gYXBwTWF0ZXJpYWxFbGV2YXRpb24gW2RlZmF1bHRFbGV2YXRpb25dPVwiMFwiIHJhaXNlZEVsZXZhdGlvbj1cIjFcIiBjbGFzcz1cImJveC10ZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGQgb2YgcHVibGlzaFRlbXBsYXRlO2xldCBpbmRleD1pbmRleFwiIFtpZF09XCJkLk5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vZ2xlLWJ1dHRvblwiPjxzcGFuPkxpdmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGNvbG9yPVwiIzZGRThEN1wiIFsobmdNb2RlbCldPVwiZC5TdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2VTdGF0dXMoZCxmYWxzZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtY29udGVudFwiIFtyb3V0ZXJMaW5rXT1cIlt0aGlzLnNlcnZpY2UubWFpblBhdGgrJy90ZW1wbGF0ZS8nK2QuX2lkXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRlbXBsYXRlLXRpdGxlXCI+IHt7ZC5OYW1lfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGVtcGxhdGUtZGF0ZVwiPiB7e2QuY3JlYXRlZEF0IHwgZGF0ZSA6J2RkL01NL3l5J319PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcGxhdGUtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRWRpdFByb2ZpbChkLl9pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcIiAoY2xpY2spPVwiY29weVRlbXBsYXRlKGQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ3hTY3JvbGxUb109XCJ0b1RlbXBsYXRlQ29weUlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLWxvYWRpbmctcGFnZSAqbmdJZj1cImxvYWRpbmcgJiYgY3BJZD09PWQuX2lkXCI+PC9saWItbG9hZGluZy1wYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWxvYWRpbmcgfHwgY3BJZCE9PWQuX2lkXCI+ZmlsdGVyX25vbmU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiIChjbGljayk9XCJvbkRlbGV0ZShkLl9pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcmFmdC10ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBhcHBNYXRlcmlhbEVsZXZhdGlvbiBbZGVmYXVsdEVsZXZhdGlvbl09XCIwXCIgcmFpc2VkRWxldmF0aW9uPVwiMVwiIGNsYXNzPVwiYm94LXRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZCBvZiBkcmFmdFRlbXBsYXRlO2xldCBpbmRleD1pbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29nbGUtYnV0dG9uIGRyYWZ0XCI+PHNwYW4+QnJvdWlsbG9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBjbGFzcz1cImRyYWZ0XCIgWyhuZ01vZGVsKV09XCJkLlN0YXR1c1wiIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlU3RhdHVzKGQsdHJ1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtY29udGVudFwiIFtyb3V0ZXJMaW5rXT1cIlt0aGlzLnNlcnZpY2UubWFpblBhdGgrJy90ZW1wbGF0ZS8nK2QuX2lkXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRlbXBsYXRlLXRpdGxlXCI+IHt7ZC5OYW1lfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGVtcGxhdGUtZGF0ZVwiPiB7e2QuY3JlYXRlZEF0IHwgZGF0ZSA6J2RkL01NL3l5J319PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcGxhdGUtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRWRpdFByb2ZpbChkLl9pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcIiAoY2xpY2spPVwiY29weVRlbXBsYXRlKGQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLWxvYWRpbmctcGFnZSAqbmdJZj1cImxvYWRpbmcgJiYgY3BJZD09PWQuX2lkXCI+PC9saWItbG9hZGluZy1wYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWxvYWRpbmcgfHwgY3BJZCE9PWQuX2lkXCI+ZmlsdGVyX25vbmU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiIChjbGljayk9XCJvbkRlbGV0ZShkLl9pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxsaWItbm8tZGF0YSAqbmdJZj1cImRhdGFzLmxlbmd0aD09PTBcIiAoc2hvd1BvcHVwKT1cIm9wZW5EaWFsb2coKVwiPjwvbGliLW5vLWRhdGE+XHJcbjwvZGl2PiJdfQ==