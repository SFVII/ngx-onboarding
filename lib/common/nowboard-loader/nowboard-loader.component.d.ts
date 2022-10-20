import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AnimationItem } from "ngx-lottie/lib/symbols";
import { AnimationOptions } from "ngx-lottie";
import * as i0 from "@angular/core";
export declare const FadeInOut: import("@angular/animations").AnimationTriggerMetadata;
export declare class NowboardLoaderComponent implements OnInit, OnChanges {
    state: boolean;
    _state: 'loaded' | 'loading';
    options: AnimationOptions;
    constructor();
    set State(value: 'loaded' | 'loading');
    animationCreated(animationItem: AnimationItem): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NowboardLoaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NowboardLoaderComponent, "nowboard-loader", never, { "state": "state"; }, {}, never, never, false>;
}
