import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateintexpComponent } from './createintexp/createintexp.component';
import { IntexpComponent } from './intexp.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
    // {
    //     path:'',
    //     children:[
    //         {path:'create',component:CreateintexpComponent},
    //         {path:'experiencelist',component:IntexpComponent},
    //         {path:'experience/view',component:ViewComponent}
    //     ]
    // }
  
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewExpRoutingModule { }
