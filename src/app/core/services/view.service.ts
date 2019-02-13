import { Injectable } from '@angular/core';
import { ApiService } from '@app/core';
import { Observable } from 'rxjs';
import { Form } from '../models/form.model';

@Injectable({ providedIn: 'root' })
export class ViewService {

    private path = 'view';

    constructor(
        private api: ApiService,
    ) { }

    get(id: number): Observable<any>;
    get(): Observable<any[]>;

    get(id?: number): Observable<any[]> | Observable<any> {
        if (id) {
            return this.api.get(`${this.path}/${id}`);
        }

        return this.api.get(`${this.path}`);
    }

    getData(id) {
        return this.api.get(`${this.path}/get-data/${id}`);
    }
}
