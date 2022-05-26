import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './components/employee/employee.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    NgbTooltipModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
