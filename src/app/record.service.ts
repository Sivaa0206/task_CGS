import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Record } from './record';
import { Nominee } from './nominee';
import { Guardian } from './guardian';


@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http:HttpClient) { }

  updateDatas(id:any,value:Record){
    this.http.put("http://localhost:3000/datas/"+id,value).subscribe()
  }
  editGuardianDetails(id:any, value:Guardian){
    this.http.put("http://localhost:3000/profile/" + id, value).subscribe();

  }
  getEdit(id:any){
    return this.http.get("http://localhost:3000/posts/"+id);
  }
  guardianEdit(id:any){
    return this.http.get("http://localhost:3000/profile/"+id);
  }
  nomineeUpdate(id:any,value:Nominee){
    this.http.put("http://localhost:3000/posts/"+id,value).subscribe();
  }

}
