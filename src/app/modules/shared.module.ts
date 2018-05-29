import {NgModule} from '@angular/core';
import {MaterialModule} from '../base-modules/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [],
})
export class SharedModule {
}
