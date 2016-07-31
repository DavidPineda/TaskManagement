import {Component} from "@angular/core";
import {User} from "./../../../models/user";
import {UserService} from "./../../../services/user.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./app/components/login/views/login.html",
    providers: [UserService]
})

export class LoginComponent {

    public user: User;

    constructor(
        private userService: UserService,
        private router: Router
    ) {
        this.user = new User();
    }

    onSubmit() {
        this.userService
            .login(this.user)
            .then(res => {
                if (res.success) {
                    this.router.navigate(["dashboard"]);
                } else {
                    console.log("ERROR");
                }
            })
            .catch(error => { console.log(error); });
    }
}