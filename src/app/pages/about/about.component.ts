import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  aboutCoverImg:string="aboutCover";
  aboutCover:string="About Us";
  aboutDes:string="";
}
