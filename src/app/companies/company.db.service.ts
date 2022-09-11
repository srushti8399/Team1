import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';

@Injectable({
  providedIn: 'root'
})
export class CompanyDbService {
  comapnies:any;

  constructor(private http:HttpClient) { }
  postCompany(data:any){
    return this.http.post<any>("http://localhost:3000/Companies/",data)
  }
  getCompany(){
    return this.http.get<any>("http://localhost:3000/Companies/")
  }

  getCompanyById(id:any){
    let subject=new ReplaySubject();
    this.http.get<any>("http://localhost:3000/Companies/").subscribe((data)=>{
      this.comapnies=data.find((x:{id:any})=>x.id==id);
      subject.next(this.comapnies);
      subject.complete();

    });
    return subject;

  }
  DeleteCompany(id:any){
    return this.http.delete<any>("http://localhost:3000/Companies/"+id);
  }
  putCompany(data:any,id:any){
    return this.http.put<any>("http://localhost:3000/Companies/"+id,data)

  }
}
