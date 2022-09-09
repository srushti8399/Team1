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
import { QuillModule } from 'ngx-quill';
import { MatIconModule } from '@angular/material/icon';
import { EditComponent } from './edit/edit.component'

@NgModule({
  declarations: [
    IntexpComponent,
    CreateintexpComponent,
    DescriptionPipe,
    ViewComponent,
    EditComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    QuillModule.forRoot()
   
    
  ],
  exports:[
    CreateintexpComponent,IntexpComponent,ViewComponent
  ]
})
export class IntexpModule { }
