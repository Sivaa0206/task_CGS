import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { gte } from './gte.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectTask';
 constructor(private router:Router){}

 activeTabIndex: number = 0;
 isNominee:boolean = true;
 isGuardian:boolean = true;

 onFirstComponentButtonClick() {

  this.isNominee = false;
 
}
onGuardianClick(){
  this.isGuardian = false;
}


 onTabChange(event: any) {
   this.activeTabIndex = event.index;
 }

}
