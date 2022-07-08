import { Component } from '@angular/core';
import * as i0 from "@angular/core";
var LoadingPageComponent = /** @class */ (function () {
    function LoadingPageComponent() {
    }
    LoadingPageComponent.prototype.ngOnInit = function () {
    };
    LoadingPageComponent.ɵfac = function LoadingPageComponent_Factory(t) { return new (t || LoadingPageComponent)(); };
    LoadingPageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LoadingPageComponent, selectors: [["lib-loading-page"]], decls: 6, vars: 0, consts: [[1, "container"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 340 340", 1, "loader"], ["cx", "170", "cy", "170", "r", "160", "stroke", "#9d107d"], ["cx", "170", "cy", "170", "r", "135", "stroke", "#4862ab"], ["cx", "170", "cy", "170", "r", "110", "stroke", "#9d107d"], ["cx", "170", "cy", "170", "r", "85", "stroke", "#4862ab"]], template: function LoadingPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 1);
            i0.ɵɵelement(2, "circle", 2);
            i0.ɵɵelement(3, "circle", 3);
            i0.ɵɵelement(4, "circle", 4);
            i0.ɵɵelement(5, "circle", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, styles: [".container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100vh;width:100vw;background-color:#00000068;z-index:999;position:fixed;top:0;left:0}.loader[_ngcontent-%COMP%]{max-width:15rem;width:100px;height:auto;stroke-linecap:round}circle[_ngcontent-%COMP%]{fill:none;stroke-width:3.5;-webkit-animation-name:preloader;animation-name:preloader;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;transform-origin:170px 170px;will-change:transform}circle[_ngcontent-%COMP%]:nth-of-type(1){stroke-dasharray:550px;-webkit-animation-delay:-.15s;animation-delay:-.15s}circle[_ngcontent-%COMP%]:nth-of-type(2){stroke-dasharray:500px;-webkit-animation-delay:-.3s;animation-delay:-.3s}circle[_ngcontent-%COMP%]:nth-of-type(3){stroke-dasharray:450px;-webkit-animation-delay:-.45s;animation-delay:-.45s}circle[_ngcontent-%COMP%]:nth-of-type(4){stroke-dasharray:300px;-webkit-animation-delay:-.6s;animation-delay:-.6s}@-webkit-keyframes preloader{50%{transform:rotate(360deg)}}@keyframes preloader{50%{transform:rotate(360deg)}}"] });
    return LoadingPageComponent;
}());
export { LoadingPageComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LoadingPageComponent, [{
        type: Component,
        args: [{
                selector: 'lib-loading-page',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.scss']
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQUVsRDtJQU9FO0lBQWdCLENBQUM7SUFFakIsdUNBQVEsR0FBUjtJQUNBLENBQUM7NEZBTFUsb0JBQW9COzZEQUFwQixvQkFBb0I7WUNQakMsOEJBQ0U7WUFBQSxtQkFDRTtZQURGLDhCQUNFO1lBQUEsNEJBQ0E7WUFBQSw0QkFDQTtZQUFBLDRCQUNBO1lBQUEsNEJBQ0Y7WUFBQSxpQkFBTTtZQUNSLGlCQUFNOzsrQkRQTjtDQWNDLEFBWkQsSUFZQztTQVBZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1sb2FkaW5nLXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gIDxzdmcgY2xhc3M9XCJsb2FkZXJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzNDAgMzQwXCI+XG4gICAgPGNpcmNsZSBjeD1cIjE3MFwiIGN5PVwiMTcwXCIgcj1cIjE2MFwiIHN0cm9rZT1cIiM5ZDEwN2RcIiAvPlxuICAgIDxjaXJjbGUgY3g9XCIxNzBcIiBjeT1cIjE3MFwiIHI9XCIxMzVcIiBzdHJva2U9XCIjNDg2MmFiXCIgLz5cbiAgICA8Y2lyY2xlIGN4PVwiMTcwXCIgY3k9XCIxNzBcIiByPVwiMTEwXCIgc3Ryb2tlPVwiIzlkMTA3ZFwiIC8+XG4gICAgPGNpcmNsZSBjeD1cIjE3MFwiIGN5PVwiMTcwXCIgcj1cIjg1XCIgc3Ryb2tlPVwiIzQ4NjJhYlwiIC8+XG4gIDwvc3ZnPlxuPC9kaXY+Il19