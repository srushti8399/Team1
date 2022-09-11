import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyDbService } from './company.db.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  Companyarray:any[]=[]

  constructor(private companydbservice:CompanyDbService,private router:Router) { }

  ngOnInit(): void {
    this.getCompanyInfo();
  }
    getCompanyInfo(){
      this.companydbservice.getCompany().subscribe({
        next:(res)=>{
          this.Companyarray=res;
          console.log(res);
        },
        error:()=>{
          alert('Error in app')
        }
      })
    }
    GoToAdd(){
      
      this.router.navigate(['/addcompany']);
    
    
    }
    viewCompany(element:any){
      console.log(element)
      this.router.navigate(['/viewcompany',element])
    }
    editCompany(element:any){
      this.router.navigate(['/editcompany',element]);
    }
    deleteCompany(element:any){
      this.router.navigate(['/deletecompany',element]);
    }
}
