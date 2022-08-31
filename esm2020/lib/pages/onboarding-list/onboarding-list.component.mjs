import * as moment from 'moment';
import { CellsComponentList, CoreMatTable } from "ngx-table";
import { Component } from '@angular/core';
import { DialogCreateOnboardingComponent } from '../../components/onboarding/dialog-create-onboarding/dialog-create-onboarding.component';
import json2csv from 'json2csv'; // convert json file to csv
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
    i0.ɵɵelementStart(0, "mat-option", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r4._id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r4.Name, "");
} }
function OnboardingListComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div");
    i0.ɵɵelement(2, "lib-onboarding-table", 24);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ticket-list", !ctx_r3._loading_table);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("columnDefinitions", ctx_r3.columnDefinitions)("data", ctx_r3.onboardingList)("lang", ctx_r3.lang)("inputSearch", ctx_r3.inputSearch);
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
                subTitle: "date_of_entry",
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
                key: 'createdAt',
                value: "Date de création",
                order: 6,
                module: CellsComponentList.DateFormat,
                class: 'u-6',
                sort: true,
                align: 'left',
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
                    row.date_of_entry = formUser.date_of_entry ? new Date(formUser.date_of_entry).toLocaleDateString("fr-FR") : "";
                    // row.date = moment(row.createdAt).format('DD/MM/YY') 
                    row.TemplateName = row?.vtemplates?.length > 0 ? row?.vtemplates[0].Name : '';
                    row.Id = index + 1;
                    // row.mainPath = this.service.mainPath.includes('onboarding') ? `${this.service.mainPath}/requests/` : `/onboarding/requests/`
                    return row;
                });
                console.log(this.onboarding);
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
OnboardingListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 52, vars: 17, consts: [[1, "main-all-ticket-list", "onboarding-list-container"], [1, "header-top"], [2, "margin", "0"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-onboarding", 3, "click"], [1, "list-title"], [1, "filter-item"], ["appearance", "text"], [3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "placeholder", "Date minimum", 3, "matDatepicker", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["pickerMin", ""], ["matInput", "", "placeholder", "Date maximum", 3, "matDatepicker", "min", "ngModel", "ngModelChange"], ["pickerMax", ""], [1, "right-action"], ["appearance", "text", 1, "search-text"], ["matPrefix", "", 2, "margin-left", "5px"], ["matInput", "", "placeholder", "Recherche...", "type", "search", 3, "ngModel", "ngModelChange"], ["mat-flat-button", "", "appearance", "text", 1, "export-to-csv", 3, "click"], [1, "content-view-list-ticket"], [1, "header-result"], [4, "ngIf"], [3, "columnDefinitions", "data", "lang", "inputSearch"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "a", 3);
        i0.ɵɵlistener("click", function OnboardingListComponent_Template_a_click_4_listener() { return ctx.openDialog(); });
        i0.ɵɵtext(5, " Nouvelle demande d\u2019int\u00E9gration ");
        i0.ɵɵelementStart(6, "mat-icon");
        i0.ɵɵtext(7, "add");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(8, "div", 4)(9, "ul")(10, "li", 5)(11, "mat-form-field", 6)(12, "mat-select", 7);
        i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.filterData.TemplateId = $event; })("ngModelChange", function OnboardingListComponent_Template_mat_select_ngModelChange_12_listener() { return ctx.onFilterTemplate(); });
        i0.ɵɵelementStart(13, "mat-option", 8);
        i0.ɵɵtext(14, " Tous");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(15, OnboardingListComponent_mat_option_15_Template, 2, 2, "mat-option", 9);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(16, "li", 5)(17, "mat-form-field", 6)(18, "mat-select", 7);
        i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_Template_mat_select_ngModelChange_18_listener($event) { return ctx.filterData.Finished = $event; })("ngModelChange", function OnboardingListComponent_Template_mat_select_ngModelChange_18_listener() { return ctx.onFilterTemplate(); });
        i0.ɵɵelementStart(19, "mat-option", 8);
        i0.ɵɵtext(20, " Tous");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "mat-option", 10);
        i0.ɵɵtext(22, " Termin\u00E9es");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "mat-option", 10);
        i0.ɵɵtext(24, "A finaliser");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(25, "li", 5)(26, "mat-form-field", 6)(27, "input", 11);
        i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_27_listener($event) { return ctx.filterData.start_date = $event; })("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_27_listener() { return ctx.onFilterTemplate(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(28, "mat-datepicker-toggle", 12)(29, "mat-datepicker", null, 13);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(31, "li", 5)(32, "mat-form-field", 6)(33, "input", 14);
        i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_33_listener() { return ctx.onFilterTemplate(); })("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_33_listener($event) { return ctx.filterData.end_date = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(34, "mat-datepicker-toggle", 12)(35, "mat-datepicker", null, 15);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(37, "ul", 16)(38, "li", 5)(39, "mat-form-field", 17)(40, "mat-icon", 18);
        i0.ɵɵtext(41, "search");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "input", 19);
        i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_42_listener($event) { return ctx.filterData.searchText = $event; })("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_42_listener() { return ctx.onFilterTemplate(); });
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(43, "li", 5)(44, "button", 20);
        i0.ɵɵlistener("click", function OnboardingListComponent_Template_button_click_44_listener() { return ctx.onExportToCSV(); });
        i0.ɵɵelementStart(45, "mat-icon");
        i0.ɵɵtext(46, "cloud_download");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(47, " (.CSV) ");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(48, "div", 21)(49, "p", 22);
        i0.ɵɵtext(50);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(51, OnboardingListComponent_div_51_Template, 3, 6, "div", 23);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(30);
        const _r2 = i0.ɵɵreference(36);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" Demandes d'int\u00E9grations ", ctx.onboarding.length, " Demandes ");
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
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate1("", ctx.onboarding.length, " r\u00E9sultats");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.onboardingList);
    } }, directives: [i4.MatAnchor, i5.MatIcon, i6.MatFormField, i7.MatSelect, i8.NgControlStatus, i8.NgModel, i9.NativeElementInjectorDirective, i10.MatOption, i11.NgForOf, i12.MatInput, i13.MatDatepickerInput, i8.DefaultValueAccessor, i13.MatDatepickerToggle, i6.MatSuffix, i13.MatDatepicker, i6.MatPrefix, i4.MatButton, i11.NgIf, i14.OnboardingTableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:98%}md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font: 700 13px/20px nexa;letter-spacing:0px;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:999}app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}  .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font: 18px/20px Nexa Text;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;font: 17px/20px Nexa Text Bold;letter-spacing:0px;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;font: 700 32px/30px Nexa Text Bold;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.ticket-list[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}  .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}  .mat-tab-header .mat-tab-label-active{background:transparent}  .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}  lib-onboarding-table{background-color:red!important}  lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container[_ngcontent-%COMP%]{position:relative;padding:30px;display:flex;flex-direction:column;gap:25px}.onboarding-list-container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.onboarding-list-container[_ngcontent-%COMP%]   .title-table[_ngcontent-%COMP%]{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container[_ngcontent-%COMP%]   .add-onboarding[_ngcontent-%COMP%]{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}  .filter-item{display:flex;align-items:center}  .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}  .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}  .right-action{display:flex;align-items:center}.header-result[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;color:#d1dbea;padding:0;margin:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{ selector: 'lib-onboarding-list', template: "<div class=\"main-all-ticket-list onboarding-list-container\">\r\n    <div class=\"header-top\">\r\n        <h2 style=\"margin: 0;\">\r\n            Demandes d'int\u00E9grations {{onboarding.length}}\r\n            Demandes\r\n        </h2>\r\n        <a role=\"button\" class=\"add-onboarding\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">\r\n            Nouvelle demande d\u2019int\u00E9gration <mat-icon>add</mat-icon>\r\n        </a>\r\n    </div>\r\n    <div class=\"list-title\">\r\n        <ul>\r\n            <li class=\"filter-item\">\r\n                <mat-form-field appearance=\"text\">\r\n                    <mat-select [(ngModel)]=\"filterData.TemplateId\" (ngModelChange)=\"onFilterTemplate()\">\r\n                        <mat-option value=\"\"> Tous</mat-option>\r\n                        <mat-option [value]=\"item._id\" *ngFor=\"let item of templates\"> {{item.Name}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </li>\r\n            <li class=\"filter-item\">\r\n                <mat-form-field appearance=\"text\">\r\n                    <mat-select [(ngModel)]=\"filterData.Finished\" (ngModelChange)=\"onFilterTemplate()\">\r\n                        <mat-option value=\"\"> Tous</mat-option>\r\n                        <mat-option [value]=\"true\"> Termin\u00E9es</mat-option>\r\n                        <mat-option [value]=\"false\">A finaliser</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </li>\r\n            <li class=\"filter-item\">\r\n                <mat-form-field appearance=\"text\">\r\n                    <input matInput placeholder=\"Date minimum\" [matDatepicker]=\"pickerMin\" [max]=\"filterData.end_date\"\r\n                        [(ngModel)]=\"filterData.start_date\" (ngModelChange)=\"onFilterTemplate()\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerMin\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickerMin></mat-datepicker>\r\n                </mat-form-field>\r\n            </li>\r\n            <li class=\"filter-item\">\r\n                <mat-form-field appearance=\"text\">\r\n                    <input matInput [matDatepicker]=\"pickerMax\" (ngModelChange)=\"onFilterTemplate()\"\r\n                        placeholder=\"Date maximum\" [min]=\"filterData.start_date\" [(ngModel)]=\"filterData.end_date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerMax\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickerMax></mat-datepicker>\r\n                </mat-form-field>\r\n            </li>\r\n\r\n\r\n        </ul>\r\n        <ul class=\"right-action\">\r\n            <li class=\"filter-item\">\r\n                <mat-form-field class=\"search-text\" appearance=\"text\">\r\n                    <mat-icon matPrefix style=\"margin-left: 5px;\">search</mat-icon>\r\n                    <input matInput placeholder=\"Recherche...\" type=\"search\" [(ngModel)]=\"filterData.searchText\"\r\n                        (ngModelChange)=\"onFilterTemplate()\">\r\n                </mat-form-field>\r\n            </li>\r\n            <li class=\"filter-item\">\r\n                <button mat-flat-button class=\"export-to-csv\" appearance=\"text\" (click)=\"onExportToCSV()\">\r\n                    <mat-icon>cloud_download</mat-icon> (.CSV)\r\n                </button>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"content-view-list-ticket\">\r\n        <p class=\"header-result\">{{onboarding.length}} r\u00E9sultats</p>\r\n        <!-- <div *ngIf=\"_loading_table || !onboardingList\" class=\"bt-spinner\"></div> -->\r\n        <div *ngIf=\"onboardingList\">\r\n            <div [class.ticket-list]=\"!_loading_table\">\r\n                <lib-onboarding-table [columnDefinitions]=\"columnDefinitions\" [data]=\"onboardingList\" [lang]=\"lang\"\r\n                    [inputSearch]=\"inputSearch\">\r\n                </lib-onboarding-table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>", styles: ["mat-card{display:block;width:98%}md-tooltip.tt-multiline ._md-content{height:auto}md-tooltip ._md-content{height:auto}table{width:100%}.element-detail .inline{display:table;width:90%}.element-detail .inline .block1{display:inline-table;float:left;width:50%;text-align:left}.element-detail .inline .block1 strong{font: 700 13px/20px nexa;letter-spacing:0px;color:#171f26}.element-detail .inline .block1 p,.element-detail .inline .block1 small{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list .component-title{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list .content-view-list-ticket{grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0}.main-all-ticket-list .content-view-list-ticket table{width:100%}.main-all-ticket-list .content-view-list-ticket table thead{position:sticky;top:-1px;z-index:999}app-list-preview{width:100%}::ng-deep .mat-tab-label-active{background:#b6d1cd;opacity:1!important}::ng-deep .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left{color:#171f26;font: 18px/20px Nexa Text;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count{color:#171f26;font: 17px/20px Nexa Text Bold;letter-spacing:0px;text-align:left}.page-title-container{display:flex;margin-right:48px}.page-title{text-align:left;font: 700 32px/30px Nexa Text Bold;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search{margin-left:auto;position:relative;width:400px}.page-search mat-icon{left:18%;margin-top:10px;position:absolute}.page-search img{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab{padding-left:48px;padding-right:48px}.detail-view-ticket{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search mat-icon{left:16%}}.ticket-list{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list::-webkit-scrollbar{width:5px}.ticket-list::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active,.site-view-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active{background-image:none!important;color:#171f26!important}::ng-deep .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}::ng-deep .mat-tab-header .mat-tab-label-active{background:transparent}::ng-deep .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}::ng-deep lib-onboarding-table{background-color:red!important}::ng-deep lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container{position:relative;padding:30px;display:flex;flex-direction:column;gap:25px}.onboarding-list-container .header-top{display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .title-table{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container .add-onboarding{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.onboarding-list-container .list-title ul li{cursor:pointer}.onboarding-list-container .list-title ul li.active{border-bottom:4px solid #3c4252}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}::ng-deep .right-action{display:flex;align-items:center}.header-result{font-style:normal;font-weight:400;font-size:12px;color:#d1dbea;padding:0;margin:0}\n"] }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBR2pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQTZCLE1BQU0sV0FBVyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFHMUksT0FBTyxRQUFRLE1BQU0sVUFBVSxDQUFDLENBQUMsMkJBQTJCO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDTVosc0NBQThEO0lBQUMsWUFBYTtJQUFBLGlCQUFhOzs7SUFBN0UsbUNBQWtCO0lBQWlDLGVBQWE7SUFBYiw0Q0FBYTs7O0lBa0Q1RiwyQkFBNEIsVUFBQTtJQUVwQiwyQ0FFdUI7SUFDM0IsaUJBQU0sRUFBQTs7O0lBSkQsZUFBcUM7SUFBckMscURBQXFDO0lBQ2hCLGVBQXVDO0lBQXZDLDREQUF1QywrQkFBQSxxQkFBQSxtQ0FBQTs7QUR4RDdFLGdCQUFnQjtBQU9oQixNQUFNLE9BQU8sdUJBQXVCO0lBK0ZsQyxZQUNVLE9BQTBCLEVBQzFCLE1BQWMsRUFDZCxLQUFxQixFQUNyQixNQUFpQjtRQUhqQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQixXQUFNLEdBQU4s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QXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2VsbHNDb21wb25lbnRMaXN0LCBDb3JlTWF0VGFibGUsIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2UgfSBmcm9tIFwibmd4LXRhYmxlXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQganNvbjJjc3YgZnJvbSAnanNvbjJjc3YnOyAvLyBjb252ZXJ0IGpzb24gZmlsZSB0byBjc3ZcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcblxyXG4vLyBzYXZlIHRoZSBmaWxlXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1vbmJvYXJkaW5nLWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgb25ib2FyZGluZ0xpc3Q6IGFueVxyXG4gIGlucHV0U2VhcmNoID0gJyc7XHJcbiAgY3VycmVudExlbmd0aCA9IDA7XHJcbiAgY3VycmVudEZpbHRlciA9ICdhbGwnXHJcbiAgb25ib2FyZGluZyA9IFtdXHJcbiAgcHVibGljIHNlYXJjaDogc3RyaW5nID0gJyc7XHJcbiAgb25ib2FyZGluZ0Zvcm1hdExpc3QgPSBbXVxyXG4gIG9uYm9hcmRpbmdGaW5pc2hlZDogYW55XHJcbiAgb25ib2FyZGluZ1RvRmluaXNoOiBhbnlcclxuICB0ZW1wbGF0ZXMgPSBbXVxyXG4gIGZpbHRlckRhdGEgPSB7XHJcbiAgICBUZW1wbGF0ZUlkOiBcIlwiLFxyXG4gICAgc3RhcnRfZGF0ZTogbnVsbCxcclxuICAgIGVuZF9kYXRlOiBudWxsLFxyXG4gICAgc2VhcmNoVGV4dDogJycsXHJcbiAgICBGaW5pc2hlZDogXCJcIlxyXG4gIH1cclxuICBwdWJsaWMgY29sdW1uRGVmaW5pdGlvbnM6IGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VbXSA9IFtcclxuICAgIHtcclxuICAgICAga2V5OiAnTmFtZScsXHJcbiAgICAgIHN1YlRpdGxlOiBcImRhdGVfb2ZfZW50cnlcIixcclxuICAgICAgdmFsdWU6ICdOb20gZGUgZmFtaWxsZScsXHJcbiAgICAgIG9yZGVyOiAxLFxyXG4gICAgICBjbGFzczogJ3UtNycsXHJcbiAgICAgIGFkZENsYXNzOiAnbGFzdE5hbWVDbGFzcycsXHJcbiAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkN1c3RvbUNlbGwsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICdJZCcsXHJcbiAgICAgIHZhbHVlOiAnSUQnLFxyXG4gICAgICBvcmRlcjogMixcclxuICAgICAgY2xhc3M6ICd1LTQnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdUaXRsZScsXHJcbiAgICAgIHZhbHVlOiAnUHJvZmlsJyxcclxuICAgICAgb3JkZXI6IDIsXHJcbiAgICAgIGNsYXNzOiAndS00JyxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgIH0sIHtcclxuICAgICAga2V5OiAncmVxdWVzdG9yJyxcclxuICAgICAgdmFsdWU6ICdEZW1hbmRldXInLFxyXG4gICAgICBvcmRlcjogNCxcclxuICAgICAgY2xhc3M6ICd1LTUnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdUZW1wbGF0ZU5hbWUnLFxyXG4gICAgICB2YWx1ZTogJ1NlcnZpY2UnLFxyXG4gICAgICBvcmRlcjogNSxcclxuICAgICAgY2xhc3M6ICd1LTUnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnY3JlYXRlZEF0JyxcclxuICAgICAgdmFsdWU6IFwiRGF0ZSBkZSBjcsOpYXRpb25cIixcclxuICAgICAgb3JkZXI6IDYsXHJcbiAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkRhdGVGb3JtYXQsXHJcbiAgICAgIGNsYXNzOiAndS02JyxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgICAgYWxpZ246ICdsZWZ0JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ1N0YXR1cycsXHJcbiAgICAgIHZhbHVlOiBcIlN0YXR1dFwiLFxyXG4gICAgICBvcmRlcjogNyxcclxuICAgICAgYWRkQ2xhc3M6ICdDdXN0b21DbGFzcycsXHJcbiAgICAgIGNsYXNzOiAndS00JyxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuQ3VzdG9tQ2VsbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ0FjdGlvbicsXHJcbiAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgb3JkZXI6IDgsXHJcbiAgICAgIGNsYXNzOiAndS00JyxcclxuICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuQnV0dG9uTGluayxcclxuICAgICAgZGlzcGxheTogXCJEw6l0YWlsXCIsXHJcbiAgICAgIG92ZXJyaWRlOiBbYCR7dGhpcy5jaGVja09uYm9hcmRpbmdQYXRoKCl9YCwgJ1RlbXBsYXRlSWQnLCAnX2lkJ10sXHJcbiAgICAgIGFsaWduOiAnY2VudGVyJ1xyXG4gICAgfVxyXG5cclxuICBdO1xyXG4gIGxvY2FsU2VydmljZTogYW55O1xyXG4gIHB1YmxpYyBfbG9hZGluZ190YWJsZSA9IHRydWU7XHJcbiAgcHJpdmF0ZSBIaWRkZW5JbmRleCA9IDA7XHJcbiAgcHVibGljIGluZGV4ID0gMDtcclxuICBsYW5nID0gJ2ZyJztcclxuICBkYXRhRmlsdGVyZWQ6IGFueVtdO1xyXG5cclxuICBjYW5jZWxTZWFyY2goKSB7XHJcbiAgICB0aGlzLmlucHV0U2VhcmNoID0gJyc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuX3RlbXBsYXRlcy5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlcyA9IGRhdGEuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tPbmJvYXJkaW5nUGF0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNlcnZpY2UubWFpblBhdGguaW5jbHVkZXMoJ29uYm9hcmRpbmcnKSA/IGAke3RoaXMuc2VydmljZS5tYWluUGF0aH0vcmVxdWVzdHMvYCA6IGAvb25ib2FyZGluZy9yZXF1ZXN0cy9gXHJcbiAgfVxyXG5cclxuICBhc3luYyBuZ09uSW5pdCgpIHtcclxuICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTtcclxuICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxPbmJvYXJkaW5nKCk7XHJcbiAgICB0aGlzLnNlcnZpY2Uub25ib2FyZGluZy5zdWJzY3JpYmUoKG9uYm9hcmRpbmcpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IGZhbHNlO1xyXG4gICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICAgIGlmIChvbmJvYXJkaW5nKSB7XHJcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nID0gb25ib2FyZGluZy5tYXAoKHJvdywgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSByb3cuY2F0ZWdvcmllcy5maW5kKChjYXQpID0+IGNhdC5uYW1lID09PSBcIlV0aWxpc2F0ZXVyXCIpO1xyXG4gICAgICAgICAgY29uc3QgZm9ybVVzZXIgPSB1c2VyLmZvcm1zLm1hcCgoZm9ybSkgPT4gKHsga2V5OiBmb3JtLmtleSwgdmFsdWU6IGZvcm0udmFsdWUgfSkpLnJlZHVjZSgoYSwgdikgPT4gKHsgLi4uYSwgW3Yua2V5XTogdi52YWx1ZSB9KSwge30pXHJcbiAgICAgICAgICByb3cuU3RhdHVzID0gcm93LkZpbmlzaGVkID8gXCJUZXJtaW7DqWVcIiA6IFwiQSBmaW5hbGlzZXJcIjtcclxuICAgICAgICAgIHJvdy5DdXN0b21DbGFzcyA9IHJvdy5GaW5pc2hlZCA/IFwiY3VzdG9tLXN0YXR1cyBmaW5pc2hlZFwiIDogXCJjdXN0b20tc3RhdHVzIHRvLWZpbmlzaFwiO1xyXG4gICAgICAgICAgcm93Lmxhc3ROYW1lQ2xhc3MgPSBcImxhc3QtbmFtZVwiXHJcbiAgICAgICAgICByb3cucmVxdWVzdG9yID0gcm93Py52Y29udGFjdHNbMF0/Lk5hbWUgfHwgJyc7XHJcbiAgICAgICAgICByb3cuTmFtZSA9IHJvdy5Db250YWN0TmFtZSA9IGZvcm1Vc2VyPy5MYXN0TmFtZSArIFwiIFwiICsgZm9ybVVzZXI/LkZpcnN0TmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICByb3cuVGl0bGUgPSBmb3JtVXNlcj8uVGl0bGUgfHwgXCJcIlxyXG4gICAgICAgICAgcm93LkVtYWlsID0gZm9ybVVzZXI/LkVtYWlsIHx8ICcnO1xyXG4gICAgICAgICAgcm93LmRhdGVfb2ZfZW50cnkgPSBmb3JtVXNlci5kYXRlX29mX2VudHJ5ID8gbmV3IERhdGUoZm9ybVVzZXIuZGF0ZV9vZl9lbnRyeSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIikgOiBcIlwiXHJcbiAgICAgICAgICAvLyByb3cuZGF0ZSA9IG1vbWVudChyb3cuY3JlYXRlZEF0KS5mb3JtYXQoJ0REL01NL1lZJykgXHJcbiAgICAgICAgICByb3cuVGVtcGxhdGVOYW1lID0gcm93Py52dGVtcGxhdGVzPy5sZW5ndGggPiAwID8gcm93Py52dGVtcGxhdGVzWzBdLk5hbWUgOiAnJztcclxuICAgICAgICAgIHJvdy5JZCA9IGluZGV4ICsgMTtcclxuICAgICAgICAgIC8vIHJvdy5tYWluUGF0aCA9IHRoaXMuc2VydmljZS5tYWluUGF0aC5pbmNsdWRlcygnb25ib2FyZGluZycpID8gYCR7dGhpcy5zZXJ2aWNlLm1haW5QYXRofS9yZXF1ZXN0cy9gIDogYC9vbmJvYXJkaW5nL3JlcXVlc3RzL2BcclxuICAgICAgICAgIHJldHVybiByb3c7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9uYm9hcmRpbmcpO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGFGaWx0ZXJlZCA9IHRoaXMub25ib2FyZGluZztcclxuICAgICAgICB0aGlzLm9uRm9yYW10TGlzdCh0aGlzLm9uYm9hcmRpbmcpXHJcblxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25Gb3JhbXRMaXN0KGRhdGFzKSB7XHJcbiAgICB0aGlzLm9uYm9hcmRpbmdGb3JtYXRMaXN0ID0gZGF0YXM7XHJcbiAgICB0aGlzLm9uYm9hcmRpbmdMaXN0ID0gbmV3IENvcmVNYXRUYWJsZShkYXRhcyxcclxuICAgICAge1xyXG4gICAgICAgIGFjdGl2ZTogJ0lkJywgZGlyZWN0aW9uOiAnZGVzYydcclxuICAgICAgfSwgeyBhY3RpdmU6ICcnLCB2YWx1ZVN0YXJ0OiBudWxsLCB2YWx1ZUVuZDogbnVsbCB9LCAxNSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgfVxyXG4gIG9uRmlsdGVyVGVtcGxhdGUoKSB7XHJcbiAgICB0aGlzLmRhdGFGaWx0ZXJlZCA9IHRoaXMuZmlsdGVyRGF0YS5zZWFyY2hUZXh0ICE9PSAnJyA/IHRoaXMub25ib2FyZGluZy5maWx0ZXIoKGQpID0+IGQuTmFtZS50b0xvd2VyQ2FzZSgpLnNlYXJjaCh0aGlzLmZpbHRlckRhdGEuc2VhcmNoVGV4dC50b0xvY2FsZUxvd2VyQ2FzZSgpKSA+IC0xKSA6IHRoaXMub25ib2FyZGluZ1xyXG4gICAgaWYgKHRoaXMuZmlsdGVyRGF0YS5UZW1wbGF0ZUlkICE9PSAnJykge1xyXG4gICAgICB0aGlzLmRhdGFGaWx0ZXJlZCA9IHRoaXMuZGF0YUZpbHRlcmVkLmZpbHRlcigoZCkgPT4gZC5UZW1wbGF0ZUlkID09PSB0aGlzLmZpbHRlckRhdGEuVGVtcGxhdGVJZCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5maWx0ZXJEYXRhLkZpbmlzaGVkICE9PSAnJykge1xyXG4gICAgICB0aGlzLmRhdGFGaWx0ZXJlZCA9IHRoaXMuZGF0YUZpbHRlcmVkLmZpbHRlcigoZCkgPT4gZC5GaW5pc2hlZCA9PT0gdGhpcy5maWx0ZXJEYXRhLkZpbmlzaGVkKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZpbHRlckRhdGEuc3RhcnRfZGF0ZSkge1xyXG4gICAgICB0aGlzLmRhdGFGaWx0ZXJlZCA9IHRoaXMuZGF0YUZpbHRlcmVkLmZpbHRlcigoZGF0YSkgPT4gbmV3IERhdGUoZGF0YS5jcmVhdGVkQXQpLmdldFRpbWUoKSA+PSBuZXcgRGF0ZSh0aGlzLmZpbHRlckRhdGEuc3RhcnRfZGF0ZSkuZ2V0VGltZSgpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZpbHRlckRhdGEuZW5kX2RhdGUpIHtcclxuICAgICAgdGhpcy5kYXRhRmlsdGVyZWQgPSB0aGlzLmRhdGFGaWx0ZXJlZC5maWx0ZXIoKGRhdGEpID0+IG5ldyBEYXRlKGRhdGEuY3JlYXRlZEF0KS5nZXRUaW1lKCkgPD0gbmV3IERhdGUodGhpcy5maWx0ZXJEYXRhLmVuZF9kYXRlKS5nZXRUaW1lKCkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbkZvcmFtdExpc3QodGhpcy5kYXRhRmlsdGVyZWQpXHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyQ2hhbmdlKCRldmVudCkge1xyXG4gICAgaWYgKCRldmVudC5pbmRleCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRMZW5ndGggPSB0aGlzLm9uYm9hcmRpbmdMaXN0LmRhdGEubGVuZ3RoXHJcbiAgICB9IGVsc2UgaWYgKCRldmVudC5pbmRleCA9PT0gMSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRMZW5ndGggPSB0aGlzLm9uYm9hcmRpbmdGaW5pc2hlZC5kYXRhLmxlbmd0aFxyXG4gICAgfSBlbHNlIGlmICgkZXZlbnQuaW5kZXggPT09IDIpIHtcclxuICAgICAgdGhpcy5jdXJyZW50TGVuZ3RoID0gdGhpcy5vbmJvYXJkaW5nVG9GaW5pc2guZGF0YS5sZW5ndGhcclxuICAgIH1cclxuICAgIGlmICgkZXZlbnQuaW5kZXggIT09IHRoaXMuSGlkZGVuSW5kZXgpIHtcclxuICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5kZXggPSAkZXZlbnQuaW5kZXg7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxyXG4gICAgICAgIFtdLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXHJcbiAgICAgICAgICBxdWVyeVBhcmFtczogeyBwYWdlOiBudWxsLCB0YWI6ICRldmVudC5pbmRleCArIDEgfSxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcclxuICAgICAgICB9KTtcclxuICAgICAgdGhpcy5IaWRkZW5JbmRleCA9ICRldmVudC5pbmRleFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlbkRpYWxvZygpIHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7fVxyXG4gICAgfSk7XHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKGN1cnJlbnQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5jdXJyZW50T25ib2FyZGluZy5uZXh0KGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnNlcnZpY2UubWFpblBhdGggKyBgL3JlcXVlc3RzLyR7Y3VycmVudC5UZW1wbGF0ZUlkfS8wYF0pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBvbkV4cG9ydFRvQ1NWKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGpzb24yY3N2UGFyc2VyID0gbmV3IGpzb24yY3N2LlBhcnNlcih7IG9wdHM6IHt9IH0pO1xyXG4gICAgICBjb25zdCBkYXRhVG9FeHBvcnQgPSB0aGlzLmRhdGFGaWx0ZXJlZC5tYXAoKGQpID0+ICh7XHJcbiAgICAgICAgU3RhdHVzOiBkLlN0YXR1cyxcclxuICAgICAgICBSZXF1ZXN0b3I6IGQucmVxdWVzdG9yLFxyXG4gICAgICAgIE5hbWU6IGQuTmFtZSxcclxuICAgICAgICBUaXRsZTogZC5UaXRsZSxcclxuICAgICAgICBFbWFpbDogZC5FbWFpbCxcclxuICAgICAgICBDcmVhdGlvbkRhdGU6IG1vbWVudChkLmNyZWF0ZWRBdCkuZm9ybWF0KCdERC9NTS9ZWScpLFxyXG4gICAgICAgIFRlbXBsYXRlTmFtZTogZC5UZW1wbGF0ZU5hbWVcclxuICAgICAgfSkpXHJcbiAgICAgIGxldCBjc3ZEYXRhID0ganNvbjJjc3ZQYXJzZXIucGFyc2UoZGF0YVRvRXhwb3J0KTtcclxuICAgICAgbGV0IGZpbGUgPSBuZXcgQmxvYihbXCJcXHVGRUZGXCIgKyBjc3ZEYXRhXSwge1xyXG4gICAgICAgIHR5cGU6ICd0ZXh0L2NzdjsgY2hhcnNldD11dGYtMTgnXHJcbiAgICAgIH0pO1xyXG4gICAgICBzYXZlQXMoZmlsZSwgXCJvbmJvYXJkaW5nLXJlcXVlc3QuY3N2XCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibWFpbi1hbGwtdGlja2V0LWxpc3Qgb25ib2FyZGluZy1saXN0LWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci10b3BcIj5cclxuICAgICAgICA8aDIgc3R5bGU9XCJtYXJnaW46IDA7XCI+XHJcbiAgICAgICAgICAgIERlbWFuZGVzIGQnaW50w6lncmF0aW9ucyB7e29uYm9hcmRpbmcubGVuZ3RofX1cclxuICAgICAgICAgICAgRGVtYW5kZXNcclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImFkZC1vbmJvYXJkaW5nXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPlxyXG4gICAgICAgICAgICBOb3V2ZWxsZSBkZW1hbmRlIGTigJlpbnTDqWdyYXRpb24gPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGlzdC10aXRsZVwiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZmlsdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiZmlsdGVyRGF0YS5UZW1wbGF0ZUlkXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25GaWx0ZXJUZW1wbGF0ZSgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiXCI+IFRvdXM8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJpdGVtLl9pZFwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRlbXBsYXRlc1wiPiB7e2l0ZW0uTmFtZX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImZpbHRlci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cImZpbHRlckRhdGEuRmluaXNoZWRcIiAobmdNb2RlbENoYW5nZSk9XCJvbkZpbHRlclRlbXBsYXRlKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJcIj4gVG91czwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cInRydWVcIj4gVGVybWluw6llczwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cImZhbHNlXCI+QSBmaW5hbGlzZXI8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZmlsdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkRhdGUgbWluaW11bVwiIFttYXREYXRlcGlja2VyXT1cInBpY2tlck1pblwiIFttYXhdPVwiZmlsdGVyRGF0YS5lbmRfZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmlsdGVyRGF0YS5zdGFydF9kYXRlXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25GaWx0ZXJUZW1wbGF0ZSgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJNaW5cIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlck1pbj48L21hdC1kYXRlcGlja2VyPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZmlsdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJNYXhcIiAobmdNb2RlbENoYW5nZSk9XCJvbkZpbHRlclRlbXBsYXRlKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRhdGUgbWF4aW11bVwiIFttaW5dPVwiZmlsdGVyRGF0YS5zdGFydF9kYXRlXCIgWyhuZ01vZGVsKV09XCJmaWx0ZXJEYXRhLmVuZF9kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJNYXhcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlck1heD48L21hdC1kYXRlcGlja2VyPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPC9saT5cclxuXHJcblxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwicmlnaHQtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImZpbHRlci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJzZWFyY2gtdGV4dFwiIGFwcGVhcmFuY2U9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIG1hdFByZWZpeCBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA1cHg7XCI+c2VhcmNoPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGUuLi5cIiB0eXBlPVwic2VhcmNoXCIgWyhuZ01vZGVsKV09XCJmaWx0ZXJEYXRhLnNlYXJjaFRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkZpbHRlclRlbXBsYXRlKClcIj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImZpbHRlci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjbGFzcz1cImV4cG9ydC10by1jc3ZcIiBhcHBlYXJhbmNlPVwidGV4dFwiIChjbGljayk9XCJvbkV4cG9ydFRvQ1NWKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+Y2xvdWRfZG93bmxvYWQ8L21hdC1pY29uPiAoLkNTVilcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXZpZXctbGlzdC10aWNrZXRcIj5cclxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1yZXN1bHRcIj57e29uYm9hcmRpbmcubGVuZ3RofX0gcsOpc3VsdGF0czwvcD5cclxuICAgICAgICA8IS0tIDxkaXYgKm5nSWY9XCJfbG9hZGluZ190YWJsZSB8fCAhb25ib2FyZGluZ0xpc3RcIiBjbGFzcz1cImJ0LXNwaW5uZXJcIj48L2Rpdj4gLS0+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm9uYm9hcmRpbmdMaXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgW2NsYXNzLnRpY2tldC1saXN0XT1cIiFfbG9hZGluZ190YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpYi1vbmJvYXJkaW5nLXRhYmxlIFtjb2x1bW5EZWZpbml0aW9uc109XCJjb2x1bW5EZWZpbml0aW9uc1wiIFtkYXRhXT1cIm9uYm9hcmRpbmdMaXN0XCIgW2xhbmddPVwibGFuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW2lucHV0U2VhcmNoXT1cImlucHV0U2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICA8L2xpYi1vbmJvYXJkaW5nLXRhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4iXX0=