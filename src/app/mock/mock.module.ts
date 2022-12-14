import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockComponent } from '../mock/mock.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { BookSessionComponent } from './book-session/book-session.component';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';



// import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
// import { FormsModule } from '@angular/forms';
// import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from '../app-routing.module';
import {MatIconModule} from '@angular/material/icon'
import { AddedSuccessDialogComponent } from './dialog/added-success.dialogue';
import {MatDialogModule} from '@angular/material/dialog';
import { AddReqFieldDialogComponent } from './dialog/add-reqfilled.dialogue';
import { StarRatingComponent } from './dialog/starRatingDialogue/star-rating.dialogue';
// import {StarRatingModule} from 'angular-star-rating';

@NgModule({
  declarations: [
    MockComponent,
    ScheduleComponent,
    BookSessionComponent,
    AddedSuccessDialogComponent,
 AddReqFieldDialogComponent,StarRatingComponent
    
  

  ],
  imports: [
    CommonModule,FormsModule,MatSelectModule,ReactiveFormsModule,
    MatInputModule,MatButtonModule,MatTableModule,MatDatepickerModule,MatRadioModule,
    MatNativeDateModule,AppRoutingModule,MatIconModule,MatDialogModule
  ],
  exports:[
    MockComponent,ScheduleComponent,BookSessionComponent,AddedSuccessDialogComponent,AddReqFieldDialogComponent,
    StarRatingComponent
  ]
})
export class MockModule { }
