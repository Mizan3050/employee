import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AuthGaurd } from './services/auth-gaurd.service';
import { AuthService } from './services/auth.service';
import { EmployeeService } from './services/employee.service';
import { ViewModule } from './view/view.module';
import { ControllerModule } from './controller/add-employee/controller.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,ViewModule,ControllerModule
  ],
  providers: [AuthGaurd, AuthService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
