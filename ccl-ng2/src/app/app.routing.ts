import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/guard';

// Application Routes
export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        loadChildren: './modules/account/account.module#AccountModule'
    },
    {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
        data: {
            title: 'Home'
        },
        canActivate: [AuthGuard]
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