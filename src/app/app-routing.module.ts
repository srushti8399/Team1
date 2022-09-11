import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockComponent } from './mock/mock.component';
import { ScheduleComponent } from './mock/schedule/schedule.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"profile",component:ProfileComponent},
  {path:'mock', component:MockComponent},
  {path:'mock/schedule', component:ScheduleComponent},
// const routes: Routes = [
//   {path:'mock', component:MockComponent},
//   {path:'mock/schedule', component:ScheduleComponent},
// {path:'mockInterview',
//   loadChildren:()=>import('./mock/mock.module').then(x=>x.MockModule)
//   },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
