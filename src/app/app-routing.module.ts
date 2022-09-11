import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"profile",component:ProfileComponent},
import { AddCompanyComponent } from './companies/add-company/add-company.component';
import { CompaniesComponent } from './companies/companies.component';
import { DeleteCompanyComponent } from './companies/delete-company/delete-company.component';
import { DialogDeleteComponent } from './companies/delete-company/delete_dialogue';
import { EditCompanyComponent } from './companies/edit-company/edit-company.component';
import { ViewCompanyComponent } from './companies/view-company/view-company.component';


  {path:'addcompany',component:AddCompanyComponent},
  {path:'company',component:CompaniesComponent},
  {path:'viewcompany/:id',component:ViewCompanyComponent},
  {path:'editcompany/:id',component:EditCompanyComponent},
  {path:'deletecompany/:id',component:DeleteCompanyComponent},
  {path:'deletecompanydialogue/:id',component:DialogDeleteComponent},
   {path:"**",component:CompaniesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
