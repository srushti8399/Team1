import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'dialog-animations-example-dialog2',
    templateUrl: 'erroradddialoguecomponent.html',
  })
  export class ErrorAddDialogueComponent {
    constructor(public dialogRef: MatDialogRef<ErrorAddDialogueComponent>, private dialog:MatDialog) {}
    addfail(){
      this.dialog.closeAll()
    }
  }