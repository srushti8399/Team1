import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockComponent } from './mock/mock.component';
import { ScheduleComponent } from './mock/schedule/schedule.component';

const routes: Routes = [
  {path:'mock', component:MockComponent},
  {path:'mock/schedule', component:ScheduleComponent},
{path:'mockInterview',
  loadChildren:()=>import('./mock/mock.module').then(x=>x.MockModule)
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
