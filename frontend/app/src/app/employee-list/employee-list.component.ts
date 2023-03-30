// import { AfterContentInit, AfterViewInit, Component, OnInit, SimpleChanges } from '@angular/core';
// import { EmployeeService } from '../employee.service';
// import Employee from '../employee';
// import { Observable, Subject } from 'rxjs';

// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { data } from 'jquery';

// @Component({
//   selector: 'app-employee-list',
//   templateUrl: './employee-list.component.html'
// })
// export class EmployeeListComponent implements OnInit {
//   constructor(private employeeservice: EmployeeService) {}

//   employeesArray: any[] = [];
//   dtOptions: DataTables.Settings = {};
//   dtTrigger: Subject<any> = new Subject();

//   employees?: Observable<Employee[]>;
//   employee: Employee = new Employee();
//   deleteMessage = false;
//   // employeelist: Employee[] = []
//   employeelist: any=[]
//   list:any[]=[]
//   isupdated = false;

//   ngOnInit() {
//     console.log("Initializing")
//     this.isupdated = false;
//     this.dtOptions = {
//       pageLength: 6,
//       stateSave: true,
//       lengthMenu: [
//         [6, 16, 20, -1],
//         [6, 16, 20, 'All'],
//       ],
//       processing: true,
//     };
//     // console.log(this.employeeservice.getEmployeeList())
//     // const elist:Observable<Object> = this.employeeservice.getEmployeeList()

//     this.employeeservice.getEmployeeList().subscribe(data=>{

//         // this.employeelist = [...data, ...destructedData]
//         this.list.push(...data)

//       // this.employees=destructedData
//       // console.log(this.employees)
//       // this.employeelist = this.employees
//       this.dtTrigger.next;
//      })

//     // console.log(elist)
//     // elist.subscribe((data) => {
//       // console.log(data)
//       // this.employeelist=data;
//       // console.log(this.employeelist)
//       // console.log(this.employeelist)

//       // this.dtTrigger.next;
//     // });
//   }

//   deleteEmployee(id: number) {
//     this.employeeservice.deleteEmployee(id).subscribe(

//       (data) => {
//         console.log("Yoho")
//         this.deleteMessage = true;
//         this.employeeservice.getEmployeeList().subscribe((data) => {
//           // this.employees = data;
//           console.log(...data)
//           this.list = data
//         });

//       },
//       (error) => console.log(error)
//     );
//   }

//   updateEmployee(id: number) {
//     this.employeeservice.getEmployee(id).subscribe(
//       (data) => {
//         console.log(data);
//         this.employeelist.push(data) ;
//       },
//       (error) => console.log(error)
//     );
//   }

//   employeeupdateform = new FormGroup({
//     id: new FormControl(),
//     name: new FormControl(),
//     password: new FormControl(),
//     moNumber: new FormControl()
//   });

//   updateStu(updstu: any) {
//     this.employee = new Employee();
//     this.employee.id = this.Id?.value;
//     this.employee.name = this.Name?.value;
//     this.employee.password = this.Password?.value;
//     this.employee.mobileNo = this.MoNumber?.value;
//     console.log(this.employee);

//     this.employeeservice
//       .updateEmployee(this.employee.id, this.employee)
//       .subscribe(
//         (data) => {
//           this.isupdated = true;
//           // this.employeeservice.getEmployeeList().subscribe((data) => {
//           //   this.employees = data;
//           // });
//         },
//         (error) => console.log(error)
//       );
//   }

//   get Name() {
//     return this.employeeupdateform.get('name');
//   }

//   get Password() {
//     return this.employeeupdateform.get('password');
//   }

//   get MoNumber() {
//     return this.employeeupdateform.get('mo_number');
//   }

//   get Id() {
//     return this.employeeupdateform.get('id');
//   }

//   changeisUpdate() {
//     this.isupdated = false;
//   }
// }

// =======================================================================================

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable, Subject } from 'rxjs';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import Employee from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  constructor(private employeeservice: EmployeeService) {}

  employeesArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  employees!: Employee[];
  employee: Employee = new Employee();
  deleteMessage = false;
  employeelist: any;
  isupdated = false;

  ngOnInit() {
    this.isupdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [
        [6, 16, 20, -1],
        [6, 16, 20, 'All'],
      ],
      processing: true,
    };
    this.employeeservice.getEmployeeList().subscribe((data) => {
      this.employees = data;
      this.dtTrigger.next;
    });
  }

  deleteEmployee(id: number) {
    this.employeeservice.deleteEmployee(id).subscribe(
      (data) => {
        console.log(data);
        this.deleteMessage = true;
        this.employeeservice.getEmployeeList().subscribe((data) => {
          this.employees = data;
        });
      },
      (error) => console.log(error)
    );
  }

  updateEmployee(id: number) {
    
    this.employeeservice.getEmployee(id).subscribe(
      (data) => {
        this.employeelist = [data];
        console.log(this.employeelist)
      },
      (error) => console.log(error)
    );
  }

  employeeupdateform = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    password: new FormControl(),
    moNumber: new FormControl(),
  });

  updateEmp(updemp:any) {
    this.employee = new Employee();
    this.employee.id = this.Id!.value;
    this.employee.name = this.Name!.value;
    this.employee.password = this.Password!.value;
    this.employee.mobileNo = this.MoNumber!.value;
    console.log(this.MoNumber!.value);

    this.employeeservice
      .updateEmployee(this.employee.id, this.employee)
      .subscribe(
        (data) => {
          this.isupdated = true;
          this.employeeservice.getEmployeeList().subscribe((data) => {
            this.employees = data;
          });
        },
        (error) => console.log(error)
      );
  }

  get Id() {
    return this.employeeupdateform.get('id');
  }

  get Name() {
    return this.employeeupdateform.get('name');
  }

  get Password() {
    return this.employeeupdateform.get('password');
  }

  get MoNumber() {
    return this.employeeupdateform.get('mobileNo');
  }

  changeisUpdate() {
    this.isupdated = false;
  }
}
