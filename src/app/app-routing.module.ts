import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CheckAvailabilityComponent } from './check-availability/check-availability.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
// import { FAQComponent } from './faq/faq.component';
import { ForRentComponent } from './pages/for-rent/for-rent.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { RoadTripsComponent } from './pages/road-trips/road-trips.component';

const routes: Routes = [
  {path:"",component:LoginRegisterComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"road-trips",component:RoadTripsComponent},
  // {path: "faq",component:FAQComponent},
  {path:"contacts",component:ContactsComponent},
  {path:"check-availability",component:CheckAvailabilityComponent},
  {path:"for-rent",component:ForRentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
