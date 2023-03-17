import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FAQComponent } from './faq/faq.component';
import { ForRentComponent } from './for-rent/for-rent.component';
import { HomeComponent } from './home/home.component';
import { RoadTripsComponent } from './road-trips/road-trips.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"road-trips",component:RoadTripsComponent},
  {path:"faq",component:FAQComponent},
  {path:"contacts",component:ContactsComponent},
  {path:"for-rent",component:ForRentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
