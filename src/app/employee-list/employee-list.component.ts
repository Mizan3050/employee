import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../models/Employee'
import { EmployeeData } from '../services/empdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit , AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'actions'];
  dataSource : MatTableDataSource<IEmployee>;
  searchKey:string;
  employeeList : IEmployee[];
  searcKeyFound = false;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private employeeService:EmployeeService, private employeeDataService:EmployeeData, private route: Router) { }

  ngOnInit(): void {
    if(this.employeeDataService.employeeData){
      this.dataSource = new MatTableDataSource(this.employeeDataService.employeeData);
    }
    else{
    this.employeeService.getEmployeeList().subscribe((employeeList: IEmployee[])=>{
      this.dataSource = new MatTableDataSource(employeeList);
      this.employeeDataService.employeeData = employeeList;
    })
  }
  }
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
  applySearch(){
    this.dataSource.filter = this.searchKey.trim().toLocaleLowerCase();
  }

  deleteEmployee(row:IEmployee, index:number){
    this.dataSource.filteredData.splice(index,1);
    this.dataSource._updateChangeSubscription();
    console.log(index);
  }

  updateEmployee(id:number){
    console.log(id)
  }

  redirectToDetails(id:IEmployee){
    this.route.navigate([`employeeList/detail/${id.id}`]);
  }
}


