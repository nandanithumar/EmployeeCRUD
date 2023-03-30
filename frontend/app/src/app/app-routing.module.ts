import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [  
  { path: '', redirectTo: 'view-employee', pathMatch: 'full' },  
  { path: 'view-employee', component: EmployeeListComponent },  
  { path: 'add-employee', component: AddEmployeeComponent },  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
