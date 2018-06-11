import {BaseCrudService} from './base-crud.service';
import {Employee} from '../models/classes/Employee';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class EmployeeService extends BaseCrudService<Employee> {

  constructor(httpClient: HttpClient, configuration) {
    super(httpClient, configuration['endpoints']['employee']);
  }

  public findByShorthandSymbol(shorthandSymbol: string) {
    return this.httpClient.get<Employee[]>(`/api/employees/byShorthand/${shorthandSymbol}`);
  }

}
