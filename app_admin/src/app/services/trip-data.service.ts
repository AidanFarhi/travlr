import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trips';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  
  baseUrl = 'http://localhost:3000/api'
  url = 'http://localhost:3000/api/trips'

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}
  
  getTrips() : Observable<Trip[]> {
    let url = 'http://localhost:3000/api/trips'
    return this.http.get<Trip[]>(url)
  }

  addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.url, formData)
  }

  getTrip(tripCode: string) : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url + '/' + tripCode)
  }

  updateTrip(formData: Trip) : Observable<Trip> {
    return this.http.put<Trip>(this.url + '/' + formData.code, formData)
  }

  // Call to our /login endpoint, returns JWT
  login(user: User, passwd: string) : Observable<AuthResponse> {
    return this.handleAuthAPICall('login', user, passwd)
  }

  // Call to our /register endpoint, creates user an returns JWT
  register(user: User, passwd: string) : Observable<AuthResponse> {
    return this.handleAuthAPICall('register', user, passwd)
  }

  // helper method to process both login and register methods
  handleAuthAPICall(endpoint: string, user: User, passwd: string) : Observable<AuthResponse> {
    let formData = {
      name: user.name,
      email: user.email,
      password: passwd
    }
    return this.http.post<AuthResponse>(this.baseUrl + '/' + endpoint, formData)
  }
}
