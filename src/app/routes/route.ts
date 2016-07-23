import {provideRouter, RouterConfig} from "@angular/router";
import {LoginComponent} from "./../components/login/controllers/login.component";

const routes: RouterConfig = [
    {
        path: 'login',
        component: LoginComponent
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