import { ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
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
}
