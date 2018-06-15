import {NgModule} from '@angular/core';
import {MaterialModule} from '../base-modules/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EnumToArrayPipe} from '../enum-to-array.pipe';


@NgModule({
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    EnumToArrayPipe
  ],
  declarations: [
    EnumToArrayPipe
  ],
  providers: [],
})
export class SharedModule {
}
