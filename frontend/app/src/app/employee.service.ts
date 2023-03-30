import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import Employee from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/';  
  
  constructor(private http:HttpClient) { }  
  
  getEmployeeList(): Observable<any> {
    // const data =  this.http.get(`${this.baseUrl}`+'user'); 
   return this.http.get(`${this.baseUrl}`+'user'); 
    // let list: any
    // console.log(data)
    // data.subscribe((d) => {
    //   console.log(d)
    //   list=d
    // })
    // return list
  }  
  
  createEmployee(employee: Employee): Observable<Object> {  
    return this.http.post(`${this.baseUrl}`+'user', employee);  
  }  
  
  deleteEmployee(id: number): Observable<Object> {  
    console.log("Attempting to delete")
    const data =  this.http.delete(`${this.baseUrl}user/${id}`); 
    console.log(data)
    data.subscribe((data)=> {
      console.log(data)
    })
    console.log("returning back")
    return data; 
  }  
  
  getEmployee(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}user/${id}`);  
  }  
  
  updateEmployee(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}user/${id}`, value);  
  }  
    
}
