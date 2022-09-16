import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { AuthService } from '../authservice/auth.service';
import {PeriodicElement} from "../authservice/model/user.model"
import {Router} from '@angular/router'; 
import { AppComponent } from '../../app.component';
import { NavbarComponent } from '../../navbar/navbar.component';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService]
})
export class RegisterComponent implements OnInit {

  username:string="";
  password:string="";
  dbuserobj:PeriodicElement[]=[];

  
  isPass:boolean=false;
  dis: boolean = false;

  message:string="";
 

  constructor(private obj:AuthService,private router:Router,private appOj:AppComponent,private navbar:NavbarComponent) { }

  ngOnInit(): void {
   
    // this.dbuserobj = this.obj.getUsers();
  }

 
 
  
savePerson(form:NgForm){


  if(this.username=="" && this.password=="")
   {
    this.message="username and password is empty"
   }
   else
   if(this.username=="")
   {
    this.message = "username is empty"
    this.dis=true;
   }
   else
   if(this.password=="")
   {
    this.message = "password is empty"
    this.dis=true;
   }
   else 
   {
    // alert(this.password.length)
    if(this.password.length<5)
    {
      this.message = "password legth must be 5 or more"
      this.dis=true;
    }
    else 
    if(this.username.length<2)
    {
      this.message = "username legth must be 2 or more"
      this.dis=true;
    }
    else 
    {
    
  this.obj.register(this.username, this.password).subscribe((item:PeriodicElement) => {
    console.log(item);
    if(item.username)
    {
      this.router.navigate(['/login']);
    }
    // alert(item)

});
    }
   }
   

}

}
