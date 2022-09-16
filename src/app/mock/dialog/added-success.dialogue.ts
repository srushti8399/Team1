import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { MockDbService } from "../mock.db.service";


@Component({
    selector:'added-success-dialogue',
    templateUrl:'./added-success.dialogue.html'
})


export class AddedSuccessDialogComponent{

    constructor(private _router:Router,private _db:MockDbService,private _dialog:MatDialog){}

    backtolist(){
        this._dialog.closeAll()
        this._router.navigate(['/mock/schedule'])
    }

    

}