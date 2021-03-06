import { PhoneGridResponse } from './../list-phone/list-phone.component';
import { Injectable } from '@angular/core';
import { PHONE_JPA_API_URL } from './../app.constants';
import { HttpClient } from '@angular/common/http';
import { PhoneItem } from '../list-phone/list-phone.component';

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {

  constructor( private http:HttpClient) { }

  retrieveAllPhones(pageNumber: number) {
    return this.http.get<PhoneGridResponse>(`${PHONE_JPA_API_URL}?page=${pageNumber}`);
    console.log("Retrieving All Data")
  }
}
