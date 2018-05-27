export class BaseModel {
  constructor(value?: any) {
    Object.assign(<any>this, value);
  }
}
