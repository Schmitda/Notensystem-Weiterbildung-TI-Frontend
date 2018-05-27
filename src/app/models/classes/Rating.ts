import {Course} from './Course';
import {Student} from './Student';
import {BaseModel} from './BaseModel';

export class Rating extends BaseModel {
  private _id: number;
  private _course: Course;
  private _student: Student;
  private _successRate: number;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
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

  get successRate(): number {
    return this._successRate;
  }

  set successRate(value: number) {
    this._successRate = value;
  }
}
