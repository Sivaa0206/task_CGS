import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { gte } from '../gte.validators';
import { RecordService } from '../record.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-nominee-yes',
  templateUrl: './nominee-yes.component.html',
  styleUrls: ['./nominee-yes.component.css']
})
export class NomineeYesComponent  {

  @Output() buttonClicks = new EventEmitter<void>();
  @Output() formData = new EventEmitter<any>();
  formValue: any;



// registerForm:FormGroup;
  

  constructor(private http:HttpClient, private router:Router,
     private formBuilder:FormBuilder, private service:RecordService,private shared:SharedService){}

     
  
  registerForm = this.formBuilder.group({
    firstName : ["",Validators.required],
    lastName : ["",Validators.required],
    dob : ["",[Validators.required,gte(18)]],
    email : ["",Validators.email],
    mobileNumber : ["",Validators.required],
    idProof : [Validators.required],
    idNumber : ["",Validators.required],
    address : ["",Validators.required],
    address1: [""],
    address2: [""],
    landMark: [""],
    city : ["",Validators.required],
    state : ["",Validators.required],
    nominee : [Validators.required]
  })
  // emitFormData() {
  //   if (this.registerForm.valid) {
  //     this.formData.emit(this.registerForm.value);
  //   }        
  // }

  // regDatas(){
  //   if(this.registerForm.valid){}

  // }
  ngOnInit() {
    this.formValue = this.shared.formValue;
  }

  
  regDatas(){
    this.registerPost();
    this.http.post("http://localhost:3000/posts",this.registerForm.value).subscribe()
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }

  registerPost(){
    this.http.post("http://localhost:3000/datas", this.formValue).subscribe();
  }
  // saveDatas(){

  //   this.service.saveTwoDatas();

  // }
  get dob(){
    return this.registerForm.get('dob');
  }

  onButtonClick() {
    this.buttonClicks.emit();
  }



  }




