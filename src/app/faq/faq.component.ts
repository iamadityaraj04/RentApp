import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {
  
  faqCover:string="Frequently Asked Questions";
  faqDes:string="These are the common queries asked by our cutomers. Hope it will resolve all your doubts.";
}
