import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterviewExperienceDBService } from './intexp.db.service';

@Component({
  selector: 'app-intexp',
  templateUrl: './intexp.component.html',
  styleUrls: ['./intexp.component.css']
})
export class IntexpComponent implements OnInit {

  interviewExpArray:any[] = [];
  
  constructor(private _db:InterviewExperienceDBService,private _route:Router)
   { }

  ngOnInit(): void {

    this._db.getInterviewExperience().subscribe({
      next:(res)=>{
        this.interviewExpArray=res
        console.log(this.interviewExpArray)
      }
    })

    
  }

  view(id:any){
    this._route.navigate(['/view',id])
  }

  create(){
    this._route.navigate(['/create'])
  }

  

}
