import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'dialog-animations-example-dialog',
    templateUrl: 'updateerrordialoguecomponent.html',
  })
  export class UpdateErrorDialogueComponent {
    constructor(public dialogRef: MatDialogRef<UpdateErrorDialogueComponent>) {}
    updatefail(){
      window.location.reload();
    }
  }