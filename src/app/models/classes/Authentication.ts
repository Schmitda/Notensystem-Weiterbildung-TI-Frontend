import {Module} from './Module';
import {Course} from './Course';
import {Student} from './Student';
import {BaseModel} from './BaseModel';

export class Authentication extends BaseModel {
  private _id: number;
  private _accessCode: string;
  private _module: Module;
  private _course: Course;
  private _student: Student;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get accessCode(): string {
    return this._accessCode;
  }

  set accessCode(value: string) {
    this._accessCode = value;
  }

  get module(): Module {
    return this._module;
  }

  set module(value: Module) {
    this._module = value;
  }

  get course(): Course {
    return this._course;
  }

  set course(value: Course) {
    this._course = value;
  }

  get student(): Student {
    return this._student;
  }

  set student(value: Student) {
    this._student = value;
  }
}
