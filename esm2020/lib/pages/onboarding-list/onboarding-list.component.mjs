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
function OnboardingListComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div");
    i0.ɵɵelement(2, "lib-onboarding-table", 11);
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
OnboardingListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 17, vars: 8, consts: [[1, "main-all-ticket-list", "onboarding-list-container"], [1, "header-top"], [2, "margin", "0"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-onboarding", 3, "click"], [1, "list-title"], ["lang", "fr", 3, "filterConfig", "datas", "withRefresh", "onFilter", "onRefresh"], ["mat-flat-button", "", "appearance", "text", 1, "export-to-csv", "rounded", "secondary", "download-btn", "mr30", 3, "click"], [1, "mr5", 3, "icon", "size"], [1, "content-view-list-ticket"], [1, "header-result"], [4, "ngIf"], [3, "columnDefinitions", "data", "lang", "inputSearch"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(10, "button", 6);
        i0.ɵɵlistener("click", function OnboardingListComponent_Template_button_click_10_listener() { return ctx.onExportToCSV(); });
        i0.ɵɵelement(11, "nb-icon", 7);
        i0.ɵɵtext(12, " (.csv) ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(13, "div", 8)(14, "p", 9);
        i0.ɵɵtext(15);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(16, OnboardingListComponent_div_16_Template, 3, 6, "div", 10);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" Demandes d'int\u00E9grations ", ctx.onboarding.length, " Demandes ");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("filterConfig", ctx.ngxFilterData)("datas", ctx.onboarding)("withRefresh", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("icon", "download")("size", 2);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("", ctx.onboarding.length, " r\u00E9sultats");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.onboardingList);
    } }, directives: [i4.MatAnchor, i5.MatIcon, i6.AppComponent, i4.MatButton, i7.NowboardIconComponent, i8.NgIf, i9.OnboardingTableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:98%}md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{letter-spacing:0px;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{grid-area:2/1/4/3;padding-left:0;padding-right:0}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:999}app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}  .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;letter-spacing:0px;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.ticket-list[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}  .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}  .mat-tab-header .mat-tab-label-active{background:transparent}  .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}  lib-onboarding-table{background-color:red!important}  lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container[_ngcontent-%COMP%]{position:relative;padding:30px;display:flex;flex-direction:column;gap:25px;min-height:100vh}.onboarding-list-container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.onboarding-list-container[_ngcontent-%COMP%]   .title-table[_ngcontent-%COMP%]{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container[_ngcontent-%COMP%]   .add-onboarding[_ngcontent-%COMP%]{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}  .filter-item{display:flex;align-items:center}  .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-item .filter-item-inner{border-radius:50px;padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}  .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}  .right-action{display:flex;align-items:center}.header-result[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;color:#d1dbea;padding:0;margin:0}  ngx-filter{width:100%}  ngx-filter ngx-filter-group ul{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{ selector: 'lib-onboarding-list', template: "<div class=\"main-all-ticket-list onboarding-list-container\">\r\n    <div class=\"header-top\">\r\n        <h2 style=\"margin: 0;\">\r\n            Demandes d'int\u00E9grations {{onboarding.length}}\r\n            Demandes\r\n        </h2>\r\n        <a role=\"button\" class=\"add-onboarding\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">\r\n            Nouvelle demande d\u2019int\u00E9gration <mat-icon>add</mat-icon>\r\n        </a>\r\n    </div>\r\n    <div class=\"list-title\">\r\n        <ngx-filter [filterConfig]=\"ngxFilterData\" lang=\"fr\" (onFilter)=\"onFilter($event)\"\r\n            (onRefresh)=\"onRefresh($event)\" [datas]=\"onboarding\" [withRefresh]=\"true\">\r\n            <button mat-flat-button appearance=\"text\" class=\"export-to-csv rounded secondary download-btn mr30\"\r\n                (click)=\"onExportToCSV()\">\r\n                <nb-icon [icon]=\"'download'\" [size]=\"2\" class=\"mr5\"></nb-icon>\r\n                (.csv)\r\n            </button>\r\n        </ngx-filter>\r\n\r\n    </div>\r\n    <div class=\"content-view-list-ticket\">\r\n        <p class=\"header-result\">{{onboarding.length}} r\u00E9sultats</p>\r\n        <!-- <div *ngIf=\"_loading_table || !onboardingList\" class=\"bt-spinner\"></div> -->\r\n        <div *ngIf=\"onboardingList\">\r\n            <div [class.ticket-list]=\"!_loading_table\">\r\n                <lib-onboarding-table [columnDefinitions]=\"columnDefinitions\" [data]=\"onboardingList\" [lang]=\"lang\"\r\n                    [inputSearch]=\"inputSearch\">\r\n                </lib-onboarding-table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>", styles: ["mat-card{display:block;width:98%}md-tooltip.tt-multiline ._md-content{height:auto}md-tooltip ._md-content{height:auto}table{width:100%}.element-detail .inline{display:table;width:90%}.element-detail .inline .block1{display:inline-table;float:left;width:50%;text-align:left}.element-detail .inline .block1 strong{letter-spacing:0px;color:#171f26}.element-detail .inline .block1 p,.element-detail .inline .block1 small{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list .component-title{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list .content-view-list-ticket{grid-area:2/1/4/3;padding-left:0;padding-right:0}.main-all-ticket-list .content-view-list-ticket table{width:100%}.main-all-ticket-list .content-view-list-ticket table thead{position:sticky;top:-1px;z-index:999}app-list-preview{width:100%}::ng-deep .mat-tab-label-active{background:#b6d1cd;opacity:1!important}::ng-deep .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left{color:#171f26;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count{color:#171f26;letter-spacing:0px;text-align:left}.page-title-container{display:flex;margin-right:48px}.page-title{text-align:left;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search{margin-left:auto;position:relative;width:400px}.page-search mat-icon{left:18%;margin-top:10px;position:absolute}.page-search img{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab{padding-left:48px;padding-right:48px}.detail-view-ticket{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search mat-icon{left:16%}}.ticket-list{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list::-webkit-scrollbar{width:5px}.ticket-list::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active,.site-view-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active{background-image:none!important;color:#171f26!important}::ng-deep .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}::ng-deep .mat-tab-header .mat-tab-label-active{background:transparent}::ng-deep .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}::ng-deep lib-onboarding-table{background-color:red!important}::ng-deep lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container{position:relative;padding:30px;display:flex;flex-direction:column;gap:25px;min-height:100vh}.onboarding-list-container .header-top{display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .title-table{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container .add-onboarding{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.onboarding-list-container .list-title ul li{cursor:pointer}.onboarding-list-container .list-title ul li.active{border-bottom:4px solid #3c4252}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}::ng-deep .right-action{display:flex;align-items:center}.header-result{font-style:normal;font-weight:400;font-size:12px;color:#d1dbea;padding:0;margin:0}::ng-deep ngx-filter{width:100%}::ng-deep ngx-filter ngx-filter-group ul{padding:0}\n"] }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBR2pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEdBQThCLE1BQU0sV0FBVyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFHMUksT0FBTyxRQUFRLE1BQU0sVUFBVSxDQUFDLENBQUMsMkJBQTJCO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7Ozs7Ozs7OztJQ2E1QiwyQkFBNEIsVUFBQTtJQUVwQiwyQ0FFdUI7SUFDM0IsaUJBQU0sRUFBQTs7O0lBSkQsZUFBcUM7SUFBckMscURBQXFDO0lBQ2hCLGVBQXVDO0lBQXZDLDREQUF1QywrQkFBQSxxQkFBQSxtQ0FBQTs7QURiN0UsZ0JBQWdCO0FBT2hCLE1BQU0sT0FBTyx1QkFBdUI7SUEwSWxDLFlBQ1UsT0FBMEIsRUFDMUIsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLE1BQWlCO1FBSGpCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBNUkzQixnQkFBVyxHQUFH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QkFBOEQ7UUFDOUQseUJBQ0o7UUFBQSxpQkFBUyxFQUFBLEVBQUE7UUFJakIsK0JBQXNDLFlBQUE7UUFDVCxhQUErQjtRQUFBLGlCQUFJO1FBRTVELDJFQU1NO1FBQ1YsaUJBQU0sRUFBQTs7UUE1QkUsZUFFSjtRQUZJLDRGQUVKO1FBTVksZUFBOEI7UUFBOUIsZ0RBQThCLHlCQUFBLHFCQUFBO1FBSXpCLGVBQW1CO1FBQW5CLGlDQUFtQixXQUFBO1FBT1gsZUFBK0I7UUFBL0IsbUVBQStCO1FBRWxELGVBQW9CO1FBQXBCLHlDQUFvQjs7dUZESnJCLHVCQUF1QjtjQUxuQyxTQUFTOzJCQUNFLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENlbGxzQ29tcG9uZW50TGlzdCwgQ29yZU1hdFRhYmxlLCBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlLCB9IGZyb20gXCJuZ3gtdGFibGVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUZpbHRlckNvbmZpZ3VyYXRpb24sIElTZWxlY3QgfSBmcm9tICduZ3gtZmlsdGVyJztcclxuXHJcbmltcG9ydCB7IERpYWxvZ0NyZWF0ZU9uYm9hcmRpbmdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL29uYm9hcmRpbmcvZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XHJcbmltcG9ydCBqc29uMmNzdiBmcm9tICdqc29uMmNzdic7IC8vIGNvbnZlcnQganNvbiBmaWxlIHRvIGNzdlxyXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuXHJcbi8vIHNhdmUgdGhlIGZpbGVcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLW9uYm9hcmRpbmctbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBvbmJvYXJkaW5nTGlzdDogYW55XHJcbiAgaW5wdXRTZWFyY2ggPSAnJztcclxuICBjdXJyZW50TGVuZ3RoID0gMDtcclxuICBjdXJyZW50RmlsdGVyID0gJ2FsbCdcclxuICBvbmJvYXJkaW5nID0gW11cclxuICBwdWJsaWMgc2VhcmNoOiBzdHJpbmcgPSAnJztcclxuICBvbmJvYXJkaW5nRm9ybWF0TGlzdCA9IFtdXHJcbiAgb25ib2FyZGluZ0ZpbmlzaGVkOiBhbnlcclxuICBvbmJvYXJkaW5nVG9GaW5pc2g6IGFueTtcclxuICBzaG93U2VhcmNoOiBmYWxzZTtcclxuICB0ZW1wbGF0ZXMgPSBbXVxyXG5cclxuICBuZ3hGaWx0ZXJEYXRhOiBJRmlsdGVyQ29uZmlndXJhdGlvbltdID0gW1xyXG4gICAge1xyXG4gICAgICBmaWx0ZXJEYXRhOiB7XHJcbiAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBrZXk6ICdGaW5pc2hlZCcsXHJcbiAgICAgICAgbGFiZWw6ICdTdGF0dXQnLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnVGVybWluw6llcydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICAgICAgbGFiZWw6ICdBIGZpbmFsaXNlcidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmlsdGVyRGF0YToge1xyXG4gICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgbGFiZWw6ICdTZXJ2aWNlJyxcclxuICAgICAgICBrZXk6ICdUZW1wbGF0ZUlkJyxcclxuICAgICAgICBvcHRpb25zOiBbXSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmlsdGVyRGF0YToge1xyXG4gICAgICAgIHR5cGU6ICdkYXRlJyxcclxuICAgICAgICBrZXk6ICdjcmVhdGVkQXQnLFxyXG4gICAgICAgIG9wZXJhdG9yOiBcImd0ZVwiLFxyXG4gICAgICAgIGxhYmVsOiAnRGF0ZSBNaW4gICdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmlsdGVyRGF0YToge1xyXG4gICAgICAgIHR5cGU6ICdkYXRlJyxcclxuICAgICAgICBrZXk6ICdjcmVhdGVkQXQnLFxyXG4gICAgICAgIG9wZXJhdG9yOiBcImx0ZVwiLFxyXG4gICAgICAgIGxhYmVsOiAnRGF0ZSBNYXgnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBdXHJcbiAgbmd4RmlsdGVySW5pdCA9IFwiXCJcclxuICBwdWJsaWMgY29sdW1uRGVmaW5pdGlvbnM6IGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VbXSA9IFtcclxuICAgIHtcclxuICAgICAga2V5OiAnTmFtZScsXHJcbiAgICAgIHN1YlRpdGxlOiBcImRhdGVfb2ZfZW50cnlcIixcclxuICAgICAgdmFsdWU6ICdOb20gZGUgZmFtaWxsZScsXHJcbiAgICAgIHN1YlRpdGxlRm9ybWF0OiBcImRhdGVcIixcclxuICAgICAgb3JkZXI6IDEsXHJcbiAgICAgIGNsYXNzOiAndS03JyxcclxuICAgICAgYWRkQ2xhc3M6ICdsYXN0TmFtZUNsYXNzJyxcclxuICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuQ3VzdG9tQ2VsbCxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ0lkJyxcclxuICAgICAgdmFsdWU6ICdJRCcsXHJcbiAgICAgIG9yZGVyOiAyLFxyXG4gICAgICBjbGFzczogJ3UtNCcsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LCB7XHJcbiAgICAgIGtleTogJ1RpdGxlJyxcclxuICAgICAgdmFsdWU6ICdQcm9maWwnLFxyXG4gICAgICBvcmRlcjogMixcclxuICAgICAgY2xhc3M6ICd1LTQnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6ICdyZXF1ZXN0b3InLFxyXG4gICAgICB2YWx1ZTogJ0RlbWFuZGV1cicsXHJcbiAgICAgIG9yZGVyOiA0LFxyXG4gICAgICBjbGFzczogJ3UtNScsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LCB7XHJcbiAgICAgIGtleTogJ1RlbXBsYXRlTmFtZScsXHJcbiAgICAgIHZhbHVlOiAnU2VydmljZScsXHJcbiAgICAgIG9yZGVyOiA1LFxyXG4gICAgICBjbGFzczogJ3UtNScsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICdjcmVhdGVkQXQnLFxyXG4gICAgICB2YWx1ZTogXCJEYXRlIGRlIGNyw6lhdGlvblwiLFxyXG4gICAgICBvcmRlcjogNixcclxuICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuRGF0ZUZvcm1hdCxcclxuICAgICAgY2xhc3M6ICd1LTYnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnU3RhdHVzJyxcclxuICAgICAgdmFsdWU6IFwiU3RhdHV0XCIsXHJcbiAgICAgIG9yZGVyOiA3LFxyXG4gICAgICBhZGRDbGFzczogJ0N1c3RvbUNsYXNzJyxcclxuICAgICAgY2xhc3M6ICd1LTQnLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgICBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5DdXN0b21DZWxsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnQWN0aW9uJyxcclxuICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICBvcmRlcjogOCxcclxuICAgICAgY2xhc3M6ICd1LTQnLFxyXG4gICAgICBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5CdXR0b25MaW5rLFxyXG4gICAgICBkaXNwbGF5OiBcIkTDqXRhaWxcIixcclxuICAgICAgb3ZlcnJpZGU6IFtgJHt0aGlzLmNoZWNrT25ib2FyZGluZ1BhdGgoKX1gLCAnVGVtcGxhdGVJZCcsICdfaWQnXSxcclxuICAgICAgYWxpZ246ICdjZW50ZXInXHJcbiAgICB9XHJcblxyXG4gIF07XHJcbiAgbG9jYWxTZXJ2aWNlOiBhbnk7XHJcbiAgcHVibGljIF9sb2FkaW5nX3RhYmxlID0gdHJ1ZTtcclxuICBwcml2YXRlIEhpZGRlbkluZGV4ID0gMDtcclxuICBwdWJsaWMgaW5kZXggPSAwO1xyXG4gIGxhbmcgPSAnZnInO1xyXG4gIGRhdGFGaWx0ZXJlZDogYW55W107XHJcbiAgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG5cclxuICBjYW5jZWxTZWFyY2goKSB7XHJcbiAgICB0aGlzLmlucHV0U2VhcmNoID0gJyc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuX3RlbXBsYXRlcy5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlcyA9IGRhdGEuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyk7XHJcbiAgICAgICAgKHRoaXMubmd4RmlsdGVyRGF0YVsxXS5maWx0ZXJEYXRhIGFzIElTZWxlY3QpLm9wdGlvbnMgPSB0aGlzLnRlbXBsYXRlcy5tYXAoKHQ6IGFueSkgPT4gKHsgdmFsdWU6IHQuX2lkLCBsYWJlbDogdC5OYW1lIH0pKTtcclxuICAgICAgICB0aGlzLm5neEZpbHRlckluaXQgPSBKU09OLnN0cmluZ2lmeSh0aGlzLm5neEZpbHRlckRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uRmlsdGVyKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuZGF0YXMpIHtcclxuICAgICAgdGhpcy5kYXRhRmlsdGVyZWQgPSBldmVudC5kYXRhcztcclxuICAgICAgdGhpcy5vbkZvcmFtdExpc3QodGhpcy5kYXRhRmlsdGVyZWQpXHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uUmVmcmVzaChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmRhdGFzKSB7XHJcbiAgICAgIHRoaXMuZGF0YUZpbHRlcmVkID0gZXZlbnQuZGF0YXM7XHJcbiAgICAgIHRoaXMub25Gb3JhbXRMaXN0KHRoaXMuZGF0YUZpbHRlcmVkKVxyXG4gICAgICB0aGlzLm5neEZpbHRlckRhdGEgPSBKU09OLnBhcnNlKHRoaXMubmd4RmlsdGVySW5pdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja09uYm9hcmRpbmdQYXRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5tYWluUGF0aC5pbmNsdWRlcygnb25ib2FyZGluZycpID8gYCR7dGhpcy5zZXJ2aWNlLm1haW5QYXRofS9yZXF1ZXN0cy9gIDogYC9vbmJvYXJkaW5nL3JlcXVlc3RzL2BcclxuICB9XHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCkge1xyXG4gICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xyXG4gICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbE9uYm9hcmRpbmcoKTtcclxuICAgIHRoaXMuc2VydmljZS5vbmJvYXJkaW5nLnN1YnNjcmliZSgob25ib2FyZGluZykgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XHJcbiAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgaWYgKG9uYm9hcmRpbmcpIHtcclxuICAgICAgICB0aGlzLm9uYm9hcmRpbmcgPSBvbmJvYXJkaW5nLm1hcCgocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdXNlciA9IHJvdy5jYXRlZ29yaWVzLmZpbmQoKGNhdCkgPT4gY2F0Lm5hbWUgPT09IFwiVXRpbGlzYXRldXJcIik7XHJcbiAgICAgICAgICBjb25zdCBmb3JtVXNlciA9IHVzZXIuZm9ybXMubWFwKChmb3JtKSA9PiAoeyBrZXk6IGZvcm0ua2V5LCB2YWx1ZTogZm9ybS52YWx1ZSB9KSkucmVkdWNlKChhLCB2KSA9PiAoeyAuLi5hLCBbdi5rZXldOiB2LnZhbHVlIH0pLCB7fSlcclxuICAgICAgICAgIHJvdy5TdGF0dXMgPSByb3cuRmluaXNoZWQgPyBcIlRlcm1pbsOpZVwiIDogXCJBIGZpbmFsaXNlclwiO1xyXG4gICAgICAgICAgcm93LkN1c3RvbUNsYXNzID0gcm93LkZpbmlzaGVkID8gXCJjdXN0b20tc3RhdHVzIGZpbmlzaGVkXCIgOiBcImN1c3RvbS1zdGF0dXMgdG8tZmluaXNoXCI7XHJcbiAgICAgICAgICByb3cubGFzdE5hbWVDbGFzcyA9IFwibGFzdC1uYW1lXCJcclxuICAgICAgICAgIHJvdy5yZXF1ZXN0b3IgPSByb3c/LnZjb250YWN0c1swXT8uTmFtZSB8fCAnJztcclxuICAgICAgICAgIHJvdy5OYW1lID0gcm93LkNvbnRhY3ROYW1lID0gZm9ybVVzZXI/Lkxhc3ROYW1lICsgXCIgXCIgKyBmb3JtVXNlcj8uRmlyc3ROYW1lIHx8IFwiXCJcclxuICAgICAgICAgIHJvdy5UaXRsZSA9IGZvcm1Vc2VyPy5UaXRsZSB8fCBcIlwiXHJcbiAgICAgICAgICByb3cuRW1haWwgPSBmb3JtVXNlcj8uRW1haWwgfHwgJyc7XHJcbiAgICAgICAgICByb3cuZGF0ZV9vZl9lbnRyeSA9IGZvcm1Vc2VyLmRhdGVfb2ZfZW50cnkgPyBmb3JtVXNlci5kYXRlX29mX2VudHJ5IDogbnVsbFxyXG4gICAgICAgICAgLy8gcm93LmRhdGUgPSBtb21lbnQocm93LmNyZWF0ZWRBdCkuZm9ybWF0KCdERC9NTS9ZWScpIFxyXG4gICAgICAgICAgcm93LlRlbXBsYXRlTmFtZSA9IHJvdz8udnRlbXBsYXRlcz8ubGVuZ3RoID4gMCA/IHJvdz8udnRlbXBsYXRlc1swXS5OYW1lIDogJyc7XHJcbiAgICAgICAgICByb3cuSWQgPSBpbmRleCArIDE7XHJcbiAgICAgICAgICAvLyByb3cubWFpblBhdGggPSB0aGlzLnNlcnZpY2UubWFpblBhdGguaW5jbHVkZXMoJ29uYm9hcmRpbmcnKSA/IGAke3RoaXMuc2VydmljZS5tYWluUGF0aH0vcmVxdWVzdHMvYCA6IGAvb25ib2FyZGluZy9yZXF1ZXN0cy9gXHJcbiAgICAgICAgICByZXR1cm4gcm93O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vbmJvYXJkaW5nKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhRmlsdGVyZWQgPSB0aGlzLm9uYm9hcmRpbmc7XHJcbiAgICAgICAgdGhpcy5vbkZvcmFtdExpc3QodGhpcy5vbmJvYXJkaW5nKVxyXG5cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uRm9yYW10TGlzdChkYXRhcykge1xyXG4gICAgdGhpcy5vbmJvYXJkaW5nRm9ybWF0TGlzdCA9IGRhdGFzO1xyXG4gICAgdGhpcy5vbmJvYXJkaW5nTGlzdCA9IG5ldyBDb3JlTWF0VGFibGUoZGF0YXMsXHJcbiAgICAgIHtcclxuICAgICAgICBhY3RpdmU6ICdJZCcsIGRpcmVjdGlvbjogJ2Rlc2MnXHJcbiAgICAgIH0sIHsgYWN0aXZlOiAnJywgdmFsdWVTdGFydDogbnVsbCwgdmFsdWVFbmQ6IG51bGwgfSwgMTUsIHRydWUsIHRydWUpO1xyXG4gIH1cclxuICBvbkZpbHRlclRlbXBsYXRlKCkge1xyXG4gICAgdGhpcy5kYXRhRmlsdGVyZWQgPSB0aGlzLnNlYXJjaFRleHQgIT09ICcnID8gdGhpcy5vbmJvYXJkaW5nLmZpbHRlcigoZCkgPT4gZC5OYW1lLnRvTG93ZXJDYXNlKCkuc2VhcmNoKHRoaXMuc2VhcmNoVGV4dC50b0xvY2FsZUxvd2VyQ2FzZSgpKSA+IC0xKSA6IHRoaXMub25ib2FyZGluZ1xyXG4gICAgdGhpcy5vbkZvcmFtdExpc3QodGhpcy5kYXRhRmlsdGVyZWQpXHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyQ2hhbmdlKCRldmVudCkge1xyXG4gICAgaWYgKCRldmVudC5pbmRleCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRMZW5ndGggPSB0aGlzLm9uYm9hcmRpbmdMaXN0LmRhdGEubGVuZ3RoXHJcbiAgICB9IGVsc2UgaWYgKCRldmVudC5pbmRleCA9PT0gMSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRMZW5ndGggPSB0aGlzLm9uYm9hcmRpbmdGaW5pc2hlZC5kYXRhLmxlbmd0aFxyXG4gICAgfSBlbHNlIGlmICgkZXZlbnQuaW5kZXggPT09IDIpIHtcclxuICAgICAgdGhpcy5jdXJyZW50TGVuZ3RoID0gdGhpcy5vbmJvYXJkaW5nVG9GaW5pc2guZGF0YS5sZW5ndGhcclxuICAgIH1cclxuICAgIGlmICgkZXZlbnQuaW5kZXggIT09IHRoaXMuSGlkZGVuSW5kZXgpIHtcclxuICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5kZXggPSAkZXZlbnQuaW5kZXg7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxyXG4gICAgICAgIFtdLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXHJcbiAgICAgICAgICBxdWVyeVBhcmFtczogeyBwYWdlOiBudWxsLCB0YWI6ICRldmVudC5pbmRleCArIDEgfSxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcclxuICAgICAgICB9KTtcclxuICAgICAgdGhpcy5IaWRkZW5JbmRleCA9ICRldmVudC5pbmRleFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlbkRpYWxvZygpIHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7fVxyXG4gICAgfSk7XHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKGN1cnJlbnQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5jdXJyZW50T25ib2FyZGluZy5uZXh0KGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnNlcnZpY2UubWFpblBhdGggKyBgL3JlcXVlc3RzLyR7Y3VycmVudC5UZW1wbGF0ZUlkfS8wYF0pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBvbkV4cG9ydFRvQ1NWKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGpzb24yY3N2UGFyc2VyID0gbmV3IGpzb24yY3N2LlBhcnNlcih7IG9wdHM6IHt9IH0pO1xyXG4gICAgICBjb25zdCBkYXRhVG9FeHBvcnQgPSB0aGlzLmRhdGFGaWx0ZXJlZC5tYXAoKGQpID0+ICh7XHJcbiAgICAgICAgU3RhdHVzOiBkLlN0YXR1cyxcclxuICAgICAgICBSZXF1ZXN0b3I6IGQucmVxdWVzdG9yLFxyXG4gICAgICAgIE5hbWU6IGQuTmFtZSxcclxuICAgICAgICBUaXRsZTogZC5UaXRsZSxcclxuICAgICAgICBFbWFpbDogZC5FbWFpbCxcclxuICAgICAgICBDcmVhdGlvbkRhdGU6IG1vbWVudChkLmNyZWF0ZWRBdCkuYWRkKCksXHJcbiAgICAgICAgVGVtcGxhdGVOYW1lOiBkLlRlbXBsYXRlTmFtZVxyXG4gICAgICB9KSlcclxuICAgICAgbGV0IGNzdkRhdGEgPSBqc29uMmNzdlBhcnNlci5wYXJzZShkYXRhVG9FeHBvcnQpO1xyXG4gICAgICBsZXQgZmlsZSA9IG5ldyBCbG9iKFtcIlxcdUZFRkZcIiArIGNzdkRhdGFdLCB7XHJcbiAgICAgICAgdHlwZTogJ3RleHQvY3N2OyBjaGFyc2V0PXV0Zi0xOCdcclxuICAgICAgfSk7XHJcbiAgICAgIHNhdmVBcyhmaWxlLCBcIm9uYm9hcmRpbmctcmVxdWVzdC5jc3ZcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtYWluLWFsbC10aWNrZXQtbGlzdCBvbmJvYXJkaW5nLWxpc3QtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRvcFwiPlxyXG4gICAgICAgIDxoMiBzdHlsZT1cIm1hcmdpbjogMDtcIj5cclxuICAgICAgICAgICAgRGVtYW5kZXMgZCdpbnTDqWdyYXRpb25zIHt7b25ib2FyZGluZy5sZW5ndGh9fVxyXG4gICAgICAgICAgICBEZW1hbmRlc1xyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiIGNsYXNzPVwiYWRkLW9uYm9hcmRpbmdcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+XHJcbiAgICAgICAgICAgIE5vdXZlbGxlIGRlbWFuZGUgZOKAmWludMOpZ3JhdGlvbiA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJsaXN0LXRpdGxlXCI+XHJcbiAgICAgICAgPG5neC1maWx0ZXIgW2ZpbHRlckNvbmZpZ109XCJuZ3hGaWx0ZXJEYXRhXCIgbGFuZz1cImZyXCIgKG9uRmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIlxyXG4gICAgICAgICAgICAob25SZWZyZXNoKT1cIm9uUmVmcmVzaCgkZXZlbnQpXCIgW2RhdGFzXT1cIm9uYm9hcmRpbmdcIiBbd2l0aFJlZnJlc2hdPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBhcHBlYXJhbmNlPVwidGV4dFwiIGNsYXNzPVwiZXhwb3J0LXRvLWNzdiByb3VuZGVkIHNlY29uZGFyeSBkb3dubG9hZC1idG4gbXIzMFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25FeHBvcnRUb0NTVigpXCI+XHJcbiAgICAgICAgICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInZG93bmxvYWQnXCIgW3NpemVdPVwiMlwiIGNsYXNzPVwibXI1XCI+PC9uYi1pY29uPlxyXG4gICAgICAgICAgICAgICAgKC5jc3YpXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbmd4LWZpbHRlcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXZpZXctbGlzdC10aWNrZXRcIj5cclxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1yZXN1bHRcIj57e29uYm9hcmRpbmcubGVuZ3RofX0gcsOpc3VsdGF0czwvcD5cclxuICAgICAgICA8IS0tIDxkaXYgKm5nSWY9XCJfbG9hZGluZ190YWJsZSB8fCAhb25ib2FyZGluZ0xpc3RcIiBjbGFzcz1cImJ0LXNwaW5uZXJcIj48L2Rpdj4gLS0+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm9uYm9hcmRpbmdMaXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgW2NsYXNzLnRpY2tldC1saXN0XT1cIiFfbG9hZGluZ190YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpYi1vbmJvYXJkaW5nLXRhYmxlIFtjb2x1bW5EZWZpbml0aW9uc109XCJjb2x1bW5EZWZpbml0aW9uc1wiIFtkYXRhXT1cIm9uYm9hcmRpbmdMaXN0XCIgW2xhbmddPVwibGFuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW2lucHV0U2VhcmNoXT1cImlucHV0U2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICA8L2xpYi1vbmJvYXJkaW5nLXRhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4iXX0=