import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService, JwtService } from '@app/core';
import { Observable } from 'rxjs';
import { Form } from '../models/form.model';

@Injectable({ providedIn: 'root' })
export class FormService {
    /**
     * Jobs sub path
     * @type {string}
     */
    private path = 'form';

    constructor(
        private api: ApiService,
        private jwtService: JwtService,
        private httpClient: HttpClient,
    ) { }

    get(id: number): Observable<Form>;
    get(): Observable<Form[]>;

    get(id?: number): Observable<Form[]> | Observable<Form> {
        if (id) {
            return this.api.get(`${this.path}/${id}`);
        }

        return this.api.get(`${this.path}`);
    }
}
