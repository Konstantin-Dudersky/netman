import { Component, OnInit } from '@angular/core';
import { message } from '@tauri-apps/api/dialog';
import { Observable } from 'rxjs';
import { NetworkAdapter } from 'src/app/schemas/NetworkAdapter';
import { api } from '../../services/api';

@Component({
  selector: 'app-page-network-adapters-overview',
  templateUrl: './page-network-adapters-overview.component.html',
})
export class PageNetworkAdaptersOverviewComponent implements OnInit {

  nics$: Observable<NetworkAdapter[]>;

  constructor(
    private api: api,
  ) {
    this.nics$ = this.api.getNetworkAdapters();
  }

  ngOnInit(): void {
  }

  refresh() {
    this.nics$ = this.api.getNetworkAdapters();
  }

}
