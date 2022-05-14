import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Host } from '../schemas/host';
import { NetworkAdapter } from '../schemas/NetworkAdapter';

@Injectable({
    providedIn: 'root'
})
export class api {
    IP = 'http://192.168.100.220:8000'

    constructor(private http: HttpClient) { }

    getNetworkAdapters() {
        return this.http.get<NetworkAdapter[]>(
            `${this.IP}/api/network-adapters`
        );
    }

    getHosts() {
        return this.http.get<Host[]>(`${this.IP}/api/hosts`);
    }
}
