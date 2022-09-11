import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from '../auth/authservice/auth.service';
import { LoginComponent } from '../auth/login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[AuthService]
})
export class NavbarComponent implements OnInit {

  @Input()     
  checkUserLoginStatus:any={};

  constructor(private obj:AuthService,private router:Router)
  {
   console.log(this.checkUserLoginStatus)
  }
  

  ngOnInit(): void {

  
   
} 

  performLogOut()
  {
    
    localStorage.clear();
    this.checkUserLoginStatus.status=false;
   
    setTimeout(() => {
      window.location.reload();

    }, 1000);
    this.router.navigate(['/login'])

  }



}

