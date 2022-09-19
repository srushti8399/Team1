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
import { HomeComponent } from './home/home.component';
import { CreateUserCanDeactivateGuardService } from './dashboard/service/create-user-candeactivate-guard.service';
import { DashService } from './auth/authservice/dash.service';

const routes: Routes = [

  {path:"login",component:LoginComponent,canActivate:[DashService]},
  {path:"register",component:RegisterComponent,canActivate:[DashService]},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthService]},
  {path:"editprofile",component:ProfileComponent,canActivate:[AuthService], canDeactivate: [CreateUserCanDeactivateGuardService]},
  {path:"viewprofile",component:ViewProfileComponent,canActivate:[AuthService]},

  
  {path:"home",component:HomeComponent,canActivate:[DashService]},
  {path:'mock', component:MockComponent,canActivate:[AuthService]},
  {path:'mock/schedule', component:ScheduleComponent,canActivate:[AuthService]},
  {path:'mock/schedule/book-session', component:BookSessionComponent,canActivate:[AuthService]},



  {path:'create',component:CreateintexpComponent,canActivate:[AuthService]},
  {path:'experiencelist',component:IntexpComponent,canActivate:[AuthService]},
  {path:'view/:id',component:ViewComponent,canActivate:[AuthService]},
  {path:'edit/:id',component:EditComponent,canActivate:[AuthService]},
 

  {path:'addcompany',component:AddCompanyComponent,canActivate:[AuthService]},
  {path:'company',component:CompaniesComponent,canActivate:[AuthService]},
  {path:'viewcompany/:id',component:ViewCompanyComponent,canActivate:[AuthService]},
  {path:'editcompany/:id',component:EditCompanyComponent,canActivate:[AuthService]},
  {path:'deletecompany/:id',component:DeleteCompanyComponent,canActivate:[AuthService]},
  {path:'deletecompanydialogue/:id',component:DialogDeleteComponent,canActivate:[AuthService]},
  {path:'',component:HomeComponent,canActivate:[DashService]},
   {path:"**",component:DashboardComponent,canActivate:[AuthService]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
