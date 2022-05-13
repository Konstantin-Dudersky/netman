import { Component, OnInit } from '@angular/core';
import { NetworkAdapter } from 'src/app/schemas/NetworkAdapter';
import { api } from '../../services/api';

@Component({
  selector: 'app-page-network-adapters-overview',
  templateUrl: './page-network-adapters-overview.component.html',
  styleUrls: ['./page-network-adapters-overview.component.css']
})
export class PageNetworkAdaptersOverviewComponent implements OnInit {

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
