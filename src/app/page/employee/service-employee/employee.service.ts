// src/app/services/employee.service.ts
import { Injectable } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import * as employees from '../../../assets/employees.json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getData(): Employee[] {
    return (employees as any).default; 
  }
}
