import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { StyleSwitcherComponent } from './components/style-switcher/style-switcher.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
