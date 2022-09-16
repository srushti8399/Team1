import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/authservice/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AuthService]
})
export class AppComponent implements OnInit {
  title = 'ProjectA';
  // checkUserLoginStatus:boolean=false;
  checkUserLoginStatus:any={};

  constructor(private obj:AuthService)
  {
   
  }
  
  temp:any= {
    username: "",
    status: false
  }

  dat: any = {};
 
  ngOnInit(): void {
  } 
 
  checkIfLogin()
  {
    if(localStorage.getItem("islogin")=="true")
    {
      this.dat = localStorage.getItem("profile");
      this.dat = JSON.parse(this.dat);
      this.temp.name = this.dat.name;
      this.temp.status = true;
    } 
    return this.temp;
  }



}
