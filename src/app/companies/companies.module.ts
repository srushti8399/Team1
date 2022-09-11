import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ViewCompanyComponent } from './view-company/view-company.component';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogDeleteComponent } from './delete-company/delete_dialogue';
import { EditCompanyComponent } from './edit-company/edit-company.component';



@NgModule({
  declarations: [
    CompaniesComponent,
    AddCompanyComponent,
    ViewCompanyComponent,
    DeleteCompanyComponent,
    DialogDeleteComponent,
    EditCompanyComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatDialogModule
     ],
  exports:[
    CompaniesComponent,
    AddCompanyComponent,
    ViewCompanyComponent,
    DeleteCompanyComponent,
    DialogDeleteComponent,
    EditCompanyComponent

  ]
})
export class CompaniesModule { }
