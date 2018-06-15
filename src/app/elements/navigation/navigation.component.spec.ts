import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavigationComponent} from './navigation.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from '../../modules/core.module';
import {SharedModule} from '../../modules/shared.module';
import {routes} from '../../app.routing';
import {LoginComponent} from '../../pages/login/login.component';
import {ContentComponent} from '../../pages/content/content.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigationComponent,
        LoginComponent,
        ContentComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        SharedModule,
        BrowserAnimationsModule,
        CoreModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
