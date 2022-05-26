import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeResolver } from 'src/app/core/resolver-services';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent, resolve: { employeeData: EmployeeResolver}, data: { title: 'Employee List'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
