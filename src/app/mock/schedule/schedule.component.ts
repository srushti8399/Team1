import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StarRatingComponent } from '../dialog/starRatingDialogue/star-rating.dialogue';
import { MockDbService } from '../mock.db.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  pastBook:any[] = [];
  constructor(private _db:MockDbService,private _dialog:MatDialog) { }

  ngOnInit(): void {
    this._db.getPastBooking().subscribe({
      next:(res)=>{
        this.pastBook=res
  
      }
    })
  }
  
  click(){
    console.log(this.pastBook);
  }
   showDialogue(){
    this._dialog.open(StarRatingComponent)
   }
  userId:string=localStorage.getItem('userM')!;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','actions'];
  dataSource = this.pastBook;
}
