import { Component, OnInit } from '@angular/core';
import { NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import {ServiceService} from '../service.service'
import { NotificationService } from '../notification.service'

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.css'],
  providers: [
    {
        provide: NgbDateAdapter,
        useClass: NgbDateNativeAdapter
    },
  ]
})
export class BooktableComponent implements OnInit {
  date_filter = true;
  date_range=1;
  overFlow: any;
  end_date = new Date();
  date = new Date(this.end_date.getFullYear(), this.end_date.getMonth(), this.end_date.getDate());
  minDateForStartDate = {year : this.end_date.getFullYear(),month : this.end_date.getMonth() -2,day : 1};
  minDateForEndDate = {year : this.end_date.getFullYear(),month : this.end_date.getMonth() -2,day : 1};
  person:any="2 Person"
  timeValue:any="07:00 PM"
  location:string="Noida"
  data: any = {};


  constructor(private _ser:ServiceService,private notifyService : NotificationService) { 
  }

  ngOnInit(): void {
  }
  customDate() {
    this.date_filter = true;
    this.date_range = 7;
  }

  changeOverFlow(){
    if(!this.overFlow){
        this.overFlow=!this.overFlow;
    }
  }

  onDateSelect(e:any) {
    this.minDateForEndDate = e;
    this.end_date = new Date(e.year, e.month-1, e.day);
}

onSubmit(){
  this.data['person']=this.person,
  this.data['timeValue']=this.timeValue,
  this.data['location']=this.location,
  this.data['date']=this.date

      this._ser.bookTable(this.data)
      .subscribe(res => {
this.notifyService.showSuccess("Your Table is Booked !!", "noidaClub.com")   
   });
}




}
