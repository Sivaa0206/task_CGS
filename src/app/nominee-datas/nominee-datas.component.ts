import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nominee-datas',
  templateUrl: './nominee-datas.component.html',
  styleUrls: ['./nominee-datas.component.css']
})
export class NomineeDatasComponent implements OnInit {

  displayedColumns : string[] = ['firstName','lastName','dob','email','mobileNumber','idProof','idNumber','address','address2','address3','landMark','city','state','edit']
  datas: any;

  constructor(private http:HttpClient,private router:Router){}

  ngOnInit(): void {
    this.getNomineeDatas()
  }

  getNomineeDatas(){
    this.http.get("http://localhost:3000/posts").subscribe((result) => {
      this.datas = result
    })
  }

}
