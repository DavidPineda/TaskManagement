import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {User} from "./../models/user";
import "rxjs/add/operator/toPromise";

@Injectable()
export class UserService {

    private userUrl: string = 'http://127.0.0.1:3000/api/users';

    constructor(private http: Http) {}

    public save(user: User): Promise<User> {
        return this.post(user);
    }

    // Add new User
    private post(user: User): Promise<User> {
        let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
        return this.http
                   .post(this.userUrl, JSON.stringify(user), {headers: headers})
                   .toPromise()
                   .then(res => res.json())
                   .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}