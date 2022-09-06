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
import * as i8 from "../../directives/elevation";
import * as i9 from "@angular/material/slide-toggle";
import * as i10 from "@angular/forms";
import * as i11 from "ngx-intl-tel-input";
import * as i12 from "@nicky-lenaers/ngx-scroll-to";
import * as i13 from "../../components/loading/loading.component";
import * as i14 from "../../components/template/no-data/no-data.component";
function TemplateProfileListComponent_div_1_section_15_lib_loading_page_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function TemplateProfileListComponent_div_1_section_15_mat_icon_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "filter_none");
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return [a0]; };
function TemplateProfileListComponent_div_1_section_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 16)(1, "div", 17)(2, "span");
    i0.ɵɵtext(3, "Live");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-slide-toggle", 18);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_section_15_Template_mat_slide_toggle_ngModelChange_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r9); const d_r4 = restoredCtx.$implicit; return d_r4.Status = $event; })("ngModelChange", function TemplateProfileListComponent_div_1_section_15_Template_mat_slide_toggle_ngModelChange_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const d_r4 = restoredCtx.$implicit; const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onChangeStatus(d_r4, false); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 19)(6, "p", 20);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 21);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 22)(12, "button", 23);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_section_15_Template_button_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const d_r4 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onEditProfil(d_r4._id); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "button", 24);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_section_15_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const d_r4 = restoredCtx.$implicit; const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.copyTemplate(d_r4); });
    i0.ɵɵtemplate(16, TemplateProfileListComponent_div_1_section_15_lib_loading_page_16_Template, 1, 0, "lib-loading-page", 25);
    i0.ɵɵtemplate(17, TemplateProfileListComponent_div_1_section_15_mat_icon_17_Template, 2, 0, "mat-icon", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 23);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_section_15_Template_button_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const d_r4 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.onDelete(d_r4._id); });
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
function TemplateProfileListComponent_div_1_div_17_lib_loading_page_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function TemplateProfileListComponent_div_1_div_17_mat_icon_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "filter_none");
    i0.ɵɵelementEnd();
} }
function TemplateProfileListComponent_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 27)(2, "span");
    i0.ɵɵtext(3, "Brouillon");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-slide-toggle", 28);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_div_17_Template_mat_slide_toggle_ngModelChange_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; return d_r14.Status = $event; })("ngModelChange", function TemplateProfileListComponent_div_1_div_17_Template_mat_slide_toggle_ngModelChange_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.onChangeStatus(d_r14, true); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 19)(6, "p", 20);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 21);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 22)(12, "button", 23);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_div_17_Template_button_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.onEditProfil(d_r14._id); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "button", 23);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_div_17_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; const ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.copyTemplate(d_r14); });
    i0.ɵɵtemplate(16, TemplateProfileListComponent_div_1_div_17_lib_loading_page_16_Template, 1, 0, "lib-loading-page", 25);
    i0.ɵɵtemplate(17, TemplateProfileListComponent_div_1_div_17_mat_icon_17_Template, 2, 0, "mat-icon", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 23);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_div_17_Template_button_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; const ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.onDelete(d_r14._id); });
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
    i0.ɵɵlistener("onFilter", function TemplateProfileListComponent_div_1_Template_ngx_filter_onFilter_10_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.onFilter($event); })("onRefresh", function TemplateProfileListComponent_div_1_Template_ngx_filter_onRefresh_10_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.onRefresh($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 9)(12, "ngx-filter", 10);
    i0.ɵɵlistener("onFilter", function TemplateProfileListComponent_div_1_Template_ngx_filter_onFilter_12_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.onFilter($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 11)(14, "div", 12);
    i0.ɵɵlistener("scroll", function TemplateProfileListComponent_div_1_Template_div_scroll_14_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.onScroll($event); });
    i0.ɵɵtemplate(15, TemplateProfileListComponent_div_1_section_15_Template, 21, 14, "section", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 14);
    i0.ɵɵtemplate(17, TemplateProfileListComponent_div_1_div_17_Template, 21, 12, "div", 15);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Profils (", ctx_r0.datas.length, ")");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("filterConfig", ctx_r0.ngxFilterData)("datas", ctx_r0.datas)("withRefresh", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("datas", ctx_r0.datas);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.publishTemplate);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.draftTemplate);
} }
function TemplateProfileListComponent_lib_no_data_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "lib-no-data", 29);
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
        this.ngxFilterInit = JSON.stringify(this.ngxFilterData);
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
    onRefresh(event) {
        this.ngxFilterData = JSON.parse(this.ngxFilterInit);
        if (event.datas) {
            this.publishTemplate = event.datas.filter((d) => d.Status === true);
            this.draftTemplate = event.datas.filter((d) => d.Status === false);
        }
    }
    onScroll(event) {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll(".live-template .box-template");
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
    } }, decls: 3, vars: 2, consts: [[1, "main"], ["class", "content-list", 4, "ngIf"], [3, "showPopup", 4, "ngIf"], [1, "content-list"], [1, "list"], [1, "header-top"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "click"], [1, "list-title"], ["lang", "fr", 3, "filterConfig", "datas", "withRefresh", "onFilter", "onRefresh"], [1, "filter-item"], ["searchType", "search-text", "lang", "fr", 3, "datas", "onFilter"], [1, "profil-list-content"], [1, "live-template", 3, "scroll"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", "id", 4, "ngFor", "ngForOf"], [1, "draft-template"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation", "id"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelChange"], [1, "box-content", 3, "routerLink"], [1, "template-title"], [1, "template-date"], [1, "template-footer"], [1, "action-button", 2, "background-color", "transparent", 3, "click"], [1, "action-button", 2, "background-color", "transparent", 3, "ngxScrollTo", "click"], [4, "ngIf"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation"], [1, "toogle-button", "draft"], [1, "draft", 3, "ngModel", "ngModelChange"], [3, "showPopup"]], template: function TemplateProfileListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, TemplateProfileListComponent_div_1_Template, 18, 7, "div", 1);
        i0.ɵɵtemplate(2, TemplateProfileListComponent_lib_no_data_2_Template, 1, 0, "lib-no-data", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.datas && ctx.datas.length !== 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.datas.length === 0);
    } }, directives: [i4.NgIf, i5.MatAnchor, i6.MatIcon, i7.AppComponent, i4.NgForOf, i8.MaterialElevationDirective, i9.MatSlideToggle, i10.NgControlStatus, i10.NgModel, i11.NativeElementInjectorDirective, i2.RouterLink, i12.ScrollToDirective, i13.LoadingPageComponent, i14.NoDataComponent], pipes: [i4.DatePipe], styles: [".main[_ngcontent-%COMP%]{background:#f4f7f9 0% 0% no-repeat padding-box;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font: 700 23px/30px Nexa Text;letter-spacing:0px;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font: 20px/26px Nexa Text;letter-spacing:0px;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-date[_ngcontent-%COMP%]{font-weight:250;font-size:14px;line-height:120%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:25px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom:10px;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{margin-right:50px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .draft-template[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .live-template[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;margin-bottom:30px;gap:30px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:277px;height:300px;position:relative;background:#ffffff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#171f26 0% 0% no-repeat padding-box;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;text-align:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:#ffffff 0% 0% no-repeat padding-box;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-style:normal;font-size:18px;line-height:18px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button.draft[_ngcontent-%COMP%]{color:#f3a124}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{background-color:#171f26}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]{background:#543cb6;border-radius:0 0 5px 5px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]   button.action-button[_ngcontent-%COMP%]{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}.blink[_ngcontent-%COMP%]{animation:blink 2s ease-out;border:2px solid red;border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}  .filter-item{display:flex;align-items:center}  .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}  .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}to{transform:scale(1);opacity:1}}.header-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.profil-list-content[_ngcontent-%COMP%]{max-height:70vh;overflow:auto}.profil-list-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.profil-list-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TemplateProfileListComponent, [{
        type: Component,
        args: [{ selector: "onboarding-profile-list", template: "<div class=\"main\">\r\n    <div class=\"content-list\" *ngIf=\"datas && datas.length!==0\">\r\n        <div class=\"list\">\r\n            <div class=\"header-top\">\r\n                <h2>Profils ({{datas.length}})</h2>\r\n                <a role=\"button\" class=\"add-profil\" (click)=\"openDialog()\" mat-raised-button color=\"primary\">\r\n                    Cr\u00E9er profil <mat-icon>add</mat-icon>\r\n                </a>\r\n            </div>\r\n            <div class=\"list-title\">\r\n                <ngx-filter [filterConfig]=\"ngxFilterData\" lang=\"fr\" (onFilter)=\"onFilter($event)\"\r\n                    (onRefresh)=\"onRefresh($event)\" [datas]=\"datas\" [withRefresh]=\"true\">\r\n                </ngx-filter>\r\n                <div class=\"filter-item\">\r\n                    <ngx-filter searchType=\"search-text\" lang=\"fr\" (onFilter)=\"onFilter($event)\" [datas]=\"datas\">\r\n                    </ngx-filter>\r\n                </div>\r\n            </div>\r\n            <div class=\"profil-list-content\">\r\n                <div class=\"live-template\" (scroll)=\"onScroll($event)\">\r\n                    <section appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\r\n                        *ngFor=\"let d of publishTemplate;let index=index\" [id]=\"d.Name\">\r\n                        <div class=\"toogle-button\"><span>Live</span>\r\n                            <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"d.Status\"\r\n                                (ngModelChange)=\"onChangeStatus(d,false)\">\r\n                            </mat-slide-toggle>\r\n                        </div>\r\n                        <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\r\n                            <p class=\"template-title\"> {{d.Name}}</p>\r\n                            <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\r\n                        </div>\r\n\r\n                        <div class=\"template-footer\">\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"onEditProfil(d._id)\">\r\n                                <mat-icon>edit</mat-icon>\r\n                            </button>\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"copyTemplate(d)\" [ngxScrollTo]=\"toTemplateCopyId\">\r\n                                <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\r\n                                <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\r\n                            </button>\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"onDelete(d._id)\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                        </div>\r\n                    </section>\r\n                </div>\r\n                <div class=\"draft-template\">\r\n                    <div appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\r\n                        *ngFor=\"let d of draftTemplate;let index=index\">\r\n                        <div class=\"toogle-button draft\"><span>Brouillon</span>\r\n                            <mat-slide-toggle class=\"draft\" [(ngModel)]=\"d.Status\"\r\n                                (ngModelChange)=\"onChangeStatus(d,true)\">\r\n                            </mat-slide-toggle>\r\n                        </div>\r\n                        <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\r\n                            <p class=\"template-title\"> {{d.Name}}</p>\r\n                            <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\r\n                        </div>\r\n\r\n                        <div class=\"template-footer\">\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"onEditProfil(d._id)\">\r\n                                <mat-icon>edit</mat-icon>\r\n                            </button>\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"copyTemplate(d)\">\r\n                                <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\r\n                                <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\r\n                            </button>\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"onDelete(d._id)\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <lib-no-data *ngIf=\"datas.length===0\" (showPopup)=\"openDialog()\"></lib-no-data>\r\n</div>", styles: [".main{background:#f4f7f9 0% 0% no-repeat padding-box;opacity:1;height:100%}.main .content-list{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main .content-list h3{text-align:left;font: 700 23px/30px Nexa Text;letter-spacing:0px;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main .content-list p.sub-title{margin-bottom:57px;font: 20px/26px Nexa Text;letter-spacing:0px;color:#171f26;width:300px}.main .content-list .template-title{font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main .content-list .template-date{font-weight:250;font-size:14px;line-height:120%}.main .content-list .list{display:flex;flex-direction:column;gap:25px}.main .content-list .list .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.main .content-list .list .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.main .content-list .list .list-title ul li{padding-bottom:10px;cursor:pointer}.main .content-list .list .list-title ul li.active{border-bottom:4px solid #3c4252}.main .content-list .list .list-title .add-profil{margin-right:50px}.main .content-list .list .draft-template,.main .content-list .list .live-template{display:flex;flex-wrap:wrap;justify-content:flex-start;margin-bottom:30px;gap:30px}.main .content-list .list .box-template{width:277px;height:300px;position:relative;background:#ffffff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main .content-list .list .box-template img{width:81px;height:81px}.main .content-list .list .box-template a{background:#171f26 0% 0% no-repeat padding-box;border-radius:7px;font-size:15px}.main .content-list .list .box-template .box-content{width:100%;text-align:center}.main .content-list .list .box-template .box-content .picto-preview{width:113px;height:113px;background:#ffffff 0% 0% no-repeat padding-box;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main .content-list .list .box-template .box-content .picto-preview h3{font-size:40px;color:#dce4e9}.main .content-list .list .box-template .toogle-button{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-style:normal;font-size:18px;line-height:18px}.main .content-list .list .box-template .toogle-button span{padding-right:10px}.main .content-list .list .box-template .toogle-button.draft{color:#f3a124}.main .content-list .list .new-template{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main .content-list .list .add-profil{background-color:#171f26}.main .content-list .template-footer{background:#543cb6;border-radius:0 0 5px 5px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main .content-list .template-footer button.action-button{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}.blink{animation:blink 2s ease-out;border:2px solid red;border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}to{transform:scale(1);opacity:1}}.header-top{display:flex;align-items:center;justify-content:space-between}.profil-list-content{max-height:70vh;overflow:auto}.profil-list-content::-webkit-scrollbar{width:5px}.profil-list-content::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWxpc3QvdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWxpc3QvdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFHbEksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNnQzdCLG1DQUFxRTs7O0lBQ3JFLGdDQUEyQztJQUFBLDJCQUFXO0lBQUEsaUJBQVc7Ozs7O0lBcEI3RSxtQ0FDb0UsY0FBQSxXQUFBO0lBQy9CLG9CQUFJO0lBQUEsaUJBQU87SUFDeEMsNENBQzhDO0lBRFosaVFBQXNCLDJQQUNuQyw2QkFBaUIsS0FBSyxDQUFDLElBRFk7SUFFeEQsaUJBQW1CLEVBQUE7SUFFdkIsK0JBQW1GLFlBQUE7SUFDcEQsWUFBVTtJQUFBLGlCQUFJO0lBQ3pDLDZCQUF5QjtJQUFDLFlBQWtDOztJQUFBLGlCQUFJLEVBQUE7SUFHcEUsZ0NBQTZCLGtCQUFBO0lBRXJCLCtPQUFTLDhCQUFtQixJQUFDO0lBQzdCLGlDQUFVO0lBQUEs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T0FBTyxFQUFFLENBQUMsQ0FBQztTQUM5STtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuTCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkwsQ0FBQztJQUNELE1BQU07UUFDSixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO0lBQ3pCLENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUk7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFBO1FBQ3BCLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUE7UUFDN0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUE7UUFDdkMsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFBO1FBQ3RDLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7U0FDakI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtJQUV0QixDQUFDO0lBRUQsVUFBVTtRQUNSLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFO1lBQ2hFLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDaEI7U0FDRixDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBWSxFQUFFLEVBQUU7WUFDakQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUE7YUFDOUQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O3dHQWxPVSw0QkFBNEI7K0VBQTVCLDRCQUE0Qjt1QkFtRTVCLFlBQVk7dUJBQ1osT0FBTzs7Ozs7O2lIQXBFUCxvQkFBZ0I7O1FDaEI3Qiw4QkFBa0I7UUFDZCw4RUFpRk07UUFDTiw2RkFBK0U7UUFDbkYsaUJBQU07O1FBbkZ5QixlQUErQjtRQUEvQiwwREFBK0I7UUFrRjVDLGVBQXNCO1FBQXRCLDZDQUFzQjs7dUZEbkUzQiw0QkFBNEI7Y0FMeEMsU0FBUzsyQkFDRSx5QkFBeUI7aUhBdUVWLFNBQVM7a0JBQWpDLFNBQVM7bUJBQUMsWUFBWTtZQUNILElBQUk7a0JBQXZCLFNBQVM7bUJBQUMsT0FBTztZQW9DbEIsUUFBUTtrQkFEUCxZQUFZO21CQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dDcmVhdGVUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlbXBsYXRlL2RpYWxvZy1jcmVhdGUtdGVtcGxhdGUvZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSUZpbHRlckNvbmZpZ3VyYXRpb24gfSBmcm9tICduZ3gtZmlsdGVyJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xyXG5pbXBvcnQgeyBNYXRQYWdpbmF0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XHJcbmltcG9ydCB7IE1hdFNvcnQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xyXG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGVcIjtcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm9uYm9hcmRpbmctcHJvZmlsZS1saXN0XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi90ZW1wbGF0ZS1wcm9maWxlLWxpc3QuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5zY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQcm9maWxlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZGlzcGxheWVkQ29sdW1ucyA9IFtcIk5hbWVcIiwgXCJ2Y29udGFjdHNcIiwgXCJjcmVhdGVkQXRcIiwgXCJ1cGRhdGVkQXRcIiwgXCJhY3Rpb25cIl07XHJcbiAgZGF0YXM6IGFueSA9IFtdO1xyXG4gIHB1Ymxpc2hUZW1wbGF0ZTogYW55ID0gW107XHJcbiAgZHJhZnRUZW1wbGF0ZTogYW55ID0gW107XHJcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55PihbXSk7XHJcbiAgZGVmYXVsdEVsZXZhdGlvbiA9IDI7XHJcbiAgcmFpc2VkRWxldmF0aW9uID0gODtcclxuICBsb2FkaW5nID0gZmFsc2U7XHJcbiAgY3BJZCA9IG51bGw7XHJcbiAgZmlsdGVyRGF0YSA9IHtcclxuICAgIFN0YXR1czogbnVsbCxcclxuICAgIHNvcnROYW1lQXNjOiB0cnVlLFxyXG4gICAgc3RhcnRfZGF0ZTogbnVsbCxcclxuICAgIGVuZF9kYXRlOiBudWxsLFxyXG4gICAgc2VhcmNoVGV4dDogJycsXHJcbiAgICBzZXJ2aWNlOiAnJ1xyXG4gIH1cclxuXHJcbiAgbmd4RmlsdGVyRGF0YTogSUZpbHRlckNvbmZpZ3VyYXRpb25bXSA9IFtcclxuICAgIHtcclxuICAgICAgZmlsdGVyRGF0YToge1xyXG4gICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAga2V5OiAnU3RhdHVzJyxcclxuICAgICAgICBsYWJlbDogJ1N0YXR1dCcsXHJcbiAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgICAgbGFiZWw6ICdQdWJsacOpcydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICAgICAgbGFiZWw6ICdCcm91aWxsb25zJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgZmlsdGVyRGF0YToge1xyXG4gICAgICAgIHR5cGU6ICdkYXRlJyxcclxuICAgICAgICBrZXk6ICdjcmVhdGVkQXQnLFxyXG4gICAgICAgIG9wZXJhdG9yOiBcImd0ZVwiLFxyXG4gICAgICAgIGxhYmVsOiAnRGF0ZSBNaW4gICdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmlsdGVyRGF0YToge1xyXG4gICAgICAgIHR5cGU6ICdkYXRlJyxcclxuICAgICAgICBrZXk6ICdjcmVhdGVkQXQnLFxyXG4gICAgICAgIG9wZXJhdG9yOiBcImx0ZVwiLFxyXG4gICAgICAgIGxhYmVsOiAnRGF0ZSBNYXgnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpbHRlckRhdGE6IHtcclxuICAgICAgICB0eXBlOiBcInNvcnRcIixcclxuICAgICAgICBrZXk6IFwiTmFtZVwiLFxyXG4gICAgICAgIHZhbHVlOiBcImFzY1wiLFxyXG4gICAgICAgIGxhYmVsOiBcIk5vbVwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBdXHJcblxyXG4gIHRvVGVtcGxhdGVDb3B5SWQgPSBcIlwiXHJcbiAgY3VycmVudEZpbHRlciA9IFwiYWxsXCJcclxuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XHJcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xyXG4gIHB1Ymxpc2hUZW1wbGF0ZUxlbmd0aDogYW55O1xyXG4gIGRyYWZ0VGVtcGxhdGVMZW5ndGg6IGFueTtcclxuICB0YWdzID0gW11cclxuICBuZ3hGaWx0ZXJJbml0OiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UudGVtcGxhdGVzLnN1YnNjcmliZSgodGVtcGxhdGVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHRlbXBsYXRlcyAmJiB0ZW1wbGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuZGF0YXMgPSB0ZW1wbGF0ZXM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm5neEZpbHRlckluaXQgPSBKU09OLnN0cmluZ2lmeSh0aGlzLm5neEZpbHRlckRhdGEpXHJcbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgdGhpcy5nZXRBbGxQcm9maWxzKCk7XHJcbiAgICAgIHRoaXMudGFncyA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxUYWdzKCk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxuXHJcbiAgb25GaWx0ZXIoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5kYXRhcykge1xyXG4gICAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IGV2ZW50LmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IHRydWUpO1xyXG4gICAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSBldmVudC5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uUmVmcmVzaChldmVudCkge1xyXG4gICAgdGhpcy5uZ3hGaWx0ZXJEYXRhID0gSlNPTi5wYXJzZSh0aGlzLm5neEZpbHRlckluaXQpXHJcbiAgICBpZiAoZXZlbnQuZGF0YXMpIHtcclxuICAgICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSBldmVudC5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSB0cnVlKTtcclxuICAgICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gZXZlbnQuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcclxuICBvblNjcm9sbChldmVudCkge1xyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKTtcclxuICAgIGNvbnN0IG5hdkxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXZlLXRlbXBsYXRlIC5ib3gtdGVtcGxhdGVcIik7XHJcbiAgICBsZXQgY3VycmVudCA9IFwiXCI7XHJcbiAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlY3Rpb25Ub3AgPSBzZWN0aW9uLm9mZnNldFRvcDtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5zY3JvbGxUb3AgPiBzZWN0aW9uVG9wKSB7XHJcbiAgICAgICAgY3VycmVudCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKFwiaWRcIilcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBuYXZMaS5mb3JFYWNoKChsaSkgPT4ge1xyXG5cclxuXHJcbiAgICAgIGNvbnN0IGlkID0gbGkuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYmxpbmtcIik7XHJcbiAgICAgIGlmIChpZC5zdWJzdHJpbmcoMCwgaWQubGVuZ3RoIC0gMSkgPT09IGN1cnJlbnQpIHtcclxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYmxpbmtcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnYmxpbmsnKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQWRkUHJvZmlsKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib25ib2FyZGluZy90ZW1wbGF0ZS8wXCJdKTtcclxuICB9XHJcblxyXG4gIG9uRWRpdFByb2ZpbChpZCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib25ib2FyZGluZy90ZW1wbGF0ZS9cIiwgaWRdKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uQ2hhbmdlU3RhdHVzKGRhdGEsIFN0YXR1cykge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZVByb2ZpbCh7IC4uLmRhdGEsIFN0YXR1cyB9KTtcclxuICAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSB0cnVlKTtcclxuICAgIHRoaXMuZHJhZnRUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gZmFsc2UpO1xyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBhd2FpdCB0aGlzLmdldEFsbFByb2ZpbHMoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJyb3IuLi4uLi5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkRlbGV0ZShpZCkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxyXG4gICAgaWYgKGNvbmZpcm0oXCJWb3VsZXogdm91cyBzdXBwcmltZXIgY2V0dGUgdGVtcGxhdGUgP1wiKSkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZGVsZXRlUHJvZmlsKGlkKTtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0QWxsUHJvZmlscygpXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0QWxsUHJvZmlscygpIHtcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XHJcbiAgICB0aGlzLmRhdGFzID0gcHJvZmlsZTtcclxuICAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSB0cnVlKTtcclxuICAgIHRoaXMuZHJhZnRUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gZmFsc2UpO1xyXG5cclxuICAgIHRoaXMucHVibGlzaFRlbXBsYXRlTGVuZ3RoID0gdGhpcy5wdWJsaXNoVGVtcGxhdGUubGVuZ3RoXHJcbiAgICB0aGlzLmRyYWZ0VGVtcGxhdGVMZW5ndGggPSB0aGlzLmRyYWZ0VGVtcGxhdGUubGVuZ3RoXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIG9uRmlsdGVyVGVtcGxhdGUoKSB7XHJcbiAgICBjb25zdCBkYXRhVG9GaWx0ZXIgPSB0aGlzLmZpbHRlckRhdGEuc2VhcmNoVGV4dCAhPT0gJycgPyB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5OYW1lLnRvTG93ZXJDYXNlKCkuc2VhcmNoKHRoaXMuZmlsdGVyRGF0YS5zZWFyY2hUZXh0LnRvTG9jYWxlTG93ZXJDYXNlKCkpID4gLTEpIDogdGhpcy5kYXRhc1xyXG4gICAgaWYgKHRoaXMuZmlsdGVyRGF0YS5TdGF0dXMgPT09IFwiYWxsXCIpIHtcclxuICAgICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSBkYXRhVG9GaWx0ZXIuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gdHJ1ZSk7XHJcbiAgICAgIHRoaXMuZHJhZnRUZW1wbGF0ZSA9IGRhdGFUb0ZpbHRlci5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyRGF0YS5TdGF0dXMgPT09ICdwdWJsaXNoJykge1xyXG4gICAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IGRhdGFUb0ZpbHRlci5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSB0cnVlKTtcclxuICAgICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gW107XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyRGF0YS5TdGF0dXMgPT09ICdkcmFmdCcpIHtcclxuICAgICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSBbXTtcclxuICAgICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gZGF0YVRvRmlsdGVyLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZpbHRlckRhdGEuc3RhcnRfZGF0ZSkge1xyXG4gICAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IHRoaXMucHVibGlzaFRlbXBsYXRlLmZpbHRlcigoZGF0YSkgPT4gbmV3IERhdGUoZGF0YS5jcmVhdGVkQXQpLmdldFRpbWUoKSA+PSBuZXcgRGF0ZSh0aGlzLmZpbHRlckRhdGEuc3RhcnRfZGF0ZSkuZ2V0VGltZSgpKTtcclxuICAgICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gdGhpcy5kcmFmdFRlbXBsYXRlLmZpbHRlcigoZGF0YSkgPT4gbmV3IERhdGUoZGF0YS5jcmVhdGVkQXQpLmdldFRpbWUoKSA+PSBuZXcgRGF0ZSh0aGlzLmZpbHRlckRhdGEuc3RhcnRfZGF0ZSkuZ2V0VGltZSgpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZpbHRlckRhdGEuZW5kX2RhdGUpIHtcclxuICAgICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSB0aGlzLnB1Ymxpc2hUZW1wbGF0ZS5maWx0ZXIoKGRhdGEpID0+IG5ldyBEYXRlKGRhdGEuY3JlYXRlZEF0KS5nZXRUaW1lKCkgPD0gbmV3IERhdGUodGhpcy5maWx0ZXJEYXRhLmVuZF9kYXRlKS5nZXRUaW1lKCkpO1xyXG4gICAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSB0aGlzLmRyYWZ0VGVtcGxhdGUuZmlsdGVyKChkYXRhKSA9PiBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkuZ2V0VGltZSgpIDw9IG5ldyBEYXRlKHRoaXMuZmlsdGVyRGF0YS5lbmRfZGF0ZSkuZ2V0VGltZSgpKTtcclxuICAgIH1cclxuICAgIHRoaXMucHVibGlzaFRlbXBsYXRlLnNvcnQoKGEsIGIpID0+IHRoaXMuZmlsdGVyRGF0YS5zb3J0TmFtZUFzYyA/IChiLk5hbWUudG9Mb3dlckNhc2UoKSA+IGEuTmFtZS50b0xvd2VyQ2FzZSgpID8gMSA6IC0xKSA6IChiLk5hbWUudG9Mb3dlckNhc2UoKSA+IGEuTmFtZS50b0xvd2VyQ2FzZSgpID8gLTEgOiAxKSk7XHJcbiAgICB0aGlzLmRyYWZ0VGVtcGxhdGUuc29ydCgoYSwgYikgPT4gdGhpcy5maWx0ZXJEYXRhLnNvcnROYW1lQXNjID8gKGIuTmFtZS50b0xvd2VyQ2FzZSgpID4gYS5OYW1lLnRvTG93ZXJDYXNlKCkgPyAxIDogLTEpIDogKGIuTmFtZS50b0xvd2VyQ2FzZSgpID4gYS5OYW1lLnRvTG93ZXJDYXNlKCkgPyAtMSA6IDEpKTtcclxuICB9XHJcbiAgb25Tb3J0KCkge1xyXG4gICAgdGhpcy5maWx0ZXJEYXRhLnNvcnROYW1lQXNjID0gIXRoaXMuZmlsdGVyRGF0YS5zb3J0TmFtZUFzYztcclxuICAgIHRoaXMub25GaWx0ZXJUZW1wbGF0ZSgpXHJcbiAgfVxyXG5cclxuICBhc3luYyBjb3B5VGVtcGxhdGUoZGF0YSkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxyXG4gICAgdGhpcy5jcElkID0gZGF0YS5faWRcclxuICAgIGNvbnN0IHsgX2lkLCAuLi5yZXN0IH0gPSBkYXRhXHJcbiAgICBjb25zdCBjb3B5TmFtZSA9IGRhdGEuTmFtZSArIFwiIC0gY29waWVcIlxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZVByb2ZpbCh7IC4uLnJlc3QsIE5hbWU6IGNvcHlOYW1lIH0pO1xyXG4gICAgdGhpcy50b1RlbXBsYXRlQ29weUlkID0gYCMke2NvcHlOYW1lfWBcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgdGhpcy5vbkVkaXRQcm9maWwocmVzdWx0Ll9pZClcclxuICAgICAgdGhpcy5jcElkID0gbnVsbFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJyb3IuLi4uLi5cIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG5cclxuICB9XHJcblxyXG4gIG9wZW5EaWFsb2coKSB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0NyZWF0ZVRlbXBsYXRlQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChjdXJyZW50OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UuY3VycmVudFRlbXBsYXRlLm5leHQoY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuc2VydmljZS5tYWluUGF0aCArICcvdGVtcGxhdGUvMCddKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1haW5cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWxpc3RcIiAqbmdJZj1cImRhdGFzICYmIGRhdGFzLmxlbmd0aCE9PTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPlByb2ZpbHMgKHt7ZGF0YXMubGVuZ3RofX0pPC9oMj5cclxuICAgICAgICAgICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImFkZC1wcm9maWxcIiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3LDqWVyIHByb2ZpbCA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8bmd4LWZpbHRlciBbZmlsdGVyQ29uZmlnXT1cIm5neEZpbHRlckRhdGFcIiBsYW5nPVwiZnJcIiAob25GaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKG9uUmVmcmVzaCk9XCJvblJlZnJlc2goJGV2ZW50KVwiIFtkYXRhc109XCJkYXRhc1wiIFt3aXRoUmVmcmVzaF09XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8L25neC1maWx0ZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmd4LWZpbHRlciBzZWFyY2hUeXBlPVwic2VhcmNoLXRleHRcIiBsYW5nPVwiZnJcIiAob25GaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiIFtkYXRhc109XCJkYXRhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWZpbHRlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2ZpbC1saXN0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXZlLXRlbXBsYXRlXCIgKHNjcm9sbCk9XCJvblNjcm9sbCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gYXBwTWF0ZXJpYWxFbGV2YXRpb24gW2RlZmF1bHRFbGV2YXRpb25dPVwiMFwiIHJhaXNlZEVsZXZhdGlvbj1cIjFcIiBjbGFzcz1cImJveC10ZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBkIG9mIHB1Ymxpc2hUZW1wbGF0ZTtsZXQgaW5kZXg9aW5kZXhcIiBbaWRdPVwiZC5OYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29nbGUtYnV0dG9uXCI+PHNwYW4+TGl2ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGNvbG9yPVwiIzZGRThEN1wiIFsobmdNb2RlbCldPVwiZC5TdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlU3RhdHVzKGQsZmFsc2UpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWNvbnRlbnRcIiBbcm91dGVyTGlua109XCJbdGhpcy5zZXJ2aWNlLm1haW5QYXRoKycvdGVtcGxhdGUvJytkLl9pZF1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGVtcGxhdGUtdGl0bGVcIj4ge3tkLk5hbWV9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGVtcGxhdGUtZGF0ZVwiPiB7e2QuY3JlYXRlZEF0IHwgZGF0ZSA6J2RkL01NL3l5J319PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wbGF0ZS1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkVkaXRQcm9maWwoZC5faWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY29weVRlbXBsYXRlKGQpXCIgW25neFNjcm9sbFRvXT1cInRvVGVtcGxhdGVDb3B5SWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLWxvYWRpbmctcGFnZSAqbmdJZj1cImxvYWRpbmcgJiYgY3BJZD09PWQuX2lkXCI+PC9saWItbG9hZGluZy1wYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIiFsb2FkaW5nIHx8IGNwSWQhPT1kLl9pZFwiPmZpbHRlcl9ub25lPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRGVsZXRlKGQuX2lkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyYWZ0LXRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBhcHBNYXRlcmlhbEVsZXZhdGlvbiBbZGVmYXVsdEVsZXZhdGlvbl09XCIwXCIgcmFpc2VkRWxldmF0aW9uPVwiMVwiIGNsYXNzPVwiYm94LXRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGQgb2YgZHJhZnRUZW1wbGF0ZTtsZXQgaW5kZXg9aW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2dsZS1idXR0b24gZHJhZnRcIj48c3Bhbj5Ccm91aWxsb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBjbGFzcz1cImRyYWZ0XCIgWyhuZ01vZGVsKV09XCJkLlN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2VTdGF0dXMoZCx0cnVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1jb250ZW50XCIgW3JvdXRlckxpbmtdPVwiW3RoaXMuc2VydmljZS5tYWluUGF0aCsnL3RlbXBsYXRlLycrZC5faWRdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRlbXBsYXRlLXRpdGxlXCI+IHt7ZC5OYW1lfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRlbXBsYXRlLWRhdGVcIj4ge3tkLmNyZWF0ZWRBdCB8IGRhdGUgOidkZC9NTS95eSd9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcGxhdGUtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25FZGl0UHJvZmlsKGQuX2lkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNvcHlUZW1wbGF0ZShkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItbG9hZGluZy1wYWdlICpuZ0lmPVwibG9hZGluZyAmJiBjcElkPT09ZC5faWRcIj48L2xpYi1sb2FkaW5nLXBhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWxvYWRpbmcgfHwgY3BJZCE9PWQuX2lkXCI+ZmlsdGVyX25vbmU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25EZWxldGUoZC5faWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bGliLW5vLWRhdGEgKm5nSWY9XCJkYXRhcy5sZW5ndGg9PT0wXCIgKHNob3dQb3B1cCk9XCJvcGVuRGlhbG9nKClcIj48L2xpYi1uby1kYXRhPlxyXG48L2Rpdj4iXX0=