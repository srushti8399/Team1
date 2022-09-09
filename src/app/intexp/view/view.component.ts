import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterviewExperienceDBService } from '../intexp.db.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private _db:InterviewExperienceDBService) { }

  postId:string|null = ''
  postList:any = []
  description:any

  ngOnInit(): void {

    this.postId = this._route.snapshot.paramMap.get('id')
    this._db.getPostByID(this.postId).subscribe((item)=>{
        this.postList = item
        
        this.description = this.postList['description']
        
        console.log(this.description)
    })

  
    
  }


 
}
