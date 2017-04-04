import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Application internal imports
import { LoginComponent } from './components/login';

// Application Routes
export const LOGIN_ROUTES: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

/*
* Export the configured routing module so that it can be bootstrapped in the account module
*/
export const LoginRoutingModule: ModuleWithProviders = RouterModule.forChild(LOGIN_ROUTES);