import { __awaiter, __rest } from "tslib";
import { Component, ViewChild } from "@angular/core";
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
const _c0 = function (a0) { return [a0]; };
function TemplateProfileListComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r279 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Live");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-slide-toggle", 15);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_32_Template_mat_slide_toggle_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r279); const d_r277 = ctx.$implicit; return d_r277.Status = $event; })("ngModelChange", function TemplateProfileListComponent_div_32_Template_mat_slide_toggle_ngModelChange_4_listener() { i0.ɵɵrestoreView(_r279); const d_r277 = ctx.$implicit; const ctx_r280 = i0.ɵɵnextContext(); return ctx_r280.onChangeStatus(d_r277, false); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 16);
    i0.ɵɵelementStart(6, "p", 17);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 18);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 19);
    i0.ɵɵelementStart(12, "button", 20);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_32_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r279); const d_r277 = ctx.$implicit; const ctx_r281 = i0.ɵɵnextContext(); return ctx_r281.onEditProfil(d_r277._id); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 20);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_32_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r279); const d_r277 = ctx.$implicit; const ctx_r282 = i0.ɵɵnextContext(); return ctx_r282.copyTemplate(d_r277); });
    i0.ɵɵelementStart(16, "mat-icon");
    i0.ɵɵtext(17, "content_copy");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 20);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_32_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r279); const d_r277 = ctx.$implicit; const ctx_r283 = i0.ɵɵnextContext(); return ctx_r283.onDelete(d_r277._id); });
    i0.ɵɵelementStart(19, "mat-icon");
    i0.ɵɵtext(20, "delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r277 = ctx.$implicit;
    const ctx_r275 = i0.ɵɵnextContext();
    i0.ɵɵproperty("defaultElevation", 0);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", d_r277.Status);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(8, _c0, ctx_r275.service.mainPath + "/template/" + d_r277._id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", d_r277.Name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 5, d_r277.createdAt, "dd/MM/yy"), "");
} }
function TemplateProfileListComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r286 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "div", 21);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Brouillon");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-slide-toggle", 22);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_34_Template_mat_slide_toggle_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r286); const d_r284 = ctx.$implicit; return d_r284.Status = $event; })("ngModelChange", function TemplateProfileListComponent_div_34_Template_mat_slide_toggle_ngModelChange_4_listener() { i0.ɵɵrestoreView(_r286); const d_r284 = ctx.$implicit; const ctx_r287 = i0.ɵɵnextContext(); return ctx_r287.onChangeStatus(d_r284, true); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 16);
    i0.ɵɵelementStart(6, "p", 17);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 18);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 19);
    i0.ɵɵelementStart(12, "button", 20);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_34_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r286); const d_r284 = ctx.$implicit; const ctx_r288 = i0.ɵɵnextContext(); return ctx_r288.onEditProfil(d_r284._id); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 20);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_34_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r286); const d_r284 = ctx.$implicit; const ctx_r289 = i0.ɵɵnextContext(); return ctx_r289.copyTemplate(d_r284); });
    i0.ɵɵelementStart(16, "mat-icon");
    i0.ɵɵtext(17, "content_copy");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 20);
    i0.ɵɵlistener("click", function TemplateProfileListComponent_div_34_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r286); const d_r284 = ctx.$implicit; const ctx_r290 = i0.ɵɵnextContext(); return ctx_r290.onDelete(d_r284._id); });
    i0.ɵɵelementStart(19, "mat-icon");
    i0.ɵɵtext(20, "delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r284 = ctx.$implicit;
    const ctx_r276 = i0.ɵɵnextContext();
    i0.ɵɵproperty("defaultElevation", 0);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", d_r284.Status);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(8, _c0, ctx_r276.service.mainPath + "/template/" + d_r284._id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", d_r284.Name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 5, d_r284.createdAt, "dd/MM/yy"), "");
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
            const result = yield this.service.createProfil(Object.assign(Object.assign({}, rest), { Name: data.Name + " - copie" }));
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
    } }, decls: 35, vars: 15, consts: [[1, "main"], [1, "content-list"], [1, "list"], [1, "list-title"], [3, "click"], [2, "display", "flex", "align-items", "center"], [2, "display", "flex", "flex-direction", "column", "margin-left", "5px"], [2, "margin-bottom", "-3px", 3, "click"], [2, "margin-top", "-3px", 3, "click"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "click"], [1, "live-template"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], [1, "draft-template"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelChange"], [1, "box-content", 3, "routerLink"], [1, "template-title"], [1, "template-date"], [1, "template-footer"], ["mat-mini-fab", "", 2, "background-color", "transparent", 3, "click"], [1, "toogle-button", "draft"], [1, "draft", 3, "ngModel", "ngModelChange"]], template: function TemplateProfileListComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtemplate(32, TemplateProfileListComponent_div_32_Template, 21, 10, "div", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "div", 12);
        i0.ɵɵtemplate(34, TemplateProfileListComponent_div_34_Template, 21, 10, "div", 11);
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
    } }, directives: [i4.MatIcon, i5.MatAnchor, i6.NgForOf, i7.MaterialElevationDirective, i8.MatSlideToggle, i9.NgControlStatus, i9.NgModel, i10.NativeElementInjectorDirective, i2.RouterLink, i5.MatButton], pipes: [i6.DatePipe], styles: [".main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-title[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-date[_ngcontent-%COMP%]{font-family:Nexa;font-weight:250;font-size:14px;line-height:120%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:10px;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{margin-right:50px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .draft-template[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .live-template[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:266px;height:300px;position:relative;margin-right:50px;margin-bottom:50px;background:#fff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;text-align:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:no-repeat padding-box #fff;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-family:Nexa;font-style:normal;font-weight:700;font-size:18px;line-height:18px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button.draft[_ngcontent-%COMP%]{color:#f3a124}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{background-color:#171f26}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]{background:#543cb6;border-radius:0 0 8px 8px;width:100%;position:absolute;bottom:0;text-align:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:auto 5%;box-shadow:none}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}"] });
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvdGVtcGxhdGUtcHJvZmlsZS1saXN0L3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvdGVtcGxhdGUtcHJvZmlsZS1saXN0L3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1GQUFtRixDQUFDO0FBRWxJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQzhCN0MsK0JBRUk7SUFBQSwrQkFBMkI7SUFBQSw0QkFBTTtJQUFBLG9CQUFJO0lBQUEsaUJBQU87SUFDeEMsNENBRW1CO0lBRmUsaU9BQXNCLHlQQUNsQixLQUFLLEtBRGE7SUFFeEQsaUJBQW1CO0lBQ3ZCLGlCQUFNO0lBQ04sK0JBQ0k7SUFBQSw2QkFBMkI7SUFBQSxZQUFVO0lBQUEsaUJBQUk7SUFDekMsNkJBQTBCO0lBQUEsWUFBa0M7O0lBQUEsaUJBQUk7SUFDcEUsaUJBQU07SUFFTixnQ0FDSTtJQUFBLG1DQUNJO0lBRHdELGtQQUE2QjtJQUNyRixpQ0FBVTtJQUFBLHFCQUFJO0lBQUEsaUJBQVc7SUFDN0IsaUJBQVM7SUFDVCxtQ0FDSTtJQUR3RCw4T0FBeUI7SUFDakYsaUNBQVU7SUFBQSw2QkFBWTtJQUFBLGlCQUFXO0lBQ3JDLGlCQUFTO0lBQ1QsbUNBQ0k7SUFEd0QsOE9BQXlCO0lB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QUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25OO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFD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LG9DQUNJO1FBRG1DLDRHQUFTLG1CQUFlLEtBQUssRUFBQyxNQUFNLENBQUMsSUFBQztRQUN6RSxtQ0FBaUI7UUFBQSxpQkFBVztRQUNoQyxvQ0FDSTtRQURnQyw0R0FBUyxtQkFBZSxNQUFNLEVBQUMsTUFBTSxDQUFDLElBQUM7UUFDdkUscUNBQW1CO1FBQUEsaUJBQVc7UUFDdEMsaUJBQU87UUFDWCxpQkFBSztRQUNULGlCQUFLO1FBQ0wsNkJBQ0k7UUFEZ0MscUdBQVMsZ0JBQVksSUFBQztRQUN0RCxvQ0FBYTtRQUFBLGlDQUFVO1FBQUEsb0JBQUc7UUFBQSxpQkFBVztRQUN6QyxpQkFBSTtRQUNSLGlCQUFNO1FBQ04sZ0NBQ0k7UUFBQSxrRkFFSTtRQXVCUixpQkFBTTtRQUNOLGdDQUNJO1FBQUEsa0ZBRUk7UUFzQlIsaUJBQU07UUFDVixpQkFBTTtRQUNWLGlCQUFNO1FBQ1YsaUJBQU07O1FBcEZrQixlQUE4QztRQUE5QywwREFBOEM7UUFBcUMsZUFDaEU7UUFEZ0Usd0RBQ2hFO1FBQ25CLGVBQWtEO1FBQWxELDhEQUFrRDtRQUNsRCxlQUFvQztRQUFwQyx5RUFBb0M7UUFDcEMsZUFBZ0Q7UUFBaEQsNERBQWdEO1FBQ2hELGVBQXFDO1FBQXJDLHFFQUFxQztRQUNNLGVBQStDO1FBQS9DLDJEQUErQztRQVMvQyxlQUErQztRQUEvQywyREFBK0M7UUFnQjlGLGdCQUFpQztRQUFqQyw2Q0FBaUM7UUEyQmpDLGVBQStCO1FBQS9CLDJDQUErQjs7a0REakR0Qyw0QkFBNEI7Y0FMeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO2FBQ3REOztrQkFVRSxTQUFTO21CQUFDLFlBQVk7O2tCQUN0QixTQUFTO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IERpYWxvZ0NyZWF0ZVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVtcGxhdGUvZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XHJcbmltcG9ydCB7IE1hdFBhZ2luYXRvciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3JcIjtcclxuaW1wb3J0IHsgTWF0U29ydCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zb3J0XCI7XHJcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90YWJsZVwiO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwib25ib2FyZGluZy1wcm9maWxlLWxpc3RcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3RlbXBsYXRlLXByb2ZpbGUtbGlzdC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi90ZW1wbGF0ZS1wcm9maWxlLWxpc3QuY29tcG9uZW50LnNjc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVByb2ZpbGVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBkaXNwbGF5ZWRDb2x1bW5zID0gW1wiTmFtZVwiLCBcInZjb250YWN0c1wiLCBcImNyZWF0ZWRBdFwiLCBcInVwZGF0ZWRBdFwiLCBcImFjdGlvblwiXTtcclxuICBkYXRhczogYW55ID0gW107XHJcbiAgcHVibGlzaFRlbXBsYXRlOiBhbnkgPSBbXTtcclxuICBkcmFmdFRlbXBsYXRlOiBhbnkgPSBbXTtcclxuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KFtdKTtcclxuICBkZWZhdWx0RWxldmF0aW9uID0gMjtcclxuICByYWlzZWRFbGV2YXRpb24gPSA4O1xyXG4gIGN1cnJlbnRGaWx0ZXIgPSBcImFsbFwiXHJcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xyXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcclxuICBwdWJsaXNoVGVtcGxhdGVMZW5ndGg6IGFueTtcclxuICBkcmFmdFRlbXBsYXRlTGVuZ3RoOiBhbnk7XHJcbiAgdGFncyA9IFtdXHJcbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UudGVtcGxhdGVzLnN1YnNjcmliZSgodGVtcGxhdGVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHRlbXBsYXRlcyAmJiB0ZW1wbGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuZGF0YXMgPSB0ZW1wbGF0ZXM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgdGhpcy5nZXRBbGxQcm9maWxzKCk7XHJcbiAgICAgIHRoaXMudGFncyA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxUYWdzKCk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxuXHJcbiAgb25BZGRQcm9maWwoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJvbmJvYXJkaW5nL3RlbXBsYXRlLzBcIl0pO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0UHJvZmlsKGlkKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJvbmJvYXJkaW5nL3RlbXBsYXRlL1wiLCBpZF0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25DaGFuZ2VTdGF0dXMoZGF0YSwgU3RhdHVzKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlUHJvZmlsKHsgLi4uZGF0YSwgU3RhdHVzIH0pO1xyXG4gICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IHRydWUpO1xyXG4gICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSBmYWxzZSk7XHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuZ2V0QWxsUHJvZmlscygpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycnJvci4uLi4uLlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIG9uRGVsZXRlKGlkKSB7XHJcbiAgICBpZiAoY29uZmlybShcIlZvdWxleiB2b3VzIHN1cHByaW1lciBjZXR0ZSB0ZW1wbGF0ZSA/XCIpKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2VydmljZS5kZWxldGVQcm9maWwoaWQpO1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRBbGxQcm9maWxzKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0QWxsUHJvZmlscygpIHtcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XHJcbiAgICB0aGlzLmRhdGFzID0gcHJvZmlsZTtcclxuICAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSB0cnVlKTtcclxuICAgIHRoaXMuZHJhZnRUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gZmFsc2UpO1xyXG5cclxuICAgIHRoaXMucHVibGlzaFRlbXBsYXRlTGVuZ3RoID0gdGhpcy5wdWJsaXNoVGVtcGxhdGUubGVuZ3RoXHJcbiAgICB0aGlzLmRyYWZ0VGVtcGxhdGVMZW5ndGggPSB0aGlzLmRyYWZ0VGVtcGxhdGUubGVuZ3RoXHJcbiAgfVxyXG5cclxuICBmaWx0ZXJUZW1wbGF0ZSh2YWx1ZSwgbmFtZSkge1xyXG4gICAgdGhpcy5jdXJyZW50RmlsdGVyID0gbmFtZTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRGaWx0ZXIgPT09ICdhbGwnKSB7XHJcbiAgICAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSB0cnVlKTtcclxuICAgICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudEZpbHRlciA9PT0gJ3B1Ymxpc2gnKSB7XHJcbiAgICAgIHRoaXMucHVibGlzaFRlbXBsYXRlID0gdGhpcy5kYXRhcy5maWx0ZXIoKGQpID0+IGQuU3RhdHVzID09PSB0cnVlKTtcclxuICAgICAgdGhpcy5kcmFmdFRlbXBsYXRlID0gW107XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudEZpbHRlciA9PT0gJ2RyYWZ0Jykge1xyXG4gICAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IFtdO1xyXG4gICAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IGZhbHNlKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50RmlsdGVyID09PSAnZGF0ZScpIHtcclxuICAgICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUgPSB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IHRydWUpO1xyXG4gICAgICB0aGlzLmRyYWZ0VGVtcGxhdGUgPSB0aGlzLmRhdGFzLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMgPT09IGZhbHNlKTtcclxuICAgICAgdGhpcy5wdWJsaXNoVGVtcGxhdGUuc29ydCgoYSwgYikgPT4gdmFsdWUgPT09ICdkZXNjJyA/IChuZXcgRGF0ZShiLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID4gbmV3IERhdGUoYS5jcmVhdGVkQXQpLmdldFRpbWUoKSA/IDEgOiAtMSkgOiAobmV3IERhdGUoYi5jcmVhdGVkQXQpLmdldFRpbWUoKSA+IG5ldyBEYXRlKGEuY3JlYXRlZEF0KS5nZXRUaW1lKCkgPyAtMSA6IDEpKTtcclxuICAgICAgdGhpcy5kcmFmdFRlbXBsYXRlLnNvcnQoKGEsIGIpID0+IHZhbHVlID09PSAnZGVzYycgPyAobmV3IERhdGUoYi5jcmVhdGVkQXQpLmdldFRpbWUoKSA+IG5ldyBEYXRlKGEuY3JlYXRlZEF0KS5nZXRUaW1lKCkgPyAxIDogLTEpIDogKG5ldyBEYXRlKGIuY3JlYXRlZEF0KS5nZXRUaW1lKCkgPiBuZXcgRGF0ZShhLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID8gLTEgOiAxKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gdHJ1ZSk7XHJcbiAgICAgIHRoaXMuZHJhZnRUZW1wbGF0ZSA9IHRoaXMuZGF0YXMuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyA9PT0gZmFsc2UpO1xyXG4gICAgICB0aGlzLnB1Ymxpc2hUZW1wbGF0ZS5zb3J0KChhLCBiKSA9PiB2YWx1ZSA9PT0gJ2Rlc2MnID8gKGIuTmFtZS50b0xvd2VyQ2FzZSgpID4gYS5OYW1lLnRvTG93ZXJDYXNlKCkgPyAxIDogLTEpIDogKGIuTmFtZS50b0xvd2VyQ2FzZSgpID4gYS5OYW1lLnRvTG93ZXJDYXNlKCkgPyAtMSA6IDEpKTtcclxuICAgICAgdGhpcy5kcmFmdFRlbXBsYXRlLnNvcnQoKGEsIGIpID0+IHZhbHVlID09PSAnZGVzYycgPyAoYi5OYW1lLnRvTG93ZXJDYXNlKCkgPiBhLk5hbWUudG9Mb3dlckNhc2UoKSA/IDEgOiAtMSkgOiAoYi5OYW1lLnRvTG93ZXJDYXNlKCkgPiBhLk5hbWUudG9Mb3dlckNhc2UoKSA/IC0xIDogMSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgY29weVRlbXBsYXRlKGRhdGEpIHtcclxuICAgIGNvbnN0IHsgX2lkLCAuLi5yZXN0IH0gPSBkYXRhXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlcnZpY2UuY3JlYXRlUHJvZmlsKHsgLi4ucmVzdCwgTmFtZTogZGF0YS5OYW1lICsgXCIgLSBjb3BpZVwiIH0pO1xyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBhd2FpdCB0aGlzLmdldEFsbFByb2ZpbHMoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJyb3IuLi4uLi5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuRGlhbG9nKCkge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dDcmVhdGVUZW1wbGF0ZUNvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGFnczogdGhpcy50YWdzLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoY3VycmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChjdXJyZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZS5uZXh0KGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnNlcnZpY2UubWFpblBhdGggKyAnL3RlbXBsYXRlLzAnXSlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtYWluXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1saXN0XCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LXRpdGxlIFwiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBbY2xhc3NdPVwiY3VycmVudEZpbHRlcj09PSdhbGwnID8gJ2FjdGl2ZScgOicnXCIgKGNsaWNrKT1cImZpbHRlclRlbXBsYXRlKCcnLCdhbGwnKVwiPiBUb3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh7e2RhdGFzLmxlbmd0aH19KSA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBbY2xhc3NdPVwiY3VycmVudEZpbHRlcj09PSdwdWJsaXNoJyA/ICdhY3RpdmUnIDonJ1wiIChjbGljayk9XCJmaWx0ZXJUZW1wbGF0ZSgnJywncHVibGlzaCcpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFB1Ymxpw6lzICh7e3B1Ymxpc2hUZW1wbGF0ZUxlbmd0aH19KSA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBbY2xhc3NdPVwiY3VycmVudEZpbHRlcj09PSdkcmFmdCcgPyAnYWN0aXZlJyA6JydcIiAoY2xpY2spPVwiZmlsdGVyVGVtcGxhdGUoJycsJ2RyYWZ0JylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJvdWlsbG9ucyAoe3tkcmFmdFRlbXBsYXRlTGVuZ3RofX0pIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPVwiZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyO1wiIFtjbGFzc109XCJjdXJyZW50RmlsdGVyPT09J2RhdGUnID8gJ2FjdGl2ZScgOicnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogY29sdW1uO21hcmdpbi1sZWZ0OiA1cHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAtM3B4O1wiIChjbGljayk9XCJmaWx0ZXJUZW1wbGF0ZSgnYXNjJywnZGF0ZScpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRfYXJyb3dfdXA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIHN0eWxlPVwibWFyZ2luLXRvcDogLTNweDtcIiAoY2xpY2spPVwiZmlsdGVyVGVtcGxhdGUoJ2Rlc2MnLCdkYXRlJylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZF9hcnJvd19kb3duPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPVwiZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyO1wiIFtjbGFzc109XCJjdXJyZW50RmlsdGVyPT09J25hbWUnID8gJ2FjdGl2ZScgOicnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk5vbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47bWFyZ2luLWxlZnQ6IDVweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IC0zcHg7XCIgKGNsaWNrKT1cImZpbHRlclRlbXBsYXRlKCdhc2MnLCduYW1lJylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZF9hcnJvd191cDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gc3R5bGU9XCJtYXJnaW4tdG9wOiAtM3B4O1wiIChjbGljayk9XCJmaWx0ZXJUZW1wbGF0ZSgnZGVzYycsJ25hbWUnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkX2Fycm93X2Rvd248L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgY2xhc3M9XCJhZGQtcHJvZmlsXCIgKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENyw6llciBwcm9maWwgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS10ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBhcHBNYXRlcmlhbEVsZXZhdGlvbiBbZGVmYXVsdEVsZXZhdGlvbl09XCIwXCIgcmFpc2VkRWxldmF0aW9uPVwiMVwiIGNsYXNzPVwiYm94LXRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZCBvZiBwdWJsaXNoVGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vZ2xlLWJ1dHRvblwiPjxzcGFuPkxpdmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGNvbG9yPVwiIzZGRThEN1wiIFsobmdNb2RlbCldPVwiZC5TdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2VTdGF0dXMoZCxmYWxzZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtY29udGVudFwiIFtyb3V0ZXJMaW5rXT1cIlt0aGlzLnNlcnZpY2UubWFpblBhdGgrJy90ZW1wbGF0ZS8nK2QuX2lkXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRlbXBsYXRlLXRpdGxlXCI+IHt7ZC5OYW1lfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGVtcGxhdGUtZGF0ZVwiPiB7e2QuY3JlYXRlZEF0IHwgZGF0ZSA6J2RkL01NL3l5J319PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcGxhdGUtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XCIgKGNsaWNrKT1cIm9uRWRpdFByb2ZpbChkLl9pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XCIgKGNsaWNrKT1cImNvcHlUZW1wbGF0ZShkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmNvbnRlbnRfY29weTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1wiIChjbGljayk9XCJvbkRlbGV0ZShkLl9pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcmFmdC10ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBhcHBNYXRlcmlhbEVsZXZhdGlvbiBbZGVmYXVsdEVsZXZhdGlvbl09XCIwXCIgcmFpc2VkRWxldmF0aW9uPVwiMVwiIGNsYXNzPVwiYm94LXRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZCBvZiBkcmFmdFRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2dsZS1idXR0b24gZHJhZnRcIj48c3Bhbj5Ccm91aWxsb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGNsYXNzPVwiZHJhZnRcIiBbKG5nTW9kZWwpXT1cImQuU3RhdHVzXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2VTdGF0dXMoZCx0cnVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1jb250ZW50XCIgW3JvdXRlckxpbmtdPVwiW3RoaXMuc2VydmljZS5tYWluUGF0aCsnL3RlbXBsYXRlLycrZC5faWRdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGVtcGxhdGUtdGl0bGVcIj4ge3tkLk5hbWV9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZW1wbGF0ZS1kYXRlXCI+IHt7ZC5jcmVhdGVkQXQgfCBkYXRlIDonZGQvTU0veXknfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wbGF0ZS1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcIiAoY2xpY2spPVwib25FZGl0UHJvZmlsKGQuX2lkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcIiAoY2xpY2spPVwiY29weVRlbXBsYXRlKGQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+Y29udGVudF9jb3B5PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XCIgKGNsaWNrKT1cIm9uRGVsZXRlKGQuX2lkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4iXX0=