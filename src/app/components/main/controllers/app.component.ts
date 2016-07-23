import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HeaderComponent} from "./../../header/controllers/header.component";

@Component({
    selector: "app",
    templateUrl: "./app/components/main/views/app.html",
    directives: [HeaderComponent, ROUTER_DIRECTIVES]
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}