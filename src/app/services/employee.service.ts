import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../models/Employee';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

export class EmployeeService{

    url = "https://jsonplaceholder.typicode.com/users"
    public employeeList : IEmployee[];

    constructor(private http : HttpClient) { }

    getEmployeeList():Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this.url);
    }

    addEmployeeToList(employeeData):Observable<IEmployee>{
        return this.http.post<IEmployee>(this.url, employeeData);
    }
}