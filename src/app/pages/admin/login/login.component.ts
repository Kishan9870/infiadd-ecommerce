import { Component, Inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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

  constructor(private authService: AuthService, private router: Router) { }

  toggleContainer() {
    this.containerActive = !this.containerActive;
  }

  async login(email: string, password: string) {
    debugger
    try {
      const success = await this.authService.login(email, password);
      if (success) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('email', email); // Optionally, store email
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid credentials. Please check your email and password.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  }

  signup(name: string, email: string, password: string) {
    debugger
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    const userData = {
      name: name,
      email: email,
      password: password
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    console.log("Signup successful!");
  }
}
