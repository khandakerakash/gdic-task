import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { empty, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EmployeeResModel, GeneralResModel } from '../../models/response';
import { EmployeeService } from '../../services';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolver implements Resolve<GeneralResModel<EmployeeResModel[]>> {

  constructor(
    private _employeeService: EmployeeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GeneralResModel<EmployeeResModel[]>> {
    return this._employeeService.getEmployeeList().pipe(
      map(res => res),
      catchError(error => {
        return empty();
      })
    );
  }
}


