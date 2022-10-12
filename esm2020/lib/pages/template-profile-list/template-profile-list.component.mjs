import { Component, HostListener, ViewChild } from "@angular/core";
import { DialogCreateTemplateComponent } from "../../components/template/dialog-create-template/dialog-create-template.component";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { locales } from '../../i18n';
import * as i0 from "@angular/core";
import * as i1 from "../../onboarding.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/icon";
import * as i8 from "@nicky-lenaers/ngx-scroll-to";
import * as i9 from "ngx-filter";
import * as i10 from "ngx-intl-tel-input";
import * as i11 from "@angular/material/slide-toggle";
import * as i12 from "../../directives/elevation";
import * as i13 from "../../components/loading/loading.component";
import * as i14 from "../../components/template/no-data/no-data.component";
function TemplateProfileListComponent_div_1_section_13_lib_loading_page_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function TemplateProfileListComponent_div_1_section_13_mat_icon_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "filter_none");
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return [a0]; };
function TemplateProfileListComponent_div_1_section_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 14)(1, "div", 15)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-slide-toggle", 16);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_section_13_Template_mat_slide_toggle_ngModelChange_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r9); const d_r4 = restoredCtx.$implicit; return i0.ɵɵresetView(d_r4.Status = $event); })("ngModelChange", function TemplateProfileListComponent_div_1_section_13_Template_mat_slide_toggle_ngModelChange_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const d_r4 = restoredCtx.$implicit; const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.onChangeStatus(d_r4, false)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 17)(6, "p", 18);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 19);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 20)(12, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_section_13_Template_button_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const d_r4 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.onEditProfil(d_r4._id)); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "button", 22);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_section_13_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const d_r4 = restoredCtx.$implicit; const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.copyTemplate(d_r4)); });
    i0.ɵɵtemplate(16, TemplateProfileListComponent_div_1_section_13_lib_loading_page_16_Template, 1, 0, "lib-loading-page", 23);
    i0.ɵɵtemplate(17, TemplateProfileListComponent_div_1_section_13_mat_icon_17_Template, 2, 0, "mat-icon", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_section_13_Template_button_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const d_r4 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.onDelete(d_r4._id)); });
    i0.ɵɵelementStart(19, "mat-icon");
    i0.ɵɵtext(20, "delete");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const d_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("defaultElevation", 0)("id", d_r4.Name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.locale == null ? null : ctx_r2.locale.LIVE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", d_r4.Status);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(13, _c0, ctx_r2.service.mainPath + "/template/" + d_r4._id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", d_r4.Name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 10, d_r4.createdAt, "dd/MM/yy"), "");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngxScrollTo", ctx_r2.toTemplateCopyId);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.loading && ctx_r2.cpId === d_r4._id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.loading || ctx_r2.cpId !== d_r4._id);
} }
function TemplateProfileListComponent_div_1_div_15_lib_loading_page_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function TemplateProfileListComponent_div_1_div_15_mat_icon_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "filter_none");
    i0.ɵɵelementEnd();
} }
function TemplateProfileListComponent_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24)(1, "div", 25)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-slide-toggle", 26);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_1_div_15_Template_mat_slide_toggle_ngModelChange_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; return i0.ɵɵresetView(d_r14.Status = $event); })("ngModelChange", function TemplateProfileListComponent_div_1_div_15_Template_mat_slide_toggle_ngModelChange_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; const ctx_r20 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r20.onChangeStatus(d_r14, true)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 17)(6, "p", 18);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 19);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 20)(12, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_div_15_Template_button_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; const ctx_r21 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r21.onEditProfil(d_r14._id)); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_div_15_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; const ctx_r22 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r22.copyTemplate(d_r14)); });
    i0.ɵɵtemplate(16, TemplateProfileListComponent_div_1_div_15_lib_loading_page_16_Template, 1, 0, "lib-loading-page", 23);
    i0.ɵɵtemplate(17, TemplateProfileListComponent_div_1_div_15_mat_icon_17_Template, 2, 0, "mat-icon", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_div_15_Template_button_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; const ctx_r23 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r23.onDelete(d_r14._id)); });
    i0.ɵɵelementStart(19, "mat-icon");
    i0.ɵɵtext(20, "delete");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const d_r14 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("defaultElevation", 0);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.locale == null ? null : ctx_r3.locale.DRAFT);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", d_r14.Status);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(11, _c0, ctx_r3.service.mainPath + "/template/" + d_r14._id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", d_r14.Name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 8, d_r14.createdAt, "dd/MM/yy"), "");
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
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_1_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r24.openDialog()); });
    i0.ɵɵelementStart(6, "mat-icon");
    i0.ɵɵtext(7, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 7)(10, "ngx-filter", 8);
    i0.ɵɵlistener("onFilter", function TemplateProfileListComponent_div_1_Template_ngx_filter_onFilter_10_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r26 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r26.onFilter($event)); })("onRefresh", function TemplateProfileListComponent_div_1_Template_ngx_filter_onRefresh_10_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r27 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r27.onRefresh($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 9)(12, "div", 10);
    i0.ɵɵlistener("scroll", function TemplateProfileListComponent_div_1_Template_div_scroll_12_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r28 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r28.onScroll($event)); });
    i0.ɵɵtemplate(13, TemplateProfileListComponent_div_1_section_13_Template, 21, 15, "section", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 12);
    i0.ɵɵtemplate(15, TemplateProfileListComponent_div_1_div_15_Template, 21, 13, "div", 13);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", ctx_r0.locale == null ? null : ctx_r0.locale.PROFILES, " (", ctx_r0.datas.length, ")");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.locale == null ? null : ctx_r0.locale.CREATE_PROFILE, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("filterConfig", ctx_r0.ngxFilterData)("datas", ctx_r0.datas)("withRefresh", true);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.publishTemplate);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.draftTemplate);
} }
function TemplateProfileListComponent_lib_no_data_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "lib-no-data", 27);
    i0.ɵɵlistener("showPopup", function TemplateProfileListComponent_lib_no_data_2_Template_lib_no_data_showPopup_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r29.openDialog()); });
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
        this.locale = {};
        this.ngxFilterData = [];
        this.toTemplateCopyId = "";
        this.currentFilter = "all";
        this.tags = [];
        this.service.templates.subscribe((templates) => {
            if (templates && templates.length > 0) {
                this.datas = templates;
            }
        });
        this.service._lang.subscribe((locale) => {
            if (locale) {
                this.locale = locales[locale].PROFILES_LIST;
                this.ngxFilterData = [
                    {
                        filterData: {
                            type: "select",
                            value: "",
                            key: 'Status',
                            label: this.locale.STATUS,
                            options: [
                                {
                                    value: true,
                                    label: this.locale.PUBLISH
                                },
                                {
                                    value: false,
                                    label: this.locale.DRAFT
                                },
                            ],
                        }
                    },
                    {
                        filterData: {
                            type: 'date',
                            key: 'createdAt',
                            operator: "gte",
                            label: this.locale.DATE_MIN
                        }
                    },
                    {
                        filterData: {
                            type: 'date',
                            key: 'createdAt',
                            operator: "lte",
                            label: this.locale.DATE_MAX
                        }
                    },
                    {
                        filterData: {
                            type: "sort",
                            key: "Name",
                            value: "asc",
                            label: this.locale.NAME
                        }
                    }
                ];
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
        // if (event.datas) {
        //   this.publishTemplate = event.datas.filter((d) => d.Status === true);
        //   this.draftTemplate = event.datas.filter((d) => d.Status === false);
        // }
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
    } }, decls: 3, vars: 2, consts: [[1, "main"], ["class", "content-list", 4, "ngIf"], [3, "showPopup", 4, "ngIf"], [1, "content-list"], [1, "list"], [1, "header-top"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "click"], [1, "list-title"], ["lang", "fr", "placeholder", "Recherche...", 3, "filterConfig", "datas", "withRefresh", "onFilter", "onRefresh"], [1, "profil-list-content"], [1, "live-template", 3, "scroll"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", "id", 4, "ngFor", "ngForOf"], [1, "draft-template"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation", "id"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelChange"], [1, "box-content", 3, "routerLink"], [1, "template-title"], [1, "template-date"], [1, "template-footer"], [1, "action-button", 2, "background-color", "transparent", 3, "click"], [1, "action-button", 2, "background-color", "transparent", 3, "ngxScrollTo", "click"], [4, "ngIf"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation"], [1, "toogle-button", "draft"], [1, "draft", 3, "ngModel", "ngModelChange"], [3, "showPopup"]], template: function TemplateProfileListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, TemplateProfileListComponent_div_1_Template, 16, 8, "div", 1);
        i0.ɵɵtemplate(2, TemplateProfileListComponent_lib_no_data_2_Template, 1, 0, "lib-no-data", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.datas && ctx.datas.length !== 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.datas.length === 0);
    } }, dependencies: [i4.NgControlStatus, i4.NgModel, i5.MatAnchor, i6.NgForOf, i6.NgIf, i7.MatIcon, i2.RouterLink, i8.ScrollToDirective, i9.AppComponent, i10.NativeElementInjectorDirective, i11.MatSlideToggle, i12.MaterialElevationDirective, i13.LoadingPageComponent, i14.NoDataComponent, i6.DatePipe], styles: [".main[_ngcontent-%COMP%]{background:#f4f7f9 0% 0% no-repeat padding-box;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;letter-spacing:0px;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;letter-spacing:0px;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-date[_ngcontent-%COMP%]{font-weight:250;font-size:14px;line-height:120%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:25px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom:10px;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{margin-right:50px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .draft-template[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .live-template[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;margin-bottom:30px;gap:30px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:277px;height:300px;position:relative;background:#ffffff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#171f26 0% 0% no-repeat padding-box;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;text-align:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:#ffffff 0% 0% no-repeat padding-box;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-style:normal;font-size:18px;line-height:18px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button.draft[_ngcontent-%COMP%]{color:#f3a124}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{background-color:#171f26}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]{background:#543cb6;border-radius:0 0 5px 5px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]   button.action-button[_ngcontent-%COMP%]{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}.blink[_ngcontent-%COMP%]{animation:blink 2s ease-out;border:2px solid red;border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}  .filter-item{display:flex;align-items:center}  .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}  .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}to{transform:scale(1);opacity:1}}.header-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.profil-list-content[_ngcontent-%COMP%]{max-height:70vh;overflow:auto}.profil-list-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.profil-list-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}  ngx-filter{width:100%}  ngx-filter ngx-filter-group ul{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TemplateProfileListComponent, [{
        type: Component,
        args: [{ selector: "onboarding-profile-list", template: "<div class=\"main\">\n    <div class=\"content-list\" *ngIf=\"datas && datas.length!==0\">\n        <div class=\"list\">\n            <div class=\"header-top\">\n                <h2>{{locale?.PROFILES}} ({{datas.length}})</h2>\n                <a role=\"button\" class=\"add-profil\" (click)=\"openDialog()\" mat-raised-button color=\"primary\">\n                    <mat-icon>add</mat-icon> {{locale?.CREATE_PROFILE}}\n                </a>\n            </div>\n            <div class=\"list-title\">\n                <ngx-filter [filterConfig]=\"ngxFilterData\" lang=\"fr\" (onFilter)=\"onFilter($event)\"\n                    (onRefresh)=\"onRefresh($event)\" [datas]=\"datas\" placeholder=\"Recherche...\" [withRefresh]=\"true\">\n                </ngx-filter>\n                <!-- <div class=\"filter-item\">\n                    <ngx-filter searchType=\"search-text\" lang=\"fr\" (onFilter)=\"onFilter($event)\"\n                        (onRefresh)=\"onFilter($event)\" [datas]=\"datas\">\n                    </ngx-filter>\n                </div> -->\n            </div>\n            <div class=\"profil-list-content\">\n                <div class=\"live-template\" (scroll)=\"onScroll($event)\">\n                    <section appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\n                        *ngFor=\"let d of publishTemplate;let index=index\" [id]=\"d.Name\">\n                        <div class=\"toogle-button\"><span>{{locale?.LIVE}}</span>\n                            <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"d.Status\"\n                                (ngModelChange)=\"onChangeStatus(d,false)\">\n                            </mat-slide-toggle>\n                        </div>\n                        <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\n                            <p class=\"template-title\"> {{d.Name}}</p>\n                            <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\n                        </div>\n\n                        <div class=\"template-footer\">\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\n                                (click)=\"onEditProfil(d._id)\">\n                                <mat-icon>edit</mat-icon>\n                            </button>\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\n                                (click)=\"copyTemplate(d)\" [ngxScrollTo]=\"toTemplateCopyId\">\n                                <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\n                                <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\n                            </button>\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\n                                (click)=\"onDelete(d._id)\">\n                                <mat-icon>delete</mat-icon>\n                            </button>\n                        </div>\n                    </section>\n                </div>\n                <div class=\"draft-template\">\n                    <div appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\n                        *ngFor=\"let d of draftTemplate;let index=index\">\n                        <div class=\"toogle-button draft\"><span>{{locale?.DRAFT}}</span>\n                            <mat-slide-toggle class=\"draft\" [(ngModel)]=\"d.Status\"\n                                (ngModelChange)=\"onChangeStatus(d,true)\">\n                            </mat-slide-toggle>\n                        </div>\n                        <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\n                            <p class=\"template-title\"> {{d.Name}}</p>\n                            <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\n                        </div>\n\n                        <div class=\"template-footer\">\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\n                                (click)=\"onEditProfil(d._id)\">\n                                <mat-icon>edit</mat-icon>\n                            </button>\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\n                                (click)=\"copyTemplate(d)\">\n                                <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\n                                <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\n                            </button>\n                            <button class=\"action-button\" style=\"background-color: transparent;\"\n                                (click)=\"onDelete(d._id)\">\n                                <mat-icon>delete</mat-icon>\n                            </button>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <lib-no-data *ngIf=\"datas.length===0\" (showPopup)=\"openDialog()\"></lib-no-data>\n</div>", styles: [".main{background:#f4f7f9 0% 0% no-repeat padding-box;opacity:1;height:100%}.main .content-list{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main .content-list h3{text-align:left;letter-spacing:0px;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main .content-list p.sub-title{margin-bottom:57px;letter-spacing:0px;color:#171f26;width:300px}.main .content-list .template-title{font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main .content-list .template-date{font-weight:250;font-size:14px;line-height:120%}.main .content-list .list{display:flex;flex-direction:column;gap:25px}.main .content-list .list .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.main .content-list .list .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.main .content-list .list .list-title ul li{padding-bottom:10px;cursor:pointer}.main .content-list .list .list-title ul li.active{border-bottom:4px solid #3c4252}.main .content-list .list .list-title .add-profil{margin-right:50px}.main .content-list .list .draft-template,.main .content-list .list .live-template{display:flex;flex-wrap:wrap;justify-content:flex-start;margin-bottom:30px;gap:30px}.main .content-list .list .box-template{width:277px;height:300px;position:relative;background:#ffffff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main .content-list .list .box-template img{width:81px;height:81px}.main .content-list .list .box-template a{background:#171f26 0% 0% no-repeat padding-box;border-radius:7px;font-size:15px}.main .content-list .list .box-template .box-content{width:100%;text-align:center}.main .content-list .list .box-template .box-content .picto-preview{width:113px;height:113px;background:#ffffff 0% 0% no-repeat padding-box;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main .content-list .list .box-template .box-content .picto-preview h3{font-size:40px;color:#dce4e9}.main .content-list .list .box-template .toogle-button{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-style:normal;font-size:18px;line-height:18px}.main .content-list .list .box-template .toogle-button span{padding-right:10px}.main .content-list .list .box-template .toogle-button.draft{color:#f3a124}.main .content-list .list .new-template{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main .content-list .list .add-profil{background-color:#171f26}.main .content-list .template-footer{background:#543cb6;border-radius:0 0 5px 5px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main .content-list .template-footer button.action-button{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}.blink{animation:blink 2s ease-out;border:2px solid red;border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}to{transform:scale(1);opacity:1}}.header-top{display:flex;align-items:center;justify-content:space-between}.profil-list-content{max-height:70vh;overflow:auto}.profil-list-content::-webkit-scrollbar{width:5px}.profil-list-content::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}::ng-deep ngx-filter{width:100%}::ng-deep ngx-filter ngx-filter-group ul{padding:0}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWxpc3QvdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWxpc3QvdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFHbEksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUc3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztJQzhCTCxtQ0FBcUU7OztJQUNyRSxnQ0FBMkM7SUFBQSwyQkFBVztJQUFBLGlCQUFXOzs7OztJQXBCN0UsbUNBQ29FLGNBQUEsV0FBQTtJQUMvQixZQUFnQjtJQUFBLGlCQUFPO0lBQ3BELDRDQUM4QztJQURaLHlPQUFhLG9DQUNyRSxJQUQ4RSwyUEFDbkMsZUFBQSw2QkFBaUIsS0FBSyxDQUFDLENBQUEsSUFEWTtJQUV4RCxpQkFBbUIsRUFBQTtJQUV2QiwrQkFBbUYsWUFBQTtJQUNwRCxZQUFVO0lBQUEsaUJBQUk7SUFDekMsNkJBQXlCO0lBQUMsWUFBa0M7O0lBQUEsaUJBQUksRUFB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QU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFO1lBQ2hFLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDaEI7U0FDRixDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBWSxFQUFFLEVBQUU7WUFDakQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUE7YUFDOUQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O3dHQTdNVSw0QkFBNEI7K0VBQTVCLDRCQUE0Qjt1QkF3QjVCLFlBQVk7dUJBQ1osT0FBTzs7Ozs7O2lIQXpCUCxvQkFBZ0I7O1FDakI3Qiw4QkFBa0I7UUFDZCw4RUFrRk07UUFDTiw2RkFBK0U7UUFDbkYsaUJBQU07O1FBcEZ5QixlQUErQjtRQUEvQiwwREFBK0I7UUFtRjVDLGVBQXNCO1FBQXRCLDZDQUFzQjs7dUZEbkUzQiw0QkFBNEI7Y0FMeEMsU0FBUzsyQkFDRSx5QkFBeUI7aUhBNEJWLFNBQVM7a0JBQWpDLFNBQVM7bUJBQUMsWUFBWTtZQUNILElBQUk7a0JBQXZCLFNBQVM7bUJBQUMsT0FBTztZQXNGbEIsUUFBUTtrQkFEUCxZQUFZO21CQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IERpYWxvZ0NyZWF0ZVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVtcGxhdGUvZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSUZpbHRlckNvbmZpZ3VyYXRpb24gfSBmcm9tICduZ3gtZmlsdGVyJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcbmltcG9ydCB7IE1hdFBhZ2luYXRvciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3JcIjtcbmltcG9ydCB7IE1hdFNvcnQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3RhYmxlXCI7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGxvY2FsZXMgfSBmcm9tICcuLi8uLi9pMThuJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm9uYm9hcmRpbmctcHJvZmlsZS1saXN0XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi90ZW1wbGF0ZS1wcm9maWxlLWxpc3QuY29tcG9uZW50LnNjc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUHJvZmlsZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkaXNwbGF5ZWRDb2x1bW5zID0gW1wiTmFtZVwiLCBcInZjb250YWN0c1wiLCBcImNyZWF0ZWRBdFwiLCBcInVwZGF0ZWRBdFwiLCBcImFjdGlvblwiXTtcbiAgZGF0YXM6IGFueSA9IFtdO1xuICBwdWJsaXNoVGVtcGxhdGU6IGFueSA9IFtdO1xuICBkcmFmdFRlbXBsYXRlOiBhbnkgPSBbXTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55PihbXSk7XG4gIGRlZmF1bHRFbGV2YXRpb24gPSAyO1xuICByYWlzZWRFbGV2YXRpb24gPSA4O1xuICBsb2FkaW5nID0gZmFsc2U7XG4gIGNwSWQgPSBudWxsO1xuICBmaWx0ZXJEYXRhID0ge1xuICAgIFN0YXR1czogbnVsbCxcbiAgICBzb3J0TmFtZUFzYzogdHJ1ZSxcbiAgICBzdGFydF9kYXRlOiBudWxsLFxuICAgIGVuZF9kYXRlOiBudWxsLFxuICAgIHNlYXJjaFRleHQ6ICcnLFxuICAgIHNlcnZpY2U6ICcnXG4gIH1cblxuICBsb2NhbGU6IGFueSA9IHt9XG4gIG5neEZpbHRlckRhdGE6IElGaWx0ZXJDb25maWd1cmF0aW9uW10gPSBbXVxuXG4gIHRvVGVtcGxhdGVDb3B5SWQgPSBcIlwiXG4gIGN1cnJlbnRGaWx0ZXIgPSBcImFsbFwiXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuICBwdWJsaXNoVGVtcGxhdGVMZW5ndGg6IGFueTtcbiAgZHJhZnRUZW1wbGF0ZUxlbmd0aDogYW55O1xuICB0YWdzID0gW11cbiAgbmd4RmlsdGVySW5pdDogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2cpIHtcbiAgICB0aGlzLnNlcnZpY2UudGVtcGxhdGVzLnN1YnNjcmliZSgodGVtcGxhdGVzOiBhbnkpID0+IHtcbiAgICAgIGlmICh0ZW1wbGF0ZXMgJiYgdGVtcGxhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5kYXRhcyA9IHRlbXBsYXRlcztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNlcnZpY2UuX2xhbmcuc3Vic2NyaWJlKChsb2NhbGUpID0+IHtcbiAgICAgIGlmIChsb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVzW2xvY2FsZV0uUFJPRklMRVNfTElTVDtcbiAgICAgICAgdGhpcy5uZ3hGaWx0ZXJEYXRhID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpbHRlckRhdGE6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgIGtleTogJ1N0YXR1cycsXG4gICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmxvY2FsZS5TVEFUVVMsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmxvY2FsZS5QVUJMSVNIXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5sb2NhbGUuRFJBRlRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWx0ZXJEYXRhOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgICAgICAga2V5OiAnY3JlYXRlZEF0JyxcbiAgICAgICAgICAgICAgb3BlcmF0b3I6IFwiZ3RlXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmxvY2FsZS5EQVRFX01JTlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmlsdGVyRGF0YToge1xuICAgICAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgICAgICAgIGtleTogJ2NyZWF0ZWRBdCcsXG4gICAgICAgICAgICAgIG9wZXJhdG9yOiBcImx0ZVwiLFxuICAgICAgICAgICAgICBsYWJlbDogdGhpcy5sb2NhbGUuREFURV9NQVhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpbHRlckRhdGE6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJzb3J0XCIsXG4gICAgICAgICAgICAgIGtleTogXCJOYW1lXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBcImFzY1wiLFxuICAgICAgICAgICAgICBsYWJlbDogdGhpcy5sb2NhbGUuTkFNRVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5neEZpbHRlckluaXQgPSBKU09OLnN0cmluZ2lmeSh0aGlzLm5neEZpbHRlckRhdGEpXG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCB0aGlzLmdldEFsbFByb2ZpbHMoKTtcbiAgICAgIHRoaXMudGFncyA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxUYWdzKCk7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIG9uRmlsdGVyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmRhdGFzKSB7XG4gICAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IGV2ZW50LmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IHRydWUpO1xuICAgICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gZXZlbnQuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gZmFsc2UpO1xuICAgIH1cbiAgfVxuICBvblJlZnJlc2goZXZlbnQpIHtcbiAgICB0aGlzLm5neEZpbHRlckRhdGEgPSBKU09OLnBhcnNlKHRoaXMubmd4RmlsdGVySW5pdClcbiAgICAvLyBpZiAoZXZlbnQuZGF0YXMpIHtcbiAgICAvLyAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gZXZlbnQuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gdHJ1ZSk7XG4gICAgLy8gICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSBldmVudC5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSBmYWxzZSk7XG4gICAgLy8gfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcbiAgb25TY3JvbGwoZXZlbnQpIHtcbiAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpO1xuICAgIGNvbnN0IG5hdkxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXZlLXRlbXBsYXRlIC5ib3gtdGVtcGxhdGVcIik7XG4gICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IHNlY3Rpb25Ub3AgPSBzZWN0aW9uLm9mZnNldFRvcDtcbiAgICAgIGlmIChldmVudC50YXJnZXQuc2Nyb2xsVG9wID4gc2VjdGlvblRvcCkge1xuICAgICAgICBjdXJyZW50ID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoXCJpZFwiKVxuICAgICAgfVxuICAgIH0pO1xuICAgIG5hdkxpLmZvckVhY2goKGxpKSA9PiB7XG5cblxuICAgICAgY29uc3QgaWQgPSBsaS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYmxpbmtcIik7XG4gICAgICBpZiAoaWQuc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCAtIDEpID09PSBjdXJyZW50KSB7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJibGlua1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2JsaW5rJylcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uQWRkUHJvZmlsKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9uYm9hcmRpbmcvdGVtcGxhdGUvMFwiXSk7XG4gIH1cblxuICBvbkVkaXRQcm9maWwoaWQpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJvbmJvYXJkaW5nL3RlbXBsYXRlL1wiLCBpZF0pO1xuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2VTdGF0dXMoZGF0YSwgU3RhdHVzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZVByb2ZpbCh7IC4uLmRhdGEsIFN0YXR1cyB9KTtcbiAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSBmYWxzZSk7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgYXdhaXQgdGhpcy5nZXRBbGxQcm9maWxzKClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJlcnJyb3IuLi4uLi5cIik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25EZWxldGUoaWQpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgaWYgKGNvbmZpcm0oXCJWb3VsZXogdm91cyBzdXBwcmltZXIgY2V0dGUgdGVtcGxhdGUgP1wiKSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmRlbGV0ZVByb2ZpbChpZCk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0QWxsUHJvZmlscygpXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0QWxsUHJvZmlscygpIHtcbiAgICBjb25zdCBwcm9maWxlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xuICAgIHRoaXMuZGF0YXMgPSBwcm9maWxlO1xuICAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSB0cnVlKTtcbiAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IGZhbHNlKTtcblxuICAgIHRoaXMucHVibGlzaFRlbXBsYXRlTGVuZ3RoID0gdGhpcy5wdWJsaXNoVGVtcGxhdGUubGVuZ3RoXG4gICAgdGhpcy5kcmFmdFRlbXBsYXRlTGVuZ3RoID0gdGhpcy5kcmFmdFRlbXBsYXRlLmxlbmd0aFxuICB9XG5cblxuXG4gIGFzeW5jIGNvcHlUZW1wbGF0ZShkYXRhKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgIHRoaXMuY3BJZCA9IGRhdGEuX2lkXG4gICAgY29uc3QgeyBfaWQsIC4uLnJlc3QgfSA9IGRhdGFcbiAgICBjb25zdCBjb3B5TmFtZSA9IGRhdGEuTmFtZSArIFwiIC0gY29waWVcIlxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGVQcm9maWwoeyAuLi5yZXN0LCBOYW1lOiBjb3B5TmFtZSB9KTtcbiAgICB0aGlzLnRvVGVtcGxhdGVDb3B5SWQgPSBgIyR7Y29weU5hbWV9YFxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHRoaXMub25FZGl0UHJvZmlsKHJlc3VsdC5faWQpXG4gICAgICB0aGlzLmNwSWQgPSBudWxsXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJycm9yLi4uLi4uXCIpO1xuICAgIH1cbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuXG4gIH1cblxuICBvcGVuRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQ3JlYXRlVGVtcGxhdGVDb21wb25lbnQsIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGFnczogdGhpcy50YWdzLFxuICAgICAgfVxuICAgIH0pO1xuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoY3VycmVudDogYW55KSA9PiB7XG4gICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICB0aGlzLnNlcnZpY2UuY3VycmVudFRlbXBsYXRlLm5leHQoY3VycmVudCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnNlcnZpY2UubWFpblBhdGggKyAnL3RlbXBsYXRlLzAnXSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1saXN0XCIgKm5nSWY9XCJkYXRhcyAmJiBkYXRhcy5sZW5ndGghPT0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRvcFwiPlxuICAgICAgICAgICAgICAgIDxoMj57e2xvY2FsZT8uUFJPRklMRVN9fSAoe3tkYXRhcy5sZW5ndGh9fSk8L2gyPlxuICAgICAgICAgICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImFkZC1wcm9maWxcIiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPiB7e2xvY2FsZT8uQ1JFQVRFX1BST0ZJTEV9fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8bmd4LWZpbHRlciBbZmlsdGVyQ29uZmlnXT1cIm5neEZpbHRlckRhdGFcIiBsYW5nPVwiZnJcIiAob25GaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgIChvblJlZnJlc2gpPVwib25SZWZyZXNoKCRldmVudClcIiBbZGF0YXNdPVwiZGF0YXNcIiBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZS4uLlwiIFt3aXRoUmVmcmVzaF09XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPC9uZ3gtZmlsdGVyPlxuICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImZpbHRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZmlsdGVyIHNlYXJjaFR5cGU9XCJzZWFyY2gtdGV4dFwiIGxhbmc9XCJmclwiIChvbkZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChvblJlZnJlc2gpPVwib25GaWx0ZXIoJGV2ZW50KVwiIFtkYXRhc109XCJkYXRhc1wiPlxuICAgICAgICAgICAgICAgICAgICA8L25neC1maWx0ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZmlsLWxpc3QtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXZlLXRlbXBsYXRlXCIgKHNjcm9sbCk9XCJvblNjcm9sbCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGFwcE1hdGVyaWFsRWxldmF0aW9uIFtkZWZhdWx0RWxldmF0aW9uXT1cIjBcIiByYWlzZWRFbGV2YXRpb249XCIxXCIgY2xhc3M9XCJib3gtdGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGQgb2YgcHVibGlzaFRlbXBsYXRlO2xldCBpbmRleD1pbmRleFwiIFtpZF09XCJkLk5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29nbGUtYnV0dG9uXCI+PHNwYW4+e3tsb2NhbGU/LkxJVkV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBjb2xvcj1cIiM2RkU4RDdcIiBbKG5nTW9kZWwpXT1cImQuU3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2VTdGF0dXMoZCxmYWxzZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zbGlkZS10b2dnbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtY29udGVudFwiIFtyb3V0ZXJMaW5rXT1cIlt0aGlzLnNlcnZpY2UubWFpblBhdGgrJy90ZW1wbGF0ZS8nK2QuX2lkXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGVtcGxhdGUtdGl0bGVcIj4ge3tkLk5hbWV9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRlbXBsYXRlLWRhdGVcIj4ge3tkLmNyZWF0ZWRBdCB8IGRhdGUgOidkZC9NTS95eSd9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcGxhdGUtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkVkaXRQcm9maWwoZC5faWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNvcHlUZW1wbGF0ZShkKVwiIFtuZ3hTY3JvbGxUb109XCJ0b1RlbXBsYXRlQ29weUlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItbG9hZGluZy1wYWdlICpuZ0lmPVwibG9hZGluZyAmJiBjcElkPT09ZC5faWRcIj48L2xpYi1sb2FkaW5nLXBhZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIiFsb2FkaW5nIHx8IGNwSWQhPT1kLl9pZFwiPmZpbHRlcl9ub25lPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRGVsZXRlKGQuX2lkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyYWZ0LXRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgYXBwTWF0ZXJpYWxFbGV2YXRpb24gW2RlZmF1bHRFbGV2YXRpb25dPVwiMFwiIHJhaXNlZEVsZXZhdGlvbj1cIjFcIiBjbGFzcz1cImJveC10ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZCBvZiBkcmFmdFRlbXBsYXRlO2xldCBpbmRleD1pbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2dsZS1idXR0b24gZHJhZnRcIj48c3Bhbj57e2xvY2FsZT8uRFJBRlR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBjbGFzcz1cImRyYWZ0XCIgWyhuZ01vZGVsKV09XCJkLlN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlU3RhdHVzKGQsdHJ1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zbGlkZS10b2dnbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtY29udGVudFwiIFtyb3V0ZXJMaW5rXT1cIlt0aGlzLnNlcnZpY2UubWFpblBhdGgrJy90ZW1wbGF0ZS8nK2QuX2lkXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGVtcGxhdGUtdGl0bGVcIj4ge3tkLk5hbWV9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRlbXBsYXRlLWRhdGVcIj4ge3tkLmNyZWF0ZWRBdCB8IGRhdGUgOidkZC9NTS95eSd9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcGxhdGUtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkVkaXRQcm9maWwoZC5faWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNvcHlUZW1wbGF0ZShkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLWxvYWRpbmctcGFnZSAqbmdJZj1cImxvYWRpbmcgJiYgY3BJZD09PWQuX2lkXCI+PC9saWItbG9hZGluZy1wYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCIhbG9hZGluZyB8fCBjcElkIT09ZC5faWRcIj5maWx0ZXJfbm9uZTwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkRlbGV0ZShkLl9pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8bGliLW5vLWRhdGEgKm5nSWY9XCJkYXRhcy5sZW5ndGg9PT0wXCIgKHNob3dQb3B1cCk9XCJvcGVuRGlhbG9nKClcIj48L2xpYi1uby1kYXRhPlxuPC9kaXY+Il19