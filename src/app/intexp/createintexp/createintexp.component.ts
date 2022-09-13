import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { InterviewExperienceDBService } from '../intexp.db.service';

@Component({
  selector: 'app-createintexp',
  templateUrl: './createintexp.component.html',
  styleUrls: ['./createintexp.component.css']
})
export class CreateintexpComponent implements OnInit {

  interviewExperienceForm!:FormGroup
  constructor(private _fb:FormBuilder,private _db:InterviewExperienceDBService,private _route:Router) { }
  myDate = new Date()
  ngOnInit(): void {

    this.interviewExperienceForm = this._fb.group({
      authorName:['',Validators.required],
      company:['',Validators.required],
      title:['',Validators.required],
      description:['',Validators.required],
      date:[this.myDate],
      like:[0]
    })
  }

  editorChange(event:EditorChangeContent|EditorChangeSelection)
  {
    
    //console.log("editor got changed ", event)
    // console.log(event['editor']['root']['innerHTML'])
    
  }

  submit(){
    console.log(this.interviewExperienceForm)
    
    this._db.postInterviewExperience(this.interviewExperienceForm.value).subscribe({
      next:(res)=>{
        alert("added successfully")
      }
    })
    window.location.reload();
  }

  BackToList(){
    this._route.navigate(['/experiencelist'])
  }

}
