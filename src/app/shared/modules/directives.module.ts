import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetDirective } from '../directive/let.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LetDirective,
    // LoadingDirective,
  ],
  exports: [
    LetDirective,
    // LoadingDirective,
  ],
})
export class DirectivesModule { }
