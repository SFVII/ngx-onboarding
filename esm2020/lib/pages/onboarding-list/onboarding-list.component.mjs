import * as XLSX from 'xlsx';
import { CellsComponentList, CoreMatTable, } from "ngx-table";
import { Component } from '@angular/core';
import { DialogCreateOnboardingComponent } from '../../components/onboarding/dialog-create-onboarding/dialog-create-onboarding.component';
import { filterParse } from '../../utils/utils';
import { locales } from '../../i18n';
import * as i0 from "@angular/core";
import * as i1 from "../../onboarding.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
import * as i7 from "ngx-filter";
import * as i8 from "nowboard-icon";
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
    i0.ɵɵproperty("columnDefinitions", ctx_r0.columnDefinitions)("data", ctx_r0.onboarding)("lang", ctx_r0.lang)("inputSearch", ctx_r0.inputSearch);
} }
// save the file
export class OnboardingListComponent {
    constructor(service, router, route, dialog, datepipe) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.datepipe = datepipe;
        this.inputSearch = '';
        this.currentLength = 0;
        this.currentFilter = 'all';
        this.search = '';
        this.onboardingFormatList = [];
        this.templates = [];
        this.locale = {};
        this.ngxFilterData = [];
        this.ngxFilterInit = "";
        this.columnDefinitions = [];
        this._loading_table = true;
        this.HiddenIndex = 0;
        this.index = 0;
        this.lang = 'fr';
        this.service._lang.subscribe((locale) => {
            this.lang = locale;
            this.locale = locales[locale].REQUEST;
            this.ngxFilterData = [
                {
                    filterData: {
                        type: "select",
                        value: "",
                        key: 'FinishedStatus',
                        label: this.locale.STATUS,
                        options: [
                            {
                                value: 'finished',
                                label: this.locale.FINISHED
                            },
                            {
                                value: 'to-finish',
                                label: this.locale.TO_FINISHED
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
            this.service._templates.subscribe((data) => {
                if (data) {
                    this.templates = data.filter((d) => d.Status);
                    this.ngxFilterData[1].filterData.options = this.templates.map((t) => ({ value: t._id, label: t.Name }));
                    this.ngxFilterInit = JSON.stringify(this.ngxFilterData);
                }
            });
            this.columnDefinitions = [
                {
                    key: 'Name',
                    // subTitle: "date_of_entry",
                    value: this.locale?.COLLABORATOR,
                    // subTitleFormat: "date",
                    order: 1,
                    class: 'w-pmin15',
                    // addClass: 'lastNameClass',
                    // module: CellsComponentList.CustomCell,
                    sort: true,
                },
                {
                    key: 'Id',
                    value: this.locale?.ID,
                    order: 2,
                    class: 'w-pmin5',
                    sort: true,
                },
                {
                    key: 'Title',
                    value: this.locale?.PROFILE,
                    order: 2,
                    class: 'w-pmin10',
                    sort: true,
                },
                {
                    key: 'requestor',
                    value: this.locale?.REQUESTOR,
                    order: 4,
                    class: 'w-pmin15',
                    sort: true,
                },
                {
                    key: 'AccountName',
                    value: this.locale?.SITE,
                    order: 5,
                    class: 'w-pmin20',
                    sort: true,
                },
                {
                    key: 'TemplateName',
                    value: this.locale?.SERVICE,
                    order: 6,
                    class: 'w-pmin10',
                    sort: true,
                },
                {
                    key: 'createdAt',
                    value: this.locale?.CREATION_DATE,
                    order: 7,
                    // module: CellsComponentList.DateFormat,
                    class: 'w-pmin10',
                    sort: true,
                    align: 'left',
                },
                {
                    key: 'Status',
                    value: this.locale?.STATUS,
                    order: 8,
                    addClass: 'CustomClass',
                    class: 'w-pmin10',
                    sort: true,
                    module: CellsComponentList.CustomCell,
                },
                {
                    key: 'Action',
                    value: '',
                    order: 9,
                    class: 'w-pmin5',
                    module: CellsComponentList.ButtonLink,
                    display: this.locale?.DETAIL,
                    override: [`${this.checkOnboardingPath()}`, 'TemplateId', '_id'],
                    align: 'center'
                }
            ];
        });
    }
    cancelSearch() {
        this.inputSearch = '';
    }
    onFilter(event) {
        if (event.datas) {
            this.onForamtList(event.filterConfig, event.searchInput);
        }
    }
    onRefresh(event) {
        this.ngxFilterData = JSON.parse(this.ngxFilterInit);
        this.onForamtList(this.ngxFilterData);
    }
    checkOnboardingPath() {
        return this.service.mainPath.includes('onboarding') ? `${this.service.mainPath}/requests/` : `/onboarding/requests/`;
    }
    async ngOnInit() {
        await this.service.getAllProfil();
        await this.service.getAllOnboarding();
        this.accounts = await this.service.getAccounts();
        this.service.onboarding.subscribe((onboarding) => {
            setTimeout(() => {
                this._loading_table = false;
            }, 2000);
            if (onboarding) {
                this.onboardingList = onboarding.map((row, index) => {
                    const user = row.categories.find((cat) => cat.name === "Utilisateur");
                    const formUser = user.forms.map((form) => ({ key: form.key, value: form.value })).reduce((a, v) => ({ ...a, [v.key]: v.value }), {});
                    row.Finished = !!row.Finished;
                    row.FinishedStatus = !!row.Finished ? 'finished' : 'to-finish';
                    row.Status = row.Finished ? (this.locale === 'fr' ? "Terminée" : 'Finished') : (this.locale === 'fr' ? "A finaliser" : 'To finished');
                    row.CustomClass = row.Finished ? "custom-status finished" : "custom-status to-finish";
                    row.lastNameClass = "last-name";
                    row.requestor = row?.vcontacts[0]?.Name || '';
                    // row.AccountName = row?.vcontacts[0]?.Account.Name || '';
                    row.AccountName = this.findAccount(formUser.AccountName);
                    row.Name = row.ContactName = formUser?.LastName + " " + formUser?.FirstName || "";
                    row.Title = formUser?.Title || "";
                    row.Email = formUser?.Email || '';
                    row.date_of_entry = formUser.date_of_entry ? formUser.date_of_entry : null;
                    row.TemplateName = row?.vtemplates?.length > 0 ? row?.vtemplates[0].Name : '';
                    row.Id = index + 1;
                    row.CreatedDate = row.createdAt;
                    row.createdAt = this.lang === 'fr' ? new Date(row.createdAt).toLocaleDateString("fr-FR") : new Date(row.createdAt).toLocaleDateString("en-GB");
                    return row;
                });
                this.dataFiltered = this.onboardingList;
                this.onForamtList(this.ngxFilterData);
            }
        });
    }
    findAccount(account) {
        const result = this.accounts.find((acc) => acc._id === account);
        if (result)
            return result.Name;
        return account;
    }
    onForamtList(params, inputSearch = '') {
        const filterParams = filterParse(params);
        if (!!inputSearch) {
            filterParams.filterData.inputSearch = inputSearch;
        }
        if (!this.onboarding) {
            this.onboarding = new CoreMatTable(this.onboardingList, {
                active: 'Id', direction: 'desc'
            }, { active: '', valueStart: null, valueEnd: null }, 15, true, true);
        }
        else {
            this.onboarding.setData(this.onboardingList);
        }
        this.onboarding.filter(filterParams?.filterData || {});
        this.onboarding.filterDate(filterParams?.filterDate || {});
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
    onExportToXLSX() {
        try {
            const dataToExport = this.dataFiltered.map((d) => ({
                Status: d.Status,
                Requestor: d.ContactName,
                Name: d.Name,
                Title: d.Title,
                Email: d.Email,
                CreationDate: this.datepipe.transform(d.createdAt, 'dd-MM-yyyy'),
                TemplateName: d.vtemplates?.length ? d.vtemplates[0].Name : '',
                CaseId: d.vtickets?.length ? d.vtickets[0].CaseNumber : ''
            }));
            try {
                const ws = XLSX.utils.json_to_sheet(dataToExport, {});
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, 'onboarding-request');
                XLSX.writeFile(wb, `${'onboarding-request-exported'}.xlsx`);
            }
            catch (error) {
                console.log('error');
            }
        }
        catch (error) {
            console.log('error', error);
        }
    }
}
OnboardingListComponent.ɵfac = function OnboardingListComponent_Factory(t) { return new (t || OnboardingListComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.MatDialog), i0.ɵɵdirectiveInject(i4.DatePipe)); };
OnboardingListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 17, vars: 12, consts: [[1, "main-all-ticket-list", "onboarding-list-container"], [1, "header-top"], [2, "margin", "0"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-onboarding", 3, "click"], [1, "list-title"], ["lang", "fr", 3, "filterConfig", "datas", "withRefresh", "placeholder", "onFilter", "onRefresh"], ["mat-flat-button", "", "appearance", "text", 1, "export-to-csv", "rounded", "secondary", "download-btn", "mr30", 3, "click"], [1, "mr5", 3, "icon", "size"], [1, "content-view-list-ticket"], [1, "header-result"], [4, "ngIf"], [3, "columnDefinitions", "data", "lang", "inputSearch"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "a", 3);
        i0.ɵɵlistener("click", function OnboardingListComponent_Template_a_click_4_listener() { return ctx.openDialog(); });
        i0.ɵɵelementStart(5, "mat-icon");
        i0.ɵɵtext(6, "add");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(8, "div", 4)(9, "ngx-filter", 5);
        i0.ɵɵlistener("onFilter", function OnboardingListComponent_Template_ngx_filter_onFilter_9_listener($event) { return ctx.onFilter($event); })("onRefresh", function OnboardingListComponent_Template_ngx_filter_onRefresh_9_listener($event) { return ctx.onRefresh($event); });
        i0.ɵɵelementStart(10, "button", 6);
        i0.ɵɵlistener("click", function OnboardingListComponent_Template_button_click_10_listener() { return ctx.onExportToXLSX(); });
        i0.ɵɵelement(11, "nb-icon", 7);
        i0.ɵɵtext(12, " (.xlsx) ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(13, "div", 8)(14, "p", 9);
        i0.ɵɵtext(15);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(16, OnboardingListComponent_div_16_Template, 3, 6, "div", 10);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2(" ", ctx.locale == null ? null : ctx.locale.REQUEST_FOR_INTEGRATION, " (", ctx.onboardingList == null ? null : ctx.onboardingList.length, ") ");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", ctx.locale == null ? null : ctx.locale.NEW, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("filterConfig", ctx.ngxFilterData)("datas", ctx.onboarding)("withRefresh", true)("placeholder", ctx.locale == null ? null : ctx.locale.SEARCH);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("icon", "download")("size", 2);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate2("", ctx.onboarding == null ? null : ctx.onboarding.totalElements, " ", ctx.locale == null ? null : ctx.locale.RESULTS, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.onboardingList);
    } }, dependencies: [i5.MatButton, i5.MatAnchor, i4.NgIf, i6.MatIcon, i7.NgxFilterLibraryComponent, i8.NowboardIconComponent, i9.OnboardingTableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:98%}md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{letter-spacing:0px;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{grid-area:2/1/4/3;padding-left:0;padding-right:0}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:999}app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}  .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;letter-spacing:0px;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.ticket-list[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}  .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}  .mat-tab-header .mat-tab-label-active{background:transparent}  .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}  lib-onboarding-table{background-color:red!important}  lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container[_ngcontent-%COMP%]{position:relative;padding:30px;display:flex;flex-direction:column;gap:25px;min-height:100vh}.onboarding-list-container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.onboarding-list-container[_ngcontent-%COMP%]   .title-table[_ngcontent-%COMP%]{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container[_ngcontent-%COMP%]   .add-onboarding[_ngcontent-%COMP%]{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}  .filter-item{display:flex;align-items:center}  .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-item .filter-item-inner{border-radius:50px;padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}  .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}  .right-action{display:flex;align-items:center}.header-result[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;color:#d1dbea;padding:0;margin:0}  ngx-filter{width:100%}  ngx-filter ngx-filter-group ul{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{ selector: 'lib-onboarding-list', template: "<div class=\"main-all-ticket-list onboarding-list-container\">\n    <div class=\"header-top\">\n        <h2 style=\"margin: 0;\">\n            {{locale?.REQUEST_FOR_INTEGRATION}} ({{onboardingList?.length}})\n        </h2>\n        <a role=\"button\" class=\"add-onboarding\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">\n            <mat-icon>add</mat-icon> {{locale?.NEW}}\n        </a>\n    </div>\n    <div class=\"list-title\">\n        <ngx-filter [filterConfig]=\"ngxFilterData\" lang=\"fr\" (onFilter)=\"onFilter($event)\"\n            (onRefresh)=\"onRefresh($event)\" [datas]=\"onboarding\" [withRefresh]=\"true\" [placeholder]=\"locale?.SEARCH\">\n            <button mat-flat-button appearance=\"text\" class=\"export-to-csv rounded secondary download-btn mr30\"\n                (click)=\"onExportToXLSX()\">\n                <nb-icon [icon]=\"'download'\" [size]=\"2\" class=\"mr5\"></nb-icon>\n                (.xlsx)\n            </button>\n        </ngx-filter>\n\n    </div>\n    <div class=\"content-view-list-ticket\">\n        <p class=\"header-result\">{{onboarding?.totalElements}} {{locale?.RESULTS}}</p>\n        <div *ngIf=\"onboardingList\">\n            <div [class.ticket-list]=\"!_loading_table\">\n                <lib-onboarding-table [columnDefinitions]=\"columnDefinitions\" [data]=\"onboarding\" [lang]=\"lang\"\n                    [inputSearch]=\"inputSearch\">\n                </lib-onboarding-table>\n            </div>\n        </div>\n    </div>\n</div>", styles: ["mat-card{display:block;width:98%}md-tooltip.tt-multiline ._md-content{height:auto}md-tooltip ._md-content{height:auto}table{width:100%}.element-detail .inline{display:table;width:90%}.element-detail .inline .block1{display:inline-table;float:left;width:50%;text-align:left}.element-detail .inline .block1 strong{letter-spacing:0px;color:#171f26}.element-detail .inline .block1 p,.element-detail .inline .block1 small{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list .component-title{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list .content-view-list-ticket{grid-area:2/1/4/3;padding-left:0;padding-right:0}.main-all-ticket-list .content-view-list-ticket table{width:100%}.main-all-ticket-list .content-view-list-ticket table thead{position:sticky;top:-1px;z-index:999}app-list-preview{width:100%}::ng-deep .mat-tab-label-active{background:#b6d1cd;opacity:1!important}::ng-deep .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left{color:#171f26;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count{color:#171f26;letter-spacing:0px;text-align:left}.page-title-container{display:flex;margin-right:48px}.page-title{text-align:left;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search{margin-left:auto;position:relative;width:400px}.page-search mat-icon{left:18%;margin-top:10px;position:absolute}.page-search img{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab{padding-left:48px;padding-right:48px}.detail-view-ticket{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search mat-icon{left:16%}}.ticket-list{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list::-webkit-scrollbar{width:5px}.ticket-list::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active,.site-view-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active{background-image:none!important;color:#171f26!important}::ng-deep .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}::ng-deep .mat-tab-header .mat-tab-label-active{background:transparent}::ng-deep .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}::ng-deep lib-onboarding-table{background-color:red!important}::ng-deep lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container{position:relative;padding:30px;display:flex;flex-direction:column;gap:25px;min-height:100vh}.onboarding-list-container .header-top{display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .title-table{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container .add-onboarding{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.onboarding-list-container .list-title ul li{cursor:pointer}.onboarding-list-container .list-title ul li.active{border-bottom:4px solid #3c4252}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}::ng-deep .right-action{display:flex;align-items:center}.header-result{font-style:normal;font-weight:400;font-size:12px;color:#d1dbea;padding:0;margin:0}::ng-deep ngx-filter{width:100%}::ng-deep ngx-filter ngx-filter-group ul{padding:0}\n"] }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.MatDialog }, { type: i4.DatePipe }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBRzdCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEdBQXFELE1BQU0sV0FBVyxDQUFDO0FBQ2hILE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFJbEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFHMUksT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7Ozs7Ozs7OztJQ1U3QiwyQkFBNEIsVUFBQTtJQUVwQiwyQ0FFdUI7SUFDM0IsaUJBQU0sRUFBQTs7O0lBSkQsZUFBcUM7SUFBckMscURBQXFDO0lBQ2hCLGVBQXVDO0lBQXZDLDREQUF1QywyQkFBQSxxQkFBQSxtQ0FBQTs7QURWN0UsZ0JBQWdCO0FBT2hCLE1BQU0sT0FBTyx1QkFBdUI7SUE2QmxDLFlBQ1UsT0FBMEIsRUFDMUIsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLE1BQWlCLEVBQ2xCLFFBQWtCO1FBSmpCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2xC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aUQ7UUFBQSxpQkFBSTtRQUM5RSwyRUFNTTtRQUNWLGlCQUFNLEVBQUE7O1FBMUJFLGVBQ0o7UUFESSxxS0FDSjtRQUU2QixlQUM3QjtRQUQ2QiwyRUFDN0I7UUFHWSxlQUE4QjtRQUE5QixnREFBOEIseUJBQUEscUJBQUEsOERBQUE7UUFJekIsZUFBbUI7UUFBbkIsaUNBQW1CLFdBQUE7UUFPWCxlQUFpRDtRQUFqRCxnSkFBaUQ7UUFDcEUsZUFBb0I7UUFBcEIseUNBQW9COzt1RkREckIsdUJBQXVCO2NBTG5DLFNBQVM7MkJBQ0UscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4JztcblxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDZWxsc0NvbXBvbmVudExpc3QsIENvcmVNYXRUYWJsZSwgQ29yZU1hdFRhYmxlSW50ZXJmYWNlLCBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlLCB9IGZyb20gXCJuZ3gtdGFibGVcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJRmlsdGVyQ29uZmlndXJhdGlvbiwgSVNlbGVjdCB9IGZyb20gJ25neC1maWx0ZXInO1xuXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBmaWx0ZXJQYXJzZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IGxvY2FsZXMgfSBmcm9tICcuLi8uLi9pMThuJztcblxuLy8gc2F2ZSB0aGUgZmlsZVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItb25ib2FyZGluZy1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgb25ib2FyZGluZ0xpc3Q6IGFueVxuICBpbnB1dFNlYXJjaCA9ICcnO1xuICBjdXJyZW50TGVuZ3RoID0gMDtcbiAgY3VycmVudEZpbHRlciA9ICdhbGwnXG4gIHB1YmxpYyBvbmJvYXJkaW5nOiBDb3JlTWF0VGFibGVJbnRlcmZhY2UgfCB1bmRlZmluZWQ7XG4gIGFjY291bnRzOiBhbnk7XG4gIHB1YmxpYyBzZWFyY2g6IHN0cmluZyA9ICcnO1xuICBvbmJvYXJkaW5nRm9ybWF0TGlzdCA9IFtdXG4gIG9uYm9hcmRpbmdGaW5pc2hlZDogYW55XG4gIG9uYm9hcmRpbmdUb0ZpbmlzaDogYW55O1xuICBzaG93U2VhcmNoOiBmYWxzZTtcbiAgdGVtcGxhdGVzID0gW11cblxuICBsb2NhbGU6IGFueSA9IHt9XG4gIG5neEZpbHRlckRhdGE6IElGaWx0ZXJDb25maWd1cmF0aW9uW10gPSBbXVxuICBuZ3hGaWx0ZXJJbml0ID0gXCJcIlxuICBwdWJsaWMgY29sdW1uRGVmaW5pdGlvbnM6IGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VbXSA9IFtdO1xuICBsb2NhbFNlcnZpY2U6IGFueTtcbiAgcHVibGljIF9sb2FkaW5nX3RhYmxlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBIaWRkZW5JbmRleCA9IDA7XG4gIHB1YmxpYyBpbmRleCA9IDA7XG4gIGxhbmcgPSAnZnInO1xuICBkYXRhRmlsdGVyZWQ6IGFueVtdO1xuICBzZWFyY2hUZXh0OiBzdHJpbmc7XG4gIGNhbmNlbFNlYXJjaCgpIHtcbiAgICB0aGlzLmlucHV0U2VhcmNoID0gJyc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwdWJsaWMgZGF0ZXBpcGU6IERhdGVQaXBlXG4gICkge1xuXG4gICAgdGhpcy5zZXJ2aWNlLl9sYW5nLnN1YnNjcmliZSgobG9jYWxlKSA9PiB7XG4gICAgICB0aGlzLmxhbmcgPSBsb2NhbGU7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZXNbbG9jYWxlXS5SRVFVRVNUO1xuICAgICAgdGhpcy5uZ3hGaWx0ZXJEYXRhID0gW1xuICAgICAgICB7XG4gICAgICAgICAgZmlsdGVyRGF0YToge1xuICAgICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcbiAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAga2V5OiAnRmluaXNoZWRTdGF0dXMnLFxuICAgICAgICAgICAgbGFiZWw6IHRoaXMubG9jYWxlLlNUQVRVUyxcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAnZmluaXNoZWQnLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmxvY2FsZS5GSU5JU0hFRFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICd0by1maW5pc2gnLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmxvY2FsZS5UT19GSU5JU0hFRFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWx0ZXJEYXRhOiB7XG4gICAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICBsYWJlbDogJ1NlcnZpY2UnLFxuICAgICAgICAgICAga2V5OiAnVGVtcGxhdGVJZCcsXG4gICAgICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWx0ZXJEYXRhOiB7XG4gICAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgICAgICBrZXk6ICdjcmVhdGVkQXQnLFxuICAgICAgICAgICAgb3BlcmF0b3I6IFwiZ3RlXCIsXG4gICAgICAgICAgICBsYWJlbDogJ0RhdGUgTWluICAnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmlsdGVyRGF0YToge1xuICAgICAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICAgICAga2V5OiAnY3JlYXRlZEF0JyxcbiAgICAgICAgICAgIG9wZXJhdG9yOiBcImx0ZVwiLFxuICAgICAgICAgICAgbGFiZWw6ICdEYXRlIE1heCdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICAgIHRoaXMuc2VydmljZS5fdGVtcGxhdGVzLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIHRoaXMudGVtcGxhdGVzID0gZGF0YS5maWx0ZXIoKGQpID0+IGQuU3RhdHVzKTtcbiAgICAgICAgICAodGhpcy5uZ3hGaWx0ZXJEYXRhWzFdLmZpbHRlckRhdGEgYXMgSVNlbGVjdCkub3B0aW9ucyA9IHRoaXMudGVtcGxhdGVzLm1hcCgodDogYW55KSA9PiAoeyB2YWx1ZTogdC5faWQsIGxhYmVsOiB0Lk5hbWUgfSkpO1xuICAgICAgICAgIHRoaXMubmd4RmlsdGVySW5pdCA9IEpTT04uc3RyaW5naWZ5KHRoaXMubmd4RmlsdGVyRGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5jb2x1bW5EZWZpbml0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ05hbWUnLFxuICAgICAgICAgIC8vIHN1YlRpdGxlOiBcImRhdGVfb2ZfZW50cnlcIixcbiAgICAgICAgICB2YWx1ZTogdGhpcy5sb2NhbGU/LkNPTExBQk9SQVRPUixcbiAgICAgICAgICAvLyBzdWJUaXRsZUZvcm1hdDogXCJkYXRlXCIsXG4gICAgICAgICAgb3JkZXI6IDEsXG4gICAgICAgICAgY2xhc3M6ICd3LXBtaW4xNScsXG4gICAgICAgICAgLy8gYWRkQ2xhc3M6ICdsYXN0TmFtZUNsYXNzJyxcbiAgICAgICAgICAvLyBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5DdXN0b21DZWxsLFxuICAgICAgICAgIHNvcnQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdJZCcsXG4gICAgICAgICAgdmFsdWU6IHRoaXMubG9jYWxlPy5JRCxcbiAgICAgICAgICBvcmRlcjogMixcbiAgICAgICAgICBjbGFzczogJ3ctcG1pbjUnLFxuICAgICAgICAgIHNvcnQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdUaXRsZScsXG4gICAgICAgICAgdmFsdWU6IHRoaXMubG9jYWxlPy5QUk9GSUxFLFxuICAgICAgICAgIG9yZGVyOiAyLFxuICAgICAgICAgIGNsYXNzOiAndy1wbWluMTAnLFxuICAgICAgICAgIHNvcnQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdyZXF1ZXN0b3InLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmxvY2FsZT8uUkVRVUVTVE9SLFxuICAgICAgICAgIG9yZGVyOiA0LFxuICAgICAgICAgIGNsYXNzOiAndy1wbWluMTUnLFxuICAgICAgICAgIHNvcnQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdBY2NvdW50TmFtZScsXG4gICAgICAgICAgdmFsdWU6IHRoaXMubG9jYWxlPy5TSVRFLFxuICAgICAgICAgIG9yZGVyOiA1LFxuICAgICAgICAgIGNsYXNzOiAndy1wbWluMjAnLFxuICAgICAgICAgIHNvcnQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdUZW1wbGF0ZU5hbWUnLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmxvY2FsZT8uU0VSVklDRSxcbiAgICAgICAgICBvcmRlcjogNixcbiAgICAgICAgICBjbGFzczogJ3ctcG1pbjEwJyxcbiAgICAgICAgICBzb3J0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnY3JlYXRlZEF0JyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5sb2NhbGU/LkNSRUFUSU9OX0RBVEUsXG4gICAgICAgICAgb3JkZXI6IDcsXG4gICAgICAgICAgLy8gbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuRGF0ZUZvcm1hdCxcbiAgICAgICAgICBjbGFzczogJ3ctcG1pbjEwJyxcbiAgICAgICAgICBzb3J0OiB0cnVlLFxuICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdTdGF0dXMnLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmxvY2FsZT8uU1RBVFVTLFxuICAgICAgICAgIG9yZGVyOiA4LFxuICAgICAgICAgIGFkZENsYXNzOiAnQ3VzdG9tQ2xhc3MnLFxuICAgICAgICAgIGNsYXNzOiAndy1wbWluMTAnLFxuICAgICAgICAgIHNvcnQ6IHRydWUsXG4gICAgICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuQ3VzdG9tQ2VsbCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ0FjdGlvbicsXG4gICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgIG9yZGVyOiA5LFxuICAgICAgICAgIGNsYXNzOiAndy1wbWluNScsXG4gICAgICAgICAgbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuQnV0dG9uTGluayxcbiAgICAgICAgICBkaXNwbGF5OiB0aGlzLmxvY2FsZT8uREVUQUlMLFxuICAgICAgICAgIG92ZXJyaWRlOiBbYCR7dGhpcy5jaGVja09uYm9hcmRpbmdQYXRoKCl9YCwgJ1RlbXBsYXRlSWQnLCAnX2lkJ10sXG4gICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KVxuICB9XG5cbiAgb25GaWx0ZXIoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZGF0YXMpIHtcbiAgICAgIHRoaXMub25Gb3JhbXRMaXN0KGV2ZW50LmZpbHRlckNvbmZpZywgZXZlbnQuc2VhcmNoSW5wdXQpXG4gICAgfVxuICB9XG4gIG9uUmVmcmVzaChldmVudCkge1xuICAgIHRoaXMubmd4RmlsdGVyRGF0YSA9IEpTT04ucGFyc2UodGhpcy5uZ3hGaWx0ZXJJbml0KTtcbiAgICB0aGlzLm9uRm9yYW10TGlzdCh0aGlzLm5neEZpbHRlckRhdGEpXG4gIH1cblxuICBjaGVja09uYm9hcmRpbmdQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UubWFpblBhdGguaW5jbHVkZXMoJ29uYm9hcmRpbmcnKSA/IGAke3RoaXMuc2VydmljZS5tYWluUGF0aH0vcmVxdWVzdHMvYCA6IGAvb25ib2FyZGluZy9yZXF1ZXN0cy9gXG4gIH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XG4gICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbE9uYm9hcmRpbmcoKTtcbiAgICB0aGlzLmFjY291bnRzID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFjY291bnRzKClcbiAgICB0aGlzLnNlcnZpY2Uub25ib2FyZGluZy5zdWJzY3JpYmUoKG9uYm9hcmRpbmcpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XG4gICAgICB9LCAyMDAwKTtcblxuICAgICAgaWYgKG9uYm9hcmRpbmcpIHtcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nTGlzdCA9IG9uYm9hcmRpbmcubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdXNlciA9IHJvdy5jYXRlZ29yaWVzLmZpbmQoKGNhdCkgPT4gY2F0Lm5hbWUgPT09IFwiVXRpbGlzYXRldXJcIik7XG4gICAgICAgICAgY29uc3QgZm9ybVVzZXIgPSB1c2VyLmZvcm1zLm1hcCgoZm9ybSkgPT4gKHsga2V5OiBmb3JtLmtleSwgdmFsdWU6IGZvcm0udmFsdWUgfSkpLnJlZHVjZSgoYSwgdikgPT4gKHsgLi4uYSwgW3Yua2V5XTogdi52YWx1ZSB9KSwge30pXG4gICAgICAgICAgcm93LkZpbmlzaGVkID0gISFyb3cuRmluaXNoZWRcbiAgICAgICAgICByb3cuRmluaXNoZWRTdGF0dXMgPSAhIXJvdy5GaW5pc2hlZCA/ICdmaW5pc2hlZCcgOiAndG8tZmluaXNoJ1xuICAgICAgICAgIHJvdy5TdGF0dXMgPSByb3cuRmluaXNoZWQgPyAodGhpcy5sb2NhbGUgPT09ICdmcicgPyBcIlRlcm1pbsOpZVwiIDogJ0ZpbmlzaGVkJykgOiAodGhpcy5sb2NhbGUgPT09ICdmcicgPyBcIkEgZmluYWxpc2VyXCIgOiAnVG8gZmluaXNoZWQnKTtcbiAgICAgICAgICByb3cuQ3VzdG9tQ2xhc3MgPSByb3cuRmluaXNoZWQgPyBcImN1c3RvbS1zdGF0dXMgZmluaXNoZWRcIiA6IFwiY3VzdG9tLXN0YXR1cyB0by1maW5pc2hcIjtcbiAgICAgICAgICByb3cubGFzdE5hbWVDbGFzcyA9IFwibGFzdC1uYW1lXCJcbiAgICAgICAgICByb3cucmVxdWVzdG9yID0gcm93Py52Y29udGFjdHNbMF0/Lk5hbWUgfHwgJyc7XG4gICAgICAgICAgLy8gcm93LkFjY291bnROYW1lID0gcm93Py52Y29udGFjdHNbMF0/LkFjY291bnQuTmFtZSB8fCAnJztcbiAgICAgICAgICByb3cuQWNjb3VudE5hbWUgPSB0aGlzLmZpbmRBY2NvdW50KGZvcm1Vc2VyLkFjY291bnROYW1lKTtcbiAgICAgICAgICByb3cuTmFtZSA9IHJvdy5Db250YWN0TmFtZSA9IGZvcm1Vc2VyPy5MYXN0TmFtZSArIFwiIFwiICsgZm9ybVVzZXI/LkZpcnN0TmFtZSB8fCBcIlwiXG4gICAgICAgICAgcm93LlRpdGxlID0gZm9ybVVzZXI/LlRpdGxlIHx8IFwiXCJcbiAgICAgICAgICByb3cuRW1haWwgPSBmb3JtVXNlcj8uRW1haWwgfHwgJyc7XG4gICAgICAgICAgcm93LmRhdGVfb2ZfZW50cnkgPSBmb3JtVXNlci5kYXRlX29mX2VudHJ5ID8gZm9ybVVzZXIuZGF0ZV9vZl9lbnRyeSA6IG51bGxcbiAgICAgICAgICByb3cuVGVtcGxhdGVOYW1lID0gcm93Py52dGVtcGxhdGVzPy5sZW5ndGggPiAwID8gcm93Py52dGVtcGxhdGVzWzBdLk5hbWUgOiAnJztcbiAgICAgICAgICByb3cuSWQgPSBpbmRleCArIDE7XG4gICAgICAgICAgcm93LkNyZWF0ZWREYXRlID0gcm93LmNyZWF0ZWRBdDtcbiAgICAgICAgICByb3cuY3JlYXRlZEF0ID0gdGhpcy5sYW5nID09PSAnZnInID8gbmV3IERhdGUocm93LmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIikgOiBuZXcgRGF0ZShyb3cuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1HQlwiKVxuICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZGF0YUZpbHRlcmVkID0gdGhpcy5vbmJvYXJkaW5nTGlzdDtcbiAgICAgICAgdGhpcy5vbkZvcmFtdExpc3QodGhpcy5uZ3hGaWx0ZXJEYXRhKVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4gIGZpbmRBY2NvdW50KGFjY291bnQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmFjY291bnRzLmZpbmQoKGFjYykgPT4gYWNjLl9pZCA9PT0gYWNjb3VudCk7XG4gICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdC5OYW1lO1xuICAgIHJldHVybiBhY2NvdW50XG4gIH1cbiAgb25Gb3JhbXRMaXN0KHBhcmFtcywgaW5wdXRTZWFyY2ggPSAnJykge1xuICAgIGNvbnN0IGZpbHRlclBhcmFtcyA9IGZpbHRlclBhcnNlKHBhcmFtcyk7XG4gICAgaWYgKCEhaW5wdXRTZWFyY2gpIHtcbiAgICAgIGZpbHRlclBhcmFtcy5maWx0ZXJEYXRhLmlucHV0U2VhcmNoID0gaW5wdXRTZWFyY2hcbiAgICB9XG4gICAgaWYgKCF0aGlzLm9uYm9hcmRpbmcpIHtcbiAgICAgIHRoaXMub25ib2FyZGluZyA9IG5ldyBDb3JlTWF0VGFibGUodGhpcy5vbmJvYXJkaW5nTGlzdCxcbiAgICAgICAge1xuICAgICAgICAgIGFjdGl2ZTogJ0lkJywgZGlyZWN0aW9uOiAnZGVzYydcbiAgICAgICAgfSwgeyBhY3RpdmU6ICcnLCB2YWx1ZVN0YXJ0OiBudWxsLCB2YWx1ZUVuZDogbnVsbCB9LCAxNSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25ib2FyZGluZy5zZXREYXRhKHRoaXMub25ib2FyZGluZ0xpc3QpXG4gICAgfVxuICAgIHRoaXMub25ib2FyZGluZy5maWx0ZXIoZmlsdGVyUGFyYW1zPy5maWx0ZXJEYXRhIHx8IHt9KVxuICAgIHRoaXMub25ib2FyZGluZy5maWx0ZXJEYXRlKGZpbHRlclBhcmFtcz8uZmlsdGVyRGF0ZSB8fCB7fSlcbiAgfVxuXG5cbiAgb3BlbkRpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0NyZWF0ZU9uYm9hcmRpbmdDb21wb25lbnQsIHtcbiAgICAgIGRhdGE6IHt9XG4gICAgfSk7XG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChjdXJyZW50OiBhbnkpID0+IHtcbiAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5jdXJyZW50T25ib2FyZGluZy5uZXh0KGN1cnJlbnQpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5zZXJ2aWNlLm1haW5QYXRoICsgYC9yZXF1ZXN0cy8ke2N1cnJlbnQuVGVtcGxhdGVJZH0vMGBdKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG9uRXhwb3J0VG9YTFNYKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhVG9FeHBvcnQgPSB0aGlzLmRhdGFGaWx0ZXJlZC5tYXAoKGQpID0+ICh7XG4gICAgICAgIFN0YXR1czogZC5TdGF0dXMsXG4gICAgICAgIFJlcXVlc3RvcjogZC5Db250YWN0TmFtZSxcbiAgICAgICAgTmFtZTogZC5OYW1lLFxuICAgICAgICBUaXRsZTogZC5UaXRsZSxcbiAgICAgICAgRW1haWw6IGQuRW1haWwsXG4gICAgICAgIENyZWF0aW9uRGF0ZTogdGhpcy5kYXRlcGlwZS50cmFuc2Zvcm0oZC5jcmVhdGVkQXQsICdkZC1NTS15eXl5JyksXG4gICAgICAgIFRlbXBsYXRlTmFtZTogZC52dGVtcGxhdGVzPy5sZW5ndGggPyBkLnZ0ZW1wbGF0ZXNbMF0uTmFtZSA6ICcnLFxuICAgICAgICBDYXNlSWQ6IGQudnRpY2tldHM/Lmxlbmd0aCA/IGQudnRpY2tldHNbMF0uQ2FzZU51bWJlciA6ICcnXG4gICAgICB9KSlcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHdzID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KGRhdGFUb0V4cG9ydCwge30pO1xuICAgICAgICBjb25zdCB3YiA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcbiAgICAgICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldCh3Yiwgd3MsICdvbmJvYXJkaW5nLXJlcXVlc3QnKTtcbiAgICAgICAgWExTWC53cml0ZUZpbGUod2IsIGAkeydvbmJvYXJkaW5nLXJlcXVlc3QtZXhwb3J0ZWQnfS54bHN4YCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm1haW4tYWxsLXRpY2tldC1saXN0IG9uYm9hcmRpbmctbGlzdC1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRvcFwiPlxuICAgICAgICA8aDIgc3R5bGU9XCJtYXJnaW46IDA7XCI+XG4gICAgICAgICAgICB7e2xvY2FsZT8uUkVRVUVTVF9GT1JfSU5URUdSQVRJT059fSAoe3tvbmJvYXJkaW5nTGlzdD8ubGVuZ3RofX0pXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImFkZC1vbmJvYXJkaW5nXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPlxuICAgICAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+IHt7bG9jYWxlPy5ORVd9fVxuICAgICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImxpc3QtdGl0bGVcIj5cbiAgICAgICAgPG5neC1maWx0ZXIgW2ZpbHRlckNvbmZpZ109XCJuZ3hGaWx0ZXJEYXRhXCIgbGFuZz1cImZyXCIgKG9uRmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIlxuICAgICAgICAgICAgKG9uUmVmcmVzaCk9XCJvblJlZnJlc2goJGV2ZW50KVwiIFtkYXRhc109XCJvbmJvYXJkaW5nXCIgW3dpdGhSZWZyZXNoXT1cInRydWVcIiBbcGxhY2Vob2xkZXJdPVwibG9jYWxlPy5TRUFSQ0hcIj5cbiAgICAgICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGFwcGVhcmFuY2U9XCJ0ZXh0XCIgY2xhc3M9XCJleHBvcnQtdG8tY3N2IHJvdW5kZWQgc2Vjb25kYXJ5IGRvd25sb2FkLWJ0biBtcjMwXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25FeHBvcnRUb1hMU1goKVwiPlxuICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidkb3dubG9hZCdcIiBbc2l6ZV09XCIyXCIgY2xhc3M9XCJtcjVcIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAgKC54bHN4KVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbmd4LWZpbHRlcj5cblxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXZpZXctbGlzdC10aWNrZXRcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcmVzdWx0XCI+e3tvbmJvYXJkaW5nPy50b3RhbEVsZW1lbnRzfX0ge3tsb2NhbGU/LlJFU1VMVFN9fTwvcD5cbiAgICAgICAgPGRpdiAqbmdJZj1cIm9uYm9hcmRpbmdMaXN0XCI+XG4gICAgICAgICAgICA8ZGl2IFtjbGFzcy50aWNrZXQtbGlzdF09XCIhX2xvYWRpbmdfdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8bGliLW9uYm9hcmRpbmctdGFibGUgW2NvbHVtbkRlZmluaXRpb25zXT1cImNvbHVtbkRlZmluaXRpb25zXCIgW2RhdGFdPVwib25ib2FyZGluZ1wiIFtsYW5nXT1cImxhbmdcIlxuICAgICAgICAgICAgICAgICAgICBbaW5wdXRTZWFyY2hdPVwiaW5wdXRTZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8L2xpYi1vbmJvYXJkaW5nLXRhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19