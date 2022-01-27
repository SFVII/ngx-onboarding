import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OnboardingService } from '../../onboarding.service';
let ExitConfirmComponent = class ExitConfirmComponent {
    constructor(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
    }
    ngOnInit() {
    }
    confirm() {
        this.dialogRef.close(true);
        this.service.canExit$.next(true);
    }
    cancel() {
        this.dialogRef.close(false);
        this.service.canExit$.next(false);
    }
};
ExitConfirmComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: MatDialogRef },
    { type: OnboardingService }
];
ExitConfirmComponent = __decorate([
    Component({
        selector: 'lib-exit-confirm',
        template: "<mat-dialog-content>\n    <div class=\"header\">\n        Attention !\n    </div>\n    <p>Toutes vos donn\u00E9es seront perdues, \u00EAtes-vous certain de vouloir continuer ?</p>\n    <button (click)=\"confirm()\" mat-button class=\"nowboard-btn\" style=\"margin-top: 10px\">\n        Confirmer\n    </button>\n\n    <button (click)=\"cancel()\" mat-button class=\"cancel_btn\">\n        Annuler\n    </button>\n</mat-dialog-content>",
        styles: ["mat-dialog-content{display:flex!important;flex-direction:column!important}mat-dialog-content .header{color:#171f26;font:900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content .nowboard-btn{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}mat-dialog-content p{color:#171f26;font:18px/24px nexa,Text;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content .cancel_btn{background-color:transparent!important;margin-top:10px}mat-dialog-content button{width:50%;margin:auto}"]
    }),
    __param(0, Inject(MAT_DIALOG_DATA))
], ExitConfirmComponent);
export { ExitConfirmComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpdC1jb25maXJtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9leGl0LWNvbmZpcm0vZXhpdC1jb25maXJtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQU83RCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUUvQixZQUErQyxJQUFTLEVBQ2hELFNBQTZDLEVBQVUsT0FBMEI7UUFEMUMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUNoRCxjQUFTLEdBQVQsU0FBUyxDQUFvQztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW1CO0lBQUssQ0FBQztJQUUvRixRQUFRO0lBQ1IsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUNELE1BQU07UUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDbkMsQ0FBQztDQUVGLENBQUE7OzRDQWZnQixNQUFNLFNBQUMsZUFBZTtZQUNsQixZQUFZO1lBQXlDLGlCQUFpQjs7QUFIOUUsb0JBQW9CO0lBTGhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsOGJBQTRDOztLQUU3QyxDQUFDO0lBR2UsV0FBQSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUE7R0FGM0Isb0JBQW9CLENBaUJoQztTQWpCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1leGl0LWNvbmZpcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhpdC1jb25maXJtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhpdC1jb25maXJtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXhpdENvbmZpcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55LFxuICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEV4aXRDb25maXJtQ29tcG9uZW50PiwgcHJpdmF0ZSBzZXJ2aWNlIDpPbmJvYXJkaW5nU2VydmljZSkgIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgY29uZmlybSgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0cnVlKTtcbiAgICB0aGlzLnNlcnZpY2UuY2FuRXhpdCQubmV4dCh0cnVlKVxuICB9IFxuICBjYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoZmFsc2UpO1xuICAgIHRoaXMuc2VydmljZS5jYW5FeGl0JC5uZXh0KGZhbHNlKVxuICB9XG5cbn1cbiJdfQ==