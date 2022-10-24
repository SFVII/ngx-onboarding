import { CoreMatTable } from '@nowbrains/ngx-table';
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
CoreMatTableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: CoreMatTableComponent, deps: [{ token: i1.DateAdapter }], target: i0.ɵɵFactoryTarget.Injectable });
CoreMatTableComponent.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: CoreMatTableComponent });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: CoreMatTableComponent, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.DateAdapter }]; }, propDecorators: { data: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZU1hdFRhYmxlQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2V4dGVuZC9jb3JlTWF0VGFibGVDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBb0QsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RyxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBeUIsTUFBTSxlQUFlLENBQUM7OztBQUt6RSxNQUFNLE9BQU8scUJBQXFCO0lBZWhDLFlBQ1MsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBZjdCLFNBQUksR0FBVSxFQUFFLENBQUM7UUFDakIsdUJBQWtCLEdBQVEsRUFBRSxDQUFBO1FBQzVCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBR3pCLFNBQUksR0FBRyxFQUFFLENBQUE7UUFDVCxXQUFNLEdBQUcsRUFBRSxDQUFBO1FBQ1gsY0FBUyxHQUFHLENBQUMsQ0FBQTtRQUNiLHNCQUFpQixHQUFVLEVBQUUsQ0FBQTtRQUV0QyxTQUFJLEdBQUcsSUFBSSxDQUFBO0lBT1gsQ0FBQztJQUdELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzlJLENBQUM7SUFHRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBR08sY0FBYyxDQUFDLE9BQXNCO1FBQzNDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3pCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLElBQUk7Z0JBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDckQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLElBQUksT0FBTyxDQUFDLFdBQVc7b0JBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUE7Z0JBQ2xGLElBQUksT0FBTyxDQUFDLGtCQUFrQixFQUFFO29CQUM5QixNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztvQkFDM0QsSUFBSSxVQUFVLElBQUksVUFBVSxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUU7d0JBQ2xELElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFBO3dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtxQkFDbEM7b0JBQ0QsSUFBSSxVQUFVLElBQUksVUFBVSxLQUFLLElBQUksQ0FBQyxjQUFjLEVBQUU7d0JBQ3BELElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO3dCQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtxQkFDOUI7aUJBQ0Y7YUFDRjtTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxHQUFjO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBO0lBQ3BCLENBQUM7O2tIQXhEVSxxQkFBcUI7c0hBQXJCLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQURqQyxVQUFVO2tHQUVBLElBQUk7c0JBQVosS0FBSztnQkFDRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLGlCQUFpQjtzQkFBekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmVNYXRUYWJsZSwgQ29yZU1hdFRhYmxlSW50ZXJmYWNlLCBGaWx0ZXJEYXRlSW50ZXJmYWNlLCBTb3J0IH0gZnJvbSAnQG5vd2JyYWlucy9uZ3gtdGFibGUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbnB1dCwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb3JlTWF0VGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IGFueVtdID0gW107XHJcbiAgQElucHV0KCkgZmlsdGVyUGFyYW1zUmVzdWx0OiBhbnkgPSB7fVxyXG4gIEBJbnB1dCgpIHNlYXJjaElucHV0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBzb3J0SW5pdCE6IFNvcnQ7XHJcbiAgQElucHV0KCkgcmFuZ2VJbml0ITogRmlsdGVyRGF0ZUludGVyZmFjZTtcclxuICBASW5wdXQoKSBzaXplID0gMTVcclxuICBASW5wdXQoKSBmaWx0ZXIgPSB7fVxyXG4gIEBJbnB1dCgpIHN0YXJ0UGFnZSA9IDBcclxuICBASW5wdXQoKSBjb2x1bW5EZWZpbml0aW9uczogYW55W10gPSBbXVxyXG4gIG1hcERhdGEhOiAoKSA9PiBhbnlcclxuICBsYW5nID0gXCJmclwiXHJcbiAgcHVibGljIF9kYXRhOiBDb3JlTWF0VGFibGVJbnRlcmZhY2UgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfY3VycmVudERhdGU6IGFueTtcclxuICBwcml2YXRlIF9jdXJyZW50RmlsdGVyOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPGFueT4pIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kYXRhID0gbmV3IENvcmVNYXRUYWJsZSh0aGlzLmRhdGEgPyB0aGlzLmRhdGEgOiBbXSwgdGhpcy5zb3J0SW5pdCwgdGhpcy5yYW5nZUluaXQsIHRoaXMuc2l6ZSwgdHJ1ZSwgdHJ1ZSwgdGhpcy5maWx0ZXIsIHRoaXMuc3RhcnRQYWdlKVxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMudHJpZ2dlckNoYW5nZXMoY2hhbmdlcylcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHRyaWdnZXJDaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID49IDApIHtcclxuICAgICAgY29uc3QgeCA9IHRoaXMubWFwRGF0YSgpO1xyXG4gICAgICBpZiAodGhpcy5fZGF0YSAmJiBjaGFuZ2VzLmRhdGEpIHRoaXMuX2RhdGEuc2V0RGF0YSh4KVxyXG4gICAgICBpZiAodGhpcy5fZGF0YSkge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLnNlYXJjaElucHV0KSB0aGlzLl9kYXRhLnNlYXJjaC5uZXh0KGNoYW5nZXMuc2VhcmNoSW5wdXQ/LmN1cnJlbnRWYWx1ZSlcclxuICAgICAgICBpZiAoY2hhbmdlcy5maWx0ZXJQYXJhbXNSZXN1bHQpIHtcclxuICAgICAgICAgIGNvbnN0IHsgZmlsdGVyRGF0ZSwgZmlsdGVyRGF0YSB9ID0gdGhpcy5maWx0ZXJQYXJhbXNSZXN1bHQ7XHJcbiAgICAgICAgICBpZiAoZmlsdGVyRGF0ZSAmJiBmaWx0ZXJEYXRlICE9PSB0aGlzLl9jdXJyZW50RGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50RGF0ZSA9IGZpbHRlckRhdGVcclxuICAgICAgICAgICAgdGhpcy5fZGF0YS5maWx0ZXJEYXRlKGZpbHRlckRhdGUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZmlsdGVyRGF0YSAmJiBmaWx0ZXJEYXRhICE9PSB0aGlzLl9jdXJyZW50RmlsdGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRGaWx0ZXIgPSBmaWx0ZXJEYXRhO1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhLmZpbHRlcihmaWx0ZXJEYXRhKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLl9kYXRhKSB7XHJcbiAgICAgIHRoaXMuX2RhdGEuc2V0RGF0YShbXSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcGx5KG1hcDogKCkgPT4gYW55KSB7XHJcbiAgICB0aGlzLm1hcERhdGEgPSBtYXBcclxuICB9XHJcbn1cclxuIl19