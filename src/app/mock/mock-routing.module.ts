import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockComponent } from './mock.component';
import { ScheduleComponent } from './schedule/schedule.component';
// import { CreateUserCanDeactivateGuardService } from '../services/employee/create-user-candeactivate-guard.service';
// import { EmployeeComponent } from './employee.component';
// import { ViewComponent } from './view/view.component';
// import { View1Component } from './view1/view1.component';

const routes:Routes=[
    {
        path:'',
        children:[
            {path:'',component:MockComponent},
            {path:'mock/schedule', component:ScheduleComponent},
            
        ]
    },
    
            // {path:'',component:UserComponent},
            // {path:'edit/:id',component:EditUserComponent},
            // {path:'delete/:id',component:DeleteUserComponent}

//   {path:'user',component:UserComponent},
//   {path:'user/edit/:id',component:EditUserComponent},
//   {path:'user/delete/:id',component:DeleteUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }