import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private dataUrl = 'assets/employees.json';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.dataUrl);
  }
}