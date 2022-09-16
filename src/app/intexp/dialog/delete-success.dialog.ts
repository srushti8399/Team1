import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { InterviewExperienceDBService } from "../intexp.db.service";


@Component({
    selector:'delete-success-dialogue',
    templateUrl:'./delete-success.dialog.html'
})


export class DeleteSuccessDialogComponent{

    constructor(private _router:Router,private _db:InterviewExperienceDBService,private _dialog:MatDialog){}

    backtolist(){
        this._dialog.closeAll()
        // window.location.reload()
        // this._router.navigate(['/experiencelist'])
    }

    

}