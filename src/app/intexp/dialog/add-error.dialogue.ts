import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { InterviewExperienceDBService } from "../intexp.db.service";


@Component({
    selector:'add-error-dialogue',
    templateUrl:'./add-error.dialogue.html'
})


export class AddErrorDialogComponent{

    constructor(private _router:Router,private _db:InterviewExperienceDBService,private _dialog:MatDialog){}

    close(){
        this._dialog.closeAll()
    }

    

}