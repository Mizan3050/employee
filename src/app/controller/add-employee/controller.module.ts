import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AddEmployeeComponent } from "./add-employee.component";
import { ControllerRoutingModule } from "./controller-routing.module";

@NgModule({
    declarations:[AddEmployeeComponent],
    imports:[SharedModule, ControllerRoutingModule],
    exports:[SharedModule, SharedModule,AddEmployeeComponent,ControllerRoutingModule],
})

export class ControllerModule{}