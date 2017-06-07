import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';

import { StateService, AuthService } from '../services';

import {
  SignInFormComponent,
  SignInInputComponent,
  UsernamePasswordComponent,
  RegistrationHeaderComponent,
  SignUpStylistFormComponent,
  SignUpFormComponent,
  SignupUserComponent,
  SignupStylistComponent
} from './components';


@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    SignInFormComponent,
    SignInInputComponent,
    UsernamePasswordComponent,
    RegistrationHeaderComponent,
    SignUpStylistFormComponent,
    SignUpFormComponent,
    SignupUserComponent,
    SignupStylistComponent
  ],
  providers: [
    FormBuilder,
    StateService,
    AuthService
  ]
})

export class RegistrationModule {}