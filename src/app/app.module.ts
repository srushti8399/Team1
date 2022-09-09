import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntexpModule } from './intexp/intexp.module';
import { InterviewExperienceDBService } from './intexp/intexp.db.service';



@NgModule({
  declarations: [
    AppComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IntexpModule,
    HttpClientModule
    
  ],
  providers: [InterviewExperienceDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
