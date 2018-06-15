import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {routes} from '../../app.routing';
import {ContentComponent} from '../content/content.component';
import {APP_BASE_HREF} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {SharedModule} from '../../modules/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from '../../modules/core.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        ContentComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        SharedModule,
        BrowserAnimationsModule,
        CoreModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
      .compileComponents();
  }));

  beforeEach(() => {

  });

  it('should create', () => {

  });
});
