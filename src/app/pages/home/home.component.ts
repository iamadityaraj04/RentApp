import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  quote1:string="Make your trip enjoyable";
  quote2:string="with rent.it";
  quote3:string="Travel The Way You Want It.";

  heading1:string="Why Book With Us";
  subcontainer1Text:string="Roadside Assistance";
  subcontainer2Text:string="Trip Advice";
  subcontainer3Text:string="Unlimited Kilometers";
  subcontainer4Text:string="No Booking Fees";

  stepheading:string="Book Your Ride In 3 Easy Steps";

  stepDescription1:string="Planning a trip can be both exciting and overwhelming. To make the most of your travel experience, it's important to consider several factors such as your budget, destination, travel dates, accommodation, transportation, and activities.";
  stepDescription2:string="Booking your ride in advance can save you time, money, and stress. Whether you're traveling to the airport, a business meeting, or going on a vaccation, it's important to plan ahead and make sure you have reliable transportation.";
  stepDescription3:string="Hitting the road can be an exciting and adventurous experience. Whether you're embarking on a road trip, or simply taking a leisurely drive.";


  explore:string="Find Your Road Trip";
  exploreBtn:string="Disover Trip Ideas";

  testimonialsHeading:string="What People Say About Us";

  testimonials1:string="I recently rented a motorcycle from this rental service and had an excellent experience. The staff was friendly and helpful, the booking process was easy, and the motorcycle was in great condition. I highly recommend this service to anyone looking for a hassle-free rental experience.";
  testimonials2:string="I had an amazing experience renting a vehicle from this rental service. The entire process was quick and easy, from the booking to the pick-up and return.";
  testimonials3:string="Thank you so much for helping us out with the change in pick up. It is really appreciated. Fantastic service as always.";

  reviwerName1:string="Aditya Raj";
  reviwerName2:string="Rishav Nayak";
  reviwerName3:string="Shweta";
  
  follow:string="Follow Us @rent.it";

  gallaryImage1:string="/assets/gallaryimg1.jpg"
  gallaryImage2:string="/assets/gallaryimg2.jpg"
  gallaryImage3:string="/assets/gallaryimg3.jpg"
  gallaryImage4:string="/assets/gallaryimg4.jpg"
}
