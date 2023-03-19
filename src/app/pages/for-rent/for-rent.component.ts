import { Component } from '@angular/core';
import { Bikes } from 'src/app/services/bikes/Bikes';
import { BikesService } from 'src/app/services/bikes/bikes.service';
import { Cars } from 'src/app/services/cars/Cars';
import { CarsService } from 'src/app/services/cars/cars.service';

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
  
  carHeading:string="Cars";

  constructor(private carService: CarsService, private bikeService: BikesService ){}
  carArr:Cars[]=this.carService.getAllCars();
  motorbikeArr:Bikes[]=this.bikeService.getAllBikes();
}
