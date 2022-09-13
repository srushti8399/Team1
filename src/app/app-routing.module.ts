import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockComponent } from './mock/mock.component';
import { ScheduleComponent } from './mock/schedule/schedule.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { CreateintexpComponent } from './intexp/createintexp/createintexp.component';
import { EditComponent } from './intexp/edit/edit.component';
import { IntexpComponent } from './intexp/intexp.component';
import { ViewComponent } from './intexp/view/view.component';
import { AddCompanyComponent } from './companies/add-company/add-company.component';
import { CompaniesComponent } from './companies/companies.component';
import { DeleteCompanyComponent } from './companies/delete-company/delete-company.component';
import { DialogDeleteComponent } from './companies/delete-company/delete_dialogue';
import { EditCompanyComponent } from './companies/edit-company/edit-company.component';
import { ViewCompanyComponent } from './companies/view-company/view-company.component';
import { AuthService } from './auth/authservice/auth.service';
import { ViewProfileComponent } from './dashboard/view/view.component';
import { BookSessionComponent } from './mock/book-session/book-session.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthService]},
  {path:"editprofile",component:ProfileComponent},
  {path:"viewprofile",component:ViewProfileComponent},

  {path:'mock', component:MockComponent},
  {path:'mock/schedule', component:ScheduleComponent},
  {path:'mock/schedule/book-session', component:BookSessionComponent},

// const routes: Routes = [
//   {path:'mock', component:MockComponent},
//   {path:'mock/schedule', component:ScheduleComponent},
// {path:'mockInterview',
//   loadChildren:()=>import('./mock/mock.module').then(x=>x.MockModule)
//   },


  {path:'create',component:CreateintexpComponent},
  {path:'experiencelist',component:IntexpComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'edit/:id',component:EditComponent},
 // {path:'',redirectTo:'experiencelist',pathMatch:'full'}

  // {
  //   path: 'experience',
  //   loadChildren: () => import('./intexp/intexp.module').then(x => x.IntexpModule)

  // },


  {path:'addcompany',component:AddCompanyComponent},
  {path:'company',component:CompaniesComponent},
  {path:'viewcompany/:id',component:ViewCompanyComponent},
  {path:'editcompany/:id',component:EditCompanyComponent},
  {path:'deletecompany/:id',component:DeleteCompanyComponent},
  {path:'deletecompanydialogue/:id',component:DialogDeleteComponent},
   {path:"**",component:DashboardComponent,canActivate:[AuthService]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
