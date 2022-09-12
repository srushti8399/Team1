import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/authservice/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  
  @Input()     
  checkUserLoginStatus:any={};

  constructor(private obj:AuthService,private router:Router)
  {
   console.log(this.checkUserLoginStatus)
  }
  

  ngOnInit(): void {
  }

}
