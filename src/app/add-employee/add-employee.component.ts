import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormArray,FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { IEmployee } from '../models/Employee';
import { EmployeeData } from '../services/empdata.service';
import { EmployeeService } from '../services/employee.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  faSpinner = faSpinner;
  fas = fas;
  addEmployeeForm: FormGroup;
  loading: boolean = false;
  constructor(private fb:FormBuilder, private employeeDataService:EmployeeData, private employeeService:EmployeeService, private route:Router) { }
  toUpdate = false;

  get name(){
    return this.addEmployeeForm.get('name');
  }

  get username(){
    return this.addEmployeeForm.get('username');
  }

  ngOnInit(): void {
    if(!this.employeeDataService.employeeData){
      this.employeeService.getEmployeeList().subscribe((employeeList: IEmployee[])=>{
        this.employeeDataService.employeeData = employeeList;
      })
    }
    this.addEmployeeForm = this.fb.group({
      name:['',[Validators.required, Validators.minLength(3)]],
      username:['',[Validators.required,  Validators.minLength(3), Validators.pattern('[a-zA-Z0-9 _-]*')]],
      email: [''],
      address: this.fb.group({
        street:[''],
        city:[''],
        zipcode:['']
      }),
      phone:[''],
      website:[''],
      company: this.fb.group({
        name:[''],
        bs:['']
      })
    })
  }

  addEmployee(){
    this.loading = true;
    this.employeeService.addEmployeeToList(this.addEmployeeForm.value).subscribe((result:IEmployee)=>{
      this.employeeDataService.employeeData.push(result);
      if(result){
        this.loading = false;
      }
      this.route.navigate(['/employeeList']);
    })
    
  }
}
