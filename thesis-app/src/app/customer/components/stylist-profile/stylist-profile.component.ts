import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { RequestService } from '../../../services';

@Component({
  selector: 'stylist-profile',
  templateUrl: './stylist-profile.component.html'
})
export class StylistProfileComponent implements OnInit {
  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        params => this.stylistId = +params['id'],
        err => console.log(err)
      );
    this.requestService.getStylistById(this.stylistId)
     .subscribe(
       data => this.stylistProfile = data,
       err => console.log(err)
     );
  }

  public stylistProfile: any; // TODO: interface this
  public isShowModal: boolean = false;
  private stylistId: number;

  public showModal() {
    this.isShowModal = true;
  }

  public hideModal() {
    this.isShowModal = false;
  }

  public submitMessage(message) {
    console.log('submit message ', message);
  }
}