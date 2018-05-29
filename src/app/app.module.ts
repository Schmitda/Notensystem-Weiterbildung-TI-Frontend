import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoComponent} from './demo/demo.component';
import {HeaderComponent} from './elements/header/header.component';
import {NavigationComponent} from './elements/navigation/navigation.component';
import {LoginComponent} from './pages/login/login.component';
import {ContentComponent} from './pages/content/content.component';
import {CoreModule} from './modules/core.module';
import {SharedModule} from './modules/shared.module';
import {RouterModule} from '@angular/router';
import {routes} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HeaderComponent,
    NavigationComponent,
    LoginComponent,
    ContentComponent,
  ],
  imports: [
    CoreModule,
    BrowserAnimationsModule,
    SharedModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
