import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Главная',
        icon: 'fa-solid fa-house',
        routerLink: '/page-main',
      },
      {
        label: 'Адаптеры',
        icon: 'fa-solid fa-ethernet',
        routerLink: '/page-network-adapters-overview',
      },
    ];
  }

}
