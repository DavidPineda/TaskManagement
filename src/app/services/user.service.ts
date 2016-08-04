import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {User} from "./../models/user";
import {contentHeaders} from "./../components/common/headers";
import "rxjs/add/operator/toPromise";


@Injectable()
export class UserService {

    private userUrl: string = 'http://127.0.0.1:3000/api';

    constructor(private http: Http) {}

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
                   .then(res => res.json())
                   .catch(this.handleError);
    }

    // Guarda el Token de Usuario en el localStorage
    public saveJWT(res: any) {
        localStorage.setItem('auth_token', res.token);
    }

    // Elimina el Token de Usuario en el localStorage
    public logout() {
        localStorage.removeItem('auth_token');
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}