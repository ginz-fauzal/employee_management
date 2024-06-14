import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private validCredentials = {
    username: 'admin',
    password: 'admin123'
  };

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === this.validCredentials.username && password === this.validCredentials.password) {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    if(localStorage.getItem('isLoggedIn')){
      return localStorage.getItem('isLoggedIn') === 'true'
    }else{
      return false
    }
  }

}
