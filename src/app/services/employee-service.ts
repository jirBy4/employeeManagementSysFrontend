import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Employee } from '../models/employee';


@Injectable({
    providedIn: 'root'
})
export class EmployeeService{
    private baseURL = 'http://localhost:8080/api/employees'
    constructor(private httpClient: HttpClient){}
    getEmployeeList(): Observable<Employee[]>{
        return this.httpClient.get<Employee[]>(`${this.baseURL}/getAll`);
    }
    getEmployeeById(id:number){
        return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
    }
    createEmployee(employee:Employee):Observable<Employee>{
        return this.httpClient.post<Employee>(`${this.baseURL}/create`,employee);
    }
    updateEmployeeById(id:number, employee:Employee): Observable<Object>{
        return this.httpClient.put<Employee>(`${this.baseURL}/update/${id}`, employee);
    }
    deleteEmployeeById(id:number): Observable<Object>{
        return this.httpClient.delete(`${this.baseURL}/delete/${id}`)
    }
}