import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { NetworkAdapter } from '../schemas/NetworkAdapter';

@Injectable({
    providedIn: 'root'
  })
export class api {
    constructor(private http: HttpClient) { }

    getCarsSmall() {
        return this.http.get('http://127.0.0.1:8000')
            .toPromise()
            .then(res => <NetworkAdapter[]>res)
            .then(data => { return data; });
    }
}
