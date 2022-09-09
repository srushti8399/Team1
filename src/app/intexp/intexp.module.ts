import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntexpComponent } from './intexp.component';
import { CreateintexpComponent } from './createintexp/createintexp.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { DescriptionPipe } from './pipe/custompipe.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    IntexpComponent,
    CreateintexpComponent,
    DescriptionPipe,
    ViewComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    
   
    
  ],
  exports:[
    CreateintexpComponent,IntexpComponent,ViewComponent
  ]
})
export class IntexpModule { }
