import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Host } from 'src/app/schemas/host';
import { api } from 'src/app/services/api';

@Component({
  selector: 'app-page-hosts',
  templateUrl: './page-hosts.component.html',
})
export class PageHostsComponent implements OnInit {

  hosts$: Observable<Host[]>;

  constructor(private api: api) { 
    this.hosts$ = this.api.getHosts();
  }

  ngOnInit() {
  }

}
