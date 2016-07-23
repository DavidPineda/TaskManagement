import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: "app-navbar",
    templateUrl: "./app/components/navbar/views/navbar.html",
    directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {}