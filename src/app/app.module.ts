import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { BooktableComponent } from './booktable/booktable.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './service.service';
import { ToastrModule } from 'ngx-toastr'
import { NotifierService } from 'angular-notifier';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ViewBookingComponent,
    BooktableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [ServiceService,NotifierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
