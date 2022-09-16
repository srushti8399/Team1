import { Component, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { InterviewExperienceDBService } from "../intexp.db.service";


@Component({
    selector:'delete-dialogue',
    templateUrl:'./delete.dialogue.html'
})


export class DeleteDialogueComponent{

    constructor(private _db:InterviewExperienceDBService, @Inject(MAT_DIALOG_DATA) public data:any,private _dialog:MatDialog){}

    confirmDelete(){
        this._db.deleteInterviewExperience(this.data).subscribe({
          next:(res)=>{
            alert("Details deleted Successfully")
          },
          error:()=>{
           alert("Error while deleting the details")}
        })
        this._dialog.closeAll()
        window.location.reload();
      }

    close(){
        this._dialog.closeAll()
    }

    

}