import { Component } from '@angular/core';

import { RequestService } from '../../../services';

@Component({
  selector: 'customer-home',
  templateUrl: 'customer-home.component.html'
})
export class CustomerHomeComponent {
  constructor(private _requestService: RequestService) {
    this.customerProfile = _requestService.getStylistById(1)
      .subscribe(res => res);
  }

  public customerProfile: any; //TODO: interface
}