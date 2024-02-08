import { Component } from '@angular/core';
import { SideNavbarComponent } from '../../../components/side-navbar/side-navbar.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [SideNavbarComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
