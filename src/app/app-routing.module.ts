import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurd } from './services/auth-gaurd.service';

const routes: Routes = [
  {path:'employeeList', canActivate:[AuthGaurd], component: EmployeeListComponent},
  {path: 'addEmployee', canActivate:[AuthGaurd], component: AddEmployeeComponent},
  {path: 'employeeList/detail/:id', canActivate:[AuthGaurd], component: EmployeeDetailComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
