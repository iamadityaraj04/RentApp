import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RoadTripsComponent } from './pages/road-trips/road-trips.component';
import { FAQComponent } from './pages/faq/faq.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ForRentComponent } from './pages/for-rent/for-rent.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { CheckAvailabilityComponent } from './check-availability/check-availability.component';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
