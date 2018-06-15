import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {SearchEmployeesComponent} from './search-employees.component';
import {SharedModule} from '../../modules/shared.module';
import {CoreModule} from '../../modules/core.module';
import {ReactiveFormsModule} from '@angular/forms';
import {GUIService} from '../../services/gui.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('SearchEmployeesComponent', () => {
  let component: SearchEmployeesComponent;
  let fixture: ComponentFixture<SearchEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchEmployeesComponent],
      imports: [
        SharedModule,
        CoreModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        GUIService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute requestChange when form-control is changed', () => {
    fakeAsync(() => {
      spyOn(component, 'requestChanged');
      component.ngOnInit();
      fixture.detectChanges();
      fixture.nativeElement.querySelector('[matInput]').dispatchEvent(new Event('change'));
      component.formControl.setValue('Test');
      fixture.detectChanges();
      tick(600);
      expect(component.requestChanged).toHaveBeenCalledTimes(1);
    });
  });
  
});
