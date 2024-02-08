import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StyleSwitcherComponent } from '../../../components/style-switcher/style-switcher.component';
import { AuthService } from '../../../core/authentication/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, StyleSwitcherComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  containerActive: boolean = false;

  constructor(private authService: AuthService) { }

  toggleContainer() {
    this.containerActive = !this.containerActive;
  }

  async login(email: string, password: string) {
    try {
      const success = await this.authService.login(email, password);
      if (success) {
        console.log('Login successful');
      } else {
        console.error('Invalid credentials');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  }
}
