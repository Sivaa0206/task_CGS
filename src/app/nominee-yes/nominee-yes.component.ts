import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { gte } from '../gte.validators';

@Component({
  selector: 'app-nominee-yes',
  templateUrl: './nominee-yes.component.html',
  styleUrls: ['./nominee-yes.component.css']
})
export class NomineeYesComponent  {

  

  constructor(private http:HttpClient, private router:Router, private formBuilder:FormBuilder){}
  
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
  

  
  regDatas(){
    this.http.post("http://localhost:3000/posts",this.registerForm.value).subscribe()
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }
  get dob(){
    return this.registerForm.get('dob');
  }



  }




