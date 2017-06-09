import { Component, Input, Output, EventEmitter } from '@angular/core';

import { StripeService } from '../../../../services';

@Component({
  selector: 'payment-input',
  template: `<div class="glyphicon glyphicon-usd" (click)="openCheckout()"><span>{{this.stylistName}}</span></div>`,
  styleUrls: ['./payment-input.component.css']
})
export class PaymentInputComponent {
  constructor(private stripeService: StripeService) {}

  @Input() stylistName: string;
  @Output() public isPaymentProcessed = new EventEmitter();

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_sQaWXln9tozJFEdLFrFHgNUU',
      locale: 'auto',
      token: (token: any) => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        this.stripeService.postToken(token.id)
          .subscribe(
            data => this.emitPaymentProcessed(data),
            err => this.emitPaymentProcessed(err)
          );
      }
    });

    handler.open({
      name: 'It\'s Cut Time',
      description: `Payment to: ${this.stylistName}`,
      amount: 2000
    });
  }

  emitPaymentProcessed(event) {
    this.isPaymentProcessed.emit(event);
  }
}