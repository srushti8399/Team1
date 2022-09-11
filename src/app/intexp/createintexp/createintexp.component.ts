import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { InterviewExperienceDBService } from '../intexp.db.service';

@Component({
  selector: 'app-createintexp',
  templateUrl: './createintexp.component.html',
  styleUrls: ['./createintexp.component.css']
})
export class CreateintexpComponent implements OnInit {

  interviewExperienceForm!:FormGroup
  constructor(private _fb:FormBuilder,private _db:InterviewExperienceDBService) { }

  ngOnInit(): void {

    this.interviewExperienceForm = this._fb.group({
      authorName:['',Validators.required],
      company:['',Validators.required],
      title:['',Validators.required],
      description:['',Validators.required],

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
        console.log("array ",this.interviewExperienceForm.value)
      }
     
    
    })
    window.location.reload();
  }

}
