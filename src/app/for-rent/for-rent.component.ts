import { Component } from '@angular/core';

@Component({
  selector: 'app-for-rent',
  templateUrl: './for-rent.component.html',
  styleUrls: ['./for-rent.component.css']
})
export class ForRentComponent {

  onRentCover:string="On Rent";
  onRentDes:string="Get it without any delay as per your choice and availability";

  categories:string="Categories";

  categoryimg1:string="/assets/"+ "commuter.jpg";
  categoryimg2:string="/assets/"+ "cruiser.jpg";
  categoryimg3:string="/assets/"+ "adventure.jpg";
  

  categoryTitle1:string="Commuter";
  categoryTitle2:string="Cruiser";
  categoryTitle3:string="Adventure";


  categoryDesc1:string="Commuter vehicles are designed specifically for daily transportation needs, such as commuting to work, school, or running errands around town. They are typically lightweight, durable, and easy to ride.";
  categoryDesc2:string="Cruiser are known for their relaxed riding position. They typically have large engines with lots of low-end torque, which makes them well-suited for cruising on long, straight roads.";
  categoryDesc3:string="Adventure vehicles are designed for off-road riding. They have large engines with plenty of power and torque, long-travel suspension, and spoked wheels with knobby tires for better traction on dirt roads. ";

  motorbikes:string="Motorbikes";
  motorbikeArr=[
    {"bikeId":101,"name":"Shine 125","brand":"Honda","engine":"124cc","img":"shine.jpg","price":349,"offerprice":249, "category":"commuter","milage":44},
    {"bikeId":102,"name":"390 Adventure","brand":"KTM","engine":"373cc","img":"ktmAdventure.jpg","price":549,"offerprice":499,"category":"adventure", "milage":34},
    {"bikeId":102,"name":"Meteor 350","brand":"Royal Enfield","engine":"349cc","img":"meteor.jpg","price":499,"offerprice":459,"category":"cruiser", "milage":38} 
  ]
  
  carHeading:string="Cars";
  carArr=[
    {"carId":201,"name":"Swift","brand":"Maruti Suzuki","engine":"373cc","img1":"swift1.webp","img2":"swift2.jpg","img3":"swift3.jpg","price":2599,"offerprice":1999,"seater":4, "milage":23},
    {"carId":202,"name":"Innova Crysta","brand":"Toyota","engine":"373cc","img1":"innova1.jpg","img2":"innova2.jpg","img3":"innova3.jpg","price":3599,"offerprice":2599,"seater":7, "milage":13},
    {"carId":203,"name":"Thar","brand":"Mahindra","engine":"373cc","img1":"thar1.webp","img2":"thar2.webp","img3":"thar3.jpg","price":3999,"offerprice":2999,"seater":4, "milage":10}
    
  ]
  
}
