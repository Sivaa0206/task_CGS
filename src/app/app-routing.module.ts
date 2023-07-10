import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NomineeYesComponent } from './nominee-yes/nominee-yes.component';
import { GuardianComponent } from './guardian/guardian.component';
import { NomineeDatasComponent } from './nominee-datas/nominee-datas.component';
import { GuardianDatasComponent } from './guardian-datas/guardian-datas.component';
import { RegisterTableComponent } from './register-table/register-table.component';
import { EditRegisterComponent } from './edit-register/edit-register.component';
import { GuardianeditComponent } from './guardianedit/guardianedit.component';
import { NomineeEditComponent } from './nominee-edit/nominee-edit.component';

const routes: Routes = [
  {path:"home",component:RegisterComponent},
  {path:"yes",component:NomineeYesComponent},
  {path:"guardian",component:GuardianComponent},
  {path:"nomineeData",component:NomineeDatasComponent},
  {path:"guardianData",component:GuardianDatasComponent},
  {path:"table", component:RegisterTableComponent},
  {path:"edit/:id",component:EditRegisterComponent},
  {path:"editGuardian/:id", component:GuardianeditComponent},
  {path:"editNominee/:id", component:NomineeEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
