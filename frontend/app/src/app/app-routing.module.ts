import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { Authguard } from './authguard';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', component:LoginComponent},
  { path: 'view-employee', component: EmployeeListComponent, canActivate: [Authguard] },  
  { path: 'add-employee', component: AddEmployeeComponent, canActivate:[Authguard] },  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
