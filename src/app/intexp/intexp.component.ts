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
  
      }
    })
  }


  // needs to fix it
  like(id:any){
    console.log("id "+ id)
    this.interviewExpArray[id-1].like = this.interviewExpArray[id-1].like +1;
  }
  
  delete(id:any){
    this._db.deleteInterviewExperience(id).subscribe({
      next:(res)=>{
        alert("deleted successfully")
      }
    })
    window.location.reload()
  }

  edit(id:any){
    this._route.navigate(['/edit',id])
  }


  view(id:any){
    this._route.navigate(['/view',id])
  }

  create(){
    this._route.navigate(['/create'])
  }

  

}
