import {provideRouter, RouterConfig} from "@angular/router";
import {LoginComponent} from "./../components/login/controllers/login.component";
import {RegisterComponent} from "./../components/register/controllers/register.component";

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
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];