import { Component } from '@angular/core';
import { Nominee } from '../nominee';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordService } from '../record.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-nominee-edit',
  templateUrl: './nominee-edit.component.html',
  styleUrls: ['./nominee-edit.component.css']
})
export class NomineeEditComponent {

  constructor(private http:HttpClient,
     private activatedRoute:ActivatedRoute,
     private recordService:RecordService,
     private router:Router){}
  id:any;
  data:any;

  person:Nominee[] = [];
  nominee=new Nominee();

  ngOnInit():void{
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.recordService.getEdit(this.id).subscribe((res:any) => {
      this.data = res;
      console.log(this.data);
      this.nominee.firstName = res.firstName;
      this.nominee.lastName = res.lastName;
      this.nominee.email = res.email;
      this.nominee.mobileNumber = res.mobileNumber;
      this.nominee.idProof = res.idProof;
      this.nominee.idNumber = res.idNumber;
      this.nominee.address = res.address;
      this.nominee.address1 = res.address1;
      this.nominee.address2 = res.address2;
      this.nominee.landMark = res.landMark;
      this.nominee.city = res.city;
      this.nominee.state = res.state;
      
    } )
    
  }

  updatedNominee(){
    this.recordService.nomineeUpdate(this.id,this.nominee);
    this.router.navigate(['/nomineeData'])
  }

}
