import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from '@app/+admin/admin.component';

@NgModule({
    declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AdminComponent },
    ]),
  ]
})
export class AdminRoutingModule { }
