import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  constructor(private theme: ThemeService,
    @Inject(DOCUMENT) private document: Document) { }

  blueVioletClick() {
    // var cards = this.document.getElementsByClassName('card');

    // if (cards.length > 0) {
    //   var card = cards[0] as HTMLElement;
    //   card.style.backgroundColor = '#8A2BE2';
    // }
    // this.theme.loadTheme('blueviolet');
    this.theme.loadTheme('white');

  }

  darkGreenClick() {
    this.theme.loadTheme('light');
    // var cards = this.document.getElementsByClassName('card');

    // if (cards.length > 0) {
    //   var card = cards[0] as HTMLElement;
    //   card.style.backgroundColor = '#008000';
    // }
  }
}
