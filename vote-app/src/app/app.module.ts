import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { InputFormatDirective } from './input-format.directive';
import { InputFormat2Directive } from './input-format2.directive';
import { KecualiDirective } from './kecuali.directive';
import { TestProjectionComponent } from './test-projection/test-projection.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    EmployeesComponent,
    EmployeeComponent,
    InputFormatDirective,
    InputFormat2Directive,
    KecualiDirective,
    TestProjectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
