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
import * as i7 from "ngx-filter";
import * as i8 from "@angular/material/form-field";
import * as i9 from "@angular/material/input";
import * as i10 from "@angular/forms";
import * as i11 from "ngx-intl-tel-input";
import * as i12 from "../../directives/elevation";
import * as i13 from "@angular/material/slide-toggle";
import * as i14 from "@nicky-lenaers/ngx-scroll-to";
import * as i15 from "../../components/loading/loading.component";
import * as i16 from "../../components/template/no-data/no-data.component";
function TemplateProfileListComponent_div_1_section_18_lib_loading_page_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function TemplateProfileListComponent_div_1_section_18_mat_icon_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "filter_none");
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return [a0]; };
function TemplateProfileListComponent_div_1_section_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 18)(1, "div", 19)(2, "span");
    i0.ɵɵtext(3, "Live");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-slide-toggle", 20);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_section_18_Template_mat_slide_toggle_ngModelChange_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r9); const d_r4 = restoredCtx.$implicit; return d_r4.Status = $event; })("ngModelChange", function TemplateProfileListComponent_div_1_section_18_Template_mat_slide_toggle_ngModelChange_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const d_r4 = restoredCtx.$implicit; const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onChangeStatus(d_r4, false); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 21)(6, "p", 22);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 23);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 24)(12, "button", 25);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_section_18_Template_button_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const d_r4 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onEditProfil(d_r4._id); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "button", 26);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_section_18_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const d_r4 = restoredCtx.$implicit; const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.copyTemplate(d_r4); });
    i0.ɵɵtemplate(16, TemplateProfileListComponent_div_1_section_18_lib_loading_page_16_Template, 1, 0, "lib-loading-page", 27);
    i0.ɵɵtemplate(17, TemplateProfileListComponent_div_1_section_18_mat_icon_17_Template, 2, 0, "mat-icon", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 25);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_section_18_Template_button_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const d_r4 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.onDelete(d_r4._id); });
    i0.ɵɵelementStart(19, "mat-icon");
    i0.ɵɵtext(20, "delete");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const d_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("defaultElevation", 0)("id", d_r4.Name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", d_r4.Status);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(12, _c0, ctx_r2.service.mainPath + "/template/" + d_r4._id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", d_r4.Name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 9, d_r4.createdAt, "dd/MM/yy"), "");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngxScrollTo", ctx_r2.toTemplateCopyId);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.loading && ctx_r2.cpId === d_r4._id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.loading || ctx_r2.cpId !== d_r4._id);
} }
function TemplateProfileListComponent_div_1_div_20_lib_loading_page_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function TemplateProfileListComponent_div_1_div_20_mat_icon_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "filter_none");
    i0.ɵɵelementEnd();
} }
function TemplateProfileListComponent_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "div", 29)(2, "span");
    i0.ɵɵtext(3, "Brouillon");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-slide-toggle", 30);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_div_20_Template_mat_slide_toggle_ngModelChange_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; return d_r14.Status = $event; })("ngModelChange", function TemplateProfileListComponent_div_1_div_20_Template_mat_slide_toggle_ngModelChange_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.onChangeStatus(d_r14, true); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 21)(6, "p", 22);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 23);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 24)(12, "button", 25);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_div_20_Template_button_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.onEditProfil(d_r14._id); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "button", 25);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_div_20_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; const ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.copyTemplate(d_r14); });
    i0.ɵɵtemplate(16, TemplateProfileListComponent_div_1_div_20_lib_loading_page_16_Template, 1, 0, "lib-loading-page", 27);
    i0.ɵɵtemplate(17, TemplateProfileListComponent_div_1_div_20_mat_icon_17_Template, 2, 0, "mat-icon", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 25);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_div_20_Template_button_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; const ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.onDelete(d_r14._id); });
    i0.ɵɵelementStart(19, "mat-icon");
    i0.ɵɵtext(20, "delete");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const d_r14 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("defaultElevation", 0);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", d_r14.Status);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(10, _c0, ctx_r3.service.mainPath + "/template/" + d_r14._id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", d_r14.Name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 7, d_r14.createdAt, "dd/MM/yy"), "");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r3.loading && ctx_r3.cpId === d_r14._id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.loading || ctx_r3.cpId !== d_r14._id);
} }
function TemplateProfileListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 6);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.openDialog(); });
    i0.ɵɵtext(6, " Cr\u00E9er profil ");
    i0.ɵɵelementStart(7, "mat-icon");
    i0.ɵɵtext(8, "add");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 7)(10, "ngx-filter", 8);
    i0.ɵɵlistener("onFilter", function TemplateProfileListComponent_div_1_Template_ngx_filter_onFilter_10_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.onFilter($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 9)(12, "mat-form-field", 10)(13, "mat-icon", 11);
    i0.ɵɵtext(14, "search");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 12);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.filterData.searchText = $event; })("ngModelChange", function TemplateProfileListComponent_div_1_Template_input_ngModelChange_15_listener() { i0.ɵɵrestoreView(_r25); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.onFilterTemplate(); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(16, "div", 13)(17, "div", 14);
    i0.ɵɵlistener("scroll", function TemplateProfileListComponent_div_1_Template_div_scroll_17_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.onScroll($event); });
    i0.ɵɵtemplate(18, TemplateProfileListComponent_div_1_section_18_Template, 21, 14, "section", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 16);
    i0.ɵɵtemplate(20, TemplateProfileListComponent_div_1_div_20_Template, 21, 12, "div", 17);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Profils (", ctx_r0.datas.length, ")");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("filterConfig", ctx_r0.ngxFilterData)("datas", ctx_r0.datas)("withRefresh", true);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r0.filterData.searchText);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.publishTemplate);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.draftTemplate);
} }
function TemplateProfileListComponent_lib_no_data_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "lib-no-data", 31);
    i0.ɵɵlistener("showPopup", function TemplateProfileListComponent_lib_no_data_2_Template_lib_no_data_showPopup_0_listener() { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.openDialog(); });
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
        this.ngxFilterData = [
            {
                filterData: {
                    type: "select",
                    value: "",
                    key: 'Status',
                    label: 'Statut',
                    options: [
                        {
                            value: true,
                            label: 'Publiés'
                        },
                        {
                            value: false,
                            label: 'Brouillons'
                        },
                    ],
                }
            },
            {
                filterData: {
                    type: 'date',
                    key: 'createdAt',
                    operator: "gte",
                    label: 'Date Min  '
                }
            },
            {
                filterData: {
                    type: 'date',
                    key: 'createdAt',
                    operator: "lte",
                    label: 'Date Max'
                }
            },
            {
                filterData: {
                    type: "sort",
                    key: "Name",
                    value: "asc",
                    label: "Nom"
                }
            }
        ];
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
    onFilter(event) {
        if (event.datas) {
            this.publishTemplate = event.datas.filter((d) => d.Status === true);
            this.draftTemplate = event.datas.filter((d) => d.Status === false);
        }
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
    } }, decls: 3, vars: 2, consts: [[1, "main"], ["class", "content-list", 4, "ngIf"], [3, "showPopup", 4, "ngIf"], [1, "content-list"], [1, "list"], [1, "header-top"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "click"], [1, "list-title"], ["lang", "fr", 3, "filterConfig", "datas", "withRefresh", "onFilter"], [1, "filter-item"], ["appearance", "text", 1, "search-text"], ["matPrefix", "", 2, "margin-left", "5px"], ["matInput", "", "placeholder", "Recherche...", "type", "search", 3, "ngModel", "ngModelChange"], [1, "profil-list-content"], [1, "live-template", 3, "scroll"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", "id", 4, "ngFor", "ngForOf"], [1, "draft-template"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation", "id"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelChange"], [1, "box-content", 3, "routerLink"], [1, "template-title"], [1, "template-date"], [1, "template-footer"], [1, "action-button", 2, "background-color", "transparent", 3, "click"], [1, "action-button", 2, "background-color", "transparent", 3, "ngxScrollTo", "click"], [4, "ngIf"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation"], [1, "toogle-button", "draft"], [1, "draft", 3, "ngModel", "ngModelChange"], [3, "showPopup"]], template: function TemplateProfileListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, TemplateProfileListComponent_div_1_Template, 21, 7, "div", 1);
        i0.ɵɵtemplate(2, TemplateProfileListComponent_lib_no_data_2_Template, 1, 0, "lib-no-data", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.datas && ctx.datas.length !== 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.datas.length === 0);
    } }, directives: [i4.NgIf, i5.MatAnchor, i6.MatIcon, i7.FilterComponent, i8.MatFormField, i8.MatPrefix, i9.MatInput, i10.DefaultValueAccessor, i10.NgControlStatus, i10.NgModel, i11.NativeElementInjectorDirective, i4.NgForOf, i12.MaterialElevationDirective, i13.MatSlideToggle, i2.RouterLink, i14.ScrollToDirective, i15.LoadingPageComponent, i16.NoDataComponent], pipes: [i4.DatePipe], styles: [".main[_ngcontent-%COMP%]{background:#f4f7f9 0% 0% no-repeat padding-box;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font: 700 23px/30px Nexa Text;letter-spacing:0px;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font: 20px/26px Nexa Text;letter-spacing:0px;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-date[_ngcontent-%COMP%]{font-weight:250;font-size:14px;line-height:120%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:25px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom:10px;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{margin-right:50px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .draft-template[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .live-template[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;margin-bottom:30px;gap:30px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:277px;height:300px;position:relative;background:#ffffff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#171f26 0% 0% no-repeat padding-box;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;text-align:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:#ffffff 0% 0% no-repeat padding-box;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-style:normal;font-size:18px;line-height:18px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button.draft[_ngcontent-%COMP%]{color:#f3a124}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{background-color:#171f26}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]{background:#543cb6;border-radius:0 0 5px 5px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]   button.action-button[_ngcontent-%COMP%]{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}.blink[_ngcontent-%COMP%]{animation:blink 2s ease-out;border:2px solid red;border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}  .filter-item{display:flex;align-items:center}  .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}  .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}to{transform:scale(1);opacity:1}}.header-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.profil-list-content[_ngcontent-%COMP%]{max-height:70vh;overflow:auto}.profil-list-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.profil-list-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TemplateProfileListComponent, [{
        type: Component,
        args: [{ selector: "onboarding-profile-list", template: "<div class=\"main\">\r\n    <div class=\"content-list\" *ngIf=\"datas && datas.length!==0\">\r\n        <div class=\"list\">\r\n            <div class=\"header-top\">\r\n                <h2>Profils ({{datas.length}})</h2>\r\n                <a role=\"button\" class=\"add-profil\" (click)=\"openDialog()\" mat-raised-button color=\"primary\">\r\n                    Cr\u00E9er profil <mat-icon>add</mat-icon>\r\n                </a>\r\n            </div>\r\n            <div class=\"list-title\">\r\n                <ngx-filter [filterConfig]=\"ngxFilterData\" lang=\"fr\" (onFilter)=\"onFilter($event)\" [datas]=\"datas\"\r\n                    [withRefresh]=\"true\">\r\n                </ngx-filter>\r\n                <div class=\"filter-item\">\r\n                    <mat-form-field class=\"search-text\" appearance=\"text\">\r\n                        <mat-icon matPrefix style=\"margin-left: 5px;\">search</mat-icon>\r\n                        <input matInput placeholder=\"Recherche...\" type=\"search\" [(ngModel)]=\"filterData.searchText\"\r\n                            (ngModelChange)=\"onFilterTemplate()\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <div class=\"profil-list-content\">\r\n                <div class=\"live-template\" (scroll)=\"onScroll($event)\">\r\n                    <section appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\r\n                        *ngFor=\"let d of publishTemplate;let index=index\" [id]=\"d.Name\">\r\n                        <div class=\"toogle-button\"><span>Live</span>\r\n                            <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"d.Status\"\r\n                                (ngModelChange)=\"onChangeStatus(d,false)\">\r\n                            </mat-slide-toggle>\r\n                        </div>\r\n                        <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\r\n                            <p class=\"template-title\"> {{d.Name}}</p>\r\n                            <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\r\n                        </div>\r\n\r\n                        <div class=\"template-footer\">\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"onEditProfil(d._id)\">\r\n                                <mat-icon>edit</mat-icon>\r\n                            </button>\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"copyTemplate(d)\" [ngxScrollTo]=\"toTemplateCopyId\">\r\n                                <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\r\n                                <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\r\n                            </button>\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"onDelete(d._id)\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                        </div>\r\n                    </section>\r\n                </div>\r\n                <div class=\"draft-template\">\r\n                    <div appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\r\n                        *ngFor=\"let d of draftTemplate;let index=index\">\r\n                        <div class=\"toogle-button draft\"><span>Brouillon</span>\r\n                            <mat-slide-toggle class=\"draft\" [(ngModel)]=\"d.Status\"\r\n                                (ngModelChange)=\"onChangeStatus(d,true)\">\r\n                            </mat-slide-toggle>\r\n                        </div>\r\n                        <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\r\n                            <p class=\"template-title\"> {{d.Name}}</p>\r\n                            <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\r\n                        </div>\r\n\r\n                        <div class=\"template-footer\">\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"onEditProfil(d._id)\">\r\n                                <mat-icon>edit</mat-icon>\r\n                            </button>\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"copyTemplate(d)\">\r\n                                <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\r\n                                <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\r\n                            </button>\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"onDelete(d._id)\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <lib-no-data *ngIf=\"datas.length===0\" (showPopup)=\"openDialog()\"></lib-no-data>\r\n</div>", styles: [".main{background:#f4f7f9 0% 0% no-repeat padding-box;opacity:1;height:100%}.main .content-list{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main .content-list h3{text-align:left;font: 700 23px/30px Nexa Text;letter-spacing:0px;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main .content-list p.sub-title{margin-bottom:57px;font: 20px/26px Nexa Text;letter-spacing:0px;color:#171f26;width:300px}.main .content-list .template-title{font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main .content-list .template-date{font-weight:250;font-size:14px;line-height:120%}.main .content-list .list{display:flex;flex-direction:column;gap:25px}.main .content-list .list .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.main .content-list .list .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.main .content-list .list .list-title ul li{padding-bottom:10px;cursor:pointer}.main .content-list .list .list-title ul li.active{border-bottom:4px solid #3c4252}.main .content-list .list .list-title .add-profil{margin-right:50px}.main .content-list .list .draft-template,.main .content-list .list .live-template{display:flex;flex-wrap:wrap;justify-content:flex-start;margin-bottom:30px;gap:30px}.main .content-list .list .box-template{width:277px;height:300px;position:relative;background:#ffffff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main .content-list .list .box-template img{width:81px;height:81px}.main .content-list .list .box-template a{background:#171f26 0% 0% no-repeat padding-box;border-radius:7px;font-size:15px}.main .content-list .list .box-template .box-content{width:100%;text-align:center}.main .content-list .list .box-template .box-content .picto-preview{width:113px;height:113px;background:#ffffff 0% 0% no-repeat padding-box;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main .content-list .list .box-template .box-content .picto-preview h3{font-size:40px;color:#dce4e9}.main .content-list .list .box-template .toogle-button{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-style:normal;font-size:18px;line-height:18px}.main .content-list .list .box-template .toogle-button span{padding-right:10px}.main .content-list .list .box-template .toogle-button.draft{color:#f3a124}.main .content-list .list .new-template{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main .content-list .list .add-profil{background-color:#171f26}.main .content-list .template-footer{background:#543cb6;border-radius:0 0 5px 5px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main .content-list .template-footer button.action-button{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}.blink{animation:blink 2s ease-out;border:2px solid red;border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}to{transform:scale(1);opacity:1}}.header-top{display:flex;align-items:center;justify-content:space-between}.profil-list-content{max-height:70vh;overflow:auto}.profil-list-content::-webkit-scrollbar{width:5px}.profil-list-content::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWxpc3QvdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWxpc3QvdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFHbEksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ21DN0IsbUNBQXFFOzs7SUFDckUsZ0NBQTJDO0lBQUEsMkJBQVc7SUFBQSxpQkFBVzs7Ozs7SUFwQjdFLG1DQUNvRSxjQUFBLFdBQUE7SUFDL0Isb0JBQUk7SUFBQSxpQkFBTztJQUN4Qyw0Q0FDOEM7SUFEWixpUUFBc0IsMlBBQ25DLDZCQUFpQixLQUFLLENBQUMsSUFEWTtJQUV4RCxpQkFBbUIsRUFBQTtJQUV2QiwrQkFBbUYsWUFBQTtJQUNwRCxZQUFVO0lBQUEsaUJBQUk7SUFDekMsNkJBQXlCO0lBQUMsWUFBa0M7O0lBQUEsaUJBQUksRUFBQTtJQUdwRSxnQ0FBNkIsa0JBQUE7SUFFckIsK09BQVMsOEJBQW1CLElBQUM7SUFDN0IsaUNBQVU7SUFB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O21CQUFDLFlBQVk7WUFDSCxJQUFJO2tCQUF2QixTQUFTO21CQUFDLE9BQU87WUEyQmxCLFFBQVE7a0JBRFAsWUFBWTttQkFBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nQ3JlYXRlVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlL2RpYWxvZy1jcmVhdGUtdGVtcGxhdGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IElGaWx0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnbmd4LWZpbHRlcic7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9yIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvclwiO1xyXG5pbXBvcnQgeyBNYXRTb3J0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NvcnRcIjtcclxuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3RhYmxlXCI7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL29uYm9hcmRpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJvbmJvYXJkaW5nLXByb2ZpbGUtbGlzdFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQuc2Nzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUHJvZmlsZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGRpc3BsYXllZENvbHVtbnMgPSBbXCJOYW1lXCIsIFwidmNvbnRhY3RzXCIsIFwiY3JlYXRlZEF0XCIsIFwidXBkYXRlZEF0XCIsIFwiYWN0aW9uXCJdO1xyXG4gIGRhdGFzOiBhbnkgPSBbXTtcclxuICBwdWJsaXNoVGVtcGxhdGU6IGFueSA9IFtdO1xyXG4gIGRyYWZ0VGVtcGxhdGU6IGFueSA9IFtdO1xyXG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4oW10pO1xyXG4gIGRlZmF1bHRFbGV2YXRpb24gPSAyO1xyXG4gIHJhaXNlZEVsZXZhdGlvbiA9IDg7XHJcbiAgbG9hZGluZyA9IGZhbHNlO1xyXG4gIGNwSWQgPSBudWxsO1xyXG4gIGZpbHRlckRhdGEgPSB7XHJcbiAgICBTdGF0dXM6IG51bGwsXHJcbiAgICBzb3J0TmFtZUFzYzogdHJ1ZSxcclxuICAgIHN0YXJ0X2RhdGU6IG51bGwsXHJcbiAgICBlbmRfZGF0ZTogbnVsbCxcclxuICAgIHNlYXJjaFRleHQ6ICcnLFxyXG4gICAgc2VydmljZTogJydcclxuICB9XHJcblxyXG4gIG5neEZpbHRlckRhdGE6IElGaWx0ZXJDb25maWd1cmF0aW9uW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIGZpbHRlckRhdGE6IHtcclxuICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIGtleTogJ1N0YXR1cycsXHJcbiAgICAgICAgbGFiZWw6ICdTdGF0dXQnLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnUHVibGnDqXMnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnQnJvdWlsbG9ucydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIGZpbHRlckRhdGE6IHtcclxuICAgICAgICB0eXBlOiAnZGF0ZScsXHJcbiAgICAgICAga2V5OiAnY3JlYXRlZEF0JyxcclxuICAgICAgICBvcGVyYXRvcjogXCJndGVcIixcclxuICAgICAgICBsYWJlbDogJ0RhdGUgTWluICAnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpbHRlckRhdGE6IHtcclxuICAgICAgICB0eXBlOiAnZGF0ZScsXHJcbiAgICAgICAga2V5OiAnY3JlYXRlZEF0JyxcclxuICAgICAgICBvcGVyYXRvcjogXCJsdGVcIixcclxuICAgICAgICBsYWJlbDogJ0RhdGUgTWF4J1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmaWx0ZXJEYXRhOiB7XHJcbiAgICAgICAgdHlwZTogXCJzb3J0XCIsXHJcbiAgICAgICAga2V5OiBcIk5hbWVcIixcclxuICAgICAgICB2YWx1ZTogXCJhc2NcIixcclxuICAgICAgICBsYWJlbDogXCJOb21cIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXVxyXG5cclxuICB0b1RlbXBsYXRlQ29weUlkID0gXCJcIlxyXG4gIGN1cnJlbnRGaWx0ZXIgPSBcImFsbFwiXHJcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xyXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcclxuICBwdWJsaXNoVGVtcGxhdGVMZW5ndGg6IGFueTtcclxuICBkcmFmdFRlbXBsYXRlTGVuZ3RoOiBhbnk7XHJcbiAgdGFncyA9IFtdXHJcbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UudGVtcGxhdGVzLnN1YnNjcmliZSgodGVtcGxhdGVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHRlbXBsYXRlcyAmJiB0ZW1wbGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuZGF0YXMgPSB0ZW1wbGF0ZXM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgdGhpcy5nZXRBbGxQcm9maWxzKCk7XHJcbiAgICAgIHRoaXMudGFncyA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxUYWdzKCk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxuXHJcbiAgb25GaWx0ZXIoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5kYXRhcykge1xyXG4gICAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IGV2ZW50LmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IHRydWUpO1xyXG4gICAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSBldmVudC5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdzY3JvbGwnLCBbJyRldmVudCddKVxyXG4gIG9uU2Nyb2xsKGV2ZW50KSB7XHJcbiAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpO1xyXG4gICAgY29uc3QgbmF2TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpdmUtdGVtcGxhdGUgLmJveC10ZW1wbGF0ZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS1XV1dXV1dXV1dXV1dXLS0tLS0tLS0tLS0tLS0tLS0tJywgbmF2TGkpO1xyXG4gICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xyXG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5vZmZzZXRUb3A7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQuc2Nyb2xsVG9wID4gc2VjdGlvblRvcCkge1xyXG4gICAgICAgIGN1cnJlbnQgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZShcImlkXCIpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbmF2TGkuZm9yRWFjaCgobGkpID0+IHtcclxuXHJcblxyXG4gICAgICBjb25zdCBpZCA9IGxpLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImJsaW5rXCIpO1xyXG4gICAgICBpZiAoaWQuc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCAtIDEpID09PSBjdXJyZW50KSB7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImJsaW5rXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2JsaW5rJylcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkFkZFByb2ZpbCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9uYm9hcmRpbmcvdGVtcGxhdGUvMFwiXSk7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRQcm9maWwoaWQpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9uYm9hcmRpbmcvdGVtcGxhdGUvXCIsIGlkXSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkNoYW5nZVN0YXR1cyhkYXRhLCBTdGF0dXMpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGVQcm9maWwoeyAuLi5kYXRhLCBTdGF0dXMgfSk7XHJcbiAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gdHJ1ZSk7XHJcbiAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IGZhbHNlKTtcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgYXdhaXQgdGhpcy5nZXRBbGxQcm9maWxzKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJycm9yLi4uLi4uXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25EZWxldGUoaWQpIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWVcclxuICAgIGlmIChjb25maXJtKFwiVm91bGV6IHZvdXMgc3VwcHJpbWVyIGNldHRlIHRlbXBsYXRlID9cIikpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmRlbGV0ZVByb2ZpbChpZCk7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmdldEFsbFByb2ZpbHMoKVxyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEFsbFByb2ZpbHMoKSB7XHJcbiAgICBjb25zdCBwcm9maWxlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xyXG4gICAgdGhpcy5kYXRhcyA9IHByb2ZpbGU7XHJcbiAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gdHJ1ZSk7XHJcbiAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IGZhbHNlKTtcclxuXHJcbiAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZUxlbmd0aCA9IHRoaXMucHVibGlzaFRlbXBsYXRlLmxlbmd0aFxyXG4gICAgdGhpcy5kcmFmdFRlbXBsYXRlTGVuZ3RoID0gdGhpcy5kcmFmdFRlbXBsYXRlLmxlbmd0aFxyXG4gIH1cclxuXHJcblxyXG5cclxuICBvbkZpbHRlclRlbXBsYXRlKCkge1xyXG4gICAgY29uc3QgZGF0YVRvRmlsdGVyID0gdGhpcy5maWx0ZXJEYXRhLnNlYXJjaFRleHQgIT09ICcnID8gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuTmFtZS50b0xvd2VyQ2FzZSgpLnNlYXJjaCh0aGlzLmZpbHRlckRhdGEuc2VhcmNoVGV4dC50b0xvY2FsZUxvd2VyQ2FzZSgpKSA+IC0xKSA6IHRoaXMuZGF0YXNcclxuICAgIGlmICh0aGlzLmZpbHRlckRhdGEuU3RhdHVzID09PSBcImFsbFwiKSB7XHJcbiAgICAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gZGF0YVRvRmlsdGVyLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IHRydWUpO1xyXG4gICAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSBkYXRhVG9GaWx0ZXIuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlckRhdGEuU3RhdHVzID09PSAncHVibGlzaCcpIHtcclxuICAgICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSBkYXRhVG9GaWx0ZXIuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gdHJ1ZSk7XHJcbiAgICAgIHRoaXMuZHJhZnRUZW1wbGF0ZSA9IFtdO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlckRhdGEuU3RhdHVzID09PSAnZHJhZnQnKSB7XHJcbiAgICAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gW107XHJcbiAgICAgIHRoaXMuZHJhZnRUZW1wbGF0ZSA9IGRhdGFUb0ZpbHRlci5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5maWx0ZXJEYXRhLnN0YXJ0X2RhdGUpIHtcclxuICAgICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSB0aGlzLnB1Ymxpc2hUZW1wbGF0ZS5maWx0ZXIoKGRhdGEpID0+IG5ldyBEYXRlKGRhdGEuY3JlYXRlZEF0KS5nZXRUaW1lKCkgPj0gbmV3IERhdGUodGhpcy5maWx0ZXJEYXRhLnN0YXJ0X2RhdGUpLmdldFRpbWUoKSk7XHJcbiAgICAgIHRoaXMuZHJhZnRUZW1wbGF0ZSA9IHRoaXMuZHJhZnRUZW1wbGF0ZS5maWx0ZXIoKGRhdGEpID0+IG5ldyBEYXRlKGRhdGEuY3JlYXRlZEF0KS5nZXRUaW1lKCkgPj0gbmV3IERhdGUodGhpcy5maWx0ZXJEYXRhLnN0YXJ0X2RhdGUpLmdldFRpbWUoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5maWx0ZXJEYXRhLmVuZF9kYXRlKSB7XHJcbiAgICAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gdGhpcy5wdWJsaXNoVGVtcGxhdGUuZmlsdGVyKChkYXRhKSA9PiBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkuZ2V0VGltZSgpIDw9IG5ldyBEYXRlKHRoaXMuZmlsdGVyRGF0YS5lbmRfZGF0ZSkuZ2V0VGltZSgpKTtcclxuICAgICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gdGhpcy5kcmFmdFRlbXBsYXRlLmZpbHRlcigoZGF0YSkgPT4gbmV3IERhdGUoZGF0YS5jcmVhdGVkQXQpLmdldFRpbWUoKSA8PSBuZXcgRGF0ZSh0aGlzLmZpbHRlckRhdGEuZW5kX2RhdGUpLmdldFRpbWUoKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZS5zb3J0KChhLCBiKSA9PiB0aGlzLmZpbHRlckRhdGEuc29ydE5hbWVBc2MgPyAoYi5OYW1lLnRvTG93ZXJDYXNlKCkgPiBhLk5hbWUudG9Mb3dlckNhc2UoKSA/IDEgOiAtMSkgOiAoYi5OYW1lLnRvTG93ZXJDYXNlKCkgPiBhLk5hbWUudG9Mb3dlckNhc2UoKSA/IC0xIDogMSkpO1xyXG4gICAgdGhpcy5kcmFmdFRlbXBsYXRlLnNvcnQoKGEsIGIpID0+IHRoaXMuZmlsdGVyRGF0YS5zb3J0TmFtZUFzYyA/IChiLk5hbWUudG9Mb3dlckNhc2UoKSA+IGEuTmFtZS50b0xvd2VyQ2FzZSgpID8gMSA6IC0xKSA6IChiLk5hbWUudG9Mb3dlckNhc2UoKSA+IGEuTmFtZS50b0xvd2VyQ2FzZSgpID8gLTEgOiAxKSk7XHJcbiAgfVxyXG4gIG9uU29ydCgpIHtcclxuICAgIHRoaXMuZmlsdGVyRGF0YS5zb3J0TmFtZUFzYyA9ICF0aGlzLmZpbHRlckRhdGEuc29ydE5hbWVBc2M7XHJcbiAgICB0aGlzLm9uRmlsdGVyVGVtcGxhdGUoKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgY29weVRlbXBsYXRlKGRhdGEpIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWVcclxuICAgIHRoaXMuY3BJZCA9IGRhdGEuX2lkXHJcbiAgICBjb25zdCB7IF9pZCwgLi4ucmVzdCB9ID0gZGF0YVxyXG4gICAgY29uc3QgY29weU5hbWUgPSBkYXRhLk5hbWUgKyBcIiAtIGNvcGllXCJcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGVQcm9maWwoeyAuLi5yZXN0LCBOYW1lOiBjb3B5TmFtZSB9KTtcclxuICAgIHRoaXMudG9UZW1wbGF0ZUNvcHlJZCA9IGAjJHtjb3B5TmFtZX1gXHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIHRoaXMub25FZGl0UHJvZmlsKHJlc3VsdC5faWQpXHJcbiAgICAgIHRoaXMuY3BJZCA9IG51bGxcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJycm9yLi4uLi4uXCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcclxuXHJcbiAgfVxyXG5cclxuICBvcGVuRGlhbG9nKCkge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dDcmVhdGVUZW1wbGF0ZUNvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGFnczogdGhpcy50YWdzLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoY3VycmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChjdXJyZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZS5uZXh0KGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnNlcnZpY2UubWFpblBhdGggKyAnL3RlbXBsYXRlLzAnXSlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtYWluXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1saXN0XCIgKm5nSWY9XCJkYXRhcyAmJiBkYXRhcy5sZW5ndGghPT0wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10b3BcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Qcm9maWxzICh7e2RhdGFzLmxlbmd0aH19KTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgY2xhc3M9XCJhZGQtcHJvZmlsXCIgKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENyw6llciBwcm9maWwgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPG5neC1maWx0ZXIgW2ZpbHRlckNvbmZpZ109XCJuZ3hGaWx0ZXJEYXRhXCIgbGFuZz1cImZyXCIgKG9uRmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIiBbZGF0YXNdPVwiZGF0YXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIFt3aXRoUmVmcmVzaF09XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8L25neC1maWx0ZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJzZWFyY2gtdGV4dFwiIGFwcGVhcmFuY2U9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBtYXRQcmVmaXggc3R5bGU9XCJtYXJnaW4tbGVmdDogNXB4O1wiPnNlYXJjaDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZS4uLlwiIHR5cGU9XCJzZWFyY2hcIiBbKG5nTW9kZWwpXT1cImZpbHRlckRhdGEuc2VhcmNoVGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkZpbHRlclRlbXBsYXRlKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZmlsLWxpc3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpdmUtdGVtcGxhdGVcIiAoc2Nyb2xsKT1cIm9uU2Nyb2xsKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBhcHBNYXRlcmlhbEVsZXZhdGlvbiBbZGVmYXVsdEVsZXZhdGlvbl09XCIwXCIgcmFpc2VkRWxldmF0aW9uPVwiMVwiIGNsYXNzPVwiYm94LXRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGQgb2YgcHVibGlzaFRlbXBsYXRlO2xldCBpbmRleD1pbmRleFwiIFtpZF09XCJkLk5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2dsZS1idXR0b25cIj48c3Bhbj5MaXZlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY29sb3I9XCIjNkZFOEQ3XCIgWyhuZ01vZGVsKV09XCJkLlN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2VTdGF0dXMoZCxmYWxzZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtY29udGVudFwiIFtyb3V0ZXJMaW5rXT1cIlt0aGlzLnNlcnZpY2UubWFpblBhdGgrJy90ZW1wbGF0ZS8nK2QuX2lkXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZW1wbGF0ZS10aXRsZVwiPiB7e2QuTmFtZX19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZW1wbGF0ZS1kYXRlXCI+IHt7ZC5jcmVhdGVkQXQgfCBkYXRlIDonZGQvTU0veXknfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBsYXRlLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRWRpdFByb2ZpbChkLl9pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjb3B5VGVtcGxhdGUoZClcIiBbbmd4U2Nyb2xsVG9dPVwidG9UZW1wbGF0ZUNvcHlJZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItbG9hZGluZy1wYWdlICpuZ0lmPVwibG9hZGluZyAmJiBjcElkPT09ZC5faWRcIj48L2xpYi1sb2FkaW5nLXBhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWxvYWRpbmcgfHwgY3BJZCE9PWQuX2lkXCI+ZmlsdGVyX25vbmU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25EZWxldGUoZC5faWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJhZnQtdGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGFwcE1hdGVyaWFsRWxldmF0aW9uIFtkZWZhdWx0RWxldmF0aW9uXT1cIjBcIiByYWlzZWRFbGV2YXRpb249XCIxXCIgY2xhc3M9XCJib3gtdGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZCBvZiBkcmFmdFRlbXBsYXRlO2xldCBpbmRleD1pbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vZ2xlLWJ1dHRvbiBkcmFmdFwiPjxzcGFuPkJyb3VpbGxvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGNsYXNzPVwiZHJhZnRcIiBbKG5nTW9kZWwpXT1cImQuU3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZVN0YXR1cyhkLHRydWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWNvbnRlbnRcIiBbcm91dGVyTGlua109XCJbdGhpcy5zZXJ2aWNlLm1haW5QYXRoKycvdGVtcGxhdGUvJytkLl9pZF1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGVtcGxhdGUtdGl0bGVcIj4ge3tkLk5hbWV9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGVtcGxhdGUtZGF0ZVwiPiB7e2QuY3JlYXRlZEF0IHwgZGF0ZSA6J2RkL01NL3l5J319PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wbGF0ZS1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkVkaXRQcm9maWwoZC5faWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY29weVRlbXBsYXRlKGQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1sb2FkaW5nLXBhZ2UgKm5nSWY9XCJsb2FkaW5nICYmIGNwSWQ9PT1kLl9pZFwiPjwvbGliLWxvYWRpbmctcGFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCIhbG9hZGluZyB8fCBjcElkIT09ZC5faWRcIj5maWx0ZXJfbm9uZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkRlbGV0ZShkLl9pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxsaWItbm8tZGF0YSAqbmdJZj1cImRhdGFzLmxlbmd0aD09PTBcIiAoc2hvd1BvcHVwKT1cIm9wZW5EaWFsb2coKVwiPjwvbGliLW5vLWRhdGE+XHJcbjwvZGl2PiJdfQ==