import { LoginComponent } from './../login/login.component';
import { AdminLayoutComponent } from '@app/layout/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full'
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            { path: 'admin', loadChildren: '../+admin/admin.module#AdminModule' },
        ]
    },
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'public', loadChildren: '../+public/public.module#PublicModule' }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
