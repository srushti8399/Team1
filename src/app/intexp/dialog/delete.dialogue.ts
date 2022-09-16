import { Component, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { InterviewExperienceDBService } from "../intexp.db.service";
import { DeleteSuccessDialogComponent } from "./delete-success.dialog";


@Component({
    selector:'delete-dialogue',
    templateUrl:'./delete.dialogue.html'
})


export class DeleteDialogueComponent{

    constructor(private _db:InterviewExperienceDBService, @Inject(MAT_DIALOG_DATA) public data:any,private _dialog:MatDialog){}

    confirmDelete(){
        this._db.deleteInterviewExperience(this.data.id).subscribe({
          next:(res)=>{
            window.location.reload()
            
          },
          error:()=>{
           alert("Error while deleting the details")}
        })
        this._dialog.closeAll()
        
      }

    close(){
        this._dialog.closeAll()
    }

    

}