import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { ViewRoutingModule } from "./view-routing.module";


@NgModule({

    declarations: [
        EmployeeListComponent,
        EmployeeDetailComponent
      ],
      imports:[
        SharedModule,
        ViewRoutingModule
    ],
    exports:[
    ]
})

export class ViewModule{}