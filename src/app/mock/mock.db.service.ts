import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MockDbService {
  mocks:any;

  constructor(private http:HttpClient) { }

  postMock(data:any){
    return this.http.post<any>("http://localhost:3000/mocks/",data)
  }



}