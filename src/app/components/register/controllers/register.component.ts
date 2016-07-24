import {Component} from "@angular/core";
import {User} from "./../../../models/user";

@Component({
    selector: "app-register",
    templateUrl: "./app/components/register/views/register.html"
})

export class RegisterComponent {

    public user: User;

    constructor() {
        this.user = new User();
    }
    onSubmit() {
        // ToDo Add Method for register User
    }
}