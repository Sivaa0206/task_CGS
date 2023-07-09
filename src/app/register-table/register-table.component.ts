import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-table',
  templateUrl: './register-table.component.html',
  styleUrls: ['./register-table.component.css']
})
export class RegisterTableComponent implements OnInit {
  
  constructor(private http:HttpClient){}

  ngOnInit(): void {

    this.getDatas();
    // console.log(this.getDatas);
    
    
  }

  data: any;

  getDatas(){
    this.http.get("http://localhost:3000/datas").subscribe(result => {
      this.data = result;
      console.log(result);
      
    }, error => {
      console.error("error",error);
    }
    
    )
  }



}
