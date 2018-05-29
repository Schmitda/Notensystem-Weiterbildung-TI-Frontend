import {Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {ContentComponent} from './pages/content/content.component';
export const employees = 'app/+employees/employee/employee.module#EmployeeModule';
export const user = 'app/features/user/user.module#UserModule';

  export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [],
  },
  {
    path: 'content',
    component: ContentComponent,
    canActivate: [],
  },
  {
    path: 'employees',
    loadChildren: employees
  }
];
