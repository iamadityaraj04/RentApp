import { Injectable } from '@angular/core';
import { Bikes } from './Bikes';

@Injectable({
  providedIn: 'root'
})
export class BikesService {

  //bikes
  bikeArr: Bikes[]=[
    {
      "bikeId":101,
      "bikeName":"Shine 125",
      "bikeBrand":"Honda",
      "bikeEngine":"124cc",
      "img":"shine.jpg",
      "bikePrice":349,
      "bikeOfferPrice":249, 
      "bikeCategory":"commuter",
      "bikeMilage":44
    },
    {
      "bikeId":102,
      "bikeName":"390 Adventure",
      "bikeBrand":"KTM",
      "bikeEngine":"373cc",
      "img":"ktmAdventure.jpg",
      "bikePrice":549,
      "bikeOfferPrice":499,
      "bikeCategory":"adventure",
      "bikeMilage":34
    },
    {
      "bikeId":102,
      "bikeName":"Meteor 350",
      "bikeBrand":"Royal Enfield",
      "bikeEngine":"349cc",
      "img":"meteor.jpg",
      "bikePrice":499,
      "bikeOfferPrice":459,
      "bikeCategory":"cruiser", 
      "bikeMilage":38
    }
  ]
  constructor(){}

  // to get all bikes
  getAllBikes(){
    return this.bikeArr;
  }
}
