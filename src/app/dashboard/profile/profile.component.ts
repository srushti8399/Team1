import { Component, OnInit,ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/authservice/auth.service';
import { CustomValidators } from '../validations/validators';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 
  personForm!:FormGroup;
  // @ViewChildren('personForm') createPersonForm!:NgForm;

  constructor(private _fb:FormBuilder,private auth:AuthService) { }
 
  // ngOnInit(): void {
  //   this.personForm= new FormGroup({
  //     name:new FormControl(),
  //     age:new FormControl(),
  //     skills:new FormGroup({
  //       skillName:new FormControl(),
  //       experience:new FormControl()
  //     })
  //   });

  dataTofill: any = {};
 
  ngOnInit(): void {

   

   
    
   
  

    this.personForm= this._fb.group({
      name:['',[Validators.required,Validators.maxLength(6)]],
      mobile:[null,[Validators.min(1),Validators.max(9999999999),Validators.required]],
      college:[''],
      branch:[''],
      skills:[''],
      batch:[null],
      id:[''],
      email:["",[Validators.required,CustomValidators.emailCheckParam('gmail')]],
     
    });

   
    this.dataTofill =  localStorage.getItem("profile");
    // console.log(JSON.parse(this.dataTofill.email));
    console.log(this.personForm);

    this.dataTofill = JSON.parse(this.dataTofill);

    this.personForm.patchValue({
      email:this.dataTofill.email,
      name:this.dataTofill.name,
      college:this.dataTofill.college,
      mobile:this.dataTofill.mobile,
      branch:this.dataTofill.branch,
      skills:this.dataTofill.skills,
      batch:this.dataTofill.batch,
      id:this.dataTofill.id
    })

  }
  submit(){
    console.log(this.personForm);
    console.log(this.personForm.value);
    console.log(this.personForm.value.category);
    console.log(this.personForm.get('name')!.errors?.['maxlength']);

    this.auth.storeProfiletoDB(this.personForm.value).subscribe((res)=>{
      console.log(res);
      alert("profile edited successfully")
    })

    // console.log(this.personForm.get('name')!.errors!['maxLength']);
    // console.log(this.personForm.invalid);


    // console.log(this.personForm.value);
    // console.log(this.personForm.get('name')!.value);
    // console.log(this.personForm.controls['name'].value);

    // console.log("valid = ",this.personForm.controls['name'].valid);
    // console.log("invalid = ",this.personForm.controls['name'].invalid);
    // console.log("pristine = ",this.personForm.controls['name'].pristine);
    // console.log("dirty = ",this.personForm.controls['name'].dirty);
    // console.log("touched = ",this.personForm.controls['name'].touched);
    // console.log("untouched = ",this.personForm.controls['name'].untouched);


    // console.log(this.personForm.controls['skills'].get('skillName'));
    // console.log(this.personForm.get('skills.skillName')!.dirty);
    // console.log( (<FormGroup>this.personForm.controls['skills']).controls['skillName']);

  }

  loaddata(){
    // We have to provide the value for each control in the form
    // this.personForm.setValue({
    //   name:'Tom',
    //   age:23,
    //   skills:{
    //     skillName:'Angular',
    //     experience:9
    //   }
    // })

    //is used to update the form partially 
    this.personForm.patchValue({
      name:'Tom',
      skills:{
        skillName:'Angular'
      }
    })
  }

  
BatchesArr:any[]=[
  {viewValue:-1,Text:"Select Batch"},
  {viewValue:1,Text:"2018"},
  {viewValue:2,Text:"2019"}, 
  {viewValue:2,Text:"2020"}, 
  {viewValue:2,Text:"2021"}, 
  {viewValue:2,Text:"2022"}, 
  {viewValue:2,Text:"2023"}, 
];




}
