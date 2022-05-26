import { AuthService } from "./auth/auth.service";
import { EmployeeService } from "./employee/employee.service";

export const services: any[] = [
  AuthService,
  EmployeeService
];

export * from "./auth/auth.service";
export * from "./employee/employee.service";
