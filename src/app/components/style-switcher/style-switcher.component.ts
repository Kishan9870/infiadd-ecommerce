import { Component } from '@angular/core';

@Component({
  selector: 'app-style-switcher',
  standalone: true,
  imports: [],
  templateUrl: './style-switcher.component.html',
  styleUrl: './style-switcher.component.scss'
})
export class StyleSwitcherComponent {
  public isDefaultTheme = true;
  constructor() { }

  changeTheme(event: any) {
    const themeValue = event.target.value;
    if (themeValue === "default") {
      document.body.setAttribute(
        'data-theme',
        'default'
      );
    } else if (themeValue === "dark") {
      document.body.setAttribute(
        'data-theme',
        'dark'
      );
    } else if (themeValue === "yellow") {
      document.body.setAttribute(
        'data-theme',
        'yellow'
      );
    }
  }
}
