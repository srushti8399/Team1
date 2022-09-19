import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ProfileComponent } from "../profile/profile.component";

 
@Injectable()
export class CreateUserCanDeactivateGuardService implements
 CanDeactivate<ProfileComponent> {
    constructor(){}
    canDeactivate(component: ProfileComponent):boolean{
      console.log(component.personForm)

       if(component.personForm.dirty)
       {
        return confirm('Are you sure you want to discard your changes?.')
       }
       else
       return true;
    }

}