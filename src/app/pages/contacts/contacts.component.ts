import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contactsCover:string="Contacts";
  contactsDes:string="";

  customerFname:string="";
  customerLname:string="";
  customerEmail:string="";
  customerMessage:string="";
  formSubmit(){
    if(this.customerFname=="" || this.customerLname=="" || this.customerEmail==""){
      alert(`Every field is mandatory. Please fill it properly.`); 
    }
    else{
      alert(`Thank you ${this.customerFname} ${this.customerLname} for writing us.`);
      window.location.reload();
    }
  }


  phnNumber:string="+91 987-654-3210";
  email:string="rent.it@gmail.com";
  address: string="34 M2, Gurugram, Haryana, 122008"
}
