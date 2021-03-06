import { PhoneServiceService } from './../service/phone-service.service';
import { Component, OnInit } from '@angular/core';

export class PhoneItem {
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
     public  phones: PhoneItem[]){

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
    pageSize : number;

  constructor(    public phoneService:PhoneServiceService ) { }

  phoneList :PhoneItem[];



  ngOnInit() {
    this.phoneService.retrieveAllPhones(1).subscribe(
      response => {
        console.log(response);
        this.phoneList = response.phones;
        this.pageSize = response.totalPages;
        if(this.phoneList.length >0) this.isDataFound = true;
      }
    )
  }


  retrieveDataByPage(pageNumber :number){
    this.phoneService.retrieveAllPhones(pageNumber).subscribe(
      response => {
        console.log(response);
        this.phoneList = response.phones;
        this.pageSize = response.totalPages;
        if(this.phoneList.length >0) this.isDataFound = true;
      }
    )
  }

}
