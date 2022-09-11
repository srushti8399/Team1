import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockComponent } from '../mock/mock.component';
import { ScheduleComponent } from './schedule/schedule.component';



@NgModule({
  declarations: [
    MockComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MockComponent,ScheduleComponent
  ]
})
export class MockModule { }
