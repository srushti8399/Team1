import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntexpModule } from './intexp/intexp.module';
import { InterviewExperienceDBService } from './intexp/intexp.db.service';
import { AuthService } from './auth/authservice/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule } from './navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AuthModule } from './auth/auth.module';

import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IntexpModule,
    HttpClientModule
    ,
    AuthModule,
    NavbarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [NavbarComponent,AuthServiceInterviewExperienceDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
