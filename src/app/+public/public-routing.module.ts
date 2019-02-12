import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from '@app/+admin/admin.component';
import { PublicComponent } from './public.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PublicComponent },
    ]),
  ],
  exports: [
    RouterModule,
  ]
})
export class PublicRoutingModule { }
