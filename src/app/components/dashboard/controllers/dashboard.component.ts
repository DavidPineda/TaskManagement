import {Component, OnInit} from "@angular/core";
import {UserService} from "./../../../services/user.service";

@Component({
    selector: "app-dashboard",
    templateUrl: "./app/components/dashboard/views/dashboard.html",
    providers: [UserService]
})

export class DashBoardComponent implements OnInit {

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.getUser();
    }

    getUser() {
        this.userService.user()
                        .then(
                            res => console.log(res.message)
                        );
    }
}