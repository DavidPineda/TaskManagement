import {AppComponent} from "./components/main/controllers/app.component";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {HTTP_PROVIDERS} from "@angular/http";
import {APP_ROUTER_PROVIDERS} from "./routes/route";
import {AUTH_PROVIDERS} from "angular2-jwt";
import {AuthGuard} from "./services/auth.service";

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, HTTP_PROVIDERS, AUTH_PROVIDERS, AuthGuard]);