import {Component} from "@angular/core";
import {User} from "./../../../models/user";
import {UserService} from "./../../../services/user.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: "app-register",
    templateUrl: "./app/components/register/views/register.html",
    providers: [UserService]
})

export class RegisterComponent {

    public user: User;

    constructor(
        private userService: UserService,
        private router: Router
    ) {
        this.user = new User();
    }

    onSubmit() {
        this.userService
            .signUp(this.user)
            .then(res => {
                // Se guarda el Token del usuario
                this.userService.saveJWT(res);
                this.router.navigate(["/dashboard"]);
            })
            .catch(error => { console.log(error); });
    }
}