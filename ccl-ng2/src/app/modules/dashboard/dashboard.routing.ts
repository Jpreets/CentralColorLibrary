import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardLayoutComponent } from './layouts';

const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        component: DashboardLayoutComponent,
        // children: [
        //     {
        //         path: '',
        //         redirectTo: '',
        //         pathMatch: 'full'
        //     },
        // ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

export const dashboardRouteModule: ModuleWithProviders = RouterModule.forChild(DASHBOARD_ROUTES);