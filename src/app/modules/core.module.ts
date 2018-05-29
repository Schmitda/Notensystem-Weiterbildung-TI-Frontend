import {NgModule} from '@angular/core';
import {GUIService} from '../services/gui.service';
import {UserService} from '../services/user.service';
import {EmployeeService} from '../services/employee.service';
import {HttpClient} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {RoleService} from '../services/role.service';

const configuration = {
  endpoints: {
    employee: 'api/employees'
  }
};


@NgModule({
  imports: [ReactiveFormsModule],
  exports: [

  ],
  declarations: [],
  providers: [
    {
      provide: 'CONFIG',
      useValue: configuration
    },

    {
      provide: EmployeeService,
      useFactory: (httpClient, config) => new EmployeeService(httpClient, config),
      deps: [
        HttpClient,
        'CONFIG',
      ]
    },
    GUIService,
    RoleService,
    UserService,
  ],
})
export class CoreModule {
}

