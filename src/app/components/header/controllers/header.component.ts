import {Component} from "@angular/core";
import {NavbarComponent} from "./../../navbar/controllers/navbar.component";

@Component({
    selector: "app-header",
    templateUrl: "./app/components/header/views/header.html",
    directives: [NavbarComponent]
})

export class HeaderComponent {}