import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Record } from './record';
import { Nominee } from './nominee';
import { Guardian } from './guardian';
import { RegisterComponent } from './register/register.component';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecordService {
  datas: any;
  // private form1DataSubject = new BehaviorSubject<any>(null);
  // private form2DataSubject = new BehaviorSubject<any>(null);

  // form1Data$ = this.form1DataSubject.asObservable();
  // form2Data$ = this.form2DataSubject.asObservable();

  constructor(private http:HttpClient) { }
  // updateForm1Data(data: any) {
  //   this.form1DataSubject.next(data);
  // }

  // updateForm2Data(data: any) {
  //   this.form2DataSubject.next(data);
  // }

  // saveForm1Data() {
  //   const form1Data = this.form1DataSubject.getValue();
  //   // ...
  // }

  // saveForm2Data() {
  //   const form2Data = this.form2DataSubject.getValue();
  //   // ...
  // }


  // saveRegisterDatas(formData:Record): Observable<any>{    
  //     return this.http.post("http://localhost:3000/datas", formData);
  // }
  // saveNomineeDatas(nomineeForm:Nominee):Observable<any>{
  //    return this.http.post("http://localhost:3000/posts",nomineeForm);
  // }
  updateDatas(id:any,value:Record){
    this.http.put("http://localhost:3000/datas/"+id,value).subscribe()
  }
  editGuardianDetails(id:any, value:Guardian){
    this.http.put("http://localhost:3000/profile/" + id, value).subscribe();
  }
  getEdit(id:any){
    return this.http.get("http://localhost:3000/posts/"+id);
  }
  editRegister(id:any){
    return this.http.get("http://localhost:3000/datas/" +id);
  }
  guardianEdit(id:any){
    return this.http.get("http://localhost:3000/profile/"+id);
  }
  nomineeUpdate(id:any,value:Nominee){
    this.http.put("http://localhost:3000/posts/"+id,value).subscribe();
  }

}
