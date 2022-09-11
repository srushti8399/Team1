import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyDbService } from '../company.db.service';
import { DialogDeleteComponent } from './delete_dialogue';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent implements OnInit {
  viewCompany:any={}
  companyid:string='';

  constructor(private router:Router,private route:ActivatedRoute,private companyservice:CompanyDbService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.companyid=this.route.snapshot.paramMap.get('id')!;
    this.companyservice.getCompanyById(this.companyid).subscribe((item)=>{
      this.viewCompany=item;
    })
    
  }
  BackToCompany(){
    this.router.navigate(['/company'])
  }
  deleteCompanyDetails(element:any) {
     this.dialog.open(DialogDeleteComponent,{
      data:element
      
     });
     console.log(element);
    

  }


}
