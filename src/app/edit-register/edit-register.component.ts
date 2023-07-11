import { Component, OnInit } from '@angular/core';
import { Record } from '../record';
import { RecordService } from '../record.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-edit-register',
  templateUrl: './edit-register.component.html',
  styleUrls: ['./edit-register.component.css']
})
export class EditRegisterComponent implements OnInit {

id: any;
data: any;
person:Record[]=[];
record = new Record();

constructor(private http:HttpClient, private recordService:RecordService,
            private acivatedRoute:ActivatedRoute, private router:Router,
            ) {}

           
  ngOnInit(): void {

  // this.getEditDatas()
   this.id = this.acivatedRoute.snapshot.paramMap.get('id');
   console.log(this.id);
   
 this.recordService.editRegister(this.id).subscribe((result:any) =>{
    this.data = result;
   
  console.log(this.data);
  
    this.record.firstName = result.firstName;
    this.record.lastName = result.lastName;
    this.record.dob = result.dob;
    this.record.email = result.email;
    this.record.mobileNumber = result.mobileNumber;
    this.record.idProof = result.idProof;
    this.record.idNumber = result.idNumber;
    this.record.address = result.address;
    this.record.address1 = result.address1;
    this.record.address2 = result.address2;
    this.record.landMark = result.landMark;
    this.record.city = result.city;
    this.record.state = result.state;

   })
  }

// getEditDatas(){
//   this.http.get("http://localhost:3000/datas").subscribe((result) => {
//     this.data = result;
//     console.log(this.data);
    
//   })
// }  

editDatas(){
  this.recordService.updateDatas(this.id,this.record);
  this.router.navigate(['/table']);
}


}
