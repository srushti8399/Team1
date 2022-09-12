import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { InterviewExperienceDBService } from '../intexp.db.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private _fb:FormBuilder,private _route:ActivatedRoute,private _db:InterviewExperienceDBService
    ,private _router:Router) { }

  interviewExperienceForm!:FormGroup
  postId:string|null = ''
  postList:any = []
  description:string=''


  ngOnInit(): void {

    this.interviewExperienceForm = this._fb.group({
      authorName:['',Validators.required],
      company:['',Validators.required],
      title:['',Validators.required],
      description:['',Validators.required],

    })

    this.postId = this._route.snapshot.paramMap.get('id')
    this._db.getPostByID(this.postId).subscribe((item)=>{
      this.postList = item
      this.description = this.postList.description
    })
  }

  BackToList(){
    this._router.navigate(['/experiencelist'])
  }

  editorChange(event:EditorChangeContent|EditorChangeSelection)
  {
    //console.log("editor got changed ", event)
    // console.log(event['editor']['root']['innerHTML'])
    
  }

  submit(){
    this._db.editInterviewExperience(this.interviewExperienceForm.value,this.postId).subscribe({
      next:(res)=>{
        alert("Edited Successfully")
      }
    })
  }
}
