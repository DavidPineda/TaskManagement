import {Component} from "@angular/core";
import {User} from "./../../../models/user";
import {UserService} from "./../../../services/user.service";

@Component({
    selector: "app-register",
    templateUrl: "./app/components/register/views/register.html",
    providers: [UserService]
})

export class RegisterComponent {

    public user: User;

    constructor(
        private userService: UserService
    ) {
        this.user = new User();
    }

    onSubmit() {
        this.userService
            .save(this.user)
            .then(res => {
                console.log(res as User);
            })
            .catch(error => { console.log(error); });
    }
}