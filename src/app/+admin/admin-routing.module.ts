import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from '@app/+admin/admin.component';
import { FormViewComponent } from './components/form-view/form-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AdminComponent },
      { path: 'form/:id', component: FormViewComponent }
    ]),
  ]
})
export class AdminRoutingModule { }
