import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@app/layout/layout.module';

@NgModule({
  imports: [RouterModule.forRoot([]), LayoutModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
