import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CreateEmployeeComponent} from './create-employee.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../base-modules/material.module';
import {CoreModule} from '../../modules/core.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {employeeRoutes} from '../employee/employee.routing';
import {ListEmployeesComponent} from '../list-employees/list-employees.component';
import {SearchEmployeesComponent} from '../search-employees/search-employees.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('CreateEmployeeComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreateEmployeeComponent,
        ListEmployeesComponent,
        SearchEmployeesComponent,
      ],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule,
        RouterTestingModule.withRoutes(employeeRoutes),
        CoreModule,
        BrowserAnimationsModule
      ],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be created', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.employeeForm).toBeTruthy();
  });

  it('check invalid', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.employeeForm.invalid).toBeTruthy();
  });

  it('check valid', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.employeeForm.valid).toBeFalsy();
  });

  it('check valid filled out form', () => {
    component.ngOnInit();
    component.employeeForm.patchValue({
      firstName: 'Daniel',
      shorthandSymbol: 'ds',
      lastName: 'Schmitz',
      title: 'Dr',
      email: 'dani.schmitz@live.de',
      function: 'Applikationsentwickler'
    });
    fixture.detectChanges();
    expect(component.employeeForm.valid).toBeTruthy();
  });

});
