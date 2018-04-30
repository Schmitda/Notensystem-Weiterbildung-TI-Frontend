import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './pages/login/login.component';
import {ContentComponent} from './pages/content/content.component';


export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [],
  },
  {
    path: 'content',
    component: ContentComponent,
    canActivate: [],
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: false});
