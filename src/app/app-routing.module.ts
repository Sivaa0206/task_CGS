import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NomineeYesComponent } from './nominee-yes/nominee-yes.component';
import { GuardianComponent } from './guardian/guardian.component';
import { NomineeDatasComponent } from './nominee-datas/nominee-datas.component';
import { GuardianDatasComponent } from './guardian-datas/guardian-datas.component';

const routes: Routes = [
  {path:"home",component:RegisterComponent},
  {path:"yes",component:NomineeYesComponent},
  {path:"guardian",component:GuardianComponent},
  {path:"nomineeData",component:NomineeDatasComponent},
  {path:"guardianData",component:GuardianDatasComponent},
  {path:"",redirectTo:"home",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
