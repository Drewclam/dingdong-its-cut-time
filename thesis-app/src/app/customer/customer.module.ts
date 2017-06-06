import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { UiModule } from '../ui/ui.module';

import {
  StripeService,
  LocationService,
  StylistService,
  DeletionService,
  MessageService
} from '../services';

import {
  CustomerHomeComponent,
  CustomerNavbarComponent,
  CustomerDropDownComponent,
  CloseToYouComponent,
  CustomerMapComponent,
  CustomerMessageComponent,
  CustomerInboxComponent,
  StylistProfileComponent,
  CustomerProfileComponent,
  ChatHistoryComponent
} from './components';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAkYemtun-klcWc0toJ5R7gLtmHuPO32Xk' // TODO: Hide key
    }),
    UiModule
  ],
  declarations: [
    CustomerHomeComponent,
    CustomerNavbarComponent,
    CustomerDropDownComponent,
    CloseToYouComponent,
    CustomerMapComponent,
    CustomerMessageComponent,
    CustomerInboxComponent,
    StylistProfileComponent,
    CustomerProfileComponent,
    ChatHistoryComponent
  ],
  providers: [
    StripeService,
    LocationService,
    StylistService,
    DeletionService,
    MessageService
   ],
 exports: [
   CustomerNavbarComponent
 ]
})

export class CustomerModule {}