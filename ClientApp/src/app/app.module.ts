import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { LeaveListComponent } from './leave-list/leave-list.component';
import { LeaveCOnfigurationComponent } from './leave-configuration/leave-configuration.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmpapplyleaveComponent } from './empapplyleave/empapplyleave.component';
import { EmpleaveComponent } from './empleave/empleave.component';
import { EmpprofileComponent } from './empprofile/empprofile.component';
import { from } from 'rxjs';
 @NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LeaveCOnfigurationComponent,
     LeaveListComponent,
     EmployeeListComponent,
     EmployeeloginComponent,
     EmpapplyleaveComponent,
     EmpleaveComponent,
     EmpprofileComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'employees', component: NavMenuComponent },
      { path: 'employeelist', component: EmployeeListComponent },
      { path: 'leaveconfig', component: LeaveCOnfigurationComponent },
      { path: 'leavelist', component: LeaveListComponent },
      { path: 'emplogin', component: EmployeeloginComponent },
      { path: 'empapplyleave', component: EmpapplyleaveComponent },
      { path: 'empleave', component: EmpleaveComponent },
      { path: 'empprofile', component: EmpprofileComponent },
    //  { path: '', redirectTo: 'Welcome', pathMatch: 'full' }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
