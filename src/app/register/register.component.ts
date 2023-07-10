import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { gte } from '../gte.validators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() buttonClick = new EventEmitter<void>();

  selectedDate!: Date;
  birthDate: any;
// firstName: any;
// lastName: any;
// dob: any;
// email: any;
// mobileNumber: any;
// idProof: any;
// idNumber: any;
// address: any;
// address2: any;
// address3: any;
// landMark: any;
// city: any;
// state: any;
datas: any;


  

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

  saveDatas(){
    console.log(this.registerForm.value);
    this.onButtonClick();
    
      this.http.post("http://localhost:3000/datas", this.registerForm.value).subscribe(response =>
      {
        this.datas = response
        console.log(this.datas);
        
        console.log("data saved Successfully");
        // this.router.navigate(['/yes']);
        this.registerForm.reset();
        
      },error => {
        console.error("error saving data", error);
        
      });
    } 


  onButtonClick() {
    this.buttonClick.emit();
  }

 
    }
  
  
  // registerFormDatas(){
  //   this.http.post("http://localhost:3000/regsiterDatas", this.registerForm.value).subscribe()
  //   console.log(this.registerForm.value);
  //   this.router.navigate(['/yes']);
  //   this.registerForm.reset();
    
  // }

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

