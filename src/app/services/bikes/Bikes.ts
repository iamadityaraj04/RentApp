export class Bikes{
    bikeId!:number;
    bikeName!:string;
    bikeBrand!:string;
    bikeEngine!:string;
    bikeCategory!:string;
    bikeMilage!:number;
    bikePrice!:number;
    bikeOfferPrice!:number;
    img!:string;


    constructor(bikeId:number,bikeName:string,bikeBrand:string,bikeEngine:string,bikeCategory:string,bikeMilage:number,bikePrice:number,bikeOfferPrice:number,img:string){
        this.bikeId=bikeId;
        this.bikeName=bikeName;
        this.bikeBrand=bikeBrand;
        this.bikeEngine=bikeEngine;
        this.bikeCategory=bikeCategory;
        this.bikeMilage=bikeMilage;
        this.bikePrice=bikePrice;
        this.bikeOfferPrice=bikeOfferPrice;
        this.img=img;
    }
}