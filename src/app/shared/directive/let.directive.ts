import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

interface LetContext<T> {
  appLet: T;
}

/**
 * Allows you to create arbitrary template variables outside of ngIf.
 * Example usage:
 * <ng-container *ngLet="data$ | async as data">
 */
@Directive({
  selector: '[appLet]',
})
export class LetDirective<T> {
  private context: LetContext<T> = { appLet: null };

  constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<LetContext<T>>) {
    viewContainer.createEmbeddedView(templateRef, this.context);
  }

  @Input()
  set appLet(value: T) {
    this.context.appLet = value;
  }
}
