import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';

export const EMPLOYEE_ROUTES: Routes = [
  {
    path: '', component: EmployeeComponent, children: [
      { path: 'list', loadComponent: () => import('../employee/list-employee/list-employee.component').then(m => m.ListEmployeeComponent) },
      { path: 'add', loadComponent: () => import('../employee/add-employee/add-employee.component').then(m => m.AddEmployeeComponent) },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];