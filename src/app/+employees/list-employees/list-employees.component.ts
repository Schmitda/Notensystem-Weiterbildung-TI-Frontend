import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../models/classes/Employee';

@Component({
  selector: 'bfh-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  public employees$: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employees$ = this.employeeService.getAll();
  }

  public searchTermChanged(val: string) {
    this.employees$ = this.employeeService.getAll().map((employees) => {
      let tempEmployees = [];
      employees.forEach(emply => {
        tempEmployees.push(new Employee(employees));
      });
      return tempEmployees;
    });
  }

}
