import {Semester} from './Semester';
import {FieldOfStudy} from './FieldOfStudy';
import {Employee} from './Employee';
import {BaseModel} from './BaseModel';

export class Signatories extends BaseModel {
  private _id: number;
  private _semester: Semester;
  private _fieldOfStudy: FieldOfStudy;
  private _signatoryCourseAssessment: Employee;
  private _signatoryCertificate1: Employee;
  private _signatoryCertificate2: Employee;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get semester(): Semester {
    return this._semester;
  }

  set semester(value: Semester) {
    this._semester = value;
  }

  get fieldOfStudy(): FieldOfStudy {
    return this._fieldOfStudy;
  }

  set fieldOfStudy(value: FieldOfStudy) {
    this._fieldOfStudy = value;
  }

  get signatoryCourseAssessment(): Employee {
    return this._signatoryCourseAssessment;
  }

  set signatoryCourseAssessment(value: Employee) {
    this._signatoryCourseAssessment = value;
  }

  get signatoryCertificate1(): Employee {
    return this._signatoryCertificate1;
  }

  set signatoryCertificate1(value: Employee) {
    this._signatoryCertificate1 = value;
  }

  get signatoryCertificate2(): Employee {
    return this._signatoryCertificate2;
  }

  set signatoryCertificate2(value: Employee) {
    this._signatoryCertificate2 = value;
  }
}
