import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../models/Employee';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

export class EmployeeData {
   public employeeData: IEmployee[];
}