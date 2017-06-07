import { Component, Input, OnInit } from '@angular/core';

import { RequestService, BookingService, StateService} from '../../../services/';

@Component({
   selector: 'stylist-home',
   templateUrl: './stylist-home.component.html'
})
export class StylistHomeComponent implements OnInit {
  constructor(
    private requestService: RequestService,
    private bookingService: BookingService,
    private stateService: StateService
  ) {}

  @Input() stylistProfile;
  public isProfileFetched: boolean = false;
  public bookings: any;

  ngOnInit() {
    this.stylistProfile = this.stateService.retrieveCustomer();

    this.bookingService.fetchBookingsForStylist(this.stylistProfile.id)
      .subscribe(
        data => this.bookings = data,
        err => console.log(err),
        () => this.isProfileFetched = true
      );
  }

  confirmBooking(id: number, index: number) {
    console.log('TODO: color this booking div green');
    this.bookingService.confirmBooking(id)
      .subscribe(
        result => console.log(result),
        err => console.log(err)
      );
  }

  deleteBooking(id: number, index: number) {
    this.bookings.splice(index, 1);
    this.bookingService.deleteBooking(id)
      .subscribe(
        result => console.log(result),
        err => console.log(err)
      );
  }

  completeBooking(id: number, index: number) {
    this.bookings.splice(index, 1);
    this.bookingService.completeBooking(id)
      .subscribe(
        result => console.log(result),
        err => console.log(err)
      );
  }

}