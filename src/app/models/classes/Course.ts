import {Rating} from './Rating';
import {Module} from './Module';
import {Employee} from './Employee';
import {BaseModel} from './BaseModel';

export class Course extends BaseModel {
  private _id: number;
  private _module: Module;
  private _ratings: Array<Rating>;
  private _name: string;
  private _nameShort: string;
  private _startDate: Date;
  private _endDate: Date;
  private _weight: number;
  private _professor: Employee;




  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get module(): Module {
    return this._module;
  }

  set module(value: Module) {
    this._module = value;
  }

  get ratings(): Array<Rating> {
    return this._ratings;
  }

  set ratings(value: Array<Rating>) {
    this._ratings = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get nameShort(): string {
    return this._nameShort;
  }

  set nameShort(value: string) {
    this._nameShort = value;
  }

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }

  get professor(): Employee {
    return this._professor;
  }

  set professor(value: Employee) {
    this._professor = value;
  }
}
