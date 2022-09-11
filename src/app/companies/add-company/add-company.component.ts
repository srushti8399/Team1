import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyDbService } from '../company.db.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
     companyForm!:FormGroup
  constructor(private fb:FormBuilder, private companydbservice:CompanyDbService, private router:Router) { }

  ngOnInit(): void {
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
  submit(){
   console.log(this.companyForm)
   this.companydbservice.postCompany(this.companyForm.value).subscribe({
    next:(res)=>{
      alert("added successfully")
      //this.companyForm.reset();
      

    },
    error:()=>{
      alert("wrong")
    }
   })
   window.location.reload();
   

  }
  BackToCompany(){
    this.router.navigate(['/company'])
  }

}
