import {Employee} from './Employee';
import {RoleTypeEnum} from '../enums/RoleTypeEnum';
import {BaseModel} from './BaseModel';

export class Role extends BaseModel {
  private _id: number;
  private _type: RoleTypeEnum;
  private _employees: Array<Employee>;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get type(): RoleTypeEnum {
    return this._type;
  }

  set type(value: RoleTypeEnum) {
    this._type = value;
  }

  get employees(): Array<Employee> {
    return this._employees;
  }

  set employees(value: Array<Employee>) {
    this._employees = value;
  }
}
