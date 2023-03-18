import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RoadTripsComponent } from './road-trips/road-trips.component';
import { FAQComponent } from './faq/faq.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ForRentComponent } from './for-rent/for-rent.component';
import { FormsModule } from '@angular/forms';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { CheckAvailabilityComponent } from './check-availability/check-availability.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    RoadTripsComponent,
    FAQComponent,
    ContactsComponent,
    ForRentComponent,
    LoginRegisterComponent,
    CheckAvailabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
