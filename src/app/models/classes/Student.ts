import {Rating} from './Rating';
import {BaseModel} from './BaseModel';

export class Student extends BaseModel {
  private _id: number;
  private _ratings: Array<Rating>;
  private _email: string;
  private _birthdate: Date;
  private _placeOfOrigin: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get ratings(): Array<Rating> {
    return this._ratings;
  }

  set ratings(value: Array<Rating>) {
    this._ratings = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get birthdate(): Date {
    return this._birthdate;
  }

  set birthdate(value: Date) {
    this._birthdate = value;
  }

  get placeOfOrigin(): string {
    return this._placeOfOrigin;
  }

  set placeOfOrigin(value: string) {
    this._placeOfOrigin = value;
  }
}
