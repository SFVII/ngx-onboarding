import * as moment from 'moment';
import { CellsComponentList, CoreMatTable, } from "ngx-table";
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
import * as i6 from "ngx-filter";
import * as i7 from "nowboard-icon";
import * as i8 from "@angular/material/form-field";
import * as i9 from "@angular/material/input";
import * as i10 from "@angular/forms";
import * as i11 from "ngx-intl-tel-input";
import * as i12 from "@angular/common";
import * as i13 from "../../components/onboarding/onboarding-table/onboarding-table.component";
function OnboardingListComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div");
    i0.ɵɵelement(2, "lib-onboarding-table", 16);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ticket-list", !ctx_r0._loading_table);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("columnDefinitions", ctx_r0.columnDefinitions)("data", ctx_r0.onboardingList)("lang", ctx_r0.lang)("inputSearch", ctx_r0.inputSearch);
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
        this.ngxFilterData = [
            {
                filterData: {
                    type: "select",
                    value: "",
                    key: 'Finished',
                    label: 'Statut',
                    options: [
                        {
                            value: true,
                            label: 'Terminées'
                        },
                        {
                            value: false,
                            label: 'A finaliser'
                        },
                    ],
                }
            },
            {
                filterData: {
                    type: "select",
                    value: "",
                    label: 'Service',
                    key: 'TemplateId',
                    options: [],
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
            }
        ];
        this.columnDefinitions = [
            {
                key: 'Name',
                subTitle: "date_of_entry",
                value: 'Nom de famille',
                subTitleFormat: "date",
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
                this.ngxFilterData[1].filterData.options = this.templates.map((t) => ({ value: t._id, label: t.Name }));
            }
        });
    }
    cancelSearch() {
        this.inputSearch = '';
    }
    onFilter(event) {
        if (event.datas) {
            this.dataFiltered = event.datas;
            this.onForamtList(this.dataFiltered);
        }
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
                    row.date_of_entry = formUser.date_of_entry ? formUser.date_of_entry : null;
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
        this.dataFiltered = this.searchText !== '' ? this.onboarding.filter((d) => d.Name.toLowerCase().search(this.searchText.toLocaleLowerCase()) > -1) : this.onboarding;
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
                CreationDate: moment(d.createdAt).add(),
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
OnboardingListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 24, vars: 9, consts: [[1, "main-all-ticket-list", "onboarding-list-container"], [1, "header-top"], [2, "margin", "0"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-onboarding", 3, "click"], [1, "list-title"], ["lang", "fr", 3, "filterConfig", "datas", "withRefresh", "onFilter"], [1, "right-action"], [1, "filter-item"], ["mat-flat-button", "", "appearance", "text", 1, "export-to-csv", "rounded", "secondary", "download-btn", "mr30", 3, "click"], [1, "mr5", 3, "icon", "size"], ["appearance", "text", 1, "search-text"], ["matPrefix", "", 2, "margin-left", "5px"], ["matInput", "", "placeholder", "Recherche...", "type", "search", 3, "ngModel", "ngModelChange"], [1, "content-view-list-ticket"], [1, "header-result"], [4, "ngIf"], [3, "columnDefinitions", "data", "lang", "inputSearch"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "a", 3);
        i0.ɵɵlistener("click", function OnboardingListComponent_Template_a_click_4_listener() { return ctx.openDialog(); });
        i0.ɵɵtext(5, " Nouvelle demande d\u2019int\u00E9gration ");
        i0.ɵɵelementStart(6, "mat-icon");
        i0.ɵɵtext(7, "add");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(8, "div", 4)(9, "ngx-filter", 5);
        i0.ɵɵlistener("onFilter", function OnboardingListComponent_Template_ngx_filter_onFilter_9_listener($event) { return ctx.onFilter($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "ul", 6)(11, "li", 7)(12, "button", 8);
        i0.ɵɵlistener("click", function OnboardingListComponent_Template_button_click_12_listener() { return ctx.onExportToCSV(); });
        i0.ɵɵelement(13, "nb-icon", 9);
        i0.ɵɵtext(14, " (.csv) ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(15, "li", 7)(16, "mat-form-field", 10)(17, "mat-icon", 11);
        i0.ɵɵtext(18, "search");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "input", 12);
        i0.ɵɵlistener("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_19_listener($event) { return ctx.searchText = $event; })("ngModelChange", function OnboardingListComponent_Template_input_ngModelChange_19_listener() { return ctx.onFilterTemplate(); });
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(20, "div", 13)(21, "p", 14);
        i0.ɵɵtext(22);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(23, OnboardingListComponent_div_23_Template, 3, 6, "div", 15);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" Demandes d'int\u00E9grations ", ctx.onboarding.length, " Demandes ");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("filterConfig", ctx.ngxFilterData)("datas", ctx.onboarding)("withRefresh", true);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("icon", "download")("size", 2);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.searchText);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("", ctx.onboarding.length, " r\u00E9sultats");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.onboardingList);
    } }, directives: [i4.MatAnchor, i5.MatIcon, i6.FilterComponent, i4.MatButton, i7.NowboardIconComponent, i8.MatFormField, i8.MatPrefix, i9.MatInput, i10.DefaultValueAccessor, i10.NgControlStatus, i10.NgModel, i11.NativeElementInjectorDirective, i12.NgIf, i13.OnboardingTableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:98%}md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font: 700 13px/20px nexa;letter-spacing:0px;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:999}app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}  .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font: 18px/20px Nexa Text;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;font: 17px/20px Nexa Text Bold;letter-spacing:0px;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;font: 700 32px/30px Nexa Text Bold;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.ticket-list[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}  .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}  .mat-tab-header .mat-tab-label-active{background:transparent}  .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}  lib-onboarding-table{background-color:red!important}  lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container[_ngcontent-%COMP%]{position:relative;padding:30px;display:flex;flex-direction:column;gap:25px;min-height:100vh}.onboarding-list-container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.onboarding-list-container[_ngcontent-%COMP%]   .title-table[_ngcontent-%COMP%]{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container[_ngcontent-%COMP%]   .add-onboarding[_ngcontent-%COMP%]{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}  .filter-item{display:flex;align-items:center}  .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-item .filter-item-inner{border-radius:50px;padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}  .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}  .right-action{display:flex;align-items:center}.header-result[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;color:#d1dbea;padding:0;margin:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{ selector: 'lib-onboarding-list', template: "<div class=\"main-all-ticket-list onboarding-list-container\">\r\n    <div class=\"header-top\">\r\n        <h2 style=\"margin: 0;\">\r\n            Demandes d'int\u00E9grations {{onboarding.length}}\r\n            Demandes\r\n        </h2>\r\n        <a role=\"button\" class=\"add-onboarding\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">\r\n            Nouvelle demande d\u2019int\u00E9gration <mat-icon>add</mat-icon>\r\n        </a>\r\n    </div>\r\n    <div class=\"list-title\">\r\n        <ngx-filter [filterConfig]=\"ngxFilterData\" lang=\"fr\" (onFilter)=\"onFilter($event)\" [datas]=\"onboarding\"\r\n            [withRefresh]=\"true\">\r\n        </ngx-filter>\r\n        <ul class=\"right-action\">\r\n\r\n            <li class=\"filter-item\">\r\n                <button mat-flat-button appearance=\"text\" class=\"export-to-csv rounded secondary download-btn mr30\"\r\n                    (click)=\"onExportToCSV()\">\r\n                    <nb-icon [icon]=\"'download'\" [size]=\"2\" class=\"mr5\"></nb-icon>\r\n                    (.csv)\r\n                </button>\r\n\r\n            </li>\r\n            <li class=\"filter-item\">\r\n                <mat-form-field class=\"search-text\" appearance=\"text\">\r\n                    <mat-icon matPrefix style=\"margin-left: 5px;\">search</mat-icon>\r\n                    <input matInput placeholder=\"Recherche...\" type=\"search\" [(ngModel)]=\"searchText\"\r\n                        (ngModelChange)=\"onFilterTemplate()\">\r\n                </mat-form-field>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"content-view-list-ticket\">\r\n        <p class=\"header-result\">{{onboarding.length}} r\u00E9sultats</p>\r\n        <!-- <div *ngIf=\"_loading_table || !onboardingList\" class=\"bt-spinner\"></div> -->\r\n        <div *ngIf=\"onboardingList\">\r\n            <div [class.ticket-list]=\"!_loading_table\">\r\n                <lib-onboarding-table [columnDefinitions]=\"columnDefinitions\" [data]=\"onboardingList\" [lang]=\"lang\"\r\n                    [inputSearch]=\"inputSearch\">\r\n                </lib-onboarding-table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>", styles: ["mat-card{display:block;width:98%}md-tooltip.tt-multiline ._md-content{height:auto}md-tooltip ._md-content{height:auto}table{width:100%}.element-detail .inline{display:table;width:90%}.element-detail .inline .block1{display:inline-table;float:left;width:50%;text-align:left}.element-detail .inline .block1 strong{font: 700 13px/20px nexa;letter-spacing:0px;color:#171f26}.element-detail .inline .block1 p,.element-detail .inline .block1 small{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list .component-title{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list .content-view-list-ticket{grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0}.main-all-ticket-list .content-view-list-ticket table{width:100%}.main-all-ticket-list .content-view-list-ticket table thead{position:sticky;top:-1px;z-index:999}app-list-preview{width:100%}::ng-deep .mat-tab-label-active{background:#b6d1cd;opacity:1!important}::ng-deep .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left{color:#171f26;font: 18px/20px Nexa Text;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count{color:#171f26;font: 17px/20px Nexa Text Bold;letter-spacing:0px;text-align:left}.page-title-container{display:flex;margin-right:48px}.page-title{text-align:left;font: 700 32px/30px Nexa Text Bold;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search{margin-left:auto;position:relative;width:400px}.page-search mat-icon{left:18%;margin-top:10px;position:absolute}.page-search img{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab{padding-left:48px;padding-right:48px}.detail-view-ticket{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search mat-icon{left:16%}}.ticket-list{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list::-webkit-scrollbar{width:5px}.ticket-list::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active,.site-view-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active{background-image:none!important;color:#171f26!important}::ng-deep .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}::ng-deep .mat-tab-header .mat-tab-label-active{background:transparent}::ng-deep .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}::ng-deep lib-onboarding-table{background-color:red!important}::ng-deep lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container{position:relative;padding:30px;display:flex;flex-direction:column;gap:25px;min-height:100vh}.onboarding-list-container .header-top{display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .title-table{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container .add-onboarding{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.onboarding-list-container .list-title ul li{cursor:pointer}.onboarding-list-container .list-title ul li.active{border-bottom:4px solid #3c4252}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}::ng-deep .right-action{display:flex;align-items:center}.header-result{font-style:normal;font-weight:400;font-size:12px;color:#d1dbea;padding:0;margin:0}\n"] }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBR2pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEdBQThCLE1BQU0sV0FBVyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFHMUksT0FBTyxRQUFRLE1BQU0sVUFBVSxDQUFDLENBQUMsMkJBQTJCO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUN5QjVCLDJCQUE0QixVQUFBO0lBRXBCLDJDQUV1QjtJQUMzQixpQkFBTSxFQUFBOzs7SUFKRCxlQUFxQztJQUFyQyxxREFBcUM7SUFDaEIsZUFBdUM7SUFBdkMsNERBQXVDLCtCQUFBLHFCQUFBLG1DQUFBOztBRHpCN0UsZ0JBQWdCO0FBT2hCLE1BQU0sT0FBTyx1QkFBdUI7SUF5SWxDLFlBQ1UsT0FBMEIsRUFDMUIsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLE1BQWlCO1FBSGpCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBM0kzQixnQkFB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QUF3QjtRQUF4Qix3Q0FBd0I7UUFPcEUsZUFBK0I7UUFBL0IsbUVBQStCO1FBRWxELGVBQW9CO1FBQXBCLHlDQUFvQjs7dUZEaEJyQix1QkFBdUI7Y0FMbkMsU0FBUzsyQkFDRSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDZWxsc0NvbXBvbmVudExpc3QsIENvcmVNYXRUYWJsZSwgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSwgfSBmcm9tIFwibmd4LXRhYmxlXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElGaWx0ZXJDb25maWd1cmF0aW9uLCBJU2VsZWN0IH0gZnJvbSAnbmd4LWZpbHRlcic7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQganNvbjJjc3YgZnJvbSAnanNvbjJjc3YnOyAvLyBjb252ZXJ0IGpzb24gZmlsZSB0byBjc3ZcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcblxyXG4vLyBzYXZlIHRoZSBmaWxlXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1vbmJvYXJkaW5nLWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgb25ib2FyZGluZ0xpc3Q6IGFueVxyXG4gIGlucHV0U2VhcmNoID0gJyc7XHJcbiAgY3VycmVudExlbmd0aCA9IDA7XHJcbiAgY3VycmVudEZpbHRlciA9ICdhbGwnXHJcbiAgb25ib2FyZGluZyA9IFtdXHJcbiAgcHVibGljIHNlYXJjaDogc3RyaW5nID0gJyc7XHJcbiAgb25ib2FyZGluZ0Zvcm1hdExpc3QgPSBbXVxyXG4gIG9uYm9hcmRpbmdGaW5pc2hlZDogYW55XHJcbiAgb25ib2FyZGluZ1RvRmluaXNoOiBhbnk7XHJcbiAgc2hvd1NlYXJjaDogZmFsc2U7XHJcbiAgdGVtcGxhdGVzID0gW11cclxuXHJcbiAgbmd4RmlsdGVyRGF0YTogSUZpbHRlckNvbmZpZ3VyYXRpb25bXSA9IFtcclxuICAgIHtcclxuICAgICAgZmlsdGVyRGF0YToge1xyXG4gICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAga2V5OiAnRmluaXNoZWQnLFxyXG4gICAgICAgIGxhYmVsOiAnU3RhdHV0JyxcclxuICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgICBsYWJlbDogJ1Rlcm1pbsOpZXMnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnQSBmaW5hbGlzZXInXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpbHRlckRhdGE6IHtcclxuICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIGxhYmVsOiAnU2VydmljZScsXHJcbiAgICAgICAga2V5OiAnVGVtcGxhdGVJZCcsXHJcbiAgICAgICAgb3B0aW9uczogW10sXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpbHRlckRhdGE6IHtcclxuICAgICAgICB0eXBlOiAnZGF0ZScsXHJcbiAgICAgICAga2V5OiAnY3JlYXRlZEF0JyxcclxuICAgICAgICBvcGVyYXRvcjogXCJndGVcIixcclxuICAgICAgICBsYWJlbDogJ0RhdGUgTWluICAnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpbHRlckRhdGE6IHtcclxuICAgICAgICB0eXBlOiAnZGF0ZScsXHJcbiAgICAgICAga2V5OiAnY3JlYXRlZEF0JyxcclxuICAgICAgICBvcGVyYXRvcjogXCJsdGVcIixcclxuICAgICAgICBsYWJlbDogJ0RhdGUgTWF4J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXVxyXG4gIHB1YmxpYyBjb2x1bW5EZWZpbml0aW9uczogZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZVtdID0gW1xyXG4gICAge1xyXG4gICAgICBrZXk6ICdOYW1lJyxcclxuICAgICAgc3ViVGl0bGU6IFwiZGF0ZV9vZl9lbnRyeVwiLFxyXG4gICAgICB2YWx1ZTogJ05vbSBkZSBmYW1pbGxlJyxcclxuICAgICAgc3ViVGl0bGVGb3JtYXQ6IFwiZGF0ZVwiLFxyXG4gICAgICBvcmRlcjogMSxcclxuICAgICAgY2xhc3M6ICd1LTcnLFxyXG4gICAgICBhZGRDbGFzczogJ2xhc3ROYW1lQ2xhc3MnLFxyXG4gICAgICBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5DdXN0b21DZWxsLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnSWQnLFxyXG4gICAgICB2YWx1ZTogJ0lEJyxcclxuICAgICAgb3JkZXI6IDIsXHJcbiAgICAgIGNsYXNzOiAndS00JyxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgIH0sIHtcclxuICAgICAga2V5OiAnVGl0bGUnLFxyXG4gICAgICB2YWx1ZTogJ1Byb2ZpbCcsXHJcbiAgICAgIG9yZGVyOiAyLFxyXG4gICAgICBjbGFzczogJ3UtNCcsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LCB7XHJcbiAgICAgIGtleTogJ3JlcXVlc3RvcicsXHJcbiAgICAgIHZhbHVlOiAnRGVtYW5kZXVyJyxcclxuICAgICAgb3JkZXI6IDQsXHJcbiAgICAgIGNsYXNzOiAndS01JyxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgIH0sIHtcclxuICAgICAga2V5OiAnVGVtcGxhdGVOYW1lJyxcclxuICAgICAgdmFsdWU6ICdTZXJ2aWNlJyxcclxuICAgICAgb3JkZXI6IDUsXHJcbiAgICAgIGNsYXNzOiAndS01JyxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ2NyZWF0ZWRBdCcsXHJcbiAgICAgIHZhbHVlOiBcIkRhdGUgZGUgY3LDqWF0aW9uXCIsXHJcbiAgICAgIG9yZGVyOiA2LFxyXG4gICAgICBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5EYXRlRm9ybWF0LFxyXG4gICAgICBjbGFzczogJ3UtNicsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICAgIGFsaWduOiAnbGVmdCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICdTdGF0dXMnLFxyXG4gICAgICB2YWx1ZTogXCJTdGF0dXRcIixcclxuICAgICAgb3JkZXI6IDcsXHJcbiAgICAgIGFkZENsYXNzOiAnQ3VzdG9tQ2xhc3MnLFxyXG4gICAgICBjbGFzczogJ3UtNCcsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkN1c3RvbUNlbGwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICdBY3Rpb24nLFxyXG4gICAgICB2YWx1ZTogJycsXHJcbiAgICAgIG9yZGVyOiA4LFxyXG4gICAgICBjbGFzczogJ3UtNCcsXHJcbiAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkJ1dHRvbkxpbmssXHJcbiAgICAgIGRpc3BsYXk6IFwiRMOpdGFpbFwiLFxyXG4gICAgICBvdmVycmlkZTogW2Ake3RoaXMuY2hlY2tPbmJvYXJkaW5nUGF0aCgpfWAsICdUZW1wbGF0ZUlkJywgJ19pZCddLFxyXG4gICAgICBhbGlnbjogJ2NlbnRlcidcclxuICAgIH1cclxuXHJcbiAgXTtcclxuICBsb2NhbFNlcnZpY2U6IGFueTtcclxuICBwdWJsaWMgX2xvYWRpbmdfdGFibGUgPSB0cnVlO1xyXG4gIHByaXZhdGUgSGlkZGVuSW5kZXggPSAwO1xyXG4gIHB1YmxpYyBpbmRleCA9IDA7XHJcbiAgbGFuZyA9ICdmcic7XHJcbiAgZGF0YUZpbHRlcmVkOiBhbnlbXTtcclxuICBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcblxyXG4gIGNhbmNlbFNlYXJjaCgpIHtcclxuICAgIHRoaXMuaW5wdXRTZWFyY2ggPSAnJztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2dcclxuICApIHtcclxuICAgIHRoaXMuc2VydmljZS5fdGVtcGxhdGVzLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVzID0gZGF0YS5maWx0ZXIoKGQpID0+IGQuU3RhdHVzKTtcclxuICAgICAgICAodGhpcy5uZ3hGaWx0ZXJEYXRhWzFdLmZpbHRlckRhdGEgYXMgSVNlbGVjdCkub3B0aW9ucyA9IHRoaXMudGVtcGxhdGVzLm1hcCgodDogYW55KSA9PiAoeyB2YWx1ZTogdC5faWQsIGxhYmVsOiB0Lk5hbWUgfSkpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25GaWx0ZXIoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5kYXRhcykge1xyXG4gICAgICB0aGlzLmRhdGFGaWx0ZXJlZCA9IGV2ZW50LmRhdGFzO1xyXG4gICAgICB0aGlzLm9uRm9yYW10TGlzdCh0aGlzLmRhdGFGaWx0ZXJlZClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrT25ib2FyZGluZ1BhdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLm1haW5QYXRoLmluY2x1ZGVzKCdvbmJvYXJkaW5nJykgPyBgJHt0aGlzLnNlcnZpY2UubWFpblBhdGh9L3JlcXVlc3RzL2AgOiBgL29uYm9hcmRpbmcvcmVxdWVzdHMvYFxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XHJcbiAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsT25ib2FyZGluZygpO1xyXG4gICAgdGhpcy5zZXJ2aWNlLm9uYm9hcmRpbmcuc3Vic2NyaWJlKChvbmJvYXJkaW5nKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2xvYWRpbmdfdGFibGUgPSBmYWxzZTtcclxuICAgICAgfSwgMjAwMCk7XHJcblxyXG4gICAgICBpZiAob25ib2FyZGluZykge1xyXG4gICAgICAgIHRoaXMub25ib2FyZGluZyA9IG9uYm9hcmRpbmcubWFwKChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gcm93LmNhdGVnb3JpZXMuZmluZCgoY2F0KSA9PiBjYXQubmFtZSA9PT0gXCJVdGlsaXNhdGV1clwiKTtcclxuICAgICAgICAgIGNvbnN0IGZvcm1Vc2VyID0gdXNlci5mb3Jtcy5tYXAoKGZvcm0pID0+ICh7IGtleTogZm9ybS5rZXksIHZhbHVlOiBmb3JtLnZhbHVlIH0pKS5yZWR1Y2UoKGEsIHYpID0+ICh7IC4uLmEsIFt2LmtleV06IHYudmFsdWUgfSksIHt9KVxyXG4gICAgICAgICAgcm93LlN0YXR1cyA9IHJvdy5GaW5pc2hlZCA/IFwiVGVybWluw6llXCIgOiBcIkEgZmluYWxpc2VyXCI7XHJcbiAgICAgICAgICByb3cuQ3VzdG9tQ2xhc3MgPSByb3cuRmluaXNoZWQgPyBcImN1c3RvbS1zdGF0dXMgZmluaXNoZWRcIiA6IFwiY3VzdG9tLXN0YXR1cyB0by1maW5pc2hcIjtcclxuICAgICAgICAgIHJvdy5sYXN0TmFtZUNsYXNzID0gXCJsYXN0LW5hbWVcIlxyXG4gICAgICAgICAgcm93LnJlcXVlc3RvciA9IHJvdz8udmNvbnRhY3RzWzBdPy5OYW1lIHx8ICcnO1xyXG4gICAgICAgICAgcm93Lk5hbWUgPSByb3cuQ29udGFjdE5hbWUgPSBmb3JtVXNlcj8uTGFzdE5hbWUgKyBcIiBcIiArIGZvcm1Vc2VyPy5GaXJzdE5hbWUgfHwgXCJcIlxyXG4gICAgICAgICAgcm93LlRpdGxlID0gZm9ybVVzZXI/LlRpdGxlIHx8IFwiXCJcclxuICAgICAgICAgIHJvdy5FbWFpbCA9IGZvcm1Vc2VyPy5FbWFpbCB8fCAnJztcclxuICAgICAgICAgIHJvdy5kYXRlX29mX2VudHJ5ID0gZm9ybVVzZXIuZGF0ZV9vZl9lbnRyeSA/IGZvcm1Vc2VyLmRhdGVfb2ZfZW50cnkgOiBudWxsXHJcbiAgICAgICAgICAvLyByb3cuZGF0ZSA9IG1vbWVudChyb3cuY3JlYXRlZEF0KS5mb3JtYXQoJ0REL01NL1lZJykgXHJcbiAgICAgICAgICByb3cuVGVtcGxhdGVOYW1lID0gcm93Py52dGVtcGxhdGVzPy5sZW5ndGggPiAwID8gcm93Py52dGVtcGxhdGVzWzBdLk5hbWUgOiAnJztcclxuICAgICAgICAgIHJvdy5JZCA9IGluZGV4ICsgMTtcclxuICAgICAgICAgIC8vIHJvdy5tYWluUGF0aCA9IHRoaXMuc2VydmljZS5tYWluUGF0aC5pbmNsdWRlcygnb25ib2FyZGluZycpID8gYCR7dGhpcy5zZXJ2aWNlLm1haW5QYXRofS9yZXF1ZXN0cy9gIDogYC9vbmJvYXJkaW5nL3JlcXVlc3RzL2BcclxuICAgICAgICAgIHJldHVybiByb3c7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9uYm9hcmRpbmcpO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGFGaWx0ZXJlZCA9IHRoaXMub25ib2FyZGluZztcclxuICAgICAgICB0aGlzLm9uRm9yYW10TGlzdCh0aGlzLm9uYm9hcmRpbmcpXHJcblxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25Gb3JhbXRMaXN0KGRhdGFzKSB7XHJcbiAgICB0aGlzLm9uYm9hcmRpbmdGb3JtYXRMaXN0ID0gZGF0YXM7XHJcbiAgICB0aGlzLm9uYm9hcmRpbmdMaXN0ID0gbmV3IENvcmVNYXRUYWJsZShkYXRhcyxcclxuICAgICAge1xyXG4gICAgICAgIGFjdGl2ZTogJ0lkJywgZGlyZWN0aW9uOiAnZGVzYydcclxuICAgICAgfSwgeyBhY3RpdmU6ICcnLCB2YWx1ZVN0YXJ0OiBudWxsLCB2YWx1ZUVuZDogbnVsbCB9LCAxNSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgfVxyXG4gIG9uRmlsdGVyVGVtcGxhdGUoKSB7XHJcbiAgICB0aGlzLmRhdGFGaWx0ZXJlZCA9IHRoaXMuc2VhcmNoVGV4dCAhPT0gJycgPyB0aGlzLm9uYm9hcmRpbmcuZmlsdGVyKChkKSA9PiBkLk5hbWUudG9Mb3dlckNhc2UoKS5zZWFyY2godGhpcy5zZWFyY2hUZXh0LnRvTG9jYWxlTG93ZXJDYXNlKCkpID4gLTEpIDogdGhpcy5vbmJvYXJkaW5nXHJcbiAgICB0aGlzLm9uRm9yYW10TGlzdCh0aGlzLmRhdGFGaWx0ZXJlZClcclxuICB9XHJcblxyXG4gIHRyaWdnZXJDaGFuZ2UoJGV2ZW50KSB7XHJcbiAgICBpZiAoJGV2ZW50LmluZGV4ID09PSAwKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudExlbmd0aCA9IHRoaXMub25ib2FyZGluZ0xpc3QuZGF0YS5sZW5ndGhcclxuICAgIH0gZWxzZSBpZiAoJGV2ZW50LmluZGV4ID09PSAxKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudExlbmd0aCA9IHRoaXMub25ib2FyZGluZ0ZpbmlzaGVkLmRhdGEubGVuZ3RoXHJcbiAgICB9IGVsc2UgaWYgKCRldmVudC5pbmRleCA9PT0gMikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRMZW5ndGggPSB0aGlzLm9uYm9hcmRpbmdUb0ZpbmlzaC5kYXRhLmxlbmd0aFxyXG4gICAgfVxyXG4gICAgaWYgKCRldmVudC5pbmRleCAhPT0gdGhpcy5IaWRkZW5JbmRleCkge1xyXG4gICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbmRleCA9ICRldmVudC5pbmRleDtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXHJcbiAgICAgICAgW10sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHBhZ2U6IG51bGwsIHRhYjogJGV2ZW50LmluZGV4ICsgMSB9LFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJywgLy8gcmVtb3ZlIHRvIHJlcGxhY2UgYWxsIHF1ZXJ5IHBhcmFtcyBieSBwcm92aWRlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB0aGlzLkhpZGRlbkluZGV4ID0gJGV2ZW50LmluZGV4XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2xvYWRpbmdfdGFibGUgPSBmYWxzZTtcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuRGlhbG9nKCkge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHt9XHJcbiAgICB9KTtcclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoY3VycmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChjdXJyZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmN1cnJlbnRPbmJvYXJkaW5nLm5leHQoY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuc2VydmljZS5tYWluUGF0aCArIGAvcmVxdWVzdHMvJHtjdXJyZW50LlRlbXBsYXRlSWR9LzBgXSlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIG9uRXhwb3J0VG9DU1YoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQganNvbjJjc3ZQYXJzZXIgPSBuZXcganNvbjJjc3YuUGFyc2VyKHsgb3B0czoge30gfSk7XHJcbiAgICAgIGNvbnN0IGRhdGFUb0V4cG9ydCA9IHRoaXMuZGF0YUZpbHRlcmVkLm1hcCgoZCkgPT4gKHtcclxuICAgICAgICBTdGF0dXM6IGQuU3RhdHVzLFxyXG4gICAgICAgIFJlcXVlc3RvcjogZC5yZXF1ZXN0b3IsXHJcbiAgICAgICAgTmFtZTogZC5OYW1lLFxyXG4gICAgICAgIFRpdGxlOiBkLlRpdGxlLFxyXG4gICAgICAgIEVtYWlsOiBkLkVtYWlsLFxyXG4gICAgICAgIENyZWF0aW9uRGF0ZTogbW9tZW50KGQuY3JlYXRlZEF0KS5hZGQoKSxcclxuICAgICAgICBUZW1wbGF0ZU5hbWU6IGQuVGVtcGxhdGVOYW1lXHJcbiAgICAgIH0pKVxyXG4gICAgICBsZXQgY3N2RGF0YSA9IGpzb24yY3N2UGFyc2VyLnBhcnNlKGRhdGFUb0V4cG9ydCk7XHJcbiAgICAgIGxldCBmaWxlID0gbmV3IEJsb2IoW1wiXFx1RkVGRlwiICsgY3N2RGF0YV0sIHtcclxuICAgICAgICB0eXBlOiAndGV4dC9jc3Y7IGNoYXJzZXQ9dXRmLTE4J1xyXG4gICAgICB9KTtcclxuICAgICAgc2F2ZUFzKGZpbGUsIFwib25ib2FyZGluZy1yZXF1ZXN0LmNzdlwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1haW4tYWxsLXRpY2tldC1saXN0IG9uYm9hcmRpbmctbGlzdC1jb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdG9wXCI+XHJcbiAgICAgICAgPGgyIHN0eWxlPVwibWFyZ2luOiAwO1wiPlxyXG4gICAgICAgICAgICBEZW1hbmRlcyBkJ2ludMOpZ3JhdGlvbnMge3tvbmJvYXJkaW5nLmxlbmd0aH19XHJcbiAgICAgICAgICAgIERlbWFuZGVzXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgY2xhc3M9XCJhZGQtb25ib2FyZGluZ1wiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5cclxuICAgICAgICAgICAgTm91dmVsbGUgZGVtYW5kZSBk4oCZaW50w6lncmF0aW9uIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImxpc3QtdGl0bGVcIj5cclxuICAgICAgICA8bmd4LWZpbHRlciBbZmlsdGVyQ29uZmlnXT1cIm5neEZpbHRlckRhdGFcIiBsYW5nPVwiZnJcIiAob25GaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiIFtkYXRhc109XCJvbmJvYXJkaW5nXCJcclxuICAgICAgICAgICAgW3dpdGhSZWZyZXNoXT1cInRydWVcIj5cclxuICAgICAgICA8L25neC1maWx0ZXI+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwicmlnaHQtYWN0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJmaWx0ZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gYXBwZWFyYW5jZT1cInRleHRcIiBjbGFzcz1cImV4cG9ydC10by1jc3Ygcm91bmRlZCBzZWNvbmRhcnkgZG93bmxvYWQtYnRuIG1yMzBcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkV4cG9ydFRvQ1NWKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInZG93bmxvYWQnXCIgW3NpemVdPVwiMlwiIGNsYXNzPVwibXI1XCI+PC9uYi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICguY3N2KVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJmaWx0ZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwic2VhcmNoLXRleHRcIiBhcHBlYXJhbmNlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBtYXRQcmVmaXggc3R5bGU9XCJtYXJnaW4tbGVmdDogNXB4O1wiPnNlYXJjaDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlLi4uXCIgdHlwZT1cInNlYXJjaFwiIFsobmdNb2RlbCldPVwic2VhcmNoVGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uRmlsdGVyVGVtcGxhdGUoKVwiPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudC12aWV3LWxpc3QtdGlja2V0XCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcmVzdWx0XCI+e3tvbmJvYXJkaW5nLmxlbmd0aH19IHLDqXN1bHRhdHM8L3A+XHJcbiAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwiX2xvYWRpbmdfdGFibGUgfHwgIW9uYm9hcmRpbmdMaXN0XCIgY2xhc3M9XCJidC1zcGlubmVyXCI+PC9kaXY+IC0tPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJvbmJvYXJkaW5nTGlzdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IFtjbGFzcy50aWNrZXQtbGlzdF09XCIhX2xvYWRpbmdfdGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDxsaWItb25ib2FyZGluZy10YWJsZSBbY29sdW1uRGVmaW5pdGlvbnNdPVwiY29sdW1uRGVmaW5pdGlvbnNcIiBbZGF0YV09XCJvbmJvYXJkaW5nTGlzdFwiIFtsYW5nXT1cImxhbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtpbnB1dFNlYXJjaF09XCJpbnB1dFNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgPC9saWItb25ib2FyZGluZy10YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+Il19