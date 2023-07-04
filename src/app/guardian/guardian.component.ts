import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { gte } from '../gte.validators';

@Component({
  selector: 'app-guardian',
  templateUrl: './guardian.component.html',
  styleUrls: ['./guardian.component.css']
})
export class GuardianComponent {

  constructor( private formBuilder: FormBuilder, private http:HttpClient, private router:Router){}


  guardianRegisterForm = this.formBuilder.group({
    firstName : ["",Validators.required],
    lastName : ["",Validators.required],
    dob : ["",[Validators.required,gte(18)]],
    email : ["",Validators.email],
    mobileNumber : ["",Validators.required],
    idProof : [Validators.required],
    idNumber : ["",Validators.required],
    address : ["",Validators.required],
    address2: [""],
    address3: [""],
    landMark: [""],
    city : ["",Validators.required],
    state : ["",Validators.required]
    })

  postGuardianData(){

    this.http.post("http://localhost:3000/profile",this.guardianRegisterForm.value).subscribe()
    console.log(this.guardianRegisterForm.value);
    this.guardianRegisterForm.reset();

  }
  get dob2(){
    return this.guardianRegisterForm.get('dob');
  }
}
