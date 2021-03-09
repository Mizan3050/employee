import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HeaderComponent } from './header/header.component';
import { AuthGaurd } from './services/auth-gaurd.service';
import { AuthService } from './services/auth.service';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    HeaderComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule, MatTableModule, MatPaginatorModule,
    BrowserAnimationsModule,HttpClientModule, MatFormFieldModule, FontAwesomeModule
  ],
  providers: [AuthGaurd, AuthService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
