import { PhoneServiceService } from './../service/phone-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSelectChange, PageEvent } from '@angular/material';

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


export class Filter {
  constructor(public label:string,
    public  value :string
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
    selectedFilter ="";
    selectedFilterValue = "";
    filterApplied:boolean = false;
    previouslyChoosenFilter = "";
    @ViewChild('paginator') paginator: MatPaginator;


  constructor(    public phoneService:PhoneServiceService ) { }

  phoneList :PhoneItem[];

  searchFields : Filter[]=[
   new Filter('Country','country'),
   new Filter('State','state'),
  ];


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


  retrieveAllDataByPage(pageNumber :number){
    if(this.filterApplied)        this.paginator.firstPage();


    this.phoneService.retrieveAllPhones(pageNumber).subscribe(
      response => {
        console.log(response);
        this.filterApplied = false;
        this.phoneList = response.phones;
        this.totalPages = response.totalPages;
        this.theTotalElements =  response.totalElements;

      }
    )
  }

  applyFilter(index:number){
    if(this.selectedFilter != "" && this.selectedFilterValue != null){

      if(!this.filterApplied)  {
        this.filterApplied = true;
              this.paginator.firstPage();
      }
      if(this.previouslyChoosenFilter != this.selectedFilter){
      this.previouslyChoosenFilter = this.selectedFilter;
      this.paginator.firstPage();

      }

    let searchRequest : InMemorySearchRequest = new InMemorySearchRequest(this.selectedFilterValue , this.selectedFilter ,index)
    this.phoneService.filterPhones(searchRequest)
    .subscribe (
      data => {
        console.log(data);
        this.phoneList = data.phones;
        this.totalPages = data.totalPages;
        this.theTotalElements =  data.totalElements;

      }
    )
    }

  }

  showData(index:number){
    console.log(this.filterApplied )
    index = index+1;
    console.log('showData'+ index)
    if(this.filterApplied === true){
      this.applyFilter(index);
    }else{
    this.retrieveAllDataByPage(index);
    }
  }

  removeFilter(){
    this.retrieveAllDataByPage(1);
    this.selectedFilter="";
    this.selectedFilterValue="";
    this.paginator.firstPage();
  }


  getSearchValues(){
    //this should be implemented in back end but for simplicity I made it manually
    if(this.selectedFilter == 'country'){
      return ['Morocco','Mozambique','Uganda','Ethiopia','Cameroon'];
    }else  if(this.selectedFilter == 'state'){
      return ['valid','unvalid'];
    }
  }

}
