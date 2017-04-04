import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Application Routes
export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        loadChildren: './modules/account/login'
    },
    {
        path: 'dashboard',
        loadChildren: './modules/account/dashboard/',
        data: {
            title: 'Home'
        },
        //canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];

/*
* Export the configured routing module so that it can be bootstrapped in the app module
*/
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);