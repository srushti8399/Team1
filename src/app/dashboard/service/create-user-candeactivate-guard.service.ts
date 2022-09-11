import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CreateComponent } from "../create/create.component";

 
@Injectable()
export class CreateUserCanDeactivateGuardService implements
 CanDeactivate<CreateComponent> {
    constructor(){}
    canDeactivate(component: CreateComponent):boolean{
      console.log(component.personForm)

       if(component.personForm.dirty)
       {
        return confirm('Are you sure you want to discard your changes?.')
       }
       else
       return true;
    }

}