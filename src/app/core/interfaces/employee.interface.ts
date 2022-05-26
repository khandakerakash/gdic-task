// import { NgbDateStruct, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export interface EmployeeState {
  firstName:       string;
  lastName:        string;
  //dateOfBirthNgb:  NgbDateStruct;
  dateOfBirth:     string;
  phoneNo:         string;
  gender:          string;
  skillName:       string;
  experienceInYear:string;
  skillLevel:      string;
}

export const initialState: EmployeeState = {
  firstName:        '',
  lastName:         '',
  //dateOfBirthNgb:   NgbDateStruct = {year: datetime.year(), month: datetime.month(), day: datetime.day()},
  dateOfBirth:      '',
  phoneNo:          '',
  gender:           '',
  skillName:        '',
  experienceInYear: '',
  skillLevel:       ''

};

module datetime  {

  let dateTime = new Date();
  export function year() {
      return dateTime.getFullYear();
  }
  export function month() {
      return dateTime.getMonth()+1;
  }
  export function day() {
      return dateTime.getDate();
  }
}
