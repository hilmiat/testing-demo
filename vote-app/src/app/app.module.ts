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
import { DemopipesComponent } from './demopipes/demopipes.component';
import { SummaryPipe } from './summary.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { UsiaPipe } from './usia.pipe';
import { CariPipe } from './cari.pipe';

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
    TestProjectionComponent,
    DemopipesComponent,
    SummaryPipe,
    CapitalizePipe,
    UsiaPipe,
    CariPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
