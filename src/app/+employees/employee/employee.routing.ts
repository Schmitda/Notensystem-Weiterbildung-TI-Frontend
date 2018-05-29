import {Routes} from '@angular/router';
import {ListEmployeesComponent} from '../list-employees/list-employees.component';
import {CreateEmployeeComponent} from '../create-employee/create-employee.component';

export const employeeRoutes: Routes = [
  {
    path: 'list',
    component: ListEmployeesComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateEmployeeComponent
  }
];
