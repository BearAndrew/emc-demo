import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { StrategyComponent } from './page/strategy/strategy.component';
import { ServicesComponent } from './page/services/services.component';
import { ContactComponent } from './page/contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'strategy', pathMatch: 'full', component: StrategyComponent },
  { path: 'services', pathMatch: 'full', component: ServicesComponent },
  { path: 'contact', pathMatch: 'full', component: ContactComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  // scrollPositionRestoration : scroll to top
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
