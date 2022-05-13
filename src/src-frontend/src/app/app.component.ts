import { Component, OnInit } from '@angular/core';
import { NetworkAdapter } from './schemas/NetworkAdapter';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    nics: NetworkAdapter[] = [];

    constructor(

    ) { }

    ngOnInit(): void {

    }

}
