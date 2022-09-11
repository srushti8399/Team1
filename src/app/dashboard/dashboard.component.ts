import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/authservice/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[AuthService]
})
export class DashboardComponent implements OnInit {

  checkUserLoginStatus:any={};

  constructor(private route:Router,private obj:AuthService) { 
  

  }
  temp:any= {
    username: "",
    status: false
  }
 
 
  ngOnInit(): void {
   
   
  }

  
  checkIfLogin()
  {
   
    return  this.checkUserLoginStatus;
  }
 

}
