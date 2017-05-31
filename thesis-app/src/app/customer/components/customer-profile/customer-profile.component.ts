import { Component, Input } from '@angular/core';

@Component({
  selector: 'customer-profile',
  templateUrl: './customer-profile.component.html'
})
export class CustomerProfileComponent {
  // @Input() customerProfile: any; // TODO: interface
  @Input() customerProfile: any = {
    name: 'andrew',
    image_url: 'https://qph.ec.quoracdn.net/main-qimg-3b0b70b336bbae35853994ce0aa25013-c',
    longitude: 3,
    latitude: 3,
    payments: ['creditcard1', 'creditcard2']
  }

  public showView: boolean = true;

  public showAccountView() {
    this.showView = true;
  }

  public showPaymentView() {
    this.showView = false;
  }

  public handleDeleteAccount() {
    console.log('TODO: DELETE account');
  }

  public handleSaveChanges() {
    console.log('TODO: PUT the changes');
  }
}