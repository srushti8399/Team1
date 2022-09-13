import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterviewExperienceDBService } from '../intexp.db.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private _router:Router,private _route:ActivatedRoute,private _db:InterviewExperienceDBService) { }

  postId:string|null = ''
  postList:any = []

  ngOnInit(): void {

    this.postId= this._route.snapshot.paramMap.get('id')
    this._db.getPostByID(this.postId).subscribe((item)=>{
        this.postList = item
        
        
    })

  
    
  }

  edit(id:any){
    this._router.navigate(['/edit',this.postId])
  }

  BackToList(){
    this._router.navigate(['/experiencelist'])
  }

 
}
