import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';  
import Employee from '../employee';  


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent implements OnInit {
  constructor(private employeeservice: EmployeeService) {}
  
  employee:Employee = new Employee();
  submitted = false;

  ngOnInit() {  
    this.submitted = false;
  }

  employeesaveform = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
    mo_number: new FormControl(),
  });

  saveEmployee(saveEmployee: any) {
    this.employee = new Employee();
    this.employee.name = this.Name?.value;
    this.employee.password = this.Password?.value;
    this.employee.mobileNo = this.MoNumber?.value;
    this.submitted = true;
    this.save();
  }

  save() {
    console.log(this.employee)
    this.employeeservice.createEmployee(this.employee).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.employee = new Employee();
  }

  get Name() {
    return this.employeesaveform.get('name');
  }

  get Password() {
    return this.employeesaveform.get('password');
  }

  get MoNumber() {
    return this.employeesaveform.get('mo_number');
  }

  addEmployeeForm() {
    this.submitted = false;
    this.employeesaveform.reset();
  }
}
