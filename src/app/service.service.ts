import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private _bookTable = "http://localhost:8000/api/bookTable";
  private _bookingList = "http://localhost:8000/api/booking/list";

  constructor(private http: HttpClient,
    private _router: Router) { }


    bookTable(data:any) {
      return this.http.post<any>(this._bookTable,data)
    }
  
    bookingList() {
      return this.http.get<any>(this._bookingList)
    }
}
