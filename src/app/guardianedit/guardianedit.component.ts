import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-guardianedit',
  templateUrl: './guardianedit.component.html',
  styleUrls: ['./guardianedit.component.css']
})
export class GuardianeditComponent implements OnInit {
  guardianDatas: any;
  id: any;
  record: any;
constructor(private http:HttpClient, private activatedRoute:ActivatedRoute, private service:RecordService){}
  ngOnInit(): void {
    this.getGuardian()
    console.log(this.guardianDatas);
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.http.get("http://localhost:3000/profile/" + this.id).subscribe((result:any) =>{
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
getGuardian(){
   this.http.get("http://localhost:3000/profile").subscribe((result) => {
    this.guardianDatas = result;
   })
}

}
