import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit{

  ngOnInit(): void {
    const localData=localStorage.getItem('registerUser');
    if(localData!=null){
      this.registerUser=JSON.parse(localData);
    }
  }

  validUser:boolean=false;
  registerUser:any[]=[];
  
  
  
  registerObj:any={
    name: '',
    email: '',
    password: ''
  };
  
  loginObj={
    email: '',
    password: ''
  };
  constructor(private router:Router) {
    
  }
  
  onRegister(){
    this.registerUser.push(this.registerObj);
    localStorage.setItem('registerUser',JSON.stringify(this.registerUser)); 
    this.registerObj={
      name:'',
      email:'',
      password:''
    };
    window.location.reload();
  }
  onLogin(){
    const isUserExist=this.registerUser.find(
      user => user.email==this.loginObj.email && user.password==this.loginObj.password
    );
    if(isUserExist!=undefined){
      this.validUser=true;
      
    }else{
      alert("Wrong email or password.")
    }
  }
  bLogIn:boolean=true;
  displayLogin(){
    this.bLogIn=true;
  }
  displayRegister(){
    this.bLogIn=false;
  }

}
