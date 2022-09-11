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
 

  constructor(private obj:AuthService,private router:Router,private appOj:AppComponent,private navbar:NavbarComponent) { }

  ngOnInit(): void {
   
    // this.dbuserobj = this.obj.getUsers();
  }

 
 
  
savePerson(form:NgForm){
   
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
