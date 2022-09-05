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
    i0.ɵɵlistener("onFilter", function TemplateProfileListComponent_div_1_Template_ngx_filter_onFilter_10_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.onFilter($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 9)(12, "ngx-filter", 10);
    i0.ɵɵlistener("onFilter", function TemplateProfileListComponent_div_1_Template_ngx_filter_onFilter_12_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.onFilter($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 11)(14, "div", 12);
    i0.ɵɵlistener("scroll", function TemplateProfileListComponent_div_1_Template_div_scroll_14_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.onScroll($event); });
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
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "lib-no-data", 29);
    i0.ɵɵlistener("showPopup", function TemplateProfileListComponent_lib_no_data_2_Template_lib_no_data_showPopup_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.openDialog(); });
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
    } }, decls: 3, vars: 2, consts: [[1, "main"], ["class", "content-list", 4, "ngIf"], [3, "showPopup", 4, "ngIf"], [1, "content-list"], [1, "list"], [1, "header-top"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "click"], [1, "list-title"], ["lang", "fr", 3, "filterConfig", "datas", "withRefresh", "onFilter"], [1, "filter-item"], ["searchType", "search-text", "lang", "fr", 3, "datas", "onFilter"], [1, "profil-list-content"], [1, "live-template", 3, "scroll"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", "id", 4, "ngFor", "ngForOf"], [1, "draft-template"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation", "id"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelChange"], [1, "box-content", 3, "routerLink"], [1, "template-title"], [1, "template-date"], [1, "template-footer"], [1, "action-button", 2, "background-color", "transparent", 3, "click"], [1, "action-button", 2, "background-color", "transparent", 3, "ngxScrollTo", "click"], [4, "ngIf"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation"], [1, "toogle-button", "draft"], [1, "draft", 3, "ngModel", "ngModelChange"], [3, "showPopup"]], template: function TemplateProfileListComponent_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: "onboarding-profile-list", template: "<div class=\"main\">\r\n    <div class=\"content-list\" *ngIf=\"datas && datas.length!==0\">\r\n        <div class=\"list\">\r\n            <div class=\"header-top\">\r\n                <h2>Profils ({{datas.length}})</h2>\r\n                <a role=\"button\" class=\"add-profil\" (click)=\"openDialog()\" mat-raised-button color=\"primary\">\r\n                    Cr\u00E9er profil <mat-icon>add</mat-icon>\r\n                </a>\r\n            </div>\r\n            <div class=\"list-title\">\r\n                <ngx-filter [filterConfig]=\"ngxFilterData\" lang=\"fr\" (onFilter)=\"onFilter($event)\" [datas]=\"datas\"\r\n                    [withRefresh]=\"true\">\r\n                </ngx-filter>\r\n                <div class=\"filter-item\">\r\n                    <ngx-filter searchType=\"search-text\" lang=\"fr\" (onFilter)=\"onFilter($event)\" [datas]=\"datas\">\r\n                    </ngx-filter>\r\n                </div>\r\n            </div>\r\n            <div class=\"profil-list-content\">\r\n                <div class=\"live-template\" (scroll)=\"onScroll($event)\">\r\n                    <section appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\r\n                        *ngFor=\"let d of publishTemplate;let index=index\" [id]=\"d.Name\">\r\n                        <div class=\"toogle-button\"><span>Live</span>\r\n                            <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"d.Status\"\r\n                                (ngModelChange)=\"onChangeStatus(d,false)\">\r\n                            </mat-slide-toggle>\r\n                        </div>\r\n                        <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\r\n                            <p class=\"template-title\"> {{d.Name}}</p>\r\n                            <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\r\n                        </div>\r\n\r\n                        <div class=\"template-footer\">\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"onEditProfil(d._id)\">\r\n                                <mat-icon>edit</mat-icon>\r\n                            </button>\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"copyTemplate(d)\" [ngxScrollTo]=\"toTemplateCopyId\">\r\n                                <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\r\n                                <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\r\n                            </button>\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"onDelete(d._id)\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                        </div>\r\n                    </section>\r\n                </div>\r\n                <div class=\"draft-template\">\r\n                    <div appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\r\n                        *ngFor=\"let d of draftTemplate;let index=index\">\r\n                        <div class=\"toogle-button draft\"><span>Brouillon</span>\r\n                            <mat-slide-toggle class=\"draft\" [(ngModel)]=\"d.Status\"\r\n                                (ngModelChange)=\"onChangeStatus(d,true)\">\r\n                            </mat-slide-toggle>\r\n                        </div>\r\n                        <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\r\n                            <p class=\"template-title\"> {{d.Name}}</p>\r\n                            <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\r\n                        </div>\r\n\r\n                        <div class=\"template-footer\">\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"onEditProfil(d._id)\">\r\n                                <mat-icon>edit</mat-icon>\r\n                            </button>\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"copyTemplate(d)\">\r\n                                <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\r\n                                <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\r\n                            </button>\r\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                (click)=\"onDelete(d._id)\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <lib-no-data *ngIf=\"datas.length===0\" (showPopup)=\"openDialog()\"></lib-no-data>\r\n</div>", styles: [".main{background:#f4f7f9 0% 0% no-repeat padding-box;opacity:1;height:100%}.main .content-list{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main .content-list h3{text-align:left;font: 700 23px/30px Nexa Text;letter-spacing:0px;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main .content-list p.sub-title{margin-bottom:57px;font: 20px/26px Nexa Text;letter-spacing:0px;color:#171f26;width:300px}.main .content-list .template-title{font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main .content-list .template-date{font-weight:250;font-size:14px;line-height:120%}.main .content-list .list{display:flex;flex-direction:column;gap:25px}.main .content-list .list .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.main .content-list .list .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.main .content-list .list .list-title ul li{padding-bottom:10px;cursor:pointer}.main .content-list .list .list-title ul li.active{border-bottom:4px solid #3c4252}.main .content-list .list .list-title .add-profil{margin-right:50px}.main .content-list .list .draft-template,.main .content-list .list .live-template{display:flex;flex-wrap:wrap;justify-content:flex-start;margin-bottom:30px;gap:30px}.main .content-list .list .box-template{width:277px;height:300px;position:relative;background:#ffffff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main .content-list .list .box-template img{width:81px;height:81px}.main .content-list .list .box-template a{background:#171f26 0% 0% no-repeat padding-box;border-radius:7px;font-size:15px}.main .content-list .list .box-template .box-content{width:100%;text-align:center}.main .content-list .list .box-template .box-content .picto-preview{width:113px;height:113px;background:#ffffff 0% 0% no-repeat padding-box;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main .content-list .list .box-template .box-content .picto-preview h3{font-size:40px;color:#dce4e9}.main .content-list .list .box-template .toogle-button{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-style:normal;font-size:18px;line-height:18px}.main .content-list .list .box-template .toogle-button span{padding-right:10px}.main .content-list .list .box-template .toogle-button.draft{color:#f3a124}.main .content-list .list .new-template{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main .content-list .list .add-profil{background-color:#171f26}.main .content-list .template-footer{background:#543cb6;border-radius:0 0 5px 5px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main .content-list .template-footer button.action-button{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}.blink{animation:blink 2s ease-out;border:2px solid red;border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}to{transform:scale(1);opacity:1}}.header-top{display:flex;align-items:center;justify-content:space-between}.profil-list-content{max-height:70vh;overflow:auto}.profil-list-content::-webkit-scrollbar{width:5px}.profil-list-content::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWxpc3QvdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWxpc3QvdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFHbEksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNnQzdCLG1DQUFxRTs7O0lBQ3JFLGdDQUEyQztJQUFBLDJCQUFXO0lBQUEsaUJBQVc7Ozs7O0lBcEI3RSxtQ0FDb0UsY0FBQSxXQUFBO0lBQy9CLG9CQUFJO0lBQUEsaUJBQU87SUFDeEMsNENBQzhDO0lBRFosaVFBQXNCLDJQQUNuQyw2QkFBaUIsS0FBSyxDQUFDLElBRFk7SUFFeEQsaUJBQW1CLEVBQUE7SUFFdkIsK0JBQW1GLFlBQUE7SUFDcEQsWUFBVTtJQUFBLGlCQUFJO0lBQ3pDLDZCQUF5QjtJQUFDLFlBQWtDOztJQUFBLGlCQUFJLEVBQUE7SUFHcEUsZ0NBQTZCLGtCQUFBO0lBRXJCLCtPQUFTLDhCQUFtQixJQUFDO0lBQzdCLGlDQUFVO0lBQUEscUJBQUk7SUFBQSxpQkFBVyxFQUFBO0lBRTdCLG1DQUMrRDtJQUEzRCwrT0FBUywwQkFBZSxJQUFDO0lBQ3pCLDJIQUFxRTtJQUNyRSwyR0FBaUU7SUFDckUsaUJBQVM7SUFDVCxtQ0FDOEI7SUFBMUIsK09BQVMsMEJBQWUsSUFBQztJQUN6QixpQ0FBVTtJQUFBLHVCQUFNO0lBQUEsaUJBQVcsRUFBQSxFQUFBLEVBQUE7Ozs7SUF4QlQsb0NBQXNCLGlCQUFBO0lBR1YsZUFBc0I7SUFBdEIscUNBQXNCO0lBSW5DLGVBQXlEO0lBQXpELDJHQUF5RDtJQUNuRCxlQUFVO0lBQVYseUNBQVU7SUFDWCxlQUFrQztJQUFsQyxpRkFBa0M7SUFTOUIsZUFBZ0M7SUFBaEMscURBQWdDO0lBQ3ZDLGVBQTZCO0lBQTdCLGlFQUE2QjtJQUNyQyxlQUE4QjtJQUE5QixrRUFBOEI7OztJQTZCekMsbUNBQXFFOzs7SUFDckUsZ0NBQTJDO0lBQUEsMkJBQVc7SUFBQSxpQkFBVzs7OztJQXBCN0UsK0JBQ29ELGNBQUEsV0FBQTtJQUNULHlCQUFTO0lBQUEsaUJBQU87SUFDbkQsNENBQzZDO0lBRGIsZ1FBQXNCLHlQQUNqQyw4QkFBaUIsSUFBSSxDQUFDLElBRFc7SUFFdEQsaUJBQW1CLEVBQUE7SUFFdkIsK0JBQW1GLFlBQUE7SUFDcEQsWUFBVTtJQUFBLGlCQUFJO0lBQ3pDLDZCQUF5QjtJQUFDLFlBQWtDOztJQUFBLGlCQUFJLEVBQUE7SUFHcEUsZ0NBQTZCLGtCQUFBO0lBRXJCLDZPQUFTLCtCQUFtQixJQUFDO0lBQzdCLGlDQUFVO0lBQUEscUJBQUk7SUFBQSxpQkFBVyxFQUFBO0lBRTdCLG1DQUM4QjtJQUExQiw2T0FBUywyQkFBZSxJQUFDO0lBQ3pCLHVIQUFxRTtJQUNyRSx1R0FBaUU7SUFDckUsaUJBQVM7SUFDVCxtQ0FDOEI7SUFBMUIsNk9BQVMsMkJBQWUsSUFBQztJQUN6QixpQ0FBVTtJQUFBLHVCQUFNO0lBQUEsaUJBQVcsRUFBQSxFQUFBLEVBQUE7Ozs7SUF4QmIsb0NBQXNCO0lBR1IsZUFBc0I7SUFBdEIsc0NBQXNCO0lBSWpDLGVBQXlEO0lBQXpELDRHQUF5RDtJQUNuRCxlQUFVO0lBQVYsMENBQVU7SUFDWCxlQUFrQztJQUFsQyxrRkFBa0M7SUFVckMsZUFBNkI7SUFBN0Isa0VBQTZCO0lBQ3JDLGVBQThCO0lBQTlCLG1FQUE4Qjs7OztJQXJFckUsOEJBQTRELGFBQUEsYUFBQSxTQUFBO0lBRzVDLFlBQTBCO0lBQUEsaUJBQUs7SUFDbkMsNEJBQTZGO0lBQXpELHNLQUFTLG9CQUFZLElBQUM7SUFDdEQsbUNBQWE7SUFBQSxnQ0FBVTtJQUFBLG1CQUFHO0lBQUEsaUJBQVcsRUFBQSxFQUFBO0lBRzdDLDhCQUF3QixxQkFBQTtJQUNpQyw0TEFBWSx3QkFBZ0IsSUFBQztJQUVsRixpQkFBYTtJQUNiLCtCQUF5QixzQkFBQTtJQUMwQiw0TEFBWSx3QkFBZ0IsSUFBQztJQUM1RSxpQkFBYSxFQUFBLEVBQUE7SUFHckIsZ0NBQWlDLGVBQUE7SUFDRixpTEFBVSx3QkFBZ0IsSUFBQztJQUNsRCxnR0EyQlU7SUFDZCxpQkFBTTtJQUNOLGdDQUE0QjtJQUN4Qix3RkE0Qk07SUFDVixpQkFBTSxFQUFBLEVBQUEsRUFBQTs7O0lBM0VGLGVBQTBCO0lBQTFCLDREQUEwQjtJQU1sQixlQUE4QjtJQUE5QixtREFBOEIsdUJBQUEscUJBQUE7SUFJdUMsZUFBZTtJQUFmLG9DQUFlO0lBTzFFLGVBQW1CO0lBQW5CLGdEQUFtQjtJQThCbkIsZUFBaUI7SUFBakIsOENBQWlCOzs7O0lBZ0NuRCx1Q0FBaUU7SUFBM0IsZ01BQWEsb0JBQVksSUFBQztJQUFDLGlCQUFjOztBRG5FbkYsTUFBTSxPQUFPLDRCQUE0QjtJQXdFdkMsWUFBbUIsT0FBMEIsRUFBVSxNQUFjLEVBQVUsTUFBaUI7UUFBN0UsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQXZFaEcscUJBQWdCLEdBQUcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0UsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQUMxQixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUM3QyxxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osZUFBVSxHQUFHO1lBQ1gsTUFBTSxFQUFFLElBQUk7WUFDWixXQUFXLEVBQUUsSUFBSTtZQUNqQixVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRSxFQUFFO1lBQ2QsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFBO1FBRUQsa0JBQWEsR0FBMkI7WUFDdEM7Z0JBQ0UsVUFBVSxFQUFFO29CQUNWLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxFQUFFO29CQUNULEdBQUcsRUFBRSxRQUFRO29CQUNiLEtBQUssRUFBRSxRQUFRO29CQUNmLE9BQU8sRUFBRTt3QkFDUDs0QkFDRSxLQUFLLEVBQUUsSUFBSTs0QkFDWCxLQUFLLEVBQUUsU0FBUzt5QkFDakI7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLEtBQUs7NEJBQ1osS0FBSyxFQUFFLFlBQVk7eUJBQ3BCO3FCQUNGO2lCQUNGO2FBQ0Y7WUFFRDtnQkFDRSxVQUFVLEVBQUU7b0JBQ1YsSUFBSSxFQUFFLE1BQU07b0JBQ1osR0FBRyxFQUFFLFdBQVc7b0JBQ2hCLFFBQVEsRUFBRSxLQUFLO29CQUNmLEtBQUssRUFBRSxZQUFZO2lCQUNwQjthQUNGO1lBQ0Q7Z0JBQ0UsVUFBVSxFQUFFO29CQUNWLElBQUksRUFBRSxNQUFNO29CQUNaLEdBQUcsRUFBRSxXQUFXO29CQUNoQixRQUFRLEVBQUUsS0FBSztvQkFDZixLQUFLLEVBQUUsVUFBVTtpQkFDbEI7YUFDRjtZQUNEO2dCQUNFLFVBQVUsRUFBRTtvQkFDVixJQUFJLEVBQUUsTUFBTTtvQkFDWixHQUFHLEVBQUUsTUFBTTtvQkFDWCxLQUFLLEVBQUUsS0FBSztvQkFDWixLQUFLLEVBQUUsS0FBSztpQkFDYjthQUNGO1NBQ0YsQ0FBQTtRQUVELHFCQUFnQixHQUFHLEVBQUUsQ0FBQTtRQUNyQixrQkFBYSxHQUFHLEtBQUssQ0FBQTtRQUtyQixTQUFJLEdBQUcsRUFBRSxDQUFBO1FBRVAsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBYyxFQUFFLEVBQUU7WUFDbEQsSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVE7UUFDWixVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDcEIsTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFLO1FBQ1osSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQztJQUdELFFBQVEsQ0FBQyxLQUFLO1FBQ1osTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQTZDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEUsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUMzQixNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ3JDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxFQUFFO2dCQUN2QyxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUNyQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBR25CLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUIsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLE9BQU8sRUFBRTtnQkFDOUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDN0I7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFlBQVksQ0FBQyxFQUFFO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxNQUFNO1FBQy9CLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQztRQUNsRSxJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1NBQzNCO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBQ25CLElBQUksT0FBTyxDQUFDLHdDQUF3QyxDQUFDLEVBQUU7WUFDckQsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuRCxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7YUFDckI7U0FDRjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsYUFBYTtRQUNqQixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQTtRQUN4RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUE7SUFDdEQsQ0FBQztJQUlELGdCQUFnQjtRQUNkLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ2hMLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssS0FBSyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUM7U0FDckU7YUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUMvQyxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7U0FDekI7YUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFBRTtZQUM3QyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUM7U0FDckU7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDbkosSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNoSjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNqSixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzlJO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25MLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuTCxDQUFDO0lBQ0QsTUFBTTtRQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDM0QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7SUFDekIsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUE7UUFDcEIsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQTtRQUM3QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQTtRQUN2QyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksUUFBUSxFQUFFLENBQUE7UUFDdEMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtTQUNqQjthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO0lBRXRCLENBQUM7SUFFRCxVQUFVO1FBQ1IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEVBQUU7WUFDaEUsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTthQUNoQjtTQUNGLENBQUMsQ0FBQztRQUNILFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFZLEVBQUUsRUFBRTtZQUNqRCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQTthQUM5RDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7d0dBMU5VLDRCQUE0QjsrRUFBNUIsNEJBQTRCO3VCQW1FNUIsWUFBWTt1QkFDWixPQUFPOzs7Ozs7aUhBcEVQLG9CQUFnQjs7UUNoQjdCLDhCQUFrQjtRQUNkLDhFQWlGTTtRQUNOLDZGQUErRTtRQUNuRixpQkFBTTs7UUFuRnlCLGVBQStCO1FBQS9CLDBEQUErQjtRQWtGNUMsZUFBc0I7UUFBdEIsNkNBQXNCOzt1RkRuRTNCLDRCQUE0QjtjQUx4QyxTQUFTOzJCQUNFLHlCQUF5QjtpSEF1RVYsU0FBUztrQkFBakMsU0FBUzttQkFBQyxZQUFZO1lBQ0gsSUFBSTtrQkFBdkIsU0FBUzttQkFBQyxPQUFPO1lBMkJsQixRQUFRO2tCQURQLFlBQVk7bUJBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IERpYWxvZ0NyZWF0ZVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVtcGxhdGUvZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJRmlsdGVyQ29uZmlndXJhdGlvbiB9IGZyb20gJ25neC1maWx0ZXInO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XHJcbmltcG9ydCB7IE1hdFBhZ2luYXRvciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3JcIjtcclxuaW1wb3J0IHsgTWF0U29ydCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zb3J0XCI7XHJcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90YWJsZVwiO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwib25ib2FyZGluZy1wcm9maWxlLWxpc3RcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi90ZW1wbGF0ZS1wcm9maWxlLWxpc3QuY29tcG9uZW50LnNjc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVByb2ZpbGVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBkaXNwbGF5ZWRDb2x1bW5zID0gW1wiTmFtZVwiLCBcInZjb250YWN0c1wiLCBcImNyZWF0ZWRBdFwiLCBcInVwZGF0ZWRBdFwiLCBcImFjdGlvblwiXTtcclxuICBkYXRhczogYW55ID0gW107XHJcbiAgcHVibGlzaFRlbXBsYXRlOiBhbnkgPSBbXTtcclxuICBkcmFmdFRlbXBsYXRlOiBhbnkgPSBbXTtcclxuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KFtdKTtcclxuICBkZWZhdWx0RWxldmF0aW9uID0gMjtcclxuICByYWlzZWRFbGV2YXRpb24gPSA4O1xyXG4gIGxvYWRpbmcgPSBmYWxzZTtcclxuICBjcElkID0gbnVsbDtcclxuICBmaWx0ZXJEYXRhID0ge1xyXG4gICAgU3RhdHVzOiBudWxsLFxyXG4gICAgc29ydE5hbWVBc2M6IHRydWUsXHJcbiAgICBzdGFydF9kYXRlOiBudWxsLFxyXG4gICAgZW5kX2RhdGU6IG51bGwsXHJcbiAgICBzZWFyY2hUZXh0OiAnJyxcclxuICAgIHNlcnZpY2U6ICcnXHJcbiAgfVxyXG5cclxuICBuZ3hGaWx0ZXJEYXRhOiBJRmlsdGVyQ29uZmlndXJhdGlvbltdID0gW1xyXG4gICAge1xyXG4gICAgICBmaWx0ZXJEYXRhOiB7XHJcbiAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBrZXk6ICdTdGF0dXMnLFxyXG4gICAgICAgIGxhYmVsOiAnU3RhdHV0JyxcclxuICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgICBsYWJlbDogJ1B1Ymxpw6lzJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBsYWJlbDogJ0Jyb3VpbGxvbnMnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICBmaWx0ZXJEYXRhOiB7XHJcbiAgICAgICAgdHlwZTogJ2RhdGUnLFxyXG4gICAgICAgIGtleTogJ2NyZWF0ZWRBdCcsXHJcbiAgICAgICAgb3BlcmF0b3I6IFwiZ3RlXCIsXHJcbiAgICAgICAgbGFiZWw6ICdEYXRlIE1pbiAgJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmaWx0ZXJEYXRhOiB7XHJcbiAgICAgICAgdHlwZTogJ2RhdGUnLFxyXG4gICAgICAgIGtleTogJ2NyZWF0ZWRBdCcsXHJcbiAgICAgICAgb3BlcmF0b3I6IFwibHRlXCIsXHJcbiAgICAgICAgbGFiZWw6ICdEYXRlIE1heCdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmlsdGVyRGF0YToge1xyXG4gICAgICAgIHR5cGU6IFwic29ydFwiLFxyXG4gICAgICAgIGtleTogXCJOYW1lXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiYXNjXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiTm9tXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIF1cclxuXHJcbiAgdG9UZW1wbGF0ZUNvcHlJZCA9IFwiXCJcclxuICBjdXJyZW50RmlsdGVyID0gXCJhbGxcIlxyXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcclxuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XHJcbiAgcHVibGlzaFRlbXBsYXRlTGVuZ3RoOiBhbnk7XHJcbiAgZHJhZnRUZW1wbGF0ZUxlbmd0aDogYW55O1xyXG4gIHRhZ3MgPSBbXVxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlLnRlbXBsYXRlcy5zdWJzY3JpYmUoKHRlbXBsYXRlczogYW55KSA9PiB7XHJcbiAgICAgIGlmICh0ZW1wbGF0ZXMgJiYgdGVtcGxhdGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLmRhdGFzID0gdGVtcGxhdGVzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCkge1xyXG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IHRoaXMuZ2V0QWxsUHJvZmlscygpO1xyXG4gICAgICB0aGlzLnRhZ3MgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsVGFncygpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcblxyXG4gIG9uRmlsdGVyKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuZGF0YXMpIHtcclxuICAgICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSBldmVudC5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSB0cnVlKTtcclxuICAgICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gZXZlbnQuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcclxuICBvblNjcm9sbChldmVudCkge1xyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKTtcclxuICAgIGNvbnN0IG5hdkxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXZlLXRlbXBsYXRlIC5ib3gtdGVtcGxhdGVcIik7XHJcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tV1dXV1dXV1dXV1dXVy0tLS0tLS0tLS0tLS0tLS0tLScsIG5hdkxpKTtcclxuICAgIGxldCBjdXJyZW50ID0gXCJcIjtcclxuICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgY29uc3Qgc2VjdGlvblRvcCA9IHNlY3Rpb24ub2Zmc2V0VG9wO1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnNjcm9sbFRvcCA+IHNlY3Rpb25Ub3ApIHtcclxuICAgICAgICBjdXJyZW50ID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoXCJpZFwiKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIG5hdkxpLmZvckVhY2goKGxpKSA9PiB7XHJcblxyXG5cclxuICAgICAgY29uc3QgaWQgPSBsaS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJibGlua1wiKTtcclxuICAgICAgaWYgKGlkLnN1YnN0cmluZygwLCBpZC5sZW5ndGggLSAxKSA9PT0gY3VycmVudCkge1xyXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJibGlua1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdibGluaycpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25BZGRQcm9maWwoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJvbmJvYXJkaW5nL3RlbXBsYXRlLzBcIl0pO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0UHJvZmlsKGlkKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJvbmJvYXJkaW5nL3RlbXBsYXRlL1wiLCBpZF0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25DaGFuZ2VTdGF0dXMoZGF0YSwgU3RhdHVzKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlUHJvZmlsKHsgLi4uZGF0YSwgU3RhdHVzIH0pO1xyXG4gICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IHRydWUpO1xyXG4gICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSBmYWxzZSk7XHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuZ2V0QWxsUHJvZmlscygpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycnJvci4uLi4uLlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIG9uRGVsZXRlKGlkKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcbiAgICBpZiAoY29uZmlybShcIlZvdWxleiB2b3VzIHN1cHByaW1lciBjZXR0ZSB0ZW1wbGF0ZSA/XCIpKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2VydmljZS5kZWxldGVQcm9maWwoaWQpO1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRBbGxQcm9maWxzKClcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRBbGxQcm9maWxzKCkge1xyXG4gICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTtcclxuICAgIHRoaXMuZGF0YXMgPSBwcm9maWxlO1xyXG4gICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IHRydWUpO1xyXG4gICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSBmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5wdWJsaXNoVGVtcGxhdGVMZW5ndGggPSB0aGlzLnB1Ymxpc2hUZW1wbGF0ZS5sZW5ndGhcclxuICAgIHRoaXMuZHJhZnRUZW1wbGF0ZUxlbmd0aCA9IHRoaXMuZHJhZnRUZW1wbGF0ZS5sZW5ndGhcclxuICB9XHJcblxyXG5cclxuXHJcbiAgb25GaWx0ZXJUZW1wbGF0ZSgpIHtcclxuICAgIGNvbnN0IGRhdGFUb0ZpbHRlciA9IHRoaXMuZmlsdGVyRGF0YS5zZWFyY2hUZXh0ICE9PSAnJyA/IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLk5hbWUudG9Mb3dlckNhc2UoKS5zZWFyY2godGhpcy5maWx0ZXJEYXRhLnNlYXJjaFRleHQudG9Mb2NhbGVMb3dlckNhc2UoKSkgPiAtMSkgOiB0aGlzLmRhdGFzXHJcbiAgICBpZiAodGhpcy5maWx0ZXJEYXRhLlN0YXR1cyA9PT0gXCJhbGxcIikge1xyXG4gICAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IGRhdGFUb0ZpbHRlci5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSB0cnVlKTtcclxuICAgICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gZGF0YVRvRmlsdGVyLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IGZhbHNlKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJEYXRhLlN0YXR1cyA9PT0gJ3B1Ymxpc2gnKSB7XHJcbiAgICAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gZGF0YVRvRmlsdGVyLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IHRydWUpO1xyXG4gICAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSBbXTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJEYXRhLlN0YXR1cyA9PT0gJ2RyYWZ0Jykge1xyXG4gICAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IFtdO1xyXG4gICAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSBkYXRhVG9GaWx0ZXIuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZmlsdGVyRGF0YS5zdGFydF9kYXRlKSB7XHJcbiAgICAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gdGhpcy5wdWJsaXNoVGVtcGxhdGUuZmlsdGVyKChkYXRhKSA9PiBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID49IG5ldyBEYXRlKHRoaXMuZmlsdGVyRGF0YS5zdGFydF9kYXRlKS5nZXRUaW1lKCkpO1xyXG4gICAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSB0aGlzLmRyYWZ0VGVtcGxhdGUuZmlsdGVyKChkYXRhKSA9PiBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID49IG5ldyBEYXRlKHRoaXMuZmlsdGVyRGF0YS5zdGFydF9kYXRlKS5nZXRUaW1lKCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZmlsdGVyRGF0YS5lbmRfZGF0ZSkge1xyXG4gICAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IHRoaXMucHVibGlzaFRlbXBsYXRlLmZpbHRlcigoZGF0YSkgPT4gbmV3IERhdGUoZGF0YS5jcmVhdGVkQXQpLmdldFRpbWUoKSA8PSBuZXcgRGF0ZSh0aGlzLmZpbHRlckRhdGEuZW5kX2RhdGUpLmdldFRpbWUoKSk7XHJcbiAgICAgIHRoaXMuZHJhZnRUZW1wbGF0ZSA9IHRoaXMuZHJhZnRUZW1wbGF0ZS5maWx0ZXIoKGRhdGEpID0+IG5ldyBEYXRlKGRhdGEuY3JlYXRlZEF0KS5nZXRUaW1lKCkgPD0gbmV3IERhdGUodGhpcy5maWx0ZXJEYXRhLmVuZF9kYXRlKS5nZXRUaW1lKCkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUuc29ydCgoYSwgYikgPT4gdGhpcy5maWx0ZXJEYXRhLnNvcnROYW1lQXNjID8gKGIuTmFtZS50b0xvd2VyQ2FzZSgpID4gYS5OYW1lLnRvTG93ZXJDYXNlKCkgPyAxIDogLTEpIDogKGIuTmFtZS50b0xvd2VyQ2FzZSgpID4gYS5OYW1lLnRvTG93ZXJDYXNlKCkgPyAtMSA6IDEpKTtcclxuICAgIHRoaXMuZHJhZnRUZW1wbGF0ZS5zb3J0KChhLCBiKSA9PiB0aGlzLmZpbHRlckRhdGEuc29ydE5hbWVBc2MgPyAoYi5OYW1lLnRvTG93ZXJDYXNlKCkgPiBhLk5hbWUudG9Mb3dlckNhc2UoKSA/IDEgOiAtMSkgOiAoYi5OYW1lLnRvTG93ZXJDYXNlKCkgPiBhLk5hbWUudG9Mb3dlckNhc2UoKSA/IC0xIDogMSkpO1xyXG4gIH1cclxuICBvblNvcnQoKSB7XHJcbiAgICB0aGlzLmZpbHRlckRhdGEuc29ydE5hbWVBc2MgPSAhdGhpcy5maWx0ZXJEYXRhLnNvcnROYW1lQXNjO1xyXG4gICAgdGhpcy5vbkZpbHRlclRlbXBsYXRlKClcclxuICB9XHJcblxyXG4gIGFzeW5jIGNvcHlUZW1wbGF0ZShkYXRhKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcbiAgICB0aGlzLmNwSWQgPSBkYXRhLl9pZFxyXG4gICAgY29uc3QgeyBfaWQsIC4uLnJlc3QgfSA9IGRhdGFcclxuICAgIGNvbnN0IGNvcHlOYW1lID0gZGF0YS5OYW1lICsgXCIgLSBjb3BpZVwiXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlcnZpY2UuY3JlYXRlUHJvZmlsKHsgLi4ucmVzdCwgTmFtZTogY29weU5hbWUgfSk7XHJcbiAgICB0aGlzLnRvVGVtcGxhdGVDb3B5SWQgPSBgIyR7Y29weU5hbWV9YFxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICB0aGlzLm9uRWRpdFByb2ZpbChyZXN1bHQuX2lkKVxyXG4gICAgICB0aGlzLmNwSWQgPSBudWxsXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycnJvci4uLi4uLlwiKTtcclxuICAgIH1cclxuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXHJcblxyXG4gIH1cclxuXHJcbiAgb3BlbkRpYWxvZygpIHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQ3JlYXRlVGVtcGxhdGVDb21wb25lbnQsIHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRhZ3M6IHRoaXMudGFncyxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKGN1cnJlbnQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5jdXJyZW50VGVtcGxhdGUubmV4dChjdXJyZW50KTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5zZXJ2aWNlLm1haW5QYXRoICsgJy90ZW1wbGF0ZS8wJ10pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibWFpblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtbGlzdFwiICpuZ0lmPVwiZGF0YXMgJiYgZGF0YXMubGVuZ3RoIT09MFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdG9wXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+UHJvZmlscyAoe3tkYXRhcy5sZW5ndGh9fSk8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiIGNsYXNzPVwiYWRkLXByb2ZpbFwiIChjbGljayk9XCJvcGVuRGlhbG9nKClcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBDcsOpZXIgcHJvZmlsIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxuZ3gtZmlsdGVyIFtmaWx0ZXJDb25maWddPVwibmd4RmlsdGVyRGF0YVwiIGxhbmc9XCJmclwiIChvbkZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCIgW2RhdGFzXT1cImRhdGFzXCJcclxuICAgICAgICAgICAgICAgICAgICBbd2l0aFJlZnJlc2hdPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9uZ3gtZmlsdGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5neC1maWx0ZXIgc2VhcmNoVHlwZT1cInNlYXJjaC10ZXh0XCIgbGFuZz1cImZyXCIgKG9uRmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIiBbZGF0YXNdPVwiZGF0YXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L25neC1maWx0ZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9maWwtbGlzdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS10ZW1wbGF0ZVwiIChzY3JvbGwpPVwib25TY3JvbGwoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGFwcE1hdGVyaWFsRWxldmF0aW9uIFtkZWZhdWx0RWxldmF0aW9uXT1cIjBcIiByYWlzZWRFbGV2YXRpb249XCIxXCIgY2xhc3M9XCJib3gtdGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZCBvZiBwdWJsaXNoVGVtcGxhdGU7bGV0IGluZGV4PWluZGV4XCIgW2lkXT1cImQuTmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vZ2xlLWJ1dHRvblwiPjxzcGFuPkxpdmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBjb2xvcj1cIiM2RkU4RDdcIiBbKG5nTW9kZWwpXT1cImQuU3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZVN0YXR1cyhkLGZhbHNlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1jb250ZW50XCIgW3JvdXRlckxpbmtdPVwiW3RoaXMuc2VydmljZS5tYWluUGF0aCsnL3RlbXBsYXRlLycrZC5faWRdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRlbXBsYXRlLXRpdGxlXCI+IHt7ZC5OYW1lfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRlbXBsYXRlLWRhdGVcIj4ge3tkLmNyZWF0ZWRBdCB8IGRhdGUgOidkZC9NTS95eSd9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcGxhdGUtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25FZGl0UHJvZmlsKGQuX2lkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNvcHlUZW1wbGF0ZShkKVwiIFtuZ3hTY3JvbGxUb109XCJ0b1RlbXBsYXRlQ29weUlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1sb2FkaW5nLXBhZ2UgKm5nSWY9XCJsb2FkaW5nICYmIGNwSWQ9PT1kLl9pZFwiPjwvbGliLWxvYWRpbmctcGFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCIhbG9hZGluZyB8fCBjcElkIT09ZC5faWRcIj5maWx0ZXJfbm9uZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkRlbGV0ZShkLl9pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcmFmdC10ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgYXBwTWF0ZXJpYWxFbGV2YXRpb24gW2RlZmF1bHRFbGV2YXRpb25dPVwiMFwiIHJhaXNlZEVsZXZhdGlvbj1cIjFcIiBjbGFzcz1cImJveC10ZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBkIG9mIGRyYWZ0VGVtcGxhdGU7bGV0IGluZGV4PWluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29nbGUtYnV0dG9uIGRyYWZ0XCI+PHNwYW4+QnJvdWlsbG9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY2xhc3M9XCJkcmFmdFwiIFsobmdNb2RlbCldPVwiZC5TdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlU3RhdHVzKGQsdHJ1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtY29udGVudFwiIFtyb3V0ZXJMaW5rXT1cIlt0aGlzLnNlcnZpY2UubWFpblBhdGgrJy90ZW1wbGF0ZS8nK2QuX2lkXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZW1wbGF0ZS10aXRsZVwiPiB7e2QuTmFtZX19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZW1wbGF0ZS1kYXRlXCI+IHt7ZC5jcmVhdGVkQXQgfCBkYXRlIDonZGQvTU0veXknfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBsYXRlLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRWRpdFByb2ZpbChkLl9pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjb3B5VGVtcGxhdGUoZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLWxvYWRpbmctcGFnZSAqbmdJZj1cImxvYWRpbmcgJiYgY3BJZD09PWQuX2lkXCI+PC9saWItbG9hZGluZy1wYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIiFsb2FkaW5nIHx8IGNwSWQhPT1kLl9pZFwiPmZpbHRlcl9ub25lPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRGVsZXRlKGQuX2lkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGxpYi1uby1kYXRhICpuZ0lmPVwiZGF0YXMubGVuZ3RoPT09MFwiIChzaG93UG9wdXApPVwib3BlbkRpYWxvZygpXCI+PC9saWItbm8tZGF0YT5cclxuPC9kaXY+Il19