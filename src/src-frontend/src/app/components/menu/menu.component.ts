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
      { label: 'Адаптеры', icon: 'fa-regular fa-forward' },
      {
        label: 'File',
        items: [
          { label: 'New', icon: 'pi pi-plus' },
          { label: 'Open', icon: 'pi pi-download' }
        ]
      },
      {
        label: 'Edit',
        items: [
          { label: 'Undo', icon: 'pi pi-refresh' },
          { label: 'Redo', icon: 'pi pi-repeat' }
        ]
      }];
  }

}
