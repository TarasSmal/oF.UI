import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';

export const loginRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  exports: [ ]
})

export class LoginRoutingModule { }
