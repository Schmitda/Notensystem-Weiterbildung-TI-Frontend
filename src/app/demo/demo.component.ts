import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  public form: FormGroup;
  public isLinear = false;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;


  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      firstname: [],
      lastname: [],
      age: [null, [Validators.min(18), Validators.max(150)]],
      street: [],
      streetNr: [],
      country: [null],
      gender: [null],
      birthdate: [null],
      income: [null],
      agb: [],
    });
  }


  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
