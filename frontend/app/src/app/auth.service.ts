import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private eService: EmployeeService){}
  employees: any
  isUserLoggedIn: boolean = false;

  login(userName: string, password: string): Observable<any> {
    this.eService.getEmployeeList().subscribe(data => { 
      this.employees = data
    }
      )
    this.isUserLoggedIn = userName == 'admin' && password == 'admin';
    localStorage.setItem(
      'isUserLoggedIn',
      this.isUserLoggedIn ? 'true' : 'false'
    );

    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap((val) => {
        console.log('Is User Authentication is successful: ' + val);
      })
    );
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }

}
