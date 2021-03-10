import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";


@NgModule({
    imports:[
        CommonModule,
        FormsModule, ReactiveFormsModule, MatTableModule, MatPaginatorModule,
        HttpClientModule, MatFormFieldModule, MatIconModule,FontAwesomeModule,MatInputModule
    ],
    declarations: [
      ],
    exports:[
        CommonModule,
        FormsModule, ReactiveFormsModule, MatTableModule, MatPaginatorModule,
        HttpClientModule, MatFormFieldModule, MatIconModule,FontAwesomeModule,MatInputModule
    ]
})

export class SharedModule{}