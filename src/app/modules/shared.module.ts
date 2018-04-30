import {NgModule} from '@angular/core';
import {GUIService} from '../services/gui.service';
import {MaterialModule} from '../base-modules/material.module';


@NgModule({
  imports: [
    MaterialModule,
  ],
  exports: [
    MaterialModule
  ],
  declarations: [],
  providers: [
    GUIService
  ],
})
export class SharedModule {
}
