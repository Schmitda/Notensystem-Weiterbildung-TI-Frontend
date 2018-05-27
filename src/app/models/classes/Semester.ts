import {BaseModel} from './BaseModel';

export class Semester extends BaseModel {
  private _id: number;
  private _name: string;
  private _diplCelebDate: Date;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get diplCelebDate(): Date {
    return this._diplCelebDate;
  }

  set diplCelebDate(value: Date) {
    this._diplCelebDate = value;
  }
}
