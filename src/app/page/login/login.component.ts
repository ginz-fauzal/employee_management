import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  login() {
    if (this.loginService.login(this.username, this.password)) {
      this.router.navigate(['/employee/list']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
