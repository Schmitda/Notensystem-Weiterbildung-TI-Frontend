import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../services/employee.service';
import {Router} from '@angular/router';
import {TitleEnum} from '../../models/enums/TitleEnum';

@Component({
  selector: 'bfh-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  public employeeForm: FormGroup;
  public titles = TitleEnum;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstName: [null, [Validators.required]],
      shorthandSymbol: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      title: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      function: [null, []],
    });
    this.employeeForm.get('shorthandSymbol').setAsyncValidators(this.checkUnique.bind(this));
  }

  saveEmployee() {
    if (this.employeeForm.valid) {
      this.employeeService.save(this.employeeForm.value).subscribe((val) => {
        this.router.navigateByUrl('/employees/list');
      });
    }
  }

  public checkUnique(c: AbstractControl) {
    return new Promise(((resolve, reject) => {
      let value = c.value;
      if (value) {
        this.employeeService.findByShorthandSymbol(value).subscribe(employees => {
          if (employees.length === 0) {
            resolve(null);
          } else {
            let emp = employees.find(emp => emp.shorthandSymbol === value);
            if (emp) {
              resolve({
                unique: {
                  expected: 'Unique value',
                  found: emp
                }
              });
            } else {
              resolve(null);
            }
          }
        });
      } else {
        resolve(null);
      }
    }));

  }

}
