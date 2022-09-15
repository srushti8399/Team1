import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MockDbService } from '../mock.db.service';
@Component({
  selector: 'app-book-session',
  templateUrl: './book-session.component.html',
  styleUrls: ['./book-session.component.css']
})
export class BookSessionComponent implements OnInit {

  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  designations: any[] = [
    { value: 'student', viewValue: 'student' },
    { value: 'Professional', viewValue: 'Professional' },
    
  ];
  topics: any[] = [
    { value: 'DSA', viewValue: 'DSA' },
    { value: 'System design', viewValue: 'System design' },
    { value: 'frontend', viewValue: 'Frontend' },
    { value: 'backend', viewValue: 'Backend' },
    
  ];
  mentors: any[] = [
    { value: 'Suyog Vyas', viewValue: 'Suyog Vyas' },
    { value: 'Srushti Deshpande', viewValue: 'Srushti Deshpande' },
    { value: 'Vivek Bohra', viewValue: 'Vivek Bohra' },
    { value: 'Mitesh Sakalkar', viewValue: 'Mitesh Sakalkar' },
    
  ];
  product!: any;
  bookSession!: FormGroup
  constructor(private _route: ActivatedRoute, private mockdbService: MockDbService) { }
  proCode!: string | null;
  ngOnInit(): void {
    // this.proCode=this._route.snapshot.paramMap.get('code');
    // this._prodService.getProductByCode(this.proCode).subscribe((item)=>{
    //   this.product=item;
    // });

    this.bookSession = new FormGroup({
      fistName: new FormControl(null, Validators.required),
      middleName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      college: new FormControl('', Validators.required),
      branch: new FormControl('', Validators.required),
      mentor: new FormControl('', Validators.required),
      slot: new FormControl('', Validators.required),
      topic: new FormControl('', Validators.required),
      

    });
  }
  click() {
    console.log(this.product);
  }


  submit() {
    console.log(this.bookSession.value);
    this.mockdbService.postMock(this.bookSession.value).subscribe({
      next: (res) => {
        alert("added successfully")
        //this.companyForm.reset();

      },
      error: () => {
        alert("wrong")
      }
    })
    window.location.reload();

  }
  
}





