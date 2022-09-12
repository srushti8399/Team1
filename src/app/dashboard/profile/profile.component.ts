import { Component, OnInit,ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomValidators } from '../validations/validators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 
  personForm!:FormGroup;
  @ViewChildren('personForm') createPersonForm!:NgForm;

  constructor(private _fb:FormBuilder) { }
 
  // ngOnInit(): void {
  //   this.personForm= new FormGroup({
  //     name:new FormControl(),
  //     age:new FormControl(),
  //     skills:new FormGroup({
  //       skillName:new FormControl(),
  //       experience:new FormControl()
  //     })
  //   });
 
  ngOnInit(): void {
    // this.personForm= new FormGroup({
    //   name:new FormControl(),
    //   price:new FormControl(),
    //   color:new FormControl(),
    //   category:new FormControl(),
    //   imageURL:new FormControl(),
    //   description:new FormControl(),
    //   inStockQuantity:new FormControl(),
      
    // });

    this.personForm= this._fb.group({
      name:['',[Validators.required,Validators.maxLength(6)]],
      price:[null,[Validators.min(1),Validators.max(100),Validators.required]],
      color:[''],
      category:[''],
      imageURL:[''],
      description:[''],
      inStockQuantity:[],

       //validation withour parameter
      //email:['',[Validators.required,CustomValidators.emailCheck]],
      // validation with parameter
      email:['',[Validators.required,CustomValidators.emailCheckParam('gmail')]],
     
    });

    // this.personForm= this._fb.group({
    //   name:[''],
    //   age:[],
    //   skills:this._fb.group({
    //     skillName:[''],
    //     experience:[]
    //   })
    // });
  }
  submit(){
    console.log(this.personForm);
    console.log(this.personForm.value);
    console.log(this.personForm.value.category);
    console.log(this.personForm.get('name')!.errors?.['maxlength']);
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
