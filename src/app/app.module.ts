import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MaterialModule} from './base-modules/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoComponent} from './demo/demo.component';
import {HeaderComponent} from './elements/header/header.component';
import {NavigationComponent} from './elements/navigation/navigation.component';
import {LoginComponent} from './pages/login/login.component';
import {ContentComponent} from './pages/content/content.component';
import {routing} from './app.routing';
import {CoreModule} from './modules/core.module';
import {SharedModule} from './modules/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HeaderComponent,
    /*FooterComponent,*/
    NavigationComponent,
    LoginComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    CoreModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
