import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormViewComponent } from './components/form-view/form-view.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '@app/shared';
import { MatListModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    AdminComponent,
    FormViewComponent
  ],
  imports: [
  MatListModule,
  MatTableModule,


    CommonModule,
    // SharedModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
