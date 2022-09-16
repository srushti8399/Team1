import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { MockDbService } from "../../mock.db.service";
// import { MockDbService } from ".../mock.db.service";
// import { InterviewExperienceDBService } from "../intexp.db.service";


@Component({
    selector:'star-rating-dialogue',
    templateUrl:'./star-rating.dialogue.html',
    styleUrls: ['./star-rating.dialogue.css']
})


export class StarRatingComponent{

    constructor(private _router:Router,private _db:MockDbService,private _dialog:MatDialog){}

    close(){
        this._dialog.closeAll()
    }

    

}