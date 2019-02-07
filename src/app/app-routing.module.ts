import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutModule } from '@app/layout/layout.module';

@NgModule({
  imports: [RouterModule.forRoot([], { preloadingStrategy: PreloadAllModules }), LayoutModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
