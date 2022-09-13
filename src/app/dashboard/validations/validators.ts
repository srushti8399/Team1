import { AbstractControl } from "@angular/forms";


export class CustomValidators{

    //validators without parameter
static emailCheck(control:AbstractControl) :{[key:string]:any}|null {
    // console.log(control);
  const email:string= control.value;
  //abc@yahoo.com
  let domain = "";
  if(email!=undefined)
  {
   domain= email.substring(0,email.lastIndexOf('@'));
  }
  // console.log(domain);
  if(domain.toLowerCase()==='gmail')
  {
    return null;
  }
  else{
    return {'emailmismatch':true}
  }
  
  }
  //validator with parameter
  static emailCheckParam(domainvalueToValidate:string) {
    // function emailCheck(control:AbstractControl) :{[key:string]:any}|null {
    //   //body 
    // }
    //inner arrow function 
  return (control:AbstractControl) :{[key:string]:any}|null =>{
    // console.log(control);
  const email:string= control.value;
  //abc@yahoo.com
  // const domain= email.substring(0,email.lastIndexOf('@'));
  let domain="";
  if(email!=undefined)
  {
   domain= email.substring(email.lastIndexOf('g'),email.lastIndexOf('.'));
  }

  // console.log(domain);
  if(domain.toLowerCase()===domainvalueToValidate)
  {
    return null;
  }
  else{
    return {'emailmismatch':true}
  }
  
  }
  
  }
  
  
}