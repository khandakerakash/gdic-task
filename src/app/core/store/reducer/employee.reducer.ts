import { Action, createReducer, on } from "@ngrx/store";
import { EmployeeState, initialState } from "../../interfaces/employee.interface";
import { employeeFormValueChange } from "../action/employee.action";

const employeeReducer = createReducer(
  initialState,
  on(employeeFormValueChange, (state, { type, ...update }) => ({ ...state, ...update }))
);

export function reducer(state: EmployeeState | undefined, action: Action) {
  return employeeReducer(state, action);
}
