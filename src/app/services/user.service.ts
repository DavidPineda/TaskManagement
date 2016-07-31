import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {User} from "./../models/user";
import "rxjs/add/operator/toPromise";

@Injectable()
export class UserService {

    private userUrl: string = 'http://127.0.0.1:3000/api';
    private headers: any = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    // Autenticacion de usuario
    public login(user: User): any {
        let url = this.userUrl + "/login";
        return this.http
                   .post(url, JSON.stringify(user), {headers: this.headers})
                   .toPromise()
                   .then(response => response.json())
                   .catch(this.handleError);
    }

    // Registro de usuario 
    private signUp(user: User): any {
        let url = this.userUrl + "/signUp";
        return this.http
                   .post(url, JSON.stringify(user), {headers: this.headers})
                   .toPromise()
                   .then(res => res.json())
                   .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}