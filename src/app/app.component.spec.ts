import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {SharedModule} from './modules/shared.module';
import {CoreModule} from './modules/core.module';
import {HeaderComponent} from './elements/header/header.component';
import {NavigationComponent} from './elements/navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from './app.routing';
import {LoginComponent} from './pages/login/login.component';
import {ContentComponent} from './pages/content/content.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        NavigationComponent,
        LoginComponent,
        ContentComponent
      ],
      imports: [
        SharedModule,
        CoreModule,
        RouterTestingModule.withRoutes(routes)
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
