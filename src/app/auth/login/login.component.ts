import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { AuthService } from '../authservice/auth.service';
import { PeriodicElement } from "../authservice/model/user.model"
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AppComponent } from '../../app.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MatError } from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {




  username: string = "";
  password: string = "";

  isPass:boolean=false;
  dis: boolean = false;

  message:string="";
  




  constructor(private obj: AuthService, private router: Router, private appOj: AppComponent, private navbar: NavbarComponent) { }

  ngOnInit(): void {

  }


  savePerson(form: NgForm) {

    
   if(this.username=="" && this.password=="")
   {
    this.message="username and password are required"
   }
   else
   if(this.username=="")
   {
    this.message = "username is required"
    this.dis=true;
   }
   else
   if(this.password=="")
   {
    this.message = "password is required"
    this.dis=true;
   }
   else 
   {
    this.obj.dosomething(this.username, this.password).subscribe((item:any) => {
    
      console.log(item);
      
       if (item.username != "" && item.status == true) {
        
        this.router.navigate(['/dashboard'])
        
       
      }
      else {
        this.dis=true;
        this.message = ""
        // alert("wrong credentials")
        localStorage.clear();
        this.router.navigate(['/login'])
      }
    });
   }

    

  }

  temp:any= {
    username: "",
    status: false
  }



}

