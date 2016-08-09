import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {contentHeaders} from "./../components/common/headers";
import {AuthHttp} from "angular2-jwt";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {User} from "./../models/user";

@Injectable()
export class UserService {

    private userUrl: string = 'http://127.0.0.1:3000/api';

    constructor(private http: Http, private authHttp: AuthHttp) {}

    // Autenticacion de usuario
    public login(user: User): Promise<any> {
        let url = this.userUrl + "/login";
        return this.http
                   .post(url, JSON.stringify(user), {headers: contentHeaders})
                   .toPromise()
                   .then(res => res.json())
                   .catch(this.handleError);
    }

    // Registro de usuario 
    public signUp(user: User): Promise<any> {
        let url = this.userUrl + "/signUp";
        return this.http
                   .post(url, JSON.stringify(user), {headers: contentHeaders})
                   .toPromise()
                   .then(res => res)
                   .catch(this.handleError);
    }

    public user(): Promise<any> {
        let url = this.userUrl + "/user";
        return this.authHttp
                   .get(url)
                   .toPromise()
                   .then(res => res.json())
                   .catch(this.handleError);
    }

    // Guarda el Token de Usuario en el localStorage
    public saveJWT(res: any) {
        localStorage.setItem('id_token', res.token);
    }

    // Elimina el Token de Usuario en el localStorage
    public logout() {
        localStorage.removeItem('id_token');
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}