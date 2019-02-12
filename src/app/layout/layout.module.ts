import { SharedModule } from '@app/shared';
import { AdminLayoutComponent } from '@app/layout/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutRoutingModule } from '@app/layout/layout-routing.module';
import { AdminNavComponent } from '@app/layout/admin-layout/admin-nav/admin-nav';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

@NgModule({
    declarations: [
        AdminLayoutComponent,
        AdminNavComponent,
        PublicLayoutComponent
    ],
    imports: [
        LayoutRoutingModule,
        SharedModule
    ],
    exports: [LayoutRoutingModule]
})
export class LayoutModule { }
