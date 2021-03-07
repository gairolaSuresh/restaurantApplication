import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service'

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {
list:any={}
  constructor(private _ser:ServiceService) { }

  ngOnInit(): void {
    this.getListFromServer()
  }
  getListFromServer(){
    this._ser.bookingList().subscribe(res=>{
           this.list=res
           console.log(this.list)
    })
  }

}
