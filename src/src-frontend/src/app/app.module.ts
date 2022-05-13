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


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageMainComponent,
    PageNetworkAdaptersOverviewComponent,
  ],
  imports: [
    // primeng
    ButtonModule,
    ConfirmDialogModule,
    MenubarModule,
    TableModule,
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
