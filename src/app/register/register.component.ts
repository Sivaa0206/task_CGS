import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { gte } from '../gte.validators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  selectedDate!: Date;
  // age!: number;
  birthDate: any;
  dob: any;
  
  // birthDate!: Date;

  constructor( private formBuilder:FormBuilder ,private http:HttpClient, private router:Router){}

  registerForm = this.formBuilder.group({
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
    state : ["",Validators.required],
    nominee : [Validators.required]
  })
  get dob1(){
    return this.registerForm.get('dob');
  }
  // regDatas(){
  //   this.http.post("http://localhost:3000/posts",this.registerForm.value).subscribe()
  //   console.log(this.registerForm.value);
  //   this.router.navigate(['/yes']);
  //   this.registerForm.reset();
    
  //   // this.service.register(this.registerForm.value).subscribe();
  //   // console.log(this.registerForm.value);
  // }

  // calculateAge() {

  //   const dob = this.registerForm.get('dob').value;  
  //   const currentDate = new Date();
  //   const age = Math.floor((currentDate.getTime() - dob.getTime()) / (1000 * 60 * 60 * 24 * 365));
  //   // const today = new Date();
  //   // console.log(today);
    
  //   // const birthDate = new Date(this.selectedDate)
  //   // console.log(birthDate);
    
  //   // const diff = Math.abs(today.getTime() - birthDate.getTime());
  //   // console.log(diff);
    
  //   // this.age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  //   // console.log(this.age);
    

  //   if (age < 18) {
  //     this.router.navigate(['/guardian']); 
  //   } else{
  //     this.router.navigate(['/home']);
  //   }
}
