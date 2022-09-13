import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntexpModule } from './intexp/intexp.module';
import { InterviewExperienceDBService } from './intexp/intexp.db.service';
import { MockModule } from './mock/mock.module';
import { AuthService } from './auth/authservice/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule } from './navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompaniesModule } from './companies/companies.module';
import { CompanyDbService } from './companies/company.db.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthModule } from './auth/auth.module';

import {MatSelectModule} from '@angular/material/select';
import { FooterModule } from './footer/footer.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { MockDbService } from './mock/mock.db.service';

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
    MockModule,
    AuthModule,
    NavbarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CompaniesModule,
    HttpClientModule,
    FooterModule,MatDatepickerModule,MatRadioModule
    
  ],
  providers: [NavbarComponent,AuthService,InterviewExperienceDBService,CompanyDbService,MockDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
