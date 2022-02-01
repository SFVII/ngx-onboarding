import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OnboardingService } from '../../onboarding.service';
var ExitConfirmComponent = /** @class */ (function () {
    function ExitConfirmComponent(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
    }
    ExitConfirmComponent.prototype.ngOnInit = function () {
    };
    ExitConfirmComponent.prototype.confirm = function () {
        this.dialogRef.close(true);
        this.service.canExit$.next(true);
    };
    ExitConfirmComponent.prototype.cancel = function () {
        this.dialogRef.close(false);
        this.service.canExit$.next(false);
    };
    ExitConfirmComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: MatDialogRef },
        { type: OnboardingService }
    ]; };
    ExitConfirmComponent = __decorate([
        Component({
            selector: 'lib-exit-confirm',
            template: "<mat-dialog-content>\n    <div class=\"header\">\n        Attention !\n    </div>\n    <p>Toutes vos donn\u00E9es seront perdues, \u00EAtes-vous certain de vouloir continuer ?</p>\n    <button (click)=\"confirm()\" mat-button class=\"nowboard-btn\" style=\"margin-top: 10px\">\n        Confirmer\n    </button>\n\n    <button (click)=\"cancel()\" mat-button class=\"cancel_btn\">\n        Annuler\n    </button>\n</mat-dialog-content>",
            styles: ["mat-dialog-content{display:flex!important;flex-direction:column!important}mat-dialog-content .header{color:#171f26;font:900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content .nowboard-btn{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}mat-dialog-content p{color:#171f26;font:18px/24px nexa,Text;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content .cancel_btn{background-color:transparent!important;margin-top:10px}mat-dialog-content button{width:50%;margin:auto}"]
        }),
        __param(0, Inject(MAT_DIALOG_DATA))
    ], ExitConfirmComponent);
    return ExitConfirmComponent;
}());
export { ExitConfirmComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpdC1jb25maXJtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9leGl0LWNvbmZpcm0vZXhpdC1jb25maXJtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQU83RDtJQUVFLDhCQUErQyxJQUFTLEVBQ2hELFNBQTZDLEVBQVUsT0FBMEI7UUFEMUMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUNoRCxjQUFTLEdBQVQsU0FBUyxDQUFvQztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW1CO0lBQUssQ0FBQztJQUUvRix1Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELHNDQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUNELHFDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDbkMsQ0FBQzs7Z0RBYmMsTUFBTSxTQUFDLGVBQWU7Z0JBQ2xCLFlBQVk7Z0JBQXlDLGlCQUFpQjs7SUFIOUUsb0JBQW9CO1FBTGhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsOGJBQTRDOztTQUU3QyxDQUFDO1FBR2UsV0FBQSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUE7T0FGM0Isb0JBQW9CLENBaUJoQztJQUFELDJCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FqQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZXhpdC1jb25maXJtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4aXQtY29uZmlybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2V4aXQtY29uZmlybS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEV4aXRDb25maXJtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvciggIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueSxcbiAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxFeGl0Q29uZmlybUNvbXBvbmVudD4sIHByaXZhdGUgc2VydmljZSA6T25ib2FyZGluZ1NlcnZpY2UpICB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGNvbmZpcm0oKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodHJ1ZSk7XG4gICAgdGhpcy5zZXJ2aWNlLmNhbkV4aXQkLm5leHQodHJ1ZSlcbiAgfSBcbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKGZhbHNlKTtcbiAgICB0aGlzLnNlcnZpY2UuY2FuRXhpdCQubmV4dChmYWxzZSlcbiAgfVxuXG59XG4iXX0=