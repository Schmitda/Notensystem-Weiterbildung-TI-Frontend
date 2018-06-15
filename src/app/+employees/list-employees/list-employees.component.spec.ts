import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ListEmployeesComponent} from './list-employees.component';
import {SharedModule} from '../../modules/shared.module';
import {CoreModule} from '../../modules/core.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchEmployeesComponent} from '../search-employees/search-employees.component';
import {GUIService} from '../../services/gui.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EmployeeService} from '../../services/employee.service';

describe('ListEmployeesComponent', () => {
  let listComponent: ListEmployeesComponent;
  let searchEmployee: SearchEmployeesComponent;
  let listEmployeeFixtures: ComponentFixture<ListEmployeesComponent>;
  let listSearchFixtures: ComponentFixture<SearchEmployeesComponent>;
  let employeeService: EmployeeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListEmployeesComponent,
        SearchEmployeesComponent
      ],
      imports: [
        SharedModule,
        CoreModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        GUIService,
      ]
    })
      .compileComponents();
    employeeService = TestBed.get(EmployeeService);
  }));

  beforeEach(() => {
    listEmployeeFixtures = TestBed.createComponent(ListEmployeesComponent);
    listComponent = listEmployeeFixtures.componentInstance;
    listSearchFixtures = TestBed.createComponent(SearchEmployeesComponent);
    searchEmployee = listSearchFixtures.componentInstance;
    listEmployeeFixtures.detectChanges();
  });

  it('should create list-component', () => {
    expect(listComponent).toBeTruthy();
  });

  it('should create search-employee', () => {
    expect(searchEmployee).toBeTruthy();
  });

  it('should execute getAll', () => {
    listEmployeeFixtures.detectChanges();
    spyOn(employeeService, 'getAll');
    listComponent.ngOnInit();
    listEmployeeFixtures.detectChanges();
    expect(employeeService.getAll).toHaveBeenCalled();
    expect(employeeService.getAll).toHaveBeenCalledTimes(1);
  });

});
