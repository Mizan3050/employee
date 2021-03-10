import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../models/Employee'
import { EmployeeData } from '../../services/empdata.service';
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
  length:number;
  pageSize = 2;
  pageIndex =0;
  pageEvent:PageEvent;
  pageSizeOptions = [1,2,5,10,20];
  currentIndex : number = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private employeeService:EmployeeService, private employeeDataService:EmployeeData, private route: Router) { }

  //loading data with respected to pages changed
  loadData(pageIndex:number, pageSize:number, empData: IEmployee[]){
    this.dataSource = new MatTableDataSource(empData.slice(pageIndex, (pageIndex+pageSize)))
  }

  //clearing search filter
  clearSearch(){
    this.searchKey = "";
    this.applySearch();
  }


  ngOnInit(): void {

    //fetching data from api
    if(this.employeeDataService.employeeData){
      this.loadData(0, this.pageSize, this.employeeDataService.employeeData);
      this.length = this.employeeDataService.employeeData.length;
    }
    else{
    this.employeeService.getEmployeeList().subscribe((employeeList: IEmployee[])=>{
      this.loadData(0, this.pageSize,employeeList);
      this.employeeDataService.employeeData = employeeList;
      this.length = this.employeeDataService.employeeData.length;
    })
    
  }
  }
  ngAfterViewInit() {
    
  }

  //applying search filter
  applySearch(){
    this.dataSource.filter = this.searchKey.trim().toLocaleLowerCase();
  }

  //deleting employee from the list
  deleteEmployee(row:IEmployee, index:number){
    this.dataSource.filteredData.splice((index),1); 

    this.dataSource._updateChangeSubscription();//refreshing dataSource

    //deleting from array
    this.employeeDataService.employeeData.splice(this.currentIndex+index,1);

    //updating table 
    this.loadData(this.currentIndex,this.pageSize,this.employeeDataService.employeeData);
  }


  //updating employee data
  updateEmployee(row:IEmployee, index:number){

    //setting form status to update
    this.employeeDataService.toUpdate = true;
    this.route.navigate([`/employeeList/update/${row.id}`]);

    //setting id of employee to be updated
    this.employeeDataService.updateId =this.currentIndex+ index;
    this.loadData(this.currentIndex,this.pageSize,this.employeeDataService.employeeData);
  }

  //redirects to employee details page
  redirectToDetails(id:IEmployee){
    this.route.navigate([`employeeList/detail/${id.id}`]);
  }

  //making changes whenever page is changed
  onPageChange(e:PageEvent){
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.currentIndex = this.pageSize*this.pageIndex;
    this.length = e.length;
    console.log(this.currentIndex);
    this.loadData(this.currentIndex,this.pageSize,this.employeeDataService.employeeData);
  }
}


