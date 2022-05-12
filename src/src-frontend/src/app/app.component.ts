import { Component, OnInit } from '@angular/core';
import { NetworkAdapter } from './schemas/NetworkAdapter';
import { api } from './services/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    nics: NetworkAdapter[] = [];

    constructor(
        private api: api,
    ) { }

    ngOnInit(): void {
        this.api.getCarsSmall().then(
            nics => this.nics = nics
        )
    }

}
