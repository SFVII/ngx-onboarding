import * as json2csv from 'json2csv'; // convert json file to csv
import * as moment from 'moment';
import { CellsComponentList, CoreMatTable } from "ngx-table";
import { Component } from '@angular/core';
import { DialogCreateOnboardingComponent } from '../../components/onboarding/dialog-create-onboarding/dialog-create-onboarding.component';
import { saveAs } from 'file-saver';
import * as i0 from "@angular/core";
import * as i1 from "../../onboarding.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/select";
import * as i8 from "@angular/forms";
import * as i9 from "ngx-intl-tel-input";
import * as i10 from "@angular/material/core";
import * as i11 from "@angular/common";
import * as i12 from "@angular/material/input";
import * as i13 from "@angular/material/datepicker";
import * as i14 from "../../components/onboarding/onboarding-table/onboarding-table.component";
function OnboardingListComponent_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r5._id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r5.Name, "");
} }
function OnboardingListComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 23);
} }
function OnboardingListComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div");
    i0.ɵɵelement(2, "lib-onboarding-table", 24);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ticket-list", !ctx_r4._loading_table);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("columnDefinitions", ctx_r4.columnDefinitions)("data", ctx_r4.onboardingList)("lang", ctx_r4.lang)("inputSearch", ctx_r4.inputSearch);
} }
// save the file
export class OnboardingListComponent {
    constructor(service, router, route, dialog) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.inputSearch = '';
        this.currentLength = 0;
        this.currentFilter = 'all';
        this.onboarding = [];
        this.search = '';
        this.onboardingFormatList = [];
        this.templates = [];
        this.filterData = {
            TemplateId: "",
            start_date: null,
            end_date: null,
            searchText: '',
            Finished: ""
        };
        this.columnDefinitions = [
            {
                key: 'Name',
                subTitle: "date",
                value: 'Nom de famille',
                order: 1,
                class: 'u-7',
                addClass: 'lastNameClass',
                module: CellsComponentList.CustomCell,
                sort: true,
            },
            {
                key: 'Id',
                value: 'ID',
                order: 2,
                class: 'u-4',
                sort: true,
            }, {
                key: 'Title',
                value: 'Profil',
                order: 2,
                class: 'u-4',
                sort: true,
            }, {
                key: 'requestor',
                value: 'Demandeur',
                order: 4,
                class: 'u-5',
                sort: true,
            }, {
                key: 'TemplateName',
                value: 'Service',
                order: 5,
                class: 'u-5',
                sort: true,
            },
            {
                key: 'creationDate',
                value: 'Date de création',
                order: 6,
                class: 'u-6',
                // module: CellsComponentList.DateFormat,
                sort: true
            },
            {
                key: 'Status',
                value: "Statut",
                order: 7,
                addClass: 'CustomClass',
                class: 'u-4',
                sort: true,
                module: CellsComponentList.CustomCell,
            },
            {
                key: 'Action',
                value: '',
                order: 8,
                class: 'u-4',
                module: CellsComponentList.ButtonLink,
                display: "Détail",
                override: [`${this.checkOnboardingPath()}`, 'TemplateId', '_id'],
                align: 'center'
            }
        ];
        this._loading_table = true;
        this.HiddenIndex = 0;
        this.index = 0;
        this.lang = 'fr';
        this.service._templates.subscribe((data) => {
            if (data) {
                this.templates = data.filter((d) => d.Status);
            }
        });
    }
    cancelSearch() {
        this.inputSearch = '';
    }
    checkOnboardingPath() {
        return this.service.mainPath.includes('onboarding') ? `${this.service.mainPath}/requests/` : `/onboarding/requests/`;
    }
    async ngOnInit() {
        await this.service.getAllProfil();
        await this.service.getAllOnboarding();
        this.service.onboarding.subscribe((onboarding) => {
            setTimeout(() => {
                this._loading_table = false;
            }, 2000);
            if (onboarding) {
                this.onboarding = onboarding.map((row, index) => {
                    const user = row.categories.find((cat) => cat.name === "Utilisateur");
                    const formUser = user.forms.map((form) => ({ key: form.key, value: form.value })).reduce((a, v) => ({ ...a, [v.key]: v.value }), {});
                    row.Status = row.Finished ? "Terminée" : "A finaliser";
                    row.CustomClass = row.Finished ? "custom-status finished" : "custom-status to-finish";
                    row.lastNameClass = "last-name";
                    row.requestor = row?.vcontacts[0]?.Name || '';
                    row.Name = row.ContactName = formUser?.LastName + " " + formUser?.FirstName || "";
                    row.Title = formUser?.Title || "";
                    row.Email = formUser?.Email || '';
                    row.date = row.createdA;
                    // row.date = moment(row.createdAt).format('DD/MM/YY')
                    row.creationDate = row.createdA;
                    row.TemplateName = row?.vtemplates?.length > 0 ? row?.vtemplates[0].Name : '';
                    row.Id = index + 1;
                    // row.mainPath = this.service.mainPath.includes('onboarding') ? `${this.service.mainPath}/requests/` : `/onboarding/requests/`
                    return row;
                });
                this.dataFiltered = this.onboarding;
                this.onForamtList(this.onboarding);
            }
        });
    }
    onForamtList(datas) {
        this.onboardingFormatList = datas;
        this.onboardingList = new CoreMatTable(datas, {
            active: 'Id', direction: 'desc'
        }, { active: '', valueStart: null, valueEnd: null }, 15, true, true);
    }
    onFilterTemplate() {
        this.dataFiltered = this.filterData.searchText !== '' ? this.onboarding.filter((d) => d.Name.toLowerCase().search(this.filterData.searchText.toLocaleLowerCase()) > -1) : this.onboarding;
        if (this.filterData.TemplateId !== '') {
            this.dataFiltered = this.dataFiltered.filter((d) => d.TemplateId === this.filterData.TemplateId);
        }
        if (this.filterData.Finished !== '') {
            this.dataFiltered = this.dataFiltered.filter((d) => d.Finished === this.filterData.Finished);
        }
        if (this.filterData.start_date) {
            this.dataFiltered = this.dataFiltered.filter((data) => new Date(data.createdAt).getTime() >= new Date(this.filterData.start_date).getTime());
        }
        if (this.filterData.end_date) {
            this.dataFiltered = this.dataFiltered.filter((data) => new Date(data.createdAt).getTime() <= new Date(this.filterData.end_date).getTime());
        }
        this.onForamtList(this.dataFiltered);
    }
    triggerChange($event) {
        if ($event.index === 0) {
            this.currentLength = this.onboardingList.data.length;
        }
        else if ($event.index === 1) {
            this.currentLength = this.onboardingFinished.data.length;
        }
        else if ($event.index === 2) {
            this.currentLength = this.onboardingToFinish.data.length;
        }
        if ($event.index !== this.HiddenIndex) {
            this._loading_table = true;
            this.index = $event.index;
            this.router.navigate([], {
                relativeTo: this.route,
                queryParams: { page: null, tab: $event.index + 1 },
                queryParamsHandling: 'merge', // remove to replace all query params by provided
            });
            this.HiddenIndex = $event.index;
            setTimeout(() => {
                this._loading_table = false;
            }, 2000);
        }
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogCreateOnboardingComponent, {
            data: {}
        });
        dialogRef.afterClosed().subscribe((current) => {
            if (current) {
                this.service.currentOnboarding.next(current);
                this.router.navigate([this.service.mainPath + `/requests/${current.TemplateId}/0`]);
            }
        });
    }
    onExportToCSV() {
        try {
            let json2csvParser = new json2csv.Parser({ opts: {} });
            const dataToExport = this.dataFiltered.map((d) => ({
                Status: d.Status,
                Requestor: d.requestor,
                Name: d.Name,
                Title: d.Title,
                Email: d.Email,
                CreationDate: moment(d.createdAt).format('DD/MM/YY'),
                TemplateName: d.TemplateName
            }));
            let csvData = json2csvParser.parse(dataToExport);
            let file = new Blob(["\uFEFF" + csvData], {
                type: 'text/csv; charset=utf-18'
            });
            saveAs(file, "onboarding-request.csv");
        }
        catch (error) {
            console.log('error', error);
        }
    }
}
OnboardingListComponent.ɵfac = function OnboardingListComponent_Factory(t) { return new (t || OnboardingListComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.MatDialog)); };
OnboardingListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 51, vars: 17, consts: [[1, "main-all-ticket-list", "onboarding-list-container"], [1, "header-top"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-onboarding", 3, "click"], [1, "list-title"], [1, "filter-item"], ["appearance", "text"], [3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "placeholder", "Date minimum", 3, "matDatepicker", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["pickerMin", ""], ["matInput", "", "placeholder", "Date maximum", 3, "matDatepicker", "min", "ngModel", "ngModelChange"], ["pickerMax", ""], [1, "right-action"], ["appearance", "text", 1, "search-text"], ["matPrefix", "", 2, "margin-left", "5px"], ["matInput", "", "placeholder", "Recherche...", "type", "search", 3, "ngModel", "ngModelChange"], ["mat-flat-button", "", "appearance", "text", 1, "export-to-csv", 3, "click"], [1, "content-view-list-ticket"], ["class", "bt-spinner", 4, "ngIf"], [4, "ngIf"], [1, "bt-spinner"], [3, "columnDefinitions", "data", "lang", "inputSearch"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "a", 2);
        i0.ɵɵlistener("click", function OnboardingListComponent_Template_a_click_4_listener() { return ctx.openDialog(); });
        i0.ɵɵtext(5, " Nouvelle demande d\u2019int\u00E9gration ");
        i0.ɵɵelementStart(6, "mat-icon");
        i0.ɵɵtext(7, "add");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(8, "div", 3)(9, "ul")(10, "li", 4)(11, "mat-form-field", 5)(12, "mat-select", 6);
        i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.filterData.TemplateId = $event; })("ngModelChange", function OnboardingListComponent_Template_mat_select_ngModelChange_12_listener() { return ctx.onFilterTemplate(); });
        i0.ɵɵelementStart(13, "mat-option", 7);
        i0.ɵɵtext(14, " Tous");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(15, OnboardingListComponent_mat_option_15_Template, 2, 2, "mat-option", 8);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(16, "li", 4)(17, "mat-form-field", 5)(18, "mat-select", 6);
        i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_Template_mat_select_ngModelChange_18_listener($event) { return ctx.filterData.Finished = $event; })("ngModelChange", function OnboardingListComponent_Template_mat_select_ngModelChange_18_listener() { return ctx.onFilterTemplate(); });
        i0.ɵɵelementStart(19, "mat-option", 7);
        i0.ɵɵtext(20, " Tous");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "mat-option", 9);
        i0.ɵɵtext(22, " Termin\u00E9es");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "mat-option", 9);
        i0.ɵɵtext(24, "A finaliser");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(25, "li", 4)(26, "mat-form-field", 5)(27, "input", 10);
        i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_27_listener($event) { return ctx.filterData.start_date = $event; })("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_27_listener() { return ctx.onFilterTemplate(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(28, "mat-datepicker-toggle", 11)(29, "mat-datepicker", null, 12);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(31, "li", 4)(32, "mat-form-field", 5)(33, "input", 13);
        i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_33_listener() { return ctx.onFilterTemplate(); })("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_33_listener($event) { return ctx.filterData.end_date = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(34, "mat-datepicker-toggle", 11)(35, "mat-datepicker", null, 14);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(37, "ul", 15)(38, "li", 4)(39, "mat-form-field", 16)(40, "mat-icon", 17);
        i0.ɵɵtext(41, "search");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "input", 18);
        i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_42_listener($event) { return ctx.filterData.searchText = $event; })("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_42_listener() { return ctx.onFilterTemplate(); });
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(43, "li", 4)(44, "button", 19);
        i0.ɵɵlistener("click", function OnboardingListComponent_Template_button_click_44_listener() { return ctx.onExportToCSV(); });
        i0.ɵɵelementStart(45, "mat-icon");
        i0.ɵɵtext(46, "cloud_download");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(47, " (.CSV) ");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(48, "div", 20);
        i0.ɵɵtemplate(49, OnboardingListComponent_div_49_Template, 1, 0, "div", 21);
        i0.ɵɵtemplate(50, OnboardingListComponent_div_50_Template, 3, 6, "div", 22);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(30);
        const _r2 = i0.ɵɵreference(36);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" Vous avez actuellement ", ctx.onboarding.length, " Demandes ");
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngModel", ctx.filterData.TemplateId);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.templates);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.filterData.Finished);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("value", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", false);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("matDatepicker", _r1)("max", ctx.filterData.end_date)("ngModel", ctx.filterData.start_date);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r1);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("matDatepicker", _r2)("min", ctx.filterData.start_date)("ngModel", ctx.filterData.end_date);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r2);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngModel", ctx.filterData.searchText);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx._loading_table || !ctx.onboardingList);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.onboardingList);
    } }, directives: [i4.MatAnchor, i5.MatIcon, i6.MatFormField, i7.MatSelect, i8.NgControlStatus, i8.NgModel, i9.NativeElementInjectorDirective, i10.MatOption, i11.NgForOf, i12.MatInput, i13.MatDatepickerInput, i8.DefaultValueAccessor, i13.MatDatepickerToggle, i6.MatSuffix, i13.MatDatepicker, i6.MatPrefix, i4.MatButton, i11.NgIf, i14.OnboardingTableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:98%}md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font: 700 13px/20px nexa;letter-spacing:0px;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0px;grid-row-gap:0px;width:100%;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font: 18px/20px Nexa Text;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;font: 17px/20px Nexa Text Bold;letter-spacing:0px;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;font: 700 32px/30px Nexa Text Bold;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}  .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}  .mat-tab-header .mat-tab-label-active{background:transparent}  .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}  lib-onboarding-table{background-color:red!important}  lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container[_ngcontent-%COMP%]{position:relative}.onboarding-list-container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:15px}.onboarding-list-container[_ngcontent-%COMP%]   .title-table[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container[_ngcontent-%COMP%]   .add-onboarding[_ngcontent-%COMP%]{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:10px;cursor:pointer}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}  .list-title{padding-left:17px}  .filter-item{display:flex;align-items:center}  .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}  .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}  .right-action{display:flex;align-items:center;gap:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{ selector: 'lib-onboarding-list', template: "<div class=\"main-all-ticket-list onboarding-list-container\">\r\n    <div class=\"header-top\">\r\n        <h2>\r\n            Vous avez actuellement {{onboarding.length}}\r\n            Demandes\r\n        </h2>\r\n        <a role=\"button\" class=\"add-onboarding\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">\r\n            Nouvelle demande d\u2019int\u00E9gration <mat-icon>add</mat-icon>\r\n        </a>\r\n    </div>\r\n    <div class=\"list-title\">\r\n        <ul>\r\n            <li class=\"filter-item\">\r\n                <mat-form-field appearance=\"text\">\r\n                    <mat-select [(ngModel)]=\"filterData.TemplateId\" (ngModelChange)=\"onFilterTemplate()\">\r\n                        <mat-option value=\"\"> Tous</mat-option>\r\n                        <mat-option [value]=\"item._id\" *ngFor=\"let item of templates\"> {{item.Name}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </li>\r\n            <li class=\"filter-item\">\r\n                <mat-form-field appearance=\"text\">\r\n                    <mat-select [(ngModel)]=\"filterData.Finished\" (ngModelChange)=\"onFilterTemplate()\">\r\n                        <mat-option value=\"\"> Tous</mat-option>\r\n                        <mat-option [value]=\"true\"> Termin\u00E9es</mat-option>\r\n                        <mat-option [value]=\"false\">A finaliser</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </li>\r\n            <li class=\"filter-item\">\r\n                <mat-form-field appearance=\"text\">\r\n                    <input matInput placeholder=\"Date minimum\" [matDatepicker]=\"pickerMin\" [max]=\"filterData.end_date\"\r\n                        [(ngModel)]=\"filterData.start_date\" (ngModelChange)=\"onFilterTemplate()\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerMin\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickerMin></mat-datepicker>\r\n                </mat-form-field>\r\n            </li>\r\n            <li class=\"filter-item\">\r\n                <mat-form-field appearance=\"text\">\r\n                    <input matInput [matDatepicker]=\"pickerMax\" (ngModelChange)=\"onFilterTemplate()\"\r\n                        placeholder=\"Date maximum\" [min]=\"filterData.start_date\" [(ngModel)]=\"filterData.end_date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerMax\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickerMax></mat-datepicker>\r\n                </mat-form-field>\r\n            </li>\r\n\r\n\r\n        </ul>\r\n        <ul class=\"right-action\">\r\n            <li class=\"filter-item\">\r\n                <mat-form-field class=\"search-text\" appearance=\"text\">\r\n                    <mat-icon matPrefix style=\"margin-left: 5px;\">search</mat-icon>\r\n                    <input matInput placeholder=\"Recherche...\" type=\"search\" [(ngModel)]=\"filterData.searchText\"\r\n                        (ngModelChange)=\"onFilterTemplate()\">\r\n                </mat-form-field>\r\n            </li>\r\n            <li class=\"filter-item\">\r\n                <button mat-flat-button class=\"export-to-csv\" appearance=\"text\" (click)=\"onExportToCSV()\">\r\n                    <mat-icon>cloud_download</mat-icon> (.CSV)\r\n                </button>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"content-view-list-ticket\">\r\n        <div *ngIf=\"_loading_table || !onboardingList\" class=\"bt-spinner\"></div>\r\n        <div *ngIf=\"onboardingList\">\r\n            <div [class.ticket-list]=\"!_loading_table\">\r\n                <lib-onboarding-table [columnDefinitions]=\"columnDefinitions\" [data]=\"onboardingList\" [lang]=\"lang\"\r\n                    [inputSearch]=\"inputSearch\">\r\n                </lib-onboarding-table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>", styles: ["mat-card{display:block;width:98%}md-tooltip.tt-multiline ._md-content{height:auto}md-tooltip ._md-content{height:auto}table{width:100%}.element-detail .inline{display:table;width:90%}.element-detail .inline .block1{display:inline-table;float:left;width:50%;text-align:left}.element-detail .inline .block1 strong{font: 700 13px/20px nexa;letter-spacing:0px;color:#171f26}.element-detail .inline .block1 p,.element-detail .inline .block1 small{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list{display:block;grid-column-gap:0px;grid-row-gap:0px;width:100%;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list .component-title{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list .content-view-list-ticket{grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list .content-view-list-ticket table{width:100%}app-list-preview{width:100%}::ng-deep .mat-tab-label-active{background:#b6d1cd;opacity:1!important}.col-lg-6{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left{color:#171f26;font: 18px/20px Nexa Text;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count{color:#171f26;font: 17px/20px Nexa Text Bold;letter-spacing:0px;text-align:left}.page-title-container{display:flex;margin-right:48px}.page-title{text-align:left;font: 700 32px/30px Nexa Text Bold;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search{margin-left:auto;position:relative;width:400px}.page-search mat-icon{left:18%;margin-top:10px;position:absolute}.page-search img{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab{padding-left:48px;padding-right:48px}.detail-view-ticket{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search mat-icon{left:16%}}.ticket-list{animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.bt-spinner{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active,.site-view-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active{background-image:none!important;color:#171f26!important}::ng-deep .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}::ng-deep .mat-tab-header .mat-tab-label-active{background:transparent}::ng-deep .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}::ng-deep lib-onboarding-table{background-color:red!important}::ng-deep lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container{position:relative}.onboarding-list-container .header-top{display:flex;align-items:center;justify-content:space-between;padding:15px}.onboarding-list-container .title-table{font-family:Nexa;font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container .add-onboarding{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container .list-title{font-family:Nexa;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0}.onboarding-list-container .list-title ul li{margin-right:20px;padding-bottom:10px;cursor:pointer}.onboarding-list-container .list-title ul li.active{border-bottom:4px solid #3c4252}::ng-deep .list-title{padding-left:17px}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}::ng-deep .right-action{display:flex;align-items:center;gap:10px}\n"] }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxRQUFRLE1BQU0sVUFBVSxDQUFDLENBQUMsMkJBQTJCO0FBQ2pFLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBR2pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQTZCLE1BQU0sV0FBVyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFHMUksT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNNWixxQ0FBOEQ7SUFBQyxZQUFhO0lBQUEsaUJBQWE7OztJQUE3RSxtQ0FBa0I7SUFBaUMsZUFBYTtJQUFiLDRDQUFhOzs7SUFnRDVGLDBCQUF3RTs7O0lBQ3hFLDJCQUE0QixVQUFBO0lBRXBCLDJDQUV1QjtJQUMzQixpQkFBTSxFQUFBOzs7SUFKRCxlQUFxQztJQUFyQyxxREFBcUM7SUFDaEIsZUFBdUM7SUFBdkMsNERBQXVDLCtCQUFBLHFCQUFBLG1DQUFBOztBRHZEN0UsZ0JBQWdCO0FBT2hCLE1BQU0sT0FBTyx1QkFBdUI7SUE4RmxDLFlBQ1UsT0FBMEIsRUFDMUIsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLE1BQWlCO1FBSGpCLFlBQU8sR0FBUCxPQUFPLENB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QUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQTtRQUN6TCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxLQUFLLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbEc7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxLQUFLLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDOUY7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDOUk7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFD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QXdCLHlCQUFBLGlCQUFBO1FBRTRCLG9IQUFpQixzQkFBa0IsSUFBQyxpSkFBQTtRQUFoRixpQkFDK0Y7UUFDL0YsNkNBQTJFLGdDQUFBO1FBRS9FLGlCQUFpQixFQUFBLEVBQUE7UUFLekIsK0JBQXlCLGFBQUEsMEJBQUEsb0JBQUE7UUFHaUMsdUJBQU07UUFBQSxpQkFBVztRQUMvRCxrQ0FDeUM7UUFEZ0IsZ0tBQW1DLHVHQUN2RSxzQkFBa0IsSUFEcUQ7UUFBNUYsaUJBQ3lDLEVBQUEsRUFBQTtRQUdqRCw4QkFBd0Isa0JBQUE7UUFDNEMscUdBQVMsbUJBQWUsSUFBQztRQUNyRixpQ0FBVTtRQUFBLCtCQUFjO1FBQUEsaUJBQVc7UUFBQyx5QkFDeEM7UUFBQSxpQkFBUyxFQUFBLEVBQUEsRUFBQTtRQUlyQixnQ0FBc0M7UUFDbEMsMkVBQXdFO1FBQ3hFLDJFQU1NO1FBQ1YsaUJBQU0sRUFBQTs7OztRQXJFRSxlQUVKO1FBRkksc0ZBRUo7UUFTd0IsZUFBbUM7UUFBbkMsbURBQW1DO1FBRUssZUFBWTtRQUFaLHVDQUFZO1FBTXBELGVBQWlDO1FBQWpDLGlEQUFpQztRQUU3QixlQUFjO1FBQWQsNEJBQWM7UUFDZCxlQUFlO1FBQWYsNkJBQWU7UUFNWSxlQUEyQjtRQUEzQixtQ0FBMkIsZ0NBQUEsc0NBQUE7UUFFckMsZUFBaUI7UUFBakIseUJBQWlCO1FBTWxDLGVBQTJCO1FBQTNCLG1DQUEyQixrQ0FBQSxvQ0FBQTtRQUVWLGVBQWlCO1FBQWpCLHlCQUFpQjtRQVdPLGVBQW1DO1FBQW5DLG1EQUFtQztRQVlsRyxlQUF1QztRQUF2QyxnRUFBdUM7UUFDdkMsZUFBb0I7UUFBcEIseUNBQW9COzt1RkQ5Q3JCLHVCQUF1QjtjQUxuQyxTQUFTOzJCQUNFLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGpzb24yY3N2IGZyb20gJ2pzb24yY3N2JzsgLy8gY29udmVydCBqc29uIGZpbGUgdG8gY3N2XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENlbGxzQ29tcG9uZW50TGlzdCwgQ29yZU1hdFRhYmxlLCBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlIH0gZnJvbSBcIm5neC10YWJsZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcvZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcblxyXG4vLyBzYXZlIHRoZSBmaWxlXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1vbmJvYXJkaW5nLWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgb25ib2FyZGluZ0xpc3Q6IGFueVxyXG4gIGlucHV0U2VhcmNoID0gJyc7XHJcbiAgY3VycmVudExlbmd0aCA9IDA7XHJcbiAgY3VycmVudEZpbHRlciA9ICdhbGwnXHJcbiAgb25ib2FyZGluZyA9IFtdXHJcbiAgcHVibGljIHNlYXJjaDogc3RyaW5nID0gJyc7XHJcbiAgb25ib2FyZGluZ0Zvcm1hdExpc3QgPSBbXVxyXG4gIG9uYm9hcmRpbmdGaW5pc2hlZDogYW55XHJcbiAgb25ib2FyZGluZ1RvRmluaXNoOiBhbnlcclxuICB0ZW1wbGF0ZXMgPSBbXVxyXG4gIGZpbHRlckRhdGEgPSB7XHJcbiAgICBUZW1wbGF0ZUlkOiBcIlwiLFxyXG4gICAgc3RhcnRfZGF0ZTogbnVsbCxcclxuICAgIGVuZF9kYXRlOiBudWxsLFxyXG4gICAgc2VhcmNoVGV4dDogJycsXHJcbiAgICBGaW5pc2hlZDogXCJcIlxyXG4gIH1cclxuICBwdWJsaWMgY29sdW1uRGVmaW5pdGlvbnM6IGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VbXSA9IFtcclxuICAgIHtcclxuICAgICAga2V5OiAnTmFtZScsXHJcbiAgICAgIHN1YlRpdGxlOiBcImRhdGVcIixcclxuICAgICAgdmFsdWU6ICdOb20gZGUgZmFtaWxsZScsXHJcbiAgICAgIG9yZGVyOiAxLFxyXG4gICAgICBjbGFzczogJ3UtNycsXHJcbiAgICAgIGFkZENsYXNzOiAnbGFzdE5hbWVDbGFzcycsXHJcbiAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkN1c3RvbUNlbGwsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICdJZCcsXHJcbiAgICAgIHZhbHVlOiAnSUQnLFxyXG4gICAgICBvcmRlcjogMixcclxuICAgICAgY2xhc3M6ICd1LTQnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdUaXRsZScsXHJcbiAgICAgIHZhbHVlOiAnUHJvZmlsJyxcclxuICAgICAgb3JkZXI6IDIsXHJcbiAgICAgIGNsYXNzOiAndS00JyxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgIH0sIHtcclxuICAgICAga2V5OiAncmVxdWVzdG9yJyxcclxuICAgICAgdmFsdWU6ICdEZW1hbmRldXInLFxyXG4gICAgICBvcmRlcjogNCxcclxuICAgICAgY2xhc3M6ICd1LTUnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdUZW1wbGF0ZU5hbWUnLFxyXG4gICAgICB2YWx1ZTogJ1NlcnZpY2UnLFxyXG4gICAgICBvcmRlcjogNSxcclxuICAgICAgY2xhc3M6ICd1LTUnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnY3JlYXRpb25EYXRlJyxcclxuICAgICAgdmFsdWU6ICdEYXRlIGRlIGNyw6lhdGlvbicsXHJcbiAgICAgIG9yZGVyOiA2LFxyXG4gICAgICBjbGFzczogJ3UtNicsXHJcbiAgICAgIC8vIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkRhdGVGb3JtYXQsXHJcbiAgICAgIHNvcnQ6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ1N0YXR1cycsXHJcbiAgICAgIHZhbHVlOiBcIlN0YXR1dFwiLFxyXG4gICAgICBvcmRlcjogNyxcclxuICAgICAgYWRkQ2xhc3M6ICdDdXN0b21DbGFzcycsXHJcbiAgICAgIGNsYXNzOiAndS00JyxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuQ3VzdG9tQ2VsbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ0FjdGlvbicsXHJcbiAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgb3JkZXI6IDgsXHJcbiAgICAgIGNsYXNzOiAndS00JyxcclxuICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuQnV0dG9uTGluayxcclxuICAgICAgZGlzcGxheTogXCJEw6l0YWlsXCIsXHJcbiAgICAgIG92ZXJyaWRlOiBbYCR7dGhpcy5jaGVja09uYm9hcmRpbmdQYXRoKCl9YCwgJ1RlbXBsYXRlSWQnLCAnX2lkJ10sXHJcbiAgICAgIGFsaWduOiAnY2VudGVyJ1xyXG4gICAgfVxyXG5cclxuICBdO1xyXG4gIGxvY2FsU2VydmljZTogYW55O1xyXG4gIHB1YmxpYyBfbG9hZGluZ190YWJsZSA9IHRydWU7XHJcbiAgcHJpdmF0ZSBIaWRkZW5JbmRleCA9IDA7XHJcbiAgcHVibGljIGluZGV4ID0gMDtcclxuICBsYW5nID0gJ2ZyJztcclxuICBkYXRhRmlsdGVyZWQ6IGFueVtdO1xyXG5cclxuICBjYW5jZWxTZWFyY2goKSB7XHJcbiAgICB0aGlzLmlucHV0U2VhcmNoID0gJyc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuX3RlbXBsYXRlcy5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlcyA9IGRhdGEuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tPbmJvYXJkaW5nUGF0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNlcnZpY2UubWFpblBhdGguaW5jbHVkZXMoJ29uYm9hcmRpbmcnKSA/IGAke3RoaXMuc2VydmljZS5tYWluUGF0aH0vcmVxdWVzdHMvYCA6IGAvb25ib2FyZGluZy9yZXF1ZXN0cy9gXHJcbiAgfVxyXG5cclxuICBhc3luYyBuZ09uSW5pdCgpIHtcclxuICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTtcclxuICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxPbmJvYXJkaW5nKCk7XHJcbiAgICB0aGlzLnNlcnZpY2Uub25ib2FyZGluZy5zdWJzY3JpYmUoKG9uYm9hcmRpbmcpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IGZhbHNlO1xyXG4gICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICAgIGlmIChvbmJvYXJkaW5nKSB7XHJcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nID0gb25ib2FyZGluZy5tYXAoKHJvdywgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSByb3cuY2F0ZWdvcmllcy5maW5kKChjYXQpID0+IGNhdC5uYW1lID09PSBcIlV0aWxpc2F0ZXVyXCIpO1xyXG4gICAgICAgICAgY29uc3QgZm9ybVVzZXIgPSB1c2VyLmZvcm1zLm1hcCgoZm9ybSkgPT4gKHsga2V5OiBmb3JtLmtleSwgdmFsdWU6IGZvcm0udmFsdWUgfSkpLnJlZHVjZSgoYSwgdikgPT4gKHsgLi4uYSwgW3Yua2V5XTogdi52YWx1ZSB9KSwge30pXHJcbiAgICAgICAgICByb3cuU3RhdHVzID0gcm93LkZpbmlzaGVkID8gXCJUZXJtaW7DqWVcIiA6IFwiQSBmaW5hbGlzZXJcIjtcclxuICAgICAgICAgIHJvdy5DdXN0b21DbGFzcyA9IHJvdy5GaW5pc2hlZCA/IFwiY3VzdG9tLXN0YXR1cyBmaW5pc2hlZFwiIDogXCJjdXN0b20tc3RhdHVzIHRvLWZpbmlzaFwiO1xyXG4gICAgICAgICAgcm93Lmxhc3ROYW1lQ2xhc3MgPSBcImxhc3QtbmFtZVwiXHJcbiAgICAgICAgICByb3cucmVxdWVzdG9yID0gcm93Py52Y29udGFjdHNbMF0/Lk5hbWUgfHwgJyc7XHJcbiAgICAgICAgICByb3cuTmFtZSA9IHJvdy5Db250YWN0TmFtZSA9IGZvcm1Vc2VyPy5MYXN0TmFtZSArIFwiIFwiICsgZm9ybVVzZXI/LkZpcnN0TmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICByb3cuVGl0bGUgPSBmb3JtVXNlcj8uVGl0bGUgfHwgXCJcIlxyXG4gICAgICAgICAgcm93LkVtYWlsID0gZm9ybVVzZXI/LkVtYWlsIHx8ICcnO1xyXG4gICAgICAgICAgcm93LmRhdGUgPSByb3cuY3JlYXRlZEFcclxuICAgICAgICAgIC8vIHJvdy5kYXRlID0gbW9tZW50KHJvdy5jcmVhdGVkQXQpLmZvcm1hdCgnREQvTU0vWVknKVxyXG4gICAgICAgICAgcm93LmNyZWF0aW9uRGF0ZSA9IHJvdy5jcmVhdGVkQVxyXG4gICAgICAgICAgcm93LlRlbXBsYXRlTmFtZSA9IHJvdz8udnRlbXBsYXRlcz8ubGVuZ3RoID4gMCA/IHJvdz8udnRlbXBsYXRlc1swXS5OYW1lIDogJyc7XHJcbiAgICAgICAgICByb3cuSWQgPSBpbmRleCArIDE7XHJcbiAgICAgICAgICAvLyByb3cubWFpblBhdGggPSB0aGlzLnNlcnZpY2UubWFpblBhdGguaW5jbHVkZXMoJ29uYm9hcmRpbmcnKSA/IGAke3RoaXMuc2VydmljZS5tYWluUGF0aH0vcmVxdWVzdHMvYCA6IGAvb25ib2FyZGluZy9yZXF1ZXN0cy9gXHJcbiAgICAgICAgICByZXR1cm4gcm93O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5kYXRhRmlsdGVyZWQgPSB0aGlzLm9uYm9hcmRpbmc7XHJcbiAgICAgICAgdGhpcy5vbkZvcmFtdExpc3QodGhpcy5vbmJvYXJkaW5nKVxyXG5cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uRm9yYW10TGlzdChkYXRhcykge1xyXG4gICAgdGhpcy5vbmJvYXJkaW5nRm9ybWF0TGlzdCA9IGRhdGFzO1xyXG4gICAgdGhpcy5vbmJvYXJkaW5nTGlzdCA9IG5ldyBDb3JlTWF0VGFibGUoZGF0YXMsXHJcbiAgICAgIHtcclxuICAgICAgICBhY3RpdmU6ICdJZCcsIGRpcmVjdGlvbjogJ2Rlc2MnXHJcbiAgICAgIH0sIHsgYWN0aXZlOiAnJywgdmFsdWVTdGFydDogbnVsbCwgdmFsdWVFbmQ6IG51bGwgfSwgMTUsIHRydWUsIHRydWUpO1xyXG4gIH1cclxuICBvbkZpbHRlclRlbXBsYXRlKCkge1xyXG4gICAgdGhpcy5kYXRhRmlsdGVyZWQgPSB0aGlzLmZpbHRlckRhdGEuc2VhcmNoVGV4dCAhPT0gJycgPyB0aGlzLm9uYm9hcmRpbmcuZmlsdGVyKChkKSA9PiBkLk5hbWUudG9Mb3dlckNhc2UoKS5zZWFyY2godGhpcy5maWx0ZXJEYXRhLnNlYXJjaFRleHQudG9Mb2NhbGVMb3dlckNhc2UoKSkgPiAtMSkgOiB0aGlzLm9uYm9hcmRpbmdcclxuICAgIGlmICh0aGlzLmZpbHRlckRhdGEuVGVtcGxhdGVJZCAhPT0gJycpIHtcclxuICAgICAgdGhpcy5kYXRhRmlsdGVyZWQgPSB0aGlzLmRhdGFGaWx0ZXJlZC5maWx0ZXIoKGQpID0+IGQuVGVtcGxhdGVJZCA9PT0gdGhpcy5maWx0ZXJEYXRhLlRlbXBsYXRlSWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZmlsdGVyRGF0YS5GaW5pc2hlZCAhPT0gJycpIHtcclxuICAgICAgdGhpcy5kYXRhRmlsdGVyZWQgPSB0aGlzLmRhdGFGaWx0ZXJlZC5maWx0ZXIoKGQpID0+IGQuRmluaXNoZWQgPT09IHRoaXMuZmlsdGVyRGF0YS5GaW5pc2hlZCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5maWx0ZXJEYXRhLnN0YXJ0X2RhdGUpIHtcclxuICAgICAgdGhpcy5kYXRhRmlsdGVyZWQgPSB0aGlzLmRhdGFGaWx0ZXJlZC5maWx0ZXIoKGRhdGEpID0+IG5ldyBEYXRlKGRhdGEuY3JlYXRlZEF0KS5nZXRUaW1lKCkgPj0gbmV3IERhdGUodGhpcy5maWx0ZXJEYXRhLnN0YXJ0X2RhdGUpLmdldFRpbWUoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5maWx0ZXJEYXRhLmVuZF9kYXRlKSB7XHJcbiAgICAgIHRoaXMuZGF0YUZpbHRlcmVkID0gdGhpcy5kYXRhRmlsdGVyZWQuZmlsdGVyKChkYXRhKSA9PiBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkuZ2V0VGltZSgpIDw9IG5ldyBEYXRlKHRoaXMuZmlsdGVyRGF0YS5lbmRfZGF0ZSkuZ2V0VGltZSgpKTtcclxuICAgIH1cclxuICAgIHRoaXMub25Gb3JhbXRMaXN0KHRoaXMuZGF0YUZpbHRlcmVkKVxyXG4gIH1cclxuXHJcbiAgdHJpZ2dlckNoYW5nZSgkZXZlbnQpIHtcclxuICAgIGlmICgkZXZlbnQuaW5kZXggPT09IDApIHtcclxuICAgICAgdGhpcy5jdXJyZW50TGVuZ3RoID0gdGhpcy5vbmJvYXJkaW5nTGlzdC5kYXRhLmxlbmd0aFxyXG4gICAgfSBlbHNlIGlmICgkZXZlbnQuaW5kZXggPT09IDEpIHtcclxuICAgICAgdGhpcy5jdXJyZW50TGVuZ3RoID0gdGhpcy5vbmJvYXJkaW5nRmluaXNoZWQuZGF0YS5sZW5ndGhcclxuICAgIH0gZWxzZSBpZiAoJGV2ZW50LmluZGV4ID09PSAyKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudExlbmd0aCA9IHRoaXMub25ib2FyZGluZ1RvRmluaXNoLmRhdGEubGVuZ3RoXHJcbiAgICB9XHJcbiAgICBpZiAoJGV2ZW50LmluZGV4ICE9PSB0aGlzLkhpZGRlbkluZGV4KSB7XHJcbiAgICAgIHRoaXMuX2xvYWRpbmdfdGFibGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluZGV4ID0gJGV2ZW50LmluZGV4O1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcclxuICAgICAgICBbXSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHsgcGFnZTogbnVsbCwgdGFiOiAkZXZlbnQuaW5kZXggKyAxIH0sXHJcbiAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHRoaXMuSGlkZGVuSW5kZXggPSAkZXZlbnQuaW5kZXhcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IGZhbHNlO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5EaWFsb2coKSB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0NyZWF0ZU9uYm9hcmRpbmdDb21wb25lbnQsIHtcclxuICAgICAgZGF0YToge31cclxuICAgIH0pO1xyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChjdXJyZW50OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UuY3VycmVudE9uYm9hcmRpbmcubmV4dChjdXJyZW50KTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5zZXJ2aWNlLm1haW5QYXRoICsgYC9yZXF1ZXN0cy8ke2N1cnJlbnQuVGVtcGxhdGVJZH0vMGBdKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgb25FeHBvcnRUb0NTVigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBqc29uMmNzdlBhcnNlciA9IG5ldyBqc29uMmNzdi5QYXJzZXIoeyBvcHRzOiB7fSB9KTtcclxuICAgICAgY29uc3QgZGF0YVRvRXhwb3J0ID0gdGhpcy5kYXRhRmlsdGVyZWQubWFwKChkKSA9PiAoe1xyXG4gICAgICAgIFN0YXR1czogZC5TdGF0dXMsXHJcbiAgICAgICAgUmVxdWVzdG9yOiBkLnJlcXVlc3RvcixcclxuICAgICAgICBOYW1lOiBkLk5hbWUsXHJcbiAgICAgICAgVGl0bGU6IGQuVGl0bGUsXHJcbiAgICAgICAgRW1haWw6IGQuRW1haWwsXHJcbiAgICAgICAgQ3JlYXRpb25EYXRlOiBtb21lbnQoZC5jcmVhdGVkQXQpLmZvcm1hdCgnREQvTU0vWVknKSxcclxuICAgICAgICBUZW1wbGF0ZU5hbWU6IGQuVGVtcGxhdGVOYW1lXHJcbiAgICAgIH0pKVxyXG4gICAgICBsZXQgY3N2RGF0YSA9IGpzb24yY3N2UGFyc2VyLnBhcnNlKGRhdGFUb0V4cG9ydCk7XHJcbiAgICAgIGxldCBmaWxlID0gbmV3IEJsb2IoW1wiXFx1RkVGRlwiICsgY3N2RGF0YV0sIHtcclxuICAgICAgICB0eXBlOiAndGV4dC9jc3Y7IGNoYXJzZXQ9dXRmLTE4J1xyXG4gICAgICB9KTtcclxuICAgICAgc2F2ZUFzKGZpbGUsIFwib25ib2FyZGluZy1yZXF1ZXN0LmNzdlwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1haW4tYWxsLXRpY2tldC1saXN0IG9uYm9hcmRpbmctbGlzdC1jb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdG9wXCI+XHJcbiAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICBWb3VzIGF2ZXogYWN0dWVsbGVtZW50IHt7b25ib2FyZGluZy5sZW5ndGh9fVxyXG4gICAgICAgICAgICBEZW1hbmRlc1xyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiIGNsYXNzPVwiYWRkLW9uYm9hcmRpbmdcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+XHJcbiAgICAgICAgICAgIE5vdXZlbGxlIGRlbWFuZGUgZOKAmWludMOpZ3JhdGlvbiA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJsaXN0LXRpdGxlXCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJmaWx0ZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJmaWx0ZXJEYXRhLlRlbXBsYXRlSWRcIiAobmdNb2RlbENoYW5nZSk9XCJvbkZpbHRlclRlbXBsYXRlKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJcIj4gVG91czwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cIml0ZW0uX2lkXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdGVtcGxhdGVzXCI+IHt7aXRlbS5OYW1lfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZmlsdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiZmlsdGVyRGF0YS5GaW5pc2hlZFwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uRmlsdGVyVGVtcGxhdGUoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIlwiPiBUb3VzPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwidHJ1ZVwiPiBUZXJtaW7DqWVzPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwiZmFsc2VcIj5BIGZpbmFsaXNlcjwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJmaWx0ZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRGF0ZSBtaW5pbXVtXCIgW21hdERhdGVwaWNrZXJdPVwicGlja2VyTWluXCIgW21heF09XCJmaWx0ZXJEYXRhLmVuZF9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWx0ZXJEYXRhLnN0YXJ0X2RhdGVcIiAobmdNb2RlbENoYW5nZSk9XCJvbkZpbHRlclRlbXBsYXRlKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlck1pblwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyTWluPjwvbWF0LWRhdGVwaWNrZXI+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJmaWx0ZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlck1heFwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uRmlsdGVyVGVtcGxhdGUoKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGF0ZSBtYXhpbXVtXCIgW21pbl09XCJmaWx0ZXJEYXRhLnN0YXJ0X2RhdGVcIiBbKG5nTW9kZWwpXT1cImZpbHRlckRhdGEuZW5kX2RhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlck1heFwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyTWF4PjwvbWF0LWRhdGVwaWNrZXI+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuXHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3M9XCJyaWdodC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZmlsdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cInNlYXJjaC10ZXh0XCIgYXBwZWFyYW5jZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gbWF0UHJlZml4IHN0eWxlPVwibWFyZ2luLWxlZnQ6IDVweDtcIj5zZWFyY2g8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZS4uLlwiIHR5cGU9XCJzZWFyY2hcIiBbKG5nTW9kZWwpXT1cImZpbHRlckRhdGEuc2VhcmNoVGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uRmlsdGVyVGVtcGxhdGUoKVwiPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZmlsdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNsYXNzPVwiZXhwb3J0LXRvLWNzdlwiIGFwcGVhcmFuY2U9XCJ0ZXh0XCIgKGNsaWNrKT1cIm9uRXhwb3J0VG9DU1YoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5jbG91ZF9kb3dubG9hZDwvbWF0LWljb24+ICguQ1NWKVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtdmlldy1saXN0LXRpY2tldFwiPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJfbG9hZGluZ190YWJsZSB8fCAhb25ib2FyZGluZ0xpc3RcIiBjbGFzcz1cImJ0LXNwaW5uZXJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwib25ib2FyZGluZ0xpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBbY2xhc3MudGlja2V0LWxpc3RdPVwiIV9sb2FkaW5nX3RhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8bGliLW9uYm9hcmRpbmctdGFibGUgW2NvbHVtbkRlZmluaXRpb25zXT1cImNvbHVtbkRlZmluaXRpb25zXCIgW2RhdGFdPVwib25ib2FyZGluZ0xpc3RcIiBbbGFuZ109XCJsYW5nXCJcclxuICAgICAgICAgICAgICAgICAgICBbaW5wdXRTZWFyY2hdPVwiaW5wdXRTZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgIDwvbGliLW9uYm9hcmRpbmctdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PiJdfQ==