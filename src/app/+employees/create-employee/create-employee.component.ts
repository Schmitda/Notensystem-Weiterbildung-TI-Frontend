import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'bfh-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  public employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstName: [null],
      lastName: [null],
      title: [null],
      email: [null],
      function: [null],
      roles: [null]
    });
  }

  saveEmployee() {
    if (this.employeeForm.valid) {
      this.employeeService.save(this.employeeForm.value).subscribe((val) => {

      });
    }
  }
}
