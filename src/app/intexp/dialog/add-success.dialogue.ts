import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { InterviewExperienceDBService } from "../intexp.db.service";


@Component({
    selector:'add-success-dialogue',
    templateUrl:'./add-success.dialogue.html'
})


export class AddSuccessDialogComponent{

    constructor(private _router:Router,private _db:InterviewExperienceDBService,private _dialog:MatDialog){}

    backtolist(){
        this._dialog.closeAll()
        this._router.navigate(['/experiencelist'])
    }

    

}