import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListEmployeesComponent} from '../list-employees/list-employees.component';
import {SearchEmployeesComponent} from '../search-employees/search-employees.component';
import {CreateEmployeeComponent} from '../create-employee/create-employee.component';
import {RouterModule} from '@angular/router';
import {employeeRoutes} from './employee.routing';
import {SharedModule} from '../../modules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(employeeRoutes)
  ],
  declarations: [
    ListEmployeesComponent,
    SearchEmployeesComponent,
    CreateEmployeeComponent
  ]
})
export class EmployeeModule { }
