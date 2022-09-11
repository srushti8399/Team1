import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { EditProdComponent } from "../edit/edit.component";

 
@Injectable()
export class CreateUserCanDeactivateGuardServiceCopy implements
 CanDeactivate<EditProdComponent> {
    constructor(){}
    canDeactivate(component: EditProdComponent):boolean{
      console.log(component)
       if(component.personFormEdit)
       {
        return confirm('Are you sure you want to discard your changes?.')
       }
       else
       {
         console.log(component.personFormEdit)
       return true;
       }
    }

}