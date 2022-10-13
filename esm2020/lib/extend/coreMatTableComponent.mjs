import { CoreMatTable } from 'ngx-table';
import { Injectable, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
export class CoreMatTableComponent {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        this.data = [];
        this.filterParamsResult = {};
        this.searchInput = '';
        this.size = 15;
        this.filter = {};
        this.startPage = 0;
        this.columnDefinitions = [];
        this.lang = "fr";
    }
    ngOnInit() {
        this._data = new CoreMatTable(this.data ? this.data : [], this.sortInit, this.rangeInit, this.size, true, true, this.filter, this.startPage);
    }
    ngOnChanges(changes) {
        this.triggerChanges(changes);
    }
    triggerChanges(changes) {
        if (this.data.length >= 0) {
            const x = this.mapData();
            if (this._data && changes.data)
                this._data.setData(x);
            if (this._data) {
                if (changes.searchInput)
                    this._data.search.next(changes.searchInput?.currentValue);
                if (changes.filterParamsResult) {
                    const { filterDate, filterData } = this.filterParamsResult;
                    if (filterDate && filterDate !== this._currentDate) {
                        this._currentDate = filterDate;
                        this._data.filterDate(filterDate);
                    }
                    if (filterData && filterData !== this._currentFilter) {
                        this._currentFilter = filterData;
                        this._data.filter(filterData);
                    }
                }
            }
        }
        else if (this._data) {
            this._data.setData([]);
        }
    }
    apply(map) {
        this.mapData = map;
    }
}
CoreMatTableComponent.ɵfac = function CoreMatTableComponent_Factory(t) { return new (t || CoreMatTableComponent)(i0.ɵɵinject(i1.DateAdapter)); };
CoreMatTableComponent.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CoreMatTableComponent, factory: CoreMatTableComponent.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoreMatTableComponent, [{
        type: Injectable
    }], function () { return [{ type: i1.DateAdapter }]; }, { data: [{
            type: Input
        }], filterParamsResult: [{
            type: Input
        }], searchInput: [{
            type: Input
        }], sortInit: [{
            type: Input
        }], rangeInit: [{
            type: Input
        }], size: [{
            type: Input
        }], filter: [{
            type: Input
        }], startPage: [{
            type: Input
        }], columnDefinitions: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZU1hdFRhYmxlQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2V4dGVuZC9jb3JlTWF0VGFibGVDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBb0QsTUFBTSxXQUFXLENBQUM7QUFDM0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXlCLE1BQU0sZUFBZSxDQUFDOzs7QUFLekUsTUFBTSxPQUFPLHFCQUFxQjtJQWVoQyxZQUNTLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQWY3QixTQUFJLEdBQVUsRUFBRSxDQUFDO1FBQ2pCLHVCQUFrQixHQUFRLEVBQUUsQ0FBQTtRQUM1QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUd6QixTQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ1QsV0FBTSxHQUFHLEVBQUUsQ0FBQTtRQUNYLGNBQVMsR0FBRyxDQUFDLENBQUE7UUFDYixzQkFBaUIsR0FBVSxFQUFFLENBQUE7UUFFdEMsU0FBSSxHQUFHLElBQUksQ0FBQTtJQU9YLENBQUM7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUM5SSxDQUFDO0lBR0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUdPLGNBQWMsQ0FBQyxPQUFzQjtRQUMzQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN6QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxJQUFJO2dCQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3JELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxJQUFJLE9BQU8sQ0FBQyxXQUFXO29CQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFBO2dCQUNsRixJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRTtvQkFDOUIsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7b0JBQzNELElBQUksVUFBVSxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFO3dCQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQTt3QkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7cUJBQ2xDO29CQUNELElBQUksVUFBVSxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsY0FBYyxFQUFFO3dCQUNwRCxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQzt3QkFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7cUJBQzlCO2lCQUNGO2FBQ0Y7U0FDRjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtTQUN2QjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsR0FBYztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQTtJQUNwQixDQUFDOzswRkF4RFUscUJBQXFCOzJFQUFyQixxQkFBcUIsV0FBckIscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FEakMsVUFBVTs4REFFQSxJQUFJO2tCQUFaLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1hdFRhYmxlLCBDb3JlTWF0VGFibGVJbnRlcmZhY2UsIEZpbHRlckRhdGVJbnRlcmZhY2UsIFNvcnQgfSBmcm9tICduZ3gtdGFibGUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbnB1dCwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb3JlTWF0VGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IGFueVtdID0gW107XHJcbiAgQElucHV0KCkgZmlsdGVyUGFyYW1zUmVzdWx0OiBhbnkgPSB7fVxyXG4gIEBJbnB1dCgpIHNlYXJjaElucHV0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBzb3J0SW5pdCE6IFNvcnQ7XHJcbiAgQElucHV0KCkgcmFuZ2VJbml0ITogRmlsdGVyRGF0ZUludGVyZmFjZTtcclxuICBASW5wdXQoKSBzaXplID0gMTVcclxuICBASW5wdXQoKSBmaWx0ZXIgPSB7fVxyXG4gIEBJbnB1dCgpIHN0YXJ0UGFnZSA9IDBcclxuICBASW5wdXQoKSBjb2x1bW5EZWZpbml0aW9uczogYW55W10gPSBbXVxyXG4gIG1hcERhdGEhOiAoKSA9PiBhbnlcclxuICBsYW5nID0gXCJmclwiXHJcbiAgcHVibGljIF9kYXRhOiBDb3JlTWF0VGFibGVJbnRlcmZhY2UgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfY3VycmVudERhdGU6IGFueTtcclxuICBwcml2YXRlIF9jdXJyZW50RmlsdGVyOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPGFueT4pIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kYXRhID0gbmV3IENvcmVNYXRUYWJsZSh0aGlzLmRhdGEgPyB0aGlzLmRhdGEgOiBbXSwgdGhpcy5zb3J0SW5pdCwgdGhpcy5yYW5nZUluaXQsIHRoaXMuc2l6ZSwgdHJ1ZSwgdHJ1ZSwgdGhpcy5maWx0ZXIsIHRoaXMuc3RhcnRQYWdlKVxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMudHJpZ2dlckNoYW5nZXMoY2hhbmdlcylcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHRyaWdnZXJDaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID49IDApIHtcclxuICAgICAgY29uc3QgeCA9IHRoaXMubWFwRGF0YSgpO1xyXG4gICAgICBpZiAodGhpcy5fZGF0YSAmJiBjaGFuZ2VzLmRhdGEpIHRoaXMuX2RhdGEuc2V0RGF0YSh4KVxyXG4gICAgICBpZiAodGhpcy5fZGF0YSkge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLnNlYXJjaElucHV0KSB0aGlzLl9kYXRhLnNlYXJjaC5uZXh0KGNoYW5nZXMuc2VhcmNoSW5wdXQ/LmN1cnJlbnRWYWx1ZSlcclxuICAgICAgICBpZiAoY2hhbmdlcy5maWx0ZXJQYXJhbXNSZXN1bHQpIHtcclxuICAgICAgICAgIGNvbnN0IHsgZmlsdGVyRGF0ZSwgZmlsdGVyRGF0YSB9ID0gdGhpcy5maWx0ZXJQYXJhbXNSZXN1bHQ7XHJcbiAgICAgICAgICBpZiAoZmlsdGVyRGF0ZSAmJiBmaWx0ZXJEYXRlICE9PSB0aGlzLl9jdXJyZW50RGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50RGF0ZSA9IGZpbHRlckRhdGVcclxuICAgICAgICAgICAgdGhpcy5fZGF0YS5maWx0ZXJEYXRlKGZpbHRlckRhdGUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZmlsdGVyRGF0YSAmJiBmaWx0ZXJEYXRhICE9PSB0aGlzLl9jdXJyZW50RmlsdGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRGaWx0ZXIgPSBmaWx0ZXJEYXRhO1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhLmZpbHRlcihmaWx0ZXJEYXRhKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLl9kYXRhKSB7XHJcbiAgICAgIHRoaXMuX2RhdGEuc2V0RGF0YShbXSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcGx5KG1hcDogKCkgPT4gYW55KSB7XHJcbiAgICB0aGlzLm1hcERhdGEgPSBtYXBcclxuICB9XHJcbn1cclxuIl19