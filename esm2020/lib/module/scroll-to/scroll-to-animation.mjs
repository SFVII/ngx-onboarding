import { ReplaySubject } from 'rxjs';
import { EASING } from './scroll-to-helpers';
/** Scroll To Animation */
export class ScrollToAnimation {
    /**
     * Class Constructor.
     *
     * @param container            The Container
     * @param listenerTarget       The Element that listens for DOM Events
     * @param isWindow             Whether or not the listener is the Window
     * @param to                   Position to scroll to
     * @param options              Additional options for scrolling
     * @param isBrowser            Whether or not execution runs in the browser
     *                              (as opposed to the server)
     */
    constructor(container, listenerTarget, isWindow, to, options, isBrowser) {
        this.container = container;
        this.listenerTarget = listenerTarget;
        this.isWindow = isWindow;
        this.to = to;
        this.options = options;
        this.isBrowser = isBrowser;
        /** Recursively loop over the Scroll Animation */
        this.loop = () => {
            this.timeLapsed += this.tick;
            this.percentage = (this.timeLapsed / this.options.duration);
            this.percentage = (this.percentage > 1) ? 1 : this.percentage;
            // Position Update
            this.position = this.startPosition +
                ((this.startPosition - this.to <= 0 ? 1 : -1) *
                    this.distance *
                    EASING[this.options.easing](this.percentage));
            if (this.lastPosition !== null && this.position === this.lastPosition) {
                this.stop();
            }
            else {
                this.source$.next(this.position);
                this.isWindow
                    ? this.listenerTarget.scrollTo(0, Math.floor(this.position))
                    : this.container.scrollTop = Math.floor(this.position);
                this.lastPosition = this.position;
            }
        };
        this.tick = 16;
        this.interval = null;
        this.lastPosition = null;
        this.timeLapsed = 0;
        this.windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (!this.container) {
            this.startPosition = this.windowScrollTop;
        }
        else {
            this.startPosition = this.isWindow ? this.windowScrollTop : this.container.scrollTop;
        }
        // Correction for Starting Position of nested HTML Elements
        if (this.container && !this.isWindow) {
            this.to = this.to - this.container.getBoundingClientRect().top + this.startPosition;
        }
        // Set Distance
        const directionalDistance = this.startPosition - this.to;
        this.distance = this.container ? Math.abs(this.startPosition - this.to) : this.to;
        this.mappedOffset = this.options.offset;
        // Set offset from Offset Map
        if (this.isBrowser) {
            this.options
                .offsetMap
                .forEach((value, key) => this.mappedOffset = window.innerWidth > key ? value : this.mappedOffset);
        }
        this.distance += this.mappedOffset * (directionalDistance <= 0 ? 1 : -1);
        this.source$ = new ReplaySubject();
    }
    /**
     * Start the new Scroll Animation.
     *
     * @returns         Observable containing a number
     */
    start() {
        clearInterval(this.interval);
        this.interval = setInterval(this.loop, this.tick);
        return this.source$.asObservable();
    }
    /**
     * Stop the current Scroll Animation Loop.
     *
     * @param force          Force to stop the Animation Loop
     * @returns               Void
     */
    stop() {
        clearInterval(this.interval);
        this.interval = null;
        this.source$.complete();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXRvLWFuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9tb2R1bGUvc2Nyb2xsLXRvL3Njcm9sbC10by1hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUdqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFN0MsMEJBQTBCO0FBQzFCLE1BQU0sT0FBTyxpQkFBaUI7SUFtQzVCOzs7Ozs7Ozs7O09BVUc7SUFDSCxZQUNVLFNBQXNCLEVBQ3RCLGNBQXNDLEVBQzdCLFFBQWlCLEVBQ2pCLEVBQVUsRUFDVixPQUE4QixFQUN2QyxTQUFrQjtRQUxsQixjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUF3QjtRQUM3QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQUN2QyxjQUFTLEdBQVQsU0FBUyxDQUFTO1FBNEQ1QixpREFBaUQ7UUFDekMsU0FBSSxHQUFHLEdBQVMsRUFBRTtZQUV4QixJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBRTlELGtCQUFrQjtZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhO2dC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QyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JHO1FBRUQsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSztRQUNILGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQUk7UUFDRixhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUIsQ0FBQztDQXlCRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU2Nyb2xsVG9Db25maWdPcHRpb25zLCBTY3JvbGxUb0xpc3RlbmVyVGFyZ2V0IH0gZnJvbSAnLi9zY3JvbGwtdG8tY29uZmlnLmludGVyZmFjZSc7XHJcblxyXG5pbXBvcnQgeyBFQVNJTkcgfSBmcm9tICcuL3Njcm9sbC10by1oZWxwZXJzJztcclxuXHJcbi8qKiBTY3JvbGwgVG8gQW5pbWF0aW9uICovXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxUb0FuaW1hdGlvbiB7XHJcblxyXG4gIC8qKiBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZvciBlYWNoIFRpY2sgKi9cclxuICBwcml2YXRlIHRpY2s6IG51bWJlcjtcclxuXHJcbiAgLyoqIEludGVydmFsICovXHJcbiAgcHJpdmF0ZSBpbnRlcnZhbDogYW55O1xyXG5cclxuICAvKiogVGltZSBMYXBzZWQgaW4gbWlsbGlzZWNvbmRzICovXHJcbiAgcHJpdmF0ZSB0aW1lTGFwc2VkOiBudW1iZXI7XHJcblxyXG4gIC8qKiBQZXJjZW50YWdlIG9mIHRpbWUgbGFwc2VkICovXHJcbiAgcHJpdmF0ZSBwZXJjZW50YWdlOiBudW1iZXI7XHJcblxyXG4gIC8qKiBQb3NpdGlvbiBvZiB0aGUgRWxlbWVudCAqL1xyXG4gIHByaXZhdGUgcG9zaXRpb246IG51bWJlcjtcclxuXHJcbiAgLyoqIExhc3QgRWxlbWVudCBQb3NpdGlvbiAqL1xyXG4gIHByaXZhdGUgbGFzdFBvc2l0aW9uOiBudW1iZXI7XHJcblxyXG4gIC8qKiBTdGFydCBQb3NpdGlvbiBvZiB0aGUgRWxlbWVudCAqL1xyXG4gIHByaXZhdGUgc3RhcnRQb3NpdGlvbjogbnVtYmVyO1xyXG5cclxuICAvKiogVGhlIERpc3RhbmNlIHRvIHNjcm9sbCAqL1xyXG4gIHByaXZhdGUgZGlzdGFuY2U6IG51bWJlcjtcclxuXHJcbiAgLyoqIE9ic2VydmFibGUgU291cmNlICovXHJcbiAgcHJpdmF0ZSBzb3VyY2UkOiBSZXBsYXlTdWJqZWN0PG51bWJlcj47XHJcblxyXG4gIC8qKiBTY3JvbGwgVG9wIG9mIHRoZSBXaW5kb3cgKi9cclxuICBwcml2YXRlIHdpbmRvd1Njcm9sbFRvcDogbnVtYmVyO1xyXG5cclxuICAvKiogTWFwcGVkIE9mZnNldCB0YWtlbiBmcm9tIHRoZSBhY3RpdmUgT2Zmc2V0IE1hcCAqL1xyXG4gIHByaXZhdGUgbWFwcGVkT2Zmc2V0OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIENsYXNzIENvbnN0cnVjdG9yLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbnRhaW5lciAgICAgICAgICAgIFRoZSBDb250YWluZXJcclxuICAgKiBAcGFyYW0gbGlzdGVuZXJUYXJnZXQgICAgICAgVGhlIEVsZW1lbnQgdGhhdCBsaXN0ZW5zIGZvciBET00gRXZlbnRzXHJcbiAgICogQHBhcmFtIGlzV2luZG93ICAgICAgICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBsaXN0ZW5lciBpcyB0aGUgV2luZG93XHJcbiAgICogQHBhcmFtIHRvICAgICAgICAgICAgICAgICAgIFBvc2l0aW9uIHRvIHNjcm9sbCB0b1xyXG4gICAqIEBwYXJhbSBvcHRpb25zICAgICAgICAgICAgICBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHNjcm9sbGluZ1xyXG4gICAqIEBwYXJhbSBpc0Jyb3dzZXIgICAgICAgICAgICBXaGV0aGVyIG9yIG5vdCBleGVjdXRpb24gcnVucyBpbiB0aGUgYnJvd3NlclxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFzIG9wcG9zZWQgdG8gdGhlIHNlcnZlcilcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcclxuICAgIHByaXZhdGUgbGlzdGVuZXJUYXJnZXQ6IFNjcm9sbFRvTGlzdGVuZXJUYXJnZXQsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlzV2luZG93OiBib29sZWFuLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0bzogbnVtYmVyLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBTY3JvbGxUb0NvbmZpZ09wdGlvbnMsXHJcbiAgICBwcml2YXRlIGlzQnJvd3NlcjogYm9vbGVhblxyXG4gICkge1xyXG4gICAgdGhpcy50aWNrID0gMTY7XHJcbiAgICB0aGlzLmludGVydmFsID0gbnVsbDtcclxuICAgIHRoaXMubGFzdFBvc2l0aW9uID0gbnVsbDtcclxuICAgIHRoaXMudGltZUxhcHNlZCA9IDA7XHJcblxyXG4gICAgdGhpcy53aW5kb3dTY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwO1xyXG5cclxuICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcclxuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gdGhpcy53aW5kb3dTY3JvbGxUb3A7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSB0aGlzLmlzV2luZG93ID8gdGhpcy53aW5kb3dTY3JvbGxUb3AgOiB0aGlzLmNvbnRhaW5lci5zY3JvbGxUb3A7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29ycmVjdGlvbiBmb3IgU3RhcnRpbmcgUG9zaXRpb24gb2YgbmVzdGVkIEhUTUwgRWxlbWVudHNcclxuICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiAhdGhpcy5pc1dpbmRvdykge1xyXG4gICAgICB0aGlzLnRvID0gdGhpcy50byAtIHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuc3RhcnRQb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgRGlzdGFuY2VcclxuICAgIGNvbnN0IGRpcmVjdGlvbmFsRGlzdGFuY2UgPSB0aGlzLnN0YXJ0UG9zaXRpb24gLSB0aGlzLnRvO1xyXG4gICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMuY29udGFpbmVyID8gTWF0aC5hYnModGhpcy5zdGFydFBvc2l0aW9uIC0gdGhpcy50bykgOiB0aGlzLnRvO1xyXG5cclxuICAgIHRoaXMubWFwcGVkT2Zmc2V0ID0gdGhpcy5vcHRpb25zLm9mZnNldDtcclxuXHJcbiAgICAvLyBTZXQgb2Zmc2V0IGZyb20gT2Zmc2V0IE1hcFxyXG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMub3B0aW9uc1xyXG4gICAgICAgIC5vZmZzZXRNYXBcclxuICAgICAgICAuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGhpcy5tYXBwZWRPZmZzZXQgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IGtleSA/IHZhbHVlIDogdGhpcy5tYXBwZWRPZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlzdGFuY2UgKz0gdGhpcy5tYXBwZWRPZmZzZXQgKiAoZGlyZWN0aW9uYWxEaXN0YW5jZSA8PSAwID8gMSA6IC0xKTtcclxuICAgIHRoaXMuc291cmNlJCA9IG5ldyBSZXBsYXlTdWJqZWN0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydCB0aGUgbmV3IFNjcm9sbCBBbmltYXRpb24uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyAgICAgICAgIE9ic2VydmFibGUgY29udGFpbmluZyBhIG51bWJlclxyXG4gICAqL1xyXG4gIHN0YXJ0KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMubG9vcCwgdGhpcy50aWNrKTtcclxuICAgIHJldHVybiB0aGlzLnNvdXJjZSQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wIHRoZSBjdXJyZW50IFNjcm9sbCBBbmltYXRpb24gTG9vcC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBmb3JjZSAgICAgICAgICBGb3JjZSB0byBzdG9wIHRoZSBBbmltYXRpb24gTG9vcFxyXG4gICAqIEByZXR1cm5zICAgICAgICAgICAgICAgVm9pZFxyXG4gICAqL1xyXG4gIHN0b3AoKTogdm9pZCB7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IG51bGw7XHJcbiAgICB0aGlzLnNvdXJjZSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIC8qKiBSZWN1cnNpdmVseSBsb29wIG92ZXIgdGhlIFNjcm9sbCBBbmltYXRpb24gKi9cclxuICBwcml2YXRlIGxvb3AgPSAoKTogdm9pZCA9PiB7XHJcblxyXG4gICAgdGhpcy50aW1lTGFwc2VkICs9IHRoaXMudGljaztcclxuICAgIHRoaXMucGVyY2VudGFnZSA9ICh0aGlzLnRpbWVMYXBzZWQgLyB0aGlzLm9wdGlvbnMuZHVyYXRpb24pO1xyXG4gICAgdGhpcy5wZXJjZW50YWdlID0gKHRoaXMucGVyY2VudGFnZSA+IDEpID8gMSA6IHRoaXMucGVyY2VudGFnZTtcclxuXHJcbiAgICAvLyBQb3NpdGlvbiBVcGRhdGVcclxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnN0YXJ0UG9zaXRpb24gK1xyXG4gICAgICAoKHRoaXMuc3RhcnRQb3NpdGlvbiAtIHRoaXMudG8gPD0gMCA/IDEgOiAtMSkgKlxyXG4gICAgICAgIHRoaXMuZGlzdGFuY2UgKlxyXG4gICAgICAgIEVBU0lOR1t0aGlzLm9wdGlvbnMuZWFzaW5nXSh0aGlzLnBlcmNlbnRhZ2UpKTtcclxuXHJcbiAgICBpZiAodGhpcy5sYXN0UG9zaXRpb24gIT09IG51bGwgJiYgdGhpcy5wb3NpdGlvbiA9PT0gdGhpcy5sYXN0UG9zaXRpb24pIHtcclxuICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvdXJjZSQubmV4dCh0aGlzLnBvc2l0aW9uKTtcclxuICAgICAgdGhpcy5pc1dpbmRvd1xyXG4gICAgICAgID8gdGhpcy5saXN0ZW5lclRhcmdldC5zY3JvbGxUbygwLCBNYXRoLmZsb29yKHRoaXMucG9zaXRpb24pKVxyXG4gICAgICAgIDogdGhpcy5jb250YWluZXIuc2Nyb2xsVG9wID0gTWF0aC5mbG9vcih0aGlzLnBvc2l0aW9uKTtcclxuICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==