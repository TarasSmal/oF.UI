import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormViewComponent } from './components/form-view/form-view.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '@app/shared';
import { MatListModule, MatTableModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons } from '@clr/icons';

@NgModule({
  declarations: [
    AdminComponent,
    FormViewComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    MatListModule,

    // SharedModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
