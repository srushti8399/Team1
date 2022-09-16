import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'dialog-animations-example-dialog-update',
    templateUrl: 'adddialoguecomponent.html',
  })
  export class AddDialogueComponent {
    constructor(public dialogRef: MatDialogRef<AddDialogueComponent>) {}
    addsuccess(){
      window.location.reload()
    }
  }