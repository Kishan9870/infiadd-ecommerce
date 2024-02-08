import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { StyleSwitcherComponent } from './components/style-switcher/style-switcher.component';
import { LandingComponent } from './pages/website/landing/landing.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'login',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        redirectTo: 'landing-page',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'landing-page',
        component: LandingComponent
    }
];
