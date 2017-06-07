import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import auth0 from 'auth0-js';
import { RequestService } from './request.service';
import { StateService } from './state.service';

@Injectable()
export class AuthService {
  constructor(
    public router: Router,
    private requestService: RequestService,
    private stateService: StateService) {}

  auth0 = new auth0.WebAuth({
    clientID: 'h-MD9FFc-_G7Xi_5PRGDYsqkZlxP4Njj',
    domain: 'drewclam.auth0.com',
    responseType: 'token id_token',
    audience: 'https://drewclam.auth0.com/userinfo',
    // redirectUri: 'http://localhost:4200/home',
    scope: 'openid'
  });

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/messages']);
      } else if (err) {
        this.router.navigate(['/messages']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    // send access_token to our server endpoint
    // endpoint
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}