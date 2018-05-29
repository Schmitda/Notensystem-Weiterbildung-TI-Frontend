import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

@Component({
  selector: 'bfh-search-employees',
  templateUrl: './search-employees.component.html',
  styleUrls: ['./search-employees.component.scss']
})
export class SearchEmployeesComponent implements OnInit {
  public formControl: FormControl = new FormControl;
  @Output() requestChanged: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.formControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(val=>{this.requestChanged.emit(val)});
  }

  ngOnInit() {
  }

}
