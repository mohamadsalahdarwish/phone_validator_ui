import { PhoneGridResponse, InMemorySearchRequest } from './../list-phone/list-phone.component';
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
  }

  filterPhones(inMemorySearch : InMemorySearchRequest){
    return this.http.post<PhoneGridResponse>(
              `${PHONE_JPA_API_URL}/filterbyfield`
                , inMemorySearch);
  }
}
