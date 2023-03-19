export class Cars{
    carId!:number;
    carName!:string;
    carBrand!:string;
    carEngine!:string;
    carSeater!:number;
    carMilage!:number;
    carPrice!:number;
    carOfferPrice!:number;
    img1!:string;
    img2!:string;
    img3!:string;


    constructor(carId:number,carName:string,carBrand:string,carEngine:string,carSeater:number,carMilage:number,carPrice:number,carOfferPrice:number,img1:string,img2:string,img3:string){
        this.carId=carId;
        this.carName=carName;
        this.carBrand=carBrand;
        this.carEngine=carEngine
        this.carSeater=carSeater;
        this.carMilage=carMilage;
        this.carPrice=carPrice;
        this.carOfferPrice=carOfferPrice;
        this.img1=img1;
        this.img2=img2;
        this.img3=img3;
    }
}