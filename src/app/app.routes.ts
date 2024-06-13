import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './page/login/login.component';
import { AuthGuard } from './guard/auth.guard';


export const routes: Routes = [
    {path: '',pathMatch: 'full',redirectTo: 'login'},
    { path: 'employee', loadChildren: () => import('./page/employee/employee.route').then(m => m.EMPLOYEE_ROUTES)},

    // { path: 'employee', loadChildren: () => import('./page/employee/employee.component').then(m => m.EmployeeComponent), canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }