import {AppComponent} from "./components/main/controllers/app.component";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {APP_ROUTER_PROVIDERS} from "./routes/route";

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS]);