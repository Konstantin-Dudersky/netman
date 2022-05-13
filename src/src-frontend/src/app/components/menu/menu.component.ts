import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
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
        title: 'netman - Адаптеры',
        icon: 'fa-solid fa-ethernet',
        routerLink: '/page-network-adapters-overview',
      },
      {
        label: 'Файл hosts',
        title: 'netman - hosts',
        icon: 'fa-solid fa-file',
        routerLink: '/hosts',
      },
    ];
  }

}
