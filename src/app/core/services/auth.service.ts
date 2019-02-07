import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ApiService, JwtService } from '@app/core';
import { LoginModel } from '../models/login.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    /**
     * Jobs sub path
     * @type {string}
     */
    private path = 'auth';

    constructor(
        private api: ApiService,
        private jwtService: JwtService,
        private httpClient: HttpClient,
    ) { }

    login(model: LoginModel) {
        return this.api.post(`${this.path}/login`, model)
            .pipe(map(authData => {
                debugger;

                this.jwtService.saveToken('');
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
