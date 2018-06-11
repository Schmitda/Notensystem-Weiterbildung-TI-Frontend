import {Role} from './Role';
import {TitleEnum} from '../enums/TitleEnum';
import {BaseModel} from './BaseModel';

export class Employee extends BaseModel {
  private _id: number;
  private _email: string;
  private _title: TitleEnum;
  private _function: string;
  private _shorthandSymbol: string;
  private _roles: Array<Role>;
  private _firstName: string;
  private _lastName: string;

  get shorthandSymbol(): string {
    return this._shorthandSymbol;
  }

  set shorthandSymbol(value: string) {
    this._shorthandSymbol = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  constructor(value: any) {
    super(value);
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get title(): TitleEnum {
    return <TitleEnum>this._title;
  }

  set title(value: TitleEnum) {
    this._title = value;
  }

  get function (): string {
    return this._function;
  }

  set function (value: string) {
    this._function = value;
  }

  get roles(): Array<Role> {
    return this._roles;
  }

  set roles(value: Array<Role>) {
    this._roles = value;
  }
}
