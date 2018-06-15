import {BaseCrudService} from './base-crud.service';
import {Employee} from '../models/classes/Employee';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class EmployeeService extends BaseCrudService<Employee> {

  constructor(httpClient: HttpClient, configuration) {
    super(httpClient, configuration['endpoints']['employee']);
  }

  public findByShorthandSymbol(shorthandSymbol: string) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('keyword', shorthandSymbol);
    return this.httpClient.get<Employee[]>(`/api/employees?` + httpParams);
  }

}
