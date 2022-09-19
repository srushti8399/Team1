import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import {MatSelectModule} from '@angular/material/select';
import { ViewProfileComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from '../footer/footer.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CreateUserCanDeactivateGuardService } from './service/create-user-candeactivate-guard.service';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    ViewProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    RouterModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers:[CreateUserCanDeactivateGuardService]
})
export class DashboardModule { }
