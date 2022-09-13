import { Component, OnInit,ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomValidators } from '../validations/validators';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewProfileComponent implements OnInit {

  dataTofill: any = {};


  ngOnInit(){
    this.dataTofill =  localStorage.getItem("profile");
    this.dataTofill = JSON.parse(this.dataTofill);
    
  }






}
