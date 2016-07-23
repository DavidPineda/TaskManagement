import {Component, OnInit} from "@angular/core";
import {NavbarComponent} from "./../../navbar/controllers/navbar.component";

@Component({
    selector: "app",
    templateUrl: "./app/main/views/app.html",
    directives: [NavbarComponent],
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}