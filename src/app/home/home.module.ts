import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FooterModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
