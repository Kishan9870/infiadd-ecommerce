import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StyleSwitcherComponent } from '../../../components/style-switcher/style-switcher.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, StyleSwitcherComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  containerActive: boolean = false;

  toggleContainer() {
    this.containerActive = !this.containerActive;
  }
}
