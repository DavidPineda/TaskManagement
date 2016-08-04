import {provideRouter, RouterConfig} from "@angular/router";
import {AuthGuard} from "./../services/auth.service";
import {LoginComponent} from "./../components/login/controllers/login.component";
import {RegisterComponent} from "./../components/register/controllers/register.component";
import {DashBoardComponent} from "./../components/dashboard/controllers/dashboard.component";

const routes: RouterConfig = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashBoardComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '*',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];