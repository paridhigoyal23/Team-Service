import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { EmployeeModule } from "./feature/employee/employee.module";
import { MatDialogModule } from "@angular/material/dialog";
import { LoginPageComponent } from "./login-page/login-page.component";
import { EmployeeRoutingModule } from "./feature/employee/employee-routing.module";
@NgModule({
    declarations: [AppComponent, LoginPageComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CoreModule,
        ReactiveFormsModule,
        EmployeeModule,
        MatDialogModule,
        MatIconModule,
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
