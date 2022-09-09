import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateintexpComponent } from './intexp/createintexp/createintexp.component';
import { EditComponent } from './intexp/edit/edit.component';
import { IntexpComponent } from './intexp/intexp.component';
import { ViewComponent } from './intexp/view/view.component';

const routes: Routes = [
  {path:'create',component:CreateintexpComponent},
  {path:'experiencelist',component:IntexpComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'',redirectTo:'experiencelist',pathMatch:'full'}

  // {
  //   path: 'experience',
  //   loadChildren: () => import('./intexp/intexp.module').then(x => x.IntexpModule)

  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
