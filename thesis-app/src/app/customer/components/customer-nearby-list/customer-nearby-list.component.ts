import { Component, Input } from '@angular/core';

@Component({
  selector: 'customer-nearby-list',
  templateUrl: './customer-nearby-list.component.html'
})
export class CustomerNearbyListComponent {
  constructor() {
    console.log('inside customer nearby list component',this.bookings);
  }
  @Input() bookings: any;

  // [{ // TODO: replace with booking information from server
  //   name: 'Andrew',
  //   blurb: 'i like to cut hair',
  //   styling: ['perm', 'perm', 'perm']
  // }, {
  //   name: 'Bob',
  //   blurb: 'i dont like to cut hair',
  //   styling: ['merp', 'merp', 'merp']
  // }];
}