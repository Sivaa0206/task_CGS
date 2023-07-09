import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { NomineeYesComponent } from './nominee-yes/nominee-yes.component';
import { GuardianComponent } from './guardian/guardian.component';
import { NomineeDatasComponent } from './nominee-datas/nominee-datas.component';
import { GuardianDatasComponent } from './guardian-datas/guardian-datas.component';
import { RegisterTableComponent } from './register-table/register-table.component';
import { EditRegisterComponent } from './edit-register/edit-register.component';
import { GuardianeditComponent } from './guardianedit/guardianedit.component';
import { NomineeEditComponent } from './nominee-edit/nominee-edit.component';
import { AdminComponent } from './admin/admin.component';
// import { DatasModule } from './datas/datas.module';









@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NomineeYesComponent,
    GuardianComponent,
    NomineeDatasComponent,
    GuardianDatasComponent,
    RegisterTableComponent,
    EditRegisterComponent,
    GuardianeditComponent,
    NomineeEditComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatFormFieldModule,MatIconModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,
    MatRadioModule,MatSelectModule,MatCardModule,MatButtonModule,ReactiveFormsModule,HttpClientModule,MatTableModule,
    MatDividerModule,FormsModule,FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
