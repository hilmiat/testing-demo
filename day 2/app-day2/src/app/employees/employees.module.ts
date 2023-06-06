import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeeComponent } from './employee/employee.component';



@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
