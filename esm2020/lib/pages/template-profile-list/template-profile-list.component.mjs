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
import * as i15 from "../../common/nowboard-loader/nowboard-loader.component";
function TemplateProfileListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelement(2, "nowboard-loader", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("state", ctx_r0.showNowboardLoader);
} }
function TemplateProfileListComponent_ng_container_2_div_1_section_13_lib_loading_page_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function TemplateProfileListComponent_ng_container_2_div_1_section_13_mat_icon_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "filter_none");
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return [a0]; };
function TemplateProfileListComponent_ng_container_2_div_1_section_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 18)(1, "div", 19)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-slide-toggle", 20);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_ng_container_2_div_1_section_13_Template_mat_slide_toggle_ngModelChange_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r12); const d_r7 = restoredCtx.$implicit; return i0.ɵɵresetView(d_r7.Status = $event); })("ngModelChange", function TemplateProfileListComponent_ng_container_2_div_1_section_13_Template_mat_slide_toggle_ngModelChange_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const d_r7 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r13.onChangeStatus(d_r7, false)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 21)(6, "p", 22);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 23);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 24)(12, "button", 25);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_ng_container_2_div_1_section_13_Template_button_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const d_r7 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r14.onEditProfil(d_r7._id)); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "button", 26);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_ng_container_2_div_1_section_13_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const d_r7 = restoredCtx.$implicit; const ctx_r15 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r15.copyTemplate(d_r7)); });
    i0.ɵɵtemplate(16, TemplateProfileListComponent_ng_container_2_div_1_section_13_lib_loading_page_16_Template, 1, 0, "lib-loading-page", 1);
    i0.ɵɵtemplate(17, TemplateProfileListComponent_ng_container_2_div_1_section_13_mat_icon_17_Template, 2, 0, "mat-icon", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 25);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_ng_container_2_div_1_section_13_Template_button_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const d_r7 = restoredCtx.$implicit; const ctx_r16 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r16.onDelete(d_r7._id)); });
    i0.ɵɵelementStart(19, "mat-icon");
    i0.ɵɵtext(20, "delete");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const d_r7 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("defaultElevation", 0)("id", d_r7.Name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r5.locale == null ? null : ctx_r5.locale.LIVE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", d_r7.Status);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(13, _c0, ctx_r5.service.mainPath + "/template/" + d_r7._id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", d_r7.Name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 10, d_r7.createdAt, "dd/MM/yy"), "");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngxScrollTo", ctx_r5.toTemplateCopyId);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.loading && ctx_r5.cpId === d_r7._id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.loading || ctx_r5.cpId !== d_r7._id);
} }
function TemplateProfileListComponent_ng_container_2_div_1_div_15_lib_loading_page_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function TemplateProfileListComponent_ng_container_2_div_1_div_15_mat_icon_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "filter_none");
    i0.ɵɵelementEnd();
} }
function TemplateProfileListComponent_ng_container_2_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "div", 28)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-slide-toggle", 29);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_ng_container_2_div_1_div_15_Template_mat_slide_toggle_ngModelChange_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r22); const d_r17 = restoredCtx.$implicit; return i0.ɵɵresetView(d_r17.Status = $event); })("ngModelChange", function TemplateProfileListComponent_ng_container_2_div_1_div_15_Template_mat_slide_toggle_ngModelChange_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r22); const d_r17 = restoredCtx.$implicit; const ctx_r23 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r23.onChangeStatus(d_r17, true)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 21)(6, "p", 22);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 23);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 24)(12, "button", 25);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_ng_container_2_div_1_div_15_Template_button_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r22); const d_r17 = restoredCtx.$implicit; const ctx_r24 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r24.onEditProfil(d_r17._id)); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "button", 25);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_ng_container_2_div_1_div_15_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r22); const d_r17 = restoredCtx.$implicit; const ctx_r25 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r25.copyTemplate(d_r17)); });
    i0.ɵɵtemplate(16, TemplateProfileListComponent_ng_container_2_div_1_div_15_lib_loading_page_16_Template, 1, 0, "lib-loading-page", 1);
    i0.ɵɵtemplate(17, TemplateProfileListComponent_ng_container_2_div_1_div_15_mat_icon_17_Template, 2, 0, "mat-icon", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 25);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_ng_container_2_div_1_div_15_Template_button_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r22); const d_r17 = restoredCtx.$implicit; const ctx_r26 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r26.onDelete(d_r17._id)); });
    i0.ɵɵelementStart(19, "mat-icon");
    i0.ɵɵtext(20, "delete");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const d_r17 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("defaultElevation", 0);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r6.locale == null ? null : ctx_r6.locale.DRAFT);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", d_r17.Status);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(11, _c0, ctx_r6.service.mainPath + "/template/" + d_r17._id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", d_r17.Name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 8, d_r17.createdAt, "dd/MM/yy"), "");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r6.loading && ctx_r6.cpId === d_r17._id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r6.loading || ctx_r6.cpId !== d_r17._id);
} }
function TemplateProfileListComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 10);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_ng_container_2_div_1_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r27.openDialog()); });
    i0.ɵɵelementStart(6, "mat-icon");
    i0.ɵɵtext(7, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 11)(10, "ngx-filter", 12);
    i0.ɵɵlistener("onFilter", function TemplateProfileListComponent_ng_container_2_div_1_Template_ngx_filter_onFilter_10_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r29 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r29.onFilter($event)); })("onRefresh", function TemplateProfileListComponent_ng_container_2_div_1_Template_ngx_filter_onRefresh_10_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r30 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r30.onRefresh($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 13)(12, "div", 14);
    i0.ɵɵlistener("scroll", function TemplateProfileListComponent_ng_container_2_div_1_Template_div_scroll_12_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r31 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r31.onScroll($event)); });
    i0.ɵɵtemplate(13, TemplateProfileListComponent_ng_container_2_div_1_section_13_Template, 21, 15, "section", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 16);
    i0.ɵɵtemplate(15, TemplateProfileListComponent_ng_container_2_div_1_div_15_Template, 21, 13, "div", 17);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", ctx_r4.locale == null ? null : ctx_r4.locale.PROFILES, " (", ctx_r4.datas.length, ")");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.locale == null ? null : ctx_r4.locale.CREATE_PROFILE, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("filterConfig", ctx_r4.ngxFilterData)("datas", ctx_r4.datas)("withRefresh", true);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r4.publishTemplate);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.draftTemplate);
} }
function TemplateProfileListComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TemplateProfileListComponent_ng_container_2_div_1_Template, 16, 8, "div", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.datas && (ctx_r1.datas == null ? null : ctx_r1.datas.length) !== 0);
} }
function TemplateProfileListComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "lib-no-data", 30);
    i0.ɵɵlistener("showPopup", function TemplateProfileListComponent_ng_template_3_Template_lib_no_data_showPopup_0_listener() { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r32.openDialog()); });
    i0.ɵɵelementEnd();
} }
export class TemplateProfileListComponent {
    constructor(service, router, dialog) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ["Name", "vcontacts", "createdAt", "updatedAt", "action"];
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
        this.showNowboardLoader = false;
        this.showCreateProfileButton = false;
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
        this.showNowboardLoader = true;
        const profile = await this.service.getAllProfil();
        this.datas = profile;
        this.publishTemplate = this.datas.filter((d) => d.Status === true);
        this.draftTemplate = this.datas.filter((d) => d.Status === false);
        this.publishTemplateLength = this.publishTemplate.length;
        this.draftTemplateLength = this.draftTemplate.length;
        setTimeout(() => {
            this.showNowboardLoader = false;
            this.showCreateProfileButton = this.datas.length ? false : true;
        }, 500);
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
    } }, decls: 5, vars: 3, consts: [[1, "main"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noDatas", ""], [1, "nowboard-loader-container"], [3, "state"], ["class", "content-list", 4, "ngIf"], [1, "content-list"], [1, "list"], [1, "header-top"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "click"], [1, "list-title"], ["lang", "fr", "placeholder", "Recherche...", 3, "filterConfig", "datas", "withRefresh", "onFilter", "onRefresh"], [1, "profil-list-content"], [1, "live-template", 3, "scroll"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", "id", 4, "ngFor", "ngForOf"], [1, "draft-template"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation", "id"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelChange"], [1, "box-content", 3, "routerLink"], [1, "template-title"], [1, "template-date"], [1, "template-footer"], [1, "action-button", 2, "background-color", "transparent", 3, "click"], [1, "action-button", 2, "background-color", "transparent", 3, "ngxScrollTo", "click"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation"], [1, "toogle-button", "draft"], [1, "draft", 3, "ngModel", "ngModelChange"], [3, "showPopup"]], template: function TemplateProfileListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, TemplateProfileListComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        i0.ɵɵtemplate(2, TemplateProfileListComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        i0.ɵɵtemplate(3, TemplateProfileListComponent_ng_template_3_Template, 1, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showNowboardLoader && !ctx.showCreateProfileButton);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.showCreateProfileButton)("ngIfElse", _r2);
    } }, dependencies: [i4.NgControlStatus, i4.NgModel, i5.MatAnchor, i6.NgForOf, i6.NgIf, i7.MatIcon, i2.RouterLink, i8.ScrollToDirective, i9.NgxFilterLibraryComponent, i10.NativeElementInjectorDirective, i11.MatSlideToggle, i12.MaterialElevationDirective, i13.LoadingPageComponent, i14.NoDataComponent, i15.NowboardLoaderComponent, i6.DatePipe], styles: [".main[_ngcontent-%COMP%]{background:#f4f7f9 0% 0% no-repeat padding-box;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;letter-spacing:0px;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;letter-spacing:0px;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-date[_ngcontent-%COMP%]{font-weight:250;font-size:14px;line-height:120%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:25px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom:10px;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{margin-right:50px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .draft-template[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .live-template[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;margin-bottom:30px;gap:30px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:277px;height:300px;position:relative;background:#ffffff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#171f26 0% 0% no-repeat padding-box;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;text-align:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:#ffffff 0% 0% no-repeat padding-box;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-style:normal;font-size:18px;line-height:18px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button.draft[_ngcontent-%COMP%]{color:#f3a124}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{background-color:#171f26}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]{background:#543cb6;border-radius:0 0 5px 5px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]   button.action-button[_ngcontent-%COMP%]{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}.blink[_ngcontent-%COMP%]{animation:blink 2s ease-out;border:2px solid red;border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}  .filter-item{display:flex;align-items:center}  .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}  .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}to{transform:scale(1);opacity:1}}.header-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.profil-list-content[_ngcontent-%COMP%]{max-height:70vh;overflow:auto}.profil-list-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.profil-list-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.nowboard-loader-container[_ngcontent-%COMP%]{margin:auto;width:200px;height:200px;position:absolute;inset:0;overflow:hidden;z-index:999}  ngx-filter{width:100%}  ngx-filter ngx-filter-group ul{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TemplateProfileListComponent, [{
        type: Component,
        args: [{ selector: "onboarding-profile-list", template: "<div class=\"main\">\r\n\r\n    <ng-container *ngIf=\"showNowboardLoader && !showCreateProfileButton\">\r\n        <div class=\"nowboard-loader-container\">\r\n            <nowboard-loader [state]=\"showNowboardLoader\"></nowboard-loader>\r\n        </div>    \r\n    </ng-container>\r\n    <ng-container *ngIf=\"!showCreateProfileButton else noDatas\">\r\n        <div class=\"content-list\" *ngIf=\"datas && datas?.length!==0\">\r\n            <div class=\"list\">\r\n                <div class=\"header-top\">\r\n                    <h2>{{locale?.PROFILES}} ({{datas.length}})</h2>\r\n                    <a role=\"button\" class=\"add-profil\" (click)=\"openDialog()\" mat-raised-button color=\"primary\">\r\n                        <mat-icon>add</mat-icon> {{locale?.CREATE_PROFILE}}\r\n                    </a>\r\n                </div>\r\n                <div class=\"list-title\">\r\n                    <ngx-filter [filterConfig]=\"ngxFilterData\" lang=\"fr\" (onFilter)=\"onFilter($event)\"\r\n                        (onRefresh)=\"onRefresh($event)\" [datas]=\"datas\" placeholder=\"Recherche...\" [withRefresh]=\"true\">\r\n                    </ngx-filter>\r\n                    <!-- <div class=\"filter-item\">\r\n                        <ngx-filter searchType=\"search-text\" lang=\"fr\" (onFilter)=\"onFilter($event)\"\r\n                            (onRefresh)=\"onFilter($event)\" [datas]=\"datas\">\r\n                        </ngx-filter>\r\n                    </div> -->\r\n                </div>\r\n                <div class=\"profil-list-content\">\r\n                    <div class=\"live-template\" (scroll)=\"onScroll($event)\">\r\n                        <section appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\r\n                            *ngFor=\"let d of publishTemplate;let index=index\" [id]=\"d.Name\">\r\n                            <div class=\"toogle-button\"><span>{{locale?.LIVE}}</span>\r\n                                <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"d.Status\"\r\n                                    (ngModelChange)=\"onChangeStatus(d,false)\">\r\n                                </mat-slide-toggle>\r\n                            </div>\r\n                            <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\r\n                                <p class=\"template-title\"> {{d.Name}}</p>\r\n                                <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\r\n                            </div>\r\n    \r\n                            <div class=\"template-footer\">\r\n                                <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                    (click)=\"onEditProfil(d._id)\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                    (click)=\"copyTemplate(d)\" [ngxScrollTo]=\"toTemplateCopyId\">\r\n                                    <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\r\n                                    <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\r\n                                </button>\r\n                                <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                    (click)=\"onDelete(d._id)\">\r\n                                    <mat-icon>delete</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </section>\r\n                    </div>\r\n                    <div class=\"draft-template\">\r\n                        <div appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\r\n                            *ngFor=\"let d of draftTemplate;let index=index\">\r\n                            <div class=\"toogle-button draft\"><span>{{locale?.DRAFT}}</span>\r\n                                <mat-slide-toggle class=\"draft\" [(ngModel)]=\"d.Status\"\r\n                                    (ngModelChange)=\"onChangeStatus(d,true)\">\r\n                                </mat-slide-toggle>\r\n                            </div>\r\n                            <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\r\n                                <p class=\"template-title\"> {{d.Name}}</p>\r\n                                <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\r\n                            </div>\r\n    \r\n                            <div class=\"template-footer\">\r\n                                <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                    (click)=\"onEditProfil(d._id)\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                    (click)=\"copyTemplate(d)\">\r\n                                    <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\r\n                                    <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\r\n                                </button>\r\n                                <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                                    (click)=\"onDelete(d._id)\">\r\n                                    <mat-icon>delete</mat-icon>\r\n                                </button>\r\n                            </div>\r\n    \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>    \r\n    </ng-container>\r\n    <ng-template #noDatas>\r\n        <lib-no-data (showPopup)=\"openDialog()\"></lib-no-data>\r\n    </ng-template>\r\n</div>\r\n", styles: [".main{background:#f4f7f9 0% 0% no-repeat padding-box;opacity:1;height:100%}.main .content-list{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main .content-list h3{text-align:left;letter-spacing:0px;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main .content-list p.sub-title{margin-bottom:57px;letter-spacing:0px;color:#171f26;width:300px}.main .content-list .template-title{font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main .content-list .template-date{font-weight:250;font-size:14px;line-height:120%}.main .content-list .list{display:flex;flex-direction:column;gap:25px}.main .content-list .list .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.main .content-list .list .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.main .content-list .list .list-title ul li{padding-bottom:10px;cursor:pointer}.main .content-list .list .list-title ul li.active{border-bottom:4px solid #3c4252}.main .content-list .list .list-title .add-profil{margin-right:50px}.main .content-list .list .draft-template,.main .content-list .list .live-template{display:flex;flex-wrap:wrap;justify-content:flex-start;margin-bottom:30px;gap:30px}.main .content-list .list .box-template{width:277px;height:300px;position:relative;background:#ffffff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main .content-list .list .box-template img{width:81px;height:81px}.main .content-list .list .box-template a{background:#171f26 0% 0% no-repeat padding-box;border-radius:7px;font-size:15px}.main .content-list .list .box-template .box-content{width:100%;text-align:center}.main .content-list .list .box-template .box-content .picto-preview{width:113px;height:113px;background:#ffffff 0% 0% no-repeat padding-box;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main .content-list .list .box-template .box-content .picto-preview h3{font-size:40px;color:#dce4e9}.main .content-list .list .box-template .toogle-button{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-style:normal;font-size:18px;line-height:18px}.main .content-list .list .box-template .toogle-button span{padding-right:10px}.main .content-list .list .box-template .toogle-button.draft{color:#f3a124}.main .content-list .list .new-template{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main .content-list .list .add-profil{background-color:#171f26}.main .content-list .template-footer{background:#543cb6;border-radius:0 0 5px 5px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main .content-list .template-footer button.action-button{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}.blink{animation:blink 2s ease-out;border:2px solid red;border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}to{transform:scale(1);opacity:1}}.header-top{display:flex;align-items:center;justify-content:space-between}.profil-list-content{max-height:70vh;overflow:auto}.profil-list-content::-webkit-scrollbar{width:5px}.profil-list-content::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.nowboard-loader-container{margin:auto;width:200px;height:200px;position:absolute;inset:0;overflow:hidden;z-index:999}::ng-deep ngx-filter{width:100%}::ng-deep ngx-filter ngx-filter-group ul{padding:0}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWxpc3QvdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWxpc3QvdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFHbEksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUc3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNSakMsNkJBQXFFO0lBQ2pFLDhCQUF1QztJQUNuQyxxQ0FBZ0U7SUFDcEUsaUJBQU07SUFDViwwQkFBZTs7O0lBRlUsZUFBNEI7SUFBNUIsaURBQTRCOzs7SUEyQ3JCLG1DQUFxRTs7O0lBQ3JFLGdDQUEyQztJQUFBLDJCQUFXO0lBQUEsaUJBQVc7Ozs7O0lBcEI3RSxtQ0FDb0UsY0FBQSxXQUFBO0lBQy9CLFlBQWdCO0lBQUEsaUJBQU87SUFDcEQsNENBQzhDO0lBRFoseVBBQWEsb0NBQzFFLElBRG1GLDJRQUNuQyxlQUFBLDZCQUFpQixLQUFLLENBQUMsQ0FBQSxJQURZO0lBRXhE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QUVkLCtGQUllO1FBQ2YsK0ZBb0ZlO1FBQ2YsOEhBRWM7UUFDbEIsaUJBQU07OztRQTdGYSxlQUFvRDtRQUFwRCw2RUFBb0Q7UUFLcEQsZUFBK0I7UUFBL0IsbURBQStCLGlCQUFBOzt1RkRVckMsNEJBQTRCO2NBTHhDLFNBQVM7MkJBQ0UseUJBQXlCO2lIQTRCVixTQUFTO2tCQUFqQyxTQUFTO21CQUFDLFlBQVk7WUFDSCxJQUFJO2tCQUF2QixTQUFTO21CQUFDLE9BQU87WUF3RmxCLFFBQVE7a0JBRFAsWUFBWTttQkFBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nQ3JlYXRlVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlL2RpYWxvZy1jcmVhdGUtdGVtcGxhdGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IElGaWx0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnbmd4LWZpbHRlcic7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9yIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvclwiO1xyXG5pbXBvcnQgeyBNYXRTb3J0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NvcnRcIjtcclxuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3RhYmxlXCI7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL29uYm9hcmRpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IGxvY2FsZXMgfSBmcm9tICcuLi8uLi9pMThuJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm9uYm9hcmRpbmctcHJvZmlsZS1saXN0XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi90ZW1wbGF0ZS1wcm9maWxlLWxpc3QuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5zY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQcm9maWxlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZGlzcGxheWVkQ29sdW1ucyA9IFtcIk5hbWVcIiwgXCJ2Y29udGFjdHNcIiwgXCJjcmVhdGVkQXRcIiwgXCJ1cGRhdGVkQXRcIiwgXCJhY3Rpb25cIl07XHJcbiAgZGF0YXM6IGFueTtcclxuICBwdWJsaXNoVGVtcGxhdGU6IGFueSA9IFtdO1xyXG4gIGRyYWZ0VGVtcGxhdGU6IGFueSA9IFtdO1xyXG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4oW10pO1xyXG4gIGRlZmF1bHRFbGV2YXRpb24gPSAyO1xyXG4gIHJhaXNlZEVsZXZhdGlvbiA9IDg7XHJcbiAgbG9hZGluZyA9IGZhbHNlO1xyXG4gIGNwSWQgPSBudWxsO1xyXG4gIGZpbHRlckRhdGEgPSB7XHJcbiAgICBTdGF0dXM6IG51bGwsXHJcbiAgICBzb3J0TmFtZUFzYzogdHJ1ZSxcclxuICAgIHN0YXJ0X2RhdGU6IG51bGwsXHJcbiAgICBlbmRfZGF0ZTogbnVsbCxcclxuICAgIHNlYXJjaFRleHQ6ICcnLFxyXG4gICAgc2VydmljZTogJydcclxuICB9XHJcblxyXG4gIGxvY2FsZTogYW55ID0ge31cclxuICBuZ3hGaWx0ZXJEYXRhOiBJRmlsdGVyQ29uZmlndXJhdGlvbltdID0gW11cclxuXHJcbiAgdG9UZW1wbGF0ZUNvcHlJZCA9IFwiXCJcclxuICBjdXJyZW50RmlsdGVyID0gXCJhbGxcIlxyXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcclxuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XHJcbiAgcHVibGlzaFRlbXBsYXRlTGVuZ3RoOiBhbnk7XHJcbiAgZHJhZnRUZW1wbGF0ZUxlbmd0aDogYW55O1xyXG4gIHRhZ3MgPSBbXVxyXG4gIG5neEZpbHRlckluaXQ6IHN0cmluZztcclxuICBzaG93Tm93Ym9hcmRMb2FkZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93Q3JlYXRlUHJvZmlsZUJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlLnRlbXBsYXRlcy5zdWJzY3JpYmUoKHRlbXBsYXRlczogYW55KSA9PiB7XHJcbiAgICAgIGlmICh0ZW1wbGF0ZXMgJiYgdGVtcGxhdGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLmRhdGFzID0gdGVtcGxhdGVzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2VydmljZS5fbGFuZy5zdWJzY3JpYmUoKGxvY2FsZSkgPT4ge1xyXG4gICAgICBpZiAobG9jYWxlKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVzW2xvY2FsZV0uUFJPRklMRVNfTElTVDtcclxuICAgICAgICB0aGlzLm5neEZpbHRlckRhdGEgPSBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZpbHRlckRhdGE6IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGtleTogJ1N0YXR1cycsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IHRoaXMubG9jYWxlLlNUQVRVUyxcclxuICAgICAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5sb2NhbGUuUFVCTElTSFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5sb2NhbGUuRFJBRlRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZpbHRlckRhdGE6IHtcclxuICAgICAgICAgICAgICB0eXBlOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAga2V5OiAnY3JlYXRlZEF0JyxcclxuICAgICAgICAgICAgICBvcGVyYXRvcjogXCJndGVcIixcclxuICAgICAgICAgICAgICBsYWJlbDogdGhpcy5sb2NhbGUuREFURV9NSU5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmlsdGVyRGF0YToge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdkYXRlJyxcclxuICAgICAgICAgICAgICBrZXk6ICdjcmVhdGVkQXQnLFxyXG4gICAgICAgICAgICAgIG9wZXJhdG9yOiBcImx0ZVwiLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmxvY2FsZS5EQVRFX01BWFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmaWx0ZXJEYXRhOiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJzb3J0XCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIk5hbWVcIixcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJhc2NcIixcclxuICAgICAgICAgICAgICBsYWJlbDogdGhpcy5sb2NhbGUuTkFNRVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm5neEZpbHRlckluaXQgPSBKU09OLnN0cmluZ2lmeSh0aGlzLm5neEZpbHRlckRhdGEpXHJcbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgdGhpcy5nZXRBbGxQcm9maWxzKCk7XHJcbiAgICAgIHRoaXMudGFncyA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxUYWdzKCk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxuXHJcbiAgb25GaWx0ZXIoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5kYXRhcykge1xyXG4gICAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IGV2ZW50LmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IHRydWUpO1xyXG4gICAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSBldmVudC5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uUmVmcmVzaChldmVudCkge1xyXG4gICAgdGhpcy5uZ3hGaWx0ZXJEYXRhID0gSlNPTi5wYXJzZSh0aGlzLm5neEZpbHRlckluaXQpXHJcbiAgICAvLyBpZiAoZXZlbnQuZGF0YXMpIHtcclxuICAgIC8vICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSBldmVudC5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSB0cnVlKTtcclxuICAgIC8vICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gZXZlbnQuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gZmFsc2UpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcclxuICBvblNjcm9sbChldmVudCkge1xyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKTtcclxuICAgIGNvbnN0IG5hdkxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXZlLXRlbXBsYXRlIC5ib3gtdGVtcGxhdGVcIik7XHJcbiAgICBsZXQgY3VycmVudCA9IFwiXCI7XHJcbiAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlY3Rpb25Ub3AgPSBzZWN0aW9uLm9mZnNldFRvcDtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5zY3JvbGxUb3AgPiBzZWN0aW9uVG9wKSB7XHJcbiAgICAgICAgY3VycmVudCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKFwiaWRcIilcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBuYXZMaS5mb3JFYWNoKChsaSkgPT4ge1xyXG5cclxuXHJcbiAgICAgIGNvbnN0IGlkID0gbGkuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYmxpbmtcIik7XHJcbiAgICAgIGlmIChpZC5zdWJzdHJpbmcoMCwgaWQubGVuZ3RoIC0gMSkgPT09IGN1cnJlbnQpIHtcclxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYmxpbmtcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnYmxpbmsnKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQWRkUHJvZmlsKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib25ib2FyZGluZy90ZW1wbGF0ZS8wXCJdKTtcclxuICB9XHJcblxyXG4gIG9uRWRpdFByb2ZpbChpZCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib25ib2FyZGluZy90ZW1wbGF0ZS9cIiwgaWRdKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uQ2hhbmdlU3RhdHVzKGRhdGEsIFN0YXR1cykge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZVByb2ZpbCh7IC4uLmRhdGEsIFN0YXR1cyB9KTtcclxuICAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSB0cnVlKTtcclxuICAgIHRoaXMuZHJhZnRUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gZmFsc2UpO1xyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBhd2FpdCB0aGlzLmdldEFsbFByb2ZpbHMoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJyb3IuLi4uLi5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkRlbGV0ZShpZCkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxyXG4gICAgaWYgKGNvbmZpcm0oXCJWb3VsZXogdm91cyBzdXBwcmltZXIgY2V0dGUgdGVtcGxhdGUgP1wiKSkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZGVsZXRlUHJvZmlsKGlkKTtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0QWxsUHJvZmlscygpXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0QWxsUHJvZmlscygpIHtcclxuICAgIHRoaXMuc2hvd05vd2JvYXJkTG9hZGVyID0gdHJ1ZTtcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7ICAgIFxyXG4gICAgdGhpcy5kYXRhcyA9IHByb2ZpbGU7XHJcbiAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gdHJ1ZSk7XHJcbiAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IGZhbHNlKTtcclxuXHJcbiAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZUxlbmd0aCA9IHRoaXMucHVibGlzaFRlbXBsYXRlLmxlbmd0aFxyXG4gICAgdGhpcy5kcmFmdFRlbXBsYXRlTGVuZ3RoID0gdGhpcy5kcmFmdFRlbXBsYXRlLmxlbmd0aFxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNob3dOb3dib2FyZExvYWRlciA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDcmVhdGVQcm9maWxlQnV0dG9uID0gdGhpcy5kYXRhcy5sZW5ndGggPyBmYWxzZSA6IHRydWU7XHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBhc3luYyBjb3B5VGVtcGxhdGUoZGF0YSkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxyXG4gICAgdGhpcy5jcElkID0gZGF0YS5faWRcclxuICAgIGNvbnN0IHsgX2lkLCAuLi5yZXN0IH0gPSBkYXRhXHJcbiAgICBjb25zdCBjb3B5TmFtZSA9IGRhdGEuTmFtZSArIFwiIC0gY29waWVcIlxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZVByb2ZpbCh7IC4uLnJlc3QsIE5hbWU6IGNvcHlOYW1lIH0pO1xyXG4gICAgdGhpcy50b1RlbXBsYXRlQ29weUlkID0gYCMke2NvcHlOYW1lfWBcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgdGhpcy5vbkVkaXRQcm9maWwocmVzdWx0Ll9pZClcclxuICAgICAgdGhpcy5jcElkID0gbnVsbFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJyb3IuLi4uLi5cIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG5cclxuICB9XHJcblxyXG4gIG9wZW5EaWFsb2coKSB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0NyZWF0ZVRlbXBsYXRlQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChjdXJyZW50OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UuY3VycmVudFRlbXBsYXRlLm5leHQoY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuc2VydmljZS5tYWluUGF0aCArICcvdGVtcGxhdGUvMCddKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1haW5cIj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd05vd2JvYXJkTG9hZGVyICYmICFzaG93Q3JlYXRlUHJvZmlsZUJ1dHRvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3dib2FyZC1sb2FkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxub3dib2FyZC1sb2FkZXIgW3N0YXRlXT1cInNob3dOb3dib2FyZExvYWRlclwiPjwvbm93Ym9hcmQtbG9hZGVyPlxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzaG93Q3JlYXRlUHJvZmlsZUJ1dHRvbiBlbHNlIG5vRGF0YXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1saXN0XCIgKm5nSWY9XCJkYXRhcyAmJiBkYXRhcz8ubGVuZ3RoIT09MFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e3tsb2NhbGU/LlBST0ZJTEVTfX0gKHt7ZGF0YXMubGVuZ3RofX0pPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgY2xhc3M9XCJhZGQtcHJvZmlsXCIgKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj4ge3tsb2NhbGU/LkNSRUFURV9QUk9GSUxFfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5neC1maWx0ZXIgW2ZpbHRlckNvbmZpZ109XCJuZ3hGaWx0ZXJEYXRhXCIgbGFuZz1cImZyXCIgKG9uRmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAob25SZWZyZXNoKT1cIm9uUmVmcmVzaCgkZXZlbnQpXCIgW2RhdGFzXT1cImRhdGFzXCIgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGUuLi5cIiBbd2l0aFJlZnJlc2hdPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWZpbHRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJmaWx0ZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWZpbHRlciBzZWFyY2hUeXBlPVwic2VhcmNoLXRleHRcIiBsYW5nPVwiZnJcIiAob25GaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZWZyZXNoKT1cIm9uRmlsdGVyKCRldmVudClcIiBbZGF0YXNdPVwiZGF0YXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZmlsdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2ZpbC1saXN0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS10ZW1wbGF0ZVwiIChzY3JvbGwpPVwib25TY3JvbGwoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBhcHBNYXRlcmlhbEVsZXZhdGlvbiBbZGVmYXVsdEVsZXZhdGlvbl09XCIwXCIgcmFpc2VkRWxldmF0aW9uPVwiMVwiIGNsYXNzPVwiYm94LXRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBkIG9mIHB1Ymxpc2hUZW1wbGF0ZTtsZXQgaW5kZXg9aW5kZXhcIiBbaWRdPVwiZC5OYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vZ2xlLWJ1dHRvblwiPjxzcGFuPnt7bG9jYWxlPy5MSVZFfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY29sb3I9XCIjNkZFOEQ3XCIgWyhuZ01vZGVsKV09XCJkLlN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlU3RhdHVzKGQsZmFsc2UpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWNvbnRlbnRcIiBbcm91dGVyTGlua109XCJbdGhpcy5zZXJ2aWNlLm1haW5QYXRoKycvdGVtcGxhdGUvJytkLl9pZF1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRlbXBsYXRlLXRpdGxlXCI+IHt7ZC5OYW1lfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZW1wbGF0ZS1kYXRlXCI+IHt7ZC5jcmVhdGVkQXQgfCBkYXRlIDonZGQvTU0veXknfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBsYXRlLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25FZGl0UHJvZmlsKGQuX2lkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjb3B5VGVtcGxhdGUoZClcIiBbbmd4U2Nyb2xsVG9dPVwidG9UZW1wbGF0ZUNvcHlJZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLWxvYWRpbmctcGFnZSAqbmdJZj1cImxvYWRpbmcgJiYgY3BJZD09PWQuX2lkXCI+PC9saWItbG9hZGluZy1wYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCIhbG9hZGluZyB8fCBjcElkIT09ZC5faWRcIj5maWx0ZXJfbm9uZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkRlbGV0ZShkLl9pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcmFmdC10ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGFwcE1hdGVyaWFsRWxldmF0aW9uIFtkZWZhdWx0RWxldmF0aW9uXT1cIjBcIiByYWlzZWRFbGV2YXRpb249XCIxXCIgY2xhc3M9XCJib3gtdGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGQgb2YgZHJhZnRUZW1wbGF0ZTtsZXQgaW5kZXg9aW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29nbGUtYnV0dG9uIGRyYWZ0XCI+PHNwYW4+e3tsb2NhbGU/LkRSQUZUfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY2xhc3M9XCJkcmFmdFwiIFsobmdNb2RlbCldPVwiZC5TdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZVN0YXR1cyhkLHRydWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWNvbnRlbnRcIiBbcm91dGVyTGlua109XCJbdGhpcy5zZXJ2aWNlLm1haW5QYXRoKycvdGVtcGxhdGUvJytkLl9pZF1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRlbXBsYXRlLXRpdGxlXCI+IHt7ZC5OYW1lfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZW1wbGF0ZS1kYXRlXCI+IHt7ZC5jcmVhdGVkQXQgfCBkYXRlIDonZGQvTU0veXknfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBsYXRlLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25FZGl0UHJvZmlsKGQuX2lkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjb3B5VGVtcGxhdGUoZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1sb2FkaW5nLXBhZ2UgKm5nSWY9XCJsb2FkaW5nICYmIGNwSWQ9PT1kLl9pZFwiPjwvbGliLWxvYWRpbmctcGFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWxvYWRpbmcgfHwgY3BJZCE9PWQuX2lkXCI+ZmlsdGVyX25vbmU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25EZWxldGUoZC5faWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctdGVtcGxhdGUgI25vRGF0YXM+XHJcbiAgICAgICAgPGxpYi1uby1kYXRhIChzaG93UG9wdXApPVwib3BlbkRpYWxvZygpXCI+PC9saWItbm8tZGF0YT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbjwvZGl2PlxyXG4iXX0=