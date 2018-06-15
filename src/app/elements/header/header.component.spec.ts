import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from '../../modules/core.module';
import {SharedModule} from '../../modules/shared.module';
import {routes} from '../../app.routing';
import {GUIService} from '../../services/gui.service';
import {LoginComponent} from '../../pages/login/login.component';
import {ContentComponent} from '../../pages/content/content.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        LoginComponent,
        ContentComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        SharedModule,
        BrowserAnimationsModule,
        CoreModule,
      ],
      providers: [
        GUIService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
