import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooktableComponent } from './booktable/booktable.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/view/bookingTables',
    pathMatch:"full"     },
  {
    path: 'view/bookingTables',
    component: ViewBookingComponent,
     },
     {
      path: 'bookTable',
      component: BooktableComponent,
       },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
