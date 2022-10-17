import * as XLSX from 'xlsx';
import { CellsComponentList, } from "ngx-table";
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
function OnboardingListComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "lib-onboarding-table", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("columnDefinitions", ctx_r0.columnDefinitions)("data", ctx_r0.onboardingList)("filterParamsResult", ctx_r0.filterParamsResult)("lang", ctx_r0.lang)("searchInput", ctx_r0.searchInput)("locale", ctx_r0.locale);
} }
// save the file
export class OnboardingListComponent {
    constructor(service, router, route, dialog, datepipe) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.datepipe = datepipe;
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
        this.filterParamsResult = {};
        this.searchInput = "";
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
                    class: 'w-pmin15',
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
                    class: 'w-pmin10',
                    module: CellsComponentList.ButtonLink,
                    display: this.locale?.DETAIL,
                    override: [`${this.checkOnboardingPath()}`, 'TemplateId', '_id'],
                    align: 'center'
                }
            ];
        });
    }
    onFilter(event) {
        this.filterParamsResult = filterParse(event.filterConfig);
        this.searchInput = event?.searchInput || '';
    }
    onRefresh(event) {
        this.ngxFilterData = JSON.parse(this.ngxFilterInit);
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
            }
        });
    }
    findAccount(account) {
        const result = this.accounts.find((acc) => acc._id === account);
        if (result)
            return result.Name;
        return account;
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
            const dataToExport = this.onboardingList.map((d) => ({
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
OnboardingListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 15, vars: 10, consts: [[1, "main-all-ticket-list", "onboarding-list-container"], [1, "header-top"], [2, "margin", "0"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-onboarding", 3, "click"], [1, "list-title"], ["lang", "fr", 3, "filterConfig", "datas", "withRefresh", "placeholder", "onFilter", "onRefresh"], ["mat-flat-button", "", "appearance", "text", 1, "export-to-csv", "rounded", "secondary", "download-btn", "mr30", 3, "click"], [1, "mr5", 3, "icon", "size"], [1, "content-view-list-ticket"], [4, "ngIf"], [3, "columnDefinitions", "data", "filterParamsResult", "lang", "searchInput", "locale"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(13, "div", 8);
        i0.ɵɵtemplate(14, OnboardingListComponent_div_14_Template, 2, 6, "div", 9);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2(" ", ctx.locale == null ? null : ctx.locale.REQUEST_FOR_INTEGRATION, " (", ctx.onboardingList == null ? null : ctx.onboardingList.length, ") ");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", ctx.locale == null ? null : ctx.locale.NEW, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("filterConfig", ctx.ngxFilterData)("datas", ctx.onboardingList)("withRefresh", true)("placeholder", ctx.locale == null ? null : ctx.locale.SEARCH);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("icon", "download")("size", 2);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.onboardingList);
    } }, dependencies: [i5.MatButton, i5.MatAnchor, i4.NgIf, i6.MatIcon, i7.NgxFilterLibraryComponent, i8.NowboardIconComponent, i9.OnboardingTableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:98%}md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{letter-spacing:0px;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{grid-area:2/1/4/3;padding-left:0;padding-right:0}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:999}app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}  .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;letter-spacing:0px;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.ticket-list[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}  .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}  .mat-tab-header .mat-tab-label-active{background:transparent}  .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}  lib-onboarding-table{background-color:red!important}  lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container[_ngcontent-%COMP%]{position:relative;padding:30px;display:flex;flex-direction:column;gap:25px;min-height:100vh}.onboarding-list-container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.onboarding-list-container[_ngcontent-%COMP%]   .title-table[_ngcontent-%COMP%]{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container[_ngcontent-%COMP%]   .add-onboarding[_ngcontent-%COMP%]{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}  .filter-item{display:flex;align-items:center}  .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-item .filter-item-inner{border-radius:50px;padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}  .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}  .right-action{display:flex;align-items:center}.header-result[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;color:#d1dbea;padding:0;margin:0}  ngx-filter{width:100%}  ngx-filter ngx-filter-group ul{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{ selector: 'lib-onboarding-list', template: "<div class=\"main-all-ticket-list onboarding-list-container\">\r\n    <div class=\"header-top\">\r\n        <h2 style=\"margin: 0;\">\r\n            {{locale?.REQUEST_FOR_INTEGRATION}} ({{onboardingList?.length}})\r\n        </h2>\r\n        <a role=\"button\" class=\"add-onboarding\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">\r\n            <mat-icon>add</mat-icon> {{locale?.NEW}}\r\n        </a>\r\n    </div>\r\n    <div class=\"list-title\">\r\n        <ngx-filter [filterConfig]=\"ngxFilterData\" lang=\"fr\" (onFilter)=\"onFilter($event)\"\r\n            (onRefresh)=\"onRefresh($event)\" [datas]=\"onboardingList\" [withRefresh]=\"true\"\r\n            [placeholder]=\"locale?.SEARCH\">\r\n            <button mat-flat-button appearance=\"text\" class=\"export-to-csv rounded secondary download-btn mr30\"\r\n                (click)=\"onExportToXLSX()\">\r\n                <nb-icon [icon]=\"'download'\" [size]=\"2\" class=\"mr5\"></nb-icon>\r\n                (.xlsx)\r\n            </button>\r\n        </ngx-filter>\r\n\r\n    </div>\r\n    <div class=\"content-view-list-ticket\">\r\n\r\n        <div *ngIf=\"onboardingList\">\r\n            <lib-onboarding-table [columnDefinitions]=\"columnDefinitions\" [data]=\"onboardingList\"\r\n                [filterParamsResult]=\"filterParamsResult\" [lang]=\"lang\" [searchInput]=\"searchInput\" [locale]=\"locale\">\r\n            </lib-onboarding-table>\r\n        </div>\r\n    </div>\r\n</div>", styles: ["mat-card{display:block;width:98%}md-tooltip.tt-multiline ._md-content{height:auto}md-tooltip ._md-content{height:auto}table{width:100%}.element-detail .inline{display:table;width:90%}.element-detail .inline .block1{display:inline-table;float:left;width:50%;text-align:left}.element-detail .inline .block1 strong{letter-spacing:0px;color:#171f26}.element-detail .inline .block1 p,.element-detail .inline .block1 small{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list .component-title{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list .content-view-list-ticket{grid-area:2/1/4/3;padding-left:0;padding-right:0}.main-all-ticket-list .content-view-list-ticket table{width:100%}.main-all-ticket-list .content-view-list-ticket table thead{position:sticky;top:-1px;z-index:999}app-list-preview{width:100%}::ng-deep .mat-tab-label-active{background:#b6d1cd;opacity:1!important}::ng-deep .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left{color:#171f26;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count{color:#171f26;letter-spacing:0px;text-align:left}.page-title-container{display:flex;margin-right:48px}.page-title{text-align:left;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search{margin-left:auto;position:relative;width:400px}.page-search mat-icon{left:18%;margin-top:10px;position:absolute}.page-search img{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab{padding-left:48px;padding-right:48px}.detail-view-ticket{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search mat-icon{left:16%}}.ticket-list{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list::-webkit-scrollbar{width:5px}.ticket-list::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active,.site-view-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active{background-image:none!important;color:#171f26!important}::ng-deep .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}::ng-deep .mat-tab-header .mat-tab-label-active{background:transparent}::ng-deep .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}::ng-deep lib-onboarding-table{background-color:red!important}::ng-deep lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container{position:relative;padding:30px;display:flex;flex-direction:column;gap:25px;min-height:100vh}.onboarding-list-container .header-top{display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .title-table{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container .add-onboarding{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.onboarding-list-container .list-title ul li{cursor:pointer}.onboarding-list-container .list-title ul li.active{border-bottom:4px solid #3c4252}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}::ng-deep .right-action{display:flex;align-items:center}.header-result{font-style:normal;font-weight:400;font-size:12px;color:#d1dbea;padding:0;margin:0}::ng-deep ngx-filter{width:100%}::ng-deep ngx-filter ngx-filter-group ul{padding:0}\n"] }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.MatDialog }, { type: i4.DatePipe }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBRzdCLE9BQU8sRUFBRSxrQkFBa0IsR0FBOEIsTUFBTSxXQUFXLENBQUM7QUFDM0UsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUlsRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx5RkFBeUYsQ0FBQztBQUcxSSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7O0lDVzdCLDJCQUE0QjtJQUN4QiwyQ0FFdUI7SUFDM0IsaUJBQU07OztJQUhvQixlQUF1QztJQUF2Qyw0REFBdUMsK0JBQUEsaURBQUEscUJBQUEsbUNBQUEseUJBQUE7O0FEVnpFLGdCQUFnQjtBQU9oQixNQUFNLE9BQU8sdUJBQXVCO0lBeUJsQyxZQUNVLE9BQTBCLEVBQzFCLE1BQWMsRUFDZCxLQUFxQixFQUNyQixNQUFpQixFQUNsQixRQUFrQjtRQUpqQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBNUIzQixrQkFB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SjtRQUFBLGlCQUFTLEVBQUEsRUFBQTtRQUlqQiwrQkFBc0M7UUFFbEMsMEVBSU07UUFDVixpQkFBTSxFQUFBOztRQXpCRSxlQUNKO1FBREkscUtBQ0o7UUFFNkIsZUFDN0I7UUFENkIsMkVBQzdCO1FBR1ksZUFBOEI7UUFBOUIsZ0RBQThCLDZCQUFBLHFCQUFBLDhEQUFBO1FBS3pCLGVBQW1CO1FBQW5CLGlDQUFtQixXQUFBO1FBUTlCLGVBQW9CO1FBQXBCLHlDQUFvQjs7dUZERnJCLHVCQUF1QjtjQUxuQyxTQUFTOzJCQUNFLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCc7XHJcblxyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2VsbHNDb21wb25lbnRMaXN0LCBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlLCB9IGZyb20gXCJuZ3gtdGFibGVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUZpbHRlckNvbmZpZ3VyYXRpb24sIElTZWxlY3QgfSBmcm9tICduZ3gtZmlsdGVyJztcclxuXHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcvZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZmlsdGVyUGFyc2UgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IGxvY2FsZXMgfSBmcm9tICcuLi8uLi9pMThuJztcclxuXHJcbi8vIHNhdmUgdGhlIGZpbGVcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLW9uYm9hcmRpbmctbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBvbmJvYXJkaW5nTGlzdDogYW55XHJcbiAgY3VycmVudExlbmd0aCA9IDA7XHJcbiAgY3VycmVudEZpbHRlciA9ICdhbGwnXHJcbiAgYWNjb3VudHM6IGFueTtcclxuICBwdWJsaWMgc2VhcmNoOiBzdHJpbmcgPSAnJztcclxuICBvbmJvYXJkaW5nRm9ybWF0TGlzdCA9IFtdXHJcbiAgb25ib2FyZGluZ0ZpbmlzaGVkOiBhbnlcclxuICBvbmJvYXJkaW5nVG9GaW5pc2g6IGFueTtcclxuICBzaG93U2VhcmNoOiBmYWxzZTtcclxuICB0ZW1wbGF0ZXMgPSBbXVxyXG5cclxuICBsb2NhbGU6IGFueSA9IHt9XHJcbiAgbmd4RmlsdGVyRGF0YTogSUZpbHRlckNvbmZpZ3VyYXRpb25bXSA9IFtdXHJcbiAgbmd4RmlsdGVySW5pdCA9IFwiXCJcclxuICBwdWJsaWMgY29sdW1uRGVmaW5pdGlvbnM6IGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VbXSA9IFtdO1xyXG4gIGxvY2FsU2VydmljZTogYW55O1xyXG4gIHB1YmxpYyBfbG9hZGluZ190YWJsZSA9IHRydWU7XHJcbiAgcHJpdmF0ZSBIaWRkZW5JbmRleCA9IDA7XHJcbiAgcHVibGljIGluZGV4ID0gMDtcclxuICBsYW5nID0gJ2ZyJztcclxuICBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcblxyXG4gIGZpbHRlclBhcmFtc1Jlc3VsdCA9IHt9XHJcbiAgc2VhcmNoSW5wdXQgPSBcIlwiXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgIHB1YmxpYyBkYXRlcGlwZTogRGF0ZVBpcGVcclxuICApIHtcclxuXHJcbiAgICB0aGlzLnNlcnZpY2UuX2xhbmcuc3Vic2NyaWJlKChsb2NhbGUpID0+IHtcclxuICAgICAgdGhpcy5sYW5nID0gbG9jYWxlO1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZXNbbG9jYWxlXS5SRVFVRVNUO1xyXG4gICAgICB0aGlzLm5neEZpbHRlckRhdGEgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmlsdGVyRGF0YToge1xyXG4gICAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAga2V5OiAnRmluaXNoZWRTdGF0dXMnLFxyXG4gICAgICAgICAgICBsYWJlbDogdGhpcy5sb2NhbGUuU1RBVFVTLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdmaW5pc2hlZCcsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5sb2NhbGUuRklOSVNIRURcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAndG8tZmluaXNoJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmxvY2FsZS5UT19GSU5JU0hFRFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaWx0ZXJEYXRhOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICBsYWJlbDogJ1NlcnZpY2UnLFxyXG4gICAgICAgICAgICBrZXk6ICdUZW1wbGF0ZUlkJyxcclxuICAgICAgICAgICAgb3B0aW9uczogW10sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaWx0ZXJEYXRhOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlJyxcclxuICAgICAgICAgICAga2V5OiAnY3JlYXRlZEF0JyxcclxuICAgICAgICAgICAgb3BlcmF0b3I6IFwiZ3RlXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnRGF0ZSBNaW4gICdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpbHRlckRhdGE6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2RhdGUnLFxyXG4gICAgICAgICAgICBrZXk6ICdjcmVhdGVkQXQnLFxyXG4gICAgICAgICAgICBvcGVyYXRvcjogXCJsdGVcIixcclxuICAgICAgICAgICAgbGFiZWw6ICdEYXRlIE1heCdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgICAgdGhpcy5zZXJ2aWNlLl90ZW1wbGF0ZXMuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgIHRoaXMudGVtcGxhdGVzID0gZGF0YS5maWx0ZXIoKGQpID0+IGQuU3RhdHVzKTtcclxuICAgICAgICAgICh0aGlzLm5neEZpbHRlckRhdGFbMV0uZmlsdGVyRGF0YSBhcyBJU2VsZWN0KS5vcHRpb25zID0gdGhpcy50ZW1wbGF0ZXMubWFwKCh0OiBhbnkpID0+ICh7IHZhbHVlOiB0Ll9pZCwgbGFiZWw6IHQuTmFtZSB9KSk7XHJcbiAgICAgICAgICB0aGlzLm5neEZpbHRlckluaXQgPSBKU09OLnN0cmluZ2lmeSh0aGlzLm5neEZpbHRlckRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY29sdW1uRGVmaW5pdGlvbnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAga2V5OiAnTmFtZScsXHJcbiAgICAgICAgICAvLyBzdWJUaXRsZTogXCJkYXRlX29mX2VudHJ5XCIsXHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5sb2NhbGU/LkNPTExBQk9SQVRPUixcclxuICAgICAgICAgIC8vIHN1YlRpdGxlRm9ybWF0OiBcImRhdGVcIixcclxuICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgY2xhc3M6ICd3LXBtaW4xNScsXHJcbiAgICAgICAgICAvLyBhZGRDbGFzczogJ2xhc3ROYW1lQ2xhc3MnLFxyXG4gICAgICAgICAgLy8gbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuQ3VzdG9tQ2VsbCxcclxuICAgICAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBrZXk6ICdJZCcsXHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5sb2NhbGU/LklELFxyXG4gICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICBjbGFzczogJ3ctcG1pbjUnLFxyXG4gICAgICAgICAgc29ydDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGtleTogJ1RpdGxlJyxcclxuICAgICAgICAgIHZhbHVlOiB0aGlzLmxvY2FsZT8uUFJPRklMRSxcclxuICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgY2xhc3M6ICd3LXBtaW4xMCcsXHJcbiAgICAgICAgICBzb3J0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAga2V5OiAncmVxdWVzdG9yJyxcclxuICAgICAgICAgIHZhbHVlOiB0aGlzLmxvY2FsZT8uUkVRVUVTVE9SLFxyXG4gICAgICAgICAgb3JkZXI6IDQsXHJcbiAgICAgICAgICBjbGFzczogJ3ctcG1pbjE1JyxcclxuICAgICAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBrZXk6ICdBY2NvdW50TmFtZScsXHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5sb2NhbGU/LlNJVEUsXHJcbiAgICAgICAgICBvcmRlcjogNSxcclxuICAgICAgICAgIGNsYXNzOiAndy1wbWluMTUnLFxyXG4gICAgICAgICAgc29ydDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGtleTogJ1RlbXBsYXRlTmFtZScsXHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5sb2NhbGU/LlNFUlZJQ0UsXHJcbiAgICAgICAgICBvcmRlcjogNixcclxuICAgICAgICAgIGNsYXNzOiAndy1wbWluMTAnLFxyXG4gICAgICAgICAgc29ydDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGtleTogJ2NyZWF0ZWRBdCcsXHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5sb2NhbGU/LkNSRUFUSU9OX0RBVEUsXHJcbiAgICAgICAgICBvcmRlcjogNyxcclxuICAgICAgICAgIC8vIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkRhdGVGb3JtYXQsXHJcbiAgICAgICAgICBjbGFzczogJ3ctcG1pbjEwJyxcclxuICAgICAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAga2V5OiAnU3RhdHVzJyxcclxuICAgICAgICAgIHZhbHVlOiB0aGlzLmxvY2FsZT8uU1RBVFVTLFxyXG4gICAgICAgICAgb3JkZXI6IDgsXHJcbiAgICAgICAgICBhZGRDbGFzczogJ0N1c3RvbUNsYXNzJyxcclxuICAgICAgICAgIGNsYXNzOiAndy1wbWluMTAnLFxyXG4gICAgICAgICAgc29ydDogdHJ1ZSxcclxuICAgICAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkN1c3RvbUNlbGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBrZXk6ICdBY3Rpb24nLFxyXG4gICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgb3JkZXI6IDksXHJcbiAgICAgICAgICBjbGFzczogJ3ctcG1pbjEwJyxcclxuICAgICAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkJ1dHRvbkxpbmssXHJcbiAgICAgICAgICBkaXNwbGF5OiB0aGlzLmxvY2FsZT8uREVUQUlMLFxyXG4gICAgICAgICAgb3ZlcnJpZGU6IFtgJHt0aGlzLmNoZWNrT25ib2FyZGluZ1BhdGgoKX1gLCAnVGVtcGxhdGVJZCcsICdfaWQnXSxcclxuICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uRmlsdGVyKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuZmlsdGVyUGFyYW1zUmVzdWx0ID0gZmlsdGVyUGFyc2UoZXZlbnQuZmlsdGVyQ29uZmlnKVxyXG4gICAgdGhpcy5zZWFyY2hJbnB1dCA9IGV2ZW50Py5zZWFyY2hJbnB1dCB8fCAnJ1xyXG4gIH1cclxuICBvblJlZnJlc2goZXZlbnQpIHtcclxuICAgIHRoaXMubmd4RmlsdGVyRGF0YSA9IEpTT04ucGFyc2UodGhpcy5uZ3hGaWx0ZXJJbml0KTtcclxuICB9XHJcblxyXG4gIGNoZWNrT25ib2FyZGluZ1BhdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLm1haW5QYXRoLmluY2x1ZGVzKCdvbmJvYXJkaW5nJykgPyBgJHt0aGlzLnNlcnZpY2UubWFpblBhdGh9L3JlcXVlc3RzL2AgOiBgL29uYm9hcmRpbmcvcmVxdWVzdHMvYFxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XHJcbiAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsT25ib2FyZGluZygpO1xyXG4gICAgdGhpcy5hY2NvdW50cyA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRBY2NvdW50cygpXHJcbiAgICB0aGlzLnNlcnZpY2Uub25ib2FyZGluZy5zdWJzY3JpYmUoKG9uYm9hcmRpbmcpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IGZhbHNlO1xyXG4gICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICAgIGlmIChvbmJvYXJkaW5nKSB7XHJcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nTGlzdCA9IG9uYm9hcmRpbmcubWFwKChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gcm93LmNhdGVnb3JpZXMuZmluZCgoY2F0KSA9PiBjYXQubmFtZSA9PT0gXCJVdGlsaXNhdGV1clwiKTtcclxuICAgICAgICAgIGNvbnN0IGZvcm1Vc2VyID0gdXNlci5mb3Jtcy5tYXAoKGZvcm0pID0+ICh7IGtleTogZm9ybS5rZXksIHZhbHVlOiBmb3JtLnZhbHVlIH0pKS5yZWR1Y2UoKGEsIHYpID0+ICh7IC4uLmEsIFt2LmtleV06IHYudmFsdWUgfSksIHt9KVxyXG4gICAgICAgICAgcm93LkZpbmlzaGVkID0gISFyb3cuRmluaXNoZWRcclxuICAgICAgICAgIHJvdy5GaW5pc2hlZFN0YXR1cyA9ICEhcm93LkZpbmlzaGVkID8gJ2ZpbmlzaGVkJyA6ICd0by1maW5pc2gnXHJcbiAgICAgICAgICByb3cuU3RhdHVzID0gcm93LkZpbmlzaGVkID8gKHRoaXMubG9jYWxlID09PSAnZnInID8gXCJUZXJtaW7DqWVcIiA6ICdGaW5pc2hlZCcpIDogKHRoaXMubG9jYWxlID09PSAnZnInID8gXCJBIGZpbmFsaXNlclwiIDogJ1RvIGZpbmlzaGVkJyk7XHJcbiAgICAgICAgICByb3cuQ3VzdG9tQ2xhc3MgPSByb3cuRmluaXNoZWQgPyBcImN1c3RvbS1zdGF0dXMgZmluaXNoZWRcIiA6IFwiY3VzdG9tLXN0YXR1cyB0by1maW5pc2hcIjtcclxuICAgICAgICAgIHJvdy5sYXN0TmFtZUNsYXNzID0gXCJsYXN0LW5hbWVcIlxyXG4gICAgICAgICAgcm93LnJlcXVlc3RvciA9IHJvdz8udmNvbnRhY3RzWzBdPy5OYW1lIHx8ICcnO1xyXG4gICAgICAgICAgLy8gcm93LkFjY291bnROYW1lID0gcm93Py52Y29udGFjdHNbMF0/LkFjY291bnQuTmFtZSB8fCAnJztcclxuICAgICAgICAgIHJvdy5BY2NvdW50TmFtZSA9IHRoaXMuZmluZEFjY291bnQoZm9ybVVzZXIuQWNjb3VudE5hbWUpO1xyXG4gICAgICAgICAgcm93Lk5hbWUgPSByb3cuQ29udGFjdE5hbWUgPSBmb3JtVXNlcj8uTGFzdE5hbWUgKyBcIiBcIiArIGZvcm1Vc2VyPy5GaXJzdE5hbWUgfHwgXCJcIlxyXG4gICAgICAgICAgcm93LlRpdGxlID0gZm9ybVVzZXI/LlRpdGxlIHx8IFwiXCJcclxuICAgICAgICAgIHJvdy5FbWFpbCA9IGZvcm1Vc2VyPy5FbWFpbCB8fCAnJztcclxuICAgICAgICAgIHJvdy5kYXRlX29mX2VudHJ5ID0gZm9ybVVzZXIuZGF0ZV9vZl9lbnRyeSA/IGZvcm1Vc2VyLmRhdGVfb2ZfZW50cnkgOiBudWxsXHJcbiAgICAgICAgICByb3cuVGVtcGxhdGVOYW1lID0gcm93Py52dGVtcGxhdGVzPy5sZW5ndGggPiAwID8gcm93Py52dGVtcGxhdGVzWzBdLk5hbWUgOiAnJztcclxuICAgICAgICAgIHJvdy5JZCA9IGluZGV4ICsgMTtcclxuICAgICAgICAgIHJvdy5DcmVhdGVkRGF0ZSA9IHJvdy5jcmVhdGVkQXQ7XHJcbiAgICAgICAgICByb3cuY3JlYXRlZEF0ID0gdGhpcy5sYW5nID09PSAnZnInID8gbmV3IERhdGUocm93LmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIikgOiBuZXcgRGF0ZShyb3cuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1HQlwiKVxyXG4gICAgICAgICAgcmV0dXJuIHJvdztcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG4gIGZpbmRBY2NvdW50KGFjY291bnQpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuYWNjb3VudHMuZmluZCgoYWNjKSA9PiBhY2MuX2lkID09PSBhY2NvdW50KTtcclxuICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQuTmFtZTtcclxuICAgIHJldHVybiBhY2NvdW50XHJcbiAgfVxyXG5cclxuICBvcGVuRGlhbG9nKCkge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHt9XHJcbiAgICB9KTtcclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoY3VycmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChjdXJyZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmN1cnJlbnRPbmJvYXJkaW5nLm5leHQoY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuc2VydmljZS5tYWluUGF0aCArIGAvcmVxdWVzdHMvJHtjdXJyZW50LlRlbXBsYXRlSWR9LzBgXSlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIG9uRXhwb3J0VG9YTFNYKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YVRvRXhwb3J0ID0gdGhpcy5vbmJvYXJkaW5nTGlzdC5tYXAoKGQpID0+ICh7XHJcbiAgICAgICAgU3RhdHVzOiBkLlN0YXR1cyxcclxuICAgICAgICBSZXF1ZXN0b3I6IGQuQ29udGFjdE5hbWUsXHJcbiAgICAgICAgTmFtZTogZC5OYW1lLFxyXG4gICAgICAgIFRpdGxlOiBkLlRpdGxlLFxyXG4gICAgICAgIEVtYWlsOiBkLkVtYWlsLFxyXG4gICAgICAgIENyZWF0aW9uRGF0ZTogdGhpcy5kYXRlcGlwZS50cmFuc2Zvcm0oZC5jcmVhdGVkQXQsICdkZC1NTS15eXl5JyksXHJcbiAgICAgICAgVGVtcGxhdGVOYW1lOiBkLnZ0ZW1wbGF0ZXM/Lmxlbmd0aCA/IGQudnRlbXBsYXRlc1swXS5OYW1lIDogJycsXHJcbiAgICAgICAgQ2FzZUlkOiBkLnZ0aWNrZXRzPy5sZW5ndGggPyBkLnZ0aWNrZXRzWzBdLkNhc2VOdW1iZXIgOiAnJ1xyXG4gICAgICB9KSlcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3cyA9IFhMU1gudXRpbHMuanNvbl90b19zaGVldChkYXRhVG9FeHBvcnQsIHt9KTtcclxuICAgICAgICBjb25zdCB3YiA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcclxuICAgICAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KHdiLCB3cywgJ29uYm9hcmRpbmctcmVxdWVzdCcpO1xyXG4gICAgICAgIFhMU1gud3JpdGVGaWxlKHdiLCBgJHsnb25ib2FyZGluZy1yZXF1ZXN0LWV4cG9ydGVkJ30ueGxzeGApO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtYWluLWFsbC10aWNrZXQtbGlzdCBvbmJvYXJkaW5nLWxpc3QtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRvcFwiPlxyXG4gICAgICAgIDxoMiBzdHlsZT1cIm1hcmdpbjogMDtcIj5cclxuICAgICAgICAgICAge3tsb2NhbGU/LlJFUVVFU1RfRk9SX0lOVEVHUkFUSU9OfX0gKHt7b25ib2FyZGluZ0xpc3Q/Lmxlbmd0aH19KVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiIGNsYXNzPVwiYWRkLW9uYm9hcmRpbmdcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPiB7e2xvY2FsZT8uTkVXfX1cclxuICAgICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJsaXN0LXRpdGxlXCI+XHJcbiAgICAgICAgPG5neC1maWx0ZXIgW2ZpbHRlckNvbmZpZ109XCJuZ3hGaWx0ZXJEYXRhXCIgbGFuZz1cImZyXCIgKG9uRmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIlxyXG4gICAgICAgICAgICAob25SZWZyZXNoKT1cIm9uUmVmcmVzaCgkZXZlbnQpXCIgW2RhdGFzXT1cIm9uYm9hcmRpbmdMaXN0XCIgW3dpdGhSZWZyZXNoXT1cInRydWVcIlxyXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwibG9jYWxlPy5TRUFSQ0hcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gYXBwZWFyYW5jZT1cInRleHRcIiBjbGFzcz1cImV4cG9ydC10by1jc3Ygcm91bmRlZCBzZWNvbmRhcnkgZG93bmxvYWQtYnRuIG1yMzBcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRXhwb3J0VG9YTFNYKClcIj5cclxuICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidkb3dubG9hZCdcIiBbc2l6ZV09XCIyXCIgY2xhc3M9XCJtcjVcIj48L25iLWljb24+XHJcbiAgICAgICAgICAgICAgICAoLnhsc3gpXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbmd4LWZpbHRlcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXZpZXctbGlzdC10aWNrZXRcIj5cclxuXHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm9uYm9hcmRpbmdMaXN0XCI+XHJcbiAgICAgICAgICAgIDxsaWItb25ib2FyZGluZy10YWJsZSBbY29sdW1uRGVmaW5pdGlvbnNdPVwiY29sdW1uRGVmaW5pdGlvbnNcIiBbZGF0YV09XCJvbmJvYXJkaW5nTGlzdFwiXHJcbiAgICAgICAgICAgICAgICBbZmlsdGVyUGFyYW1zUmVzdWx0XT1cImZpbHRlclBhcmFtc1Jlc3VsdFwiIFtsYW5nXT1cImxhbmdcIiBbc2VhcmNoSW5wdXRdPVwic2VhcmNoSW5wdXRcIiBbbG9jYWxlXT1cImxvY2FsZVwiPlxyXG4gICAgICAgICAgICA8L2xpYi1vbmJvYXJkaW5nLXRhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PiJdfQ==