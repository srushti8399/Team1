import {Component, Inject} from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyDbService } from '../company.db.service';


@Component({
  selector: 'dialog-elements-example',
  templateUrl: 'delete_dialogue.html',
})
export class DialogDeleteComponent {
  viewCompany:any={}
  companyid:string='';
  
  constructor(public dialog: MatDialog,private companyService:CompanyDbService,private router:Router,private route:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data:any) {}
  ngOnInit(): void {
    this.companyid=this.route.snapshot.paramMap.get('id')!;
    this.companyService.getCompanyById(this.data).subscribe((item)=>{
      this.viewCompany=item;
      console.log(this.viewCompany)
    })
    
  }

  confirmDelete(){
    this.companyService.DeleteCompany(this.data).subscribe({
      next:(res)=>{
        //alert("Details deleted Successfully")
        this.router.navigate(['/company'])
      },
      error:()=>{
       alert("Error while deleting the details")}
    })
    this.dialog.closeAll()
  }
  Nobutton(){
    this.router.navigate(['/company'])
    this.dialog.closeAll()
  }
}
