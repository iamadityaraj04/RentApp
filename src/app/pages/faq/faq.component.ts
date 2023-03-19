import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {
  
  faqCover:string="Frequently Asked Questions";
  faqDes:string="These are the common queries asked by our cutomers. Hope it will resolve all your doubts.";

  question1:string="Do you provide any discount for monthly service?"
  answer1: string=" Yes we do. We are have some special discount for the custome wo are looking for monthly service. For more information please contact us asap."

  question2:string="What types of vehicles are available for rent?"
  answer2: string="We have bikes and cars of commuter, cruiser and adventure segments."
  
  question3:string="What are the requirements for renting a vehicle?"
  answer3: string="For renting a vehicle you must have driving licence."


}

