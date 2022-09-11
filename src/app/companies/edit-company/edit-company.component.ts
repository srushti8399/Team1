import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { window } from 'rxjs';
import { CompanyDbService } from '../company.db.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  viewCompany:any={}
  companyid:string='';
  companyForm!:FormGroup

  constructor(private router:Router, private route:ActivatedRoute,private companyservice:CompanyDbService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.companyid=this.route.snapshot.paramMap.get('id')!;
    this.companyservice.getCompanyById(this.companyid).subscribe((item)=>{
      this.viewCompany=item;
    })
    this.companyForm=this.fb.group({
      cname:['',Validators.required],
      description:['',Validators.required],
      jobtitle:['',Validators.required],
      experience:['',Validators.required],
      authorityname:['',Validators.required],
      package:['',Validators.required],
       qualification:['',Validators.required],
       link:['',Validators.required],
       type:['',Validators.required]
      

    })
  }
  candidates:any[]=[
    {viewValue:-1,Text:"Select Category"},
    {viewValue:1,Text:"Experienced"},
    {viewValue:2,Text:"Fresher"} 
  ];
  BackToCompany(){
    this.router.navigate(['/company'])
  }
  submit(){
    this.companyservice.putCompany(this.companyForm.value,this.companyid).subscribe({
      next:(res)=>{
        alert("Company Details updated successfully");
        this.companyForm.reset();
      },
      error:()=>{
        alert("Error while updating the record");
      }
    })
    
  }

}
