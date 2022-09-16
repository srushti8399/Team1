import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Route, Router } from "@angular/router";

@Component({
    selector: 'dialog-animations-example-dialog-update',
    templateUrl: 'updatedialoguecomponent.html',
  })
  export class UpdateDialogueComponent {
    constructor(public dialogRef: MatDialogRef<UpdateDialogueComponent>,private route:Router) {}
    updatesuccess(){
      
          window.location.reload()
    }
  }