import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '',pathMatch: 'full',redirectTo: 'login'},
    { path: 'login', component: LoginComponent },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }