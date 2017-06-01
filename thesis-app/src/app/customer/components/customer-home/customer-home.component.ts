import { Component } from '@angular/core';

import { RequestService } from '../../../services';
import { LocationService } from '../../../services';

@Component({
  selector: 'customer-home',
  templateUrl: 'customer-home.component.html'
})
export class CustomerHomeComponent {
  constructor(private _requestService: RequestService, private _locationService: LocationService) {
    this.customerProfile = _requestService.getStylistById(0)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
    // this.currentPosition = _locationService.getCurrentPosition()
    //   .subscribe(
    //     res => console.log(res),
    //     err => console.log(err)
    //   );
    this.currentPosition = 'Toronto';
    this.bookings = _requestService.getStylistByLocation(this.currentPosition);
  }

  public customerProfile: any; //TODO: interface
  public currentPosition: any;
  public bookings: any;
}