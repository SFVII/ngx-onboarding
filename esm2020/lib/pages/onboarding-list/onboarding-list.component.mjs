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
import * as i8 from "@angular/common";
import * as i9 from "../../components/onboarding/onboarding-table/onboarding-table.component";
function OnboardingListComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div");
    i0.ɵɵelement(2, "lib-onboarding-table", 14);
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
        this.ngxFilterInit = "";
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
                this.ngxFilterInit = JSON.stringify(this.ngxFilterData);
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
    onRefresh(event) {
        if (event.datas) {
            this.dataFiltered = event.datas;
            this.onForamtList(this.dataFiltered);
            this.ngxFilterData = JSON.parse(this.ngxFilterInit);
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
OnboardingListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 21, vars: 9, consts: [[1, "main-all-ticket-list", "onboarding-list-container"], [1, "header-top"], [2, "margin", "0"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-onboarding", 3, "click"], [1, "list-title"], ["searchType", "search-group", "lang", "fr", 3, "filterConfig", "datas", "withRefresh", "onFilter", "onRefresh"], [1, "right-action"], [1, "filter-item"], ["mat-flat-button", "", "appearance", "text", 1, "export-to-csv", "rounded", "secondary", "download-btn", "mr30", 3, "click"], [1, "mr5", 3, "icon", "size"], ["searchType", "search-text", "lang", "fr", 3, "datas", "onFilter"], [1, "content-view-list-ticket"], [1, "header-result"], [4, "ngIf"], [3, "columnDefinitions", "data", "lang", "inputSearch"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵlistener("onFilter", function OnboardingListComponent_Template_ngx_filter_onFilter_9_listener($event) { return ctx.onFilter($event); })("onRefresh", function OnboardingListComponent_Template_ngx_filter_onRefresh_9_listener($event) { return ctx.onRefresh($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "ul", 6)(11, "li", 7)(12, "button", 8);
        i0.ɵɵlistener("click", function OnboardingListComponent_Template_button_click_12_listener() { return ctx.onExportToCSV(); });
        i0.ɵɵelement(13, "nb-icon", 9);
        i0.ɵɵtext(14, " (.csv) ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(15, "li", 7)(16, "ngx-filter", 10);
        i0.ɵɵlistener("onFilter", function OnboardingListComponent_Template_ngx_filter_onFilter_16_listener($event) { return ctx.onFilter($event); });
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(17, "div", 11)(18, "p", 12);
        i0.ɵɵtext(19);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(20, OnboardingListComponent_div_20_Template, 3, 6, "div", 13);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" Demandes d'int\u00E9grations ", ctx.onboarding.length, " Demandes ");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("filterConfig", ctx.ngxFilterData)("datas", ctx.onboarding)("withRefresh", true);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("icon", "download")("size", 2);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("datas", ctx.onboarding);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("", ctx.onboarding.length, " r\u00E9sultats");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.onboardingList);
    } }, directives: [i4.MatAnchor, i5.MatIcon, i6.AppComponent, i4.MatButton, i7.NowboardIconComponent, i8.NgIf, i9.OnboardingTableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:98%}md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{letter-spacing:0px;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:999}app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}  .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;letter-spacing:0px;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.ticket-list[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}  .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}  .mat-tab-header .mat-tab-label-active{background:transparent}  .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}  lib-onboarding-table{background-color:red!important}  lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container[_ngcontent-%COMP%]{position:relative;padding:30px;display:flex;flex-direction:column;gap:25px;min-height:100vh}.onboarding-list-container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.onboarding-list-container[_ngcontent-%COMP%]   .title-table[_ngcontent-%COMP%]{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container[_ngcontent-%COMP%]   .add-onboarding[_ngcontent-%COMP%]{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}  .filter-item{display:flex;align-items:center}  .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-item .filter-item-inner{border-radius:50px;padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}  .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}  .right-action{display:flex;align-items:center}.header-result[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;color:#d1dbea;padding:0;margin:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{ selector: 'lib-onboarding-list', template: "<div class=\"main-all-ticket-list onboarding-list-container\">\r\n    <div class=\"header-top\">\r\n        <h2 style=\"margin: 0;\">\r\n            Demandes d'int\u00E9grations {{onboarding.length}}\r\n            Demandes\r\n        </h2>\r\n        <a role=\"button\" class=\"add-onboarding\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">\r\n            Nouvelle demande d\u2019int\u00E9gration <mat-icon>add</mat-icon>\r\n        </a>\r\n    </div>\r\n    <div class=\"list-title\">\r\n        <ngx-filter searchType=\"search-group\" [filterConfig]=\"ngxFilterData\" lang=\"fr\" (onFilter)=\"onFilter($event)\"\r\n            (onRefresh)=\"onRefresh($event)\" [datas]=\"onboarding\" [withRefresh]=\"true\">\r\n        </ngx-filter>\r\n        <ul class=\"right-action\">\r\n\r\n            <li class=\"filter-item\">\r\n                <button mat-flat-button appearance=\"text\" class=\"export-to-csv rounded secondary download-btn mr30\"\r\n                    (click)=\"onExportToCSV()\">\r\n                    <nb-icon [icon]=\"'download'\" [size]=\"2\" class=\"mr5\"></nb-icon>\r\n                    (.csv)\r\n                </button>\r\n\r\n            </li>\r\n            <li class=\"filter-item\">\r\n                <ngx-filter searchType=\"search-text\" lang=\"fr\" (onFilter)=\"onFilter($event)\" [datas]=\"onboarding\">\r\n                </ngx-filter>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"content-view-list-ticket\">\r\n        <p class=\"header-result\">{{onboarding.length}} r\u00E9sultats</p>\r\n        <!-- <div *ngIf=\"_loading_table || !onboardingList\" class=\"bt-spinner\"></div> -->\r\n        <div *ngIf=\"onboardingList\">\r\n            <div [class.ticket-list]=\"!_loading_table\">\r\n                <lib-onboarding-table [columnDefinitions]=\"columnDefinitions\" [data]=\"onboardingList\" [lang]=\"lang\"\r\n                    [inputSearch]=\"inputSearch\">\r\n                </lib-onboarding-table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>", styles: ["mat-card{display:block;width:98%}md-tooltip.tt-multiline ._md-content{height:auto}md-tooltip ._md-content{height:auto}table{width:100%}.element-detail .inline{display:table;width:90%}.element-detail .inline .block1{display:inline-table;float:left;width:50%;text-align:left}.element-detail .inline .block1 strong{letter-spacing:0px;color:#171f26}.element-detail .inline .block1 p,.element-detail .inline .block1 small{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list .component-title{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list .content-view-list-ticket{grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0}.main-all-ticket-list .content-view-list-ticket table{width:100%}.main-all-ticket-list .content-view-list-ticket table thead{position:sticky;top:-1px;z-index:999}app-list-preview{width:100%}::ng-deep .mat-tab-label-active{background:#b6d1cd;opacity:1!important}::ng-deep .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left{color:#171f26;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count{color:#171f26;letter-spacing:0px;text-align:left}.page-title-container{display:flex;margin-right:48px}.page-title{text-align:left;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search{margin-left:auto;position:relative;width:400px}.page-search mat-icon{left:18%;margin-top:10px;position:absolute}.page-search img{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab{padding-left:48px;padding-right:48px}.detail-view-ticket{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search mat-icon{left:16%}}.ticket-list{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list::-webkit-scrollbar{width:5px}.ticket-list::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active,.site-view-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active{background-image:none!important;color:#171f26!important}::ng-deep .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}::ng-deep .mat-tab-header .mat-tab-label-active{background:transparent}::ng-deep .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}::ng-deep lib-onboarding-table{background-color:red!important}::ng-deep lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container{position:relative;padding:30px;display:flex;flex-direction:column;gap:25px;min-height:100vh}.onboarding-list-container .header-top{display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .title-table{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container .add-onboarding{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.onboarding-list-container .list-title ul li{cursor:pointer}.onboarding-list-container .list-title ul li.active{border-bottom:4px solid #3c4252}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}::ng-deep .right-action{display:flex;align-items:center}.header-result{font-style:normal;font-weight:400;font-size:12px;color:#d1dbea;padding:0;margin:0}\n"] }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBR2pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEdBQThCLE1BQU0sV0FBVyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFHMUksT0FBTyxRQUFRLE1BQU0sVUFBVSxDQUFDLENBQUMsMkJBQTJCO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7Ozs7Ozs7OztJQ3NCNUIsMkJBQTRCLFVBQUE7SUFFcEIsMkNBRXVCO0lBQzNCLGlCQUFNLEVBQUE7OztJQUpELGVBQXFDO0lBQXJDLHFEQUFxQztJQUNoQixlQUF1QztJQUF2Qyw0REFBdUMsK0JBQUEscUJBQUEsbUNBQUE7O0FEdEI3RSxnQkFBZ0I7QUFPaEIsTUFBTSxPQUFPLHVCQUF1QjtJQTBJbEMsWUFDVSxPQUEwQixFQUMxQixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsTUFBaUI7UUFIakIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVc7UUE1STNCLGdCQUFXLEdB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R0FBUyxtQkFBZSxJQUFDO1FBQ3pCLDhCQUE4RDtRQUM5RCx5QkFDSjtRQUFBLGlCQUFTLEVBQUE7UUFHYiw4QkFBd0Isc0JBQUE7UUFDMkIscUhBQVksb0JBQWdCLElBQUM7UUFDNUUsaUJBQWEsRUFBQSxFQUFBLEVBQUE7UUFJekIsZ0NBQXNDLGFBQUE7UUFDVCxhQUErQjtRQUFBLGlCQUFJO1FBRTVELDJFQU1NO1FBQ1YsaUJBQU0sRUFBQTs7UUFyQ0UsZUFFSjtRQUZJLDRGQUVKO1FBTXNDLGVBQThCO1FBQTlCLGdEQUE4Qix5QkFBQSxxQkFBQTtRQVEvQyxlQUFtQjtRQUFuQixpQ0FBbUIsV0FBQTtRQU02QyxlQUFvQjtRQUFwQixzQ0FBb0I7UUFNaEYsZUFBK0I7UUFBL0IsbUVBQStCO1FBRWxELGVBQW9CO1FBQXBCLHlDQUFvQjs7dUZEYnJCLHVCQUF1QjtjQUxuQyxTQUFTOzJCQUNFLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENlbGxzQ29tcG9uZW50TGlzdCwgQ29yZU1hdFRhYmxlLCBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlLCB9IGZyb20gXCJuZ3gtdGFibGVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUZpbHRlckNvbmZpZ3VyYXRpb24sIElTZWxlY3QgfSBmcm9tICduZ3gtZmlsdGVyJztcclxuXHJcbmltcG9ydCB7IERpYWxvZ0NyZWF0ZU9uYm9hcmRpbmdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL29uYm9hcmRpbmcvZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XHJcbmltcG9ydCBqc29uMmNzdiBmcm9tICdqc29uMmNzdic7IC8vIGNvbnZlcnQganNvbiBmaWxlIHRvIGNzdlxyXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuXHJcbi8vIHNhdmUgdGhlIGZpbGVcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLW9uYm9hcmRpbmctbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBvbmJvYXJkaW5nTGlzdDogYW55XHJcbiAgaW5wdXRTZWFyY2ggPSAnJztcclxuICBjdXJyZW50TGVuZ3RoID0gMDtcclxuICBjdXJyZW50RmlsdGVyID0gJ2FsbCdcclxuICBvbmJvYXJkaW5nID0gW11cclxuICBwdWJsaWMgc2VhcmNoOiBzdHJpbmcgPSAnJztcclxuICBvbmJvYXJkaW5nRm9ybWF0TGlzdCA9IFtdXHJcbiAgb25ib2FyZGluZ0ZpbmlzaGVkOiBhbnlcclxuICBvbmJvYXJkaW5nVG9GaW5pc2g6IGFueTtcclxuICBzaG93U2VhcmNoOiBmYWxzZTtcclxuICB0ZW1wbGF0ZXMgPSBbXVxyXG5cclxuICBuZ3hGaWx0ZXJEYXRhOiBJRmlsdGVyQ29uZmlndXJhdGlvbltdID0gW1xyXG4gICAge1xyXG4gICAgICBmaWx0ZXJEYXRhOiB7XHJcbiAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBrZXk6ICdGaW5pc2hlZCcsXHJcbiAgICAgICAgbGFiZWw6ICdTdGF0dXQnLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnVGVybWluw6llcydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICAgICAgbGFiZWw6ICdBIGZpbmFsaXNlcidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmlsdGVyRGF0YToge1xyXG4gICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgbGFiZWw6ICdTZXJ2aWNlJyxcclxuICAgICAgICBrZXk6ICdUZW1wbGF0ZUlkJyxcclxuICAgICAgICBvcHRpb25zOiBbXSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmlsdGVyRGF0YToge1xyXG4gICAgICAgIHR5cGU6ICdkYXRlJyxcclxuICAgICAgICBrZXk6ICdjcmVhdGVkQXQnLFxyXG4gICAgICAgIG9wZXJhdG9yOiBcImd0ZVwiLFxyXG4gICAgICAgIGxhYmVsOiAnRGF0ZSBNaW4gICdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmlsdGVyRGF0YToge1xyXG4gICAgICAgIHR5cGU6ICdkYXRlJyxcclxuICAgICAgICBrZXk6ICdjcmVhdGVkQXQnLFxyXG4gICAgICAgIG9wZXJhdG9yOiBcImx0ZVwiLFxyXG4gICAgICAgIGxhYmVsOiAnRGF0ZSBNYXgnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBdXHJcbiAgbmd4RmlsdGVySW5pdCA9IFwiXCJcclxuICBwdWJsaWMgY29sdW1uRGVmaW5pdGlvbnM6IGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VbXSA9IFtcclxuICAgIHtcclxuICAgICAga2V5OiAnTmFtZScsXHJcbiAgICAgIHN1YlRpdGxlOiBcImRhdGVfb2ZfZW50cnlcIixcclxuICAgICAgdmFsdWU6ICdOb20gZGUgZmFtaWxsZScsXHJcbiAgICAgIHN1YlRpdGxlRm9ybWF0OiBcImRhdGVcIixcclxuICAgICAgb3JkZXI6IDEsXHJcbiAgICAgIGNsYXNzOiAndS03JyxcclxuICAgICAgYWRkQ2xhc3M6ICdsYXN0TmFtZUNsYXNzJyxcclxuICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuQ3VzdG9tQ2VsbCxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ0lkJyxcclxuICAgICAgdmFsdWU6ICdJRCcsXHJcbiAgICAgIG9yZGVyOiAyLFxyXG4gICAgICBjbGFzczogJ3UtNCcsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LCB7XHJcbiAgICAgIGtleTogJ1RpdGxlJyxcclxuICAgICAgdmFsdWU6ICdQcm9maWwnLFxyXG4gICAgICBvcmRlcjogMixcclxuICAgICAgY2xhc3M6ICd1LTQnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdyZXF1ZXN0b3InLFxyXG4gICAgICB2YWx1ZTogJ0RlbWFuZGV1cicsXHJcbiAgICAgIG9yZGVyOiA0LFxyXG4gICAgICBjbGFzczogJ3UtNScsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LCB7XHJcbiAgICAgIGtleTogJ1RlbXBsYXRlTmFtZScsXHJcbiAgICAgIHZhbHVlOiAnU2VydmljZScsXHJcbiAgICAgIG9yZGVyOiA1LFxyXG4gICAgICBjbGFzczogJ3UtNScsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICdjcmVhdGVkQXQnLFxyXG4gICAgICB2YWx1ZTogXCJEYXRlIGRlIGNyw6lhdGlvblwiLFxyXG4gICAgICBvcmRlcjogNixcclxuICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuRGF0ZUZvcm1hdCxcclxuICAgICAgY2xhc3M6ICd1LTYnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnU3RhdHVzJyxcclxuICAgICAgdmFsdWU6IFwiU3RhdHV0XCIsXHJcbiAgICAgIG9yZGVyOiA3LFxyXG4gICAgICBhZGRDbGFzczogJ0N1c3RvbUNsYXNzJyxcclxuICAgICAgY2xhc3M6ICd1LTQnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgICBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5DdXN0b21DZWxsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnQWN0aW9uJyxcclxuICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICBvcmRlcjogOCxcclxuICAgICAgY2xhc3M6ICd1LTQnLFxyXG4gICAgICBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5CdXR0b25MaW5rLFxyXG4gICAgICBkaXNwbGF5OiBcIkTDqXRhaWxcIixcclxuICAgICAgb3ZlcnJpZGU6IFtgJHt0aGlzLmNoZWNrT25ib2FyZGluZ1BhdGgoKX1gLCAnVGVtcGxhdGVJZCcsICdfaWQnXSxcclxuICAgICAgYWxpZ246ICdjZW50ZXInXHJcbiAgICB9XHJcblxyXG4gIF07XHJcbiAgbG9jYWxTZXJ2aWNlOiBhbnk7XHJcbiAgcHVibGljIF9sb2FkaW5nX3RhYmxlID0gdHJ1ZTtcclxuICBwcml2YXRlIEhpZGRlbkluZGV4ID0gMDtcclxuICBwdWJsaWMgaW5kZXggPSAwO1xyXG4gIGxhbmcgPSAnZnInO1xyXG4gIGRhdGFGaWx0ZXJlZDogYW55W107XHJcbiAgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG5cclxuICBjYW5jZWxTZWFyY2goKSB7XHJcbiAgICB0aGlzLmlucHV0U2VhcmNoID0gJyc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuX3RlbXBsYXRlcy5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlcyA9IGRhdGEuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyk7XHJcbiAgICAgICAgKHRoaXMubmd4RmlsdGVyRGF0YVsxXS5maWx0ZXJEYXRhIGFzIElTZWxlY3QpLm9wdGlvbnMgPSB0aGlzLnRlbXBsYXRlcy5tYXAoKHQ6IGFueSkgPT4gKHsgdmFsdWU6IHQuX2lkLCBsYWJlbDogdC5OYW1lIH0pKTtcclxuICAgICAgICB0aGlzLm5neEZpbHRlckluaXQgPSBKU09OLnN0cmluZ2lmeSh0aGlzLm5neEZpbHRlckRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uRmlsdGVyKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuZGF0YXMpIHtcclxuICAgICAgdGhpcy5kYXRhRmlsdGVyZWQgPSBldmVudC5kYXRhcztcclxuICAgICAgdGhpcy5vbkZvcmFtdExpc3QodGhpcy5kYXRhRmlsdGVyZWQpXHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uUmVmcmVzaChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmRhdGFzKSB7XHJcbiAgICAgIHRoaXMuZGF0YUZpbHRlcmVkID0gZXZlbnQuZGF0YXM7XHJcbiAgICAgIHRoaXMub25Gb3JhbXRMaXN0KHRoaXMuZGF0YUZpbHRlcmVkKVxyXG4gICAgICB0aGlzLm5neEZpbHRlckRhdGEgPSBKU09OLnBhcnNlKHRoaXMubmd4RmlsdGVySW5pdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja09uYm9hcmRpbmdQYXRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5tYWluUGF0aC5pbmNsdWRlcygnb25ib2FyZGluZycpID8gYCR7dGhpcy5zZXJ2aWNlLm1haW5QYXRofS9yZXF1ZXN0cy9gIDogYC9vbmJvYXJkaW5nL3JlcXVlc3RzL2BcclxuICB9XHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCkge1xyXG4gICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xyXG4gICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbE9uYm9hcmRpbmcoKTtcclxuICAgIHRoaXMuc2VydmljZS5vbmJvYXJkaW5nLnN1YnNjcmliZSgob25ib2FyZGluZykgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XHJcbiAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgaWYgKG9uYm9hcmRpbmcpIHtcclxuICAgICAgICB0aGlzLm9uYm9hcmRpbmcgPSBvbmJvYXJkaW5nLm1hcCgocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdXNlciA9IHJvdy5jYXRlZ29yaWVzLmZpbmQoKGNhdCkgPT4gY2F0Lm5hbWUgPT09IFwiVXRpbGlzYXRldXJcIik7XHJcbiAgICAgICAgICBjb25zdCBmb3JtVXNlciA9IHVzZXIuZm9ybXMubWFwKChmb3JtKSA9PiAoeyBrZXk6IGZvcm0ua2V5LCB2YWx1ZTogZm9ybS52YWx1ZSB9KSkucmVkdWNlKChhLCB2KSA9PiAoeyAuLi5hLCBbdi5rZXldOiB2LnZhbHVlIH0pLCB7fSlcclxuICAgICAgICAgIHJvdy5TdGF0dXMgPSByb3cuRmluaXNoZWQgPyBcIlRlcm1pbsOpZVwiIDogXCJBIGZpbmFsaXNlclwiO1xyXG4gICAgICAgICAgcm93LkN1c3RvbUNsYXNzID0gcm93LkZpbmlzaGVkID8gXCJjdXN0b20tc3RhdHVzIGZpbmlzaGVkXCIgOiBcImN1c3RvbS1zdGF0dXMgdG8tZmluaXNoXCI7XHJcbiAgICAgICAgICByb3cubGFzdE5hbWVDbGFzcyA9IFwibGFzdC1uYW1lXCJcclxuICAgICAgICAgIHJvdy5yZXF1ZXN0b3IgPSByb3c/LnZjb250YWN0c1swXT8uTmFtZSB8fCAnJztcclxuICAgICAgICAgIHJvdy5OYW1lID0gcm93LkNvbnRhY3ROYW1lID0gZm9ybVVzZXI/Lkxhc3ROYW1lICsgXCIgXCIgKyBmb3JtVXNlcj8uRmlyc3ROYW1lIHx8IFwiXCJcclxuICAgICAgICAgIHJvdy5UaXRsZSA9IGZvcm1Vc2VyPy5UaXRsZSB8fCBcIlwiXHJcbiAgICAgICAgICByb3cuRW1haWwgPSBmb3JtVXNlcj8uRW1haWwgfHwgJyc7XHJcbiAgICAgICAgICByb3cuZGF0ZV9vZl9lbnRyeSA9IGZvcm1Vc2VyLmRhdGVfb2ZfZW50cnkgPyBmb3JtVXNlci5kYXRlX29mX2VudHJ5IDogbnVsbFxyXG4gICAgICAgICAgLy8gcm93LmRhdGUgPSBtb21lbnQocm93LmNyZWF0ZWRBdCkuZm9ybWF0KCdERC9NTS9ZWScpIFxyXG4gICAgICAgICAgcm93LlRlbXBsYXRlTmFtZSA9IHJvdz8udnRlbXBsYXRlcz8ubGVuZ3RoID4gMCA/IHJvdz8udnRlbXBsYXRlc1swXS5OYW1lIDogJyc7XHJcbiAgICAgICAgICByb3cuSWQgPSBpbmRleCArIDE7XHJcbiAgICAgICAgICAvLyByb3cubWFpblBhdGggPSB0aGlzLnNlcnZpY2UubWFpblBhdGguaW5jbHVkZXMoJ29uYm9hcmRpbmcnKSA/IGAke3RoaXMuc2VydmljZS5tYWluUGF0aH0vcmVxdWVzdHMvYCA6IGAvb25ib2FyZGluZy9yZXF1ZXN0cy9gXHJcbiAgICAgICAgICByZXR1cm4gcm93O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vbmJvYXJkaW5nKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhRmlsdGVyZWQgPSB0aGlzLm9uYm9hcmRpbmc7XHJcbiAgICAgICAgdGhpcy5vbkZvcmFtdExpc3QodGhpcy5vbmJvYXJkaW5nKVxyXG5cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uRm9yYW10TGlzdChkYXRhcykge1xyXG4gICAgdGhpcy5vbmJvYXJkaW5nRm9ybWF0TGlzdCA9IGRhdGFzO1xyXG4gICAgdGhpcy5vbmJvYXJkaW5nTGlzdCA9IG5ldyBDb3JlTWF0VGFibGUoZGF0YXMsXHJcbiAgICAgIHtcclxuICAgICAgICBhY3RpdmU6ICdJZCcsIGRpcmVjdGlvbjogJ2Rlc2MnXHJcbiAgICAgIH0sIHsgYWN0aXZlOiAnJywgdmFsdWVTdGFydDogbnVsbCwgdmFsdWVFbmQ6IG51bGwgfSwgMTUsIHRydWUsIHRydWUpO1xyXG4gIH1cclxuICBvbkZpbHRlclRlbXBsYXRlKCkge1xyXG4gICAgdGhpcy5kYXRhRmlsdGVyZWQgPSB0aGlzLnNlYXJjaFRleHQgIT09ICcnID8gdGhpcy5vbmJvYXJkaW5nLmZpbHRlcigoZCkgPT4gZC5OYW1lLnRvTG93ZXJDYXNlKCkuc2VhcmNoKHRoaXMuc2VhcmNoVGV4dC50b0xvY2FsZUxvd2VyQ2FzZSgpKSA+IC0xKSA6IHRoaXMub25ib2FyZGluZ1xyXG4gICAgdGhpcy5vbkZvcmFtdExpc3QodGhpcy5kYXRhRmlsdGVyZWQpXHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyQ2hhbmdlKCRldmVudCkge1xyXG4gICAgaWYgKCRldmVudC5pbmRleCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRMZW5ndGggPSB0aGlzLm9uYm9hcmRpbmdMaXN0LmRhdGEubGVuZ3RoXHJcbiAgICB9IGVsc2UgaWYgKCRldmVudC5pbmRleCA9PT0gMSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRMZW5ndGggPSB0aGlzLm9uYm9hcmRpbmdGaW5pc2hlZC5kYXRhLmxlbmd0aFxyXG4gICAgfSBlbHNlIGlmICgkZXZlbnQuaW5kZXggPT09IDIpIHtcclxuICAgICAgdGhpcy5jdXJyZW50TGVuZ3RoID0gdGhpcy5vbmJvYXJkaW5nVG9GaW5pc2guZGF0YS5sZW5ndGhcclxuICAgIH1cclxuICAgIGlmICgkZXZlbnQuaW5kZXggIT09IHRoaXMuSGlkZGVuSW5kZXgpIHtcclxuICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5kZXggPSAkZXZlbnQuaW5kZXg7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxyXG4gICAgICAgIFtdLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXHJcbiAgICAgICAgICBxdWVyeVBhcmFtczogeyBwYWdlOiBudWxsLCB0YWI6ICRldmVudC5pbmRleCArIDEgfSxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcclxuICAgICAgICB9KTtcclxuICAgICAgdGhpcy5IaWRkZW5JbmRleCA9ICRldmVudC5pbmRleFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlbkRpYWxvZygpIHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7fVxyXG4gICAgfSk7XHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKGN1cnJlbnQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5jdXJyZW50T25ib2FyZGluZy5uZXh0KGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnNlcnZpY2UubWFpblBhdGggKyBgL3JlcXVlc3RzLyR7Y3VycmVudC5UZW1wbGF0ZUlkfS8wYF0pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBvbkV4cG9ydFRvQ1NWKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGpzb24yY3N2UGFyc2VyID0gbmV3IGpzb24yY3N2LlBhcnNlcih7IG9wdHM6IHt9IH0pO1xyXG4gICAgICBjb25zdCBkYXRhVG9FeHBvcnQgPSB0aGlzLmRhdGFGaWx0ZXJlZC5tYXAoKGQpID0+ICh7XHJcbiAgICAgICAgU3RhdHVzOiBkLlN0YXR1cyxcclxuICAgICAgICBSZXF1ZXN0b3I6IGQucmVxdWVzdG9yLFxyXG4gICAgICAgIE5hbWU6IGQuTmFtZSxcclxuICAgICAgICBUaXRsZTogZC5UaXRsZSxcclxuICAgICAgICBFbWFpbDogZC5FbWFpbCxcclxuICAgICAgICBDcmVhdGlvbkRhdGU6IG1vbWVudChkLmNyZWF0ZWRBdCkuYWRkKCksXHJcbiAgICAgICAgVGVtcGxhdGVOYW1lOiBkLlRlbXBsYXRlTmFtZVxyXG4gICAgICB9KSlcclxuICAgICAgbGV0IGNzdkRhdGEgPSBqc29uMmNzdlBhcnNlci5wYXJzZShkYXRhVG9FeHBvcnQpO1xyXG4gICAgICBsZXQgZmlsZSA9IG5ldyBCbG9iKFtcIlxcdUZFRkZcIiArIGNzdkRhdGFdLCB7XHJcbiAgICAgICAgdHlwZTogJ3RleHQvY3N2OyBjaGFyc2V0PXV0Zi0xOCdcclxuICAgICAgfSk7XHJcbiAgICAgIHNhdmVBcyhmaWxlLCBcIm9uYm9hcmRpbmctcmVxdWVzdC5jc3ZcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtYWluLWFsbC10aWNrZXQtbGlzdCBvbmJvYXJkaW5nLWxpc3QtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRvcFwiPlxyXG4gICAgICAgIDxoMiBzdHlsZT1cIm1hcmdpbjogMDtcIj5cclxuICAgICAgICAgICAgRGVtYW5kZXMgZCdpbnTDqWdyYXRpb25zIHt7b25ib2FyZGluZy5sZW5ndGh9fVxyXG4gICAgICAgICAgICBEZW1hbmRlc1xyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiIGNsYXNzPVwiYWRkLW9uYm9hcmRpbmdcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+XHJcbiAgICAgICAgICAgIE5vdXZlbGxlIGRlbWFuZGUgZOKAmWludMOpZ3JhdGlvbiA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJsaXN0LXRpdGxlXCI+XHJcbiAgICAgICAgPG5neC1maWx0ZXIgc2VhcmNoVHlwZT1cInNlYXJjaC1ncm91cFwiIFtmaWx0ZXJDb25maWddPVwibmd4RmlsdGVyRGF0YVwiIGxhbmc9XCJmclwiIChvbkZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCJcclxuICAgICAgICAgICAgKG9uUmVmcmVzaCk9XCJvblJlZnJlc2goJGV2ZW50KVwiIFtkYXRhc109XCJvbmJvYXJkaW5nXCIgW3dpdGhSZWZyZXNoXT1cInRydWVcIj5cclxuICAgICAgICA8L25neC1maWx0ZXI+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwicmlnaHQtYWN0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJmaWx0ZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gYXBwZWFyYW5jZT1cInRleHRcIiBjbGFzcz1cImV4cG9ydC10by1jc3Ygcm91bmRlZCBzZWNvbmRhcnkgZG93bmxvYWQtYnRuIG1yMzBcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkV4cG9ydFRvQ1NWKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInZG93bmxvYWQnXCIgW3NpemVdPVwiMlwiIGNsYXNzPVwibXI1XCI+PC9uYi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICguY3N2KVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJmaWx0ZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPG5neC1maWx0ZXIgc2VhcmNoVHlwZT1cInNlYXJjaC10ZXh0XCIgbGFuZz1cImZyXCIgKG9uRmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIiBbZGF0YXNdPVwib25ib2FyZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPC9uZ3gtZmlsdGVyPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXZpZXctbGlzdC10aWNrZXRcIj5cclxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1yZXN1bHRcIj57e29uYm9hcmRpbmcubGVuZ3RofX0gcsOpc3VsdGF0czwvcD5cclxuICAgICAgICA8IS0tIDxkaXYgKm5nSWY9XCJfbG9hZGluZ190YWJsZSB8fCAhb25ib2FyZGluZ0xpc3RcIiBjbGFzcz1cImJ0LXNwaW5uZXJcIj48L2Rpdj4gLS0+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm9uYm9hcmRpbmdMaXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgW2NsYXNzLnRpY2tldC1saXN0XT1cIiFfbG9hZGluZ190YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpYi1vbmJvYXJkaW5nLXRhYmxlIFtjb2x1bW5EZWZpbml0aW9uc109XCJjb2x1bW5EZWZpbml0aW9uc1wiIFtkYXRhXT1cIm9uYm9hcmRpbmdMaXN0XCIgW2xhbmddPVwibGFuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW2lucHV0U2VhcmNoXT1cImlucHV0U2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICA8L2xpYi1vbmJvYXJkaW5nLXRhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4iXX0=