import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../models/classes/Employee';
import {map} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';

@Component({
  selector: 'bfh-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  public employees$: Observable<Employee[]>;
  public displayedColumns = ['id', 'shorthand_symbol', 'first_name', 'last_name', 'email', 'title', 'function'];


  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
  }

  public searchTermChanged(val: string) {
    if (val) {
      this.employees$ = this.employeeService.findByShorthandSymbol(val).pipe(
        map((employees) => {
          let tempEmployees = [];
          employees.forEach(employee => {
            tempEmployees.push(new Employee(employee));
          });
          return tempEmployees;
        })
      );
    } else {
      this.employees$ = of([]);
    }
  }

}
