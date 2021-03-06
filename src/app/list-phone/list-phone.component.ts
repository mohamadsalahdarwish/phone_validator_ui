import { PhoneServiceService } from './../service/phone-service.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';

export class PhoneItem {

  value ="";

  constructor(public name:string,
    public  country :string,
    public state :string,
    public countryCode:string,
    public number:string
  ){

  }
}

export class PhoneGridResponse  {
  constructor(public totalPages: number,
     public  phones: PhoneItem[], public totalElements:number){

     }

}

export class InMemorySearchRequest {
  constructor(public field:string,
    public  criteria :string,
    public pageNo:number
  ){

  }
}







@Component({
  selector: 'app-list-phone',
  templateUrl: './list-phone.component.html',
  styleUrls: ['./list-phone.component.css']
})
export class ListPhoneComponent implements OnInit {

    isDataFound : boolean = false;
    totalPages : number;

  constructor(    public phoneService:PhoneServiceService ) { }

  phoneList :PhoneItem[];


  thePageSize: number = 5;
  theTotalElements: number = 0;
  pageEvent: PageEvent;



  ngOnInit() {
    this.phoneService.retrieveAllPhones(1).subscribe(
      response => {
        console.log(response);
        this.phoneList = response.phones;
        this.totalPages = response.totalPages;
        this.theTotalElements =  response.totalElements;
        if(this.phoneList.length >0) this.isDataFound = true;
      }
    )
  }


  retrieveDataByPage(pageNumber :number){

    this.phoneService.retrieveAllPhones(pageNumber+1).subscribe(
      response => {
        console.log(response);
        this.phoneList = response.phones;
      }
    )
  }

}
