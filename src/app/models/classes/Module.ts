import {FieldOfStudy} from './FieldOfStudy';
import {Employee} from './Employee';
import {Course} from './Course';
import {ModuleStateEnum} from '../enums/ModuleStateEnum';
import {BaseModel} from './BaseModel';

export class Module extends BaseModel {
  private _id: number;
  private _fieldOfStud: FieldOfStudy;
  private _name: string;
  private _state: ModuleStateEnum;
  private _nameShort: string;
  private _description: string;
  private _startDate: Date;
  private _endDate: Date;
  private _head: Employee;
  private _assistant: Employee;
  private _courses: Course;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get fieldOfStud(): FieldOfStudy {
    return this._fieldOfStud;
  }

  set fieldOfStud(value: FieldOfStudy) {
    this._fieldOfStud = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get state(): ModuleStateEnum {
    return this._state;
  }

  set state(value: ModuleStateEnum) {
    this._state = value;
  }

  get nameShort(): string {
    return this._nameShort;
  }

  set nameShort(value: string) {
    this._nameShort = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
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

  get head(): Employee {
    return this._head;
  }

  set head(value: Employee) {
    this._head = value;
  }

  get assistant(): Employee {
    return this._assistant;
  }

  set assistant(value: Employee) {
    this._assistant = value;
  }

  get courses(): Course {
    return this._courses;
  }

  set courses(value: Course) {
    this._courses = value;
  }
}
