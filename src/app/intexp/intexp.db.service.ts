import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class InterviewExperienceDBService{
    constructor(private _http:HttpClient){}

    experiencesUrl = "http://localhost:3000/experiences/"
    experiencesByID:any[] = []

    postInterviewExperience(data:any){
        return this._http.post<any>("http://localhost:3000/experiences/",data)
    }

    getInterviewExperience(){
        return this._http.get<any>("http://localhost:3000/experiences/")
    }

    editInterviewExperience(data:any,id:any){
        return this._http.put<any>("http://localhost:3000/experiences/"+id,data)
    }

    getPostByID(id:any)
    {
        let subject = new ReplaySubject();
        this._http.get<any>(this.experiencesUrl).subscribe((data)=>{
          
           this.experiencesByID = data.find((x: { id: any; })=>x.id == id) 
           console.log("products"+ this.experiencesByID)
            subject.next(this.experiencesByID)
            subject.complete();
        });
        return subject;
    }

}