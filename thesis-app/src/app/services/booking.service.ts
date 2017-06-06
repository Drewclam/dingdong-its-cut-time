import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BookingService {
  constructor(private http: Http) {}

  addBooking(booking) {
    return this.http.post(`/api/bookings`, booking)
      .map(res => res);
  }

  fetchBookingsForStylist(id: number) {
    return this.http.get(`/api/bookings/${id}`)
      .map(res => res.json());
  }

  fetchBookingsForPayment(id: number) {
    return this.http.get(`/api/bookings/complete/${id}`)
      .map(res => res.json());
  }

  confirmBooking(id: number) {
    return this.http.put(`/api/bookings/${id}`, id)
      .map(res => res.json());
  }

  deleteBooking(id: number) {
    return this.http.delete(`/api/bookings/${id}`)
      .map(res => res);
  }

  completeBooking(id: number) {
    return this.http.put(`/api/bookings/complete/${id}`, id)
      .map(res => res.json());
  }
}