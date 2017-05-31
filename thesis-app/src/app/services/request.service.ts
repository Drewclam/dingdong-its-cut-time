import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RequestService {
  constructor(private http: Http) {

  }
  postLocation(location: string) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('/location', location, {headers: headers})
  }

  postStylist(stylist: {}) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:1337/api/userstylist', stylist, {headers: headers});
  }

  getStylistById(id: number) {
    return this.http.get(`/api/userStylist/${id}`)
      .map(
        (response: Response) => {
          return response.json();
        }
      )
  }

  getStylistByLocation(location: string) {
    return this.http.get(`/api/stylists/location`)
      .map(
        (response: Response) => {
          return response.json();
        }
      )
  }
}
