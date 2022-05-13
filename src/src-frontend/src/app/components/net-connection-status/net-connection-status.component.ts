import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-net-connection-status',
  templateUrl: './net-connection-status.component.html',
  styleUrls: ['./net-connection-status.component.css']
})
export class NetConnectionStatusComponent implements OnInit, OnChanges {
  @Input()
  net_connection_status: number = 0;

  severity: string = 'info';
  value: string = '---';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    switch (this.net_connection_status) {
      case 0: // disconnected
        this.severity = 'warning';
        this.value = 'disconnected';
        break;

      case 1: // connecting
        this.severity = 'success';
        this.value = 'connecting';
        break;

      case 2: // connected
        this.severity = 'success';
        this.value = 'connected';
        break;

      case 3: // disconnecting
        this.severity = 'warning';
        this.value = 'disconnecting';
        break;

      case 4: // hardware not present
        this.severity = 'danger';
        this.value = 'hardware not present';
        break;

      case 5: // hardware disabled
        this.severity = 'danger';
        this.value = 'hardware disabled';
        break;

      case 6: // hardware malfunction
        this.severity = 'danger';
        this.value = 'hardware malfunction';
        break;

      case 7: // media disconnected
        this.severity = 'danger';
        this.value = 'media disconnected';
        break;

      case 8: // authenticating
        this.severity = 'danger';
        this.value = 'authenticating';
        break;

      case 9: // authentication succeeded
        this.severity = 'danger';
        this.value = 'authentication succeeded';
        break;

      case 10: // authentication failed
        this.severity = 'danger';
        this.value = 'authentication failed';
        break;

      case 11: // invalid address
        this.severity = 'danger';
        this.value = 'invalid address';
        break;

      case 12: // credentials required
        this.severity = 'danger';
        this.value = 'credentials required';
        break;

      default:
        this.severity = 'info'
        this.value = '---';
        break;
    }

  }

  ngOnInit() {
  }

}
