// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Internal Routing
import { dashboardRouteModule } from './dashboard.routing';

// Application internal
import { DashboardLayoutComponent } from './layouts';
import { NavBarComponent } from "app/modules/dashboard";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        dashboardRouteModule
    ],
    declarations: [DashboardLayoutComponent, NavBarComponent],
    providers: [],
})
export class DashBoardModule { }
