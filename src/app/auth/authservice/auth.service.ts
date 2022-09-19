import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError, Subject, ReplaySubject } from 'rxjs';
import { PeriodicElement } from "./model/user.model"
import { JsonPipe } from "@angular/common";

@Injectable({
    providedIn: "root"
})
export class AuthService implements CanActivate {

    logindata$: any = new Subject();

    userM: string = "";
    passM: string = "";
    status: boolean = false;

    temp: any = {
        username: "",
        status: false
    }



    userlongarray: any[] = [];

    userlongURL: string = 'http://localhost:3000/users/'; //this will work out
    constructor(private _http: HttpClient, private router: Router) { }


    getUserLongArr(): Observable<PeriodicElement[]> {
        return this._http.get<PeriodicElement[]>(this.userlongURL)
            .pipe(catchError(this.handleError));
    }



    private handleError(errorResponse: HttpErrorResponse) {
        // console.log(errorResponse);

        if (errorResponse.error instanceof ErrorEvent) {
            console.log(errorResponse.message);
        }
        else {
            console.log(errorResponse.message);
        }
        return throwError(() => {
            return 'Something wrong occur!!';
        });


    }


    //  private isUserLogin:boolean=false;


    register(username: string, password: string) {

        let subject = new ReplaySubject<PeriodicElement>();
        this._http.post<PeriodicElement>(this.userlongURL, { username: username, password: password, skills: "", mobile: null, batch: null, name: "", college: "", branch: "", email: username },
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }
        ).subscribe((data) => {
            console.log(data);
            subject.next(data);
            subject.complete();
        })

        return subject;

    }


    dosomething(us: string, ps: string) {
        let subject = new ReplaySubject();
        let username = us;
        let password = ps
        let flag = 0;

        this._http.get<PeriodicElement[]>(this.userlongURL).subscribe((data) => {
            data.map(item => {

                // console.log(data);

                let un = item.username
                let pw = item.password
                if (username == un && password == pw) {


                    if (!localStorage.getItem("userM"))
                        localStorage.setItem("userM", username)
                    localStorage.setItem("passM", password)
                    localStorage.setItem("islogin", "true")

                    let obj: any = {
                        name: item.name,
                        email: item.email,
                        batch: item.batch,
                        branch: item.branch,
                        college: item.college,
                        skills: item.skills,
                        mobile: item.mobile,
                        id: item.id
                    };

                    localStorage.setItem("profile", JSON.stringify(obj));

                    let mm = localStorage.getItem("profile");

                    console.log(mm);



                    flag = 1;
                    this.status = true;
                    this.status = true;
                    this.temp = {
                        username: un,
                        status: true
                    }

                    this.logindata$.next(this.temp)

                }
            })

            if (flag == 1)
                subject.next(this.temp);
            else
                subject.next({
                    username: "",
                    status: false
                });
            subject.complete();
        });
        return subject
    }


    storeProfiletoDB(info: any) {

        let user = localStorage.getItem("userM");
        let pass = localStorage.getItem("passM");

        let subject = new ReplaySubject<PeriodicElement>();
        this._http.put<PeriodicElement>(this.userlongURL+info.id, {id:info.id,username:user,password:pass,skills: info.skills, mobile: info.mobile, batch: info.batch, name: info.name, college: info.college, branch: info.branch, email: info.email },
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }
        ).subscribe((data) => {
            let obj: any = {
                name: data.name,
                email: data.email,
                batch: data.batch,
                branch: data.branch,
                college: data.college,
                skills: data.skills,
                mobile: data.mobile,
                id: data.id
            };

            localStorage.setItem("profile", JSON.stringify(obj));
            console.log(data);
            subject.next(data);
            subject.complete();
        })

        return subject;

    }



    async setCredentials(userM: string, passM: string) {
        this.userM = userM;
        this.passM = passM;
        localStorage.setItem("userM", this.userM)
        localStorage.setItem("passM", this.passM)

        return;
    }



    authenticate() {
        return this.temp
    }






    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let uname = localStorage.getItem("userM");
        if (localStorage.getItem("userM")) {
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }


}