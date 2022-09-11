import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompaniesModule } from './companies/companies.module';
import { HttpClientModule } from '@angular/common/http';
import { CompanyDbService } from './companies/company.db.service';



@NgModule({
  declarations: [
    AppComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CompaniesModule,
    HttpClientModule,

    
  ],
  providers: [CompanyDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
