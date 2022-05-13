import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';


// components
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageMainComponent } from './components/page-main/page-main.component';
import { PageNetworkAdaptersOverviewComponent } from './components/page-network-adapters-overview/page-network-adapters-overview.component';


// primeng
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { NetConnectionStatusComponent } from './components/net-connection-status/net-connection-status.component';
import { PageHostsComponent } from './components/page-hosts/page-hosts.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NetConnectionStatusComponent,
    PageMainComponent,
    PageHostsComponent,
    PageNetworkAdaptersOverviewComponent,
  ],
  imports: [
    // primeng
    ButtonModule,
    ConfirmDialogModule,
    MenubarModule,
    TableModule,
    TagModule,
    ToolbarModule,
    TooltipModule,
    // common
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
