import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "../app-routing.module";




@NgModule({
    imports:[
        BrowserModule,CommonModule,
        FormsModule, ReactiveFormsModule,
        AppRoutingModule, MatTableModule, MatPaginatorModule,
        BrowserAnimationsModule,HttpClientModule, MatFormFieldModule, MatIconModule,FontAwesomeModule,MatInputModule
    ],
    declarations: [
      ],
    exports:[
        BrowserModule,CommonModule,
        FormsModule, ReactiveFormsModule,
        AppRoutingModule, MatTableModule, MatPaginatorModule,
        BrowserAnimationsModule,HttpClientModule, MatFormFieldModule, MatIconModule,FontAwesomeModule,MatInputModule
    ]
})

export class SharedModule{}