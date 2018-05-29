import {Course} from './Course';
import {NotificationStateEnum} from '../enums/NotificationStateEnum';
import {BaseModel} from './BaseModel';

export class Notification extends BaseModel {
  private _id: number;
  private _dueDate: Date;
  private _course: Course;
  private _state: NotificationStateEnum;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get dueDate(): Date {
    return this._dueDate;
  }

  set dueDate(value: Date) {
    this._dueDate = value;
  }

  get course(): Course {
    return this._course;
  }

  set course(value: Course) {
    this._course = value;
  }

  get state(): NotificationStateEnum {
    return <NotificationStateEnum>this._state;
  }

  set state(value: NotificationStateEnum) {
    this._state = value;
  }
}
