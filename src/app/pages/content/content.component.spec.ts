import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContentComponent} from './content.component';
import {SharedModule} from '../../modules/shared.module';
import {CoreModule} from '../../modules/core.module';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentComponent],
      imports: [
        SharedModule,
        CoreModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
  });

  it('should create', () => {

  });
});
