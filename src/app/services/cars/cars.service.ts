import { Injectable } from '@angular/core';
import { Cars } from './Cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  //cars
  carArr: Cars[]=[
    {
      "carId":201,
      "carName":"Swift",
      "carBrand":"Maruti Suzuki",
      "carEngine":"1197cc",
      "carSeater":4,
      "carMilage":23,
      "carPrice":2599,
      "carOfferPrice":1999,
      "img1":"swift1.webp",
      "img2":"swift2.jpg",
      "img3":"swift3.jpg"
    },
    {
      "carId":202,
      "carName":"Innova Crysta",
      "carBrand":"Toyota",
      "carEngine":"1987cc",
      "carSeater":7, 
      "carMilage":13,
      "carPrice":3599,
      "carOfferPrice":2599,
      "img1":"innova1.jpg",
      "img2":"innova2.jpg",
      "img3":"innova3.jpg"
    },
    {
      "carId":203,
      "carName":"Thar",
      "carBrand":"Mahindra",
      "carEngine":"2184cc",
      "carSeater":4, 
      "carMilage":10,
      "carPrice":3999,
      "carOfferPrice":2999,
      "img1":"thar1.webp",
      "img2":"thar2.webp",
      "img3":"thar3.jpg"
    },
    {
      "carId":202,
      "carName":"Punch",
      "carBrand":"Tata",
      "carEngine":"1199cc",
      "carSeater":5, 
      "carMilage":17,
      "carPrice":1999,
      "carOfferPrice":1499,
      "img1":"punch1.jpg",
      "img2":"punch2.jpg",
      "img3":"punch3.webp"
    }
  ]
  constructor(){}

  //to get all cars
  getAllCars(){
    return this.carArr;
  }
}
