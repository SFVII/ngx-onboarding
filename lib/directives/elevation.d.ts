import { ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MaterialElevationDirective implements OnChanges {
    private element;
    private renderer;
    defaultElevation: number;
    raisedElevation: number;
    constructor(element: ElementRef, renderer: Renderer2);
    ngOnChanges(_changes: SimpleChanges): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    setElevation(amount: number): void;
    static ɵfac: i0.ɵɵFactoryDef<MaterialElevationDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MaterialElevationDirective, "[appMaterialElevation]", never, { "defaultElevation": "defaultElevation"; "raisedElevation": "raisedElevation"; }, {}, never>;
}
