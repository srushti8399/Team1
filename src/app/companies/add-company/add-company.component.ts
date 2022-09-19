import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CompanyDbService } from '../company.db.service';
import { AddDialogueComponent } from './adddialoguecomponent';
import { ErrorAddDialogueComponent } from './erroradddialoguecomponent';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
     companyForm!:FormGroup
  constructor(private fb:FormBuilder, private companydbservice:CompanyDbService, private router:Router,private dialog:MatDialog) { }

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
  //Submit function for taking values from form to register company and posting it in db.json
  submit(){
   
   if(this.companyForm.value.cname!="" && this.companyForm.value.description !="" && this.companyForm.value.jobtitle !="" && this.companyForm.value.experience !="" && this.companyForm.value.authorityname !="" && this.companyForm.value.package !="" && this.companyForm.value.qualification !="" && this.companyForm.value.link !="" && this.companyForm.value.type !=""){
   this.companydbservice.postCompany(this.companyForm.value).subscribe({
    next:(res)=>{
      this.dialog.open(AddDialogueComponent)
      
      

    },
    error:()=>{
      alert("wrong")
    }
   })
  }else{
    this.dialog.open(ErrorAddDialogueComponent)
  }
   
   //Go back to module home-page

  }
  BackToCompany(){
    this.router.navigate(['/company'])
  }

}

