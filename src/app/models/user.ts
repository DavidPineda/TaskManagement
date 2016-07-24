export class User {

    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _phone: string;
    private _password: string;

    get firstName(): string {
        return this._firstName;
    }

    set firstName(_firstName: string) {
        this._firstName = _firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(_lastName: string) {
        this._lastName = _lastName;
    }

    get email(): string {
        return this._email;
    }

    set email(_email: string) {
        this._email = _email;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(_phone: string) {
        this._phone = _phone;
    }

    get password(): string {
        return this._password;
    }

    set password(_password: string) {
        this._password = _password;
    }

    constructor() {
        this._firstName = "";
        this._lastName = "";
        this._email = "";
        this._phone = "";
        this._password = "";
    }
}