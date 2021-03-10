import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGaurd } from "src/app/services/auth-gaurd.service";
import { AddEmployeeComponent } from "../controller/add-employee/add-employee.component";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";



const routes:Routes = [
    {path:'employeeList', canActivate:[AuthGaurd], component: EmployeeListComponent},
    {path: 'employeeList/update/:id', canActivate:[AuthGaurd], component: AddEmployeeComponent},
    {path: 'employeeList/detail/:id', canActivate:[AuthGaurd], component: EmployeeDetailComponent},
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ViewRoutingModule { }