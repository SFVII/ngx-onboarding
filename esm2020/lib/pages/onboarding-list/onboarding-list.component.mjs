import * as XLSX from 'xlsx';
import { CellsComponentList, CoreMatTable, } from "ngx-table";
import { Component } from '@angular/core';
import { DialogCreateOnboardingComponent } from '../../components/onboarding/dialog-create-onboarding/dialog-create-onboarding.component';
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
    i0.ɵɵproperty("columnDefinitions", ctx_r0.columnDefinitions)("data", ctx_r0.onboardingList)("lang", ctx_r0.lang)("inputSearch", ctx_r0.inputSearch);
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
        this.onboarding = [];
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
                        key: 'Finished',
                        label: this.locale.STATUS,
                        options: [
                            {
                                value: true,
                                label: this.locale.FINISHED
                            },
                            {
                                value: false,
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
            this.dataFiltered = event.datas;
            this.onForamtList(this.dataFiltered);
        }
    }
    onRefresh(event) {
        this.ngxFilterData = JSON.parse(this.ngxFilterInit);
        if (event.datas) {
            // this.dataFiltered = event.datas;
            // this.onForamtList(this.dataFiltered)
            // this.ngxFilterData = JSON.parse(this.ngxFilterInit);
        }
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
                this.onboarding = onboarding.map((row, index) => {
                    const user = row.categories.find((cat) => cat.name === "Utilisateur");
                    const formUser = user.forms.map((form) => ({ key: form.key, value: form.value })).reduce((a, v) => ({ ...a, [v.key]: v.value }), {});
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
                    row.createdAt = this.lang === 'fr' ? new Date(row.createdAt).toLocaleDateString("fr-FR") : new Date(row.createdAt).toLocaleDateString("en-GB");
                    return row;
                });
                this.dataFiltered = this.onboarding;
                this.onForamtList(this.onboarding);
            }
        });
    }
    findAccount(account) {
        const result = this.accounts.find((acc) => acc._id === account);
        if (result)
            return result.Name;
        return account;
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
        i0.ɵɵtextInterpolate2(" ", ctx.locale == null ? null : ctx.locale.REQUEST_FOR_INTEGRATION, " (", ctx.onboarding.length, ") ");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", ctx.locale == null ? null : ctx.locale.NEW, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("filterConfig", ctx.ngxFilterData)("datas", ctx.onboarding)("withRefresh", true)("placeholder", ctx.locale == null ? null : ctx.locale.SEARCH);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("icon", "download")("size", 2);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate2("", ctx.dataFiltered == null ? null : ctx.dataFiltered.length, " ", ctx.locale == null ? null : ctx.locale.RESULTS, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.onboardingList);
    } }, dependencies: [i5.MatButton, i5.MatAnchor, i4.NgIf, i6.MatIcon, i7.AppComponent, i8.NowboardIconComponent, i9.OnboardingTableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:98%}md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{letter-spacing:0px;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{grid-area:2/1/4/3;padding-left:0;padding-right:0}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:999}app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}  .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;letter-spacing:0px;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.ticket-list[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}  .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}  .mat-tab-header .mat-tab-label-active{background:transparent}  .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}  lib-onboarding-table{background-color:red!important}  lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container[_ngcontent-%COMP%]{position:relative;padding:30px;display:flex;flex-direction:column;gap:25px;min-height:100vh}.onboarding-list-container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.onboarding-list-container[_ngcontent-%COMP%]   .title-table[_ngcontent-%COMP%]{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container[_ngcontent-%COMP%]   .add-onboarding[_ngcontent-%COMP%]{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}  .filter-item{display:flex;align-items:center}  .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}  .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-item .filter-item-inner{border-radius:50px;padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}  .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}  .right-action{display:flex;align-items:center}.header-result[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;color:#d1dbea;padding:0;margin:0}  ngx-filter{width:100%}  ngx-filter ngx-filter-group ul{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{ selector: 'lib-onboarding-list', template: "<div class=\"main-all-ticket-list onboarding-list-container\">\n    <div class=\"header-top\">\n        <h2 style=\"margin: 0;\">\n            {{locale?.REQUEST_FOR_INTEGRATION}} ({{onboarding.length}})\n        </h2>\n        <a role=\"button\" class=\"add-onboarding\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">\n            <mat-icon>add</mat-icon> {{locale?.NEW}}\n        </a>\n    </div>\n    <div class=\"list-title\">\n        <ngx-filter [filterConfig]=\"ngxFilterData\" lang=\"fr\" (onFilter)=\"onFilter($event)\"\n            (onRefresh)=\"onRefresh($event)\" [datas]=\"onboarding\" [withRefresh]=\"true\" [placeholder]=\"locale?.SEARCH\">\n            <button mat-flat-button appearance=\"text\" class=\"export-to-csv rounded secondary download-btn mr30\"\n                (click)=\"onExportToXLSX()\">\n                <nb-icon [icon]=\"'download'\" [size]=\"2\" class=\"mr5\"></nb-icon>\n                (.xlsx)\n            </button>\n        </ngx-filter>\n\n    </div>\n    <div class=\"content-view-list-ticket\">\n        <p class=\"header-result\">{{dataFiltered?.length}} {{locale?.RESULTS}}</p>\n        <!-- <div *ngIf=\"_loading_table || !onboardingList\" class=\"bt-spinner\"></div> -->\n        <div *ngIf=\"onboardingList\">\n            <div [class.ticket-list]=\"!_loading_table\">\n                <lib-onboarding-table [columnDefinitions]=\"columnDefinitions\" [data]=\"onboardingList\" [lang]=\"lang\"\n                    [inputSearch]=\"inputSearch\">\n                </lib-onboarding-table>\n            </div>\n        </div>\n    </div>\n</div>", styles: ["mat-card{display:block;width:98%}md-tooltip.tt-multiline ._md-content{height:auto}md-tooltip ._md-content{height:auto}table{width:100%}.element-detail .inline{display:table;width:90%}.element-detail .inline .block1{display:inline-table;float:left;width:50%;text-align:left}.element-detail .inline .block1 strong{letter-spacing:0px;color:#171f26}.element-detail .inline .block1 p,.element-detail .inline .block1 small{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list .component-title{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list .content-view-list-ticket{grid-area:2/1/4/3;padding-left:0;padding-right:0}.main-all-ticket-list .content-view-list-ticket table{width:100%}.main-all-ticket-list .content-view-list-ticket table thead{position:sticky;top:-1px;z-index:999}app-list-preview{width:100%}::ng-deep .mat-tab-label-active{background:#b6d1cd;opacity:1!important}::ng-deep .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left{color:#171f26;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count{color:#171f26;letter-spacing:0px;text-align:left}.page-title-container{display:flex;margin-right:48px}.page-title{text-align:left;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search{margin-left:auto;position:relative;width:400px}.page-search mat-icon{left:18%;margin-top:10px;position:absolute}.page-search img{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab{padding-left:48px;padding-right:48px}.detail-view-ticket{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search mat-icon{left:16%}}.ticket-list{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list::-webkit-scrollbar{width:5px}.ticket-list::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active,.site-view-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active{background-image:none!important;color:#171f26!important}::ng-deep .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}::ng-deep .mat-tab-header .mat-tab-label-active{background:transparent}::ng-deep .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}::ng-deep lib-onboarding-table{background-color:red!important}::ng-deep lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container{position:relative;padding:30px;display:flex;flex-direction:column;gap:25px;min-height:100vh}.onboarding-list-container .header-top{display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .title-table{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container .add-onboarding{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.onboarding-list-container .list-title ul li{cursor:pointer}.onboarding-list-container .list-title ul li.active{border-bottom:4px solid #3c4252}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}::ng-deep .right-action{display:flex;align-items:center}.header-result{font-style:normal;font-weight:400;font-size:12px;color:#d1dbea;padding:0;margin:0}::ng-deep ngx-filter{width:100%}::ng-deep ngx-filter ngx-filter-group ul{padding:0}\n"] }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.MatDialog }, { type: i4.DatePipe }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBRzdCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEdBQThCLE1BQU0sV0FBVyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFJbEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFHMUksT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7O0lDWTdCLDJCQUE0QixVQUFBO0lBRXBCLDJDQUV1QjtJQUMzQixpQkFBTSxFQUFBOzs7SUFKRCxlQUFxQztJQUFyQyxxREFBcUM7SUFDaEIsZUFBdUM7SUFBdkMsNERBQXVDLCtCQUFBLHFCQUFBLG1DQUFBOztBRFo3RSxnQkFBZ0I7QUFPaEIsTUFBTSxPQUFPLHVCQUF1QjtJQTZCbEMsWUFDVSxPQUEwQixFQUMxQixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsTUFBaUIsRUFDbEIsUUFBa0I7UUFKakIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWhDM0IsZ0JBQVcsR0FBRyxFQUFF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b250ZW50IjpbImltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCc7XG5cbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2VsbHNDb21wb25lbnRMaXN0LCBDb3JlTWF0VGFibGUsIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2UsIH0gZnJvbSBcIm5neC10YWJsZVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElGaWx0ZXJDb25maWd1cmF0aW9uLCBJU2VsZWN0IH0gZnJvbSAnbmd4LWZpbHRlcic7XG5cbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERpYWxvZ0NyZWF0ZU9uYm9hcmRpbmdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL29uYm9hcmRpbmcvZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IGxvY2FsZXMgfSBmcm9tICcuLi8uLi9pMThuJztcblxuLy8gc2F2ZSB0aGUgZmlsZVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItb25ib2FyZGluZy1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgb25ib2FyZGluZ0xpc3Q6IGFueVxuICBpbnB1dFNlYXJjaCA9ICcnO1xuICBjdXJyZW50TGVuZ3RoID0gMDtcbiAgY3VycmVudEZpbHRlciA9ICdhbGwnXG4gIG9uYm9hcmRpbmcgPSBbXVxuICBhY2NvdW50czogYW55O1xuICBwdWJsaWMgc2VhcmNoOiBzdHJpbmcgPSAnJztcbiAgb25ib2FyZGluZ0Zvcm1hdExpc3QgPSBbXVxuICBvbmJvYXJkaW5nRmluaXNoZWQ6IGFueVxuICBvbmJvYXJkaW5nVG9GaW5pc2g6IGFueTtcbiAgc2hvd1NlYXJjaDogZmFsc2U7XG4gIHRlbXBsYXRlcyA9IFtdXG5cbiAgbG9jYWxlOiBhbnkgPSB7fVxuICBuZ3hGaWx0ZXJEYXRhOiBJRmlsdGVyQ29uZmlndXJhdGlvbltdID0gW11cbiAgbmd4RmlsdGVySW5pdCA9IFwiXCJcbiAgcHVibGljIGNvbHVtbkRlZmluaXRpb25zOiBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlW10gPSBbXTtcbiAgbG9jYWxTZXJ2aWNlOiBhbnk7XG4gIHB1YmxpYyBfbG9hZGluZ190YWJsZSA9IHRydWU7XG4gIHByaXZhdGUgSGlkZGVuSW5kZXggPSAwO1xuICBwdWJsaWMgaW5kZXggPSAwO1xuICBsYW5nID0gJ2ZyJztcbiAgZGF0YUZpbHRlcmVkOiBhbnlbXTtcbiAgc2VhcmNoVGV4dDogc3RyaW5nO1xuICBjYW5jZWxTZWFyY2goKSB7XG4gICAgdGhpcy5pbnB1dFNlYXJjaCA9ICcnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgcHVibGljIGRhdGVwaXBlOiBEYXRlUGlwZVxuICApIHtcblxuICAgIHRoaXMuc2VydmljZS5fbGFuZy5zdWJzY3JpYmUoKGxvY2FsZSkgPT4ge1xuICAgICAgdGhpcy5sYW5nID0gbG9jYWxlO1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVzW2xvY2FsZV0uUkVRVUVTVDtcbiAgICAgIHRoaXMubmd4RmlsdGVyRGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpbHRlckRhdGE6IHtcbiAgICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgIGtleTogJ0ZpbmlzaGVkJyxcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLmxvY2FsZS5TVEFUVVMsXG4gICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5sb2NhbGUuRklOSVNIRURcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5sb2NhbGUuVE9fRklOSVNIRURcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmlsdGVyRGF0YToge1xuICAgICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcbiAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgbGFiZWw6ICdTZXJ2aWNlJyxcbiAgICAgICAgICAgIGtleTogJ1RlbXBsYXRlSWQnLFxuICAgICAgICAgICAgb3B0aW9uczogW10sXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmlsdGVyRGF0YToge1xuICAgICAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICAgICAga2V5OiAnY3JlYXRlZEF0JyxcbiAgICAgICAgICAgIG9wZXJhdG9yOiBcImd0ZVwiLFxuICAgICAgICAgICAgbGFiZWw6ICdEYXRlIE1pbiAgJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbHRlckRhdGE6IHtcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgICAgIGtleTogJ2NyZWF0ZWRBdCcsXG4gICAgICAgICAgICBvcGVyYXRvcjogXCJsdGVcIixcbiAgICAgICAgICAgIGxhYmVsOiAnRGF0ZSBNYXgnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgICB0aGlzLnNlcnZpY2UuX3RlbXBsYXRlcy5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICB0aGlzLnRlbXBsYXRlcyA9IGRhdGEuZmlsdGVyKChkKSA9PiBkLlN0YXR1cyk7XG4gICAgICAgICAgKHRoaXMubmd4RmlsdGVyRGF0YVsxXS5maWx0ZXJEYXRhIGFzIElTZWxlY3QpLm9wdGlvbnMgPSB0aGlzLnRlbXBsYXRlcy5tYXAoKHQ6IGFueSkgPT4gKHsgdmFsdWU6IHQuX2lkLCBsYWJlbDogdC5OYW1lIH0pKTtcbiAgICAgICAgICB0aGlzLm5neEZpbHRlckluaXQgPSBKU09OLnN0cmluZ2lmeSh0aGlzLm5neEZpbHRlckRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29sdW1uRGVmaW5pdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdOYW1lJyxcbiAgICAgICAgICAvLyBzdWJUaXRsZTogXCJkYXRlX29mX2VudHJ5XCIsXG4gICAgICAgICAgdmFsdWU6IHRoaXMubG9jYWxlPy5DT0xMQUJPUkFUT1IsXG4gICAgICAgICAgLy8gc3ViVGl0bGVGb3JtYXQ6IFwiZGF0ZVwiLFxuICAgICAgICAgIG9yZGVyOiAxLFxuICAgICAgICAgIGNsYXNzOiAndy1wbWluMTUnLFxuICAgICAgICAgIC8vIGFkZENsYXNzOiAnbGFzdE5hbWVDbGFzcycsXG4gICAgICAgICAgLy8gbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuQ3VzdG9tQ2VsbCxcbiAgICAgICAgICBzb3J0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnSWQnLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmxvY2FsZT8uSUQsXG4gICAgICAgICAgb3JkZXI6IDIsXG4gICAgICAgICAgY2xhc3M6ICd3LXBtaW41JyxcbiAgICAgICAgICBzb3J0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnVGl0bGUnLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmxvY2FsZT8uUFJPRklMRSxcbiAgICAgICAgICBvcmRlcjogMixcbiAgICAgICAgICBjbGFzczogJ3ctcG1pbjEwJyxcbiAgICAgICAgICBzb3J0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAncmVxdWVzdG9yJyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5sb2NhbGU/LlJFUVVFU1RPUixcbiAgICAgICAgICBvcmRlcjogNCxcbiAgICAgICAgICBjbGFzczogJ3ctcG1pbjE1JyxcbiAgICAgICAgICBzb3J0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnQWNjb3VudE5hbWUnLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmxvY2FsZT8uU0lURSxcbiAgICAgICAgICBvcmRlcjogNSxcbiAgICAgICAgICBjbGFzczogJ3ctcG1pbjIwJyxcbiAgICAgICAgICBzb3J0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnVGVtcGxhdGVOYW1lJyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5sb2NhbGU/LlNFUlZJQ0UsXG4gICAgICAgICAgb3JkZXI6IDYsXG4gICAgICAgICAgY2xhc3M6ICd3LXBtaW4xMCcsXG4gICAgICAgICAgc29ydDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ2NyZWF0ZWRBdCcsXG4gICAgICAgICAgdmFsdWU6IHRoaXMubG9jYWxlPy5DUkVBVElPTl9EQVRFLFxuICAgICAgICAgIG9yZGVyOiA3LFxuICAgICAgICAgIC8vIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkRhdGVGb3JtYXQsXG4gICAgICAgICAgY2xhc3M6ICd3LXBtaW4xMCcsXG4gICAgICAgICAgc29ydDogdHJ1ZSxcbiAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnU3RhdHVzJyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5sb2NhbGU/LlNUQVRVUyxcbiAgICAgICAgICBvcmRlcjogOCxcbiAgICAgICAgICBhZGRDbGFzczogJ0N1c3RvbUNsYXNzJyxcbiAgICAgICAgICBjbGFzczogJ3ctcG1pbjEwJyxcbiAgICAgICAgICBzb3J0OiB0cnVlLFxuICAgICAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkN1c3RvbUNlbGwsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdBY3Rpb24nLFxuICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICBvcmRlcjogOSxcbiAgICAgICAgICBjbGFzczogJ3ctcG1pbjUnLFxuICAgICAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkJ1dHRvbkxpbmssXG4gICAgICAgICAgZGlzcGxheTogdGhpcy5sb2NhbGU/LkRFVEFJTCxcbiAgICAgICAgICBvdmVycmlkZTogW2Ake3RoaXMuY2hlY2tPbmJvYXJkaW5nUGF0aCgpfWAsICdUZW1wbGF0ZUlkJywgJ19pZCddLFxuICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSlcbiAgfVxuXG4gIG9uRmlsdGVyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmRhdGFzKSB7XG4gICAgICB0aGlzLmRhdGFGaWx0ZXJlZCA9IGV2ZW50LmRhdGFzO1xuICAgICAgdGhpcy5vbkZvcmFtdExpc3QodGhpcy5kYXRhRmlsdGVyZWQpXG4gICAgfVxuICB9XG4gIG9uUmVmcmVzaChldmVudCkge1xuICAgIHRoaXMubmd4RmlsdGVyRGF0YSA9IEpTT04ucGFyc2UodGhpcy5uZ3hGaWx0ZXJJbml0KTtcbiAgICBpZiAoZXZlbnQuZGF0YXMpIHtcbiAgICAgIC8vIHRoaXMuZGF0YUZpbHRlcmVkID0gZXZlbnQuZGF0YXM7XG4gICAgICAvLyB0aGlzLm9uRm9yYW10TGlzdCh0aGlzLmRhdGFGaWx0ZXJlZClcbiAgICAgIC8vIHRoaXMubmd4RmlsdGVyRGF0YSA9IEpTT04ucGFyc2UodGhpcy5uZ3hGaWx0ZXJJbml0KTtcbiAgICB9XG4gIH1cblxuICBjaGVja09uYm9hcmRpbmdQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UubWFpblBhdGguaW5jbHVkZXMoJ29uYm9hcmRpbmcnKSA/IGAke3RoaXMuc2VydmljZS5tYWluUGF0aH0vcmVxdWVzdHMvYCA6IGAvb25ib2FyZGluZy9yZXF1ZXN0cy9gXG4gIH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XG4gICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbE9uYm9hcmRpbmcoKTtcbiAgICB0aGlzLmFjY291bnRzID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFjY291bnRzKClcbiAgICB0aGlzLnNlcnZpY2Uub25ib2FyZGluZy5zdWJzY3JpYmUoKG9uYm9hcmRpbmcpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XG4gICAgICB9LCAyMDAwKTtcblxuICAgICAgaWYgKG9uYm9hcmRpbmcpIHtcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nID0gb25ib2FyZGluZy5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB1c2VyID0gcm93LmNhdGVnb3JpZXMuZmluZCgoY2F0KSA9PiBjYXQubmFtZSA9PT0gXCJVdGlsaXNhdGV1clwiKTtcbiAgICAgICAgICBjb25zdCBmb3JtVXNlciA9IHVzZXIuZm9ybXMubWFwKChmb3JtKSA9PiAoeyBrZXk6IGZvcm0ua2V5LCB2YWx1ZTogZm9ybS52YWx1ZSB9KSkucmVkdWNlKChhLCB2KSA9PiAoeyAuLi5hLCBbdi5rZXldOiB2LnZhbHVlIH0pLCB7fSlcbiAgICAgICAgICByb3cuU3RhdHVzID0gcm93LkZpbmlzaGVkID8gKHRoaXMubG9jYWxlID09PSAnZnInID8gXCJUZXJtaW7DqWVcIiA6ICdGaW5pc2hlZCcpIDogKHRoaXMubG9jYWxlID09PSAnZnInID8gXCJBIGZpbmFsaXNlclwiIDogJ1RvIGZpbmlzaGVkJyk7XG4gICAgICAgICAgcm93LkN1c3RvbUNsYXNzID0gcm93LkZpbmlzaGVkID8gXCJjdXN0b20tc3RhdHVzIGZpbmlzaGVkXCIgOiBcImN1c3RvbS1zdGF0dXMgdG8tZmluaXNoXCI7XG4gICAgICAgICAgcm93Lmxhc3ROYW1lQ2xhc3MgPSBcImxhc3QtbmFtZVwiXG4gICAgICAgICAgcm93LnJlcXVlc3RvciA9IHJvdz8udmNvbnRhY3RzWzBdPy5OYW1lIHx8ICcnO1xuICAgICAgICAgIC8vIHJvdy5BY2NvdW50TmFtZSA9IHJvdz8udmNvbnRhY3RzWzBdPy5BY2NvdW50Lk5hbWUgfHwgJyc7XG4gICAgICAgICAgcm93LkFjY291bnROYW1lID0gdGhpcy5maW5kQWNjb3VudChmb3JtVXNlci5BY2NvdW50TmFtZSk7XG4gICAgICAgICAgcm93Lk5hbWUgPSByb3cuQ29udGFjdE5hbWUgPSBmb3JtVXNlcj8uTGFzdE5hbWUgKyBcIiBcIiArIGZvcm1Vc2VyPy5GaXJzdE5hbWUgfHwgXCJcIlxuICAgICAgICAgIHJvdy5UaXRsZSA9IGZvcm1Vc2VyPy5UaXRsZSB8fCBcIlwiXG4gICAgICAgICAgcm93LkVtYWlsID0gZm9ybVVzZXI/LkVtYWlsIHx8ICcnO1xuICAgICAgICAgIHJvdy5kYXRlX29mX2VudHJ5ID0gZm9ybVVzZXIuZGF0ZV9vZl9lbnRyeSA/IGZvcm1Vc2VyLmRhdGVfb2ZfZW50cnkgOiBudWxsXG4gICAgICAgICAgcm93LlRlbXBsYXRlTmFtZSA9IHJvdz8udnRlbXBsYXRlcz8ubGVuZ3RoID4gMCA/IHJvdz8udnRlbXBsYXRlc1swXS5OYW1lIDogJyc7XG4gICAgICAgICAgcm93LklkID0gaW5kZXggKyAxO1xuICAgICAgICAgIHJvdy5jcmVhdGVkQXQgPSB0aGlzLmxhbmcgPT09ICdmcicgPyBuZXcgRGF0ZShyb3cuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKSA6IG5ldyBEYXRlKHJvdy5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUdCXCIpXG4gICAgICAgICAgcmV0dXJuIHJvdztcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5kYXRhRmlsdGVyZWQgPSB0aGlzLm9uYm9hcmRpbmc7XG4gICAgICAgIHRoaXMub25Gb3JhbXRMaXN0KHRoaXMub25ib2FyZGluZylcblxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4gIGZpbmRBY2NvdW50KGFjY291bnQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmFjY291bnRzLmZpbmQoKGFjYykgPT4gYWNjLl9pZCA9PT0gYWNjb3VudCk7XG4gICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdC5OYW1lO1xuICAgIHJldHVybiBhY2NvdW50XG4gIH1cbiAgb25Gb3JhbXRMaXN0KGRhdGFzKSB7XG4gICAgdGhpcy5vbmJvYXJkaW5nRm9ybWF0TGlzdCA9IGRhdGFzO1xuICAgIHRoaXMub25ib2FyZGluZ0xpc3QgPSBuZXcgQ29yZU1hdFRhYmxlKGRhdGFzLFxuICAgICAge1xuICAgICAgICBhY3RpdmU6ICdJZCcsIGRpcmVjdGlvbjogJ2Rlc2MnXG4gICAgICB9LCB7IGFjdGl2ZTogJycsIHZhbHVlU3RhcnQ6IG51bGwsIHZhbHVlRW5kOiBudWxsIH0sIDE1LCB0cnVlLCB0cnVlKTtcbiAgfVxuICBvbkZpbHRlclRlbXBsYXRlKCkge1xuICAgIHRoaXMuZGF0YUZpbHRlcmVkID0gdGhpcy5zZWFyY2hUZXh0ICE9PSAnJyA/IHRoaXMub25ib2FyZGluZy5maWx0ZXIoKGQpID0+IGQuTmFtZS50b0xvd2VyQ2FzZSgpLnNlYXJjaCh0aGlzLnNlYXJjaFRleHQudG9Mb2NhbGVMb3dlckNhc2UoKSkgPiAtMSkgOiB0aGlzLm9uYm9hcmRpbmdcbiAgICB0aGlzLm9uRm9yYW10TGlzdCh0aGlzLmRhdGFGaWx0ZXJlZClcbiAgfVxuXG4gIHRyaWdnZXJDaGFuZ2UoJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudC5pbmRleCA9PT0gMCkge1xuICAgICAgdGhpcy5jdXJyZW50TGVuZ3RoID0gdGhpcy5vbmJvYXJkaW5nTGlzdC5kYXRhLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAoJGV2ZW50LmluZGV4ID09PSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnRMZW5ndGggPSB0aGlzLm9uYm9hcmRpbmdGaW5pc2hlZC5kYXRhLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAoJGV2ZW50LmluZGV4ID09PSAyKSB7XG4gICAgICB0aGlzLmN1cnJlbnRMZW5ndGggPSB0aGlzLm9uYm9hcmRpbmdUb0ZpbmlzaC5kYXRhLmxlbmd0aFxuICAgIH1cbiAgICBpZiAoJGV2ZW50LmluZGV4ICE9PSB0aGlzLkhpZGRlbkluZGV4KSB7XG4gICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5kZXggPSAkZXZlbnQuaW5kZXg7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcbiAgICAgICAgW10sXG4gICAgICAgIHtcbiAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHBhZ2U6IG51bGwsIHRhYjogJGV2ZW50LmluZGV4ICsgMSB9LFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLkhpZGRlbkluZGV4ID0gJGV2ZW50LmluZGV4XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fbG9hZGluZ190YWJsZSA9IGZhbHNlO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbkRpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0NyZWF0ZU9uYm9hcmRpbmdDb21wb25lbnQsIHtcbiAgICAgIGRhdGE6IHt9XG4gICAgfSk7XG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChjdXJyZW50OiBhbnkpID0+IHtcbiAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5jdXJyZW50T25ib2FyZGluZy5uZXh0KGN1cnJlbnQpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5zZXJ2aWNlLm1haW5QYXRoICsgYC9yZXF1ZXN0cy8ke2N1cnJlbnQuVGVtcGxhdGVJZH0vMGBdKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG9uRXhwb3J0VG9YTFNYKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhVG9FeHBvcnQgPSB0aGlzLmRhdGFGaWx0ZXJlZC5tYXAoKGQpID0+ICh7XG4gICAgICAgIFN0YXR1czogZC5TdGF0dXMsXG4gICAgICAgIFJlcXVlc3RvcjogZC5Db250YWN0TmFtZSxcbiAgICAgICAgTmFtZTogZC5OYW1lLFxuICAgICAgICBUaXRsZTogZC5UaXRsZSxcbiAgICAgICAgRW1haWw6IGQuRW1haWwsXG4gICAgICAgIENyZWF0aW9uRGF0ZTogdGhpcy5kYXRlcGlwZS50cmFuc2Zvcm0oZC5jcmVhdGVkQXQsICdkZC1NTS15eXl5JyksXG4gICAgICAgIFRlbXBsYXRlTmFtZTogZC52dGVtcGxhdGVzPy5sZW5ndGggPyBkLnZ0ZW1wbGF0ZXNbMF0uTmFtZSA6ICcnLFxuICAgICAgICBDYXNlSWQ6IGQudnRpY2tldHM/Lmxlbmd0aCA/IGQudnRpY2tldHNbMF0uQ2FzZU51bWJlciA6ICcnXG4gICAgICB9KSlcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHdzID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KGRhdGFUb0V4cG9ydCwge30pO1xuICAgICAgICBjb25zdCB3YiA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcbiAgICAgICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldCh3Yiwgd3MsICdvbmJvYXJkaW5nLXJlcXVlc3QnKTtcbiAgICAgICAgWExTWC53cml0ZUZpbGUod2IsIGAkeydvbmJvYXJkaW5nLXJlcXVlc3QtZXhwb3J0ZWQnfS54bHN4YCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm1haW4tYWxsLXRpY2tldC1saXN0IG9uYm9hcmRpbmctbGlzdC1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRvcFwiPlxuICAgICAgICA8aDIgc3R5bGU9XCJtYXJnaW46IDA7XCI+XG4gICAgICAgICAgICB7e2xvY2FsZT8uUkVRVUVTVF9GT1JfSU5URUdSQVRJT059fSAoe3tvbmJvYXJkaW5nLmxlbmd0aH19KVxuICAgICAgICA8L2gyPlxuICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgY2xhc3M9XCJhZGQtb25ib2FyZGluZ1wiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5cbiAgICAgICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPiB7e2xvY2FsZT8uTkVXfX1cbiAgICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJsaXN0LXRpdGxlXCI+XG4gICAgICAgIDxuZ3gtZmlsdGVyIFtmaWx0ZXJDb25maWddPVwibmd4RmlsdGVyRGF0YVwiIGxhbmc9XCJmclwiIChvbkZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCJcbiAgICAgICAgICAgIChvblJlZnJlc2gpPVwib25SZWZyZXNoKCRldmVudClcIiBbZGF0YXNdPVwib25ib2FyZGluZ1wiIFt3aXRoUmVmcmVzaF09XCJ0cnVlXCIgW3BsYWNlaG9sZGVyXT1cImxvY2FsZT8uU0VBUkNIXCI+XG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBhcHBlYXJhbmNlPVwidGV4dFwiIGNsYXNzPVwiZXhwb3J0LXRvLWNzdiByb3VuZGVkIHNlY29uZGFyeSBkb3dubG9hZC1idG4gbXIzMFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRXhwb3J0VG9YTFNYKClcIj5cbiAgICAgICAgICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInZG93bmxvYWQnXCIgW3NpemVdPVwiMlwiIGNsYXNzPVwibXI1XCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgICgueGxzeClcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25neC1maWx0ZXI+XG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudC12aWV3LWxpc3QtdGlja2V0XCI+XG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLXJlc3VsdFwiPnt7ZGF0YUZpbHRlcmVkPy5sZW5ndGh9fSB7e2xvY2FsZT8uUkVTVUxUU319PC9wPlxuICAgICAgICA8IS0tIDxkaXYgKm5nSWY9XCJfbG9hZGluZ190YWJsZSB8fCAhb25ib2FyZGluZ0xpc3RcIiBjbGFzcz1cImJ0LXNwaW5uZXJcIj48L2Rpdj4gLS0+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJvbmJvYXJkaW5nTGlzdFwiPlxuICAgICAgICAgICAgPGRpdiBbY2xhc3MudGlja2V0LWxpc3RdPVwiIV9sb2FkaW5nX3RhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGxpYi1vbmJvYXJkaW5nLXRhYmxlIFtjb2x1bW5EZWZpbml0aW9uc109XCJjb2x1bW5EZWZpbml0aW9uc1wiIFtkYXRhXT1cIm9uYm9hcmRpbmdMaXN0XCIgW2xhbmddPVwibGFuZ1wiXG4gICAgICAgICAgICAgICAgICAgIFtpbnB1dFNlYXJjaF09XCJpbnB1dFNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDwvbGliLW9uYm9hcmRpbmctdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=