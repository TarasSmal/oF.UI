import { SharedModule } from '@app/shared';
import { AdminLayoutComponent } from '@app/layout/admin-layout/admin-layout.component.1';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutRoutingModule } from '@app/layout/layout-routing.module';
import { AdminNavComponent } from '@app/layout/admin-layout/admin-nav/admin-nav';

@NgModule({
    declarations: [AdminLayoutComponent, AdminNavComponent],
    imports: [
        LayoutRoutingModule,
        SharedModule
    ],
    exports: [LayoutRoutingModule]
})
export class LayoutModule { }
