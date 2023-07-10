import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordService } from '../record.service';
import { Guardian } from '../guardian';

@Component({
  selector: 'app-guardianedit',
  templateUrl: './guardianedit.component.html',
  styleUrls: ['./guardianedit.component.css']
})
export class GuardianeditComponent implements OnInit {
  datas: any;
  id: any;
  person:Guardian[]=[];
record = new Guardian();
constructor(private http:HttpClient, private activatedRoute:ActivatedRoute, private service:RecordService, private router:Router){}
  ngOnInit(): void {
    
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.service.guardianEdit(this.id).subscribe((result:any) =>{
      this.datas = result;
      console.log(this.datas);
      
    this.record.firstName = this.datas.firstName;
    this.record.lastName = this.datas.lastName;
    this.record.dob = this.datas.dob;
    this.record.email = this.datas.email;
    this.record.mobileNumber = this.datas.mobileNumber;
    this.record.idProof = this.datas.idProof;
    this.record.idNumber = this.datas.idNumber;
    this.record.address = this.datas.address;
    this.record.address2 = this.datas.address2;
    this.record.address3 = this.datas.address3;
    this.record.landMark = this.datas.landMark;
    this.record.city = this.datas.city;
    this.record.state = this.datas.state;
    })
    
    
  }
// getGuardian(){
//    this.http.get("http://localhost:3000/profile").subscribe((this.datas) => {
//     this.guardianthis.datas = this.datas;
//    })
// }
updateGuardian(){
  this.service.editGuardianDetails(this.id,this.record);
  this.router.navigate(['/guardianData']);
}

}
