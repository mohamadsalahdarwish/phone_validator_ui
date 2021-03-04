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

@Component({
  selector: 'app-list-phone',
  templateUrl: './list-phone.component.html',
  styleUrls: ['./list-phone.component.css']
})
export class ListPhoneComponent implements OnInit {

  constructor() { }

  phoneList :PhoneItem[]= [
   new PhoneItem('Mohammad','Egypt','valid','111','111-1111-123')
    ,    new PhoneItem('Ayman','Brazil','valid','111','111-1111-123')

  ]

  ngOnInit() {
  }

}
