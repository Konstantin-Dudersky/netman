import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMainComponent } from './components/page-main/page-main.component';
import { PageNetworkAdaptersOverviewComponent } from './components/page-network-adapters-overview/page-network-adapters-overview.component';

const routes: Routes = [
  { path: 'page-main', component: PageMainComponent },
  { path: 'page-network-adapters-overview', component: PageNetworkAdaptersOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
