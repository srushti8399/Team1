import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyDbService } from '../company.db.service';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {
  companyid:string='';
  viewCompany:any={};

  constructor(private route:ActivatedRoute,private companyservice:CompanyDbService, private router:Router) { }

  ngOnInit(): void {
    this.companyid=this.route.snapshot.paramMap.get('id')!;
    this.companyservice.getCompanyById(this.companyid).subscribe((item)=>{
      this.viewCompany=item;
    })
    
  }
  BackToCompany(){
    this.router.navigate(['/company'])
  }

}
