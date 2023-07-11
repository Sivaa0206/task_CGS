import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { gte } from './gte.validators';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  title = 'projectTask';
  value: any;
  form1Data: any;
  form2Data: any;

 constructor(private router:Router){}
//  @ViewChild('MatTabGroup') tabGroup: MatTabGroup | any

//  changeTab(selectedValue: string) {
//    const index = parseInt(selectedValue, 10);
//    this.tabGroup.selectedIndex = index;
//  }
// changeTab(index: number) {
//   this.tabGroup.selectedIndex = index;
// }


 activeTabIndex: number = 0;
 isNominee:boolean = true;
 isGuardian:boolean = true;
//  tabIndex: any;
 onNomineeClick() {

  this.isNominee = false;
 
}
onGuardianClick(){
  this.isGuardian = false;
}


 onTabChange(event: any) {
   this.activeTabIndex = event.index;
 }

 tabIndex:number=0;
 informChange(event: any) {
    if (this.tabIndex != event) {

      console.log("from tab-click");
    } else
    {
       console.log("from .ts");
    } 
    this.tabIndex = event; //force the value to tabIndex
 }

//  ngAfterViewInit() {
//   setTimeout(() => {
//     this.tabGroup.selectedIndex = 1; 
//   }, 2000); 
}
 

// informChange(tabIndex: number) {

//     console.log('tabIndex');
//     console.log(tabIndex);
// }
// tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
//   console.log('index => ', tabChangeEvent.index);
//   this.value = tabChangeEvent.index;

// }
