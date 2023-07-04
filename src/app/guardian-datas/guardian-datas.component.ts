import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guardian-datas',
  templateUrl: './guardian-datas.component.html',
  styleUrls: ['./guardian-datas.component.css']
})
export class GuardianDatasComponent implements OnInit {

  displayedColumns : string[] = ['firstName','lastName','dob','email','mobileNumber','idProof','idNumber','address','address2','address3','landMark','city','state']
  
  guardianDatas:any;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getGuardianDatas()
  }
  getGuardianDatas(){
    this.http.get("http://localhost:3000/profile").subscribe((result) => {
      this.guardianDatas = result
      console.log(result);
      
    })
  }

}
