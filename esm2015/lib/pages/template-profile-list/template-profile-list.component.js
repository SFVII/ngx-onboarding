import { __awaiter, __rest } from "tslib";
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
const _c0 = function (a0) { return [a0]; };
function TemplateProfileListComponent_section_32_Template(rf, ctx) { if (rf & 1) {
    const _r307 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 14);
    i0.ɵɵelementStart(1, "div", 15);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Live");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-slide-toggle", 16);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_section_32_Template_mat_slide_toggle_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r307); const d_r305 = ctx.$implicit; return d_r305.Status = $event; })("ngModelChange", function TemplateProfileListComponent_section_32_Template_mat_slide_toggle_ngModelChange_4_listener() { i0.ɵɵrestoreView(_r307); const d_r305 = ctx.$implicit; const ctx_r308 = i0.ɵɵnextContext(); return ctx_r308.onChangeStatus(d_r305, false); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 17);
    i0.ɵɵelementStart(6, "p", 18);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 19);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 20);
    i0.ɵɵelementStart(12, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_section_32_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r307); const d_r305 = ctx.$implicit; const ctx_r309 = i0.ɵɵnextContext(); return ctx_r309.onEditProfil(d_r305._id); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 22);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_section_32_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r307); const d_r305 = ctx.$implicit; const ctx_r310 = i0.ɵɵnextContext(); return ctx_r310.copyTemplate(d_r305); });
    i0.ɵɵelementStart(16, "mat-icon");
    i0.ɵɵtext(17, "filter_none");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_section_32_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r307); const d_r305 = ctx.$implicit; const ctx_r311 = i0.ɵɵnextContext(); return ctx_r311.onDelete(d_r305._id); });
    i0.ɵɵelementStart(19, "mat-icon");
    i0.ɵɵtext(20, "delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r305 = ctx.$implicit;
    const ctx_r303 = i0.ɵɵnextContext();
    i0.ɵɵproperty("defaultElevation", 0)("id", d_r305.Name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", d_r305.Status);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(10, _c0, ctx_r303.service.mainPath + "/template/" + d_r305._id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", d_r305.Name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 7, d_r305.createdAt, "dd/MM/yy"), "");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngxScrollTo", ctx_r303.toTemplateCopyId);
} }
function TemplateProfileListComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r314 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelementStart(1, "div", 24);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Brouillon");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-slide-toggle", 25);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_34_Template_mat_slide_toggle_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r314); const d_r312 = ctx.$implicit; return d_r312.Status = $event; })("ngModelChange", function TemplateProfileListComponent_div_34_Template_mat_slide_toggle_ngModelChange_4_listener() { i0.ɵɵrestoreView(_r314); const d_r312 = ctx.$implicit; const ctx_r315 = i0.ɵɵnextContext(); return ctx_r315.onChangeStatus(d_r312, true); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 17);
    i0.ɵɵelementStart(6, "p", 18);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 19);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 20);
    i0.ɵɵelementStart(12, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_34_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r314); const d_r312 = ctx.$implicit; const ctx_r316 = i0.ɵɵnextContext(); return ctx_r316.onEditProfil(d_r312._id); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_34_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r314); const d_r312 = ctx.$implicit; const ctx_r317 = i0.ɵɵnextContext(); return ctx_r317.copyTemplate(d_r312); });
    i0.ɵɵelementStart(16, "mat-icon");
    i0.ɵɵtext(17, "filter_none");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_34_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r314); const d_r312 = ctx.$implicit; const ctx_r318 = i0.ɵɵnextContext(); return ctx_r318.onDelete(d_r312._id); });
    i0.ɵɵelementStart(19, "mat-icon");
    i0.ɵɵtext(20, "delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r312 = ctx.$implicit;
    const ctx_r304 = i0.ɵɵnextContext();
    i0.ɵɵproperty("defaultElevation", 0);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", d_r312.Status);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(8, _c0, ctx_r304.service.mainPath + "/template/" + d_r312._id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", d_r312.Name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 5, d_r312.createdAt, "dd/MM/yy"), "");
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
        this.toTemplateCopyId = "";
        this.currentFilter = "all";
        this.tags = [];
        this.service.templates.subscribe((templates) => {
            if (templates && templates.length > 0) {
                this.datas = templates;
            }
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                yield this.getAllProfils();
                this.tags = yield this.service.getAllTags();
            }), 500);
        });
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
    onChangeStatus(data, Status) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.service.updateProfil(Object.assign(Object.assign({}, data), { Status }));
            this.publishTemplate = this.datas.filter((d) => d.Status === true);
            this.draftTemplate = this.datas.filter((d) => d.Status === false);
            if (result) {
                yield this.getAllProfils();
            }
            else {
                console.log("errror......");
            }
        });
    }
    onDelete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (confirm("Voulez vous supprimer cette template ?")) {
                const result = yield this.service.deleteProfil(id);
                if (result) {
                    yield this.getAllProfils();
                }
            }
        });
    }
    getAllProfils() {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield this.service.getAllProfil();
            this.datas = profile;
            this.publishTemplate = this.datas.filter((d) => d.Status === true);
            this.draftTemplate = this.datas.filter((d) => d.Status === false);
            this.publishTemplateLength = this.publishTemplate.length;
            this.draftTemplateLength = this.draftTemplate.length;
        });
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
    copyTemplate(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = data, rest = __rest(data, ["_id"]);
            const copyName = data.Name + " - copie";
            const result = yield this.service.createProfil(Object.assign(Object.assign({}, rest), { Name: copyName }));
            this.toTemplateCopyId = `#${copyName}`;
            if (result) {
                yield this.getAllProfils();
            }
            else {
                console.log("errror......");
            }
        });
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
TemplateProfileListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TemplateProfileListComponent, selectors: [["onboarding-profile-list"]], viewQuery: function TemplateProfileListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatPaginator, true);
        i0.ɵɵviewQuery(MatSort, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, hostBindings: function TemplateProfileListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("scroll", function TemplateProfileListComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } }, decls: 35, vars: 15, consts: [[1, "main"], [1, "content-list"], [1, "list"], [1, "list-title"], [3, "click"], [2, "display", "flex", "align-items", "center"], [2, "display", "flex", "flex-direction", "column", "margin-left", "5px"], [2, "margin-bottom", "-3px", 3, "click"], [2, "margin-top", "-3px", 3, "click"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "click"], [1, "live-template", 3, "scroll"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", "id", 4, "ngFor", "ngForOf"], [1, "draft-template"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation", "id"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelChange"], [1, "box-content", 3, "routerLink"], [1, "template-title"], [1, "template-date"], [1, "template-footer"], [1, "action-button", 2, "background-color", "transparent", 3, "click"], [1, "action-button", 2, "background-color", "transparent", 3, "ngxScrollTo", "click"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation"], [1, "toogle-button", "draft"], [1, "draft", 3, "ngModel", "ngModelChange"]], template: function TemplateProfileListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "ul");
        i0.ɵɵelementStart(5, "li", 4);
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
        i0.ɵɵelementStart(11, "li", 5);
        i0.ɵɵelementStart(12, "span");
        i0.ɵɵtext(13, "Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "span", 6);
        i0.ɵɵelementStart(15, "mat-icon", 7);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_Template_mat_icon_click_15_listener() { return ctx.filterTemplate("asc", "date"); });
        i0.ɵɵtext(16, " keyboard_arrow_up");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-icon", 8);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_Template_mat_icon_click_17_listener() { return ctx.filterTemplate("desc", "date"); });
        i0.ɵɵtext(18, " keyboard_arrow_down");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "li", 5);
        i0.ɵɵelementStart(20, "span");
        i0.ɵɵtext(21, "Nom");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "span", 6);
        i0.ɵɵelementStart(23, "mat-icon", 7);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_Template_mat_icon_click_23_listener() { return ctx.filterTemplate("asc", "name"); });
        i0.ɵɵtext(24, " keyboard_arrow_up");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "mat-icon", 8);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_Template_mat_icon_click_25_listener() { return ctx.filterTemplate("desc", "name"); });
        i0.ɵɵtext(26, " keyboard_arrow_down");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "a", 9);
        i0.ɵɵlistener("click", function TemplateProfileListComponent_Template_a_click_27_listener() { return ctx.openDialog(); });
        i0.ɵɵtext(28, " Cr\u00E9er profil ");
        i0.ɵɵelementStart(29, "mat-icon");
        i0.ɵɵtext(30, "add");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "div", 10);
        i0.ɵɵlistener("scroll", function TemplateProfileListComponent_Template_div_scroll_31_listener($event) { return ctx.onScroll($event); });
        i0.ɵɵtemplate(32, TemplateProfileListComponent_section_32_Template, 21, 12, "section", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "div", 12);
        i0.ɵɵtemplate(34, TemplateProfileListComponent_div_34_Template, 21, 10, "div", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
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
    } }, directives: [i4.MatIcon, i5.MatAnchor, i6.NgForOf, i7.MaterialElevationDirective, i8.MatSlideToggle, i9.NgControlStatus, i9.NgModel, i10.NativeElementInjectorDirective, i2.RouterLink, i11.ScrollToDirective], pipes: [i6.DatePipe], styles: [".main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-title[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-date[_ngcontent-%COMP%]{font-family:Nexa;font-weight:250;font-size:14px;line-height:120%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:10px;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{margin-right:50px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .draft-template[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .live-template[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:266px;height:300px;position:relative;margin-right:50px;margin-bottom:50px;background:#fff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;text-align:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:no-repeat padding-box #fff;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-family:Nexa;font-style:normal;font-size:18px;line-height:18px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button.draft[_ngcontent-%COMP%]{color:#f3a124}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{background-color:#171f26}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]{background:#543cb6;border-radius:0 0 8px 8px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]   button.action-button[_ngcontent-%COMP%]{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}  .blink{-webkit-animation:2s ease-out blink;animation:2s ease-out blink;border-radius:10px!important;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}@-webkit-keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}100%{transform:scale(1);opacity:1}}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}100%{transform:scale(1);opacity:1}}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TemplateProfileListComponent, [{
        type: Component,
        args: [{
                selector: "onboarding-profile-list",
                templateUrl: "./template-profile-list.component.html",
                styleUrls: ["./template-profile-list.component.scss"],
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvdGVtcGxhdGUtcHJvZmlsZS1saXN0L3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvdGVtcGxhdGUtcHJvZmlsZS1saXN0L3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtRkFBbUYsQ0FBQztBQUVsSSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDM0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lDOEI3QyxtQ0FFSTtJQUFBLCtCQUEyQjtJQUFBLDRCQUFNO0lBQUEsb0JBQUk7SUFBQSxpQkFBTztJQUN4Qyw0Q0FFbUI7SUFGZSxxT0FBc0IsNlBBQ2xCLEtBQUssS0FEYTtJQUV4RCxpQkFBbUI7SUFDdkIsaUJBQU07SUFDTiwrQkFDSTtJQUFBLDZCQUEyQjtJQUFBLFlBQVU7SUFBQSxpQkFBSTtJQUN6Qyw2QkFBMEI7SUFBQSxZQUFrQzs7SUFBQSxpQkFBSTtJQUNwRSxpQkFBTTtJQUVOLGdDQUNJO0lBQUEsbUNBRUk7SUFEQSxzUEFBNkI7SUFDN0IsaUNBQVU7SUFBQSxxQkFBSTtJQUFBLGlCQUFXO0lBQzdCLGlCQUFTO0lBQ1QsbUNBRUk7SUFGaUUsa1BBQXlCO0lBRTFGLGlDQUFVO0lBQUEsNEJBQVc7SUFBQSxpQkFBVztJQUNwQyxpQkFBUztJQUNULG1DQUNJO0lBRGlF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LENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUM7U0FDbkU7YUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssTUFBTSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BOLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbk47YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxD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QUFDLE9BQU87O2tCQW1CakIsWUFBWTttQkFBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nQ3JlYXRlVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlL2RpYWxvZy1jcmVhdGUtdGVtcGxhdGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9yIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvclwiO1xyXG5pbXBvcnQgeyBNYXRTb3J0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NvcnRcIjtcclxuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3RhYmxlXCI7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL29uYm9hcmRpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJvbmJvYXJkaW5nLXByb2ZpbGUtbGlzdFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vdGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQuc2Nzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUHJvZmlsZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGRpc3BsYXllZENvbHVtbnMgPSBbXCJOYW1lXCIsIFwidmNvbnRhY3RzXCIsIFwiY3JlYXRlZEF0XCIsIFwidXBkYXRlZEF0XCIsIFwiYWN0aW9uXCJdO1xyXG4gIGRhdGFzOiBhbnkgPSBbXTtcclxuICBwdWJsaXNoVGVtcGxhdGU6IGFueSA9IFtdO1xyXG4gIGRyYWZ0VGVtcGxhdGU6IGFueSA9IFtdO1xyXG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4oW10pO1xyXG4gIGRlZmF1bHRFbGV2YXRpb24gPSAyO1xyXG4gIHJhaXNlZEVsZXZhdGlvbiA9IDg7XHJcbiAgdG9UZW1wbGF0ZUNvcHlJZCA9IFwiXCJcclxuICBjdXJyZW50RmlsdGVyID0gXCJhbGxcIlxyXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcclxuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XHJcbiAgcHVibGlzaFRlbXBsYXRlTGVuZ3RoOiBhbnk7XHJcbiAgZHJhZnRUZW1wbGF0ZUxlbmd0aDogYW55O1xyXG4gIHRhZ3MgPSBbXVxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlLnRlbXBsYXRlcy5zdWJzY3JpYmUoKHRlbXBsYXRlczogYW55KSA9PiB7XHJcbiAgICAgIGlmICh0ZW1wbGF0ZXMgJiYgdGVtcGxhdGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLmRhdGFzID0gdGVtcGxhdGVzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCkge1xyXG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IHRoaXMuZ2V0QWxsUHJvZmlscygpO1xyXG4gICAgICB0aGlzLnRhZ3MgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsVGFncygpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcsIFsnJGV2ZW50J10pXHJcbiAgb25TY3JvbGwoZXZlbnQpIHtcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIik7XHJcbiAgICBjb25zdCBuYXZMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGl2ZS10ZW1wbGF0ZSAuYm94LXRlbXBsYXRlXCIpO1xyXG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLVdXV1dXV1dXV1dXV1ctLS0tLS0tLS0tLS0tLS0tLS0nLCBuYXZMaSk7XHJcbiAgICBsZXQgY3VycmVudCA9IFwiXCI7XHJcbiAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlY3Rpb25Ub3AgPSBzZWN0aW9uLm9mZnNldFRvcDtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5zY3JvbGxUb3AgPiBzZWN0aW9uVG9wKSB7XHJcbiAgICAgICAgY3VycmVudCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKFwiaWRcIilcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBuYXZMaS5mb3JFYWNoKChsaSkgPT4ge1xyXG5cclxuXHJcbiAgICAgIGNvbnN0IGlkID0gbGkuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYmxpbmtcIik7XHJcbiAgICAgIGlmIChpZC5zdWJzdHJpbmcoMCwgaWQubGVuZ3RoIC0gMSkgPT09IGN1cnJlbnQpIHtcclxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYmxpbmtcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnYmxpbmsnKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQWRkUHJvZmlsKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib25ib2FyZGluZy90ZW1wbGF0ZS8wXCJdKTtcclxuICB9XHJcblxyXG4gIG9uRWRpdFByb2ZpbChpZCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib25ib2FyZGluZy90ZW1wbGF0ZS9cIiwgaWRdKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uQ2hhbmdlU3RhdHVzKGRhdGEsIFN0YXR1cykge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZVByb2ZpbCh7IC4uLmRhdGEsIFN0YXR1cyB9KTtcclxuICAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSB0cnVlKTtcclxuICAgIHRoaXMuZHJhZnRUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gZmFsc2UpO1xyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBhd2FpdCB0aGlzLmdldEFsbFByb2ZpbHMoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJyb3IuLi4uLi5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkRlbGV0ZShpZCkge1xyXG4gICAgaWYgKGNvbmZpcm0oXCJWb3VsZXogdm91cyBzdXBwcmltZXIgY2V0dGUgdGVtcGxhdGUgP1wiKSkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZGVsZXRlUHJvZmlsKGlkKTtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0QWxsUHJvZmlscygpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEFsbFByb2ZpbHMoKSB7XHJcbiAgICBjb25zdCBwcm9maWxlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xyXG4gICAgdGhpcy5kYXRhcyA9IHByb2ZpbGU7XHJcbiAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gdHJ1ZSk7XHJcbiAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IGZhbHNlKTtcclxuXHJcbiAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZUxlbmd0aCA9IHRoaXMucHVibGlzaFRlbXBsYXRlLmxlbmd0aFxyXG4gICAgdGhpcy5kcmFmdFRlbXBsYXRlTGVuZ3RoID0gdGhpcy5kcmFmdFRlbXBsYXRlLmxlbmd0aFxyXG4gIH1cclxuXHJcbiAgZmlsdGVyVGVtcGxhdGUodmFsdWUsIG5hbWUpIHtcclxuICAgIHRoaXMuY3VycmVudEZpbHRlciA9IG5hbWU7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50RmlsdGVyID09PSAnYWxsJykge1xyXG4gICAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gdHJ1ZSk7XHJcbiAgICAgIHRoaXMuZHJhZnRUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRGaWx0ZXIgPT09ICdwdWJsaXNoJykge1xyXG4gICAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gdHJ1ZSk7XHJcbiAgICAgIHRoaXMuZHJhZnRUZW1wbGF0ZSA9IFtdO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRGaWx0ZXIgPT09ICdkcmFmdCcpIHtcclxuICAgICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSBbXTtcclxuICAgICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudEZpbHRlciA9PT0gJ2RhdGUnKSB7XHJcbiAgICAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSB0cnVlKTtcclxuICAgICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSBmYWxzZSk7XHJcbiAgICAgIHRoaXMucHVibGlzaFRlbXBsYXRlLnNvcnQoKGEsIGIpID0+IHZhbHVlID09PSAnZGVzYycgPyAobmV3IERhdGUoYi5jcmVhdGVkQXQpLmdldFRpbWUoKSA+IG5ldyBEYXRlKGEuY3JlYXRlZEF0KS5nZXRUaW1lKCkgPyAxIDogLTEpIDogKG5ldyBEYXRlKGIuY3JlYXRlZEF0KS5nZXRUaW1lKCkgPiBuZXcgRGF0ZShhLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID8gLTEgOiAxKSk7XHJcbiAgICAgIHRoaXMuZHJhZnRUZW1wbGF0ZS5zb3J0KChhLCBiKSA9PiB2YWx1ZSA9PT0gJ2Rlc2MnID8gKG5ldyBEYXRlKGIuY3JlYXRlZEF0KS5nZXRUaW1lKCkgPiBuZXcgRGF0ZShhLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID8gMSA6IC0xKSA6IChuZXcgRGF0ZShiLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID4gbmV3IERhdGUoYS5jcmVhdGVkQXQpLmdldFRpbWUoKSA/IC0xIDogMSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IHRydWUpO1xyXG4gICAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IGZhbHNlKTtcclxuICAgICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUuc29ydCgoYSwgYikgPT4gdmFsdWUgPT09ICdkZXNjJyA/IChiLk5hbWUudG9Mb3dlckNhc2UoKSA+IGEuTmFtZS50b0xvd2VyQ2FzZSgpID8gMSA6IC0xKSA6IChiLk5hbWUudG9Mb3dlckNhc2UoKSA+IGEuTmFtZS50b0xvd2VyQ2FzZSgpID8gLTEgOiAxKSk7XHJcbiAgICAgIHRoaXMuZHJhZnRUZW1wbGF0ZS5zb3J0KChhLCBiKSA9PiB2YWx1ZSA9PT0gJ2Rlc2MnID8gKGIuTmFtZS50b0xvd2VyQ2FzZSgpID4gYS5OYW1lLnRvTG93ZXJDYXNlKCkgPyAxIDogLTEpIDogKGIuTmFtZS50b0xvd2VyQ2FzZSgpID4gYS5OYW1lLnRvTG93ZXJDYXNlKCkgPyAtMSA6IDEpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGNvcHlUZW1wbGF0ZShkYXRhKSB7XHJcbiAgICBjb25zdCB7IF9pZCwgLi4ucmVzdCB9ID0gZGF0YVxyXG4gICAgY29uc3QgY29weU5hbWUgPSBkYXRhLk5hbWUgKyBcIiAtIGNvcGllXCJcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGVQcm9maWwoeyAuLi5yZXN0LCBOYW1lOiBjb3B5TmFtZSB9KTtcclxuICAgIHRoaXMudG9UZW1wbGF0ZUNvcHlJZCA9IGAjJHtjb3B5TmFtZX1gXHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuZ2V0QWxsUHJvZmlscygpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycnJvci4uLi4uLlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5EaWFsb2coKSB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0NyZWF0ZVRlbXBsYXRlQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChjdXJyZW50OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UuY3VycmVudFRlbXBsYXRlLm5leHQoY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuc2VydmljZS5tYWluUGF0aCArICcvdGVtcGxhdGUvMCddKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1haW5cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWxpc3RcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtdGl0bGUgXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIFtjbGFzc109XCJjdXJyZW50RmlsdGVyPT09J2FsbCcgPyAnYWN0aXZlJyA6JydcIiAoY2xpY2spPVwiZmlsdGVyVGVtcGxhdGUoJycsJ2FsbCcpXCI+IFRvdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHt7ZGF0YXMubGVuZ3RofX0pIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIFtjbGFzc109XCJjdXJyZW50RmlsdGVyPT09J3B1Ymxpc2gnID8gJ2FjdGl2ZScgOicnXCIgKGNsaWNrKT1cImZpbHRlclRlbXBsYXRlKCcnLCdwdWJsaXNoJylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHVibGnDqXMgKHt7cHVibGlzaFRlbXBsYXRlTGVuZ3RofX0pIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIFtjbGFzc109XCJjdXJyZW50RmlsdGVyPT09J2RyYWZ0JyA/ICdhY3RpdmUnIDonJ1wiIChjbGljayk9XCJmaWx0ZXJUZW1wbGF0ZSgnJywnZHJhZnQnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcm91aWxsb25zICh7e2RyYWZ0VGVtcGxhdGVMZW5ndGh9fSkgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7XCIgW2NsYXNzXT1cImN1cnJlbnRGaWx0ZXI9PT0nZGF0ZScgPyAnYWN0aXZlJyA6JydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGF0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47bWFyZ2luLWxlZnQ6IDVweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IC0zcHg7XCIgKGNsaWNrKT1cImZpbHRlclRlbXBsYXRlKCdhc2MnLCdkYXRlJylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZF9hcnJvd191cDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gc3R5bGU9XCJtYXJnaW4tdG9wOiAtM3B4O1wiIChjbGljayk9XCJmaWx0ZXJUZW1wbGF0ZSgnZGVzYycsJ2RhdGUnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkX2Fycm93X2Rvd248L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7XCIgW2NsYXNzXT1cImN1cnJlbnRGaWx0ZXI9PT0nbmFtZScgPyAnYWN0aXZlJyA6JydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tm9tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjttYXJnaW4tbGVmdDogNXB4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogLTNweDtcIiAoY2xpY2spPVwiZmlsdGVyVGVtcGxhdGUoJ2FzYycsJ25hbWUnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkX2Fycm93X3VwPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBzdHlsZT1cIm1hcmdpbi10b3A6IC0zcHg7XCIgKGNsaWNrKT1cImZpbHRlclRlbXBsYXRlKCdkZXNjJywnbmFtZScpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRfYXJyb3dfZG93bjwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImFkZC1wcm9maWxcIiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3LDqWVyIHByb2ZpbCA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXZlLXRlbXBsYXRlXCIgKHNjcm9sbCk9XCJvblNjcm9sbCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBhcHBNYXRlcmlhbEVsZXZhdGlvbiBbZGVmYXVsdEVsZXZhdGlvbl09XCIwXCIgcmFpc2VkRWxldmF0aW9uPVwiMVwiIGNsYXNzPVwiYm94LXRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZCBvZiBwdWJsaXNoVGVtcGxhdGVcIiBbaWRdPVwiZC5OYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2dsZS1idXR0b25cIj48c3Bhbj5MaXZlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBjb2xvcj1cIiM2RkU4RDdcIiBbKG5nTW9kZWwpXT1cImQuU3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlU3RhdHVzKGQsZmFsc2UpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWNvbnRlbnRcIiBbcm91dGVyTGlua109XCJbdGhpcy5zZXJ2aWNlLm1haW5QYXRoKycvdGVtcGxhdGUvJytkLl9pZF1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZW1wbGF0ZS10aXRsZVwiPiB7e2QuTmFtZX19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRlbXBsYXRlLWRhdGVcIj4ge3tkLmNyZWF0ZWRBdCB8IGRhdGUgOidkZC9NTS95eSd9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBsYXRlLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkVkaXRQcm9maWwoZC5faWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XCIgKGNsaWNrKT1cImNvcHlUZW1wbGF0ZShkKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmd4U2Nyb2xsVG9dPVwidG9UZW1wbGF0ZUNvcHlJZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmZpbHRlcl9ub25lPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcIiAoY2xpY2spPVwib25EZWxldGUoZC5faWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJhZnQtdGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgYXBwTWF0ZXJpYWxFbGV2YXRpb24gW2RlZmF1bHRFbGV2YXRpb25dPVwiMFwiIHJhaXNlZEVsZXZhdGlvbj1cIjFcIiBjbGFzcz1cImJveC10ZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGQgb2YgZHJhZnRUZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29nbGUtYnV0dG9uIGRyYWZ0XCI+PHNwYW4+QnJvdWlsbG9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBjbGFzcz1cImRyYWZ0XCIgWyhuZ01vZGVsKV09XCJkLlN0YXR1c1wiIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlU3RhdHVzKGQsdHJ1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtY29udGVudFwiIFtyb3V0ZXJMaW5rXT1cIlt0aGlzLnNlcnZpY2UubWFpblBhdGgrJy90ZW1wbGF0ZS8nK2QuX2lkXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRlbXBsYXRlLXRpdGxlXCI+IHt7ZC5OYW1lfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGVtcGxhdGUtZGF0ZVwiPiB7e2QuY3JlYXRlZEF0IHwgZGF0ZSA6J2RkL01NL3l5J319PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcGxhdGUtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRWRpdFByb2ZpbChkLl9pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcIiAoY2xpY2spPVwiY29weVRlbXBsYXRlKGQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZmlsdGVyX25vbmU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiIChjbGljayk9XCJvbkRlbGV0ZShkLl9pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+Il19