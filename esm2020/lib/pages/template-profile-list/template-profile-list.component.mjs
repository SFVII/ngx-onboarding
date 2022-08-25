import { Component, HostListener, ViewChild } from "@angular/core";
import { DialogCreateTemplateComponent } from "../../components/template/dialog-create-template/dialog-create-template.component";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import * as i0 from "@angular/core";
import * as i1 from "../../onboarding.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/common";
import * as i7 from "../../directives/elevation";
import * as i8 from "@angular/material/slide-toggle";
import * as i9 from "@angular/forms";
import * as i10 from "ngx-intl-tel-input";
import * as i11 from "@nicky-lenaers/ngx-scroll-to";
import * as i12 from "../../components/loading/loading.component";
function TemplateProfileListComponent_section_32_lib_loading_page_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function TemplateProfileListComponent_section_32_mat_icon_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "filter_none");
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return [a0]; };
function TemplateProfileListComponent_section_32_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 14)(1, "div", 15)(2, "span");
    i0.ɵɵtext(3, "Live");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-slide-toggle", 16);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_section_32_Template_mat_slide_toggle_ngModelChange_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r7); const d_r2 = restoredCtx.$implicit; return d_r2.Status = $event; })("ngModelChange", function TemplateProfileListComponent_section_32_Template_mat_slide_toggle_ngModelChange_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const d_r2 = restoredCtx.$implicit; const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onChangeStatus(d_r2, false); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 17)(6, "p", 18);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 19);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 20)(12, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_section_32_Template_button_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const d_r2 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onEditProfil(d_r2._id); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "button", 22);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_section_32_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const d_r2 = restoredCtx.$implicit; const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.copyTemplate(d_r2); });
    i0.ɵɵtemplate(16, TemplateProfileListComponent_section_32_lib_loading_page_16_Template, 1, 0, "lib-loading-page", 23);
    i0.ɵɵtemplate(17, TemplateProfileListComponent_section_32_mat_icon_17_Template, 2, 0, "mat-icon", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_section_32_Template_button_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const d_r2 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onDelete(d_r2._id); });
    i0.ɵɵelementStart(19, "mat-icon");
    i0.ɵɵtext(20, "delete");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const d_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("defaultElevation", 0)("id", d_r2.Name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", d_r2.Status);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(12, _c0, ctx_r0.service.mainPath + "/template/" + d_r2._id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", d_r2.Name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 9, d_r2.createdAt, "dd/MM/yy"), "");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngxScrollTo", ctx_r0.toTemplateCopyId);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.loading && ctx_r0.cpId === d_r2._id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.loading || ctx_r0.cpId !== d_r2._id);
} }
function TemplateProfileListComponent_div_34_lib_loading_page_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function TemplateProfileListComponent_div_34_mat_icon_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "filter_none");
    i0.ɵɵelementEnd();
} }
function TemplateProfileListComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24)(1, "div", 25)(2, "span");
    i0.ɵɵtext(3, "Brouillon");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-slide-toggle", 26);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_34_Template_mat_slide_toggle_ngModelChange_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r17); const d_r12 = restoredCtx.$implicit; return d_r12.Status = $event; })("ngModelChange", function TemplateProfileListComponent_div_34_Template_mat_slide_toggle_ngModelChange_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r17); const d_r12 = restoredCtx.$implicit; const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.onChangeStatus(d_r12, true); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 17)(6, "p", 18);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 19);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 20)(12, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_34_Template_button_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r17); const d_r12 = restoredCtx.$implicit; const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.onEditProfil(d_r12._id); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_34_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r17); const d_r12 = restoredCtx.$implicit; const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.copyTemplate(d_r12); });
    i0.ɵɵtemplate(16, TemplateProfileListComponent_div_34_lib_loading_page_16_Template, 1, 0, "lib-loading-page", 23);
    i0.ɵɵtemplate(17, TemplateProfileListComponent_div_34_mat_icon_17_Template, 2, 0, "mat-icon", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_34_Template_button_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r17); const d_r12 = restoredCtx.$implicit; const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.onDelete(d_r12._id); });
    i0.ɵɵelementStart(19, "mat-icon");
    i0.ɵɵtext(20, "delete");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const d_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("defaultElevation", 0);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", d_r12.Status);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(10, _c0, ctx_r1.service.mainPath + "/template/" + d_r12._id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", d_r12.Name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 7, d_r12.createdAt, "dd/MM/yy"), "");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.loading && ctx_r1.cpId === d_r12._id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.loading || ctx_r1.cpId !== d_r12._id);
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
    filterTemplate(value, name) {
        this.currentFilter = name;
        if (this.currentFilter === 'all') {
            this.publishTemplate = this.datas.filter((d) => d.Status === true);
            this.draftTemplate = this.datas.filter((d) => d.Status === false);
        }
        else if (this.currentFilter === 'publish') {
            this.publishTemplate = this.datas.filter((d) => d.Status === true);
            this.draftTemplate = [];
        }
        else if (this.currentFilter === 'draft') {
            this.publishTemplate = [];
            this.draftTemplate = this.datas.filter((d) => d.Status === false);
        }
        else if (this.currentFilter === 'date') {
            this.publishTemplate = this.datas.filter((d) => d.Status === true);
            this.draftTemplate = this.datas.filter((d) => d.Status === false);
            this.publishTemplate.sort((a, b) => value === 'desc' ? (new Date(b.createdAt).getTime() > new Date(a.createdAt).getTime() ? 1 : -1) : (new Date(b.createdAt).getTime() > new Date(a.createdAt).getTime() ? -1 : 1));
            this.draftTemplate.sort((a, b) => value === 'desc' ? (new Date(b.createdAt).getTime() > new Date(a.createdAt).getTime() ? 1 : -1) : (new Date(b.createdAt).getTime() > new Date(a.createdAt).getTime() ? -1 : 1));
        }
        else {
            this.publishTemplate = this.datas.filter((d) => d.Status === true);
            this.draftTemplate = this.datas.filter((d) => d.Status === false);
            this.publishTemplate.sort((a, b) => value === 'desc' ? (b.Name.toLowerCase() > a.Name.toLowerCase() ? 1 : -1) : (b.Name.toLowerCase() > a.Name.toLowerCase() ? -1 : 1));
            this.draftTemplate.sort((a, b) => value === 'desc' ? (b.Name.toLowerCase() > a.Name.toLowerCase() ? 1 : -1) : (b.Name.toLowerCase() > a.Name.toLowerCase() ? -1 : 1));
        }
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
    } }, decls: 35, vars: 15, consts: [[1, "main"], [1, "content-list"], [1, "list"], [1, "list-title"], [3, "click"], [2, "display", "flex", "align-items", "center"], [2, "display", "flex", "flex-direction", "column", "margin-left", "5px"], [2, "margin-bottom", "-3px", 3, "click"], [2, "margin-top", "-3px", 3, "click"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "click"], [1, "live-template", 3, "scroll"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", "id", 4, "ngFor", "ngForOf"], [1, "draft-template"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation", "id"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelChange"], [1, "box-content", 3, "routerLink"], [1, "template-title"], [1, "template-date"], [1, "template-footer"], [1, "action-button", 2, "background-color", "transparent", 3, "click"], [1, "action-button", 2, "background-color", "transparent", 3, "ngxScrollTo", "click"], [4, "ngIf"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation"], [1, "toogle-button", "draft"], [1, "draft", 3, "ngModel", "ngModelChange"]], template: function TemplateProfileListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "ul")(5, "li", 4);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_Template_li_click_5_listener() { return ctx.filterTemplate("", "all"); });
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "li", 4);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_Template_li_click_7_listener() { return ctx.filterTemplate("", "publish"); });
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "li", 4);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_Template_li_click_9_listener() { return ctx.filterTemplate("", "draft"); });
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "li", 5)(12, "span");
        i0.ɵɵtext(13, "Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "span", 6)(15, "mat-icon", 7);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_Template_mat_icon_click_15_listener() { return ctx.filterTemplate("asc", "date"); });
        i0.ɵɵtext(16, " keyboard_arrow_up");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-icon", 8);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_Template_mat_icon_click_17_listener() { return ctx.filterTemplate("desc", "date"); });
        i0.ɵɵtext(18, " keyboard_arrow_down");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(19, "li", 5)(20, "span");
        i0.ɵɵtext(21, "Nom");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "span", 6)(23, "mat-icon", 7);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_Template_mat_icon_click_23_listener() { return ctx.filterTemplate("asc", "name"); });
        i0.ɵɵtext(24, " keyboard_arrow_up");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "mat-icon", 8);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_Template_mat_icon_click_25_listener() { return ctx.filterTemplate("desc", "name"); });
        i0.ɵɵtext(26, " keyboard_arrow_down");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(27, "a", 9);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_Template_a_click_27_listener() { return ctx.openDialog(); });
        i0.ɵɵtext(28, " Cr\u00E9er profil ");
        i0.ɵɵelementStart(29, "mat-icon");
        i0.ɵɵtext(30, "add");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(31, "div", 10);
        i0.ɵɵlistener("scroll", function TemplateProfileListComponent_Template_div_scroll_31_listener($event) { return ctx.onScroll($event); });
        i0.ɵɵtemplate(32, TemplateProfileListComponent_section_32_Template, 21, 14, "section", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "div", 12);
        i0.ɵɵtemplate(34, TemplateProfileListComponent_div_34_Template, 21, 12, "div", 13);
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵclassMap(ctx.currentFilter === "all" ? "active" : "");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" Tous (", ctx.datas.length, ") ");
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.currentFilter === "publish" ? "active" : "");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" Publi\u00E9s (", ctx.publishTemplateLength, ") ");
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.currentFilter === "draft" ? "active" : "");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" Brouillons (", ctx.draftTemplateLength, ") ");
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.currentFilter === "date" ? "active" : "");
        i0.ɵɵadvance(8);
        i0.ɵɵclassMap(ctx.currentFilter === "name" ? "active" : "");
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("ngForOf", ctx.publishTemplate);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.draftTemplate);
    } }, directives: [i4.MatIcon, i5.MatAnchor, i6.NgForOf, i7.MaterialElevationDirective, i8.MatSlideToggle, i9.NgControlStatus, i9.NgModel, i10.NativeElementInjectorDirective, i2.RouterLink, i11.ScrollToDirective, i6.NgIf, i12.LoadingPageComponent], pipes: [i6.DatePipe], styles: [".main[_ngcontent-%COMP%]{background:#f4f7f9 0% 0% no-repeat padding-box;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font: 700 23px/30px Nexa Text;letter-spacing:0px;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font: 20px/26px Nexa Text;letter-spacing:0px;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-title[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-date[_ngcontent-%COMP%]{font-family:Nexa;font-weight:250;font-size:14px;line-height:120%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:10px;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{margin-right:50px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .draft-template[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .live-template[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:266px;height:300px;position:relative;margin-right:50px;margin-bottom:50px;background:#ffffff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#171f26 0% 0% no-repeat padding-box;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;text-align:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:#ffffff 0% 0% no-repeat padding-box;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-family:Nexa;font-style:normal;font-size:18px;line-height:18px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button.draft[_ngcontent-%COMP%]{color:#f3a124}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{background-color:#171f26}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]{background:#543cb6;border-radius:0 0 5px 5px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]   button.action-button[_ngcontent-%COMP%]{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}.blink[_ngcontent-%COMP%]{animation:blink 2s ease-out;border:2px solid red;border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}to{transform:scale(1);opacity:1}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TemplateProfileListComponent, [{
        type: Component,
        args: [{ selector: "onboarding-profile-list", template: "<div class=\"main\">\r\n    <div class=\"content-list\">\r\n\r\n        <div class=\"list\">\r\n            <div class=\"list-title \">\r\n                <ul>\r\n                    <li [class]=\"currentFilter==='all' ? 'active' :''\" (click)=\"filterTemplate('','all')\"> Tous\r\n                        ({{datas.length}}) </li>\r\n                    <li [class]=\"currentFilter==='publish' ? 'active' :''\" (click)=\"filterTemplate('','publish')\">\r\n                        Publi\u00E9s ({{publishTemplateLength}}) </li>\r\n                    <li [class]=\"currentFilter==='draft' ? 'active' :''\" (click)=\"filterTemplate('','draft')\">\r\n                        Brouillons ({{draftTemplateLength}}) </li>\r\n                    <li style=\"display: flex;align-items: center;\" [class]=\"currentFilter==='date' ? 'active' :''\">\r\n                        <span>Date</span>\r\n                        <span style=\"display: flex;flex-direction: column;margin-left: 5px;\">\r\n                            <mat-icon style=\"margin-bottom: -3px;\" (click)=\"filterTemplate('asc','date')\">\r\n                                keyboard_arrow_up</mat-icon>\r\n                            <mat-icon style=\"margin-top: -3px;\" (click)=\"filterTemplate('desc','date')\">\r\n                                keyboard_arrow_down</mat-icon>\r\n                        </span>\r\n                    </li>\r\n                    <li style=\"display: flex;align-items: center;\" [class]=\"currentFilter==='name' ? 'active' :''\">\r\n                        <span>Nom</span>\r\n                        <span style=\"display: flex;flex-direction: column;margin-left: 5px;\">\r\n                            <mat-icon style=\"margin-bottom: -3px;\" (click)=\"filterTemplate('asc','name')\">\r\n                                keyboard_arrow_up</mat-icon>\r\n                            <mat-icon style=\"margin-top: -3px;\" (click)=\"filterTemplate('desc','name')\">\r\n                                keyboard_arrow_down</mat-icon>\r\n                        </span>\r\n                    </li>\r\n                </ul>\r\n                <a role=\"button\" class=\"add-profil\" (click)=\"openDialog()\" mat-raised-button color=\"primary\">\r\n                    Cr\u00E9er profil <mat-icon>add</mat-icon>\r\n                </a>\r\n            </div>\r\n            <div class=\"live-template\" (scroll)=\"onScroll($event)\">\r\n                <section appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\r\n                    *ngFor=\"let d of publishTemplate;let index=index\" [id]=\"d.Name\">\r\n                    <div class=\"toogle-button\"><span>Live</span>\r\n                        <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"d.Status\"\r\n                            (ngModelChange)=\"onChangeStatus(d,false)\">\r\n                        </mat-slide-toggle>\r\n                    </div>\r\n                    <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\r\n                        <p class=\"template-title\"> {{d.Name}}</p>\r\n                        <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\r\n                    </div>\r\n\r\n                    <div class=\"template-footer\">\r\n                        <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                            (click)=\"onEditProfil(d._id)\">\r\n                            <mat-icon>edit</mat-icon>\r\n                        </button>\r\n                        <button class=\"action-button\" style=\"background-color: transparent;\" (click)=\"copyTemplate(d)\"\r\n                            [ngxScrollTo]=\"toTemplateCopyId\">\r\n                            <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\r\n                            <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\r\n                        </button>\r\n                        <button class=\"action-button\" style=\"background-color: transparent;\" (click)=\"onDelete(d._id)\">\r\n                            <mat-icon>delete</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                </section>\r\n            </div>\r\n            <div class=\"draft-template\">\r\n                <div appMaterialElevation [defaultElevation]=\"0\" raisedElevation=\"1\" class=\"box-template\"\r\n                    *ngFor=\"let d of draftTemplate;let index=index\">\r\n                    <div class=\"toogle-button draft\"><span>Brouillon</span>\r\n                        <mat-slide-toggle class=\"draft\" [(ngModel)]=\"d.Status\" (ngModelChange)=\"onChangeStatus(d,true)\">\r\n                        </mat-slide-toggle>\r\n                    </div>\r\n                    <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template/'+d._id]\">\r\n                        <p class=\"template-title\"> {{d.Name}}</p>\r\n                        <p class=\"template-date\"> {{d.createdAt | date :'dd/MM/yy'}}</p>\r\n                    </div>\r\n\r\n                    <div class=\"template-footer\">\r\n                        <button class=\"action-button\" style=\"background-color: transparent;\"\r\n                            (click)=\"onEditProfil(d._id)\">\r\n                            <mat-icon>edit</mat-icon>\r\n                        </button>\r\n                        <button class=\"action-button\" style=\"background-color: transparent;\" (click)=\"copyTemplate(d)\">\r\n                            <lib-loading-page *ngIf=\"loading && cpId===d._id\"></lib-loading-page>\r\n                            <mat-icon *ngIf=\"!loading || cpId!==d._id\">filter_none</mat-icon>\r\n                        </button>\r\n                        <button class=\"action-button\" style=\"background-color: transparent;\" (click)=\"onDelete(d._id)\">\r\n                            <mat-icon>delete</mat-icon>\r\n                        </button>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>", styles: [".main{background:#f4f7f9 0% 0% no-repeat padding-box;opacity:1;height:100%}.main .content-list{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main .content-list h3{text-align:left;font: 700 23px/30px Nexa Text;letter-spacing:0px;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main .content-list p.sub-title{margin-bottom:57px;font: 20px/26px Nexa Text;letter-spacing:0px;color:#171f26;width:300px}.main .content-list .template-title{font-family:Nexa;font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main .content-list .template-date{font-family:Nexa;font-weight:250;font-size:14px;line-height:120%}.main .content-list .list .list-title{font-family:Nexa;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.main .content-list .list .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0}.main .content-list .list .list-title ul li{margin-right:20px;padding-bottom:10px;cursor:pointer}.main .content-list .list .list-title ul li.active{border-bottom:4px solid #3c4252}.main .content-list .list .list-title .add-profil{margin-right:50px}.main .content-list .list .draft-template,.main .content-list .list .live-template{display:flex;flex-wrap:wrap;justify-content:flex-start}.main .content-list .list .box-template{width:266px;height:300px;position:relative;margin-right:50px;margin-bottom:50px;background:#ffffff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main .content-list .list .box-template img{width:81px;height:81px}.main .content-list .list .box-template a{background:#171f26 0% 0% no-repeat padding-box;border-radius:7px;font-size:15px}.main .content-list .list .box-template .box-content{width:100%;text-align:center}.main .content-list .list .box-template .box-content .picto-preview{width:113px;height:113px;background:#ffffff 0% 0% no-repeat padding-box;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main .content-list .list .box-template .box-content .picto-preview h3{font-size:40px;color:#dce4e9}.main .content-list .list .box-template .toogle-button{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-family:Nexa;font-style:normal;font-size:18px;line-height:18px}.main .content-list .list .box-template .toogle-button span{padding-right:10px}.main .content-list .list .box-template .toogle-button.draft{color:#f3a124}.main .content-list .list .new-template{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main .content-list .list .add-profil{background-color:#171f26}.main .content-list .template-footer{background:#543cb6;border-radius:0 0 5px 5px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main .content-list .template-footer button.action-button{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}:host ::ng-deep .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}.blink{animation:blink 2s ease-out;border:2px solid red;border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}to{transform:scale(1);opacity:1}}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWxpc3QvdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWxpc3QvdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFFbEksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDaURqQyxtQ0FBcUU7OztJQUNyRSxnQ0FBMkM7SUFBQSwyQkFBVztJQUFBLGlCQUFXOzs7OztJQXBCN0UsbUNBQ29FLGNBQUEsV0FBQTtJQUMvQixvQkFBSTtJQUFBLGlCQUFPO0lBQ3hDLDRDQUM4QztJQURaLDJQQUFzQixtUEFDbkMsNEJBQWlCLEtBQUssQ0FBQyxJQURZO0lBRXhELGlCQUFtQixFQUFBO0lBRXZCLCtCQUFtRixZQUFBO0lBQ3BELFlBQVU7SUFBQSxpQkFBSTtJQUN6Qyw2QkFBeUI7SUFBQyxZQUFrQzs7SUFBQSxpQkFBSSxFQUFBO0lBR3BFLGdDQUE2QixrQkFBQTtJQUVyQix1T0FBUyw2QkFBbUIsSUFBQztJQUM3QixpQ0FBVTtJQUFBLHFC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Q0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEssSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdks7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcs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UUFDbEQsMEZBMEJVO1FBQ2QsaUJBQU07UUFDTixnQ0FBNEI7UUFDeEIsa0ZBeUJNO1FBQ1YsaUJBQU0sRUFBQSxFQUFBLEVBQUE7O1FBckZNLGVBQThDO1FBQTlDLDBEQUE4QztRQUFxQyxlQUNoRTtRQURnRSx3REFDaEU7UUFDbkIsZUFBa0Q7UUFBbEQsOERBQWtEO1FBQ2xELGVBQW9DO1FBQXBDLHlFQUFvQztRQUNwQyxlQUFnRDtRQUFoRCw0REFBZ0Q7UUFDaEQsZUFBcUM7UUFBckMscUVBQXFDO1FBQ00sZUFBK0M7UUFBL0MsMkRBQStDO1FBUy9DLGVBQStDO1FBQS9DLDJEQUErQztRQWdCaEYsZ0JBQW1CO1FBQW5CLDZDQUFtQjtRQTZCbkIsZUFBaUI7UUFBakIsMkNBQWlCOzt1RkRuRHRDLDRCQUE0QjtjQUx4QyxTQUFTOzJCQUNFLHlCQUF5QjtpSEFnQlYsU0FBUztrQkFBakMsU0FBUzttQkFBQyxZQUFZO1lBQ0gsSUFBSTtrQkFBdkIsU0FBUzttQkFBQyxPQUFPO1lBb0JsQixRQUFRO2tCQURQLFlBQVk7bUJBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IERpYWxvZ0NyZWF0ZVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVtcGxhdGUvZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XHJcbmltcG9ydCB7IE1hdFBhZ2luYXRvciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3JcIjtcclxuaW1wb3J0IHsgTWF0U29ydCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zb3J0XCI7XHJcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90YWJsZVwiO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwib25ib2FyZGluZy1wcm9maWxlLWxpc3RcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi90ZW1wbGF0ZS1wcm9maWxlLWxpc3QuY29tcG9uZW50LnNjc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVByb2ZpbGVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBkaXNwbGF5ZWRDb2x1bW5zID0gW1wiTmFtZVwiLCBcInZjb250YWN0c1wiLCBcImNyZWF0ZWRBdFwiLCBcInVwZGF0ZWRBdFwiLCBcImFjdGlvblwiXTtcclxuICBkYXRhczogYW55ID0gW107XHJcbiAgcHVibGlzaFRlbXBsYXRlOiBhbnkgPSBbXTtcclxuICBkcmFmdFRlbXBsYXRlOiBhbnkgPSBbXTtcclxuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KFtdKTtcclxuICBkZWZhdWx0RWxldmF0aW9uID0gMjtcclxuICByYWlzZWRFbGV2YXRpb24gPSA4O1xyXG4gIGxvYWRpbmcgPSBmYWxzZTtcclxuICBjcElkID0gbnVsbDtcclxuICB0b1RlbXBsYXRlQ29weUlkID0gXCJcIlxyXG4gIGN1cnJlbnRGaWx0ZXIgPSBcImFsbFwiXHJcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xyXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcclxuICBwdWJsaXNoVGVtcGxhdGVMZW5ndGg6IGFueTtcclxuICBkcmFmdFRlbXBsYXRlTGVuZ3RoOiBhbnk7XHJcbiAgdGFncyA9IFtdXHJcbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UudGVtcGxhdGVzLnN1YnNjcmliZSgodGVtcGxhdGVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHRlbXBsYXRlcyAmJiB0ZW1wbGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuZGF0YXMgPSB0ZW1wbGF0ZXM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgdGhpcy5nZXRBbGxQcm9maWxzKCk7XHJcbiAgICAgIHRoaXMudGFncyA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxUYWdzKCk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcclxuICBvblNjcm9sbChldmVudCkge1xyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKTtcclxuICAgIGNvbnN0IG5hdkxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXZlLXRlbXBsYXRlIC5ib3gtdGVtcGxhdGVcIik7XHJcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tV1dXV1dXV1dXV1dXVy0tLS0tLS0tLS0tLS0tLS0tLScsIG5hdkxpKTtcclxuICAgIGxldCBjdXJyZW50ID0gXCJcIjtcclxuICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgY29uc3Qgc2VjdGlvblRvcCA9IHNlY3Rpb24ub2Zmc2V0VG9wO1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnNjcm9sbFRvcCA+IHNlY3Rpb25Ub3ApIHtcclxuICAgICAgICBjdXJyZW50ID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoXCJpZFwiKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIG5hdkxpLmZvckVhY2goKGxpKSA9PiB7XHJcblxyXG5cclxuICAgICAgY29uc3QgaWQgPSBsaS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJibGlua1wiKTtcclxuICAgICAgaWYgKGlkLnN1YnN0cmluZygwLCBpZC5sZW5ndGggLSAxKSA9PT0gY3VycmVudCkge1xyXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJibGlua1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdibGluaycpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25BZGRQcm9maWwoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJvbmJvYXJkaW5nL3RlbXBsYXRlLzBcIl0pO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0UHJvZmlsKGlkKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJvbmJvYXJkaW5nL3RlbXBsYXRlL1wiLCBpZF0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25DaGFuZ2VTdGF0dXMoZGF0YSwgU3RhdHVzKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlUHJvZmlsKHsgLi4uZGF0YSwgU3RhdHVzIH0pO1xyXG4gICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IHRydWUpO1xyXG4gICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSBmYWxzZSk7XHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuZ2V0QWxsUHJvZmlscygpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycnJvci4uLi4uLlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIG9uRGVsZXRlKGlkKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcbiAgICBpZiAoY29uZmlybShcIlZvdWxleiB2b3VzIHN1cHByaW1lciBjZXR0ZSB0ZW1wbGF0ZSA/XCIpKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2VydmljZS5kZWxldGVQcm9maWwoaWQpO1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRBbGxQcm9maWxzKClcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRBbGxQcm9maWxzKCkge1xyXG4gICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTtcclxuICAgIHRoaXMuZGF0YXMgPSBwcm9maWxlO1xyXG4gICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IHRydWUpO1xyXG4gICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSBmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5wdWJsaXNoVGVtcGxhdGVMZW5ndGggPSB0aGlzLnB1Ymxpc2hUZW1wbGF0ZS5sZW5ndGhcclxuICAgIHRoaXMuZHJhZnRUZW1wbGF0ZUxlbmd0aCA9IHRoaXMuZHJhZnRUZW1wbGF0ZS5sZW5ndGhcclxuICB9XHJcblxyXG4gIGZpbHRlclRlbXBsYXRlKHZhbHVlLCBuYW1lKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRGaWx0ZXIgPSBuYW1lO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudEZpbHRlciA9PT0gJ2FsbCcpIHtcclxuICAgICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IHRydWUpO1xyXG4gICAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IGZhbHNlKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50RmlsdGVyID09PSAncHVibGlzaCcpIHtcclxuICAgICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IHRydWUpO1xyXG4gICAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSBbXTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50RmlsdGVyID09PSAnZHJhZnQnKSB7XHJcbiAgICAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gW107XHJcbiAgICAgIHRoaXMuZHJhZnRUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRGaWx0ZXIgPT09ICdkYXRlJykge1xyXG4gICAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gdHJ1ZSk7XHJcbiAgICAgIHRoaXMuZHJhZnRUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gZmFsc2UpO1xyXG4gICAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZS5zb3J0KChhLCBiKSA9PiB2YWx1ZSA9PT0gJ2Rlc2MnID8gKG5ldyBEYXRlKGIuY3JlYXRlZEF0KS5nZXRUaW1lKCkgPiBuZXcgRGF0ZShhLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID8gMSA6IC0xKSA6IChuZXcgRGF0ZShiLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID4gbmV3IERhdGUoYS5jcmVhdGVkQXQpLmdldFRpbWUoKSA/IC0xIDogMSkpO1xyXG4gICAgICB0aGlzLmRyYWZ0VGVtcGxhdGUuc29ydCgoYSwgYikgPT4gdmFsdWUgPT09ICdkZXNjJyA/IChuZXcgRGF0ZShiLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID4gbmV3IERhdGUoYS5jcmVhdGVkQXQpLmdldFRpbWUoKSA/IDEgOiAtMSkgOiAobmV3IERhdGUoYi5jcmVhdGVkQXQpLmdldFRpbWUoKSA+IG5ldyBEYXRlKGEuY3JlYXRlZEF0KS5nZXRUaW1lKCkgPyAtMSA6IDEpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSB0cnVlKTtcclxuICAgICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSBmYWxzZSk7XHJcbiAgICAgIHRoaXMucHVibGlzaFRlbXBsYXRlLnNvcnQoKGEsIGIpID0+IHZhbHVlID09PSAnZGVzYycgPyAoYi5OYW1lLnRvTG93ZXJDYXNlKCkgPiBhLk5hbWUudG9Mb3dlckNhc2UoKSA/IDEgOiAtMSkgOiAoYi5OYW1lLnRvTG93ZXJDYXNlKCkgPiBhLk5hbWUudG9Mb3dlckNhc2UoKSA/IC0xIDogMSkpO1xyXG4gICAgICB0aGlzLmRyYWZ0VGVtcGxhdGUuc29ydCgoYSwgYikgPT4gdmFsdWUgPT09ICdkZXNjJyA/IChiLk5hbWUudG9Mb3dlckNhc2UoKSA+IGEuTmFtZS50b0xvd2VyQ2FzZSgpID8gMSA6IC0xKSA6IChiLk5hbWUudG9Mb3dlckNhc2UoKSA+IGEuTmFtZS50b0xvd2VyQ2FzZSgpID8gLTEgOiAxKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBjb3B5VGVtcGxhdGUoZGF0YSkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxyXG4gICAgdGhpcy5jcElkID0gZGF0YS5faWRcclxuICAgIGNvbnN0IHsgX2lkLCAuLi5yZXN0IH0gPSBkYXRhXHJcbiAgICBjb25zdCBjb3B5TmFtZSA9IGRhdGEuTmFtZSArIFwiIC0gY29waWVcIlxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZVByb2ZpbCh7IC4uLnJlc3QsIE5hbWU6IGNvcHlOYW1lIH0pO1xyXG4gICAgdGhpcy50b1RlbXBsYXRlQ29weUlkID0gYCMke2NvcHlOYW1lfWBcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgdGhpcy5vbkVkaXRQcm9maWwocmVzdWx0Ll9pZClcclxuICAgICAgdGhpcy5jcElkID0gbnVsbFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJyb3IuLi4uLi5cIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG5cclxuICB9XHJcblxyXG4gIG9wZW5EaWFsb2coKSB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0NyZWF0ZVRlbXBsYXRlQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChjdXJyZW50OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UuY3VycmVudFRlbXBsYXRlLm5leHQoY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuc2VydmljZS5tYWluUGF0aCArICcvdGVtcGxhdGUvMCddKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1haW5cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWxpc3RcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtdGl0bGUgXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIFtjbGFzc109XCJjdXJyZW50RmlsdGVyPT09J2FsbCcgPyAnYWN0aXZlJyA6JydcIiAoY2xpY2spPVwiZmlsdGVyVGVtcGxhdGUoJycsJ2FsbCcpXCI+IFRvdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHt7ZGF0YXMubGVuZ3RofX0pIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIFtjbGFzc109XCJjdXJyZW50RmlsdGVyPT09J3B1Ymxpc2gnID8gJ2FjdGl2ZScgOicnXCIgKGNsaWNrKT1cImZpbHRlclRlbXBsYXRlKCcnLCdwdWJsaXNoJylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHVibGnDqXMgKHt7cHVibGlzaFRlbXBsYXRlTGVuZ3RofX0pIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIFtjbGFzc109XCJjdXJyZW50RmlsdGVyPT09J2RyYWZ0JyA/ICdhY3RpdmUnIDonJ1wiIChjbGljayk9XCJmaWx0ZXJUZW1wbGF0ZSgnJywnZHJhZnQnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcm91aWxsb25zICh7e2RyYWZ0VGVtcGxhdGVMZW5ndGh9fSkgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7XCIgW2NsYXNzXT1cImN1cnJlbnRGaWx0ZXI9PT0nZGF0ZScgPyAnYWN0aXZlJyA6JydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGF0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47bWFyZ2luLWxlZnQ6IDVweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IC0zcHg7XCIgKGNsaWNrKT1cImZpbHRlclRlbXBsYXRlKCdhc2MnLCdkYXRlJylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZF9hcnJvd191cDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gc3R5bGU9XCJtYXJnaW4tdG9wOiAtM3B4O1wiIChjbGljayk9XCJmaWx0ZXJUZW1wbGF0ZSgnZGVzYycsJ2RhdGUnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkX2Fycm93X2Rvd248L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7XCIgW2NsYXNzXT1cImN1cnJlbnRGaWx0ZXI9PT0nbmFtZScgPyAnYWN0aXZlJyA6JydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tm9tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjttYXJnaW4tbGVmdDogNXB4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogLTNweDtcIiAoY2xpY2spPVwiZmlsdGVyVGVtcGxhdGUoJ2FzYycsJ25hbWUnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkX2Fycm93X3VwPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBzdHlsZT1cIm1hcmdpbi10b3A6IC0zcHg7XCIgKGNsaWNrKT1cImZpbHRlclRlbXBsYXRlKCdkZXNjJywnbmFtZScpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRfYXJyb3dfZG93bjwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImFkZC1wcm9maWxcIiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3LDqWVyIHByb2ZpbCA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXZlLXRlbXBsYXRlXCIgKHNjcm9sbCk9XCJvblNjcm9sbCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBhcHBNYXRlcmlhbEVsZXZhdGlvbiBbZGVmYXVsdEVsZXZhdGlvbl09XCIwXCIgcmFpc2VkRWxldmF0aW9uPVwiMVwiIGNsYXNzPVwiYm94LXRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZCBvZiBwdWJsaXNoVGVtcGxhdGU7bGV0IGluZGV4PWluZGV4XCIgW2lkXT1cImQuTmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29nbGUtYnV0dG9uXCI+PHNwYW4+TGl2ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY29sb3I9XCIjNkZFOEQ3XCIgWyhuZ01vZGVsKV09XCJkLlN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZVN0YXR1cyhkLGZhbHNlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1jb250ZW50XCIgW3JvdXRlckxpbmtdPVwiW3RoaXMuc2VydmljZS5tYWluUGF0aCsnL3RlbXBsYXRlLycrZC5faWRdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGVtcGxhdGUtdGl0bGVcIj4ge3tkLk5hbWV9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZW1wbGF0ZS1kYXRlXCI+IHt7ZC5jcmVhdGVkQXQgfCBkYXRlIDonZGQvTU0veXknfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wbGF0ZS1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25FZGl0UHJvZmlsKGQuX2lkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiIChjbGljayk9XCJjb3B5VGVtcGxhdGUoZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25neFNjcm9sbFRvXT1cInRvVGVtcGxhdGVDb3B5SWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItbG9hZGluZy1wYWdlICpuZ0lmPVwibG9hZGluZyAmJiBjcElkPT09ZC5faWRcIj48L2xpYi1sb2FkaW5nLXBhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCIhbG9hZGluZyB8fCBjcElkIT09ZC5faWRcIj5maWx0ZXJfbm9uZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XCIgKGNsaWNrKT1cIm9uRGVsZXRlKGQuX2lkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyYWZ0LXRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGFwcE1hdGVyaWFsRWxldmF0aW9uIFtkZWZhdWx0RWxldmF0aW9uXT1cIjBcIiByYWlzZWRFbGV2YXRpb249XCIxXCIgY2xhc3M9XCJib3gtdGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBkIG9mIGRyYWZ0VGVtcGxhdGU7bGV0IGluZGV4PWluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2dsZS1idXR0b24gZHJhZnRcIj48c3Bhbj5Ccm91aWxsb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGNsYXNzPVwiZHJhZnRcIiBbKG5nTW9kZWwpXT1cImQuU3RhdHVzXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2VTdGF0dXMoZCx0cnVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1jb250ZW50XCIgW3JvdXRlckxpbmtdPVwiW3RoaXMuc2VydmljZS5tYWluUGF0aCsnL3RlbXBsYXRlLycrZC5faWRdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGVtcGxhdGUtdGl0bGVcIj4ge3tkLk5hbWV9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZW1wbGF0ZS1kYXRlXCI+IHt7ZC5jcmVhdGVkQXQgfCBkYXRlIDonZGQvTU0veXknfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wbGF0ZS1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25FZGl0UHJvZmlsKGQuX2lkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiIChjbGljayk9XCJjb3B5VGVtcGxhdGUoZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItbG9hZGluZy1wYWdlICpuZ0lmPVwibG9hZGluZyAmJiBjcElkPT09ZC5faWRcIj48L2xpYi1sb2FkaW5nLXBhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCIhbG9hZGluZyB8fCBjcElkIT09ZC5faWRcIj5maWx0ZXJfbm9uZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XCIgKGNsaWNrKT1cIm9uRGVsZXRlKGQuX2lkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4iXX0=