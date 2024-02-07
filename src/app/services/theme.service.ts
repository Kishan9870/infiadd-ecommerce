import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  loadTheme(themeName: string) {
    debugger
    const head = document.getElementsByTagName('head')[0];
    const themeSrc = document.getElementById('client-theme') as HTMLLinkElement;

    if (themeSrc) {
      // Update the href attribute to point to the compiled CSS file
      themeSrc.href = `${themeName}.css`;
    } else {
      const style = document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      // Point to the compiled CSS file
      style.href = `${themeName}.css`;

      // Append the link element to the head
      head.appendChild(style);
    }
  }
}
