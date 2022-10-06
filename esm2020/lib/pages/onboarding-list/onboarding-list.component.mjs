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
                    class: 'u-7',
                    // addClass: 'lastNameClass',
                    // module: CellsComponentList.CustomCell,
                    sort: true,
                },
                {
                    key: 'Id',
                    value: this.locale?.ID,
                    order: 2,
                    class: 'u-4',
                    sort: true,
                },
                {
                    key: 'Title',
                    value: this.locale?.PROFILE,
                    order: 2,
                    class: 'u-4',
                    sort: true,
                },
                {
                    key: 'requestor',
                    value: this.locale?.REQUESTOR,
                    order: 4,
                    class: 'u-6',
                    sort: true,
                },
                {
                    key: 'AccountName',
                    value: this.locale?.SITE,
                    order: 5,
                    class: 'u-7',
                    sort: true,
                },
                {
                    key: 'TemplateName',
                    value: this.locale?.SERVICE,
                    order: 6,
                    class: 'u-5',
                    sort: true,
                },
                {
                    key: 'createdAt',
                    value: this.locale?.CREATION_DATE,
                    order: 7,
                    // module: CellsComponentList.DateFormat,
                    class: 'u-6',
                    sort: true,
                    align: 'left',
                },
                {
                    key: 'Status',
                    value: this.locale?.STATUS,
                    order: 8,
                    addClass: 'CustomClass',
                    class: 'u-4',
                    sort: true,
                    module: CellsComponentList.CustomCell,
                },
                {
                    key: 'Action',
                    value: '',
                    order: 9,
                    class: 'u-4',
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
                console.log(this.onboarding);
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
        i0.ɵɵtextInterpolate1(" ", ctx.locale == null ? null : ctx.locale.NEW_REQUEST, " ");
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
        args: [{ selector: 'lib-onboarding-list', template: "<div class=\"main-all-ticket-list onboarding-list-container\">\n    <div class=\"header-top\">\n        <h2 style=\"margin: 0;\">\n            {{locale?.REQUEST_FOR_INTEGRATION}} ({{onboarding.length}})\n        </h2>\n        <a role=\"button\" class=\"add-onboarding\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">\n            <mat-icon>add</mat-icon> {{locale?.NEW_REQUEST}}\n        </a>\n    </div>\n    <div class=\"list-title\">\n        <ngx-filter [filterConfig]=\"ngxFilterData\" lang=\"fr\" (onFilter)=\"onFilter($event)\"\n            (onRefresh)=\"onRefresh($event)\" [datas]=\"onboarding\" [withRefresh]=\"true\" [placeholder]=\"locale?.SEARCH\">\n            <button mat-flat-button appearance=\"text\" class=\"export-to-csv rounded secondary download-btn mr30\"\n                (click)=\"onExportToXLSX()\">\n                <nb-icon [icon]=\"'download'\" [size]=\"2\" class=\"mr5\"></nb-icon>\n                (.xlsx)\n            </button>\n        </ngx-filter>\n\n    </div>\n    <div class=\"content-view-list-ticket\">\n        <p class=\"header-result\">{{dataFiltered?.length}} {{locale?.RESULTS}}</p>\n        <!-- <div *ngIf=\"_loading_table || !onboardingList\" class=\"bt-spinner\"></div> -->\n        <div *ngIf=\"onboardingList\">\n            <div [class.ticket-list]=\"!_loading_table\">\n                <lib-onboarding-table [columnDefinitions]=\"columnDefinitions\" [data]=\"onboardingList\" [lang]=\"lang\"\n                    [inputSearch]=\"inputSearch\">\n                </lib-onboarding-table>\n            </div>\n        </div>\n    </div>\n</div>", styles: ["mat-card{display:block;width:98%}md-tooltip.tt-multiline ._md-content{height:auto}md-tooltip ._md-content{height:auto}table{width:100%}.element-detail .inline{display:table;width:90%}.element-detail .inline .block1{display:inline-table;float:left;width:50%;text-align:left}.element-detail .inline .block1 strong{letter-spacing:0px;color:#171f26}.element-detail .inline .block1 p,.element-detail .inline .block1 small{font-size:13px!important;letter-spacing:0px;color:#171f26}.main-all-ticket-list{display:block;grid-column-gap:0px;grid-row-gap:0px;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.main-all-ticket-list .component-title{grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list .content-view-list-ticket{grid-area:2/1/4/3;padding-left:0;padding-right:0}.main-all-ticket-list .content-view-list-ticket table{width:100%}.main-all-ticket-list .content-view-list-ticket table thead{position:sticky;top:-1px;z-index:999}app-list-preview{width:100%}::ng-deep .mat-tab-label-active{background:#b6d1cd;opacity:1!important}::ng-deep .ticket-list thead{position:sticky;top:-1px;z-index:999}.col-lg-6{width:50%;vertical-align:top;display:inline-table}@keyframes three-quarters-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.three-quarters-loader:not(:required){animation:three-quarters-loader 1.25s infinite linear;border:4px solid #4285F4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{0%{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left{color:#171f26;font-size:18px;letter-spacing:0px;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count{color:#171f26;letter-spacing:0px;text-align:left}.page-title-container{display:flex;margin-right:48px}.page-title{text-align:left;letter-spacing:0px;color:#171f26;margin-left:2em;margin-top:-8px}.page-search{margin-left:auto;position:relative;width:400px}.page-search mat-icon{left:18%;margin-top:10px;position:absolute}.page-search img{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab{padding-left:48px;padding-right:48px}.detail-view-ticket{float:right;margin-right:20px;margin-top:-30px}@media (min-width: 1800px){.page-search mat-icon{left:16%}}.ticket-list{max-height:75vh;overflow:auto;animation:fadein .7s!important;-moz-animation:fadein .7s!important;-webkit-animation:fadein .7s!important;-o-animation:fadein .7s!important}.ticket-list::-webkit-scrollbar{width:5px}.ticket-list::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.bt-spinner{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03A9F4;animation:1s spin linear infinite;position:relative;margin:auto;top:25vh}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active,.site-view-tab>.mat-tab-header>.mat-tab-label-container>.mat-tab-list>.mat-tab-labels>.mat-tab-label-active{background-image:none!important;color:#171f26!important}::ng-deep .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}::ng-deep .mat-tab-header .mat-tab-label-active{background:transparent}::ng-deep .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}::ng-deep lib-onboarding-table{background-color:red!important}::ng-deep lib-onboarding-table .link-btn{background:#E5E8EE!important;padding:2px!important;box-shadow:0 0 #0003!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container{position:relative;padding:30px;display:flex;flex-direction:column;gap:25px;min-height:100vh}.onboarding-list-container .header-top{display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .title-table{font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container .add-onboarding{background:#171F26;box-shadow:0 0 #0003;border-radius:7px}.onboarding-list-container .list-title{font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between}.onboarding-list-container .list-title ul{display:flex;align-items:center;list-style:none;padding-left:0;gap:15px;margin:0}.onboarding-list-container .list-title ul li{cursor:pointer}.onboarding-list-container .list-title ul li.active{border-bottom:4px solid #3c4252}::ng-deep .filter-item{display:flex;align-items:center}::ng-deep .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:8px 15px;border-top:0}::ng-deep .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-item .filter-item-inner{border-radius:50px;padding:5px 10px;display:inline-flex;align-items:center;box-sizing:border-box}::ng-deep .filter-item .search-text .mat-form-field-infix{padding:10px 15px 10px 0}::ng-deep .right-action{display:flex;align-items:center}.header-result{font-style:normal;font-weight:400;font-size:12px;color:#d1dbea;padding:0;margin:0}::ng-deep ngx-filter{width:100%}::ng-deep ngx-filter ngx-filter-group ul{padding:0}\n"] }]
    }], function () { return [{ type: i1.OnboardingService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.MatDialog }, { type: i4.DatePipe }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBRzdCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEdBQThCLE1BQU0sV0FBVyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFJbEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUZBQXlGLENBQUM7QUFHMUksT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7O0lDWTdCLDJCQUE0QixVQUFBO0lBRXBCLDJDQUV1QjtJQUMzQixpQkFBTSxFQUFBOzs7SUFKRCxlQUFxQztJQUFyQyxxREFBcUM7SUFDaEIsZUFBdUM7SUFBdkMsNERBQXVDLCtCQUFBLHFCQUFBLG1DQUFBOztBRFo3RSxnQkFBZ0I7QUFPaEIsTUFBTSxPQUFPLHVCQUF1QjtJQTZCbEMsWUFDVSxPQUEwQixFQUMxQixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsTUFBaUIsRUFDbEIsUUFBa0I7UUFKakIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWhDM0IsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxLQUFLLENBQUE7UUFDckIsZUFBVSxHQUFHLEVBQUUsQ0FBQTtRQUVSLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDM0IseUJBQW9CLEdBQUcsRUFBRSxDQUFBO1FBSXpCLGNBQVMsR0FBRyxFQUFFLENBQUE7UUFFZCxXQUFNLEdBQVEsRUFBRSxDQUFBO1FBQ2hCLGtCQUFhLEdBQTJCLEVBQUUsQ0FBQTtRQUMxQyxrQkFBYSxHQUFHLEVBQUUsQ0FBQTtRQUNYLHNCQUFpQixHQUFnQyxFQUFFLENBQUM7UUFFcEQsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDakIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNqQixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBZVYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUc7Z0JBQ25CO29CQUNFLFVBQVUsRUFBRTt3QkFDVixJQUFJLEVBQUUsUUFBUTt3QkFDZCxLQUFLLEVBQUUsRUFBRTt3QkFDVCxHQUFHLEVBQUUsVUFBVTt3QkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO3dCQUN6QixPQUFPLEVBQUU7NEJBQ1A7Z0NBQ0UsS0FBSyxFQUFFLElBQUk7Z0NBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTs2QkFDNUI7NEJBQ0Q7Z0NBQ0UsS0FBSyxFQUFFLEtBQUs7Z0NBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVzs2QkFDL0I7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsVUFBVSxFQUFFO3dCQUNWLElBQUksRUFBRSxRQUFRO3dCQUNkLEtBQUssRUFBRSxFQUFFO3dCQUNULEtBQUssRUFBRSxTQUFTO3dCQUNoQixHQUFHLEVBQUUsWUFBWTt3QkFDakIsT0FBTyxFQUFFLEVBQUU7cUJBQ1o7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsVUFBVSxFQUFFO3dCQUNWLElBQUksRUFBRSxNQUFNO3dCQUNaLEdBQUcsRUFBRSxXQUFXO3dCQUNoQixRQUFRLEVBQUUsS0FBSzt3QkFDZixLQUFLLEVBQUUsWUFBWTtxQkFDcEI7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsVUFBVSxFQUFFO3dCQUNWLElBQUksRUFBRSxNQUFNO3dCQUNaLEdBQUcsRUFBRSxXQUFXO3dCQUNoQixRQUFRLEVBQUUsS0FBSzt3QkFDZixLQUFLLEVBQUUsVUFBVTtxQkFDbEI7aUJBQ0Y7YUFDRixDQUFBO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3pDLElBQUksSUFBSSxFQUFFO29CQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQXNCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzFILElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQ3pEO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsaUJBQWlCLEdBQUc7Z0JBQ3ZCO29CQUNFLEdBQUcsRUFBRSxNQUFNO29CQUNYLDZCQUE2QjtvQkFDN0IsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWTtvQkFDaEMsMEJBQTBCO29CQUMxQixLQUFLLEVBQUUsQ0FBQztvQkFDUixLQUFLLEVBQUUsS0FBSztvQkFDWiw2QkFBNkI7b0JBQzdCLHlDQUF5QztvQkFDekMsSUFBSSxFQUFFLElBQUk7aUJBQ1g7Z0JBQ0Q7b0JBQ0UsR0FBRyxFQUFFLElBQUk7b0JBQ1QsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDdEIsS0FBSyxFQUFFLENBQUM7b0JBQ1IsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxFQUFFLElBQUk7aUJBQ1g7Z0JBQ0Q7b0JBQ0UsR0FBRyxFQUFFLE9BQU87b0JBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTztvQkFDM0IsS0FBSyxFQUFFLENBQUM7b0JBQ1IsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxFQUFFLElBQUk7aUJBQ1g7Z0JBQ0Q7b0JBQ0UsR0FBRyxFQUFFLFdBQVc7b0JBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVM7b0JBQzdCLEtBQUssRUFBRSxDQUFDO29CQUNSLEtBQUssRUFBRSxLQUFLO29CQUNaLElBQUksRUFBRSxJQUFJO2lCQUNYO2dCQUNEO29CQUNFLEdBQUcsRUFBRSxhQUFhO29CQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJO29CQUN4QixLQUFLLEVBQUUsQ0FBQztvQkFDUixLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJLEVBQUUsSUFBSTtpQkFDWDtnQkFDRDtvQkFDRSxHQUFHLEVBQUUsY0FBYztvQkFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTztvQkFDM0IsS0FBSyxFQUFFLENBQUM7b0JBQ1IsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxFQUFFLElBQUk7aUJBQ1g7Z0JBQ0Q7b0JBQ0UsR0FBRyxFQUFFLFdBQVc7b0JBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLGFBQWE7b0JBQ2pDLEtBQUssRUFBRSxDQUFDO29CQUNSLHlDQUF5QztvQkFDekMsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxFQUFFLElBQUk7b0JBQ1YsS0FBSyxFQUFFLE1BQU07aUJBQ2Q7Z0JBQ0Q7b0JBQ0UsR0FBRyxFQUFFLFFBQVE7b0JBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTTtvQkFDMUIsS0FBSyxFQUFFLENBQUM7b0JBQ1IsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLEtBQUssRUFBRSxLQUFLO29CQUNaLElBQUksRUFBRSxJQUFJO29CQUNWLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxVQUFVO2lCQUN0QztnQkFDRDtvQkFDRSxHQUFHLEVBQUUsUUFBUTtvQkFDYixLQUFLLEVBQUUsRUFBRTtvQkFDVCxLQUFLLEVBQUUsQ0FBQztvQkFDUixLQUFLLEVBQUUsS0FBSztvQkFDWixNQUFNLEVBQUUsa0JBQWtCLENBQUMsVUFBVTtvQkFDckMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTTtvQkFDNUIsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7b0JBQ2hFLEtBQUssRUFBRSxRQUFRO2lCQUNoQjthQUNGLENBQUE7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFoSkQsWUFBWTtRQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFnSkQsUUFBUSxDQUFDLEtBQUs7UUFDWixJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7U0FDckM7SUFDSCxDQUFDO0lBQ0QsU0FBUyxDQUFDLEtBQUs7UUFDYixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNmLG1DQUFtQztZQUNuQyx1Q0FBdUM7WUFDdkMsdURBQXVEO1NBQ3hEO0lBQ0gsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsWUFBWSxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQTtJQUN0SCxDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVE7UUFDWixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDL0MsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFVCxJQUFJLFVBQVUsRUFBRTtnQkFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQzlDLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxDQUFDO29CQUN0RSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtvQkFDcEksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN0SSxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDdEYsR0FBRyxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUE7b0JBQy9CLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDO29CQUM5QywyREFBMkQ7b0JBQzNELEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3pELEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxRQUFRLEVBQUUsUUFBUSxHQUFHLEdBQUcsR0FBRyxRQUFRLEVBQUUsU0FBUyxJQUFJLEVBQUUsQ0FBQTtvQkFDakYsR0FBRyxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQTtvQkFDakMsR0FBRyxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDbEMsR0FBRyxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7b0JBQzFFLEdBQUcsQ0FBQyxZQUFZLEdBQUcsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUM5RSxHQUFHLENBQUMsRUFBRSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ25CLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUM5SSxPQUFPLEdBQUcsQ0FBQztnQkFDYixDQUFDLENBQUMsQ0FBQTtnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFFN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTthQUVuQztRQUNILENBQUMsQ0FBQyxDQUFBO0lBRUosQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFPO1FBQ2pCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLE9BQU8sQ0FBQyxDQUFDO1FBQ2hFLElBQUksTUFBTTtZQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQztRQUMvQixPQUFPLE9BQU8sQ0FBQTtJQUNoQixDQUFDO0lBQ0QsWUFBWSxDQUFDLEtBQUs7UUFDaEIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxDQUFDLEtBQUssRUFDMUM7WUFDRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNO1NBQ2hDLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUNELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ25LLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBTTtRQUNsQixJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO1NBQ3JEO2FBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO1NBQ3pEO2FBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO1NBQ3pEO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixFQUFFLEVBQ0Y7Z0JBQ0UsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUN0QixXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDbEQsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLGlEQUFpRDthQUNoRixDQUFDLENBQUM7WUFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7WUFDL0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDVjtJQUNILENBQUM7SUFFRCxVQUFVO1FBQ1IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUU7WUFDbEUsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBWSxFQUFFLEVBQUU7WUFDakQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsYUFBYSxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFBO2FBQ3BGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsY0FBYztRQUNaLElBQUk7WUFDRixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDakQsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNO2dCQUNoQixTQUFTLEVBQUUsQ0FBQyxDQUFDLFdBQVc7Z0JBQ3hCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTtnQkFDWixLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUs7Z0JBQ2QsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO2dCQUNkLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQztnQkFDaEUsWUFBWSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDOUQsTUFBTSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUMzRCxDQUFDLENBQUMsQ0FBQTtZQUNILElBQUk7Z0JBQ0YsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsR0FBRyw2QkFBNkIsT0FBTyxDQUFDLENBQUM7YUFDN0Q7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Y7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7OEZBaFRVLHVCQUF1QjswRUFBdkIsdUJBQXVCO1FDcEJwQyw4QkFBNEQsYUFBQSxZQUFBO1FBR2hELFlBQ0o7UUFBQSxpQkFBSztRQUNMLDRCQUFpRztRQUF2QiwrRkFBUyxnQkFBWSxJQUFDO1FBQzVGLGdDQUFVO1FBQUEsbUJBQUc7UUFBQSxpQkFBVztRQUFDLFlBQzdCO1FBQUEsaUJBQUksRUFBQTtRQUVSLDhCQUF3QixvQkFBQTtRQUNpQyxvSEFBWSxvQkFBZ0IsSUFBQyx5R0FDakUscUJBQWlCLElBRGdEO1FBRTlFLGtDQUMrQjtRQUEzQixxR0FBUyxvQkFBZ0IsSUFBQztRQUMxQiw4QkFBOEQ7UUFDOUQsMEJBQ0o7UUFBQSxpQkFBUyxFQUFBLEVBQUE7UUFJakIsK0JBQXNDLFlBQUE7UUFDVCxhQUE0QztRQUFBLGlCQUFJO1FBRXpFLDJFQU1NO1FBQ1YsaUJBQU0sRUFBQTs7UUEzQkUsZUFDSjtRQURJLDZIQUNKO1FBRTZCLGVBQzdCO1FBRDZCLG1GQUM3QjtRQUdZLGVBQThCO1FBQTlCLGdEQUE4Qix5QkFBQSxxQkFBQSw4REFBQTtRQUl6QixlQUFtQjtRQUFuQixpQ0FBbUIsV0FBQTtRQU9YLGVBQTRDO1FBQTVDLDZJQUE0QztRQUUvRCxlQUFvQjtRQUFwQix5Q0FBb0I7O3VGREhyQix1QkFBdUI7Y0FMbkMsU0FBUzsyQkFDRSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xuXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENlbGxzQ29tcG9uZW50TGlzdCwgQ29yZU1hdFRhYmxlLCBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlLCB9IGZyb20gXCJuZ3gtdGFibGVcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJRmlsdGVyQ29uZmlndXJhdGlvbiwgSVNlbGVjdCB9IGZyb20gJ25neC1maWx0ZXInO1xuXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBsb2NhbGVzIH0gZnJvbSAnLi4vLi4vaTE4bic7XG5cbi8vIHNhdmUgdGhlIGZpbGVcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW9uYm9hcmRpbmctbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG9uYm9hcmRpbmdMaXN0OiBhbnlcbiAgaW5wdXRTZWFyY2ggPSAnJztcbiAgY3VycmVudExlbmd0aCA9IDA7XG4gIGN1cnJlbnRGaWx0ZXIgPSAnYWxsJ1xuICBvbmJvYXJkaW5nID0gW11cbiAgYWNjb3VudHM6IGFueTtcbiAgcHVibGljIHNlYXJjaDogc3RyaW5nID0gJyc7XG4gIG9uYm9hcmRpbmdGb3JtYXRMaXN0ID0gW11cbiAgb25ib2FyZGluZ0ZpbmlzaGVkOiBhbnlcbiAgb25ib2FyZGluZ1RvRmluaXNoOiBhbnk7XG4gIHNob3dTZWFyY2g6IGZhbHNlO1xuICB0ZW1wbGF0ZXMgPSBbXVxuXG4gIGxvY2FsZTogYW55ID0ge31cbiAgbmd4RmlsdGVyRGF0YTogSUZpbHRlckNvbmZpZ3VyYXRpb25bXSA9IFtdXG4gIG5neEZpbHRlckluaXQgPSBcIlwiXG4gIHB1YmxpYyBjb2x1bW5EZWZpbml0aW9uczogZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZVtdID0gW107XG4gIGxvY2FsU2VydmljZTogYW55O1xuICBwdWJsaWMgX2xvYWRpbmdfdGFibGUgPSB0cnVlO1xuICBwcml2YXRlIEhpZGRlbkluZGV4ID0gMDtcbiAgcHVibGljIGluZGV4ID0gMDtcbiAgbGFuZyA9ICdmcic7XG4gIGRhdGFGaWx0ZXJlZDogYW55W107XG4gIHNlYXJjaFRleHQ6IHN0cmluZztcbiAgY2FuY2VsU2VhcmNoKCkge1xuICAgIHRoaXMuaW5wdXRTZWFyY2ggPSAnJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgIHB1YmxpYyBkYXRlcGlwZTogRGF0ZVBpcGVcbiAgKSB7XG5cbiAgICB0aGlzLnNlcnZpY2UuX2xhbmcuc3Vic2NyaWJlKChsb2NhbGUpID0+IHtcbiAgICAgIHRoaXMubGFuZyA9IGxvY2FsZTtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlc1tsb2NhbGVdLlJFUVVFU1Q7XG4gICAgICB0aGlzLm5neEZpbHRlckRhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWx0ZXJEYXRhOiB7XG4gICAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICBrZXk6ICdGaW5pc2hlZCcsXG4gICAgICAgICAgICBsYWJlbDogdGhpcy5sb2NhbGUuU1RBVFVTLFxuICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMubG9jYWxlLkZJTklTSEVEXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMubG9jYWxlLlRPX0ZJTklTSEVEXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbHRlckRhdGE6IHtcbiAgICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgIGxhYmVsOiAnU2VydmljZScsXG4gICAgICAgICAgICBrZXk6ICdUZW1wbGF0ZUlkJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbHRlckRhdGE6IHtcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgICAgIGtleTogJ2NyZWF0ZWRBdCcsXG4gICAgICAgICAgICBvcGVyYXRvcjogXCJndGVcIixcbiAgICAgICAgICAgIGxhYmVsOiAnRGF0ZSBNaW4gICdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWx0ZXJEYXRhOiB7XG4gICAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgICAgICBrZXk6ICdjcmVhdGVkQXQnLFxuICAgICAgICAgICAgb3BlcmF0b3I6IFwibHRlXCIsXG4gICAgICAgICAgICBsYWJlbDogJ0RhdGUgTWF4J1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgICAgdGhpcy5zZXJ2aWNlLl90ZW1wbGF0ZXMuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgdGhpcy50ZW1wbGF0ZXMgPSBkYXRhLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMpO1xuICAgICAgICAgICh0aGlzLm5neEZpbHRlckRhdGFbMV0uZmlsdGVyRGF0YSBhcyBJU2VsZWN0KS5vcHRpb25zID0gdGhpcy50ZW1wbGF0ZXMubWFwKCh0OiBhbnkpID0+ICh7IHZhbHVlOiB0Ll9pZCwgbGFiZWw6IHQuTmFtZSB9KSk7XG4gICAgICAgICAgdGhpcy5uZ3hGaWx0ZXJJbml0ID0gSlNPTi5zdHJpbmdpZnkodGhpcy5uZ3hGaWx0ZXJEYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmNvbHVtbkRlZmluaXRpb25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnTmFtZScsXG4gICAgICAgICAgLy8gc3ViVGl0bGU6IFwiZGF0ZV9vZl9lbnRyeVwiLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmxvY2FsZT8uQ09MTEFCT1JBVE9SLFxuICAgICAgICAgIC8vIHN1YlRpdGxlRm9ybWF0OiBcImRhdGVcIixcbiAgICAgICAgICBvcmRlcjogMSxcbiAgICAgICAgICBjbGFzczogJ3UtNycsXG4gICAgICAgICAgLy8gYWRkQ2xhc3M6ICdsYXN0TmFtZUNsYXNzJyxcbiAgICAgICAgICAvLyBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5DdXN0b21DZWxsLFxuICAgICAgICAgIHNvcnQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdJZCcsXG4gICAgICAgICAgdmFsdWU6IHRoaXMubG9jYWxlPy5JRCxcbiAgICAgICAgICBvcmRlcjogMixcbiAgICAgICAgICBjbGFzczogJ3UtNCcsXG4gICAgICAgICAgc29ydDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ1RpdGxlJyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5sb2NhbGU/LlBST0ZJTEUsXG4gICAgICAgICAgb3JkZXI6IDIsXG4gICAgICAgICAgY2xhc3M6ICd1LTQnLFxuICAgICAgICAgIHNvcnQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdyZXF1ZXN0b3InLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmxvY2FsZT8uUkVRVUVTVE9SLFxuICAgICAgICAgIG9yZGVyOiA0LFxuICAgICAgICAgIGNsYXNzOiAndS02JyxcbiAgICAgICAgICBzb3J0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnQWNjb3VudE5hbWUnLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmxvY2FsZT8uU0lURSxcbiAgICAgICAgICBvcmRlcjogNSxcbiAgICAgICAgICBjbGFzczogJ3UtNycsXG4gICAgICAgICAgc29ydDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ1RlbXBsYXRlTmFtZScsXG4gICAgICAgICAgdmFsdWU6IHRoaXMubG9jYWxlPy5TRVJWSUNFLFxuICAgICAgICAgIG9yZGVyOiA2LFxuICAgICAgICAgIGNsYXNzOiAndS01JyxcbiAgICAgICAgICBzb3J0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnY3JlYXRlZEF0JyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5sb2NhbGU/LkNSRUFUSU9OX0RBVEUsXG4gICAgICAgICAgb3JkZXI6IDcsXG4gICAgICAgICAgLy8gbW9kdWxlOiBDZWxsc0NvbXBvbmVudExpc3QuRGF0ZUZvcm1hdCxcbiAgICAgICAgICBjbGFzczogJ3UtNicsXG4gICAgICAgICAgc29ydDogdHJ1ZSxcbiAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnU3RhdHVzJyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5sb2NhbGU/LlNUQVRVUyxcbiAgICAgICAgICBvcmRlcjogOCxcbiAgICAgICAgICBhZGRDbGFzczogJ0N1c3RvbUNsYXNzJyxcbiAgICAgICAgICBjbGFzczogJ3UtNCcsXG4gICAgICAgICAgc29ydDogdHJ1ZSxcbiAgICAgICAgICBtb2R1bGU6IENlbGxzQ29tcG9uZW50TGlzdC5DdXN0b21DZWxsLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnQWN0aW9uJyxcbiAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgb3JkZXI6IDksXG4gICAgICAgICAgY2xhc3M6ICd1LTQnLFxuICAgICAgICAgIG1vZHVsZTogQ2VsbHNDb21wb25lbnRMaXN0LkJ1dHRvbkxpbmssXG4gICAgICAgICAgZGlzcGxheTogdGhpcy5sb2NhbGU/LkRFVEFJTCxcbiAgICAgICAgICBvdmVycmlkZTogW2Ake3RoaXMuY2hlY2tPbmJvYXJkaW5nUGF0aCgpfWAsICdUZW1wbGF0ZUlkJywgJ19pZCddLFxuICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSlcbiAgfVxuXG4gIG9uRmlsdGVyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmRhdGFzKSB7XG4gICAgICB0aGlzLmRhdGFGaWx0ZXJlZCA9IGV2ZW50LmRhdGFzO1xuICAgICAgdGhpcy5vbkZvcmFtdExpc3QodGhpcy5kYXRhRmlsdGVyZWQpXG4gICAgfVxuICB9XG4gIG9uUmVmcmVzaChldmVudCkge1xuICAgIHRoaXMubmd4RmlsdGVyRGF0YSA9IEpTT04ucGFyc2UodGhpcy5uZ3hGaWx0ZXJJbml0KTtcbiAgICBpZiAoZXZlbnQuZGF0YXMpIHtcbiAgICAgIC8vIHRoaXMuZGF0YUZpbHRlcmVkID0gZXZlbnQuZGF0YXM7XG4gICAgICAvLyB0aGlzLm9uRm9yYW10TGlzdCh0aGlzLmRhdGFGaWx0ZXJlZClcbiAgICAgIC8vIHRoaXMubmd4RmlsdGVyRGF0YSA9IEpTT04ucGFyc2UodGhpcy5uZ3hGaWx0ZXJJbml0KTtcbiAgICB9XG4gIH1cblxuICBjaGVja09uYm9hcmRpbmdQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UubWFpblBhdGguaW5jbHVkZXMoJ29uYm9hcmRpbmcnKSA/IGAke3RoaXMuc2VydmljZS5tYWluUGF0aH0vcmVxdWVzdHMvYCA6IGAvb25ib2FyZGluZy9yZXF1ZXN0cy9gXG4gIH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XG4gICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbE9uYm9hcmRpbmcoKTtcbiAgICB0aGlzLmFjY291bnRzID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFjY291bnRzKClcbiAgICB0aGlzLnNlcnZpY2Uub25ib2FyZGluZy5zdWJzY3JpYmUoKG9uYm9hcmRpbmcpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XG4gICAgICB9LCAyMDAwKTtcblxuICAgICAgaWYgKG9uYm9hcmRpbmcpIHtcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nID0gb25ib2FyZGluZy5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB1c2VyID0gcm93LmNhdGVnb3JpZXMuZmluZCgoY2F0KSA9PiBjYXQubmFtZSA9PT0gXCJVdGlsaXNhdGV1clwiKTtcbiAgICAgICAgICBjb25zdCBmb3JtVXNlciA9IHVzZXIuZm9ybXMubWFwKChmb3JtKSA9PiAoeyBrZXk6IGZvcm0ua2V5LCB2YWx1ZTogZm9ybS52YWx1ZSB9KSkucmVkdWNlKChhLCB2KSA9PiAoeyAuLi5hLCBbdi5rZXldOiB2LnZhbHVlIH0pLCB7fSlcbiAgICAgICAgICByb3cuU3RhdHVzID0gcm93LkZpbmlzaGVkID8gKHRoaXMubG9jYWxlID09PSAnZnInID8gXCJUZXJtaW7DqWVcIiA6ICdGaW5pc2hlZCcpIDogKHRoaXMubG9jYWxlID09PSAnZnInID8gXCJBIGZpbmFsaXNlclwiIDogJ1RvIGZpbmlzaGVkJyk7XG4gICAgICAgICAgcm93LkN1c3RvbUNsYXNzID0gcm93LkZpbmlzaGVkID8gXCJjdXN0b20tc3RhdHVzIGZpbmlzaGVkXCIgOiBcImN1c3RvbS1zdGF0dXMgdG8tZmluaXNoXCI7XG4gICAgICAgICAgcm93Lmxhc3ROYW1lQ2xhc3MgPSBcImxhc3QtbmFtZVwiXG4gICAgICAgICAgcm93LnJlcXVlc3RvciA9IHJvdz8udmNvbnRhY3RzWzBdPy5OYW1lIHx8ICcnO1xuICAgICAgICAgIC8vIHJvdy5BY2NvdW50TmFtZSA9IHJvdz8udmNvbnRhY3RzWzBdPy5BY2NvdW50Lk5hbWUgfHwgJyc7XG4gICAgICAgICAgcm93LkFjY291bnROYW1lID0gdGhpcy5maW5kQWNjb3VudChmb3JtVXNlci5BY2NvdW50TmFtZSk7XG4gICAgICAgICAgcm93Lk5hbWUgPSByb3cuQ29udGFjdE5hbWUgPSBmb3JtVXNlcj8uTGFzdE5hbWUgKyBcIiBcIiArIGZvcm1Vc2VyPy5GaXJzdE5hbWUgfHwgXCJcIlxuICAgICAgICAgIHJvdy5UaXRsZSA9IGZvcm1Vc2VyPy5UaXRsZSB8fCBcIlwiXG4gICAgICAgICAgcm93LkVtYWlsID0gZm9ybVVzZXI/LkVtYWlsIHx8ICcnO1xuICAgICAgICAgIHJvdy5kYXRlX29mX2VudHJ5ID0gZm9ybVVzZXIuZGF0ZV9vZl9lbnRyeSA/IGZvcm1Vc2VyLmRhdGVfb2ZfZW50cnkgOiBudWxsXG4gICAgICAgICAgcm93LlRlbXBsYXRlTmFtZSA9IHJvdz8udnRlbXBsYXRlcz8ubGVuZ3RoID4gMCA/IHJvdz8udnRlbXBsYXRlc1swXS5OYW1lIDogJyc7XG4gICAgICAgICAgcm93LklkID0gaW5kZXggKyAxO1xuICAgICAgICAgIHJvdy5jcmVhdGVkQXQgPSB0aGlzLmxhbmcgPT09ICdmcicgPyBuZXcgRGF0ZShyb3cuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKSA6IG5ldyBEYXRlKHJvdy5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUdCXCIpXG4gICAgICAgICAgcmV0dXJuIHJvdztcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vbmJvYXJkaW5nKTtcblxuICAgICAgICB0aGlzLmRhdGFGaWx0ZXJlZCA9IHRoaXMub25ib2FyZGluZztcbiAgICAgICAgdGhpcy5vbkZvcmFtdExpc3QodGhpcy5vbmJvYXJkaW5nKVxuXG4gICAgICB9XG4gICAgfSlcblxuICB9XG5cbiAgZmluZEFjY291bnQoYWNjb3VudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuYWNjb3VudHMuZmluZCgoYWNjKSA9PiBhY2MuX2lkID09PSBhY2NvdW50KTtcbiAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0Lk5hbWU7XG4gICAgcmV0dXJuIGFjY291bnRcbiAgfVxuICBvbkZvcmFtdExpc3QoZGF0YXMpIHtcbiAgICB0aGlzLm9uYm9hcmRpbmdGb3JtYXRMaXN0ID0gZGF0YXM7XG4gICAgdGhpcy5vbmJvYXJkaW5nTGlzdCA9IG5ldyBDb3JlTWF0VGFibGUoZGF0YXMsXG4gICAgICB7XG4gICAgICAgIGFjdGl2ZTogJ0lkJywgZGlyZWN0aW9uOiAnZGVzYydcbiAgICAgIH0sIHsgYWN0aXZlOiAnJywgdmFsdWVTdGFydDogbnVsbCwgdmFsdWVFbmQ6IG51bGwgfSwgMTUsIHRydWUsIHRydWUpO1xuICB9XG4gIG9uRmlsdGVyVGVtcGxhdGUoKSB7XG4gICAgdGhpcy5kYXRhRmlsdGVyZWQgPSB0aGlzLnNlYXJjaFRleHQgIT09ICcnID8gdGhpcy5vbmJvYXJkaW5nLmZpbHRlcigoZCkgPT4gZC5OYW1lLnRvTG93ZXJDYXNlKCkuc2VhcmNoKHRoaXMuc2VhcmNoVGV4dC50b0xvY2FsZUxvd2VyQ2FzZSgpKSA+IC0xKSA6IHRoaXMub25ib2FyZGluZ1xuICAgIHRoaXMub25Gb3JhbXRMaXN0KHRoaXMuZGF0YUZpbHRlcmVkKVxuICB9XG5cbiAgdHJpZ2dlckNoYW5nZSgkZXZlbnQpIHtcbiAgICBpZiAoJGV2ZW50LmluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRMZW5ndGggPSB0aGlzLm9uYm9hcmRpbmdMaXN0LmRhdGEubGVuZ3RoXG4gICAgfSBlbHNlIGlmICgkZXZlbnQuaW5kZXggPT09IDEpIHtcbiAgICAgIHRoaXMuY3VycmVudExlbmd0aCA9IHRoaXMub25ib2FyZGluZ0ZpbmlzaGVkLmRhdGEubGVuZ3RoXG4gICAgfSBlbHNlIGlmICgkZXZlbnQuaW5kZXggPT09IDIpIHtcbiAgICAgIHRoaXMuY3VycmVudExlbmd0aCA9IHRoaXMub25ib2FyZGluZ1RvRmluaXNoLmRhdGEubGVuZ3RoXG4gICAgfVxuICAgIGlmICgkZXZlbnQuaW5kZXggIT09IHRoaXMuSGlkZGVuSW5kZXgpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmdfdGFibGUgPSB0cnVlO1xuICAgICAgdGhpcy5pbmRleCA9ICRldmVudC5pbmRleDtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICBbXSxcbiAgICAgICAge1xuICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHsgcGFnZTogbnVsbCwgdGFiOiAkZXZlbnQuaW5kZXggKyAxIH0sXG4gICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJywgLy8gcmVtb3ZlIHRvIHJlcGxhY2UgYWxsIHF1ZXJ5IHBhcmFtcyBieSBwcm92aWRlZFxuICAgICAgICB9KTtcbiAgICAgIHRoaXMuSGlkZGVuSW5kZXggPSAkZXZlbnQuaW5kZXhcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9sb2FkaW5nX3RhYmxlID0gZmFsc2U7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9XG4gIH1cblxuICBvcGVuRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudCwge1xuICAgICAgZGF0YToge31cbiAgICB9KTtcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKGN1cnJlbnQ6IGFueSkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmN1cnJlbnRPbmJvYXJkaW5nLm5leHQoY3VycmVudCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnNlcnZpY2UubWFpblBhdGggKyBgL3JlcXVlc3RzLyR7Y3VycmVudC5UZW1wbGF0ZUlkfS8wYF0pXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgb25FeHBvcnRUb1hMU1goKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGFUb0V4cG9ydCA9IHRoaXMuZGF0YUZpbHRlcmVkLm1hcCgoZCkgPT4gKHtcbiAgICAgICAgU3RhdHVzOiBkLlN0YXR1cyxcbiAgICAgICAgUmVxdWVzdG9yOiBkLkNvbnRhY3ROYW1lLFxuICAgICAgICBOYW1lOiBkLk5hbWUsXG4gICAgICAgIFRpdGxlOiBkLlRpdGxlLFxuICAgICAgICBFbWFpbDogZC5FbWFpbCxcbiAgICAgICAgQ3JlYXRpb25EYXRlOiB0aGlzLmRhdGVwaXBlLnRyYW5zZm9ybShkLmNyZWF0ZWRBdCwgJ2RkLU1NLXl5eXknKSxcbiAgICAgICAgVGVtcGxhdGVOYW1lOiBkLnZ0ZW1wbGF0ZXM/Lmxlbmd0aCA/IGQudnRlbXBsYXRlc1swXS5OYW1lIDogJycsXG4gICAgICAgIENhc2VJZDogZC52dGlja2V0cz8ubGVuZ3RoID8gZC52dGlja2V0c1swXS5DYXNlTnVtYmVyIDogJydcbiAgICAgIH0pKVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgd3MgPSBYTFNYLnV0aWxzLmpzb25fdG9fc2hlZXQoZGF0YVRvRXhwb3J0LCB7fSk7XG4gICAgICAgIGNvbnN0IHdiID0gWExTWC51dGlscy5ib29rX25ldygpO1xuICAgICAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KHdiLCB3cywgJ29uYm9hcmRpbmctcmVxdWVzdCcpO1xuICAgICAgICBYTFNYLndyaXRlRmlsZSh3YiwgYCR7J29uYm9hcmRpbmctcmVxdWVzdC1leHBvcnRlZCd9Lnhsc3hgKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibWFpbi1hbGwtdGlja2V0LWxpc3Qgb25ib2FyZGluZy1saXN0LWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdG9wXCI+XG4gICAgICAgIDxoMiBzdHlsZT1cIm1hcmdpbjogMDtcIj5cbiAgICAgICAgICAgIHt7bG9jYWxlPy5SRVFVRVNUX0ZPUl9JTlRFR1JBVElPTn19ICh7e29uYm9hcmRpbmcubGVuZ3RofX0pXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImFkZC1vbmJvYXJkaW5nXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPlxuICAgICAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+IHt7bG9jYWxlPy5ORVdfUkVRVUVTVH19XG4gICAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibGlzdC10aXRsZVwiPlxuICAgICAgICA8bmd4LWZpbHRlciBbZmlsdGVyQ29uZmlnXT1cIm5neEZpbHRlckRhdGFcIiBsYW5nPVwiZnJcIiAob25GaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAob25SZWZyZXNoKT1cIm9uUmVmcmVzaCgkZXZlbnQpXCIgW2RhdGFzXT1cIm9uYm9hcmRpbmdcIiBbd2l0aFJlZnJlc2hdPVwidHJ1ZVwiIFtwbGFjZWhvbGRlcl09XCJsb2NhbGU/LlNFQVJDSFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gYXBwZWFyYW5jZT1cInRleHRcIiBjbGFzcz1cImV4cG9ydC10by1jc3Ygcm91bmRlZCBzZWNvbmRhcnkgZG93bmxvYWQtYnRuIG1yMzBcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkV4cG9ydFRvWExTWCgpXCI+XG4gICAgICAgICAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ2Rvd25sb2FkJ1wiIFtzaXplXT1cIjJcIiBjbGFzcz1cIm1yNVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICAoLnhsc3gpXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9uZ3gtZmlsdGVyPlxuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtdmlldy1saXN0LXRpY2tldFwiPlxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1yZXN1bHRcIj57e2RhdGFGaWx0ZXJlZD8ubGVuZ3RofX0ge3tsb2NhbGU/LlJFU1VMVFN9fTwvcD5cbiAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwiX2xvYWRpbmdfdGFibGUgfHwgIW9uYm9hcmRpbmdMaXN0XCIgY2xhc3M9XCJidC1zcGlubmVyXCI+PC9kaXY+IC0tPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwib25ib2FyZGluZ0xpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgW2NsYXNzLnRpY2tldC1saXN0XT1cIiFfbG9hZGluZ190YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxsaWItb25ib2FyZGluZy10YWJsZSBbY29sdW1uRGVmaW5pdGlvbnNdPVwiY29sdW1uRGVmaW5pdGlvbnNcIiBbZGF0YV09XCJvbmJvYXJkaW5nTGlzdFwiIFtsYW5nXT1cImxhbmdcIlxuICAgICAgICAgICAgICAgICAgICBbaW5wdXRTZWFyY2hdPVwiaW5wdXRTZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8L2xpYi1vbmJvYXJkaW5nLXRhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19